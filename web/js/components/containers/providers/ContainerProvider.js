"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = require("../Container");
class ContainerProvider {
    getContainers() {
        throw new Error("Not implemented");
    }
    _getContainers(selector) {
        let result = {};
        let elements = Array.from(document.querySelectorAll(selector));
        elements.forEach(element => {
            let id = parseInt(element.getAttribute("data-page-number"));
            let container = new Container_1.Container({ id, element });
            result[id] = container;
        });
        return result;
    }
    createContainerLifecycleListener(container) {
        throw new Error("Not implemented");
    }
}
exports.ContainerProvider = ContainerProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyUHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250YWluZXJQcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDRDQUF1QztBQUd2QyxNQUFhLGlCQUFpQjtJQVExQixhQUFhO1FBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFNRCxjQUFjLENBQUMsUUFBZ0I7UUFFM0IsSUFBSSxNQUFNLEdBQStCLEVBQUUsQ0FBQztRQUU1QyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRS9ELFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUUsQ0FBQyxDQUFDO1lBQzdELElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxFQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0lBTUQsZ0NBQWdDLENBQUMsU0FBb0I7UUFDakQsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FFSjtBQXhDRCw4Q0F3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhYnN0cmFjdFxuICovXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi4vQ29udGFpbmVyJztcbmltcG9ydCB7Q29udGFpbmVyTGlmZWN5Y2xlTGlzdGVuZXJ9IGZyb20gJy4uL2xpZmVjeWNsZS9Db250YWluZXJMaWZlY3ljbGVMaXN0ZW5lcic7XG5cbmV4cG9ydCBjbGFzcyBDb250YWluZXJQcm92aWRlciB7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYWxsIGNvbnRhaW5lcnMgaW4gdGhlIGRvY3VtZW50IGluZGV4ZWQgYnkgdGhlaXIgSUQuICBGb3IgcGFnZXNcbiAgICAgKiBhbmQgdGh1bWJuYWlscyB0aGlzIGlzIGp1c3QgZ29pbmcgdG8gYmUgdGhlIHBhZ2UgbnVtYmVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0PG51bWJlcixDb250YWluZXI+fVxuICAgICAqL1xuICAgIGdldENvbnRhaW5lcnMoKToge1trZXk6IG51bWJlcl06IENvbnRhaW5lcn0ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3Q8bnVtYmVyLENvbnRhaW5lcj59XG4gICAgICovXG4gICAgX2dldENvbnRhaW5lcnMoc2VsZWN0b3I6IHN0cmluZykge1xuXG4gICAgICAgIGxldCByZXN1bHQ6IHtba2V5OiBudW1iZXJdOiBDb250YWluZXJ9ID0ge307XG5cbiAgICAgICAgbGV0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGxldCBpZCA9IHBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYWdlLW51bWJlclwiKSEpO1xuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoe2lkLCBlbGVtZW50IH0pO1xuICAgICAgICAgICAgcmVzdWx0W2lkXSA9IGNvbnRhaW5lcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUge0NvbnRhaW5lckxpZmVjeWNsZUxpc3RlbmVyfSB0byB1c2Ugd2l0aCB0aGUgY29udGFpbmVyIHR5cGVzLlxuICAgICAqXG4gICAgICovXG4gICAgY3JlYXRlQ29udGFpbmVyTGlmZWN5Y2xlTGlzdGVuZXIoY29udGFpbmVyOiBDb250YWluZXIpOiBDb250YWluZXJMaWZlY3ljbGVMaXN0ZW5lciB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgICB9XG5cbn1cbiJdfQ==