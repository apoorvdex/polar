"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextHighlightModel_1 = require("./TextHighlightModel");
const Assertions_1 = require("../../../test/Assertions");
const DocMetas_1 = require("../../../metadata/DocMetas");
const TextHighlightRecords_1 = require("../../../metadata/TextHighlightRecords");
const Rect_1 = require("../../../Rect");
const TextRect_1 = require("../../../metadata/TextRect");
const TestingTime_1 = require("../../../test/TestingTime");
const Proxies_1 = require("../../../proxies/Proxies");
TestingTime_1.TestingTime.freeze();
describe('TextHighlightModel', function () {
    describe('Listen for new highlights', function () {
        it("Initial values", function () {
            TestingTime_1.TestingTime.freeze();
            const docMeta = createDocMeta();
            const textHighlightModel = new TextHighlightModel_1.TextHighlightModel();
            const mutations = [];
            textHighlightModel.registerListener(docMeta, (textHighlightEvent) => {
                mutations.push(summarize(textHighlightEvent));
            });
            const expected = [
                {
                    "pageNum": 1,
                    "textHighlight": {
                        "id": "1Af41QXbBH",
                        "guid": "1Af41QXbBH",
                        "created": "2012-03-02T11:38:49.321Z",
                        "lastUpdated": "2012-03-02T11:38:49.321Z",
                        "rects": {
                            "0": {
                                "left": 100,
                                "top": 100,
                                "right": 200,
                                "bottom": 200,
                                "width": 100,
                                "height": 100
                            }
                        },
                        "textSelections": {
                            "0": {
                                "text": "hello world",
                                "rect": null
                            }
                        },
                        "text": {
                            "TEXT": "hello world"
                        },
                        "images": {},
                        "notes": {},
                        "questions": {},
                        "flashcards": {},
                        "color": "yellow"
                    },
                    "mutationType": "INITIAL"
                }
            ];
            Assertions_1.assertJSON(mutations, expected);
        });
        it("New text highlights on new pages", function () {
            TestingTime_1.TestingTime.freeze();
            const docMeta = createDocMeta();
            const textHighlightModel = new TextHighlightModel_1.TextHighlightModel();
            let mutations = [];
            textHighlightModel.registerListener(docMeta, function (textHighlightEvent) {
                mutations.push(summarize(textHighlightEvent));
            });
            mutations = [];
            const textHighlightRecord = createTextHighlightRecord();
            docMeta.getPageMeta(3).textHighlights[textHighlightRecord.id] = textHighlightRecord.value;
            const expected = [
                {
                    "pageNum": 3,
                    "textHighlight": {
                        "id": "1Af41QXbBH",
                        "guid": "1Af41QXbBH",
                        "created": "2012-03-02T11:38:49.321Z",
                        "lastUpdated": "2012-03-02T11:38:49.321Z",
                        "rects": {
                            "0": {
                                "left": 100,
                                "top": 100,
                                "right": 200,
                                "bottom": 200,
                                "width": 100,
                                "height": 100
                            }
                        },
                        "textSelections": {
                            "0": {
                                "text": "hello world",
                                "rect": null
                            }
                        },
                        "text": {
                            "TEXT": "hello world"
                        },
                        "images": {},
                        "notes": {},
                        "questions": {},
                        "flashcards": {},
                        "color": "yellow"
                    },
                    "mutationType": "SET"
                }
            ];
            console.log(mutations);
            Assertions_1.assertJSON(mutations, expected);
        });
    });
});
function summarize(textHighlightEvent) {
    return {
        pageNum: textHighlightEvent.pageMeta.pageInfo.num,
        textHighlight: textHighlightEvent.value,
        mutationType: textHighlightEvent.mutationType
    };
}
function createDocMeta() {
    const fingerprint = "110dd61fd57444010b1ab5ff38782f0f";
    const docMeta = DocMetas_1.DocMetas.createWithinInitialPagemarks(fingerprint, 14);
    DocMetas_1.DocMetas.addPagemarks(docMeta, { nrPages: 1, offsetPage: 4, percentage: 50 });
    const textHighlightRecord = createTextHighlightRecord();
    docMeta.getPageMeta(1).textHighlights[textHighlightRecord.id] = textHighlightRecord.value;
    return Proxies_1.Proxies.create(docMeta);
}
function createTextHighlightRecord() {
    const rects = [new Rect_1.Rect({ top: 100, left: 100, right: 200, bottom: 200, width: 100, height: 100 })];
    const textSelections = [new TextRect_1.TextRect({ text: "hello world" })];
    const text = "hello world";
    return TextHighlightRecords_1.TextHighlightRecords.create(rects, textSelections, { TEXT: text });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEhpZ2hsaWdodE1vZGVsVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRleHRIaWdobGlnaHRNb2RlbFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2REFBd0Q7QUFFeEQseURBQW9EO0FBQ3BELHlEQUFvRDtBQUNwRCxpRkFBNEU7QUFDNUUsd0NBQW1DO0FBQ25DLHlEQUFvRDtBQUNwRCwyREFBc0Q7QUFDdEQsc0RBQWlEO0FBRWpELHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFckIsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBSTNCLFFBQVEsQ0FBQywyQkFBMkIsRUFBRTtRQUVsQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7WUFFakIseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVyQixNQUFNLE9BQU8sR0FBRyxhQUFhLEVBQUUsQ0FBQztZQUVoQyxNQUFNLGtCQUFrQixHQUFHLElBQUksdUNBQWtCLEVBQUUsQ0FBQztZQUVwRCxNQUFNLFNBQVMsR0FBVSxFQUFFLENBQUM7WUFFNUIsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDaEUsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBRSxDQUFDO1lBRUosTUFBTSxRQUFRLEdBQUc7Z0JBQ2I7b0JBQ0ksU0FBUyxFQUFFLENBQUM7b0JBQ1osZUFBZSxFQUFFO3dCQUNiLElBQUksRUFBRSxZQUFZO3dCQUNsQixNQUFNLEVBQUUsWUFBWTt3QkFDcEIsU0FBUyxFQUFFLDBCQUEwQjt3QkFDckMsYUFBYSxFQUFFLDBCQUEwQjt3QkFDekMsT0FBTyxFQUFFOzRCQUNMLEdBQUcsRUFBRTtnQ0FDRCxNQUFNLEVBQUUsR0FBRztnQ0FDWCxLQUFLLEVBQUUsR0FBRztnQ0FDVixPQUFPLEVBQUUsR0FBRztnQ0FDWixRQUFRLEVBQUUs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dEhpZ2hsaWdodE1vZGVsJztcbmltcG9ydCB7QW5ub3RhdGlvbkV2ZW50fSBmcm9tICcuLi8uLi8uLi9hbm5vdGF0aW9ucy9jb21wb25lbnRzL0Fubm90YXRpb25FdmVudCc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge1RleHRIaWdobGlnaHRSZWNvcmRzfSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9UZXh0SGlnaGxpZ2h0UmVjb3Jkcyc7XG5pbXBvcnQge1JlY3R9IGZyb20gJy4uLy4uLy4uL1JlY3QnO1xuaW1wb3J0IHtUZXh0UmVjdH0gZnJvbSAnLi4vLi4vLi4vbWV0YWRhdGEvVGV4dFJlY3QnO1xuaW1wb3J0IHtUZXN0aW5nVGltZX0gZnJvbSAnLi4vLi4vLi4vdGVzdC9UZXN0aW5nVGltZSc7XG5pbXBvcnQge1Byb3hpZXN9IGZyb20gJy4uLy4uLy4uL3Byb3hpZXMvUHJveGllcyc7XG5cblRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG5kZXNjcmliZSgnVGV4dEhpZ2hsaWdodE1vZGVsJywgZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84MDI0MTQ5L2lzLWl0LXBvc3NpYmxlLXRvLWdldC10aGUtbm9uLWVudW1lcmFibGUtaW5oZXJpdGVkLXByb3BlcnR5LW5hbWVzLW9mLWFuLW9iamVjdFxuXG4gICAgZGVzY3JpYmUoJ0xpc3RlbiBmb3IgbmV3IGhpZ2hsaWdodHMnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcIkluaXRpYWwgdmFsdWVzXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBUZXN0aW5nVGltZS5mcmVlemUoKTtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IGNyZWF0ZURvY01ldGEoKTtcblxuICAgICAgICAgICAgY29uc3QgdGV4dEhpZ2hsaWdodE1vZGVsID0gbmV3IFRleHRIaWdobGlnaHRNb2RlbCgpO1xuXG4gICAgICAgICAgICBjb25zdCBtdXRhdGlvbnM6IGFueVtdID0gW107XG5cbiAgICAgICAgICAgIHRleHRIaWdobGlnaHRNb2RlbC5yZWdpc3Rlckxpc3RlbmVyKGRvY01ldGEsICh0ZXh0SGlnaGxpZ2h0RXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbnMucHVzaChzdW1tYXJpemUodGV4dEhpZ2hsaWdodEV2ZW50KSk7XG4gICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJwYWdlTnVtXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMUFmNDFRWGJCSFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMUFmNDFRWGJCSFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlY3RzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0U2VsZWN0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiaGVsbG8gd29ybGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRFWFRcIjogXCJoZWxsbyB3b3JsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwieWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJtdXRhdGlvblR5cGVcIjogXCJJTklUSUFMXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKG11dGF0aW9ucywgZXhwZWN0ZWQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiTmV3IHRleHQgaGlnaGxpZ2h0cyBvbiBuZXcgcGFnZXNcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gY3JlYXRlRG9jTWV0YSgpO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0SGlnaGxpZ2h0TW9kZWwgPSBuZXcgVGV4dEhpZ2hsaWdodE1vZGVsKCk7XG5cbiAgICAgICAgICAgIGxldCBtdXRhdGlvbnM6IGFueVtdID0gW107XG5cbiAgICAgICAgICAgIHRleHRIaWdobGlnaHRNb2RlbC5yZWdpc3Rlckxpc3RlbmVyKGRvY01ldGEsIGZ1bmN0aW9uKHRleHRIaWdobGlnaHRFdmVudCkge1xuICAgICAgICAgICAgICAgIG11dGF0aW9ucy5wdXNoKHN1bW1hcml6ZSh0ZXh0SGlnaGxpZ2h0RXZlbnQpKTtcbiAgICAgICAgICAgIH0gKTtcblxuICAgICAgICAgICAgbXV0YXRpb25zID0gW107XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHRIaWdobGlnaHRSZWNvcmQgPSBjcmVhdGVUZXh0SGlnaGxpZ2h0UmVjb3JkKCk7XG5cbiAgICAgICAgICAgIGRvY01ldGEuZ2V0UGFnZU1ldGEoMykudGV4dEhpZ2hsaWdodHNbdGV4dEhpZ2hsaWdodFJlY29yZC5pZF0gPSB0ZXh0SGlnaGxpZ2h0UmVjb3JkLnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZCA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicGFnZU51bVwiOiAzLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRIaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFBZjQxUVhiQkhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjFBZjQxUVhiQkhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWN0c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFNlbGVjdGlvbnNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImhlbGxvIHdvcmxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJURVhUXCI6IFwiaGVsbG8gd29ybGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInllbGxvd1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwibXV0YXRpb25UeXBlXCI6IFwiU0VUXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtdXRhdGlvbnMpO1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKG11dGF0aW9ucywgZXhwZWN0ZWQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuXG5mdW5jdGlvbiBzdW1tYXJpemUodGV4dEhpZ2hsaWdodEV2ZW50OiBBbm5vdGF0aW9uRXZlbnQpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VOdW06IHRleHRIaWdobGlnaHRFdmVudC5wYWdlTWV0YS5wYWdlSW5mby5udW0sXG4gICAgICAgIHRleHRIaWdobGlnaHQ6IHRleHRIaWdobGlnaHRFdmVudC52YWx1ZSxcbiAgICAgICAgbXV0YXRpb25UeXBlOiB0ZXh0SGlnaGxpZ2h0RXZlbnQubXV0YXRpb25UeXBlXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRG9jTWV0YSgpIHtcblxuICAgIGNvbnN0IGZpbmdlcnByaW50ID0gXCIxMTBkZDYxZmQ1NzQ0NDAxMGIxYWI1ZmYzODc4MmYwZlwiO1xuXG4gICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmNyZWF0ZVdpdGhpbkluaXRpYWxQYWdlbWFya3MoZmluZ2VycHJpbnQsIDE0KTtcbiAgICBEb2NNZXRhcy5hZGRQYWdlbWFya3MoZG9jTWV0YSwge25yUGFnZXM6IDEsIG9mZnNldFBhZ2U6IDQsIHBlcmNlbnRhZ2U6IDUwfSlcblxuICAgIC8vIGNyZWF0ZSBzb21lIGluaXRpYWwgaGlnaGxpZ2h0cy5cblxuICAgIGNvbnN0IHRleHRIaWdobGlnaHRSZWNvcmQgPSBjcmVhdGVUZXh0SGlnaGxpZ2h0UmVjb3JkKCk7XG5cbiAgICBkb2NNZXRhLmdldFBhZ2VNZXRhKDEpLnRleHRIaWdobGlnaHRzW3RleHRIaWdobGlnaHRSZWNvcmQuaWRdID0gdGV4dEhpZ2hsaWdodFJlY29yZC52YWx1ZTtcblxuICAgIHJldHVybiBQcm94aWVzLmNyZWF0ZShkb2NNZXRhKTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0SGlnaGxpZ2h0UmVjb3JkKCkge1xuXG4gICAgY29uc3QgcmVjdHM6IFJlY3RbXSA9IFsgbmV3IFJlY3Qoe3RvcDogMTAwLCBsZWZ0OiAxMDAsIHJpZ2h0OiAyMDAsIGJvdHRvbTogMjAwLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMH0pIF07XG4gICAgY29uc3QgdGV4dFNlbGVjdGlvbnM6IFRleHRSZWN0W10gPSBbbmV3IFRleHRSZWN0KHt0ZXh0OiBcImhlbGxvIHdvcmxkXCJ9KV07XG4gICAgY29uc3QgdGV4dCA9IFwiaGVsbG8gd29ybGRcIjtcblxuICAgIHJldHVybiBUZXh0SGlnaGxpZ2h0UmVjb3Jkcy5jcmVhdGUocmVjdHMsIHRleHRTZWxlY3Rpb25zLCB7VEVYVDogdGV4dH0pO1xuXG59XG4iXX0=