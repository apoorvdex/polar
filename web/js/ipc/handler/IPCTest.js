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
const IPCRegistry_1 = require("./IPCRegistry");
const IPCHandler_1 = require("./IPCHandler");
const IPCMessage_1 = require("./IPCMessage");
const Objects_1 = require("../../util/Objects");
const IPCEngine_1 = require("./IPCEngine");
const Assertions_1 = require("../../test/Assertions");
const IPCPipe_1 = require("./IPCPipe");
const IPCEvent_1 = require("./IPCEvent");
const MockPipes_1 = require("../pipes/MockPipes");
const IPCClient_1 = require("./IPCClient");
let mockChannels;
let leftIpcPipe;
let rightIpcPipe;
let ipcRegistry;
let helloHandler;
let ipcEngine;
describe('IPCTest', function () {
    xit("Test proper handling of messages", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let icpClient = new IPCClient_1.IPCClient(rightIpcPipe);
            let response = yield icpClient.execute('/test/school/hello', new Person('Alice'));
            response._nonce = 10101;
            Assertions_1.assertJSON(response, {
                "_type": "result",
                "_value": {
                    "person": {
                        "name": "Alice"
                    }
                },
                "_nonce": 10101
            });
            let expectedPeople = [
                {
                    "name": "Alice"
                }
            ];
            Assertions_1.assertJSON(helloHandler.people, expectedPeople);
            let expectedGreetings = [
                {
                    "person": {
                        "name": "Alice"
                    }
                }
            ];
            Assertions_1.assertJSON(helloHandler.greetings, expectedGreetings);
        });
    });
    beforeEach(function () {
        mockChannels = MockPipes_1.MockPipes.create();
        leftIpcPipe = new HelloIPCPipe(mockChannels.left);
        rightIpcPipe = new HelloIPCPipe(mockChannels.right);
        ipcRegistry = new IPCRegistry_1.IPCRegistry();
        helloHandler = new HelloHandler();
        ipcRegistry.registerPath('/test/school/hello', helloHandler);
        ipcEngine = new IPCEngine_1.IPCEngine(leftIpcPipe, ipcRegistry);
        ipcEngine.start();
    });
});
class HelloIPCPipe extends IPCPipe_1.IPCPipe {
    constructor(pipe) {
        super(pipe);
        this.responses = [];
    }
    convertEvent(pipeNotification) {
        return new IPCEvent_1.IPCEvent(this.pipe, IPCMessage_1.IPCMessage.create(pipeNotification.message));
    }
}
class HelloHandler extends IPCHandler_1.IPCHandler {
    constructor() {
        super(...arguments);
        this.people = [];
        this.greetings = [];
    }
    createValue(ipcMessage) {
        return Person.create(ipcMessage.value);
    }
    handleIPC(event, person) {
        return __awaiter(this, void 0, void 0, function* () {
            this.people.push(person);
            this.greetings.push(new Hello(person));
            return new Hello(person);
        });
    }
}
class Greeting {
    constructor(message) {
        this.message = message;
    }
}
class Hello {
    constructor(person) {
        this.person = person;
    }
}
class Person {
    constructor(name) {
        this.name = name;
    }
    static create(obj) {
        return Objects_1.Objects.createInstance(Person.prototype, obj);
    }
}
class PersonEvent {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVBDVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIklQQ1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUMxQyw2Q0FBd0M7QUFDeEMsNkNBQXdDO0FBQ3hDLGdEQUEyQztBQUMzQywyQ0FBc0M7QUFDdEMsc0RBQWlEO0FBQ2pELHVDQUFrQztBQUNsQyx5Q0FBb0M7QUFFcEMsa0RBQTZDO0FBQzdDLDJDQUFzQztBQUV0QyxJQUFJLFlBQXlDLENBQUM7QUFFOUMsSUFBSSxXQUF5QixDQUFDO0FBRTlCLElBQUksWUFBMEIsQ0FBQztBQUUvQixJQUFJLFdBQXdCLENBQUM7QUFFN0IsSUFBSSxZQUEwQixDQUFDO0FBRS9CLElBQUksU0FBOEIsQ0FBQztBQUVuQyxRQUFRLENBQUMsU0FBUyxFQUFFO0lBRWhCLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRTs7WUFFcEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRTVDLElBQUksUUFBUSxHQUFRLE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRXZGLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRXhCLHVCQUFVLENBQUMsUUFBUSxFQUFFO2dCQUNqQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFO29CQUNOLFFBQVEsRUFBRTt3QkFDTixNQUFNLEVBQUUsT0FBTztxQkFDbEI7aUJBQ0o7Z0JBQ0QsUUFBUSxFQUFFLEtBQUs7YUFDbEIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxjQUFjLEdBQUc7Z0JBQ2pCO29CQUNJLE1BQU0sRUFBRSxPQUFPO2lCQUNsQjthQUNKLENBQUM7WUFFRix1QkFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFFaEQsSUFBSSxpQkFBaUIsR0FBRztnQkFDaEI7b0JBQ0ksUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxPQUFPO3FCQUNsQjtpQkFDSjthQUNKLENBQ0o7WUFFRCx1QkFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUUxRCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDO1FBRVAsWUFBWSxHQUFHLHFCQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbEMsV0FBVyxHQUFHLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsRCxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBELFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUVoQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsQyxXQUFXLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRTdELFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXBELFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUV0QixDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxZQUFhLFNBQVEsaUJBQWlCO0lBSXhDLFlBQVksSUFBbUI7UUFDM0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBSEEsY0FBUyxHQUFzQixFQUFFLENBQUM7SUFJbEQsQ0FBQztJQUVELFlBQVksQ0FBQyxnQkFBNEM7UUFDckQsT0FBTyxJQUFJLG1CQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Q0FFSjtBQUVELE1BQU0sWUFBYSxTQUFRLHVCQUFrQjtJQUE3Qzs7UUFFb0IsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUV0QixjQUFTLEdBQVksRUFBRSxDQUFDO0lBYTVDLENBQUM7SUFYYSxXQUFXLENBQUMsVUFBOEI7UUFDaEQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRWUsU0FBUyxDQUFDLEtBQWUsRUFBRSxNQUFjOztZQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXZDLE9BQU8sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsQ0FBQztLQUFBO0NBRUo7QUFFRCxNQUFNLFFBQVE7SUFHVixZQUFZLE9BQWU7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztDQUVKO0FBRUQsTUFBTSxLQUFLO0lBSVAsWUFBWSxNQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FFSjtBQUVELE1BQU0sTUFBTTtJQUlSLFlBQVksSUFBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFRO1FBQ3pCLE9BQU8saUJBQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6RCxDQUFDO0NBRUo7QUFFRCxNQUFNLFdBQVc7Q0FFaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQQ1JlZ2lzdHJ5fSBmcm9tICcuL0lQQ1JlZ2lzdHJ5JztcbmltcG9ydCB7SVBDSGFuZGxlcn0gZnJvbSAnLi9JUENIYW5kbGVyJztcbmltcG9ydCB7SVBDTWVzc2FnZX0gZnJvbSAnLi9JUENNZXNzYWdlJztcbmltcG9ydCB7T2JqZWN0c30gZnJvbSAnLi4vLi4vdXRpbC9PYmplY3RzJztcbmltcG9ydCB7SVBDRW5naW5lfSBmcm9tICcuL0lQQ0VuZ2luZSc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge0lQQ1BpcGV9IGZyb20gJy4vSVBDUGlwZSc7XG5pbXBvcnQge0lQQ0V2ZW50fSBmcm9tICcuL0lQQ0V2ZW50JztcbmltcG9ydCB7UGlwZSwgUGlwZU5vdGlmaWNhdGlvbn0gZnJvbSAnLi4vcGlwZXMvUGlwZSc7XG5pbXBvcnQge01vY2tQaXBlc30gZnJvbSAnLi4vcGlwZXMvTW9ja1BpcGVzJztcbmltcG9ydCB7SVBDQ2xpZW50fSBmcm9tICcuL0lQQ0NsaWVudCc7XG5cbmxldCBtb2NrQ2hhbm5lbHM6IE1vY2tQaXBlczxQZXJzb25FdmVudCwgYW55PjtcblxubGV0IGxlZnRJcGNQaXBlOiBIZWxsb0lQQ1BpcGU7XG5cbmxldCByaWdodElwY1BpcGU6IEhlbGxvSVBDUGlwZTtcblxubGV0IGlwY1JlZ2lzdHJ5OiBJUENSZWdpc3RyeTtcblxubGV0IGhlbGxvSGFuZGxlcjogSGVsbG9IYW5kbGVyO1xuXG5sZXQgaXBjRW5naW5lOiBJUENFbmdpbmU8SVBDRXZlbnQ+O1xuXG5kZXNjcmliZSgnSVBDVGVzdCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgeGl0KFwiVGVzdCBwcm9wZXIgaGFuZGxpbmcgb2YgbWVzc2FnZXNcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBpY3BDbGllbnQgPSBuZXcgSVBDQ2xpZW50KHJpZ2h0SXBjUGlwZSk7XG5cbiAgICAgICAgbGV0IHJlc3BvbnNlOiBhbnkgPSBhd2FpdCBpY3BDbGllbnQuZXhlY3V0ZSgnL3Rlc3Qvc2Nob29sL2hlbGxvJywgbmV3IFBlcnNvbignQWxpY2UnKSk7XG5cbiAgICAgICAgcmVzcG9uc2UuX25vbmNlID0gMTAxMDE7XG5cbiAgICAgICAgYXNzZXJ0SlNPTihyZXNwb25zZSwge1xuICAgICAgICAgICAgXCJfdHlwZVwiOiBcInJlc3VsdFwiLFxuICAgICAgICAgICAgXCJfdmFsdWVcIjoge1xuICAgICAgICAgICAgICAgIFwicGVyc29uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWxpY2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9ub25jZVwiOiAxMDEwMVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZXhwZWN0ZWRQZW9wbGUgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWxpY2VcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGFzc2VydEpTT04oaGVsbG9IYW5kbGVyLnBlb3BsZSwgZXhwZWN0ZWRQZW9wbGUpO1xuXG4gICAgICAgIGxldCBleHBlY3RlZEdyZWV0aW5ncyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicGVyc29uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFsaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgO1xuXG4gICAgICAgIGFzc2VydEpTT04oaGVsbG9IYW5kbGVyLmdyZWV0aW5ncywgZXhwZWN0ZWRHcmVldGluZ3MpO1xuXG4gICAgfSk7XG5cbiAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBtb2NrQ2hhbm5lbHMgPSBNb2NrUGlwZXMuY3JlYXRlKCk7XG5cbiAgICAgICAgbGVmdElwY1BpcGUgPSBuZXcgSGVsbG9JUENQaXBlKG1vY2tDaGFubmVscy5sZWZ0KTtcblxuICAgICAgICByaWdodElwY1BpcGUgPSBuZXcgSGVsbG9JUENQaXBlKG1vY2tDaGFubmVscy5yaWdodCk7XG5cbiAgICAgICAgaXBjUmVnaXN0cnkgPSBuZXcgSVBDUmVnaXN0cnkoKTtcblxuICAgICAgICBoZWxsb0hhbmRsZXIgPSBuZXcgSGVsbG9IYW5kbGVyKCk7XG5cbiAgICAgICAgaXBjUmVnaXN0cnkucmVnaXN0ZXJQYXRoKCcvdGVzdC9zY2hvb2wvaGVsbG8nLCBoZWxsb0hhbmRsZXIpO1xuXG4gICAgICAgIGlwY0VuZ2luZSA9IG5ldyBJUENFbmdpbmUobGVmdElwY1BpcGUsIGlwY1JlZ2lzdHJ5KTtcblxuICAgICAgICBpcGNFbmdpbmUuc3RhcnQoKTtcblxuICAgIH0pO1xuXG59KTtcblxuY2xhc3MgSGVsbG9JUENQaXBlIGV4dGVuZHMgSVBDUGlwZTxJUENFdmVudD4ge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHJlc3BvbnNlczogSVBDTWVzc2FnZTxhbnk+W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHBpcGU6IFBpcGU8YW55LGFueT4pIHtcbiAgICAgICAgc3VwZXIocGlwZSk7XG4gICAgfVxuXG4gICAgY29udmVydEV2ZW50KHBpcGVOb3RpZmljYXRpb246IFBpcGVOb3RpZmljYXRpb248YW55LCBhbnk+KTogSVBDRXZlbnQge1xuICAgICAgICByZXR1cm4gbmV3IElQQ0V2ZW50KHRoaXMucGlwZSwgSVBDTWVzc2FnZS5jcmVhdGUocGlwZU5vdGlmaWNhdGlvbi5tZXNzYWdlKSk7XG4gICAgfVxuXG59XG5cbmNsYXNzIEhlbGxvSGFuZGxlciBleHRlbmRzIElQQ0hhbmRsZXI8UGVyc29uPiB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgcGVvcGxlOiBQZXJzb25bXSA9IFtdO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGdyZWV0aW5nczogSGVsbG9bXSA9IFtdO1xuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVZhbHVlKGlwY01lc3NhZ2U6IElQQ01lc3NhZ2U8UGVyc29uPik6IFBlcnNvbiB7XG4gICAgICAgIHJldHVybiBQZXJzb24uY3JlYXRlKGlwY01lc3NhZ2UudmFsdWUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBoYW5kbGVJUEMoZXZlbnQ6IElQQ0V2ZW50LCBwZXJzb246IFBlcnNvbik6IFByb21pc2U8SGVsbG8+IHtcbiAgICAgICAgdGhpcy5wZW9wbGUucHVzaChwZXJzb24pO1xuICAgICAgICB0aGlzLmdyZWV0aW5ncy5wdXNoKG5ldyBIZWxsbyhwZXJzb24pKTtcblxuICAgICAgICByZXR1cm4gbmV3IEhlbGxvKHBlcnNvbik7XG4gICAgfVxuXG59XG5cbmNsYXNzIEdyZWV0aW5nIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfVxuXG59XG5cbmNsYXNzIEhlbGxvIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBwZXJzb246IFBlcnNvbjtcblxuICAgIGNvbnN0cnVjdG9yKHBlcnNvbjogUGVyc29uKSB7XG4gICAgICAgIHRoaXMucGVyc29uID0gcGVyc29uO1xuICAgIH1cblxufVxuXG5jbGFzcyBQZXJzb24ge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShvYmo6IGFueSk6IFBlcnNvbiB7XG4gICAgICAgIHJldHVybiBPYmplY3RzLmNyZWF0ZUluc3RhbmNlKFBlcnNvbi5wcm90b3R5cGUsIG9iaik7XG4gICAgfVxuXG59XG5cbmNsYXNzIFBlcnNvbkV2ZW50IHtcblxufVxuIl19