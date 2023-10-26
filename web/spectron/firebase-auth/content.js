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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const Firebase_1 = require("../../js/firebase/Firebase");
const FirebaseUIAuth_1 = require("../../js/firebase/FirebaseUIAuth");
const firebase = __importStar(require("../../js/firebase/lib/firebase"));
const Elements_1 = require("../../js/util/Elements");
let docID = 0;
function onData(snapshot) {
    console.log("got some data");
    const messagesElement = document.getElementById('messages');
    for (const docChange of snapshot.docChanges()) {
        if (docChange.type === 'added') {
            const doc = docChange.doc;
            const data = JSON.stringify(doc.data(), null, "  ");
            const id = ++docID;
            messagesElement.appendChild(Elements_1.Elements.createElementHTML(`<pre>${id}. ${data}</pre>`));
        }
    }
}
let firestore;
let currentUser = null;
function onAuth(user) {
    return __awaiter(this, void 0, void 0, function* () {
        currentUser = user;
        if (user) {
            const displayName = user.displayName;
            const email = user.email;
            const emailVerified = user.emailVerified;
            const photoURL = user.photoURL;
            const uid = user.uid;
            const phoneNumber = user.phoneNumber;
            const providerData = user.providerData;
            const accessToken = yield user.getIdToken();
            document.getElementById('sign-in-status').textContent = 'Signed in';
            document.getElementById('sign-in').textContent = 'Sign in';
            document.getElementById('account-details').textContent = JSON.stringify({
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
                uid: uid,
                accessToken: accessToken,
                providerData: providerData
            }, null, '  ');
        }
        else {
            document.getElementById('sign-in-status').textContent = 'Signed out';
            document.getElementById('sign-in').textContent = 'Sign out';
            document.getElementById('account-details').textContent = 'null';
        }
    });
}
function onAuthError(err) {
    console.log(err);
}
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    Firebase_1.Firebase.init();
    if (firebase.auth().currentUser === null) {
        FirebaseUIAuth_1.FirebaseUIAuth.login({ signInSuccessUrl: document.location.href + '#authenticated' });
    }
    const initApp = () => __awaiter(this, void 0, void 0, function* () {
        yield firebase.auth()
            .onAuthStateChanged((user) => __awaiter(this, void 0, void 0, function* () { return yield onAuth(user); }), (err) => onAuthError(err));
    });
    window.addEventListener('load', () => __awaiter(this, void 0, void 0, function* () {
        return initApp();
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUseURBQW9EO0FBQ3BELHFFQUFnRTtBQUNoRSx5RUFBMkQ7QUFDM0QscURBQWdEO0FBT2hELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUVkLFNBQVMsTUFBTSxDQUFDLFFBQTBDO0lBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFN0IsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUUsQ0FBQztJQUk3RCxLQUFLLE1BQU0sU0FBUyxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUUsRUFBRTtRQUUzQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQzVCLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFFMUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3BELE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ25CLGVBQWUsQ0FBQyxXQUFXLENBQUMsbUJBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDeEY7S0FFSjtBQUNMLENBQUM7QUFFRCxJQUFJLFNBQXVDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQXlCLElBQUksQ0FBQztBQUU3QyxTQUFlLE1BQU0sQ0FBQyxJQUEwQjs7UUFFNUMsV0FBVyxHQUFHLElBQUssQ0FBQztRQUVwQixJQUFJLElBQUksRUFBRTtZQUVOLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDckMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ3pDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNyQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3JDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFdkMsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFFNUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDckUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUUsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1lBRzVELFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDckUsV0FBVyxFQUFFLFdBQVc7Z0JBQ3hCLEtBQUssRUFBRSxLQUFLO2dCQUNaLGFBQWEsRUFBRSxhQUFhO2dCQUM1QixXQUFXLEVBQUUsV0FBVztnQkFDeEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEdBQUcsRUFBRSxHQUFHO2dCQUNSLFdBQVcsRUFBRSxXQUFXO2dCQUN4QixZQUFZLEVBQUUsWUFBWTthQUM3QixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUVsQjthQUFNO1lBRUgsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7WUFDdEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUUsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1lBQzdELFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUUsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1NBQ3BFO0lBRUwsQ0FBQztDQUFBO0FBRUQsU0FBUyxXQUFXLENBQUMsR0FBd0I7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixDQUFDO0FBRUQsbUNBQWdCLENBQUMsR0FBRyxDQUFDLEdBQVMsRUFBRTtJQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFFcEQsbUJBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVoQixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1FBQ3RDLCtCQUFjLENBQUMsS0FBSyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLFFBQVMsQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO0tBQ3hGO0lBR0QsTUFBTSxPQUFPLEdBQUcsR0FBUyxFQUFFO1FBTXZCLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRTthQUNoQixrQkFBa0IsQ0FBQyxDQUFPLElBQUksRUFBRSxFQUFFLGdEQUFDLE9BQUEsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUEsR0FBQSxFQUNsQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFdkQsQ0FBQyxDQUFBLENBQUM7SUFFRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQVMsRUFBRTtRQUV2QyxPQUFPLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHUCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSAnLi4vLi4vanMvZmlyZWJhc2UvRmlyZWJhc2UnO1xuaW1wb3J0IHtGaXJlYmFzZVVJQXV0aH0gZnJvbSAnLi4vLi4vanMvZmlyZWJhc2UvRmlyZWJhc2VVSUF1dGgnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnLi4vLi4vanMvZmlyZWJhc2UvbGliL2ZpcmViYXNlJztcbmltcG9ydCB7RWxlbWVudHN9IGZyb20gJy4uLy4uL2pzL3V0aWwvRWxlbWVudHMnO1xuXG4vLyByZXF1aXJlKCdmaXJlYmFzZScpO1xuLy8gaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSAnLi9GaXJlYmFzZSc7XG4vLyBpbXBvcnQge0ZpcmViYXNlVUlBdXRofSBmcm9tICcuL0ZpcmViYXNlVUlBdXRoJztcbi8vIGltcG9ydCB7RmlyZWJhc2VVSUF1dGh9IGZyb20gJy4vRmlyZWJhc2VVSUF1dGgnO1xuXG5sZXQgZG9jSUQgPSAwO1xuXG5mdW5jdGlvbiBvbkRhdGEoc25hcHNob3Q6IGZpcmViYXNlLmZpcmVzdG9yZS5RdWVyeVNuYXBzaG90KSB7XG4gICAgY29uc29sZS5sb2coXCJnb3Qgc29tZSBkYXRhXCIpO1xuXG4gICAgY29uc3QgbWVzc2FnZXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2VzJykhO1xuXG4gICAgLy8gbWVzc2FnZXNFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgZm9yIChjb25zdCBkb2NDaGFuZ2Ugb2Ygc25hcHNob3QuZG9jQ2hhbmdlcygpKSB7XG5cbiAgICAgICAgaWYgKGRvY0NoYW5nZS50eXBlID09PSAnYWRkZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBkb2MgPSBkb2NDaGFuZ2UuZG9jO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZG9jLmRhdGEoKSwgbnVsbCwgXCIgIFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gKytkb2NJRDtcbiAgICAgICAgICAgIG1lc3NhZ2VzRWxlbWVudC5hcHBlbmRDaGlsZChFbGVtZW50cy5jcmVhdGVFbGVtZW50SFRNTChgPHByZT4ke2lkfS4gJHtkYXRhfTwvcHJlPmApKTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5sZXQgZmlyZXN0b3JlOiBmaXJlYmFzZS5maXJlc3RvcmUuRmlyZXN0b3JlO1xubGV0IGN1cnJlbnRVc2VyOiBmaXJlYmFzZS5Vc2VyIHwgbnVsbCA9IG51bGw7XG5cbmFzeW5jIGZ1bmN0aW9uIG9uQXV0aCh1c2VyOiBmaXJlYmFzZS5Vc2VyIHwgbnVsbCkge1xuXG4gICAgY3VycmVudFVzZXIgPSB1c2VyITtcblxuICAgIGlmICh1c2VyKSB7XG4gICAgICAgIC8vIFVzZXIgaXMgc2lnbmVkIGluLlxuICAgICAgICBjb25zdCBkaXNwbGF5TmFtZSA9IHVzZXIuZGlzcGxheU5hbWU7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gdXNlci5lbWFpbDtcbiAgICAgICAgY29uc3QgZW1haWxWZXJpZmllZCA9IHVzZXIuZW1haWxWZXJpZmllZDtcbiAgICAgICAgY29uc3QgcGhvdG9VUkwgPSB1c2VyLnBob3RvVVJMO1xuICAgICAgICBjb25zdCB1aWQgPSB1c2VyLnVpZDtcbiAgICAgICAgY29uc3QgcGhvbmVOdW1iZXIgPSB1c2VyLnBob25lTnVtYmVyO1xuICAgICAgICBjb25zdCBwcm92aWRlckRhdGEgPSB1c2VyLnByb3ZpZGVyRGF0YTtcblxuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF3YWl0IHVzZXIuZ2V0SWRUb2tlbigpO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLWluLXN0YXR1cycpIS50ZXh0Q29udGVudCA9ICdTaWduZWQgaW4nO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi1pbicpIS50ZXh0Q29udGVudCA9ICdTaWduIGluJztcblxuICAgICAgICAvLyBub2luc3BlY3Rpb24gVHNMaW50XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NvdW50LWRldGFpbHMnKSEudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiBlbWFpbFZlcmlmaWVkLFxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHBob25lTnVtYmVyLFxuICAgICAgICAgICAgcGhvdG9VUkw6IHBob3RvVVJMLFxuICAgICAgICAgICAgdWlkOiB1aWQsXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICBwcm92aWRlckRhdGE6IHByb3ZpZGVyRGF0YVxuICAgICAgICB9LCBudWxsLCAnICAnKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZXIgaXMgc2lnbmVkIG91dCBvciB0aGVyZSBpcyBubyB1c2VyLlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi1pbi1zdGF0dXMnKSEudGV4dENvbnRlbnQgPSAnU2lnbmVkIG91dCc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLWluJykhLnRleHRDb250ZW50ID0gJ1NpZ24gb3V0JztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY291bnQtZGV0YWlscycpIS50ZXh0Q29udGVudCA9ICdudWxsJztcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gb25BdXRoRXJyb3IoZXJyOiBmaXJlYmFzZS5hdXRoLkVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbn1cblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKCkgPT4ge1xuXG4gICAgY29uc29sZS5sb2coXCJSdW5uaW5nIHdpdGhpbiBTcGVjdHJvblJlbmRlcmVyIG5vdy5cIik7XG5cbiAgICBGaXJlYmFzZS5pbml0KCk7XG5cbiAgICBpZiAoZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyID09PSBudWxsKSB7XG4gICAgICAgIEZpcmViYXNlVUlBdXRoLmxvZ2luKHtzaWduSW5TdWNjZXNzVXJsOiBkb2N1bWVudC5sb2NhdGlvbiEuaHJlZiArICcjYXV0aGVudGljYXRlZCd9KTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBJIGRvbid0IGxpa2UgdGhhdCB0aGUgc2Vjb25kIGFyZyBoZXJlIGlzIHRoZSBlcnJvciBoYW5kbGluZy5cbiAgICBjb25zdCBpbml0QXBwID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIC8vIGF1dGhTdGF0ZShmaXJlYmFzZS5hdXRoKCkpXG4gICAgICAgIC8vICAgICAucGlwZShmaWx0ZXIodXNlciA9PiB1c2VyICE9PSBudWxsKSlcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUodXNlciA9PiBjb25zb2xlLmxvZygndGhlIGxvZ2dlZCBpbiB1c2VyJywgdXNlcikpXG5cbiAgICAgICAgYXdhaXQgZmlyZWJhc2UuYXV0aCgpXG4gICAgICAgICAgICAub25BdXRoU3RhdGVDaGFuZ2VkKGFzeW5jICh1c2VyKSA9PiBhd2FpdCBvbkF1dGgodXNlciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnIpID0+IG9uQXV0aEVycm9yKGVycikpO1xuXG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIHJldHVybiBpbml0QXBwKCk7XG4gICAgfSk7XG5cblxufSk7XG5cbiJdfQ==