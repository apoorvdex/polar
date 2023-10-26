"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReactDOM = __importStar(require("react-dom"));
const React = __importStar(require("react"));
const FileImportController_1 = require("./FileImportController");
const SimpleReactor_1 = require("../../reactor/SimpleReactor");
const AppInstance_1 = require("../../electron/framework/AppInstance");
const PersistenceLayerManager_1 = require("../../datastore/PersistenceLayerManager");
const react_router_dom_1 = require("react-router-dom");
const PrioritizedSplashes_1 = require("../../../../apps/repository/js/splash/PrioritizedSplashes");
const SyncBar_1 = require("../../ui/sync_bar/SyncBar");
const DocRepoAnkiSyncController_1 = require("../../controller/DocRepoAnkiSyncController");
const DocRepoApp_1 = __importDefault(require("../../../../apps/repository/js/doc_repo/DocRepoApp"));
const AnnotationRepoApp_1 = __importDefault(require("../../../../apps/repository/js/annotation_repo/AnnotationRepoApp"));
const Logger_1 = require("../../logger/Logger");
const UpdatesController_1 = require("../../auto_updates/UpdatesController");
const RepoDocMetaManager_1 = require("../../../../apps/repository/js/RepoDocMetaManager");
const CloudService_1 = require("../../../../apps/repository/js/cloud/CloudService");
const RepoDocMetaLoader_1 = require("../../../../apps/repository/js/RepoDocMetaLoader");
const WhatsNewApp_1 = __importDefault(require("../../../../apps/repository/js/whats_new/WhatsNewApp"));
const CommunityApp_1 = __importDefault(require("../../../../apps/repository/js/community/CommunityApp"));
const StatsApp_1 = __importDefault(require("../../../../apps/repository/js/stats/StatsApp"));
const LogsApp_1 = __importDefault(require("../../../../apps/repository/js/logs/LogsApp"));
const ToasterService_1 = require("../../ui/toaster/ToasterService");
const ProgressService_1 = require("../../ui/progress_bar/ProgressService");
const ProgressTracker_1 = require("../../util/ProgressTracker");
const RepoDocMetas_1 = require("../../../../apps/repository/js/RepoDocMetas");
const EditorsPicksApp_1 = __importDefault(require("../../../../apps/repository/js/editors_picks/EditorsPicksApp"));
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const Version_1 = require("../../util/Version");
const LoadExampleDocs_1 = require("./onboarding/LoadExampleDocs");
const RepositoryTour_1 = require("./RepositoryTour");
const LocalPrefs_1 = require("../../util/LocalPrefs");
const LifecycleEvents_1 = require("../../ui/util/LifecycleEvents");
const Platforms_1 = require("../../util/Platforms");
const AppOrigin_1 = require("../AppOrigin");
const AppRuntime_1 = require("../../AppRuntime");
const AuthHandler_1 = require("./auth_handler/AuthHandler");
const Input_1 = __importDefault(require("reactstrap/lib/Input"));
const log = Logger_1.Logger.create();
class RepositoryApp {
    constructor() {
        this.persistenceLayerManager = new PersistenceLayerManager_1.PersistenceLayerManager();
        this.repoDocInfoManager = new RepoDocMetaManager_1.RepoDocMetaManager(this.persistenceLayerManager);
        this.repoDocInfoLoader = new RepoDocMetaLoader_1.RepoDocMetaLoader(this.persistenceLayerManager);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            AppOrigin_1.AppOrigin.configure();
            const authHandler = AuthHandler_1.AuthHandlers.get();
            if ((yield authHandler.status()) === 'needs-authentication') {
                yield authHandler.authenticate();
                return;
            }
            const updatedDocInfoEventDispatcher = new SimpleReactor_1.SimpleReactor();
            const syncBarProgress = new SimpleReactor_1.SimpleReactor();
            new FileImportController_1.FileImportController(this.persistenceLayerManager, updatedDocInfoEventDispatcher)
                .start();
            new DocRepoAnkiSyncController_1.DocRepoAnkiSyncController(this.persistenceLayerManager, syncBarProgress)
                .start();
            new UpdatesController_1.UpdatesController().start();
            new ToasterService_1.ToasterService().start();
            new ProgressService_1.ProgressService().start();
            yield this.doLoadExampleDocs();
            updatedDocInfoEventDispatcher.addEventListener(docInfo => {
                this.onUpdatedDocInfo(docInfo);
            });
            this.persistenceLayerManager.addEventListener(event => {
                if (event.state === 'changed') {
                    event.persistenceLayer.addEventListener((persistenceLayerEvent) => {
                        this.onUpdatedDocInfo(persistenceLayerEvent.docInfo);
                    });
                }
            });
            const renderDocRepoApp = () => {
                return (React.createElement(DocRepoApp_1.default, { persistenceLayerManager: this.persistenceLayerManager, updatedDocInfoEventDispatcher: updatedDocInfoEventDispatcher, repoDocMetaManager: this.repoDocInfoManager, repoDocMetaLoader: this.repoDocInfoLoader, syncBarProgress: syncBarProgress }));
            };
            const renderAnnotationRepoApp = () => {
                return (React.createElement(AnnotationRepoApp_1.default, { persistenceLayerManager: this.persistenceLayerManager, updatedDocInfoEventDispatcher: updatedDocInfoEventDispatcher, repoDocMetaManager: this.repoDocInfoManager, repoDocMetaLoader: this.repoDocInfoLoader, syncBarProgress: syncBarProgress }));
            };
            const renderWhatsNew = () => {
                return (React.createElement(WhatsNewApp_1.default, { persistenceLayerManager: this.persistenceLayerManager }));
            };
            const renderCommunity = () => {
                return (React.createElement(CommunityApp_1.default, { persistenceLayerManager: this.persistenceLayerManager }));
            };
            const renderStats = () => {
                return (React.createElement(StatsApp_1.default, { persistenceLayerManager: this.persistenceLayerManager, repoDocMetaManager: this.repoDocInfoManager }));
            };
            const renderLogs = () => {
                return (React.createElement(LogsApp_1.default, { persistenceLayerManager: this.persistenceLayerManager }));
            };
            const editorsPicks = () => {
                return (React.createElement(EditorsPicksApp_1.default, { persistenceLayerManager: this.persistenceLayerManager }));
            };
            const onNavChange = () => {
                try {
                    const url = new URL(document.location.href);
                    const path = url.pathname + url.hash || "";
                    const hostname = url.hostname;
                    const title = document.title;
                    log.info("Navigating to: ", { path, hostname, title });
                    RendererAnalytics_1.RendererAnalytics.pageview(path, hostname, document.title);
                }
                catch (e) {
                    log.error("Unable to handle hash change", e);
                }
            };
            onNavChange();
            window.addEventListener("hashchange", () => onNavChange(), false);
            this.sendAnalytics();
            ReactDOM.render(React.createElement("div", { style: { height: '100%' } },
                React.createElement(PrioritizedSplashes_1.PrioritizedSplashes, { persistenceLayerManager: this.persistenceLayerManager }),
                React.createElement(SyncBar_1.SyncBar, { progress: syncBarProgress }),
                React.createElement(RepositoryTour_1.RepositoryTour, null),
                React.createElement(react_router_dom_1.HashRouter, { hashType: "noslash" },
                    React.createElement(react_router_dom_1.Switch, null,
                        React.createElement(react_router_dom_1.Route, { exact: true, path: '/(logout|overview|login|configured|invite)?', render: renderDocRepoApp }),
                        React.createElement(react_router_dom_1.Route, { exact: true, path: '/annotations', render: renderAnnotationRepoApp }),
                        React.createElement(react_router_dom_1.Route, { exact: true, path: '/whats-new', render: renderWhatsNew }),
                        React.createElement(react_router_dom_1.Route, { exact: true, path: '/community', render: renderCommunity }),
                        React.createElement(react_router_dom_1.Route, { exact: true, path: '/stats', render: renderStats }),
                        React.createElement(react_router_dom_1.Route, { exact: true, path: '/logs', render: renderLogs }),
                        React.createElement(react_router_dom_1.Route, { exact: true, path: '/editors-picks', render: editorsPicks }))),
                React.createElement(Input_1.default, { type: "file", id: "file-upload", name: "file-upload", accept: ".pdf", multiple: true, onChange: () => this.onFileUpload(), style: { display: 'none' } })), document.getElementById('root'));
            this.handleRepoDocInfoEvents();
            yield this.repoDocInfoLoader.start();
            new CloudService_1.CloudService(this.persistenceLayerManager)
                .start();
            yield this.persistenceLayerManager.start();
            log.info("Started repo doc loader.");
            AppInstance_1.AppInstance.notifyStarted('RepositoryApp');
        });
    }
    onFileUpload() {
        window.postMessage({ type: 'file-uploaded' }, '*');
    }
    handleRepoDocInfoEvents() {
        this.repoDocInfoLoader.addEventListener(event => {
            for (const mutation of event.mutations) {
                if (mutation.mutationType === 'created' || mutation.mutationType === 'updated') {
                    this.repoDocInfoManager.updateFromRepoDocMeta(mutation.fingerprint, mutation.repoDocMeta);
                }
                else {
                    this.repoDocInfoManager.updateFromRepoDocMeta(mutation.fingerprint);
                }
            }
        });
    }
    sendAnalytics() {
        const version = Version_1.Version.get();
        const platform = Platforms_1.Platforms.toSymbol(Platforms_1.Platforms.get());
        const screen = `${window.screen.width}x${window.screen.height}`;
        const runtime = AppRuntime_1.AppRuntime.type();
        RendererAnalytics_1.RendererAnalytics.event({ category: 'app', action: 'version-' + version });
        RendererAnalytics_1.RendererAnalytics.event({ category: 'platform', action: `${platform}` });
        RendererAnalytics_1.RendererAnalytics.event({ category: 'screen', action: screen });
        RendererAnalytics_1.RendererAnalytics.event({ category: 'runtime', action: runtime });
    }
    doLoadExampleDocs() {
        return __awaiter(this, void 0, void 0, function* () {
            const doLoad = () => __awaiter(this, void 0, void 0, function* () {
                yield LocalPrefs_1.LocalPrefs.markOnceExecuted(LifecycleEvents_1.LifecycleEvents.HAS_EXAMPLE_DOCS, () => __awaiter(this, void 0, void 0, function* () {
                    const loadExampleDocs = new LoadExampleDocs_1.LoadExampleDocs(this.persistenceLayerManager.get());
                    yield loadExampleDocs.load(docInfo => {
                        this.onUpdatedDocInfo(docInfo);
                    });
                }), () => __awaiter(this, void 0, void 0, function* () {
                    log.debug("Docs already exist in repo");
                }));
            });
            this.persistenceLayerManager.addEventListener(event => {
                if (event.state === 'initialized') {
                    doLoad()
                        .catch(err => log.error("Unable to load example docs: ", err));
                }
            });
        });
    }
    onUpdatedDocInfo(docInfo) {
        const handleUpdatedDocInfo = () => __awaiter(this, void 0, void 0, function* () {
            log.info("Received DocInfo update");
            const docMeta = yield this.persistenceLayerManager.get().getDocMeta(docInfo.fingerprint);
            const repoDocMeta = RepoDocMetas_1.RepoDocMetas.convert(docInfo.fingerprint, docMeta);
            if (RepoDocMetas_1.RepoDocMetas.isValid(repoDocMeta)) {
                this.repoDocInfoManager.updateFromRepoDocMeta(docInfo.fingerprint, repoDocMeta);
                const progress = new ProgressTracker_1.ProgressTracker(1, 'doc-info-update').terminate();
                this.repoDocInfoLoader.dispatchEvent({
                    mutations: [
                        {
                            mutationType: 'created',
                            fingerprint: docInfo.fingerprint,
                            repoDocMeta
                        }
                    ],
                    progress
                });
                const persistenceLayer = this.persistenceLayerManager.get();
                if (PersistenceLayerManager_1.PersistenceLayerTypes.get() === 'cloud') {
                    const handleWriteDocMeta = () => __awaiter(this, void 0, void 0, function* () {
                        yield persistenceLayer.synchronizeDocs({ fingerprint: docInfo.fingerprint, docMeta });
                    });
                    handleWriteDocMeta()
                        .catch(err => log.error("Unable to write docMeta to datastore: ", err));
                }
            }
            else {
                log.warn("We were given an invalid DocInfo which yielded a broken RepoDocMeta: ", docInfo, repoDocMeta);
            }
        });
        handleUpdatedDocInfo()
            .catch(err => log.error("Unable to update doc info with fingerprint: " + docInfo.fingerprint, err));
    }
}
exports.RepositoryApp = RepositoryApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3NpdG9yeUFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlcG9zaXRvcnlBcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQXNDO0FBQ3RDLDZDQUErQjtBQUMvQixpRUFBNEQ7QUFDNUQsK0RBQTRFO0FBRTVFLHNFQUFpRTtBQUNqRSxxRkFBdUc7QUFDdkcsdURBQTJEO0FBQzNELG1HQUE4RjtBQUM5Rix1REFBbUU7QUFDbkUsMEZBQXFGO0FBQ3JGLG9HQUE0RTtBQUM1RSx5SEFBaUc7QUFFakcsZ0RBQTJDO0FBQzNDLDRFQUF1RTtBQUV2RSwwRkFBcUY7QUFDckYsb0ZBQStFO0FBQy9FLHdGQUFtRjtBQUNuRix1R0FBK0U7QUFDL0UseUdBQWlGO0FBQ2pGLDZGQUFxRTtBQUNyRSwwRkFBa0U7QUFDbEUsb0VBQStEO0FBQy9ELDJFQUFzRTtBQUN0RSxnRUFBMkQ7QUFDM0QsOEVBQXlFO0FBQ3pFLG1IQUEyRjtBQUMzRixrRUFBNkQ7QUFDN0QsZ0RBQTJDO0FBQzNDLGtFQUE2RDtBQUc3RCxxREFBZ0Q7QUFDaEQsc0RBQWlEO0FBQ2pELG1FQUE4RDtBQUM5RCxvREFBK0M7QUFDL0MsNENBQXVDO0FBQ3ZDLGlEQUE0QztBQUM1Qyw0REFBd0Q7QUFDeEQsaUVBQXlDO0FBR3pDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGFBQWE7SUFNdEI7UUFKaUIsNEJBQXVCLEdBQUcsSUFBSSxpREFBdUIsRUFBRSxDQUFDO1FBS3JFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLHVDQUFrQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFWSxLQUFLOztZQUVkLHFCQUFTLENBQUMs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bSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0ZpbGVJbXBvcnRDb250cm9sbGVyfSBmcm9tICcuL0ZpbGVJbXBvcnRDb250cm9sbGVyJztcbmltcG9ydCB7SUV2ZW50RGlzcGF0Y2hlciwgU2ltcGxlUmVhY3Rvcn0gZnJvbSAnLi4vLi4vcmVhY3Rvci9TaW1wbGVSZWFjdG9yJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gJy4uLy4uL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtBcHBJbnN0YW5jZX0gZnJvbSAnLi4vLi4vZWxlY3Ryb24vZnJhbWV3b3JrL0FwcEluc3RhbmNlJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllck1hbmFnZXIsIFBlcnNpc3RlbmNlTGF5ZXJUeXBlc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyJztcbmltcG9ydCB7SGFzaFJvdXRlciwgUm91dGUsIFN3aXRjaH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge1ByaW9yaXRpemVkU3BsYXNoZXN9IGZyb20gJy4uLy4uLy4uLy4uL2FwcHMvcmVwb3NpdG9yeS9qcy9zcGxhc2gvUHJpb3JpdGl6ZWRTcGxhc2hlcyc7XG5pbXBvcnQge1N5bmNCYXIsIFN5bmNCYXJQcm9ncmVzc30gZnJvbSAnLi4vLi4vdWkvc3luY19iYXIvU3luY0Jhcic7XG5pbXBvcnQge0RvY1JlcG9BbmtpU3luY0NvbnRyb2xsZXJ9IGZyb20gJy4uLy4uL2NvbnRyb2xsZXIvRG9jUmVwb0Fua2lTeW5jQ29udHJvbGxlcic7XG5pbXBvcnQgRG9jUmVwb0FwcCBmcm9tICcuLi8uLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvZG9jX3JlcG8vRG9jUmVwb0FwcCc7XG5pbXBvcnQgQW5ub3RhdGlvblJlcG9BcHAgZnJvbSAnLi4vLi4vLi4vLi4vYXBwcy9yZXBvc2l0b3J5L2pzL2Fubm90YXRpb25fcmVwby9Bbm5vdGF0aW9uUmVwb0FwcCc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7VXBkYXRlc0NvbnRyb2xsZXJ9IGZyb20gJy4uLy4uL2F1dG9fdXBkYXRlcy9VcGRhdGVzQ29udHJvbGxlcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJFdmVudH0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJFdmVudCc7XG5pbXBvcnQge1JlcG9Eb2NNZXRhTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vYXBwcy9yZXBvc2l0b3J5L2pzL1JlcG9Eb2NNZXRhTWFuYWdlcic7XG5pbXBvcnQge0Nsb3VkU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vYXBwcy9yZXBvc2l0b3J5L2pzL2Nsb3VkL0Nsb3VkU2VydmljZSc7XG5pbXBvcnQge1JlcG9Eb2NNZXRhTG9hZGVyfSBmcm9tICcuLi8uLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvUmVwb0RvY01ldGFMb2FkZXInO1xuaW1wb3J0IFdoYXRzTmV3QXBwIGZyb20gJy4uLy4uLy4uLy4uL2FwcHMvcmVwb3NpdG9yeS9qcy93aGF0c19uZXcvV2hhdHNOZXdBcHAnO1xuaW1wb3J0IENvbW11bml0eUFwcCBmcm9tICcuLi8uLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvY29tbXVuaXR5L0NvbW11bml0eUFwcCc7XG5pbXBvcnQgU3RhdHNBcHAgZnJvbSAnLi4vLi4vLi4vLi4vYXBwcy9yZXBvc2l0b3J5L2pzL3N0YXRzL1N0YXRzQXBwJztcbmltcG9ydCBMb2dzQXBwIGZyb20gJy4uLy4uLy4uLy4uL2FwcHMvcmVwb3NpdG9yeS9qcy9sb2dzL0xvZ3NBcHAnO1xuaW1wb3J0IHtUb2FzdGVyU2VydmljZX0gZnJvbSAnLi4vLi4vdWkvdG9hc3Rlci9Ub2FzdGVyU2VydmljZSc7XG5pbXBvcnQge1Byb2dyZXNzU2VydmljZX0gZnJvbSAnLi4vLi4vdWkvcHJvZ3Jlc3NfYmFyL1Byb2dyZXNzU2VydmljZSc7XG5pbXBvcnQge1Byb2dyZXNzVHJhY2tlcn0gZnJvbSAnLi4vLi4vdXRpbC9Qcm9ncmVzc1RyYWNrZXInO1xuaW1wb3J0IHtSZXBvRG9jTWV0YXN9IGZyb20gJy4uLy4uLy4uLy4uL2FwcHMvcmVwb3NpdG9yeS9qcy9SZXBvRG9jTWV0YXMnO1xuaW1wb3J0IEVkaXRvcnNQaWNrc0FwcCBmcm9tICcuLi8uLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvZWRpdG9yc19waWNrcy9FZGl0b3JzUGlja3NBcHAnO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IHtWZXJzaW9ufSBmcm9tICcuLi8uLi91dGlsL1ZlcnNpb24nO1xuaW1wb3J0IHtMb2FkRXhhbXBsZURvY3N9IGZyb20gJy4vb25ib2FyZGluZy9Mb2FkRXhhbXBsZURvY3MnO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7RGlza0RhdGFzdG9yZX0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL0Rpc2tEYXRhc3RvcmUnO1xuaW1wb3J0IHtSZXBvc2l0b3J5VG91cn0gZnJvbSAnLi9SZXBvc2l0b3J5VG91cic7XG5pbXBvcnQge0xvY2FsUHJlZnN9IGZyb20gJy4uLy4uL3V0aWwvTG9jYWxQcmVmcyc7XG5pbXBvcnQge0xpZmVjeWNsZUV2ZW50c30gZnJvbSAnLi4vLi4vdWkvdXRpbC9MaWZlY3ljbGVFdmVudHMnO1xuaW1wb3J0IHtQbGF0Zm9ybXN9IGZyb20gJy4uLy4uL3V0aWwvUGxhdGZvcm1zJztcbmltcG9ydCB7QXBwT3JpZ2lufSBmcm9tICcuLi9BcHBPcmlnaW4nO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi8uLi9BcHBSdW50aW1lJztcbmltcG9ydCB7QXV0aEhhbmRsZXJzfSBmcm9tICcuL2F1dGhfaGFuZGxlci9BdXRoSGFuZGxlcic7XG5pbXBvcnQgSW5wdXQgZnJvbSAncmVhY3RzdHJhcC9saWIvSW5wdXQnO1xuaW1wb3J0IHtQcmV2aWV3RGlzY2xhaW1lcnN9IGZyb20gJy4vUHJldmlld0Rpc2NsYWltZXJzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgUmVwb3NpdG9yeUFwcCB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyID0gbmV3IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyKCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSByZXBvRG9jSW5mb01hbmFnZXI6IFJlcG9Eb2NNZXRhTWFuYWdlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlcG9Eb2NJbmZvTG9hZGVyOiBSZXBvRG9jTWV0YUxvYWRlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlcG9Eb2NJbmZvTWFuYWdlciA9IG5ldyBSZXBvRG9jTWV0YU1hbmFnZXIodGhpcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlcik7XG4gICAgICAgIHRoaXMucmVwb0RvY0luZm9Mb2FkZXIgPSBuZXcgUmVwb0RvY01ldGFMb2FkZXIodGhpcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCkge1xuXG4gICAgICAgIEFwcE9yaWdpbi5jb25maWd1cmUoKTtcblxuICAgICAgICBjb25zdCBhdXRoSGFuZGxlciA9IEF1dGhIYW5kbGVycy5nZXQoKTtcblxuICAgICAgICBpZiAoYXdhaXQgYXV0aEhhbmRsZXIuc3RhdHVzKCkgPT09ICduZWVkcy1hdXRoZW50aWNhdGlvbicpIHtcbiAgICAgICAgICAgIGF3YWl0IGF1dGhIYW5kbGVyLmF1dGhlbnRpY2F0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXBkYXRlZERvY0luZm9FdmVudERpc3BhdGNoZXI6IElFdmVudERpc3BhdGNoZXI8SURvY0luZm8+ID0gbmV3IFNpbXBsZVJlYWN0b3IoKTtcblxuICAgICAgICBjb25zdCBzeW5jQmFyUHJvZ3Jlc3M6IElFdmVudERpc3BhdGNoZXI8U3luY0JhclByb2dyZXNzPiA9IG5ldyBTaW1wbGVSZWFjdG9yKCk7XG5cbiAgICAgICAgbmV3IEZpbGVJbXBvcnRDb250cm9sbGVyKHRoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXIsIHVwZGF0ZWREb2NJbmZvRXZlbnREaXNwYXRjaGVyKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgbmV3IERvY1JlcG9BbmtpU3luY0NvbnRyb2xsZXIodGhpcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlciwgc3luY0JhclByb2dyZXNzKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgbmV3IFVwZGF0ZXNDb250cm9sbGVyKCkuc3RhcnQoKTtcblxuICAgICAgICBuZXcgVG9hc3RlclNlcnZpY2UoKS5zdGFydCgpO1xuXG4gICAgICAgIG5ldyBQcm9ncmVzc1NlcnZpY2UoKS5zdGFydCgpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZG9Mb2FkRXhhbXBsZURvY3MoKTtcblxuICAgICAgICAvLyBQcmV2aWV3RGlzY2xhaW1lcnMuY3JlYXRlV2hlbk5lY2Vzc2FyeSgpO1xuXG4gICAgICAgIHVwZGF0ZWREb2NJbmZvRXZlbnREaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoZG9jSW5mbyA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlZERvY0luZm8oZG9jSW5mbyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCA9PiB7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5zdGF0ZSA9PT0gJ2NoYW5nZWQnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucGVyc2lzdGVuY2VMYXllci5hZGRFdmVudExpc3RlbmVyKChwZXJzaXN0ZW5jZUxheWVyRXZlbnQ6IFBlcnNpc3RlbmNlTGF5ZXJFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25VcGRhdGVkRG9jSW5mbyhwZXJzaXN0ZW5jZUxheWVyRXZlbnQuZG9jSW5mbyk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZW5kZXJEb2NSZXBvQXBwID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICggPERvY1JlcG9BcHAgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI9e3RoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkRG9jSW5mb0V2ZW50RGlzcGF0Y2hlcj17dXBkYXRlZERvY0luZm9FdmVudERpc3BhdGNoZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBvRG9jTWV0YU1hbmFnZXI9e3RoaXMucmVwb0RvY0luZm9NYW5hZ2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb0RvY01ldGFMb2FkZXI9e3RoaXMucmVwb0RvY0luZm9Mb2FkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW5jQmFyUHJvZ3Jlc3M9e3N5bmNCYXJQcm9ncmVzc30vPiApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlbmRlckFubm90YXRpb25SZXBvQXBwID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICggPEFubm90YXRpb25SZXBvQXBwIHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyPXt0aGlzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWREb2NJbmZvRXZlbnREaXNwYXRjaGVyPXt1cGRhdGVkRG9jSW5mb0V2ZW50RGlzcGF0Y2hlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBvRG9jTWV0YU1hbmFnZXI9e3RoaXMucmVwb0RvY0luZm9NYW5hZ2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9Eb2NNZXRhTG9hZGVyPXt0aGlzLnJlcG9Eb2NJbmZvTG9hZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bmNCYXJQcm9ncmVzcz17c3luY0JhclByb2dyZXNzfS8+ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVuZGVyV2hhdHNOZXcgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKCA8V2hhdHNOZXdBcHAgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI9e3RoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9Lz4gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZW5kZXJDb21tdW5pdHkgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKCA8Q29tbXVuaXR5QXBwIHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyPXt0aGlzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfS8+ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVuZGVyU3RhdHMgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKCA8U3RhdHNBcHAgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI9e3RoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb0RvY01ldGFNYW5hZ2VyPXt0aGlzLnJlcG9Eb2NJbmZvTWFuYWdlcn0vPiApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlbmRlckxvZ3MgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKCA8TG9nc0FwcCBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcj17dGhpcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0vPiApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGVkaXRvcnNQaWNrcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoIDxFZGl0b3JzUGlja3NBcHAgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI9e3RoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9Lz4gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbk5hdkNoYW5nZSA9ICgpID0+IHtcblxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24hLmhyZWYpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGF0aCA9IHVybC5wYXRobmFtZSArIHVybC5oYXNoIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgaG9zdG5hbWUgPSB1cmwuaG9zdG5hbWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC50aXRsZTtcblxuICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiTmF2aWdhdGluZyB0bzogXCIsIHsgcGF0aCwgaG9zdG5hbWUsIHRpdGxlIH0pO1xuXG4gICAgICAgICAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MucGFnZXZpZXcocGF0aCwgaG9zdG5hbWUsIGRvY3VtZW50LnRpdGxlKTtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIlVuYWJsZSB0byBoYW5kbGUgaGFzaCBjaGFuZ2VcIiwgZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBtdXN0IGJlIGNhbGxlZCB0aGUgZmlyc3QgdGltZSBzbyB0aGF0IHdlIGhhdmUgYW5hbHl0aWNzIGZvciB0aGUgaG9tZVxuICAgICAgICAvLyBwYWdlIG9uIGZpcnN0IGxvYWQuXG4gICAgICAgIG9uTmF2Q2hhbmdlKCk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsICgpID0+IG9uTmF2Q2hhbmdlKCksIGZhbHNlKTtcblxuICAgICAgICB0aGlzLnNlbmRBbmFseXRpY3MoKTtcblxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoXG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319PlxuXG4gICAgICAgICAgICAgICAgPFByaW9yaXRpemVkU3BsYXNoZXMgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI9e3RoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9Lz5cblxuICAgICAgICAgICAgICAgIDxTeW5jQmFyIHByb2dyZXNzPXtzeW5jQmFyUHJvZ3Jlc3N9Lz5cblxuICAgICAgICAgICAgICAgIDxSZXBvc2l0b3J5VG91ci8+XG5cbiAgICAgICAgICAgICAgICA8SGFzaFJvdXRlciBoYXNoVHlwZT1cIm5vc2xhc2hcIj5cblxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8obG9nb3V0fG92ZXJ2aWV3fGxvZ2lufGNvbmZpZ3VyZWR8aW52aXRlKT8nIHJlbmRlcj17cmVuZGVyRG9jUmVwb0FwcH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy9hbm5vdGF0aW9ucycgcmVuZGVyPXtyZW5kZXJBbm5vdGF0aW9uUmVwb0FwcH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy93aGF0cy1uZXcnIHJlbmRlcj17cmVuZGVyV2hhdHNOZXd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvY29tbXVuaXR5JyByZW5kZXI9e3JlbmRlckNvbW11bml0eX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy9zdGF0cycgcmVuZGVyPXtyZW5kZXJTdGF0c30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy9sb2dzJyByZW5kZXI9e3JlbmRlckxvZ3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvZWRpdG9ycy1waWNrcycgcmVuZGVyPXtlZGl0b3JzUGlja3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG5cbiAgICAgICAgICAgICAgICA8L0hhc2hSb3V0ZXI+XG5cbiAgICAgICAgICAgICAgICB7LypVc2VkIGZvciBmaWxlIHVwbG9hZHMuICBUaGlzIGhhcyB0byBiZSBvbiB0aGUgcGFnZSBhbmQgY2FuJ3QgYmUqL31cbiAgICAgICAgICAgICAgICB7LypzZWxlY3RpdmVseSBoaWRkZW4gYnkgY29tcG9uZW50cy4qL31cbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGUtdXBsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLnBkZlwiXG4gICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLm9uRmlsZVVwbG9hZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319Lz5cblxuICAgICAgICAgICAgPC9kaXY+LFxuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpIGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmhhbmRsZVJlcG9Eb2NJbmZvRXZlbnRzKCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5yZXBvRG9jSW5mb0xvYWRlci5zdGFydCgpO1xuXG4gICAgICAgIG5ldyBDbG91ZFNlcnZpY2UodGhpcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlcilcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXIuc3RhcnQoKTtcblxuICAgICAgICBsb2cuaW5mbyhcIlN0YXJ0ZWQgcmVwbyBkb2MgbG9hZGVyLlwiKTtcblxuICAgICAgICBBcHBJbnN0YW5jZS5ub3RpZnlTdGFydGVkKCdSZXBvc2l0b3J5QXBwJyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRmlsZVVwbG9hZCgpIHtcblxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2Uoe3R5cGU6ICdmaWxlLXVwbG9hZGVkJ30sICcqJyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVJlcG9Eb2NJbmZvRXZlbnRzKCkge1xuXG4gICAgICAgIHRoaXMucmVwb0RvY0luZm9Mb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCA9PiB7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgZXZlbnQubXV0YXRpb25zKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24ubXV0YXRpb25UeXBlID09PSAnY3JlYXRlZCcgfHwgbXV0YXRpb24ubXV0YXRpb25UeXBlID09PSAndXBkYXRlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBvRG9jSW5mb01hbmFnZXIudXBkYXRlRnJvbVJlcG9Eb2NNZXRhKG11dGF0aW9uLmZpbmdlcnByaW50LCBtdXRhdGlvbi5yZXBvRG9jTWV0YSEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb0RvY0luZm9NYW5hZ2VyLnVwZGF0ZUZyb21SZXBvRG9jTWV0YShtdXRhdGlvbi5maW5nZXJwcmludCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbmRBbmFseXRpY3MoKSB7XG5cbiAgICAgICAgY29uc3QgdmVyc2lvbiA9IFZlcnNpb24uZ2V0KCk7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gUGxhdGZvcm1zLnRvU3ltYm9sKFBsYXRmb3Jtcy5nZXQoKSk7XG4gICAgICAgIGNvbnN0IHNjcmVlbiA9IGAke3dpbmRvdy5zY3JlZW4ud2lkdGh9eCR7d2luZG93LnNjcmVlbi5oZWlnaHR9YDtcbiAgICAgICAgY29uc3QgcnVudGltZSA9IEFwcFJ1bnRpbWUudHlwZSgpO1xuXG4gICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ2FwcCcsIGFjdGlvbjogJ3ZlcnNpb24tJyArIHZlcnNpb259KTtcbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAncGxhdGZvcm0nLCBhY3Rpb246IGAke3BsYXRmb3JtfWB9KTtcbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAnc2NyZWVuJywgYWN0aW9uOiBzY3JlZW59KTtcbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAncnVudGltZScsIGFjdGlvbjogcnVudGltZX0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBkb0xvYWRFeGFtcGxlRG9jcygpIHtcblxuICAgICAgICBjb25zdCBkb0xvYWQgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGFsc28gdXNlIHN5c3RlbSBwcmVmcyBmb3IgdGhpcyB0b28uXG5cbiAgICAgICAgICAgIGF3YWl0IExvY2FsUHJlZnMubWFya09uY2VFeGVjdXRlZChMaWZlY3ljbGVFdmVudHMuSEFTX0VYQU1QTEVfRE9DUywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gbG9hZCB0aGUgZWFtcGxlIGRvY3MgaW4gdGhlIHN0b3JlLi4gb24gdGhlIGZpcnN0IGxvYWQgd2VcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgcHJvcGFibHkgbWFrZSBzdXJlIHRoaXMgZG9lc24ndCBoYXBwZW4gbW9yZSB0aGFuIG9uY2VcbiAgICAgICAgICAgICAgICAvLyBhcyB0aGUgdXNlciBjb3VsZCBqdXN0IGRlbGV0ZSBhbGwgdGhlIGZpbGVzIGluIHRoZWlyIHJlcG8uXG4gICAgICAgICAgICAgICAgLy8gYXdhaXQgbmV3XG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZEV4YW1wbGVEb2NzID0gbmV3IExvYWRFeGFtcGxlRG9jcyh0aGlzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyLmdldCgpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBsb2FkRXhhbXBsZURvY3MubG9hZChkb2NJbmZvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblVwZGF0ZWREb2NJbmZvKGRvY0luZm8pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiRG9jcyBhbHJlYWR5IGV4aXN0IGluIHJlcG9cIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCA9PiB7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5zdGF0ZSA9PT0gJ2luaXRpYWxpemVkJykge1xuXG4gICAgICAgICAgICAgICAgZG9Mb2FkKClcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gbG9hZCBleGFtcGxlIGRvY3M6IFwiLCBlcnIpKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIERvY0luZm8gdXBkYXRlcyBzZW50IGZyb20gdmlld2Vycy5cbiAgICAgKi9cbiAgICBwcml2YXRlIG9uVXBkYXRlZERvY0luZm8oZG9jSW5mbzogSURvY0luZm8pOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBoYW5kbGVVcGRhdGVkRG9jSW5mbyA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJSZWNlaXZlZCBEb2NJbmZvIHVwZGF0ZVwiKTtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IGF3YWl0IHRoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXIuZ2V0KCkuZ2V0RG9jTWV0YShkb2NJbmZvLmZpbmdlcnByaW50KTtcblxuICAgICAgICAgICAgY29uc3QgcmVwb0RvY01ldGEgPSBSZXBvRG9jTWV0YXMuY29udmVydChkb2NJbmZvLmZpbmdlcnByaW50LCBkb2NNZXRhKTtcblxuICAgICAgICAgICAgaWYgKFJlcG9Eb2NNZXRhcy5pc1ZhbGlkKHJlcG9Eb2NNZXRhKSkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvRG9jSW5mb01hbmFnZXIudXBkYXRlRnJvbVJlcG9Eb2NNZXRhKGRvY0luZm8uZmluZ2VycHJpbnQsIHJlcG9Eb2NNZXRhKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gbmV3IFByb2dyZXNzVHJhY2tlcigxLCAnZG9jLWluZm8tdXBkYXRlJykudGVybWluYXRlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlcG9Eb2NJbmZvTG9hZGVyLmRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblR5cGU6ICdjcmVhdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGRvY0luZm8uZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9Eb2NNZXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogdGVjaG5pY2FsbHkgSSBkb24ndCB0aGluayB3ZSBuZWVkIHRvIHRlc3QgaWYgd2UncmVcbiAgICAgICAgICAgICAgICAvLyB1c2luZyB0aGUgY2xvdWQgbGF5ZXIgYW55bW9yZSBhcyBzeW5jaHJvbml6ZURvY3MgaXMgYSBub29wXG4gICAgICAgICAgICAgICAgLy8gaW4gYWxsIG90aGVyIGRhdGFzdG9yZXMuXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllcjogUGVyc2lzdGVuY2VMYXllciA9IHRoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXIuZ2V0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoUGVyc2lzdGVuY2VMYXllclR5cGVzLmdldCgpID09PSAnY2xvdWQnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlV3JpdGVEb2NNZXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5zeW5jaHJvbml6ZURvY3Moe2ZpbmdlcnByaW50OiBkb2NJbmZvLmZpbmdlcnByaW50LCBkb2NNZXRhfSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlV3JpdGVEb2NNZXRhKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIHdyaXRlIGRvY01ldGEgdG8gZGF0YXN0b3JlOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBsb2cud2FybihcIldlIHdlcmUgZ2l2ZW4gYW4gaW52YWxpZCBEb2NJbmZvIHdoaWNoIHlpZWxkZWQgYSBicm9rZW4gUmVwb0RvY01ldGE6IFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY0luZm8sIHJlcG9Eb2NNZXRhKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgaGFuZGxlVXBkYXRlZERvY0luZm8oKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gdXBkYXRlIGRvYyBpbmZvIHdpdGggZmluZ2VycHJpbnQ6IFwiICsgZG9jSW5mby5maW5nZXJwcmludCwgZXJyKSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==