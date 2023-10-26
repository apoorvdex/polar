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
const chai_1 = require("chai");
const DatastoreFiles_1 = require("./DatastoreFiles");
describe('DastastoreFiles', function () {
    it("isValidFileName", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.ok(DatastoreFiles_1.DatastoreFiles.isValidFileName('test.jpg'));
            chai_1.assert.ok(DatastoreFiles_1.DatastoreFiles.isValidFileName('test.html'));
            chai_1.assert.ok(DatastoreFiles_1.DatastoreFiles.isValidFileName('abc124ABC.txt'));
            chai_1.assert.ok(DatastoreFiles_1.DatastoreFiles.isValidFileName('abc124ABC'));
            chai_1.assert.ok(!DatastoreFiles_1.DatastoreFiles.isValidFileName('testthis.jpggg'));
        });
    });
    it("sanitizeFilename", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(DatastoreFiles_1.DatastoreFiles.sanitizeFileName('asdf/ \\ : * ? " < > |asdf'), 'asdf_ _ _ _ _ _ _ _ _asdf');
            chai_1.assert.equal(DatastoreFiles_1.DatastoreFiles.isSanitizedFileName('asdf/ \\ : * ? " < > |asdf'), false);
            chai_1.assert.equal(DatastoreFiles_1.DatastoreFiles.isSanitizedFileName('asdf_ _ _ _ _ _ _ _ _asdf'), true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YXN0b3JlRmlsZXNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGF0YXN0b3JlRmlsZXNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFFNUIscURBQWdEO0FBRWhELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtJQUV4QixFQUFFLENBQUMsaUJBQWlCLEVBQUU7O1lBRWxCLGFBQU0sQ0FBQyxFQUFFLENBQUMsK0JBQWMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN0RCxhQUFNLENBQUMsRUFBRSxDQUFDLCtCQUFjLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdkQsYUFBTSxDQUFDLEVBQUUsQ0FBQywrQkFBYyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzNELGFBQU0sQ0FBQyxFQUFFLENBQUMsK0JBQWMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUd2RCxhQUFNLENBQUMsRUFBRSxDQUFDLENBQUUsK0JBQWMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBRWxFLENBQUM7S0FBQSxDQUFDLENBQUM7SUFJSCxFQUFFLENBQUMsa0JBQWtCLEVBQUU7O1lBQ25CLGFBQU0sQ0FBQyxLQUFLLENBQUMsK0JBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLDJCQUEyQixDQUFDLENBQUM7WUFFekcsYUFBTSxDQUFDLEtBQUssQ0FBQywrQkFBYyxDQUFDLG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEYsYUFBTSxDQUFDLEtBQUssQ0FBQywrQkFBYyxDQUFDLG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFeEYsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gXCJjaGFpXCI7XG5pbXBvcnQge0Rpc2tEYXRhc3RvcmV9IGZyb20gJy4vRGlza0RhdGFzdG9yZSc7XG5pbXBvcnQge0RhdGFzdG9yZUZpbGVzfSBmcm9tIFwiLi9EYXRhc3RvcmVGaWxlc1wiO1xuXG5kZXNjcmliZSgnRGFzdGFzdG9yZUZpbGVzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcImlzVmFsaWRGaWxlTmFtZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBhc3NlcnQub2soRGF0YXN0b3JlRmlsZXMuaXNWYWxpZEZpbGVOYW1lKCd0ZXN0LmpwZycpKTtcbiAgICAgICAgYXNzZXJ0Lm9rKERhdGFzdG9yZUZpbGVzLmlzVmFsaWRGaWxlTmFtZSgndGVzdC5odG1sJykpO1xuICAgICAgICBhc3NlcnQub2soRGF0YXN0b3JlRmlsZXMuaXNWYWxpZEZpbGVOYW1lKCdhYmMxMjRBQkMudHh0JykpO1xuICAgICAgICBhc3NlcnQub2soRGF0YXN0b3JlRmlsZXMuaXNWYWxpZEZpbGVOYW1lKCdhYmMxMjRBQkMnKSk7XG5cbiAgICAgICAgLy8gYXNzZXJ0Lm9rKCEgRGF0YXN0b3JlRmlsZXMuaXNWYWxpZEZpbGVOYW1lKCd0ZXN0IHRoaXMuanBnJykpO1xuICAgICAgICBhc3NlcnQub2soISBEYXRhc3RvcmVGaWxlcy5pc1ZhbGlkRmlsZU5hbWUoJ3Rlc3R0aGlzLmpwZ2dnJykpO1xuXG4gICAgfSk7XG5cblxuXG4gICAgaXQoXCJzYW5pdGl6ZUZpbGVuYW1lXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBhc3NlcnQuZXF1YWwoRGF0YXN0b3JlRmlsZXMuc2FuaXRpemVGaWxlTmFtZSgnYXNkZi8gXFxcXCA6ICogPyBcIiA8ID4gfGFzZGYnKSwgJ2FzZGZfIF8gXyBfIF8gXyBfIF8gX2FzZGYnKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoRGF0YXN0b3JlRmlsZXMuaXNTYW5pdGl6ZWRGaWxlTmFtZSgnYXNkZi8gXFxcXCA6ICogPyBcIiA8ID4gfGFzZGYnKSwgZmFsc2UpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoRGF0YXN0b3JlRmlsZXMuaXNTYW5pdGl6ZWRGaWxlTmFtZSgnYXNkZl8gXyBfIF8gXyBfIF8gXyBfYXNkZicpLCB0cnVlKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==