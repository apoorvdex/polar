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
const Backend_1 = require("../../../../web/js/datastore/Backend");
const Logger_1 = require("../../../../web/js/logger/Logger");
const DocLoader_1 = require("../../../../web/js/apps/main/doc_loaders/DocLoader");
const AppRuntime_1 = require("../../../../web/js/AppRuntime");
const Stopwatches_1 = require("../../../../web/js/util/Stopwatches");
const log = Logger_1.Logger.create();
class SynchronizingDocLoader {
    constructor(persistenceLayerManager) {
        this.persistenceLayerManager = persistenceLayerManager;
        this.docLoader = new DocLoader_1.DocLoader(persistenceLayerManager);
    }
    load(fingerprint, filename, hashcode) {
        return __awaiter(this, void 0, void 0, function* () {
            const stopwatch = Stopwatches_1.Stopwatches.create();
            const persistenceLayer = this.persistenceLayerManager.get();
            const fileRef = {
                name: filename,
                hashcode
            };
            const docLoaderRequest = this.docLoader.create({
                fingerprint,
                fileRef,
                newWindow: true
            });
            const ref = {
                name: filename,
                hashcode
            };
            if (AppRuntime_1.AppRuntime.isElectron()) {
                const requiresSynchronize = !(yield persistenceLayer.contains(fingerprint)) ||
                    !(yield persistenceLayer.containsFile(Backend_1.Backend.STASH, ref));
                if (requiresSynchronize) {
                    yield persistenceLayer.synchronizeDocs({ fingerprint });
                    log.notice("Forcing synchronization (doc not local): " + fingerprint);
                }
            }
            yield docLoaderRequest.load();
        });
    }
}
exports.SynchronizingDocLoader = SynchronizingDocLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY2hyb25pemluZ0RvY0xvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN5bmNocm9uaXppbmdEb2NMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGtFQUE2RDtBQUc3RCw2REFBd0Q7QUFDeEQsa0ZBQTZFO0FBQzdFLDhEQUF5RDtBQUN6RCxxRUFBZ0U7QUFFaEUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsc0JBQXNCO0lBSy9CLFlBQVksdUJBQWdEO1FBQ3hELElBQUksQ0FBQyx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFWSxJQUFJLENBQUMsV0FBbUIsRUFDbkIsUUFBZ0IsRUFDaEIsUUFBbUI7O1lBRWpDLE1BQU0sU0FBUyxHQUFHLHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFdkMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFNUQsTUFBTSxPQUFPLEdBQVk7Z0JBQ3JCLElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVE7YUFDWCxDQUFDO1lBRUYsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDMUMsV0FBVztnQkFDWCxPQUFPO2dCQUNQLFNBQVMsRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztZQUVILE1BQU0sR0FBRyxHQUFZO2dCQUNqQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxRQUFRO2FBQ1gsQ0FBQztZQUVGLElBQUksdUJBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFNekIsTUFBTSxtQkFBbUIsR0FDckIsQ0FBRSxDQUFBLE1BQU0sZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO29CQUM5QyxDQUFFLENBQUEsTUFBTSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUEsQ0FBQztnQkFFOUQsSUFBSSxtQkFBbUIsRUFBRTtvQkFDckIsTUFBTSxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO29CQUN0RCxHQUFHLENBQUMsTUFBTSxDQUFDLDJDQUEyQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO2lCQUN6RTthQUVKO1lBRUQsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVsQyxDQUFDO0tBQUE7Q0FFSjtBQXZERCx3REF1REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpbGVSZWZ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlJztcbmltcG9ydCB7QmFja2VuZH0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9CYWNrZW5kJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXInO1xuaW1wb3J0IHtIYXNoY29kZX0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL21ldGFkYXRhL0hhc2hjb2RlJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0RvY0xvYWRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2FwcHMvbWFpbi9kb2NfbG9hZGVycy9Eb2NMb2FkZXInO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvQXBwUnVudGltZSc7XG5pbXBvcnQge1N0b3B3YXRjaGVzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9TdG9wd2F0Y2hlcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFN5bmNocm9uaXppbmdEb2NMb2FkZXIge1xuXG4gICAgcHJpdmF0ZSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkb2NMb2FkZXI6IERvY0xvYWRlcjtcblxuICAgIGNvbnN0cnVjdG9yKHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyOiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcikge1xuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyID0gcGVyc2lzdGVuY2VMYXllck1hbmFnZXI7XG4gICAgICAgIHRoaXMuZG9jTG9hZGVyID0gbmV3IERvY0xvYWRlcihwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGxvYWQoZmluZ2VycHJpbnQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIGhhc2hjb2RlPzogSGFzaGNvZGUpIHtcblxuICAgICAgICBjb25zdCBzdG9wd2F0Y2ggPSBTdG9wd2F0Y2hlcy5jcmVhdGUoKTtcblxuICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gdGhpcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlci5nZXQoKTtcblxuICAgICAgICBjb25zdCBmaWxlUmVmOiBGaWxlUmVmID0ge1xuICAgICAgICAgICAgbmFtZTogZmlsZW5hbWUsXG4gICAgICAgICAgICBoYXNoY29kZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRvY0xvYWRlclJlcXVlc3QgPSB0aGlzLmRvY0xvYWRlci5jcmVhdGUoe1xuICAgICAgICAgICAgIGZpbmdlcnByaW50LFxuICAgICAgICAgICAgIGZpbGVSZWYsXG4gICAgICAgICAgICAgbmV3V2luZG93OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlZjogRmlsZVJlZiA9IHtcbiAgICAgICAgICAgIG5hbWU6IGZpbGVuYW1lLFxuICAgICAgICAgICAgaGFzaGNvZGVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoQXBwUnVudGltZS5pc0VsZWN0cm9uKCkpIHtcblxuICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBpcyBvbmx5IG5lZWQgd2hlbiB1c2luZyB0aGUgY2xvdWQgYXdhcmUgZGF0YXN0b3JlLlxuXG4gICAgICAgICAgICAvLyBOT1RFOiB0aGVzZSBvcGVyYXRpb25zIGV4ZWN1dGUgbG9jYWxseSBmaXJzdCwgc28gaXQncyBhIHF1aWNrXG4gICAgICAgICAgICAvLyB3YXkgdG8gdmVyaWZ5IHRoYXQgdGhlIGZpbGUgbmVlZHMgdG8gYmUgc3luY2hyb25pemVkLlxuICAgICAgICAgICAgY29uc3QgcmVxdWlyZXNTeW5jaHJvbml6ZSA9XG4gICAgICAgICAgICAgICAgISBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmNvbnRhaW5zKGZpbmdlcnByaW50KSB8fFxuICAgICAgICAgICAgICAgICEgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5jb250YWluc0ZpbGUoQmFja2VuZC5TVEFTSCwgcmVmKTtcblxuICAgICAgICAgICAgaWYgKHJlcXVpcmVzU3luY2hyb25pemUpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLnN5bmNocm9uaXplRG9jcyh7ZmluZ2VycHJpbnR9KTtcbiAgICAgICAgICAgICAgICBsb2cubm90aWNlKFwiRm9yY2luZyBzeW5jaHJvbml6YXRpb24gKGRvYyBub3QgbG9jYWwpOiBcIiArIGZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgZG9jTG9hZGVyUmVxdWVzdC5sb2FkKCk7XG5cbiAgICB9XG5cbn1cbiJdfQ==