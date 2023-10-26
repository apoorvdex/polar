"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("../Preconditions");
class Cmdline {
    static getDocArg(args) {
        return Cmdline.getArg(args, Cmdline.isDoc);
    }
    static getURLArg(args) {
        return Cmdline.getArg(args, Cmdline.isURL);
    }
    static getArg(args, filter) {
        Preconditions_1.Preconditions.assertNotNull(filter, "filter");
        if (!(args instanceof Array)) {
            throw new Error("Args not an array");
        }
        let arg = args.filter((arg) => arg != null && filter(arg))
            .reduce((accumulator, currentValue) => accumulator = currentValue != null ? currentValue : null, null);
        return arg;
    }
    static isDoc(arg) {
        return arg.endsWith(".pdf") || arg.endsWith(".chtml") || arg.endsWith(".phz");
    }
    static isURL(arg) {
        return arg.startsWith("http:") || arg.startsWith("https:") || arg.startsWith("file:");
    }
}
exports.Cmdline = Cmdline;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ21kbGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNtZGxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvREFBK0M7QUFFL0MsTUFBYSxPQUFPO0lBRWhCLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBYztRQUMzQixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFjO1FBQzNCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQWMsRUFBRSxNQUFnQztRQUUxRCw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFFLENBQUMsSUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksR0FBRyxHQUNILElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNDLE1BQU0sQ0FBQyxDQUFDLFdBQTBCLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFOUgsT0FBTyxHQUFHLENBQUM7SUFFZixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFXO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDakYsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBVztRQUNwQixPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3pGLENBQUM7Q0FFSjtBQWxDRCwwQkFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJy4uL1ByZWNvbmRpdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgQ21kbGluZSB7XG5cbiAgICBzdGF0aWMgZ2V0RG9jQXJnKGFyZ3M6IHN0cmluZ1tdKSB7XG4gICAgICAgIHJldHVybiBDbWRsaW5lLmdldEFyZyhhcmdzLCBDbWRsaW5lLmlzRG9jKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VVJMQXJnKGFyZ3M6IHN0cmluZ1tdKSB7XG4gICAgICAgIHJldHVybiBDbWRsaW5lLmdldEFyZyhhcmdzLCBDbWRsaW5lLmlzVVJMKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QXJnKGFyZ3M6IHN0cmluZ1tdLCBmaWx0ZXI6IChhcmc6IHN0cmluZykgPT4gYm9vbGVhbikge1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChmaWx0ZXIsIFwiZmlsdGVyXCIpO1xuXG4gICAgICAgIGlmICghIChhcmdzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcmdzIG5vdCBhbiBhcnJheVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhcmc6IHN0cmluZyB8IG51bGwgPVxuICAgICAgICAgICAgYXJncy5maWx0ZXIoKGFyZykgPT4gYXJnICE9IG51bGwgJiYgZmlsdGVyKGFyZykpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjdW11bGF0b3I6IHN0cmluZyB8IG51bGwsIGN1cnJlbnRWYWx1ZSkgPT4gYWNjdW11bGF0b3IgPSBjdXJyZW50VmFsdWUgIT0gbnVsbCA/IGN1cnJlbnRWYWx1ZSA6IG51bGwsIG51bGwpO1xuXG4gICAgICAgIHJldHVybiBhcmc7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgaXNEb2MoYXJnOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGFyZy5lbmRzV2l0aChcIi5wZGZcIikgfHwgYXJnLmVuZHNXaXRoKFwiLmNodG1sXCIpIHx8IGFyZy5lbmRzV2l0aChcIi5waHpcIilcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNVUkwoYXJnOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGFyZy5zdGFydHNXaXRoKFwiaHR0cDpcIikgfHwgYXJnLnN0YXJ0c1dpdGgoXCJodHRwczpcIikgfHwgYXJnLnN0YXJ0c1dpdGgoXCJmaWxlOlwiKVxuICAgIH1cblxufVxuIl19