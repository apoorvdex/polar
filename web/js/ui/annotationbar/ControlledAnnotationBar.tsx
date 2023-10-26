import * as React from 'react';
import {Button} from 'reactstrap';
import {ActiveSelection} from '../popup/ActiveSelections';
import {IEventDispatcher} from '../../reactor/SimpleReactor';
import {AnnotationDescriptor} from '../../metadata/AnnotationDescriptor';
import {HighlightCreatedEvent} from '../../comments/react/HighlightCreatedEvent';
import {HighlightColor} from '../../metadata/BaseHighlight';
import {PopupStateEvent} from '../popup/PopupStateEvent';
import {EventListener} from '../../reactor/EventListener';
import {AnnotationType, InteleasePdfReader} from "../../apps/intelease-pdf-reader";
import {ConfirmButton} from "../confirm/ConfirmButton";
import {DocAnnotation} from "../../annotation_sidebar/DocAnnotation";
import {useRef} from "react";

declare var document: any;

/**
 * An annotation bar that is placed exactly.
 */
export class ControlledAnnotationBar extends React.Component<IProps, IState> {
    private savedSelection: any;
    private child: any;

    constructor(props: any) {
        super(props);

        this.dispatchOnHighlighted = this.dispatchOnHighlighted.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateBookMarkValue = this.updateBookMarkValue.bind(this);
        this.onConfirmDeleteAnnotation = this.onConfirmDeleteAnnotation.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);

