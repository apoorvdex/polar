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
const ReactDOM = __importStar(require("react-dom"));
const ConfirmPrompt_1 = require("./ConfirmPrompt");
const Blackout_1 = require("../blackout/Blackout");
const ID = 'confirm-popover-container';
class ConfirmPrompts {
    static create(props) {
        let container = document.getElementById(ID);
        if (!container) {
            container = document.createElement('div');
            container.setAttribute('id', ID);
            document.body.appendChild(container);
        }
        Blackout_1.Blackout.enable();
        const onCancel = () => {
            this.destroy();
            props.onCancel();
        };
        const onConfirm = () => {
            this.destroy();
            props.onConfirm();
        };
        ReactDOM.render(React.createElement(ConfirmPrompt_1.ConfirmPrompt, { open: true, target: props.target, title: props.title, subtitle: props.subtitle, onCancel: onCancel, placement: props.placement, onConfirm: onConfirm }), container);
    }
    static destroy() {
        Blackout_1.Blackout.disable();
        this.destroyElement('#' + ID);
        this.destroyElement('.confirm-prompt');
    }
    static destroyElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = '';
            element.parentElement.removeChild(element);
        }
        else {
        }
    }
}
exports.ConfirmPrompts = ConfirmPrompts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlybVByb21wdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb25maXJtUHJvbXB0cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLG9EQUFzQztBQUN0QyxtREFBa0U7QUFDbEUsbURBQThDO0FBRTlDLE1BQU0sRUFBRSxHQUFHLDJCQUEyQixDQUFDO0FBRXZDLE1BQWEsY0FBYztJQUVoQixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQXlCO1FBRTFDLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFFLFNBQVMsRUFBRTtZQUNiLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsbUJBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVsQixNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFFbEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRWYsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXJCLENBQUMsQ0FBQztRQUVGLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtZQUVuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFZixLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFdEIsQ0FBQyxDQUFDO1FBRUYsUUFBUSxDQUFDLE1BQU0sQ0FFWCxvQkFBQyw2QkFBYSxJQUFDLElBQUksRUFBRSxJQUFJLEVBQ1YsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQ3BCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUNsQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFDeEIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQzFCLFNBQVMsRUFBRSxTQUFTLEdBQUcsRUFFdEMsU0FBUyxDQUVaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU87UUFFakIsbUJBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFM0MsQ0FBQztJQUVPLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBZ0I7UUFFMUMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUlqRCxJQUFJLE9BQU8sRUFBRTtZQUNULE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxhQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO2FBQU07U0FFTjtJQUVMLENBQUM7Q0FFSjtBQXRFRCx3Q0FzRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtDb25maXJtUHJvbXB0LCBDb25maXJtUHJvbXB0UHJvcHN9IGZyb20gJy4vQ29uZmlybVByb21wdCc7XG5pbXBvcnQge0JsYWNrb3V0fSBmcm9tICcuLi9ibGFja291dC9CbGFja291dCc7XG5cbmNvbnN0IElEID0gJ2NvbmZpcm0tcG9wb3Zlci1jb250YWluZXInO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlybVByb21wdHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUocHJvcHM6IENvbmZpcm1Qcm9tcHRQcm9wcykge1xuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChJRCk7XG5cbiAgICAgICAgaWYgKCEgY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgSUQpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgQmxhY2tvdXQuZW5hYmxlKCk7XG5cbiAgICAgICAgY29uc3Qgb25DYW5jZWwgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICBwcm9wcy5vbkNhbmNlbCgpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25Db25maXJtID0gKCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcblxuICAgICAgICAgICAgcHJvcHMub25Db25maXJtKCk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoXG5cbiAgICAgICAgICAgIDxDb25maXJtUHJvbXB0IG9wZW49e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9e3Byb3BzLnRhcmdldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtwcm9wcy5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD17cHJvcHMucGxhY2VtZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXtvbkNvbmZpcm19Lz4sXG5cbiAgICAgICAgICAgIGNvbnRhaW5lclxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlc3Ryb3koKSB7XG5cbiAgICAgICAgQmxhY2tvdXQuZGlzYWJsZSgpO1xuXG4gICAgICAgIHRoaXMuZGVzdHJveUVsZW1lbnQoJyMnICsgSUQpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lFbGVtZW50KCcuY29uZmlybS1wcm9tcHQnKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGRlc3Ryb3lFbGVtZW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gY29uZmlybS1wcm9tcHRcblxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudCEucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub29wXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5cbiJdfQ==