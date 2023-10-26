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
const reactstrap_1 = require("reactstrap");
const Logger_1 = require("../../../logger/Logger");
const log = Logger_1.Logger.create();
class URLBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onKeyPress = this.onKeyPress.bind(this);
    }
    render() {
        return (React.createElement(reactstrap_1.Input, { autoFocus: true, id: "url-bar", className: "px-2 mx-1", name: "url", onKeyPress: (event) => this.onKeyPress(event) }));
    }
    onKeyPress(event) {
        if (event.which === 13) {
            const url = event.target.value;
            log.info("Loading URL" + url);
            this.onLoadURL(url);
        }
    }
    onLoadURL(url) {
        if (this.props.onLoadURL) {
            this.props.onLoadURL(url);
        }
    }
}
exports.URLBar = URLBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVJMQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVVJMQmFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkNBQWlDO0FBQ2pDLG1EQUE4QztBQUU5QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxNQUFPLFNBQVEsS0FBSyxDQUFDLFNBQXVCO0lBRXJELFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILG9CQUFDLGtCQUFLLElBQUMsU0FBUyxRQUNULEVBQUUsRUFBQyxTQUFTLEVBQ1osU0FBUyxFQUFDLFdBQVcsRUFDckIsSUFBSSxFQUFDLEtBQUssRUFDVixVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUksQ0FFM0QsQ0FBQztJQUVOLENBQUM7SUFFTyxVQUFVLENBQUMsS0FBNEM7UUFFM0QsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNwQixNQUFNLEdBQUcsR0FBSSxLQUFLLENBQUMsTUFBMkIsQ0FBQyxLQUFLLENBQUM7WUFDckQsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUV2QjtJQUVMLENBQUM7SUFFTyxTQUFTLENBQUMsR0FBVztRQUV6QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO0lBRUwsQ0FBQztDQUVKO0FBeENELHdCQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SW5wdXR9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBVUkxCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55LCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSB0aGlzLm9uS2V5UHJlc3MuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxJbnB1dCBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICBpZD1cInVybC1iYXJcIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgbXgtMVwiXG4gICAgICAgICAgICAgICAgICAgbmFtZT1cInVybFwiXG4gICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiB0aGlzLm9uS2V5UHJlc3MoZXZlbnQpfSAvPlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uS2V5UHJlc3MoZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcblxuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgICAgICAgICAgbG9nLmluZm8oXCJMb2FkaW5nIFVSTFwiICsgdXJsKTtcbiAgICAgICAgICAgIHRoaXMub25Mb2FkVVJMKHVybCk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkxvYWRVUkwodXJsOiBzdHJpbmcpIHtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkxvYWRVUkwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Mb2FkVVJMKHVybCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBuZWVkIHRvIGxvYWQgYSBVUkwgdGhhdCB0aGUgbmF2YmFyIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIG9uTG9hZFVSTD86ICh1cmw6IHN0cmluZykgPT4gdm9pZDtcblxufVxuIl19