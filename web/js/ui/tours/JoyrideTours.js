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
const SplitLayout_1 = require("../split_layout/SplitLayout");
const RepositoryTour_1 = require("../../apps/repository/RepositoryTour");
class JoyrideTours {
    static createImageStep(step) {
        const Image = () => {
            if (typeof step.image === 'string') {
                return React.createElement("img", { src: step.image, style: RepositoryTour_1.Styles.SPLIT_BAR_IMG });
            }
            else {
                return React.createElement("div", null, step.image);
            }
        };
        return {
            target: step.target,
            title: step.title,
            disableBeacon: true,
            styles: {
                tooltip: {
                    width: '700px'
                }
            },
            content: React.createElement("div", null,
                React.createElement(SplitLayout_1.SplitLayout, null,
                    React.createElement(SplitLayout_1.SplitLayoutLeft, null, step.content),
                    React.createElement(SplitLayout_1.SplitLayoutRight, null,
                        React.createElement(Image, null)))),
            placement: step.placement || 'bottom',
            hideBackButton: step.hideBackButton || false,
            spotlightClicks: step.spotlightClicks || false,
            autoNext: step.autoNext,
            disabled: step.disabled
        };
    }
}
exports.JoyrideTours = JoyrideTours;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm95cmlkZVRvdXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSm95cmlkZVRvdXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSw2Q0FBK0I7QUFDL0IsNkRBQTJGO0FBQzNGLHlFQUE0RDtBQUU1RCxNQUFhLFlBQVk7SUFFZCxNQUFNLENBQUMsZUFBZSxDQUFDLElBQWU7UUFFekMsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBRWYsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUNoQyxPQUFPLDZCQUFLLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSx1QkFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDO2FBQy9EO2lCQUFNO2dCQUNILE9BQU8saUNBQU0sSUFBSSxDQUFDLEtBQUssQ0FBTyxDQUFDO2FBQ2xDO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsT0FBTztZQUNILE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsYUFBYSxFQUFFLElBQUk7WUFDbkIsTUFBTSxFQUFFO2dCQUNKLE9BQU8sRUFBRTtvQkFDTCxLQUFLLEVBQUUsT0FBTztpQkFDakI7YUFDSjtZQUNELE9BQU8sRUFBRTtnQkFFTCxvQkFBQyx5QkFBVztvQkFFUixvQkFBQyw2QkFBZSxRQUVYLElBQUksQ0FBQyxPQUFPLENBRUM7b0JBRWxCLG9CQUFDLDhCQUFnQjt3QkFFYixvQkFBQyxLQUFLLE9BQUUsQ0FFTyxDQUVULENBRVo7WUFDTixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRO1lBQ3JDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEtBQUs7WUFDNUMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLElBQUksS0FBSztZQUM5QyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUM7SUFFTixDQUFDO0NBRUo7QUFsREQsb0NBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwbGFjZW1lbnQsIFN0ZXB9IGZyb20gJ3JlYWN0LWpveXJpZGUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTcGxpdExheW91dCwgU3BsaXRMYXlvdXRMZWZ0LCBTcGxpdExheW91dFJpZ2h0fSBmcm9tICcuLi9zcGxpdF9sYXlvdXQvU3BsaXRMYXlvdXQnO1xuaW1wb3J0IHtTdHlsZXN9IGZyb20gJy4uLy4uL2FwcHMvcmVwb3NpdG9yeS9SZXBvc2l0b3J5VG91cic7XG5cbmV4cG9ydCBjbGFzcyBKb3lyaWRlVG91cnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVJbWFnZVN0ZXAoc3RlcDogSW1hZ2VTdGVwKTogRW5oYW5jZWRTdGVwIHtcblxuICAgICAgICBjb25zdCBJbWFnZSA9ICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGVwLmltYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz17c3RlcC5pbWFnZX0gc3R5bGU9e1N0eWxlcy5TUExJVF9CQVJfSU1HfS8+O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj57c3RlcC5pbWFnZX08L2Rpdj47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhcmdldDogc3RlcC50YXJnZXQsXG4gICAgICAgICAgICB0aXRsZTogc3RlcC50aXRsZSxcbiAgICAgICAgICAgIGRpc2FibGVCZWFjb246IHRydWUsXG4gICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNzAwcHgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8U3BsaXRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNwbGl0TGF5b3V0TGVmdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAuY29udGVudH1cblxuICAgICAgICAgICAgICAgICAgICA8L1NwbGl0TGF5b3V0TGVmdD5cblxuICAgICAgICAgICAgICAgICAgICA8U3BsaXRMYXlvdXRSaWdodD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlLz5cblxuICAgICAgICAgICAgICAgICAgICA8L1NwbGl0TGF5b3V0UmlnaHQ+XG5cbiAgICAgICAgICAgICAgICA8L1NwbGl0TGF5b3V0PlxuXG4gICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICBwbGFjZW1lbnQ6IHN0ZXAucGxhY2VtZW50IHx8ICdib3R0b20nLFxuICAgICAgICAgICAgaGlkZUJhY2tCdXR0b246IHN0ZXAuaGlkZUJhY2tCdXR0b24gfHwgZmFsc2UsXG4gICAgICAgICAgICBzcG90bGlnaHRDbGlja3M6IHN0ZXAuc3BvdGxpZ2h0Q2xpY2tzIHx8IGZhbHNlLFxuICAgICAgICAgICAgYXV0b05leHQ6IHN0ZXAuYXV0b05leHQsXG4gICAgICAgICAgICBkaXNhYmxlZDogc3RlcC5kaXNhYmxlZFxuICAgICAgICB9O1xuXG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBBbiBlbmhhbmNlZCBzdGVwIHdpdGggYSBmZXcgbW9yZSBmaWVsZHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRW5oYW5jZWRTdGVwIGV4dGVuZHMgU3RlcCB7XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIHdoZW4gd2Ugc2hvdWxkIGdvIHRoZSBuZXh0IHN0ZXAgYXMgc29vbiBhcyBpdHMgc2VsZWN0b3IgaXMgYXZhaWxhYmxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9OZXh0PzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgd2Ugc2hvdWxkIGRpc2FibGUgdGhpcyBzdGVwIG9mIHRoZSB0b3VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc2FibGVkPzogYm9vbGVhbjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlU3RlcCB7XG4gICAgcmVhZG9ubHkgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGU7XG4gICAgcmVhZG9ubHkgY29udGVudDogUmVhY3QuUmVhY3ROb2RlO1xuICAgIHJlYWRvbmx5IGltYWdlOiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGU7XG4gICAgcmVhZG9ubHkgdGFyZ2V0OiBzdHJpbmcgfCBIVE1MRWxlbWVudDtcbiAgICByZWFkb25seSBwbGFjZW1lbnQ/OiBwbGFjZW1lbnQ7XG4gICAgcmVhZG9ubHkgYXV0b05leHQ/OiBib29sZWFuO1xuICAgIHJlYWRvbmx5IGhpZGVCYWNrQnV0dG9uPzogYm9vbGVhbjtcbiAgICByZWFkb25seSBzcG90bGlnaHRDbGlja3M/OiBib29sZWFuO1xuICAgIHJlYWRvbmx5IGRpc2FibGVkPzogYm9vbGVhbjtcbn1cbiJdfQ==