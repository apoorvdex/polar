declare var window: any;

enum Platform {
    WEB = 'WEB',
    IOS = 'IOS',
    ANDROID = 'ANDROID'
}

export enum AnnotationType {
    SAVE_AS_PROVISION = 'SAVE_AS_PROVISION',
    BOOKMARK = 'BOOKMARK',
    HIGHLIGHT = 'HIGHLIGHT'
}

export class InteleasePdfReader {
    private platform: Platform = Platform.WEB;
    private static instance: InteleasePdfReader;
    private pdfReaderMethodsMap = {};
    private provisionList: any[] = [];
    public annotations: any = null;
    private annotationDeleteFn: any;
    private annotationRefFn: any;
    private areaHighlightDeleteFn: any;
    public docMeta: any;
    private selectedProvision: any;
    private bookMarkText: any;
    public annotationType: AnnotationType = AnnotationType.HIGHLIGHT;

    private constructor() {

    }

    public static getInstance() {
        if (!InteleasePdfReader.instance) {
            InteleasePdfReader.instance = new InteleasePdfReader();
        }
        return InteleasePdfReader.instance;
    }

    public annotationDeleted(annotationId: string, annotation: any) {
        this.onDeleteAnnotation(annotation);
        this.broadCastToPlatform('onAnnotationDeleted', {annotationId, annotation});
    }

    public getDocumentMeta() {
        if (this.docMeta) {
            return JSON.parse(this.docMeta);
        }
    }

    public onDeleteAnnotation(annotation: any) {
        // if (annotation.annotationType === "TEXT_HIGHLIGHT") {
        this.annotationDeleteFn(annotation);
        // }
    }

    public registerAnnotationDeleteFn(fn: any) {
        this.annotationDeleteFn = fn;
    }

    public registerGettingAnnotationRefByIdFn(fn: any) {
        this.annotationRefFn = fn;
    }

    public getAnnotationRefById(annotationId: any) {
        return this.annotationRefFn(annotationId);
    }

    public updateAnnotationData(pageNum: any, annotationId: any, data: any) {
        const docMeta = {...this.getDocumentMeta()};
        docMeta.pageMetas[pageNum].textHighlights[annotationId].itlsData = data;
        this.docMeta = JSON.stringify(docMeta);
        this.broadCastToPlatform('onDocMetaUpdated', this.docMeta);
    }

    public onDeleteAreaHighlight(areaHighlight: any) {
        this.areaHighlightDeleteFn(areaHighlight);
    }

    public registerAreaHighlightDeleteFn(fn: any) {
        this.areaHighlightDeleteFn = fn;
    }


    public setProvisionList(provisionList: any[]) {
        this.provisionList = provisionList;
    }

    public updateDocMeta(docMeta: any) {
        this.docMeta = docMeta;
        this.broadCastToPlatform('onDocMetaUpdated', this.docMeta);
    }

    public setSelectedProvision(provision: any) {
        this.selectedProvision = provision;
    }

    public setBookMarkText(bookMarkText: any) {
        this.bookMarkText = bookMarkText;
    }


    public getProvisionList() {
        return this.provisionList;
    }

    public setAnnotations(annotations: any) {
        this.annotations = annotations;
        if (!this.docMeta) {
            this.docMeta = this.annotations;
        }
    }

    public find(term: string) {
        window.PDFViewerApplication.findController.executeCommand('find', {
            caseSensitive: false,
            findPrevious: undefined,
            highlightAll: true,
            phraseSearch: true,
            query: term.toString()
        });
    }

    public onNewAnnotation(annotations: any) {
        this.setAnnotations(annotations);
        if (this.annotationType === AnnotationType.SAVE_AS_PROVISION) {
            const extraData = {type: AnnotationType.SAVE_AS_PROVISION, data: this.selectedProvision};
            this.broadCastToPlatform('onNewAnnotation', annotations, extraData);
        } else if (this.annotationType === AnnotationType.BOOKMARK) {
            const extraData = {type: AnnotationType.BOOKMARK, data: this.bookMarkText};
            this.broadCastToPlatform('onNewAnnotation', annotations, extraData);
        } else {
            this.broadCastToPlatform('onNewAnnotation', annotations);
        }
    }

    public getAnnotationById(pageNum: number, annotationId: string): any {
        return this.getDocumentMeta().pageMetas[pageNum].textHighlights[annotationId];
    }

    private reset() {
        this.annotations = AnnotationType.HIGHLIGHT;
        this.selectedProvision = undefined;
        this.bookMarkText = undefined;
    }


    public broadCastToPlatform(methodName: string, data?: any, extraParams?: any) {
        switch (methodName) {
            case 'onPDFReaderIsReady':
                this.broadCastToWebPlatform(methodName, data);
                break;
            case 'onNewAnnotation':
                this.broadCastToWebPlatform(methodName, data, extraParams);
                break;
            case 'onDocMetaUpdated':
                this.broadCastToWebPlatform(methodName, data);
                break;
            case 'onAnnotationDeleted':
                this.broadCastToWebPlatform(methodName, data);
                break;
        }
    }

    public broadCastToWebPlatform(type: string, data: any = {}, extraParams?: any) {
        if ((window as any)['parent'] && (window as any)['parent']['InteleasePDFReader'][type] && typeof (window as any)['parent']['InteleasePDFReader'][type] === "function") {
            (window as any)['parent']['InteleasePDFReader'][type](data, extraParams);
        }
    }


    public init() {
        setTimeout(() => {
            if (!(window as any)['InteleasePDFReader']) {
                (window as any)['InteleasePDFReader'] = {};
            }
            (window as any)['InteleasePDFReader']['setAnnotations'] = (annotations: any) => {
                this.setAnnotations(annotations);
            };

            (window as any)['InteleasePDFReader']['setProvisionList'] = (provisionList: any) => {
                this.setProvisionList(provisionList);
            };

            (window as any)['InteleasePDFReader']['deleteAnnotation'] = (annotation: any) => {
                this.onDeleteAnnotation(annotation);
            };

            (window as any)['InteleasePDFReader']['find'] = (term: string) => {
                this.find(term);
            };
            this.broadCastToPlatform('onPDFReaderIsReady');
        }, 2);
    }
}