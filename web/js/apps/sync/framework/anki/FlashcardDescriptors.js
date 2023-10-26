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
const Dictionaries_1 = require("../../../../util/Dictionaries");
const _ = __importStar(require("lodash"));
const FlashcardType_1 = require("../../../../metadata/FlashcardType");
const Logger_1 = require("../../../../logger/Logger");
const log = Logger_1.Logger.create();
class FlashcardDescriptors {
    static toFlashcardDescriptors(docMetaSupplierCollection) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = [];
            for (const docMetaSupplier of docMetaSupplierCollection) {
                try {
                    const docMeta = yield docMetaSupplier();
                    Object.values(docMeta.pageMetas).forEach(pageMeta => {
                        const flashcards = [];
                        flashcards.push(...Dictionaries_1.Dictionaries.values(pageMeta.flashcards));
                        flashcards.push(..._.chain(pageMeta.textHighlights)
                            .map(current => Dictionaries_1.Dictionaries.values(current.flashcards))
                            .flatten()
                            .value());
                        flashcards.push(..._.chain(pageMeta.areaHighlights)
                            .map(current => Dictionaries_1.Dictionaries.values(current.flashcards))
                            .flatten()
                            .value());
                        const flashcardDescriptors = _.chain(flashcards)
                            .map(current => ({
                            docMeta,
                            pageInfo: pageMeta.pageInfo,
                            flashcard: current
                        }))
                            .value();
                        result.push(...flashcardDescriptors);
                    });
                }
                catch (e) {
                    log.error("Unable to handle docMeta: ", e);
                }
            }
            return result;
        });
    }
    static toModelName(flashcardDescriptor) {
        if (flashcardDescriptor.flashcard.type === FlashcardType_1.FlashcardType.CLOZE) {
            return "Cloze";
        }
        return "Basic";
    }
}
exports.FlashcardDescriptors = FlashcardDescriptors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkRGVzY3JpcHRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGbGFzaGNhcmREZXNjcmlwdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLGdFQUEyRDtBQUMzRCwwQ0FBNEI7QUFDNUIsc0VBQWlFO0FBQ2pFLHNEQUFpRDtBQUVqRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxvQkFBb0I7SUFFdEIsTUFBTSxDQUFPLHNCQUFzQixDQUFDLHlCQUFvRDs7WUFFM0YsTUFBTSxNQUFNLEdBQTBCLEVBQUUsQ0FBQztZQUV6QyxLQUFLLE1BQU0sZUFBZSxJQUFJLHlCQUF5QixFQUFFO2dCQUVyRCxJQUFJO29CQUVBLE1BQU0sT0FBTyxHQUFHLE1BQU0sZUFBZSxFQUFFLENBQUM7b0JBRXhDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFJaEQsTUFBTSxVQUFVLEdBQWdCLEVBQUUsQ0FBQzt3QkFFbkMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFJLDJCQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUU5RCxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDOzZCQUMvQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7NkJBQ3ZELE9BQU8sRUFBRTs2QkFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO3dCQUVkLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7NkJBQy9DLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzs2QkFDdkQsT0FBTyxFQUFFOzZCQUNULEtBQUssRUFBRSxDQUFDLENBQUM7d0JBRWQsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQzs2QkFDM0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBc0I7NEJBQ2xDLE9BQU87NEJBQ1AsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFROzRCQUMzQixTQUFTLEVBQUUsT0FBTzt5QkFDckIsQ0FBQSxDQUFDOzZCQUNELEtBQUssRUFBRSxDQUFDO3dCQUViLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO29CQUV6QyxDQUFDLENBQUMsQ0FBQztpQkFFTjtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDUixHQUFHLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUM5QzthQUVKO1lBRUQsT0FBTyxNQUFNLENBQUM7UUFFbEIsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxtQkFBd0M7UUFFOUQsSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLDZCQUFhLENBQUMsS0FBSyxFQUFFO1lBQzVELE9BQU8sT0FBTyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFFbkIsQ0FBQztDQUVKO0FBOURELG9EQThEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbn0gZnJvbSAnLi4vLi4vLi4vLi4vbWV0YWRhdGEvRG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbic7XG5pbXBvcnQge0ZsYXNoY2FyZERlc2NyaXB0b3J9IGZyb20gJy4vRmxhc2hjYXJkRGVzY3JpcHRvcic7XG5pbXBvcnQge0ZsYXNoY2FyZH0gZnJvbSAnLi4vLi4vLi4vLi4vbWV0YWRhdGEvRmxhc2hjYXJkJztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL0RpY3Rpb25hcmllcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge0ZsYXNoY2FyZFR5cGV9IGZyb20gJy4uLy4uLy4uLy4uL21ldGFkYXRhL0ZsYXNoY2FyZFR5cGUnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBGbGFzaGNhcmREZXNjcmlwdG9ycyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHRvRmxhc2hjYXJkRGVzY3JpcHRvcnMoZG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbjogRG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbik6IFByb21pc2U8Rmxhc2hjYXJkRGVzY3JpcHRvcltdPiB7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0OiBGbGFzaGNhcmREZXNjcmlwdG9yW10gPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGRvY01ldGFTdXBwbGllciBvZiBkb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uKSB7XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gYXdhaXQgZG9jTWV0YVN1cHBsaWVyKCk7XG5cbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGRvY01ldGEucGFnZU1ldGFzKS5mb3JFYWNoKHBhZ2VNZXRhID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb2xsZWN0IGFsbCBmbGFzaGNhcmRzIGZvciB0aGUgY3VycmVudCBwYWdlLlxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZsYXNoY2FyZHM6IEZsYXNoY2FyZFtdID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZmxhc2hjYXJkcy5wdXNoKC4uLiBEaWN0aW9uYXJpZXMudmFsdWVzKHBhZ2VNZXRhLmZsYXNoY2FyZHMpKTtcblxuICAgICAgICAgICAgICAgICAgICBmbGFzaGNhcmRzLnB1c2goLi4uIF8uY2hhaW4ocGFnZU1ldGEudGV4dEhpZ2hsaWdodHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gRGljdGlvbmFyaWVzLnZhbHVlcyhjdXJyZW50LmZsYXNoY2FyZHMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZsYXR0ZW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZsYXNoY2FyZHMucHVzaCguLi4gXy5jaGFpbihwYWdlTWV0YS5hcmVhSGlnaGxpZ2h0cylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiBEaWN0aW9uYXJpZXMudmFsdWVzKGN1cnJlbnQuZmxhc2hjYXJkcykpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmxhdHRlbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmxhc2hjYXJkRGVzY3JpcHRvcnMgPSBfLmNoYWluKGZsYXNoY2FyZHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gPEZsYXNoY2FyZERlc2NyaXB0b3I+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NNZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJbmZvOiBwYWdlTWV0YS5wYWdlSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFzaGNhcmQ6IGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUoKTtcblxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCguLi5mbGFzaGNhcmREZXNjcmlwdG9ycyk7XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIlVuYWJsZSB0byBoYW5kbGUgZG9jTWV0YTogXCIsIGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB0b01vZGVsTmFtZShmbGFzaGNhcmREZXNjcmlwdG9yOiBGbGFzaGNhcmREZXNjcmlwdG9yKSB7XG5cbiAgICAgICAgaWYgKGZsYXNoY2FyZERlc2NyaXB0b3IuZmxhc2hjYXJkLnR5cGUgPT09IEZsYXNoY2FyZFR5cGUuQ0xPWkUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkNsb3plXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJCYXNpY1wiO1xuXG4gICAgfVxuXG59XG4iXX0=