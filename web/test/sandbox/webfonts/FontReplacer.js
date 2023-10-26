"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringBuffer_1 = require("../../../js/util/StringBuffer");
class FontReplacer {
    static createFontReplacements() {
        const buff = new StringBuffer_1.StringBuffer();
        const standardFontIndex = this.createStandardFontIndex();
        for (const fontName of Object.keys(standardFontIndex)) {
            const fontType = standardFontIndex[fontName];
            if (fontType.type === 'serif') {
                buff.append(this.createFontReplacementUsingMerriweather(fontName));
            }
            else if (fontType.type === 'sans-serif') {
                buff.append(this.createFontReplacementUsingRoboto(fontName));
            }
        }
        return buff.toString();
    }
    static createFontReplacementUsingRoboto(newFontName) {
        return `<style id="polar-font-mapping-from-${newFontName}-to-roboto">

            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
              unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
              unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* greek-ext */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
              unicode-range: U+1F00-1FFF;
            }
            /* greek */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
              unicode-range: U+0370-03FF;
            }
            /* vietnamese */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
              unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
              unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }            
            
        </style>`;
    }
    static createFontReplacementUsingMerriweather(newFontName) {
        return `<style id="polar-font-mapping-from-${newFontName}-to-merriweather">

            /* cyrillic-ext */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v19/u-440qyriQwlOrhSvowK_l5-cSZMZ-Y.woff2) format('woff2');
              unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v19/u-440qyriQwlOrhSvowK_l5-eCZMZ-Y.woff2) format('woff2');
              unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v19/u-440qyriQwlOrhSvowK_l5-cyZMZ-Y.woff2) format('woff2');
              unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v19/u-440qyriQwlOrhSvowK_l5-ciZMZ-Y.woff2) format('woff2');
              unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v19/u-440qyriQwlOrhSvowK_l5-fCZM.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            
        </style>`;
    }
    static createReplacementStylesheet() {
    }
    static createStandardFontIndex() {
        return {
            "sans-serif": {
                type: 'sans-serif'
            },
            "serif": {
                type: 'serif'
            },
            "monospace": {
                type: 'monospace'
            },
            "helvetica": {
                type: 'sans-serif'
            },
            "helvetica neue": {
                type: 'sans-serif'
            },
            "neue helvetica": {
                type: 'sans-serif'
            },
            "arial": {
                type: 'sans-serif'
            },
            "tehoma": {
                type: 'sans-serif'
            },
            "geneva": {
                type: 'sans-serif'
            },
            "gadget": {
                type: 'sans-serif'
            },
            "times new roman": {
                type: 'serif'
            },
            "courier new": {
                type: 'monospace'
            },
            "courier": {
                type: 'monospace'
            },
            "lucida console": {
                type: 'monospace'
            },
            "monaco": {
                type: 'monospace'
            },
            "verdana": {
                type: 'sans-serif'
            },
            "georgia": {
                type: 'serif'
            },
            "palatino": {
                type: 'serif'
            },
            "palatino linotype": {
                type: 'serif'
            },
            "book antiqua": {
                type: 'serif'
            },
            "garamond": {
                type: 'serif'
            },
            "bookman": {
                type: 'serif'
            },
            "comic sans ms": {
                type: 'sans-serif'
            },
            "trebuchet ms": {
                type: 'sans-serif'
            },
            "arial black": {
                type: 'sans-serif'
            },
            "impact": {
                type: 'sans-serif'
            },
            "charcoal": {
                type: 'sans-serif'
            },
        };
    }
}
exports.FontReplacer = FontReplacer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9udFJlcGxhY2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRm9udFJlcGxhY2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0VBQTJEO0FBVTNELE1BQWEsWUFBWTtJQVNkLE1BQU0sQ0FBQyxzQkFBc0I7UUFFaEMsTUFBTSxJQUFJLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7UUFFaEMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUV6RCxLQUFLLE1BQU0sUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUNuRCxNQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUU3QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ3RFO2lCQUFNLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDaEU7U0FFSjtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRTNCLENBQUM7SUFLTyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsV0FBbUI7UUFFL0QsT0FBTyxzQ0FBc0MsV0FBVzs7OzhCQUdsQyxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7O2lCQU94QixDQUFDO0lBRWQsQ0FBQztJQUVPLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxXQUFtQjtRQUVyRSxPQUFPLHNDQUFzQyxXQUFXOzs7OzhCQUlsQyxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7O2lCQU94QixDQUFDO0lBRWQsQ0FBQztJQU9NLE1BQU0sQ0FBQywyQkFBMkI7SUFFekMsQ0FBQztJQUVNLE1BQU0sQ0FBQyx1QkFBdUI7UUFFakMsT0FBTztZQUNILFlBQVksRUFBRTtnQkFDVixJQUFJLEVBQUUsWUFBWTthQUNyQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxJQUFJLEVBQUUsT0FBTzthQUNoQjtZQUNELFdBQVcsRUFBRTtnQkFDVCxJQUFJLEVBQUUsV0FBVzthQUNwQjtZQUNELFdBQVcsRUFBRTtnQkFDVCxJQUFJLEVBQUUsWUFBWTthQUNyQjtZQUNELGdCQUFnQixFQUFFO2dCQUNkLElBQUksRUFBRSxZQUFZO2FBQ3JCO1lBQ0QsZ0JBQWdCLEVBQUU7Z0JBQ2QsSUFBSSxFQUFFLFlBQVk7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLFlBQVk7YUFDckI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFlBQVk7YUFDckI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFlBQVk7YUFDckI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFlBQVk7YUFDckI7WUFDRCxpQkFBaUIsRUFBRTtnQkFDZixJQUFJLEVBQUUsT0FBTzthQUNoQjtZQUNELGFBQWEsRUFBRTtnQkFDWCxJQUFJLEVBQUUsV0FBVzthQUNwQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxJQUFJLEVBQUUsV0FBVzthQUNwQjtZQUNELGdCQUFnQixFQUFFO2dCQUNkLElBQUksRUFBRSxXQUFXO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLElBQUksRUFBRSxXQUFXO2FBQ3BCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLElBQUksRUFBRSxZQUFZO2FBQ3JCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0QsbUJBQW1CLEVBQUU7Z0JBQ2pCLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0QsY0FBYyxFQUFFO2dCQUNaLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLElBQUksRUFBRSxZQUFZO2FBQ3JCO1lBQ0QsY0FBYyxFQUFFO2dCQUNaLElBQUksRUFBRSxZQUFZO2FBQ3JCO1lBQ0QsYUFBYSxFQUFFO2dCQUNYLElBQUksRUFBRSxZQUFZO2FBQ3JCO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLElBQUksRUFBRSxZQUFZO2FBQ3JCO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxZQUFZO2FBQ3JCO1NBQ0osQ0FBQztJQUVOLENBQUM7Q0FFSjtBQW5QRCxvQ0FtUEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0cmluZ0J1ZmZlcn0gZnJvbSAnLi4vLi4vLi4vanMvdXRpbC9TdHJpbmdCdWZmZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YW5kYXJkRm9udEluZGV4IHtcbiAgICBbbmFtZTogc3RyaW5nXTogRm9udFR5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9udFR5cGUge1xuICAgIHR5cGU6ICdzYW5zLXNlcmlmJyB8ICdzZXJpZicgfCAnbW9ub3NwYWNlJztcbn1cblxuZXhwb3J0IGNsYXNzIEZvbnRSZXBsYWNlciB7XG5cbiAgICAvLyBUT0RPOiBhbm90aGVyIGFwb3JvYWNoIGlzIHRvIGp1c3QgcmVwbGFjZSB0aGUgc3RhbmRhcmQgZm9udHMgYnkgbmFtZS4uLlxuICAgIC8vIHRoaXMgd291bGQgYmUgZWFzaWVyIHRvIGltcGxlbWVudC5cblxuICAgIC8vIEZJWE1FOiBJJ20gbm90IHN1cmUgcm9ib3RvIGNhbiBiZSBkaXNwbGF5ZWQgYm9sZC4uLiBmaW5kIG91dC4uLlxuICAgIC8vXG4gICAgLy8gRklYTUU6IG1vbm9zcGFjZVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVGb250UmVwbGFjZW1lbnRzKCk6IHN0cmluZyB7XG5cbiAgICAgICAgY29uc3QgYnVmZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblxuICAgICAgICBjb25zdCBzdGFuZGFyZEZvbnRJbmRleCA9IHRoaXMuY3JlYXRlU3RhbmRhcmRGb250SW5kZXgoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGZvbnROYW1lIG9mIE9iamVjdC5rZXlzKHN0YW5kYXJkRm9udEluZGV4KSkge1xuICAgICAgICAgICAgY29uc3QgZm9udFR5cGUgPSBzdGFuZGFyZEZvbnRJbmRleFtmb250TmFtZV07XG5cbiAgICAgICAgICAgIGlmIChmb250VHlwZS50eXBlID09PSAnc2VyaWYnKSB7XG4gICAgICAgICAgICAgICAgYnVmZi5hcHBlbmQodGhpcy5jcmVhdGVGb250UmVwbGFjZW1lbnRVc2luZ01lcnJpd2VhdGhlcihmb250TmFtZSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmb250VHlwZS50eXBlID09PSAnc2Fucy1zZXJpZicpIHtcbiAgICAgICAgICAgICAgICBidWZmLmFwcGVuZCh0aGlzLmNyZWF0ZUZvbnRSZXBsYWNlbWVudFVzaW5nUm9ib3RvKGZvbnROYW1lKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBidWZmLnRvU3RyaW5nKCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBzaW1wbGUvZWFzeSByZXBsYWNlbWVudCB3aGljaCAqcHJvYmFibHkqIHdvcmtzLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZUZvbnRSZXBsYWNlbWVudFVzaW5nUm9ib3RvKG5ld0ZvbnROYW1lOiBzdHJpbmcpIHtcblxuICAgICAgICByZXR1cm4gYDxzdHlsZSBpZD1cInBvbGFyLWZvbnQtbWFwcGluZy1mcm9tLSR7bmV3Rm9udE5hbWV9LXRvLXJvYm90b1wiPlxuXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICcke25ld0ZvbnROYW1lfSc7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgc3JjOiBsb2NhbCgnUm9ib3RvJyksIGxvY2FsKCdSb2JvdG8tUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbUNucUV1OTJGcjFNdTcyeEtPelkud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICAgICAgICAgICAgdW5pY29kZS1yYW5nZTogVSswNDYwLTA1MkYsIFUrMUM4MC0xQzg4LCBVKzIwQjQsIFUrMkRFMC0yREZGLCBVK0E2NDAtQTY5RiwgVStGRTJFLUZFMkY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBjeXJpbGxpYyAqL1xuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnJHtuZXdGb250TmFtZX0nO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT21DbnFFdTkyRnIxTXU1bXhLT3pZLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICAgICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIGdyZWVrLWV4dCAqL1xuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnJHtuZXdGb250TmFtZX0nO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT21DbnFFdTkyRnIxTXU3bXhLT3pZLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICAgICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMUYwMC0xRkZGO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogZ3JlZWsgKi9cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJyR7bmV3Rm9udE5hbWV9JztcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBzcmM6IGxvY2FsKCdSb2JvdG8nKSwgbG9jYWwoJ1JvYm90by1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NFd4S096WS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgICAgICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAzNzAtMDNGRjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIHZpZXRuYW1lc2UgKi9cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJyR7bmV3Rm9udE5hbWV9JztcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBzcmM6IGxvY2FsKCdSb2JvdG8nKSwgbG9jYWwoJ1JvYm90by1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11N1d4S096WS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgICAgICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMUVBMC0xRUY5LCBVKzIwQUI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBsYXRpbi1leHQgKi9cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJyR7bmV3Rm9udE5hbWV9JztcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBzcmM6IGxvY2FsKCdSb2JvdG8nKSwgbG9jYWwoJ1JvYm90by1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11N0d4S096WS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgICAgICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogbGF0aW4gKi9cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJyR7bmV3Rm9udE5hbWV9JztcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBzcmM6IGxvY2FsKCdSb2JvdG8nKSwgbG9jYWwoJ1JvYm90by1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NG14Sy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgICAgICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIDwvc3R5bGU+YDtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZUZvbnRSZXBsYWNlbWVudFVzaW5nTWVycml3ZWF0aGVyKG5ld0ZvbnROYW1lOiBzdHJpbmcpIHtcblxuICAgICAgICByZXR1cm4gYDxzdHlsZSBpZD1cInBvbGFyLWZvbnQtbWFwcGluZy1mcm9tLSR7bmV3Rm9udE5hbWV9LXRvLW1lcnJpd2VhdGhlclwiPlxuXG4gICAgICAgICAgICAvKiBjeXJpbGxpYy1leHQgKi9cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJyR7bmV3Rm9udE5hbWV9JztcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBzcmM6IGxvY2FsKCdNZXJyaXdlYXRoZXIgUmVndWxhcicpLCBsb2NhbCgnTWVycml3ZWF0aGVyLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tZXJyaXdlYXRoZXIvdjE5L3UtNDQwcXlyaVF3bE9yaFN2b3dLX2w1LWNTWk1aLVkud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICAgICAgICAgICAgdW5pY29kZS1yYW5nZTogVSswNDYwLTA1MkYsIFUrMUM4MC0xQzg4LCBVKzIwQjQsIFUrMkRFMC0yREZGLCBVK0E2NDAtQTY5RiwgVStGRTJFLUZFMkY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBjeXJpbGxpYyAqL1xuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnJHtuZXdGb250TmFtZX0nO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIHNyYzogbG9jYWwoJ01lcnJpd2VhdGhlciBSZWd1bGFyJyksIGxvY2FsKCdNZXJyaXdlYXRoZXItUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21lcnJpd2VhdGhlci92MTkvdS00NDBxeXJpUXdsT3JoU3Zvd0tfbDUtZUNaTVotWS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgICAgICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiB2aWV0bmFtZXNlICovXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICcke25ld0ZvbnROYW1lfSc7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgc3JjOiBsb2NhbCgnTWVycml3ZWF0aGVyIFJlZ3VsYXInKSwgbG9jYWwoJ01lcnJpd2VhdGhlci1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWVycml3ZWF0aGVyL3YxOS91LTQ0MHF5cmlRd2xPcmhTdm93S19sNS1jeVpNWi1ZLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICAgICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSsxRUEwLTFFRjksIFUrMjBBQjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIGxhdGluLWV4dCAqL1xuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnJHtuZXdGb250TmFtZX0nO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIHNyYzogbG9jYWwoJ01lcnJpd2VhdGhlciBSZWd1bGFyJyksIGxvY2FsKCdNZXJyaXdlYXRoZXItUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21lcnJpd2VhdGhlci92MTkvdS00NDBxeXJpUXdsT3JoU3Zvd0tfbDUtY2laTVotWS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgICAgICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogbGF0aW4gKi9cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJyR7bmV3Rm9udE5hbWV9JztcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBzcmM6IGxvY2FsKCdNZXJyaXdlYXRoZXIgUmVndWxhcicpLCBsb2NhbCgnTWVycml3ZWF0aGVyLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tZXJyaXdlYXRoZXIvdjE5L3UtNDQwcXlyaVF3bE9yaFN2b3dLX2w1LWZDWk0ud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICAgICAgICAgICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICA8L3N0eWxlPmA7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHbyBvdmVyIGFsbCB0aGUgc3R5bGVzaGVldHMgb24gdGhlIHBhZ2UgYW5kIHJlcGxhY2UgdGhlbSB3aXRoIGEgbmV3XG4gICAgICogc3R5bGVzaGVldCB0aGF0IHdvcmtzIGFjcm9zcyBwbGF0Zm9ybXMgYnkgcmVwbGFjaW5nIHN5c3RlbSBmb250cyB3aXRoXG4gICAgICogdGhlIHNhbWUgZm9udCBhY3Jvc3MgcGxhdGZvcm1zLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlUmVwbGFjZW1lbnRTdHlsZXNoZWV0KCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVTdGFuZGFyZEZvbnRJbmRleCgpOiBTdGFuZGFyZEZvbnRJbmRleCB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwic2Fucy1zZXJpZlwiOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NhbnMtc2VyaWYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXJpZlwiOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibW9ub3NwYWNlXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbW9ub3NwYWNlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaGVsdmV0aWNhXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2Fucy1zZXJpZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImhlbHZldGljYSBuZXVlXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2Fucy1zZXJpZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm5ldWUgaGVsdmV0aWNhXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2Fucy1zZXJpZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFyaWFsXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2Fucy1zZXJpZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInRlaG9tYVwiOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NhbnMtc2VyaWYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZW5ldmFcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2FkZ2V0XCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2Fucy1zZXJpZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInRpbWVzIG5ldyByb21hblwiOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY291cmllciBuZXdcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdtb25vc3BhY2UnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3VyaWVyXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbW9ub3NwYWNlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibHVjaWRhIGNvbnNvbGVcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdtb25vc3BhY2UnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtb25hY29cIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdtb25vc3BhY2UnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ2ZXJkYW5hXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2Fucy1zZXJpZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdlb3JnaWFcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzZXJpZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBhbGF0aW5vXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VyaWYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwYWxhdGlubyBsaW5vdHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYm9vayBhbnRpcXVhXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VyaWYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnYXJhbW9uZFwiOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYm9va21hblwiOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29taWMgc2FucyBtc1wiOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NhbnMtc2VyaWYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0cmVidWNoZXQgbXNcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYXJpYWwgYmxhY2tcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaW1wYWN0XCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2Fucy1zZXJpZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoYXJjb2FsXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2Fucy1zZXJpZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICB9XG5cbn1cbiJdfQ==