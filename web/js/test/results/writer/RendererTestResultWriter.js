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
const TestResult_1 = require("../renderer/TestResult");
const Logger_1 = require("../../../logger/Logger");
const Preconditions_1 = require("../../../Preconditions");
const log = Logger_1.Logger.create();
class RendererTestResultWriter {
    write(result) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Got result from renderer: ", result);
            if (!Preconditions_1.isPresent(result)) {
                throw new Error("No result given!");
            }
            TestResult_1.TestResult.set(result);
        });
    }
}
exports.RendererTestResultWriter = RendererTestResultWriter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVuZGVyZXJUZXN0UmVzdWx0V3JpdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVuZGVyZXJUZXN0UmVzdWx0V3JpdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSx1REFBa0Q7QUFDbEQsbURBQThDO0FBQzlDLDBEQUFpRDtBQUVqRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFJNUIsTUFBYSx3QkFBd0I7SUFFcEIsS0FBSyxDQUFDLE1BQVc7O1lBRTFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFL0MsSUFBSSxDQUFDLHlCQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUN2QztZQUVELHVCQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNCLENBQUM7S0FBQTtDQUVKO0FBZEQsNERBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Rlc3RSZXN1bHRXcml0ZXJ9IGZyb20gJy4uL1Rlc3RSZXN1bHRXcml0ZXInO1xuaW1wb3J0IHtUZXN0UmVzdWx0fSBmcm9tICcuLi9yZW5kZXJlci9UZXN0UmVzdWx0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi8uLi9QcmVjb25kaXRpb25zJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuLyoqXG4gKiBXcml0ZSBkYXRhIGZyb20gdGhlIG1haW4gRWxlY3Ryb24gcHJvY2Vzcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlbmRlcmVyVGVzdFJlc3VsdFdyaXRlciBpbXBsZW1lbnRzIFRlc3RSZXN1bHRXcml0ZXIge1xuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlKHJlc3VsdDogYW55KSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJHb3QgcmVzdWx0IGZyb20gcmVuZGVyZXI6IFwiLCByZXN1bHQpO1xuXG4gICAgICAgIGlmICghaXNQcmVzZW50KHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlc3VsdCBnaXZlbiFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBUZXN0UmVzdWx0LnNldChyZXN1bHQpO1xuXG4gICAgfVxuXG59XG4iXX0=