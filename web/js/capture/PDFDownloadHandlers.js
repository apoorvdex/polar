"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FilePaths_1 = require("../util/FilePaths");
const ToasterMessages_1 = require("../ui/toaster/ToasterMessages");
const Toaster_1 = require("../ui/toaster/Toaster");
const ProgressTracker_1 = require("../util/ProgressTracker");
const ProgressMessages_1 = require("../ui/progress_bar/ProgressMessages");
const FileImportClient_1 = require("../apps/repository/FileImportClient");
const Logger_1 = require("../logger/Logger");
const Functions_1 = require("../util/Functions");
const FileImportRequests_1 = require("../apps/repository/FileImportRequests");
const log = Logger_1.Logger.create();
class PDFDownloadHandlers {
    static create(webContents, onDownloaded = Functions_1.NULL_FUNCTION, onDownload = Functions_1.NULL_FUNCTION) {
        const willDownloadHandler = (event, downloadItem, downloadWebContents) => {
            log.info("Going to to download: ", downloadItem.getURL());
            const mimeType = downloadItem.getMimeType();
            const basename = FilePaths_1.FilePaths.basename(downloadItem.getURL());
            const tmpPath = FilePaths_1.FilePaths.createTempName(basename);
            log.info("Download PDF file to " + tmpPath);
            ToasterMessages_1.ToasterMessages.send({ type: Toaster_1.ToasterMessageType.INFO, message: "PDF download starting for " + basename });
            downloadItem.setSavePath(tmpPath);
            const progressTracker = new ProgressTracker_1.ProgressTracker(downloadItem.getTotalBytes(), 'download:' + basename);
            downloadItem.once('done', (event, state) => {
                ProgressMessages_1.ProgressMessages.broadcast(progressTracker.terminate());
                const message = `PDF download ${state} for ${basename}`;
                switch (state) {
                    case 'completed':
                        ToasterMessages_1.ToasterMessages.send({ type: Toaster_1.ToasterMessageType.SUCCESS, message });
                        FileImportClient_1.FileImportClient.send(FileImportRequests_1.FileImportRequests.fromPath(tmpPath));
                        break;
                    case 'cancelled':
                        ToasterMessages_1.ToasterMessages.send({ type: Toaster_1.ToasterMessageType.WARNING, message });
                        break;
                    case 'interrupted':
                        ToasterMessages_1.ToasterMessages.send({ type: Toaster_1.ToasterMessageType.WARNING, message });
                        break;
                }
                onDownloaded();
            });
            downloadItem.on('updated', () => {
                const progress = progressTracker.abs(downloadItem.getReceivedBytes());
                ProgressMessages_1.ProgressMessages.broadcast(progress);
            });
            onDownload();
        };
        const session = webContents.session;
        session.addListener('will-download', willDownloadHandler);
        webContents.on('destroyed', () => {
            session.removeListener('will-download', willDownloadHandler);
        });
    }
}
exports.PDFDownloadHandlers = PDFDownloadHandlers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUERGRG93bmxvYWRIYW5kbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBERkRvd25sb2FkSGFuZGxlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxpREFBNEM7QUFDNUMsbUVBQThEO0FBQzlELG1EQUF5RDtBQUN6RCw2REFBd0Q7QUFDeEQsMEVBQXFFO0FBQ3JFLDBFQUFxRTtBQUVyRSw2Q0FBd0M7QUFDeEMsaURBQWdEO0FBQ2hELDhFQUF5RTtBQUV6RSxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxtQkFBbUI7SUFRckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUF3QixFQUN4QixlQUEyQix5QkFBYSxFQUN4QyxhQUF5Qix5QkFBYTtRQU12RCxNQUFNLG1CQUFtQixHQUFHLENBQUMsS0FBWSxFQUNaLFlBQTBCLEVBQzFCLG1CQUFnQyxFQUFFLEVBQUU7WUFFN0QsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUUxRCxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFPNUMsTUFBTSxRQUFRLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDM0QsTUFBTSxPQUFPLEdBQUcscUJBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFNbkQsR0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUU1QyxpQ0FBZSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSw0QkFBa0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixHQUFHLFFBQVEsRUFBQyxDQUFDLENBQUM7WUFFeEcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVsQyxNQUFNLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQztZQUVsRyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFHdkMsbUNBQWdCLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2dCQUV4RCxNQUFNLE9BQU8sR0FBRyxnQkFBZ0IsS0FBSyxRQUFRLFFBQVEsRUFBRSxDQUFDO2dCQUV4RCxRQUFRLEtBQUssRUFBRTtvQkFFWCxLQUFLLFdBQVc7d0JBQ1osaUNBQWUsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsNEJBQWtCLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7d0JBQ2xFLG1DQUFnQixDQUFDLElBQUksQ0FBQyx1Q0FBa0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFFNUQsTUFBTTtvQkFFVixLQUFLLFdBQVc7d0JBQ1osaUNBQWUsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsNEJBQWtCLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7d0JBQ2xFLE1BQU07b0JBRVYsS0FBSyxhQUFhO3dCQUNkLGlDQUFlLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLDRCQUFrQixDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO3dCQUNsRSxNQUFNO2lCQUViO2dCQUVELFlBQVksRUFBRSxDQUFDO1lBRW5CLENBQUMsQ0FBQyxDQUFDO1lBRUgsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO2dCQUU1QixNQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7Z0JBQ3RFLG1DQUFnQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV6QyxDQUFDLENBQUMsQ0FBQztZQUVILFVBQVUsRUFBRSxDQUFDO1FBRWpCLENBQUMsQ0FBQztRQUVGLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFFcEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUUxRCxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7WUFDN0IsT0FBTyxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQTlGRCxrREE4RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJXaW5kb3csIERvd25sb2FkSXRlbSwgV2ViQ29udGVudHN9IGZyb20gXCJlbGVjdHJvblwiO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7VG9hc3Rlck1lc3NhZ2VzfSBmcm9tICcuLi91aS90b2FzdGVyL1RvYXN0ZXJNZXNzYWdlcyc7XG5pbXBvcnQge1RvYXN0ZXJNZXNzYWdlVHlwZX0gZnJvbSAnLi4vdWkvdG9hc3Rlci9Ub2FzdGVyJztcbmltcG9ydCB7UHJvZ3Jlc3NUcmFja2VyfSBmcm9tICcuLi91dGlsL1Byb2dyZXNzVHJhY2tlcic7XG5pbXBvcnQge1Byb2dyZXNzTWVzc2FnZXN9IGZyb20gJy4uL3VpL3Byb2dyZXNzX2Jhci9Qcm9ncmVzc01lc3NhZ2VzJztcbmltcG9ydCB7RmlsZUltcG9ydENsaWVudH0gZnJvbSAnLi4vYXBwcy9yZXBvc2l0b3J5L0ZpbGVJbXBvcnRDbGllbnQnO1xuaW1wb3J0IHtBcHBMYXVuY2hlcn0gZnJvbSAnLi4vYXBwcy9tYWluL0FwcExhdW5jaGVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSBcIi4uL3V0aWwvRnVuY3Rpb25zXCI7XG5pbXBvcnQge0ZpbGVJbXBvcnRSZXF1ZXN0c30gZnJvbSAnLi4vYXBwcy9yZXBvc2l0b3J5L0ZpbGVJbXBvcnRSZXF1ZXN0cyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFBERkRvd25sb2FkSGFuZGxlcnMge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2ViQ29udGVudHMgIFRoZSB3ZWJDb250ZW50cyB3aGljaCBuZWVkcyBkb3dubG9hZCBzdXBwb3J0LlxuICAgICAqIEBwYXJhbSBvbkRvd25sb2FkZWQgQ2FsbGVkIHdoZW4gdGhlIGRvd25sb2FkIGlzIGNvbXBsZXRlLlxuICAgICAqIEBwYXJhbSBvbkRvd25sb2FkIENhbGxlZCB3aGVuIHRoZSBkb3dubG9hZCBpcyBzdGFydGVkXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUod2ViQ29udGVudHM6IFdlYkNvbnRlbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uRG93bmxvYWRlZDogKCkgPT4gdm9pZCA9IE5VTExfRlVOQ1RJT04sXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25Eb3dubG9hZDogKCkgPT4gdm9pZCA9IE5VTExfRlVOQ1RJT04pIHtcblxuICAgICAgICAvLyBUT0RPOiBtaWdodCBub3QgZXZlbiBuZWVkIHRoaXMgaGFuZGxlciBoZXJlIGlmIHdlIGhhbmRsZSBpdCBpblxuICAgICAgICAvLyB0aGUgQVBJIGFuZCBsb29rIGF0IHRoZSBtaW1lVHlwZSB0aGVyZSB3aGljaCBpcyBhIGJldHRlciB3YXlcbiAgICAgICAgLy8gdG8gaGFuZGxlIHRoaXMuXG5cbiAgICAgICAgY29uc3Qgd2lsbERvd25sb2FkSGFuZGxlciA9IChldmVudDogRXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRJdGVtOiBEb3dubG9hZEl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRXZWJDb250ZW50czogV2ViQ29udGVudHMpID0+IHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJHb2luZyB0byB0byBkb3dubG9hZDogXCIsIGRvd25sb2FkSXRlbS5nZXRVUkwoKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1pbWVUeXBlID0gZG93bmxvYWRJdGVtLmdldE1pbWVUeXBlKCk7XG5cbiAgICAgICAgICAgIC8vIGlmIChtaW1lVHlwZSAhPT0gJ2FwcGxpY2F0aW9uL3BkZicpIHtcbiAgICAgICAgICAgIC8vICAgICBsb2cud2FybihcIkRvd25sb2FkaW5nIFBERiBhbmQgdW5hYmxlIHRvIGhhbmRsZTogXCIgKyBtaW1lVHlwZSk7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICBjb25zdCBiYXNlbmFtZSA9IEZpbGVQYXRocy5iYXNlbmFtZShkb3dubG9hZEl0ZW0uZ2V0VVJMKCkpO1xuICAgICAgICAgICAgY29uc3QgdG1wUGF0aCA9IEZpbGVQYXRocy5jcmVhdGVUZW1wTmFtZShiYXNlbmFtZSk7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGNvbXB1dGUgdGhlIHBhdGggaW4gdGhlIHN0YXNoIG90aGVyd2lzZSB3ZSdyZSB3YXN0aW5nIElPXG4gICAgICAgICAgICAvLyB3cml0aW5nIHRvIHR3byBwbGFjZXMuLi4gKHVubGVzcyB3ZSB1c2UgYSBoYXJkIGxpbmspLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFRPRE86IHVzZSBhIHRtcGRpciB3aXRoaW4gc3Rhc2ggYW5kIHRoZW4gbW92ZSBpdCB3aGVuIGZpbmlzaGVkXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkRvd25sb2FkIFBERiBmaWxlIHRvIFwiICsgdG1wUGF0aCk7XG5cbiAgICAgICAgICAgIFRvYXN0ZXJNZXNzYWdlcy5zZW5kKHt0eXBlOiBUb2FzdGVyTWVzc2FnZVR5cGUuSU5GTywgbWVzc2FnZTogXCJQREYgZG93bmxvYWQgc3RhcnRpbmcgZm9yIFwiICsgYmFzZW5hbWV9KTtcblxuICAgICAgICAgICAgZG93bmxvYWRJdGVtLnNldFNhdmVQYXRoKHRtcFBhdGgpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzc1RyYWNrZXIgPSBuZXcgUHJvZ3Jlc3NUcmFja2VyKGRvd25sb2FkSXRlbS5nZXRUb3RhbEJ5dGVzKCksICdkb3dubG9hZDonICsgYmFzZW5hbWUpO1xuXG4gICAgICAgICAgICBkb3dubG9hZEl0ZW0ub25jZSgnZG9uZScsIChldmVudCwgc3RhdGUpID0+IHtcblxuICAgICAgICAgICAgICAgIC8vIHNlbmQgdGhlIGZpbmFsIHByb2dyZXNzIGV2ZW50LlxuICAgICAgICAgICAgICAgIFByb2dyZXNzTWVzc2FnZXMuYnJvYWRjYXN0KHByb2dyZXNzVHJhY2tlci50ZXJtaW5hdGUoKSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFBERiBkb3dubG9hZCAke3N0YXRlfSBmb3IgJHtiYXNlbmFtZX1gO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbXBsZXRlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdGVyTWVzc2FnZXMuc2VuZCh7dHlwZTogVG9hc3Rlck1lc3NhZ2VUeXBlLlNVQ0NFU1MsIG1lc3NhZ2V9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVJbXBvcnRDbGllbnQuc2VuZChGaWxlSW1wb3J0UmVxdWVzdHMuZnJvbVBhdGgodG1wUGF0aCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjYW5jZWxsZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3Rlck1lc3NhZ2VzLnNlbmQoe3R5cGU6IFRvYXN0ZXJNZXNzYWdlVHlwZS5XQVJOSU5HLCBtZXNzYWdlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbnRlcnJ1cHRlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdGVyTWVzc2FnZXMuc2VuZCh7dHlwZTogVG9hc3Rlck1lc3NhZ2VUeXBlLldBUk5JTkcsIG1lc3NhZ2V9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgb25Eb3dubG9hZGVkKCk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb3dubG9hZEl0ZW0ub24oJ3VwZGF0ZWQnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHByb2dyZXNzVHJhY2tlci5hYnMoZG93bmxvYWRJdGVtLmdldFJlY2VpdmVkQnl0ZXMoKSk7XG4gICAgICAgICAgICAgICAgUHJvZ3Jlc3NNZXNzYWdlcy5icm9hZGNhc3QocHJvZ3Jlc3MpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgb25Eb3dubG9hZCgpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IHdlYkNvbnRlbnRzLnNlc3Npb247XG5cbiAgICAgICAgc2Vzc2lvbi5hZGRMaXN0ZW5lcignd2lsbC1kb3dubG9hZCcsIHdpbGxEb3dubG9hZEhhbmRsZXIpO1xuXG4gICAgICAgIHdlYkNvbnRlbnRzLm9uKCdkZXN0cm95ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBzZXNzaW9uLnJlbW92ZUxpc3RlbmVyKCd3aWxsLWRvd25sb2FkJywgd2lsbERvd25sb2FkSGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iXX0=