        this.state = {
            bookMarkIsOpen: false,
            saveIsOpen: false,
            provisionList: [],
            bookMarkValue: '',
            selectedProvision: {}
        };
        this.child = React.createRef();
    }

    componentDidMount() {
        if (this.props.activeSelection.type === 'updated') {
            this.fillAnnotationData();
        } else {
            this.setState({provisionList: InteleasePdfReader.getInstance().getProvisionList()});
        }
    }

    private fillAnnotationData() {
        if (this.props.activeSelection.element &&
            this.props.activeSelection.element.dataset &&
            this.props.activeSelection.element.dataset.annotationId) {
            const annotation: any = InteleasePdfReader.getInstance().getAnnotationById(this.props.pageNum, this.props.activeSelection.element.dataset.annotationId.toString());
            if (annotation.itlsData && annotation.itlsData.type && annotation.itlsData.type === 'PROVISION') {
                const selectedProvision = InteleasePdfReader.getInstance()
                    .getProvisionList().findIndex((provision: any, index: any) => {
                        return (annotation.itlsData.value && annotation.itlsData.value.id && annotation.itlsData.value.id === provision.id);
                    });
                this.setState({
                    selectedProvision,
                    provisionList: InteleasePdfReader.getInstance().getProvisionList()
                });
            } else if (annotation.itlsData && annotation.itlsData.type && annotation.itlsData.type === 'BOOKMARK') {
                this.setState({
                    bookMarkValue: annotation.itlsData.value,
                    provisionList: InteleasePdfReader.getInstance().getProvisionList()
                });
            }
        }
    }

    private handleChange(e: any) {
        this.setState({selectedProvision: e.target.value});
    }

    private updateBookMarkValue(e: any) {
        // this.restoreSelection(this.savedSelection);
        this.setState({bookMarkValue: e.target.value});
    }

    private updateAnnotationInteleaseData(data: any) {
        if (this.props.activeSelection.type === 'updated') {
            if (this.props.activeSelection.element &&
                this.props.activeSelection.element.dataset &&
                this.props.activeSelection.element.dataset.annotationId) {
                const annotationId = this.props.activeSelection.element.dataset.annotationId.toString();
                InteleasePdfReader.getInstance()
                    .getAnnotationRefById(annotationId).itlsData = data;
                InteleasePdfReader.getInstance().updateAnnotationData(this.props.pageNum, annotationId, data);
            }
        }
    }

    private onSaveClick(e: any, type: string) {
        if (type === 'save') {
            const selectedProvision = this.state.provisionList[parseInt(this.state.selectedProvision)];
            InteleasePdfReader.getInstance().setSelectedProvision(selectedProvision);
            InteleasePdfReader.getInstance().annotationType = AnnotationType.SAVE_AS_PROVISION;
            this.props.activeSelection.itlsData = {type: 'PROVISION', value: selectedProvision};
            this.updateAnnotationInteleaseData(this.props.activeSelection.itlsData);
            this.dispatchOnHighlighted(selectedProvision.color || 'yellow');
        } else {
            this.restoreSelection(this.savedSelection);
            InteleasePdfReader.getInstance().annotationType = AnnotationType.BOOKMARK;
            InteleasePdfReader.getInstance().setBookMarkText(this.state.bookMarkValue);
            this.props.activeSelection.itlsData = {type: 'BOOKMARK', value: this.state.bookMarkValue};
            this.updateAnnotationInteleaseData(this.props.activeSelection.itlsData);
            this.dispatchOnHighlighted('yellow');
        }
    }

    //https://jsfiddle.net/cp6L291g/135/
    // https://stackoverflow.com/questions/37054885/keep-text-selected-when-focus-input
    // https://jsfiddle.net/Bes7weB/rLmfb043/
    private saveSelection(): void {
        if (window.getSelection) {
            const sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                this.savedSelection = sel.getRangeAt(0);
            }
        } else if (document.selection && document.selection.createRange) {
            this.savedSelection = document.selection.createRange();
        } else {
            this.savedSelection = null;
        }
    }

    private restoreSelection(range: any) {
        if (range) {
            if (window.getSelection) {
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (document.selection && range.select) {
                range.select();
            }
        }
    }

    public render() {
        return (
            <div>

                <div className="rounded p-1 annotationbar text-center" style={{}}>

                    <Button size="lg"
                            type="button"
                            className="btn p-1 m-1 annotationbar-btn"
                            title=""
                            aria-label=""
                            onClick={(e: any) => this.onItemClick(e, 'save')}
                        // onClick={() => this.dispatchOnHighlighted('yellow')}
                            style={{}}>

                        <span className="fas fa-save"
                              aria-hidden="true"
                              style={{color: '#1283ed'}}/>

                    </Button>

                    <Button size="lg"
                            type="button"
                            className="btn p-1 m-1 annotationbar-btn"
                            title=""
                            aria-label=""
                            onClick={(e: any) => this.onItemClick(e, 'bookmark')}
                            style={{visibility: this.state.saveIsOpen ? 'hidden' : 'visible'}}>

                        <span className="fas fa-bookmark annotationbar-btn-highlighter"
                              aria-hidden="true"
                              style={{color: '#1283ed'}}/>

                    </Button>
                    {(this.props.activeSelection.type === 'updated' && !this.state.bookMarkIsOpen) ? (
                        <ConfirmButton id="confirm"
                                       prompt="Are you sure?"
                                       ref={this.child}
                                       onConfirm={() => this.onConfirmDeleteAnnotation()}>
                            <Button size="lg"
                                    type="button"
                                    className="btn p-1 m-1 annotationbar-btn"
                                    title=""
                                    aria-label=""
                                    onClick={(e: any) => this.onItemClick(e, 'remove')}
                                    style={{visibility: this.state.saveIsOpen ? 'hidden' : 'visible'}}>

                                    <span className="fas fa-trash annotationbar-btn-highlighter"
                                          aria-hidden="true"
                                          style={{color: 'rgba(255,0,0,0.7)'}}/>

                            </Button>
                        </ConfirmButton>

                    ) : null}
                    {
                        this.state.saveIsOpen ? (
                            <div className="save-provision">
                                <i className="fas fa-times" onClick={(e: any) => this.onItemClick(e, 'save')}></i>
                                <select className="form-control"
                                        value={this.state.selectedProvision}
                                        onChange={this.handleChange}>
                                    <option selected>Select Provision</option>
                                    {
                                        this.state.provisionList.map((provision: any, index: number) => {
                                            return (
                                                <option key={index} value={index}>{provision.title}</option>
                                            );
                                        })
                                    }
                                </select>
                                <button className="btn" onClick={(e: any) => this.onSaveClick(e, 'save')}>Add</button>
                            </div>
                        ) : null
                    }
                    {
                        this.state.bookMarkIsOpen ? (
                            <div className="save-bookmark">
                                <i className="fas fa-times" onClick={(e: any) => this.onItemClick(e, 'bookmark')}></i>
                                <input placeholder="name" type="text"
                                       id="inteleaseBookMarkInput"
                                       value={this.state.bookMarkValue} onChange={this.updateBookMarkValue}
                                       onFocus={() => {
                                           this.saveSelection();
                                       }}
                                       onClick={this.updateBookMarkValue}
                                       className="form-control"/>
                                <button className="btn" onClick={(e: any) => this.onSaveClick(e, 'bookmark')}>Save
                                </button>
                            </div>
                        ) : null
                    }
                </div>

            </div>
        );

    }

    private closeConfirmPopover() {
        if (this.child && this.child.current) {
            this.child.current.onCancel();
        }
    }

    private onItemClick(e: any, type: string) {
        e.preventDefault();
        if (type === 'save') {
            this.setState({saveIsOpen: !this.state.saveIsOpen, bookMarkIsOpen: false});
            this.closeConfirmPopover();
        } else if (type === 'bookmark') {
            this.closeConfirmPopover();
            this.setState({bookMarkIsOpen: !this.state.bookMarkIsOpen, saveIsOpen: false});
        } else if (type === 'remove') {
            this.setState({bookMarkIsOpen: false, saveIsOpen: false});
        }
    }

    private onConfirmDeleteAnnotation() {
        // TODO: @mohammad-haji: check for AnnotationType
        const annotationId = this.props.activeSelection.element.dataset.annotationId;
        if (annotationId) {
            try {
                InteleasePdfReader.getInstance().annotationDeleted(annotationId, InteleasePdfReader.getInstance().getDocumentMeta().pageMetas[this.props.pageNum].textHighlights[annotationId]);
                this.closeConfirmPopover();
                if (document.getElementsByClassName('annotationbar') && document.getElementsByClassName('annotationbar').length) {
                    document.getElementsByClassName('annotationbar')[0].parentElement.parentElement.remove();
                }
            } catch (e) {
                console.info(`could not delete annotation with id ${annotationId} in docMetas`);
            }
        }
    }

    private renderAnnotationColorPicker() {
        return (
            <div>

                <div className="rounded p-1 annotationbar text-center" style={{}}>

                    <Button size="lg"
                            type="button"
                            className="btn p-1 m-1 annotationbar-btn"
                            title=""
                            aria-label=""
                            onClick={() => this.dispatchOnHighlighted('yellow')}
                            style={{}}>

                        <span className="fas fa-highlighter"
                              aria-hidden="true"
                              style={{color: 'rgba(255,255,0)'}}/>

                    </Button>

                    <Button size="lg"
                            type="button"
                            className="btn p-1 m-1 annotationbar-btn"
                            title=""
                            aria-label=""
                            onClick={() => this.dispatchOnHighlighted('red')}
                            style={{}}>

                        <span className="fas fa-highlighter annotationbar-btn-highlighter"
                              aria-hidden="true"
                              style={{color: 'rgba(255,0,0)'}}/>

                    </Button>

                    <Button size="lg"
                            type="button"
                            className="btn p-1 m-1 annotationbar-btn annotationbar-btn-highlighter"
                            title=""
                            aria-label=""
                            onClick={() => this.dispatchOnHighlighted('green')}
                            style={{}}>

                        <span className="fas fa-highlighter"
                              aria-hidden="true"
                              style={{color: 'rgba(0,255,0)'}}/>

                    </Button>

                </div>

            </div>
        );
    }

    private dispatchOnHighlighted(highlightColor: HighlightColor) {

        const highlightCreatedEvent: HighlightCreatedEvent = {
            activeSelection: this.props.activeSelection,
            highlightColor,
            pageNum: this.props.pageNum,
            annotationDescriptor: this.props.annotationDescriptor
        };

        this.props.onHighlighted(highlightCreatedEvent);

    }

}

export interface IProps extends AnnotationBarCallbacks {

    /**
     * The ActiveSelection in the browser that's being selected by the user.
     */
    readonly activeSelection: ActiveSelection;

    readonly type: AnnotationBarTargetType;

    readonly pageNum: number;

    /**
     * An optional annotationDescriptor if this is an existing annotation.
     */
    readonly annotationDescriptor?: AnnotationDescriptor;

}

export interface IState {
    bookMarkIsOpen: boolean;
    saveIsOpen: boolean;
    provisionList: any[];
    selectedProvision: any;
    bookMarkValue: string;
}

export interface AnnotationBarCallbacks {
    // called when the comment button is clicked.
    onHighlighted: OnHighlightedCallback;
}

export type OnHighlightedCallback
    = (highlightCreatedEvent: HighlightCreatedEvent) => void;

/**
 * The type of the selection.  A 'range' is just a user highlight.  Otherwise
 * it's either a previously created 'text-highlight' or 'area-highlight
 */
export type AnnotationBarTargetType = 'range' | 'text-highlight' | 'area-highlight';
