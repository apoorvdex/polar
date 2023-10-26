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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Files_1 = require("./util/Files");
const url_1 = __importDefault(require("url"));
const PDFJSDIST = __importStar(require("pdfjs-dist"));
const pdfjs = PDFJSDIST;
xdescribe('PDF', function () {
    xit("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const buffer = yield Files_1.Files.readFileAsync("/home/burton/Downloads/1010.3003v1.pdf");
            const uint8 = toArray(buffer);
            const filePath = "/home/burton/incremental-reading/.stash/The Toyota Way _ 14 Management Principles from the World's Greatest Manufac.pdf";
            if (!(yield Files_1.Files.existsAsync(filePath))) {
                throw new Error("File does not exist at path: " + filePath);
            }
            const fileURL = url_1.default.format({
                protocol: 'file',
                slashes: true,
                pathname: filePath,
            });
            const doc = yield pdfjs.getDocument(fileURL);
            const metadata = yield doc.getMetadata();
            if (metadata.metadata && metadata.metadata.get('dc:title')) {
                console.log("FIXME !!!");
            }
            console.log("metadata: ", metadata);
            console.log("numPages: " + doc.numPages);
            console.log("fingerprint: " + doc.fingerprint);
        });
    });
});
function toArray(buf) {
    if (!buf)
        return undefined;
    if (buf.constructor.name === 'Uint8Array'
        || buf.constructor === Uint8Array) {
        return buf;
    }
    if (typeof buf === 'string')
        buf = Buffer.from(buf);
    var a = new Uint8Array(buf.length);
    for (var i = 0; i < buf.length; i++)
        a[i] = buf[i];
    return a;
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUERGVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBERlRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFFbkMsOENBQXNCO0FBRXRCLHNEQUF3QztBQUd4QyxNQUFNLEtBQUssR0FBc0IsU0FBUyxDQUFDO0FBRTNDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7SUFFYixHQUFHLENBQUMsT0FBTyxFQUFFOztZQUVULE1BQU0sTUFBTSxHQUFHLE1BQU0sYUFBSyxDQUFDLGFBQWEsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFBO1lBQ2xGLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUs3QixNQUFNLFFBQVEsR0FBRyx5SEFBeUgsQ0FBQztZQUUzSSxJQUFJLENBQUUsQ0FBQSxNQUFNLGFBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUEsRUFBRTtnQkFDckMsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsR0FBRyxRQUFRLENBQUMsQ0FBQzthQUMvRDtZQUVELE1BQU0sT0FBTyxHQUFHLGFBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixPQUFPLEVBQUUsSUFBSTtnQkFDYixRQUFRLEVBQUUsUUFBUTthQUNyQixDQUFDLENBQUM7WUFLSCxNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFN0MsTUFBTSxRQUFRLEdBQUcsTUFBTSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUE7WUFFeEMsSUFBRyxRQUFRLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUl2RCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzVCO1lBSUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFHcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUluRCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUM7QUFHSCxTQUFTLE9BQU8sQ0FBQyxHQUFXO0lBQ3hCLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxTQUFTLENBQUM7SUFDM0IsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxZQUFZO1dBQ2xDLEdBQUcsQ0FBQyxXQUFXLEtBQUssVUFBVSxFQUFFO1FBQ25DLE9BQU8sR0FBRyxDQUFDO0tBQ2Q7SUFDRCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxJQUFJLENBQUMsR0FBRyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1FBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaWxlc30gZnJvbSAnLi91dGlsL0ZpbGVzJztcblxuaW1wb3J0IHVybCBmcm9tICd1cmwnO1xuXG5pbXBvcnQgKiBhcyBQREZKU0RJU1QgZnJvbSAncGRmanMtZGlzdCc7XG5pbXBvcnQge1BERkpTU3RhdGljfSBmcm9tICdwZGZqcy1kaXN0JztcblxuY29uc3QgcGRmanM6IFBERkpTU3RhdGljID0gPGFueT4gUERGSlNESVNUO1xuXG54ZGVzY3JpYmUoJ1BERicsIGZ1bmN0aW9uKCkge1xuXG4gICAgeGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IEZpbGVzLnJlYWRGaWxlQXN5bmMoXCIvaG9tZS9idXJ0b24vRG93bmxvYWRzLzEwMTAuMzAwM3YxLnBkZlwiKVxuICAgICAgICBjb25zdCB1aW50OCA9IHRvQXJyYXkoYnVmZmVyKVxuXG4gICAgICAgIC8vIGNvbnN0IHVybCA9IFwiZmlsZTovLy9ob21lL2J1cnRvbi9Eb3dubG9hZHMvMTAxMC4zMDAzdjEucGRmXCI7XG4gICAgICAgIC8vIGNvbnN0IHVybCA9IFwiZmlsZTovLy9ob21lL2J1cnRvbi9pbmNyZW1lbnRhbC1yZWFkaW5nL0ElMjBDcnlwdG8lMjBJbmN1YmF0b3IlMjBvciUyMEFjY2VsZXJhdG9yJTIwQ2FuJTIwTWFrZSUyMEElMjBTYWZlJTIwSUNPJTIwXyUyMENyeXB0byUyMEJyaWVmaW5nLnBkZlwiO1xuXG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gXCIvaG9tZS9idXJ0b24vaW5jcmVtZW50YWwtcmVhZGluZy8uc3Rhc2gvVGhlIFRveW90YSBXYXkgXyAxNCBNYW5hZ2VtZW50IFByaW5jaXBsZXMgZnJvbSB0aGUgV29ybGQncyBHcmVhdGVzdCBNYW51ZmFjLnBkZlwiO1xuXG4gICAgICAgIGlmICghIGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmlsZSBkb2VzIG5vdCBleGlzdCBhdCBwYXRoOiBcIiArIGZpbGVQYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbGVVUkwgPSB1cmwuZm9ybWF0KHtcbiAgICAgICAgICAgIHByb3RvY29sOiAnZmlsZScsXG4gICAgICAgICAgICBzbGFzaGVzOiB0cnVlLFxuICAgICAgICAgICAgcGF0aG5hbWU6IGZpbGVQYXRoLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zdCBmaWxlVVJMID0gXCJmaWxlOi8vL2hvbWUvYnVydG9uL2luY3JlbWVudGFsLXJlYWRpbmcvYml0Y29pbi9NYXN0ZXJpbmclMjBCaXRjb2luLnBkZlwiO1xuXG4gICAgICAgIC8vIGNvbnN0IGRvYyA9IGF3YWl0IHBkZmpzLmdldERvY3VtZW50KHVpbnQ4ISlcbiAgICAgICAgY29uc3QgZG9jID0gYXdhaXQgcGRmanMuZ2V0RG9jdW1lbnQoZmlsZVVSTCk7XG5cbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBhd2FpdCBkb2MuZ2V0TWV0YWRhdGEoKVxuXG4gICAgICAgIGlmKG1ldGFkYXRhLm1ldGFkYXRhICYmIG1ldGFkYXRhLm1ldGFkYXRhLmdldCgnZGM6dGl0bGUnKSkge1xuXG4gICAgICAgICAgICAvLyBGSVhNRTogd2UgaGF2ZSBkYzpsYW5ndWFnZSAsIGRjOmRhdGUsIGRjOnB1Ymxpc2hlciBkYzpjcmVhdG9yIGRjOmRlc2NyaXB0aW9uXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklYTUUgISEhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWV0YWRhdGEubWV0YWRhdGEucGFyc2UoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIm1ldGFkYXRhOiBcIiwgbWV0YWRhdGEpO1xuXG4gICAgICAgIC8vIGRvYy5cbiAgICAgICAgY29uc29sZS5sb2coXCJudW1QYWdlczogXCIgKyBkb2MubnVtUGFnZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImZpbmdlcnByaW50OiBcIiArIGRvYy5maW5nZXJwcmludCk7XG5cbiAgICAgICAgLy9hc3NlcnQub2soUERGSlMuZ2V0RG9jdW1lbnQpO1xuXG4gICAgfSk7XG5cbn0pO1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoYnVmOiBCdWZmZXIpIHtcbiAgICBpZiAoIWJ1ZikgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAoYnVmLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdVaW50OEFycmF5J1xuICAgICAgICB8fCBidWYuY29uc3RydWN0b3IgPT09IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBidWYgPT09ICdzdHJpbmcnKSBidWYgPSBCdWZmZXIuZnJvbShidWYpO1xuICAgIHZhciBhID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidWYubGVuZ3RoOyBpKyspIGFbaV0gPSBidWZbaV07XG4gICAgcmV0dXJuIGE7XG59O1xuIl19