"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Screenshot_1 = require("./Screenshot");
const Hashcodes_1 = require("../Hashcodes");
const ISODateTimeStrings_1 = require("./ISODateTimeStrings");
class Screenshots {
    static create(src, opts, id) {
        if (id === undefined) {
            id = Hashcodes_1.Hashcodes.createRandomID();
        }
        return new Screenshot_1.Screenshot({
            id,
            created: ISODateTimeStrings_1.ISODateTimeStrings.create(),
            src,
            width: opts.width,
            height: opts.height,
            type: opts.type,
            rel: opts.rel
        });
    }
    static parseURI(value) {
        if (!value.startsWith('screenshot:')) {
            return undefined;
        }
        return {
            value,
            id: value.split(":")[1]
        };
    }
}
exports.Screenshots = Screenshots;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuc2hvdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTY3JlZW5zaG90cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUF3QztBQUN4Qyw0Q0FBdUM7QUFFdkMsNkRBQXdEO0FBRXhELE1BQWEsV0FBVztJQUViLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBVyxFQUFFLElBQWUsRUFBRSxFQUFXO1FBRTFELElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRTtZQUNsQixFQUFFLEdBQUcscUJBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNuQztRQUVELE9BQU8sSUFBSSx1QkFBVSxDQUFDO1lBQ2xCLEVBQUU7WUFDRixPQUFPLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxFQUFFO1lBQ3BDLEdBQUc7WUFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztTQUNoQixDQUFDLENBQUM7SUFFUCxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFhO1FBRWhDLElBQUksQ0FBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO1FBRUQsT0FBTztZQUNILEtBQUs7WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUIsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQWpDRCxrQ0FpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NjcmVlbnNob3R9IGZyb20gJy4vU2NyZWVuc2hvdCc7XG5pbXBvcnQge0hhc2hjb2Rlc30gZnJvbSAnLi4vSGFzaGNvZGVzJztcbmltcG9ydCB7SW1hZ2VPcHRzfSBmcm9tICcuL0ltYWdlJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmdzfSBmcm9tICcuL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5cbmV4cG9ydCBjbGFzcyBTY3JlZW5zaG90cyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShzcmM6IHN0cmluZywgb3B0czogSW1hZ2VPcHRzLCBpZD86IHN0cmluZykge1xuXG4gICAgICAgIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZCA9IEhhc2hjb2Rlcy5jcmVhdGVSYW5kb21JRCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBTY3JlZW5zaG90KHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgY3JlYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IG9wdHMud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG9wdHMuaGVpZ2h0LFxuICAgICAgICAgICAgdHlwZTogb3B0cy50eXBlLFxuICAgICAgICAgICAgcmVsOiBvcHRzLnJlbFxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VVUkkodmFsdWU6IHN0cmluZyk6IFNjcmVlbnNob3RVUkkgfCB1bmRlZmluZWQge1xuXG4gICAgICAgIGlmICghIHZhbHVlLnN0YXJ0c1dpdGgoJ3NjcmVlbnNob3Q6JykpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBpZDogdmFsdWUuc3BsaXQoXCI6XCIpWzFdXG4gICAgICAgIH07XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JlZW5zaG90VVJJIHtcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGlkOiBzdHJpbmc7XG59XG4iXX0=