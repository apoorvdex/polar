"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const AnnotationType_1 = require("../../js/metadata/AnnotationType");
const Proxies_1 = require("../../js/proxies/Proxies");
const DocMetas_1 = require("../../js/metadata/DocMetas");
const Comments_1 = require("../../js/metadata/Comments");
const ViewOrEditComment_1 = require("../../js/annotation_sidebar/child_annotations/comments/ViewOrEditComment");
const Functions_1 = require("../../js/util/Functions");
class ViewOrEditCommentExample extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const docMeta = Proxies_1.Proxies.create(DocMetas_1.MockDocMetas.createWithinInitialPagemarks('0x001', 4));
        const html = 'This is <b>the</b> comment.';
        const comment = Comments_1.Comments.createHTMLComment(html, 'page:1');
        const commentDocAnnotation = {
            id: '01010101',
            annotationType: AnnotationType_1.AnnotationType.COMMENT,
            html,
            pageNum: 1,
            position: { x: 0, y: 0 },
            created: "2018-10-23T21:06:22+00:00",
            comments: [],
            children: [],
            pageMeta: docMeta.pageMetas[1],
            original: comment
        };
        return (React.createElement("div", null,
            React.createElement(ViewOrEditComment_1.ViewOrEditComment, { id: 'test', comment: commentDocAnnotation, onComment: Functions_1.NULL_FUNCTION })));
    }
}
exports.ViewOrEditCommentExample = ViewOrEditCommentExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld09yRWRpdENvbW1lbnRFeGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVmlld09yRWRpdENvbW1lbnRFeGFtcGxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IscUVBQWdFO0FBRWhFLHNEQUFpRDtBQUNqRCx5REFBd0Q7QUFDeEQseURBQW9EO0FBQ3BELGdIQUEyRztBQUMzRyx1REFBc0Q7QUFFdEQsTUFBYSx3QkFBeUIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFekUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsdUJBQVksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0RixNQUFNLElBQUksR0FBRyw2QkFBNkIsQ0FBQztRQUUzQyxNQUFNLE9BQU8sR0FBRyxtQkFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUUzRCxNQUFNLG9CQUFvQixHQUFrQjtZQUV4QyxFQUFFLEVBQUUsVUFBVTtZQUNkLGNBQWMsRUFBRSwrQkFBYyxDQUFDLE9BQU87WUFDdEMsSUFBSTtZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sRUFBRSwyQkFBMkI7WUFDcEMsUUFBUSxFQUFFLEVBQUU7WUFHWixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixRQUFRLEVBQUUsT0FBTztTQUNwQixDQUFDO1FBRUYsT0FBTyxDQUVIO1lBRUksb0JBQUMscUNBQWlCLElBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLHlCQUFhLEdBQUcsQ0FFckYsQ0FFVCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBekNELDREQXlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QW5ub3RhdGlvblR5cGV9IGZyb20gJy4uLy4uL2pzL21ldGFkYXRhL0Fubm90YXRpb25UeXBlJztcbmltcG9ydCB7RG9jQW5ub3RhdGlvbn0gZnJvbSAnLi4vLi4vanMvYW5ub3RhdGlvbl9zaWRlYmFyL0RvY0Fubm90YXRpb24nO1xuaW1wb3J0IHtQcm94aWVzfSBmcm9tICcuLi8uLi9qcy9wcm94aWVzL1Byb3hpZXMnO1xuaW1wb3J0IHtNb2NrRG9jTWV0YXN9IGZyb20gJy4uLy4uL2pzL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7Q29tbWVudHN9IGZyb20gXCIuLi8uLi9qcy9tZXRhZGF0YS9Db21tZW50c1wiO1xuaW1wb3J0IHtWaWV3T3JFZGl0Q29tbWVudH0gZnJvbSBcIi4uLy4uL2pzL2Fubm90YXRpb25fc2lkZWJhci9jaGlsZF9hbm5vdGF0aW9ucy9jb21tZW50cy9WaWV3T3JFZGl0Q29tbWVudFwiO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tIFwiLi4vLi4vanMvdXRpbC9GdW5jdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIFZpZXdPckVkaXRDb21tZW50RXhhbXBsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGEgPSBQcm94aWVzLmNyZWF0ZShNb2NrRG9jTWV0YXMuY3JlYXRlV2l0aGluSW5pdGlhbFBhZ2VtYXJrcygnMHgwMDEnLCA0KSk7XG5cbiAgICAgICAgY29uc3QgaHRtbCA9ICdUaGlzIGlzIDxiPnRoZTwvYj4gY29tbWVudC4nO1xuXG4gICAgICAgIGNvbnN0IGNvbW1lbnQgPSBDb21tZW50cy5jcmVhdGVIVE1MQ29tbWVudChodG1sLCAncGFnZToxJyk7XG5cbiAgICAgICAgY29uc3QgY29tbWVudERvY0Fubm90YXRpb246IERvY0Fubm90YXRpb24gPSB7XG5cbiAgICAgICAgICAgIGlkOiAnMDEwMTAxMDEnLFxuICAgICAgICAgICAgYW5ub3RhdGlvblR5cGU6IEFubm90YXRpb25UeXBlLkNPTU1FTlQsXG4gICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgcGFnZU51bTogMSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7eDogMCwgeTogMCB9LFxuICAgICAgICAgICAgY3JlYXRlZDogXCIyMDE4LTEwLTIzVDIxOjA2OjIyKzAwOjAwXCIsXG4gICAgICAgICAgICBjb21tZW50czogW10sXG4gICAgICAgICAgICAvLyB0aGUgcmVmZXJlbmNlIHRvIGEgcGFyZW50IGFubm90YXRpb24gaWYgdGhpcyBpcyBhIGNoaWxkXG4gICAgICAgICAgICAvLyBhbm5vdGF0aW9uLlxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgcGFnZU1ldGE6IGRvY01ldGEucGFnZU1ldGFzWzFdLFxuICAgICAgICAgICAgb3JpZ2luYWw6IGNvbW1lbnRcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPFZpZXdPckVkaXRDb21tZW50IGlkPSd0ZXN0JyBjb21tZW50PXtjb21tZW50RG9jQW5ub3RhdGlvbn0gb25Db21tZW50PXtOVUxMX0ZVTkNUSU9OfS8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5cbiJdfQ==