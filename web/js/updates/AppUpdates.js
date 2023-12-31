"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Platforms_1 = require("../util/Platforms");
const DistConfig_1 = require("../dist_config/DistConfig");
class AppUpdates {
    static platformSupportsUpdates() {
        return [Platforms_1.Platform.MACOS, Platforms_1.Platform.WINDOWS].includes(Platforms_1.Platforms.get()) && DistConfig_1.DistConfig.ENABLE_UPDATES;
    }
}
exports.AppUpdates = AppUpdates;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwVXBkYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFwcFVwZGF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBc0Q7QUFDdEQsMERBQXFEO0FBRXJELE1BQWEsVUFBVTtJQUVaLE1BQU0sQ0FBQyx1QkFBdUI7UUFFakMsT0FBTyxDQUFDLG9CQUFRLENBQUMsS0FBSyxFQUFFLG9CQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1QkFBVSxDQUFDLGNBQWMsQ0FBQztJQUVyRyxDQUFDO0NBRUo7QUFSRCxnQ0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGxhdGZvcm0sIFBsYXRmb3Jtc30gZnJvbSAnLi4vdXRpbC9QbGF0Zm9ybXMnO1xuaW1wb3J0IHtEaXN0Q29uZmlnfSBmcm9tICcuLi9kaXN0X2NvbmZpZy9EaXN0Q29uZmlnJztcblxuZXhwb3J0IGNsYXNzIEFwcFVwZGF0ZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBwbGF0Zm9ybVN1cHBvcnRzVXBkYXRlcygpIHtcblxuICAgICAgICByZXR1cm4gW1BsYXRmb3JtLk1BQ09TLCBQbGF0Zm9ybS5XSU5ET1dTXS5pbmNsdWRlcyhQbGF0Zm9ybXMuZ2V0KCkpICYmIERpc3RDb25maWcuRU5BQkxFX1VQREFURVM7XG5cbiAgICB9XG5cbn1cbiJdfQ==