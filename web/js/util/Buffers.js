"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
class Buffers {
    static toStream(buffer) {
        const result = new stream_1.PassThrough();
        result.push(buffer);
        result.push(null);
        return result;
    }
    static toArrayBuffer(buffer) {
        return buffer.buffer;
    }
}
exports.Buffers = Buffers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVmZmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJ1ZmZlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFFbkMsTUFBYSxPQUFPO0lBRVQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFjO1FBRWpDLE1BQU0sTUFBTSxHQUFHLElBQUksb0JBQVcsRUFBRSxDQUFDO1FBRWpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQixPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0lBRU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFjO1FBQ3RDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUo7QUFqQkQsMEJBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQYXNzVGhyb3VnaH0gZnJvbSBcInN0cmVhbVwiO1xuXG5leHBvcnQgY2xhc3MgQnVmZmVycyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHRvU3RyZWFtKGJ1ZmZlcjogQnVmZmVyKSB7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBhc3NUaHJvdWdoKCk7XG5cbiAgICAgICAgcmVzdWx0LnB1c2goYnVmZmVyKTtcbiAgICAgICAgcmVzdWx0LnB1c2gobnVsbCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdG9BcnJheUJ1ZmZlcihidWZmZXI6IEJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlcjtcbiAgICB9XG5cbn1cbiJdfQ==