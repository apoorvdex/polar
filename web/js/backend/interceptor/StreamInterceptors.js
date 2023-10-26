"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const Logger_1 = require("../../logger/Logger");
const stream_1 = require("stream");
const Files_1 = require("../../util/Files");
const log = Logger_1.Logger.create();
class StreamInterceptors {
    static mockInterceptor(request, callback) {
        callback({
            statusCode: 200,
            headers: {
                'content-type': 'text/html'
            },
            data: createStream('HTTP 200 OK\r\n<h5>Response</h5>')
        });
    }
    static withSetTimeout(delegate) {
        setTimeout(() => {
            delegate();
        }, 0);
    }
    static handleWithNetRequest(request, callback) {
        log.debug("Handling request: ", request.url);
        const options = {
            method: request.method,
            url: request.url,
        };
        const responseStream = new stream_1.PassThrough();
        const netRequest = electron_1.net.request(options)
            .on('response', (response) => __awaiter(this, void 0, void 0, function* () {
            response
                .on('data', chunk => {
                responseStream.push(chunk);
            })
                .on('end', () => {
                responseStream.push(null);
            })
                .on('aborted', () => {
                log.error(`Response aborted: ${request.url}`);
                callback(undefined);
            })
                .on('error', () => {
                log.error(`Response error: ${request.url}`);
                callback(undefined);
            });
            const headers = Object.assign({}, response.headers);
            delete headers['content-encoding'];
            const streamProtocolResponse = {
                headers,
                data: responseStream,
                statusCode: response.statusCode
            };
            callback(streamProtocolResponse);
        }))
            .on('abort', () => {
            log.error(`Request abort: ${request.url}`);
            callback(undefined);
        })
            .on('error', (error) => {
            log.error(`Request error: ${request.url}`, error);
            callback(undefined);
        });
        for (const header of Object.keys(request.headers)) {
            log.debug("Setting request header: ", header);
            const headerValue = request.headers[header];
            netRequest.setHeader(header, headerValue);
        }
        ;
        if (request.uploadData) {
            log.debug(`Writing data to request with method ${request.method}`);
            request.uploadData.forEach(current => {
                if (current.file) {
                    Files_1.Files.readFileAsync(current.file)
                        .then(buffer => netRequest.write(buffer))
                        .catch(err => log.error("Could not upload: ", err));
                }
                else if (current.blobUUID) {
                    throw new Error("Do not currently handle blobs");
                }
                else {
                    netRequest.write(this.assertChunk(current.bytes));
                }
            });
        }
        netRequest.end();
    }
    static assertChunk(chunk) {
        if (chunk === undefined) {
            throw new TypeError('Must not be undefined.');
        }
        if (chunk === null) {
            throw new TypeError('Must not be null.');
        }
        const chunkIsString = typeof chunk === 'string';
        const chunkIsBuffer = chunk instanceof Buffer;
        if (!chunkIsString && !chunkIsBuffer) {
            log.error("Invalid data given: ", chunk);
            throw new TypeError('Must be a string or Buffer.');
        }
        return chunk;
    }
}
exports.StreamInterceptors = StreamInterceptors;
function createStream(text) {
    const rv = new stream_1.PassThrough();
    rv.push(text);
    rv.push(null);
    return rv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyZWFtSW50ZXJjZXB0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RyZWFtSW50ZXJjZXB0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkI7QUFDN0IsZ0RBQTJDO0FBQzNDLG1DQUE2RDtBQUk3RCw0Q0FBdUM7QUFFdkMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsa0JBQWtCO0lBRXBCLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBdUMsRUFBRSxRQUFnQztRQUNuRyxRQUFRLENBQVE7WUFDWixVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRTtnQkFDUixjQUFjLEVBQUUsV0FBVzthQUMzQjtZQUNELElBQUksRUFBRSxZQUFZLENBQUMsa0NBQWtDLENBQUM7U0FDekQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVVNLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBb0I7UUFFN0MsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLFFBQVEsRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRVYsQ0FBQztJQUVNLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxPQUF1QyxFQUFFLFFBQWdDO1FBRXhHLEdBQUcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdDLE1BQU0sT0FBTyxHQUFHO1lBQ1osTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztTQUNuQixDQUFDO1FBRUYsTUFBTSxjQUFjLEdBQUcsSUFBSSxvQkFBVyxFQUFFLENBQUM7UUFFekMsTUFBTSxVQUFVLEdBQUcsY0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7YUFDbEMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFPLFFBQVEsRUFBRSxFQUFFO1lBRS9CLFFBQVE7aUJBQ0gs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LENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ3JEO1lBRUwsQ0FBQyxDQUFDLENBQUM7U0FJTjtRQUVELFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUVyQixDQUFDO0lBRU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFhO1FBRXBDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUVyQixNQUFNLElBQUksU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDakQ7UUFFRCxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDaEIsTUFBTSxJQUFJLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQzVDO1FBRUQsTUFBTSxhQUFhLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDO1FBQ2hELE1BQU0sYUFBYSxHQUFHLEtBQUssWUFBWSxNQUFNLENBQUM7UUFFOUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQyxHQUFHLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sSUFBSSxTQUFTLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUN0RDtRQUVELE9BQU8sS0FBSyxDQUFDO0lBRWpCLENBQUM7Q0FFSjtBQXpKRCxnREF5SkM7QUEyQkQsU0FBUyxZQUFZLENBQUMsSUFBWTtJQUM5QixNQUFNLEVBQUUsR0FBRyxJQUFJLG9CQUFXLEVBQUUsQ0FBQztJQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNkLE9BQU8sRUFBRSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bmV0fSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RHVwbGV4LCBQYXNzVGhyb3VnaCwgUmVhZGFibGUsIFN0cmVhbX0gZnJvbSAnc3RyZWFtJztcbmltcG9ydCBJbnRlcmNlcHRTdHJlYW1Qcm90b2NvbFJlcXVlc3QgPSBFbGVjdHJvbi5JbnRlcmNlcHRTdHJlYW1Qcm90b2NvbFJlcXVlc3Q7XG5pbXBvcnQgU3RyZWFtUHJvdG9jb2xSZXNwb25zZSA9IEVsZWN0cm9uLlN0cmVhbVByb3RvY29sUmVzcG9uc2U7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQge0ZpbGVzfSBmcm9tICcuLi8uLi91dGlsL0ZpbGVzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgU3RyZWFtSW50ZXJjZXB0b3JzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgbW9ja0ludGVyY2VwdG9yKHJlcXVlc3Q6IEludGVyY2VwdFN0cmVhbVByb3RvY29sUmVxdWVzdCwgY2FsbGJhY2s6IFN0cmVhbVByb3RvY29sQ2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soIDxhbnk+IHtcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ3RleHQvaHRtbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiBjcmVhdGVTdHJlYW0oJ0hUVFAgMjAwIE9LXFxyXFxuPGg1PlJlc3BvbnNlPC9oNT4nKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsIHRoZSBnaXZlbiBsYW1iZGEgd2l0aCBzZXRUaW1lb3V0IHNvIGl0IGRvZXNuJ3QgZXhlY3V0ZSBpbiB0aGVcbiAgICAgKiBmb3JlZ3JvdW5kLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBhIHdvcmthcm91bmQgdG8gZml4IGFuIEVsZWN0cm9uIGxvY2t1cCBpc3N1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZWxlZ2F0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgd2l0aFNldFRpbWVvdXQoZGVsZWdhdGU6ICgpID0+IHZvaWQpIHtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRlbGVnYXRlKCk7XG4gICAgICAgIH0sIDApO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBoYW5kbGVXaXRoTmV0UmVxdWVzdChyZXF1ZXN0OiBJbnRlcmNlcHRTdHJlYW1Qcm90b2NvbFJlcXVlc3QsIGNhbGxiYWNrOiBTdHJlYW1Qcm90b2NvbENhbGxiYWNrKSB7XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiSGFuZGxpbmcgcmVxdWVzdDogXCIsIHJlcXVlc3QudXJsKTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgICAgIHVybDogcmVxdWVzdC51cmwsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VTdHJlYW0gPSBuZXcgUGFzc1Rocm91Z2goKTtcblxuICAgICAgICBjb25zdCBuZXRSZXF1ZXN0ID0gbmV0LnJlcXVlc3Qob3B0aW9ucylcbiAgICAgICAgICAgIC5vbigncmVzcG9uc2UnLCBhc3luYyAocmVzcG9uc2UpID0+IHtcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgIC5vbignZGF0YScsIGNodW5rID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlU3RyZWFtLnB1c2goY2h1bmspO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oJ2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlU3RyZWFtLnB1c2gobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbignYWJvcnRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihgUmVzcG9uc2UgYWJvcnRlZDogJHtyZXF1ZXN0LnVybH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCk7IC8vIFRPRE8gdGVzdCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGBSZXNwb25zZSBlcnJvcjogJHtyZXF1ZXN0LnVybH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCk7IC8vIFRPRE8gdGVzdCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZS5oZWFkZXJzKTtcblxuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gZGVsZXRlIHRoZSBjb250ZW50LWVuY29kaW5nIEhUVFAgaGVhZGVyIGJlY2F1c2VcbiAgICAgICAgICAgICAgICAvLyB0aGUgbmV0LnJlcXVlc3QgQVBJIGFscmVhZHkgcGVyZm9ybXMgdGhlIGd6aXAvZGVmbGF0ZVxuICAgICAgICAgICAgICAgIC8vIGVuY29kaW5nIEZPUiB1cyBhbmQgQ2hyb21lIGF0dGVtcHRzIHRvIGRvdWJsZSBkZWNvZGUgaXQgYW5kXG4gICAgICAgICAgICAgICAgLy8gdGhlbiBicmVha3MuXG4gICAgICAgICAgICAgICAgZGVsZXRlIGhlYWRlcnNbJ2NvbnRlbnQtZW5jb2RpbmcnXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmVhbVByb3RvY29sUmVzcG9uc2U6IENvcnJlY3RTdHJlYW1Qcm90b2NvbFJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZVN0cmVhbSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogcmVzcG9uc2Uuc3RhdHVzQ29kZVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzdHJlYW1Qcm90b2NvbFJlc3BvbnNlKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignYWJvcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKGBSZXF1ZXN0IGFib3J0OiAke3JlcXVlc3QudXJsfWApO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCk7IC8vIFRPRE8gdGVzdCB0aGlzLlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignZXJyb3InLCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYFJlcXVlc3QgZXJyb3I6ICR7cmVxdWVzdC51cmx9YCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCk7IC8vIFRPRE8gdGVzdCB0aGlzLlxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGNvbnN0IGhlYWRlciBvZiBPYmplY3Qua2V5cyhyZXF1ZXN0LmhlYWRlcnMpKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJTZXR0aW5nIHJlcXVlc3QgaGVhZGVyOiBcIiwgaGVhZGVyKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclZhbHVlID0gKDxhbnk+IHJlcXVlc3QuaGVhZGVycylbaGVhZGVyXTtcbiAgICAgICAgICAgIG5ldFJlcXVlc3Quc2V0SGVhZGVyKGhlYWRlciwgaGVhZGVyVmFsdWUgKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocmVxdWVzdC51cGxvYWREYXRhKSB7XG5cbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gY2FsbCBuZXRSZXF1ZXN0LndyaXRlIG9uIGFsbCB0aGUgcmVxdWVzdC51cGxvYWREYXRhLlxuXG4gICAgICAgICAgICBsb2cuZGVidWcoYFdyaXRpbmcgZGF0YSB0byByZXF1ZXN0IHdpdGggbWV0aG9kICR7cmVxdWVzdC5tZXRob2R9YCk7XG5cbiAgICAgICAgICAgIHJlcXVlc3QudXBsb2FkRGF0YS5mb3JFYWNoKGN1cnJlbnQgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogd2UgbmVlZCB0byBoYW5kbGUgYGJsb2JVVUlEYCBhbmQgYGZpbGVgIHdoaWNoIGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgLy8gaW5wdXQuXG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5maWxlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgRmlsZXMucmVhZEZpbGVBc3luYyhjdXJyZW50LmZpbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihidWZmZXIgPT4gbmV0UmVxdWVzdC53cml0ZShidWZmZXIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgdXBsb2FkOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQuYmxvYlVVSUQpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBGSVhNRTogSSB0aGluayB3ZSBoYXZlIHRvIHVzZSB0aGUgYmxvYjogVVJMIGhhbmRsZXIgdG8gZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBkYXRhIGp1c3QgbGlrZSB3ZSB3b3VsZCBhbnkgbm9ybWFsIFVSTCB0aGVuIHdyaXRlIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBkYXRhIHRvIHRoZSBjb25uZWN0aW9uLiB3aGljaCBpcyB1Z2x5LlxuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvIG5vdCBjdXJyZW50bHkgaGFuZGxlIGJsb2JzXCIpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV0UmVxdWVzdC53cml0ZSh0aGlzLmFzc2VydENodW5rKGN1cnJlbnQuYnl0ZXMpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nIG9yIEJ1ZmZlci4nKVxuXG4gICAgICAgIH1cblxuICAgICAgICBuZXRSZXF1ZXN0LmVuZCgpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXNzZXJ0Q2h1bmsoY2h1bms6IEJ1ZmZlcik6IEJ1ZmZlciB7XG5cbiAgICAgICAgaWYgKGNodW5rID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHdlIGFyZSBnZXR0aW5nIHRoaXMgaW5cbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgbm90IGJlIHVuZGVmaW5lZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaHVuayA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBub3QgYmUgbnVsbC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNodW5rSXNTdHJpbmcgPSB0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnO1xuICAgICAgICBjb25zdCBjaHVua0lzQnVmZmVyID0gY2h1bmsgaW5zdGFuY2VvZiBCdWZmZXI7XG5cbiAgICAgICAgaWYgKCFjaHVua0lzU3RyaW5nICYmICFjaHVua0lzQnVmZmVyKSB7XG4gICAgICAgICAgICBsb2cuZXJyb3IoXCJJbnZhbGlkIGRhdGEgZ2l2ZW46IFwiLCBjaHVuayk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IGJlIGEgc3RyaW5nIG9yIEJ1ZmZlci4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaHVuaztcblxuICAgIH1cblxufVxuXG5cbi8vIG5vaW5zcGVjdGlvbiBUc0xpbnRcbmV4cG9ydCB0eXBlIFN0cmVhbVByb3RvY29sQ2FsbGJhY2sgPSAoc3RyZWFtPzogUmVhZGFibGVTdHJlYW0gfCBTdHJlYW1Qcm90b2NvbFJlc3BvbnNlIHwgQ29ycmVjdFN0cmVhbVByb3RvY29sUmVzcG9uc2UpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29ycmVjdFN0cmVhbVByb3RvY29sUmVzcG9uc2Uge1xuXG5cbiAgICAvLyBEb2NzOiBodHRwOi8vZWxlY3Ryb24uYXRvbS5pby9kb2NzL2FwaS9zdHJ1Y3R1cmVzL3N0cmVhbS1wcm90b2NvbC1yZXNwb25zZVxuXG4gICAgLyoqXG4gICAgICogQSBOb2RlLmpzIHJlYWRhYmxlIHN0cmVhbSByZXByZXNlbnRpbmcgdGhlIHJlc3BvbnNlIGJvZHlcbiAgICAgKi9cbiAgICBkYXRhOiBSZWFkYWJsZVN0cmVhbSB8IFJlYWRhYmxlIHwgTm9kZUpTLlJlYWRhYmxlU3RyZWFtO1xuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNwb25zZSBoZWFkZXJzXG4gICAgICovXG4gICAgaGVhZGVyczogRWxlY3Ryb24uSGVhZGVycztcbiAgICAvKipcbiAgICAgKiBUaGUgSFRUUCByZXNwb25zZSBjb2RlXG4gICAgICovXG4gICAgc3RhdHVzQ29kZTogbnVtYmVyO1xuXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlU3RyZWFtKHRleHQ6IHN0cmluZykge1xuICAgIGNvbnN0IHJ2ID0gbmV3IFBhc3NUaHJvdWdoKCk7XG4gICAgcnYucHVzaCh0ZXh0KTtcbiAgICBydi5wdXNoKG51bGwpO1xuICAgIHJldHVybiBydjtcbn1cbiJdfQ==