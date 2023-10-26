"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextType_1 = require("./TextType");
const VersionedObject_1 = require("./VersionedObject");
const Texts_1 = require("./Texts");
class Note extends VersionedObject_1.VersionedObject {
    constructor(val) {
        super(val);
        this.content = val.content;
        this.init(val);
    }
    setup() {
        if (!this.content) {
            this.content = Texts_1.Texts.create("", TextType_1.TextType.HTML);
        }
    }
    validate() {
        if (!this.created) {
            throw new Error("The field `created` is required.");
        }
    }
}
exports.Note = Note;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5vdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBb0M7QUFDcEMsdURBQWtEO0FBRWxELG1DQUE4QjtBQUs5QixNQUFhLElBQUssU0FBUSxpQ0FBZTtJQU9yQyxZQUFZLEdBQVM7UUFFakIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVgsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBRTNCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbkIsQ0FBQztJQUVNLEtBQUs7UUFFUixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsbUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsRDtJQUVMLENBQUM7SUFFTSxRQUFRO1FBRVgsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDdkQ7SUFFTCxDQUFDO0NBRUo7QUFqQ0Qsb0JBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXh0VHlwZX0gZnJvbSAnLi9UZXh0VHlwZSc7XG5pbXBvcnQge1ZlcnNpb25lZE9iamVjdH0gZnJvbSAnLi9WZXJzaW9uZWRPYmplY3QnO1xuaW1wb3J0IHtUZXh0fSBmcm9tICcuL1RleHQnO1xuaW1wb3J0IHtUZXh0c30gZnJvbSAnLi9UZXh0cyc7XG5cbi8qKlxuICogUHJpdmF0ZSBub3RlIGRlc2NyaWJpbmcgdGhpcyBvYmplY3QuICBNZWFudCB0byBsYXN0IGEgbG9uZyB0aW1lLlxuICovXG5leHBvcnQgY2xhc3MgTm90ZSBleHRlbmRzIFZlcnNpb25lZE9iamVjdCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGlzIG5vdGUuXG4gICAgICovXG4gICAgcHVibGljIGNvbnRlbnQ6IFRleHQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWw6IE5vdGUpIHtcblxuICAgICAgICBzdXBlcih2YWwpO1xuXG4gICAgICAgIHRoaXMuY29udGVudCA9IHZhbC5jb250ZW50O1xuXG4gICAgICAgIHRoaXMuaW5pdCh2YWwpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNldHVwKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5jb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBUZXh0cy5jcmVhdGUoXCJcIiwgVGV4dFR5cGUuSFRNTCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyB2YWxpZGF0ZSgpIHtcblxuICAgICAgICBpZighdGhpcy5jcmVhdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZmllbGQgYGNyZWF0ZWRgIGlzIHJlcXVpcmVkLlwiKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=