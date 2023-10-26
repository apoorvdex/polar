"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Broadcasters_1 = require("../../ipc/Broadcasters");
const AppRuntime_1 = require("../../AppRuntime");
const Messenger_1 = require("../../electron/messenger/Messenger");
class ProgressMessages {
    static broadcast(progressMessage) {
        if (AppRuntime_1.AppRuntime.isElectron()) {
            Broadcasters_1.Broadcasters.send(this.CHANNEL, progressMessage);
        }
        else {
            const message = {
                type: this.CHANNEL,
                value: progressMessage
            };
            Messenger_1.Messenger.postMessage({
                message
            });
        }
    }
}
ProgressMessages.CHANNEL = '/progress-message';
exports.ProgressMessages = ProgressMessages;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NNZXNzYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByb2dyZXNzTWVzc2FnZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSx5REFBb0Q7QUFFcEQsaURBQTRDO0FBQzVDLGtFQUE2RDtBQUc3RCxNQUFhLGdCQUFnQjtJQUlsQixNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWdDO1FBR3BELElBQUksdUJBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUV6QiwyQkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBRXBEO2FBQU07WUFFSCxNQUFNLE9BQU8sR0FBa0M7Z0JBQzNDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDbEIsS0FBSyxFQUFFLGVBQWU7YUFDekIsQ0FBQztZQUVGLHFCQUFTLENBQUMsV0FBVyxDQUFDO2dCQUNsQixPQUFPO2FBQ1osQ0FBQyxDQUFDO1NBQ0o7SUFFTCxDQUFDOztBQXJCYSx3QkFBTyxHQUFXLG1CQUFtQixDQUFDO0FBRnhELDRDQXlCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqL1xuaW1wb3J0IHtCcm9hZGNhc3RlcnN9IGZyb20gJy4uLy4uL2lwYy9Ccm9hZGNhc3RlcnMnO1xuaW1wb3J0IHtQcm9ncmVzc01lc3NhZ2V9IGZyb20gJy4vUHJvZ3Jlc3NNZXNzYWdlJztcbmltcG9ydCB7QXBwUnVudGltZX0gZnJvbSAnLi4vLi4vQXBwUnVudGltZSc7XG5pbXBvcnQge01lc3Nlbmdlcn0gZnJvbSAnLi4vLi4vZWxlY3Ryb24vbWVzc2VuZ2VyL01lc3Nlbmdlcic7XG5pbXBvcnQge1R5cGVkTWVzc2FnZX0gZnJvbSAnLi4vLi4vdXRpbC9UeXBlZE1lc3NhZ2UnO1xuXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NNZXNzYWdlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIENIQU5ORUw6IHN0cmluZyA9ICcvcHJvZ3Jlc3MtbWVzc2FnZSc7XG5cbiAgICBwdWJsaWMgc3RhdGljIGJyb2FkY2FzdChwcm9ncmVzc01lc3NhZ2U6IFByb2dyZXNzTWVzc2FnZSkge1xuXG4gICAgICAgIC8vIFRPRE86IHdlIHNob3VsZCByZWFsbHkgdW5pZnkgaG93IHdlIHNlbmQgdGhlc2UgLi4uXG4gICAgICAgIGlmIChBcHBSdW50aW1lLmlzRWxlY3Ryb24oKSkge1xuXG4gICAgICAgICAgICBCcm9hZGNhc3RlcnMuc2VuZCh0aGlzLkNIQU5ORUwsIHByb2dyZXNzTWVzc2FnZSk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZTogVHlwZWRNZXNzYWdlPFByb2dyZXNzTWVzc2FnZT4gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5DSEFOTkVMLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9ncmVzc01lc3NhZ2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIE1lc3Nlbmdlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==