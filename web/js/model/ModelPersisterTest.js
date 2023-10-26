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
const MockAdvertisingPersistenceLayer_1 = require("../datastore/advertiser/MockAdvertisingPersistenceLayer");
const DefaultPersistenceLayer_1 = require("../datastore/DefaultPersistenceLayer");
const MemoryDatastore_1 = require("../datastore/MemoryDatastore");
const ModelPersister_1 = require("./ModelPersister");
const DocMetas_1 = require("../metadata/DocMetas");
const chai_1 = require("chai");
const Promises_1 = require("../util/Promises");
const wait_for_expect_1 = __importDefault(require("wait-for-expect"));
describe('ModelPersister', function () {
    this.timeout(10000);
    function assertWrites(nrWrites) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promises_1.Promises.waitFor(1000);
            yield wait_for_expect_1.default(() => {
                chai_1.assert.equal(modelPersister.nrWrites, nrWrites);
            });
            yield Promises_1.Promises.waitFor(1000);
            yield wait_for_expect_1.default(() => {
                chai_1.assert.equal(modelPersister.nrWrites, nrWrites);
            });
        });
    }
    let persistenceLayer;
    let docMeta;
    let modelPersister;
    beforeEach(function () {
        persistenceLayer =
            new MockAdvertisingPersistenceLayer_1.MockAdvertisingPersistenceLayer(new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new MemoryDatastore_1.MemoryDatastore()), true);
        docMeta = DocMetas_1.MockDocMetas.createMockDocMeta();
        modelPersister = new ModelPersister_1.ModelPersister(persistenceLayer, docMeta);
        docMeta = modelPersister.docMeta;
    });
    it("with simple write", function () {
        return __awaiter(this, void 0, void 0, function* () {
            docMeta.docInfo.title = 'asdf';
            yield assertWrites(1);
        });
    });
    it("with batched write", function () {
        return __awaiter(this, void 0, void 0, function* () {
            DocMetas_1.DocMetas.withBatchedMutations(docMeta, () => {
                docMeta.docInfo.title = 'asdf';
                docMeta.docInfo.description = 'hello world';
                docMeta.getPageMeta(1).pageInfo.dimensions = { width: 100, height: 100 };
            });
            yield assertWrites(1);
        });
    });
    it("with no batched write", function () {
        return __awaiter(this, void 0, void 0, function* () {
            DocMetas_1.DocMetas.withBatchedMutations(docMeta, () => {
            });
            yield assertWrites(0);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxQZXJzaXN0ZXJUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTW9kZWxQZXJzaXN0ZXJUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw2R0FBd0c7QUFDeEcsa0ZBQTZFO0FBQzdFLGtFQUE2RDtBQUU3RCxxREFBZ0Q7QUFDaEQsbURBQTREO0FBQzVELCtCQUE0QjtBQUM1QiwrQ0FBMEM7QUFDMUMsc0VBQTRDO0FBSTVDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUV2QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBCLFNBQWUsWUFBWSxDQUFDLFFBQWdCOztZQUV4QyxNQUFNLG1CQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTdCLE1BQU0seUJBQWEsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JCLGFBQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sbUJBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFN0IsTUFBTSx5QkFBYSxDQUFDLEdBQUcsRUFBRTtnQkFDckIsYUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBRUQsSUFBSSxnQkFBaUQsQ0FBQztJQUV0RCxJQUFJLE9BQWdCLENBQUM7SUFFckIsSUFBSSxjQUE4QixDQUFDO0lBRW5DLFVBQVUsQ0FBQztRQUVQLGdCQUFnQjtZQUNaLElBQUksaUVBQStCLENBQy9CLElBQUksaURBQXVCLENBQ3ZCLElBQUksaUNBQWUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUMsT0FBTyxHQUFHLHVCQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUUzQyxjQUFjLEdBQUcsSUFBSSwrQkFBYyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRS9ELE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBR3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFOztZQUVwQixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7WUFFL0IsTUFBTSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUIsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvQkFBb0IsRUFBRTs7WUFFckIsbUJBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUN4QyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztnQkFDNUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7WUFDM0UsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxQixDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFOztZQUV4QixtQkFBUSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFFNUMsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxQixDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vY2tBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gXCIuLi9kYXRhc3RvcmUvYWR2ZXJ0aXNlci9Nb2NrQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyXCI7XG5pbXBvcnQge0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi9kYXRhc3RvcmUvRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtNZW1vcnlEYXRhc3RvcmV9IGZyb20gJy4uL2RhdGFzdG9yZS9NZW1vcnlEYXRhc3RvcmUnO1xuaW1wb3J0IHtNb2RlbFBlcnNpc3RlckZhY3Rvcnl9IGZyb20gJy4vTW9kZWxQZXJzaXN0ZXJGYWN0b3J5JztcbmltcG9ydCB7TW9kZWxQZXJzaXN0ZXJ9IGZyb20gJy4vTW9kZWxQZXJzaXN0ZXInO1xuaW1wb3J0IHtNb2NrRG9jTWV0YXMsIERvY01ldGFzfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1Byb21pc2VzfSBmcm9tIFwiLi4vdXRpbC9Qcm9taXNlc1wiO1xuaW1wb3J0IHdhaXRGb3JFeHBlY3QgZnJvbSAnd2FpdC1mb3ItZXhwZWN0JztcbmltcG9ydCB7QWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi9kYXRhc3RvcmUvYWR2ZXJ0aXNlci9BZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tIFwiLi4vbWV0YWRhdGEvRG9jTWV0YVwiO1xuXG5kZXNjcmliZSgnTW9kZWxQZXJzaXN0ZXInLCBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMudGltZW91dCgxMDAwMCk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBhc3NlcnRXcml0ZXMobnJXcml0ZXM6IG51bWJlcikge1xuXG4gICAgICAgIGF3YWl0IFByb21pc2VzLndhaXRGb3IoMTAwMCk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvckV4cGVjdCgoKSA9PiB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwobW9kZWxQZXJzaXN0ZXIubnJXcml0ZXMsIG5yV3JpdGVzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZXMud2FpdEZvcigxMDAwKTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yRXhwZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChtb2RlbFBlcnNpc3Rlci5ucldyaXRlcywgbnJXcml0ZXMpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGxldCBwZXJzaXN0ZW5jZUxheWVyOiBNb2NrQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyO1xuXG4gICAgbGV0IGRvY01ldGE6IERvY01ldGE7XG5cbiAgICBsZXQgbW9kZWxQZXJzaXN0ZXI6IE1vZGVsUGVyc2lzdGVyO1xuXG4gICAgYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICBwZXJzaXN0ZW5jZUxheWVyID1cbiAgICAgICAgICAgIG5ldyBNb2NrQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyKFxuICAgICAgICAgICAgICAgIG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihcbiAgICAgICAgICAgICAgICAgICAgbmV3IE1lbW9yeURhdGFzdG9yZSgpKSwgdHJ1ZSk7XG5cbiAgICAgICAgZG9jTWV0YSA9IE1vY2tEb2NNZXRhcy5jcmVhdGVNb2NrRG9jTWV0YSgpO1xuXG4gICAgICAgIG1vZGVsUGVyc2lzdGVyID0gbmV3IE1vZGVsUGVyc2lzdGVyKHBlcnNpc3RlbmNlTGF5ZXIsIGRvY01ldGEpO1xuXG4gICAgICAgIGRvY01ldGEgPSBtb2RlbFBlcnNpc3Rlci5kb2NNZXRhO1xuXG5cbiAgICB9KTtcblxuICAgIGl0KFwid2l0aCBzaW1wbGUgd3JpdGVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgZG9jTWV0YS5kb2NJbmZvLnRpdGxlID0gJ2FzZGYnO1xuXG4gICAgICAgIGF3YWl0IGFzc2VydFdyaXRlcygxKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJ3aXRoIGJhdGNoZWQgd3JpdGVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgRG9jTWV0YXMud2l0aEJhdGNoZWRNdXRhdGlvbnMoZG9jTWV0YSwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvLnRpdGxlID0gJ2FzZGYnO1xuICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvLmRlc2NyaXB0aW9uID0gJ2hlbGxvIHdvcmxkJztcbiAgICAgICAgICAgIGRvY01ldGEuZ2V0UGFnZU1ldGEoMSkucGFnZUluZm8uZGltZW5zaW9ucyA9IHt3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IGFzc2VydFdyaXRlcygxKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJ3aXRoIG5vIGJhdGNoZWQgd3JpdGVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgRG9jTWV0YXMud2l0aEJhdGNoZWRNdXRhdGlvbnMoZG9jTWV0YSwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gbm8gd3JpdGVzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IGFzc2VydFdyaXRlcygwKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==