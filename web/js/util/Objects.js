"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Objects {
    static defaults(current, defaults) {
        let result = current;
        if (!result) {
            result = {};
        }
        for (const key in defaults) {
            if (defaults.hasOwnProperty(key) && !result.hasOwnProperty(key)) {
                result[key] = defaults[key];
            }
        }
        return result;
    }
    static clear(obj) {
        if (obj instanceof Array) {
            for (let idx = 0; idx < obj.length; ++idx) {
                obj.pop();
            }
            return obj;
        }
        if (typeof obj === "object") {
            for (const key in obj) {
                delete obj[key];
            }
            return obj;
        }
        throw new Error("Only works for arrays or objects");
    }
    static duplicate(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    static create(proto) {
        return Object.create(proto);
    }
    static createInstance(prototype, val) {
        let result = Objects.create(prototype);
        Object.assign(result, val);
        return result;
    }
    static typedKeys(obj) {
        return Object.keys(obj);
    }
}
exports.Objects = Objects;
function create(proto) {
    return Object.create(proto);
}
function createInstance(prototype, val) {
    let result = create(prototype);
    Object.assign(result, val);
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFhLE9BQU87SUFLVCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQVksRUFBRSxRQUFhO1FBRTlDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1QsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNmO1FBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxRQUFRLEVBQUU7WUFFeEIsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDOUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMvQjtTQUNKO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztJQVFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBUTtRQUV4QixJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7WUFFdEIsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUU7Z0JBQ3ZDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNiO1lBRUQsT0FBTyxHQUFHLENBQUM7U0FFZDtRQUVELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBRXpCLEtBQUssTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFO2dCQUNuQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuQjtZQUVELE9BQU8sR0FBRyxDQUFDO1NBRWQ7UUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFFeEQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBUTtRQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFJLEtBQVU7UUFDOUIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFNRCxNQUFNLENBQUMsY0FBYyxDQUFJLFNBQVksRUFBRSxHQUFRO1FBQzNDLElBQUksTUFBTSxHQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0IsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTLENBQUksR0FBTTtRQUU3QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFxQixDQUFDO0lBQ2hELENBQUM7Q0FHSjtBQWhGRCwwQkFnRkM7QUFHRCxTQUFTLE1BQU0sQ0FBSSxLQUFVO0lBQ3pCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUksU0FBWSxFQUFFLEdBQVE7SUFDN0MsSUFBSSxNQUFNLEdBQU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgT2JqZWN0cyB7XG5cbiAgICAvKipcbiAgICAgKiBUYWtlIHRoZSBjdXJyZW50IG9iamVjdCwgYW5kIHVzZSBnaXZlbiBvYmplY3QgYXMgYSBzZXQgb2YgZGVmYXVsdHMuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0cyhjdXJyZW50OiBhbnksIGRlZmF1bHRzOiBhbnkpIHtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gY3VycmVudDtcblxuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgcmVzdWx0ID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkZWZhdWx0cykge1xuXG4gICAgICAgICAgICBpZiAoZGVmYXVsdHMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhIHJlc3VsdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBkZWZhdWx0c1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIGFuIGFycmF5IG9yIGRpY3Rpb25hcnkgb2YgYWxsIGl0cyB2YWx1ZXMgc28gaXQgaXMgcmVzZXQuXG4gICAgICogVGhpcyBtb2RpZmllcyB0aGUgb2JqZWN0IGRpcmVjdGx5LlxuICAgICAqXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXIob2JqOiBhbnkpIHtcblxuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgb2JqLmxlbmd0aDsgKytpZHgpIHtcbiAgICAgICAgICAgICAgICBvYmoucG9wKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiKSB7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG9iajtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25seSB3b3JrcyBmb3IgYXJyYXlzIG9yIG9iamVjdHNcIik7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGR1cGxpY2F0ZShvYmo6IGFueSkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZTxUPihwcm90bzogYW55KTogVCB7XG4gICAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKHByb3RvKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgYW4gb2JqZWN0IGZyb20gaXRzIHByb3RvdHlwZSBhbmQgdXNlIHNvbWUgVHlwZXNjcmlwdFxuICAgICAqIGdlbmVyaWMgcHJvbW90aW9uIHRvIG1ha2UgaXQgd29yayBwcm9wZXJseS5cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlSW5zdGFuY2U8VD4ocHJvdG90eXBlOiBULCB2YWw6IGFueSkge1xuICAgICAgICBsZXQgcmVzdWx0OiBUID0gT2JqZWN0cy5jcmVhdGUocHJvdG90eXBlKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIHZhbCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB0eXBlZEtleXM8VD4ob2JqOiBUKTogQXJyYXk8KGtleW9mIFQpPiB7XG4gICAgICAgIC8vIHR5cGUgY2FzdCBzaG91bGQgYmUgc2FmZSBiZWNhdXNlIHRoYXQncyB3aGF0IHJlYWxseSBPYmplY3Qua2V5cygpIGRvZXNcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikgYXMgQXJyYXk8KGtleW9mIFQpPjtcbiAgICB9XG5cblxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZTxUPihwcm90bzogYW55KTogVCB7XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUocHJvdG8pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZTxUPihwcm90b3R5cGU6IFQsIHZhbDogYW55KSB7XG4gICAgbGV0IHJlc3VsdDogVCA9IGNyZWF0ZShwcm90b3R5cGUpO1xuICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCB2YWwpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbiJdfQ==