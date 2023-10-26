"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CloudLoginModal_1 = require("./CloudLoginModal");
const Firebase_1 = require("../../firebase/Firebase");
const firebase = __importStar(require("../../firebase/lib/firebase"));
const Logger_1 = require("../../logger/Logger");
const CloudSyncConfiguredModal_1 = require("./CloudSyncConfiguredModal");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const Nav_1 = require("../util/Nav");
const InviteUsersModal_1 = require("./InviteUsersModal");
const Invitations_1 = require("../../datastore/Invitations");
const URLs_1 = require("../../util/URLs");
const EnableCloudSyncButton_1 = require("./EnableCloudSyncButton");
const AccountDropdown_1 = require("./AccountDropdown");
const AuthHandler_1 = require("../../apps/repository/auth_handler/AuthHandler");
const AccountControlDropdown_1 = require("./AccountControlDropdown");
const log = Logger_1.Logger.create();
class CloudAuthButton extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.enableCloudSync = this.enableCloudSync.bind(this);
        let stage;
        if (document.location.hash === '#login') {
            RendererAnalytics_1.RendererAnalytics.event({ category: 'cloud', action: 'login' });
            stage = 'login';
        }
        if (document.location.hash === "#configured") {
            RendererAnalytics_1.RendererAnalytics.event({ category: 'cloud', action: 'configured' });
            stage = 'configured';
        }
        this.state = {
            mode: 'none',
            stage
        };
        log.info("auth state: ", this.state);
        Firebase_1.Firebase.init();
        firebase.auth()
            .onAuthStateChanged((user) => this.onAuth(user), (err) => this.onAuthError(err));
    }
    render() {
        const AccountButton = () => {
            if (this.state.userInfo) {
                return react_1.default.createElement(AccountControlDropdown_1.AccountControlDropdown, { userInfo: this.state.userInfo, onInvite: () => this.changeAuthStage('invite'), onLogout: () => this.logout() });
            }
            else {
                return react_1.default.createElement(AccountDropdown_1.AccountDropdown, { onInvite: () => this.changeAuthStage('invite'), onLogout: () => this.logout() });
            }
        };
        if (this.state.mode === 'needs-auth') {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement(EnableCloudSyncButton_1.EnableCloudSyncButton, { onClick: () => this.enableCloudSync() }),
                react_1.default.createElement(CloudLoginModal_1.CloudLoginModal, { isOpen: this.state.stage === 'login', onCancel: () => this.changeAuthStage() })));
        }
        else if (this.state.mode === 'authenticated') {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement(CloudSyncConfiguredModal_1.CloudSyncConfiguredModal, { isOpen: this.state.stage === 'configured', onCancel: () => this.changeAuthStage() }),
                react_1.default.createElement(InviteUsersModal_1.InviteUsersModal, { isOpen: this.state.stage === 'invite', onCancel: () => this.changeAuthStage(), onInvite: (emailAddresses) => this.onInvitedUsers(emailAddresses) }),
                react_1.default.createElement(AccountButton, null)));
        }
        else {
            return (react_1.default.createElement("div", null));
        }
    }
    logout() {
        this.props.persistenceLayerManager.reset();
        firebase.auth().signOut()
            .then(() => {
            window.location.href = Nav_1.Nav.createHashURL('logout');
            window.location.reload();
        })
            .catch(err => log.error("Unable to logout: ", err));
    }
    onInvitedUsers(emailAddresses) {
        const handleInvitedUsers = () => __awaiter(this, void 0, void 0, function* () {
            yield Invitations_1.Invitations.sendInvites(...emailAddresses);
            this.changeAuthStage();
        });
        handleInvitedUsers()
            .catch(err => log.error("Unable to invite users: ", err));
    }
    enableCloudSync() {
        this.changeAuthStage('login');
    }
    changeAuthStage(stage) {
        if (stage === 'login') {
            const base = URLs_1.URLs.toBase(document.location.href);
            const newLocation = new URL('/apps/repository/login.html', base).toString();
            window.location.href = newLocation;
            return;
        }
        if (stage) {
            RendererAnalytics_1.RendererAnalytics.event({ category: 'cloud', action: 'stage-' + stage });
            document.location.hash = stage;
        }
        else {
            document.location.hash = '';
        }
        this.setState({
            mode: this.state.mode,
            stage
        });
    }
    onAuth(user) {
        AuthHandler_1.AuthHandlers.get().userInfo()
            .then((userInfo) => {
            let mode = 'needs-auth';
            if (user) {
                mode = 'authenticated';
            }
            this.setState({
                mode,
                userInfo: userInfo.getOrUndefined()
            });
        })
            .catch(err => log.error("Unable to get user info: ", err));
    }
    onAuthError(err) {
        log.error("Authentication error: ", err);
    }
}
exports.CloudAuthButton = CloudAuthButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRBdXRoQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xvdWRBdXRoQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUcxQix1REFBa0Q7QUFDbEQsc0RBQWlEO0FBQ2pELHNFQUF3RDtBQUV4RCxnREFBMkM7QUFHM0MseUVBQW9FO0FBQ3BFLGtFQUE2RDtBQUM3RCxxQ0FBZ0M7QUFDaEMseURBQW9EO0FBQ3BELDZEQUF3RDtBQUV4RCwwQ0FBcUM7QUFDckMsbUVBQThEO0FBQzlELHVEQUFrRDtBQUNsRCxnRkFBbUc7QUFHbkcscUVBQWdFO0FBRWhFLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGVBQWdCLFNBQVEsZUFBSyxDQUFDLFNBQXlCO0lBRWhFLFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZELElBQUksS0FBNEIsQ0FBQztRQUVqQyxJQUFJLFFBQVEsQ0FBQyxRQUFTLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUN0QyxxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO1lBQzlELEtBQUssR0FBRyxPQUFPLENBQUM7U0FDbkI7UUFFRCxJQUFJLFFBQVEsQ0FBQyxRQUFTLENBQUMsSUFBSSxLQUFLLGFBQWEsRUFBRTtZQUMzQyxxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFDO1lBQ25FLEtBQUssR0FBRyxZQUFZLENBQUM7U0FDeEI7UUFFRCxJQUFJLENBQUMsS0FB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QUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDckIsS0FBSztTQUNSLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTyxNQUFNLENBQUMsSUFBMEI7UUFFckMsMEJBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUU7YUFDeEIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFFZixJQUFJLElBQUksR0FBYSxZQUFZLENBQUM7WUFFbEMsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxHQUFHLGVBQWUsQ0FBQzthQUMxQjtZQUVELElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsSUFBSTtnQkFDSixRQUFRLEVBQUUsUUFBUSxDQUFDLGNBQWMsRUFBRTthQUN0QyxDQUFDLENBQUM7UUFHUCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFbkUsQ0FBQztJQUVPLFdBQVcsQ0FBQyxHQUF3QjtRQUN4QyxHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FFSjtBQXBMRCwwQ0FvTEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tbXVsdGktY29tcDogMCwgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9uLCBQb3BvdmVyLCBQb3BvdmVyQm9keSwgVW5jb250cm9sbGVkRHJvcGRvd24sIERyb3Bkb3duVG9nZ2xlLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbX0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcyc7XG5pbXBvcnQge0Nsb3VkTG9naW5Nb2RhbH0gZnJvbSAnLi9DbG91ZExvZ2luTW9kYWwnO1xuaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvRmlyZWJhc2UnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnLi4vLi4vZmlyZWJhc2UvbGliL2ZpcmViYXNlJztcbmltcG9ydCB7RmlyZWJhc2VVSUF1dGh9IGZyb20gJy4uLy4uL2ZpcmViYXNlL0ZpcmViYXNlVUlBdXRoJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyTWFuYWdlcic7XG5pbXBvcnQge0Nsb3VkU3luY092ZXJ2aWV3TW9kYWx9IGZyb20gJy4vQ2xvdWRTeW5jT3ZlcnZpZXdNb2RhbCc7XG5pbXBvcnQge0Nsb3VkU3luY0NvbmZpZ3VyZWRNb2RhbH0gZnJvbSAnLi9DbG91ZFN5bmNDb25maWd1cmVkTW9kYWwnO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IHtOYXZ9IGZyb20gJy4uL3V0aWwvTmF2JztcbmltcG9ydCB7SW52aXRlVXNlcnNNb2RhbH0gZnJvbSAnLi9JbnZpdGVVc2Vyc01vZGFsJztcbmltcG9ydCB7SW52aXRhdGlvbnN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9JbnZpdGF0aW9ucyc7XG5pbXBvcnQge1NpbXBsZVRvb2x0aXB9IGZyb20gJy4uL3Rvb2x0aXAvU2ltcGxlVG9vbHRpcCc7XG5pbXBvcnQge1VSTHN9IGZyb20gJy4uLy4uL3V0aWwvVVJMcyc7XG5pbXBvcnQge0VuYWJsZUNsb3VkU3luY0J1dHRvbn0gZnJvbSAnLi9FbmFibGVDbG91ZFN5bmNCdXR0b24nO1xuaW1wb3J0IHtBY2NvdW50RHJvcGRvd259IGZyb20gJy4vQWNjb3VudERyb3Bkb3duJztcbmltcG9ydCB7QXV0aEhhbmRsZXIsIEF1dGhIYW5kbGVycywgVXNlckluZm99IGZyb20gJy4uLy4uL2FwcHMvcmVwb3NpdG9yeS9hdXRoX2hhbmRsZXIvQXV0aEhhbmRsZXInO1xuaW1wb3J0IHtTaW11bGF0ZX0gZnJvbSAncmVhY3QtZG9tL3Rlc3QtdXRpbHMnO1xuaW1wb3J0IGNhblBsYXlUaHJvdWdoID0gU2ltdWxhdGUuY2FuUGxheVRocm91Z2g7XG5pbXBvcnQge0FjY291bnRDb250cm9sRHJvcGRvd259IGZyb20gJy4vQWNjb3VudENvbnRyb2xEcm9wZG93bic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIENsb3VkQXV0aEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVDbG91ZFN5bmMgPSB0aGlzLmVuYWJsZUNsb3VkU3luYy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGxldCBzdGFnZTogQXV0aFN0YWdlIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbiEuaGFzaCA9PT0gJyNsb2dpbicpIHtcbiAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ2Nsb3VkJywgYWN0aW9uOiAnbG9naW4nfSk7XG4gICAgICAgICAgICBzdGFnZSA9ICdsb2dpbic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24hLmhhc2ggPT09IFwiI2NvbmZpZ3VyZWRcIikge1xuICAgICAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAnY2xvdWQnLCBhY3Rpb246ICdjb25maWd1cmVkJ30pO1xuICAgICAgICAgICAgc3RhZ2UgPSAnY29uZmlndXJlZCc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbW9kZTogJ25vbmUnLFxuICAgICAgICAgICAgc3RhZ2VcbiAgICAgICAgfTtcblxuICAgICAgICBsb2cuaW5mbyhcImF1dGggc3RhdGU6IFwiLCB0aGlzLnN0YXRlKTtcblxuICAgICAgICBGaXJlYmFzZS5pbml0KCk7XG5cbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpXG4gICAgICAgICAgICAub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB0aGlzLm9uQXV0aCh1c2VyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycikgPT4gdGhpcy5vbkF1dGhFcnJvcihlcnIpKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgQWNjb3VudEJ1dHRvbiA9ICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudXNlckluZm8pIHtcblxuICAgICAgICAgICAgICAgIHJldHVybiA8QWNjb3VudENvbnRyb2xEcm9wZG93biB1c2VySW5mbz17dGhpcy5zdGF0ZS51c2VySW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnZpdGU9eygpID0+IHRoaXMuY2hhbmdlQXV0aFN0YWdlKCdpbnZpdGUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2dvdXQ9eygpID0+IHRoaXMubG9nb3V0KCl9Lz47XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gPEFjY291bnREcm9wZG93biBvbkludml0ZT17KCkgPT4gdGhpcy5jaGFuZ2VBdXRoU3RhZ2UoJ2ludml0ZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9nb3V0PXsoKSA9PiB0aGlzLmxvZ291dCgpfS8+O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tb2RlID09PSAnbmVlZHMtYXV0aCcpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICA8RW5hYmxlQ2xvdWRTeW5jQnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuZW5hYmxlQ2xvdWRTeW5jKCl9Lz5cblxuICAgICAgICAgICAgICAgICAgICA8Q2xvdWRMb2dpbk1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5zdGFnZSA9PT0gJ2xvZ2luJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy5jaGFuZ2VBdXRoU3RhZ2UoKX0vPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgey8qPENsb3VkU3luY092ZXJ2aWV3TW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLnN0YWdlID09PSAnb3ZlcnZpZXcnfSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypvbkNhbmNlbD17KCkgPT4gdGhpcy5jaGFuZ2VBdXRoU3RhZ2UoKX0qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qb25TaWdudXA9eygpID0+IHRoaXMuY2hhbmdlQXV0aFN0YWdlKCdsb2dpbicpfS8+Ki99XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUubW9kZSA9PT0gJ2F1dGhlbnRpY2F0ZWQnKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICA8Q2xvdWRTeW5jQ29uZmlndXJlZE1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5zdGFnZSA9PT0gJ2NvbmZpZ3VyZWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLmNoYW5nZUF1dGhTdGFnZSgpfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEludml0ZVVzZXJzTW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLnN0YWdlID09PSAnaW52aXRlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuY2hhbmdlQXV0aFN0YWdlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW52aXRlPXsoZW1haWxBZGRyZXNzZXMpID0+IHRoaXMub25JbnZpdGVkVXNlcnMoZW1haWxBZGRyZXNzZXMpfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEFjY291bnRCdXR0b24vPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoPGRpdj48L2Rpdj4pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZ291dCgpIHtcblxuICAgICAgICB0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyLnJlc2V0KCk7XG5cbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBOYXYuY3JlYXRlSGFzaFVSTCgnbG9nb3V0Jyk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gbG9nb3V0OiBcIiwgZXJyKSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uSW52aXRlZFVzZXJzKGVtYWlsQWRkcmVzc2VzOiBSZWFkb25seUFycmF5PHN0cmluZz4pIHtcblxuICAgICAgICBjb25zdCBoYW5kbGVJbnZpdGVkVXNlcnMgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGF3YWl0IEludml0YXRpb25zLnNlbmRJbnZpdGVzKC4uLmVtYWlsQWRkcmVzc2VzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQXV0aFN0YWdlKCk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBoYW5kbGVJbnZpdGVkVXNlcnMoKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gaW52aXRlIHVzZXJzOiBcIiwgZXJyKSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGVuYWJsZUNsb3VkU3luYygpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VBdXRoU3RhZ2UoJ2xvZ2luJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VBdXRoU3RhZ2Uoc3RhZ2U/OiBBdXRoU3RhZ2UpIHtcblxuICAgICAgICBpZiAoc3RhZ2UgPT09ICdsb2dpbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2UgPSBVUkxzLnRvQmFzZShkb2N1bWVudC5sb2NhdGlvbiEuaHJlZik7XG4gICAgICAgICAgICBjb25zdCBuZXdMb2NhdGlvbiA9IG5ldyBVUkwoJy9hcHBzL3JlcG9zaXRvcnkvbG9naW4uaHRtbCcsIGJhc2UpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5ld0xvY2F0aW9uO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YWdlKSB7XG5cbiAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ2Nsb3VkJywgYWN0aW9uOiAnc3RhZ2UtJyArIHN0YWdlfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uIS5oYXNoID0gc3RhZ2U7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uIS5oYXNoID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1vZGU6IHRoaXMuc3RhdGUubW9kZSxcbiAgICAgICAgICAgIHN0YWdlXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkF1dGgodXNlcjogZmlyZWJhc2UuVXNlciB8IG51bGwpIHtcblxuICAgICAgICBBdXRoSGFuZGxlcnMuZ2V0KCkudXNlckluZm8oKVxuICAgICAgICAgICAgLnRoZW4oKHVzZXJJbmZvKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgbW9kZTogQXV0aE1vZGUgPSAnbmVlZHMtYXV0aCc7XG5cbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICBtb2RlID0gJ2F1dGhlbnRpY2F0ZWQnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgICAgICAgICB1c2VySW5mbzogdXNlckluZm8uZ2V0T3JVbmRlZmluZWQoKVxuICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byBnZXQgdXNlciBpbmZvOiBcIiwgZXJyKSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQXV0aEVycm9yKGVycjogZmlyZWJhc2UuYXV0aC5FcnJvcikge1xuICAgICAgICBsb2cuZXJyb3IoXCJBdXRoZW50aWNhdGlvbiBlcnJvcjogXCIsIGVycik7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyOiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgbW9kZTogQXV0aE1vZGU7XG4gICAgcmVhZG9ubHkgc3RhZ2U/OiBBdXRoU3RhZ2U7XG4gICAgcmVhZG9ubHkgdXNlckluZm8/OiBVc2VySW5mbztcbn1cblxudHlwZSBBdXRoTW9kZSA9ICdub25lJyB8ICduZWVkcy1hdXRoJyB8ICdhdXRoZW50aWNhdGVkJztcblxudHlwZSBBdXRoU3RhZ2UgPSAnb3ZlcnZpZXcnIHwgJ2xvZ2luJyB8ICdjb25maWd1cmVkJyB8ICdpbnZpdGUnO1xuIl19