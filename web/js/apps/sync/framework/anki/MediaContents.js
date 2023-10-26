"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Optional_1 = require("../../../../util/ts/Optional");
const Hashcodes_1 = require("../../../../Hashcodes");
class MediaContents {
    static parse(content) {
        const mediaFiles = [];
        const re = /src=["'](data:image\/(gif|jpg|png);base64,[^"']+)/g;
        content = content.replace(re, (match, p1) => {
            const mediaFile = MediaContents.toMediaFile(p1);
            mediaFiles.push(mediaFile.get());
            return match.replace(p1, mediaFile.get().filename);
        });
        return {
            content, mediaFiles
        };
    }
    static toMediaFile(dataURL) {
        const re = /data:image\/(gif|jpg|png);base64,([^"']+)/;
        const m = re.exec(dataURL);
        if (m) {
            const type = m[1];
            const data = m[2];
            const name = Hashcodes_1.Hashcodes.createID(data, 20);
            const filename = `${name}.${type}`;
            return Optional_1.Optional.of({ filename, data });
        }
        return Optional_1.Optional.empty();
    }
}
exports.MediaContents = MediaContents;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFDb250ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1lZGlhQ29udGVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBc0Q7QUFDdEQscURBQWdEO0FBSWhELE1BQWEsYUFBYTtJQUVmLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBZTtRQUUvQixNQUFNLFVBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBRW5DLE1BQU0sRUFBRSxHQUFHLG9EQUFvRCxDQUFDO1FBRWhFLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUV4QyxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWhELFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFakMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdkQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0gsT0FBTyxFQUFFLFVBQVU7U0FDdEIsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQWU7UUFFckMsTUFBTSxFQUFFLEdBQUcsMkNBQTJDLENBQUM7UUFDdkQsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsRUFBRTtZQUVILE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbEIsTUFBTSxJQUFJLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sUUFBUSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1lBRW5DLE9BQU8sbUJBQVEsQ0FBQyxFQUFFLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztTQUV4QztRQUVELE9BQU8sbUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUU1QixDQUFDO0NBRUo7QUE3Q0Qsc0NBNkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge0hhc2hjb2Rlc30gZnJvbSAnLi4vLi4vLi4vLi4vSGFzaGNvZGVzJztcbmltcG9ydCB7TWVkaWFGaWxlfSBmcm9tICcuL2NsaWVudHMvU3RvcmVNZWRpYUZpbGVDbGllbnQnO1xuaW1wb3J0IHtNZWRpYUNvbnRlbnR9IGZyb20gJy4vTWVkaWFDb250ZW50JztcblxuZXhwb3J0IGNsYXNzIE1lZGlhQ29udGVudHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZShjb250ZW50OiBzdHJpbmcpOiBNZWRpYUNvbnRlbnQge1xuXG4gICAgICAgIGNvbnN0IG1lZGlhRmlsZXM6IE1lZGlhRmlsZVtdID0gW107XG5cbiAgICAgICAgY29uc3QgcmUgPSAvc3JjPVtcIiddKGRhdGE6aW1hZ2VcXC8oZ2lmfGpwZ3xwbmcpO2Jhc2U2NCxbXlwiJ10rKS9nO1xuXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UocmUsIChtYXRjaCwgcDEpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgbWVkaWFGaWxlID0gTWVkaWFDb250ZW50cy50b01lZGlhRmlsZShwMSk7XG5cbiAgICAgICAgICAgIG1lZGlhRmlsZXMucHVzaChtZWRpYUZpbGUuZ2V0KCkpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2gucmVwbGFjZShwMSwgbWVkaWFGaWxlLmdldCgpLmZpbGVuYW1lKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGVudCwgbWVkaWFGaWxlc1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB0b01lZGlhRmlsZShkYXRhVVJMOiBzdHJpbmcpOiBPcHRpb25hbDxNZWRpYUZpbGU+IHtcblxuICAgICAgICBjb25zdCByZSA9IC9kYXRhOmltYWdlXFwvKGdpZnxqcGd8cG5nKTtiYXNlNjQsKFteXCInXSspLztcbiAgICAgICAgY29uc3QgbSA9IHJlLmV4ZWMoZGF0YVVSTCk7XG5cbiAgICAgICAgaWYgKG0pIHtcblxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IG1bMV07XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbVsyXTtcblxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IEhhc2hjb2Rlcy5jcmVhdGVJRChkYXRhLCAyMCk7XG4gICAgICAgICAgICBjb25zdCBmaWxlbmFtZSA9IGAke25hbWV9LiR7dHlwZX1gO1xuXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yoe2ZpbGVuYW1lLCBkYXRhfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuXG4gICAgfVxuXG59XG4iXX0=