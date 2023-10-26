"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const Pipe_1 = require("../pipes/Pipe");
const ElectronContext_1 = require("./ElectronContext");
const ElectronContexts_1 = require("./ElectronContexts");
const Logger_1 = require("../../logger/Logger");
const log = Logger_1.Logger.create();
class WritablePipes {
    static createFromContext(targetContext) {
        return WritablePipes.createFromFunction((channel, message) => {
            let sourceContext = ElectronContexts_1.ElectronContexts.create();
            switch (sourceContext.type) {
                case ElectronContext_1.ElectronContextType.MAIN:
                    WritablePipes.writeWithMainContext(targetContext, channel, message);
                    break;
                case ElectronContext_1.ElectronContextType.RENDERER:
                    WritablePipes.writeWithRendererContext(targetContext, channel, message);
                    break;
                default:
                    throw new Error("Unknown context: " + sourceContext);
            }
        });
    }
    static writeWithMainContext(targetContext, channel, message) {
        log.info("Writing with main process");
        switch (targetContext.type) {
            case ElectronContext_1.ElectronContextType.MAIN:
                throw new Error("Can't write from main to main");
            case ElectronContext_1.ElectronContextType.RENDERER:
                let electronRendererContext = targetContext;
                electron_1.BrowserWindow.fromId(electronRendererContext.windowReference.id).webContents.send(channel, message);
                break;
            default:
                throw new Error("Unknown context: " + targetContext);
        }
    }
    static writeWithRendererContext(targetContext, channel, message) {
        log.info("Writing with renderer process");
        switch (targetContext.type) {
            case ElectronContext_1.ElectronContextType.MAIN:
                log.info("Writing to main");
                electron_1.ipcRenderer.send(channel, message);
                break;
            case ElectronContext_1.ElectronContextType.RENDERER:
                let electronRendererContext = targetContext;
                log.info("Writing to renderer: ", electronRendererContext);
                electron_1.ipcRenderer.sendTo(electronRendererContext.windowReference.id, channel, message);
                break;
            default:
                throw new Error("Unknown context: " + targetContext);
        }
    }
    static createFromFunction(writableFunction) {
        return new Pipe_1.WritablePipeFunction(writableFunction);
    }
}
exports.WritablePipes = WritablePipes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV3JpdGFibGVQaXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldyaXRhYmxlUGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBb0Q7QUFDcEQsd0NBQWlFO0FBQ2pFLHVEQUFnRztBQUNoRyx5REFBb0Q7QUFDcEQsZ0RBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGFBQWE7SUFFdEIsTUFBTSxDQUFDLGlCQUFpQixDQUFJLGFBQThCO1FBRXRELE9BQU8sYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBZSxFQUFFLE9BQVUsRUFBRSxFQUFFO1lBSXBFLElBQUksYUFBYSxHQUFHLG1DQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRTlDLFFBQU8sYUFBYSxDQUFDLElBQUksRUFBRTtnQkFFdkIsS0FBSyxxQ0FBbUIsQ0FBQyxJQUFJO29CQUN6QixhQUFhLENBQUMsb0JBQW9CLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDcEUsTUFBTTtnQkFFVixLQUFLLHFDQUFtQixDQUFDLFFBQVE7b0JBQzdCLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUN4RSxNQUFNO2dCQUVWO29CQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDLENBQUM7YUFFNUQ7UUFHTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTyxNQUFNLENBQUMsb0JBQW9CLENBQUksYUFBOEIsRUFBRSxPQUFlLEVBQUUsT0FBVTtRQUU5RixHQUFHLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFFdEMsUUFBTyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBRXZCLEtBQUsscUNBQW1CLENBQUMsSUFBSTtnQkFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBRXJELEtBQUsscUNBQW1CLENBQUMsUUFBUTtnQkFDN0IsSUFBSSx1QkFBdUIsR0FBNEIsYUFBYSxDQUFDO2dCQUNyRSx3QkFBYSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3BHLE1BQU07WUFFVjtnQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxDQUFDO1NBRTVEO0lBRUwsQ0FBQztJQUVPLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBSSxhQUE4QixFQUFFLE9BQWUsRUFBRSxPQUFVO1FBRWxHLEdBQUcsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUUxQyxRQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUU7WUFFdkIsS0FBSyxxQ0FBbUIsQ0FBQyxJQUFJO2dCQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBRTVCLHNCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDbkMsTUFBTTtZQUVWLEtBQUsscUNBQW1CLENBQUMsUUFBUTtnQkFDN0IsSUFBSSx1QkFBdUIsR0FBNEIsYUFBYSxDQUFDO2dCQUNyRSxHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLHVCQUF1QixDQUFDLENBQUM7Z0JBQzNELHNCQUFXLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNqRixNQUFNO1lBRVY7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxhQUFhLENBQUMsQ0FBQztTQUU1RDtJQUVMLENBQUM7SUFFRCxNQUFNLENBQUMsa0JBQWtCLENBQUksZ0JBQXFDO1FBQzlELE9BQU8sSUFBSSwyQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FFSjtBQWhGRCxzQ0FnRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lwY1JlbmRlcmVyLCBCcm93c2VyV2luZG93fSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge1dyaXRhYmxlUGlwZSwgV3JpdGFibGVQaXBlRnVuY3Rpb259IGZyb20gJy4uL3BpcGVzL1BpcGUnO1xuaW1wb3J0IHtFbGVjdHJvbkNvbnRleHQsIEVsZWN0cm9uQ29udGV4dFR5cGUsIEVsZWN0cm9uUmVuZGVyZXJDb250ZXh0fSBmcm9tICcuL0VsZWN0cm9uQ29udGV4dCc7XG5pbXBvcnQge0VsZWN0cm9uQ29udGV4dHN9IGZyb20gJy4vRWxlY3Ryb25Db250ZXh0cyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFdyaXRhYmxlUGlwZXMge1xuXG4gICAgc3RhdGljIGNyZWF0ZUZyb21Db250ZXh0PE0+KHRhcmdldENvbnRleHQ6IEVsZWN0cm9uQ29udGV4dCk6IFdyaXRhYmxlUGlwZTxNPiB7XG5cbiAgICAgICAgcmV0dXJuIFdyaXRhYmxlUGlwZXMuY3JlYXRlRnJvbUZ1bmN0aW9uKChjaGFubmVsOiBzdHJpbmcsIG1lc3NhZ2U6IE0pID0+IHtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgcmVzcG9uc2UgcGlwZSBiYXNlZCBvbiB0aGUgY29udGV4dCBvZiB0aGUgcmVxdWVzdC5cblxuICAgICAgICAgICAgbGV0IHNvdXJjZUNvbnRleHQgPSBFbGVjdHJvbkNvbnRleHRzLmNyZWF0ZSgpO1xuXG4gICAgICAgICAgICBzd2l0Y2goc291cmNlQ29udGV4dC50eXBlKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlIEVsZWN0cm9uQ29udGV4dFR5cGUuTUFJTjpcbiAgICAgICAgICAgICAgICAgICAgV3JpdGFibGVQaXBlcy53cml0ZVdpdGhNYWluQ29udGV4dCh0YXJnZXRDb250ZXh0LCBjaGFubmVsLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIEVsZWN0cm9uQ29udGV4dFR5cGUuUkVOREVSRVI6XG4gICAgICAgICAgICAgICAgICAgIFdyaXRhYmxlUGlwZXMud3JpdGVXaXRoUmVuZGVyZXJDb250ZXh0KHRhcmdldENvbnRleHQsIGNoYW5uZWwsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gY29udGV4dDogXCIgKyBzb3VyY2VDb250ZXh0KTtcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyB3cml0ZVdpdGhNYWluQ29udGV4dDxNPih0YXJnZXRDb250ZXh0OiBFbGVjdHJvbkNvbnRleHQsIGNoYW5uZWw6IHN0cmluZywgbWVzc2FnZTogTSkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiV3JpdGluZyB3aXRoIG1haW4gcHJvY2Vzc1wiKTtcblxuICAgICAgICBzd2l0Y2godGFyZ2V0Q29udGV4dC50eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgRWxlY3Ryb25Db250ZXh0VHlwZS5NQUlOOlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHdyaXRlIGZyb20gbWFpbiB0byBtYWluXCIpO1xuXG4gICAgICAgICAgICBjYXNlIEVsZWN0cm9uQ29udGV4dFR5cGUuUkVOREVSRVI6XG4gICAgICAgICAgICAgICAgbGV0IGVsZWN0cm9uUmVuZGVyZXJDb250ZXh0ID0gPEVsZWN0cm9uUmVuZGVyZXJDb250ZXh0PnRhcmdldENvbnRleHQ7XG4gICAgICAgICAgICAgICAgQnJvd3NlcldpbmRvdy5mcm9tSWQoZWxlY3Ryb25SZW5kZXJlckNvbnRleHQud2luZG93UmVmZXJlbmNlLmlkKS53ZWJDb250ZW50cy5zZW5kKGNoYW5uZWwsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gY29udGV4dDogXCIgKyB0YXJnZXRDb250ZXh0KTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyB3cml0ZVdpdGhSZW5kZXJlckNvbnRleHQ8TT4odGFyZ2V0Q29udGV4dDogRWxlY3Ryb25Db250ZXh0LCBjaGFubmVsOiBzdHJpbmcsIG1lc3NhZ2U6IE0pIHtcblxuICAgICAgICBsb2cuaW5mbyhcIldyaXRpbmcgd2l0aCByZW5kZXJlciBwcm9jZXNzXCIpO1xuXG4gICAgICAgIHN3aXRjaCh0YXJnZXRDb250ZXh0LnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSBFbGVjdHJvbkNvbnRleHRUeXBlLk1BSU46XG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJXcml0aW5nIHRvIG1haW5cIik7XG4gICAgICAgICAgICAgICAgLy8gdGhlIG1haW4gaXMgd2hlcmUgYSByZW5kZXJlciB3cml0ZXMgYnkgZGVmYXVsdC5cbiAgICAgICAgICAgICAgICBpcGNSZW5kZXJlci5zZW5kKGNoYW5uZWwsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEVsZWN0cm9uQ29udGV4dFR5cGUuUkVOREVSRVI6XG4gICAgICAgICAgICAgICAgbGV0IGVsZWN0cm9uUmVuZGVyZXJDb250ZXh0ID0gPEVsZWN0cm9uUmVuZGVyZXJDb250ZXh0PnRhcmdldENvbnRleHQ7XG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJXcml0aW5nIHRvIHJlbmRlcmVyOiBcIiwgZWxlY3Ryb25SZW5kZXJlckNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlwY1JlbmRlcmVyLnNlbmRUbyhlbGVjdHJvblJlbmRlcmVyQ29udGV4dC53aW5kb3dSZWZlcmVuY2UuaWQsIGNoYW5uZWwsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gY29udGV4dDogXCIgKyB0YXJnZXRDb250ZXh0KTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRnJvbUZ1bmN0aW9uPE0+KHdyaXRhYmxlRnVuY3Rpb246IFdyaXRhYmxlRnVuY3Rpb248TT4pOiBXcml0YWJsZVBpcGU8TT4ge1xuICAgICAgICByZXR1cm4gbmV3IFdyaXRhYmxlUGlwZUZ1bmN0aW9uKHdyaXRhYmxlRnVuY3Rpb24pO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaXRhYmxlRnVuY3Rpb248TT4ge1xuICAgIChjaGFubmVsOiBzdHJpbmcsIG1lc3NhZ2U6IE0pOiB2b2lkO1xufVxuXG4iXX0=