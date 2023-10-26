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
const PDFMetadata_1 = require("./PDFMetadata");
const Files_1 = require("../../../../../web/js/util/Files");
const HitMap_1 = require("../../../util/HitMap");
const Strings_1 = require("../../../util/Strings");
const DOIs_1 = require("./DOIs");
describe('PDF Metadata', function () {
    this.timeout(999999);
    xit("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const pdfMeta = yield PDFMetadata_1.PDFMetadata.getMetadata("/home/burton/Downloads/SSRN-id2594754.pdf");
            console.log(pdfMeta);
        });
    });
    xit("build property index", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const hitMap = new HitMap_1.SampledHitMap();
            let nrFiles = 0;
            yield Files_1.Files.recursively("/d0/polar-pdf-set", (path) => __awaiter(this, void 0, void 0, function* () {
                if (!path.endsWith(".pdf")) {
                    return;
                }
                console.log(path);
                const pdfMeta = yield PDFMetadata_1.PDFMetadata.getMetadata(path);
                for (const propKey of Object.keys(pdfMeta.props)) {
                    const propValue = pdfMeta.props[propKey];
                    hitMap.registerHit(propKey, propValue);
                }
                const toDOI = () => {
                    const toDOIWithProp = (prop) => {
                        if (pdfMeta.props[prop]) {
                            return prop;
                        }
                        return undefined;
                    };
                    const toDOIWithPropContainsValue = (prop, value) => {
                        if (pdfMeta.props[prop] && pdfMeta.props[prop].indexOf(value) !== -1) {
                            return prop;
                        }
                        return undefined;
                    };
                    const toDOIWithPropStartsWithValue = (prop, value) => {
                        if (pdfMeta.props[prop] && pdfMeta.props[prop].startsWith(value)) {
                            return prop;
                        }
                        return undefined;
                    };
                    return [
                        toDOIWithProp("prism:doi"),
                        toDOIWithProp("crossmark:doi"),
                        toDOIWithProp("pdfx:doi"),
                        toDOIWithProp("pdfx:wps-articledoi"),
                        toDOIWithPropStartsWithValue("dc:identifier", "doi:"),
                        toDOIWithPropContainsValue("prism:url", "doi.org"),
                        toDOIWithPropContainsValue("dc:title", "doi:"),
                        toDOIWithPropContainsValue("dc:description", "doi:")
                    ]
                        .filter(current => current !== undefined);
                };
                const doiMappings = toDOI();
                const doi = DOIs_1.DOIs.toDOI(pdfMeta.props);
                if (doiMappings.length >= 1) {
                    hitMap.registerHit("__DOI__", doiMappings[0]);
                }
                if (doi) {
                    hitMap.registerHit("__PARSED_DOI__", "true");
                }
                for (const doiMapping of doiMappings) {
                    hitMap.registerHit("__DOI:" + doiMapping, "true");
                }
                ++nrFiles;
            }));
            const nrSamples = 10;
            const percRanked = hitMap.toPercRanked(nrSamples, nrFiles);
            for (const current of percRanked) {
                const strIdx = Strings_1.Strings.lpad(current.idx, ' ', 4);
                const strKey = Strings_1.Strings.lpad(current.key, ' ', 50);
                const strPerc = Strings_1.Strings.lpad(current.perc, ' ', 4);
                const strHits = Strings_1.Strings.lpad(current.hits, ' ', 10);
                const samples = current.samples.join(", ").substring(0, 120).replace(/\n/g, ".");
                console.log(`${strIdx} ${strKey} ${strPerc} ${strHits} : ${samples}`);
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUERGTWV0YWRhdGFUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUERGTWV0YWRhdGFUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFDMUMsNERBQXVEO0FBQ3ZELGlEQUEyRDtBQUMzRCxtREFBOEM7QUFDOUMsaUNBQTRCO0FBRTVCLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyQixHQUFHLENBQUMsT0FBTyxFQUFFOztZQUNULE1BQU0sT0FBTyxHQUFHLE1BQU0seUJBQVcsQ0FBQyxXQUFXLENBQUMsMkNBQTJDLENBQUMsQ0FBQztZQUUzRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsc0JBQXNCLEVBQUU7O1lBRXhCLE1BQU0sTUFBTSxHQUFHLElBQUksc0JBQWEsRUFBVSxDQUFDO1lBRTNDLElBQUksT0FBTyxHQUFXLENBQUMsQ0FBQztZQUV4QixNQUFNLGFBQUssQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBTyxJQUFJLEVBQUUsRUFBRTtnQkFFeEQsSUFBSyxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQzFCLE9BQU87aUJBQ1Y7Z0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFbEIsTUFBTSxPQUFPLEdBQUcsTUFBTSx5QkFBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFcEQsS0FBSyxNQUFNLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDOUMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDekMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7aUJBQzFDO2dCQUVELE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRTtvQkFFZixNQUFNLGFBQWEsR0FBRyxDQUFDLElBQVksRUFBc0IsRUFBRTt3QkFFdkQsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNyQixPQUFPLElBQUksQ0FBQzt5QkFDZjt3QkFFRCxPQUFPLFNBQVMsQ0FBQztvQkFFckIsQ0FBQyxDQUFDO29CQUVGLE1BQU0sMEJBQTBCLEdBQUcsQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFzQixFQUFFO3dCQUVuRixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7NEJBQ2xFLE9BQU8sSUFBSSxDQUFDO3lCQUNmO3dCQUVELE9BQU8sU0FBUyxDQUFDO29CQUVyQixDQUFDLENBQUM7b0JBRUYsTUFBTSw0QkFBNEIsR0FBRyxDQUFDLElBQVksRUFBRSxLQUFhLEVBQXNCLEVBQUU7d0JBRXJGLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTs0QkFDOUQsT0FBTyxJQUFJLENBQUM7eUJBQ2Y7d0JBRUQsT0FBTyxTQUFTLENBQUM7b0JBRXJCLENBQUMsQ0FBQztvQkFFRixPQUFPO3dCQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7d0JBQzFCLGFBQWEsQ0FBQyxlQUFlLENBQUM7d0JBQzlCLGFBQWEsQ0FBQyxVQUFVLENBQUM7d0JBQ3pCLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDcEMsNEJBQTRCLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQzt3QkFDckQsMEJBQTBCLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQzt3QkFDbEQsMEJBQTBCLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQzt3QkFDOUMsMEJBQTBCLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDO3FCQUNuRDt5QkFDSixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUM7Z0JBRWxELENBQUMsQ0FBQztnQkFFRixNQUFNLFdBQVcsR0FBRyxLQUFLLEVBQUUsQ0FBQztnQkFFNUIsTUFBTSxHQUFHLEdBQUcsV0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRXRDLElBQUksV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQ3pCLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDO2lCQUNsRDtnQkFFRCxJQUFJLEdBQUcsRUFBRTtvQkFDTCxNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUNoRDtnQkFFRCxLQUFLLE1BQU0sVUFBVSxJQUFJLFdBQVcsRUFBRTtvQkFDbEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsVUFBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUN0RDtnQkFFRCxFQUFFLE9BQU8sQ0FBQztZQUVkLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFFSCxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFFckIsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFM0QsS0FBSyxNQUFNLE9BQU8sSUFBSSxVQUFVLEVBQUU7Z0JBRTlCLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxNQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbEQsTUFBTSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELE1BQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBRWpGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLElBQUksTUFBTSxJQUFJLE9BQU8sSUFBSSxPQUFPLE1BQU0sT0FBTyxFQUFFLENBQUMsQ0FBQzthQUV6RTtRQUtMLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UERGTWV0YWRhdGF9IGZyb20gJy4vUERGTWV0YWRhdGEnO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3V0aWwvRmlsZXMnO1xuaW1wb3J0IHtIaXRNYXAsIFNhbXBsZWRIaXRNYXB9IGZyb20gJy4uLy4uLy4uL3V0aWwvSGl0TWFwJztcbmltcG9ydCB7U3RyaW5nc30gZnJvbSAnLi4vLi4vLi4vdXRpbC9TdHJpbmdzJztcbmltcG9ydCB7RE9Jc30gZnJvbSAnLi9ET0lzJztcblxuZGVzY3JpYmUoJ1BERiBNZXRhZGF0YScsIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudGltZW91dCg5OTk5OTkpO1xuXG4gICAgeGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHBkZk1ldGEgPSBhd2FpdCBQREZNZXRhZGF0YS5nZXRNZXRhZGF0YShcIi9ob21lL2J1cnRvbi9Eb3dubG9hZHMvU1NSTi1pZDI1OTQ3NTQucGRmXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHBkZk1ldGEpO1xuICAgIH0pO1xuXG4gICAgeGl0KFwiYnVpbGQgcHJvcGVydHkgaW5kZXhcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgaGl0TWFwID0gbmV3IFNhbXBsZWRIaXRNYXA8c3RyaW5nPigpO1xuXG4gICAgICAgIGxldCBuckZpbGVzOiBudW1iZXIgPSAwO1xuXG4gICAgICAgIGF3YWl0IEZpbGVzLnJlY3Vyc2l2ZWx5KFwiL2QwL3BvbGFyLXBkZi1zZXRcIiwgYXN5bmMgKHBhdGgpID0+IHtcblxuICAgICAgICAgICAgaWYgKCAhIHBhdGguZW5kc1dpdGgoXCIucGRmXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXRoKTtcblxuICAgICAgICAgICAgY29uc3QgcGRmTWV0YSA9IGF3YWl0IFBERk1ldGFkYXRhLmdldE1ldGFkYXRhKHBhdGgpO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BLZXkgb2YgT2JqZWN0LmtleXMocGRmTWV0YS5wcm9wcykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wVmFsdWUgPSBwZGZNZXRhLnByb3BzW3Byb3BLZXldO1xuICAgICAgICAgICAgICAgIGhpdE1hcC5yZWdpc3RlckhpdChwcm9wS2V5LCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0b0RPSSA9ICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvRE9JV2l0aFByb3AgPSAocHJvcDogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocGRmTWV0YS5wcm9wc1twcm9wXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3A7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvRE9JV2l0aFByb3BDb250YWluc1ZhbHVlID0gKHByb3A6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBkZk1ldGEucHJvcHNbcHJvcF0gJiYgcGRmTWV0YS5wcm9wc1twcm9wXS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b0RPSVdpdGhQcm9wU3RhcnRzV2l0aFZhbHVlID0gKHByb3A6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBkZk1ldGEucHJvcHNbcHJvcF0gJiYgcGRmTWV0YS5wcm9wc1twcm9wXS5zdGFydHNXaXRoKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3A7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RPSVdpdGhQcm9wKFwicHJpc206ZG9pXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9ET0lXaXRoUHJvcChcImNyb3NzbWFyazpkb2lcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RPSVdpdGhQcm9wKFwicGRmeDpkb2lcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RPSVdpdGhQcm9wKFwicGRmeDp3cHMtYXJ0aWNsZWRvaVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRE9JV2l0aFByb3BTdGFydHNXaXRoVmFsdWUoXCJkYzppZGVudGlmaWVyXCIsIFwiZG9pOlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRE9JV2l0aFByb3BDb250YWluc1ZhbHVlKFwicHJpc206dXJsXCIsIFwiZG9pLm9yZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRE9JV2l0aFByb3BDb250YWluc1ZhbHVlKFwiZGM6dGl0bGVcIiwgXCJkb2k6XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9ET0lXaXRoUHJvcENvbnRhaW5zVmFsdWUoXCJkYzpkZXNjcmlwdGlvblwiLCBcImRvaTpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihjdXJyZW50ID0+IGN1cnJlbnQgIT09IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGRvaU1hcHBpbmdzID0gdG9ET0koKTtcblxuICAgICAgICAgICAgY29uc3QgZG9pID0gRE9Jcy50b0RPSShwZGZNZXRhLnByb3BzKTtcblxuICAgICAgICAgICAgaWYgKGRvaU1hcHBpbmdzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgaGl0TWFwLnJlZ2lzdGVySGl0KFwiX19ET0lfX1wiLCBkb2lNYXBwaW5nc1swXSEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZG9pKSB7XG4gICAgICAgICAgICAgICAgaGl0TWFwLnJlZ2lzdGVySGl0KFwiX19QQVJTRURfRE9JX19cIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRvaU1hcHBpbmcgb2YgZG9pTWFwcGluZ3MpIHtcbiAgICAgICAgICAgICAgICBoaXRNYXAucmVnaXN0ZXJIaXQoXCJfX0RPSTpcIiArIGRvaU1hcHBpbmchLCBcInRydWVcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICsrbnJGaWxlcztcblxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBuclNhbXBsZXMgPSAxMDtcblxuICAgICAgICBjb25zdCBwZXJjUmFua2VkID0gaGl0TWFwLnRvUGVyY1JhbmtlZChuclNhbXBsZXMsIG5yRmlsZXMpO1xuXG4gICAgICAgIGZvciAoY29uc3QgY3VycmVudCBvZiBwZXJjUmFua2VkKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0cklkeCA9IFN0cmluZ3MubHBhZChjdXJyZW50LmlkeCwgJyAnLCA0KTtcbiAgICAgICAgICAgIGNvbnN0IHN0cktleSA9IFN0cmluZ3MubHBhZChjdXJyZW50LmtleSwgJyAnLCA1MCk7XG4gICAgICAgICAgICBjb25zdCBzdHJQZXJjID0gU3RyaW5ncy5scGFkKGN1cnJlbnQucGVyYywgJyAnLCA0KTtcbiAgICAgICAgICAgIGNvbnN0IHN0ckhpdHMgPSBTdHJpbmdzLmxwYWQoY3VycmVudC5oaXRzLCAnICcsIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHNhbXBsZXMgPSBjdXJyZW50LnNhbXBsZXMuam9pbihcIiwgXCIpLnN1YnN0cmluZygwLCAxMjApLnJlcGxhY2UoL1xcbi9nLCBcIi5cIik7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3N0cklkeH0gJHtzdHJLZXl9ICR7c3RyUGVyY30gJHtzdHJIaXRzfSA6ICR7c2FtcGxlc31gKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwcmludGluZyByZXN1bHRcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGhpdE1hcC50b1JhbmtlZCgpKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==