"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base64 {
    static encode(data) {
        if (typeof btoa !== 'undefined') {
            return btoa(data);
        }
        else {
            const buff = new Buffer(data);
            return buff.toString('base64');
        }
    }
}
exports.Base64 = Base64;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZTY0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQmFzZTY0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBYSxNQUFNO0lBTVIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFZO1FBRTdCLElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JCO2FBQU07WUFDSCxNQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7SUFFTCxDQUFDO0NBRUo7QUFqQkQsd0JBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJhc2U2NCB7XG5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmdcbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vc3RhY2thYnVzZS5jb20vZW5jb2RpbmctYW5kLWRlY29kaW5nLWJhc2U2NC1zdHJpbmdzLWluLW5vZGUtanMvXG5cbiAgICBwdWJsaWMgc3RhdGljIGVuY29kZShkYXRhOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICAgIGlmICh0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBidG9hKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYnVmZiA9IG5ldyBCdWZmZXIoZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gYnVmZi50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19