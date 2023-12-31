"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Nav {
    static createHashURL(hash) {
        const url = new URL(window.location.href);
        url.hash = hash;
        return url.toString();
    }
    static openLinkWithNewTab(link) {
        const win = window.open(link, '_blank');
        if (win) {
            win.focus();
        }
    }
    static createLinkLoader(opts = { focus: true }) {
        const win = window.open('', '_blank');
        if (win) {
            if (opts.focus) {
                win.focus();
            }
            win.document.write("Loading...");
            return {
                load(link) {
                    win.location.href = link;
                }
            };
        }
        else {
            throw new Error("Unable to create window");
        }
    }
}
exports.Nav = Nav;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTmF2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBYSxHQUFHO0lBRUwsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFZO1FBQ3BDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFZO1FBRXpDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXhDLElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Y7SUFFTCxDQUFDO0lBT00sTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQXVCLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQztRQUkvRCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUV0QyxJQUFJLEdBQUcsRUFBRTtZQUVMLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZjtZQUVELEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRWpDLE9BQU87Z0JBRUgsSUFBSSxDQUFDLElBQVk7b0JBQ2IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixDQUFDO2FBRUosQ0FBQztTQUVMO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDOUM7SUFFTCxDQUFDO0NBR0o7QUFwREQsa0JBb0RDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5hdiB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUhhc2hVUkwoaGFzaDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICB1cmwuaGFzaCA9IGhhc2g7XG4gICAgICAgIHJldHVybiB1cmwudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG9wZW5MaW5rV2l0aE5ld1RhYihsaW5rOiBzdHJpbmcpIHtcblxuICAgICAgICBjb25zdCB3aW4gPSB3aW5kb3cub3BlbihsaW5rLCAnX2JsYW5rJyk7XG5cbiAgICAgICAgaWYgKHdpbikge1xuICAgICAgICAgICAgd2luLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGxvYWRlciB0aGF0IGNhbiBmdW5jdGlvbiBvdXRzaWRlIG9mIGEgYXV0aG9yaXplZCBldmVudCBsb29wXG4gICAgICogYnkgcHJlLWNyZWF0aW5nIGEgd2luZG93IGFuZCB0aGVuIGNoYW5naW5nIHRoZSBsb2NhdGlvbiBsYXRlci5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlTGlua0xvYWRlcihvcHRzOiBMaW5rTG9hZGVyT3B0cyA9IHtmb2N1czogdHJ1ZX0pOiBMaW5rTG9hZGVyIHtcblxuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTAyNjE2Mi9qYXZhc2NyaXB0LXdpbmRvdy1vcGVuLWZyb20tY2FsbGJhY2tcblxuICAgICAgICBjb25zdCB3aW4gPSB3aW5kb3cub3BlbignJywgJ19ibGFuaycpO1xuXG4gICAgICAgIGlmICh3aW4pIHtcblxuICAgICAgICAgICAgaWYgKG9wdHMuZm9jdXMpIHtcbiAgICAgICAgICAgICAgICB3aW4uZm9jdXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luLmRvY3VtZW50LndyaXRlKFwiTG9hZGluZy4uLlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgICAgIGxvYWQobGluazogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgICAgICAgICAgICAgIHdpbi5sb2NhdGlvbi5ocmVmID0gbGluaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjcmVhdGUgd2luZG93XCIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmtMb2FkZXJPcHRzIHtcbiAgICByZWFkb25seSBmb2N1czogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5rTG9hZGVyIHtcblxuICAgIGxvYWQobGluazogc3RyaW5nKTogdm9pZDtcblxufVxuIl19