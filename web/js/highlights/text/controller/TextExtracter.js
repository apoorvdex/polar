"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TextRect_1 = require("../../../metadata/TextRect");
const Preconditions_1 = require("../../../Preconditions");
const JQuery_1 = __importDefault(require("../../../ui/JQuery"));
class TextExtracter {
    static toTextSelections(textHighlightRows) {
        let result = [];
        textHighlightRows.forEach(function (textHighlightRow) {
            Preconditions_1.Preconditions.assertNotNull(textHighlightRow.rectElements, "rectElements");
            textHighlightRow.rectElements.forEach(function (rectElement) {
                let textSelection = new TextRect_1.TextRect({
                    rect: rectElement.rect,
                    text: JQuery_1.default(rectElement.element).text()
                });
                result.push(textSelection);
            });
        });
        return result;
    }
}
exports.TextExtracter = TextExtracter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEV4dHJhY3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRleHRFeHRyYWN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSx5REFBb0Q7QUFDcEQsMERBQXFEO0FBQ3JELGdFQUFtQztBQUtuQyxNQUFhLGFBQWE7SUFFdEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGlCQUFxQztRQUV6RCxJQUFJLE1BQU0sR0FBZSxFQUV4QixDQUFDO1FBRUYsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsZ0JBQWdCO1lBRWhELDZCQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztZQUUzRSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVMsV0FBVztnQkFFdEQsSUFBSSxhQUFhLEdBQUcsSUFBSSxtQkFBUSxDQUFDO29CQUM3QixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7b0JBQ3RCLElBQUksRUFBRSxnQkFBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUU7aUJBQ3RDLENBQUMsQ0FBQztnQkFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRS9CLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0NBRUo7QUE3QkQsc0NBNkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXh0SGlnaGxpZ2h0Um93fSBmcm9tICcuL1RleHRIaWdobGlnaHRSb3cnO1xuaW1wb3J0IHtUZXh0UmVjdH0gZnJvbSAnLi4vLi4vLi4vbWV0YWRhdGEvVGV4dFJlY3QnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi8uLi8uLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCAkIGZyb20gJy4uLy4uLy4uL3VpL0pRdWVyeSc7XG5cbi8qKlxuICogVGFrZXMgVGV4dEhpZ2hsaWdodFJvd3MgYW5kIHRoZW4gYnVpbGRzIGFkamFjZW50IHRlc3QgcnVucyBmcm9tIHRoZSBkYXRhLlxuICovXG5leHBvcnQgY2xhc3MgVGV4dEV4dHJhY3RlciB7XG5cbiAgICBzdGF0aWMgdG9UZXh0U2VsZWN0aW9ucyh0ZXh0SGlnaGxpZ2h0Um93czogVGV4dEhpZ2hsaWdodFJvd1tdKSB7XG5cbiAgICAgICAgbGV0IHJlc3VsdDogVGV4dFJlY3RbXSA9IFtcblxuICAgICAgICBdO1xuXG4gICAgICAgIHRleHRIaWdobGlnaHRSb3dzLmZvckVhY2goZnVuY3Rpb24gKHRleHRIaWdobGlnaHRSb3cpIHtcblxuICAgICAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHRleHRIaWdobGlnaHRSb3cucmVjdEVsZW1lbnRzLCBcInJlY3RFbGVtZW50c1wiKTtcblxuICAgICAgICAgICAgdGV4dEhpZ2hsaWdodFJvdy5yZWN0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihyZWN0RWxlbWVudCkge1xuXG4gICAgICAgICAgICAgICAgbGV0IHRleHRTZWxlY3Rpb24gPSBuZXcgVGV4dFJlY3Qoe1xuICAgICAgICAgICAgICAgICAgICByZWN0OiByZWN0RWxlbWVudC5yZWN0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkKHJlY3RFbGVtZW50LmVsZW1lbnQpLnRleHQoKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGV4dFNlbGVjdGlvbik7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbn1cbiJdfQ==