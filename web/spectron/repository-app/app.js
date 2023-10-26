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
const chai_1 = require("chai");
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const RepositoryApp_1 = require("../../js/apps/repository/RepositoryApp");
const dom_testing_library_1 = require("dom-testing-library");
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(this, void 0, void 0, function* () {
    yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.test-repository-app');
    yield new RepositoryApp_1.RepositoryApp().start();
    console.log("Running within SpectronRenderer now.");
    yield dom_testing_library_1.wait(() => {
        console.log("Looking for elements...");
        chai_1.assert.ok(document.getElementById('doc-table'));
        return document.querySelectorAll("#doc-table .rt-tr-group").length >= 0;
    });
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFDNUIscUVBQWdFO0FBQ2hFLDBFQUFxRTtBQUVyRSw2REFBeUM7QUFDekMsNkRBQXdEO0FBRXhELG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFPLEtBQUssRUFBRSxFQUFFO0lBRWpDLE1BQU0sMkJBQVksQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBRTdELE1BQU0sSUFBSSw2QkFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBRXBELE1BQU0sMEJBQUksQ0FBQyxHQUFHLEVBQUU7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFHdkMsYUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxRQUFRLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1NwZWN0cm9uUmVuZGVyZXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25SZW5kZXJlcic7XG5pbXBvcnQge1JlcG9zaXRvcnlBcHB9IGZyb20gJy4uLy4uL2pzL2FwcHMvcmVwb3NpdG9yeS9SZXBvc2l0b3J5QXBwJztcblxuaW1wb3J0IHt3YWl0fSBmcm9tICdkb20tdGVzdGluZy1saWJyYXJ5JztcbmltcG9ydCB7UG9sYXJEYXRhRGlyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1BvbGFyRGF0YURpcic7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jIChzdGF0ZSkgPT4ge1xuXG4gICAgYXdhaXQgUG9sYXJEYXRhRGlyLnVzZUZyZXNoRGlyZWN0b3J5KCcudGVzdC1yZXBvc2l0b3J5LWFwcCcpO1xuXG4gICAgYXdhaXQgbmV3IFJlcG9zaXRvcnlBcHAoKS5zdGFydCgpO1xuXG4gICAgY29uc29sZS5sb2coXCJSdW5uaW5nIHdpdGhpbiBTcGVjdHJvblJlbmRlcmVyIG5vdy5cIik7XG5cbiAgICBhd2FpdCB3YWl0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb29raW5nIGZvciBlbGVtZW50cy4uLlwiKTtcblxuICAgICAgICAvLyBub3cgd2FpdCBmb3IgdGhlIHBhZ2UgdG8gYmUgcmVuZGVyZWQgd2l0aCBkb2N1bWVudHNcbiAgICAgICAgYXNzZXJ0Lm9rKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2MtdGFibGUnKSk7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2RvYy10YWJsZSAucnQtdHItZ3JvdXBcIikubGVuZ3RoID49IDA7XG4gICAgfSk7XG5cbiAgICBhd2FpdCBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG59KTtcblxuIl19