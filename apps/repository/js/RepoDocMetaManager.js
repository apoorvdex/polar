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
const Logger_1 = require("../../../web/js/logger/Logger");
const DocInfo_1 = require("../../../web/js/metadata/DocInfo");
const Tags_1 = require("../../../web/js/tags/Tags");
const Preconditions_1 = require("../../../web/js/Preconditions");
const TagsDB_1 = require("./TagsDB");
const Optional_1 = require("../../../web/js/util/ts/Optional");
const DocMetaRef_1 = require("../../../web/js/datastore/DocMetaRef");
const RelatedTags_1 = require("../../../web/js/tags/related/RelatedTags");
const log = Logger_1.Logger.create();
class RepoDocMetaManager {
    constructor(persistenceLayerProvider) {
        this.repoDocInfoIndex = {};
        this.repoAnnotationIndex = {};
        this.tagsDB = new TagsDB_1.TagsDB();
        this.relatedTags = new RelatedTags_1.RelatedTags();
        this.persistenceLayerProvider = persistenceLayerProvider;
        this.init();
    }
    updateFromRepoDocMeta(fingerprint, repoDocMeta) {
        if (repoDocMeta) {
            this.repoDocInfoIndex[fingerprint] = repoDocMeta.repoDocInfo;
            this.updateTagsDB(repoDocMeta.repoDocInfo);
            this.relatedTags.update(fingerprint, 'set', ...Object.values(repoDocMeta.repoDocInfo.tags || {})
                .map(current => current.label));
            for (const repoAnnotation of repoDocMeta.repoAnnotations) {
                this.repoAnnotationIndex[repoAnnotation.id] = repoAnnotation;
            }
        }
        else {
            delete this.repoDocInfoIndex[fingerprint];
        }
    }
    updateFromRepoDocInfo(fingerprint, repoDocInfo) {
        if (repoDocInfo) {
            this.repoDocInfoIndex[fingerprint] = repoDocInfo;
            this.updateTagsDB(repoDocInfo);
        }
        else {
            delete this.repoDocInfoIndex[fingerprint];
        }
    }
    updateTagsDB(...repoDocInfos) {
        for (const repoDocInfo of repoDocInfos) {
            Optional_1.Optional.of(repoDocInfo.docInfo.tags)
                .map(tags => {
                this.tagsDB.register(...Object.values(tags));
            });
        }
    }
    writeDocInfo(docInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const persistenceLayer = this.persistenceLayerProvider.get();
            if (yield persistenceLayer.contains(docInfo.fingerprint)) {
                const docMeta = yield persistenceLayer.getDocMeta(docInfo.fingerprint);
                if (docMeta === undefined) {
                    log.warn("Unable to find DocMeta for: ", docInfo.fingerprint);
                    return;
                }
                docMeta.docInfo = new DocInfo_1.DocInfo(docInfo);
                log.info("Writing out updated DocMeta");
                yield persistenceLayer.writeDocMeta(docMeta);
            }
        });
    }
    writeDocInfoTitle(repoDocInfo, title) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertPresent(repoDocInfo);
            Preconditions_1.Preconditions.assertPresent(repoDocInfo.docInfo);
            Preconditions_1.Preconditions.assertPresent(title);
            repoDocInfo = Object.assign({}, repoDocInfo);
            repoDocInfo.title = title;
            repoDocInfo.docInfo.title = title;
            this.updateFromRepoDocInfo(repoDocInfo.fingerprint, repoDocInfo);
            return this.writeDocInfo(repoDocInfo.docInfo);
        });
    }
    writeDocInfoTags(repoDocInfo, tags) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertPresent(repoDocInfo);
            Preconditions_1.Preconditions.assertPresent(repoDocInfo.docInfo);
            Preconditions_1.Preconditions.assertPresent(tags);
            repoDocInfo = Object.assign({}, repoDocInfo);
            repoDocInfo.tags = Tags_1.Tags.toMap(tags);
            repoDocInfo.docInfo.tags = Tags_1.Tags.toMap(tags);
            this.updateFromRepoDocInfo(repoDocInfo.fingerprint, repoDocInfo);
            return this.writeDocInfo(repoDocInfo.docInfo);
        });
    }
    deleteDocInfo(repoDocInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            this.updateFromRepoDocInfo(repoDocInfo.fingerprint);
            const persistenceLayer = this.persistenceLayerProvider.get();
            const docMetaFileRef = DocMetaRef_1.DocMetaFileRefs.createFromDocInfo(repoDocInfo.docInfo);
            return persistenceLayer.delete(docMetaFileRef);
        });
    }
    init() {
        for (const repoDocInfo of Object.values(this.repoDocInfoIndex)) {
            this.updateTagsDB(repoDocInfo);
        }
    }
}
exports.RepoDocMetaManager = RepoDocMetaManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb0RvY01ldGFNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVwb0RvY01ldGFNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSwwREFBcUQ7QUFDckQsOERBQW1FO0FBR25FLG9EQUErQztBQUMvQyxpRUFBNEQ7QUFFNUQscUNBQWdDO0FBQ2hDLCtEQUEwRDtBQUMxRCxxRUFBcUU7QUFNckUsMEVBQXFFO0FBRXJFLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQVU1QixNQUFhLGtCQUFrQjtJQVkzQixZQUFZLHdCQUFxRDtRQVZqRCxxQkFBZ0IsR0FBcUIsRUFBRSxDQUFDO1FBRXhDLHdCQUFtQixHQUF3QixFQUFFLENBQUM7UUFFOUMsV0FBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7UUFFdEIsZ0JBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUs1QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsd0JBQXdCLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxxQkFBcUIsQ0FBQyxXQUFtQixFQUFFLFdBQXlCO1FBRXZFLElBQUksV0FBVyxFQUFFO1lBRWIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7WUFDN0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2lCQUMxQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUVyRixLQUFLLE1BQU0s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LE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzdDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsV0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRWpFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEQsQ0FBQztLQUFBO0lBRVksYUFBYSxDQUFDLFdBQXdCOztZQUUvQyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXBELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRzdELE1BQU0sY0FBYyxHQUFHLDRCQUFlLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTlFLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRW5ELENBQUM7S0FBQTtJQUVPLElBQUk7UUFHUixLQUFLLE1BQU0sV0FBVyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsQztJQUVMLENBQUM7Q0FHSjtBQTFKRCxnREEwSkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0RvY0luZm8sIElEb2NJbmZvfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQge1JlcG9Eb2NJbmZvfSBmcm9tICcuL1JlcG9Eb2NJbmZvJztcbmltcG9ydCB7VGFnfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdGFncy9UYWcnO1xuaW1wb3J0IHtUYWdzfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdGFncy9UYWdzJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtSZXBvRG9jSW5mb0luZGV4fSBmcm9tICcuL1JlcG9Eb2NJbmZvSW5kZXgnO1xuaW1wb3J0IHtUYWdzREJ9IGZyb20gJy4vVGFnc0RCJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWZzfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtJUHJvdmlkZXJ9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy91dGlsL1Byb3ZpZGVycyc7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7UmVwb0Fubm90YXRpb259IGZyb20gJy4vUmVwb0Fubm90YXRpb24nO1xuaW1wb3J0IHtSZXBvRG9jTWV0YX0gZnJvbSAnLi9SZXBvRG9jTWV0YSc7XG5pbXBvcnQge1JlbGF0ZWRUYWdzfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdGFncy9yZWxhdGVkL1JlbGF0ZWRUYWdzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcG9Bbm5vdGF0aW9uSW5kZXgge1xuICAgIFtpZDogc3RyaW5nXTogUmVwb0Fubm90YXRpb247XG59XG5cbi8qKlxuICogVGhlIG1haW4gaW50ZXJmYWNlIHRvIHRoZSBEb2NSZXBvc2l0b3J5IGluY2x1ZGluZyB1cGRhdGVzLCB0aGUgZXhpc3RpbmdcbiAqIGxvYWRlZCBkb2N1bWVudCBtZXRhZGF0YSwgYW5kIHRhZ3MgZGF0YWJhc2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBvRG9jTWV0YU1hbmFnZXIge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHJlcG9Eb2NJbmZvSW5kZXg6IFJlcG9Eb2NJbmZvSW5kZXggPSB7fTtcblxuICAgIHB1YmxpYyByZWFkb25seSByZXBvQW5ub3RhdGlvbkluZGV4OiBSZXBvQW5ub3RhdGlvbkluZGV4ID0ge307XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFnc0RCID0gbmV3IFRhZ3NEQigpO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHJlbGF0ZWRUYWdzID0gbmV3IFJlbGF0ZWRUYWdzKCk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjogSVByb3ZpZGVyPFBlcnNpc3RlbmNlTGF5ZXI+O1xuXG4gICAgY29uc3RydWN0b3IocGVyc2lzdGVuY2VMYXllclByb3ZpZGVyOiBJUHJvdmlkZXI8UGVyc2lzdGVuY2VMYXllcj4pIHtcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIgPSBwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVGcm9tUmVwb0RvY01ldGEoZmluZ2VycHJpbnQ6IHN0cmluZywgcmVwb0RvY01ldGE/OiBSZXBvRG9jTWV0YSkge1xuXG4gICAgICAgIGlmIChyZXBvRG9jTWV0YSkge1xuXG4gICAgICAgICAgICB0aGlzLnJlcG9Eb2NJbmZvSW5kZXhbZmluZ2VycHJpbnRdID0gcmVwb0RvY01ldGEucmVwb0RvY0luZm87XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRhZ3NEQihyZXBvRG9jTWV0YS5yZXBvRG9jSW5mbyk7XG5cbiAgICAgICAgICAgIHRoaXMucmVsYXRlZFRhZ3MudXBkYXRlKGZpbmdlcnByaW50LCAnc2V0JywgLi4uT2JqZWN0LnZhbHVlcyhyZXBvRG9jTWV0YS5yZXBvRG9jSW5mby50YWdzIHx8IHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gY3VycmVudC5sYWJlbCkpO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlcG9Bbm5vdGF0aW9uIG9mIHJlcG9Eb2NNZXRhLnJlcG9Bbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwb0Fubm90YXRpb25JbmRleFtyZXBvQW5ub3RhdGlvbi5pZF0gPSByZXBvQW5ub3RhdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVwb0RvY0luZm9JbmRleFtmaW5nZXJwcmludF07XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgaW4tbWVtb3J5IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgZG9jLlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUZyb21SZXBvRG9jSW5mbyhmaW5nZXJwcmludDogc3RyaW5nLCByZXBvRG9jSW5mbz86IFJlcG9Eb2NJbmZvKSB7XG5cbiAgICAgICAgaWYgKHJlcG9Eb2NJbmZvKSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9Eb2NJbmZvSW5kZXhbZmluZ2VycHJpbnRdID0gcmVwb0RvY0luZm87XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRhZ3NEQihyZXBvRG9jSW5mbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yZXBvRG9jSW5mb0luZGV4W2ZpbmdlcnByaW50XTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVUYWdzREIoLi4ucmVwb0RvY0luZm9zOiBSZXBvRG9jSW5mb1tdKSB7XG5cbiAgICAgICAgZm9yIChjb25zdCByZXBvRG9jSW5mbyBvZiByZXBvRG9jSW5mb3MpIHtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSB0YWdzIGRhdGEuXG4gICAgICAgICAgICBPcHRpb25hbC5vZihyZXBvRG9jSW5mby5kb2NJbmZvLnRhZ3MpXG4gICAgICAgICAgICAgICAgLm1hcCh0YWdzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWdzREIucmVnaXN0ZXIoLi4uT2JqZWN0LnZhbHVlcyh0YWdzKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3luYyB0aGUgZG9jSW5mbyB0byBkaXNrLlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHdyaXRlRG9jSW5mbyhkb2NJbmZvOiBJRG9jSW5mbykge1xuXG4gICAgICAgIGNvbnN0IHBlcnNpc3RlbmNlTGF5ZXIgPSB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlci5nZXQoKTtcblxuICAgICAgICBpZiAoYXdhaXQgcGVyc2lzdGVuY2VMYXllci5jb250YWlucyhkb2NJbmZvLmZpbmdlcnByaW50KSkge1xuXG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhKGRvY0luZm8uZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICBpZiAoZG9jTWV0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm4oXCJVbmFibGUgdG8gZmluZCBEb2NNZXRhIGZvcjogXCIsIGRvY0luZm8uZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvID0gbmV3IERvY0luZm8oZG9jSW5mbyk7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiV3JpdGluZyBvdXQgdXBkYXRlZCBEb2NNZXRhXCIpO1xuXG4gICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLndyaXRlRG9jTWV0YShkb2NNZXRhKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIFJlcG9Eb2NJbmZvIG9iamVjdCB3aXRoIHRoZSBnaXZlbiB0YWdzLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyB3cml0ZURvY0luZm9UaXRsZShyZXBvRG9jSW5mbzogUmVwb0RvY0luZm8sIHRpdGxlOiBzdHJpbmcpIHtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQocmVwb0RvY0luZm8pO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQocmVwb0RvY0luZm8uZG9jSW5mbyk7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudCh0aXRsZSk7XG5cbiAgICAgICAgcmVwb0RvY0luZm8gPSBPYmplY3QuYXNzaWduKHt9LCByZXBvRG9jSW5mbyk7XG4gICAgICAgIHJlcG9Eb2NJbmZvLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHJlcG9Eb2NJbmZvLmRvY0luZm8udGl0bGUgPSB0aXRsZTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUZyb21SZXBvRG9jSW5mbyhyZXBvRG9jSW5mby5maW5nZXJwcmludCwgcmVwb0RvY0luZm8pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlRG9jSW5mbyhyZXBvRG9jSW5mby5kb2NJbmZvKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgUmVwb0RvY0luZm8gb2JqZWN0IHdpdGggdGhlIGdpdmVuIHRhZ3MuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHdyaXRlRG9jSW5mb1RhZ3MocmVwb0RvY0luZm86IFJlcG9Eb2NJbmZvLCB0YWdzOiBUYWdbXSkge1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChyZXBvRG9jSW5mbyk7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChyZXBvRG9jSW5mby5kb2NJbmZvKTtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHRhZ3MpO1xuXG4gICAgICAgIHJlcG9Eb2NJbmZvID0gT2JqZWN0LmFzc2lnbih7fSwgcmVwb0RvY0luZm8pO1xuICAgICAgICByZXBvRG9jSW5mby50YWdzID0gVGFncy50b01hcCh0YWdzKTtcbiAgICAgICAgcmVwb0RvY0luZm8uZG9jSW5mby50YWdzID0gVGFncy50b01hcCh0YWdzKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUZyb21SZXBvRG9jSW5mbyhyZXBvRG9jSW5mby5maW5nZXJwcmludCwgcmVwb0RvY0luZm8pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlRG9jSW5mbyhyZXBvRG9jSW5mby5kb2NJbmZvKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZWxldGVEb2NJbmZvKHJlcG9Eb2NJbmZvOiBSZXBvRG9jSW5mbykge1xuXG4gICAgICAgIHRoaXMudXBkYXRlRnJvbVJlcG9Eb2NJbmZvKHJlcG9Eb2NJbmZvLmZpbmdlcnByaW50KTtcblxuICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gdGhpcy5wZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIuZ2V0KCk7XG5cbiAgICAgICAgLy8gZGVsZXRlIGl0IGZyb20gdGhlIHJlcG8gbm93LlxuICAgICAgICBjb25zdCBkb2NNZXRhRmlsZVJlZiA9IERvY01ldGFGaWxlUmVmcy5jcmVhdGVGcm9tRG9jSW5mbyhyZXBvRG9jSW5mby5kb2NJbmZvKTtcblxuICAgICAgICByZXR1cm4gcGVyc2lzdGVuY2VMYXllci5kZWxldGUoZG9jTWV0YUZpbGVSZWYpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICAvLyBGSVhNRTogaXMgdGhpcyBldmVuIG5lZWRlZCBhbnltb3JlP1xuXG4gICAgICAgIGZvciAoY29uc3QgcmVwb0RvY0luZm8gb2YgT2JqZWN0LnZhbHVlcyh0aGlzLnJlcG9Eb2NJbmZvSW5kZXgpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRhZ3NEQihyZXBvRG9jSW5mbyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG59XG4iXX0=