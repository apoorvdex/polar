"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileLoader_1 = require("./FileLoader");
class AnalyticsFileLoader extends FileLoader_1.FileLoader {
    constructor(delegate) {
        super();
        this.delegate = delegate;
    }
    registerForLoad(path) {
        return this.delegate.registerForLoad(path);
    }
}
exports.AnalyticsFileLoader = AnalyticsFileLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5hbHl0aWNzRmlsZUxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFuYWx5dGljc0ZpbGVMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBd0M7QUFHeEMsTUFBYSxtQkFBb0IsU0FBUSx1QkFBVTtJQUkvQyxZQUFZLFFBQW9CO1FBQzVCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVNLGVBQWUsQ0FBQyxJQUFZO1FBSy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFL0MsQ0FBQztDQUVKO0FBbEJELGtEQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmlsZUxvYWRlcn0gZnJvbSAnLi9GaWxlTG9hZGVyJztcbmltcG9ydCB7TG9hZGVkRmlsZX0gZnJvbSAnLi9Mb2FkZWRGaWxlJztcblxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc0ZpbGVMb2FkZXIgZXh0ZW5kcyBGaWxlTG9hZGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVsZWdhdGU6IEZpbGVMb2FkZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogRmlsZUxvYWRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRm9yTG9hZChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPExvYWRlZEZpbGU+IHtcblxuICAgICAgICAvLyBUT0RPOiByZW1vdmUgdGhpcyBpbiB0aGUgZnV0dXJlIGFzIHdlJ3JlIG5vdCBsb25nZXIgdXNpbmcgdGhlXG4gICAgICAgIC8vIG1haW4gcHJvY2UgYW5hbHl0aWNzLlxuXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLnJlZ2lzdGVyRm9yTG9hZChwYXRoKTtcblxuICAgIH1cblxufVxuIl19