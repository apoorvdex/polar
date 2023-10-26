"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sanitize_html_1 = __importDefault(require("sanitize-html"));
class HTMLSanitizer {
    static sanitize(html) {
        return sanitize_html_1.default(html, {
            allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote',
                'cite', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i',
                'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
                'table', 'thead', 'caption', 'tbody', 'tr', 'th',
                'td', 'pre', 'iframe'],
            allowedAttributes: {
                'pre': ["style"],
                'ul': ["style"],
                'ol': ["style"],
                'li': ["style"],
                'ni': ["style"],
                'code': ["style"],
                'p': ["style"],
                'div': ["style"],
                'span': ["style"],
                'b': ["style"],
                'blockquote': ["style", "cite"],
                "a": ['style', 'href', 'name', 'target', 'rel', 'type'],
                "img": ['style', 'src', 'title', 'alt', 'width', 'height']
            },
            allowedStyles: {
                '*': {
                    'color': [/.*/],
                    'background-color': [/.*/],
                    'text-align': [/.*/],
                    'font': [/.*/],
                    'font-family': [/.*/],
                    'font-variant': [/.*/],
                    'font-size': [/.*/],
                    'font-weight': [/.*/],
                    'text-decoration': [/.*/],
                    'text-transform': [/.*/],
                    'text-indent': [/.*/],
                    'line-height': [/.*/],
                    'letter-spacing': [/.*/],
                    'direction': [/.*/],
                    'word-spacing': [/.*/],
                    'text-shadow': [/.*/],
                    'white-space': [/.*/],
                    'width': [/.*/],
                    'height': [/.*/],
                    'sans-serif': [/.*/],
                    'transform': [/.*/],
                    'margin': [/.*/],
                    'padding': [/.*/],
                    'border': [/.*/],
                },
            }
        });
    }
}
exports.HTMLSanitizer = HTMLSanitizer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRNTFNhbml0aXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhUTUxTYW5pdGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrRUFBeUM7QUFFekMsTUFBYSxhQUFhO0lBRWYsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFZO1FBRS9CLE9BQU8sdUJBQVksQ0FBQyxJQUFJLEVBQUU7WUFHdEIsV0FBVyxFQUFFLENBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBWTtnQkFDaEQsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHO2dCQUNsRCxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLO2dCQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUk7Z0JBQ2hELElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFFO1lBRXRDLGlCQUFpQixFQUFFO2dCQUVmLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDaEIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNmLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDZixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ2YsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNmLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDakIsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNkLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDaEIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNqQixHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBRWQsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztnQkFDL0IsR0FBRyxFQUFFLENBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUU7Z0JBQ3pELEtBQUssRUFBRSxDQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFFO2FBRS9EO1lBQ0QsYUFBYSxFQUFFO2dCQUNYLEdBQUcsRUFBRTtvQkFJRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ2Ysa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDcEIsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUNkLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDckIsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUN0QixXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ25CLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDckIsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ3pCLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDO29CQUN4QixhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ3JCLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDckIsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDbkIsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUN0QixhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ3JCLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDckIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUNmLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDaEIsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUNwQixXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBRW5CLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDaEIsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUNqQixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7aUJBRW5CO2FBRUo7U0FFSixDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUF0RUQsc0NBc0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0aXplSHRtbCBmcm9tICdzYW5pdGl6ZS1odG1sJztcblxuZXhwb3J0IGNsYXNzIEhUTUxTYW5pdGl6ZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyBzYW5pdGl6ZShodG1sOiBzdHJpbmcpIHtcblxuICAgICAgICByZXR1cm4gc2FuaXRpemVIdG1sKGh0bWwsIHtcblxuICAgICAgICAgICAgLy8gVE9ETzogYWRkIGFsbCBvZiB0aGVzZSBiZWxvdy4uIHRvIGFsbG93ZWRBdHRyaWJ1dGVzLlxuICAgICAgICAgICAgYWxsb3dlZFRhZ3M6IFsgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2Jsb2NrcXVvdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NpdGUnLCAncCcsICdhJywgJ3VsJywgJ29sJywgJ25sJywgJ2xpJywgJ2InLCAnaScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAnc3Ryb25nJywgJ2VtJywgJ3N0cmlrZScsICdjb2RlJywgJ2hyJywgJ2JyJywgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUnLCAndGhlYWQnLCAnY2FwdGlvbicsICd0Ym9keScsICd0cicsICd0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAndGQnLCAncHJlJywgJ2lmcmFtZScgXSxcblxuICAgICAgICAgICAgYWxsb3dlZEF0dHJpYnV0ZXM6IHtcblxuICAgICAgICAgICAgICAgICdwcmUnOiBbXCJzdHlsZVwiXSxcbiAgICAgICAgICAgICAgICAndWwnOiBbXCJzdHlsZVwiXSxcbiAgICAgICAgICAgICAgICAnb2wnOiBbXCJzdHlsZVwiXSxcbiAgICAgICAgICAgICAgICAnbGknOiBbXCJzdHlsZVwiXSxcbiAgICAgICAgICAgICAgICAnbmknOiBbXCJzdHlsZVwiXSxcbiAgICAgICAgICAgICAgICAnY29kZSc6IFtcInN0eWxlXCJdLFxuICAgICAgICAgICAgICAgICdwJzogW1wic3R5bGVcIl0sXG4gICAgICAgICAgICAgICAgJ2Rpdic6IFtcInN0eWxlXCJdLFxuICAgICAgICAgICAgICAgICdzcGFuJzogW1wic3R5bGVcIl0sXG4gICAgICAgICAgICAgICAgJ2InOiBbXCJzdHlsZVwiXSxcblxuICAgICAgICAgICAgICAgICdibG9ja3F1b3RlJzogW1wic3R5bGVcIiwgXCJjaXRlXCJdLFxuICAgICAgICAgICAgICAgIFwiYVwiOiBbICdzdHlsZScsICdocmVmJywgJ25hbWUnLCAndGFyZ2V0JywgJ3JlbCcsICd0eXBlJyBdLFxuICAgICAgICAgICAgICAgIFwiaW1nXCI6IFsgJ3N0eWxlJywgJ3NyYycsICd0aXRsZScsICdhbHQnLCAnd2lkdGgnLCAnaGVpZ2h0JyBdXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGxvd2VkU3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgJyonOiB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogdG9wLGJvdHRvbSxsZWZ0LHJpZ2h0IHZlcnNpb25zIG9mIG1hbnkgb2YgdGhlc2VcblxuICAgICAgICAgICAgICAgICAgICAnY29sb3InOiBbLy4qL10sXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogWy8uKi9dLFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1hbGlnbic6IFsvLiovXSxcbiAgICAgICAgICAgICAgICAgICAgJ2ZvbnQnOiBbLy4qL10sXG4gICAgICAgICAgICAgICAgICAgICdmb250LWZhbWlseSc6IFsvLiovXSxcbiAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtdmFyaWFudCc6IFsvLiovXSxcbiAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IFsvLiovXSxcbiAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtd2VpZ2h0JzogWy8uKi9dLFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1kZWNvcmF0aW9uJzogWy8uKi9dLFxuICAgICAgICAgICAgICAgICAgICAndGV4dC10cmFuc2Zvcm0nOiBbLy4qL10sXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWluZGVudCc6IFsvLiovXSxcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtaGVpZ2h0JzogWy8uKi9dLFxuICAgICAgICAgICAgICAgICAgICAnbGV0dGVyLXNwYWNpbmcnOiBbLy4qL10sXG4gICAgICAgICAgICAgICAgICAgICdkaXJlY3Rpb24nOiBbLy4qL10sXG4gICAgICAgICAgICAgICAgICAgICd3b3JkLXNwYWNpbmcnOiBbLy4qL10sXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LXNoYWRvdyc6IFsvLiovXSxcbiAgICAgICAgICAgICAgICAgICAgJ3doaXRlLXNwYWNlJzogWy8uKi9dLFxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBbLy4qL10sXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiBbLy4qL10sXG4gICAgICAgICAgICAgICAgICAgICdzYW5zLXNlcmlmJzogWy8uKi9dLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogWy8uKi9dLFxuXG4gICAgICAgICAgICAgICAgICAgICdtYXJnaW4nOiBbLy4qL10sXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nJzogWy8uKi9dLFxuICAgICAgICAgICAgICAgICAgICAnYm9yZGVyJzogWy8uKi9dLFxuXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iXX0=