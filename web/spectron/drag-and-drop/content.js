"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
function onDragEnterOrOver(event) {
    event.preventDefault();
}
function onDrop(event) {
    console.log("drop: ", event);
    console.log("drop: NR files", event.dataTransfer.files.length);
    console.log("drop: NR items", event.dataTransfer.items.length);
    for (const file of Array.from(event.dataTransfer.files)) {
        console.log("FIXME: ", file);
        console.log("FIXME: " + file.path);
    }
    for (const item of Array.from(event.dataTransfer.items)) {
        console.log("FIXME: dataTransferItem: ", item);
    }
    if (event.dataTransfer.effectAllowed === 'copyLink') {
        const link = event.dataTransfer.getData('text/plain');
        console.log("FIXME: link ", link);
        console.log("FIXME0: ", event.dataTransfer.getData('text/plain'));
        console.log("FIXME1: ", event.dataTransfer.getData('text/html'));
        console.log("FIXME2: ", event.dataTransfer.getData('URL'));
    }
}
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    document.body.addEventListener('drop', event => onDrop(event));
    document.body.addEventListener('dragover', event => {
        console.log("dragover: ", event);
    });
    document.body.addEventListener('dragenter', (event) => onDragEnterOrOver(event));
    document.body.addEventListener('dragover', (event) => onDragEnterOrOver(event));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFFQUFnRTtBQUVoRSxTQUFTLGlCQUFpQixDQUFDLEtBQWdCO0lBRXZDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMzQixDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsS0FBZ0I7SUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsWUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxZQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWhFLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QztJQUVELEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FFbEQ7SUFFRCxJQUFJLEtBQUssQ0FBQyxZQUFhLENBQUMsYUFBYSxLQUFLLFVBQVUsRUFBRTtRQUVsRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsWUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV2RCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsWUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxZQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFlBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUUvRDtBQVVMLENBQUM7QUFFRCxtQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBTyxLQUFLLEVBQUUsRUFBRTtJQUVqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFJcEQsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUUvRCxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBRXBGLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uUmVuZGVyZXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25SZW5kZXJlcic7XG5cbmZ1bmN0aW9uIG9uRHJhZ0VudGVyT3JPdmVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAvLyBuZWVkZWQgdG8gdGVsbCB0aGUgYnJvd3NlciB0aGF0IG9uRHJvcCBpcyBzdXBwb3J0ZWQgaGVyZS4uLlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIG9uRHJvcChldmVudDogRHJhZ0V2ZW50KSB7XG5cbiAgICBjb25zb2xlLmxvZyhcImRyb3A6IFwiLCBldmVudCk7XG5cbiAgICBjb25zb2xlLmxvZyhcImRyb3A6IE5SIGZpbGVzXCIsIGV2ZW50LmRhdGFUcmFuc2ZlciEuZmlsZXMubGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZyhcImRyb3A6IE5SIGl0ZW1zXCIsIGV2ZW50LmRhdGFUcmFuc2ZlciEuaXRlbXMubGVuZ3RoKTtcblxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBBcnJheS5mcm9tKGV2ZW50LmRhdGFUcmFuc2ZlciEuZmlsZXMpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRklYTUU6IFwiLCBmaWxlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJGSVhNRTogXCIgKyBmaWxlLnBhdGgpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBBcnJheS5mcm9tKGV2ZW50LmRhdGFUcmFuc2ZlciEuaXRlbXMpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRklYTUU6IGRhdGFUcmFuc2Zlckl0ZW06IFwiLCBpdGVtKTtcbiAgICAgICAgLy8gaXRlbS5nZXRcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyIS5lZmZlY3RBbGxvd2VkID09PSAnY29weUxpbmsnKSB7XG5cbiAgICAgICAgY29uc3QgbGluayA9IGV2ZW50LmRhdGFUcmFuc2ZlciEuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRklYTUU6IGxpbmsgXCIsIGxpbmspO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRklYTUUwOiBcIiwgZXZlbnQuZGF0YVRyYW5zZmVyIS5nZXREYXRhKCd0ZXh0L3BsYWluJykpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZJWE1FMTogXCIsIGV2ZW50LmRhdGFUcmFuc2ZlciEuZ2V0RGF0YSgndGV4dC9odG1sJykpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZJWE1FMjogXCIsIGV2ZW50LmRhdGFUcmFuc2ZlciEuZ2V0RGF0YSgnVVJMJykpO1xuXG4gICAgfVxuXG4gICAgLy8gRklYTUU6IGRyYWdnZWQgSFRNTCBoYXMgdHlwZSBvZiB0ZXh0L2h0bWwgYW5kICdraW5kJyBvZiAnc3RyaW5nXG4gICAgLy9cbiAgICAvLyBXZSBjb3VsZCBwYXJzZSB0aGF0IEhUTUwgLCB0aGVuIGV4dHJhY3QgdGhlIGxpbmtzIHdpdGggdGl0bGVzLCBhbmQgd3JpdGVcbiAgICAvLyBkb2NzIGZvciB0aGVtIHRoYXQgYXJlIHByZS1yZW5kZXJlZC4uLiBidXQgcmlnaHQgbm93IHdlIGRvbid0IGFodmUgYSB3YXlcbiAgICAvLyB0byBzdGFydCBjYXB0dXJlIE9USEVSIHRoYW4gdGhlIG1lbnUuICBJbiBvcmRlciB0byBkbyB0aGlzIHdlIG5lZWQgdG8gaGF2ZSBhXG4gICAgLy8gQ29udGVudENhcHR1cmVTZXJ2aWNlIGFuZCBhIENvbnRlbnRDYXB0dXJlQ2xpZW50IHRvIHRyaWdnZXIgb25lIGZyb20gdGhlXG4gICAgLy8gcmVuZGVyZXIuLi5cblxufVxuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoc3RhdGUpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoaW4gU3BlY3Ryb25SZW5kZXJlciBub3cuXCIpO1xuICAgIC8vIHlvdSBjYW4gYWxzbyB1cGRhdGUgdGhlIHJlc3VsdCBpbiB0aGUgcmVuZGVyZXJcbiAgICAvLyBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZXZlbnQgPT4gb25Ecm9wKGV2ZW50KSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRyYWdvdmVyOiBcIiwgZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCAoZXZlbnQpID0+IG9uRHJhZ0VudGVyT3JPdmVyKGV2ZW50KSk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4gb25EcmFnRW50ZXJPck92ZXIoZXZlbnQpKTtcblxufSk7XG5cblxuIl19