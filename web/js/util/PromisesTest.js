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
describe('Promises', function () {
    it("Basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            function isTypescriptSane() {
                return __awaiter(this, void 0, void 0, function* () {
                    return false;
                });
            }
            if (isTypescriptSane()) {
                console.log("No... it's insane!");
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbWlzZXNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJvbWlzZXNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFRQSxRQUFRLENBQUMsVUFBVSxFQUFFO0lBRWpCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O1lBRVIsU0FBZSxnQkFBZ0I7O29CQUMzQixPQUFPLEtBQUssQ0FBQztnQkFDakIsQ0FBQzthQUFBO1lBRUQsSUFBSSxnQkFBZ0IsRUFBRSxFQUFFO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDckM7UUFFTCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtQcm9ncmVzc0NhbGN1bGF0b3J9IGZyb20gJy4vUHJvZ3Jlc3NDYWxjdWxhdG9yJztcbmltcG9ydCB7UHJvZ3Jlc3NUcmFja2Vyc30gZnJvbSAnLi9Qcm9ncmVzc1RyYWNrZXJzJztcbmltcG9ydCB7UHJvZ3Jlc3NUcmFja2VyfSBmcm9tICcuL1Byb2dyZXNzVHJhY2tlcic7XG5cblxuZGVzY3JpYmUoJ1Byb21pc2VzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcIkJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGlzVHlwZXNjcmlwdFNhbmUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNUeXBlc2NyaXB0U2FuZSgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vLi4uIGl0J3MgaW5zYW5lIVwiKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn0pO1xuXG5cbiJdfQ==