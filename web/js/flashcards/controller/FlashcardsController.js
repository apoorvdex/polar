"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../../logger/Logger");
const IPCEngines_1 = require("../../ipc/handler/IPCEngines");
const CreateAnnotationHandler_1 = require("./handlers/CreateAnnotationHandler");
const log = Logger_1.Logger.create();
class FlashcardsController {
    constructor(model) {
        this.model = model;
    }
    start() {
        let ipcEngine = IPCEngines_1.IPCEngines.rendererProcess();
        ipcEngine.registry.registerPath('/api/annotations/create-annotation', new CreateAnnotationHandler_1.CreateAnnotationHandler(this.model));
        ipcEngine.start();
    }
}
exports.FlashcardsController = FlashcardsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkc0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGbGFzaGNhcmRzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdEQUEyQztBQUUzQyw2REFBd0Q7QUFDeEQsZ0ZBQTJFO0FBRTNFLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQVE1QixNQUFhLG9CQUFvQjtJQUk3QixZQUFZLEtBQVk7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVNLEtBQUs7UUFFUixJQUFJLFNBQVMsR0FBRyx1QkFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRTdDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLG9DQUFvQyxFQUFFLElBQUksaURBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFL0csU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXRCLENBQUM7Q0FFSjtBQWxCRCxvREFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2dlcn0gZnJvbSBcIi4uLy4uL2xvZ2dlci9Mb2dnZXJcIjtcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4uLy4uL21vZGVsL01vZGVsJztcbmltcG9ydCB7SVBDRW5naW5lc30gZnJvbSAnLi4vLi4vaXBjL2hhbmRsZXIvSVBDRW5naW5lcyc7XG5pbXBvcnQge0NyZWF0ZUFubm90YXRpb25IYW5kbGVyfSBmcm9tICcuL2hhbmRsZXJzL0NyZWF0ZUFubm90YXRpb25IYW5kbGVyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIFJ1bnMgaW4gb3VyIG1haW4gcHJvY2VzcyBhbmQgZmlyZXMgd2hlbiBhIGZsYXNoY2FyZCBoYXMgYmVlbiBjcmVhdGVkIGFuZFxuICogbmVlZHMgdG8gYmUgc3RvcmVkIGluIHRoZSBtb2RlbC5cbiAqXG4gKiBARWxlY3Ryb25SZW5kZXJlckNvbnRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIEZsYXNoY2FyZHNDb250cm9sbGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kZWw6IE1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG5cbiAgICAgICAgbGV0IGlwY0VuZ2luZSA9IElQQ0VuZ2luZXMucmVuZGVyZXJQcm9jZXNzKCk7XG5cbiAgICAgICAgaXBjRW5naW5lLnJlZ2lzdHJ5LnJlZ2lzdGVyUGF0aCgnL2FwaS9hbm5vdGF0aW9ucy9jcmVhdGUtYW5ub3RhdGlvbicsIG5ldyBDcmVhdGVBbm5vdGF0aW9uSGFuZGxlcih0aGlzLm1vZGVsKSk7XG5cbiAgICAgICAgaXBjRW5naW5lLnN0YXJ0KCk7XG5cbiAgICB9XG5cbn1cbiJdfQ==