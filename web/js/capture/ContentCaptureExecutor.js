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
const Results_1 = require("../util/Results");
const Filenames_1 = require("../util/Filenames");
const FilePaths_1 = require("../util/FilePaths");
const CapturedPHZWriter_1 = require("./CapturedPHZWriter");
const Logger_1 = require("../logger/Logger");
const Directories_1 = require("../datastore/Directories");
const Hashcodes_1 = require("../Hashcodes");
const log = Logger_1.Logger.create();
const MAX_TITLE_LENGTH = 50;
class ContentCaptureExecutor {
    static execute(webContents, browserProfile) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Capturing the HTML...");
            let captured;
            try {
                const result = yield webContents.executeJavaScript("ContentCapture.execute()");
                captured = Results_1.Results.create(result).get();
            }
            catch (e) {
                log.error("Could not capture HTML: ", e);
                throw e;
            }
            captured.browser = browserProfile;
            const url = captured.url;
            const title = (captured.title || "").substring(0, MAX_TITLE_LENGTH);
            const hash = Hashcodes_1.Hashcodes.createID(url);
            const stashDir = this.directories.stashDir;
            const filename = hash + '-' + Filenames_1.Filenames.sanitize(title);
            const phzPath = FilePaths_1.FilePaths.join(stashDir, filename) + '.phz';
            log.info("Writing PHZ to: " + phzPath);
            const capturedPHZWriter = new CapturedPHZWriter_1.CapturedPHZWriter(phzPath);
            yield capturedPHZWriter.convert(captured);
            log.info("Capturing the HTML...done");
            return {
                path: phzPath
            };
        });
    }
}
ContentCaptureExecutor.directories = new Directories_1.Directories();
exports.ContentCaptureExecutor = ContentCaptureExecutor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudENhcHR1cmVFeGVjdXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbnRlbnRDYXB0dXJlRXhlY3V0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLDZDQUF3QztBQUN4QyxpREFBNEM7QUFDNUMsaURBQTRDO0FBQzVDLDJEQUFzRDtBQUN0RCw2Q0FBd0M7QUFHeEMsMERBQXFEO0FBRXJELDRDQUF1QztBQUd2QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFFNUIsTUFBYSxzQkFBc0I7SUFJeEIsTUFBTSxDQUFPLE9BQU8sQ0FBQyxXQUF3QixFQUFFLGNBQThCOztZQUtoRixHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFFbEMsSUFBSSxRQUFRLENBQUM7WUFLYixJQUFJO2dCQUVBLE1BQU0sTUFBTSxHQUFzQixNQUFNLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUNsRyxRQUFRLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7YUFFckQ7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFNUixHQUFHLENBQUMsS0FBSyxDQUFDLDBCQUEwQixFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNLENBQUMsQ0FBQzthQUNYO1lBR0QsUUFBUSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7WUFFbEMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUV6QixNQUFNLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBRXBFLE1BQU0sSUFBSSxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBQzNDLE1BQU0sUUFBUSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFeEQsTUFBTSxPQUFPLEdBQUcscUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUU1RCxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBRXZDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6RCxNQUFNLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQU8xQyxHQUFHLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFFdEMsT0FBTztnQkFDSCxJQUFJLEVBQUUsT0FBTzthQUNoQixDQUFDO1FBRU4sQ0FBQztLQUFBOztBQTFEYyxrQ0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRm5ELHdEQThEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVJlc3VsdH0gZnJvbSAnLi4vdXRpbC9SZXN1bHQnO1xuaW1wb3J0IHtSZXN1bHRzfSBmcm9tICcuLi91dGlsL1Jlc3VsdHMnO1xuaW1wb3J0IHtGaWxlbmFtZXN9IGZyb20gJy4uL3V0aWwvRmlsZW5hbWVzJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0NhcHR1cmVkUEhaV3JpdGVyfSBmcm9tICcuL0NhcHR1cmVkUEhaV3JpdGVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7QnJvd3NlclByb2ZpbGV9IGZyb20gJy4vQnJvd3NlclByb2ZpbGUnO1xuaW1wb3J0IFdlYkNvbnRlbnRzID0gRWxlY3Ryb24uV2ViQ29udGVudHM7XG5pbXBvcnQge0RpcmVjdG9yaWVzfSBmcm9tICcuLi9kYXRhc3RvcmUvRGlyZWN0b3JpZXMnO1xuaW1wb3J0IHtDYXB0dXJlUmVzdWx0fSBmcm9tICcuL0NhcHR1cmVSZXN1bHQnO1xuaW1wb3J0IHtIYXNoY29kZXN9IGZyb20gJy4uL0hhc2hjb2Rlcyc7XG5pbXBvcnQge0NhcHR1cmVkfSBmcm9tICcuL3JlbmRlcmVyL0NhcHR1cmVkJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zdCBNQVhfVElUTEVfTEVOR1RIID0gNTA7XG5cbmV4cG9ydCBjbGFzcyBDb250ZW50Q2FwdHVyZUV4ZWN1dG9yIHtcblxuICAgIHByaXZhdGUgc3RhdGljIGRpcmVjdG9yaWVzID0gbmV3IERpcmVjdG9yaWVzKCk7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGV4ZWN1dGUod2ViQ29udGVudHM6IFdlYkNvbnRlbnRzLCBicm93c2VyUHJvZmlsZTogQnJvd3NlclByb2ZpbGUpOiBQcm9taXNlPENhcHR1cmVSZXN1bHQ+IHtcblxuICAgICAgICAvLyBUT0RPOiB0aGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjbGVhbmVkIHVwIGEgYml0Li4gaXQgaGFzIHRvbyBtYW55IG1vdmluZ1xuICAgICAgICAvLyBwYXJ0cyBub3cgYW5kIHNob3VsZCBiZSBtb3ZlZCBpbnRvIHNtYWxsZXIgZnVuY3Rpb25zLlxuXG4gICAgICAgIGxvZy5pbmZvKFwiQ2FwdHVyaW5nIHRoZSBIVE1MLi4uXCIpO1xuXG4gICAgICAgIGxldCBjYXB0dXJlZDtcblxuICAgICAgICAvLyBUT0RPOiBJIGRvbid0IHRoaW5rIGV4ZWN1dGVKYXZhc2NyaXB0IGFjdHVhbGx5IGhhbmRsZXMgZXhjZXB0aW9uc1xuICAgICAgICAvLyBwcm9wZXJseSBhbmQgdGhleSBhbHNvIHN1Z2dlc3QgdXNpbmcgdGhlIGNhbGxiYWNrIHNvIHdlIHNob3VsZCB0ZXN0XG4gICAgICAgIC8vIHRoaXMgbW9yZSBhZ2dyZXNzaXZlbHkuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogSVJlc3VsdDxDYXB0dXJlZD4gPSBhd2FpdCB3ZWJDb250ZW50cy5leGVjdXRlSmF2YVNjcmlwdChcIkNvbnRlbnRDYXB0dXJlLmV4ZWN1dGUoKVwiKTtcbiAgICAgICAgICAgIGNhcHR1cmVkID0gUmVzdWx0cy5jcmVhdGU8Q2FwdHVyZWQ+KHJlc3VsdCkuZ2V0KCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuXG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzbid0IGFjdHVhbGx5IGNhbGxlZCBiZWNhdXNlIGV4ZWN1dGVKYXZhc2NyaXB0IGRvZXNuJ3RcbiAgICAgICAgICAgIC8vIGhhbmRsZSBleGNlcHRpb25zLiBZb3UganVzdCBibG9jayB0aGVyZSBmb3JldmVyLiBJIG5lZWQgdG8gd3JhcFxuICAgICAgICAgICAgLy8gdGhpcyB3aXRoIGEgY2xvc3VyZSB0aGF0IGlzIGFuICdlaXRoZXInIGVyciBvciBjb250ZW50LlxuXG4gICAgICAgICAgICBsb2cuZXJyb3IoXCJDb3VsZCBub3QgY2FwdHVyZSBIVE1MOiBcIiwgZSk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVjb3JkIHRoZSBicm93c2VyIHRoYXQgd2FzIHVzZWQgdG8gcmVuZGVyIHRoaXMgcGFnZS5cbiAgICAgICAgY2FwdHVyZWQuYnJvd3NlciA9IGJyb3dzZXJQcm9maWxlO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IGNhcHR1cmVkLnVybDtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IChjYXB0dXJlZC50aXRsZSB8fCBcIlwiKS5zdWJzdHJpbmcoMCwgTUFYX1RJVExFX0xFTkdUSCk7XG5cbiAgICAgICAgY29uc3QgaGFzaCA9IEhhc2hjb2Rlcy5jcmVhdGVJRCh1cmwpO1xuICAgICAgICBjb25zdCBzdGFzaERpciA9IHRoaXMuZGlyZWN0b3JpZXMuc3Rhc2hEaXI7XG4gICAgICAgIGNvbnN0IGZpbGVuYW1lID0gaGFzaCArICctJyArIEZpbGVuYW1lcy5zYW5pdGl6ZSh0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgcGh6UGF0aCA9IEZpbGVQYXRocy5qb2luKHN0YXNoRGlyLCBmaWxlbmFtZSkgKyAnLnBoeic7XG5cbiAgICAgICAgbG9nLmluZm8oXCJXcml0aW5nIFBIWiB0bzogXCIgKyBwaHpQYXRoKTtcblxuICAgICAgICBjb25zdCBjYXB0dXJlZFBIWldyaXRlciA9IG5ldyBDYXB0dXJlZFBIWldyaXRlcihwaHpQYXRoKTtcbiAgICAgICAgYXdhaXQgY2FwdHVyZWRQSFpXcml0ZXIuY29udmVydChjYXB0dXJlZCk7XG5cbiAgICAgICAgLy8gd3JpdGUgdGhlIGNhcHR1cmVkIEhUTUwgdG8gL3RtcCBmb3IgZGVidWcgcHVycG9zZXMuICBXZSBjYW4gZW5hYmxlIHRoaXNcbiAgICAgICAgLy8gYXMgYSBjb21tYW5kIGxpbmUgc3dpdGNoIGxhdGVyLlxuXG4gICAgICAgIC8vIGF3YWl0IEZpbGVzLndyaXRlRmlsZUFzeW5jKGAvdG1wLyR7ZmlsZW5hbWV9Lmpzb25gLCBKU09OLnN0cmluZ2lmeShjYXB0dXJlZCwgbnVsbCwgXCIgIFwiKSk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJDYXB0dXJpbmcgdGhlIEhUTUwuLi5kb25lXCIpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXRoOiBwaHpQYXRoXG4gICAgICAgIH07XG5cbiAgICB9XG5cbn1cbiJdfQ==