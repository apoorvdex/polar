"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_in_page_search_1 = __importDefault(require("electron-in-page-search"));
const electron_1 = require("electron");
class PageSearchController {
    constructor(model) {
        this.model = model;
    }
    start() {
        const inPageSearch = electron_in_page_search_1.default(electron_1.remote.getCurrentWebContents());
    }
}
exports.PageSearchController = PageSearchController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZVNlYXJjaENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQYWdlU2VhcmNoQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNGQUFtRDtBQUNuRCx1Q0FBZ0M7QUFHaEMsTUFBYSxvQkFBb0I7SUFJN0IsWUFBbUIsS0FBWTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU0sS0FBSztRQUVSLE1BQU0sWUFBWSxHQUFHLGlDQUFZLENBQUMsaUJBQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7SUFNdEUsQ0FBQztDQUVKO0FBbEJELG9EQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZWFyY2hJblBhZ2UgZnJvbSAnZWxlY3Ryb24taW4tcGFnZS1zZWFyY2gnO1xuaW1wb3J0IHtyZW1vdGV9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4uL21vZGVsL01vZGVsJztcblxuZXhwb3J0IGNsYXNzIFBhZ2VTZWFyY2hDb250cm9sbGVyIHtcblxuICAgIHByaXZhdGUgbW9kZWw6IE1vZGVsO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGluUGFnZVNlYXJjaCA9IHNlYXJjaEluUGFnZShyZW1vdGUuZ2V0Q3VycmVudFdlYkNvbnRlbnRzKCkpO1xuXG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb21lLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBpblBhZ2VTZWFyY2gub3BlblNlYXJjaFdpbmRvdygpO1xuICAgICAgICAvLyB9KTtcblxuICAgIH1cblxufVxuIl19