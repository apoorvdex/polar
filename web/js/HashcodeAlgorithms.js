"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blueimp_md5_1 = __importDefault(require("blueimp-md5"));
const js_sha3_1 = require("js-sha3");
class HashcodeAlgorithms {
    static md5(data) {
        return blueimp_md5_1.default(data);
    }
    static keccak256(data) {
        return js_sha3_1.keccak256(data);
    }
}
exports.HashcodeAlgorithms = HashcodeAlgorithms;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFzaGNvZGVBbGdvcml0aG1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSGFzaGNvZGVBbGdvcml0aG1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOERBQThCO0FBQzlCLHFDQUFrQztBQUtsQyxNQUFhLGtCQUFrQjtJQUVwQixNQUFNLENBQUMsR0FBRyxDQUFDLElBQVk7UUFDMUIsT0FBTyxxQkFBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQVk7UUFDaEMsT0FBTyxtQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FFSjtBQVZELGdEQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1kNSBmcm9tICdibHVlaW1wLW1kNSc7XG5pbXBvcnQge2tlY2NhazI1Nn0gZnJvbSAnanMtc2hhMyc7XG5cbi8qKlxuICogU3BlY2lmaWMgaGFzaGNvZGUgYWxnb3JpdGhtc1xuICovXG5leHBvcnQgY2xhc3MgSGFzaGNvZGVBbGdvcml0aG1zIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgbWQ1KGRhdGE6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbWQ1KGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMga2VjY2FrMjU2KGRhdGE6IHN0cmluZykge1xuICAgICAgICByZXR1cm4ga2VjY2FrMjU2KGRhdGEpO1xuICAgIH1cblxufVxuIl19