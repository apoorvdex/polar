"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Logger_1 = require("../../../../web/js/logger/Logger");
const EventListener_1 = require("../../../../web/js/reactor/EventListener");
const log = Logger_1.Logger.create();
class ReleasingReactComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.releaser = new EventListener_1.MultiReleaser();
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }
    componentWillUnmount() {
        log.info("Releasing resources with releaser");
        this.releaser.release();
    }
}
exports.default = ReleasingReactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsZWFzaW5nUmVhY3RDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZWxlYXNpbmdSZWFjdENvbXBvbmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDZEQUF3RDtBQUN4RCw0RUFBdUU7QUFFdkUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQXFCLHVCQUE4QixTQUFRLEtBQUssQ0FBQyxTQUFlO0lBSTVFLFlBQVksS0FBUSxFQUFFLE9BQVk7UUFDOUIsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUhQLGFBQVEsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUk5QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU0sb0JBQW9CO1FBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7Q0FFSjtBQWRELDBDQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7TXVsdGlSZWxlYXNlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3JlYWN0b3IvRXZlbnRMaXN0ZW5lcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzaW5nUmVhY3RDb21wb25lbnQ8UCwgUz4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UCwgUz4ge1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHJlbGVhc2VyID0gbmV3IE11bHRpUmVsZWFzZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICAgICAgbG9nLmluZm8oXCJSZWxlYXNpbmcgcmVzb3VyY2VzIHdpdGggcmVsZWFzZXJcIik7XG4gICAgICAgIHRoaXMucmVsZWFzZXIucmVsZWFzZSgpO1xuICAgIH1cblxufVxuXG4iXX0=