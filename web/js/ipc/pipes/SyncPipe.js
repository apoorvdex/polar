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
const Logger_1 = require("../../logger/Logger");
const log = Logger_1.Logger.create();
class SyncPipe {
    constructor(delegate, type, name) {
        this.delegate = delegate;
        this.type = type;
        this.name = name;
        this.channel = `/sync-establish#${name}`;
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            let establishPromise = this.delegate.when(this.channel);
            this.writeSync();
            yield this.awaitSync(establishPromise);
            this.writeSync();
        });
    }
    writeSync() {
        log.info(`${this.type} write ${this.channel} sync`);
        this.delegate.write(this.channel, 'sync');
    }
    awaitSync(establishPromise) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info(`${this.type} await ${this.channel} sync promise...`);
            yield establishPromise;
            log.info(`${this.type} await ${this.channel} sync promise...done`);
        });
    }
}
exports.SyncPipe = SyncPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY1BpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTeW5jUGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsZ0RBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQVM1QixNQUFhLFFBQVE7SUFrQmpCLFlBQW1CLFFBQTBCLEVBQUUsSUFBWSxFQUFFLElBQVk7UUFDckUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsSUFBSSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVLLElBQUk7O1lBU04sSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFeEQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRWpCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRXZDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVyQixDQUFDO0tBQUE7SUFFTyxTQUFTO1FBRWIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLFVBQVUsSUFBSSxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUU5QyxDQUFDO0lBRWEsU0FBUyxDQUFDLGdCQUF3RDs7WUFHNUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLFVBQVUsSUFBSSxDQUFDLE9BQU8sa0JBQWtCLENBQUMsQ0FBQztZQUUvRCxNQUFNLGdCQUFnQixDQUFDO1lBRXZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxVQUFVLElBQUksQ0FBQyxPQUFPLHNCQUFzQixDQUFDLENBQUM7UUFFdkUsQ0FBQztLQUFBO0NBRUo7QUEvREQsNEJBK0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlTm90aWZpY2F0aW9ufSBmcm9tICcuL1BpcGUnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogUHJvdmlkZXMgYSBwaXBlIHRoYXQgc3luY3Mgd2l0aCB0aGUgcmVtb3RlIHBpcGUgc28gdGhhdCB0aGV5IGFyZSBib3RoXG4gKiBpbiB0aGUgcmVhZHkgc3RhdGUuICBUaGlzIGNhbiBiZSB1c2VkIHRvIG1ha2Ugc3VyZSBib3RoIHNlcnZpY2VzIGFyZSB1cCBhbmRcbiAqIHJ1bm5pbmcgYmVmb3JlIGNvbnRpbnVpbmcgdG8gZ28gZm9yd2FyZCBzZW5kaW5nIG1lc3NhZ2Ugd2hpY2ggbWF5IG5ldmVyIGJlXG4gKiByZWNlaXZlZC5cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBTeW5jUGlwZSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlbGVnYXRlOiBQaXBlPGFueSxzdHJpbmc+O1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSB0eXBlOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSB1bmlxdWUgY2hhbm5lbCB3ZSdyZSB1c2luZyB0byBlc3RhYmxpc2ggc3luYy5cbiAgICAgKi9cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNoYW5uZWw6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGRlbGVnYXRlXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgZm9yIHRoZSBzeW5jIHBpcGUgaW5zdGFuY2UuIFVzZWQgZm9yIHRyYWNpbmcuXG4gICAgICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBQaXBlPGFueSxzdHJpbmc+LCB0eXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IGAvc3luYy1lc3RhYmxpc2gjJHtuYW1lfWA7XG4gICAgfVxuXG4gICAgYXN5bmMgc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICAvLyBUT0RPOiBvbmUgaXNzdWUgaWYgd2hhdCBoYXBwZW5zIGlmIHRoZSBTRUNPTkQgY2xpZW50IGRpZXMgYW5kIGNvbWVzXG4gICAgICAgIC8vIGJhY2suIHRoZW4gdGhpcyBzZXJ2aWNlIGlzIHN0aWxsIHdvcmtpbmcgYW5kIGFsaXZlIEJVVCBuZXcgLyByZXN1bWluZ1xuICAgICAgICAvLyBTeW5jUGlwZSB3aWxsIG5vdCBiZSBhYmxlIHRvIHdvcmsgYW5kIHdpbGwgYmxvY2suICBDb25zaWRlciBhZGRpbmdcbiAgICAgICAgLy8gYSBwZXJtYW5lbnQgbGlzdGVuZXIuXG5cbiAgICAgICAgLy8gbXVzdCB1c2UgdGhlIGNyZWF0ZS10aGVuLWF3YWl0IHBhdHRlcm4gb3IgZWxzZSB0aGVyZSBtYXkgYmUgYSBjaGFuY2VcbiAgICAgICAgLy8gd2UgbWlzcyB0aGUgcmVzcG9uc2Ugbm90aWZpY2F0aW9uIGV2ZW50IGlmIHdlJ3JlIHRoZSBzZWNvbmQgd2FpdGVyLlxuICAgICAgICBsZXQgZXN0YWJsaXNoUHJvbWlzZSA9IHRoaXMuZGVsZWdhdGUud2hlbih0aGlzLmNoYW5uZWwpO1xuXG4gICAgICAgIHRoaXMud3JpdGVTeW5jKCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5hd2FpdFN5bmMoZXN0YWJsaXNoUHJvbWlzZSk7XG5cbiAgICAgICAgdGhpcy53cml0ZVN5bmMoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgd3JpdGVTeW5jKCkge1xuXG4gICAgICAgIGxvZy5pbmZvKGAke3RoaXMudHlwZX0gd3JpdGUgJHt0aGlzLmNoYW5uZWx9IHN5bmNgKTtcblxuICAgICAgICB0aGlzLmRlbGVnYXRlLndyaXRlKHRoaXMuY2hhbm5lbCwgJ3N5bmMnKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgYXdhaXRTeW5jKGVzdGFibGlzaFByb21pc2U6IFByb21pc2U8UGlwZU5vdGlmaWNhdGlvbjxhbnksIHN0cmluZz4+KSB7XG5cblxuICAgICAgICBsb2cuaW5mbyhgJHt0aGlzLnR5cGV9IGF3YWl0ICR7dGhpcy5jaGFubmVsfSBzeW5jIHByb21pc2UuLi5gKTtcblxuICAgICAgICBhd2FpdCBlc3RhYmxpc2hQcm9taXNlO1xuXG4gICAgICAgIGxvZy5pbmZvKGAke3RoaXMudHlwZX0gYXdhaXQgJHt0aGlzLmNoYW5uZWx9IHN5bmMgcHJvbWlzZS4uLmRvbmVgKTtcblxuICAgIH1cblxufVxuIl19