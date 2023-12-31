"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assertions_1 = require("../test/Assertions");
const PagemarkRects_1 = require("./PagemarkRects");
const Rects_1 = require("../Rects");
describe('PagemarkRects', function () {
    describe('createFromPositionedRect', function () {
        it("basic", function () {
            let rect = Rects_1.Rects.createFromBasicRect({
                left: 0,
                top: 0,
                width: 800,
                height: 500
            });
            let parentRect = Rects_1.Rects.createFromBasicRect({
                left: 0,
                top: 0,
                width: 800,
                height: 1000
            });
            let expected = {
                "left": 0,
                "top": 0,
                "width": 100,
                "height": 50
            };
            Assertions_1.assertJSON(PagemarkRects_1.PagemarkRects.createFromPositionedRect(rect, parentRect), expected);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZW1hcmtSZWN0c1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQYWdlbWFya1JlY3RzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1EQUE4QztBQUM5QyxtREFBOEM7QUFDOUMsb0NBQStCO0FBRS9CLFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFFdEIsUUFBUSxDQUFDLDBCQUEwQixFQUFFO1FBRWpDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFFUixJQUFJLElBQUksR0FBRyxhQUFLLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2pDLElBQUksRUFBRSxDQUFDO2dCQUNQLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEtBQUssRUFBRSxHQUFHO2dCQUNWLE1BQU0sRUFBRSxHQUFHO2FBQ2QsQ0FBQyxDQUFDO1lBRUgsSUFBSSxVQUFVLEdBQUcsYUFBSyxDQUFDLG1CQUFtQixDQUFDO2dCQUN2QyxJQUFJLEVBQUUsQ0FBQztnQkFDUCxHQUFHLEVBQUUsQ0FBQztnQkFDTixLQUFLLEVBQUUsR0FBRztnQkFDVixNQUFNLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztZQUVILElBQUksUUFBUSxHQUFHO2dCQUNYLE1BQU0sRUFBRSxDQUFDO2dCQUNULEtBQUssRUFBRSxDQUFDO2dCQUNSLE9BQU8sRUFBRSxHQUFHO2dCQUNaLFFBQVEsRUFBRSxFQUFFO2FBQ2YsQ0FBQztZQUVGLHVCQUFVLENBQUMsNkJBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFbkYsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtQYWdlbWFya1JlY3RzfSBmcm9tICcuL1BhZ2VtYXJrUmVjdHMnO1xuaW1wb3J0IHtSZWN0c30gZnJvbSAnLi4vUmVjdHMnO1xuXG5kZXNjcmliZSgnUGFnZW1hcmtSZWN0cycsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ2NyZWF0ZUZyb21Qb3NpdGlvbmVkUmVjdCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KFwiYmFzaWNcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBsZXQgcmVjdCA9IFJlY3RzLmNyZWF0ZUZyb21CYXNpY1JlY3Qoe1xuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgcGFyZW50UmVjdCA9IFJlY3RzLmNyZWF0ZUZyb21CYXNpY1JlY3Qoe1xuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAwXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgICAgIFwibGVmdFwiOiAwLFxuICAgICAgICAgICAgICAgIFwidG9wXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogNTBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGFzc2VydEpTT04oUGFnZW1hcmtSZWN0cy5jcmVhdGVGcm9tUG9zaXRpb25lZFJlY3QocmVjdCwgcGFyZW50UmVjdCksIGV4cGVjdGVkKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==