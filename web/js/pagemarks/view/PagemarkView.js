"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentManager_1 = require("../../components/ComponentManager");
const DefaultContainerProvider_1 = require("../../components/containers/providers/impl/DefaultContainerProvider");
const PagemarkModel_1 = require("../model/PagemarkModel");
const ThumbnailContainerProvider_1 = require("../../components/containers/providers/impl/ThumbnailContainerProvider");
const ProgressView_1 = require("./ProgressView");
const PrimaryPagemarkComponent_1 = require("./components/PrimaryPagemarkComponent");
const ThumbnailPagemarkComponent_1 = require("./components/ThumbnailPagemarkComponent");
exports.PAGEMARK_VIEW_ENABLED = true;
class PagemarkView {
    constructor(model) {
        this.model = model;
        this.primaryPagemarkComponentManager
            = new ComponentManager_1.ComponentManager(model, new DefaultContainerProvider_1.DefaultContainerProvider(), () => new PrimaryPagemarkComponent_1.PrimaryPagemarkComponent(), () => new PagemarkModel_1.PagemarkModel());
        this.thumbnailPagemarkComponentManager
            = new ComponentManager_1.ComponentManager(model, new ThumbnailContainerProvider_1.ThumbnailContainerProvider(), () => new ThumbnailPagemarkComponent_1.ThumbnailPagemarkComponent(), () => new PagemarkModel_1.PagemarkModel());
        this.progressView = new ProgressView_1.ProgressView(this.model);
    }
    start() {
        if (this.primaryPagemarkComponentManager) {
            this.primaryPagemarkComponentManager.start();
        }
        if (this.thumbnailPagemarkComponentManager) {
            this.thumbnailPagemarkComponentManager.start();
        }
        this.progressView.start();
    }
}
exports.PagemarkView = PagemarkView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZW1hcmtWaWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGFnZW1hcmtWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsd0VBQW1FO0FBQ25FLGtIQUE2RztBQUM3RywwREFBcUQ7QUFDckQsc0hBQWlIO0FBQ2pILGlEQUE0QztBQUM1QyxvRkFBK0U7QUFDL0Usd0ZBQW1GO0FBRXRFLFFBQUEscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0FBRTFDLE1BQWEsWUFBWTtJQVVyQixZQUFZLEtBQVk7UUFFcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxDQUFDLCtCQUErQjtjQUM5QixJQUFJLG1DQUFnQixDQUFDLEtBQUssRUFDTCxJQUFJLG1EQUF3QixFQUFFLEVBQzlCLEdBQUcsRUFBRSxDQUFDLElBQUksbURBQXdCLEVBQUUsRUFDcEMsR0FBRyxFQUFFLENBQUMsSUFBSSw2QkFBYSxFQUFFLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsaUNBQWlDO2NBQ2hDLElBQUksbUNBQWdCLENBQUMsS0FBSyxFQUNMLElBQUksdURBQTBCLEVBQUUsRUFDaEMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBMEIsRUFBRSxFQUN0QyxHQUFHLEVBQUUsQ0FBQyxJQUFJLDZCQUFhLEVBQUUsQ0FBQyxDQUFDO1FBR3RELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVyRCxDQUFDO0lBRU0sS0FBSztRQUVSLElBQUksSUFBSSxDQUFDLCtCQUErQixFQUFFO1lBQ3RDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoRDtRQUVELElBQUksSUFBSSxDQUFDLGlDQUFpQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsRDtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFOUIsQ0FBQztDQUVKO0FBN0NELG9DQTZDQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi4vLi4vbW9kZWwvTW9kZWwnO1xuaW1wb3J0IHtDb21wb25lbnRNYW5hZ2VyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbXBvbmVudE1hbmFnZXInO1xuaW1wb3J0IHtEZWZhdWx0Q29udGFpbmVyUHJvdmlkZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVycy9wcm92aWRlcnMvaW1wbC9EZWZhdWx0Q29udGFpbmVyUHJvdmlkZXInO1xuaW1wb3J0IHtQYWdlbWFya01vZGVsfSBmcm9tICcuLi9tb2RlbC9QYWdlbWFya01vZGVsJztcbmltcG9ydCB7VGh1bWJuYWlsQ29udGFpbmVyUHJvdmlkZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVycy9wcm92aWRlcnMvaW1wbC9UaHVtYm5haWxDb250YWluZXJQcm92aWRlcic7XG5pbXBvcnQge1Byb2dyZXNzVmlld30gZnJvbSAnLi9Qcm9ncmVzc1ZpZXcnO1xuaW1wb3J0IHtQcmltYXJ5UGFnZW1hcmtDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9QcmltYXJ5UGFnZW1hcmtDb21wb25lbnQnO1xuaW1wb3J0IHtUaHVtYm5haWxQYWdlbWFya0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL1RodW1ibmFpbFBhZ2VtYXJrQ29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFBBR0VNQVJLX1ZJRVdfRU5BQkxFRCA9IHRydWU7XG5cbmV4cG9ydCBjbGFzcyBQYWdlbWFya1ZpZXcge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RlbDogTW9kZWw7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHByaW1hcnlQYWdlbWFya0NvbXBvbmVudE1hbmFnZXI6IENvbXBvbmVudE1hbmFnZXI7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHRodW1ibmFpbFBhZ2VtYXJrQ29tcG9uZW50TWFuYWdlcjogQ29tcG9uZW50TWFuYWdlcjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvZ3Jlc3NWaWV3OiBQcm9ncmVzc1ZpZXc7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWwpIHtcblxuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG5cbiAgICAgICAgdGhpcy5wcmltYXJ5UGFnZW1hcmtDb21wb25lbnRNYW5hZ2VyXG4gICAgICAgICAgICA9IG5ldyBDb21wb25lbnRNYW5hZ2VyKG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGVmYXVsdENvbnRhaW5lclByb3ZpZGVyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IG5ldyBQcmltYXJ5UGFnZW1hcmtDb21wb25lbnQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gbmV3IFBhZ2VtYXJrTW9kZWwoKSk7XG5cbiAgICAgICAgdGhpcy50aHVtYm5haWxQYWdlbWFya0NvbXBvbmVudE1hbmFnZXJcbiAgICAgICAgICAgID0gbmV3IENvbXBvbmVudE1hbmFnZXIobW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUaHVtYm5haWxDb250YWluZXJQcm92aWRlcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBuZXcgVGh1bWJuYWlsUGFnZW1hcmtDb21wb25lbnQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gbmV3IFBhZ2VtYXJrTW9kZWwoKSk7XG5cblxuICAgICAgICB0aGlzLnByb2dyZXNzVmlldyA9IG5ldyBQcm9ncmVzc1ZpZXcodGhpcy5tb2RlbCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucHJpbWFyeVBhZ2VtYXJrQ29tcG9uZW50TWFuYWdlcikge1xuICAgICAgICAgICAgdGhpcy5wcmltYXJ5UGFnZW1hcmtDb21wb25lbnRNYW5hZ2VyLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50aHVtYm5haWxQYWdlbWFya0NvbXBvbmVudE1hbmFnZXIpIHtcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsUGFnZW1hcmtDb21wb25lbnRNYW5hZ2VyLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2dyZXNzVmlldy5zdGFydCgpO1xuXG4gICAgfVxuXG59XG4iXX0=