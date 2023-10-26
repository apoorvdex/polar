"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const URLs_1 = require("./URLs");
describe('URLs', function () {
    it("toBase", function () {
        chai_1.assert.equal(URLs_1.URLs.toBase('http://www.example.com/foo/bar'), 'http://www.example.com');
        chai_1.assert.equal(URLs_1.URLs.toBase('http://www.example.com:80/foo/bar'), 'http://www.example.com');
        chai_1.assert.equal(URLs_1.URLs.toBase('http://www.example.com:1234/foo/bar'), 'http://www.example.com:1234');
        chai_1.assert.equal(URLs_1.URLs.toBase('https://www.example.com:443/foo/bar'), 'https://www.example.com');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVJMc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVUkxzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtCQUE0QjtBQUU1QixpQ0FBNEI7QUFFNUIsUUFBUSxDQUFDLE1BQU0sRUFBRTtJQUViLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFFVCxhQUFNLENBQUMsS0FBSyxDQUFDLFdBQUksQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RGLGFBQU0sQ0FBQyxLQUFLLENBQUMsV0FBSSxDQUFDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQyxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFDekYsYUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFJLENBQUMsTUFBTSxDQUFDLHFDQUFxQyxDQUFDLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUNoRyxhQUFNLENBQUMsS0FBSyxDQUFDLFdBQUksQ0FBQyxNQUFNLENBQUMscUNBQXFDLENBQUMsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBRWhHLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7VGV4dEFycmF5fSBmcm9tICcuL1RleHRBcnJheSc7XG5pbXBvcnQge1VSTHN9IGZyb20gJy4vVVJMcyc7XG5cbmRlc2NyaWJlKCdVUkxzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcInRvQmFzZVwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoVVJMcy50b0Jhc2UoJ2h0dHA6Ly93d3cuZXhhbXBsZS5jb20vZm9vL2JhcicpLCAnaHR0cDovL3d3dy5leGFtcGxlLmNvbScpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoVVJMcy50b0Jhc2UoJ2h0dHA6Ly93d3cuZXhhbXBsZS5jb206ODAvZm9vL2JhcicpLCAnaHR0cDovL3d3dy5leGFtcGxlLmNvbScpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoVVJMcy50b0Jhc2UoJ2h0dHA6Ly93d3cuZXhhbXBsZS5jb206MTIzNC9mb28vYmFyJyksICdodHRwOi8vd3d3LmV4YW1wbGUuY29tOjEyMzQnKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKFVSTHMudG9CYXNlKCdodHRwczovL3d3dy5leGFtcGxlLmNvbTo0NDMvZm9vL2JhcicpLCAnaHR0cHM6Ly93d3cuZXhhbXBsZS5jb20nKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==