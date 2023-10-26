"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const ElectronContextMenu_1 = require("../../contextmenu/electron/ElectronContextMenu");
const Version_1 = require("../../util/Version");
const AppLauncher_1 = require("./AppLauncher");
const Logger_1 = require("../../logger/Logger");
const Promises_1 = require("../../util/Promises");
const Updates_1 = require("../../updates/Updates");
const Platforms_1 = require("../../util/Platforms");
const AnnotationSidebarClient_1 = require("../../annotation_sidebar/AnnotationSidebarClient");
const BrowserWindowRegistry_1 = require("../../electron/framework/BrowserWindowRegistry");
const Menus_1 = require("./Menus");
const Preconditions_1 = require("../../Preconditions");
const Directories_1 = require("../../datastore/Directories");
const Messenger_1 = require("../../electron/messenger/Messenger");
const AppUpdates_1 = require("../../updates/AppUpdates");
const log = Logger_1.Logger.create();
const WINDOW_TYPE = 'type';
class MainAppMenu {
    constructor(mainAppController, mode = MainMenuMode.DOC_REPO_APP) {
        this.mainAppController = mainAppController;
        this.mode = mode;
    }
    setup() {
        const menu = electron_1.Menu.buildFromTemplate(this.createMenuTemplate());
        electron_1.Menu.setApplicationMenu(menu);
        new ElectronContextMenu_1.ElectronContextMenu();
        this.registerEventListeners();
    }
    registerEventListeners() {
        electron_1.app.on('browser-window-focus', (event, browserWindow) => {
            const meta = BrowserWindowRegistry_1.BrowserWindowRegistry.get(browserWindow.id);
            const isViewer = Preconditions_1.isPresent(meta) &&
                meta.tags &&
                meta.tags[WINDOW_TYPE] === 'viewer';
            const menu = electron_1.Menu.getApplicationMenu();
            function handleToggleAnnotationSidebar() {
                const viewMenu = Menus_1.Menus.find(menu.items, 'view');
                const viewMenuItems = Menus_1.Menus.submenu(viewMenu);
                const toggleAnnotationSidebar = Menus_1.Menus.find(viewMenuItems, 'toggle-annotation-sidebar');
                Menus_1.Menus.setVisible(toggleAnnotationSidebar, isViewer);
            }
            handleToggleAnnotationSidebar();
            function handleSyncFlashcardsToAnki() {
                const toolsMenu = Menus_1.Menus.find(menu.items, 'tools');
                const toolsMenuItems = Menus_1.Menus.submenu(toolsMenu);
                const syncFlashcardsToAnkiMenuItem = Menus_1.Menus.find(toolsMenuItems, 'sync-flashcards-to-anki');
                Menus_1.Menus.setVisible(syncFlashcardsToAnkiMenuItem, !isViewer);
            }
            handleSyncFlashcardsToAnki();
            const annotateMenu = Menus_1.Menus.find(menu.items, 'annotate');
            if (annotateMenu) {
                const annotateMenuItems = Menus_1.Menus.submenu(annotateMenu);
                annotateMenuItems.forEach(current => {
                    Menus_1.Menus.setEnabled(current, isViewer);
                });
            }
        });
    }
    createMenuTemplate() {
        const menuTemplate = [
            this.createFileMenuTemplate(),
            this.createEditMenuTemplate(),
            this.createViewMenuTemplate(),
            this.createToolsMenuTemplate(),
            this.createWindowMenuTemplate(),
            this.createHelpMenuTemplate()
        ];
        if (Platforms_1.Platforms.get() === Platforms_1.Platform.MACOS) {
            menuTemplate.unshift(this.createMacOSMenuTemplate());
        }
        return menuTemplate;
    }
    createAboutMessage() {
        const dataDir = Directories_1.Directories.getDataDir().path;
        const version = Version_1.Version.get();
        return '' +
            `version:  ${version}\n` +
            `data dir: ${dataDir}\n`;
    }
    createAppMenuTemplate() {
        return {
            label: 'Polar',
            id: 'polar',
            platform: 'darwin',
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideothers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' }
            ]
        };
    }
    createMacOSMenuTemplate() {
        return {
            label: 'Polar',
            submenu: [
                {
                    label: 'About Polar',
                    click: () => this.showHelpAboutDialog()
                },
                {
                    type: 'separator'
                },
                { role: 'hide', label: 'Hide Polar' },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                {
                    label: 'Quit',
                    accelerator: 'CmdOrCtrl+Q',
                    click: () => this.mainAppController.cmdExit()
                },
            ]
        };
    }
    createFileMenuTemplate() {
        const isMacOS = Platforms_1.Platforms.get() === Platforms_1.Platform.MACOS;
        return {
            label: 'File',
            submenu: [
                {
                    label: 'Import from Disk',
                    accelerator: 'CmdOrCtrl+I',
                    click: () => {
                        this.mainAppController.cmdImport()
                            .catch((err) => log.error("Could not import from disk: ", err));
                    }
                },
                {
                    label: 'Capture Web Page',
                    accelerator: 'CommandOrControl+N',
                    click: () => {
                        this.mainAppController.cmdCaptureWebPageWithBrowser()
                            .catch((err) => log.error("Could not capture page: ", err));
                    }
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Print',
                    accelerator: 'CmdOrCtrl+P',
                    click: (item, focusedWindow) => {
                        if (focusedWindow) {
                            focusedWindow.webContents.print();
                        }
                    }
                },
                {
                    type: 'separator'
                },
                {
                    role: 'quit',
                    label: 'Quit',
                    visible: !isMacOS,
                    accelerator: 'CmdOrCtrl+Q',
                    click: () => this.mainAppController.cmdExit()
                },
            ]
        };
    }
    createEditMenuTemplate() {
        return {
            id: 'edit',
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'pasteandmatchstyle' },
                { role: 'selectall' },
                { type: 'separator' },
            ]
        };
    }
    createAnnotateMenuTemplate() {
        return {
            id: 'annotate',
            label: 'Annotate',
            enabled: false,
            visible: false,
            submenu: [
                { role: 'undo', enabled: false, visible: 'false' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'pasteandmatchstyle' },
                { role: 'selectall' },
                { type: 'separator' },
            ]
        };
    }
    createViewMenuTemplate() {
        return {
            id: 'view',
            label: 'View',
            submenu: [
                {
                    label: 'Reload',
                    accelerator: 'CmdOrCtrl+R',
                    click: (item, focusedWindow) => {
                        if (focusedWindow) {
                            focusedWindow.webContents.reloadIgnoringCache();
                        }
                    }
                },
                {
                    id: 'toggle-annotation-sidebar',
                    accelerator: 'F10',
                    label: 'Toggle Annotation Sidebar',
                    visible: false,
                    click: () => AnnotationSidebarClient_1.AnnotationSidebarClient.toggleAnnotationSidebar()
                },
                {
                    label: 'Toggle Full Screen',
                    accelerator: (function () {
                        if (process.platform === 'darwin') {
                            return 'Ctrl+Command+F';
                        }
                        else {
                            return 'F11';
                        }
                    })(),
                    click: (item, focusedWindow) => {
                        if (focusedWindow) {
                            focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
                        }
                    }
                },
            ]
        };
    }
    createWindowMenuTemplate() {
        return {
            label: 'Window',
            role: 'window',
            submenu: [
                { role: 'minimize' },
                { role: 'close' },
            ]
        };
    }
    createToolsMenuTemplate() {
        return {
            id: 'tools',
            label: 'Tools',
            submenu: [
                {
                    label: 'Document Repository',
                    click: () => Promises_1.Promises.executeLogged(AppLauncher_1.AppLauncher.launchRepositoryApp)
                },
                {
                    id: 'sync-flashcards-to-anki',
                    label: 'Sync Flashcards to Anki',
                    click: () => {
                        Messenger_1.Messenger.postMessage({
                            message: {
                                type: "start-anki-sync"
                            }
                        }).catch(err => log.error("Could not post message", err));
                    }
                },
                { type: 'separator' },
                {
                    label: 'Toggle Developer Tools',
                    click: this.mainAppController.cmdToggleDevTools
                },
            ]
        };
    }
    createHelpMenuTemplate() {
        return {
            id: 'help',
            label: 'Help',
            role: 'help',
            submenu: [
                {
                    label: 'About',
                    click: () => this.showHelpAboutDialog()
                },
                { label: 'Documentation',
                    click: () => electron_1.shell.openExternal('https://getpolarized.io/docs/') },
                {
                    id: 'check-for-updates',
                    label: 'Check for Updates',
                    visible: AppUpdates_1.AppUpdates.platformSupportsUpdates(),
                    click: (item) => Updates_1.Updates.checkForUpdates(item),
                },
                { type: 'separator' },
                { label: 'Donate',
                    click: () => electron_1.shell.openExternal('https://opencollective.com/polar-bookshelf/donate') },
                { type: 'separator' },
                { label: 'Discord',
                    click: () => electron_1.shell.openExternal('https://discord.gg/GT8MhA6') },
                { label: 'Reddit',
                    click: () => electron_1.shell.openExternal('https://www.reddit.com/r/PolarBookshelf/') },
                { label: 'Learn More',
                    click: () => electron_1.shell.openExternal('https://github.com/burtonator/polar-bookshelf') },
                { type: 'separator' },
                { label: 'Cookie Policy',
                    click: () => electron_1.shell.openExternal('https://getpolarized.io/cookie-policy.html') },
                { label: 'Terms of Service',
                    click: () => electron_1.shell.openExternal('https://getpolarized.io/terms-of-service.html') },
                { label: 'Privacy Policy',
                    click: () => electron_1.shell.openExternal('https://getpolarized.io/privacy-policy.html') },
            ]
        };
    }
    showHelpAboutDialog() {
        electron_1.dialog.showMessageBox(electron_1.BrowserWindow.getFocusedWindow(), {
            type: 'info',
            buttons: ['OK'],
            title: 'Polar',
            message: this.createAboutMessage(),
            detail: '',
        });
    }
}
exports.MainAppMenu = MainAppMenu;
var MainMenuMode;
(function (MainMenuMode) {
    MainMenuMode[MainMenuMode["DOC_REPO_APP"] = 0] = "DOC_REPO_APP";
    MainMenuMode[MainMenuMode["VIEWER_APP"] = 1] = "VIEWER_APP";
})(MainMenuMode = exports.MainMenuMode || (exports.MainMenuMode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkFwcE1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYWluQXBwTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHVDQUFpRTtBQUNqRSx3RkFBbUY7QUFDbkYsZ0RBQTJDO0FBQzNDLCtDQUEwQztBQUMxQyxnREFBMkM7QUFDM0Msa0RBQTZDO0FBQzdDLG1EQUE4QztBQUM5QyxvREFBeUQ7QUFDekQsOEZBQXlGO0FBQ3pGLDBGQUFxRjtBQUNyRixtQ0FBOEI7QUFDOUIsdURBQThDO0FBQzlDLDZEQUF3RDtBQUN4RCxrRUFBNkQ7QUFDN0QseURBQW9EO0FBRXBELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUM7QUFFM0IsTUFBYSxXQUFXO0lBS3BCLFlBQVksaUJBQW9DLEVBQ3BDLE9BQXFCLFlBQVksQ0FBQyxZQUFZO1FBRXRELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUVyQixDQUFDO0lBRU0sS0FBSztRQUVSLE1BQU0sSUFBSSxHQUFHLGVBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELGVBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUc5QixJQUFJLHlDQUFtQixFQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFFbEMsQ0FBQztJQUtPLHNCQUFzQjtRQUUxQixjQUFHLENBQUMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLENBQUMsS0FBcUIsRUFBRSxhQUE0QixFQUFFLEVBQUU7WUFFbkYsTUFBTSxJQUFJLEdBQUcsNkNBQXFCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV6RCxNQUFNLFFBQVEsR0FDUix5QkFB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QUcsRUFBRTtZQUNyRCxJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztZQUNmLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNsQyxNQUFNLEVBQUUsRUFBRTtTQUViLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQXRjRCxrQ0FzY0M7QUFLRCxJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDcEIsK0RBQVksQ0FBQTtJQUNaLDJEQUFVLENBQUE7QUFDZCxDQUFDLEVBSFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFHdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01haW5BcHBDb250cm9sbGVyfSBmcm9tICcuL01haW5BcHBDb250cm9sbGVyJztcbmltcG9ydCB7YXBwLCBCcm93c2VyV2luZG93LCBkaWFsb2csIE1lbnUsIHNoZWxsfSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7RWxlY3Ryb25Db250ZXh0TWVudX0gZnJvbSAnLi4vLi4vY29udGV4dG1lbnUvZWxlY3Ryb24vRWxlY3Ryb25Db250ZXh0TWVudSc7XG5pbXBvcnQge1ZlcnNpb259IGZyb20gJy4uLy4uL3V0aWwvVmVyc2lvbic7XG5pbXBvcnQge0FwcExhdW5jaGVyfSBmcm9tICcuL0FwcExhdW5jaGVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UHJvbWlzZXN9IGZyb20gJy4uLy4uL3V0aWwvUHJvbWlzZXMnO1xuaW1wb3J0IHtVcGRhdGVzfSBmcm9tICcuLi8uLi91cGRhdGVzL1VwZGF0ZXMnO1xuaW1wb3J0IHtQbGF0Zm9ybSwgUGxhdGZvcm1zfSBmcm9tICcuLi8uLi91dGlsL1BsYXRmb3Jtcyc7XG5pbXBvcnQge0Fubm90YXRpb25TaWRlYmFyQ2xpZW50fSBmcm9tICcuLi8uLi9hbm5vdGF0aW9uX3NpZGViYXIvQW5ub3RhdGlvblNpZGViYXJDbGllbnQnO1xuaW1wb3J0IHtCcm93c2VyV2luZG93UmVnaXN0cnl9IGZyb20gJy4uLy4uL2VsZWN0cm9uL2ZyYW1ld29yay9Ccm93c2VyV2luZG93UmVnaXN0cnknO1xuaW1wb3J0IHtNZW51c30gZnJvbSAnLi9NZW51cyc7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnLi4vLi4vUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0RpcmVjdG9yaWVzfSBmcm9tICcuLi8uLi9kYXRhc3RvcmUvRGlyZWN0b3JpZXMnO1xuaW1wb3J0IHtNZXNzZW5nZXJ9IGZyb20gJy4uLy4uL2VsZWN0cm9uL21lc3Nlbmdlci9NZXNzZW5nZXInO1xuaW1wb3J0IHtBcHBVcGRhdGVzfSBmcm9tICcuLi8uLi91cGRhdGVzL0FwcFVwZGF0ZXMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IFdJTkRPV19UWVBFID0gJ3R5cGUnO1xuXG5leHBvcnQgY2xhc3MgTWFpbkFwcE1lbnUge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBtYWluQXBwQ29udHJvbGxlcjogTWFpbkFwcENvbnRyb2xsZXI7XG4gICAgcHJpdmF0ZSBtb2RlOiBNYWluTWVudU1vZGU7XG5cbiAgICBjb25zdHJ1Y3RvcihtYWluQXBwQ29udHJvbGxlcjogTWFpbkFwcENvbnRyb2xsZXIsXG4gICAgICAgICAgICAgICAgbW9kZTogTWFpbk1lbnVNb2RlID0gTWFpbk1lbnVNb2RlLkRPQ19SRVBPX0FQUCkge1xuXG4gICAgICAgIHRoaXMubWFpbkFwcENvbnRyb2xsZXIgPSBtYWluQXBwQ29udHJvbGxlcjtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzZXR1cCgpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBtZW51ID0gTWVudS5idWlsZEZyb21UZW1wbGF0ZSh0aGlzLmNyZWF0ZU1lbnVUZW1wbGF0ZSgpKTtcblxuICAgICAgICBNZW51LnNldEFwcGxpY2F0aW9uTWVudShtZW51KTtcblxuICAgICAgICAvLyBub2luc3BlY3Rpb24gVHNMaW50XG4gICAgICAgIG5ldyBFbGVjdHJvbkNvbnRleHRNZW51KCk7XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBldmVudCBsaXN0ZW5lcnMgc28gd2UgY2FuIGhpZGUvZGlzYWJsZS9ldGMgbWVudXMuXG4gICAgICovXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuXG4gICAgICAgIGFwcC5vbignYnJvd3Nlci13aW5kb3ctZm9jdXMnLCAoZXZlbnQ6IEVsZWN0cm9uLkV2ZW50LCBicm93c2VyV2luZG93OiBCcm93c2VyV2luZG93KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBCcm93c2VyV2luZG93UmVnaXN0cnkuZ2V0KGJyb3dzZXJXaW5kb3cuaWQpO1xuXG4gICAgICAgICAgICBjb25zdCBpc1ZpZXdlcjogYm9vbGVhblxuICAgICAgICAgICAgICAgID0gaXNQcmVzZW50KG1ldGEpICYmXG4gICAgICAgICAgICAgICAgbWV0YSEudGFncyAmJlxuICAgICAgICAgICAgICAgIG1ldGEhLnRhZ3NbV0lORE9XX1RZUEVdID09PSAndmlld2VyJztcblxuICAgICAgICAgICAgY29uc3QgbWVudSA9IE1lbnUuZ2V0QXBwbGljYXRpb25NZW51KCkhO1xuXG4gICAgICAgICAgICAvLyAqKioqIGhhbmRsZSB0b2dnbGUtYW5ub3RhdGlvbi1zaWRlYmFyXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZUFubm90YXRpb25TaWRlYmFyKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXdNZW51ID0gTWVudXMuZmluZChtZW51Lml0ZW1zLCAndmlldycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXdNZW51SXRlbXMgPSBNZW51cy5zdWJtZW51KHZpZXdNZW51KTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2dnbGVBbm5vdGF0aW9uU2lkZWJhciA9IE1lbnVzLmZpbmQodmlld01lbnVJdGVtcywgJ3RvZ2dsZS1hbm5vdGF0aW9uLXNpZGViYXInKTtcblxuICAgICAgICAgICAgICAgIE1lbnVzLnNldFZpc2libGUodG9nZ2xlQW5ub3RhdGlvblNpZGViYXIhLCBpc1ZpZXdlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhhbmRsZVRvZ2dsZUFubm90YXRpb25TaWRlYmFyKCk7XG5cbiAgICAgICAgICAgIC8vICoqKiogaGFuZGxlIHN5bmMtZmxhc2hjYXJkcy10by1hbmtpXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVN5bmNGbGFzaGNhcmRzVG9BbmtpKCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9vbHNNZW51ID0gTWVudXMuZmluZChtZW51Lml0ZW1zLCAndG9vbHMnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29sc01lbnVJdGVtcyA9IE1lbnVzLnN1Ym1lbnUodG9vbHNNZW51KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW5jRmxhc2hjYXJkc1RvQW5raU1lbnVJdGVtID0gTWVudXMuZmluZCh0b29sc01lbnVJdGVtcywgJ3N5bmMtZmxhc2hjYXJkcy10by1hbmtpJyk7XG5cbiAgICAgICAgICAgICAgICBNZW51cy5zZXRWaXNpYmxlKHN5bmNGbGFzaGNhcmRzVG9BbmtpTWVudUl0ZW0hLCAhIGlzVmlld2VyKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoYW5kbGVTeW5jRmxhc2hjYXJkc1RvQW5raSgpO1xuXG4gICAgICAgICAgICAvLyAqKioqIGhhbmRsZSBhbm5vdGF0ZSBtZW51XG5cbiAgICAgICAgICAgIGNvbnN0IGFubm90YXRlTWVudSA9IE1lbnVzLmZpbmQobWVudS5pdGVtcywgJ2Fubm90YXRlJyk7XG5cbiAgICAgICAgICAgIGlmIChhbm5vdGF0ZU1lbnUpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFubm90YXRlTWVudUl0ZW1zID0gTWVudXMuc3VibWVudShhbm5vdGF0ZU1lbnUhKSE7XG5cbiAgICAgICAgICAgICAgICBhbm5vdGF0ZU1lbnVJdGVtcy5mb3JFYWNoKGN1cnJlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBNZW51cy5zZXRFbmFibGVkKGN1cnJlbnQsIGlzVmlld2VyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVNZW51VGVtcGxhdGUoKTogYW55IHtcblxuICAgICAgICBjb25zdCBtZW51VGVtcGxhdGU6IGFueVtdID0gW1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVGaWxlTWVudVRlbXBsYXRlKCksXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVkaXRNZW51VGVtcGxhdGUoKSxcbiAgICAgICAgICAgIC8vIHRoaXMuY3JlYXRlQW5ub3RhdGVNZW51VGVtcGxhdGUoKSxcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVmlld01lbnVUZW1wbGF0ZSgpLFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUb29sc01lbnVUZW1wbGF0ZSgpLFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVXaW5kb3dNZW51VGVtcGxhdGUoKSxcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSGVscE1lbnVUZW1wbGF0ZSgpXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKFBsYXRmb3Jtcy5nZXQoKSA9PT0gUGxhdGZvcm0uTUFDT1MpIHtcbiAgICAgICAgICAgIG1lbnVUZW1wbGF0ZS51bnNoaWZ0KHRoaXMuY3JlYXRlTWFjT1NNZW51VGVtcGxhdGUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVudVRlbXBsYXRlO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBYm91dE1lc3NhZ2UoKSB7XG5cbiAgICAgICAgY29uc3QgZGF0YURpciA9IERpcmVjdG9yaWVzLmdldERhdGFEaXIoKS5wYXRoO1xuICAgICAgICBjb25zdCB2ZXJzaW9uID0gVmVyc2lvbi5nZXQoKTtcblxuICAgICAgICByZXR1cm4gJycgK1xuICAgICAgICAgICAgYHZlcnNpb246ICAke3ZlcnNpb259XFxuYCArXG4gICAgICAgICAgICBgZGF0YSBkaXI6ICR7ZGF0YURpcn1cXG5gXG4gICAgICAgICAgICA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlZCBmb3IgTWFjT1Mgc28gdGhhdCB3ZSBoYXZlIGEgJ1BvbGFyJyBtZW51IGJlZm9yZSAnRmlsZScgd2l0aCBNYWNPU1xuICAgICAqIHNwZWNpZmljIGFjdGlvbnMgbGlrZSAnaGlkZSdcbiAgICAgKlxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlQXBwTWVudVRlbXBsYXRlKCkge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYWJlbDogJ1BvbGFyJyxcbiAgICAgICAgICAgIGlkOiAncG9sYXInLFxuICAgICAgICAgICAgcGxhdGZvcm06ICdkYXJ3aW4nLFxuICAgICAgICAgICAgc3VibWVudTogW1xuXG4gICAgICAgICAgICAgICAge3JvbGU6ICdhYm91dCd9LFxuICAgICAgICAgICAgICAgIHt0eXBlOiAnc2VwYXJhdG9yJ30sXG4gICAgICAgICAgICAgICAge3JvbGU6ICdoaWRlJ30sXG4gICAgICAgICAgICAgICAge3JvbGU6ICdoaWRlb3RoZXJzJ30sXG4gICAgICAgICAgICAgICAge3JvbGU6ICd1bmhpZGUnfSxcbiAgICAgICAgICAgICAgICB7dHlwZTogJ3NlcGFyYXRvcid9LFxuICAgICAgICAgICAgICAgIHtyb2xlOiAncXVpdCd9XG5cbiAgICAgICAgICAgIF1cblxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVNYWNPU01lbnVUZW1wbGF0ZSgpIHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6ICdQb2xhcicsXG4gICAgICAgICAgICBzdWJtZW51OiBbXG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQWJvdXQgUG9sYXInLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5zaG93SGVscEFib3V0RGlhbG9nKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NlcGFyYXRvcidcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgeyByb2xlOiAnaGlkZScsIGxhYmVsOiAnSGlkZSBQb2xhcicgfSxcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICdoaWRlT3RoZXJzJyB9LFxuICAgICAgICAgICAgICAgIHsgcm9sZTogJ3VuaGlkZScgfSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6ICdzZXBhcmF0b3InfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUXVpdCcsXG4gICAgICAgICAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ21kT3JDdHJsK1EnLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5tYWluQXBwQ29udHJvbGxlci5jbWRFeGl0KClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVGaWxlTWVudVRlbXBsYXRlKCkge1xuXG4gICAgICAgIGNvbnN0IGlzTWFjT1MgPSBQbGF0Zm9ybXMuZ2V0KCkgPT09IFBsYXRmb3JtLk1BQ09TO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYWJlbDogJ0ZpbGUnLFxuICAgICAgICAgICAgLy8gYWNjZWxlcmF0b3I6ICdDdHJsK0YnLFxuICAgICAgICAgICAgc3VibWVudTogW1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0ltcG9ydCBmcm9tIERpc2snLFxuICAgICAgICAgICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NtZE9yQ3RybCtJJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbkFwcENvbnRyb2xsZXIuY21kSW1wb3J0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IGxvZy5lcnJvcihcIkNvdWxkIG5vdCBpbXBvcnQgZnJvbSBkaXNrOiBcIiwgZXJyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NhcHR1cmUgV2ViIFBhZ2UnLFxuICAgICAgICAgICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmRPckNvbnRyb2wrTicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5BcHBDb250cm9sbGVyLmNtZENhcHR1cmVXZWJQYWdlV2l0aEJyb3dzZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IGNhcHR1cmUgcGFnZTogXCIsIGVycikpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJpbnQnLFxuICAgICAgICAgICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NtZE9yQ3RybCtQJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IChpdGVtOiBFbGVjdHJvbi5NZW51SXRlbSwgZm9jdXNlZFdpbmRvdzogQnJvd3NlcldpbmRvdykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzZWRXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2VkV2luZG93LndlYkNvbnRlbnRzLnByaW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIHsgcm9sZTogJ2hpZGUnLCB2aXNpYmxlOiBpc01hY09TIH0sXG4gICAgICAgICAgICAgICAgLy8geyByb2xlOiAnaGlkZU90aGVycycsIHZpc2libGU6IGlzTWFjT1MgfSxcbiAgICAgICAgICAgICAgICAvLyB7IHJvbGU6ICd1bmhpZGUnLCB2aXNpYmxlOiBpc01hY09TIH0sXG4gICAgICAgICAgICAgICAgLy8geyB0eXBlOiAnc2VwYXJhdG9yJywgdmlzaWJsZTogaXNNYWNPU30sXG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzZXBhcmF0b3InXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGU6ICdxdWl0JyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdRdWl0JyxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogISBpc01hY09TLFxuICAgICAgICAgICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NtZE9yQ3RybCtRJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMubWFpbkFwcENvbnRyb2xsZXIuY21kRXhpdCgpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBjcmVhdGVFZGl0TWVudVRlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6ICdlZGl0JyxcbiAgICAgICAgICAgIGxhYmVsOiAnRWRpdCcsXG4gICAgICAgICAgICBzdWJtZW51OiBbXG4gICAgICAgICAgICAgICAgeyByb2xlOiAndW5kbycgfSxcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICdyZWRvJyB9LFxuICAgICAgICAgICAgICAgIC8vIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgICAgICAgICAgICAvLyB7IGxhYmVsOiAnRmluZCcsIGFjY2VsZXJhdG9yOiAnQ21kT3JDdHJsK2YnLCBjbGljazogKCkgPT5cbiAgICAgICAgICAgICAgICAvLyBJblBhZ2VTZWFyY2guZXhlY3V0ZSgpIH0sXG4gICAgICAgICAgICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxuICAgICAgICAgICAgICAgIHsgcm9sZTogJ2N1dCd9LFxuICAgICAgICAgICAgICAgIHsgcm9sZTogJ2NvcHknIH0sXG4gICAgICAgICAgICAgICAgeyByb2xlOiAncGFzdGUnIH0sXG4gICAgICAgICAgICAgICAgeyByb2xlOiAncGFzdGVhbmRtYXRjaHN0eWxlJyB9LFxuICAgICAgICAgICAgICAgIHsgcm9sZTogJ3NlbGVjdGFsbCcgfSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6ICdzZXBhcmF0b3InIH0sXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgICBsYWJlbDogJ0NoYW5nZSBQYWdlbWFyayBDb2x1bW4gVHlwZScsXG4gICAgICAgICAgICAgICAgLy8gICAgIHN1Ym1lbnU6IFtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHsgbGFiZWw6ICdTaW5nbGUnLCB9LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgeyBsYWJlbDogJ0RvdWJsZScsIH0sXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB7IGxhYmVsOiAnVHJpcGxlJywgfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgXVxuICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBbm5vdGF0ZU1lbnVUZW1wbGF0ZSgpIHtcblxuICAgICAgICAvLyBUT0RPOiBjcmVhdGUgcGFnZW1hcmtcbiAgICAgICAgLy8gICAgICAgTWFyayBjdXJyZW50IHBhZ2UgcmVhZFxuICAgICAgICAvLyAgICAgICBDcmVhdGUgbmV3IHBhZ2VtYXJrXG4gICAgICAgIC8vXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgaWQ6ICdhbm5vdGF0ZScsXG4gICAgICAgICAgIGxhYmVsOiAnQW5ub3RhdGUnLFxuICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgIHN1Ym1lbnU6IFtcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICd1bmRvJywgZW5hYmxlZDogZmFsc2UsIHZpc2libGU6ICdmYWxzZSd9LFxuICAgICAgICAgICAgICAgIHsgcm9sZTogJ3JlZG8nIH0sXG4gICAgICAgICAgICAgICAgLy8geyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxuICAgICAgICAgICAgICAgIC8vIHsgbGFiZWw6ICdGaW5kJywgYWNjZWxlcmF0b3I6ICdDbWRPckN0cmwrZicsIGNsaWNrOiAoKSA9PlxuICAgICAgICAgICAgICAgIC8vIEluUGFnZVNlYXJjaC5leGVjdXRlKCkgfSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6ICdzZXBhcmF0b3InIH0sXG4gICAgICAgICAgICAgICAgeyByb2xlOiAnY3V0J30sXG4gICAgICAgICAgICAgICAgeyByb2xlOiAnY29weScgfSxcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICdwYXN0ZScgfSxcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICdwYXN0ZWFuZG1hdGNoc3R5bGUnIH0sXG4gICAgICAgICAgICAgICAgeyByb2xlOiAnc2VsZWN0YWxsJyB9LFxuICAgICAgICAgICAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxhYmVsOiAnQ2hhbmdlIFBhZ2VtYXJrIENvbHVtbiBUeXBlJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgc3VibWVudTogW1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgeyBsYWJlbDogJ1NpbmdsZScsIH0sXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB7IGxhYmVsOiAnRG91YmxlJywgfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHsgbGFiZWw6ICdUcmlwbGUnLCB9LFxuICAgICAgICAgICAgICAgIC8vICAgICBdXG4gICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgY3JlYXRlVmlld01lbnVUZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiAndmlldycsXG4gICAgICAgICAgICBsYWJlbDogJ1ZpZXcnLFxuICAgICAgICAgICAgc3VibWVudTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdSZWxvYWQnLFxuICAgICAgICAgICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NtZE9yQ3RybCtSJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IChpdGVtOiBFbGVjdHJvbi5NZW51SXRlbSwgZm9jdXNlZFdpbmRvdzogQnJvd3NlcldpbmRvdykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzZWRXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2VkV2luZG93LndlYkNvbnRlbnRzLnJlbG9hZElnbm9yaW5nQ2FjaGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgICBsYWJlbDogJ0Fubm90YXRpb25zIFNpZGViYXInLFxuICAgICAgICAgICAgICAgIC8vICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgIC8vICAgICBjbGljazogKGl0ZW06IEVsZWN0cm9uLk1lbnVJdGVtLCBmb2N1c2VkV2luZG93OlxuICAgICAgICAgICAgICAgIC8vIEJyb3dzZXJXaW5kb3cpID0+IHsgaWYgKGZvY3VzZWRXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICAvLyBmb2N1c2VkV2luZG93LnNldEZ1bGxTY3JlZW4oIWZvY3VzZWRXaW5kb3cuaXNGdWxsU2NyZWVuKCkpO1xuICAgICAgICAgICAgICAgIC8vIH0gfSB9LFxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3RvZ2dsZS1hbm5vdGF0aW9uLXNpZGViYXInLFxuICAgICAgICAgICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0YxMCcsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVG9nZ2xlIEFubm90YXRpb24gU2lkZWJhcicsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gQW5ub3RhdGlvblNpZGViYXJDbGllbnQudG9nZ2xlQW5ub3RhdGlvblNpZGViYXIoKVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVG9nZ2xlIEZ1bGwgU2NyZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZWxlcmF0b3I6IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnZGFyd2luJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnQ3RybCtDb21tYW5kK0YnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0YxMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKCksXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoaXRlbTogRWxlY3Ryb24uTWVudUl0ZW0sIGZvY3VzZWRXaW5kb3c6IEJyb3dzZXJXaW5kb3cpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb2N1c2VkV2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNlZFdpbmRvdy5zZXRGdWxsU2NyZWVuKCFmb2N1c2VkV2luZG93LmlzRnVsbFNjcmVlbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVXaW5kb3dNZW51VGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYWJlbDogJ1dpbmRvdycsXG4gICAgICAgICAgICByb2xlOiAnd2luZG93JyxcbiAgICAgICAgICAgIHN1Ym1lbnU6IFtcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICdtaW5pbWl6ZScgfSxcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICdjbG9zZScgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVRvb2xzTWVudVRlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6ICd0b29scycsXG4gICAgICAgICAgICBsYWJlbDogJ1Rvb2xzJyxcbiAgICAgICAgICAgIHN1Ym1lbnU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRG9jdW1lbnQgUmVwb3NpdG9yeScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiBQcm9taXNlcy5leGVjdXRlTG9nZ2VkKEFwcExhdW5jaGVyLmxhdW5jaFJlcG9zaXRvcnlBcHApXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3luYy1mbGFzaGNhcmRzLXRvLWFua2knLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1N5bmMgRmxhc2hjYXJkcyB0byBBbmtpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc3Nlbmdlci5wb3N0TWVzc2FnZSgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhcnQtYW5raS1zeW5jXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgcG9zdCBtZXNzYWdlXCIsIGVycikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7dHlwZTogJ3NlcGFyYXRvcid9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgRGV2ZWxvcGVyIFRvb2xzJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHRoaXMubWFpbkFwcENvbnRyb2xsZXIuY21kVG9nZ2xlRGV2VG9vbHNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVIZWxwTWVudVRlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6ICdoZWxwJyxcbiAgICAgICAgICAgIGxhYmVsOiAnSGVscCcsXG4gICAgICAgICAgICByb2xlOiAnaGVscCcsXG5cbiAgICAgICAgICAgIHN1Ym1lbnU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQWJvdXQnLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5zaG93SGVscEFib3V0RGlhbG9nKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdEb2N1bWVudGF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9nZXRwb2xhcml6ZWQuaW8vZG9jcy8nKSB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdjaGVjay1mb3ItdXBkYXRlcycsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ2hlY2sgZm9yIFVwZGF0ZXMnLFxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IHNob3cgb24gV2luZG93cyBhbmQgTWFjT1MgYXMgYWxsIG90aGVyIHBsYXRmb3Jtc1xuICAgICAgICAgICAgICAgICAgICAvLyBoYXZlIHRoZWlyIG93biBkaXN0IHN5c3RlbSAoZm9yIG5vdykuXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IEFwcFVwZGF0ZXMucGxhdGZvcm1TdXBwb3J0c1VwZGF0ZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IChpdGVtOiBFbGVjdHJvbi5NZW51SXRlbSkgPT4gVXBkYXRlcy5jaGVja0ZvclVwZGF0ZXMoaXRlbSksXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHt0eXBlOiAnc2VwYXJhdG9yJ30sXG5cbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnRG9uYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9vcGVuY29sbGVjdGl2ZS5jb20vcG9sYXItYm9va3NoZWxmL2RvbmF0ZScpIH0sXG5cbiAgICAgICAgICAgICAgICB7dHlwZTogJ3NlcGFyYXRvcid9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdEaXNjb3JkJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9kaXNjb3JkLmdnL0dUOE1oQTYnKSB9LFxuXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ1JlZGRpdCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vci9Qb2xhckJvb2tzaGVsZi8nKSB9LFxuXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ0xlYXJuIE1vcmUnLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2dpdGh1Yi5jb20vYnVydG9uYXRvci9wb2xhci1ib29rc2hlbGYnKSB9LFxuICAgICAgICAgICAgICAgIHt0eXBlOiAnc2VwYXJhdG9yJ30sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ0Nvb2tpZSBQb2xpY3knLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2dldHBvbGFyaXplZC5pby9jb29raWUtcG9saWN5Lmh0bWwnKSB9LFxuXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ1Rlcm1zIG9mIFNlcnZpY2UnLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2dldHBvbGFyaXplZC5pby90ZXJtcy1vZi1zZXJ2aWNlLmh0bWwnKSB9LFxuXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ1ByaXZhY3kgUG9saWN5JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9nZXRwb2xhcml6ZWQuaW8vcHJpdmFjeS1wb2xpY3kuaHRtbCcpIH0sXG5cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dIZWxwQWJvdXREaWFsb2coKSB7XG5cbiAgICAgICAgZGlhbG9nLnNob3dNZXNzYWdlQm94KEJyb3dzZXJXaW5kb3cuZ2V0Rm9jdXNlZFdpbmRvdygpISwge1xuICAgICAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICAgICAgYnV0dG9uczogWydPSyddLFxuICAgICAgICAgICAgdGl0bGU6ICdQb2xhcicsXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLmNyZWF0ZUFib3V0TWVzc2FnZSgpLFxuICAgICAgICAgICAgZGV0YWlsOiAnJyxcbiAgICAgICAgICAgIC8vIGljb246IEFQUF9JQ09OXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cblxuLy8gVE9ETzogdGhpcyBpcyBhIHNob3J0IHRlcm0gd29yayBhcm91bmQgdG8gZW5hYmxlIHNlbGVjdGVkIG9wdGlvbnMgZnJvbSBKVVNUXG4vLyB0aGUgZWRpdG9yIHdpbmRvdy5cbmV4cG9ydCBlbnVtIE1haW5NZW51TW9kZSB7XG4gICAgRE9DX1JFUE9fQVBQLFxuICAgIFZJRVdFUl9BUFBcbn1cbiJdfQ==