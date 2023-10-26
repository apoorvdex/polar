"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Logger_1 = require("../../../../web/js/logger/Logger");
const StatTitle_1 = __importDefault(require("./StatTitle"));
const calendar_1 = require("@nivo/calendar");
const HitMap_1 = require("../../../../web/js/util/HitMap");
const Dictionaries_1 = require("../../../../web/js/util/Dictionaries");
const ISODateTimeStrings_1 = require("../../../../web/js/metadata/ISODateTimeStrings");
const Reducers_1 = require("../../../../web/js/util/Reducers");
const Numbers_1 = require("../../../../web/js/util/Numbers");
const log = Logger_1.Logger.create();
class ReadingProgressTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const progressPerDay = new HitMap_1.HitMap();
        for (const docInfo of this.props.docInfos || []) {
            for (const entry of Dictionaries_1.Dictionaries.entries(docInfo.readingPerDay || {})) {
                progressPerDay.registerHit(entry.key, entry.value);
            }
        }
        const data = progressPerDay.toArray().map(current => {
            return {
                day: current.key,
                value: Numbers_1.Numbers.toFixedFloat(current.value, 2)
            };
        });
        const domain = [0, data.map(current => current.value).reduce(Reducers_1.Reducers.MAX, 0)];
        const days = data.map(current => current.day).sort();
        const today = ISODateTimeStrings_1.ISODateTimeStrings.toISODate(ISODateTimeStrings_1.ISODateTimeStrings.create());
        const fromYear = ISODateTimeStrings_1.ISODateTimeStrings.toISOYear(days.reduce(Reducers_1.Reducers.FIRST, today));
        const toYear = ISODateTimeStrings_1.ISODateTimeStrings.toISOYear(days.reduce(Reducers_1.Reducers.LAST, today));
        const from = `${fromYear}-01-02`;
        const to = `${fromYear}-12-30`;
        return React.createElement("div", { id: "reading-progress-table" },
            React.createElement(StatTitle_1.default, null, "Reading Progress"),
            React.createElement("div", { style: { height: '150px' } },
                React.createElement("div", { className: "p-1 mr-auto ml-auto", style: { height: '100%', width: '800px' } },
                    React.createElement(calendar_1.ResponsiveCalendar, { data: data, from: from, to: to, domain: domain, emptyColor: "#eeeeee", colors: [
                            "rgba(0,0,255,0.1)",
                            "rgba(0,0,255,0.2)",
                            "rgba(0,0,255,0.3)",
                            "rgba(0,0,255,0.4)",
                            "rgba(0,0,255,0.5)",
                            "rgba(0,0,255,0.6)",
                            "rgba(0,0,255,0.7)",
                            "rgba(0,0,255,0.8)",
                            "rgba(0,0,255,0.9)",
                            "rgba(0,0,255,1.0)",
                        ], margin: {
                            "top": 20,
                            "right": 10,
                            "bottom": 10,
                            "left": 20
                        }, yearSpacing: 40, monthBorderColor: "#ffffff", monthLegendOffset: 10, dayBorderWidth: 2, dayBorderColor: "#ffffff" }))),
            React.createElement("div", { className: "p-1 pl-5 pr-5 mr-auto ml-auto", style: { height: '100%', width: '800px' } },
                React.createElement("p", { className: "text-muted" }, "The number of pages read per day.  This is computed by using the 'read' pagemarks from the documents you're tracking.  If it seems like there are too many pages read per day try changing the 'mode' of the pagemark to either 'previously read' or 'ignored'.  Thsi can happen when importing documents you're previously read and create a large pagemark.")));
    }
    getData() {
        return [
            {
                "day": "2010-03-04",
                "value": 387
            },
            {
                "day": "2010-05-17",
                "value": 46
            },
        ];
    }
    getData2() {
        return [
            {
                "day": "2016-03-04",
                "value": 387
            },
            {
                "day": "2015-12-17",
                "value": 46
            },
            {
                "day": "2015-07-18",
                "value": 247
            },
            {
                "day": "2016-03-29",
                "value": 5
            },
            {
                "day": "2015-08-03",
                "value": 159
            },
            {
                "day": "2016-04-16",
                "value": 17
            },
            {
                "day": "2016-02-22",
                "value": 128
            },
            {
                "day": "2015-10-08",
                "value": 145
            },
            {
                "day": "2016-03-03",
                "value": 215
            },
            {
                "day": "2015-08-02",
                "value": 311
            },
            {
                "day": "2016-03-12",
                "value": 221
            },
            {
                "day": "2016-07-12",
                "value": 255
            },
            {
                "day": "2015-08-31",
                "value": 368
            },
            {
                "day": "2016-07-15",
                "value": 379
            },
            {
                "day": "2015-06-19",
                "value": 255
            },
            {
                "day": "2016-07-06",
                "value": 218
            },
            {
                "day": "2016-01-30",
                "value": 51
            },
            {
                "day": "2015-10-10",
                "value": 340
            },
            {
                "day": "2015-09-09",
                "value": 174
            },
            {
                "day": "2016-01-29",
                "value": 203
            },
            {
                "day": "2016-02-18",
                "value": 209
            },
            {
                "day": "2016-07-19",
                "value": 138
            },
            {
                "day": "2015-12-03",
                "value": 14
            },
            {
                "day": "2016-02-01",
                "value": 313
            },
            {
                "day": "2015-12-06",
                "value": 155
            },
            {
                "day": "2015-10-02",
                "value": 133
            },
            {
                "day": "2016-07-02",
                "value": 128
            },
            {
                "day": "2015-04-14",
                "value": 128
            },
            {
                "day": "2016-05-03",
                "value": 300
            },
            {
                "day": "2015-09-21",
                "value": 289
            },
            {
                "day": "2016-04-18",
                "value": 51
            },
            {
                "day": "2016-02-27",
                "value": 338
            },
            {
                "day": "2016-06-23",
                "value": 397
            },
            {
                "day": "2016-05-07",
                "value": 395
            },
            {
                "day": "2015-09-01",
                "value": 380
            },
            {
                "day": "2015-06-04",
                "value": 268
            },
            {
                "day": "2016-08-08",
                "value": 144
            },
            {
                "day": "2015-11-12",
                "value": 129
            },
            {
                "day": "2016-02-19",
                "value": 344
            },
            {
                "day": "2015-06-23",
                "value": 399
            },
            {
                "day": "2015-11-30",
                "value": 93
            },
            {
                "day": "2016-05-08",
                "value": 262
            },
            {
                "day": "2016-08-05",
                "value": 392
            },
            {
                "day": "2016-04-17",
                "value": 92
            },
            {
                "day": "2016-06-14",
                "value": 330
            },
            {
                "day": "2016-03-25",
                "value": 151
            },
            {
                "day": "2015-09-25",
                "value": 207
            },
            {
                "day": "2016-02-25",
                "value": 87
            },
            {
                "day": "2016-03-30",
                "value": 117
            },
            {
                "day": "2016-03-23",
                "value": 228
            },
            {
                "day": "2016-07-13",
                "value": 93
            },
            {
                "day": "2015-05-17",
                "value": 73
            },
            {
                "day": "2015-09-03",
                "value": 316
            },
            {
                "day": "2015-05-26",
                "value": 141
            },
            {
                "day": "2016-05-11",
                "value": 240
            },
            {
                "day": "2016-01-16",
                "value": 11
            },
            {
                "day": "2016-01-31",
                "value": 23
            },
            {
                "day": "2015-07-11",
                "value": 194
            },
            {
                "day": "2016-03-20",
                "value": 106
            },
            {
                "day": "2015-06-06",
                "value": 272
            },
            {
                "day": "2015-05-24",
                "value": 71
            },
            {
                "day": "2015-12-19",
                "value": 81
            },
            {
                "day": "2015-12-12",
                "value": 343
            },
            {
                "day": "2016-01-21",
                "value": 383
            },
            {
                "day": "2015-09-05",
                "value": 58
            },
            {
                "day": "2016-06-17",
                "value": 209
            },
            {
                "day": "2016-06-11",
                "value": 205
            },
            {
                "day": "2015-11-11",
                "value": 226
            },
            {
                "day": "2016-07-23",
                "value": 308
            },
            {
                "day": "2015-07-02",
                "value": 209
            },
            {
                "day": "2015-04-10",
                "value": 164
            },
            {
                "day": "2016-05-14",
                "value": 122
            },
            {
                "day": "2015-04-12",
                "value": 179
            },
            {
                "day": "2015-07-09",
                "value": 14
            },
            {
                "day": "2016-05-25",
                "value": 40
            },
            {
                "day": "2015-06-24",
                "value": 337
            },
            {
                "day": "2016-05-27",
                "value": 290
            },
            {
                "day": "2015-11-09",
                "value": 245
            },
            {
                "day": "2015-07-19",
                "value": 372
            },
            {
                "day": "2015-08-29",
                "value": 317
            },
            {
                "day": "2015-08-19",
                "value": 263
            },
            {
                "day": "2016-02-23",
                "value": 337
            },
            {
                "day": "2015-09-02",
                "value": 149
            },
            {
                "day": "2015-05-01",
                "value": 298
            },
            {
                "day": "2015-07-05",
                "value": 330
            },
            {
                "day": "2016-06-12",
                "value": 217
            },
            {
                "day": "2016-03-02",
                "value": 40
            },
            {
                "day": "2015-11-25",
                "value": 289
            },
            {
                "day": "2016-04-05",
                "value": 5
            },
            {
                "day": "2015-08-21",
                "value": 263
            },
            {
                "day": "2015-04-16",
                "value": 135
            },
            {
                "day": "2016-04-03",
                "value": 334
            },
            {
                "day": "2015-08-22",
                "value": 390
            },
            {
                "day": "2016-01-26",
                "value": 154
            },
            {
                "day": "2015-11-20",
                "value": 93
            },
            {
                "day": "2016-07-24",
                "value": 170
            },
            {
                "day": "2016-06-03",
                "value": 313
            },
            {
                "day": "2015-10-27",
                "value": 372
            },
            {
                "day": "2016-06-09",
                "value": 265
            },
            {
                "day": "2015-12-09",
                "value": 311
            },
            {
                "day": "2016-05-28",
                "value": 362
            },
            {
                "day": "2016-01-20",
                "value": 113
            },
            {
                "day": "2015-09-13",
                "value": 171
            },
            {
                "day": "2016-04-23",
                "value": 109
            },
            {
                "day": "2016-04-04",
                "value": 251
            },
            {
                "day": "2015-10-03",
                "value": 139
            },
            {
                "day": "2015-10-12",
                "value": 349
            },
            {
                "day": "2016-06-20",
                "value": 328
            },
            {
                "day": "2016-06-21",
                "value": 156
            },
            {
                "day": "2016-03-08",
                "value": 313
            },
            {
                "day": "2016-06-15",
                "value": 186
            },
            {
                "day": "2015-04-24",
                "value": 143
            },
            {
                "day": "2016-03-14",
                "value": 278
            },
            {
                "day": "2016-02-04",
                "value": 98
            },
            {
                "day": "2015-06-01",
                "value": 340
            },
            {
                "day": "2015-09-11",
                "value": 213
            },
            {
                "day": "2015-04-02",
                "value": 155
            },
            {
                "day": "2015-12-13",
                "value": 358
            },
            {
                "day": "2015-08-18",
                "value": 53
            },
            {
                "day": "2016-03-16",
                "value": 79
            },
            {
                "day": "2015-06-12",
                "value": 208
            },
            {
                "day": "2016-03-05",
                "value": 306
            },
            {
                "day": "2015-04-13",
                "value": 0
            },
            {
                "day": "2016-07-07",
                "value": 123
            },
            {
                "day": "2016-03-01",
                "value": 176
            },
            {
                "day": "2016-05-23",
                "value": 148
            },
            {
                "day": "2016-04-29",
                "value": 159
            },
            {
                "day": "2015-08-26",
                "value": 55
            },
            {
                "day": "2015-09-28",
                "value": 255
            },
            {
                "day": "2015-06-08",
                "value": 161
            },
            {
                "day": "2015-11-18",
                "value": 248
            },
            {
                "day": "2016-06-05",
                "value": 76
            },
            {
                "day": "2016-01-07",
                "value": 111
            },
            {
                "day": "2015-10-19",
                "value": 361
            },
            {
                "day": "2016-05-13",
                "value": 27
            },
            {
                "day": "2016-04-01",
                "value": 219
            },
            {
                "day": "2016-07-16",
                "value": 364
            },
            {
                "day": "2015-09-12",
                "value": 128
            },
            {
                "day": "2016-05-12",
                "value": 215
            },
            {
                "day": "2015-06-26",
                "value": 197
            },
            {
                "day": "2016-01-03",
                "value": 289
            },
            {
                "day": "2015-07-15",
                "value": 209
            },
            {
                "day": "2016-03-28",
                "value": 214
            },
            {
                "day": "2016-05-01",
                "value": 338
            },
            {
                "day": "2016-02-12",
                "value": 48
            },
            {
                "day": "2016-02-26",
                "value": 358
            },
            {
                "day": "2015-07-22",
                "value": 186
            },
            {
                "day": "2015-11-21",
                "value": 322
            },
            {
                "day": "2016-07-25",
                "value": 60
            },
            {
                "day": "2015-09-18",
                "value": 344
            },
            {
                "day": "2016-04-28",
                "value": 324
            },
            {
                "day": "2015-11-27",
                "value": 176
            },
            {
                "day": "2015-10-16",
                "value": 42
            },
            {
                "day": "2016-01-22",
                "value": 52
            },
            {
                "day": "2015-12-22",
                "value": 137
            },
            {
                "day": "2015-11-14",
                "value": 201
            },
            {
                "day": "2016-04-02",
                "value": 285
            },
            {
                "day": "2016-07-01",
                "value": 198
            },
            {
                "day": "2015-08-12",
                "value": 277
            },
            {
                "day": "2016-02-17",
                "value": 185
            },
            {
                "day": "2015-07-25",
                "value": 42
            },
            {
                "day": "2016-08-11",
                "value": 185
            },
            {
                "day": "2015-05-25",
                "value": 158
            },
            {
                "day": "2015-10-05",
                "value": 342
            },
            {
                "day": "2016-07-29",
                "value": 67
            },
            {
                "day": "2016-03-06",
                "value": 253
            },
            {
                "day": "2015-12-15",
                "value": 71
            },
            {
                "day": "2016-03-18",
                "value": 43
            },
            {
                "day": "2016-05-16",
                "value": 244
            },
            {
                "day": "2016-04-10",
                "value": 119
            },
            {
                "day": "2016-05-09",
                "value": 188
            },
            {
                "day": "2016-06-18",
                "value": 77
            },
            {
                "day": "2015-06-09",
                "value": 79
            },
            {
                "day": "2016-01-04",
                "value": 255
            },
            {
                "day": "2016-02-02",
                "value": 219
            },
            {
                "day": "2015-08-27",
                "value": 38
            },
            {
                "day": "2015-12-16",
                "value": 355
            },
            {
                "day": "2016-05-26",
                "value": 27
            },
            {
                "day": "2015-08-25",
                "value": 126
            },
            {
                "day": "2015-09-17",
                "value": 272
            },
            {
                "day": "2015-07-27",
                "value": 280
            },
            {
                "day": "2015-09-08",
                "value": 268
            },
            {
                "day": "2015-09-22",
                "value": 150
            },
            {
                "day": "2015-11-15",
                "value": 94
            },
            {
                "day": "2016-01-24",
                "value": 121
            },
            {
                "day": "2015-11-17",
                "value": 224
            },
            {
                "day": "2016-07-31",
                "value": 395
            },
            {
                "day": "2016-07-09",
                "value": 17
            },
            {
                "day": "2016-02-07",
                "value": 49
            },
            {
                "day": "2015-08-09",
                "value": 3
            },
            {
                "day": "2016-06-01",
                "value": 288
            },
            {
                "day": "2015-10-01",
                "value": 267
            },
            {
                "day": "2016-05-15",
                "value": 399
            },
            {
                "day": "2016-02-24",
                "value": 184
            },
            {
                "day": "2015-10-07",
                "value": 172
            },
            {
                "day": "2015-10-28",
                "value": 140
            },
            {
                "day": "2015-05-04",
                "value": 256
            },
            {
                "day": "2015-05-09",
                "value": 305
            },
            {
                "day": "2015-05-14",
                "value": 233
            },
            {
                "day": "2016-04-30",
                "value": 258
            },
            {
                "day": "2015-09-26",
                "value": 57
            },
            {
                "day": "2015-12-28",
                "value": 14
            },
            {
                "day": "2016-08-03",
                "value": 182
            },
            {
                "day": "2015-05-11",
                "value": 241
            },
            {
                "day": "2015-11-24",
                "value": 36
            },
            {
                "day": "2015-11-05",
                "value": 48
            },
            {
                "day": "2016-01-15",
                "value": 166
            },
            {
                "day": "2016-02-14",
                "value": 75
            },
            {
                "day": "2015-05-12",
                "value": 172
            },
            {
                "day": "2015-10-23",
                "value": 243
            },
            {
                "day": "2016-08-07",
                "value": 65
            },
            {
                "day": "2016-06-29",
                "value": 391
            },
            {
                "day": "2016-04-07",
                "value": 41
            },
            {
                "day": "2016-08-10",
                "value": 239
            },
            {
                "day": "2015-05-30",
                "value": 334
            },
            {
                "day": "2015-12-14",
                "value": 138
            },
            {
                "day": "2016-01-19",
                "value": 386
            },
            {
                "day": "2015-07-08",
                "value": 316
            },
            {
                "day": "2015-10-17",
                "value": 174
            },
            {
                "day": "2015-10-06",
                "value": 33
            },
            {
                "day": "2015-04-18",
                "value": 168
            },
            {
                "day": "2015-04-30",
                "value": 345
            },
            {
                "day": "2015-08-20",
                "value": 42
            },
            {
                "day": "2015-06-20",
                "value": 342
            },
            {
                "day": "2016-03-21",
                "value": 152
            },
            {
                "day": "2015-08-15",
                "value": 294
            },
            {
                "day": "2016-01-25",
                "value": 125
            },
            {
                "day": "2016-06-24",
                "value": 237
            },
            {
                "day": "2016-08-09",
                "value": 272
            },
            {
                "day": "2015-08-11",
                "value": 15
            },
            {
                "day": "2015-08-05",
                "value": 41
            },
            {
                "day": "2015-08-13",
                "value": 305
            },
            {
                "day": "2015-08-30",
                "value": 254
            },
            {
                "day": "2015-12-30",
                "value": 200
            },
            {
                "day": "2015-06-07",
                "value": 223
            },
            {
                "day": "2015-12-20",
                "value": 242
            },
            {
                "day": "2016-05-31",
                "value": 364
            },
            {
                "day": "2015-06-14",
                "value": 237
            },
            {
                "day": "2015-11-19",
                "value": 187
            },
            {
                "day": "2015-10-26",
                "value": 296
            },
            {
                "day": "2015-11-10",
                "value": 148
            },
            {
                "day": "2015-07-12",
                "value": 295
            },
            {
                "day": "2016-02-09",
                "value": 269
            },
            {
                "day": "2016-08-02",
                "value": 49
            },
            {
                "day": "2015-12-31",
                "value": 58
            },
            {
                "day": "2016-01-01",
                "value": 241
            },
            {
                "day": "2015-11-02",
                "value": 393
            },
            {
                "day": "2016-07-04",
                "value": 101
            },
            {
                "day": "2015-04-07",
                "value": 256
            },
            {
                "day": "2016-07-26",
                "value": 300
            },
            {
                "day": "2016-03-13",
                "value": 17
            },
            {
                "day": "2016-05-29",
                "value": 289
            },
            {
                "day": "2016-04-14",
                "value": 32
            },
            {
                "day": "2015-04-11",
                "value": 320
            },
            {
                "day": "2015-05-19",
                "value": 68
            },
            {
                "day": "2016-01-09",
                "value": 180
            },
            {
                "day": "2016-07-28",
                "value": 300
            },
            {
                "day": "2015-10-09",
                "value": 266
            },
            {
                "day": "2015-09-04",
                "value": 394
            },
            {
                "day": "2015-06-28",
                "value": 20
            },
            {
                "day": "2016-04-24",
                "value": 157
            },
            {
                "day": "2015-07-20",
                "value": 330
            },
            {
                "day": "2015-11-26",
                "value": 175
            },
            {
                "day": "2016-06-08",
                "value": 225
            },
            {
                "day": "2016-01-11",
                "value": 165
            },
            {
                "day": "2016-04-13",
                "value": 44
            },
            {
                "day": "2015-08-07",
                "value": 80
            },
            {
                "day": "2015-07-04",
                "value": 307
            },
            {
                "day": "2016-06-04",
                "value": 111
            },
            {
                "day": "2016-06-30",
                "value": 101
            },
            {
                "day": "2016-07-11",
                "value": 210
            },
            {
                "day": "2016-06-10",
                "value": 183
            },
            {
                "day": "2016-03-11",
                "value": 231
            },
            {
                "day": "2016-03-22",
                "value": 395
            },
            {
                "day": "2015-11-13",
                "value": 283
            },
            {
                "day": "2015-10-15",
                "value": 375
            },
            {
                "day": "2016-03-15",
                "value": 51
            },
            {
                "day": "2016-02-15",
                "value": 388
            },
            {
                "day": "2016-04-21",
                "value": 209
            },
            {
                "day": "2015-06-27",
                "value": 96
            },
            {
                "day": "2016-02-06",
                "value": 62
            },
            {
                "day": "2016-04-22",
                "value": 281
            },
            {
                "day": "2015-09-30",
                "value": 123
            },
            {
                "day": "2015-12-21",
                "value": 103
            },
            {
                "day": "2015-06-17",
                "value": 190
            },
            {
                "day": "2015-05-15",
                "value": 384
            },
            {
                "day": "2015-04-17",
                "value": 41
            },
            {
                "day": "2016-04-26",
                "value": 246
            },
            {
                "day": "2015-09-07",
                "value": 205
            },
            {
                "day": "2015-10-29",
                "value": 369
            },
            {
                "day": "2016-07-17",
                "value": 239
            },
            {
                "day": "2016-03-09",
                "value": 164
            },
            {
                "day": "2015-07-10",
                "value": 174
            },
            {
                "day": "2016-02-08",
                "value": 57
            },
            {
                "day": "2015-06-11",
                "value": 154
            },
            {
                "day": "2016-01-12",
                "value": 95
            },
            {
                "day": "2015-09-29",
                "value": 274
            },
            {
                "day": "2016-02-29",
                "value": 381
            },
            {
                "day": "2015-12-29",
                "value": 361
            },
            {
                "day": "2016-06-26",
                "value": 108
            },
            {
                "day": "2015-09-19",
                "value": 4
            },
            {
                "day": "2015-10-22",
                "value": 68
            },
            {
                "day": "2015-06-22",
                "value": 56
            },
            {
                "day": "2015-12-05",
                "value": 59
            },
            {
                "day": "2015-05-05",
                "value": 265
            },
            {
                "day": "2015-11-04",
                "value": 202
            },
            {
                "day": "2015-04-09",
                "value": 135
            },
            {
                "day": "2015-12-08",
                "value": 275
            },
            {
                "day": "2016-05-17",
                "value": 70
            },
            {
                "day": "2016-07-21",
                "value": 27
            },
            {
                "day": "2016-08-01",
                "value": 66
            },
            {
                "day": "2016-01-18",
                "value": 75
            },
            {
                "day": "2015-05-22",
                "value": 342
            },
            {
                "day": "2016-06-28",
                "value": 211
            },
            {
                "day": "2016-06-02",
                "value": 203
            },
            {
                "day": "2015-09-16",
                "value": 328
            },
            {
                "day": "2015-07-16",
                "value": 234
            },
            {
                "day": "2015-05-16",
                "value": 120
            },
            {
                "day": "2016-07-14",
                "value": 91
            },
            {
                "day": "2015-09-06",
                "value": 80
            },
            {
                "day": "2015-04-20",
                "value": 371
            },
            {
                "day": "2016-07-08",
                "value": 286
            },
            {
                "day": "2015-06-03",
                "value": 289
            },
            {
                "day": "2016-05-18",
                "value": 38
            },
            {
                "day": "2015-11-23",
                "value": 364
            },
            {
                "day": "2015-08-10",
                "value": 253
            },
            {
                "day": "2015-07-31",
                "value": 226
            },
            {
                "day": "2015-06-30",
                "value": 141
            },
            {
                "day": "2016-06-25",
                "value": 41
            },
            {
                "day": "2016-03-26",
                "value": 11
            },
            {
                "day": "2015-12-23",
                "value": 382
            },
            {
                "day": "2015-11-28",
                "value": 56
            },
            {
                "day": "2016-05-02",
                "value": 185
            },
            {
                "day": "2016-03-27",
                "value": 193
            },
            {
                "day": "2015-12-11",
                "value": 266
            },
            {
                "day": "2015-11-22",
                "value": 58
            },
            {
                "day": "2015-06-18",
                "value": 100
            },
            {
                "day": "2016-04-11",
                "value": 41
            },
            {
                "day": "2016-06-27",
                "value": 118
            },
            {
                "day": "2016-02-03",
                "value": 257
            },
            {
                "day": "2015-10-21",
                "value": 296
            },
            {
                "day": "2015-11-07",
                "value": 144
            },
            {
                "day": "2015-11-08",
                "value": 349
            },
            {
                "day": "2015-07-29",
                "value": 336
            },
            {
                "day": "2015-08-16",
                "value": 205
            },
            {
                "day": "2015-07-07",
                "value": 357
            },
            {
                "day": "2015-12-26",
                "value": 164
            },
            {
                "day": "2015-08-06",
                "value": 300
            },
            {
                "day": "2015-08-01",
                "value": 231
            },
            {
                "day": "2016-05-19",
                "value": 288
            },
            {
                "day": "2015-04-23",
                "value": 87
            },
            {
                "day": "2016-06-06",
                "value": 249
            },
            {
                "day": "2015-04-21",
                "value": 367
            },
            {
                "day": "2015-09-20",
                "value": 272
            },
            {
                "day": "2015-05-02",
                "value": 189
            },
            {
                "day": "2015-08-24",
                "value": 206
            },
            {
                "day": "2015-08-08",
                "value": 180
            },
            {
                "day": "2015-05-21",
                "value": 288
            },
            {
                "day": "2015-07-30",
                "value": 167
            },
            {
                "day": "2015-04-27",
                "value": 297
            },
            {
                "day": "2016-07-10",
                "value": 79
            },
            {
                "day": "2015-05-13",
                "value": 52
            },
            {
                "day": "2016-07-03",
                "value": 237
            },
            {
                "day": "2015-10-04",
                "value": 369
            },
            {
                "day": "2015-09-23",
                "value": 340
            },
            {
                "day": "2015-12-07",
                "value": 40
            },
            {
                "day": "2016-07-30",
                "value": 256
            },
            {
                "day": "2016-03-10",
                "value": 2
            },
            {
                "day": "2016-02-28",
                "value": 356
            },
            {
                "day": "2015-07-03",
                "value": 355
            },
            {
                "day": "2016-07-27",
                "value": 185
            },
            {
                "day": "2016-07-18",
                "value": 85
            },
            {
                "day": "2015-04-05",
                "value": 173
            },
            {
                "day": "2015-12-10",
                "value": 338
            },
            {
                "day": "2015-04-08",
                "value": 157
            },
            {
                "day": "2016-01-06",
                "value": 125
            },
            {
                "day": "2015-04-25",
                "value": 66
            },
            {
                "day": "2015-06-10",
                "value": 108
            },
            {
                "day": "2016-02-05",
                "value": 372
            },
            {
                "day": "2016-02-21",
                "value": 211
            },
            {
                "day": "2016-05-04",
                "value": 242
            },
            {
                "day": "2015-04-04",
                "value": 316
            },
            {
                "day": "2015-07-13",
                "value": 382
            },
            {
                "day": "2016-01-05",
                "value": 387
            },
            {
                "day": "2015-07-21",
                "value": 115
            },
            {
                "day": "2016-02-16",
                "value": 167
            },
            {
                "day": "2015-05-07",
                "value": 139
            },
            {
                "day": "2016-07-22",
                "value": 317
            },
            {
                "day": "2015-07-14",
                "value": 119
            },
            {
                "day": "2016-05-22",
                "value": 184
            },
            {
                "day": "2016-05-20",
                "value": 235
            }
        ];
    }
}
exports.default = ReadingProgressTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZGluZ1Byb2dyZXNzVGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZWFkaW5nUHJvZ3Jlc3NUYWJsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDZEQUF3RDtBQUV4RCw0REFBb0M7QUFDcEMsNkNBQWtEO0FBQ2xELDJEQUFzRDtBQUN0RCx1RUFBa0U7QUFDbEUsdUZBQWtGO0FBQ2xGLCtEQUEwRDtBQUMxRCw2REFBd0Q7QUFFeEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQXFCLG9CQUFxQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU3RSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sY0FBYyxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7UUFFcEMsS0FBSyxNQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUU7WUFFN0MsS0FBSyxNQUFNLEtBQUssSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxFQUFFO2dCQUNuRSxjQUFjLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3REO1NBRUo7UUFFRCxNQUFNLElBQUksR0FBRyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2hELE9BQU87Z0JBQ0gsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO2dCQUNoQixLQUFLLEVBQUUsaUJBQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFB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cG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0lEb2NJbmZvfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQgU3RhdFRpdGxlIGZyb20gJy4vU3RhdFRpdGxlJztcbmltcG9ydCB7UmVzcG9uc2l2ZUNhbGVuZGFyfSBmcm9tICdAbml2by9jYWxlbmRhcic7XG5pbXBvcnQge0hpdE1hcH0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3V0aWwvSGl0TWFwJztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9EaWN0aW9uYXJpZXMnO1xuaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZ3N9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuaW1wb3J0IHtSZWR1Y2Vyc30gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3V0aWwvUmVkdWNlcnMnO1xuaW1wb3J0IHtOdW1iZXJzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9OdW1iZXJzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFkaW5nUHJvZ3Jlc3NUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBwcm9ncmVzc1BlckRheSA9IG5ldyBIaXRNYXAoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGRvY0luZm8gb2YgdGhpcy5wcm9wcy5kb2NJbmZvcyB8fCBbXSkge1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIERpY3Rpb25hcmllcy5lbnRyaWVzKGRvY0luZm8ucmVhZGluZ1BlckRheSB8fCB7fSkpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc1BlckRheS5yZWdpc3RlckhpdChlbnRyeS5rZXksIGVudHJ5LnZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHByb2dyZXNzUGVyRGF5LnRvQXJyYXkoKS5tYXAoY3VycmVudCA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRheTogY3VycmVudC5rZXksXG4gICAgICAgICAgICAgICAgdmFsdWU6IE51bWJlcnMudG9GaXhlZEZsb2F0KGN1cnJlbnQudmFsdWUsIDIpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkb21haW4gPSBbMCwgZGF0YS5tYXAoY3VycmVudCA9PiBjdXJyZW50LnZhbHVlKS5yZWR1Y2UoUmVkdWNlcnMuTUFYLCAwKV07XG5cbiAgICAgICAgLy8gY29tcHV0ZSB0aGUgZnJvbSBhbmQgdG8geWVhci4uLlxuXG4gICAgICAgIGNvbnN0IGRheXMgPSBkYXRhLm1hcChjdXJyZW50ID0+IGN1cnJlbnQuZGF5KS5zb3J0KCk7XG5cbiAgICAgICAgY29uc3QgdG9kYXkgPSBJU09EYXRlVGltZVN0cmluZ3MudG9JU09EYXRlKElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSk7XG5cbiAgICAgICAgY29uc3QgZnJvbVllYXIgPSBJU09EYXRlVGltZVN0cmluZ3MudG9JU09ZZWFyKGRheXMucmVkdWNlKFJlZHVjZXJzLkZJUlNULCB0b2RheSkpO1xuICAgICAgICBjb25zdCB0b1llYXIgPSBJU09EYXRlVGltZVN0cmluZ3MudG9JU09ZZWFyKGRheXMucmVkdWNlKFJlZHVjZXJzLkxBU1QsIHRvZGF5KSk7XG5cbiAgICAgICAgLy8gTk9URTogd2Ugb2Zmc2V0IHRoZSBkYXlzIGJ5IDEgc28gdGhhdCB3ZSBkb24ndCBmb2xkIGludG8gdGhlIG5leHRcbiAgICAgICAgLy8geWVhciBkZXBlbmRpbmcgb24gdGltZXpvbmVzLlxuXG4gICAgICAgIGNvbnN0IGZyb20gPSBgJHtmcm9tWWVhcn0tMDEtMDJgO1xuICAgICAgICBjb25zdCB0byA9IGAke2Zyb21ZZWFyfS0xMi0zMGA7XG5cbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9XCJyZWFkaW5nLXByb2dyZXNzLXRhYmxlXCI+XG5cbiAgICAgICAgICAgIDxTdGF0VGl0bGU+UmVhZGluZyBQcm9ncmVzczwvU3RhdFRpdGxlPlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTUwcHgnfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEgbXItYXV0byBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnODAwcHgnfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPFJlc3BvbnNpdmVDYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb209e2Zyb219XG4gICAgICAgICAgICAgICAgICAgICAgICB0bz17dG99XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21haW49e2RvbWFpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5Q29sb3I9XCIjZWVlZWVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiYSgwLDAsMjU1LDAuMSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJnYmEoMCwwLDI1NSwwLjIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZ2JhKDAsMCwyNTUsMC4zKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiYSgwLDAsMjU1LDAuNClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJnYmEoMCwwLDI1NSwwLjUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZ2JhKDAsMCwyNTUsMC42KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiYSgwLDAsMjU1LDAuNylcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJnYmEoMCwwLDI1NSwwLjgpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZ2JhKDAsMCwyNTUsMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiYSgwLDAsMjU1LDEuMClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXJTcGFjaW5nPXs0MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoQm9yZGVyQ29sb3I9XCIjZmZmZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoTGVnZW5kT2Zmc2V0PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRheUJvcmRlcldpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5Qm9yZGVyQ29sb3I9XCIjZmZmZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBsZWdlbmRzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFwiYW5jaG9yXCI6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJ0cmFuc2xhdGVZXCI6IDM2LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJpdGVtQ291bnRcIjogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFwiaXRlbVdpZHRoXCI6IDM0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJpdGVtSGVpZ2h0XCI6IDM2LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJpdGVtRGlyZWN0aW9uXCI6IFwidG9wLXRvLWJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMSBwbC01IHByLTUgbXItYXV0byBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICc4MDBweCd9fT5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhlIG51bWJlciBvZiBwYWdlcyByZWFkIHBlciBkYXkuICBUaGlzIGlzIGNvbXB1dGVkIGJ5IHVzaW5nXG4gICAgICAgICAgICAgICAgICAgIHRoZSAncmVhZCcgcGFnZW1hcmtzIGZyb20gdGhlIGRvY3VtZW50cyB5b3UncmUgdHJhY2tpbmcuICBJZlxuICAgICAgICAgICAgICAgICAgICBpdCBzZWVtcyBsaWtlIHRoZXJlIGFyZSB0b28gbWFueSBwYWdlcyByZWFkIHBlciBkYXkgdHJ5XG4gICAgICAgICAgICAgICAgICAgIGNoYW5naW5nIHRoZSAnbW9kZScgb2YgdGhlIHBhZ2VtYXJrIHRvIGVpdGhlciAncHJldmlvdXNseVxuICAgICAgICAgICAgICAgICAgICByZWFkJyBvciAnaWdub3JlZCcuICBUaHNpIGNhbiBoYXBwZW4gd2hlbiBpbXBvcnRpbmcgZG9jdW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIHlvdSdyZSBwcmV2aW91c2x5IHJlYWQgYW5kIGNyZWF0ZSBhIGxhcmdlIHBhZ2VtYXJrLlxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXREYXRhKCk6IGFueSB7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTAtMDMtMDRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM4N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTAtMDUtMTdcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDQ2XG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXREYXRhMigpOiBhbnkge1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTAzLTA0XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzODdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEyLTE3XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDctMThcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI0N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMjlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA4LTAzXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNTlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA0LTE2XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDItMjJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDEyOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTAtMDhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE0NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMDNcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIxNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDgtMDJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMxMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMTJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIyMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDctMTJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI1NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDgtMzFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM2OFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDctMTVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM3OVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDYtMTlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI1NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDctMDZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIxOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDEtMzBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDUxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMC0xMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzQwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wOS0wOVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTc0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMS0yOVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjAzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMi0xOFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjA5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNy0xOVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTM4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMi0wM1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTAyLTAxXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzMTNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEyLTA2XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNTVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEwLTAyXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxMzNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA3LTAyXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxMjhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA0LTE0XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxMjhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA1LTAzXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA5LTIxXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyODlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA0LTE4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA1MVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDItMjdcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMzOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDYtMjNcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM5N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDUtMDdcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM5NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDktMDFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM4MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDYtMDRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI2OFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDgtMDhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE0NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTEtMTJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDEyOVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDItMTlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM0NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDYtMjNcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM5OVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTEtMzBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDkzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNS0wOFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjYyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wOC0wNVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzkyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNC0xN1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogOTJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA2LTE0XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzMzBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTAzLTI1XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNTFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA5LTI1XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyMDdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTAyLTI1XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA4N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMzBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDExN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMjNcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIyOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDctMTNcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDkzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNS0xN1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNzNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA5LTAzXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzMTZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA1LTI2XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA1LTExXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyNDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTAxLTE2XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDEtMzFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNy0xMVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTk0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMy0yMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTA2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNi0wNlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjcyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNS0yNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNzFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEyLTE5XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA4MVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTItMTJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM0M1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDEtMjFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM4M1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDktMDVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDU4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNi0xN1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjA5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNi0xMVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjA1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMS0xMVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjI2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNy0yM1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzA4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNy0wMlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjA5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNC0xMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTY0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNS0xNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTIyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNC0xMlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTc5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNy0wOVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA1LTI1XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDYtMjRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMzN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDUtMjdcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI5MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTEtMDlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI0NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDctMTlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM3MlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDgtMjlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMxN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDgtMTlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI2M1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDItMjNcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMzN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDktMDJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE0OVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDUtMDFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI5OFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDctMDVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMzMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDYtMTJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIxN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMDJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDQwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMS0yNVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjg5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNC0wNVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDgtMjFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI2M1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDQtMTZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDEzNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDQtMDNcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMzNFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDgtMjJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM5MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDEtMjZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE1NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTEtMjBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDkzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNy0yNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTcwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNi0wM1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzEzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMC0yN1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzcyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNi0wOVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjY1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMi0wOVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzExXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNS0yOFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzYyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMS0yMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTEzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wOS0xM1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTcxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNC0yM1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTA5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNC0wNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjUxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMC0wM1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTM5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMC0xMlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzQ5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNi0yMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzI4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNi0yMVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTU2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMy0wOFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzEzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNi0xNVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTg2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNC0yNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTQzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMy0xNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjc4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMi0wNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogOThcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA2LTAxXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA5LTExXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyMTNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA0LTAyXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNTVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEyLTEzXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNThcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA4LTE4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA1M1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMTZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDc5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNi0xMlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjA4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMy0wNVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzA2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNC0xM1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDctMDdcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDEyM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMDFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE3NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDUtMjNcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE0OFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDQtMjlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE1OVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDgtMjZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDU1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wOS0yOFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjU1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNi0wOFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTYxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMS0xOFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjQ4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNi0wNVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNzZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTAxLTA3XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxMTFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEwLTE5XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNjFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA1LTEzXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDQtMDFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIxOVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDctMTZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM2NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDktMTJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDEyOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDUtMTJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIxNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDYtMjZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE5N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDEtMDNcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI4OVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDctMTVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIwOVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMjhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIxNFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDUtMDFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMzOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDItMTJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDQ4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMi0yNlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzU4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNy0yMlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTg2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMS0yMVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzIyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNy0yNVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA5LTE4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA0LTI4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzMjRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTExLTI3XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNzZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEwLTE2XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0MlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDEtMjJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDUyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMi0yMlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTM3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMS0xNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNC0wMlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjg1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNy0wMVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTk4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wOC0xMlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjc3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMi0xN1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTg1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNy0yNVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA4LTExXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxODVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA1LTI1XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNThcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEwLTA1XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA3LTI5XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA2N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMDZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI1M1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTItMTVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDcxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMy0xOFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA1LTE2XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyNDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA0LTEwXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxMTlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA1LTA5XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxODhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA2LTE4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA3N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDYtMDlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDc5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMS0wNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjU1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMi0wMlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjE5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wOC0yN1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEyLTE2XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNTVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA1LTI2XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDgtMjVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDEyNlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDktMTdcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI3MlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDctMjdcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI4MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDktMDhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI2OFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDktMjJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE1MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTEtMTVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDk0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMS0yNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTIxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMS0xN1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjI0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNy0zMVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzk1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNy0wOVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTAyLTA3XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0OVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDgtMDlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA2LTAxXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyODhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEwLTAxXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyNjdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA1LTE1XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzOTlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTAyLTI0XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxODRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEwLTA3XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNzJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEwLTI4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA1LTA0XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyNTZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA1LTA5XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzMDVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA1LTE0XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyMzNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA0LTMwXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyNThcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA5LTI2XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA1N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTItMjhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wOC0wM1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTgyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNS0xMVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjQxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMS0yNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTExLTA1XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0OFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDEtMTVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE2NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDItMTRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDc1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNS0xMlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTcyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMC0yM1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjQzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wOC0wN1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNjVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA2LTI5XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzOTFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA0LTA3XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0MVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDgtMTBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIzOVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDUtMzBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMzNFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTItMTRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDEzOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDEtMTlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM4NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDctMDhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMxNlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTAtMTdcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE3NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTAtMDZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNC0xOFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTY4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNC0zMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzQ1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wOC0yMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA2LTIwXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTAzLTIxXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNTJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA4LTE1XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyOTRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTAxLTI1XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxMjVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA2LTI0XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyMzdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA4LTA5XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyNzJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA4LTExXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDgtMDVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDQxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wOC0xM1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzA1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wOC0zMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjU0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMi0zMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNi0wN1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjIzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMi0yMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjQyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNS0zMVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzY0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNi0xNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjM3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMS0xOVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTg3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMC0yNlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjk2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMS0xMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTQ4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNy0xMlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjk1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMi0wOVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjY5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wOC0wMlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNDlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEyLTMxXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA1OFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDEtMDFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI0MVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTEtMDJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM5M1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDctMDRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDEwMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDQtMDdcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI1NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDctMjZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMTNcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNS0yOVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjg5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNC0xNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA0LTExXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzMjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA1LTE5XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA2OFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDEtMDlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE4MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDctMjhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTAtMDlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI2NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDktMDRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM5NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDYtMjhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNC0yNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTU3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNy0yMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzMwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMS0yNlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTc1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNi0wOFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjI1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMS0xMVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTY1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNC0xM1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA4LTA3XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA4MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDctMDRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMwN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDYtMDRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDExMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDYtMzBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDEwMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDctMTFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIxMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDYtMTBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE4M1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMTFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIzMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMjJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM5NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTEtMTNcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI4M1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTAtMTVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM3NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMTVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDUxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMi0xNVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzg4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNC0yMVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjA5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNi0yN1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogOTZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTAyLTA2XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA2MlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDQtMjJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI4MVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDktMzBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDEyM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTItMjFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDEwM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDYtMTdcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE5MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDUtMTVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDQtMTdcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDQxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNC0yNlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjQ2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wOS0wN1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjA1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMC0yOVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzY5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNy0xN1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjM5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMy0wOVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTY0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNy0xMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTc0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMi0wOFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNTdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA2LTExXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNTRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTAxLTEyXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA5NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDktMjlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI3NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDItMjlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM4MVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTItMjlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM2MVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDYtMjZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDEwOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDktMTlcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEwLTIyXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA2OFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDYtMjJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDU2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0xMi0wNVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNTlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA1LTA1XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyNjVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTExLTA0XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyMDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA0LTA5XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxMzVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEyLTA4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyNzVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA1LTE3XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA3MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDctMjFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wOC0wMVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNjZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTAxLTE4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA3NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDUtMjJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM0MlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDYtMjhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIxMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDYtMDJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIwM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDktMTZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMyOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDctMTZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIzNFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDUtMTZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDEyMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDctMTRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDkxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wOS0wNlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA0LTIwXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNzFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA3LTA4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyODZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA2LTAzXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyODlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA1LTE4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTEtMjNcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM2NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDgtMTBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI1M1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDctMzFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIyNlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDYtMzBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE0MVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDYtMjVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDQxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMy0yNlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEyLTIzXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzODJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTExLTI4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA1NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDUtMDJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE4NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMjdcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE5M1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTItMTFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI2NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTEtMjJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDU4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNi0xOFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNC0xMVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA2LTI3XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxMThcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTAyLTAzXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyNTdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEwLTIxXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyOTZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTExLTA3XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTExLTA4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNDlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA3LTI5XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzMzZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA4LTE2XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyMDVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA3LTA3XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNTdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEyLTI2XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNjRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA4LTA2XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA4LTAxXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyMzFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA1LTE5XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyODhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA0LTIzXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA4N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDYtMDZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI0OVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDQtMjFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM2N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDktMjBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI3MlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDUtMDJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE4OVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDgtMjRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIwNlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDgtMDhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE4MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDUtMjFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI4OFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDctMzBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE2N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDQtMjdcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI5N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDctMTBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDc5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNS0xM1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNTJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA3LTAzXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyMzdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEwLTA0XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNjlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA5LTIzXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTEyLTA3XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDctMzBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI1NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDMtMTBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTAyLTI4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNTZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE1LTA3LTAzXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNTVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA3LTI3XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxODVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkYXlcIjogXCIyMDE2LTA3LTE4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA4NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDQtMDVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE3M1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMTItMTBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMzOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDQtMDhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE1N1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTYtMDEtMDZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDEyNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRheVwiOiBcIjIwMTUtMDQtMjVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDY2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNi0xMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTA4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMi0wNVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzcyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMi0yMVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjExXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNS0wNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjQyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNC0wNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzE2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNy0xM1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzgyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMS0wNVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzg3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNy0yMVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTE1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wMi0xNlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTY3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNS0wN1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTM5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNy0yMlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzE3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNS0wNy0xNFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTE5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNS0yMlwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZGF5XCI6IFwiMjAxNi0wNS0yMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjM1XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgcmVhZG9ubHkgZG9jSW5mb3M/OiBSZWFkb25seUFycmF5PElEb2NJbmZvPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=