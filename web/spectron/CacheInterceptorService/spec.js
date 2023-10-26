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
const SpectronSpec_1 = require("../../js/test/SpectronSpec");
const Spectron_1 = require("../../js/test/Spectron");
const MockPHZWriter_1 = require("../../js/phz/MockPHZWriter");
const FilePaths_1 = require("../../js/util/FilePaths");
describe("CacheInterceptorService", function () {
    this.timeout(30000);
    Spectron_1.Spectron.setup(__dirname);
    const path = FilePaths_1.FilePaths.createTempName("cache-interceptor-service.phz");
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield MockPHZWriter_1.MockPHZWriter.write(path);
        });
    });
    it('Load PHZ file via cache', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZEQUF3RDtBQUN4RCxxREFBZ0Q7QUFDaEQsOERBQXlEO0FBQ3pELHVEQUFrRDtBQUdsRCxRQUFRLENBQUMseUJBQXlCLEVBQUU7SUFFaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwQixtQkFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUUxQixNQUFNLElBQUksR0FBRyxxQkFBUyxDQUFDLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBRXZFLE1BQU0sQ0FBQzs7WUFFSCxNQUFNLDZCQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBDLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseUJBQXlCLEVBQUU7O1lBRTFCLE1BQU0sMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0RCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uU3BlY30gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblNwZWMnO1xuaW1wb3J0IHtTcGVjdHJvbn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbic7XG5pbXBvcnQge01vY2tQSFpXcml0ZXJ9IGZyb20gJy4uLy4uL2pzL3Boei9Nb2NrUEhaV3JpdGVyJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi8uLi9qcy91dGlsL0ZpbGVQYXRocyc7XG5cblxuZGVzY3JpYmUoXCJDYWNoZUludGVyY2VwdG9yU2VydmljZVwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICB0aGlzLnRpbWVvdXQoMzAwMDApO1xuXG4gICAgU3BlY3Ryb24uc2V0dXAoX19kaXJuYW1lKTtcblxuICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMuY3JlYXRlVGVtcE5hbWUoXCJjYWNoZS1pbnRlcmNlcHRvci1zZXJ2aWNlLnBoelwiKTtcblxuICAgIGJlZm9yZShhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBhd2FpdCBNb2NrUEhaV3JpdGVyLndyaXRlKHBhdGgpO1xuXG4gICAgfSk7XG5cbiAgICBpdCgnTG9hZCBQSFogZmlsZSB2aWEgY2FjaGUnLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBhd2FpdCBTcGVjdHJvblNwZWMuY3JlYXRlKHRoaXMuYXBwKS53YWl0Rm9yKHRydWUpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19