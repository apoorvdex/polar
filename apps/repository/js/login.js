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
const Firebase_1 = require("../../../web/js/firebase/Firebase");
const FirebaseUIAuth_1 = require("../../../web/js/firebase/FirebaseUIAuth");
const firebase = __importStar(require("../../../web/js/firebase/lib/firebase"));
const URLs_1 = require("../../../web/js/util/URLs");
const AppRuntime_1 = require("../../../web/js/AppRuntime");
window.addEventListener('load', () => __awaiter(this, void 0, void 0, function* () {
    Firebase_1.Firebase.init();
    if (firebase.auth().currentUser === null) {
        const base = URLs_1.URLs.toBase(document.location.href);
        const signInPath = AppRuntime_1.AppRuntime.isBrowser() ? "/" : '/apps/repository/index.html#configured';
        const signInSuccessUrl = new URL(signInPath, base).toString();
        FirebaseUIAuth_1.FirebaseUIAuth.login({ signInSuccessUrl });
    }
}));
Firebase_1.Firebase.init();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUUzRCw0RUFBdUU7QUFDdkUsZ0ZBQWtFO0FBQ2xFLG9EQUErQztBQUMvQywyREFBc0Q7QUFFdEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFTLEVBQUU7SUFFdkMsbUJBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVoQixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1FBRXRDLE1BQU0sSUFBSSxHQUFHLFdBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsRCxNQUFNLFVBQVUsR0FDVix1QkFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLHdDQUF3QyxDQUFDO1FBRTlFLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTlELCtCQUFjLENBQUMsS0FBSyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO0tBRTVDO0FBRUwsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILG1CQUFRLENBQUMsSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpcmViYXNlfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvZmlyZWJhc2UvRmlyZWJhc2UnO1xuaW1wb3J0IHtOYXZ9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy91aS91dGlsL05hdic7XG5pbXBvcnQge0ZpcmViYXNlVUlBdXRofSBmcm9tICcuLi8uLi8uLi93ZWIvanMvZmlyZWJhc2UvRmlyZWJhc2VVSUF1dGgnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2ZpcmViYXNlL2xpYi9maXJlYmFzZSc7XG5pbXBvcnQge1VSTHN9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy91dGlsL1VSTHMnO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvQXBwUnVudGltZSc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xuXG4gICAgRmlyZWJhc2UuaW5pdCgpO1xuXG4gICAgaWYgKGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlciA9PT0gbnVsbCkge1xuXG4gICAgICAgIGNvbnN0IGJhc2UgPSBVUkxzLnRvQmFzZShkb2N1bWVudC5sb2NhdGlvbiEuaHJlZik7XG5cbiAgICAgICAgY29uc3Qgc2lnbkluUGF0aFxuICAgICAgICAgICAgPSBBcHBSdW50aW1lLmlzQnJvd3NlcigpID8gXCIvXCIgOiAnL2FwcHMvcmVwb3NpdG9yeS9pbmRleC5odG1sI2NvbmZpZ3VyZWQnO1xuXG4gICAgICAgIGNvbnN0IHNpZ25JblN1Y2Nlc3NVcmwgPSBuZXcgVVJMKHNpZ25JblBhdGgsIGJhc2UpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgRmlyZWJhc2VVSUF1dGgubG9naW4oe3NpZ25JblN1Y2Nlc3NVcmx9KTtcblxuICAgIH1cblxufSk7XG5cbkZpcmViYXNlLmluaXQoKTtcblxuIl19