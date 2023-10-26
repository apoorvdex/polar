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
const Broadcaster_1 = require("../../ipc/Broadcaster");
class DocInfoBroadcasterService {
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            new Broadcaster_1.Broadcaster('doc-info-advertisement:broadcast', 'doc-info-advertisement');
        });
    }
}
exports.DocInfoBroadcasterService = DocInfoBroadcasterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jSW5mb0Jyb2FkY2FzdGVyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY0luZm9Ccm9hZGNhc3RlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUtsRCxNQUFhLHlCQUF5QjtJQUVyQixLQUFLOztZQUVkLElBQUkseUJBQVcsQ0FBQyxrQ0FBa0MsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xGLENBQUM7S0FBQTtDQUVKO0FBUEQsOERBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb2FkY2FzdGVyfSBmcm9tICcuLi8uLi9pcGMvQnJvYWRjYXN0ZXInO1xuXG4vKipcbiAqIFNlbmRzIHtEb2NJbmZvQWR2ZXJ0aXNlbWVudH1zIG91dCB3aGVuIHdlIG5lZWQgdG8gYWR2ZXJ0aXNlIGEgbmV3IG9uZS5cbiAqL1xuZXhwb3J0IGNsYXNzIERvY0luZm9Ccm9hZGNhc3RlclNlcnZpY2Uge1xuXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCkge1xuICAgICAgICAvLyBub2luc3BlY3Rpb24gVHNMaW50XG4gICAgICAgIG5ldyBCcm9hZGNhc3RlcignZG9jLWluZm8tYWR2ZXJ0aXNlbWVudDpicm9hZGNhc3QnLCAnZG9jLWluZm8tYWR2ZXJ0aXNlbWVudCcpO1xuICAgIH1cblxufVxuIl19