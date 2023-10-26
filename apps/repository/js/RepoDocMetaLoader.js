"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../../../web/js/logger/Logger");
const RepoDocInfos_1 = require("./RepoDocInfos");
const SimpleReactor_1 = require("../../../web/js/reactor/SimpleReactor");
const ProgressTrackerIndex_1 = require("../../../web/js/util/ProgressTrackerIndex");
const RepoDocMetas_1 = require("./RepoDocMetas");
const DeterminateProgressBar_1 = require("../../../web/js/ui/progress_bar/DeterminateProgressBar");
const log = Logger_1.Logger.create();
class RepoDocMetaLoader {
    constructor(persistenceLayerManager) {
        this.eventDispatcher = new SimpleReactor_1.SimpleReactor();
        this.persistenceLayerManager = persistenceLayerManager;
    }
    addEventListener(listener) {
        return this.eventDispatcher.addEventListener(listener);
    }
    removeEventListener(listener) {
        return this.eventDispatcher.removeEventListener(listener);
    }
    dispatchEvent(event) {
        this.eventDispatcher.dispatchEvent(event);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.persistenceLayerManager.addEventListener(event => {
                if (event.state === 'changed') {
                    this.onPersistenceLayerChanged(event.persistenceLayer);
                }
            }, 'changed');
        });
    }
    onPersistenceLayerChanged(persistenceLayer) {
        log.info("onPersistenceLayerChanged");
        const progressTrackerIndex = new ProgressTrackerIndex_1.ProgressTrackerIndex();
        persistenceLayer.addDocMetaSnapshotEventListener((docMetaSnapshotEvent) => __awaiter(this, void 0, void 0, function* () {
            const eventHandler = () => __awaiter(this, void 0, void 0, function* () {
                const { progress, docMetaMutations } = docMetaSnapshotEvent;
                progressTrackerIndex.update(progress);
                const minProgress = progressTrackerIndex.min();
                if (minProgress.isPresent()) {
                    DeterminateProgressBar_1.DeterminateProgressBar.update(minProgress.get());
                }
                else {
                    DeterminateProgressBar_1.DeterminateProgressBar.update(100);
                }
                const mutations = [];
                for (const docMetaMutation of docMetaMutations) {
                    if (docMetaMutation.mutationType === 'created' ||
                        docMetaMutation.mutationType === 'updated') {
                        const docMeta = yield docMetaMutation.docMetaProvider();
                        const docInfo = docMeta.docInfo;
                        const repoDocMeta = this.toRepoDocMeta(docInfo.fingerprint, docMeta);
                        if (repoDocMeta && RepoDocInfos_1.RepoDocInfos.isValid(repoDocMeta.repoDocInfo)) {
                            mutations.push({
                                mutationType: docMetaMutation.mutationType,
                                fingerprint: docMetaMutation.fingerprint,
                                repoDocMeta
                            });
                        }
                    }
                    if (docMetaMutation.mutationType === 'deleted') {
                        mutations.push({
                            mutationType: docMetaMutation.mutationType,
                            fingerprint: docMetaMutation.fingerprint,
                        });
                    }
                }
                if (docMetaMutations.length > 0) {
                    this.eventDispatcher.dispatchEvent({ mutations, progress });
                }
            });
            eventHandler()
                .catch(err => log.error("Could not handle snapshot: ", err));
        }));
    }
    toRepoDocMeta(fingerprint, docMeta) {
        if (docMeta) {
            return RepoDocMetas_1.RepoDocMetas.convert(fingerprint, docMeta);
        }
        else {
            log.warn("No DocMeta for fingerprint: " + fingerprint);
        }
        return undefined;
    }
}
exports.RepoDocMetaLoader = RepoDocMetaLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb0RvY01ldGFMb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZXBvRG9jTWV0YUxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsMERBQXFEO0FBSXJELGlEQUE0QztBQVc1Qyx5RUFBc0Y7QUFFdEYsb0ZBQStFO0FBRy9FLGlEQUE0QztBQUM1QyxtR0FBOEY7QUFFOUYsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsaUJBQWlCO0lBTTFCLFlBQVksdUJBQWdEO1FBRjNDLG9CQUFlLEdBQXVDLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBR3ZGLElBQUksQ0FBQyx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQztJQUMzRCxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsUUFBeUM7UUFDN0QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxRQUF5QztRQUNoRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLGFBQWEsQ0FBQyxLQUF1QjtRQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRVksS0FBSzs7WUFJZCxJQUFJLENBQUMsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBRWxELElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7b0JBQzNCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDMUQ7WUFFTCxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFbEIsQ0FBQztLQUFBO0lBRU8seUJBQXlCLENBQUMsZ0JBQWtDO1FBRWhFLEdBQUcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUV0QyxNQUFNLG9CQUFvQixHQUFHLElBQUksMkNBQW9CLEVBQUUsQ0FBQztRQUV4RCxnQkFBZ0IsQ0FBQywrQkFBK0IsQ0FBQyxDQUFNLG9CQUFvQixFQUFDLEVBQUU7WUFFMUUsTUFBTSxZQUFZLEdBQUcsR0FBUyxFQUFFO2dCQUU1QixNQUFNLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFDLEdBQUcsb0JBQW9CLENBQUM7Z0JBRTFELG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFdEMsTUFBTSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRS9DLElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUFFO29CQUN6QiwrQ0FBc0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBQ3BEO3FCQUFNO29CQUNILCtDQUFzQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDdEM7Z0JBRUQsTUFBTSxTQUFTLEdBQTBCLEVBQUUsQ0FBQztnQkFFNUMsS0FBSyxNQUFNLGVBQWUsSUFBSSxnQkFBZ0IsRUFBRTtvQkFFNUMsSUFBSSxlQUFlLENBQUMsWUFBWSxLQUFLLFNBQVM7d0JBQzFDLGVBQWUsQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO3dCQUU1QyxNQUFNLE9BQU8sR0FBRyxNQUFNLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQzt3QkFDeEQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQzt3QkFFaEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUVyRSxJQUFJLFdBQVcsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUU7NEJBRTlELFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0NBQ1gsWUFBWSxFQUFFLGVBQWUsQ0FBQyxZQUFZO2dDQUMxQyxXQUFXLEVBQUUsZUFBZSxDQUFDLFdBQVc7Z0NBQ3hDLFdBQVc7NkJBQ2QsQ0FBQyxDQUFDO3lCQUVOO3FCQUVKO29CQUVELElBQUksZUFBZSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7d0JBRTVDLFNBQVMsQ0FBQyxJQUFJLENBQUM7NEJBQ1gsWUFBWSxFQUFFLGVBQWUsQ0FBQyxZQUFZOzRCQUMxQyxXQUFXLEVBQUUsZUFBZSxDQUFDLFdBQVc7eUJBQzNDLENBQUMsQ0FBQztxQkFFTjtpQkFFSjtnQkFFRCxJQUFJLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7aUJBQzdEO1lBRUwsQ0FBQyxDQUFBLENBQUM7WUFFRixZQUFZLEVBQUU7aUJBQ1QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXJFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRU8sYUFBYSxDQUFDLFdBQW1CLEVBQUUsT0FBaUI7UUFFeEQsSUFBSSxPQUFPLEVBQUU7WUFFVCxPQUFPLDJCQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUVyRDthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxXQUFXLENBQUMsQ0FBQztTQUMxRDtRQUVELE9BQU8sU0FBUyxDQUFDO0lBRXJCLENBQUM7Q0FFSjtBQXhIRCw4Q0F3SEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvY01ldGFSZWZ9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvRG9jTWV0YVJlZic7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1Byb2dyZXNzQ2FsY3VsYXRvcn0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL3V0aWwvUHJvZ3Jlc3NDYWxjdWxhdG9yJztcbmltcG9ydCB7UHJvZ3Jlc3NCYXJ9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy91aS9wcm9ncmVzc19iYXIvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHtSZXBvRG9jSW5mb0luZGV4fSBmcm9tICcuL1JlcG9Eb2NJbmZvSW5kZXgnO1xuaW1wb3J0IHtSZXBvRG9jSW5mb3N9IGZyb20gJy4vUmVwb0RvY0luZm9zJztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdXRpbC9EaWN0aW9uYXJpZXMnO1xuaW1wb3J0IHtSZXBvRG9jSW5mb30gZnJvbSAnLi9SZXBvRG9jSW5mbyc7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7RG9jTWV0YVNuYXBzaG90RXZlbnQsIFNuYXBzaG90UHJvZ3Jlc3MsIFNuYXBzaG90VW5zdWJzY3JpYmVyLCBEb2NNZXRhU25hcHNob3RFdmVudHMsIE11dGF0aW9uVHlwZX0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9EYXRhc3RvcmUnO1xuaW1wb3J0IHtFbGVjdHJvbkNvbnRleHRUeXBlc30gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2VsZWN0cm9uL2NvbnRleHQvRWxlY3Ryb25Db250ZXh0VHlwZXMnO1xuaW1wb3J0IHtQcm9taXNlc30gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL3V0aWwvUHJvbWlzZXMnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyTWFuYWdlcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyRXZlbnR9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXInO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtJRXZlbnREaXNwYXRjaGVyLCBTaW1wbGVSZWFjdG9yfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvcmVhY3Rvci9TaW1wbGVSZWFjdG9yJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi8uLi93ZWIvanMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge1Byb2dyZXNzVHJhY2tlckluZGV4fSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdXRpbC9Qcm9ncmVzc1RyYWNrZXJJbmRleCc7XG5pbXBvcnQge0V2ZW50TGlzdGVuZXJ9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9yZWFjdG9yL0V2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHtSZXBvRG9jTWV0YX0gZnJvbSAnLi9SZXBvRG9jTWV0YSc7XG5pbXBvcnQge1JlcG9Eb2NNZXRhc30gZnJvbSAnLi9SZXBvRG9jTWV0YXMnO1xuaW1wb3J0IHtEZXRlcm1pbmF0ZVByb2dyZXNzQmFyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdWkvcHJvZ3Jlc3NfYmFyL0RldGVybWluYXRlUHJvZ3Jlc3NCYXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBSZXBvRG9jTWV0YUxvYWRlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyOiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBJRXZlbnREaXNwYXRjaGVyPFJlcG9Eb2NNZXRhRXZlbnQ+ID0gbmV3IFNpbXBsZVJlYWN0b3IoKTtcblxuICAgIGNvbnN0cnVjdG9yKHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyOiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcikge1xuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyID0gcGVyc2lzdGVuY2VMYXllck1hbmFnZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIobGlzdGVuZXI6IEV2ZW50TGlzdGVuZXI8UmVwb0RvY01ldGFFdmVudD4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnREaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyKGxpc3RlbmVyOiBFdmVudExpc3RlbmVyPFJlcG9Eb2NNZXRhRXZlbnQ+KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50RGlzcGF0Y2hlci5yZW1vdmVFdmVudExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcGF0Y2hFdmVudChldmVudDogUmVwb0RvY01ldGFFdmVudCkge1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKSB7XG5cbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIGV2ZW50cyBwcm9wZXJseS4uXG5cbiAgICAgICAgdGhpcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50ID0+IHtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LnN0YXRlID09PSAnY2hhbmdlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGVyc2lzdGVuY2VMYXllckNoYW5nZWQoZXZlbnQucGVyc2lzdGVuY2VMYXllcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwgJ2NoYW5nZWQnKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25QZXJzaXN0ZW5jZUxheWVyQ2hhbmdlZChwZXJzaXN0ZW5jZUxheWVyOiBQZXJzaXN0ZW5jZUxheWVyKSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJvblBlcnNpc3RlbmNlTGF5ZXJDaGFuZ2VkXCIpO1xuXG4gICAgICAgIGNvbnN0IHByb2dyZXNzVHJhY2tlckluZGV4ID0gbmV3IFByb2dyZXNzVHJhY2tlckluZGV4KCk7XG5cbiAgICAgICAgcGVyc2lzdGVuY2VMYXllci5hZGREb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKGFzeW5jIGRvY01ldGFTbmFwc2hvdEV2ZW50ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZXZlbnRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qge3Byb2dyZXNzLCBkb2NNZXRhTXV0YXRpb25zfSA9IGRvY01ldGFTbmFwc2hvdEV2ZW50O1xuXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NUcmFja2VySW5kZXgudXBkYXRlKHByb2dyZXNzKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1pblByb2dyZXNzID0gcHJvZ3Jlc3NUcmFja2VySW5kZXgubWluKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWluUHJvZ3Jlc3MuaXNQcmVzZW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgRGV0ZXJtaW5hdGVQcm9ncmVzc0Jhci51cGRhdGUobWluUHJvZ3Jlc3MuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIERldGVybWluYXRlUHJvZ3Jlc3NCYXIudXBkYXRlKDEwMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25zOiBSZXBvRG9jTWV0YU11dGF0aW9uW10gPSBbXTtcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZG9jTWV0YU11dGF0aW9uIG9mIGRvY01ldGFNdXRhdGlvbnMpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jTWV0YU11dGF0aW9uLm11dGF0aW9uVHlwZSA9PT0gJ2NyZWF0ZWQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NNZXRhTXV0YXRpb24ubXV0YXRpb25UeXBlID09PSAndXBkYXRlZCcpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IGF3YWl0IGRvY01ldGFNdXRhdGlvbi5kb2NNZXRhUHJvdmlkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvY0luZm8gPSBkb2NNZXRhLmRvY0luZm87XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcG9Eb2NNZXRhID0gdGhpcy50b1JlcG9Eb2NNZXRhKGRvY0luZm8uZmluZ2VycHJpbnQsIGRvY01ldGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVwb0RvY01ldGEgJiYgUmVwb0RvY0luZm9zLmlzVmFsaWQocmVwb0RvY01ldGEucmVwb0RvY0luZm8pKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uVHlwZTogZG9jTWV0YU11dGF0aW9uLm11dGF0aW9uVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGRvY01ldGFNdXRhdGlvbi5maW5nZXJwcmludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb0RvY01ldGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jTWV0YU11dGF0aW9uLm11dGF0aW9uVHlwZSA9PT0gJ2RlbGV0ZWQnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblR5cGU6IGRvY01ldGFNdXRhdGlvbi5tdXRhdGlvblR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGRvY01ldGFNdXRhdGlvbi5maW5nZXJwcmludCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkb2NNZXRhTXV0YXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudCh7bXV0YXRpb25zLCBwcm9ncmVzc30pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyKClcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkNvdWxkIG5vdCBoYW5kbGUgc25hcHNob3Q6IFwiLCBlcnIpKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdG9SZXBvRG9jTWV0YShmaW5nZXJwcmludDogc3RyaW5nLCBkb2NNZXRhPzogRG9jTWV0YSk6IFJlcG9Eb2NNZXRhIHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBpZiAoZG9jTWV0YSkge1xuXG4gICAgICAgICAgICByZXR1cm4gUmVwb0RvY01ldGFzLmNvbnZlcnQoZmluZ2VycHJpbnQsIGRvY01ldGEpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2cud2FybihcIk5vIERvY01ldGEgZm9yIGZpbmdlcnByaW50OiBcIiArIGZpbmdlcnByaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBvRG9jTWV0YUV2ZW50IHtcbiAgICByZWFkb25seSBtdXRhdGlvbnM6IFJlYWRvbmx5QXJyYXk8UmVwb0RvY01ldGFNdXRhdGlvbj47XG4gICAgcmVhZG9ubHkgcHJvZ3Jlc3M6IFNuYXBzaG90UHJvZ3Jlc3M7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwb0RvY01ldGFNdXRhdGlvbiB7XG4gICAgcmVhZG9ubHkgbXV0YXRpb25UeXBlOiBNdXRhdGlvblR5cGU7XG4gICAgcmVhZG9ubHkgZmluZ2VycHJpbnQ6IHN0cmluZztcblxuICAgIC8vIG9ubHkgcHJlc2VudCBvbiBjcmVhdGVkIC8gdXBkYXRlZFxuICAgIHJlYWRvbmx5IHJlcG9Eb2NNZXRhPzogUmVwb0RvY01ldGE7XG59XG4iXX0=