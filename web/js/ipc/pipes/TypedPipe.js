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
const Pipe_1 = require("./Pipe");
class TypedPipe {
    constructor(source) {
        this.pipe = source;
    }
    on(channel, listener) {
        this.pipe.on(channel, (pipeNotification) => {
            listener(this.convertPipeNotification(pipeNotification));
        });
    }
    once(channel, listener) {
        this.pipe.once(channel, (pipeNotification) => {
            listener(this.convertPipeNotification(pipeNotification));
        });
    }
    when(channel) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.convertPipeNotification(yield this.pipe.when(channel));
        });
    }
    write(channel, message) {
        this.pipe.write(channel, message);
    }
    convertPipeNotification(pipeNotification) {
        return new Pipe_1.PipeNotification(pipeNotification.channel, this.convertEvent(pipeNotification), this.convertMessage(pipeNotification.message));
    }
}
exports.TypedPipe = TypedPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZWRQaXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVHlwZWRQaXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpQ0FNZ0I7QUFPaEIsTUFBc0IsU0FBUztJQUkzQixZQUFtQixNQUFxQjtRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU0sRUFBRSxDQUFDLE9BQWUsRUFBRSxRQUE0QjtRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO1lBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFlLEVBQUUsUUFBNEI7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFWSxJQUFJLENBQUMsT0FBZTs7WUFDN0IsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBQ3RFLENBQUM7S0FBQTtJQUVNLEtBQUssQ0FBQyxPQUFlLEVBQUUsT0FBVTtRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVTLHVCQUF1QixDQUFDLGdCQUEyQztRQUV6RSxPQUFPLElBQUksdUJBQWdCLENBQU0sZ0JBQWdCLENBQUMsT0FBTyxFQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEVBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUVwRixDQUFDO0NBTUo7QUF4Q0QsOEJBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBQaXBlLFxuICAgIFBpcGVMaXN0ZW5lcixcbiAgICBQaXBlTm90aWZpY2F0aW9uLFxuICAgIFJlYWRhYmxlUGlwZSxcbiAgICBXcml0YWJsZVBpcGVcbn0gZnJvbSAnLi9QaXBlJztcblxuLyoqXG4gKiBMaWtlIGEgcmVndWxhciBjaGFubmVsIGJ1dCB3aGVuIHNvbWVvbmUgd3JpdGVzIHRvIHVzIHdlIGNvbnZlcnQgdHlwZXMgZnJvbVxuICogJ2FueScgdG8gdGhlIHJlcXVpcmVkIHR5cGUgYW5kIHdlIHB1c2ggaXQgdG8gdGhlIGRlbGVnYXRlLlxuICpcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFR5cGVkUGlwZTxFLCBNPiBpbXBsZW1lbnRzIFJlYWRhYmxlUGlwZTxFLCBNPiwgV3JpdGFibGVQaXBlPE0+IHtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBwaXBlOiBQaXBlPGFueSxhbnk+O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHNvdXJjZTogUGlwZTxhbnksYW55Pikge1xuICAgICAgICB0aGlzLnBpcGUgPSBzb3VyY2U7XG4gICAgfVxuXG4gICAgcHVibGljIG9uKGNoYW5uZWw6IHN0cmluZywgbGlzdGVuZXI6IFBpcGVMaXN0ZW5lcjxFLCBNPik6IHZvaWQge1xuICAgICAgICB0aGlzLnBpcGUub24oY2hhbm5lbCwgKHBpcGVOb3RpZmljYXRpb24pID0+IHtcbiAgICAgICAgICAgIGxpc3RlbmVyKHRoaXMuY29udmVydFBpcGVOb3RpZmljYXRpb24ocGlwZU5vdGlmaWNhdGlvbikpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25jZShjaGFubmVsOiBzdHJpbmcsIGxpc3RlbmVyOiBQaXBlTGlzdGVuZXI8RSwgTT4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5waXBlLm9uY2UoY2hhbm5lbCwgKHBpcGVOb3RpZmljYXRpb24pID0+IHtcbiAgICAgICAgICAgIGxpc3RlbmVyKHRoaXMuY29udmVydFBpcGVOb3RpZmljYXRpb24ocGlwZU5vdGlmaWNhdGlvbikpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgd2hlbihjaGFubmVsOiBzdHJpbmcpOiBQcm9taXNlPFBpcGVOb3RpZmljYXRpb248RSwgTT4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydFBpcGVOb3RpZmljYXRpb24oYXdhaXQgdGhpcy5waXBlLndoZW4oY2hhbm5lbCkpXG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlKGNoYW5uZWw6IHN0cmluZywgbWVzc2FnZTogTSk6IHZvaWQge1xuICAgICAgICB0aGlzLnBpcGUud3JpdGUoY2hhbm5lbCwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRQaXBlTm90aWZpY2F0aW9uKHBpcGVOb3RpZmljYXRpb246IFBpcGVOb3RpZmljYXRpb248YW55LGFueT4pIHtcblxuICAgICAgICByZXR1cm4gbmV3IFBpcGVOb3RpZmljYXRpb248RSxNPihwaXBlTm90aWZpY2F0aW9uLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udmVydEV2ZW50KHBpcGVOb3RpZmljYXRpb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnRNZXNzYWdlKHBpcGVOb3RpZmljYXRpb24ubWVzc2FnZSkpO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNvbnZlcnRFdmVudChwaXBlTm90aWZpY2F0aW9uOiBQaXBlTm90aWZpY2F0aW9uPGFueSxhbnk+KTogRTtcblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjb252ZXJ0TWVzc2FnZShvYmo6IGFueSk6IE07XG5cbn1cbiJdfQ==