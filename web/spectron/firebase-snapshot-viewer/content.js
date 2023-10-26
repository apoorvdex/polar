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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const firebase = __importStar(require("../../js/firebase/lib/firebase"));
const FirebaseDatastore_1 = require("../../js/datastore/FirebaseDatastore");
const FirebaseRunner_1 = require("../../js/firebase/FirebaseRunner");
const Logging_1 = require("../../js/logger/Logging");
const Preconditions_1 = require("../../js/Preconditions");
const ReactDOM = __importStar(require("react-dom"));
const React = __importStar(require("react"));
const react_json_view_1 = __importDefault(require("react-json-view"));
const ISODateTimeStrings_1 = require("../../js/metadata/ISODateTimeStrings");
Logging_1.Logging.initForTesting();
function renderJSON(name, object) {
    const id = 'snapshot-logger';
    let parent = document.getElementById(id);
    if (!parent) {
        parent = document.createElement('div');
        parent.setAttribute("id", id);
        document.body.appendChild(parent);
    }
    const objectElementHolder = document.createElement('div');
    ReactDOM.render(React.createElement(react_json_view_1.default, { src: object, name: name, shouldCollapse: () => true }), objectElementHolder);
    const timestampElement = document.createElement("pre");
    timestampElement.setAttribute("style", 'white-space: pre; font-weight: bold;');
    timestampElement.innerText = ISODateTimeStrings_1.ISODateTimeStrings.create();
    const rowElement = document.createElement('div');
    rowElement.appendChild(timestampElement);
    rowElement.appendChild(objectElementHolder);
    parent.appendChild(rowElement);
    window.scrollTo(0, document.body.scrollHeight);
}
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    new FirebaseRunner_1.FirebaseRunner(state).run(() => __awaiter(this, void 0, void 0, function* () {
        const onSnapshot = (collection, snapshot) => {
            const snapshotFacade = SnapshotFacades.toSnapshotFacade(collection, snapshot);
            console.log(snapshotFacade);
            renderJSON(collection, snapshotFacade);
        };
        const onSnapshotError = (err) => {
            console.error("Could not handle snapshot: ", err);
        };
        const handleSnapshotsForCollection = (collection) => {
            const auth = firebase.auth();
            Preconditions_1.Preconditions.assertPresent(auth, "Not authenticated");
            const user = auth.currentUser;
            Preconditions_1.Preconditions.assertPresent(user, "No user");
            const uid = user.uid;
            const query = firebase.firestore()
                .collection(collection)
                .where('uid', '==', uid);
            const unsubscribe = query.onSnapshot({ includeMetadataChanges: true }, (snapshot) => onSnapshot(collection, snapshot), onSnapshotError);
        };
        function monitorSnapshots() {
            return __awaiter(this, void 0, void 0, function* () {
                handleSnapshotsForCollection(FirebaseDatastore_1.DatastoreCollection.DOC_INFO);
                handleSnapshotsForCollection(FirebaseDatastore_1.DatastoreCollection.DOC_META);
            });
        }
        yield monitorSnapshots();
    }));
}));
class SnapshotFacades {
    static toSnapshotFacade(collection, snapshot) {
        const docChanges = snapshot.docChanges().map(current => {
            return {
                type: current.type,
                data: current.doc.data()
            };
        });
        const docs = snapshot.docs.map(current => {
            return {
                data: current.data()
            };
        });
        return {
            collection,
            size: snapshot.size,
            empty: snapshot.empty,
            docChanges,
            docs,
            metadata: {
                fromCache: snapshot.metadata.fromCache,
                hasPendingWrites: snapshot.metadata.hasPendingWrites
            }
        };
    }
}
exports.SnapshotFacades = SnapshotFacades;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQXVGO0FBR3ZGLHlFQUEyRDtBQVUzRCw0RUFBNEY7QUFFNUYscUVBQWdFO0FBYWhFLHFEQUFnRDtBQUNoRCwwREFBcUQ7QUFDckQsb0RBQXNDO0FBRXRDLDZDQUErQjtBQUMvQixzRUFBd0M7QUFDeEMsNkVBQXdFO0FBRXhFLGlCQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7QUFFekIsU0FBUyxVQUFVLENBQUMsSUFBWSxFQUFFLE1BQVc7SUFFekMsTUFBTSxFQUFFLEdBQUcsaUJBQWlCLENBQUM7SUFFN0IsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUV6QyxJQUFJLENBQUUsTUFBTSxFQUFFO1FBQ1YsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDckM7SUFFRCxNQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFMUQsUUFBUSxDQUFDLE1BQU0sQ0FBRSxvQkFBQyx5QkFBUyxJQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUV6RyxNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDO0lB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QyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hCLE9BQU87Z0JBQ0gsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUU7YUFDdkIsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBRVAsT0FBTztZQUNILFVBQVU7WUFDVixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7WUFDbkIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO1lBQ3JCLFVBQVU7WUFDVixJQUFJO1lBQ0osUUFBUSxFQUFFO2dCQUNOLFNBQVMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVM7Z0JBQ3RDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCO2FBQ3ZEO1NBQ0osQ0FBQztJQUVOLENBQUM7Q0FFSjtBQW5DRCwwQ0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uUmVuZGVyZXIsIFNwZWN0cm9uUmVuZGVyZXJTdGF0ZX0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcbmltcG9ydCB7RmlyZWJhc2V9IGZyb20gJy4uLy4uL2pzL2ZpcmViYXNlL0ZpcmViYXNlJztcbmltcG9ydCB7RmlyZWJhc2VVSUF1dGh9IGZyb20gJy4uLy4uL2pzL2ZpcmViYXNlL0ZpcmViYXNlVUlBdXRoJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJy4uLy4uL2pzL2ZpcmViYXNlL2xpYi9maXJlYmFzZSc7XG5pbXBvcnQge0VsZW1lbnRzfSBmcm9tICcuLi8uLi9qcy91dGlsL0VsZW1lbnRzJztcbmltcG9ydCB7RGlza0RhdGFzdG9yZX0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0Rpc2tEYXRhc3RvcmUnO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7TW9ja0RvY01ldGFzfSBmcm9tICcuLi8uLi9qcy9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSBcImNoYWlcIjtcbmltcG9ydCB7RGF0YXN0b3JlVGVzdGVyfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlVGVzdGVyJztcbmltcG9ydCB7RmlyZXN0b3JlfSBmcm9tICcuLi8uLi9qcy9maXJlYmFzZS9GaXJlc3RvcmUnO1xuaW1wb3J0IHtIYXNoY29kZXN9IGZyb20gJy4uLy4uL2pzL0hhc2hjb2Rlcyc7XG5pbXBvcnQge1Byb21pc2VzfSBmcm9tICcuLi8uLi9qcy91dGlsL1Byb21pc2VzJztcbmltcG9ydCB7RmlyZWJhc2VEYXRhc3RvcmUsIERhdGFzdG9yZUNvbGxlY3Rpb259IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9GaXJlYmFzZURhdGFzdG9yZSc7XG5pbXBvcnQge0VsZWN0cm9uRG9jTG9hZGVyfSBmcm9tICcuLi8uLi9qcy9hcHBzL21haW4vZG9jX2xvYWRlcnMvZWxlY3Ryb24vRWxlY3Ryb25Eb2NMb2FkZXInO1xuaW1wb3J0IHtGaXJlYmFzZVJ1bm5lcn0gZnJvbSAnLi4vLi4vanMvZmlyZWJhc2UvRmlyZWJhc2VSdW5uZXInO1xuaW1wb3J0IHtEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb259IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9EYXRhc3RvcmVNdXRhdGlvbic7XG5pbXBvcnQge0RvY0luZm99IGZyb20gJy4uLy4uL2pzL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtMYXRjaH0gZnJvbSAnLi4vLi4vanMvdXRpbC9MYXRjaCc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJXb3JrZXJzfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvZGlzcGF0Y2hlci9QZXJzaXN0ZW5jZUxheWVyV29ya2Vycyc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7RGF0YXN0b3Jlc30gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RhdGFzdG9yZXMnO1xuaW1wb3J0IHdhaXRGb3JFeHBlY3QgZnJvbSAnd2FpdC1mb3ItZXhwZWN0JztcbmltcG9ydCB7QnJvd3NlcldpbmRvd1JlZ2lzdHJ5fSBmcm9tICcuLi8uLi9qcy9lbGVjdHJvbi9mcmFtZXdvcmsvQnJvd3NlcldpbmRvd1JlZ2lzdHJ5JztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllcnMsIFN5bmNPcmlnaW59IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVycyc7XG5pbXBvcnQge0Nsb3VkQXdhcmVEYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9DbG91ZEF3YXJlRGF0YXN0b3JlJztcbmltcG9ydCB7UHJvZ3Jlc3NUcmFja2VyfSBmcm9tICcuLi8uLi9qcy91dGlsL1Byb2dyZXNzVHJhY2tlcic7XG5pbXBvcnQge1Byb2dyZXNzQmFyfSBmcm9tICcuLi8uLi9qcy91aS9wcm9ncmVzc19iYXIvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHtMb2dnaW5nfSBmcm9tICcuLi8uLi9qcy9sb2dnZXIvTG9nZ2luZyc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJy4uLy4uL2pzL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBEb2NSZXBvQXBwIGZyb20gJy4uLy4uLy4uL2FwcHMvcmVwb3NpdG9yeS9qcy9kb2NfcmVwby9Eb2NSZXBvQXBwJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdEpzb24gZnJvbSAncmVhY3QtanNvbi12aWV3JztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmdzfSBmcm9tICcuLi8uLi9qcy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuXG5Mb2dnaW5nLmluaXRGb3JUZXN0aW5nKCk7XG5cbmZ1bmN0aW9uIHJlbmRlckpTT04obmFtZTogc3RyaW5nLCBvYmplY3Q6IGFueSkge1xuXG4gICAgY29uc3QgaWQgPSAnc25hcHNob3QtbG9nZ2VyJztcblxuICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgICBpZiAoISBwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBhcmVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFyZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBvYmplY3RFbGVtZW50SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoIDxSZWFjdEpzb24gc3JjPXtvYmplY3R9IG5hbWU9e25hbWV9IHNob3VsZENvbGxhcHNlPXsoKSA9PiB0cnVlfS8+LCBvYmplY3RFbGVtZW50SG9sZGVyKTtcblxuICAgIGNvbnN0IHRpbWVzdGFtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJlXCIpO1xuICAgIHRpbWVzdGFtcEVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgJ3doaXRlLXNwYWNlOiBwcmU7IGZvbnQtd2VpZ2h0OiBib2xkOycpO1xuICAgIHRpbWVzdGFtcEVsZW1lbnQuaW5uZXJUZXh0ID0gSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpO1xuXG4gICAgY29uc3Qgcm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvd0VsZW1lbnQuYXBwZW5kQ2hpbGQodGltZXN0YW1wRWxlbWVudCk7XG4gICAgcm93RWxlbWVudC5hcHBlbmRDaGlsZChvYmplY3RFbGVtZW50SG9sZGVyKTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChyb3dFbGVtZW50KTtcblxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudCEuYm9keS5zY3JvbGxIZWlnaHQpO1xuXG59XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jIChzdGF0ZSkgPT4ge1xuXG4gICAgbmV3IEZpcmViYXNlUnVubmVyKHN0YXRlKS5ydW4oYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG9uU25hcHNob3QgPSAoY29sbGVjdGlvbjogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNuYXBzaG90OiBmaXJlYmFzZS5maXJlc3RvcmUuUXVlcnlTbmFwc2hvdCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBzbmFwc2hvdEZhY2FkZSA9IFNuYXBzaG90RmFjYWRlcy50b1NuYXBzaG90RmFjYWRlKGNvbGxlY3Rpb24sIHNuYXBzaG90KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coc25hcHNob3RGYWNhZGUpO1xuXG4gICAgICAgICAgICByZW5kZXJKU09OKGNvbGxlY3Rpb24sIHNuYXBzaG90RmFjYWRlKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uU25hcHNob3RFcnJvciA9IChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGhhbmRsZSBzbmFwc2hvdDogXCIsIGVycik7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlU25hcHNob3RzRm9yQ29sbGVjdGlvbiA9IChjb2xsZWN0aW9uOiBzdHJpbmcpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcbiAgICAgICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChhdXRoLCBcIk5vdCBhdXRoZW50aWNhdGVkXCIpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcblxuICAgICAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHVzZXIsIFwiTm8gdXNlclwiKTtcblxuICAgICAgICAgICAgY29uc3QgdWlkID0gdXNlciEudWlkO1xuXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbilcbiAgICAgICAgICAgICAgICAud2hlcmUoJ3VpZCcsICc9PScsIHVpZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID1cbiAgICAgICAgICAgICAgICBxdWVyeS5vblNuYXBzaG90KHtpbmNsdWRlTWV0YWRhdGFDaGFuZ2VzOiB0cnVlfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzbmFwc2hvdDogZmlyZWJhc2UuZmlyZXN0b3JlLlF1ZXJ5U25hcHNob3QpID0+IG9uU25hcHNob3QoY29sbGVjdGlvbiwgc25hcHNob3QpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TbmFwc2hvdEVycm9yKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIG1vbml0b3JTbmFwc2hvdHMoKSB7XG5cbiAgICAgICAgICAgIC8vIG1vbml0b3IgdGhlIGRvY19pbmZvIGFuZCBkb2NfbWV0YSB0YWJsZXNcblxuICAgICAgICAgICAgaGFuZGxlU25hcHNob3RzRm9yQ29sbGVjdGlvbihEYXRhc3RvcmVDb2xsZWN0aW9uLkRPQ19JTkZPKTtcbiAgICAgICAgICAgIGhhbmRsZVNuYXBzaG90c0ZvckNvbGxlY3Rpb24oRGF0YXN0b3JlQ29sbGVjdGlvbi5ET0NfTUVUQSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IG1vbml0b3JTbmFwc2hvdHMoKTtcblxuICAgIH0pO1xuXG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBTbmFwc2hvdEZhY2FkZSB7XG4gICAgcmVhZG9ubHkgY29sbGVjdGlvbjogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNpemU6IG51bWJlcjtcbiAgICByZWFkb25seSBlbXB0eTogYm9vbGVhbjtcbiAgICByZWFkb25seSBtZXRhZGF0YTogU25hcHNob3RNZXRhZGF0YUZhY2FkZTtcbiAgICByZWFkb25seSBkb2NDaGFuZ2VzOiBSZWFkb25seUFycmF5PERvY3VtZW50Q2hhbmdlRmFjYWRlPjtcbiAgICByZWFkb25seSBkb2NzOiBSZWFkb25seUFycmF5PERvY0ZhY2FkZT47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbmFwc2hvdE1ldGFkYXRhRmFjYWRlIHtcbiAgICByZWFkb25seSBmcm9tQ2FjaGU6IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgaGFzUGVuZGluZ1dyaXRlczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudENoYW5nZUZhY2FkZSB7XG4gICAgcmVhZG9ubHkgdHlwZTogZmlyZWJhc2UuZmlyZXN0b3JlLkRvY3VtZW50Q2hhbmdlVHlwZTtcbiAgICByZWFkb25seSBkYXRhOiBmaXJlYmFzZS5maXJlc3RvcmUuRG9jdW1lbnREYXRhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERvY0ZhY2FkZSB7XG4gICAgcmVhZG9ubHkgZGF0YTogZmlyZWJhc2UuZmlyZXN0b3JlLkRvY3VtZW50RGF0YTtcbn1cblxuZXhwb3J0IGNsYXNzIFNuYXBzaG90RmFjYWRlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHRvU25hcHNob3RGYWNhZGUoY29sbGVjdGlvbjogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbmFwc2hvdDogZmlyZWJhc2UuZmlyZXN0b3JlLlF1ZXJ5U25hcHNob3QpOiBTbmFwc2hvdEZhY2FkZSB7XG5cbiAgICAgICAgY29uc3QgZG9jQ2hhbmdlczogRG9jdW1lbnRDaGFuZ2VGYWNhZGVbXSA9XG4gICAgICAgICAgICBzbmFwc2hvdC5kb2NDaGFuZ2VzKCkubWFwKGN1cnJlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGN1cnJlbnQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3VycmVudC5kb2MuZGF0YSgpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgZG9jczogRG9jRmFjYWRlW10gPVxuICAgICAgICAgICAgc25hcHNob3QuZG9jcy5tYXAoY3VycmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3VycmVudC5kYXRhKClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICBzaXplOiBzbmFwc2hvdC5zaXplLFxuICAgICAgICAgICAgZW1wdHk6IHNuYXBzaG90LmVtcHR5LFxuICAgICAgICAgICAgZG9jQ2hhbmdlcyxcbiAgICAgICAgICAgIGRvY3MsXG4gICAgICAgICAgICBtZXRhZGF0YToge1xuICAgICAgICAgICAgICAgIGZyb21DYWNoZTogc25hcHNob3QubWV0YWRhdGEuZnJvbUNhY2hlLFxuICAgICAgICAgICAgICAgIGhhc1BlbmRpbmdXcml0ZXM6IHNuYXBzaG90Lm1ldGFkYXRhLmhhc1BlbmRpbmdXcml0ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH1cblxufVxuIl19