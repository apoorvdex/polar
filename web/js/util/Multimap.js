"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayListMultimap {
    constructor() {
        this.backing = [];
    }
    clear() {
        this.backing = [];
    }
    containsKey(key) {
        return this.backing
            .filter(entry => entry.key === key)
            .length > 0;
    }
    containsValue(value) {
        return this.backing
            .filter(entry => entry.value === value)
            .length > 0;
    }
    containsEntry(key, value) {
        return this.backing
            .filter(entry => entry.key === key && entry.value === value)
            .length > 0;
    }
    delete(key, value) {
        const temp = this.backing;
        this.backing = this.backing
            .filter(entry => {
            if (value) {
                return entry.key !== key || entry.value !== value;
            }
            return entry.key !== key;
        });
        return temp.length !== this.backing.length;
    }
    get entries() {
        return this.backing;
    }
    get(key) {
        return this.backing
            .filter(entry => entry.key === key)
            .map(entry => entry.value);
    }
    keys() {
        return Array.from(new Set(this.backing.map(entry => entry.key)));
    }
    put(key, value) {
        this.backing.push(new MultimapEntry(key, value));
        return this.backing;
    }
}
exports.ArrayListMultimap = ArrayListMultimap;
class MultimapEntry {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGltYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNdWx0aW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVlBLE1BQWEsaUJBQWlCO0lBQTlCO1FBRVksWUFBTyxHQUErQixFQUFFLENBQUM7SUF5RHJELENBQUM7SUF2RFUsS0FBSztRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxXQUFXLENBQUMsR0FBTTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPO2FBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUM7YUFDbEMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQVE7UUFDekIsT0FBTyxJQUFJLENBQUMsT0FBTzthQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDO2FBQ3RDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLGFBQWEsQ0FBQyxHQUFNLEVBQUUsS0FBUTtRQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPO2FBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7YUFDM0QsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQU0sRUFBRSxLQUFTO1FBQzNCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTzthQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFWixJQUFJLEtBQUssRUFBRTtnQkFDUCxPQUFPLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDO2FBQ3JEO1lBQ0QsT0FBTyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVQLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUUvQyxDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxHQUFHLENBQUMsR0FBTTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQzthQUNsQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLElBQUk7UUFDUCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTSxHQUFHLENBQUMsR0FBTSxFQUFFLEtBQVE7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Q0FDSjtBQTNERCw4Q0EyREM7QUFFRCxNQUFNLGFBQWE7SUFDZixZQUFxQixHQUFNLEVBQVcsS0FBUTtRQUF6QixRQUFHLEdBQUgsR0FBRyxDQUFHO1FBQVcsVUFBSyxHQUFMLEtBQUssQ0FBRztJQUFHLENBQUM7Q0FDckQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIE11bHRpbWFwPEssIFY+IHtcbiAgICBjbGVhcigpOiB2b2lkO1xuICAgIGNvbnRhaW5zS2V5KGtleTogSyk6IGJvb2xlYW47XG4gICAgY29udGFpbnNWYWx1ZSh2YWx1ZTogVik6IGJvb2xlYW47XG4gICAgY29udGFpbnNFbnRyeShrZXk6IEssIHZhbHVlOiBWKTogYm9vbGVhbjtcbiAgICBkZWxldGUoa2V5OiBLLCB2YWx1ZT86IFYpOiBib29sZWFuO1xuICAgIGVudHJpZXM6IFJlYWRvbmx5QXJyYXk8TXVsdGltYXBFbnRyeTxLLCBWPj47XG4gICAgZ2V0KGtleTogSyk6IFZbXTtcbiAgICBrZXlzKCk6IFJlYWRvbmx5QXJyYXk8Sz47XG4gICAgcHV0KGtleTogSywgdmFsdWU6IFYpOiBSZWFkb25seUFycmF5PE11bHRpbWFwRW50cnk8SywgVj4+O1xufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlMaXN0TXVsdGltYXA8SywgVj4gaW1wbGVtZW50cyBNdWx0aW1hcDxLLCBWPiB7XG5cbiAgICBwcml2YXRlIGJhY2tpbmc6IEFycmF5PE11bHRpbWFwRW50cnk8SywgVj4+ID0gW107XG5cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFja2luZyA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb250YWluc0tleShrZXk6IEspOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2luZ1xuICAgICAgICAgICAgLmZpbHRlcihlbnRyeSA9PiBlbnRyeS5rZXkgPT09IGtleSlcbiAgICAgICAgICAgIC5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb250YWluc1ZhbHVlKHZhbHVlOiBWKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tpbmdcbiAgICAgICAgICAgIC5maWx0ZXIoZW50cnkgPT4gZW50cnkudmFsdWUgPT09IHZhbHVlKVxuICAgICAgICAgICAgLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnRhaW5zRW50cnkoa2V5OiBLLCB2YWx1ZTogVik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5iYWNraW5nXG4gICAgICAgICAgICAuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LmtleSA9PT0ga2V5ICYmIGVudHJ5LnZhbHVlID09PSB2YWx1ZSlcbiAgICAgICAgICAgIC5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGUoa2V5OiBLLCB2YWx1ZT86IFYpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMuYmFja2luZztcbiAgICAgICAgdGhpcy5iYWNraW5nID0gdGhpcy5iYWNraW5nXG4gICAgICAgICAgICAuZmlsdGVyKGVudHJ5ID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50cnkua2V5ICE9PSBrZXkgfHwgZW50cnkudmFsdWUgIT09IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cnkua2V5ICE9PSBrZXk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVtcC5sZW5ndGggIT09IHRoaXMuYmFja2luZy5sZW5ndGg7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGVudHJpZXMoKTogUmVhZG9ubHlBcnJheTxNdWx0aW1hcEVudHJ5PEssIFY+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tpbmc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldChrZXk6IEspOiBWW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5iYWNraW5nXG4gICAgICAgICAgICAuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LmtleSA9PT0ga2V5KVxuICAgICAgICAgICAgLm1hcChlbnRyeSA9PiBlbnRyeS52YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGtleXMoKTogUmVhZG9ubHlBcnJheTxLPiB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5iYWNraW5nLm1hcChlbnRyeSA9PiBlbnRyeS5rZXkpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHB1dChrZXk6IEssIHZhbHVlOiBWKTogQXJyYXk8TXVsdGltYXBFbnRyeTxLLCBWPj4ge1xuICAgICAgICB0aGlzLmJhY2tpbmcucHVzaChuZXcgTXVsdGltYXBFbnRyeShrZXksIHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tpbmc7XG4gICAgfVxufVxuXG5jbGFzcyBNdWx0aW1hcEVudHJ5PEssIFY+IHtcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBrZXk6IEssIHJlYWRvbmx5IHZhbHVlOiBWKSB7fVxufVxuIl19