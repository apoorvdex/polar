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
const FirebaseDatastore_1 = require("../../js/datastore/FirebaseDatastore");
const FirebaseRunner_1 = require("../../js/firebase/FirebaseRunner");
const Datastores_1 = require("../../js/datastore/Datastores");
const Logging_1 = require("../../js/logger/Logging");
Logging_1.Logging.initForTesting();
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    new FirebaseRunner_1.FirebaseRunner(state).run(() => __awaiter(this, void 0, void 0, function* () {
        function purgeFirebase() {
            return __awaiter(this, void 0, void 0, function* () {
                const firebaseDatastore = new FirebaseDatastore_1.FirebaseDatastore();
                yield firebaseDatastore.init();
                console.log("Purging...");
                yield Datastores_1.Datastores.purge(firebaseDatastore, purgeEvent => {
                    console.log("Purged: ", purgeEvent);
                });
                console.log("Purging...done");
            });
        }
        yield purgeFirebase();
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFFQUF1RjtBQWF2Riw0RUFBdUU7QUFFdkUscUVBQWdFO0FBTWhFLDhEQUF5RDtBQU96RCxxREFBZ0Q7QUFFaEQsaUJBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUV6QixtQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBTyxLQUFLLEVBQUUsRUFBRTtJQUVqQyxJQUFJLCtCQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQVMsRUFBRTtRQUVyQyxTQUFlLGFBQWE7O2dCQUV4QixNQUFNLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztnQkFFbEQsTUFBTSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFMUIsTUFBTSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsRUFBRTtvQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxDQUFDO2dCQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUVsQyxDQUFDO1NBQUE7UUFFRCxNQUFNLGFBQWEsRUFBRSxDQUFDO0lBRTFCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyLCBTcGVjdHJvblJlbmRlcmVyU3RhdGV9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25SZW5kZXJlcic7XG5pbXBvcnQge0ZpcmViYXNlfSBmcm9tICcuLi8uLi9qcy9maXJlYmFzZS9GaXJlYmFzZSc7XG5pbXBvcnQge0ZpcmViYXNlVUlBdXRofSBmcm9tICcuLi8uLi9qcy9maXJlYmFzZS9GaXJlYmFzZVVJQXV0aCc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICcuLi8uLi9qcy9maXJlYmFzZS9saWIvZmlyZWJhc2UnO1xuaW1wb3J0IHtFbGVtZW50c30gZnJvbSAnLi4vLi4vanMvdXRpbC9FbGVtZW50cyc7XG5pbXBvcnQge0Rpc2tEYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9EaXNrRGF0YXN0b3JlJztcbmltcG9ydCB7RGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9EZWZhdWx0UGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge01vY2tEb2NNZXRhc30gZnJvbSAnLi4vLi4vanMvbWV0YWRhdGEvRG9jTWV0YXMnO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gXCJjaGFpXCI7XG5pbXBvcnQge0RhdGFzdG9yZVRlc3Rlcn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RhdGFzdG9yZVRlc3Rlcic7XG5pbXBvcnQge0ZpcmVzdG9yZX0gZnJvbSAnLi4vLi4vanMvZmlyZWJhc2UvRmlyZXN0b3JlJztcbmltcG9ydCB7SGFzaGNvZGVzfSBmcm9tICcuLi8uLi9qcy9IYXNoY29kZXMnO1xuaW1wb3J0IHtQcm9taXNlc30gZnJvbSAnLi4vLi4vanMvdXRpbC9Qcm9taXNlcyc7XG5pbXBvcnQge0ZpcmViYXNlRGF0YXN0b3JlfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRmlyZWJhc2VEYXRhc3RvcmUnO1xuaW1wb3J0IHtFbGVjdHJvbkRvY0xvYWRlcn0gZnJvbSAnLi4vLi4vanMvYXBwcy9tYWluL2RvY19sb2FkZXJzL2VsZWN0cm9uL0VsZWN0cm9uRG9jTG9hZGVyJztcbmltcG9ydCB7RmlyZWJhc2VSdW5uZXJ9IGZyb20gJy4uLy4uL2pzL2ZpcmViYXNlL0ZpcmViYXNlUnVubmVyJztcbmltcG9ydCB7RGVmYXVsdERhdGFzdG9yZU11dGF0aW9ufSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlTXV0YXRpb24nO1xuaW1wb3J0IHtEb2NJbmZvfSBmcm9tICcuLi8uLi9qcy9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCB7TGF0Y2h9IGZyb20gJy4uLy4uL2pzL3V0aWwvTGF0Y2gnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyV29ya2Vyc30gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL2Rpc3BhdGNoZXIvUGVyc2lzdGVuY2VMYXllcldvcmtlcnMnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0RhdGFzdG9yZXN9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9EYXRhc3RvcmVzJztcbmltcG9ydCB3YWl0Rm9yRXhwZWN0IGZyb20gJ3dhaXQtZm9yLWV4cGVjdCc7XG5pbXBvcnQge0Jyb3dzZXJXaW5kb3dSZWdpc3RyeX0gZnJvbSAnLi4vLi4vanMvZWxlY3Ryb24vZnJhbWV3b3JrL0Jyb3dzZXJXaW5kb3dSZWdpc3RyeSc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJzLCBTeW5jT3JpZ2lufSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllcnMnO1xuaW1wb3J0IHtDbG91ZEF3YXJlRGF0YXN0b3JlfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvQ2xvdWRBd2FyZURhdGFzdG9yZSc7XG5pbXBvcnQge1Byb2dyZXNzVHJhY2tlcn0gZnJvbSAnLi4vLi4vanMvdXRpbC9Qcm9ncmVzc1RyYWNrZXInO1xuaW1wb3J0IHtQcm9ncmVzc0Jhcn0gZnJvbSAnLi4vLi4vanMvdWkvcHJvZ3Jlc3NfYmFyL1Byb2dyZXNzQmFyJztcbmltcG9ydCB7TG9nZ2luZ30gZnJvbSAnLi4vLi4vanMvbG9nZ2VyL0xvZ2dpbmcnO1xuXG5Mb2dnaW5nLmluaXRGb3JUZXN0aW5nKCk7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jIChzdGF0ZSkgPT4ge1xuXG4gICAgbmV3IEZpcmViYXNlUnVubmVyKHN0YXRlKS5ydW4oYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHB1cmdlRmlyZWJhc2UoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcmViYXNlRGF0YXN0b3JlID0gbmV3IEZpcmViYXNlRGF0YXN0b3JlKCk7XG5cbiAgICAgICAgICAgIGF3YWl0IGZpcmViYXNlRGF0YXN0b3JlLmluaXQoKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQdXJnaW5nLi4uXCIpO1xuXG4gICAgICAgICAgICBhd2FpdCBEYXRhc3RvcmVzLnB1cmdlKGZpcmViYXNlRGF0YXN0b3JlLCBwdXJnZUV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlB1cmdlZDogXCIsIHB1cmdlRXZlbnQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHVyZ2luZy4uLmRvbmVcIik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHB1cmdlRmlyZWJhc2UoKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==