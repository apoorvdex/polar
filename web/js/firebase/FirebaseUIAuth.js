"use strict";
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
const firebase = __importStar(require("./lib/firebase"));
const firebaseui_1 = __importDefault(require("./lib/firebaseui"));
const Objects_1 = require("../util/Objects");
const SIGN_IN_SUCCESS_URL = 'http://localhost:8005/content.html';
const TOS_URL = 'https://getpolarized.io/terms-of-service.html';
const PRIVACY_POLICY_URL = 'https://getpolarized.io/terms-of-service.html';
class FirebaseUIAuth {
    static login(partialOpts = {}) {
        const opts = Objects_1.Objects.defaults(partialOpts, {
            containerSelector: '#firebaseui-auth-container',
            signInSuccessUrl: SIGN_IN_SUCCESS_URL
        });
        const uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                    return true;
                },
            },
            queryParameterForWidgetMode: 'mode',
            signInSuccessUrl: opts.signInSuccessUrl,
            signInOptions: [
                {
                    provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    customParameters: {
                        prompt: 'select_account'
                    }
                },
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
            tosUrl: TOS_URL,
            privacyPolicyUrl: () => {
                window.location.assign(PRIVACY_POLICY_URL);
            }
        };
        const ui = new firebaseui_1.default.auth.AuthUI(firebase.auth());
        ui.start(opts.containerSelector, uiConfig);
        return ui;
    }
}
exports.FirebaseUIAuth = FirebaseUIAuth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZWJhc2VVSUF1dGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaXJlYmFzZVVJQXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQSx5REFBMkM7QUFDM0Msa0VBQTBDO0FBQzFDLDZDQUF3QztBQUd4QyxNQUFNLG1CQUFtQixHQUFHLG9DQUFvQyxDQUFDO0FBQ2pFLE1BQU0sT0FBTyxHQUFHLCtDQUErQyxDQUFDO0FBQ2hFLE1BQU0sa0JBQWtCLEdBQUcsK0NBQStDLENBQUM7QUFFM0UsTUFBYSxjQUFjO0lBT2hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBOEMsRUFBRTtRQUVoRSxNQUFNLElBQUksR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDdkMsaUJBQWlCLEVBQUUsNEJBQTRCO1lBQy9DLGdCQUFnQixFQUFFLG1CQUFtQjtTQUN4QyxDQUFDLENBQUM7UUFHSCxNQUFNLFFBQVEsR0FBRztZQUtiLFNBQVMsRUFBRTtnQkFFUCwyQkFBMkIsRUFBRSxDQUFDLFVBQWUsRUFDZixXQUFtQixFQUFFLEVBQUU7b0JBRWpELE9BQU8sSUFBSSxDQUFDO2dCQUVoQixDQUFDO2FBRUo7WUFDRCwyQkFBMkIsRUFBRSxNQUFNO1lBRW5DLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsYUFBYSxFQUFFO2dCQUNYO29CQUNJLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVc7b0JBQ3RELGdCQUFnQixFQUFFO3dCQUdkLE1BQU0sRUFBRSxnQkFBZ0I7cUJBQzNCO2lCQUNKO2dCQVFELFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVzthQUc5QztZQUdELE1BQU0sRUFBRSxPQUFPO1lBR2YsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO2dCQUNuQixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQy9DLENBQUM7U0FFSixDQUFDO1FBR0YsTUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFdkQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFM0MsT0FBTyxFQUFFLENBQUM7SUFFZCxDQUFDO0NBRUo7QUF6RUQsd0NBeUVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbi8vIGltcG9ydCBmaXJlYmFzZXVpIGZyb20gJ2ZpcmViYXNldWknO1xuLy8gaW1wb3J0IEF1dGhVSSA9IGZpcmViYXNldWkuYXV0aC5BdXRoVUk7XG5cbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJy4vbGliL2ZpcmViYXNlJztcbmltcG9ydCBmaXJlYmFzZXVpIGZyb20gJy4vbGliL2ZpcmViYXNldWknO1xuaW1wb3J0IHtPYmplY3RzfSBmcm9tICcuLi91dGlsL09iamVjdHMnO1xuXG4vLyBub2luc3BlY3Rpb24gVHNMaW50OiBtYXgtbGluZS1sZW5ndGhcbmNvbnN0IFNJR05fSU5fU1VDQ0VTU19VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDA1L2NvbnRlbnQuaHRtbCc7XG5jb25zdCBUT1NfVVJMID0gJ2h0dHBzOi8vZ2V0cG9sYXJpemVkLmlvL3Rlcm1zLW9mLXNlcnZpY2UuaHRtbCc7XG5jb25zdCBQUklWQUNZX1BPTElDWV9VUkwgPSAnaHR0cHM6Ly9nZXRwb2xhcml6ZWQuaW8vdGVybXMtb2Ytc2VydmljZS5odG1sJztcblxuZXhwb3J0IGNsYXNzIEZpcmViYXNlVUlBdXRoIHtcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHRoZSBsb2dpbiBhbmQgcmVuZGVyIHRoZSBsb2dpbiBib3ggdG8gdGhlIGdpdmVuIHNlbGVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRhaW5lclNlbGVjdG9yXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBsb2dpbihwYXJ0aWFsT3B0czogUGFydGlhbDxGaXJlYmFzZVVJQXV0aE9wdGlvbnM+ID0ge30pOiBmaXJlYmFzZXVpLmF1dGguQXV0aFVJIHtcblxuICAgICAgICBjb25zdCBvcHRzID0gT2JqZWN0cy5kZWZhdWx0cyhwYXJ0aWFsT3B0cywge1xuICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6ICcjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lcicsXG4gICAgICAgICAgICBzaWduSW5TdWNjZXNzVXJsOiBTSUdOX0lOX1NVQ0NFU1NfVVJMXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEZpcmViYXNlVUkgY29uZmlnLlxuICAgICAgICBjb25zdCB1aUNvbmZpZyA9IHtcblxuICAgICAgICAgICAgLy8gcG9wdXBNb2RlOiB0cnVlLFxuICAgICAgICAgICAgLy8gc2lnbkluRmxvdzogJ3BvcHVwJyxcblxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG5cbiAgICAgICAgICAgICAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6IChhdXRoUmVzdWx0OiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RVcmw6IHN0cmluZykgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyRm9yV2lkZ2V0TW9kZTogJ21vZGUnLFxuXG4gICAgICAgICAgICBzaWduSW5TdWNjZXNzVXJsOiBvcHRzLnNpZ25JblN1Y2Nlc3NVcmwsXG4gICAgICAgICAgICBzaWduSW5PcHRpb25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcjogZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbVBhcmFtZXRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvcmNlcyBhY2NvdW50IHNlbGVjdGlvbiBldmVuIHdoZW4gb25lIGFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzIGF2YWlsYWJsZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdDogJ3NlbGVjdF9hY2NvdW50J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vIExlYXZlIHRoZSBsaW5lcyBhcyBpcyBmb3IgdGhlIHByb3ZpZGVycyB5b3Ugd2FudCB0byBvZmZlclxuICAgICAgICAgICAgICAgIC8vIHlvdXIgdXNlcnMuXG5cbiAgICAgICAgICAgICAgICAvLyBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxuICAgICAgICAgICAgICAgIC8vIGZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcbiAgICAgICAgICAgICAgICAvLyBmaXJlYmFzZS5hdXRoLkdpdGh1YkF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxuICAgICAgICAgICAgICAgIC8vIGZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXG4gICAgICAgICAgICAgICAgLy8gZmlyZWJhc2V1aS5hdXRoLkFub255bW91c0F1dGhQcm92aWRlci5QUk9WSURFUl9JRFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIHRvc1VybCBhbmQgcHJpdmFjeVBvbGljeVVybCBhY2NlcHQgZWl0aGVyIHVybCBzdHJpbmcgb3IgYVxuICAgICAgICAgICAgLy8gY2FsbGJhY2sgZnVuY3Rpb24uIFRlcm1zIG9mIHNlcnZpY2UgdXJsL2NhbGxiYWNrLlxuICAgICAgICAgICAgdG9zVXJsOiBUT1NfVVJMLFxuXG4gICAgICAgICAgICAvLyBQcml2YWN5IHBvbGljeSB1cmwvY2FsbGJhY2suXG4gICAgICAgICAgICBwcml2YWN5UG9saWN5VXJsOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihQUklWQUNZX1BPTElDWV9VUkwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgRmlyZWJhc2VVSSBXaWRnZXQgdXNpbmcgRmlyZWJhc2UuXG4gICAgICAgIGNvbnN0IHVpID0gbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoZmlyZWJhc2UuYXV0aCgpKTtcbiAgICAgICAgLy8gVGhlIHN0YXJ0IG1ldGhvZCB3aWxsIHdhaXQgdW50aWwgdGhlIERPTSBpcyBsb2FkZWQuXG4gICAgICAgIHVpLnN0YXJ0KG9wdHMuY29udGFpbmVyU2VsZWN0b3IsIHVpQ29uZmlnKTtcblxuICAgICAgICByZXR1cm4gdWk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaXJlYmFzZVVJQXV0aE9wdGlvbnMge1xuICAgIHJlYWRvbmx5IGNvbnRhaW5lclNlbGVjdG9yOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgc2lnbkluU3VjY2Vzc1VybDogc3RyaW5nO1xufVxuIl19