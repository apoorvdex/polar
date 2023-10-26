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
const Spectron_1 = require("../../js/test/Spectron");
const Assertions_1 = require("../../js/test/Assertions");
const TIMEOUT = 10000;
describe('Text Node Splitting', function () {
    this.timeout(TIMEOUT);
    Spectron_1.Spectron.setup(__dirname);
    xit('splitNode', function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(yield this.app.client.getWindowCount(), 1);
            let splitNodes = yield this.app.client.execute(() => {
                const { TextNodeRows } = require("../../js/highlights/text/selection/TextNodeRows");
                let p = document.querySelector("p");
                return TextNodeRows.splitElement(p);
            });
            chai_1.assert.equal(splitNodes.value, 1435);
        });
    });
    xit('computeTextRegions', function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(yield this.app.client.getWindowCount(), 1);
            let textRegions = yield this.app.client.execute(() => {
                const { TextNodeRows, NodeArray } = require("../../js/highlights/text/selection/TextNodeRows");
                let p = document.querySelector("p");
                TextNodeRows.splitElement(p);
                let nodeArray = NodeArray.createFromElement(p);
                if (nodeArray.constructor !== NodeArray) {
                    throw new Error("Got back the wrong object!");
                }
                let textRegions = TextNodeRows.computeTextRegions(nodeArray);
                return textRegions.map((current) => current.toJSON());
            });
            let expected = [
                {
                    "nrNodes": 284,
                    "text": "\n    1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    2.Sed pretium, dolor sed euismod tempor, diam urna\n    3.scelerisque tortor, vel semper ligula urna vel enim. Aenean\n    4.nec facilisis libero. Sed efficitur ac ligula in varius.\n    5.Pellentesque iaculis, enim ac "
                },
                {
                    "nrNodes": 12,
                    "text": "6. dignissim"
                },
                {
                    "nrNodes": 90,
                    "text": " aliquet, turpis\n    7.purus mattis felis, eget consequat eros velit et erat. 8.Curabitur "
                },
                {
                    "nrNodes": 10,
                    "text": "9. feugiat"
                },
                {
                    "nrNodes": 184,
                    "text": " 10.suscipit leo, vel\n\n\n    ultrices tortor sodales ut. Maecenas a magna eget nunc commodo rutrum ac et\n    augue. Quisque augue sem, ultricies ac ornare non, porta a eros. Morbi\n\n    "
                },
                {
                    "nrNodes": 5,
                    "text": "hello"
                },
                {
                    "nrNodes": 850,
                    "text": "\n\n    posuere, tellus nec cursus rhoncus, nibh leo ultricies urna, eget mollis mi\n    nisl nec purus. Mauris malesuada justo vitae finibus elementum. Donec\n    vestibulum erat ac sem consectetur eleifend. Nullam at nibh sed neque\n    accumsan tincidunt nec a enim. Aliquam pharetra orci tortor, eget gravida\n    felis dictum ac. Maecenas convallis nunc ultrices massa bibendum, et\n    dignissim elit tempus. Ut in luctus dolor, et maximus nisi. Etiam non\n    euismod sem.\n\n    Vestibulum pulvinar bibendum turpis at sodales. Vestibulum consectetur nulla\n    elementum eros rhoncus, non interdum diam tristique. Praesent interdum quam\n    in lacus finibus semper. Phasellus id feugiat tortor. Integer sed molestie\n    urna, a sodales libero. Morbi egestas egestas tortor sed sagittis. Aenean et\n    tellus non quam pellentesque ultrices vel non odio.\n"
                }
            ];
            Assertions_1.assertJSON(textRegions.value, expected);
        });
    });
    xit('computeTextBlocks', function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(yield this.app.client.getWindowCount(), 1);
            let textBlocks = yield this.app.client.execute(() => {
                const { TextNodeRows, NodeArray } = require("../../js/highlights/text/selection/TextNodeRows");
                let p = document.querySelector("p");
                TextNodeRows.splitElement(p);
                let nodeArray = NodeArray.createFromElement(p);
                let textRegions = TextNodeRows.computeTextRegions(nodeArray);
                let textBlocks = TextNodeRows.computeTextBlocks(textRegions);
                return textBlocks.map((current) => current.toJSON());
            });
            let expected = [
                {
                    "nrNodes": 68,
                    "text": "\n    1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    "
                },
                {
                    "nrNodes": 55,
                    "text": "2.Sed pretium, dolor sed euismod tempor, diam urna\n    "
                },
                {
                    "nrNodes": 66,
                    "text": "3.scelerisque tortor, vel semper ligula urna vel enim. Aenean\n    "
                },
                {
                    "nrNodes": 63,
                    "text": "4.nec facilisis libero. Sed efficitur ac ligula in varius.\n    "
                },
                {
                    "nrNodes": 32,
                    "text": "5.Pellentesque iaculis, enim ac "
                },
                {
                    "nrNodes": 12,
                    "text": "6. dignissim"
                },
                {
                    "nrNodes": 21,
                    "text": " aliquet, turpis\n    "
                },
                {
                    "nrNodes": 57,
                    "text": "7.purus mattis felis, eget consequat eros velit et erat. "
                },
                {
                    "nrNodes": 12,
                    "text": "8.Curabitur "
                },
                {
                    "nrNodes": 10,
                    "text": "9. feugiat"
                },
                {
                    "nrNodes": 44,
                    "text": " 10.suscipit leo, vel\n\n\n    ultrices tortor "
                },
                {
                    "nrNodes": 54,
                    "text": "sodales ut. Maecenas a magna eget nunc commodo rutrum "
                },
                {
                    "nrNodes": 61,
                    "text": "ac et\n    augue. Quisque augue sem, ultricies ac ornare non, "
                },
                {
                    "nrNodes": 25,
                    "text": "porta a eros. Morbi\n\n    "
                },
                {
                    "nrNodes": 5,
                    "text": "hello"
                },
                {
                    "nrNodes": 33,
                    "text": "\n\n    posuere, tellus nec cursus "
                },
                {
                    "nrNodes": 62,
                    "text": "rhoncus, nibh leo ultricies urna, eget mollis mi\n    nisl nec "
                },
                {
                    "nrNodes": 55,
                    "text": "purus. Mauris malesuada justo vitae finibus elementum. "
                },
                {
                    "nrNodes": 62,
                    "text": "Donec\n    vestibulum erat ac sem consectetur eleifend. Nullam "
                },
                {
                    "nrNodes": 61,
                    "text": "at nibh sed neque\n    accumsan tincidunt nec a enim. Aliquam "
                },
                {
                    "nrNodes": 65,
                    "text": "pharetra orci tortor, eget gravida\n    felis dictum ac. Maecenas "
                },
                {
                    "nrNodes": 62,
                    "text": "convallis nunc ultrices massa bibendum, et\n    dignissim elit "
                },
                {
                    "nrNodes": 59,
                    "text": "tempus. Ut in luctus dolor, et maximus nisi. Etiam non\n    "
                },
                {
                    "nrNodes": 57,
                    "text": "euismod sem.\n\n    Vestibulum pulvinar bibendum turpis at "
                },
                {
                    "nrNodes": 57,
                    "text": "sodales. Vestibulum consectetur nulla\n    elementum eros "
                },
                {
                    "nrNodes": 56,
                    "text": "rhoncus, non interdum diam tristique. Praesent interdum "
                },
                {
                    "nrNodes": 63,
                    "text": "quam\n    in lacus finibus semper. Phasellus id feugiat tortor. "
                },
                {
                    "nrNodes": 63,
                    "text": "Integer sed molestie\n    urna, a sodales libero. Morbi egestas "
                },
                {
                    "nrNodes": 59,
                    "text": "egestas tortor sed sagittis. Aenean et\n    tellus non quam "
                },
                {
                    "nrNodes": 36,
                    "text": "pellentesque ultrices vel non odio.\n"
                }
            ];
            Assertions_1.assertJSON(textBlocks.value, expected);
        });
    });
    xit('mergeTextBlocks', function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(yield this.app.client.getWindowCount(), 1);
            let textBlocks = yield this.app.client.execute(() => {
                const { TextNodeRows, NodeArray } = require("../../js/highlights/text/selection/TextNodeRows");
                let p = document.querySelector("p");
                TextNodeRows.splitElement(p);
                let nodeArray = NodeArray.createFromElement(p);
                let textRegions = TextNodeRows.computeTextRegions(nodeArray);
                let textBlocks = TextNodeRows.computeTextBlocks(textRegions);
                let mergedTextBlocks = TextNodeRows.mergeTextBlocks(textBlocks);
                return mergedTextBlocks.map((current) => current.toExternal());
            });
            let expected = [
                {
                    "rect": {
                        "bottom": 100,
                        "height": 19,
                        "left": 8,
                        "right": 478.3125,
                        "toJSON": {},
                        "top": 81,
                        "width": 470.3125,
                        "x": 8,
                        "y": 81
                    },
                    "text": "\n    1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    "
                },
                {
                    "rect": {
                        "bottom": 119,
                        "height": 19,
                        "left": 8,
                        "right": 437.140625,
                        "toJSON": {},
                        "top": 100,
                        "width": 429.140625,
                        "x": 8,
                        "y": 100
                    },
                    "text": "2.Sed pretium, dolor sed euismod tempor, diam urna\n    "
                },
                {
                    "rect": {
                        "bottom": 138,
                        "height": 19,
                        "left": 8,
                        "right": 503.40625,
                        "toJSON": {},
                        "top": 119,
                        "width": 495.40625,
                        "x": 8,
                        "y": 119
                    },
                    "text": "3.scelerisque tortor, vel semper ligula urna vel enim. Aenean\n    "
                },
                {
                    "rect": {
                        "bottom": 157,
                        "height": 19,
                        "left": 8,
                        "right": 435.421875,
                        "toJSON": {},
                        "top": 138,
                        "width": 427.421875,
                        "x": 8,
                        "y": 138
                    },
                    "text": "4.nec facilisis libero. Sed efficitur ac ligula in varius.\n    "
                },
                {
                    "rect": {
                        "bottom": 176,
                        "height": 19,
                        "left": 8,
                        "right": 263.265625,
                        "toJSON": {},
                        "top": 157,
                        "width": 255.265625,
                        "x": 8,
                        "y": 157
                    },
                    "text": "5.Pellentesque iaculis, enim ac "
                },
                {
                    "rect": {
                        "bottom": 176,
                        "height": 19,
                        "left": 263.265625,
                        "right": 361.34375,
                        "toJSON": {},
                        "top": 157,
                        "width": 98.078125,
                        "x": 263.265625,
                        "y": 157
                    },
                    "text": "6. dignissim"
                },
                {
                    "rect": {
                        "bottom": 176,
                        "height": 19,
                        "left": 361.34375,
                        "right": 480.765625,
                        "toJSON": {},
                        "top": 157,
                        "width": 119.421875,
                        "x": 361.34375,
                        "y": 157
                    },
                    "text": " aliquet, turpis\n    "
                },
                {
                    "rect": {
                        "bottom": 195,
                        "height": 19,
                        "left": 8,
                        "right": 443.390625,
                        "toJSON": {},
                        "top": 176,
                        "width": 435.390625,
                        "x": 8,
                        "y": 176
                    },
                    "text": "7.purus mattis felis, eget consequat eros velit et erat. "
                },
                {
                    "rect": {
                        "bottom": 214,
                        "height": 19,
                        "left": 8,
                        "right": 107.828125,
                        "toJSON": {},
                        "top": 195,
                        "width": 99.828125,
                        "x": 8,
                        "y": 195
                    },
                    "text": "8.Curabitur "
                },
                {
                    "rect": {
                        "bottom": 214,
                        "height": 19,
                        "left": 107.828125,
                        "right": 193.8125,
                        "toJSON": {},
                        "top": 195,
                        "width": 85.984375,
                        "x": 107.828125,
                        "y": 195
                    },
                    "text": "9. feugiat"
                },
                {
                    "rect": {
                        "bottom": 214,
                        "height": 19,
                        "left": 193.8125,
                        "right": 468.890625,
                        "toJSON": {},
                        "top": 195,
                        "width": 275.078125,
                        "x": 193.8125,
                        "y": 195
                    },
                    "text": " 10.suscipit leo, vel\n\n\n    ultrices tortor "
                },
                {
                    "rect": {
                        "bottom": 233,
                        "height": 19,
                        "left": 8,
                        "right": 488.578125,
                        "toJSON": {},
                        "top": 214,
                        "width": 480.578125,
                        "x": 8,
                        "y": 214
                    },
                    "text": "sodales ut. Maecenas a magna eget nunc commodo rutrum "
                },
                {
                    "rect": {
                        "bottom": 252,
                        "height": 19,
                        "left": 8,
                        "right": 472.109375,
                        "toJSON": {},
                        "top": 233,
                        "width": 464.109375,
                        "x": 8,
                        "y": 233
                    },
                    "text": "ac et\n    augue. Quisque augue sem, ultricies ac ornare non, "
                },
                {
                    "rect": {
                        "bottom": 271,
                        "height": 19,
                        "left": 8,
                        "right": 170.4375,
                        "toJSON": {},
                        "top": 252,
                        "width": 162.4375,
                        "x": 8,
                        "y": 252
                    },
                    "text": "porta a eros. Morbi\n\n    "
                },
                {
                    "rect": {
                        "bottom": 271,
                        "height": 19,
                        "left": 170.4375,
                        "right": 215.078125,
                        "toJSON": {},
                        "top": 252,
                        "width": 44.640625,
                        "x": 170.4375,
                        "y": 252
                    },
                    "text": "hello"
                },
                {
                    "rect": {
                        "bottom": 271,
                        "height": 19,
                        "left": 215.078125,
                        "right": 432.5,
                        "toJSON": {},
                        "top": 252,
                        "width": 217.421875,
                        "x": 215.078125,
                        "y": 252
                    },
                    "text": "\n\n    posuere, tellus nec cursus "
                },
                {
                    "rect": {
                        "bottom": 290,
                        "height": 19,
                        "left": 8,
                        "right": 455.40625,
                        "toJSON": {},
                        "top": 271,
                        "width": 447.40625,
                        "x": 8,
                        "y": 271
                    },
                    "text": "rhoncus, nibh leo ultricies urna, eget mollis mi\n    nisl nec "
                },
                {
                    "rect": {
                        "bottom": 309,
                        "height": 19,
                        "left": 8,
                        "right": 464.625,
                        "toJSON": {},
                        "top": 290,
                        "width": 456.625,
                        "x": 8,
                        "y": 290
                    },
                    "text": "purus. Mauris malesuada justo vitae finibus elementum. "
                },
                {
                    "rect": {
                        "bottom": 328,
                        "height": 19,
                        "left": 8,
                        "right": 493.90625,
                        "toJSON": {},
                        "top": 309,
                        "width": 485.90625,
                        "x": 8,
                        "y": 309
                    },
                    "text": "Donec\n    vestibulum erat ac sem consectetur eleifend. Nullam "
                },
                {
                    "rect": {
                        "bottom": 347,
                        "height": 19,
                        "left": 8,
                        "right": 488.078125,
                        "toJSON": {},
                        "top": 328,
                        "width": 480.078125,
                        "x": 8,
                        "y": 328
                    },
                    "text": "at nibh sed neque\n    accumsan tincidunt nec a enim. Aliquam "
                },
                {
                    "rect": {
                        "bottom": 366,
                        "height": 19,
                        "left": 8,
                        "right": 494.109375,
                        "toJSON": {},
                        "top": 347,
                        "width": 486.109375,
                        "x": 8,
                        "y": 347
                    },
                    "text": "pharetra orci tortor, eget gravida\n    felis dictum ac. Maecenas "
                },
                {
                    "rect": {
                        "bottom": 385,
                        "height": 19,
                        "left": 8,
                        "right": 472.390625,
                        "toJSON": {},
                        "top": 366,
                        "width": 464.390625,
                        "x": 8,
                        "y": 366
                    },
                    "text": "convallis nunc ultrices massa bibendum, et\n    dignissim elit "
                },
                {
                    "rect": {
                        "bottom": 404,
                        "height": 19,
                        "left": 8,
                        "right": 449.40625,
                        "toJSON": {},
                        "top": 385,
                        "width": 441.40625,
                        "x": 8,
                        "y": 385
                    },
                    "text": "tempus. Ut in luctus dolor, et maximus nisi. Etiam non\n    "
                },
                {
                    "rect": {
                        "bottom": 423,
                        "height": 19,
                        "left": 8,
                        "right": 447.375,
                        "toJSON": {},
                        "top": 404,
                        "width": 439.375,
                        "x": 8,
                        "y": 404
                    },
                    "text": "euismod sem.\n\n    Vestibulum pulvinar bibendum turpis at "
                },
                {
                    "rect": {
                        "bottom": 442,
                        "height": 19,
                        "left": 8,
                        "right": 451.453125,
                        "toJSON": {},
                        "top": 423,
                        "width": 443.453125,
                        "x": 8,
                        "y": 423
                    },
                    "text": "sodales. Vestibulum consectetur nulla\n    elementum eros "
                },
                {
                    "rect": {
                        "bottom": 461,
                        "height": 19,
                        "left": 8,
                        "right": 474.546875,
                        "toJSON": {},
                        "top": 442,
                        "width": 466.546875,
                        "x": 8,
                        "y": 442
                    },
                    "text": "rhoncus, non interdum diam tristique. Praesent interdum "
                },
                {
                    "rect": {
                        "bottom": 480,
                        "height": 19,
                        "left": 8,
                        "right": 470.0625,
                        "toJSON": {},
                        "top": 461,
                        "width": 462.0625,
                        "x": 8,
                        "y": 461
                    },
                    "text": "quam\n    in lacus finibus semper. Phasellus id feugiat tortor. "
                },
                {
                    "rect": {
                        "bottom": 499,
                        "height": 19,
                        "left": 8,
                        "right": 480.5625,
                        "toJSON": {},
                        "top": 480,
                        "width": 472.5625,
                        "x": 8,
                        "y": 480
                    },
                    "text": "Integer sed molestie\n    urna, a sodales libero. Morbi egestas "
                },
                {
                    "rect": {
                        "bottom": 518,
                        "height": 19,
                        "left": 8,
                        "right": 446.65625,
                        "toJSON": {},
                        "top": 499,
                        "width": 438.65625,
                        "x": 8,
                        "y": 499
                    },
                    "text": "egestas tortor sed sagittis. Aenean et\n    tellus non quam "
                },
                {
                    "rect": {
                        "bottom": 537,
                        "height": 19,
                        "left": 8,
                        "right": 286.734375,
                        "toJSON": {},
                        "top": 518,
                        "width": 278.734375,
                        "x": 8,
                        "y": 518
                    },
                    "text": "pellentesque ultrices vel non odio.\n"
                }
            ];
            Assertions_1.assertJSON(textBlocks.value, expected);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QixxREFBZ0Q7QUFDaEQseURBQW9EO0FBRXBELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQTtBQUVyQixRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFFNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV0QixtQkFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUUxQixHQUFHLENBQUMsV0FBVyxFQUFFOztZQUViLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUd4RCxJQUFJLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7Z0JBRWhELE1BQU0sRUFBQyxZQUFZLEVBQUMsR0FBRyxPQUFPLENBQUMsaURBQWlELENBQUMsQ0FBQztnQkFFbEYsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFcEMsT0FBTyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXhDLENBQUMsQ0FBQyxDQUFDO1lBRUgsYUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpDLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsb0JBQW9CLEVBQUU7O1lBRXRCLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUd4RCxJQUFJLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxH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VSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFM0MsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtTcGVjdHJvbn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbic7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uL2pzL3Rlc3QvQXNzZXJ0aW9ucyc7XG5cbmNvbnN0IFRJTUVPVVQgPSAxMDAwMFxuXG5kZXNjcmliZSgnVGV4dCBOb2RlIFNwbGl0dGluZycsIGZ1bmN0aW9uICgpIHtcblxuICAgIHRoaXMudGltZW91dChUSU1FT1VUKTtcblxuICAgIFNwZWN0cm9uLnNldHVwKF9fZGlybmFtZSk7XG5cbiAgICB4aXQoJ3NwbGl0Tm9kZScsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgdGhpcy5hcHAuY2xpZW50LmdldFdpbmRvd0NvdW50KCksIDEpO1xuXG4gICAgICAgIC8vIGZpcnN0IGNoZWNrIHRoYXQgd2UgY2FuIHNwbGl0IHRoZSBiYXNpYyBub2RlcyBwcm9wZXJseS5cbiAgICAgICAgbGV0IHNwbGl0Tm9kZXMgPSBhd2FpdCB0aGlzLmFwcC5jbGllbnQuZXhlY3V0ZSgoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHtUZXh0Tm9kZVJvd3N9ID0gcmVxdWlyZShcIi4uLy4uL2pzL2hpZ2hsaWdodHMvdGV4dC9zZWxlY3Rpb24vVGV4dE5vZGVSb3dzXCIpO1xuXG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gVGV4dE5vZGVSb3dzLnNwbGl0RWxlbWVudChwKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoc3BsaXROb2Rlcy52YWx1ZSwgMTQzNSk7XG5cbiAgICB9KTtcblxuICAgIHhpdCgnY29tcHV0ZVRleHRSZWdpb25zJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCB0aGlzLmFwcC5jbGllbnQuZ2V0V2luZG93Q291bnQoKSwgMSk7XG5cbiAgICAgICAgLy8gZmlyc3QgY2hlY2sgdGhhdCB3ZSBjYW4gc3BsaXQgdGhlIGJhc2ljIG5vZGVzIHByb3Blcmx5LlxuICAgICAgICBsZXQgdGV4dFJlZ2lvbnMgPSBhd2FpdCB0aGlzLmFwcC5jbGllbnQuZXhlY3V0ZSgoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHtUZXh0Tm9kZVJvd3MsIE5vZGVBcnJheX0gPSByZXF1aXJlKFwiLi4vLi4vanMvaGlnaGxpZ2h0cy90ZXh0L3NlbGVjdGlvbi9UZXh0Tm9kZVJvd3NcIik7XG5cbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInBcIik7XG5cbiAgICAgICAgICAgIFRleHROb2RlUm93cy5zcGxpdEVsZW1lbnQocCk7XG4gICAgICAgICAgICBsZXQgbm9kZUFycmF5ID0gTm9kZUFycmF5LmNyZWF0ZUZyb21FbGVtZW50KHApO1xuXG4gICAgICAgICAgICBpZihub2RlQXJyYXkuY29uc3RydWN0b3IgIT09IE5vZGVBcnJheSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdvdCBiYWNrIHRoZSB3cm9uZyBvYmplY3QhXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdGV4dFJlZ2lvbnMgPSBUZXh0Tm9kZVJvd3MuY29tcHV0ZVRleHRSZWdpb25zKG5vZGVBcnJheSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZXh0UmVnaW9ucy5tYXAoKGN1cnJlbnQ6IGFueSkgPT4gY3VycmVudC50b0pTT04oKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGV4cGVjdGVkID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiAyODQsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXFxuICAgIDEuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cXG4gICAgMi5TZWQgcHJldGl1bSwgZG9sb3Igc2VkIGV1aXNtb2QgdGVtcG9yLCBkaWFtIHVybmFcXG4gICAgMy5zY2VsZXJpc3F1ZSB0b3J0b3IsIHZlbCBzZW1wZXIgbGlndWxhIHVybmEgdmVsIGVuaW0uIEFlbmVhblxcbiAgICA0Lm5lYyBmYWNpbGlzaXMgbGliZXJvLiBTZWQgZWZmaWNpdHVyIGFjIGxpZ3VsYSBpbiB2YXJpdXMuXFxuICAgIDUuUGVsbGVudGVzcXVlIGlhY3VsaXMsIGVuaW0gYWMgXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDEyLFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjYuIGRpZ25pc3NpbVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA5MCxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIgYWxpcXVldCwgdHVycGlzXFxuICAgIDcucHVydXMgbWF0dGlzIGZlbGlzLCBlZ2V0IGNvbnNlcXVhdCBlcm9zIHZlbGl0IGV0IGVyYXQuIDguQ3VyYWJpdHVyIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiAxMCxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCI5LiBmZXVnaWF0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDE4NCxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIgMTAuc3VzY2lwaXQgbGVvLCB2ZWxcXG5cXG5cXG4gICAgdWx0cmljZXMgdG9ydG9yIHNvZGFsZXMgdXQuIE1hZWNlbmFzIGEgbWFnbmEgZWdldCBudW5jIGNvbW1vZG8gcnV0cnVtIGFjIGV0XFxuICAgIGF1Z3VlLiBRdWlzcXVlIGF1Z3VlIHNlbSwgdWx0cmljaWVzIGFjIG9ybmFyZSBub24sIHBvcnRhIGEgZXJvcy4gTW9yYmlcXG5cXG4gICAgXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDUsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiaGVsbG9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogODUwLFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlxcblxcbiAgICBwb3N1ZXJlLCB0ZWxsdXMgbmVjIGN1cnN1cyByaG9uY3VzLCBuaWJoIGxlbyB1bHRyaWNpZXMgdXJuYSwgZWdldCBtb2xsaXMgbWlcXG4gICAgbmlzbCBuZWMgcHVydXMuIE1hdXJpcyBtYWxlc3VhZGEganVzdG8gdml0YWUgZmluaWJ1cyBlbGVtZW50dW0uIERvbmVjXFxuICAgIHZlc3RpYnVsdW0gZXJhdCBhYyBzZW0gY29uc2VjdGV0dXIgZWxlaWZlbmQuIE51bGxhbSBhdCBuaWJoIHNlZCBuZXF1ZVxcbiAgICBhY2N1bXNhbiB0aW5jaWR1bnQgbmVjIGEgZW5pbS4gQWxpcXVhbSBwaGFyZXRyYSBvcmNpIHRvcnRvciwgZWdldCBncmF2aWRhXFxuICAgIGZlbGlzIGRpY3R1bSBhYy4gTWFlY2VuYXMgY29udmFsbGlzIG51bmMgdWx0cmljZXMgbWFzc2EgYmliZW5kdW0sIGV0XFxuICAgIGRpZ25pc3NpbSBlbGl0IHRlbXB1cy4gVXQgaW4gbHVjdHVzIGRvbG9yLCBldCBtYXhpbXVzIG5pc2kuIEV0aWFtIG5vblxcbiAgICBldWlzbW9kIHNlbS5cXG5cXG4gICAgVmVzdGlidWx1bSBwdWx2aW5hciBiaWJlbmR1bSB0dXJwaXMgYXQgc29kYWxlcy4gVmVzdGlidWx1bSBjb25zZWN0ZXR1ciBudWxsYVxcbiAgICBlbGVtZW50dW0gZXJvcyByaG9uY3VzLCBub24gaW50ZXJkdW0gZGlhbSB0cmlzdGlxdWUuIFByYWVzZW50IGludGVyZHVtIHF1YW1cXG4gICAgaW4gbGFjdXMgZmluaWJ1cyBzZW1wZXIuIFBoYXNlbGx1cyBpZCBmZXVnaWF0IHRvcnRvci4gSW50ZWdlciBzZWQgbW9sZXN0aWVcXG4gICAgdXJuYSwgYSBzb2RhbGVzIGxpYmVyby4gTW9yYmkgZWdlc3RhcyBlZ2VzdGFzIHRvcnRvciBzZWQgc2FnaXR0aXMuIEFlbmVhbiBldFxcbiAgICB0ZWxsdXMgbm9uIHF1YW0gcGVsbGVudGVzcXVlIHVsdHJpY2VzIHZlbCBub24gb2Rpby5cXG5cIlxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGFzc2VydEpTT04odGV4dFJlZ2lvbnMudmFsdWUsIGV4cGVjdGVkKTtcblxuICAgIH0pO1xuXG4gICAgeGl0KCdjb21wdXRlVGV4dEJsb2NrcycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgdGhpcy5hcHAuY2xpZW50LmdldFdpbmRvd0NvdW50KCksIDEpO1xuXG4gICAgICAgIC8vIGZpcnN0IGNoZWNrIHRoYXQgd2UgY2FuIHNwbGl0IHRoZSBiYXNpYyBub2RlcyBwcm9wZXJseS5cbiAgICAgICAgbGV0IHRleHRCbG9ja3MgPSBhd2FpdCB0aGlzLmFwcC5jbGllbnQuZXhlY3V0ZSgoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHtUZXh0Tm9kZVJvd3MsIE5vZGVBcnJheX0gPSByZXF1aXJlKFwiLi4vLi4vanMvaGlnaGxpZ2h0cy90ZXh0L3NlbGVjdGlvbi9UZXh0Tm9kZVJvd3NcIik7XG5cbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInBcIik7XG5cbiAgICAgICAgICAgIFRleHROb2RlUm93cy5zcGxpdEVsZW1lbnQocCk7XG5cbiAgICAgICAgICAgIGxldCBub2RlQXJyYXkgPSBOb2RlQXJyYXkuY3JlYXRlRnJvbUVsZW1lbnQocCk7XG4gICAgICAgICAgICBsZXQgdGV4dFJlZ2lvbnMgPSBUZXh0Tm9kZVJvd3MuY29tcHV0ZVRleHRSZWdpb25zKG5vZGVBcnJheSk7XG4gICAgICAgICAgICBsZXQgdGV4dEJsb2NrcyA9IFRleHROb2RlUm93cy5jb21wdXRlVGV4dEJsb2Nrcyh0ZXh0UmVnaW9ucyk7XG5cbiAgICAgICAgICAgIHJldHVybiB0ZXh0QmxvY2tzLm1hcCgoY3VycmVudDogYW55KSA9PiBjdXJyZW50LnRvSlNPTigpKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZXhwZWN0ZWQgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDY4LFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlxcbiAgICAxLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXFxuICAgIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA1NSxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIyLlNlZCBwcmV0aXVtLCBkb2xvciBzZWQgZXVpc21vZCB0ZW1wb3IsIGRpYW0gdXJuYVxcbiAgICBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNjYsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiMy5zY2VsZXJpc3F1ZSB0b3J0b3IsIHZlbCBzZW1wZXIgbGlndWxhIHVybmEgdmVsIGVuaW0uIEFlbmVhblxcbiAgICBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNjMsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiNC5uZWMgZmFjaWxpc2lzIGxpYmVyby4gU2VkIGVmZmljaXR1ciBhYyBsaWd1bGEgaW4gdmFyaXVzLlxcbiAgICBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogMzIsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiNS5QZWxsZW50ZXNxdWUgaWFjdWxpcywgZW5pbSBhYyBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogMTIsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiNi4gZGlnbmlzc2ltXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDIxLFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIiBhbGlxdWV0LCB0dXJwaXNcXG4gICAgXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDU3LFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjcucHVydXMgbWF0dGlzIGZlbGlzLCBlZ2V0IGNvbnNlcXVhdCBlcm9zIHZlbGl0IGV0IGVyYXQuIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiAxMixcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCI4LkN1cmFiaXR1ciBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogMTAsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiOS4gZmV1Z2lhdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA0NCxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIgMTAuc3VzY2lwaXQgbGVvLCB2ZWxcXG5cXG5cXG4gICAgdWx0cmljZXMgdG9ydG9yIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA1NCxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJzb2RhbGVzIHV0LiBNYWVjZW5hcyBhIG1hZ25hIGVnZXQgbnVuYyBjb21tb2RvIHJ1dHJ1bSBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNjEsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiYWMgZXRcXG4gICAgYXVndWUuIFF1aXNxdWUgYXVndWUgc2VtLCB1bHRyaWNpZXMgYWMgb3JuYXJlIG5vbiwgXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDI1LFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInBvcnRhIGEgZXJvcy4gTW9yYmlcXG5cXG4gICAgXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDUsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiaGVsbG9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogMzMsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXFxuXFxuICAgIHBvc3VlcmUsIHRlbGx1cyBuZWMgY3Vyc3VzIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA2MixcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJyaG9uY3VzLCBuaWJoIGxlbyB1bHRyaWNpZXMgdXJuYSwgZWdldCBtb2xsaXMgbWlcXG4gICAgbmlzbCBuZWMgXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDU1LFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInB1cnVzLiBNYXVyaXMgbWFsZXN1YWRhIGp1c3RvIHZpdGFlIGZpbmlidXMgZWxlbWVudHVtLiBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNjIsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiRG9uZWNcXG4gICAgdmVzdGlidWx1bSBlcmF0IGFjIHNlbSBjb25zZWN0ZXR1ciBlbGVpZmVuZC4gTnVsbGFtIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA2MSxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJhdCBuaWJoIHNlZCBuZXF1ZVxcbiAgICBhY2N1bXNhbiB0aW5jaWR1bnQgbmVjIGEgZW5pbS4gQWxpcXVhbSBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNjUsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwicGhhcmV0cmEgb3JjaSB0b3J0b3IsIGVnZXQgZ3JhdmlkYVxcbiAgICBmZWxpcyBkaWN0dW0gYWMuIE1hZWNlbmFzIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA2MixcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJjb252YWxsaXMgbnVuYyB1bHRyaWNlcyBtYXNzYSBiaWJlbmR1bSwgZXRcXG4gICAgZGlnbmlzc2ltIGVsaXQgXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDU5LFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInRlbXB1cy4gVXQgaW4gbHVjdHVzIGRvbG9yLCBldCBtYXhpbXVzIG5pc2kuIEV0aWFtIG5vblxcbiAgICBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNTcsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiZXVpc21vZCBzZW0uXFxuXFxuICAgIFZlc3RpYnVsdW0gcHVsdmluYXIgYmliZW5kdW0gdHVycGlzIGF0IFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA1NyxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJzb2RhbGVzLiBWZXN0aWJ1bHVtIGNvbnNlY3RldHVyIG51bGxhXFxuICAgIGVsZW1lbnR1bSBlcm9zIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA1NixcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJyaG9uY3VzLCBub24gaW50ZXJkdW0gZGlhbSB0cmlzdGlxdWUuIFByYWVzZW50IGludGVyZHVtIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA2MyxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJxdWFtXFxuICAgIGluIGxhY3VzIGZpbmlidXMgc2VtcGVyLiBQaGFzZWxsdXMgaWQgZmV1Z2lhdCB0b3J0b3IuIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA2MyxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJJbnRlZ2VyIHNlZCBtb2xlc3RpZVxcbiAgICB1cm5hLCBhIHNvZGFsZXMgbGliZXJvLiBNb3JiaSBlZ2VzdGFzIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA1OSxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJlZ2VzdGFzIHRvcnRvciBzZWQgc2FnaXR0aXMuIEFlbmVhbiBldFxcbiAgICB0ZWxsdXMgbm9uIHF1YW0gXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDM2LFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInBlbGxlbnRlc3F1ZSB1bHRyaWNlcyB2ZWwgbm9uIG9kaW8uXFxuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBhc3NlcnRKU09OKHRleHRCbG9ja3MudmFsdWUsIGV4cGVjdGVkKTtcblxuICAgIH0pO1xuXG4gICAgeGl0KCdtZXJnZVRleHRCbG9ja3MnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKGF3YWl0IHRoaXMuYXBwLmNsaWVudC5nZXRXaW5kb3dDb3VudCgpLCAxKTtcblxuICAgICAgICAvLyBmaXJzdCBjaGVjayB0aGF0IHdlIGNhbiBzcGxpdCB0aGUgYmFzaWMgbm9kZXMgcHJvcGVybHkuXG4gICAgICAgIGxldCB0ZXh0QmxvY2tzID0gYXdhaXQgdGhpcy5hcHAuY2xpZW50LmV4ZWN1dGUoKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB7VGV4dE5vZGVSb3dzLCBOb2RlQXJyYXl9ID0gcmVxdWlyZShcIi4uLy4uL2pzL2hpZ2hsaWdodHMvdGV4dC9zZWxlY3Rpb24vVGV4dE5vZGVSb3dzXCIpO1xuXG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuXG4gICAgICAgICAgICBUZXh0Tm9kZVJvd3Muc3BsaXRFbGVtZW50KHApO1xuICAgICAgICAgICAgbGV0IG5vZGVBcnJheSA9IE5vZGVBcnJheS5jcmVhdGVGcm9tRWxlbWVudChwKTtcbiAgICAgICAgICAgIGxldCB0ZXh0UmVnaW9ucyA9IFRleHROb2RlUm93cy5jb21wdXRlVGV4dFJlZ2lvbnMobm9kZUFycmF5KTtcbiAgICAgICAgICAgIGxldCB0ZXh0QmxvY2tzID0gVGV4dE5vZGVSb3dzLmNvbXB1dGVUZXh0QmxvY2tzKHRleHRSZWdpb25zKTtcbiAgICAgICAgICAgIGxldCBtZXJnZWRUZXh0QmxvY2tzID0gVGV4dE5vZGVSb3dzLm1lcmdlVGV4dEJsb2Nrcyh0ZXh0QmxvY2tzKTtcbiAgICAgICAgICAgIHJldHVybiBtZXJnZWRUZXh0QmxvY2tzLm1hcCgoY3VycmVudDogYW55KSA9PiBjdXJyZW50LnRvRXh0ZXJuYWwoKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGV4cGVjdGVkID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDQ3OC4zMTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiA4MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDcwLjMxMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiA4MVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcXG4gICAgMS5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxcbiAgICBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMTE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogNDM3LjE0MDYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0MjkuMTQwNjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogMTAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjIuU2VkIHByZXRpdW0sIGRvbG9yIHNlZCBldWlzbW9kIHRlbXBvciwgZGlhbSB1cm5hXFxuICAgIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAxMzgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA1MDMuNDA2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDExOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDk1LjQwNjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogMTE5XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjMuc2NlbGVyaXNxdWUgdG9ydG9yLCB2ZWwgc2VtcGVyIGxpZ3VsYSB1cm5hIHZlbCBlbmltLiBBZW5lYW5cXG4gICAgXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDE1NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDQzNS40MjE4NzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDEzOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDI3LjQyMTg3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDEzOFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCI0Lm5lYyBmYWNpbGlzaXMgbGliZXJvLiBTZWQgZWZmaWNpdHVyIGFjIGxpZ3VsYSBpbiB2YXJpdXMuXFxuICAgIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAxNzYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAyNjMuMjY1NjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAxNTcsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDI1NS4yNjU2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAxNTdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiNS5QZWxsZW50ZXNxdWUgaWFjdWxpcywgZW5pbSBhYyBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMTc2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMjYzLjI2NTYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMzYxLjM0Mzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAxNTcsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDk4LjA3ODEyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiAyNjMuMjY1NjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDE1N1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCI2LiBkaWduaXNzaW1cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMTc2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMzYxLjM0Mzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0ODAuNzY1NjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAxNTcsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDExOS40MjE4NzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogMzYxLjM0Mzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDE1N1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCIgYWxpcXVldCwgdHVycGlzXFxuICAgIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAxOTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0NDMuMzkwNjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAxNzYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQzNS4zOTA2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAxNzZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiNy5wdXJ1cyBtYXR0aXMgZmVsaXMsIGVnZXQgY29uc2VxdWF0IGVyb3MgdmVsaXQgZXQgZXJhdC4gXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDIxNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDEwNy44MjgxMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDE5NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogOTkuODI4MTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogMTk1XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjguQ3VyYWJpdHVyIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAyMTQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAxMDcuODI4MTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAxOTMuODEyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMTk1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA4NS45ODQzNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogMTA3LjgyODEyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAxOTVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiOS4gZmV1Z2lhdFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAyMTQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAxOTMuODEyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogNDY4Ljg5MDYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMTk1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAyNzUuMDc4MTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDE5My44MTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDE5NVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCIgMTAuc3VzY2lwaXQgbGVvLCB2ZWxcXG5cXG5cXG4gICAgdWx0cmljZXMgdG9ydG9yIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAyMzMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0ODguNTc4MTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAyMTQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQ4MC41NzgxMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAyMTRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwic29kYWxlcyB1dC4gTWFlY2VuYXMgYSBtYWduYSBlZ2V0IG51bmMgY29tbW9kbyBydXRydW0gXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDI1MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDQ3Mi4xMDkzNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDIzMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDY0LjEwOTM3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDIzM1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJhYyBldFxcbiAgICBhdWd1ZS4gUXVpc3F1ZSBhdWd1ZSBzZW0sIHVsdHJpY2llcyBhYyBvcm5hcmUgbm9uLCBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMjcxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMTcwLjQzNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDI1MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMTYyLjQzNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAyNTJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwicG9ydGEgYSBlcm9zLiBNb3JiaVxcblxcbiAgICBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMjcxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMTcwLjQzNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDIxNS4wNzgxMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDI1MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDQuNjQwNjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDE3MC40Mzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDI1MlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJoZWxsb1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAyNzEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAyMTUuMDc4MTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0MzIuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMjUyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAyMTcuNDIxODc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDIxNS4wNzgxMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogMjUyXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlxcblxcbiAgICBwb3N1ZXJlLCB0ZWxsdXMgbmVjIGN1cnN1cyBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMjkwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogNDU1LjQwNjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAyNzEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQ0Ny40MDYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDI3MVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJyaG9uY3VzLCBuaWJoIGxlbyB1bHRyaWNpZXMgdXJuYSwgZWdldCBtb2xsaXMgbWlcXG4gICAgbmlzbCBuZWMgXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDMwOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDQ2NC42MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDI5MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDU2LjYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDI5MFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJwdXJ1cy4gTWF1cmlzIG1hbGVzdWFkYSBqdXN0byB2aXRhZSBmaW5pYnVzIGVsZW1lbnR1bS4gXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDMyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDQ5My45MDYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMzA5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0ODUuOTA2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAzMDlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiRG9uZWNcXG4gICAgdmVzdGlidWx1bSBlcmF0IGFjIHNlbSBjb25zZWN0ZXR1ciBlbGVpZmVuZC4gTnVsbGFtIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAzNDcsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0ODguMDc4MTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAzMjgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQ4MC4wNzgxMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAzMjhcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiYXQgbmliaCBzZWQgbmVxdWVcXG4gICAgYWNjdW1zYW4gdGluY2lkdW50IG5lYyBhIGVuaW0uIEFsaXF1YW0gXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDM2NixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDQ5NC4xMDkzNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDM0NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDg2LjEwOTM3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDM0N1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJwaGFyZXRyYSBvcmNpIHRvcnRvciwgZWdldCBncmF2aWRhXFxuICAgIGZlbGlzIGRpY3R1bSBhYy4gTWFlY2VuYXMgXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDM4NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDQ3Mi4zOTA2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDM2NixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDY0LjM5MDYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDM2NlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJjb252YWxsaXMgbnVuYyB1bHRyaWNlcyBtYXNzYSBiaWJlbmR1bSwgZXRcXG4gICAgZGlnbmlzc2ltIGVsaXQgXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDQwNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDQ0OS40MDYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMzg1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0NDEuNDA2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAzODVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwidGVtcHVzLiBVdCBpbiBsdWN0dXMgZG9sb3IsIGV0IG1heGltdXMgbmlzaS4gRXRpYW0gbm9uXFxuICAgIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA0MjMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0NDcuMzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiA0MDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQzOS4zNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiA0MDRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiZXVpc21vZCBzZW0uXFxuXFxuICAgIFZlc3RpYnVsdW0gcHVsdmluYXIgYmliZW5kdW0gdHVycGlzIGF0IFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA0NDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0NTEuNDUzMTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiA0MjMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQ0My40NTMxMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiA0MjNcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwic29kYWxlcy4gVmVzdGlidWx1bSBjb25zZWN0ZXR1ciBudWxsYVxcbiAgICBlbGVtZW50dW0gZXJvcyBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogNDYxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogNDc0LjU0Njg3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNDQyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0NjYuNTQ2ODc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogNDQyXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInJob25jdXMsIG5vbiBpbnRlcmR1bSBkaWFtIHRyaXN0aXF1ZS4gUHJhZXNlbnQgaW50ZXJkdW0gXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDQ4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDQ3MC4wNjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiA0NjEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQ2Mi4wNjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogNDYxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInF1YW1cXG4gICAgaW4gbGFjdXMgZmluaWJ1cyBzZW1wZXIuIFBoYXNlbGx1cyBpZCBmZXVnaWF0IHRvcnRvci4gXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDQ5OSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDQ4MC41NjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiA0ODAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQ3Mi41NjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogNDgwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkludGVnZXIgc2VkIG1vbGVzdGllXFxuICAgIHVybmEsIGEgc29kYWxlcyBsaWJlcm8uIE1vcmJpIGVnZXN0YXMgXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDUxOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDQ0Ni42NTYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNDk5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0MzguNjU2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiA0OTlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiZWdlc3RhcyB0b3J0b3Igc2VkIHNhZ2l0dGlzLiBBZW5lYW4gZXRcXG4gICAgdGVsbHVzIG5vbiBxdWFtIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA1MzcsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAyODYuNzM0Mzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiA1MTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDI3OC43MzQzNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiA1MThcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwicGVsbGVudGVzcXVlIHVsdHJpY2VzIHZlbCBub24gb2Rpby5cXG5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgO1xuXG4gICAgICAgIGFzc2VydEpTT04odGV4dEJsb2Nrcy52YWx1ZSwgZXhwZWN0ZWQpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19