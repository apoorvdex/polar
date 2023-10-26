"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap");
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const ReactDOM = __importStar(require("react-dom"));
const React = __importStar(require("react"));
const RichTextEditor4_1 = require("../../js/apps/card_creator/elements/schemaform/RichTextEditor4");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(this, void 0, void 0, function* () {
    ReactDOM.render(React.createElement(RichTextEditor4_1.RichTextEditor4, { id: 'foo' }), document.getElementById("app"));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEscUJBQW1CO0FBQ25CLHFFQUFnRTtBQUNoRSxvREFBc0M7QUFDdEMsNkNBQStCO0FBQy9CLG9HQUErRjtBQUUvRixtQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO0lBYzVCLFFBQVEsQ0FBQyxNQUFNLENBQ1gsb0JBQUMsaUNBQWUsSUFBQyxFQUFFLEVBQUMsS0FBSyxHQUFFLEVBQzNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQ2pDLENBQUM7QUFHTixDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsICQgKi9cblxuaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UmljaFRleHRFZGl0b3I0fSBmcm9tICcuLi8uLi9qcy9hcHBzL2NhcmRfY3JlYXRvci9lbGVtZW50cy9zY2hlbWFmb3JtL1JpY2hUZXh0RWRpdG9yNCc7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jICgpID0+IHtcblxuICAgIC8vIHRoaXMgZGlzYWJsZXMgdGFiIGlucHV0IHNvIHRoYXQgd2UgY2FuIGdvIGJhY2sgYW5kIGZvcnRoIGJldHdlZW4gZWRpdG9yXG4gICAgLy8gY29udHJvbHMgZWFzaWx5LlxuICAgIC8vIGRlbGV0ZSAoPGFueT4gJCkuc3VtbWVybm90ZS5vcHRpb25zLmtleU1hcC5wYy5UQUI7XG4gICAgLy8gZGVsZXRlICg8YW55PiAkKS5zdW1tZXJub3RlLm9wdGlvbnMua2V5TWFwLm1hYy5UQUI7XG4gICAgLy9cbiAgICAvLyAkKCcjYXBwJykuc3VtbWVybm90ZSh7XG4gICAgLy8gICAgIGhlaWdodDogMzAwLFxuICAgIC8vICAgICBtaW5IZWlnaHQ6IDE1MCxcbiAgICAvLyAgICAgYWlyTW9kZTogdHJ1ZVxuICAgIC8vIH0pO1xuXG4gICAgLy9cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgIDxSaWNoVGV4dEVkaXRvcjQgaWQ9J2ZvbycvPixcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIilcbiAgICApO1xuXG5cbn0pO1xuXG5cblxuIl19