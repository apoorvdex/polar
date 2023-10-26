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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const DiskDatastore_1 = require("../../js/datastore/DiskDatastore");
const DefaultPersistenceLayer_1 = require("../../js/datastore/DefaultPersistenceLayer");
const FirebaseDatastore_1 = require("../../js/datastore/FirebaseDatastore");
const FirebaseRunner_1 = require("../../js/firebase/FirebaseRunner");
const PersistenceLayers_1 = require("../../js/datastore/PersistenceLayers");
const CloudAwareDatastore_1 = require("../../js/datastore/CloudAwareDatastore");
const ProgressBar_1 = require("../../js/ui/progress_bar/ProgressBar");
const Logging_1 = require("../../js/logger/Logging");
Logging_1.Logging.initForTesting();
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    new FirebaseRunner_1.FirebaseRunner(state).run(() => __awaiter(this, void 0, void 0, function* () {
        function syncWithFirebase() {
            return __awaiter(this, void 0, void 0, function* () {
                const diskDatastore = new DiskDatastore_1.DiskDatastore();
                const firebaseDatastore = new FirebaseDatastore_1.FirebaseDatastore();
                const cloudAwareDatastore = new CloudAwareDatastore_1.CloudAwareDatastore(diskDatastore, firebaseDatastore);
                const progressBar = ProgressBar_1.ProgressBar.create(false);
                cloudAwareDatastore.addDocMetaSnapshotEventListener((docMetaSnapshotEvent) => __awaiter(this, void 0, void 0, function* () {
                    console.log("Got event: ", docMetaSnapshotEvent);
                    console.log("Progress percentage: " + docMetaSnapshotEvent.progress.progress);
                    progressBar.update(docMetaSnapshotEvent.progress.progress);
                }));
                yield cloudAwareDatastore.init();
            });
        }
        function initialMergeWithFirebase() {
            return __awaiter(this, void 0, void 0, function* () {
                const progressBar = ProgressBar_1.ProgressBar.create(false);
                const source = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new DiskDatastore_1.DiskDatastore());
                const target = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new FirebaseDatastore_1.FirebaseDatastore());
                yield Promise.all([source.init(), target.init()]);
                function toSyncDocMap(persistenceLayer) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const timeLabel = 'toSyncOrigin:' + persistenceLayer.datastore.id;
                        try {
                            console.time(timeLabel);
                            return yield PersistenceLayers_1.PersistenceLayers.toSyncDocMap(persistenceLayer.datastore, progressState => {
                                progressBar.update(progressState.progress);
                            });
                        }
                        finally {
                            console.timeEnd(timeLabel);
                        }
                    });
                }
                function toSyncOrigin(persistenceLayer) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const syncDocMap = yield toSyncDocMap(persistenceLayer);
                        return {
                            datastore: persistenceLayer.datastore,
                            syncDocMap
                        };
                    });
                }
                yield PersistenceLayers_1.PersistenceLayers.merge(yield toSyncOrigin(source), yield toSyncOrigin(target), (transferEvent) => __awaiter(this, void 0, void 0, function* () {
                    console.log("Transfer event: ", transferEvent);
                    progressBar.update(transferEvent.progress.progress);
                }));
                console.log("Transfer finished.");
                yield Promise.all([source.stop(), target.stop()]);
            });
        }
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFFQUF1RjtBQUt2RixvRUFBK0Q7QUFDL0Qsd0ZBQW1GO0FBT25GLDRFQUF1RTtBQUV2RSxxRUFBZ0U7QUFTaEUsNEVBQW1GO0FBQ25GLGdGQUEyRTtBQUUzRSxzRUFBaUU7QUFDakUscURBQWdEO0FBRWhELGlCQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7QUFFekIsbUNBQWdCLENBQUMsR0FBRyxDQUFDLENBQU8sS0FBSyxFQUFFLEVBQUU7SUFFakMsSUFBSSwrQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFTLEVBQUU7UUFFckMsU0FBZSxnQkFBZ0I7O2dCQUUzQixNQUFNLGFBQWEsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztnQkFDMUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7Z0JBRWxELE1BQU0sbUJBQW1CLEdBQUcsSUFBSSx5Q0FBbUIsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztnQkFDdEYsTUFBTSxXQUFXLEdBQUcseUJBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRTlDLG1CQUFtQixDQUFDLCtCQUErQixDQUFDLENBQU0sb0JBQW9CLEVBQUMsRUFBRTtvQkFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztvQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzlFLFdBQVcsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvRCxDQUFDLENBQUEsQ0FBQyxDQUFDO2dCQUVILE1BQU0sbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFckMsQ0FBQztTQUFBO1FBRUQsU0FBZSx3QkFBd0I7O2dCQUVuQyxNQUFNLFdBQVcsR0FBRyx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFOUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxpREFBdUIsQ0FBQyxJQUFJLDZCQUFhLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRSxNQUFNLE1BQU0sR0FBRyxJQUFJLGlEQUF1QixDQUFDLElBQUkscUNBQWlCLEVBQUUsQ0FBQyxDQUFDO2dCQUVwRSxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFbEQsU0FBZSxZQUFZLENBQUMsZ0JBQWtDOzt3QkFFMUQsTUFBTSxTQUFTLEdBQUcsZUFBZSxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7d0JBRWxFLElBQUk7NEJBQ0EsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs0QkFDeEIsT0FBTyxNQUFNLHFDQUFpQixDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLEVBQUU7Z0NBQ3BGLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUMvQyxDQUFDLENBQUMsQ0FBQzt5QkFFTjtnQ0FBUzs0QkFDTixPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3lCQUM5QjtvQkFFTCxDQUFDO2lCQUFBO2dCQUVELFNBQWUsWUFBWSxDQUFDLGdCQUFrQzs7d0JBRTFELE1BQU0sVUFBVSxHQUFHLE1BQU0sWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBRXhELE9BQU87NEJBQ0gsU0FBUyxFQUFFLGdCQUFnQixDQUFDLFNBQVM7NEJBQ3JDLFVBQVU7eUJBQ2IsQ0FBQztvQkFFTixDQUFDO2lCQUFBO2dCQUVELE1BQU0scUNBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQU8sYUFBYSxFQUFFLEVBQUU7b0JBQzFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQy9DLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztnQkFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBRWxDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXRELENBQUM7U0FBQTtJQU1MLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyLCBTcGVjdHJvblJlbmRlcmVyU3RhdGV9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25SZW5kZXJlcic7XG5pbXBvcnQge0ZpcmViYXNlfSBmcm9tICcuLi8uLi9qcy9maXJlYmFzZS9GaXJlYmFzZSc7XG5pbXBvcnQge0ZpcmViYXNlVUlBdXRofSBmcm9tICcuLi8uLi9qcy9maXJlYmFzZS9GaXJlYmFzZVVJQXV0aCc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICcuLi8uLi9qcy9maXJlYmFzZS9saWIvZmlyZWJhc2UnO1xuaW1wb3J0IHtFbGVtZW50c30gZnJvbSAnLi4vLi4vanMvdXRpbC9FbGVtZW50cyc7XG5pbXBvcnQge0Rpc2tEYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9EaXNrRGF0YXN0b3JlJztcbmltcG9ydCB7RGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9EZWZhdWx0UGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge01vY2tEb2NNZXRhc30gZnJvbSAnLi4vLi4vanMvbWV0YWRhdGEvRG9jTWV0YXMnO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gXCJjaGFpXCI7XG5pbXBvcnQge0RhdGFzdG9yZVRlc3Rlcn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RhdGFzdG9yZVRlc3Rlcic7XG5pbXBvcnQge0ZpcmVzdG9yZX0gZnJvbSAnLi4vLi4vanMvZmlyZWJhc2UvRmlyZXN0b3JlJztcbmltcG9ydCB7SGFzaGNvZGVzfSBmcm9tICcuLi8uLi9qcy9IYXNoY29kZXMnO1xuaW1wb3J0IHtQcm9taXNlc30gZnJvbSAnLi4vLi4vanMvdXRpbC9Qcm9taXNlcyc7XG5pbXBvcnQge0ZpcmViYXNlRGF0YXN0b3JlfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRmlyZWJhc2VEYXRhc3RvcmUnO1xuaW1wb3J0IHtFbGVjdHJvbkRvY0xvYWRlcn0gZnJvbSAnLi4vLi4vanMvYXBwcy9tYWluL2RvY19sb2FkZXJzL2VsZWN0cm9uL0VsZWN0cm9uRG9jTG9hZGVyJztcbmltcG9ydCB7RmlyZWJhc2VSdW5uZXJ9IGZyb20gJy4uLy4uL2pzL2ZpcmViYXNlL0ZpcmViYXNlUnVubmVyJztcbmltcG9ydCB7RGVmYXVsdERhdGFzdG9yZU11dGF0aW9ufSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlTXV0YXRpb24nO1xuaW1wb3J0IHtEb2NJbmZvfSBmcm9tICcuLi8uLi9qcy9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCB7TGF0Y2h9IGZyb20gJy4uLy4uL2pzL3V0aWwvTGF0Y2gnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyV29ya2Vyc30gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL2Rpc3BhdGNoZXIvUGVyc2lzdGVuY2VMYXllcldvcmtlcnMnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0RhdGFzdG9yZXN9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9EYXRhc3RvcmVzJztcbmltcG9ydCB3YWl0Rm9yRXhwZWN0IGZyb20gJ3dhaXQtZm9yLWV4cGVjdCc7XG5pbXBvcnQge0Jyb3dzZXJXaW5kb3dSZWdpc3RyeX0gZnJvbSAnLi4vLi4vanMvZWxlY3Ryb24vZnJhbWV3b3JrL0Jyb3dzZXJXaW5kb3dSZWdpc3RyeSc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJzLCBTeW5jT3JpZ2lufSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllcnMnO1xuaW1wb3J0IHtDbG91ZEF3YXJlRGF0YXN0b3JlfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvQ2xvdWRBd2FyZURhdGFzdG9yZSc7XG5pbXBvcnQge1Byb2dyZXNzVHJhY2tlcn0gZnJvbSAnLi4vLi4vanMvdXRpbC9Qcm9ncmVzc1RyYWNrZXInO1xuaW1wb3J0IHtQcm9ncmVzc0Jhcn0gZnJvbSAnLi4vLi4vanMvdWkvcHJvZ3Jlc3NfYmFyL1Byb2dyZXNzQmFyJztcbmltcG9ydCB7TG9nZ2luZ30gZnJvbSAnLi4vLi4vanMvbG9nZ2VyL0xvZ2dpbmcnO1xuXG5Mb2dnaW5nLmluaXRGb3JUZXN0aW5nKCk7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jIChzdGF0ZSkgPT4ge1xuXG4gICAgbmV3IEZpcmViYXNlUnVubmVyKHN0YXRlKS5ydW4oYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHN5bmNXaXRoRmlyZWJhc2UoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpc2tEYXRhc3RvcmUgPSBuZXcgRGlza0RhdGFzdG9yZSgpO1xuICAgICAgICAgICAgY29uc3QgZmlyZWJhc2VEYXRhc3RvcmUgPSBuZXcgRmlyZWJhc2VEYXRhc3RvcmUoKTtcblxuICAgICAgICAgICAgY29uc3QgY2xvdWRBd2FyZURhdGFzdG9yZSA9IG5ldyBDbG91ZEF3YXJlRGF0YXN0b3JlKGRpc2tEYXRhc3RvcmUsIGZpcmViYXNlRGF0YXN0b3JlKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzQmFyID0gUHJvZ3Jlc3NCYXIuY3JlYXRlKGZhbHNlKTtcblxuICAgICAgICAgICAgY2xvdWRBd2FyZURhdGFzdG9yZS5hZGREb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKGFzeW5jIGRvY01ldGFTbmFwc2hvdEV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvdCBldmVudDogXCIsIGRvY01ldGFTbmFwc2hvdEV2ZW50KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb2dyZXNzIHBlcmNlbnRhZ2U6IFwiICsgZG9jTWV0YVNuYXBzaG90RXZlbnQucHJvZ3Jlc3MucHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnVwZGF0ZShkb2NNZXRhU25hcHNob3RFdmVudC5wcm9ncmVzcy5wcm9ncmVzcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXdhaXQgY2xvdWRBd2FyZURhdGFzdG9yZS5pbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxNZXJnZVdpdGhGaXJlYmFzZSgpIHtcblxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBQcm9ncmVzc0Jhci5jcmVhdGUoZmFsc2UpO1xuXG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIobmV3IERpc2tEYXRhc3RvcmUoKSk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIobmV3IEZpcmViYXNlRGF0YXN0b3JlKCkpO1xuXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbc291cmNlLmluaXQoKSwgdGFyZ2V0LmluaXQoKV0pO1xuXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiB0b1N5bmNEb2NNYXAocGVyc2lzdGVuY2VMYXllcjogUGVyc2lzdGVuY2VMYXllcikge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGltZUxhYmVsID0gJ3RvU3luY09yaWdpbjonICsgcGVyc2lzdGVuY2VMYXllci5kYXRhc3RvcmUuaWQ7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLnRpbWUodGltZUxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IFBlcnNpc3RlbmNlTGF5ZXJzLnRvU3luY0RvY01hcChwZXJzaXN0ZW5jZUxheWVyLmRhdGFzdG9yZSwgcHJvZ3Jlc3NTdGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci51cGRhdGUocHJvZ3Jlc3NTdGF0ZS5wcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS50aW1lRW5kKHRpbWVMYWJlbCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIHRvU3luY09yaWdpbihwZXJzaXN0ZW5jZUxheWVyOiBQZXJzaXN0ZW5jZUxheWVyKTogUHJvbWlzZTxTeW5jT3JpZ2luPiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzeW5jRG9jTWFwID0gYXdhaXQgdG9TeW5jRG9jTWFwKHBlcnNpc3RlbmNlTGF5ZXIpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YXN0b3JlOiBwZXJzaXN0ZW5jZUxheWVyLmRhdGFzdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgc3luY0RvY01hcFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgUGVyc2lzdGVuY2VMYXllcnMubWVyZ2UoYXdhaXQgdG9TeW5jT3JpZ2luKHNvdXJjZSksIGF3YWl0IHRvU3luY09yaWdpbih0YXJnZXQpLCBhc3luYyAodHJhbnNmZXJFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHJhbnNmZXIgZXZlbnQ6IFwiLCB0cmFuc2ZlckV2ZW50KTtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci51cGRhdGUodHJhbnNmZXJFdmVudC5wcm9ncmVzcy5wcm9ncmVzcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUcmFuc2ZlciBmaW5pc2hlZC5cIik7XG5cbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtzb3VyY2Uuc3RvcCgpLCB0YXJnZXQuc3RvcCgpXSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF3YWl0IHN5bmNXaXRoRmlyZWJhc2UoKTtcblxuICAgICAgICAvLyBhd2FpdCBpbml0aWFsTWVyZ2VXaXRoRmlyZWJhc2UoKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==