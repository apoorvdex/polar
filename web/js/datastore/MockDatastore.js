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
const MemoryDatastore_1 = require("./MemoryDatastore");
const DocMetas_1 = require("../metadata/DocMetas");
class MockDatastore extends MemoryDatastore_1.MemoryDatastore {
    constructor() {
        super();
    }
    init() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield _super("init").call(this);
            const mockDockMetas = [
                DocMetas_1.MockDocMetas.createWithinInitialPagemarks('0x001', 1),
                DocMetas_1.MockDocMetas.createWithinInitialPagemarks('0x002', 2)
            ];
            return result;
        });
    }
}
exports.MockDatastore = MockDatastore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ja0RhdGFzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vY2tEYXRhc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFHbEQsTUFBYSxhQUFjLFNBQVEsaUNBQWU7SUFFOUM7UUFDSSxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFWSxJQUFJOzs7WUFFYixNQUFNLE1BQU0sR0FBRyxNQUFNLGNBQVUsV0FBRSxDQUFDO1lBRWxDLE1BQU0sYUFBYSxHQUFHO2dCQUNsQix1QkFBWSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQ3JELHVCQUFZLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUN4RCxDQUFDO1lBRUYsT0FBTyxNQUFNLENBQUM7UUFFbEIsQ0FBQztLQUFBO0NBRUo7QUFuQkQsc0NBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEYXRhc3RvcmUganVzdCBpbiBtZW1vcnkgd2l0aCBubyBvbiBkaXNrIHBlcnNpc3RlbmNlLlxuICovXG5pbXBvcnQge01lbW9yeURhdGFzdG9yZX0gZnJvbSAnLi9NZW1vcnlEYXRhc3RvcmUnO1xuaW1wb3J0IHtNb2NrRG9jTWV0YXN9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7SW5pdFJlc3VsdH0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuXG5leHBvcnQgY2xhc3MgTW9ja0RhdGFzdG9yZSBleHRlbmRzIE1lbW9yeURhdGFzdG9yZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdCgpOiBQcm9taXNlPEluaXRSZXN1bHQ+IHtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdXBlci5pbml0KCk7XG5cbiAgICAgICAgY29uc3QgbW9ja0RvY2tNZXRhcyA9IFtcbiAgICAgICAgICAgIE1vY2tEb2NNZXRhcy5jcmVhdGVXaXRoaW5Jbml0aWFsUGFnZW1hcmtzKCcweDAwMScsIDEpLFxuICAgICAgICAgICAgTW9ja0RvY01ldGFzLmNyZWF0ZVdpdGhpbkluaXRpYWxQYWdlbWFya3MoJzB4MDAyJywgMilcbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG59XG4iXX0=