"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Latch_1 = require("./Latch");
class Latches {
    static resolved(value) {
        const latch = new Latch_1.Latch();
        latch.resolve(value);
        return latch;
    }
}
exports.Latches = Latches;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF0Y2hlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxhdGNoZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBOEI7QUFFOUIsTUFBYSxPQUFPO0lBRVQsTUFBTSxDQUFDLFFBQVEsQ0FBSSxLQUFRO1FBQzlCLE1BQU0sS0FBSyxHQUFHLElBQUksYUFBSyxFQUFLLENBQUM7UUFDN0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBRUo7QUFSRCwwQkFRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGF0Y2h9IGZyb20gXCIuL0xhdGNoXCI7XG5cbmV4cG9ydCBjbGFzcyBMYXRjaGVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVzb2x2ZWQ8VD4odmFsdWU6IFQpIHtcbiAgICAgICAgY29uc3QgbGF0Y2ggPSBuZXcgTGF0Y2g8VD4oKTtcbiAgICAgICAgbGF0Y2gucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBsYXRjaDtcbiAgICB9XG5cbn1cbiJdfQ==