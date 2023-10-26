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
const DefaultPersistenceLayer_1 = require("./DefaultPersistenceLayer");
const MemoryDatastore_1 = require("./MemoryDatastore");
const DocMetas_1 = require("../metadata/DocMetas");
const TestingTime_1 = require("../test/TestingTime");
describe('PersistenceLayers', function () {
    const fingerprint = "0x001";
    const docMeta = DocMetas_1.MockDocMetas.createWithinInitialPagemarks(fingerprint, 14);
    let source;
    let target;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            source = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new MemoryDatastore_1.MemoryDatastore());
            target = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new MemoryDatastore_1.MemoryDatastore());
            yield Promise.all([source.init(), target.init()]);
        });
    });
    afterEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([source.stop(), target.stop()]);
            TestingTime_1.TestingTime.unfreeze();
        });
    });
    xit("Transfer with existing in source but not in target", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield source.write(fingerprint, docMeta);
        });
    });
    xit("Transfer with existing in source and target", function () {
        return __awaiter(this, void 0, void 0, function* () {
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc2lzdGVuY2VMYXllcnNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGVyc2lzdGVuY2VMYXllcnNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSx1RUFBa0U7QUFJbEUsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUdsRCxxREFBZ0Q7QUFFaEQsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBRTFCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQztJQUM1QixNQUFNLE9BQU8sR0FBRyx1QkFBWSxDQUFDLDRCQUE0QixDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUzRSxJQUFJLE1BQXdCLENBQUM7SUFDN0IsSUFBSSxNQUF3QixDQUFDO0lBRTdCLFVBQVUsQ0FBQzs7WUFDUCx5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3JCLE1BQU0sR0FBRyxJQUFJLGlEQUF1QixDQUFDLElBQUksaUNBQWUsRUFBRSxDQUFDLENBQUM7WUFDNUQsTUFBTSxHQUFHLElBQUksaURBQXVCLENBQUMsSUFBSSxpQ0FBZSxFQUFFLENBQUMsQ0FBQztZQUM1RCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDOztZQUNOLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xELHlCQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0IsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxvREFBb0QsRUFBRTs7WUFFdEQsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQVE3QyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLDZDQUE2QyxFQUFFOztRQWlCbkQsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gXCJjaGFpXCI7XG5pbXBvcnQge0ZpcmViYXNlRGF0YXN0b3JlfSBmcm9tICcuL0ZpcmViYXNlRGF0YXN0b3JlJztcbmltcG9ydCB7RGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4vRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtEaXNrRGF0YXN0b3JlfSBmcm9tICcuL0Rpc2tEYXRhc3RvcmUnO1xuaW1wb3J0IHtEYXRhc3RvcmVzfSBmcm9tICcuL0RhdGFzdG9yZXMnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyc30gZnJvbSAnLi9QZXJzaXN0ZW5jZUxheWVycyc7XG5pbXBvcnQge01lbW9yeURhdGFzdG9yZX0gZnJvbSAnLi9NZW1vcnlEYXRhc3RvcmUnO1xuaW1wb3J0IHtNb2NrRG9jTWV0YXN9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi9QZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7VVVJRHN9IGZyb20gXCIuLi9tZXRhZGF0YS9VVUlEc1wiO1xuaW1wb3J0IHtUZXN0aW5nVGltZX0gZnJvbSBcIi4uL3Rlc3QvVGVzdGluZ1RpbWVcIjtcblxuZGVzY3JpYmUoJ1BlcnNpc3RlbmNlTGF5ZXJzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBmaW5nZXJwcmludCA9IFwiMHgwMDFcIjtcbiAgICBjb25zdCBkb2NNZXRhID0gTW9ja0RvY01ldGFzLmNyZWF0ZVdpdGhpbkluaXRpYWxQYWdlbWFya3MoZmluZ2VycHJpbnQsIDE0KTtcblxuICAgIGxldCBzb3VyY2U6IFBlcnNpc3RlbmNlTGF5ZXI7XG4gICAgbGV0IHRhcmdldDogUGVyc2lzdGVuY2VMYXllcjtcblxuICAgIGJlZm9yZUVhY2goYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuICAgICAgICBzb3VyY2UgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIobmV3IE1lbW9yeURhdGFzdG9yZSgpKTtcbiAgICAgICAgdGFyZ2V0ID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKG5ldyBNZW1vcnlEYXRhc3RvcmUoKSk7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtzb3VyY2UuaW5pdCgpLCB0YXJnZXQuaW5pdCgpXSk7XG4gICAgfSk7XG5cbiAgICBhZnRlckVhY2goYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtzb3VyY2Uuc3RvcCgpLCB0YXJnZXQuc3RvcCgpXSk7XG4gICAgICAgIFRlc3RpbmdUaW1lLnVuZnJlZXplKCk7XG4gICAgfSk7XG5cbiAgICB4aXQoXCJUcmFuc2ZlciB3aXRoIGV4aXN0aW5nIGluIHNvdXJjZSBidXQgbm90IGluIHRhcmdldFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBhd2FpdCBzb3VyY2Uud3JpdGUoZmluZ2VycHJpbnQsIGRvY01ldGEpO1xuXG4gICAgICAgIC8vIGNvbnN0IHRyYW5zZmVyUmVzdWx0ID0gYXdhaXQgUGVyc2lzdGVuY2VMYXllcnMuc3luY2hyb25pemUoc291cmNlLCB0YXJnZXQsICh0cmFuc2ZlckV2ZW50KSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlRyYW5zZmVyIGV2ZW50OiBcIiwgdHJhbnNmZXJFdmVudCk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIGFzc2VydC5lcXVhbCh0cmFuc2ZlclJlc3VsdC5tdXRhdGlvbnMuZmluZ2VycHJpbnRzLmxlbmd0aCwgMSk7XG5cbiAgICB9KTtcblxuICAgIHhpdChcIlRyYW5zZmVyIHdpdGggZXhpc3RpbmcgaW4gc291cmNlIGFuZCB0YXJnZXRcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGF3YWl0IHRhcmdldC53cml0ZShmaW5nZXJwcmludCwgZG9jTWV0YSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRlc3RpbmdUaW1lLmZvcndhcmQoMTAwMCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIC8vIHdyaXRlIGEgbmV3ZXIgb25lIHRvIHRoZSBzb3VyY2UuLi5cbiAgICAgICAgLy8gZG9jTWV0YS5kb2NJbmZvLnV1aWQgPSBVVUlEcy5jcmVhdGUoKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gYXdhaXQgc291cmNlLndyaXRlKGZpbmdlcnByaW50LCBkb2NNZXRhKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gY29uc3QgdHJhbnNmZXJSZXN1bHQgPSBhd2FpdCBQZXJzaXN0ZW5jZUxheWVycy5zeW5jaHJvbml6ZShzb3VyY2UsIHRhcmdldCwgKHRyYW5zZmVyRXZlbnQpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiVHJhbnNmZXIgZXZlbnQ6IFwiLCB0cmFuc2ZlckV2ZW50KTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGFzc2VydC5lcXVhbCh0cmFuc2ZlclJlc3VsdC5tdXRhdGlvbnMuZmluZ2VycHJpbnRzLmxlbmd0aCwgMSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=