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
const Sets_1 = require("../../../../util/Sets");
const CreateDeckClient_1 = require("./clients/CreateDeckClient");
const DeckNamesAndIdsClient_1 = require("./clients/DeckNamesAndIdsClient");
const Logger_1 = require("../../../../logger/Logger");
const Optional_1 = require("../../../../util/ts/Optional");
const log = Logger_1.Logger.create();
class DecksSync {
    constructor(syncQueue) {
        this.createDeckClient = new CreateDeckClient_1.CreateDeckClient();
        this.deckNamesAndIdsClient = new DeckNamesAndIdsClient_1.DeckNamesAndIdsClient();
        this.missingDecks = [];
        this.missingDeckDescriptors = [];
        this.syncQueue = syncQueue;
    }
    enqueue(deckDescriptors) {
        this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
            return yield this.findExistingDecks(deckDescriptors);
        }));
        this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
            return yield this.createMissingDecks();
        }));
        return this.missingDeckDescriptors;
    }
    findExistingDecks(deckDescriptors) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Fetching existing decks for deckDescriptors: ", deckDescriptors);
            const deckNamesAndIds = yield this.deckNamesAndIdsClient.execute();
            const currentDecks = Object.keys(deckNamesAndIds);
            const expectedDecks = deckDescriptors.map(current => current.name);
            this.missingDecks.push(...Sets_1.Sets.difference(expectedDecks, currentDecks));
            const message = `Found ${this.missingDecks.length} missing decks from a total of ${currentDecks.length}`;
            log.info(message);
            this.missingDeckDescriptors.push(...this.missingDecks.map(name => ({ name })));
            return Optional_1.Optional.of({ message });
        });
    }
    createMissingDecks() {
        return __awaiter(this, void 0, void 0, function* () {
            this.missingDecks.forEach(missingDeck => {
                this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
                    return yield this.createMissingDeck(missingDeck);
                }));
            });
            const message = `Creating ${this.missingDecks.length} decks.`;
            return Optional_1.Optional.of({ message });
        });
    }
    createMissingDeck(missingDeck) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = `Creating missing deck: ${missingDeck}`;
            log.info(message);
            yield this.createDeckClient.execute(missingDeck);
            return Optional_1.Optional.of({ message });
        });
    }
}
exports.DecksSync = DecksSync;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVja3NTeW5jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGVja3NTeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxnREFBMkM7QUFDM0MsaUVBQStFO0FBQy9FLDJFQUE4RjtBQUc5RixzREFBaUQ7QUFFakQsMkRBQXNEO0FBSXRELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUs1QixNQUFhLFNBQVM7SUFpQmxCLFlBQVksU0FBb0I7UUFmekIscUJBQWdCLEdBQXNCLElBQUksbUNBQWdCLEVBQUUsQ0FBQztRQUU3RCwwQkFBcUIsR0FBMkIsSUFBSSw2Q0FBcUIsRUFBRSxDQUFDO1FBRWxFLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBRTVCLDJCQUFzQixHQUFxQixFQUFFLENBQUM7UUFVM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQVFNLE9BQU8sQ0FBQyxlQUFpQztRQUU1QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFTLEVBQUU7WUFDMUIsT0FBTyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO1lBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMzQyxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFFdkMsQ0FBQztJQUVhLGlCQUFpQixDQUFDLGVBQWlDOztZQUU3RCxHQUFHLENBQUMsSUFBSSxDQUFDLCtDQUErQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBRTNFLE1BQU0sZUFBZSxHQUFHLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBS25FLE1BQU0sWUFBWSxHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDNUQsTUFBTSxhQUFhLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVuRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFJLFdBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFFekUsTUFBTSxPQUFPLEdBQUcsU0FBUyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sa0NBQWtDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6RyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsR0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUM7WUFFL0YsT0FBTyxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFFbEMsQ0FBQztLQUFBO0lBRWEsa0JBQWtCOztZQUU1QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO29CQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDLENBQUEsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLE9BQU8sR0FBRyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxTQUFTLENBQUM7WUFFOUQsT0FBTyxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFFbEMsQ0FBQztLQUFBO0lBRWEsaUJBQWlCLENBQUMsV0FBbUI7O1lBQy9DLE1BQU0sT0FBTyxHQUFHLDBCQUEwQixXQUFXLEVBQUUsQ0FBQztZQUN4RCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNqRCxPQUFPLG1CQUFRLENBQUMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO0tBQUE7Q0FFSjtBQXJGRCw4QkFxRkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvZGUgdGhhdCBzeW5jaHJvbml6ZXMgZGVja3MgYnkgY3JlYXRpbmcgbmV3IGRlY2tzIHdoZW4gdGhlIHJlcXVpcmVkIGRlY2tzXG4gKiBhcmUgbWlzc2luZy5cbiAqL1xuaW1wb3J0IHtEZWNrRGVzY3JpcHRvcn0gZnJvbSAnLi9EZWNrRGVzY3JpcHRvcic7XG5pbXBvcnQge1NldHN9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvU2V0cyc7XG5pbXBvcnQge0NyZWF0ZURlY2tDbGllbnQsIElDcmVhdGVEZWNrQ2xpZW50fSBmcm9tICcuL2NsaWVudHMvQ3JlYXRlRGVja0NsaWVudCc7XG5pbXBvcnQge0RlY2tOYW1lc0FuZElkc0NsaWVudCwgSURlY2tOYW1lc0FuZElkc0NsaWVudH0gZnJvbSAnLi9jbGllbnRzL0RlY2tOYW1lc0FuZElkc0NsaWVudCc7XG5pbXBvcnQge1N5bmNQcm9ncmVzc0xpc3RlbmVyfSBmcm9tICcuLi9TeW5jUHJvZ3Jlc3NMaXN0ZW5lcic7XG5pbXBvcnQge0Fib3J0YWJsZX0gZnJvbSAnLi4vQWJvcnRhYmxlJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7U3luY1F1ZXVlfSBmcm9tICcuLi9TeW5jUXVldWUnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge1N5bmNUYXNrUmVzdWx0fSBmcm9tICcuLi9TeW5jVGFzayc7XG5pbXBvcnQge05vcm1hbGl6ZWROb3RlfSBmcm9tICcuL05vdGVzU3luYyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBTeW5jIGRlY2tzIHRvIEFua2kuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWNrc1N5bmMge1xuXG4gICAgcHVibGljIGNyZWF0ZURlY2tDbGllbnQ6IElDcmVhdGVEZWNrQ2xpZW50ID0gbmV3IENyZWF0ZURlY2tDbGllbnQoKTtcblxuICAgIHB1YmxpYyBkZWNrTmFtZXNBbmRJZHNDbGllbnQ6IElEZWNrTmFtZXNBbmRJZHNDbGllbnQgPSBuZXcgRGVja05hbWVzQW5kSWRzQ2xpZW50KCk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IG1pc3NpbmdEZWNrczogc3RyaW5nW10gPSBbXTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWlzc2luZ0RlY2tEZXNjcmlwdG9yczogRGVja0Rlc2NyaXB0b3JbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzeW5jUXVldWU6IFN5bmNRdWV1ZTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHN5bmNRdWV1ZSBUaGUgcXVldWUgdG8gdXNlIGZvciBhc3luYyBvcGVyYXRpb25zLlxuICAgICAqXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc3luY1F1ZXVlOiBTeW5jUXVldWUpIHtcbiAgICAgICAgdGhpcy5zeW5jUXVldWUgPSBzeW5jUXVldWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZSBzdXJlIGFsbCBkZWNrcyBhcmUgcHJvcGVybHkgc2V0dXAgaW4gQW5raS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZWNrRGVzY3JpcHRvcnMgVGhlIGRlY2tzIHdlIG5lZWQgY3JlYXRlZC5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBlbnF1ZXVlKGRlY2tEZXNjcmlwdG9yczogRGVja0Rlc2NyaXB0b3JbXSkge1xuXG4gICAgICAgIHRoaXMuc3luY1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5maW5kRXhpc3RpbmdEZWNrcyhkZWNrRGVzY3JpcHRvcnMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN5bmNRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuY3JlYXRlTWlzc2luZ0RlY2tzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm1pc3NpbmdEZWNrRGVzY3JpcHRvcnM7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGZpbmRFeGlzdGluZ0RlY2tzKGRlY2tEZXNjcmlwdG9yczogRGVja0Rlc2NyaXB0b3JbXSk6IFByb21pc2U8T3B0aW9uYWw8U3luY1Rhc2tSZXN1bHQ+PiB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJGZXRjaGluZyBleGlzdGluZyBkZWNrcyBmb3IgZGVja0Rlc2NyaXB0b3JzOiBcIiwgZGVja0Rlc2NyaXB0b3JzKTtcblxuICAgICAgICBjb25zdCBkZWNrTmFtZXNBbmRJZHMgPSBhd2FpdCB0aGlzLmRlY2tOYW1lc0FuZElkc0NsaWVudC5leGVjdXRlKCk7XG5cbiAgICAgICAgLy8gbm93IEkganVzdCBuZWVkIHRvIGNvbXB1dGUgdGhlIHNldCBkaWZmZXJlbmNlIGRlY2tEZXNjcmlwdG9ycyAvIGRlY2tOYW1lc0FuZElkc1xuICAgICAgICAvLyBmb3IgYWxsIGRlY2tzIHRoYXQgYXJlIG5vdCBpbiBkZWNrTmFtZXNBbmRJZHNcblxuICAgICAgICBjb25zdCBjdXJyZW50RGVja3M6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoZGVja05hbWVzQW5kSWRzKTtcbiAgICAgICAgY29uc3QgZXhwZWN0ZWREZWNrcyA9IGRlY2tEZXNjcmlwdG9ycy5tYXAoY3VycmVudCA9PiBjdXJyZW50Lm5hbWUpO1xuXG4gICAgICAgIHRoaXMubWlzc2luZ0RlY2tzLnB1c2goLi4uIFNldHMuZGlmZmVyZW5jZShleHBlY3RlZERlY2tzLCBjdXJyZW50RGVja3MpKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYEZvdW5kICR7dGhpcy5taXNzaW5nRGVja3MubGVuZ3RofSBtaXNzaW5nIGRlY2tzIGZyb20gYSB0b3RhbCBvZiAke2N1cnJlbnREZWNrcy5sZW5ndGh9YDtcbiAgICAgICAgbG9nLmluZm8obWVzc2FnZSk7XG5cbiAgICAgICAgdGhpcy5taXNzaW5nRGVja0Rlc2NyaXB0b3JzLnB1c2goLi4uIHRoaXMubWlzc2luZ0RlY2tzLm1hcChuYW1lID0+IDxEZWNrRGVzY3JpcHRvcj4geyBuYW1lIH0pKTtcblxuICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yoe21lc3NhZ2V9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgY3JlYXRlTWlzc2luZ0RlY2tzKCk6IFByb21pc2U8T3B0aW9uYWw8U3luY1Rhc2tSZXN1bHQ+PiB7XG5cbiAgICAgICAgdGhpcy5taXNzaW5nRGVja3MuZm9yRWFjaChtaXNzaW5nRGVjayA9PiB7XG4gICAgICAgICAgICB0aGlzLnN5bmNRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmNyZWF0ZU1pc3NpbmdEZWNrKG1pc3NpbmdEZWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYENyZWF0aW5nICR7dGhpcy5taXNzaW5nRGVja3MubGVuZ3RofSBkZWNrcy5gO1xuXG4gICAgICAgIHJldHVybiBPcHRpb25hbC5vZih7bWVzc2FnZX0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBjcmVhdGVNaXNzaW5nRGVjayhtaXNzaW5nRGVjazogc3RyaW5nKTogUHJvbWlzZTxPcHRpb25hbDxTeW5jVGFza1Jlc3VsdD4+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBDcmVhdGluZyBtaXNzaW5nIGRlY2s6ICR7bWlzc2luZ0RlY2t9YDtcbiAgICAgICAgbG9nLmluZm8obWVzc2FnZSk7XG4gICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlRGVja0NsaWVudC5leGVjdXRlKG1pc3NpbmdEZWNrKTtcbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHttZXNzYWdlfSk7XG4gICAgfVxuXG59XG4iXX0=