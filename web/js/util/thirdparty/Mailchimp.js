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
Object.defineProperty(exports, "__esModule", { value: true });
const Fetch_1 = __importDefault(require("../Fetch"));
const Base64_1 = require("../Base64");
class Mailchimp {
    static subscribe(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailEncoded = encodeURIComponent(email);
            const url = `https://spinn3r.us10.list-manage.com/subscribe/post-json?u=0b1739813ebf118e92faf8fc3&id=ad3d53e837&c=callback&EMAIL=${emailEncoded}&b_0b1739813ebf118e92faf8fc3_ad3d53e837=&subscribe=&_=1552327454264`;
            const response = yield Fetch_1.default(url);
            const text = yield response.text();
            if (text.indexOf('success') === -1 && text.indexOf('already subscribed') === -1) {
                throw new Error("Invalid result: " + text);
            }
            if (response.status !== 200) {
                throw new Error("Failed request: " + response.status + ": " + response.statusText);
            }
        });
    }
    static subscribeViaAPI(email, firstName, lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                "email_address": email,
                "status": "subscribed",
                "merge_fields": {
                    "FNAME": firstName,
                    "LNAME": lastName
                }
            };
            const username = "polar";
            const password = "437707a405a16fcc863e09cb2f6dcc6c-us10";
            const authorization = 'Basic ' + Base64_1.Base64.encode(username + ":" + password);
            const init = {
                method: 'POST',
                headers: {
                    'Authorization': authorization
                },
                body: JSON.stringify(body)
            };
            const url = "https://us10.api.mailchimp.com/3.0/lists/ad3d53e837/members/";
            const response = yield Fetch_1.default(url, init);
            if (response.status !== 200) {
                throw new Error("Failed request: " + response.status + ": " + response.statusText);
            }
            return response;
        });
    }
}
exports.Mailchimp = Mailchimp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbGNoaW1wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWFpbGNoaW1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBNkI7QUFDN0Isc0NBQWlDO0FBRWpDLE1BQWEsU0FBUztJQU9YLE1BQU0sQ0FBTyxTQUFTLENBQUMsS0FBYTs7WUFPdkMsTUFBTSxZQUFZLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0MsTUFBTSxHQUFHLEdBQUcsdUhBQXVILFlBQVkscUVBQXFFLENBQUM7WUFFck4sTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDN0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUM5QztZQUVELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3RGO1FBRUwsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLGVBQWUsQ0FBQyxLQUFhLEVBQUUsU0FBaUIsRUFBRSxRQUFnQjs7WUFFbEYsTUFBTSxJQUFJLEdBQUc7Z0JBQ1QsZUFBZSxFQUFFLEtBQUs7Z0JBQ3RCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixjQUFjLEVBQUU7b0JBQ1osT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLE9BQU8sRUFBRSxRQUFRO2lCQUNwQjthQUNKLENBQUM7WUFFRixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFHekIsTUFBTSxRQUFRLEdBQUcsdUNBQXVDLENBQUM7WUFFekQsTUFBTSxhQUFhLEdBQUcsUUFBUSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQztZQUUxRSxNQUFNLElBQUksR0FBRztnQkFDVCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUU7b0JBQ0wsZUFBZSxFQUFFLGFBQWE7aUJBQ2pDO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUM3QixDQUFDO1lBR0YsTUFBTSxHQUFHLEdBQUcsOERBQThELENBQUM7WUFFM0UsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXhDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3RGO1lBRUQsT0FBTyxRQUFRLENBQUM7UUFFcEIsQ0FBQztLQUFBO0NBRUo7QUF0RUQsOEJBc0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJy4uL0ZldGNoJztcbmltcG9ydCB7QmFzZTY0fSBmcm9tICcuLi9CYXNlNjQnO1xuXG5leHBvcnQgY2xhc3MgTWFpbGNoaW1wIHtcblxuICAgIC8qKlxuICAgICAqIE1haWxjaGltcCBoYXMgYSBob3JyaWJsZSAvIG5vbmV4aXN0YW50IEFQSSBzbyB3ZSdyZSBqdXN0IGdvaW5nIHRvIGhhY2tcbiAgICAgKiB0aGlzIGZvciBub3cuXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHN1YnNjcmliZShlbWFpbDogc3RyaW5nKSB7XG5cbiAgICAgICAgLy8gY3VybCAnaHR0cHM6Ly9zcGlubjNyLnVzMTAubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0LWpzb24/dT0wYjE3Mzk4MTNlYmYxMThlOTJmYWY4ZmMzJmlkPWFkM2Q1M2U4MzcmYz1qUXVlcnkxOTAwOTYyNDQ4MzQ1NTM3NzYyOF8xNTUyMzI3NDU0MjYzJkVNQUlMPWJ1cnRvbmF0b3IlMkJ0ZXN0NCU0MGdtYWlsLmNvbSZiXzBiMTczOTgxM2ViZjExOGU5MmZhZjhmYzNfYWQzZDUzZTgzNz0mc3Vic2NyaWJlPSZfPTE1NTIzMjc0NTQyNjQnXG4gICAgICAgIC8vIC1IICdSZWZlcmVyOiBodHRwczovL2dldHBvbGFyaXplZC5pby9tYWlsY2hpbXAtaWZyYW1lLmh0bWwnXG4gICAgICAgIC8vIC1IICdVc2VyLUFnZW50OiBNb3ppbGxhLzUuMCAoWDExOyBMaW51eCB4ODZfNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83MC4wLjM1MzguNzcgU2FmYXJpLzUzNy4zNidcbiAgICAgICAgLy8gLUggJ0ROVDogMScgLS1jb21wcmVzc2VkXG5cbiAgICAgICAgY29uc3QgZW1haWxFbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KGVtYWlsKTtcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vc3Bpbm4zci51czEwLmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdC1qc29uP3U9MGIxNzM5ODEzZWJmMTE4ZTkyZmFmOGZjMyZpZD1hZDNkNTNlODM3JmM9Y2FsbGJhY2smRU1BSUw9JHtlbWFpbEVuY29kZWR9JmJfMGIxNzM5ODEzZWJmMTE4ZTkyZmFmOGZjM19hZDNkNTNlODM3PSZzdWJzY3JpYmU9Jl89MTU1MjMyNzQ1NDI2NGA7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG5cbiAgICAgICAgaWYgKHRleHQuaW5kZXhPZignc3VjY2VzcycpID09PSAtMSAmJiB0ZXh0LmluZGV4T2YoJ2FscmVhZHkgc3Vic2NyaWJlZCcpID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByZXN1bHQ6IFwiICsgdGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCByZXF1ZXN0OiBcIiArIHJlc3BvbnNlLnN0YXR1cyArIFwiOiBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHN1YnNjcmliZVZpYUFQSShlbWFpbDogc3RyaW5nLCBmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykge1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgICAgICBcImVtYWlsX2FkZHJlc3NcIjogZW1haWwsXG4gICAgICAgICAgICBcInN0YXR1c1wiOiBcInN1YnNjcmliZWRcIixcbiAgICAgICAgICAgIFwibWVyZ2VfZmllbGRzXCI6IHtcbiAgICAgICAgICAgICAgICBcIkZOQU1FXCI6IGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBcIkxOQU1FXCI6IGxhc3ROYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBcInBvbGFyXCI7XG5cbiAgICAgICAgLy8gdGhpcyBpcyBhY3R1YWxseSBvdXIgQVBJIGtleSBub3Qgb3VyIHBhc3N3b3JkXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gXCI0Mzc3MDdhNDA1YTE2ZmNjODYzZTA5Y2IyZjZkY2M2Yy11czEwXCI7XG5cbiAgICAgICAgY29uc3QgYXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgQmFzZTY0LmVuY29kZSh1c2VybmFtZSArIFwiOlwiICsgcGFzc3dvcmQpO1xuXG4gICAgICAgIGNvbnN0IGluaXQgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGF1dGhvcml6YXRpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHJpZ2h0IG5vdyBqdXN0IHRoZSBtYWluIG1haWxjaGltcCBsaXN0XG4gICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly91czEwLmFwaS5tYWlsY2hpbXAuY29tLzMuMC9saXN0cy9hZDNkNTNlODM3L21lbWJlcnMvXCI7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHJlcXVlc3Q6IFwiICsgcmVzcG9uc2Uuc3RhdHVzICsgXCI6IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG5cbiAgICB9XG5cbn1cbiJdfQ==