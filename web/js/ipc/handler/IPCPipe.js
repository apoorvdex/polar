"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IPCMessage_1 = require("./IPCMessage");
const TypedPipe_1 = require("../pipes/TypedPipe");
class IPCPipe extends TypedPipe_1.TypedPipe {
    convertMessage(msg) {
        return IPCMessage_1.IPCMessage.create(msg);
    }
}
exports.IPCPipe = IPCPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVBDUGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIklQQ1BpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBd0M7QUFFeEMsa0RBQTZDO0FBTTdDLE1BQXNCLE9BQTRCLFNBQVEscUJBQTZCO0lBSXpFLGNBQWMsQ0FBQyxHQUFRO1FBQzdCLE9BQU8sdUJBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUVKO0FBUkQsMEJBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQQ01lc3NhZ2V9IGZyb20gJy4vSVBDTWVzc2FnZSc7XG5pbXBvcnQge0lQQ0V2ZW50fSBmcm9tICcuL0lQQ0V2ZW50JztcbmltcG9ydCB7VHlwZWRQaXBlfSBmcm9tICcuLi9waXBlcy9UeXBlZFBpcGUnO1xuaW1wb3J0IHtQaXBlTm90aWZpY2F0aW9uLCBXcml0YWJsZVBpcGV9IGZyb20gJy4uL3BpcGVzL1BpcGUnO1xuXG4vKipcbiAqIFRha2VzIGEgcGlwZSBhbmQgY29udmVydHMgdHlwZXMgdG8gdGhlIHR5cGVzIHdlIG5lZWQgZm9yIElQQy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElQQ1BpcGU8RSBleHRlbmRzIElQQ0V2ZW50PiBleHRlbmRzIFR5cGVkUGlwZTxFLCBJUENNZXNzYWdlPGFueT4+IHtcblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjb252ZXJ0RXZlbnQocGlwZU5vdGlmaWNhdGlvbjogUGlwZU5vdGlmaWNhdGlvbjxhbnksIGFueT4pOiBFO1xuXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRNZXNzYWdlKG1zZzogYW55KTogSVBDTWVzc2FnZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIElQQ01lc3NhZ2UuY3JlYXRlKG1zZyk7XG4gICAgfVxuXG59XG4iXX0=