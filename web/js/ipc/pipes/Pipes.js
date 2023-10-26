"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pipes {
    static when(pipe, channel) {
        return new Promise(resolve => {
            pipe.once(channel, notification => {
                resolve(notification);
            });
        });
    }
}
exports.Pipes = Pipes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQaXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQWEsS0FBSztJQUVkLE1BQU0sQ0FBQyxJQUFJLENBQU0sSUFBd0IsRUFBRSxPQUFlO1FBRXRELE9BQU8sSUFBSSxPQUFPLENBQXdCLE9BQU8sQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxFQUFFO2dCQUM5QixPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQVpELHNCQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlTm90aWZpY2F0aW9uLCBSZWFkYWJsZVBpcGV9IGZyb20gJy4vUGlwZSc7XG5cbmV4cG9ydCBjbGFzcyBQaXBlcyB7XG5cbiAgICBzdGF0aWMgd2hlbjxFLE0+KHBpcGU6IFJlYWRhYmxlUGlwZTxFLCBNPiwgY2hhbm5lbDogc3RyaW5nKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFBpcGVOb3RpZmljYXRpb248RSxNPj4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBwaXBlLm9uY2UoY2hhbm5lbCwgbm90aWZpY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5vdGlmaWNhdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==