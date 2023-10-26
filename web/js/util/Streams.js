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
const convertStream = require("convert-stream");
class Streams {
    static toBuffer(stream) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield convertStream.toBuffer(stream);
        });
    }
}
exports.Streams = Streams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyZWFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN0cmVhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRWhELE1BQWEsT0FBTztJQUVULE1BQU0sQ0FBTyxRQUFRLENBQUMsTUFBNkI7O1lBQ3RELE9BQU8sTUFBTSxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtDQUVKO0FBTkQsMEJBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb252ZXJ0U3RyZWFtID0gcmVxdWlyZShcImNvbnZlcnQtc3RyZWFtXCIpO1xuXG5leHBvcnQgY2xhc3MgU3RyZWFtcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHRvQnVmZmVyKHN0cmVhbTogTm9kZUpTLlJlYWRhYmxlU3RyZWFtKTogUHJvbWlzZTxCdWZmZXI+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNvbnZlcnRTdHJlYW0udG9CdWZmZXIoc3RyZWFtKTtcbiAgICB9XG5cbn1cbiJdfQ==