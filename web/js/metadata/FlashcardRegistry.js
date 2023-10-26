"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FlashcardArchetype_1 = require("./FlashcardArchetype");
const Preconditions_1 = require("../Preconditions");
const FlashcardField_1 = require("./FlashcardField");
const FlashcardFieldType_1 = require("./FlashcardFieldType");
class FlashcardRegistry {
    constructor() {
        this.registry = {};
    }
    register(flashcardArchetype) {
        Preconditions_1.Preconditions.assertNotNull(flashcardArchetype.id, "id");
        this.registry[flashcardArchetype.id] = flashcardArchetype;
    }
    get(id) {
    }
    hasKey(id) {
        return id in this.registry;
    }
    keys() {
        return Object.keys(this.registry);
    }
    values() {
        return Object.values(this.registry);
    }
    static createDefault() {
        const flashcardRegistry = new FlashcardRegistry();
        flashcardRegistry.register(new FlashcardArchetype_1.FlashcardArchetype({
            id: "9d146db1-7c31-4bcf-866b-7b485c4e50ea",
            name: "Front and Back",
            description: "Standard front and back flashcard.",
            fields: {
                "front": new FlashcardField_1.FlashcardField({
                    name: "front",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The front of this card",
                    required: true
                }),
                "back": new FlashcardField_1.FlashcardField({
                    name: "back",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The back of this card",
                    required: true
                }),
                "extra": new FlashcardField_1.FlashcardField({
                    name: "extra",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "Extra data shown after the card has been answered.",
                    required: false
                }),
                "source": new FlashcardField_1.FlashcardField({
                    name: "source",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The source of this card. Name of the webpage, book, whitepaper, etc.",
                    required: false
                }),
                "link": new FlashcardField_1.FlashcardField({
                    name: "link",
                    type: FlashcardFieldType_1.FlashcardFieldType.URL,
                    description: "A link for more information regarding this flashcard. Usually the link to the source.",
                    required: false
                }),
                "image": new FlashcardField_1.FlashcardField({
                    name: "image",
                    type: FlashcardFieldType_1.FlashcardFieldType.IMAGE_URL,
                    description: "A link to an image for this flashcard.",
                    required: false
                })
            }
        }));
        flashcardRegistry.register(new FlashcardArchetype_1.FlashcardArchetype({
            id: "e3d25ed4-cafd-4350-84e8-123a4258e576",
            name: "Front and Back and Reverse",
            description: "Standard front and back flashcard (plus reverse)",
            fields: {
                "front": new FlashcardField_1.FlashcardField({
                    name: "front",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The front of this card",
                    required: true
                }),
                "back": new FlashcardField_1.FlashcardField({
                    name: "back",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The back of this card",
                    required: true
                }),
                "extra": new FlashcardField_1.FlashcardField({
                    name: "extra",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "Extra data shown after the card has been answered.",
                    required: false
                }),
                "source": new FlashcardField_1.FlashcardField({
                    name: "source",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The source of this card. Name of the webpage, book, whitepaper, etc.",
                    required: false
                }),
                "link": new FlashcardField_1.FlashcardField({
                    name: "link",
                    type: FlashcardFieldType_1.FlashcardFieldType.URL,
                    description: "A link for more information regarding this flashcard. Usually the link to the source.",
                    required: false
                }),
                "image": new FlashcardField_1.FlashcardField({
                    name: "image",
                    type: FlashcardFieldType_1.FlashcardFieldType.IMAGE_URL,
                    description: "A link to an image for this flashcard.",
                    required: false
                })
            }
        }));
        flashcardRegistry.register(new FlashcardArchetype_1.FlashcardArchetype({
            id: "76152976-d7ae-4348-9571-d65e48050c3f",
            name: "cloze",
            description: "Cloze flashcard with cloze text.",
            fields: {
                "text": new FlashcardField_1.FlashcardField({
                    name: "text",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The text of this card.",
                    required: true
                }),
                "extra": new FlashcardField_1.FlashcardField({
                    name: "extra",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "Extra data shown after the card has been answered.",
                    required: false
                }),
                "source": new FlashcardField_1.FlashcardField({
                    name: "source",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The source of this card. Name of the webpage, book, whitepaper, etc.",
                    required: false
                }),
                "link": new FlashcardField_1.FlashcardField({
                    name: "link",
                    type: FlashcardFieldType_1.FlashcardFieldType.URL,
                    description: "A link for more information regarding this flashcard. Usually the link to the source.",
                    required: false
                }),
                "image": new FlashcardField_1.FlashcardField({
                    name: "image",
                    type: FlashcardFieldType_1.FlashcardFieldType.IMAGE_URL,
                    description: "A link to an image for this flashcard.",
                    required: false
                })
            }
        }));
        return flashcardRegistry;
    }
}
exports.FlashcardRegistry = FlashcardRegistry;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkUmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGbGFzaGNhcmRSZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUF3RDtBQUN4RCxvREFBK0M7QUFDL0MscURBQWdEO0FBQ2hELDZEQUF3RDtBQU94RCxNQUFhLGlCQUFpQjtJQUE5QjtRQUVxQixhQUFRLEdBQXVDLEVBQUUsQ0FBQztJQW9LdkUsQ0FBQztJQWxLVSxRQUFRLENBQUMsa0JBQXNDO1FBQ2xELDZCQUFhLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO0lBQzlELENBQUM7SUFFTSxHQUFHLENBQUMsRUFBVTtJQUVyQixDQUFDO0lBRU0sTUFBTSxDQUFDLEVBQVU7UUFDcEIsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMvQixDQUFDO0lBRU0sSUFBSTtRQUNQLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUtNLE1BQU07UUFDVCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFLTSxNQUFNLENBQUMsYUFBYTtRQUV2QixNQUFNLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUVsRCxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx1Q0FBa0IsQ0FBQztZQUM5QyxFQUFFLEVBQUUsc0NBQXNDO1lBQzFDLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxNQUFNLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLElBQUksK0JBQWMsQ0FBQztvQkFDeEIsSUFBSSxFQUFFLE9BQU87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QUFLO2lCQUNsQixDQUFDO2FBQ0w7U0FFSixDQUFDLENBQUMsQ0FBQztRQUVKLE9BQU8saUJBQWlCLENBQUM7SUFFN0IsQ0FBQztDQUVKO0FBdEtELDhDQXNLQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZsYXNoY2FyZEFyY2hldHlwZX0gZnJvbSAnLi9GbGFzaGNhcmRBcmNoZXR5cGUnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICcuLi9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7Rmxhc2hjYXJkRmllbGR9IGZyb20gJy4vRmxhc2hjYXJkRmllbGQnO1xuaW1wb3J0IHtGbGFzaGNhcmRGaWVsZFR5cGV9IGZyb20gJy4vRmxhc2hjYXJkRmllbGRUeXBlJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVnaXN0cnkgRmxhc2hjYXJkQXJjaGV0eXBlcyBmb3IgdXNlIGJ5IHRoZSB1c2VyLlxuICpcbiAqIEB0eXBlIHtGbGFzaGNhcmRSZWdpc3RyeX1cbiAqL1xuZXhwb3J0IGNsYXNzIEZsYXNoY2FyZFJlZ2lzdHJ5IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVnaXN0cnk6IHtbaWQ6IHN0cmluZ106IEZsYXNoY2FyZEFyY2hldHlwZX0gPSB7fTtcblxuICAgIHB1YmxpYyByZWdpc3RlcihmbGFzaGNhcmRBcmNoZXR5cGU6IEZsYXNoY2FyZEFyY2hldHlwZSkge1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwoZmxhc2hjYXJkQXJjaGV0eXBlLmlkLCBcImlkXCIpO1xuICAgICAgICB0aGlzLnJlZ2lzdHJ5W2ZsYXNoY2FyZEFyY2hldHlwZS5pZF0gPSBmbGFzaGNhcmRBcmNoZXR5cGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldChpZDogc3RyaW5nKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzS2V5KGlkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGlkIGluIHRoaXMucmVnaXN0cnk7XG4gICAgfVxuXG4gICAgcHVibGljIGtleXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnJlZ2lzdHJ5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHZhbHVlcyBpbiB0aGUgcmVnaXN0cnkuXG4gICAgICovXG4gICAgcHVibGljIHZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5yZWdpc3RyeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHRoZSBkZWZhdWx0IGZsYXNoY2FyZCByZWdpc3RyeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZURlZmF1bHQoKSB7XG5cbiAgICAgICAgY29uc3QgZmxhc2hjYXJkUmVnaXN0cnkgPSBuZXcgRmxhc2hjYXJkUmVnaXN0cnkoKTtcblxuICAgICAgICBmbGFzaGNhcmRSZWdpc3RyeS5yZWdpc3RlcihuZXcgRmxhc2hjYXJkQXJjaGV0eXBlKHtcbiAgICAgICAgICAgIGlkOiBcIjlkMTQ2ZGIxLTdjMzEtNGJjZi04NjZiLTdiNDg1YzRlNTBlYVwiLFxuICAgICAgICAgICAgbmFtZTogXCJGcm9udCBhbmQgQmFja1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU3RhbmRhcmQgZnJvbnQgYW5kIGJhY2sgZmxhc2hjYXJkLlwiLFxuICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgXCJmcm9udFwiOiBuZXcgRmxhc2hjYXJkRmllbGQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZyb250XCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5URVhULFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgZnJvbnQgb2YgdGhpcyBjYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXCJiYWNrXCI6IG5ldyBGbGFzaGNhcmRGaWVsZCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFja1wiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBGbGFzaGNhcmRGaWVsZFR5cGUuVEVYVCxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGJhY2sgb2YgdGhpcyBjYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXCJleHRyYVwiOiBuZXcgRmxhc2hjYXJkRmllbGQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImV4dHJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5URVhULFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJFeHRyYSBkYXRhIHNob3duIGFmdGVyIHRoZSBjYXJkIGhhcyBiZWVuIGFuc3dlcmVkLlwiLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBcInNvdXJjZVwiOiBuZXcgRmxhc2hjYXJkRmllbGQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNvdXJjZVwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBGbGFzaGNhcmRGaWVsZFR5cGUuVEVYVCxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHNvdXJjZSBvZiB0aGlzIGNhcmQuIE5hbWUgb2YgdGhlIHdlYnBhZ2UsIGJvb2ssIHdoaXRlcGFwZXIsIGV0Yy5cIixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IG5ldyBGbGFzaGNhcmRGaWVsZCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBGbGFzaGNhcmRGaWVsZFR5cGUuVVJMLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIGxpbmsgZm9yIG1vcmUgaW5mb3JtYXRpb24gcmVnYXJkaW5nIHRoaXMgZmxhc2hjYXJkLiBVc3VhbGx5IHRoZSBsaW5rIHRvIHRoZSBzb3VyY2UuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogbmV3IEZsYXNoY2FyZEZpZWxkKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBGbGFzaGNhcmRGaWVsZFR5cGUuSU1BR0VfVVJMLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIGxpbmsgdG8gYW4gaW1hZ2UgZm9yIHRoaXMgZmxhc2hjYXJkLlwiLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgZmxhc2hjYXJkUmVnaXN0cnkucmVnaXN0ZXIobmV3IEZsYXNoY2FyZEFyY2hldHlwZSh7XG4gICAgICAgICAgICBpZDogXCJlM2QyNWVkNC1jYWZkLTQzNTAtODRlOC0xMjNhNDI1OGU1NzZcIixcbiAgICAgICAgICAgIG5hbWU6IFwiRnJvbnQgYW5kIEJhY2sgYW5kIFJldmVyc2VcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlN0YW5kYXJkIGZyb250IGFuZCBiYWNrIGZsYXNoY2FyZCAocGx1cyByZXZlcnNlKVwiLFxuICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgXCJmcm9udFwiOiBuZXcgRmxhc2hjYXJkRmllbGQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZyb250XCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5URVhULFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgZnJvbnQgb2YgdGhpcyBjYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXCJiYWNrXCI6IG5ldyBGbGFzaGNhcmRGaWVsZCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFja1wiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBGbGFzaGNhcmRGaWVsZFR5cGUuVEVYVCxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGJhY2sgb2YgdGhpcyBjYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXCJleHRyYVwiOiBuZXcgRmxhc2hjYXJkRmllbGQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImV4dHJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5URVhULFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJFeHRyYSBkYXRhIHNob3duIGFmdGVyIHRoZSBjYXJkIGhhcyBiZWVuIGFuc3dlcmVkLlwiLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBcInNvdXJjZVwiOiBuZXcgRmxhc2hjYXJkRmllbGQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNvdXJjZVwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBGbGFzaGNhcmRGaWVsZFR5cGUuVEVYVCxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHNvdXJjZSBvZiB0aGlzIGNhcmQuIE5hbWUgb2YgdGhlIHdlYnBhZ2UsIGJvb2ssIHdoaXRlcGFwZXIsIGV0Yy5cIixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IG5ldyBGbGFzaGNhcmRGaWVsZCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBGbGFzaGNhcmRGaWVsZFR5cGUuVVJMLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIGxpbmsgZm9yIG1vcmUgaW5mb3JtYXRpb24gcmVnYXJkaW5nIHRoaXMgZmxhc2hjYXJkLiBVc3VhbGx5IHRoZSBsaW5rIHRvIHRoZSBzb3VyY2UuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogbmV3IEZsYXNoY2FyZEZpZWxkKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBGbGFzaGNhcmRGaWVsZFR5cGUuSU1BR0VfVVJMLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIGxpbmsgdG8gYW4gaW1hZ2UgZm9yIHRoaXMgZmxhc2hjYXJkLlwiLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgZmxhc2hjYXJkUmVnaXN0cnkucmVnaXN0ZXIobmV3IEZsYXNoY2FyZEFyY2hldHlwZSh7XG4gICAgICAgICAgICBpZDogXCI3NjE1Mjk3Ni1kN2FlLTQzNDgtOTU3MS1kNjVlNDgwNTBjM2ZcIixcbiAgICAgICAgICAgIG5hbWU6IFwiY2xvemVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNsb3plIGZsYXNoY2FyZCB3aXRoIGNsb3plIHRleHQuXCIsXG4gICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogbmV3IEZsYXNoY2FyZEZpZWxkKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5URVhULFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdGV4dCBvZiB0aGlzIGNhcmQuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXCJleHRyYVwiOiBuZXcgRmxhc2hjYXJkRmllbGQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImV4dHJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5URVhULFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJFeHRyYSBkYXRhIHNob3duIGFmdGVyIHRoZSBjYXJkIGhhcyBiZWVuIGFuc3dlcmVkLlwiLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBcInNvdXJjZVwiOiBuZXcgRmxhc2hjYXJkRmllbGQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNvdXJjZVwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBGbGFzaGNhcmRGaWVsZFR5cGUuVEVYVCxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHNvdXJjZSBvZiB0aGlzIGNhcmQuIE5hbWUgb2YgdGhlIHdlYnBhZ2UsIGJvb2ssIHdoaXRlcGFwZXIsIGV0Yy5cIixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IG5ldyBGbGFzaGNhcmRGaWVsZCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBGbGFzaGNhcmRGaWVsZFR5cGUuVVJMLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIGxpbmsgZm9yIG1vcmUgaW5mb3JtYXRpb24gcmVnYXJkaW5nIHRoaXMgZmxhc2hjYXJkLiBVc3VhbGx5IHRoZSBsaW5rIHRvIHRoZSBzb3VyY2UuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogbmV3IEZsYXNoY2FyZEZpZWxkKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBGbGFzaGNhcmRGaWVsZFR5cGUuSU1BR0VfVVJMLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIGxpbmsgdG8gYW4gaW1hZ2UgZm9yIHRoaXMgZmxhc2hjYXJkLlwiLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4gZmxhc2hjYXJkUmVnaXN0cnk7XG5cbiAgICB9XG5cbn07XG4iXX0=