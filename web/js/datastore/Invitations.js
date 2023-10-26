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
Object.defineProperty(exports, "__esModule", { value: true });
const FirebaseDatastore_1 = require("./FirebaseDatastore");
const Firestore_1 = require("../firebase/Firestore");
const Hashcodes_1 = require("../Hashcodes");
const ISODateTimeStrings_1 = require("../metadata/ISODateTimeStrings");
const Preconditions_1 = require("../Preconditions");
const firebase = __importStar(require("../firebase/lib/firebase"));
const Optional_1 = require("../util/ts/Optional");
const RendererAnalytics_1 = require("../ga/RendererAnalytics");
class Invitations {
    static sendInvites(...emailAddresses) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const firestore = yield Firestore_1.Firestore.getInstance();
                for (const emailAddress of emailAddresses) {
                    const record = this.createRecord(emailAddress);
                    yield firestore
                        .collection('invitation')
                        .doc(record.id)
                        .set(record);
                }
                RendererAnalytics_1.RendererAnalytics.event({ category: 'invitations', action: 'invited-' + emailAddresses.length });
            }
            finally {
            }
        });
    }
    static createRecord(to) {
        const auth = firebase.app().auth();
        Preconditions_1.Preconditions.assertPresent(auth, "Not authenticated");
        const user = auth.currentUser;
        Preconditions_1.Preconditions.assertPresent(user, "Not authenticated");
        const uid = user.uid;
        const id = Hashcodes_1.Hashcodes.createRandomID();
        let image;
        if (user.photoURL) {
            image = {
                href: user.photoURL
            };
        }
        const profile = {
            email: user.email,
            name: Optional_1.Optional.of(user.displayName).getOrUndefined(),
            image
        };
        const invitation = {
            timestamp: ISODateTimeStrings_1.ISODateTimeStrings.create(),
            from: profile,
            to
        };
        const recordHolder = {
            uid,
            id,
            visibility: FirebaseDatastore_1.Visibility.PRIVATE,
            value: invitation
        };
        return recordHolder;
    }
}
exports.Invitations = Invitations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52aXRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJbnZpdGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJEQUFpRztBQUNqRyxxREFBZ0Q7QUFDaEQsNENBQXVDO0FBRXZDLHVFQUFxRjtBQUNyRixvREFBK0M7QUFDL0MsbUVBQXFEO0FBRXJELGtEQUE2QztBQUM3QywrREFBMEQ7QUFFMUQsTUFBYSxXQUFXO0lBT2IsTUFBTSxDQUFPLFdBQVcsQ0FBQyxHQUFHLGNBQXdCOztZQUd2RCxJQUFJO2dCQUVBLE1BQU0sU0FBUyxHQUFHLE1BQU0scUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFaEQsS0FBSyxNQUFNLFlBQVksSUFBSSxjQUFjLEVBQUU7b0JBRXZDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBRS9DLE1BQU0sU0FBUzt5QkFDVixVQUFVLENBQUMsWUFBWSxDQUFDO3lCQUN4QixHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzt5QkFDZCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBRXBCO2dCQUVELHFDQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFVBQVUsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQzthQUVsRztvQkFBUzthQUVUO1FBRUwsQ0FBQztLQUFBO0lBS08sTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFnQjtRQUV4QyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsNkJBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFdkQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM5Qiw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUV2RCxNQUFNLEdBQUcsR0FBRyxJQUFLLENBQUMsR0FBRyxDQUFDO1FBRXRCLE1BQU0sRUFBRSxHQUFHLHFCQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEMsSUFBSSxLQUF3QixDQUFDO1FBRTdCLElBQUksSUFBSyxDQUFDLFFBQVEsRUFBRTtZQUVoQixLQUFLLEdBQUc7Z0JBQ0osSUFBSSxFQUFFLElBQUssQ0FBQyxRQUFTO2FBQ3hCLENBQUM7U0FFTDtRQUVELE1BQU0sT0FBTyxHQUFZO1lBQ3JCLEtBQUssRUFBRSxJQUFLLENBQUMsS0FBTTtZQUNuQixJQUFJLEVBQUUsbUJBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsRUFBRTtZQUNyRCxLQUFLO1NBQ1IsQ0FBQztRQUVGLE1BQU0sVUFBVSxHQUFlO1lBQzNCLFNBQVMsRUFBRSx1Q0FBa0IsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsSUFBSSxFQUFFLE9BQU87WUFDYixFQUFFO1NBQ0wsQ0FBQztRQUVGLE1BQU0sWUFBWSxHQUE2QjtZQUMzQyxHQUFHO1lBQ0gsRUFBRTtZQUNGLFVBQVUsRUFBRSw4QkFBVSxDQUFDLE9BQU87WUFDOUIsS0FBSyxFQUFFLFVBQVU7U0FDcEIsQ0FBQztRQUVGLE9BQU8sWUFBWSxDQUFDO0lBRXhCLENBQUM7Q0FFSjtBQWpGRCxrQ0FpRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpY3Rpb25hcmllc30gZnJvbSAnLi4vdXRpbC9EaWN0aW9uYXJpZXMnO1xuaW1wb3J0IHtEYXRhc3RvcmVDb2xsZWN0aW9uLCBEb2NNZXRhSG9sZGVyLCBSZWNvcmRIb2xkZXIsIFZpc2liaWxpdHl9IGZyb20gJy4vRmlyZWJhc2VEYXRhc3RvcmUnO1xuaW1wb3J0IHtGaXJlc3RvcmV9IGZyb20gJy4uL2ZpcmViYXNlL0ZpcmVzdG9yZSc7XG5pbXBvcnQge0hhc2hjb2Rlc30gZnJvbSAnLi4vSGFzaGNvZGVzJztcbmltcG9ydCB7RG9jSW5mb30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nLCBJU09EYXRlVGltZVN0cmluZ3N9IGZyb20gJy4uL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJy4uL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2UvbGliL2ZpcmViYXNlJztcbmltcG9ydCB7VXNlcklEfSBmcm9tICcuLi9maXJlYmFzZS9GaXJlYmFzZSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICcuLi91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uL2dhL1JlbmRlcmVyQW5hbHl0aWNzJztcblxuZXhwb3J0IGNsYXNzIEludml0YXRpb25zIHtcblxuICAgIC8qKlxuICAgICAqIFNlbmQgZW1haWxzIHRvIGEgYnVuY2ggb2YgcGVvcGxlLi4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW1haWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNlbmRJbnZpdGVzKC4uLmVtYWlsQWRkcmVzc2VzOiBzdHJpbmdbXSkge1xuXG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc3QgZmlyZXN0b3JlID0gYXdhaXQgRmlyZXN0b3JlLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZW1haWxBZGRyZXNzIG9mIGVtYWlsQWRkcmVzc2VzKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZWNvcmQgPSB0aGlzLmNyZWF0ZVJlY29yZChlbWFpbEFkZHJlc3MpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgZmlyZXN0b3JlXG4gICAgICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdpbnZpdGF0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgLmRvYyhyZWNvcmQuaWQpXG4gICAgICAgICAgICAgICAgICAgIC5zZXQocmVjb3JkKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdpbnZpdGF0aW9ucycsIGFjdGlvbjogJ2ludml0ZWQtJyArIGVtYWlsQWRkcmVzc2VzLmxlbmd0aH0pO1xuXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAvLyBub29wIGZvciBub3dcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHRoZSBkb2N1bWVudCB0aGF0IHdlIHdpbGwgc3RvcmUgaW4gZm9yIHRoZSBEb2NNZXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlUmVjb3JkKHRvOiBFbWFpbEFkZHJlc3MpIHtcblxuICAgICAgICBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXBwKCkuYXV0aCgpO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQoYXV0aCwgXCJOb3QgYXV0aGVudGljYXRlZFwiKTtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHVzZXIsIFwiTm90IGF1dGhlbnRpY2F0ZWRcIik7XG5cbiAgICAgICAgY29uc3QgdWlkID0gdXNlciEudWlkO1xuXG4gICAgICAgIGNvbnN0IGlkID0gSGFzaGNvZGVzLmNyZWF0ZVJhbmRvbUlEKCk7XG5cbiAgICAgICAgbGV0IGltYWdlOiBJbWFnZSB8IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodXNlciEucGhvdG9VUkwpIHtcblxuICAgICAgICAgICAgaW1hZ2UgPSB7XG4gICAgICAgICAgICAgICAgaHJlZjogdXNlciEucGhvdG9VUkwhXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9maWxlOiBQcm9maWxlID0ge1xuICAgICAgICAgICAgZW1haWw6IHVzZXIhLmVtYWlsISxcbiAgICAgICAgICAgIG5hbWU6IE9wdGlvbmFsLm9mKHVzZXIhLmRpc3BsYXlOYW1lKS5nZXRPclVuZGVmaW5lZCgpLFxuICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpbnZpdGF0aW9uOiBJbnZpdGF0aW9uID0ge1xuICAgICAgICAgICAgdGltZXN0YW1wOiBJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksXG4gICAgICAgICAgICBmcm9tOiBwcm9maWxlLFxuICAgICAgICAgICAgdG9cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZWNvcmRIb2xkZXI6IFJlY29yZEhvbGRlcjxJbnZpdGF0aW9uPiA9IHtcbiAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogVmlzaWJpbGl0eS5QUklWQVRFLFxuICAgICAgICAgICAgdmFsdWU6IGludml0YXRpb25cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVjb3JkSG9sZGVyO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW52aXRhdGlvbiB7XG5cbiAgICByZWFkb25seSB0aW1lc3RhbXA6IElTT0RhdGVUaW1lU3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByb2ZpbGUgaW5mb3JtYXRpb24gb2YgdGhlIHBlcnNvbiB3aG8gc2VuZCB0aGUgaW52aXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZyb206IFByb2ZpbGU7XG5cbiAgICByZWFkb25seSB0bzogRW1haWxBZGRyZXNzO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZmlsZSB7XG4gICAgcmVhZG9ubHkgZW1haWw6IEVtYWlsQWRkcmVzcztcbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGltYWdlPzogSW1hZ2U7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbWFnZSB7XG4gICAgcmVhZG9ubHkgaHJlZjogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHdpZHRoPzogbnVtYmVyO1xuICAgIHJlYWRvbmx5IGhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgRW1haWxBZGRyZXNzID0gc3RyaW5nO1xuXG4iXX0=