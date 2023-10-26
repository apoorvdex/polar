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
const DiskDatastore_1 = require("./DiskDatastore");
const os_1 = __importDefault(require("os"));
const Stopwatches_1 = require("../util/Stopwatches");
const DocMetas_1 = require("../metadata/DocMetas");
const tmpdir = os_1.default.tmpdir();
xdescribe("DocMetaParsePerformance", function () {
    return __awaiter(this, void 0, void 0, function* () {
        xit("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const datastore = new DiskDatastore_1.DiskDatastore();
                yield datastore.init();
                let stopwatch = Stopwatches_1.Stopwatches.create();
                const docMetaRefs = yield datastore.getDocMetaRefs();
                console.log("getDocMetaRefs: " + stopwatch.stop());
                console.log("Found N docMetas: " + docMetaRefs.length);
                stopwatch = Stopwatches_1.Stopwatches.create();
                for (const docMetaRef of docMetaRefs) {
                    const data = yield datastore.getDocMeta(docMetaRef.fingerprint);
                    if (data) {
                        const docMeta = DocMetas_1.DocMetas.deserialize(data, docMetaRef.fingerprint);
                    }
                }
                console.log("getDocMeta for each DocMetaRef: " + stopwatch.stop());
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jTWV0YVBhcnNlUGVyZm9ybWFuY2VUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jTWV0YVBhcnNlUGVyZm9ybWFuY2VUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFFOUMsNENBQW9CO0FBRXBCLHFEQUFnRDtBQUNoRCxtREFBOEM7QUFFOUMsTUFBTSxNQUFNLEdBQUcsWUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTNCLFNBQVMsQ0FBQyx5QkFBeUIsRUFBRTs7UUFFakMsR0FBRyxDQUFDLE9BQU8sRUFBRTs7Z0JBRVQsTUFBTSxTQUFTLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7Z0JBQ3RDLE1BQU0sU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUV2QixJQUFJLFNBQVMsR0FBYyx5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNoRCxNQUFNLFdBQVcsR0FBRyxNQUFNLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBSSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFFcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRXZELFNBQVMsR0FBRyx5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUVqQyxLQUFLLE1BQU0sVUFBVSxJQUFJLFdBQVcsRUFBRTtvQkFDbEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDaEUsSUFBSSxJQUFJLEVBQUU7d0JBQ04sTUFBTSxPQUFPLEdBQUcsbUJBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDdEU7aUJBQ0o7Z0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUV2RSxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlza0RhdGFzdG9yZX0gZnJvbSAnLi9EaXNrRGF0YXN0b3JlJztcblxuaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCB7U3RvcHdhdGNofSBmcm9tICcuLi91dGlsL1N0b3B3YXRjaCc7XG5pbXBvcnQge1N0b3B3YXRjaGVzfSBmcm9tICcuLi91dGlsL1N0b3B3YXRjaGVzJztcbmltcG9ydCB7RG9jTWV0YXN9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGFzJztcblxuY29uc3QgdG1wZGlyID0gb3MudG1wZGlyKCk7XG5cbnhkZXNjcmliZShcIkRvY01ldGFQYXJzZVBlcmZvcm1hbmNlXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgeGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZGF0YXN0b3JlID0gbmV3IERpc2tEYXRhc3RvcmUoKTtcbiAgICAgICAgYXdhaXQgZGF0YXN0b3JlLmluaXQoKTtcblxuICAgICAgICBsZXQgc3RvcHdhdGNoOiBTdG9wd2F0Y2ggPSBTdG9wd2F0Y2hlcy5jcmVhdGUoKTtcbiAgICAgICAgY29uc3QgZG9jTWV0YVJlZnMgPSBhd2FpdCBkYXRhc3RvcmUuZ2V0RG9jTWV0YVJlZnMoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXREb2NNZXRhUmVmczogXCIgICsgc3RvcHdhdGNoLnN0b3AoKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJGb3VuZCBOIGRvY01ldGFzOiBcIiArIGRvY01ldGFSZWZzLmxlbmd0aCk7XG5cbiAgICAgICAgc3RvcHdhdGNoID0gU3RvcHdhdGNoZXMuY3JlYXRlKCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBkb2NNZXRhUmVmIG9mIGRvY01ldGFSZWZzKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGF0YXN0b3JlLmdldERvY01ldGEoZG9jTWV0YVJlZi5maW5nZXJwcmludCk7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBEb2NNZXRhcy5kZXNlcmlhbGl6ZShkYXRhLCBkb2NNZXRhUmVmLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RG9jTWV0YSBmb3IgZWFjaCBEb2NNZXRhUmVmOiBcIiArIHN0b3B3YXRjaC5zdG9wKCkpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19