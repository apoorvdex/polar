"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateFlashcardForm_1 = require("./schemaform/CreateFlashcardForm");
class CardCreatorElement extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: 'closed' });
        const NODE_MODULES = '../../node_modules';
        let template = `    
        <link rel="stylesheet" href="${NODE_MODULES}/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="${NODE_MODULES}/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="${NODE_MODULES}/bootstrap/dist/css/bootstrap-grid.min.css">
        <link rel="stylesheet" href="${NODE_MODULES}/bootstrap/dist/css/bootstrap-reboot.min.css">
        <link rel="stylesheet" href="../../bootstrap4-glyphicons/maps/glyphicons-fontawesome.min.css">
        <link rel="stylesheet" href="${NODE_MODULES}/summernote/dist/summernote-bs4.css">
    
        <!-- we should be able to use bootstrap v4 but the CSS for this is actually
             better with 3.3.6 -->
        <!--<link rel="stylesheet" id="theme" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">-->
        <link rel="stylesheet" href="${NODE_MODULES}/simplemde/dist/simplemde.min.css">

        <!--<link rel="stylesheet" href="css/card-creator.css">-->
    
        <div id="app">
    
            <div id="schema-form">
                 schema form goes here...
            </div>

        </div>
        `;
        let mainElement = shadowRoot.appendChild(CardCreatorElement.createElementHTML(template));
        let schemaFormElement = shadowRoot.getElementById("schema-form");
        let inputController = new CreateFlashcardForm_1.CreateFlashcardForm(schemaFormElement);
        shadowRoot.appendChild(mainElement);
    }
    static createElementHTML(innerHTML) {
        let div = document.createElement("div");
        div.innerHTML = innerHTML;
        return div;
    }
}
exports.CardCreatorElement = CardCreatorElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZENyZWF0b3JFbGVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2FyZENyZWF0b3JFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMEVBQXFFO0FBRXJFLE1BQWEsa0JBQW1CLFNBQVEsV0FBVztJQUUvQztRQUVJLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBS3JELE1BQU0sWUFBWSxHQUFDLG9CQUFvQixDQUFDO1FBRXhDLElBQUksUUFBUSxHQUFHO3VDQUNnQixZQUFZO3VDQUNaLFlBQVk7dUNBQ1osWUFBWTt1Q0FDWixZQUFZOzt1Q0FFWixZQUFZOzs7Ozt1Q0FLWixZQUFZOzs7Ozs7Ozs7OztTQVcxQyxDQUFDO1FBSUYsSUFBSSxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRXpGLElBQUksaUJBQWlCLEdBQWdCLFVBQVUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFOUUsSUFBSSxlQUFlLEdBQUcsSUFBSSx5Q0FBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBUWpFLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFeEMsQ0FBQztJQUtELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFpQjtRQUV0QyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRTFCLE9BQU8sR0FBRyxDQUFDO0lBRWYsQ0FBQztDQUVKO0FBbkVELGdEQW1FQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q3JlYXRlRmxhc2hjYXJkRm9ybX0gZnJvbSAnLi9zY2hlbWFmb3JtL0NyZWF0ZUZsYXNoY2FyZEZvcm0nO1xuXG5leHBvcnQgY2xhc3MgQ2FyZENyZWF0b3JFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnY2xvc2VkJ30pO1xuXG4gICAgICAgIC8vIEZJWE1FOiB0aGlzIHdpbGwgY2hhbmdlIGJhc2VkIG9uIHRoZSBjb21wb25lbnQgc28gSSBndWVzcyBJIGhhdmUgdG9cbiAgICAgICAgLy8gZmluZCBpdCB2aWEgX19kaXJuYW1lID9cblxuICAgICAgICBjb25zdCBOT0RFX01PRFVMRVM9Jy4uLy4uL25vZGVfbW9kdWxlcyc7XG5cbiAgICAgICAgbGV0IHRlbXBsYXRlID0gYCAgICBcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIke05PREVfTU9EVUxFU30vZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIiR7Tk9ERV9NT0RVTEVTfS9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIj5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIke05PREVfTU9EVUxFU30vYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC1ncmlkLm1pbi5jc3NcIj5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIke05PREVfTU9EVUxFU30vYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC1yZWJvb3QubWluLmNzc1wiPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uLy4uL2Jvb3RzdHJhcDQtZ2x5cGhpY29ucy9tYXBzL2dseXBoaWNvbnMtZm9udGF3ZXNvbWUubWluLmNzc1wiPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIiR7Tk9ERV9NT0RVTEVTfS9zdW1tZXJub3RlL2Rpc3Qvc3VtbWVybm90ZS1iczQuY3NzXCI+XG4gICAgXG4gICAgICAgIDwhLS0gd2Ugc2hvdWxkIGJlIGFibGUgdG8gdXNlIGJvb3RzdHJhcCB2NCBidXQgdGhlIENTUyBmb3IgdGhpcyBpcyBhY3R1YWxseVxuICAgICAgICAgICAgIGJldHRlciB3aXRoIDMuMy42IC0tPlxuICAgICAgICA8IS0tPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGlkPVwidGhlbWVcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjYvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI+LS0+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiJHtOT0RFX01PRFVMRVN9L3NpbXBsZW1kZS9kaXN0L3NpbXBsZW1kZS5taW4uY3NzXCI+XG5cbiAgICAgICAgPCEtLTxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL2NhcmQtY3JlYXRvci5jc3NcIj4tLT5cbiAgICBcbiAgICAgICAgPGRpdiBpZD1cImFwcFwiPlxuICAgIFxuICAgICAgICAgICAgPGRpdiBpZD1cInNjaGVtYS1mb3JtXCI+XG4gICAgICAgICAgICAgICAgIHNjaGVtYSBmb3JtIGdvZXMgaGVyZS4uLlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgLy8gLy9sZXQgY2xvbmVFbGVtZW50ID0gdGhpcy5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuXG4gICAgICAgIGxldCBtYWluRWxlbWVudCA9IHNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoQ2FyZENyZWF0b3JFbGVtZW50LmNyZWF0ZUVsZW1lbnRIVE1MKHRlbXBsYXRlKSk7XG5cbiAgICAgICAgbGV0IHNjaGVtYUZvcm1FbGVtZW50ID0gPEhUTUxFbGVtZW50PnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJzY2hlbWEtZm9ybVwiKTtcblxuICAgICAgICBsZXQgaW5wdXRDb250cm9sbGVyID0gbmV3IENyZWF0ZUZsYXNoY2FyZEZvcm0oc2NoZW1hRm9ybUVsZW1lbnQpO1xuXG5cbiAgICAgICAgLy9sZXQgcG9zdE1lc3NhZ2VGb3JtSGFuZGxlciA9IG5ldyBQb3N0TWVzc2FnZUZvcm1IYW5kbGVyKCk7XG5cbiAgICAgICAgLy8gVE9ETzogcmVtb3ZlZCB3aGlsZSB3ZSByZWZhY3RvclxuICAgICAgICAvLyBpbnB1dENvbnRyb2xsZXIuY3JlYXRlTmV3Rmxhc2hjYXJkKHNjaGVtYUZvcm1FbGVtZW50LCBwb3N0TWVzc2FnZUZvcm1IYW5kbGVyKTtcblxuICAgICAgICBzaGFkb3dSb290LmFwcGVuZENoaWxkKG1haW5FbGVtZW50KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGRpdiBmcm9tIHRoZSBnaXZlbiBpbm5lckhUTUwgYW5kIHJldHVybiBpdC5cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlRWxlbWVudEhUTUwoaW5uZXJIVE1MOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG5cbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG5cbiAgICAgICAgcmV0dXJuIGRpdjtcblxuICAgIH1cblxufVxuIl19