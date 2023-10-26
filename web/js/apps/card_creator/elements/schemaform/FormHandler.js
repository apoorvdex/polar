"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../../../../logger/Logger");
const log = Logger_1.Logger.create();
class FormHandler {
    onChange(data) {
        log.info("onChange: ", data);
        return true;
    }
    onSubmit(data) {
        log.info("onSubmit: ", data);
        return true;
    }
    onError(data) {
        log.info("onError: ", data);
        return true;
    }
}
exports.FormHandler = FormHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGb3JtSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUFpRDtBQUVqRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFJNUIsTUFBYSxXQUFXO0lBRXBCLFFBQVEsQ0FBQyxJQUFTO1FBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUdELFFBQVEsQ0FBQyxJQUFTO1FBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUdELE9BQU8sQ0FBQyxJQUFTO1FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUVKO0FBbkJELGtDQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuLyoqXG4gKiBIYW5kbGVzIGNhbGxiYWNrcyBmcm9tIEpTT04gc2NoZW1hIGZvcm0gYXMgdGhlIGZvcm0gZGF0YSBpcyBjaGFuZ2VkLlxuICovXG5leHBvcnQgY2xhc3MgRm9ybUhhbmRsZXIge1xuXG4gICAgb25DaGFuZ2UoZGF0YTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGxvZy5pbmZvKFwib25DaGFuZ2U6IFwiLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICBvblN1Ym1pdChkYXRhOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgbG9nLmluZm8oXCJvblN1Ym1pdDogXCIsIGRhdGEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIG9uRXJyb3IoZGF0YTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGxvZy5pbmZvKFwib25FcnJvcjogXCIsIGRhdGEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbn1cbiJdfQ==