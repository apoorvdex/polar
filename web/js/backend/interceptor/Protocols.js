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
class Protocols {
    static interceptBufferProtocol(protocol, scheme, handler) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                protocol.interceptBufferProtocol(scheme, handler, (error) => {
                    if (error) {
                        reject(error);
                    }
                    resolve();
                });
            });
        });
    }
    static interceptStreamProtocol(protocol, scheme, handler) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                protocol.interceptStreamProtocol(scheme, handler, (error) => {
                    if (error) {
                        reject(error);
                    }
                    resolve();
                });
            });
        });
    }
    static parseContentType(contentType) {
        let mimeType = "text/html";
        let value;
        if (contentType instanceof Array) {
            value = contentType[0];
        }
        else {
            value = contentType;
        }
        if (!value) {
            value = mimeType;
        }
        let charset;
        let match;
        if (match = value.match("^([a-zA-Z]+/[a-zA-Z+]+)")) {
            mimeType = match[1];
        }
        if (match = value.match("; charset=([^ ;]+)")) {
            charset = match[1];
        }
        return {
            mimeType,
            charset
        };
    }
}
exports.Protocols = Protocols;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdG9jb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJvdG9jb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFhLFNBQVM7SUFLWCxNQUFNLENBQU8sdUJBQXVCLENBQUMsUUFBMkIsRUFDM0IsTUFBYyxFQUNkLE9BQVk7O1lBRXBELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBRW5DLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBRXhELElBQUksS0FBSyxFQUFFO3dCQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDakI7b0JBRUQsT0FBTyxFQUFFLENBQUM7Z0JBRWQsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtJQUtNLE1BQU0sQ0FBTyx1QkFBdUIsQ0FBQyxRQUEyQixFQUMzQixNQUFjLEVBQ2QsT0FBOEI7O1lBRXRFLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBRW5DLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQVEsT0FBTyxFQUFFLENBQUMsS0FBWSxFQUFFLEVBQUU7b0JBRXJFLElBQUksS0FBSyxFQUFFO3dCQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDakI7b0JBRUQsT0FBTyxFQUFFLENBQUM7Z0JBRWQsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtJQU1NLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUE4QjtRQVV6RCxJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFFM0IsSUFBSSxLQUFhLENBQUM7UUFFbEIsSUFBSSxXQUFXLFlBQVksS0FBSyxFQUFFO1lBSTlCLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7YUFBTTtZQUNILEtBQUssR0FBRyxXQUFXLENBQUM7U0FDdkI7UUFFRCxJQUFJLENBQUUsS0FBSyxFQUFFO1lBQ1QsS0FBSyxHQUFHLFFBQVEsQ0FBQztTQUNwQjtRQUVELElBQUksT0FBTyxDQUFDO1FBQ1osSUFBSSxLQUFLLENBQUM7UUFHVixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLEVBQUU7WUFDaEQsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjtRQUdELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUMzQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO1FBRUQsT0FBTztZQUNILFFBQVE7WUFDUixPQUFPO1NBQ1YsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQW5HRCw4QkFtR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0cmVhbVByb3RvY29sQ2FsbGJhY2t9IGZyb20gJy4vU3RyZWFtSW50ZXJjZXB0b3JzJztcbmltcG9ydCBJbnRlcmNlcHRTdHJlYW1Qcm90b2NvbFJlcXVlc3QgPSBFbGVjdHJvbi5JbnRlcmNlcHRTdHJlYW1Qcm90b2NvbFJlcXVlc3Q7XG5cbmV4cG9ydCBjbGFzcyBQcm90b2NvbHMge1xuXG4gICAgLyoqXG4gICAgICogSW5zdGVhZCBvZiBjYWxsYmFja3MgdXNlcyBhIHByb21pc2UuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBpbnRlcmNlcHRCdWZmZXJQcm90b2NvbChwcm90b2NvbDogRWxlY3Ryb24uUHJvdG9jb2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFueSkge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHByb3RvY29sLmludGVyY2VwdEJ1ZmZlclByb3RvY29sKHNjaGVtZSwgaGFuZGxlciwgKGVycm9yKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zdGVhZCBvZiBjYWxsYmFja3MgdXNlcyBhIHByb21pc2UuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBpbnRlcmNlcHRTdHJlYW1Qcm90b2NvbChwcm90b2NvbDogRWxlY3Ryb24uUHJvdG9jb2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IFN0cmVhbVByb3RvY29sSGFuZGxlcikge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHByb3RvY29sLmludGVyY2VwdFN0cmVhbVByb3RvY29sKHNjaGVtZSwgPGFueT4gaGFuZGxlciwgKGVycm9yOiBFcnJvcikgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgdGhlIGNvbnRlbnQtdHlwZSBoZWFkZXIgYW5kIGluY2x1ZGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNoYXJzZXQgdG9vLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VDb250ZW50VHlwZShjb250ZW50VHlwZTogc3RyaW5nIHwgc3RyaW5nW10pIHtcblxuICAgICAgICAvLyBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2h0bWwvaHRtbF9jaGFyc2V0LmFzcFxuXG4gICAgICAgIC8vIGh0bWw0IGlzIElTTy04ODU5LTEgYW5kIEhUTUw1IGlzIFVURi04XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODQ5OTkzMC9ob3ctdG8taWRlbnRpZnktaHRtbDVcblxuICAgICAgICAvLyB0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcblxuICAgICAgICBsZXQgbWltZVR5cGUgPSBcInRleHQvaHRtbFwiO1xuXG4gICAgICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuXG4gICAgICAgIGlmIChjb250ZW50VHlwZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAvLyB3aGVuIGdpdmVuIGFzIHJlc3BvbnNlIGhlYWRlcnMgd2UncmUgZ2l2ZW4gYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgICAgICAgICAgLy8gc2luY2UgaGVhZGVycyBjYW4gaGF2ZSBtdWx0aXBsZSB2YWx1ZXMgYnV0IHRoZXJlJ3Mgbm8gcmVhc29uXG4gICAgICAgICAgICAvLyBjb250ZW50VHlwZSBzaG91bGQgaGF2ZSBtb3JlIHRoYW4gb25lLlxuICAgICAgICAgICAgdmFsdWUgPSBjb250ZW50VHlwZVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gY29udGVudFR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISB2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBtaW1lVHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjaGFyc2V0O1xuICAgICAgICBsZXQgbWF0Y2g7XG5cbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgICAgICBpZiAobWF0Y2ggPSB2YWx1ZS5tYXRjaChcIl4oW2EtekEtWl0rL1thLXpBLVorXSspXCIpKSB7XG4gICAgICAgICAgICBtaW1lVHlwZSA9IG1hdGNoWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgICAgICBpZiAobWF0Y2ggPSB2YWx1ZS5tYXRjaChcIjsgY2hhcnNldD0oW14gO10rKVwiKSkge1xuICAgICAgICAgICAgY2hhcnNldCA9IG1hdGNoWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pbWVUeXBlLFxuICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICB9O1xuXG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBTdHJlYW1Qcm90b2NvbEhhbmRsZXIge1xuICAgIChyZXF1ZXN0OiBJbnRlcmNlcHRTdHJlYW1Qcm90b2NvbFJlcXVlc3QsIGNhbGxiYWNrOiBTdHJlYW1Qcm90b2NvbENhbGxiYWNrKTogdm9pZDtcbn1cbiJdfQ==