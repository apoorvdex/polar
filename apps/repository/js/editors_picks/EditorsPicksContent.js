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
const FilePaths_1 = require("../../../../web/js/util/FilePaths");
const react_table_1 = __importDefault(require("react-table"));
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
class Styles {
}
class EditorsPicksContent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onAdd = this.onAdd.bind(this);
    }
    render() {
        let idx = 1;
        for (const entry of entries) {
            entry.idx = idx++;
            entry.download = FilePaths_1.FilePaths.basename(entry.link);
        }
        return (React.createElement(react_table_1.default, { data: entries, columns: [
                {
                    Header: 'idx',
                    accessor: 'idx',
                    maxWidth: 40,
                    style: {
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        fontWeight: 'bold',
                        textAlign: 'right'
                    }
                },
                {
                    Header: 'Title',
                    accessor: 'title',
                    style: {
                        marginTop: 'auto',
                        marginBottom: 'auto'
                    },
                },
                {
                    Header: '',
                    accessor: 'link',
                    maxWidth: 80,
                    style: {
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        textAlign: 'right'
                    },
                    Cell: (row) => {
                        const entry = row.original;
                        return (React.createElement(Button_1.default, { style: { fontWeight: 'bold' }, className: "m-0", size: "sm", onClick: () => this.onAdd(entry.link), color: "success" },
                            React.createElement("i", { className: "fas fa-plus", style: { marginRight: '5px' } }),
                            " Add"));
                    }
                },
            ], defaultPageSize: 50, noDataText: "No data available.", className: "", getTrProps: (state, rowInfo) => {
                return {
                    style: {}
                };
            }, getTdProps: (state, rowInfo, column, instance) => {
                const singleClickColumns = [];
                if (!singleClickColumns.includes(column.id)) {
                    return {
                        onDoubleClick: (e) => {
                        }
                    };
                }
                return {};
            } }));
    }
    onAdd(href) {
        const anchor = document.createElement('a');
        anchor.setAttribute('href', href);
        anchor.setAttribute('download', FilePaths_1.FilePaths.basename(href));
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }
}
exports.EditorsPicksContent = EditorsPicksContent;
const entries = [
    {
        "title": "Norwegian Consumer Council report on how tech companies use dark patterns [pdf]",
        "score": 661,
        "link": "https:\/\/fil.forbrukerradet.no\/wp-content\/uploads\/2018\/06\/2018-06-27-deceived-by-design-final.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17406186"
    },
    {
        "title": "Assembly Language for Beginners [pdf]",
        "score": 590,
        "link": "https:\/\/yurichev.com\/writings\/AL4B-EN.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17549050"
    },
    {
        "title": "The Periodic Table of Data Structures [pdf]",
        "score": 534,
        "link": "https:\/\/stratos.seas.harvard.edu\/files\/stratos\/files\/periodictabledatastructures.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18314555"
    },
    {
        "title": "Competitive Programmer's Handbook (2017) [pdf]",
        "score": 514,
        "link": "https:\/\/cses.fi\/book.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16952222"
    },
    {
        "title": "DEF CON report on vulnerabilities in US election infrastructure [pdf]",
        "score": 509,
        "link": "https:\/\/defcon.org\/images\/defcon-26\/DEF%20CON%2026%20voting%20village%20report.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18112172"
    },
    {
        "title": "Original Source code for the Furby [pdf]",
        "score": 480,
        "link": "http:\/\/www.seanriddle.com\/furbysource.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17751599"
    },
    {
        "title": "Programming Paradigms for Dummies: What Every Programmer Should Know (2009) [pdf]",
        "score": 439,
        "link": "https:\/\/www.info.ucl.ac.be\/~pvr\/VanRoyChapter.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18381640"
    },
    {
        "title": "Selected Essays of Richard M. Stallman [pdf]",
        "score": 355,
        "link": "https:\/\/www.gnu.org\/philosophy\/fsfs\/rms-essays.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16927154"
    },
    {
        "title": "The Site Reliability Workbook: Practical Ways to Implement SRE [pdf]",
        "score": 351,
        "link": "https:\/\/services.google.com\/fh\/files\/misc\/the-site-reliability-workbook-next18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17614907"
    },
    {
        "title": "Intel Analysis of Speculative Execution Side Channels [pdf]",
        "score": 346,
        "link": "https:\/\/newsroom.intel.com\/wp-content\/uploads\/sites\/11\/2018\/01\/Intel-Analysis-of-Speculative-Execution-Side-Channels.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16079910"
    },
    {
        "title": "Vipassana for Hackers [pdf]",
        "score": 345,
        "link": "https:\/\/github.com\/deobald\/vipassana-for-hackers\/blob\/master\/vipassana-for-hackers.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16842040"
    },
    {
        "title": "Writing Network Drivers in Rust [pdf]",
        "score": 326,
        "link": "https:\/\/www.net.in.tum.de\/fileadmin\/bibtex\/publications\/theses\/2018-ixy-rust.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18405515"
    },
    {
        "title": "NSA posters from the 50s and 60s [pdf]",
        "score": 322,
        "link": "http:\/\/www.governmentattic.org\/28docs\/NSAsecurityPosters_1950s-60s.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17222827"
    },
    {
        "title": "iOS 11 Security [pdf]",
        "score": 321,
        "link": "https:\/\/www.apple.com\/business\/docs\/iOS_Security_Guide.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16140418"
    },
    {
        "title": "Cognitive Distortions of People Who Get Stuff Done (2012) [pdf]",
        "score": 318,
        "link": "https:\/\/pdfs.semanticscholar.org\/presentation\/1a59\/7a9ca8b03d86ae9a2f86dd90e7bbff481fab.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17532360"
    },
    {
        "title": "Apple T2 Security Chip: Security Overview [pdf]",
        "score": 317,
        "link": "https:\/\/www.apple.com\/mac\/docs\/Apple_T2_Security_Chip_Overview.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18337825"
    },
    {
        "title": "Uber Self-Driving Car That Struck Pedestrian Wasn\u2019t Set to Stop in an Emergency",
        "score": 314,
        "link": "https:\/\/www.ntsb.gov\/investigations\/AccidentReports\/Reports\/HWY18MH010-prelim.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17144160"
    },
    {
        "title": "The Awk Programming Language (1988) [pdf]",
        "score": 314,
        "link": "https:\/\/ia802309.us.archive.org\/25\/items\/pdfy-MgN0H1joIoDVoIC7\/The_AWK_Programming_Language.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17140934"
    },
    {
        "title": "The $25B eigenvector (2006) [pdf]",
        "score": 311,
        "link": "https:\/\/www.rose-hulman.edu\/~bryan\/googleFinalVersionFixed.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16091646"
    },
    {
        "title": "Teach Yourself Logic: A Study Guide [pdf]",
        "score": 307,
        "link": "https:\/\/www.logicmatters.net\/resources\/pdfs\/TeachYourselfLogic2017.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18757972"
    },
    {
        "title": "A C89 compiler that produces executables that are also valid ASCII text files [pdf]",
        "score": 297,
        "link": "http:\/\/www.cs.cmu.edu\/~tom7\/abc\/paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16312317"
    },
    {
        "title": "Software-Defined Radio for Engineers [pdf]",
        "score": 292,
        "link": "http:\/\/www.analog.com\/media\/en\/training-seminars\/design-handbooks\/Software-Defined-Radio-for-Engineers-2018\/SDR4Engineers.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17399554"
    },
    {
        "title": "Notes on Discrete Mathematics (2017) [pdf]",
        "score": 287,
        "link": "http:\/\/www.cs.yale.edu\/homes\/aspnes\/classes\/202\/notes.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17391580"
    },
    {
        "title": "Set Theory and Algebra in CS: Introduction to Mathematical Modeling (2013) [pdf]",
        "score": 281,
        "link": "https:\/\/pdfs.semanticscholar.org\/d106\/6b6de601c1d7d5af25af3f7091bc7ad3ad51.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17840717"
    },
    {
        "title": "Testimony of Mark Zuckerberg \u2013 Hearing Before US House of Representatives [pdf]",
        "score": 280,
        "link": "http:\/\/docs.house.gov\/meetings\/IF\/IF00\/20180411\/108090\/HHRG-115-IF00-Wstate-ZuckerbergM-20180411.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16794058"
    },
    {
        "title": "Socioeconomic group classification based on user features [pdf]",
        "score": 279,
        "link": "http:\/\/pimg-faiw.uspto.gov\/fdd\/83\/2018\/28\/003\/0.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16866292"
    },
    {
        "title": " Apple Supplier List \u2013 Top 200 [pdf]",
        "score": 274,
        "link": "https:\/\/www.apple.com\/supplier-responsibility\/pdf\/Apple-Supplier-List.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18199170"
    },
    {
        "title": "Stellar Protocol: A Federated Model for Internet-Level Consensus (2016) [pdf]",
        "score": 263,
        "link": "https:\/\/www.stellar.org\/papers\/stellar-consensus-protocol.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16125920"
    },
    {
        "title": "How to Write a Technical Paper [pdf]",
        "score": 261,
        "link": "https:\/\/pdfs.semanticscholar.org\/441f\/ac7c2020e1c8f0d32adffca697bbb8a198a1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18225197"
    },
    {
        "title": "The Making of Prince of Persia (2011) [pdf]",
        "score": 261,
        "link": "http:\/\/www.jordanmechner.com\/downloads\/makpopsample.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17845937"
    },
    {
        "title": "PID Without a PhD (2016) [pdf]",
        "score": 260,
        "link": "http:\/\/www.wescottdesign.com\/articles\/pid\/pidWithoutAPhd.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16257156"
    },
    {
        "title": "Principles of Algorithmic Problem Solving (2017) [pdf]",
        "score": 256,
        "link": "https:\/\/www.csc.kth.se\/~jsannemo\/slask\/main.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18287355"
    },
    {
        "title": "Public.resource.org wins appeal on right to publish the law [pdf]",
        "score": 248,
        "link": "https:\/\/www.cadc.uscourts.gov\/internet\/opinions.nsf\/533D47AF883C8194852582CD0052B8D4\/$file\/17-7035.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17579742"
    },
    {
        "title": "MIT Career Development Handbook [pdf]",
        "score": 248,
        "link": "https:\/\/gecd.mit.edu\/sites\/default\/files\/about\/files\/career-handbook.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17331316"
    },
    {
        "title": "Seven Puzzles You Think You Must Not Have Heard Correctly (2006) [pdf]",
        "score": 234,
        "link": "https:\/\/www.math.dartmouth.edu\/~pw\/solutions.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16998823"
    },
    {
        "title": "L-theanine, a constituent in tea, and its effect on mental state (2008) [pdf]",
        "score": 233,
        "link": "http:\/\/apjcn.nhri.org.tw\/server\/APJCN\/17%20Suppl%201\/\/167.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17644204"
    },
    {
        "title": "Self-Awareness for Introverts [pdf]",
        "score": 225,
        "link": "http:\/\/cliffc.org\/blog\/wp-content\/uploads\/2018\/05\/AWarOfWords.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17010199"
    },
    {
        "title": "House Oversight Committee Report on Equifax Breach [pdf]",
        "score": 221,
        "link": "https:\/\/oversight.house.gov\/wp-content\/uploads\/2018\/12\/Equifax-Report.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18651676"
    },
    {
        "title": "Apple File System Reference [pdf]",
        "score": 220,
        "link": "https:\/\/developer.apple.com\/support\/apple-file-system\/Apple-File-System-Reference.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18040742"
    },
    {
        "title": "The original pitch for Diablo (1994) [pdf]",
        "score": 219,
        "link": "http:\/\/www.graybeardgames.com\/download\/diablo_pitch.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16685795"
    },
    {
        "title": "Senator requests better https compliance at US Department of Defense [pdf]",
        "score": 216,
        "link": "https:\/\/www.wyden.senate.gov\/imo\/media\/doc\/wyden-web-encryption-letter-to-dod-cio.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17129093"
    },
    {
        "title": "Berkshire Hathaway 2017 Annual Letter [pdf]",
        "score": 216,
        "link": "http:\/\/www.berkshirehathaway.com\/letters\/2017ltr.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16453150"
    },
    {
        "title": "How to Be a Programmer: A Short, Comprehensive, and Personal Summary (2002) [pdf]",
        "score": 215,
        "link": "https:\/\/www.doc.ic.ac.uk\/~susan\/475\/HowToBeAProgrammer.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18742199"
    },
    {
        "title": "It Takes Two Neurons to Ride a Bicycle (2004)",
        "score": 212,
        "link": "http:\/\/paradise.caltech.edu\/~cook\/papers\/TwoNeurons.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16215130"
    },
    {
        "title": "United States v. Microsoft Corp. Dismissed [pdf]",
        "score": 207,
        "link": "https:\/\/www.supremecourt.gov\/opinions\/17pdf\/17-2_1824.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16858597"
    },
    {
        "title": "StarCraft: Remastered \u2013 Emulating a buffer overflow for fun and profit [pdf]",
        "score": 205,
        "link": "http:\/\/0xeb.net\/wp-content\/uploads\/2018\/02\/StarCraft_EUD_Emulator.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16305769"
    },
    {
        "title": "How to find hidden cameras (2002) [pdf]",
        "score": 203,
        "link": "http:\/\/www.tentacle.franken.de\/papers\/hiddencams.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16381592"
    },
    {
        "title": "The Evolution of C Programming Practices: A Study of Unix (2016) [pdf]",
        "score": 203,
        "link": "https:\/\/www2.dmst.aueb.gr\/dds\/pubs\/conf\/2016-ICSE-ProgEvol\/html\/SLK16.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17046332"
    },
    {
        "title": "Blockchains from a Distributed Computing Perspective [pdf]",
        "score": 202,
        "link": "http:\/\/cs.brown.edu\/courses\/csci2952-a\/papers\/perspective.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16191506"
    },
    {
        "title": "How to Architect a Query Compiler, Revisited [pdf]",
        "score": 201,
        "link": "https:\/\/www.cs.purdue.edu\/homes\/rompf\/papers\/tahboub-sigmod18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17851941"
    },
    {
        "title": "Foundations of Data Science [pdf]",
        "score": 198,
        "link": "http:\/\/www.cs.cornell.edu\/jeh\/book.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17131941"
    },
    {
        "title": "A Wandering Mind Is an Unhappy Mind (2010) [pdf]",
        "score": 197,
        "link": "https:\/\/greatergood.berkeley.edu\/images\/application_uploads\/KILLINGSWORTH-WanderingMind.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16797947"
    },
    {
        "title": "Comparing Languages for Engineering Server Software: Erlang, Go, and Scala\/Akka [pdf]",
        "score": 194,
        "link": "http:\/\/www.dcs.gla.ac.uk\/~trinder\/papers\/sac-18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17342276"
    },
    {
        "title": "Bumper Sticker Computer Science (1985) [pdf]",
        "score": 193,
        "link": "http:\/\/www.bowdoin.edu\/~ltoma\/teaching\/cs340\/spring05\/coursestuff\/Bentley_BumperSticker.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17794507"
    },
    {
        "title": "Facebook Q1 2018 Earnings Slides [pdf]",
        "score": 191,
        "link": "https:\/\/investor.fb.com\/files\/doc_financials\/2018\/Q1\/Q1-2018-Earnings-Presentation-(1).pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16925671"
    },
    {
        "title": "Introduction to OS Abstractions Using Plan 9 from Bell Labs (2007) [pdf]",
        "score": 191,
        "link": "https:\/\/lsub.org\/who\/nemo\/9.intro.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16253193"
    },
    {
        "title": "Microsoft Word for Windows 1.0 Postmortem (1989) [pdf]",
        "score": 190,
        "link": "http:\/\/antitrust.slated.org\/www.iowaconsumercase.org\/011607\/8000\/PX08875.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18764790"
    },
    {
        "title": "Architecture of a Database System (2007) [pdf]",
        "score": 189,
        "link": "http:\/\/db.cs.berkeley.edu\/papers\/fntdb07-architecture.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17190947"
    },
    {
        "title": "Money creation in the modern economy (2014) [pdf]",
        "score": 189,
        "link": "https:\/\/www.bankofengland.co.uk\/-\/media\/boe\/files\/quarterly-bulletin\/2014\/money-creation-in-the-modern-economy.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16604251"
    },
    {
        "title": "Exploiting modern microarchitectures: Meltdown, Spectre, and other attacks [pdf]",
        "score": 189,
        "link": "http:\/\/people.redhat.com\/jcm\/talks\/FOSDEM_2018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16304460"
    },
    {
        "title": "Bayes\u2019 Theorem in the 21st Century (2013) [pdf]",
        "score": 185,
        "link": "http:\/\/web.ipac.caltech.edu\/staff\/fmasci\/home\/astro_refs\/Science-2013-Efron.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18213117"
    },
    {
        "title": "How to scale a distributed system [pdf]",
        "score": 184,
        "link": "https:\/\/cdn.oreillystatic.com\/en\/assets\/1\/event\/244\/How%20to%20scale%20a%20distributed%20system%20Presentation.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17529780"
    },
    {
        "title": "How to write Mathematics (1970) [pdf]",
        "score": 182,
        "link": "http:\/\/www.math.utah.edu\/~pa\/3000\/halmos.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16829440"
    },
    {
        "title": "How Rust Is Tilde\u2019s Competitive Advantage [pdf]",
        "score": 177,
        "link": "https:\/\/www.rust-lang.org\/pdfs\/Rust-Tilde-Whitepaper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16317722"
    },
    {
        "title": "Rendered Insecure: GPU Side Channel Attacks Are Practical [pdf]",
        "score": 174,
        "link": "http:\/\/www.cs.ucr.edu\/~zhiyunq\/pub\/ccs18_gpu_side_channel.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18449672"
    },
    {
        "title": "The Rate of Return on Everything, 1870\u20132015 [pdf]",
        "score": 168,
        "link": "https:\/\/www.frbsf.org\/economic-research\/files\/wp2017-25.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16078059"
    },
    {
        "title": "Speech and Language Processing, 3rd Edition [pdf]",
        "score": 167,
        "link": "https:\/\/web.stanford.edu\/~jurafsky\/slp3\/ed3book.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16104868"
    },
    {
        "title": "MtGox: Announcement of Commencement of Civil Rehabilitation Proceedings [pdf]",
        "score": 167,
        "link": "https:\/\/www.mtgox.com\/img\/pdf\/20180622_announcement_en.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17373857"
    },
    {
        "title": "Towards a Type System for Containers and AWS Lambda to Avoid Failures [pdf]",
        "score": 167,
        "link": "http:\/\/christophermeiklejohn.com\/publications\/hotedge-2018-containers-preprint.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16746315"
    },
    {
        "title": "Alphabet Announces Second Quarter 2018 Results [pdf]",
        "score": 166,
        "link": "https:\/\/abc.xyz\/investor\/pdf\/2018Q2_alphabet_earnings_release.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17595510"
    },
    {
        "title": "Evolution of Emacs Lisp [pdf]",
        "score": 165,
        "link": "https:\/\/www.iro.umontreal.ca\/~monnier\/hopl-4-emacs-lisp.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18267285"
    },
    {
        "title": "Kademlia: A Peer-To-peer Information System Based on the XOR Metric (2002) [pdf]",
        "score": 165,
        "link": "https:\/\/pdos.csail.mit.edu\/~petar\/papers\/maymounkov-kademlia-lncs.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18711980"
    },
    {
        "title": "Deep image reconstruction from human brain activity [pdf]",
        "score": 165,
        "link": "https:\/\/www.biorxiv.org\/content\/biorxiv\/early\/2017\/12\/30\/240317.full.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16140054"
    },
    {
        "title": "A Lisp Way to Type Theory and Formal Proofs (2017) [pdf]",
        "score": 164,
        "link": "https:\/\/www.european-lisp-symposium.org\/static\/2017\/peschanski.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18383654"
    },
    {
        "title": "Computer Science I [pdf]",
        "score": 163,
        "link": "http:\/\/cse.unl.edu\/~cbourke\/ComputerScienceOne.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16053015"
    },
    {
        "title": "IEEE Position Statement in Support of Strong Encryption [pdf]",
        "score": 162,
        "link": "http:\/\/globalpolicy.ieee.org\/wp-content\/uploads\/2018\/06\/IEEE18006.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17408494"
    },
    {
        "title": "The Economic Limits of Bitcoin and the Blockchain [pdf]",
        "score": 161,
        "link": "http:\/\/faculty.chicagobooth.edu\/eric.budish\/research\/Economic-Limits-Bitcoin-Blockchain.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17394262"
    },
    {
        "title": "Show HN: Software Architecture, all you need to know [pdf]",
        "score": 161,
        "link": "https:\/\/share.composieux.fr\/white-book-software-architecture.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18761609"
    },
    {
        "title": "Math from Three to Seven: The Story of a Mathematical Circle for Preschoolers [pdf]",
        "score": 161,
        "link": "http:\/\/www.msri.org\/people\/staff\/levy\/files\/MCL\/Zvonkin.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17018583"
    },
    {
        "title": "Breakout implemented in JavaScript in a PDF",
        "score": 160,
        "link": "https:\/\/rawgit.com\/osnr\/horrifying-pdf-experiments\/master\/breakout.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17915296"
    },
    {
        "title": "The Mathematics of Quantum Mechanics [pdf]",
        "score": 160,
        "link": "https:\/\/uwaterloo.ca\/institute-for-quantum-computing\/sites\/ca.institute-for-quantum-computing\/files\/uploads\/files\/mathematics_qm_v21.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18046343"
    },
    {
        "title": "Going IPv6 Only [pdf]",
        "score": 158,
        "link": "https:\/\/pc.nanog.org\/static\/published\/meetings\/NANOG73\/1645\/20180625_Lagerholm_T-Mobile_S_Journey_To_v1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17399884"
    },
    {
        "title": "The Basic Ideas in Neural Networks (1994) [pdf]",
        "score": 155,
        "link": "http:\/\/www-isl.stanford.edu\/~widrow\/papers\/j1994thebasic.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16112464"
    },
    {
        "title": "NIST: Blockchain Technology Overview [pdf]",
        "score": 154,
        "link": "https:\/\/nvlpubs.nist.gov\/nistpubs\/ir\/2018\/NIST.IR.8202.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18157363"
    },
    {
        "title": "Do you need a blockchain?",
        "score": 153,
        "link": "https:\/\/eprint.iacr.org\/2017\/375.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16315456"
    },
    {
        "title": "Writing Network Drivers in Go [pdf]",
        "score": 152,
        "link": "https:\/\/www.net.in.tum.de\/fileadmin\/bibtex\/publications\/theses\/2018-ixy-go.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18399389"
    },
    {
        "title": "Introduction to Functional Programming (1988) [pdf]",
        "score": 150,
        "link": "http:\/\/usi-pl.github.io\/lc\/sp-2015\/doc\/Bird_Wadler.%20Introduction%20to%20Functional%20Programming.1ed.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16471372"
    },
    {
        "title": "DeepLog: Anomaly Detection and Diagnosis from System Logs (2017) [pdf]",
        "score": 149,
        "link": "https:\/\/acmccs.github.io\/papers\/p1285-duA.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17506265"
    },
    {
        "title": "Firefox: The Effect of Ad Blocking on User Engagement with the Web [pdf]",
        "score": 149,
        "link": "https:\/\/research.mozilla.org\/files\/2018\/04\/The-Effect-of-Ad-Blocking-on-User-Engagement-with-the-Web.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18105375"
    },
    {
        "title": "Setting Up a Cayman Islands Company [pdf]",
        "score": 147,
        "link": "https:\/\/www.stuartslaw.com\/cms\/document\/Setting_up_a_Cayman_Islands_Company.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16807765"
    },
    {
        "title": "The Jury Is In: Monolithic OS Design Is Flawed [pdf]",
        "score": 147,
        "link": "http:\/\/ts.data61.csiro.au\/publications\/csiro_full_text\/Biggs_LH_18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17767060"
    },
    {
        "title": "Modern Code Review: A Case Study at Google [pdf]",
        "score": 146,
        "link": "https:\/\/sback.it\/publications\/icse2018seip.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18035548"
    },
    {
        "title": "Analysis of USB fan given to journalists at North Korea-Singapore Summit [pdf]",
        "score": 145,
        "link": "http:\/\/www.cl.cam.ac.uk\/~sps32\/usb_fan_report.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17459041"
    },
    {
        "title": "Email exchange between MIT Media Lab and the IOTA Foundation [pdf]",
        "score": 144,
        "link": "http:\/\/www.tangleblog.com\/wp-content\/uploads\/2018\/02\/letters.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16457120"
    },
    {
        "title": "Linear logic and deep learning [pdf]",
        "score": 142,
        "link": "http:\/\/therisingsea.org\/notes\/talk-lldl-transcript.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16255612"
    },
    {
        "title": "Reviving Smalltalk-78 (2014) [pdf]",
        "score": 142,
        "link": "http:\/\/freudenbergs.de\/bert\/publications\/Ingalls-2014-Smalltalk78.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17055960"
    },
    {
        "title": "Bandit Algorithms Book [pdf]",
        "score": 141,
        "link": "http:\/\/downloads.tor-lattimore.com\/banditbook\/book.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17642564"
    },
    {
        "title": "Why Philosophers Should Care About Computational Complexity (2011) [pdf]",
        "score": 140,
        "link": "https:\/\/www.scottaaronson.com\/papers\/philos.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17573142"
    },
    {
        "title": "Log(Graph): A Near-Optimal High-Performance Graph Representation (2018) [pdf]",
        "score": 140,
        "link": "https:\/\/people.csail.mit.edu\/jshun\/papers\/loggraph.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18081978"
    },
    {
        "title": "Seven Pillars of Causal Reasoning with Reflections on Machine Learning [pdf]",
        "score": 140,
        "link": "http:\/\/ftp.cs.ucla.edu\/pub\/stat_ser\/r481.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17187306"
    },
    {
        "title": "The physics of baking good pizza [pdf]",
        "score": 140,
        "link": "https:\/\/arxiv.org\/ftp\/arxiv\/papers\/1806\/1806.08790.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17437229"
    },
    {
        "title": "Get Billions of Correct Digits of Pi from a Wrong Formula (1999) [pdf]",
        "score": 140,
        "link": "https:\/\/academics.rowan.edu\/csm\/departments\/math\/facultystaff\/faculty\/osler\/Billions_pi_digits.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18040630"
    },
    {
        "title": "Advanced Data Analysis from an Elementary Point of View (2017) [pdf]",
        "score": 139,
        "link": "http:\/\/www.stat.cmu.edu\/~cshalizi\/ADAfaEPoV\/ADAfaEPoV.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16410936"
    },
    {
        "title": "Freenet: A Distributed Anonymous Information Storage and Retrieval System (2000) [pdf]",
        "score": 138,
        "link": "http:\/\/snap.stanford.edu\/class\/cs224w-readings\/clarke00freenet.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18709383"
    },
    {
        "title": "The Simple Essence of Automatic Differentiation [pdf]",
        "score": 137,
        "link": "http:\/\/conal.net\/papers\/essence-of-ad\/essence-of-ad-icfp.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18306860"
    },
    {
        "title": "Programming Paradigms and Beyond [pdf]",
        "score": 137,
        "link": "http:\/\/cs.brown.edu\/~sk\/Publications\/Papers\/Published\/kf-prog-paradigms-and-beyond\/paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17382365"
    },
    {
        "title": "Alphabet Q1 2018 Earnings [pdf]",
        "score": 135,
        "link": "https:\/\/abc.xyz\/investor\/pdf\/2018Q1_alphabet_earnings_release.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16907007"
    },
    {
        "title": "State of Multicore OCaml [pdf]",
        "score": 135,
        "link": "http:\/\/kcsrk.info\/slides\/mcocaml_gallium.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17416797"
    },
    {
        "title": "The Meta-Problem of Consciousness [pdf]",
        "score": 131,
        "link": "https:\/\/philpapers.org\/archive\/CHATMO-32.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16360199"
    },
    {
        "title": "What do Stanford CS PhD students think of their PhD program? [pdf]",
        "score": 130,
        "link": "https:\/\/archive.org\/download\/phd_student_survey_summary_report_0a5c\/phd_student_survey_summary_report_0a5c.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17493963"
    },
    {
        "title": "The weird and wonderful world of constructive mathematics (2017) [pdf]",
        "score": 130,
        "link": "https:\/\/home.sandiego.edu\/~shulman\/papers\/rabbithole.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18411935"
    },
    {
        "title": "Low-Latency Video Processing Using Thousands of Tiny Threads [pdf]",
        "score": 130,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/nsdi17\/nsdi17-fouladi.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16197253"
    },
    {
        "title": "Self-encrypting deception: weaknesses in the encryption of solid state drives [pdf]",
        "score": 129,
        "link": "https:\/\/www.ru.nl\/publish\/pages\/909275\/draft-paper_1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18382975"
    },
    {
        "title": "C++ Core Coroutines Proposal [pdf]",
        "score": 128,
        "link": "http:\/\/www.open-std.org\/jtc1\/sc22\/wg21\/docs\/papers\/2018\/p1063r0.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18036748"
    },
    {
        "title": "Power Laws and Rich-Get-Richer Phenomena (2010) [pdf]",
        "score": 127,
        "link": "http:\/\/www.cs.cornell.edu\/home\/kleinber\/networks-book\/networks-book-ch18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17199766"
    },
    {
        "title": "A Taste of Linear Logic (1993) [pdf]",
        "score": 126,
        "link": "https:\/\/homepages.inf.ed.ac.uk\/wadler\/papers\/lineartaste\/lineartaste-revised.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17641476"
    },
    {
        "title": "An Analysis of the Impact of Arbitrary Blockchain Content on Bitcoin [pdf]",
        "score": 125,
        "link": "https:\/\/fc18.ifca.ai\/preproceedings\/6.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16617136"
    },
    {
        "title": "PolarFS: Alibaba Distributed File System for Shared Storage Cloud Database [pdf]",
        "score": 122,
        "link": "http:\/\/www.vldb.org\/pvldb\/vol11\/p1849-cao.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17814185"
    },
    {
        "title": "Notation as a Tool of Thought (1979) [pdf]",
        "score": 121,
        "link": "http:\/\/www.eecg.toronto.edu\/~jzhu\/csc326\/readings\/iverson.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16842378"
    },
    {
        "title": "Mindfulness Meditation Impairs Task Motivation but Not Performance [pdf]",
        "score": 120,
        "link": "https:\/\/sci-hub.tw\/downloads\/2310\/10.1016@j.obhdp.2018.05.001.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17342639"
    },
    {
        "title": "Fallacies of Distributed Computing Explained (2006) [pdf]",
        "score": 119,
        "link": "http:\/\/www.rgoarchitects.com\/Files\/fallacies.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17505927"
    },
    {
        "title": "Fuzzing the OpenBSD Kernel [pdf]",
        "score": 119,
        "link": "https:\/\/www.openbsd.org\/papers\/fuzz-slides.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17929234"
    },
    {
        "title": "The conceptual origins of Maxwell's equations and gauge theory (2014) [pdf]",
        "score": 117,
        "link": "http:\/\/www.physics.umd.edu\/grt\/taj\/675e\/OriginsofMaxwellandGauge.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16325605"
    },
    {
        "title": "The Birth of Prolog (1992) [pdf]",
        "score": 117,
        "link": "https:\/\/web.stanford.edu\/class\/linguist289\/p37-colmerauer.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18178215"
    },
    {
        "title": "Is IPv6 only for the Rich? [pdf]",
        "score": 116,
        "link": "https:\/\/ripe76.ripe.net\/presentations\/9-2018-05-17-ipv6-reasons.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17060437"
    },
    {
        "title": "One parameter is always enough [pdf]",
        "score": 116,
        "link": "http:\/\/colala.bcs.rochester.edu\/papers\/piantadosi2018one.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17161032"
    },
    {
        "title": "A Plan 9 C compiler for RISC-V [pdf]",
        "score": 115,
        "link": "https:\/\/www.geeklan.co.uk\/files\/oshug69-Miller-criscv.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18308255"
    },
    {
        "title": "Security Analysis of WireGuard [pdf]",
        "score": 115,
        "link": "https:\/\/courses.csail.mit.edu\/6.857\/2018\/project\/He-Xu-Xu-WireGuard.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17883269"
    },
    {
        "title": "Automatic Differentiation in Machine Learning: A Survey [pdf]",
        "score": 114,
        "link": "http:\/\/jmlr.org\/papers\/volume18\/17-468\/17-468.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18491208"
    },
    {
        "title": "Pledge and Unveil in OpenBSD [pdf]",
        "score": 114,
        "link": "https:\/\/www.openbsd.org\/papers\/BeckPledgeUnveilBSDCan2018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17277067"
    },
    {
        "title": "Using Prediction Markets to Track Information Flows:  Evidence from Google [pdf]",
        "score": 113,
        "link": "https:\/\/www.stat.berkeley.edu\/users\/aldous\/157\/Papers\/GooglePredictionMarketPaper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17015055"
    },
    {
        "title": "There\u2019s a Hole in the Bottom of the C: Effectiveness of Allocation Protection [pdf]",
        "score": 113,
        "link": "http:\/\/web.mit.edu\/ha22286\/www\/papers\/SecDev18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18442578"
    },
    {
        "title": "NetSpectre: Read Arbitrary Memory Over Network [pdf]",
        "score": 112,
        "link": "https:\/\/misc0110.net\/web\/files\/netspectre.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17621823"
    },
    {
        "title": "The Byzantine Generals Problem (1982) [pdf]",
        "score": 112,
        "link": "https:\/\/lamport.azurewebsites.net\/pubs\/byz.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17702640"
    },
    {
        "title": "A plea for lean software (1995) [pdf]",
        "score": 111,
        "link": "https:\/\/cr.yp.to\/bib\/1995\/wirth.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17872400"
    },
    {
        "title": "Abstract of the NTSB Report on Air Canada flight 759's taxiway overflight at SFO [pdf]",
        "score": 111,
        "link": "https:\/\/ntsb.gov\/news\/events\/Documents\/DCA17IA148-Abstract.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18071966"
    },
    {
        "title": "Motorola M68000 Family Programmer\u2019s Reference Manual (1992) [pdf]",
        "score": 110,
        "link": "http:\/\/cache.nxp.com\/docs\/en\/reference-manual\/M68000PM.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17076962"
    },
    {
        "title": "Dissecting QNX [pdf]",
        "score": 110,
        "link": "https:\/\/www.blackhat.com\/docs\/asia-18\/asia-18-Wetzels_Abassi_dissecting_qnx__WP.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18013158"
    },
    {
        "title": "The Foundations of Mathematics (2007) [pdf]",
        "score": 109,
        "link": "https:\/\/www.math.wisc.edu\/~miller\/old\/m771-10\/kunen770.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16078514"
    },
    {
        "title": "Oberon System Implemented on a Low-Cost FPGA Board (2015) [pdf]",
        "score": 109,
        "link": "https:\/\/pdfs.semanticscholar.org\/2c11\/7c1456eb96bbea19aa3c8b018de4fc9387bc.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17933881"
    },
    {
        "title": "Why Minimal Guidance During Instruction Does Not Work (2006) [pdf]",
        "score": 109,
        "link": "http:\/\/www.cogtech.usc.edu\/publications\/kirschner_Sweller_Clark.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18217245"
    },
    {
        "title": "Efficient Methods and Hardware for Deep Learning [pdf]",
        "score": 109,
        "link": "http:\/\/cs231n.stanford.edu\/slides\/2017\/cs231n_2017_lecture15.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17617870"
    },
    {
        "title": "Google\u2019s secret and Linear Algebra (2004) [pdf]",
        "score": 107,
        "link": "http:\/\/verso.mat.uam.es\/~pablo.fernandez\/ems63-pablo-fernandez_final.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18298608"
    },
    {
        "title": "The Art of Approximation in Science and Engineering [pdf]",
        "score": 106,
        "link": "http:\/\/web.mit.edu\/6.055\/book\/book-draft.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18099596"
    },
    {
        "title": "Towards an optical FPGA \u2013 Programmable silicon photonic circuits [pdf]",
        "score": 106,
        "link": "https:\/\/arxiv.org\/ftp\/arxiv\/papers\/1807\/1807.01656.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17488838"
    },
    {
        "title": "Pythran: Crossing the Python Frontier [pdf]",
        "score": 105,
        "link": "https:\/\/www.computer.org\/csdl\/mags\/cs\/2018\/02\/mcs2018020083.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16910446"
    },
    {
        "title": "What's hidden in the hidden layers? (1989) [pdf]",
        "score": 105,
        "link": "https:\/\/www.cs.cmu.edu\/~dst\/pubs\/byte-hiddenlayer-1989.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16048710"
    },
    {
        "title": "The Haskell School of Music \u2013 From Signals to Symphonies (2014) [pdf]",
        "score": 105,
        "link": "http:\/\/haskell.cs.yale.edu\/wp-content\/uploads\/2015\/03\/HSoM.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17517285"
    },
    {
        "title": "Giftedness and Genius: Crucial Differences (1996) [pdf]",
        "score": 105,
        "link": "https:\/\/www.gwern.net\/docs\/iq\/1996-jensen.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16350293"
    },
    {
        "title": "Sketchpad: A man-machine graphical communication system (1963) [pdf]",
        "score": 104,
        "link": "https:\/\/www.cl.cam.ac.uk\/techreports\/UCAM-CL-TR-574.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17354764"
    },
    {
        "title": "The Future of Computing: Logic or Biology (2003) [pdf]",
        "score": 104,
        "link": "https:\/\/lamport.azurewebsites.net\/pubs\/future-of-computing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17457213"
    },
    {
        "title": "Predicting Price Changes in Ethereum (2017) [pdf]",
        "score": 104,
        "link": "http:\/\/cs229.stanford.edu\/proj2017\/final-reports\/5244039.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17272328"
    },
    {
        "title": "An Introduction to Mathematical Optimal Control Theory [pdf]",
        "score": 103,
        "link": "https:\/\/math.berkeley.edu\/~evans\/control.course.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17585777"
    },
    {
        "title": "Mindstorms: Children, Computers, and Powerful Ideas (1980) [pdf]",
        "score": 103,
        "link": "http:\/\/worrydream.com\/refs\/Papert%20-%20Mindstorms%201st%20ed.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18361665"
    },
    {
        "title": "Functional Bits: Lambda-calculus based algorithmic information theory [pdf]",
        "score": 103,
        "link": "https:\/\/tromp.github.io\/cl\/LC.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17726545"
    },
    {
        "title": "The Effects of Computer Use on Eye Health and Vision (1997) [pdf]",
        "score": 102,
        "link": "https:\/\/www.aoa.org\/Documents\/optometrists\/effects-of-computer-use.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16146106"
    },
    {
        "title": "Actor Model of Computation (2010) [pdf]",
        "score": 102,
        "link": "https:\/\/arxiv.org\/vc\/arxiv\/papers\/1008\/1008.1459v8.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17667323"
    },
    {
        "title": "Exploiting URL Parser in Programming Languages (2017) [pdf]",
        "score": 102,
        "link": "https:\/\/www.blackhat.com\/docs\/us-17\/thursday\/us-17-Tsai-A-New-Era-Of-SSRF-Exploiting-URL-Parser-In-Trending-Programming-Languages.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17955626"
    },
    {
        "title": "Border Search of Electronic Devices \u2013 CBP Directive [pdf]",
        "score": 101,
        "link": "https:\/\/www.cbp.gov\/sites\/default\/files\/assets\/documents\/2018-Jan\/cbp-directive-3340-049a-border-search-electronic-media.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16084820"
    },
    {
        "title": "Physics as a Way of Thinking (1936) [pdf]",
        "score": 101,
        "link": "https:\/\/kb.osu.edu\/dspace\/bitstream\/handle\/1811\/72567\/OSLJ_V2N3_0241.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17396205"
    },
    {
        "title": "Web Prolog and the Programmable Prolog Web [pdf]",
        "score": 100,
        "link": "https:\/\/github.com\/Web-Prolog\/swi-web-prolog\/blob\/master\/web-client\/apps\/swish\/web-prolog.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17288493"
    },
    {
        "title": "Fifty Years of Shannon Theory (1998) [pdf]",
        "score": 100,
        "link": "https:\/\/www.princeton.edu\/~verdu\/reprints\/IT44.6.2057-2078.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16130297"
    },
    {
        "title": "Unskilled and Unaware of It (1999) [pdf]",
        "score": 99,
        "link": "http:\/\/psych.colorado.edu\/~vanboven\/teaching\/p7536_heurbias\/p7536_readings\/kruger_dunning.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16125060"
    },
    {
        "title": "Non-Recursive Make Considered Harmful: Build Systems at Scale (2016) [pdf]",
        "score": 99,
        "link": "https:\/\/ndmitchell.com\/downloads\/paper-non_recursive_make_considered_harmful-22_sep_2016.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17088328"
    },
    {
        "title": "Debugging across pipes and sockets with strace [pdf]",
        "score": 98,
        "link": "https:\/\/github.com\/nh2\/strace-pipes-presentation\/blob\/master\/presentation\/Debugging%20across%20pipes%20and%20sockets%20with%20strace.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16708392"
    },
    {
        "title": "A History of the Erlang VM (2011) [pdf]",
        "score": 97,
        "link": "http:\/\/www.erlang-factory.com\/upload\/presentations\/389\/EFSF11-ErlangVM.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16214996"
    },
    {
        "title": "How to do with probabilities what people say you can\u2019t (1985) [pdf]",
        "score": 97,
        "link": "https:\/\/ftp.cs.ucla.edu\/pub\/stat_ser\/r49.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18663223"
    },
    {
        "title": "Police Use of Force: An Examination of Modern Policing Practices [pdf]",
        "score": 97,
        "link": "https:\/\/www.usccr.gov\/pubs\/2018\/11-15-Police-Force.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18546038"
    },
    {
        "title": "Single-decryption EM-based attack reveals private keys from Android phones [pdf]",
        "score": 97,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/usenixsecurity18\/sec18-alam.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17817966"
    },
    {
        "title": "Efficient Hot-Water Piping (2013) [pdf]",
        "score": 95,
        "link": "http:\/\/www.garykleinassociates.com\/PDFs\/15%20-%20Efficient%20Hot-Water%20Piping-JLC.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16540802"
    },
    {
        "title": "Scientists warn of potential serious health effects of 5G (2017) [pdf]",
        "score": 95,
        "link": "https:\/\/ehtrust.org\/wp-content\/uploads\/Scientist-5G-appeal-2017.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17967372"
    },
    {
        "title": "A micro manual for Lisp \u2013 Not the whole truth (1978) [pdf]",
        "score": 95,
        "link": "http:\/\/www.ee.ryerson.ca\/~elf\/pub\/misc\/micromanualLISP.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17958413"
    },
    {
        "title": "Everything You Wanted to Know About Synchronization (2013) [pdf]",
        "score": 95,
        "link": "http:\/\/sigops.org\/sosp\/sosp13\/papers\/p33-david.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16859719"
    },
    {
        "title": "The Strong Free Will Theorem (2009) [pdf]",
        "score": 94,
        "link": "http:\/\/www.ams.org\/notices\/200902\/rtx090200226p.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18392040"
    },
    {
        "title": "The art of Virtual Analog filter design [pdf]",
        "score": 93,
        "link": "https:\/\/www.native-instruments.com\/fileadmin\/ni_media\/downloads\/pdf\/VAFilterDesign_2.1.0.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18346463"
    },
    {
        "title": "Human-Centric Tools for Navigating Code [pdf]",
        "score": 93,
        "link": "http:\/\/web.eecs.utk.edu\/~azh\/pubs\/Henley2018bDissertation.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18648580"
    },
    {
        "title": "Every Good Regulator of a System Must Be a Model of That System (1970) [pdf]",
        "score": 92,
        "link": "http:\/\/pespmc1.vub.ac.be\/books\/Conant_Ashby.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16545537"
    },
    {
        "title": "Case Studies Where Phase 2 and Phase 3 Trials had Divergent Results [pdf]",
        "score": 92,
        "link": "https:\/\/www.fda.gov\/downloads\/AboutFDA\/ReportsManualsForms\/Reports\/UCM535780.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17568712"
    },
    {
        "title": "802.11 with Multiple Antennas for Dummies (2009) [pdf]",
        "score": 92,
        "link": "https:\/\/djw.cs.washington.edu\/papers\/mimo_for_dummies.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17290302"
    },
    {
        "title": "Self-Regulated Learning: Beliefs, Techniques, and Illusions [pdf]",
        "score": 92,
        "link": "http:\/\/www.excaliburtsa.org.uk\/wp-content\/uploads\/2017\/11\/Self-regulated-learning-Bjork.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17462633"
    },
    {
        "title": "Scikit-learn user guide (2017) [pdf]",
        "score": 92,
        "link": "http:\/\/scikit-learn.org\/stable\/_downloads\/scikit-learn-docs.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17430673"
    },
    {
        "title": "$vau: the ultimate abstraction (2010) [pdf]",
        "score": 92,
        "link": "https:\/\/web.wpi.edu\/Pubs\/ETD\/Available\/etd-090110-124904\/unrestricted\/jshutt.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18405014"
    },
    {
        "title": "Design of a low-level C++ template SIMD library [pdf]",
        "score": 91,
        "link": "https:\/\/www.ti.uni-bielefeld.de\/downloads\/publications\/templateSIMD.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16050021"
    },
    {
        "title": "A Template for Understanding How the Economic Machine Works (2011) [pdf]",
        "score": 91,
        "link": "https:\/\/media.economist.com\/sites\/default\/files\/pdfs\/A_Template_for_Understanding_-_Ray_Dalio__Bridgewater.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17962136"
    },
    {
        "title": "Do Developers Understand IEEE Floating Point? [pdf]",
        "score": 91,
        "link": "http:\/\/pdinda.org\/Papers\/ipdps18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18761944"
    },
    {
        "title": "Collective hallucination and inefficient markets: The Railway Mania of the 1840s [pdf]",
        "score": 91,
        "link": "http:\/\/www.dtc.umn.edu\/~odlyzko\/doc\/hallucinations.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16145157"
    },
    {
        "title": "Newton\u2019s Financial Misadventures in the South Sea Bubble [pdf]",
        "score": 91,
        "link": "http:\/\/www.dtc.umn.edu\/~odlyzko\/doc\/mania13.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16245284"
    },
    {
        "title": "MeltdownPrime, SpectrePrime: Exploiting Invalidation-Based Coherence Protocols",
        "score": 90,
        "link": "https:\/\/arxiv.org\/pdf\/1802.03802.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16430215"
    },
    {
        "title": "JITing PostgreSQL using LLVM [pdf]",
        "score": 90,
        "link": "http:\/\/anarazel.de\/talks\/fosdem-2018-02-03\/jit.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16299632"
    },
    {
        "title": "The Evolution of Bitcoin Hardware [pdf]",
        "score": 89,
        "link": "http:\/\/cseweb.ucsd.edu\/~mbtaylor\/papers\/Taylor_Bitcoin_IEEE_Computer_2017.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16289074"
    },
    {
        "title": "Everything You Always Wanted to Know About Optical Networking [pdf]",
        "score": 89,
        "link": "https:\/\/www.nanog.org\/sites\/default\/files\/Steenbergen.Everything_You_Need.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18099304"
    },
    {
        "title": "Cross-Platform Language Design [pdf]",
        "score": 89,
        "link": "http:\/\/lampwww.epfl.ch\/~doeraene\/thesis\/doeraene-thesis-2018-cross-platform-language-design.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18640515"
    },
    {
        "title": "The Evolution of Operating Systems (2000) [pdf]",
        "score": 88,
        "link": "http:\/\/www.brinch-hansen.net\/papers\/2001b.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17581530"
    },
    {
        "title": "The Z Garbage Collector: An Introduction [pdf]",
        "score": 88,
        "link": "https:\/\/fosdem.org\/2018\/schedule\/event\/zgc\/attachments\/slides\/2211\/export\/events\/attachments\/zgc\/slides\/2211\/ZGC_FOSDEM_2018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16405852"
    },
    {
        "title": "Nagini: A Static Verifier for Python [pdf]",
        "score": 87,
        "link": "http:\/\/pm.inf.ethz.ch\/publications\/getpdf.php?bibname=Own&id=EilersMueller18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17535752"
    },
    {
        "title": "Mininet on OpenBSD: Interactive SDN Testing and Development [pdf]",
        "score": 86,
        "link": "https:\/\/www.openbsd.org\/papers\/bsdcan2018-mininet.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17301835"
    },
    {
        "title": "Design and Implementation of a 256-Core BrainFuck Computer [pdf]",
        "score": 86,
        "link": "http:\/\/sigtbd.csail.mit.edu\/pubs\/veryconference-paper2.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16866435"
    },
    {
        "title": "Logic is Metaphysics (2011) [pdf]",
        "score": 85,
        "link": "https:\/\/philpapers.org\/archive\/ALVLIM-3.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17246944"
    },
    {
        "title": "On the rheology of cats (2014) [pdf]",
        "score": 85,
        "link": "https:\/\/www.drgoulu.com\/wp-content\/uploads\/2017\/09\/Rheology-of-cats.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18540550"
    },
    {
        "title": "What you get is what you C: Controlling side effects in mainstream C compilers [pdf]",
        "score": 85,
        "link": "http:\/\/www.cl.cam.ac.uk\/~rja14\/Papers\/whatyouc.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16911185"
    },
    {
        "title": "TensorFlow: Machine Learning on Heterogeneous Distributed Systems (2015) [pdf]",
        "score": 85,
        "link": "https:\/\/static.googleusercontent.com\/media\/research.google.com\/en\/\/pubs\/archive\/45166.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17028631"
    },
    {
        "title": "LegoOS: Disseminated, Distributed OS for Hardware Resource Disaggregation [pdf]",
        "score": 85,
        "link": "https:\/\/www.usenix.org\/system\/files\/osdi18-shan.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18488292"
    },
    {
        "title": "The usefulness of useless knowledge (1939) [pdf]",
        "score": 84,
        "link": "https:\/\/library.ias.edu\/files\/UsefulnessHarpers.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18683298"
    },
    {
        "title": "An FPGA-based In-line Accelerator for Memcached (2013) [pdf]",
        "score": 84,
        "link": "https:\/\/www.hotchips.org\/wp-content\/uploads\/hc_archives\/hc25\/HC25.50-FPGA-epub\/HC25.27.530-Memcached-Lavasani-UTexas.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17175135"
    },
    {
        "title": "US Surgeon General Declares E-cigarette Epidemic Among Youth [pdf]",
        "score": 84,
        "link": "https:\/\/e-cigarettes.surgeongeneral.gov\/documents\/surgeon-generals-advisory-on-e-cigarette-use-among-youth-2018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18716016"
    },
    {
        "title": "Practical Examples in Data Oriented Design (2013) [pdf]",
        "score": 83,
        "link": "http:\/\/gamedevs.org\/uploads\/practical-examples-in-data-oriented-design.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16047380"
    },
    {
        "title": "An Introduction to Quantum Computation and Quantum Communication (2000) [pdf]",
        "score": 83,
        "link": "http:\/\/herpolhode.com\/rob\/qcintro.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18422415"
    },
    {
        "title": "FlureeDB, a Practical Decentralized Database (2017) [pdf]",
        "score": 82,
        "link": "https:\/\/flur.ee\/assets\/pdf\/flureedb_whitepaper_v1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17056315"
    },
    {
        "title": "Communicating Sequential Processes (1978) [pdf]",
        "score": 82,
        "link": "https:\/\/www.cs.cmu.edu\/~crary\/819-f09\/Hoare78.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18607031"
    },
    {
        "title": "Pallene: A statically typed companion language for Lua [pdf]",
        "score": 82,
        "link": "http:\/\/www.inf.puc-rio.br\/~roberto\/docs\/pallene-sblp.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18038619"
    },
    {
        "title": "PoC||GTFO-18 [pdf]",
        "score": 81,
        "link": "https:\/\/www.alchemistowl.org\/pocorgtfo\/pocorgtfo18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17413610"
    },
    {
        "title": "Loss of Locational Privacy While Traveling in Your Automobile (2013) [pdf]",
        "score": 81,
        "link": "https:\/\/www.defcon.org\/images\/defcon-21\/dc-21-presentations\/Pukingmonkey\/DEFCON-21-Pukingmonkey-The-Road-Less-Surreptitiously-Traveled-Updated.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16251396"
    },
    {
        "title": "A Formal Security Analysis of the Signal Messaging Protocol (2017) [pdf]",
        "score": 81,
        "link": "https:\/\/eprint.iacr.org\/2016\/1013.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17107149"
    },
    {
        "title": "Exploring C Semantics and Pointer Provenance [pdf]",
        "score": 81,
        "link": "https:\/\/www.cl.cam.ac.uk\/~pes20\/cerberus\/top-Cerberus-draft.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18328328"
    },
    {
        "title": "The Battle of the Schedulers: FreeBSD ULE vs. Linux CFS [pdf]",
        "score": 81,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/atc18\/atc18-bouron.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17508403"
    },
    {
        "title": "Optimal Time-Inconsistent Beliefs: Misplanning, Procrastination, and Commitment [pdf]",
        "score": 80,
        "link": "https:\/\/scholar.princeton.edu\/sites\/default\/files\/TimeInconsistentBeliefs_0.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18294159"
    },
    {
        "title": "Linear types can change the world (1990) [pdf]",
        "score": 80,
        "link": "http:\/\/www.cs.ioc.ee\/ewscs\/2010\/mycroft\/linear-2up.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16100840"
    },
    {
        "title": "Designing and building a distributed data store in Go [pdf]",
        "score": 80,
        "link": "https:\/\/fosdem.org\/2018\/schedule\/event\/datastore\/attachments\/slides\/2618\/export\/events\/attachments\/datastore\/slides\/2618\/designing_distributed_datastore_in_go_timbala.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17524879"
    },
    {
        "title": "How does a GPU shader core work? [pdf]",
        "score": 79,
        "link": "http:\/\/aras-p.info\/texts\/files\/2018Academy%20-%20GPU.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18504470"
    },
    {
        "title": "Outlier Detection Techniques (2010) [pdf]",
        "score": 79,
        "link": "https:\/\/archive.siam.org\/meetings\/sdm10\/tutorial3.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18410647"
    },
    {
        "title": "UnicodeMath \u2013 A Nearly Plain-Text Encoding of Mathematics (2016) [pdf]",
        "score": 79,
        "link": "https:\/\/www.unicode.org\/notes\/tn28\/UTN28-PlainTextMath-v3.1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18513897"
    },
    {
        "title": "Option Pricing with Fourier Transform and Exponential L\u00e9vy Models [pdf]",
        "score": 79,
        "link": "http:\/\/maxmatsuda.com\/Papers\/2004\/Matsuda%20Intro%20FT%20Pricing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18298775"
    },
    {
        "title": "The Quantum Theory and Reality (1979) [pdf]",
        "score": 79,
        "link": "https:\/\/www.scientificamerican.com\/media\/pdf\/197911_0158.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16254297"
    },
    {
        "title": "Zero overhead deterministic failure: A unified mechanism for C and C++ [pdf]",
        "score": 79,
        "link": "http:\/\/www.open-std.org\/jtc1\/sc22\/wg14\/www\/docs\/n2289.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17922715"
    },
    {
        "title": "Model-Free, Model-Based, and General Intelligence [pdf]",
        "score": 78,
        "link": "https:\/\/www.ijcai.org\/proceedings\/2018\/0002.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17591361"
    },
    {
        "title": "The Algorithmic Foundations of Differential Privacy (2014) [pdf]",
        "score": 78,
        "link": "https:\/\/www.cis.upenn.edu\/~aaroth\/Papers\/privacybook.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16671955"
    },
    {
        "title": "History of Lisp (1979) [pdf]",
        "score": 77,
        "link": "http:\/\/jmc.stanford.edu\/articles\/lisp\/lisp.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17846522"
    },
    {
        "title": "Threads Cannot Be Implemented as a Library (2005) [pdf]",
        "score": 77,
        "link": "https:\/\/cs.nyu.edu\/~mwalfish\/classes\/14fa\/ref\/boehm05threads.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18483717"
    },
    {
        "title": "How Developers Use Dynamic Features of Programming Languages: Smalltalk [pdf]",
        "score": 77,
        "link": "https:\/\/users.dcc.uchile.cl\/~rrobbes\/p\/EMSE-features.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17114406"
    },
    {
        "title": "Why Systolic Architectures? (1982) [pdf]",
        "score": 77,
        "link": "http:\/\/www.eecs.harvard.edu\/~htk\/publication\/1982-kung-why-systolic-architecture.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18620841"
    },
    {
        "title": "The Next 700 Programming Languages (1965) [pdf]",
        "score": 77,
        "link": "http:\/\/homepages.inf.ed.ac.uk\/wadler\/papers\/papers-we-love\/landin-next-700.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16090761"
    },
    {
        "title": "Opening the Hood of a Word Processor (1984) [pdf]",
        "score": 77,
        "link": "http:\/\/worrydream.com\/refs\/Kay%20-%20Opening%20the%20Hood%20of%20a%20Word%20Processor.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16352020"
    },
    {
        "title": "The Red Wedding Problem: Write Spikes at the Edge and a Mitigation Strategy [pdf]",
        "score": 76,
        "link": "http:\/\/christophermeiklejohn.com\/publications\/hotedge-2018-preprint.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16643959"
    },
    {
        "title": "Canopy: An End-to-End Performance Tracing And Analysis System [pdf]",
        "score": 76,
        "link": "https:\/\/cs.brown.edu\/~jcmace\/papers\/kaldor2017canopy.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16592303"
    },
    {
        "title": "Building Robust Systems (2008) [pdf]",
        "score": 76,
        "link": "https:\/\/groups.csail.mit.edu\/mac\/users\/gjs\/6.945\/readings\/robust-systems.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16890498"
    },
    {
        "title": "Software Updates for IoT Devices and the Hidden Costs of Homegrown Updaters [pdf]",
        "score": 75,
        "link": "https:\/\/mender.io\/resources\/guides-and-whitepapers\/_resources\/Mender%2520White%2520Paper%2520_%2520Hidden%2520Costs%2520of%2520Homegrown.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16181051"
    },
    {
        "title": "Fantastic Timers: High-Resolution Microarchitectural Attacks in JS (2017) [pdf]",
        "score": 75,
        "link": "https:\/\/gruss.cc\/files\/fantastictimers.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16080235"
    },
    {
        "title": "Comprehensive and biased comparison of OpenBSD and FreeBSD (2017) [pdf]",
        "score": 75,
        "link": "https:\/\/www.bsdfrog.org\/pub\/events\/my_bsd_sucks_less_than_yours-AsiaBSDCon2017-paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18667179"
    },
    {
        "title": "Design and Evaluation of FPGA-Based Gigabit Ethernet Network Card (2004) [pdf]",
        "score": 73,
        "link": "https:\/\/pdfs.semanticscholar.org\/8bfe\/8988c14703302ebd2d567924b27a5cb10c57.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17029454"
    },
    {
        "title": "An Empirical Study of Programmers\u2019 Acquisition of New Programming Languages [pdf]",
        "score": 73,
        "link": "http:\/\/cs242.stanford.edu\/assets\/projects\/2017\/parastoo-gdietz44.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17950588"
    },
    {
        "title": "Ghostbuster: Detecting the Presence of Hidden Eavesdroppers [pdf]",
        "score": 73,
        "link": "https:\/\/synrg.csl.illinois.edu\/papers\/ghostbuster-mobicom18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18082384"
    },
    {
        "title": "Low-Level Thinking in High-Level Shading Languages (2013) [pdf]",
        "score": 73,
        "link": "http:\/\/www.humus.name\/Articles\/Persson_LowLevelThinking.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16223651"
    },
    {
        "title": "William Stein on the struggle for open source funding in pure mathematics [pdf]",
        "score": 73,
        "link": "http:\/\/www.ams.org\/journals\/notices\/201805\/rnoti-p540.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16940726"
    },
    {
        "title": "Logic Programming and Compiler Writing (1980) [pdf]",
        "score": 72,
        "link": "http:\/\/sovietov.com\/tmp\/warren1980.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17674859"
    },
    {
        "title": "A survey of attacks against Intel x86 over last 10 years (2015) [pdf]",
        "score": 72,
        "link": "https:\/\/blog.invisiblethings.org\/papers\/2015\/x86_harmful.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17588822"
    },
    {
        "title": "Typed Clojure in Theory and Practice [pdf]",
        "score": 72,
        "link": "http:\/\/ambrosebs.com\/talks\/proposal.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17772922"
    },
    {
        "title": "How to Subvert Backdoored Encryption [pdf]",
        "score": 71,
        "link": "https:\/\/eprint.iacr.org\/2018\/212.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16763365"
    },
    {
        "title": "Who Are These Economists, Anyway? (2009) [pdf]",
        "score": 71,
        "link": "http:\/\/www.levyinstitute.org\/pubs\/Thought_Action.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17008291"
    },
    {
        "title": "Computing Higher Order Derivatives of Matrix and Tensor Expressions [pdf]",
        "score": 71,
        "link": "http:\/\/www.matrixcalculus.org\/matrixcalculus.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18464003"
    },
    {
        "title": "A Pedagogical Analysis of Online Coding Tutorials [pdf]",
        "score": 71,
        "link": "https:\/\/faculty.washington.edu\/ajko\/papers\/Kim2017CodingTutorialEvaluation.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16961716"
    },
    {
        "title": "Unix: Building a Development Environment from Scratch (2016) [pdf]",
        "score": 71,
        "link": "http:\/\/minnie.tuhs.org\/Y5\/wkt_hapop_paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16402165"
    },
    {
        "title": "Alchemy: A Language and Compiler for Homomorphic Encryption Made Easy [pdf]",
        "score": 71,
        "link": "http:\/\/web.eecs.umich.edu\/~cpeikert\/pubs\/alchemy.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18265948"
    },
    {
        "title": "Naked mole-rat mortality rates defy Gompertzian laws by not increasing with age [pdf]",
        "score": 70,
        "link": "https:\/\/www.ncbi.nlm.nih.gov\/pmc\/articles\/PMC5783610\/pdf\/elife-31157.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18109533"
    },
    {
        "title": "A First Course in Design and Analysis of Experiments (2010) [pdf]",
        "score": 70,
        "link": "http:\/\/users.stat.umn.edu\/~gary\/book\/fcdae.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18096685"
    },
    {
        "title": "Galois Field in Cryptography (2012) [pdf]",
        "score": 69,
        "link": "https:\/\/sites.math.washington.edu\/~morrow\/336_12\/papers\/juan.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16351068"
    },
    {
        "title": "USDZ File Format Specification [pdf]",
        "score": 69,
        "link": "https:\/\/graphics.pixar.com\/usd\/files\/USDZFileFormatSpecification.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17229971"
    },
    {
        "title": "Austerity and the rise of the Nazi party [pdf]",
        "score": 69,
        "link": "https:\/\/www.anderson.ucla.edu\/Documents\/areas\/fac\/gem\/nazi_austerity.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16558832"
    },
    {
        "title": "Sinking of the US Cargo Vessel El Faro: Illustrated digest [pdf]",
        "score": 68,
        "link": "https:\/\/www.ntsb.gov\/investigations\/AccidentReports\/Reports\/SPC1801.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17160396"
    },
    {
        "title": "This architecture tastes like microarchitecture [pdf]",
        "score": 68,
        "link": "http:\/\/wp3workshop.website\/pdfs\/WP3_dunham.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16560064"
    },
    {
        "title": "Parsing with Derivatives: A Functional Pearl (2011) [pdf]",
        "score": 68,
        "link": "http:\/\/matt.might.net\/papers\/might2011derivatives.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17391071"
    },
    {
        "title": "The Consistency of Arithmetic [pdf]",
        "score": 68,
        "link": "http:\/\/timothychow.net\/consistent.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18440115"
    },
    {
        "title": "The Potentiometer Handbook (1975) [pdf]",
        "score": 68,
        "link": "https:\/\/www.bourns.com\/docs\/technical-documents\/technical-library\/corporate\/OnlinePotentiometerHandbook.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18391076"
    },
    {
        "title": "A visual history of the future (2014) [pdf]",
        "score": 68,
        "link": "https:\/\/assets.publishing.service.gov.uk\/government\/uploads\/system\/uploads\/attachment_data\/file\/360814\/14-814-future-cities-visual-history.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17742726"
    },
    {
        "title": "The Computer for the 21st Cenury (1991) [pdf]",
        "score": 67,
        "link": "https:\/\/www.lri.fr\/~mbl\/Stanford\/CS477\/papers\/Weiser-SciAm.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17029179"
    },
    {
        "title": "High Performance Computing: Are We Just Getting Wrong Answers Faster? (1998) [pdf]",
        "score": 67,
        "link": "https:\/\/www3.nd.edu\/~markst\/cast-award-speech.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18049509"
    },
    {
        "title": "Notes on Landauer's principle, reversible computation, Maxwell's Demon (2003) [pdf]",
        "score": 67,
        "link": "https:\/\/www.cs.princeton.edu\/courses\/archive\/fall06\/cos576\/papers\/bennett03.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18267000"
    },
    {
        "title": "Leisure Luxuries and the Labor Supply of Young Men [pdf]",
        "score": 66,
        "link": "https:\/\/scholar.princeton.edu\/sites\/default\/files\/maguiar\/files\/leisure-luxuries-labor-june-2017.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16393903"
    },
    {
        "title": "How did software get so reliable without proof? (1996) [pdf]",
        "score": 65,
        "link": "http:\/\/www.gwern.net\/docs\/math\/1996-hoare.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18050706"
    },
    {
        "title": "Understanding Simpson\u2019s Paradox (2013) [pdf]",
        "score": 65,
        "link": "https:\/\/ftp.cs.ucla.edu\/pub\/stat_ser\/r414.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17728954"
    },
    {
        "title": "F1 Query: Declarative Querying at Google Scale [pdf]",
        "score": 65,
        "link": "http:\/\/www.vldb.org\/pvldb\/vol11\/p1835-samwel.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17719916"
    },
    {
        "title": "How to Print Floating-Point Numbers Accurately (1990) [pdf]",
        "score": 64,
        "link": "https:\/\/lists.nongnu.org\/archive\/html\/gcl-devel\/2012-10\/pdfkieTlklRzN.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17277560"
    },
    {
        "title": "Defeating Modern Secure Boot Using Second-Order Pulsed EM Fault Injection [pdf]",
        "score": 64,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/woot17\/woot17-paper-cui.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17895781"
    },
    {
        "title": "Foundations for Efficient and Expressive Differentiable Programming [pdf]",
        "score": 64,
        "link": "http:\/\/papers.nips.cc\/paper\/8221-backpropagation-with-callbacks-foundations-for-efficient-and-expressive-differentiable-programming.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18747767"
    },
    {
        "title": "APL\\3000 \u2013 HP Journal \u2013 July 1977 [pdf]",
        "score": 64,
        "link": "http:\/\/www.hpl.hp.com\/hpjournal\/pdfs\/IssuePDFs\/1977-07.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17506789"
    },
    {
        "title": "On Intelligence in Cells: The Case for Whole Cell Biology (2009) [pdf]",
        "score": 64,
        "link": "http:\/\/www.brianjford.com\/a-ISR_Ford.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17317323"
    },
    {
        "title": "GraalSqueak: A Fast Smalltalk Bytecode Interpreter [pdf]",
        "score": 64,
        "link": "https:\/\/fniephaus.com\/2018\/icooolps18-graalsqueak.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17470767"
    },
    {
        "title": "Towards Stealthy Manipulation of Road Navigation Systems [pdf]",
        "score": 64,
        "link": "https:\/\/people.cs.vt.edu\/gangwang\/sec18-gps.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17581755"
    },
    {
        "title": "Monoid machines: a O(log n) parser for regular languages (2006) [pdf]",
        "score": 64,
        "link": "http:\/\/www.dcc.fc.up.pt\/~acm\/semigr.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17512574"
    },
    {
        "title": "A Relational Model of Data for Large Shared Data Banks (1970) [pdf]",
        "score": 64,
        "link": "https:\/\/cs.uwaterloo.ca\/~david\/cs848s14\/codd-relational.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18088951"
    },
    {
        "title": "BleedingBit: The hidden attack surface within BLE chips [pdf]",
        "score": 64,
        "link": "https:\/\/go.armis.com\/hubfs\/BLEEDINGBIT%20-%20Technical%20White%20Paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18621070"
    },
    {
        "title": "2018 Deloitte Millennial Survey [pdf]",
        "score": 63,
        "link": "https:\/\/www2.deloitte.com\/content\/dam\/Deloitte\/global\/Documents\/About-Deloitte\/gx-2018-millennial-survey-report.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17631670"
    },
    {
        "title": "Adopting Lessons from Offline Ray-Tracing to Real-Time Ray-Tracing [pdf]",
        "score": 63,
        "link": "http:\/\/advances.realtimerendering.com\/s2018\/Pharr%20-%20Advances%20in%20RTR%20-%20Real-time%20Ray%20Tracing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18364825"
    },
    {
        "title": "Huygens: Scalable, Fine-grained Clock Synchronization [pdf]",
        "score": 63,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/nsdi18\/nsdi18-geng.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17428655"
    },
    {
        "title": "The Case for Shared Nothing (1986) [pdf]",
        "score": 63,
        "link": "http:\/\/db.cs.berkeley.edu\/papers\/hpts85-nothing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17391376"
    },
    {
        "title": "\u201cLittle Languages\u201d by Jon Bentley (1986) [pdf]",
        "score": 63,
        "link": "http:\/\/staff.um.edu.mt\/afra1\/seminar\/little-languages.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17881705"
    },
    {
        "title": "Optimizing Paxos with batching and pipelining (2012) [pdf]",
        "score": 63,
        "link": "https:\/\/pdfs.semanticscholar.org\/a0d0\/cdd2e8af1945c03cfaf2cb451f71f208d0c9.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16952649"
    },
    {
        "title": "The Structure of \u201cUnstructured\u201d Decision Processes (1976) [pdf]",
        "score": 63,
        "link": "http:\/\/media.corporate-ir.net\/media_files\/irol\/97\/97664\/reports\/Mintzberg.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16513405"
    },
    {
        "title": "Modeling Potential Income and Welfare \u2013 Benefits in Illinois (2014) [pdf]",
        "score": 62,
        "link": "https:\/\/d2dv7hze646xr.cloudfront.net\/wp-content\/uploads\/2014\/12\/Welfare_Report_finalfinal.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17484212"
    },
    {
        "title": "Building a Self-Healing Operating System (2007) [pdf]",
        "score": 62,
        "link": "http:\/\/choices.cs.illinois.edu\/selfhealing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17745990"
    },
    {
        "title": "Static Program Analysis [pdf]",
        "score": 62,
        "link": "https:\/\/cs.au.dk\/~amoeller\/spa\/spa.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17915563"
    },
    {
        "title": "Evidence for biological shaping of hair ice (2015) [pdf]",
        "score": 62,
        "link": "https:\/\/www.biogeosciences.net\/12\/4261\/2015\/bg-12-4261-2015.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17305994"
    },
    {
        "title": "Security Chasms of WASM [pdf]",
        "score": 62,
        "link": "https:\/\/i.blackhat.com\/us-18\/Thu-August-9\/us-18-Lukasiewicz-WebAssembly-A-New-World-of-Native_Exploits-On-The-Web-wp.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17834675"
    },
    {
        "title": "IRS: Review of the System Failure That Led to the Tax Day Outage [pdf]",
        "score": 62,
        "link": "https:\/\/www.treasury.gov\/tigta\/auditreports\/2018reports\/201820065fr.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18062405"
    },
    {
        "title": "The CONS microprocessor (1974) [pdf]",
        "score": 61,
        "link": "https:\/\/dspace.mit.edu\/bitstream\/handle\/1721.1\/41115\/AI_WP_080.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18531352"
    },
    {
        "title": "Setting, Elaborating, Reflecting on Goals Improves Academic Performance (2010) [pdf]",
        "score": 61,
        "link": "http:\/\/individual.utoronto.ca\/jacobhirsh\/publications\/GoalSettingJAP2010.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18206472"
    },
    {
        "title": "Live Coding in Sporth: A Stack-Based Language for Audio Synthesis [pdf]",
        "score": 61,
        "link": "https:\/\/iclc.livecodenetwork.org\/2017\/cameraReady\/sporth.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17118237"
    },
    {
        "title": "On the Detection of Kernel-Level Rootkits Using Hardware Performance Counters [pdf]",
        "score": 61,
        "link": "http:\/\/www.cs.binghamton.edu\/~devtyushkin\/asiaccs-2017.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17161886"
    },
    {
        "title": "The Socratic Method in an Age of Trauma (2017) [pdf]",
        "score": 61,
        "link": "https:\/\/harvardlawreview.org\/wp-content\/uploads\/2017\/10\/2320-2347_Online.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18050207"
    },
    {
        "title": "To Kill a Centrifuge (2013) [pdf]",
        "score": 60,
        "link": "https:\/\/www.langner.com\/wp-content\/uploads\/2017\/03\/to-kill-a-centrifuge.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17133329"
    },
    {
        "title": "Deep Learning: A Critical Appraisal [pdf]",
        "score": 60,
        "link": "https:\/\/arxiv.org\/ftp\/arxiv\/papers\/1801\/1801.00631.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16083469"
    },
    {
        "title": "Design case history: the Commodore 64 (1985) [pdf]",
        "score": 60,
        "link": "https:\/\/spectrum.ieee.org\/ns\/pdfs\/commodore64_mar1985.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17438106"
    },
    {
        "title": "Sulong: Finding Errors in C Programs [pdf]",
        "score": 60,
        "link": "http:\/\/ssw.jku.at\/General\/Staff\/ManuelRigger\/ASPLOS18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16536013"
    },
    {
        "title": "A Stall-Free Real-Time Garbage Collector for Reconfigurable Hardware (2012) [pdf]",
        "score": 60,
        "link": "https:\/\/researcher.watson.ibm.com\/researcher\/files\/us-bacon\/Bacon12AndThen.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16347624"
    },
    {
        "title": "Chipforge opensource foundry [pdf]",
        "score": 59,
        "link": "https:\/\/github.com\/leviathanch\/SITCON\/blob\/master\/ORConf-20180921.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18104362"
    },
    {
        "title": "Introduction to the Mumps Language (2017) [pdf]",
        "score": 59,
        "link": "https:\/\/www.cs.uni.edu\/~okane\/source\/MUMPS-MDH\/MumpsTutorial.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16309237"
    },
    {
        "title": "Dangerous Optimizations and the Loss of Causality in C and C++ (2010) [pdf]",
        "score": 59,
        "link": "https:\/\/pubweb.eng.utah.edu\/~cs5785\/slides-f10\/Dangerous+Optimizations.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17399228"
    },
    {
        "title": "The next 700 programming languages (1966) [pdf]",
        "score": 59,
        "link": "http:\/\/fsl.cs.illinois.edu\/images\/e\/ef\/P157-landin.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17718158"
    },
    {
        "title": "Detecting Consciousness (2017) [pdf]",
        "score": 58,
        "link": "https:\/\/www.alleninstitute.org\/media\/filer_public\/3e\/7a\/3e7aabb0-5da7-4915-b4b6-2aa896c8faee\/2017_11_howtomakeaconsciousnessmeter.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16300280"
    },
    {
        "title": "Cure53: Browser Security Whitepaper (2017) [pdf]",
        "score": 58,
        "link": "https:\/\/cure53.de\/browser-security-whitepaper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16406663"
    },
    {
        "title": "How to Catch When Proxies Lie [pdf]",
        "score": 57,
        "link": "https:\/\/www.andrew.cmu.edu\/user\/nicolasc\/publications\/Weinberg-IMC18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18336283"
    },
    {
        "title": "Bringup is Hard [pdf]",
        "score": 57,
        "link": "http:\/\/www.garbled.net\/tmp\/bringup.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17435512"
    },
    {
        "title": "Functional Pearl: Enumerating the Rationals [pdf]",
        "score": 56,
        "link": "https:\/\/www.cs.ox.ac.uk\/jeremy.gibbons\/publications\/rationals.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18515413"
    },
    {
        "title": "Computation and State Machines (2008) [pdf]",
        "score": 56,
        "link": "https:\/\/lamport.azurewebsites.net\/pubs\/state-machine.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18012672"
    },
    {
        "title": "All Your IOPS Are Belong to Us: Case Study in Performance Optimization (2015) [pdf]",
        "score": 56,
        "link": "https:\/\/www.percona.com\/live\/mysql-conference-2015\/sites\/default\/files\/slides\/all_your_iops_are_belong_to_usPLMCE2015.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16252986"
    },
    {
        "title": "TCP and BBR [pdf]",
        "score": 56,
        "link": "https:\/\/ripe76.ripe.net\/presentations\/10-2018-05-15-bbr.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17063582"
    },
    {
        "title": "Reverse-Engineering WebAssembly [pdf]",
        "score": 56,
        "link": "https:\/\/www.pnfsoftware.com\/reversing-wasm.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17507767"
    },
    {
        "title": "Still All on One Server: Perforce at Scale (2011) [pdf]",
        "score": 56,
        "link": "http:\/\/info.perforce.com\/rs\/perforce\/images\/GoogleWhitePaper-StillAllonOneServer-PerforceatScale.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17607457"
    },
    {
        "title": "Ambit: In-Memory Accelerator for Bulk Bitwise Operations Using Commodity DRAM [pdf]",
        "score": 56,
        "link": "https:\/\/people.inf.ethz.ch\/omutlu\/pub\/ambit-bulk-bitwise-dram_micro17.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16085778"
    },
    {
        "title": "Specializing Ropes for Ruby [pdf]",
        "score": 56,
        "link": "https:\/\/chrisseaton.com\/truffleruby\/ropes-manlang.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17971920"
    },
    {
        "title": "Programming in an Interactive Environment: The \u201cLisp\u201d Experience (1978) [pdf]",
        "score": 55,
        "link": "http:\/\/www.softwarepreservation.org\/projects\/interactive_c\/bib\/Sandewall-1978.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17736959"
    },
    {
        "title": "Prolog as Description and Implementation Language in CS Teaching (2004) [pdf]",
        "score": 55,
        "link": "http:\/\/www.ep.liu.se\/ecp\/012\/004\/ecp012004.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18174191"
    },
    {
        "title": "Why Threads Are a Bad Idea (1995) [pdf]",
        "score": 55,
        "link": "https:\/\/www.cc.gatech.edu\/classes\/AY2010\/cs4210_fall\/papers\/ousterhout-threads.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17297325"
    },
    {
        "title": "Compiler Construction: The Art of Niklaus Wirth (2000) [pdf]",
        "score": 54,
        "link": "https:\/\/pdfs.semanticscholar.org\/036f\/c4effda4bbbe9f6a9ee762df717bd0af1324.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16609360"
    },
    {
        "title": "Understanding, finding, and eliminating ground loops (2003) [pdf]",
        "score": 54,
        "link": "http:\/\/web.mit.edu\/jhawk\/tmp\/p\/EST016_Ground_Loops_handout.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17640674"
    },
    {
        "title": "Fuzzy Logic in Agent-Based Game Design [pdf]",
        "score": 54,
        "link": "https:\/\/web.northeastern.edu\/magy\/courses\/AI\/FuzzyLogicGames.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17265862"
    },
    {
        "title": "No Causal Effect of Music Practice on Ability (2014) [pdf]",
        "score": 54,
        "link": "https:\/\/www.gwern.net\/docs\/genetics\/correlation\/2014-mosing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16348727"
    },
    {
        "title": "Dynamic Automatic Differentiation of GPU Broadcast Kernels [pdf]",
        "score": 53,
        "link": "http:\/\/www.mit.edu\/~jvielma\/publications\/Dynamic-Automatic-Differentiation.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18404201"
    },
    {
        "title": "The Problem with Threads (2006) [pdf]",
        "score": 53,
        "link": "https:\/\/www2.eecs.berkeley.edu\/Pubs\/TechRpts\/2006\/EECS-2006-1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16996668"
    },
    {
        "title": "Inside the Windows 95 File System (1997) [pdf]",
        "score": 53,
        "link": "http:\/\/www.tenox.net\/books\/Microsoft_Windows\/Inside_the_Windows95_File_System.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17391526"
    },
    {
        "title": "Computational Complexity of Air Travel Planning (2003) [pdf]",
        "score": 53,
        "link": "http:\/\/www.demarcken.org\/carl\/papers\/ITA-software-travel-complexity\/ITA-software-travel-complexity.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17642263"
    },
    {
        "title": "Racklog: Prolog Style Logic Programming [pdf]",
        "score": 53,
        "link": "https:\/\/plt.eecs.northwestern.edu\/snapshots\/current\/pdf-doc\/racklog.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18767708"
    },
    {
        "title": "A Failure of Academic Quality Control [pdf]",
        "score": 53,
        "link": "http:\/\/journalofpositivesexuality.org\/wp-content\/uploads\/2018\/08\/Failure-of-Academic-Quality-Control-Technology-of-Orgasm-Lieberman-Schatzberg.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17897753"
    },
    {
        "title": "An Empirical Study of the Reliability of Unix Utilities (1989) [pdf]",
        "score": 52,
        "link": "http:\/\/ftp.cs.wisc.edu\/paradyn\/technical_papers\/fuzz.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16324063"
    },
    {
        "title": "American Gut: An Open Platform for Citizen Science Microbiome Research [pdf]",
        "score": 52,
        "link": "http:\/\/msystems.asm.org\/content\/msys\/3\/3\/e00031-18.full.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17434948"
    },
    {
        "title": "How the Reformulation of OxyContin Ignited the Heroin Epidemic [pdf]",
        "score": 52,
        "link": "https:\/\/www3.nd.edu\/~elieber\/research\/ELP.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16792052"
    },
    {
        "title": "Basic Cave Diving: A Blueprint for Survival (1986) [pdf]",
        "score": 52,
        "link": "https:\/\/nsscds.org\/wp-content\/uploads\/2018\/05\/Blueprint-for-Survival.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17483339"
    },
    {
        "title": "CFTC and SEC Testimony on Cryptocurrencies [pdf]",
        "score": 52,
        "link": "https:\/\/www.banking.senate.gov\/public\/_cache\/files\/a5e72ac6-4f8a-473f-9c9c-e2894573d57d\/BF62433A09A9B95A269A29E1FF13D2BA.clayton-testimony-2-6-18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16312025"
    },
    {
        "title": "Zero-overhead deterministic exceptions: Throwing values [pdf]",
        "score": 51,
        "link": "http:\/\/www.open-std.org\/jtc1\/sc22\/wg21\/docs\/papers\/2018\/p0709r0.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17059297"
    },
    {
        "title": "Cryptographically Certified Hypothesis Testing [pdf]",
        "score": 51,
        "link": "http:\/\/sachaservanschreiber.com\/thesis.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18692982"
    },
    {
        "title": "A History of Capacity Challenges in Computer Science [pdf]",
        "score": 51,
        "link": "https:\/\/cs.stanford.edu\/people\/eroberts\/CSCapacity.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16334968"
    },
    {
        "title": "Mach-O Tricks [pdf]",
        "score": 51,
        "link": "http:\/\/iokit.racing\/machotricks.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17378829"
    },
    {
        "title": "Exploiting Coroutines to Attack the \u201cKiller Nanoseconds\u201d [pdf]",
        "score": 50,
        "link": "http:\/\/www.vldb.org\/pvldb\/vol11\/p1702-jonathan.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18420950"
    },
    {
        "title": "Pycket: A Tracing JIT For a Functional Language (2015) [pdf]",
        "score": 50,
        "link": "http:\/\/homes.sice.indiana.edu\/samth\/pycket-draft.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18005734"
    },
    {
        "title": "Systems Software Research is Irrelevant (2000) [pdf]",
        "score": 50,
        "link": "http:\/\/doc.cat-v.org\/bell_labs\/utah2000\/utah2000.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18207317"
    },
    {
        "title": "Welcome to DNS, or Saving the DNS Camel [pdf]",
        "score": 50,
        "link": "https:\/\/indico.dns-oarc.net\/event\/29\/contributions\/658\/attachments\/641\/1039\/Welcome_to_DNS-final.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18255619"
    },
    {
        "title": "The Dark (Patterns) Side of UX Design [pdf]",
        "score": 50,
        "link": "http:\/\/colingray.me\/wp-content\/uploads\/2018_Grayetal_CHI_DarkPatternsUXDesign.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17962469"
    },
    {
        "title": "Monads for functional programming (1995) [pdf]",
        "score": 49,
        "link": "http:\/\/homepages.inf.ed.ac.uk\/wadler\/papers\/marktoberdorf\/baastad.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17002554"
    },
    {
        "title": "Online Tracking: A 1M-site Measurement and Analysis [pdf]",
        "score": 49,
        "link": "http:\/\/randomwalker.info\/publications\/OpenWPM_1_million_site_tracking_measurement.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18771494"
    },
    {
        "title": "SEC settles with EtherDelta founder for running an unlicensed exchange [pdf]",
        "score": 49,
        "link": "https:\/\/www.sec.gov\/litigation\/admin\/2018\/34-84553.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18410483"
    },
    {
        "title": "Naming and Synchronization in a Decentralized Computer System (1979) [pdf]",
        "score": 49,
        "link": "http:\/\/www.dtic.mil\/dtic\/tr\/fulltext\/u2\/a061407.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18267022"
    },
    {
        "title": "Methods for Studying Coincidences (1989) [pdf]",
        "score": 49,
        "link": "http:\/\/www.math.uchicago.edu\/~fcale\/CCC\/DC.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16297067"
    },
    {
        "title": "To Explain or to Predict? (2010) [pdf]",
        "score": 49,
        "link": "http:\/\/www.galitshmueli.com\/system\/files\/Stat%20Science%20published.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17509407"
    },
    {
        "title": "The Intel 80x86 Process Architecture: Pitfalls for Secure Systems (1995) [pdf]",
        "score": 49,
        "link": "https:\/\/pdfs.semanticscholar.org\/2209\/42809262c17b6631c0f6536c91aaf7756857.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16101719"
    },
    {
        "title": "Imperfect Forward Secrecy: How Diffie-Hellman Fails in Practice",
        "score": 49,
        "link": "https:\/\/jhalderm.com\/pub\/papers\/weakdh-cacm19.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18725824"
    },
    {
        "title": "Froid: Optimization of Imperative Programs in a Relational Database [pdf]",
        "score": 49,
        "link": "http:\/\/www.vldb.org\/pvldb\/vol11\/p432-ramachandra.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18747807"
    },
    {
        "title": "Succincter [pdf]",
        "score": 49,
        "link": "http:\/\/people.csail.mit.edu\/mip\/papers\/succinct\/succinct.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18701540"
    },
    {
        "title": "An FPGA Implementation of a Distributed Virtual Machine [pdf]",
        "score": 48,
        "link": "https:\/\/www.cs.unm.edu\/~williams\/fpga-ucnc18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17760267"
    },
    {
        "title": "The Trouble with Macroeconomics (2016) [pdf]",
        "score": 48,
        "link": "https:\/\/paulromer.net\/wp-content\/uploads\/2016\/09\/WP-Trouble.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18179989"
    },
    {
        "title": "Clascal Reference Manual for the Lisa (1983) [pdf]",
        "score": 48,
        "link": "http:\/\/www.mirrorservice.org\/sites\/www.bitsavers.org\/pdf\/apple\/lisa\/toolkit_university\/Clascal_Reference_Manual_Mar83.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17591728"
    },
    {
        "title": "Self-Censorship in Public Discourse: A Theory of 'Political Correctness' (1994) [pdf]",
        "score": 47,
        "link": "https:\/\/www.brown.edu\/Departments\/Economics\/Faculty\/Glenn_Loury\/louryhomepage\/papers\/Loury_Political_Correctness.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16442347"
    },
    {
        "title": "The Scheme Machine (1994) [pdf]",
        "score": 47,
        "link": "http:\/\/burgerrg.github.io\/TR413.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17702420"
    },
    {
        "title": "Mathematics in the 20th century \u2013 Sir Michael Atiyah [pdf]",
        "score": 47,
        "link": "http:\/\/www.math.tamu.edu\/~rojas\/atiyah20thcentury.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18730436"
    },
    {
        "title": "Why Echo Chambers Are Useful [pdf]",
        "score": 47,
        "link": "https:\/\/www.economics.ox.ac.uk\/materials\/jm_papers\/921\/echochambers.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18375409"
    },
    {
        "title": "Building a Bw-Tree Takes More Than Just Buzz Words [pdf]",
        "score": 47,
        "link": "https:\/\/db.cs.cmu.edu\/papers\/2018\/mod342-wangA.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17041616"
    },
    {
        "title": "The History, Controversy, and Evolution of the Goto Statement [pdf]",
        "score": 46,
        "link": "http:\/\/web.sonoma.edu\/users\/l\/luvisi\/goto\/goto.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18484221"
    },
    {
        "title": "Automated PCB Reverse Engineering (2017) [pdf]",
        "score": 46,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/woot17\/woot17-paper-kleber.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18082465"
    },
    {
        "title": "New Hardware for Massive Neural Networks (1988) [pdf]",
        "score": 46,
        "link": "https:\/\/papers.nips.cc\/paper\/22-new-hardware-for-massive-neural-networks.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18372953"
    },
    {
        "title": "Entity Component Systems and Data Oriented Design [pdf]",
        "score": 46,
        "link": "http:\/\/aras-p.info\/texts\/files\/2018Academy%20-%20ECS-DoD.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18202308"
    },
    {
        "title": "Testing Theories of American Politics: Elites, Interest Groups, Citizens (2014) [pdf]",
        "score": 46,
        "link": "https:\/\/scholar.princeton.edu\/sites\/default\/files\/mgilens\/files\/gilens_and_page_2014_-testing_theories_of_american_politics.doc.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18324592"
    },
    {
        "title": "Technological Change and Obsolete Skills: Evidence from Men\u2019s Pro Tennis (2017) [pdf]",
        "score": 46,
        "link": "http:\/\/individual.utoronto.ca\/jhall\/documents\/TennisTechChange.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16720468"
    },
    {
        "title": "Flare: An Approach to Routing in Lightning Network (2016) [pdf]",
        "score": 45,
        "link": "http:\/\/bitfury.com\/content\/downloads\/whitepaper_flare_an_approach_to_routing_in_lightning_network_7_7_2016.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17057441"
    },
    {
        "title": "Bicycle Technology (1973) [pdf]",
        "score": 45,
        "link": "http:\/\/veterancycleclublibrary.org.uk\/ncl\/pics\/Bicycle%20Technology%20Scientific%20American%20March%201973%20(V-CC%20Library).pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17968267"
    },
    {
        "title": "How Browsers\u2019 Explanations Impact Misconceptions About Private Browsing [pdf]",
        "score": 45,
        "link": "https:\/\/www.blaseur.com\/papers\/www18privatebrowsing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17456047"
    },
    {
        "title": "Overload Control for Scaling WeChat Microservices [pdf]",
        "score": 45,
        "link": "https:\/\/www.cs.columbia.edu\/~ruigu\/papers\/socc18-final100.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18691462"
    },
    {
        "title": "Popularity Dynamics and Intrinsic Quality in Reddit and Hacker News (2015) [pdf]",
        "score": 45,
        "link": "https:\/\/pdfs.semanticscholar.org\/ccf6\/0d08bdd989ea3595bbbda132dedd71c47acf.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18290904"
    },
    {
        "title": "Show HN: A Root Cause Analysis EBook [pdf]",
        "score": 45,
        "link": "http:\/\/www.sologic.com\/sites\/default\/files\/pdf\/RCA-ebook-my-boss-told-me-to-do-rca.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16483762"
    },
    {
        "title": "Survival in the first hours of the Cenozoic (2004) [pdf]",
        "score": 44,
        "link": "http:\/\/uahost.uantwerpen.be\/funmorph\/raoul\/macroevolutie\/Robertson2004.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17748995"
    },
    {
        "title": "The Discoveries of Continuations (1993) [pdf]",
        "score": 44,
        "link": "http:\/\/www.math.bas.bg\/~bantchev\/place\/iswim\/conti-disco.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18457914"
    },
    {
        "title": "Oral History of John Backus (2006) [pdf]",
        "score": 44,
        "link": "http:\/\/archive.computerhistory.org\/resources\/access\/text\/2013\/05\/102657970-05-01-acc.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17564186"
    },
    {
        "title": "Peeking Behind the Curtains of Serverless Platforms [pdf]",
        "score": 44,
        "link": "http:\/\/pages.cs.wisc.edu\/~liangw\/pub\/atc18-final298.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17686223"
    },
    {
        "title": "A Mathematician\u2019s Apology (1940) [pdf]",
        "score": 44,
        "link": "http:\/\/www.math.ualberta.ca\/~mss\/misc\/A%20Mathematician%27s%20Apology.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18037550"
    },
    {
        "title": "LHD: Improving Cache Hit Rate by Maximizing Hit Density [pdf]",
        "score": 44,
        "link": "http:\/\/www.cs.cmu.edu\/~beckmann\/publications\/papers\/2018.nsdi.lhd.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16825931"
    },
    {
        "title": "Direction for ISO C++ [pdf]",
        "score": 43,
        "link": "http:\/\/www.open-std.org\/JTC1\/SC22\/WG21\/docs\/papers\/2018\/p0939r0.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16394041"
    },
    {
        "title": "Fortifying Macros (2010) [pdf]",
        "score": 43,
        "link": "https:\/\/www2.ccs.neu.edu\/racket\/pubs\/icfp10-cf.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18372103"
    },
    {
        "title": "Deprecating the Observer Pattern (2010) [pdf]",
        "score": 43,
        "link": "https:\/\/infoscience.epfl.ch\/record\/148043\/files\/DeprecatingObserversTR2010.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17845341"
    },
    {
        "title": "Compiler Fuzzing Through Deep Learning [pdf]",
        "score": 43,
        "link": "http:\/\/homepages.inf.ed.ac.uk\/hleather\/publications\/2018_deepfuzzing_issta.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18748193"
    },
    {
        "title": "You Could Have Invented Spectral Sequences (2006) [pdf]",
        "score": 43,
        "link": "http:\/\/timothychow.net\/spectral02.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18063999"
    },
    {
        "title": "Relationship Between Practice and Performance in Sports: A Meta-Analysis (2016) [pdf]",
        "score": 43,
        "link": "https:\/\/artscimedia.case.edu\/wp-content\/uploads\/sites\/141\/2016\/09\/14214856\/Macnamara-Moreau-Hambrick-2016.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17874069"
    },
    {
        "title": "Herbert Simon: The Architecture of Complexity (1962) [pdf]",
        "score": 42,
        "link": "http:\/\/ecoplexity.org\/files\/uploads\/Simon.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16392223"
    },
    {
        "title": "Reminiscences of the VLSI Revolution (2012) [pdf]",
        "score": 42,
        "link": "http:\/\/worrydream.com\/refs\/Conway%20-%20Reminiscences%20of%20the%20VLSI%20Revolution.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18140297"
    },
    {
        "title": "Finger Printing Data [pdf]",
        "score": 42,
        "link": "https:\/\/eprint.iacr.org\/2018\/503.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17162619"
    },
    {
        "title": "Quantitative analysis of family trees with millions of relatives (2017) [pdf]",
        "score": 42,
        "link": "https:\/\/www.biorxiv.org\/content\/biorxiv\/early\/2017\/02\/07\/106427.1.full.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16499241"
    },
    {
        "title": "CloudKit: Structured Storage for Mobile Applications [pdf]",
        "score": 42,
        "link": "http:\/\/www.vldb.org\/pvldb\/vol11\/p540-shraer.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16281270"
    },
    {
        "title": "Thirty Years Later: Lessons from the Multics Security Evaluation (2002) [pdf]",
        "score": 42,
        "link": "https:\/\/www.acsac.org\/2002\/papers\/classic-multics.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16956386"
    },
    {
        "title": "Hints for Computer System Design (1983) [pdf]",
        "score": 41,
        "link": "https:\/\/www.microsoft.com\/en-us\/research\/wp-content\/uploads\/2016\/02\/acrobat-17.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17587748"
    },
    {
        "title": "The Computer and the Brain (1958) [pdf]",
        "score": 41,
        "link": "https:\/\/ia800800.us.archive.org\/4\/items\/TheComputerAndTheBrain\/The%20Computer%20and%20The%20Brain_text.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17461152"
    },
    {
        "title": "Natural Sounding Artificial Reverberation (1962) [pdf]",
        "score": 41,
        "link": "http:\/\/charlesames.net\/pdf\/MRSchroeder\/artificial-reverb.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16304354"
    },
    {
        "title": "Self-reference and Logic (2005) [pdf]",
        "score": 41,
        "link": "http:\/\/www.imm.dtu.dk\/~tobo\/essay.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17845288"
    },
    {
        "title": "Techniques of Systems Analysis (1957) [pdf]",
        "score": 40,
        "link": "https:\/\/www.rand.org\/content\/dam\/rand\/pubs\/research_memoranda\/2006\/RM1829-1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16355886"
    },
    {
        "title": "Implementing SIP Telephony in Python (2008) [pdf]",
        "score": 40,
        "link": "http:\/\/39peers.net\/download\/doc\/report.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17757737"
    },
    {
        "title": "Practical Memory Safety with Random Embedded Secret Tokens [pdf]",
        "score": 40,
        "link": "http:\/\/www.cs.columbia.edu\/~simha\/preprint_isca18_REST_memory_safety.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16891319"
    },
    {
        "title": "Scalable 10 Gbps TCP\/IP Stack Architecture for Reconfigurable Hardware (2015) [pdf]",
        "score": 39,
        "link": "http:\/\/davidsidler.ch\/files\/fccm2015-tcpip.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17994713"
    },
    {
        "title": "Understand and Eliminate JVM Warm-Up Overhead in Data-Parallel Systems (2016) [pdf]",
        "score": 39,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/osdi16\/osdi16-lion.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17995055"
    },
    {
        "title": "The Tyranny of the Clock (2012) [pdf]",
        "score": 39,
        "link": "http:\/\/www.eng.auburn.edu\/~uguin\/teaching\/READING\/E6200\/Sutherland_Tyranny_o_Clock.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17577677"
    },
    {
        "title": "Bfloat16 \u2013 Hardware Numerics Definition [pdf]",
        "score": 39,
        "link": "https:\/\/software.intel.com\/sites\/default\/files\/managed\/40\/8b\/bf16-hardware-numerics-definition-white-paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18475575"
    },
    {
        "title": "Compiling a Subset of APL into a Typed Intermediate Language (2014) [pdf]",
        "score": 39,
        "link": "http:\/\/hiperfit.dk\/pdf\/array14_final.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16230067"
    },
    {
        "title": "Genetic Predisposition to Obesity and Medicare Expenditures [pdf]",
        "score": 39,
        "link": "https:\/\/www.gwern.net\/docs\/genetics\/selection\/2017-wehby.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16434697"
    },
    {
        "title": "Imperfect Forward Secrecy: How Diffie-Hellman Fails in Practice (2015)",
        "score": 39,
        "link": "https:\/\/weakdh.org\/imperfect-forward-secrecy-ccs15.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18725824"
    },
    {
        "title": "Mathematical Metaphysics (2015) [pdf]",
        "score": 38,
        "link": "http:\/\/shelf1.library.cmu.edu\/HSS\/2015\/a1626190.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17462947"
    },
    {
        "title": "Retpoline: A Branch Target Injection Mitigation [pdf]",
        "score": 38,
        "link": "https:\/\/software.intel.com\/sites\/default\/files\/managed\/1d\/46\/Retpoline-A-Branch-Target-Injection-Mitigation.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16423401"
    },
    {
        "title": "Essentials of Metaheuristics (2015) [pdf]",
        "score": 38,
        "link": "https:\/\/cs.gmu.edu\/~sean\/book\/metaheuristics\/Essentials.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18491274"
    },
    {
        "title": "Verifying Concurrent Programs Using Contracts (2017) [pdf]",
        "score": 38,
        "link": "http:\/\/www.fit.vutbr.cz\/~vojnar\/Publications\/icst17-contracts.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18403244"
    },
    {
        "title": "The TX-2 Computer and Sketchpad (2012) [pdf]",
        "score": 38,
        "link": "https:\/\/www.ll.mit.edu\/publications\/labnotes\/LookingBack_19_1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16058966"
    },
    {
        "title": "Ground: A Data Context Service [pdf]",
        "score": 38,
        "link": "https:\/\/rise.cs.berkeley.edu\/wp-content\/uploads\/2017\/03\/CIDR17.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18415456"
    },
    {
        "title": "SoC it to EM: EM side-channel attacks on a complex SoC [pdf]",
        "score": 38,
        "link": "https:\/\/www.iacr.org\/archive\/ches2015\/92930599\/92930599.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17220660"
    },
    {
        "title": "ICANN seeking input on ceding control of WHOIS privacy to governments [pdf]",
        "score": 38,
        "link": "https:\/\/www.icann.org\/en\/system\/files\/files\/proposed-interim-model-gdpr-compliance-summary-description-28feb18-en.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16491566"
    },
    {
        "title": "NIST Uncertainty Machine \u2013 User\u2019s Manual [pdf]",
        "score": 37,
        "link": "https:\/\/uncertainty.nist.gov\/NISTUncertaintyMachine-UserManual.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17008705"
    },
    {
        "title": "Three Generations of Asynchronous Microprocessors (2003) [pdf]",
        "score": 37,
        "link": "http:\/\/mail.async.caltech.edu\/Pubs\/PDF\/2003_threegen.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17546731"
    },
    {
        "title": "Insider Accounts of Computing and Life at BBN: A sixty-year report (2011) [pdf]",
        "score": 37,
        "link": "http:\/\/walden-family.com\/bbn\/bbn-print2.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17166680"
    },
    {
        "title": "Mill CPU is Immune to Spectre, Meltdown [pdf]",
        "score": 37,
        "link": "https:\/\/millcomputing.com\/blog\/wp-content\/uploads\/2018\/01\/Spectre.03.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16153570"
    },
    {
        "title": "Why Johnny Doesn\u2019t Use Two Factor \u2013 A Study of the FIDO U2F Security Key [pdf]",
        "score": 37,
        "link": "https:\/\/fc18.ifca.ai\/preproceedings\/111.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17732460"
    },
    {
        "title": "Contracts in OpenBSD (2010) [pdf]",
        "score": 36,
        "link": "http:\/\/kindsoftware.com\/documents\/reports\/Torlakcik10.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17939799"
    },
    {
        "title": "House of Commons committee re-invites to Mark Zuckerburg to appear [pdf]",
        "score": 36,
        "link": "https:\/\/www.parliament.uk\/documents\/commons-committees\/culture-media-and-sport\/180501-Chair-to-Rebecca-Stimson-Facebook-re-oral-evidence-follow-up.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16966882"
    },
    {
        "title": "Science and Linguistics (1940)",
        "score": 36,
        "link": "http:\/\/web.mit.edu\/allanmc\/www\/whorf.scienceandlinguistics.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16072798"
    },
    {
        "title": "Gray Failure: The Achilles' Heel of Cloud-Scale Systems [pdf]",
        "score": 36,
        "link": "https:\/\/www.cs.jhu.edu\/~huang\/paper\/grayfailure-hotos17.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16253405"
    },
    {
        "title": "KLEAK: Practical Kernel Memory Disclosure Detection [pdf]",
        "score": 36,
        "link": "https:\/\/netbsd.org\/gallery\/presentations\/maxv\/kleak.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18648060"
    },
    {
        "title": "The Design and Implementation of Hyperupcalls [pdf]",
        "score": 36,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/atc18\/atc18-amit.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17513530"
    },
    {
        "title": "On the Work of Edward Witten (1990) [pdf]",
        "score": 35,
        "link": "http:\/\/bohr.physics.berkeley.edu\/reinsch\/phys105spr2014\/files\/Witten_Atiyah.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16453163"
    },
    {
        "title": "The function of dream sleep (1983) [pdf]",
        "score": 35,
        "link": "https:\/\/profiles.nlm.nih.gov\/ps\/access\/scbcdk.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18405810"
    },
    {
        "title": "Recollections of Early Chip Development at Intel [pdf]",
        "score": 34,
        "link": "https:\/\/lark.tu-sofia.bg\/ntt\/eusku\/readings\/art_1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18624722"
    },
    {
        "title": "The tragedy of the commons in evolutionary biology (2007) [pdf]",
        "score": 34,
        "link": "http:\/\/www.kokkonuts.org\/wp-content\/uploads\/Rankin_ToC.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18557657"
    },
    {
        "title": "How News Aggregators Help Development Communities Shape and Share Knowledge [pdf]",
        "score": 34,
        "link": "https:\/\/ctreude.files.wordpress.com\/2018\/02\/icse18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17057859"
    },
    {
        "title": "Unique IPv6 prefix per host [pdf]",
        "score": 34,
        "link": "https:\/\/ripe76.ripe.net\/presentations\/143-rfc8273-v5.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17091176"
    },
    {
        "title": "Pepper's Cone: An Inexpensive Do-It-Yourself 3D Display [pdf]",
        "score": 34,
        "link": "http:\/\/grail.cs.washington.edu\/wp-content\/uploads\/2017\/10\/luo2017pca.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16051078"
    },
    {
        "title": "BaSiX \u2013 A Basic interpreter written in TeX (1990) [pdf]",
        "score": 34,
        "link": "http:\/\/www.tug.org\/TUGboat\/tb11-3\/tb29greene.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17509519"
    },
    {
        "title": "The Metaphysical Transparency of Truth (2017) [pdf]",
        "score": 34,
        "link": "https:\/\/www.uvm.edu\/~lderosse\/transparency.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17581799"
    },
    {
        "title": "Stateless Network Functions (2017) [pdf]",
        "score": 34,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/nsdi17\/nsdi17-kablan.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17470748"
    },
    {
        "title": "Direct Conversion Receivers: Some Amateur Radio History [pdf]",
        "score": 34,
        "link": "http:\/\/w7zoi.net\/dcrx68.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18449407"
    },
    {
        "title": "#ifdef considered harmful (1992) [pdf]",
        "score": 34,
        "link": "https:\/\/usenix.org\/legacy\/publications\/library\/proceedings\/sa92\/spencer.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17624014"
    },
    {
        "title": "The Forgetfulness of Beings (1997) [pdf]",
        "score": 33,
        "link": "https:\/\/maritain.nd.edu\/ama\/Ciapalo\/Ciapalo14.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17432560"
    },
    {
        "title": "Designing experiments for understanding performance [pdf]",
        "score": 33,
        "link": "https:\/\/timharris.uk\/misc\/five-ways.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16346138"
    },
    {
        "title": "Visual overview of radiator valves used in Germany [pdf]",
        "score": 33,
        "link": "https:\/\/www.eq-3.de\/Downloads\/eq3\/download%20bereich\/Ventilkompatibilitaeten-Model-N.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18532446"
    },
    {
        "title": "Code Inflation (2015) [pdf]",
        "score": 33,
        "link": "https:\/\/www.computer.org\/cms\/Computer.org\/ComputingNow\/issues\/2015\/04\/mso2015020010.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17787922"
    },
    {
        "title": "The Natural Rate of Interest Is Zero (2004) [pdf]",
        "score": 33,
        "link": "http:\/\/www.cfeps.org\/pubs\/wp-pdf\/WP37-MoslerForstater.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16414199"
    },
    {
        "title": "Timing Analysis of Keystrokes and Timing Attacks on SSH (2001) [pdf]",
        "score": 33,
        "link": "https:\/\/people.eecs.berkeley.edu\/~daw\/papers\/ssh-use01.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18557916"
    },
    {
        "title": "The History and Concept of Computability (1996) [pdf]",
        "score": 32,
        "link": "http:\/\/www.people.cs.uchicago.edu\/~soare\/History\/handbook.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18298389"
    },
    {
        "title": "NIST: Usability and Key Management [pdf]",
        "score": 32,
        "link": "https:\/\/csrc.nist.gov\/CSRC\/media\/Presentations\/Usability-and-Key-Management\/images-media\/Usability_and_Key_Mgmt.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17808910"
    },
    {
        "title": "An Analysis of the ProtonMail Cryptographic Architecture [pdf]",
        "score": 32,
        "link": "https:\/\/eprint.iacr.org\/2018\/1121.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18500924"
    },
    {
        "title": "Advances in OpenBSD packages [pdf]",
        "score": 32,
        "link": "https:\/\/www.openbsd.org\/papers\/eurobsdcon_2018_https.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18056774"
    },
    {
        "title": "A Model of Mental Fluidity and Analogy-Making (1994) [pdf]",
        "score": 32,
        "link": "http:\/\/portal.uni-freiburg.de\/cognition\/lehre\/archiv\/WS0910\/analogiemat\/6thsitting\/Vortrag\/copycatamodelofmentalfluidityandanalogymaking.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16299804"
    },
    {
        "title": "Comparison of Metaheuristics [pdf]",
        "score": 32,
        "link": "http:\/\/www2.cscamm.umd.edu\/publications\/BookChapter_CS-09-13.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18491278"
    },
    {
        "title": "Python\u2019s Meta-Object Protocol (2012) [pdf]",
        "score": 32,
        "link": "http:\/\/laser.inf.ethz.ch\/2012\/slides\/vanRossum\/laser-mop.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17669621"
    },
    {
        "title": "A History of Individually Wrapped Cheese Slices (1979) [pdf]",
        "score": 32,
        "link": "http:\/\/www56.homepage.villanova.edu\/david.nawrocki\/Arnold%20Nawrocki%20IWS%20Paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17639514"
    },
    {
        "title": "Voice-matching technology was developed by MIT\/Lincoln Labs under NSA contract [pdf]",
        "score": 32,
        "link": "https:\/\/assets.documentcloud.org\/documents\/4351987\/2006-01-04-Technology-That-Identifies-People-by.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16195038"
    },
    {
        "title": "Cognitive Networks: Brains, Internet, and Civilizations (2017) [pdf]",
        "score": 31,
        "link": "https:\/\/pdfs.semanticscholar.org\/342d\/672ba656102fd5a98df2c882723ef3022efe.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17485151"
    },
    {
        "title": "Squeak: A Language for Communicating with Mice (1985) [pdf]",
        "score": 31,
        "link": "http:\/\/ordiecole.com\/squeak\/cardelli_squeak1985.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17787781"
    },
    {
        "title": "Neuromorphic computing with multi-memristive synapses [pdf]",
        "score": 31,
        "link": "https:\/\/www.nature.com\/articles\/s41467-018-04933-y.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17712896"
    },
    {
        "title": "Revisiting the Risks of Bitcoin Currency Exchange Closure [pdf]",
        "score": 31,
        "link": "https:\/\/tylermoore.utulsa.edu\/toit17.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16337782"
    },
    {
        "title": "A Decade of Lattice Cryptography (2016) [pdf]",
        "score": 31,
        "link": "http:\/\/web.eecs.umich.edu\/~cpeikert\/pubs\/lattice-survey.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17701148"
    },
    {
        "title": "Field Guide for Designing Human Interaction with Intelligent Systems (1998) [pdf]",
        "score": 30,
        "link": "https:\/\/ston.jsc.nasa.gov\/collections\/trs\/_techrep\/TM-1998-208470.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18049945"
    },
    {
        "title": "Crabs: the bitmap terror (1985) [pdf]",
        "score": 30,
        "link": "http:\/\/lucacardelli.name\/Papers\/Crabs.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16967529"
    },
    {
        "title": "Sugar: Secure GPU Acceleration in Web Browsers [pdf]",
        "score": 30,
        "link": "https:\/\/www.ics.uci.edu\/~ardalan\/papers\/Yao_ASPLOS18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17802567"
    },
    {
        "title": "Not All Patterns, but Enough (2008) [pdf]",
        "score": 30,
        "link": "https:\/\/www.cs.york.ac.uk\/plasma\/publications\/pdf\/MitchellRuncimanHaskell08.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18431228"
    },
    {
        "title": "Now you see them: DARPA's Stealth Revolution (2008) [pdf]",
        "score": 30,
        "link": "https:\/\/www.darpa.mil\/attachments\/(2O24)%20Global%20Nav%20-%20About%20Us%20-%20History%20-%20Resources%20-%2050th%20-%20Stealth%20(Approved).pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16610659"
    },
    {
        "title": "Personal Computing (1975) [pdf]",
        "score": 30,
        "link": "https:\/\/mprove.de\/diplom\/gui\/Kay75.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18044785"
    },
    {
        "title": "Composing with Tape Recorders: Musique Concr\u00e8te for Beginners [pdf]",
        "score": 30,
        "link": "https:\/\/monoskop.org\/images\/b\/b3\/Dwyer_Terence_Composing_with_Tape_Recorders_Musique_Concrete_for_Beginners.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17338092"
    },
    {
        "title": "Quantifying the Performance of Garbage Collection (2005) [pdf]",
        "score": 30,
        "link": "https:\/\/www.cs.umass.edu\/~emery\/pubs\/gcvsmalloc.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18760111"
    },
    {
        "title": "Cicada: Dependably Fast Multi-Core In-Memory Transactions (2017) [pdf]",
        "score": 29,
        "link": "https:\/\/hyeontaek.com\/papers\/cicada-sigmod2017.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18157973"
    },
    {
        "title": "Common Lisp, Typing and Mathematics (2001) [pdf]",
        "score": 29,
        "link": "https:\/\/www-fourier.ujf-grenoble.fr\/~sergerar\/Papers\/Ezcaray.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17774516"
    },
    {
        "title": "A Study of Linux File System Evolution (2013) [pdf]",
        "score": 29,
        "link": "https:\/\/www.usenix.org\/system\/files\/login\/articles\/03_lu_010-017_final.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17098261"
    },
    {
        "title": "The What\u2019s Next Intermittent Computing Architecture [pdf]",
        "score": 28,
        "link": "http:\/\/www.eecg.toronto.edu\/~ganesa10\/assets\/pdfs\/whatsnext-hpca2019.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18700616"
    },
    {
        "title": "Depth-first search and linear graph algorithms (1972) [pdf]",
        "score": 28,
        "link": "https:\/\/rjlipton.files.wordpress.com\/2009\/10\/dfs1971.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18518732"
    },
    {
        "title": "A Type of Simulation Which Some Experimental Evidence Suggests We Don't Live In [pdf]",
        "score": 28,
        "link": "https:\/\/philpapers.org\/archive\/ALEATO-6.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17718864"
    },
    {
        "title": "Napoleon as Organizational Designer (2009) [pdf]",
        "score": 28,
        "link": "http:\/\/www.dtic.mil\/dtic\/tr\/fulltext\/u2\/a501580.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17498577"
    },
    {
        "title": "Infinitesimal machinery (1993) [pdf]",
        "score": 28,
        "link": "https:\/\/people.eecs.berkeley.edu\/~pister\/290G\/Papers\/Feynman83.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18637226"
    },
    {
        "title": "The coolest way to generate binary strings (2013) [pdf]",
        "score": 28,
        "link": "https:\/\/www.researchgate.net\/profile\/Aaron_Williams10\/publication\/257376294_The_Coolest_Way_to_Generate_Binary_Strings\/links\/572a12cf08ae057b0a0787f9\/The-Coolest-Way-to-Generate-Binary-Strings.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18715055"
    },
    {
        "title": "Dynamic Hash Tables (1988) [pdf]",
        "score": 27,
        "link": "http:\/\/www.csd.uoc.gr\/~hy460\/pdf\/Dynamic%20Hash%20Tables.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16608613"
    },
    {
        "title": "Fault attacks on secure chips: from glitch to flash (2011) [pdf]",
        "score": 27,
        "link": "https:\/\/www.cl.cam.ac.uk\/~sps32\/ECRYPT2011_1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17113364"
    },
    {
        "title": "A comparison of adaptive radix trees and hash tables [pdf]",
        "score": 26,
        "link": "https:\/\/bigdata.uni-saarland.de\/publications\/ARCD15.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17181334"
    },
    {
        "title": "Phoneme- and Word-Based Learning of English Words Presented to the Skin",
        "score": 26,
        "link": "https:\/\/research.fb.com\/wp-content\/uploads\/2018\/04\/a-comparative-study-of-phoneme-and-word-based-learning-of-english-words-presented-to-the-skin.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17214986"
    },
    {
        "title": "An Adaptive Packed-Memory Array (2007) [pdf]",
        "score": 26,
        "link": "https:\/\/www3.cs.stonybrook.edu\/~bender\/newpub\/BenderHu07-TODS.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16191144"
    },
    {
        "title": "The eXpress Data Path: Fast Programmable Packet Processing in the OS Kernel [pdf]",
        "score": 26,
        "link": "https:\/\/github.com\/tohojo\/xdp-paper\/blob\/master\/xdp-the-express-data-path.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18290518"
    },
    {
        "title": "Ace: a syntax-driven C preprocessor (1989) [pdf]",
        "score": 26,
        "link": "https:\/\/swtch.com\/gosling89ace.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17206416"
    },
    {
        "title": "Computation at the Edge of Chaos (1990) [pdf]",
        "score": 26,
        "link": "https:\/\/pdfs.semanticscholar.org\/cb4c\/df7812fc8ad56d13317eaabc99b76659e95f.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17515793"
    },
    {
        "title": "Internet Architecture Board on the Australian Assistance and Access Bill [pdf]",
        "score": 26,
        "link": "https:\/\/www.iab.org\/wp-content\/IAB-uploads\/2018\/09\/IAB-Comments-on-Australian-Assistance-and-Access-Bill-2018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17958778"
    },
    {
        "title": "The Why of Y (2001) [pdf]",
        "score": 26,
        "link": "https:\/\/www.dreamsongs.com\/Files\/WhyOfY.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18637939"
    },
    {
        "title": "Delta Pointers: Buffer Overflow Checks Without the Checks [pdf]",
        "score": 26,
        "link": "https:\/\/www.cs.vu.nl\/~herbertb\/download\/papers\/delta-pointers_eurosys18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16915957"
    },
    {
        "title": "A general memristor-based partial differential equation solver",
        "score": 26,
        "link": "http:\/\/www2.ece.rochester.edu\/~xiguo\/gomac15.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17662864"
    },
    {
        "title": "A Formal Apology for Metaphysics [pdf]",
        "score": 26,
        "link": "https:\/\/philpapers.org\/archive\/BARAFA-6.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18739311"
    },
    {
        "title": "Compiling machine learning programs via high-level tracing [pdf]",
        "score": 26,
        "link": "https:\/\/www.sysml.cc\/doc\/146.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18500784"
    },
    {
        "title": "Knut Wicksell: the Birth of Modern Monetary Policy (2004) [pdf]",
        "score": 26,
        "link": "https:\/\/www.dallasfed.org\/~\/media\/documents\/research\/ei\/ei0401.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18540149"
    },
    {
        "title": "Volatility and the Alchemy of Risk [pdf]",
        "score": 25,
        "link": "https:\/\/static1.squarespace.com\/static\/5581f17ee4b01f59c2b1513a\/t\/59ea16f7e5dd5b23063a3154\/1508513533577\/Artemis_Volatility+and+the+Alchemy+of+Risk_2017.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16409601"
    },
    {
        "title": "Leakage-Resilient Client-Side Deduplication of Encrypted Data in Cloud Storage [pdf]",
        "score": 25,
        "link": "https:\/\/eprint.iacr.org\/2011\/538.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17993796"
    },
    {
        "title": "Engineering and Software Engineering (2010) [pdf]",
        "score": 25,
        "link": "http:\/\/mcs.open.ac.uk\/mj665\/FoSEZurich2010.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17125383"
    },
    {
        "title": "Dthreads: Efficient Deterministic Multithreading (2011) [pdf]",
        "score": 25,
        "link": "http:\/\/people.cs.ksu.edu\/~danielwang\/Investigation\/System_Security\/dthreads-sosp11.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17756774"
    },
    {
        "title": "Hardware Masking, Revisited [pdf]",
        "score": 25,
        "link": "https:\/\/www.emsec.rub.de\/media\/crypto\/veroeffentlichungen\/2018\/04\/16\/PDN_Masking.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18154230"
    },
    {
        "title": "The State of the TclQuadcode compiler (2017) [pdf]",
        "score": 25,
        "link": "https:\/\/www.tcl.tk\/community\/tcl2017\/assets\/talk101\/Paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18179974"
    },
    {
        "title": "Multiple Linear Regression (2012) [pdf]",
        "score": 25,
        "link": "http:\/\/mezeylab.cb.bscb.cornell.edu\/labmembers\/documents\/supplement%205%20-%20multiple%20regression.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17787615"
    },
    {
        "title": "XDP: 1.5 years in production [pdf]",
        "score": 25,
        "link": "http:\/\/vger.kernel.org\/lpc_net2018_talks\/LPC_XDP_Shirokov_v2.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18493304"
    },
    {
        "title": "The Early History of Programming Languages (1976) [pdf]",
        "score": 25,
        "link": "http:\/\/bitsavers.trailing-edge.com\/pdf\/stanford\/cs_techReports\/STAN-CS-76-562_EarlyDevelPgmgLang_Aug76.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17735866"
    },
    {
        "title": "RaiBlocks: A Feeless Distributed Cryptocurrency Network [pdf]",
        "score": 25,
        "link": "https:\/\/raiblocks.net\/media\/RaiBlocks_Whitepaper__English.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16053048"
    },
    {
        "title": "How Bad Is Selfish Routing? (2001) [pdf]",
        "score": 24,
        "link": "http:\/\/theory.stanford.edu\/~tim\/papers\/routing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17741641"
    },
    {
        "title": "Things We Need to Know About Technological Change (1998) [pdf]",
        "score": 24,
        "link": "http:\/\/web.cs.ucdavis.edu\/~rogaway\/classes\/188\/materials\/postman.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17522319"
    },
    {
        "title": "Fast-Path Loop Unrolling of Non-Counted Loops [pdf]",
        "score": 24,
        "link": "http:\/\/ssw.jku.at\/General\/Staff\/Leopoldseder\/manlang2018-fast_path_unrolling_authorpreprint.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17643802"
    },
    {
        "title": "How to use 1000 registers (1979) [pdf]",
        "score": 24,
        "link": "http:\/\/caltechconf.library.caltech.edu\/200\/1\/RichardLSites.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18098589"
    },
    {
        "title": "HSN-1000 Nuclear Event Detector (2005) [pdf]",
        "score": 24,
        "link": "http:\/\/www.maxwell.com\/images\/documents\/hsn1000_rev3.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18532536"
    },
    {
        "title": "Speech Intellegibility in Naval Aircraft Radios (1972) [pdf]",
        "score": 24,
        "link": "http:\/\/www.dtic.mil\/dtic\/tr\/fulltext\/u2\/748202.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17534480"
    },
    {
        "title": "Realizability of Graphs (2008) [pdf]",
        "score": 24,
        "link": "http:\/\/faculty.bard.edu\/mbelk\/DiscreteMathDayTalk.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17956589"
    },
    {
        "title": "The Unreasonable Effectiveness of Data (2009) [pdf]",
        "score": 24,
        "link": "https:\/\/static.googleusercontent.com\/media\/research.google.com\/en\/\/pubs\/archive\/35179.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16096186"
    },
    {
        "title": "Good Ideas, Through the Looking Glass (2005) [pdf]",
        "score": 23,
        "link": "https:\/\/www.inf.ethz.ch\/personal\/wirth\/Articles\/GoodIdeas_origFig.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17331168"
    },
    {
        "title": "On-Chip Interconnection Architecture of the Tile Processor (2007) [pdf]",
        "score": 23,
        "link": "https:\/\/www.princeton.edu\/~wentzlaf\/documents\/Wentzlaff.2007.IEEE_Micro.Tilera.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17741972"
    },
    {
        "title": "Million Dollar Problems (2000) [pdf]",
        "score": 23,
        "link": "http:\/\/www.math.buffalo.edu\/~sww\/0papers\/million.buck.problems.mi.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18005183"
    },
    {
        "title": "Real world DNSSEC+DANE for secure inter-domain mail transport [pdf]",
        "score": 23,
        "link": "https:\/\/static.ptbl.co\/static\/attachments\/169319\/1520904692.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16617893"
    },
    {
        "title": "Fountain codes (2005) [pdf]",
        "score": 23,
        "link": "https:\/\/docs.switzernet.com\/people\/emin-gabrielyan\/060112-capillary-references\/ref\/MacKay05.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18385386"
    },
    {
        "title": "A Quick Reference to Airfield Standards [pdf]",
        "score": 23,
        "link": "https:\/\/www.faa.gov\/airports\/southern\/airport_safety\/part139_cert\/media\/aso-airfield-standards-quick-reference.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18492930"
    },
    {
        "title": "The SIGABA\/ECM II Cipher Machine: \u201cA Beautiful Idea\u201d (2015) [pdf]",
        "score": 23,
        "link": "https:\/\/www.nsa.gov\/about\/cryptologic-heritage\/historical-figures-publications\/publications\/assets\/files\/sigaba-ecm-ii\/The_SIGABA_ECM_Cipher_Machine_A_Beautiful_Idea3.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17549897"
    },
    {
        "title": "Final Report on the August 14, 2003 Blackout (2004) [pdf]",
        "score": 22,
        "link": "https:\/\/www.energy.gov\/sites\/prod\/files\/oeprod\/DocumentsandMedia\/BlackoutFinal-Web.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17168338"
    },
    {
        "title": "Neurology in Ancient Faces (2001) [pdf]",
        "score": 22,
        "link": "https:\/\/www.ncbi.nlm.nih.gov\/pmc\/articles\/PMC1737287\/pdf\/v070p00524.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16118387"
    },
    {
        "title": "Zipf\u2019s Law in Passwords (2017) [pdf]",
        "score": 22,
        "link": "http:\/\/wangdingg.weebly.com\/uploads\/2\/0\/3\/6\/20366987\/ieeetifs17_final.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18062130"
    },
    {
        "title": "Doppelg\u00e4nger Finder: Taking Stylometry to the Underground (2014) [pdf]",
        "score": 22,
        "link": "https:\/\/www1.icsi.berkeley.edu\/~sadia\/papers\/oakland2014-underground.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18328270"
    },
    {
        "title": "Hybrid Field-Effect Transistors Based on Cellulose Fiber Paper (2008) [pdf]",
        "score": 22,
        "link": "https:\/\/run.unl.pt\/bitstream\/10362\/3242\/1\/Fortunato_2008.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18520767"
    },
    {
        "title": "The Potentiometer Handbook (1975) [pdf]",
        "score": 22,
        "link": "https:\/\/www.bourns.com\/pdfs\/OnlinePotentiometerHandbook.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18391076"
    },
    {
        "title": "Strongly Typed Heterogeneous Collections (2004) [pdf]",
        "score": 22,
        "link": "http:\/\/okmij.org\/ftp\/Haskell\/HList-ext.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18004708"
    },
    {
        "title": "Hacking chemical plants for competition and extortion (2015) [pdf]",
        "score": 21,
        "link": "https:\/\/www.blackhat.com\/docs\/us-15\/materials\/us-15-Krotofil-Rocking-The-Pocket-Book-Hacking-Chemical-Plant-For-Competition-And-Extortion-wp.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18692902"
    },
    {
        "title": "Compiled and Vectorized Queries [pdf]",
        "score": 21,
        "link": "http:\/\/www.vldb.org\/pvldb\/vol11\/p2209-kersten.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18081477"
    },
    {
        "title": "The Effect of Zoning on Housing Prices \u2013 Research from Australia's Reserve Bank [pdf]",
        "score": 21,
        "link": "https:\/\/www.rba.gov.au\/publications\/rdp\/2018\/pdf\/rdp2018-03.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16571996"
    },
    {
        "title": "Debugging Distributed Systems With Why-Across-Time Provenance [pdf]",
        "score": 21,
        "link": "https:\/\/mwhittaker.github.io\/publications\/wat_SOCC18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18193921"
    },
    {
        "title": "Mathematics applied to dressmaking (1993) [pdf]",
        "score": 21,
        "link": "https:\/\/www.lms.ac.uk\/sites\/lms.ac.uk\/files\/1994%20Mathematics%20applied%20to%20dressmaking%20%28preprint%29.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18298586"
    },
    {
        "title": "The Psychology of Security (2008) [pdf]",
        "score": 21,
        "link": "https:\/\/www.schneier.com\/academic\/paperfiles\/paper-psychology-of-security.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17958560"
    },
    {
        "title": "The Postgres Rule Manager (1988) [pdf]",
        "score": 21,
        "link": "http:\/\/db.cs.berkeley.edu\/papers\/tse88-rulemgr.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17581880"
    },
    {
        "title": "Failure Rates in Introductory Programming (2007) [pdf]",
        "score": 21,
        "link": "http:\/\/users-cs.au.dk\/mic\/publications\/journal\/25--bulletin2007.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18186847"
    },
    {
        "title": "A Scalable, Commodity Data Center Network Architecture (2008) [pdf]",
        "score": 21,
        "link": "http:\/\/ccr.sigcomm.org\/online\/files\/p63-alfares.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17290388"
    },
    {
        "title": "Cache Modeling and Optimization Using Miniature Simulations [pdf]",
        "score": 20,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/atc17\/atc17-waldspurger.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18318628"
    },
    {
        "title": "Is the scientific paper fraudulent? (1964) [pdf]",
        "score": 20,
        "link": "http:\/\/blog.thegrandlocus.com\/static\/misc\/is_the_scientific_paper_fraudulent.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17624787"
    },
    {
        "title": "Five deep questions in computing (2008) [pdf]",
        "score": 20,
        "link": "http:\/\/www.cs.cmu.edu\/~wing\/publications\/Wing08.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17755605"
    },
    {
        "title": "Discerning the Out-Of-Order Advantage: Is It Speculation or Dynamism? (2013) [pdf]",
        "score": 20,
        "link": "http:\/\/zilles.cs.illinois.edu\/papers\/mcfarlin_asplos_2013.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17881132"
    },
    {
        "title": "Intentional Acoustic Interference Damages Availability and Integrity in HDDs [pdf]",
        "score": 20,
        "link": "https:\/\/spqr.eecs.umich.edu\/papers\/bolton-blue-note-IEEESSP-2018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17295595"
    },
    {
        "title": "Comprehending Ringads (2016) [pdf]",
        "score": 20,
        "link": "http:\/\/www.cs.ox.ac.uk\/jeremy.gibbons\/publications\/ringads.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17001478"
    },
    {
        "title": "A Computer Scientist\u2019s Guide to Cell Biology [pdf]",
        "score": 19,
        "link": "http:\/\/www.cs.cmu.edu\/~wcohen\/GuideToBiology-sampleChapter-release1.4.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18778499"
    },
    {
        "title": "Lunar Laser Ranging: a continuing legacy of the Apollo program (1994) [pdf]",
        "score": 19,
        "link": "https:\/\/www.hq.nasa.gov\/alsj\/LRRR-94-0193.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17780532"
    },
    {
        "title": "Understanding Reduced-Voltage Operation in Modern DRAM Devices [pdf]",
        "score": 19,
        "link": "http:\/\/www.pdl.cmu.edu\/PDL-FTP\/NVM\/17sigmetrics_voltron.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18307111"
    },
    {
        "title": "Better documentation \u2013 on the web and for LibreSSL [pdf]",
        "score": 19,
        "link": "https:\/\/www.openbsd.org\/papers\/eurobsdcon2018-mandoc.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18110033"
    },
    {
        "title": "Open-Source Bitstream Generation (2013) [pdf]",
        "score": 19,
        "link": "https:\/\/www.isi.edu\/sites\/default\/files\/users\/nsteiner\/soni-2013-bitstream-fccm13.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18488020"
    },
    {
        "title": "Cherry-Picking and the Scientific Method (2013) [pdf]",
        "score": 19,
        "link": "http:\/\/www.cs.cofc.edu\/~bowring\/classes\/csci%20362\/docs\/p32-neville-neil.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18492261"
    },
    {
        "title": "Construction of the Transreal Numbers and Algebraic Transfields [pdf]",
        "score": 18,
        "link": "http:\/\/www.iaeng.org\/IJAM\/issues_v46\/issue_1\/IJAM_46_1_03.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16730457"
    },
    {
        "title": "Crypko White Paper: Cryptocollectible Game Empowered by GANs [pdf]",
        "score": 18,
        "link": "https:\/\/crypko.ai\/static\/files\/crypko-whitepaper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16990347"
    },
    {
        "title": "Two curious integrals and a graphic proof (2014) [pdf]",
        "score": 18,
        "link": "http:\/\/schmid-werren.ch\/hanspeter\/publications\/2014elemath.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17883349"
    },
    {
        "title": "Xoodoo cookbook [pdf]",
        "score": 18,
        "link": "https:\/\/eprint.iacr.org\/2018\/767.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17844542"
    },
    {
        "title": "CastSan: efficient detection of bad C++ casts [pdf]",
        "score": 18,
        "link": "https:\/\/www.docdroid.net\/INWYBF7\/castsan-esorics18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17783317"
    },
    {
        "title": "Beastly Numbers (1996) [pdf]",
        "score": 17,
        "link": "https:\/\/people.eecs.berkeley.edu\/~wkahan\/tests\/numbeast.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17006041"
    },
    {
        "title": "Julia for R programmers [pdf]",
        "score": 17,
        "link": "https:\/\/www.stat.wisc.edu\/~bates\/JuliaForRProgrammers.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17723977"
    },
    {
        "title": "The case for writing papers in economics using faKe LaTeX [pdf]",
        "score": 17,
        "link": "http:\/\/www.farmdoc.illinois.edu\/irwin\/research\/The_Case_for_Fake_LaTeX_Body_Feb%202018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16592401"
    },
    {
        "title": "History of Combinatorial Generation (2004) [pdf]",
        "score": 17,
        "link": "http:\/\/www.antiquark.com\/blogimg\/fasc4b.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16395222"
    },
    {
        "title": "Scrapino \u2013 Self-sustainable robot from e-scrap using renewable energy [pdf]",
        "score": 17,
        "link": "https:\/\/www.sciencedirect.com\/science\/article\/pii\/S2405896318328593\/pdf?md5=ac7fae174710da0a5035026f88e0559b&pid=1-s2.0-S2405896318328593-main.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18687923"
    },
    {
        "title": "Attack Directories, Not Caches: Side-Channel Attacks in a Non-Inclusive World [pdf]",
        "score": 17,
        "link": "http:\/\/iacoma.cs.uiuc.edu\/iacoma-papers\/ssp19.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18407850"
    },
    {
        "title": "The Translucent File Service (1988) [pdf]",
        "score": 17,
        "link": "http:\/\/mcvoy.com\/lm\/papers\/SunOS.tfs.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17743933"
    },
    {
        "title": "Criminal Law 2.0 (2015) [pdf]",
        "score": 16,
        "link": "https:\/\/georgetownlawjournal.org\/assets\/kozinski-arcp-preface-9a990f08f3f006558eaa03ccc440d3078f5899b3426ec47aaedb89c606caeae7.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16616722"
    },
    {
        "title": "Map Projections \u2013 A Working Manual (1987) [pdf]",
        "score": 16,
        "link": "https:\/\/pubs.usgs.gov\/pp\/1395\/report.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18099029"
    },
    {
        "title": "VrankenFuzz \u2013 a multi-sensor, multi-generator mutational fuzz testing engine [pdf]",
        "score": 16,
        "link": "https:\/\/guidovranken.files.wordpress.com\/2018\/07\/vrankenfuzz.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17468377"
    },
    {
        "title": "Can moons have moons? [pdf]",
        "score": 16,
        "link": "https:\/\/arxiv.org\/pdf\/1810.03304.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18217646"
    },
    {
        "title": "Machine Learning on 2KB of RAM [pdf]",
        "score": 15,
        "link": "http:\/\/manikvarma.org\/pubs\/kumar17.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18231239"
    },
    {
        "title": "Quaternions and Reflections (1946) [pdf]",
        "score": 15,
        "link": "http:\/\/www.math.utah.edu\/~ptrapa\/math-library\/coxeter\/Coxeter-Quaternions-and-reflections-AMM-1946.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18525801"
    },
    {
        "title": "Physical Addressing on Real Hardware in Isabelle\/HOL [pdf]",
        "score": 15,
        "link": "https:\/\/people.inf.ethz.ch\/troscoe\/pubs\/achermann_itp_2018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18373896"
    },
    {
        "title": "Product Evaluation of the Zilog Z80-CTC (1979) [pdf]",
        "score": 15,
        "link": "http:\/\/smithsonianchips.si.edu\/ice\/OCR_ScanPE125\/PE125(10379-K).pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17739214"
    },
    {
        "title": "A Survey of Rollback-Recovery Protocols in Message-Passing Systems (2002) [pdf]",
        "score": 15,
        "link": "https:\/\/www.cs.utexas.edu\/~lorenzo\/papers\/SurveyFinal.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16886165"
    },
    {
        "title": "Examining Children\u2019s Online Privacy Protection Act compliance [pdf]",
        "score": 15,
        "link": "https:\/\/petsymposium.org\/2018\/files\/papers\/issue3\/popets-2018-0021.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16848148"
    },
    {
        "title": "The Complexity of Songs (1977) [pdf]",
        "score": 15,
        "link": "http:\/\/fivedots.coe.psu.ac.th\/Software.coe\/242-535_ADA\/Background\/Readings\/knuth_song_complexity.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18044603"
    },
    {
        "title": "Differentiable Programming for Image Processing and Deep Learning in Halide [pdf]",
        "score": 14,
        "link": "https:\/\/people.csail.mit.edu\/tzumao\/gradient_halide\/gradient_halide.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17929144"
    },
    {
        "title": "The Debasement Puzzle: an Essay on Medieval Monetary History (1997) [pdf]",
        "score": 14,
        "link": "https:\/\/www.minneapolisfed.org\/research\/qr\/qr2142.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18692170"
    },
    {
        "title": "An IPv6 Update [pdf]",
        "score": 14,
        "link": "https:\/\/conference.apnic.net\/46\/assets\/files\/APNC402\/An-IPv6-Update.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17957531"
    },
    {
        "title": "Revisiting a Summer Vacation: Digital Restoration and Typesetter Forensics [pdf]",
        "score": 14,
        "link": "http:\/\/www.eprg.org\/papers\/202paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16051520"
    },
    {
        "title": "C Standard Undefined Behavior vs. Wittgenstein [pdf]",
        "score": 14,
        "link": "http:\/\/www.yodaiken.com\/wp-content\/uploads\/2018\/05\/ub-1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17195710"
    },
    {
        "title": "NY Attorney General Report on Crytpocurrency Market Integrity",
        "score": 13,
        "link": "https:\/\/ag.ny.gov\/sites\/default\/files\/vmii_report.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18017922"
    },
    {
        "title": "Evolution of Multicellular Computing: Parallels with Multicellular Life (2009) [pdf]",
        "score": 13,
        "link": "http:\/\/www.evolutionofcomputing.org\/Birmingham09Seminar.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18654989"
    },
    {
        "title": "Enterprise Objects Framework Developer\u2019s Guide [pdf]",
        "score": 13,
        "link": "https:\/\/developer.apple.com\/library\/archive\/documentation\/LegacyTechnologies\/WebObjects\/WebObjects_4.0\/System\/Documentation\/Developer\/EnterpriseObjects\/Guide\/EOFDevGuide.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17591554"
    },
    {
        "title": "USPTO issues 10 millionth patent [pdf]",
        "score": 13,
        "link": "https:\/\/10millionpatents.uspto.gov\/docs\/patent10million.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17349939"
    },
    {
        "title": "The Keyhole Problem (2002) [pdf]",
        "score": 13,
        "link": "http:\/\/www.aristeia.com\/TKP\/draftPaper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18293263"
    },
    {
        "title": "Abel's Theorem in Problems and Solutions (2004) [pdf]",
        "score": 13,
        "link": "http:\/\/www.maths.ed.ac.uk\/~v1ranick\/papers\/abel.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17209635"
    },
    {
        "title": "Design of the Burroughs B1700 (1972) [pdf]",
        "score": 13,
        "link": "https:\/\/pdfs.semanticscholar.org\/cff6\/6b2eba20a7172c5db281e84600049e1e82fe.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17114482"
    },
    {
        "title": "The Difficulty of Faking Data (1999) [pdf]",
        "score": 13,
        "link": "http:\/\/www.kkuniyuk.com\/Math119FakingData.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17020226"
    },
    {
        "title": "A Brief History of Just-In-Time (2003) [pdf]",
        "score": 12,
        "link": "http:\/\/eecs.ucf.edu\/~dcm\/Teaching\/COT4810-Spring2011\/Literature\/JustInTimeCompilation.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18693500"
    },
    {
        "title": "The Cult of the Bound Variable: ICFP Programming Contest (2006) [pdf]",
        "score": 12,
        "link": "http:\/\/boundvariable.org\/press\/tr-06-163.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18708366"
    },
    {
        "title": "The Civic Labor of Online Moderators (2016) [pdf]",
        "score": 12,
        "link": "http:\/\/blogs.oii.ox.ac.uk\/ipp-conference\/sites\/ipp\/files\/documents\/JNM-The_Civic_Labor_of_Online_Moderators__Internet_Politics_Policy_.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18506746"
    },
    {
        "title": "Technical Specification for the Delivery of Television Programs to the BBC [pdf]",
        "score": 12,
        "link": "http:\/\/dpp-assets.s3.amazonaws.com\/wp-content\/uploads\/specs\/bbc\/TechnicalDeliveryStandardsBBCFile.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18204099"
    },
    {
        "title": "Tribute to Vladimir Arnold (2012) [pdf]",
        "score": 12,
        "link": "http:\/\/www.ams.org\/notices\/201203\/rtx120300378p.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16330925"
    },
    {
        "title": "Falcon Heavy Demonstration Mission (overview and timeline) [pdf]",
        "score": 12,
        "link": "http:\/\/www.spacex.com\/sites\/spacex\/files\/falconheavypresskit_v1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16317304"
    },
    {
        "title": "The missing link: explaining ELF static linking, semantically [pdf]",
        "score": 12,
        "link": "http:\/\/dominic-mulligan.co.uk\/wp-content\/uploads\/2011\/08\/oopsla-elf-linking-2016.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18713230"
    },
    {
        "title": "Response time in man-computer conversational transactions (1968) [pdf]",
        "score": 12,
        "link": "https:\/\/www.computer.org\/csdl\/proceedings\/afips\/1968\/5072\/00\/50720267.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16809846"
    },
    {
        "title": "Rigorous Benchmarking in Reasonable Time (2013) [pdf]",
        "score": 12,
        "link": "https:\/\/kar.kent.ac.uk\/33611\/7\/paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16843808"
    },
    {
        "title": "TxFS: Leveraging File-System Crash Consistency to Provide Transactions [pdf]",
        "score": 12,
        "link": "http:\/\/www.cs.utexas.edu\/%7Evijay\/papers\/atc18-txfs.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17807272"
    },
    {
        "title": "Networking Named Content (2009) [pdf]",
        "score": 12,
        "link": "https:\/\/conferences.sigcomm.org\/co-next\/2009\/papers\/Jacobson.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17933543"
    },
    {
        "title": "The grand challenges of \u201cScience Robotics\u201d [pdf]",
        "score": 11,
        "link": "http:\/\/www.nanoscience.gatech.edu\/paper\/2018\/18_SR_01.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17161642"
    },
    {
        "title": "What is the Monster? (2002) [pdf]",
        "score": 11,
        "link": "http:\/\/www.ams.org\/notices\/200209\/what-is.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18483929"
    },
    {
        "title": "The On-Line Encyclopedia of Integer Sequences [pdf]",
        "score": 11,
        "link": "https:\/\/www.ams.org\/journals\/notices\/201809\/rnoti-p1062.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18015493"
    },
    {
        "title": "The Most Influential Paper Gerard Salton Never Wrote (2004) [pdf]",
        "score": 11,
        "link": "https:\/\/www.ideals.illinois.edu\/bitstream\/handle\/2142\/1697\/Dubin748764.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18201597"
    },
    {
        "title": "Applying auction mechanisms to meeting scheduling (2010) [pdf]",
        "score": 11,
        "link": "https:\/\/www.seas.harvard.edu\/sites\/default\/files\/files\/archived\/Xu.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17390105"
    },
    {
        "title": "An Introduction to Information Security [pdf]",
        "score": 11,
        "link": "https:\/\/nvlpubs.nist.gov\/nistpubs\/SpecialPublications\/NIST.SP.800-12r1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16458577"
    },
    {
        "title": "Categorifying cardinal arithmetic [pdf]",
        "score": 11,
        "link": "http:\/\/www.math.jhu.edu\/~eriehl\/arithmetic.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17702228"
    },
    {
        "title": "*ANY* Android manufacturer monitors users without consent [pdf]",
        "score": 11,
        "link": "http:\/\/eprints.networks.imdea.org\/1744\/1\/trackers.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18635062"
    },
    {
        "title": "Legal Curiosities: Fact or Fable? (2015) [pdf]",
        "score": 10,
        "link": "http:\/\/www.lawcom.gov.uk\/app\/uploads\/2015\/03\/Legal_Oddities.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18654438"
    },
    {
        "title": "How We Cracked the Code Book Ciphers (2000) [pdf]",
        "score": 10,
        "link": "http:\/\/codebook.org\/codebook_solution.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18692477"
    },
    {
        "title": "Alfred Stieglitz's Lantern Slides: History, Technique and Analysis (2015) [pdf]",
        "score": 10,
        "link": "https:\/\/www.researchgate.net\/profile\/Rosina_Herrera_Garrido\/publication\/266251396_Alfred_Stieglitz%27s_Lantern_Slides_History_Technique_and_Technical_Analysis\/links\/54f81f290cf2ccffe9dcd349\/Alfred-Stieglitzs-Lantern-Slides-History-Technique-and-Technical-Analysis.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17905829"
    },
    {
        "title": "Remember the Vasa [pdf]",
        "score": 10,
        "link": "http:\/\/open-std.org\/JTC1\/SC22\/WG21\/docs\/papers\/2018\/p0977r0.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17172057"
    },
    {
        "title": "Design and Evaluation of a Continuous Consistency Model for Replicated Services [pdf]",
        "score": 10,
        "link": "https:\/\/www.usenix.org\/legacy\/event\/osdi00\/full_papers\/yuvahdat\/yuvahdat.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16831825"
    },
    {
        "title": "Taming Performance Variability [pdf]",
        "score": 10,
        "link": "https:\/\/www.usenix.org\/system\/files\/osdi18-maricq.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18169385"
    },
    {
        "title": "GLL Parsing with Flexible Combinators [pdf]",
        "score": 10,
        "link": "https:\/\/pure.royalholloway.ac.uk\/portal\/files\/31169565\/paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18399899"
    },
    {
        "title": "Representing Control in the Presence of One-Shot Continuations (1996) [pdf]",
        "score": 10,
        "link": "https:\/\/www.cs.indiana.edu\/~dyb\/pubs\/call1cc.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16960740"
    },
    {
        "title": "Grand Pwning Unit: Accelerating Microarchitectural Attacks with the GPU [pdf]",
        "score": 10,
        "link": "https:\/\/www.vusec.net\/wp-content\/uploads\/2018\/05\/glitch.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16984868"
    },
    {
        "title": "Privacy by Design (2010) [pdf]",
        "score": 10,
        "link": "https:\/\/link.springer.com\/content\/pdf\/10.1007%2Fs12394-010-0055-x.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16262824"
    },
    {
        "title": "Status of collectively bargained benefits [pdf]",
        "score": 9,
        "link": "http:\/\/www.milliman.com\/uploadedFiles\/insight\/2018\/status-collectively-bargained-benefits.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17741249"
    },
    {
        "title": "The errors, insights and lessons of famous AI predictions (2014) [pdf]",
        "score": 9,
        "link": "http:\/\/www.fhi.ox.ac.uk\/wp-content\/uploads\/FAIC.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17953587"
    },
    {
        "title": "Politics in the Facebook Era: Evidence from the 2016 US Presidential Elections [pdf]",
        "score": 9,
        "link": "https:\/\/warwick.ac.uk\/fac\/soc\/economics\/research\/centres\/cage\/manage\/publications\/389-2018_redoano.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18472189"
    },
    {
        "title": "A Minimal ZZStructure Navigator Using a ZigZag-Style Interface (2013) [pdf]",
        "score": 9,
        "link": "http:\/\/www.lord-enki.net\/ZigZagProject.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17708111"
    },
    {
        "title": "Rewrite Combinators in Haskell [pdf]",
        "score": 9,
        "link": "http:\/\/dev.stephendiehl.com\/rewrite.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18085353"
    },
    {
        "title": "Mata Hari with a Clockwork Eye, Alligators in the Sewer (1963) [pdf]",
        "score": 9,
        "link": "http:\/\/graphics8.nytimes.com\/packages\/pdf\/books\/Pynchon_V.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16782360"
    },
    {
        "title": "Facilitation Tools for Meetings and Workshops (2013) [pdf]",
        "score": 8,
        "link": "https:\/\/seedsforchange.org.uk\/tools.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18146906"
    },
    {
        "title": "The regress argument against Cartesian skepticism (2012) [pdf]",
        "score": 8,
        "link": "http:\/\/individual.utoronto.ca\/jmwilson\/Wilson-The-Regress-Argument-Against-Cartesian-Skepticism.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17992102"
    },
    {
        "title": "Resource management: Linux kernel Namespaces and  cgroups (2013) [pdf]",
        "score": 8,
        "link": "http:\/\/www.haifux.org\/lectures\/299\/netLec7.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18768992"
    },
    {
        "title": "Counter Culture: Towards a History of Greek Numeracy (2002) [pdf]",
        "score": 8,
        "link": "http:\/\/worrydream.com\/refs\/Netz%20-%20Counter%20Culture%20-%20Towards%20a%20History%20of%20Greek%20Numeracy.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18554695"
    },
    {
        "title": "Collapsing a Reflective Tower (2016) [pdf]",
        "score": 8,
        "link": "http:\/\/lampwww.epfl.ch\/~amin\/doc\/lms-black.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18751084"
    },
    {
        "title": "AI and International Trade [pdf]",
        "score": 8,
        "link": "http:\/\/www.nber.org\/papers\/w24254.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16316635"
    },
    {
        "title": "Making \u201cPush on Green\u201d a Reality (2014) [pdf]",
        "score": 8,
        "link": "https:\/\/www.usenix.org\/system\/files\/login\/articles\/login_1410_05_klein.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16956505"
    },
    {
        "title": "Land Surveying in Ancient Egypt [pdf]",
        "score": 8,
        "link": "https:\/\/www.fig.net\/resources\/proceedings\/fig_proceedings\/cairo\/papers\/wshs_02\/wshs02_02_paulson.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17215332"
    },
    {
        "title": "Ramanujan graphs in cryptography [pdf]",
        "score": 7,
        "link": "https:\/\/eprint.iacr.org\/2018\/593.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17316494"
    },
    {
        "title": "Precise and Scalable Detection of Double-Fetch Bugs in OS Kernels [pdf]",
        "score": 7,
        "link": "https:\/\/www-users.cs.umn.edu\/~kjlu\/papers\/deadline.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18158229"
    },
    {
        "title": "WireGuard: Next Generation Kernel Network Tunnel [pdf]",
        "score": 7,
        "link": "https:\/\/www.wireguard.com\/papers\/wireguard.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17690598"
    },
    {
        "title": "A New Refutation of Time (1947) [pdf]",
        "score": 7,
        "link": "https:\/\/www.gwern.net\/docs\/borges\/1947-borges-anewrefutationoftime.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16483740"
    },
    {
        "title": "Method and apparatus for controlling electric currents (1925) [pdf]",
        "score": 7,
        "link": "https:\/\/patentimages.storage.googleapis.com\/fa\/5d\/33\/ed2769d48fac4d\/US1745175.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16473456"
    },
    {
        "title": "Physicians give patients an average of 11 seconds before cutting them off [pdf]",
        "score": 7,
        "link": "https:\/\/link.springer.com\/content\/pdf\/10.1007%2Fs11606-018-4540-5.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17582008"
    },
    {
        "title": "Kodak Professional digital camera systems 1987-2004 [pdf]",
        "score": 7,
        "link": "http:\/\/www.nikonweb.com\/files\/DCS_Story.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17606171"
    },
    {
        "title": "Hardware Multithreaded Transactions [pdf]",
        "score": 7,
        "link": "http:\/\/liberty.princeton.edu\/Publications\/asplos18_hmtx.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17860871"
    },
    {
        "title": "Life Beyond Distributed Transactions: An Apostate\u2019s Opinion [pdf]",
        "score": 7,
        "link": "http:\/\/adrianmarriott.net\/logosroot\/papers\/LifeBeyondTxns.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16113344"
    },
    {
        "title": "A User-Centred Approach to Functions in Excel (2003)",
        "score": 7,
        "link": "https:\/\/www.microsoft.com\/en-us\/research\/wp-content\/uploads\/2016\/07\/excel.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16562300"
    },
    {
        "title": "The Flatness of U.S. States [pdf]",
        "score": 6,
        "link": "http:\/\/www.disruptivegeo.com\/blog\/wp-content\/uploads\/2014\/08\/FlatMap_GeographicalReview_DobsonCampbell_2013Nov.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17433904"
    },
    {
        "title": "Throwhammer: Rowhammer Attacks Over the Network and Defenses [pdf]",
        "score": 6,
        "link": "https:\/\/www.cs.vu.nl\/~herbertb\/download\/papers\/throwhammer_atc18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17038628"
    },
    {
        "title": "Mozilla grant for machine learning projects [pdf]",
        "score": 6,
        "link": "https:\/\/blog.mozilla.org\/wp-content\/uploads\/2018\/06\/2018-Mozilla-Awards-Application-Guide_-Creative-Media-Awards.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17336411"
    },
    {
        "title": "The C Object System [pdf]",
        "score": 6,
        "link": "http:\/\/ldeniau.web.cern.ch\/ldeniau\/html\/cos-dls09-draft.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18775826"
    },
    {
        "title": "Experience with Viruses on Unix systems (1989) [pdf]",
        "score": 6,
        "link": "https:\/\/www.usenix.org\/legacy\/publications\/compsystems\/1989\/spr_duff.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17036297"
    },
    {
        "title": "On Library Correctness Under Weak Memory Consistency [pdf]",
        "score": 6,
        "link": "http:\/\/www.soundandcomplete.org\/papers\/Libraries-POPL-2019.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18356196"
    },
    {
        "title": "Graph algorithms via SuiteSparse:GraphBLAS: triangle counting and K-truss (2018) [pdf]",
        "score": 6,
        "link": "http:\/\/faculty.cse.tamu.edu\/davis\/GraphBLAS\/HPEC18\/Davis_HPEC18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18088111"
    },
    {
        "title": "Empirical Studies of Programming Knowledge (1984) [pdf]",
        "score": 6,
        "link": "https:\/\/www.ics.uci.edu\/~redmiles\/inf233-FQ07\/oldpapers\/SollowayEhrlich.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17950597"
    },
    {
        "title": "Higher-order truths about Chmess (2006) [pdf]",
        "score": 6,
        "link": "https:\/\/ase.tufts.edu\/cogstud\/dennett\/papers\/chmess.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17947238"
    },
    {
        "title": "Robert Pirsig on The Scientific Method (1974) [pdf]",
        "score": 6,
        "link": "https:\/\/kkh.ltrr.arizona.edu\/kkh\/natsgc\/PDFs-2013\/Robert-Pirsig-On-Scientific-Method.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18415687"
    },
    {
        "title": "The Mythical Matched Modules (2009) [pdf]",
        "score": 6,
        "link": "https:\/\/www.cl.cam.ac.uk\/research\/srg\/netos\/papers\/2009-kell2009mythical.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18634017"
    },
    {
        "title": "It Takes $4.2M Net Worth to Be Considered Wealthy in Silicon Valley [pdf]",
        "score": 5,
        "link": "https:\/\/aboutschwab.com\/images\/uploads\/inline\/Charles-Schwab-Modern-Wealth-Index-Bay-Area-Press-Release.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17175091"
    },
    {
        "title": "Interviews with John Carmack [~1997-2008] [pdf]",
        "score": 5,
        "link": "http:\/\/fabiensanglard.net\/fd_proxy\/doom3\/pdfs\/johnc-interviews.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17939673"
    },
    {
        "title": "Forensic Analysis and Anonymisation of Printed Documents [pdf]",
        "score": 5,
        "link": "http:\/\/delivery.acm.org\/10.1145\/3210000\/3206019\/p127-richter.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17405586"
    },
    {
        "title": "An Architecture for  Analysis [pdf]",
        "score": 5,
        "link": "https:\/\/www.cs.ucsb.edu\/~jmcmahan\/research\/top_picks_18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18086159"
    },
    {
        "title": "The Dangers of Key Reuse: Practical Attacks on IPsec IKE [pdf]",
        "score": 5,
        "link": "https:\/\/www.ei.rub.de\/media\/nds\/veroeffentlichungen\/2018\/08\/13\/sec18-felsch.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17760502"
    },
    {
        "title": "Computer Vision for autonomous navigation(1988) [pdf]",
        "score": 5,
        "link": "https:\/\/www.ri.cmu.edu\/pub_files\/pub3\/hebert_martial_1988_3\/hebert_martial_1988_3.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17538949"
    },
    {
        "title": "SPIRAL: Extreme Performance Portability [pdf]",
        "score": 5,
        "link": "http:\/\/users.ece.cmu.edu\/~franzf\/papers\/08510983_Spiral_IEEE_Final.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18468065"
    },
    {
        "title": "Zener diodes have coupled quantum noise that travels at c [pdf]",
        "score": 5,
        "link": "http:\/\/vixra.org\/pdf\/1603.0389v2.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18181898"
    },
    {
        "title": "Loop Recognition in C++\/Java\/Go\/Scala (2011) [pdf]",
        "score": 5,
        "link": "https:\/\/days2011.scala-lang.org\/sites\/days2011\/files\/ws3-1-Hundt.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17680790"
    },
    {
        "title": "Teasing, Gossip, and Local Names on Rapanui (1979) [pdf]",
        "score": 5,
        "link": "https:\/\/scholarspace.manoa.hawaii.edu\/bitstream\/10125\/19211\/1\/AP-v22n1-41-60.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18298741"
    },
    {
        "title": "Reconciling High-Level Optimizations\/Low-Level Code with Twin Memory Allocation [pdf]",
        "score": 5,
        "link": "http:\/\/sf.snu.ac.kr\/publications\/llvmtwin.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17463850"
    },
    {
        "title": "Documented Global Lightning Fatalities [pdf]",
        "score": 4,
        "link": "https:\/\/my.vaisala.net\/Vaisala%20Documents\/Scientific%20papers\/2016%20ILDC%20ILMC\/Ron%20Holle.%20Number%20of%20Documented%20Global%20Lightning%20Fatalities.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17195459"
    },
    {
        "title": "Resistance to the Use of Anesthesia in the Mid-19th Century (2005) [pdf]",
        "score": 4,
        "link": "https:\/\/www.docdroid.net\/V0s9uDp\/meyer2015.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17805757"
    },
    {
        "title": "The modality of mortality in domain names: an in-depth study of domain lifetimes [pdf]",
        "score": 4,
        "link": "https:\/\/www.farsightsecurity.com\/assets\/media\/download\/VB2018-study.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18607150"
    },
    {
        "title": "Scientific Uses of the MANIAC (1986) [pdf]",
        "score": 4,
        "link": "https:\/\/dasher.wustl.edu\/chem430\/reading\/jstatphys-43-731-86.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17535138"
    },
    {
        "title": "Frieze Groups (1996) [pdf]",
        "score": 4,
        "link": "http:\/\/www.glassner.com\/wp-content\/uploads\/2014\/04\/CG-CGA-PDF-96-05-Frieze-Groups-May96.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16791452"
    },
    {
        "title": "Fast Programmable Match-Action Processing in Hardware for SDN (2013) [pdf]",
        "score": 4,
        "link": "http:\/\/yuba.stanford.edu\/~grg\/docs\/sdn-chip-sigcomm-2013.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17497395"
    },
    {
        "title": "Ivan Sutherland: Technology and Courage (1996) [pdf]",
        "score": 3,
        "link": "http:\/\/cseweb.ucsd.edu\/~wgg\/smli_ps-1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16918796"
    },
    {
        "title": "Simon Browne: the soul-murdered theologian (1996) [pdf]",
        "score": 3,
        "link": "https:\/\/www.gwern.net\/docs\/psychology\/1996-berman.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16355887"
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdG9yc1BpY2tzQ29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVkaXRvcnNQaWNrc0NvbnRlbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixpRUFBNEQ7QUFDNUQsOERBQXFDO0FBQ3JDLG1FQUEyQztBQUUzQyxNQUFNLE1BQU07Q0FHWDtBQUVELE1BQWEsbUJBQW9CLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRXBFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXZDLENBQUM7SUFFTSxNQUFNO1FBRVQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRVosS0FBSyxNQUFNLEtBQUssSUFBSSxPQUFPLEVBQUU7WUFDekIsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNsQixLQUFLLENBQUMsUUFBUSxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuRDtRQUVELE9BQU8sQ0FDUCxvQkFBQyxxQkFBVSxJQUNQLElBQUksRUFBRSxPQUFPLEVBQ2IsT0FBTyxFQUNIO2dCQUNJO29CQUNJLE1BQU0sRUFBRSxLQUFLO29CQUNiLFFBQVEsRUFBRSxLQUFLO29CQUNmLFFBQVEsRUFBRSxFQUFFO29CQUNaLEtBQUssRUFBRTt3QkFDSCxTQUFTLEVBQUUsTUFBTTt3QkFDakIsWUFBWSxFQUFFLE1BQU07d0JBQ3BCLFVBQVUsRUFBRSxNQUFNO3dCQUNsQixTQUFTLEVBQUUsT0FBTztxQkFDckI7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksTUFBTSxFQUFFLE9BQU87b0JBQ2YsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLEtBQUssRUFBRTt3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LCtFQUErRTtRQUN2RixjQUFjLEVBQUUsa0RBQWtEO0tBQ3JFO0lBQ0Q7UUFDSSxPQUFPLEVBQUUsNENBQTRDO1FBQ3JELE9BQU8sRUFBRSxDQUFDO1FBQ1YsTUFBTSxFQUFFLHVFQUF1RTtRQUMvRSxjQUFjLEVBQUUsa0RBQWtEO0tBQ3JFO0lBQ0Q7UUFDSSxPQUFPLEVBQUUsNEJBQTRCO1FBQ3JDLE9BQU8sRUFBRSxDQUFDO1FBQ1YsTUFBTSxFQUFFLG9HQUFvRztRQUM1RyxjQUFjLEVBQUUsa0RBQWtEO0tBQ3JFO0lBQ0Q7UUFDSSxPQUFPLEVBQUUsNEVBQTRFO1FBQ3JGLE9BQU8sRUFBRSxDQUFDO1FBQ1YsTUFBTSxFQUFFLG1FQUFtRTtRQUMzRSxjQUFjLEVBQUUsa0RBQWtEO0tBQ3JFO0lBQ0Q7UUFDSSxPQUFPLEVBQUUsc0RBQXNEO1FBQy9ELE9BQU8sRUFBRSxDQUFDO1FBQ1YsTUFBTSxFQUFFLCtDQUErQztRQUN2RCxjQUFjLEVBQUUsa0RBQWtEO0tBQ3JFO0lBQ0Q7UUFDSSxPQUFPLEVBQUUseURBQXlEO1FBQ2xFLE9BQU8sRUFBRSxDQUFDO1FBQ1YsTUFBTSxFQUFFLDREQUE0RDtRQUNwRSxjQUFjLEVBQUUsa0RBQWtEO0tBQ3JFO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IFJlYWN0VGFibGUgZnJvbSAncmVhY3QtdGFibGUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuXG5jbGFzcyBTdHlsZXMge1xuXG5cbn1cblxuZXhwb3J0IGNsYXNzIEVkaXRvcnNQaWNrc0NvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbkFkZCA9IHRoaXMub25BZGQuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IGlkeCA9IDE7XG5cbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICBlbnRyeS5pZHggPSBpZHgrKztcbiAgICAgICAgICAgIGVudHJ5LmRvd25sb2FkID0gRmlsZVBhdGhzLmJhc2VuYW1lKGVudHJ5LmxpbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0VGFibGVcbiAgICAgICAgICAgIGRhdGE9e2VudHJpZXN9XG4gICAgICAgICAgICBjb2x1bW5zPXtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlcjogJ2lkeCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NvcjogJ2lkeCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyOiAnVGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3I6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJ2F1dG8nXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlcjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NvcjogJ2xpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIENlbGw6IChyb3c6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cnk6IEVudHJ5ID0gcm93Lm9yaWdpbmFsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkFkZChlbnRyeS5saW5rISl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCd9fT48L2k+IEFkZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgXX1cblxuICAgICAgICAgICAgZGVmYXVsdFBhZ2VTaXplPXs1MH1cbiAgICAgICAgICAgIG5vRGF0YVRleHQ9XCJObyBkYXRhIGF2YWlsYWJsZS5cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRTb3J0ZWQ9e1tcbiAgICAgICAgICAgIC8vICAgICB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGlkOiBcImlkeFwiLFxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIF19XG4gICAgICAgICAgICAvLyBzb3J0ZWQ9e1t7XG4gICAgICAgICAgICAvLyAgICAgaWQ6ICdhZGRlZCcsXG4gICAgICAgICAgICAvLyAgICAgZGVzYzogdHJ1ZVxuICAgICAgICAgICAgLy8gfV19XG4gICAgICAgICAgICBnZXRUclByb3BzPXsoc3RhdGU6IGFueSwgcm93SW5mbzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrOiAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCByZXBvQW5ub3RhdGlvbiA9IHJvd0luZm8ub3JpZ2luYWwgYXMgUmVwb0Fubm90YXRpb247XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm9uU2VsZWN0ZWQocm93SW5mby52aWV3SW5kZXggYXMgbnVtYmVyLCByZXBvQW5ub3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiByb3dJbmZvICYmIHJvd0luZm8udmlld0luZGV4ID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkID8gJyMwMGFmZWMnIDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiByb3dJbmZvICYmIHJvd0luZm8udmlld0luZGV4ID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkID8gJ3doaXRlJyA6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZ2V0VGRQcm9wcz17KHN0YXRlOiBhbnksIHJvd0luZm86IGFueSwgY29sdW1uOiBhbnksIGluc3RhbmNlOiBhbnkpID0+IHtcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2luZ2xlQ2xpY2tDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEgc2luZ2xlQ2xpY2tDb2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s6IChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub29wXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuXG4gICAgICAgICAgICB9fVxuXG4gICAgICAgIC8+KTtcblxuXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQWRkKGhyZWY6IHN0cmluZykge1xuXG4gICAgICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIEZpbGVQYXRocy5iYXNlbmFtZShocmVmKSk7XG4gICAgICAgIGFuY2hvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcbiAgICAgICAgYW5jaG9yLmNsaWNrKCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhbmNob3IpO1xuXG4gICAgfVxuXG59XG5cblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5cbmludGVyZmFjZSBFbnRyeSB7XG5cbiAgICB0aXRsZTogc3RyaW5nO1xuXG4gICAgc2NvcmU6IG51bWJlcjtcblxuICAgIGxpbms6IHN0cmluZztcblxuICAgIGNvbW1lbnRzTGluazogc3RyaW5nO1xuXG4gICAgLy8gdGhlIGRvd25sb2FkIGF0dHJpYnV0ZSBmb3IgdGhlIGZpbGVuYW1lIHRvIHVzZSBhbmQgYWxzbyB0byB0cmlnZ2VyXG4gICAgLy8gZG93bmxvYWQgbm90IGEgbmF2aWdhdGVcblxuICAgIGRvd25sb2FkPzogc3RyaW5nO1xuXG4gICAgaWR4PzogbnVtYmVyO1xuXG59XG5cbmNvbnN0IGVudHJpZXM6IEVudHJ5W10gPSBbXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTm9yd2VnaWFuIENvbnN1bWVyIENvdW5jaWwgcmVwb3J0IG9uIGhvdyB0ZWNoIGNvbXBhbmllcyB1c2UgZGFyayBwYXR0ZXJucyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY2MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZmlsLmZvcmJydWtlcnJhZGV0Lm5vXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE4XFwvMDZcXC8yMDE4LTA2LTI3LWRlY2VpdmVkLWJ5LWRlc2lnbi1maW5hbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0MDYxODZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXNzZW1ibHkgTGFuZ3VhZ2UgZm9yIEJlZ2lubmVycyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU5MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwveXVyaWNoZXYuY29tXFwvd3JpdGluZ3NcXC9BTDRCLUVOLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU0OTA1MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgUGVyaW9kaWMgVGFibGUgb2YgRGF0YSBTdHJ1Y3R1cmVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTM0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zdHJhdG9zLnNlYXMuaGFydmFyZC5lZHVcXC9maWxlc1xcL3N0cmF0b3NcXC9maWxlc1xcL3BlcmlvZGljdGFibGVkYXRhc3RydWN0dXJlcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzMTQ1NTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcGV0aXRpdmUgUHJvZ3JhbW1lcidzIEhhbmRib29rICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUxNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY3Nlcy5maVxcL2Jvb2sucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTUyMjIyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRFRiBDT04gcmVwb3J0IG9uIHZ1bG5lcmFiaWxpdGllcyBpbiBVUyBlbGVjdGlvbiBpbmZyYXN0cnVjdHVyZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUwOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZGVmY29uLm9yZ1xcL2ltYWdlc1xcL2RlZmNvbi0yNlxcL0RFRiUyMENPTiUyMDI2JTIwdm90aW5nJTIwdmlsbGFnZSUyMHJlcG9ydC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxMTIxNzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT3JpZ2luYWwgU291cmNlIGNvZGUgZm9yIHRoZSBGdXJieSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ4MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuc2VhbnJpZGRsZS5jb21cXC9mdXJieXNvdXJjZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NTE1OTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUHJvZ3JhbW1pbmcgUGFyYWRpZ21zIGZvciBEdW1taWVzOiBXaGF0IEV2ZXJ5IFByb2dyYW1tZXIgU2hvdWxkIEtub3cgKDIwMDkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDM5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuaW5mby51Y2wuYWMuYmVcXC9+cHZyXFwvVmFuUm95Q2hhcHRlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzODE2NDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2VsZWN0ZWQgRXNzYXlzIG9mIFJpY2hhcmQgTS4gU3RhbGxtYW4gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5nbnUub3JnXFwvcGhpbG9zb3BoeVxcL2ZzZnNcXC9ybXMtZXNzYXlzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjkyNzE1NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgU2l0ZSBSZWxpYWJpbGl0eSBXb3JrYm9vazogUHJhY3RpY2FsIFdheXMgdG8gSW1wbGVtZW50IFNSRSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM1MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc2VydmljZXMuZ29vZ2xlLmNvbVxcL2ZoXFwvZmlsZXNcXC9taXNjXFwvdGhlLXNpdGUtcmVsaWFiaWxpdHktd29ya2Jvb2stbmV4dDE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzYxNDkwN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbnRlbCBBbmFseXNpcyBvZiBTcGVjdWxhdGl2ZSBFeGVjdXRpb24gU2lkZSBDaGFubmVscyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM0NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3c3Jvb20uaW50ZWwuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC9zaXRlc1xcLzExXFwvMjAxOFxcLzAxXFwvSW50ZWwtQW5hbHlzaXMtb2YtU3BlY3VsYXRpdmUtRXhlY3V0aW9uLVNpZGUtQ2hhbm5lbHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDc5OTEwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlZpcGFzc2FuYSBmb3IgSGFja2VycyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM0NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZ2l0aHViLmNvbVxcL2Rlb2JhbGRcXC92aXBhc3NhbmEtZm9yLWhhY2tlcnNcXC9ibG9iXFwvbWFzdGVyXFwvdmlwYXNzYW5hLWZvci1oYWNrZXJzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjg0MjA0MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXcml0aW5nIE5ldHdvcmsgRHJpdmVycyBpbiBSdXN0IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzI2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubmV0LmluLnR1bS5kZVxcL2ZpbGVhZG1pblxcL2JpYnRleFxcL3B1YmxpY2F0aW9uc1xcL3RoZXNlc1xcLzIwMTgtaXh5LXJ1c3QucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDA1NTE1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5TQSBwb3N0ZXJzIGZyb20gdGhlIDUwcyBhbmQgNjBzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzIyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5nb3Zlcm5tZW50YXR0aWMub3JnXFwvMjhkb2NzXFwvTlNBc2VjdXJpdHlQb3N0ZXJzXzE5NTBzLTYwcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyMjI4MjdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiaU9TIDExIFNlY3VyaXR5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzIxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYXBwbGUuY29tXFwvYnVzaW5lc3NcXC9kb2NzXFwvaU9TX1NlY3VyaXR5X0d1aWRlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjE0MDQxOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb2duaXRpdmUgRGlzdG9ydGlvbnMgb2YgUGVvcGxlIFdobyBHZXQgU3R1ZmYgRG9uZSAoMjAxMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMTgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BkZnMuc2VtYW50aWNzY2hvbGFyLm9yZ1xcL3ByZXNlbnRhdGlvblxcLzFhNTlcXC83YTljYThiMDNkODZhZTlhMmY4NmRkOTBlN2JiZmY0ODFmYWIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTMyMzYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFwcGxlIFQyIFNlY3VyaXR5IENoaXA6IFNlY3VyaXR5IE92ZXJ2aWV3IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzE3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYXBwbGUuY29tXFwvbWFjXFwvZG9jc1xcL0FwcGxlX1QyX1NlY3VyaXR5X0NoaXBfT3ZlcnZpZXcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzM3ODI1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlViZXIgU2VsZi1Ecml2aW5nIENhciBUaGF0IFN0cnVjayBQZWRlc3RyaWFuIFdhc25cXHUyMDE5dCBTZXQgdG8gU3RvcCBpbiBhbiBFbWVyZ2VuY3lcIixcbiAgICAgICAgXCJzY29yZVwiOiAzMTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5udHNiLmdvdlxcL2ludmVzdGlnYXRpb25zXFwvQWNjaWRlbnRSZXBvcnRzXFwvUmVwb3J0c1xcL0hXWTE4TUgwMTAtcHJlbGltLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE0NDE2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQXdrIFByb2dyYW1taW5nIExhbmd1YWdlICgxOTg4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMxNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvaWE4MDIzMDkudXMuYXJjaGl2ZS5vcmdcXC8yNVxcL2l0ZW1zXFwvcGRmeS1NZ04wSDFqb0lvRFZvSUM3XFwvVGhlX0FXS19Qcm9ncmFtbWluZ19MYW5ndWFnZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxNDA5MzRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlICQyNUIgZWlnZW52ZWN0b3IgKDIwMDYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzExLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cucm9zZS1odWxtYW4uZWR1XFwvfmJyeWFuXFwvZ29vZ2xlRmluYWxWZXJzaW9uRml4ZWQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDkxNjQ2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRlYWNoIFlvdXJzZWxmIExvZ2ljOiBBIFN0dWR5IEd1aWRlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzA3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubG9naWNtYXR0ZXJzLm5ldFxcL3Jlc291cmNlc1xcL3BkZnNcXC9UZWFjaFlvdXJzZWxmTG9naWMyMDE3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODc1Nzk3MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIEM4OSBjb21waWxlciB0aGF0IHByb2R1Y2VzIGV4ZWN1dGFibGVzIHRoYXQgYXJlIGFsc28gdmFsaWQgQVNDSUkgdGV4dCBmaWxlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI5NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY3MuY211LmVkdVxcL350b203XFwvYWJjXFwvcGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzEyMzE3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNvZnR3YXJlLURlZmluZWQgUmFkaW8gZm9yIEVuZ2luZWVycyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI5MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuYW5hbG9nLmNvbVxcL21lZGlhXFwvZW5cXC90cmFpbmluZy1zZW1pbmFyc1xcL2Rlc2lnbi1oYW5kYm9va3NcXC9Tb2Z0d2FyZS1EZWZpbmVkLVJhZGlvLWZvci1FbmdpbmVlcnMtMjAxOFxcL1NEUjRFbmdpbmVlcnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Mzk5NTU0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5vdGVzIG9uIERpc2NyZXRlIE1hdGhlbWF0aWNzICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI4NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY3MueWFsZS5lZHVcXC9ob21lc1xcL2FzcG5lc1xcL2NsYXNzZXNcXC8yMDJcXC9ub3Rlcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczOTE1ODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2V0IFRoZW9yeSBhbmQgQWxnZWJyYSBpbiBDUzogSW50cm9kdWN0aW9uIHRvIE1hdGhlbWF0aWNhbCBNb2RlbGluZyAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyODEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BkZnMuc2VtYW50aWNzY2hvbGFyLm9yZ1xcL2QxMDZcXC82YjZkZTYwMWMxZDdkNWFmMjVhZjNmNzA5MWJjN2FkM2FkNTEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODQwNzE3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRlc3RpbW9ueSBvZiBNYXJrIFp1Y2tlcmJlcmcgXFx1MjAxMyBIZWFyaW5nIEJlZm9yZSBVUyBIb3VzZSBvZiBSZXByZXNlbnRhdGl2ZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyODAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZG9jcy5ob3VzZS5nb3ZcXC9tZWV0aW5nc1xcL0lGXFwvSUYwMFxcLzIwMTgwNDExXFwvMTA4MDkwXFwvSEhSRy0xMTUtSUYwMC1Xc3RhdGUtWnVja2VyYmVyZ00tMjAxODA0MTEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2Nzk0MDU4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNvY2lvZWNvbm9taWMgZ3JvdXAgY2xhc3NpZmljYXRpb24gYmFzZWQgb24gdXNlciBmZWF0dXJlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI3OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9waW1nLWZhaXcudXNwdG8uZ292XFwvZmRkXFwvODNcXC8yMDE4XFwvMjhcXC8wMDNcXC8wLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjg2NjI5MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCIgQXBwbGUgU3VwcGxpZXIgTGlzdCBcXHUyMDEzIFRvcCAyMDAgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNzQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5hcHBsZS5jb21cXC9zdXBwbGllci1yZXNwb25zaWJpbGl0eVxcL3BkZlxcL0FwcGxlLVN1cHBsaWVyLUxpc3QucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTk5MTcwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlN0ZWxsYXIgUHJvdG9jb2w6IEEgRmVkZXJhdGVkIE1vZGVsIGZvciBJbnRlcm5ldC1MZXZlbCBDb25zZW5zdXMgKDIwMTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuc3RlbGxhci5vcmdcXC9wYXBlcnNcXC9zdGVsbGFyLWNvbnNlbnN1cy1wcm90b2NvbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxMjU5MjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IHRvIFdyaXRlIGEgVGVjaG5pY2FsIFBhcGVyIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZGZzLnNlbWFudGljc2Nob2xhci5vcmdcXC80NDFmXFwvYWM3YzIwMjBlMWM4ZjBkMzJhZGZmY2E2OTdiYmI4YTE5OGExLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODIyNTE5N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgTWFraW5nIG9mIFByaW5jZSBvZiBQZXJzaWEgKDIwMTEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5qb3JkYW5tZWNobmVyLmNvbVxcL2Rvd25sb2Fkc1xcL21ha3BvcHNhbXBsZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4NDU5MzdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUElEIFdpdGhvdXQgYSBQaEQgKDIwMTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy53ZXNjb3R0ZGVzaWduLmNvbVxcL2FydGljbGVzXFwvcGlkXFwvcGlkV2l0aG91dEFQaGQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MjU3MTU2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlByaW5jaXBsZXMgb2YgQWxnb3JpdGhtaWMgUHJvYmxlbSBTb2x2aW5nICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI1NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzYy5rdGguc2VcXC9+anNhbm5lbW9cXC9zbGFza1xcL21haW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4Mjg3MzU1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlB1YmxpYy5yZXNvdXJjZS5vcmcgd2lucyBhcHBlYWwgb24gcmlnaHQgdG8gcHVibGlzaCB0aGUgbGF3IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjQ4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY2FkYy51c2NvdXJ0cy5nb3ZcXC9pbnRlcm5ldFxcL29waW5pb25zLm5zZlxcLzUzM0Q0N0FGODgzQzgxOTQ4NTI1ODJDRDAwNTJCOEQ0XFwvJGZpbGVcXC8xNy03MDM1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU3OTc0MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNSVQgQ2FyZWVyIERldmVsb3BtZW50IEhhbmRib29rIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjQ4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9nZWNkLm1pdC5lZHVcXC9zaXRlc1xcL2RlZmF1bHRcXC9maWxlc1xcL2Fib3V0XFwvZmlsZXNcXC9jYXJlZXItaGFuZGJvb2sucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzMxMzE2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNldmVuIFB1enpsZXMgWW91IFRoaW5rIFlvdSBNdXN0IE5vdCBIYXZlIEhlYXJkIENvcnJlY3RseSAoMjAwNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMzQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5tYXRoLmRhcnRtb3V0aC5lZHVcXC9+cHdcXC9zb2x1dGlvbnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTk4ODIzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkwtdGhlYW5pbmUsIGEgY29uc3RpdHVlbnQgaW4gdGVhLCBhbmQgaXRzIGVmZmVjdCBvbiBtZW50YWwgc3RhdGUgKDIwMDgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjMzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2FwamNuLm5ocmkub3JnLnR3XFwvc2VydmVyXFwvQVBKQ05cXC8xNyUyMFN1cHBsJTIwMVxcL1xcLzE2Ny5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2NDQyMDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2VsZi1Bd2FyZW5lc3MgZm9yIEludHJvdmVydHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY2xpZmZjLm9yZ1xcL2Jsb2dcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMThcXC8wNVxcL0FXYXJPZldvcmRzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzAxMDE5OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3VzZSBPdmVyc2lnaHQgQ29tbWl0dGVlIFJlcG9ydCBvbiBFcXVpZmF4IEJyZWFjaCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIyMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvb3ZlcnNpZ2h0LmhvdXNlLmdvdlxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxOFxcLzEyXFwvRXF1aWZheC1SZXBvcnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjUxNjc2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFwcGxlIEZpbGUgU3lzdGVtIFJlZmVyZW5jZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIyMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZGV2ZWxvcGVyLmFwcGxlLmNvbVxcL3N1cHBvcnRcXC9hcHBsZS1maWxlLXN5c3RlbVxcL0FwcGxlLUZpbGUtU3lzdGVtLVJlZmVyZW5jZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwNDA3NDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIG9yaWdpbmFsIHBpdGNoIGZvciBEaWFibG8gKDE5OTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjE5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5ncmF5YmVhcmRnYW1lcy5jb21cXC9kb3dubG9hZFxcL2RpYWJsb19waXRjaC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY2ODU3OTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2VuYXRvciByZXF1ZXN0cyBiZXR0ZXIgaHR0cHMgY29tcGxpYW5jZSBhdCBVUyBEZXBhcnRtZW50IG9mIERlZmVuc2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy53eWRlbi5zZW5hdGUuZ292XFwvaW1vXFwvbWVkaWFcXC9kb2NcXC93eWRlbi13ZWItZW5jcnlwdGlvbi1sZXR0ZXItdG8tZG9kLWNpby5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxMjkwOTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmVya3NoaXJlIEhhdGhhd2F5IDIwMTcgQW5udWFsIExldHRlciBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIxNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuYmVya3NoaXJlaGF0aGF3YXkuY29tXFwvbGV0dGVyc1xcLzIwMTdsdHIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDUzMTUwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyB0byBCZSBhIFByb2dyYW1tZXI6IEEgU2hvcnQsIENvbXByZWhlbnNpdmUsIGFuZCBQZXJzb25hbCBTdW1tYXJ5ICgyMDAyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIxNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmRvYy5pYy5hYy51a1xcL35zdXNhblxcLzQ3NVxcL0hvd1RvQmVBUHJvZ3JhbW1lci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3NDIxOTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSXQgVGFrZXMgVHdvIE5ldXJvbnMgdG8gUmlkZSBhIEJpY3ljbGUgKDIwMDQpXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjEyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3BhcmFkaXNlLmNhbHRlY2guZWR1XFwvfmNvb2tcXC9wYXBlcnNcXC9Ud29OZXVyb25zLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjIxNTEzMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJVbml0ZWQgU3RhdGVzIHYuIE1pY3Jvc29mdCBDb3JwLiBEaXNtaXNzZWQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5zdXByZW1lY291cnQuZ292XFwvb3BpbmlvbnNcXC8xN3BkZlxcLzE3LTJfMTgyNC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4NTg1OTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3RhckNyYWZ0OiBSZW1hc3RlcmVkIFxcdTIwMTMgRW11bGF0aW5nIGEgYnVmZmVyIG92ZXJmbG93IGZvciBmdW4gYW5kIHByb2ZpdCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIwNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC8weGViLm5ldFxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxOFxcLzAyXFwvU3RhckNyYWZ0X0VVRF9FbXVsYXRvci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMDU3NjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IHRvIGZpbmQgaGlkZGVuIGNhbWVyYXMgKDIwMDIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjAzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy50ZW50YWNsZS5mcmFua2VuLmRlXFwvcGFwZXJzXFwvaGlkZGVuY2Ftcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzODE1OTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEV2b2x1dGlvbiBvZiBDIFByb2dyYW1taW5nIFByYWN0aWNlczogQSBTdHVkeSBvZiBVbml4ICgyMDE2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIwMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Mi5kbXN0LmF1ZWIuZ3JcXC9kZHNcXC9wdWJzXFwvY29uZlxcLzIwMTYtSUNTRS1Qcm9nRXZvbFxcL2h0bWxcXC9TTEsxNi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwNDYzMzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmxvY2tjaGFpbnMgZnJvbSBhIERpc3RyaWJ1dGVkIENvbXB1dGluZyBQZXJzcGVjdGl2ZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIwMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jcy5icm93bi5lZHVcXC9jb3Vyc2VzXFwvY3NjaTI5NTItYVxcL3BhcGVyc1xcL3BlcnNwZWN0aXZlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjE5MTUwNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgdG8gQXJjaGl0ZWN0IGEgUXVlcnkgQ29tcGlsZXIsIFJldmlzaXRlZCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIwMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLnB1cmR1ZS5lZHVcXC9ob21lc1xcL3JvbXBmXFwvcGFwZXJzXFwvdGFoYm91Yi1zaWdtb2QxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4NTE5NDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRm91bmRhdGlvbnMgb2YgRGF0YSBTY2llbmNlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTk4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jcy5jb3JuZWxsLmVkdVxcL2plaFxcL2Jvb2sucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTMxOTQxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgV2FuZGVyaW5nIE1pbmQgSXMgYW4gVW5oYXBweSBNaW5kICgyMDEwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE5NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZ3JlYXRlcmdvb2QuYmVya2VsZXkuZWR1XFwvaW1hZ2VzXFwvYXBwbGljYXRpb25fdXBsb2Fkc1xcL0tJTExJTkdTV09SVEgtV2FuZGVyaW5nTWluZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY3OTc5NDdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcGFyaW5nIExhbmd1YWdlcyBmb3IgRW5naW5lZXJpbmcgU2VydmVyIFNvZnR3YXJlOiBFcmxhbmcsIEdvLCBhbmQgU2NhbGFcXC9Ba2thIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTk0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5kY3MuZ2xhLmFjLnVrXFwvfnRyaW5kZXJcXC9wYXBlcnNcXC9zYWMtMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzQyMjc2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJ1bXBlciBTdGlja2VyIENvbXB1dGVyIFNjaWVuY2UgKDE5ODUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTkzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5ib3dkb2luLmVkdVxcL35sdG9tYVxcL3RlYWNoaW5nXFwvY3MzNDBcXC9zcHJpbmcwNVxcL2NvdXJzZXN0dWZmXFwvQmVudGxleV9CdW1wZXJTdGlja2VyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc5NDUwN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGYWNlYm9vayBRMSAyMDE4IEVhcm5pbmdzIFNsaWRlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE5MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvaW52ZXN0b3IuZmIuY29tXFwvZmlsZXNcXC9kb2NfZmluYW5jaWFsc1xcLzIwMThcXC9RMVxcL1ExLTIwMTgtRWFybmluZ3MtUHJlc2VudGF0aW9uLSgxKS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5MjU2NzFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSW50cm9kdWN0aW9uIHRvIE9TIEFic3RyYWN0aW9ucyBVc2luZyBQbGFuIDkgZnJvbSBCZWxsIExhYnMgKDIwMDcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTkxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9sc3ViLm9yZ1xcL3dob1xcL25lbW9cXC85LmludHJvLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjI1MzE5M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNaWNyb3NvZnQgV29yZCBmb3IgV2luZG93cyAxLjAgUG9zdG1vcnRlbSAoMTk4OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYW50aXRydXN0LnNsYXRlZC5vcmdcXC93d3cuaW93YWNvbnN1bWVyY2FzZS5vcmdcXC8wMTE2MDdcXC84MDAwXFwvUFgwODg3NS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3NjQ3OTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXJjaGl0ZWN0dXJlIG9mIGEgRGF0YWJhc2UgU3lzdGVtICgyMDA3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE4OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9kYi5jcy5iZXJrZWxleS5lZHVcXC9wYXBlcnNcXC9mbnRkYjA3LWFyY2hpdGVjdHVyZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxOTA5NDdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTW9uZXkgY3JlYXRpb24gaW4gdGhlIG1vZGVybiBlY29ub215ICgyMDE0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE4OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmJhbmtvZmVuZ2xhbmQuY28udWtcXC8tXFwvbWVkaWFcXC9ib2VcXC9maWxlc1xcL3F1YXJ0ZXJseS1idWxsZXRpblxcLzIwMTRcXC9tb25leS1jcmVhdGlvbi1pbi10aGUtbW9kZXJuLWVjb25vbXkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NjA0MjUxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkV4cGxvaXRpbmcgbW9kZXJuIG1pY3JvYXJjaGl0ZWN0dXJlczogTWVsdGRvd24sIFNwZWN0cmUsIGFuZCBvdGhlciBhdHRhY2tzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTg5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3Blb3BsZS5yZWRoYXQuY29tXFwvamNtXFwvdGFsa3NcXC9GT1NERU1fMjAxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMDQ0NjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmF5ZXNcXHUyMDE5IFRoZW9yZW0gaW4gdGhlIDIxc3QgQ2VudHVyeSAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxODUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd2ViLmlwYWMuY2FsdGVjaC5lZHVcXC9zdGFmZlxcL2ZtYXNjaVxcL2hvbWVcXC9hc3Ryb19yZWZzXFwvU2NpZW5jZS0yMDEzLUVmcm9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODIxMzExN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgdG8gc2NhbGUgYSBkaXN0cmlidXRlZCBzeXN0ZW0gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxODQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2Nkbi5vcmVpbGx5c3RhdGljLmNvbVxcL2VuXFwvYXNzZXRzXFwvMVxcL2V2ZW50XFwvMjQ0XFwvSG93JTIwdG8lMjBzY2FsZSUyMGElMjBkaXN0cmlidXRlZCUyMHN5c3RlbSUyMFByZXNlbnRhdGlvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1Mjk3ODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IHRvIHdyaXRlIE1hdGhlbWF0aWNzICgxOTcwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE4MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubWF0aC51dGFoLmVkdVxcL35wYVxcLzMwMDBcXC9oYWxtb3MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODI5NDQwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyBSdXN0IElzIFRpbGRlXFx1MjAxOXMgQ29tcGV0aXRpdmUgQWR2YW50YWdlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTc3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cucnVzdC1sYW5nLm9yZ1xcL3BkZnNcXC9SdXN0LVRpbGRlLVdoaXRlcGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzE3NzIyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJlbmRlcmVkIEluc2VjdXJlOiBHUFUgU2lkZSBDaGFubmVsIEF0dGFja3MgQXJlIFByYWN0aWNhbCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE3NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY3MudWNyLmVkdVxcL356aGl5dW5xXFwvcHViXFwvY2NzMThfZ3B1X3NpZGVfY2hhbm5lbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0NDk2NzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFJhdGUgb2YgUmV0dXJuIG9uIEV2ZXJ5dGhpbmcsIDE4NzBcXHUyMDEzMjAxNSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmZyYnNmLm9yZ1xcL2Vjb25vbWljLXJlc2VhcmNoXFwvZmlsZXNcXC93cDIwMTctMjUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDc4MDU5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwZWVjaCBhbmQgTGFuZ3VhZ2UgUHJvY2Vzc2luZywgM3JkIEVkaXRpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3dlYi5zdGFuZm9yZC5lZHVcXC9+anVyYWZza3lcXC9zbHAzXFwvZWQzYm9vay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxMDQ4NjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTXRHb3g6IEFubm91bmNlbWVudCBvZiBDb21tZW5jZW1lbnQgb2YgQ2l2aWwgUmVoYWJpbGl0YXRpb24gUHJvY2VlZGluZ3MgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5tdGdveC5jb21cXC9pbWdcXC9wZGZcXC8yMDE4MDYyMl9hbm5vdW5jZW1lbnRfZW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzczODU3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRvd2FyZHMgYSBUeXBlIFN5c3RlbSBmb3IgQ29udGFpbmVycyBhbmQgQVdTIExhbWJkYSB0byBBdm9pZCBGYWlsdXJlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jaHJpc3RvcGhlcm1laWtsZWpvaG4uY29tXFwvcHVibGljYXRpb25zXFwvaG90ZWRnZS0yMDE4LWNvbnRhaW5lcnMtcHJlcHJpbnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NzQ2MzE1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFscGhhYmV0IEFubm91bmNlcyBTZWNvbmQgUXVhcnRlciAyMDE4IFJlc3VsdHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FiYy54eXpcXC9pbnZlc3RvclxcL3BkZlxcLzIwMThRMl9hbHBoYWJldF9lYXJuaW5nc19yZWxlYXNlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU5NTUxMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFdm9sdXRpb24gb2YgRW1hY3MgTGlzcCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lmlyby51bW9udHJlYWwuY2FcXC9+bW9ubmllclxcL2hvcGwtNC1lbWFjcy1saXNwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODI2NzI4NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJLYWRlbWxpYTogQSBQZWVyLVRvLXBlZXIgSW5mb3JtYXRpb24gU3lzdGVtIEJhc2VkIG9uIHRoZSBYT1IgTWV0cmljICgyMDAyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGRvcy5jc2FpbC5taXQuZWR1XFwvfnBldGFyXFwvcGFwZXJzXFwvbWF5bW91bmtvdi1rYWRlbWxpYS1sbmNzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODcxMTk4MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZWVwIGltYWdlIHJlY29uc3RydWN0aW9uIGZyb20gaHVtYW4gYnJhaW4gYWN0aXZpdHkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5iaW9yeGl2Lm9yZ1xcL2NvbnRlbnRcXC9iaW9yeGl2XFwvZWFybHlcXC8yMDE3XFwvMTJcXC8zMFxcLzI0MDMxNy5mdWxsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjE0MDA1NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIExpc3AgV2F5IHRvIFR5cGUgVGhlb3J5IGFuZCBGb3JtYWwgUHJvb2ZzICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmV1cm9wZWFuLWxpc3Atc3ltcG9zaXVtLm9yZ1xcL3N0YXRpY1xcLzIwMTdcXC9wZXNjaGFuc2tpLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM4MzY1NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21wdXRlciBTY2llbmNlIEkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY3NlLnVubC5lZHVcXC9+Y2JvdXJrZVxcL0NvbXB1dGVyU2NpZW5jZU9uZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwNTMwMTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSUVFRSBQb3NpdGlvbiBTdGF0ZW1lbnQgaW4gU3VwcG9ydCBvZiBTdHJvbmcgRW5jcnlwdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9nbG9iYWxwb2xpY3kuaWVlZS5vcmdcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMThcXC8wNlxcL0lFRUUxODAwNi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0MDg0OTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEVjb25vbWljIExpbWl0cyBvZiBCaXRjb2luIGFuZCB0aGUgQmxvY2tjaGFpbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9mYWN1bHR5LmNoaWNhZ29ib290aC5lZHVcXC9lcmljLmJ1ZGlzaFxcL3Jlc2VhcmNoXFwvRWNvbm9taWMtTGltaXRzLUJpdGNvaW4tQmxvY2tjaGFpbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczOTQyNjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2hvdyBITjogU29mdHdhcmUgQXJjaGl0ZWN0dXJlLCBhbGwgeW91IG5lZWQgdG8ga25vdyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc2hhcmUuY29tcG9zaWV1eC5mclxcL3doaXRlLWJvb2stc29mdHdhcmUtYXJjaGl0ZWN0dXJlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODc2MTYwOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNYXRoIGZyb20gVGhyZWUgdG8gU2V2ZW46IFRoZSBTdG9yeSBvZiBhIE1hdGhlbWF0aWNhbCBDaXJjbGUgZm9yIFByZXNjaG9vbGVycyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubXNyaS5vcmdcXC9wZW9wbGVcXC9zdGFmZlxcL2xldnlcXC9maWxlc1xcL01DTFxcL1p2b25raW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDE4NTgzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJyZWFrb3V0IGltcGxlbWVudGVkIGluIEphdmFTY3JpcHQgaW4gYSBQREZcIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Jhd2dpdC5jb21cXC9vc25yXFwvaG9ycmlmeWluZy1wZGYtZXhwZXJpbWVudHNcXC9tYXN0ZXJcXC9icmVha291dC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5MTUyOTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIE1hdGhlbWF0aWNzIG9mIFF1YW50dW0gTWVjaGFuaWNzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTYwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC91d2F0ZXJsb28uY2FcXC9pbnN0aXR1dGUtZm9yLXF1YW50dW0tY29tcHV0aW5nXFwvc2l0ZXNcXC9jYS5pbnN0aXR1dGUtZm9yLXF1YW50dW0tY29tcHV0aW5nXFwvZmlsZXNcXC91cGxvYWRzXFwvZmlsZXNcXC9tYXRoZW1hdGljc19xbV92MjEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDQ2MzQzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdvaW5nIElQdjYgT25seSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE1OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGMubmFub2cub3JnXFwvc3RhdGljXFwvcHVibGlzaGVkXFwvbWVldGluZ3NcXC9OQU5PRzczXFwvMTY0NVxcLzIwMTgwNjI1X0xhZ2VyaG9sbV9ULU1vYmlsZV9TX0pvdXJuZXlfVG9fdjEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Mzk5ODg0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBCYXNpYyBJZGVhcyBpbiBOZXVyYWwgTmV0d29ya3MgKDE5OTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTU1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy1pc2wuc3RhbmZvcmQuZWR1XFwvfndpZHJvd1xcL3BhcGVyc1xcL2oxOTk0dGhlYmFzaWMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTEyNDY0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5JU1Q6IEJsb2NrY2hhaW4gVGVjaG5vbG9neSBPdmVydmlldyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE1NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbnZscHVicy5uaXN0LmdvdlxcL25pc3RwdWJzXFwvaXJcXC8yMDE4XFwvTklTVC5JUi44MjAyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODE1NzM2M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEbyB5b3UgbmVlZCBhIGJsb2NrY2hhaW4/XCIsXG4gICAgICAgIFwic2NvcmVcIjogMTUzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lcHJpbnQuaWFjci5vcmdcXC8yMDE3XFwvMzc1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMxNTQ1NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXcml0aW5nIE5ldHdvcmsgRHJpdmVycyBpbiBHbyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE1MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm5ldC5pbi50dW0uZGVcXC9maWxlYWRtaW5cXC9iaWJ0ZXhcXC9wdWJsaWNhdGlvbnNcXC90aGVzZXNcXC8yMDE4LWl4eS1nby5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzOTkzODlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSW50cm9kdWN0aW9uIHRvIEZ1bmN0aW9uYWwgUHJvZ3JhbW1pbmcgKDE5ODgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTUwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3VzaS1wbC5naXRodWIuaW9cXC9sY1xcL3NwLTIwMTVcXC9kb2NcXC9CaXJkX1dhZGxlci4lMjBJbnRyb2R1Y3Rpb24lMjB0byUyMEZ1bmN0aW9uYWwlMjBQcm9ncmFtbWluZy4xZWQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDcxMzcyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlZXBMb2c6IEFub21hbHkgRGV0ZWN0aW9uIGFuZCBEaWFnbm9zaXMgZnJvbSBTeXN0ZW0gTG9ncyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FjbWNjcy5naXRodWIuaW9cXC9wYXBlcnNcXC9wMTI4NS1kdUEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTA2MjY1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZpcmVmb3g6IFRoZSBFZmZlY3Qgb2YgQWQgQmxvY2tpbmcgb24gVXNlciBFbmdhZ2VtZW50IHdpdGggdGhlIFdlYiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcmVzZWFyY2gubW96aWxsYS5vcmdcXC9maWxlc1xcLzIwMThcXC8wNFxcL1RoZS1FZmZlY3Qtb2YtQWQtQmxvY2tpbmctb24tVXNlci1FbmdhZ2VtZW50LXdpdGgtdGhlLVdlYi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxMDUzNzVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2V0dGluZyBVcCBhIENheW1hbiBJc2xhbmRzIENvbXBhbnkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5zdHVhcnRzbGF3LmNvbVxcL2Ntc1xcL2RvY3VtZW50XFwvU2V0dGluZ191cF9hX0NheW1hbl9Jc2xhbmRzX0NvbXBhbnkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODA3NzY1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBKdXJ5IElzIEluOiBNb25vbGl0aGljIE9TIERlc2lnbiBJcyBGbGF3ZWQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvdHMuZGF0YTYxLmNzaXJvLmF1XFwvcHVibGljYXRpb25zXFwvY3Npcm9fZnVsbF90ZXh0XFwvQmlnZ3NfTEhfMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzY3MDYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1vZGVybiBDb2RlIFJldmlldzogQSBDYXNlIFN0dWR5IGF0IEdvb2dsZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc2JhY2suaXRcXC9wdWJsaWNhdGlvbnNcXC9pY3NlMjAxOHNlaXAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDM1NTQ4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFuYWx5c2lzIG9mIFVTQiBmYW4gZ2l2ZW4gdG8gam91cm5hbGlzdHMgYXQgTm9ydGggS29yZWEtU2luZ2Fwb3JlIFN1bW1pdCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY2wuY2FtLmFjLnVrXFwvfnNwczMyXFwvdXNiX2Zhbl9yZXBvcnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDU5MDQxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkVtYWlsIGV4Y2hhbmdlIGJldHdlZW4gTUlUIE1lZGlhIExhYiBhbmQgdGhlIElPVEEgRm91bmRhdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cudGFuZ2xlYmxvZy5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMThcXC8wMlxcL2xldHRlcnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDU3MTIwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxpbmVhciBsb2dpYyBhbmQgZGVlcCBsZWFybmluZyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC90aGVyaXNpbmdzZWEub3JnXFwvbm90ZXNcXC90YWxrLWxsZGwtdHJhbnNjcmlwdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyNTU2MTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmV2aXZpbmcgU21hbGx0YWxrLTc4ICgyMDE0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9mcmV1ZGVuYmVyZ3MuZGVcXC9iZXJ0XFwvcHVibGljYXRpb25zXFwvSW5nYWxscy0yMDE0LVNtYWxsdGFsazc4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzA1NTk2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCYW5kaXQgQWxnb3JpdGhtcyBCb29rIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2Rvd25sb2Fkcy50b3ItbGF0dGltb3JlLmNvbVxcL2JhbmRpdGJvb2tcXC9ib29rLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzY0MjU2NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXaHkgUGhpbG9zb3BoZXJzIFNob3VsZCBDYXJlIEFib3V0IENvbXB1dGF0aW9uYWwgQ29tcGxleGl0eSAoMjAxMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNDAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5zY290dGFhcm9uc29uLmNvbVxcL3BhcGVyc1xcL3BoaWxvcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1NzMxNDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTG9nKEdyYXBoKTogQSBOZWFyLU9wdGltYWwgSGlnaC1QZXJmb3JtYW5jZSBHcmFwaCBSZXByZXNlbnRhdGlvbiAoMjAxOCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNDAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Blb3BsZS5jc2FpbC5taXQuZWR1XFwvanNodW5cXC9wYXBlcnNcXC9sb2dncmFwaC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwODE5NzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2V2ZW4gUGlsbGFycyBvZiBDYXVzYWwgUmVhc29uaW5nIHdpdGggUmVmbGVjdGlvbnMgb24gTWFjaGluZSBMZWFybmluZyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9mdHAuY3MudWNsYS5lZHVcXC9wdWJcXC9zdGF0X3NlclxcL3I0ODEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTg3MzA2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBwaHlzaWNzIG9mIGJha2luZyBnb29kIHBpenphIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hcnhpdi5vcmdcXC9mdHBcXC9hcnhpdlxcL3BhcGVyc1xcLzE4MDZcXC8xODA2LjA4NzkwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQzNzIyOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHZXQgQmlsbGlvbnMgb2YgQ29ycmVjdCBEaWdpdHMgb2YgUGkgZnJvbSBhIFdyb25nIEZvcm11bGEgKDE5OTkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hY2FkZW1pY3Mucm93YW4uZWR1XFwvY3NtXFwvZGVwYXJ0bWVudHNcXC9tYXRoXFwvZmFjdWx0eXN0YWZmXFwvZmFjdWx0eVxcL29zbGVyXFwvQmlsbGlvbnNfcGlfZGlnaXRzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA0MDYzMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBZHZhbmNlZCBEYXRhIEFuYWx5c2lzIGZyb20gYW4gRWxlbWVudGFyeSBQb2ludCBvZiBWaWV3ICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuc3RhdC5jbXUuZWR1XFwvfmNzaGFsaXppXFwvQURBZmFFUG9WXFwvQURBZmFFUG9WLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQxMDkzNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGcmVlbmV0OiBBIERpc3RyaWJ1dGVkIEFub255bW91cyBJbmZvcm1hdGlvbiBTdG9yYWdlIGFuZCBSZXRyaWV2YWwgU3lzdGVtICgyMDAwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9zbmFwLnN0YW5mb3JkLmVkdVxcL2NsYXNzXFwvY3MyMjR3LXJlYWRpbmdzXFwvY2xhcmtlMDBmcmVlbmV0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODcwOTM4M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgU2ltcGxlIEVzc2VuY2Ugb2YgQXV0b21hdGljIERpZmZlcmVudGlhdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jb25hbC5uZXRcXC9wYXBlcnNcXC9lc3NlbmNlLW9mLWFkXFwvZXNzZW5jZS1vZi1hZC1pY2ZwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODMwNjg2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQcm9ncmFtbWluZyBQYXJhZGlnbXMgYW5kIEJleW9uZCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jcy5icm93bi5lZHVcXC9+c2tcXC9QdWJsaWNhdGlvbnNcXC9QYXBlcnNcXC9QdWJsaXNoZWRcXC9rZi1wcm9nLXBhcmFkaWdtcy1hbmQtYmV5b25kXFwvcGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzgyMzY1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFscGhhYmV0IFExIDIwMTggRWFybmluZ3MgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMzUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FiYy54eXpcXC9pbnZlc3RvclxcL3BkZlxcLzIwMThRMV9hbHBoYWJldF9lYXJuaW5nc19yZWxlYXNlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjkwNzAwN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTdGF0ZSBvZiBNdWx0aWNvcmUgT0NhbWwgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMzUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwva2NzcmsuaW5mb1xcL3NsaWRlc1xcL21jb2NhbWxfZ2FsbGl1bS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0MTY3OTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIE1ldGEtUHJvYmxlbSBvZiBDb25zY2lvdXNuZXNzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTMxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9waGlscGFwZXJzLm9yZ1xcL2FyY2hpdmVcXC9DSEFUTU8tMzIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzYwMTk5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldoYXQgZG8gU3RhbmZvcmQgQ1MgUGhEIHN0dWRlbnRzIHRoaW5rIG9mIHRoZWlyIFBoRCBwcm9ncmFtPyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYXJjaGl2ZS5vcmdcXC9kb3dubG9hZFxcL3BoZF9zdHVkZW50X3N1cnZleV9zdW1tYXJ5X3JlcG9ydF8wYTVjXFwvcGhkX3N0dWRlbnRfc3VydmV5X3N1bW1hcnlfcmVwb3J0XzBhNWMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDkzOTYzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSB3ZWlyZCBhbmQgd29uZGVyZnVsIHdvcmxkIG9mIGNvbnN0cnVjdGl2ZSBtYXRoZW1hdGljcyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMzAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2hvbWUuc2FuZGllZ28uZWR1XFwvfnNodWxtYW5cXC9wYXBlcnNcXC9yYWJiaXRob2xlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQxMTkzNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMb3ctTGF0ZW5jeSBWaWRlbyBQcm9jZXNzaW5nIFVzaW5nIFRob3VzYW5kcyBvZiBUaW55IFRocmVhZHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMzAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvc3lzdGVtXFwvZmlsZXNcXC9jb25mZXJlbmNlXFwvbnNkaTE3XFwvbnNkaTE3LWZvdWxhZGkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTk3MjUzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNlbGYtZW5jcnlwdGluZyBkZWNlcHRpb246IHdlYWtuZXNzZXMgaW4gdGhlIGVuY3J5cHRpb24gb2Ygc29saWQgc3RhdGUgZHJpdmVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTI5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cucnUubmxcXC9wdWJsaXNoXFwvcGFnZXNcXC85MDkyNzVcXC9kcmFmdC1wYXBlcl8xLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM4Mjk3NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDKysgQ29yZSBDb3JvdXRpbmVzIFByb3Bvc2FsIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTI4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5vcGVuLXN0ZC5vcmdcXC9qdGMxXFwvc2MyMlxcL3dnMjFcXC9kb2NzXFwvcGFwZXJzXFwvMjAxOFxcL3AxMDYzcjAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDM2NzQ4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBvd2VyIExhd3MgYW5kIFJpY2gtR2V0LVJpY2hlciBQaGVub21lbmEgKDIwMTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTI3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jcy5jb3JuZWxsLmVkdVxcL2hvbWVcXC9rbGVpbmJlclxcL25ldHdvcmtzLWJvb2tcXC9uZXR3b3Jrcy1ib29rLWNoMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTk5NzY2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgVGFzdGUgb2YgTGluZWFyIExvZ2ljICgxOTkzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvaG9tZXBhZ2VzLmluZi5lZC5hYy51a1xcL3dhZGxlclxcL3BhcGVyc1xcL2xpbmVhcnRhc3RlXFwvbGluZWFydGFzdGUtcmV2aXNlZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2NDE0NzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQW4gQW5hbHlzaXMgb2YgdGhlIEltcGFjdCBvZiBBcmJpdHJhcnkgQmxvY2tjaGFpbiBDb250ZW50IG9uIEJpdGNvaW4gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2ZjMTguaWZjYS5haVxcL3ByZXByb2NlZWRpbmdzXFwvNi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY2MTcxMzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUG9sYXJGUzogQWxpYmFiYSBEaXN0cmlidXRlZCBGaWxlIFN5c3RlbSBmb3IgU2hhcmVkIFN0b3JhZ2UgQ2xvdWQgRGF0YWJhc2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnZsZGIub3JnXFwvcHZsZGJcXC92b2wxMVxcL3AxODQ5LWNhby5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4MTQxODVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTm90YXRpb24gYXMgYSBUb29sIG9mIFRob3VnaHQgKDE5NzkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTIxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5lZWNnLnRvcm9udG8uZWR1XFwvfmp6aHVcXC9jc2MzMjZcXC9yZWFkaW5nc1xcL2l2ZXJzb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODQyMzc4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1pbmRmdWxuZXNzIE1lZGl0YXRpb24gSW1wYWlycyBUYXNrIE1vdGl2YXRpb24gYnV0IE5vdCBQZXJmb3JtYW5jZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc2NpLWh1Yi50d1xcL2Rvd25sb2Fkc1xcLzIzMTBcXC8xMC4xMDE2QGoub2JoZHAuMjAxOC4wNS4wMDEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzQyNjM5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZhbGxhY2llcyBvZiBEaXN0cmlidXRlZCBDb21wdXRpbmcgRXhwbGFpbmVkICgyMDA2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cucmdvYXJjaGl0ZWN0cy5jb21cXC9GaWxlc1xcL2ZhbGxhY2llcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MDU5MjdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRnV6emluZyB0aGUgT3BlbkJTRCBLZXJuZWwgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5vcGVuYnNkLm9yZ1xcL3BhcGVyc1xcL2Z1enotc2xpZGVzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzkyOTIzNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgY29uY2VwdHVhbCBvcmlnaW5zIG9mIE1heHdlbGwncyBlcXVhdGlvbnMgYW5kIGdhdWdlIHRoZW9yeSAoMjAxNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnBoeXNpY3MudW1kLmVkdVxcL2dydFxcL3RhalxcLzY3NWVcXC9PcmlnaW5zb2ZNYXh3ZWxsYW5kR2F1Z2UucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzI1NjA1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBCaXJ0aCBvZiBQcm9sb2cgKDE5OTIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTE3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93ZWIuc3RhbmZvcmQuZWR1XFwvY2xhc3NcXC9saW5ndWlzdDI4OVxcL3AzNy1jb2xtZXJhdWVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODE3ODIxNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJcyBJUHY2IG9ubHkgZm9yIHRoZSBSaWNoPyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcmlwZTc2LnJpcGUubmV0XFwvcHJlc2VudGF0aW9uc1xcLzktMjAxOC0wNS0xNy1pcHY2LXJlYXNvbnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDYwNDM3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9uZSBwYXJhbWV0ZXIgaXMgYWx3YXlzIGVub3VnaCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jb2xhbGEuYmNzLnJvY2hlc3Rlci5lZHVcXC9wYXBlcnNcXC9waWFudGFkb3NpMjAxOG9uZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxNjEwMzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBQbGFuIDkgQyBjb21waWxlciBmb3IgUklTQy1WIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTE1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZ2Vla2xhbi5jby51a1xcL2ZpbGVzXFwvb3NodWc2OS1NaWxsZXItY3Jpc2N2LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODMwODI1NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTZWN1cml0eSBBbmFseXNpcyBvZiBXaXJlR3VhcmQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2NvdXJzZXMuY3NhaWwubWl0LmVkdVxcLzYuODU3XFwvMjAxOFxcL3Byb2plY3RcXC9IZS1YdS1YdS1XaXJlR3VhcmQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODgzMjY5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkF1dG9tYXRpYyBEaWZmZXJlbnRpYXRpb24gaW4gTWFjaGluZSBMZWFybmluZzogQSBTdXJ2ZXkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvam1sci5vcmdcXC9wYXBlcnNcXC92b2x1bWUxOFxcLzE3LTQ2OFxcLzE3LTQ2OC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0OTEyMDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUGxlZGdlIGFuZCBVbnZlaWwgaW4gT3BlbkJTRCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm9wZW5ic2Qub3JnXFwvcGFwZXJzXFwvQmVja1BsZWRnZVVudmVpbEJTRENhbjIwMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Mjc3MDY3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlVzaW5nIFByZWRpY3Rpb24gTWFya2V0cyB0byBUcmFjayBJbmZvcm1hdGlvbiBGbG93czogIEV2aWRlbmNlIGZyb20gR29vZ2xlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTEzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuc3RhdC5iZXJrZWxleS5lZHVcXC91c2Vyc1xcL2FsZG91c1xcLzE1N1xcL1BhcGVyc1xcL0dvb2dsZVByZWRpY3Rpb25NYXJrZXRQYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwMTUwNTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlcmVcXHUyMDE5cyBhIEhvbGUgaW4gdGhlIEJvdHRvbSBvZiB0aGUgQzogRWZmZWN0aXZlbmVzcyBvZiBBbGxvY2F0aW9uIFByb3RlY3Rpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd2ViLm1pdC5lZHVcXC9oYTIyMjg2XFwvd3d3XFwvcGFwZXJzXFwvU2VjRGV2MTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDQyNTc4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5ldFNwZWN0cmU6IFJlYWQgQXJiaXRyYXJ5IE1lbW9yeSBPdmVyIE5ldHdvcmsgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL21pc2MwMTEwLm5ldFxcL3dlYlxcL2ZpbGVzXFwvbmV0c3BlY3RyZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2MjE4MjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEJ5emFudGluZSBHZW5lcmFscyBQcm9ibGVtICgxOTgyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbGFtcG9ydC5henVyZXdlYnNpdGVzLm5ldFxcL3B1YnNcXC9ieXoucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzAyNjQwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgcGxlYSBmb3IgbGVhbiBzb2Z0d2FyZSAoMTk5NSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2NyLnlwLnRvXFwvYmliXFwvMTk5NVxcL3dpcnRoLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg3MjQwMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBYnN0cmFjdCBvZiB0aGUgTlRTQiBSZXBvcnQgb24gQWlyIENhbmFkYSBmbGlnaHQgNzU5J3MgdGF4aXdheSBvdmVyZmxpZ2h0IGF0IFNGTyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbnRzYi5nb3ZcXC9uZXdzXFwvZXZlbnRzXFwvRG9jdW1lbnRzXFwvRENBMTdJQTE0OC1BYnN0cmFjdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwNzE5NjZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTW90b3JvbGEgTTY4MDAwIEZhbWlseSBQcm9ncmFtbWVyXFx1MjAxOXMgUmVmZXJlbmNlIE1hbnVhbCAoMTk5MikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY2FjaGUubnhwLmNvbVxcL2RvY3NcXC9lblxcL3JlZmVyZW5jZS1tYW51YWxcXC9NNjgwMDBQTS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwNzY5NjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGlzc2VjdGluZyBRTlggW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5ibGFja2hhdC5jb21cXC9kb2NzXFwvYXNpYS0xOFxcL2FzaWEtMTgtV2V0emVsc19BYmFzc2lfZGlzc2VjdGluZ19xbnhfX1dQLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODAxMzE1OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRm91bmRhdGlvbnMgb2YgTWF0aGVtYXRpY3MgKDIwMDcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTA5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubWF0aC53aXNjLmVkdVxcL35taWxsZXJcXC9vbGRcXC9tNzcxLTEwXFwva3VuZW43NzAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDc4NTE0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9iZXJvbiBTeXN0ZW0gSW1wbGVtZW50ZWQgb24gYSBMb3ctQ29zdCBGUEdBIEJvYXJkICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGRmcy5zZW1hbnRpY3NjaG9sYXIub3JnXFwvMmMxMVxcLzdjMTQ1NmViOTZiYmVhMTlhYTNjOGIwMThkZTRmYzkzODdiYy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5MzM4ODFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV2h5IE1pbmltYWwgR3VpZGFuY2UgRHVyaW5nIEluc3RydWN0aW9uIERvZXMgTm90IFdvcmsgKDIwMDYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTA5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jb2d0ZWNoLnVzYy5lZHVcXC9wdWJsaWNhdGlvbnNcXC9raXJzY2huZXJfU3dlbGxlcl9DbGFyay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyMTcyNDVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRWZmaWNpZW50IE1ldGhvZHMgYW5kIEhhcmR3YXJlIGZvciBEZWVwIExlYXJuaW5nIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTA5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NzMjMxbi5zdGFuZm9yZC5lZHVcXC9zbGlkZXNcXC8yMDE3XFwvY3MyMzFuXzIwMTdfbGVjdHVyZTE1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzYxNzg3MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHb29nbGVcXHUyMDE5cyBzZWNyZXQgYW5kIExpbmVhciBBbGdlYnJhICgyMDA0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC92ZXJzby5tYXQudWFtLmVzXFwvfnBhYmxvLmZlcm5hbmRlelxcL2VtczYzLXBhYmxvLWZlcm5hbmRlel9maW5hbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyOTg2MDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEFydCBvZiBBcHByb3hpbWF0aW9uIGluIFNjaWVuY2UgYW5kIEVuZ2luZWVyaW5nIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTA2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dlYi5taXQuZWR1XFwvNi4wNTVcXC9ib29rXFwvYm9vay1kcmFmdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwOTk1OTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVG93YXJkcyBhbiBvcHRpY2FsIEZQR0EgXFx1MjAxMyBQcm9ncmFtbWFibGUgc2lsaWNvbiBwaG90b25pYyBjaXJjdWl0cyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYXJ4aXYub3JnXFwvZnRwXFwvYXJ4aXZcXC9wYXBlcnNcXC8xODA3XFwvMTgwNy4wMTY1Ni5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0ODg4MzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUHl0aHJhbjogQ3Jvc3NpbmcgdGhlIFB5dGhvbiBGcm9udGllciBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNvbXB1dGVyLm9yZ1xcL2NzZGxcXC9tYWdzXFwvY3NcXC8yMDE4XFwvMDJcXC9tY3MyMDE4MDIwMDgzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjkxMDQ0NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXaGF0J3MgaGlkZGVuIGluIHRoZSBoaWRkZW4gbGF5ZXJzPyAoMTk4OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy5jbXUuZWR1XFwvfmRzdFxcL3B1YnNcXC9ieXRlLWhpZGRlbmxheWVyLTE5ODkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDQ4NzEwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBIYXNrZWxsIFNjaG9vbCBvZiBNdXNpYyBcXHUyMDEzIEZyb20gU2lnbmFscyB0byBTeW1waG9uaWVzICgyMDE0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9oYXNrZWxsLmNzLnlhbGUuZWR1XFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE1XFwvMDNcXC9IU29NLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUxNzI4NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHaWZ0ZWRuZXNzIGFuZCBHZW5pdXM6IENydWNpYWwgRGlmZmVyZW5jZXMgKDE5OTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZ3dlcm4ubmV0XFwvZG9jc1xcL2lxXFwvMTk5Ni1qZW5zZW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzUwMjkzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNrZXRjaHBhZDogQSBtYW4tbWFjaGluZSBncmFwaGljYWwgY29tbXVuaWNhdGlvbiBzeXN0ZW0gKDE5NjMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTA0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY2wuY2FtLmFjLnVrXFwvdGVjaHJlcG9ydHNcXC9VQ0FNLUNMLVRSLTU3NC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczNTQ3NjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEZ1dHVyZSBvZiBDb21wdXRpbmc6IExvZ2ljIG9yIEJpb2xvZ3kgKDIwMDMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTA0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9sYW1wb3J0LmF6dXJld2Vic2l0ZXMubmV0XFwvcHVic1xcL2Z1dHVyZS1vZi1jb21wdXRpbmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDU3MjEzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlByZWRpY3RpbmcgUHJpY2UgQ2hhbmdlcyBpbiBFdGhlcmV1bSAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY3MyMjkuc3RhbmZvcmQuZWR1XFwvcHJvajIwMTdcXC9maW5hbC1yZXBvcnRzXFwvNTI0NDAzOS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyNzIzMjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQW4gSW50cm9kdWN0aW9uIHRvIE1hdGhlbWF0aWNhbCBPcHRpbWFsIENvbnRyb2wgVGhlb3J5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9tYXRoLmJlcmtlbGV5LmVkdVxcL35ldmFuc1xcL2NvbnRyb2wuY291cnNlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU4NTc3N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNaW5kc3Rvcm1zOiBDaGlsZHJlbiwgQ29tcHV0ZXJzLCBhbmQgUG93ZXJmdWwgSWRlYXMgKDE5ODApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dvcnJ5ZHJlYW0uY29tXFwvcmVmc1xcL1BhcGVydCUyMC0lMjBNaW5kc3Rvcm1zJTIwMXN0JTIwZWQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzYxNjY1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZ1bmN0aW9uYWwgQml0czogTGFtYmRhLWNhbGN1bHVzIGJhc2VkIGFsZ29yaXRobWljIGluZm9ybWF0aW9uIHRoZW9yeSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvdHJvbXAuZ2l0aHViLmlvXFwvY2xcXC9MQy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3MjY1NDVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEVmZmVjdHMgb2YgQ29tcHV0ZXIgVXNlIG9uIEV5ZSBIZWFsdGggYW5kIFZpc2lvbiAoMTk5NykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5hb2Eub3JnXFwvRG9jdW1lbnRzXFwvb3B0b21ldHJpc3RzXFwvZWZmZWN0cy1vZi1jb21wdXRlci11c2UucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTQ2MTA2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFjdG9yIE1vZGVsIG9mIENvbXB1dGF0aW9uICgyMDEwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYXJ4aXYub3JnXFwvdmNcXC9hcnhpdlxcL3BhcGVyc1xcLzEwMDhcXC8xMDA4LjE0NTl2OC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2NjczMjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRXhwbG9pdGluZyBVUkwgUGFyc2VyIGluIFByb2dyYW1taW5nIExhbmd1YWdlcyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5ibGFja2hhdC5jb21cXC9kb2NzXFwvdXMtMTdcXC90aHVyc2RheVxcL3VzLTE3LVRzYWktQS1OZXctRXJhLU9mLVNTUkYtRXhwbG9pdGluZy1VUkwtUGFyc2VyLUluLVRyZW5kaW5nLVByb2dyYW1taW5nLUxhbmd1YWdlcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5NTU2MjZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQm9yZGVyIFNlYXJjaCBvZiBFbGVjdHJvbmljIERldmljZXMgXFx1MjAxMyBDQlAgRGlyZWN0aXZlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY2JwLmdvdlxcL3NpdGVzXFwvZGVmYXVsdFxcL2ZpbGVzXFwvYXNzZXRzXFwvZG9jdW1lbnRzXFwvMjAxOC1KYW5cXC9jYnAtZGlyZWN0aXZlLTMzNDAtMDQ5YS1ib3JkZXItc2VhcmNoLWVsZWN0cm9uaWMtbWVkaWEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDg0ODIwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBoeXNpY3MgYXMgYSBXYXkgb2YgVGhpbmtpbmcgKDE5MzYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9rYi5vc3UuZWR1XFwvZHNwYWNlXFwvYml0c3RyZWFtXFwvaGFuZGxlXFwvMTgxMVxcLzcyNTY3XFwvT1NMSl9WMk4zXzAyNDEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Mzk2MjA1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldlYiBQcm9sb2cgYW5kIHRoZSBQcm9ncmFtbWFibGUgUHJvbG9nIFdlYiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZ2l0aHViLmNvbVxcL1dlYi1Qcm9sb2dcXC9zd2ktd2ViLXByb2xvZ1xcL2Jsb2JcXC9tYXN0ZXJcXC93ZWItY2xpZW50XFwvYXBwc1xcL3N3aXNoXFwvd2ViLXByb2xvZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyODg0OTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmlmdHkgWWVhcnMgb2YgU2hhbm5vbiBUaGVvcnkgKDE5OTgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cucHJpbmNldG9uLmVkdVxcL352ZXJkdVxcL3JlcHJpbnRzXFwvSVQ0NC42LjIwNTctMjA3OC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxMzAyOTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVW5za2lsbGVkIGFuZCBVbmF3YXJlIG9mIEl0ICgxOTk5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDk5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3BzeWNoLmNvbG9yYWRvLmVkdVxcL352YW5ib3ZlblxcL3RlYWNoaW5nXFwvcDc1MzZfaGV1cmJpYXNcXC9wNzUzNl9yZWFkaW5nc1xcL2tydWdlcl9kdW5uaW5nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjEyNTA2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOb24tUmVjdXJzaXZlIE1ha2UgQ29uc2lkZXJlZCBIYXJtZnVsOiBCdWlsZCBTeXN0ZW1zIGF0IFNjYWxlICgyMDE2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDk5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9uZG1pdGNoZWxsLmNvbVxcL2Rvd25sb2Fkc1xcL3BhcGVyLW5vbl9yZWN1cnNpdmVfbWFrZV9jb25zaWRlcmVkX2hhcm1mdWwtMjJfc2VwXzIwMTYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDg4MzI4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlYnVnZ2luZyBhY3Jvc3MgcGlwZXMgYW5kIHNvY2tldHMgd2l0aCBzdHJhY2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZ2l0aHViLmNvbVxcL25oMlxcL3N0cmFjZS1waXBlcy1wcmVzZW50YXRpb25cXC9ibG9iXFwvbWFzdGVyXFwvcHJlc2VudGF0aW9uXFwvRGVidWdnaW5nJTIwYWNyb3NzJTIwcGlwZXMlMjBhbmQlMjBzb2NrZXRzJTIwd2l0aCUyMHN0cmFjZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY3MDgzOTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBIaXN0b3J5IG9mIHRoZSBFcmxhbmcgVk0gKDIwMTEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmVybGFuZy1mYWN0b3J5LmNvbVxcL3VwbG9hZFxcL3ByZXNlbnRhdGlvbnNcXC8zODlcXC9FRlNGMTEtRXJsYW5nVk0ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MjE0OTk2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyB0byBkbyB3aXRoIHByb2JhYmlsaXRpZXMgd2hhdCBwZW9wbGUgc2F5IHlvdSBjYW5cXHUyMDE5dCAoMTk4NSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZnRwLmNzLnVjbGEuZWR1XFwvcHViXFwvc3RhdF9zZXJcXC9yNDkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjYzMjIzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBvbGljZSBVc2Ugb2YgRm9yY2U6IEFuIEV4YW1pbmF0aW9uIG9mIE1vZGVybiBQb2xpY2luZyBQcmFjdGljZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzY2NyLmdvdlxcL3B1YnNcXC8yMDE4XFwvMTEtMTUtUG9saWNlLUZvcmNlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODU0NjAzOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTaW5nbGUtZGVjcnlwdGlvbiBFTS1iYXNlZCBhdHRhY2sgcmV2ZWFscyBwcml2YXRlIGtleXMgZnJvbSBBbmRyb2lkIHBob25lcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDk3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL3N5c3RlbVxcL2ZpbGVzXFwvY29uZmVyZW5jZVxcL3VzZW5peHNlY3VyaXR5MThcXC9zZWMxOC1hbGFtLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzgxNzk2NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFZmZpY2llbnQgSG90LVdhdGVyIFBpcGluZyAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZ2FyeWtsZWluYXNzb2NpYXRlcy5jb21cXC9QREZzXFwvMTUlMjAtJTIwRWZmaWNpZW50JTIwSG90LVdhdGVyJTIwUGlwaW5nLUpMQy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY1NDA4MDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2NpZW50aXN0cyB3YXJuIG9mIHBvdGVudGlhbCBzZXJpb3VzIGhlYWx0aCBlZmZlY3RzIG9mIDVHICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDk1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9laHRydXN0Lm9yZ1xcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvU2NpZW50aXN0LTVHLWFwcGVhbC0yMDE3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk2NzM3MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIG1pY3JvIG1hbnVhbCBmb3IgTGlzcCBcXHUyMDEzIE5vdCB0aGUgd2hvbGUgdHJ1dGggKDE5NzgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmVlLnJ5ZXJzb24uY2FcXC9+ZWxmXFwvcHViXFwvbWlzY1xcL21pY3JvbWFudWFsTElTUC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5NTg0MTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRXZlcnl0aGluZyBZb3UgV2FudGVkIHRvIEtub3cgQWJvdXQgU3luY2hyb25pemF0aW9uICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDk1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3NpZ29wcy5vcmdcXC9zb3NwXFwvc29zcDEzXFwvcGFwZXJzXFwvcDMzLWRhdmlkLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjg1OTcxOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgU3Ryb25nIEZyZWUgV2lsbCBUaGVvcmVtICgyMDA5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDk0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5hbXMub3JnXFwvbm90aWNlc1xcLzIwMDkwMlxcL3J0eDA5MDIwMDIyNnAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzkyMDQwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBhcnQgb2YgVmlydHVhbCBBbmFsb2cgZmlsdGVyIGRlc2lnbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDkzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubmF0aXZlLWluc3RydW1lbnRzLmNvbVxcL2ZpbGVhZG1pblxcL25pX21lZGlhXFwvZG93bmxvYWRzXFwvcGRmXFwvVkFGaWx0ZXJEZXNpZ25fMi4xLjAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzQ2NDYzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkh1bWFuLUNlbnRyaWMgVG9vbHMgZm9yIE5hdmlnYXRpbmcgQ29kZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDkzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dlYi5lZWNzLnV0ay5lZHVcXC9+YXpoXFwvcHVic1xcL0hlbmxleTIwMThiRGlzc2VydGF0aW9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY0ODU4MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFdmVyeSBHb29kIFJlZ3VsYXRvciBvZiBhIFN5c3RlbSBNdXN0IEJlIGEgTW9kZWwgb2YgVGhhdCBTeXN0ZW0gKDE5NzApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvcGVzcG1jMS52dWIuYWMuYmVcXC9ib29rc1xcL0NvbmFudF9Bc2hieS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY1NDU1MzdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2FzZSBTdHVkaWVzIFdoZXJlIFBoYXNlIDIgYW5kIFBoYXNlIDMgVHJpYWxzIGhhZCBEaXZlcmdlbnQgUmVzdWx0cyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDkyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZmRhLmdvdlxcL2Rvd25sb2Fkc1xcL0Fib3V0RkRBXFwvUmVwb3J0c01hbnVhbHNGb3Jtc1xcL1JlcG9ydHNcXC9VQ001MzU3ODAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTY4NzEyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIjgwMi4xMSB3aXRoIE11bHRpcGxlIEFudGVubmFzIGZvciBEdW1taWVzICgyMDA5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDkyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9kancuY3Mud2FzaGluZ3Rvbi5lZHVcXC9wYXBlcnNcXC9taW1vX2Zvcl9kdW1taWVzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzI5MDMwMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTZWxmLVJlZ3VsYXRlZCBMZWFybmluZzogQmVsaWVmcywgVGVjaG5pcXVlcywgYW5kIElsbHVzaW9ucyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDkyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5leGNhbGlidXJ0c2Eub3JnLnVrXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE3XFwvMTFcXC9TZWxmLXJlZ3VsYXRlZC1sZWFybmluZy1Cam9yay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0NjI2MzNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2Npa2l0LWxlYXJuIHVzZXIgZ3VpZGUgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvc2Npa2l0LWxlYXJuLm9yZ1xcL3N0YWJsZVxcL19kb3dubG9hZHNcXC9zY2lraXQtbGVhcm4tZG9jcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0MzA2NzNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiJHZhdTogdGhlIHVsdGltYXRlIGFic3RyYWN0aW9uICgyMDEwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDkyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93ZWIud3BpLmVkdVxcL1B1YnNcXC9FVERcXC9BdmFpbGFibGVcXC9ldGQtMDkwMTEwLTEyNDkwNFxcL3VucmVzdHJpY3RlZFxcL2pzaHV0dC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0MDUwMTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVzaWduIG9mIGEgbG93LWxldmVsIEMrKyB0ZW1wbGF0ZSBTSU1EIGxpYnJhcnkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnRpLnVuaS1iaWVsZWZlbGQuZGVcXC9kb3dubG9hZHNcXC9wdWJsaWNhdGlvbnNcXC90ZW1wbGF0ZVNJTUQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDUwMDIxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgVGVtcGxhdGUgZm9yIFVuZGVyc3RhbmRpbmcgSG93IHRoZSBFY29ub21pYyBNYWNoaW5lIFdvcmtzICgyMDExKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDkxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9tZWRpYS5lY29ub21pc3QuY29tXFwvc2l0ZXNcXC9kZWZhdWx0XFwvZmlsZXNcXC9wZGZzXFwvQV9UZW1wbGF0ZV9mb3JfVW5kZXJzdGFuZGluZ18tX1JheV9EYWxpb19fQnJpZGdld2F0ZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTYyMTM2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRvIERldmVsb3BlcnMgVW5kZXJzdGFuZCBJRUVFIEZsb2F0aW5nIFBvaW50PyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDkxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3BkaW5kYS5vcmdcXC9QYXBlcnNcXC9pcGRwczE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODc2MTk0NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb2xsZWN0aXZlIGhhbGx1Y2luYXRpb24gYW5kIGluZWZmaWNpZW50IG1hcmtldHM6IFRoZSBSYWlsd2F5IE1hbmlhIG9mIHRoZSAxODQwcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDkxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5kdGMudW1uLmVkdVxcL35vZGx5emtvXFwvZG9jXFwvaGFsbHVjaW5hdGlvbnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTQ1MTU3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5ld3RvblxcdTIwMTlzIEZpbmFuY2lhbCBNaXNhZHZlbnR1cmVzIGluIHRoZSBTb3V0aCBTZWEgQnViYmxlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmR0Yy51bW4uZWR1XFwvfm9kbHl6a29cXC9kb2NcXC9tYW5pYTEzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjI0NTI4NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNZWx0ZG93blByaW1lLCBTcGVjdHJlUHJpbWU6IEV4cGxvaXRpbmcgSW52YWxpZGF0aW9uLUJhc2VkIENvaGVyZW5jZSBQcm90b2NvbHNcIixcbiAgICAgICAgXCJzY29yZVwiOiA5MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYXJ4aXYub3JnXFwvcGRmXFwvMTgwMi4wMzgwMi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0MzAyMTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSklUaW5nIFBvc3RncmVTUUwgdXNpbmcgTExWTSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDkwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2FuYXJhemVsLmRlXFwvdGFsa3NcXC9mb3NkZW0tMjAxOC0wMi0wM1xcL2ppdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyOTk2MzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEV2b2x1dGlvbiBvZiBCaXRjb2luIEhhcmR3YXJlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY3Nld2ViLnVjc2QuZWR1XFwvfm1idGF5bG9yXFwvcGFwZXJzXFwvVGF5bG9yX0JpdGNvaW5fSUVFRV9Db21wdXRlcl8yMDE3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjI4OTA3NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFdmVyeXRoaW5nIFlvdSBBbHdheXMgV2FudGVkIHRvIEtub3cgQWJvdXQgT3B0aWNhbCBOZXR3b3JraW5nIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5uYW5vZy5vcmdcXC9zaXRlc1xcL2RlZmF1bHRcXC9maWxlc1xcL1N0ZWVuYmVyZ2VuLkV2ZXJ5dGhpbmdfWW91X05lZWQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDk5MzA0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNyb3NzLVBsYXRmb3JtIExhbmd1YWdlIERlc2lnbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2xhbXB3d3cuZXBmbC5jaFxcL35kb2VyYWVuZVxcL3RoZXNpc1xcL2RvZXJhZW5lLXRoZXNpcy0yMDE4LWNyb3NzLXBsYXRmb3JtLWxhbmd1YWdlLWRlc2lnbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2NDA1MTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEV2b2x1dGlvbiBvZiBPcGVyYXRpbmcgU3lzdGVtcyAoMjAwMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuYnJpbmNoLWhhbnNlbi5uZXRcXC9wYXBlcnNcXC8yMDAxYi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1ODE1MzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFogR2FyYmFnZSBDb2xsZWN0b3I6IEFuIEludHJvZHVjdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9mb3NkZW0ub3JnXFwvMjAxOFxcL3NjaGVkdWxlXFwvZXZlbnRcXC96Z2NcXC9hdHRhY2htZW50c1xcL3NsaWRlc1xcLzIyMTFcXC9leHBvcnRcXC9ldmVudHNcXC9hdHRhY2htZW50c1xcL3pnY1xcL3NsaWRlc1xcLzIyMTFcXC9aR0NfRk9TREVNXzIwMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDA1ODUyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5hZ2luaTogQSBTdGF0aWMgVmVyaWZpZXIgZm9yIFB5dGhvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3BtLmluZi5ldGh6LmNoXFwvcHVibGljYXRpb25zXFwvZ2V0cGRmLnBocD9iaWJuYW1lPU93biZpZD1FaWxlcnNNdWVsbGVyMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTM1NzUyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1pbmluZXQgb24gT3BlbkJTRDogSW50ZXJhY3RpdmUgU0ROIFRlc3RpbmcgYW5kIERldmVsb3BtZW50IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5vcGVuYnNkLm9yZ1xcL3BhcGVyc1xcL2JzZGNhbjIwMTgtbWluaW5ldC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczMDE4MzVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVzaWduIGFuZCBJbXBsZW1lbnRhdGlvbiBvZiBhIDI1Ni1Db3JlIEJyYWluRnVjayBDb21wdXRlciBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3NpZ3RiZC5jc2FpbC5taXQuZWR1XFwvcHVic1xcL3Zlcnljb25mZXJlbmNlLXBhcGVyMi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4NjY0MzVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTG9naWMgaXMgTWV0YXBoeXNpY3MgKDIwMTEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BoaWxwYXBlcnMub3JnXFwvYXJjaGl2ZVxcL0FMVkxJTS0zLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzI0Njk0NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPbiB0aGUgcmhlb2xvZ3kgb2YgY2F0cyAoMjAxNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmRyZ291bHUuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE3XFwvMDlcXC9SaGVvbG9neS1vZi1jYXRzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODU0MDU1MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXaGF0IHlvdSBnZXQgaXMgd2hhdCB5b3UgQzogQ29udHJvbGxpbmcgc2lkZSBlZmZlY3RzIGluIG1haW5zdHJlYW0gQyBjb21waWxlcnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY2wuY2FtLmFjLnVrXFwvfnJqYTE0XFwvUGFwZXJzXFwvd2hhdHlvdWMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTExMTg1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRlbnNvckZsb3c6IE1hY2hpbmUgTGVhcm5pbmcgb24gSGV0ZXJvZ2VuZW91cyBEaXN0cmlidXRlZCBTeXN0ZW1zICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zdGF0aWMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXFwvbWVkaWFcXC9yZXNlYXJjaC5nb29nbGUuY29tXFwvZW5cXC9cXC9wdWJzXFwvYXJjaGl2ZVxcLzQ1MTY2LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzAyODYzMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMZWdvT1M6IERpc3NlbWluYXRlZCwgRGlzdHJpYnV0ZWQgT1MgZm9yIEhhcmR3YXJlIFJlc291cmNlIERpc2FnZ3JlZ2F0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvc3lzdGVtXFwvZmlsZXNcXC9vc2RpMTgtc2hhbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0ODgyOTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIHVzZWZ1bG5lc3Mgb2YgdXNlbGVzcyBrbm93bGVkZ2UgKDE5MzkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2xpYnJhcnkuaWFzLmVkdVxcL2ZpbGVzXFwvVXNlZnVsbmVzc0hhcnBlcnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjgzMjk4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFuIEZQR0EtYmFzZWQgSW4tbGluZSBBY2NlbGVyYXRvciBmb3IgTWVtY2FjaGVkICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuaG90Y2hpcHMub3JnXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC9oY19hcmNoaXZlc1xcL2hjMjVcXC9IQzI1LjUwLUZQR0EtZXB1YlxcL0hDMjUuMjcuNTMwLU1lbWNhY2hlZC1MYXZhc2FuaS1VVGV4YXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTc1MTM1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlVTIFN1cmdlb24gR2VuZXJhbCBEZWNsYXJlcyBFLWNpZ2FyZXR0ZSBFcGlkZW1pYyBBbW9uZyBZb3V0aCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lLWNpZ2FyZXR0ZXMuc3VyZ2VvbmdlbmVyYWwuZ292XFwvZG9jdW1lbnRzXFwvc3VyZ2Vvbi1nZW5lcmFscy1hZHZpc29yeS1vbi1lLWNpZ2FyZXR0ZS11c2UtYW1vbmcteW91dGgtMjAxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3MTYwMTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUHJhY3RpY2FsIEV4YW1wbGVzIGluIERhdGEgT3JpZW50ZWQgRGVzaWduICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2dhbWVkZXZzLm9yZ1xcL3VwbG9hZHNcXC9wcmFjdGljYWwtZXhhbXBsZXMtaW4tZGF0YS1vcmllbnRlZC1kZXNpZ24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDQ3MzgwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFuIEludHJvZHVjdGlvbiB0byBRdWFudHVtIENvbXB1dGF0aW9uIGFuZCBRdWFudHVtIENvbW11bmljYXRpb24gKDIwMDApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvaGVycG9saG9kZS5jb21cXC9yb2JcXC9xY2ludHJvLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQyMjQxNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGbHVyZWVEQiwgYSBQcmFjdGljYWwgRGVjZW50cmFsaXplZCBEYXRhYmFzZSAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZmx1ci5lZVxcL2Fzc2V0c1xcL3BkZlxcL2ZsdXJlZWRiX3doaXRlcGFwZXJfdjEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDU2MzE1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbW11bmljYXRpbmcgU2VxdWVudGlhbCBQcm9jZXNzZXMgKDE5NzgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy5jbXUuZWR1XFwvfmNyYXJ5XFwvODE5LWYwOVxcL0hvYXJlNzgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjA3MDMxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBhbGxlbmU6IEEgc3RhdGljYWxseSB0eXBlZCBjb21wYW5pb24gbGFuZ3VhZ2UgZm9yIEx1YSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5pbmYucHVjLXJpby5iclxcL35yb2JlcnRvXFwvZG9jc1xcL3BhbGxlbmUtc2JscC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwMzg2MTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUG9DfHxHVEZPLTE4IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5hbGNoZW1pc3Rvd2wub3JnXFwvcG9jb3JndGZvXFwvcG9jb3JndGZvMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDEzNjEwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxvc3Mgb2YgTG9jYXRpb25hbCBQcml2YWN5IFdoaWxlIFRyYXZlbGluZyBpbiBZb3VyIEF1dG9tb2JpbGUgKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5kZWZjb24ub3JnXFwvaW1hZ2VzXFwvZGVmY29uLTIxXFwvZGMtMjEtcHJlc2VudGF0aW9uc1xcL1B1a2luZ21vbmtleVxcL0RFRkNPTi0yMS1QdWtpbmdtb25rZXktVGhlLVJvYWQtTGVzcy1TdXJyZXB0aXRpb3VzbHktVHJhdmVsZWQtVXBkYXRlZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyNTEzOTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBGb3JtYWwgU2VjdXJpdHkgQW5hbHlzaXMgb2YgdGhlIFNpZ25hbCBNZXNzYWdpbmcgUHJvdG9jb2wgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VwcmludC5pYWNyLm9yZ1xcLzIwMTZcXC8xMDEzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzEwNzE0OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFeHBsb3JpbmcgQyBTZW1hbnRpY3MgYW5kIFBvaW50ZXIgUHJvdmVuYW5jZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY2wuY2FtLmFjLnVrXFwvfnBlczIwXFwvY2VyYmVydXNcXC90b3AtQ2VyYmVydXMtZHJhZnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzI4MzI4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBCYXR0bGUgb2YgdGhlIFNjaGVkdWxlcnM6IEZyZWVCU0QgVUxFIHZzLiBMaW51eCBDRlMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9zeXN0ZW1cXC9maWxlc1xcL2NvbmZlcmVuY2VcXC9hdGMxOFxcL2F0YzE4LWJvdXJvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MDg0MDNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT3B0aW1hbCBUaW1lLUluY29uc2lzdGVudCBCZWxpZWZzOiBNaXNwbGFubmluZywgUHJvY3Jhc3RpbmF0aW9uLCBhbmQgQ29tbWl0bWVudCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zY2hvbGFyLnByaW5jZXRvbi5lZHVcXC9zaXRlc1xcL2RlZmF1bHRcXC9maWxlc1xcL1RpbWVJbmNvbnNpc3RlbnRCZWxpZWZzXzAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4Mjk0MTU5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxpbmVhciB0eXBlcyBjYW4gY2hhbmdlIHRoZSB3b3JsZCAoMTk5MCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY3MuaW9jLmVlXFwvZXdzY3NcXC8yMDEwXFwvbXljcm9mdFxcL2xpbmVhci0ydXAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTAwODQwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlc2lnbmluZyBhbmQgYnVpbGRpbmcgYSBkaXN0cmlidXRlZCBkYXRhIHN0b3JlIGluIEdvIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2Zvc2RlbS5vcmdcXC8yMDE4XFwvc2NoZWR1bGVcXC9ldmVudFxcL2RhdGFzdG9yZVxcL2F0dGFjaG1lbnRzXFwvc2xpZGVzXFwvMjYxOFxcL2V4cG9ydFxcL2V2ZW50c1xcL2F0dGFjaG1lbnRzXFwvZGF0YXN0b3JlXFwvc2xpZGVzXFwvMjYxOFxcL2Rlc2lnbmluZ19kaXN0cmlidXRlZF9kYXRhc3RvcmVfaW5fZ29fdGltYmFsYS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MjQ4NzlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IGRvZXMgYSBHUFUgc2hhZGVyIGNvcmUgd29yaz8gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9hcmFzLXAuaW5mb1xcL3RleHRzXFwvZmlsZXNcXC8yMDE4QWNhZGVteSUyMC0lMjBHUFUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTA0NDcwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk91dGxpZXIgRGV0ZWN0aW9uIFRlY2huaXF1ZXMgKDIwMTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FyY2hpdmUuc2lhbS5vcmdcXC9tZWV0aW5nc1xcL3NkbTEwXFwvdHV0b3JpYWwzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQxMDY0N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJVbmljb2RlTWF0aCBcXHUyMDEzIEEgTmVhcmx5IFBsYWluLVRleHQgRW5jb2Rpbmcgb2YgTWF0aGVtYXRpY3MgKDIwMTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51bmljb2RlLm9yZ1xcL25vdGVzXFwvdG4yOFxcL1VUTjI4LVBsYWluVGV4dE1hdGgtdjMuMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1MTM4OTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT3B0aW9uIFByaWNpbmcgd2l0aCBGb3VyaWVyIFRyYW5zZm9ybSBhbmQgRXhwb25lbnRpYWwgTFxcdTAwZTl2eSBNb2RlbHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9tYXhtYXRzdWRhLmNvbVxcL1BhcGVyc1xcLzIwMDRcXC9NYXRzdWRhJTIwSW50cm8lMjBGVCUyMFByaWNpbmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4Mjk4Nzc1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBRdWFudHVtIFRoZW9yeSBhbmQgUmVhbGl0eSAoMTk3OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnNjaWVudGlmaWNhbWVyaWNhbi5jb21cXC9tZWRpYVxcL3BkZlxcLzE5NzkxMV8wMTU4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjI1NDI5N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJaZXJvIG92ZXJoZWFkIGRldGVybWluaXN0aWMgZmFpbHVyZTogQSB1bmlmaWVkIG1lY2hhbmlzbSBmb3IgQyBhbmQgQysrIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm9wZW4tc3RkLm9yZ1xcL2p0YzFcXC9zYzIyXFwvd2cxNFxcL3d3d1xcL2RvY3NcXC9uMjI4OS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5MjI3MTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTW9kZWwtRnJlZSwgTW9kZWwtQmFzZWQsIGFuZCBHZW5lcmFsIEludGVsbGlnZW5jZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuaWpjYWkub3JnXFwvcHJvY2VlZGluZ3NcXC8yMDE4XFwvMDAwMi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1OTEzNjFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEFsZ29yaXRobWljIEZvdW5kYXRpb25zIG9mIERpZmZlcmVudGlhbCBQcml2YWN5ICgyMDE0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY2lzLnVwZW5uLmVkdVxcL35hYXJvdGhcXC9QYXBlcnNcXC9wcml2YWN5Ym9vay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY2NzE5NTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSGlzdG9yeSBvZiBMaXNwICgxOTc5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2ptYy5zdGFuZm9yZC5lZHVcXC9hcnRpY2xlc1xcL2xpc3BcXC9saXNwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg0NjUyMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaHJlYWRzIENhbm5vdCBCZSBJbXBsZW1lbnRlZCBhcyBhIExpYnJhcnkgKDIwMDUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2NzLm55dS5lZHVcXC9+bXdhbGZpc2hcXC9jbGFzc2VzXFwvMTRmYVxcL3JlZlxcL2JvZWhtMDV0aHJlYWRzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ4MzcxN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgRGV2ZWxvcGVycyBVc2UgRHluYW1pYyBGZWF0dXJlcyBvZiBQcm9ncmFtbWluZyBMYW5ndWFnZXM6IFNtYWxsdGFsayBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC91c2Vycy5kY2MudWNoaWxlLmNsXFwvfnJyb2JiZXNcXC9wXFwvRU1TRS1mZWF0dXJlcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxMTQ0MDZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV2h5IFN5c3RvbGljIEFyY2hpdGVjdHVyZXM/ICgxOTgyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5lZWNzLmhhcnZhcmQuZWR1XFwvfmh0a1xcL3B1YmxpY2F0aW9uXFwvMTk4Mi1rdW5nLXdoeS1zeXN0b2xpYy1hcmNoaXRlY3R1cmUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjIwODQxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBOZXh0IDcwMCBQcm9ncmFtbWluZyBMYW5ndWFnZXMgKDE5NjUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvaG9tZXBhZ2VzLmluZi5lZC5hYy51a1xcL3dhZGxlclxcL3BhcGVyc1xcL3BhcGVycy13ZS1sb3ZlXFwvbGFuZGluLW5leHQtNzAwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA5MDc2MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPcGVuaW5nIHRoZSBIb29kIG9mIGEgV29yZCBQcm9jZXNzb3IgKDE5ODQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd29ycnlkcmVhbS5jb21cXC9yZWZzXFwvS2F5JTIwLSUyME9wZW5pbmclMjB0aGUlMjBIb29kJTIwb2YlMjBhJTIwV29yZCUyMFByb2Nlc3Nvci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzNTIwMjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFJlZCBXZWRkaW5nIFByb2JsZW06IFdyaXRlIFNwaWtlcyBhdCB0aGUgRWRnZSBhbmQgYSBNaXRpZ2F0aW9uIFN0cmF0ZWd5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY2hyaXN0b3BoZXJtZWlrbGVqb2huLmNvbVxcL3B1YmxpY2F0aW9uc1xcL2hvdGVkZ2UtMjAxOC1wcmVwcmludC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY2NDM5NTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2Fub3B5OiBBbiBFbmQtdG8tRW5kIFBlcmZvcm1hbmNlIFRyYWNpbmcgQW5kIEFuYWx5c2lzIFN5c3RlbSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jcy5icm93bi5lZHVcXC9+amNtYWNlXFwvcGFwZXJzXFwva2FsZG9yMjAxN2Nhbm9weS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY1OTIzMDNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQnVpbGRpbmcgUm9idXN0IFN5c3RlbXMgKDIwMDgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2dyb3Vwcy5jc2FpbC5taXQuZWR1XFwvbWFjXFwvdXNlcnNcXC9nanNcXC82Ljk0NVxcL3JlYWRpbmdzXFwvcm9idXN0LXN5c3RlbXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODkwNDk4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNvZnR3YXJlIFVwZGF0ZXMgZm9yIElvVCBEZXZpY2VzIGFuZCB0aGUgSGlkZGVuIENvc3RzIG9mIEhvbWVncm93biBVcGRhdGVycyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9tZW5kZXIuaW9cXC9yZXNvdXJjZXNcXC9ndWlkZXMtYW5kLXdoaXRlcGFwZXJzXFwvX3Jlc291cmNlc1xcL01lbmRlciUyNTIwV2hpdGUlMjUyMFBhcGVyJTI1MjBfJTI1MjBIaWRkZW4lMjUyMENvc3RzJTI1MjBvZiUyNTIwSG9tZWdyb3duLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjE4MTA1MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGYW50YXN0aWMgVGltZXJzOiBIaWdoLVJlc29sdXRpb24gTWljcm9hcmNoaXRlY3R1cmFsIEF0dGFja3MgaW4gSlMgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2dydXNzLmNjXFwvZmlsZXNcXC9mYW50YXN0aWN0aW1lcnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDgwMjM1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXByZWhlbnNpdmUgYW5kIGJpYXNlZCBjb21wYXJpc29uIG9mIE9wZW5CU0QgYW5kIEZyZWVCU0QgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5ic2Rmcm9nLm9yZ1xcL3B1YlxcL2V2ZW50c1xcL215X2JzZF9zdWNrc19sZXNzX3RoYW5feW91cnMtQXNpYUJTRENvbjIwMTctcGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjY3MTc5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlc2lnbiBhbmQgRXZhbHVhdGlvbiBvZiBGUEdBLUJhc2VkIEdpZ2FiaXQgRXRoZXJuZXQgTmV0d29yayBDYXJkICgyMDA0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDczLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZGZzLnNlbWFudGljc2Nob2xhci5vcmdcXC84YmZlXFwvODk4OGMxNDcwMzMwMmViZDJkNTY3OTI0YjI3YTVjYjEwYzU3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzAyOTQ1NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbiBFbXBpcmljYWwgU3R1ZHkgb2YgUHJvZ3JhbW1lcnNcXHUyMDE5IEFjcXVpc2l0aW9uIG9mIE5ldyBQcm9ncmFtbWluZyBMYW5ndWFnZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jczI0Mi5zdGFuZm9yZC5lZHVcXC9hc3NldHNcXC9wcm9qZWN0c1xcLzIwMTdcXC9wYXJhc3Rvby1nZGlldHo0NC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5NTA1ODhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR2hvc3RidXN0ZXI6IERldGVjdGluZyB0aGUgUHJlc2VuY2Ugb2YgSGlkZGVuIEVhdmVzZHJvcHBlcnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc3lucmcuY3NsLmlsbGlub2lzLmVkdVxcL3BhcGVyc1xcL2dob3N0YnVzdGVyLW1vYmljb20xOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwODIzODRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTG93LUxldmVsIFRoaW5raW5nIGluIEhpZ2gtTGV2ZWwgU2hhZGluZyBMYW5ndWFnZXMgKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lmh1bXVzLm5hbWVcXC9BcnRpY2xlc1xcL1BlcnNzb25fTG93TGV2ZWxUaGlua2luZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyMjM2NTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV2lsbGlhbSBTdGVpbiBvbiB0aGUgc3RydWdnbGUgZm9yIG9wZW4gc291cmNlIGZ1bmRpbmcgaW4gcHVyZSBtYXRoZW1hdGljcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDczLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5hbXMub3JnXFwvam91cm5hbHNcXC9ub3RpY2VzXFwvMjAxODA1XFwvcm5vdGktcDU0MC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5NDA3MjZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTG9naWMgUHJvZ3JhbW1pbmcgYW5kIENvbXBpbGVyIFdyaXRpbmcgKDE5ODApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvc292aWV0b3YuY29tXFwvdG1wXFwvd2FycmVuMTk4MC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2NzQ4NTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBzdXJ2ZXkgb2YgYXR0YWNrcyBhZ2FpbnN0IEludGVsIHg4NiBvdmVyIGxhc3QgMTAgeWVhcnMgKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2Jsb2cuaW52aXNpYmxldGhpbmdzLm9yZ1xcL3BhcGVyc1xcLzIwMTVcXC94ODZfaGFybWZ1bC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1ODg4MjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVHlwZWQgQ2xvanVyZSBpbiBUaGVvcnkgYW5kIFByYWN0aWNlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYW1icm9zZWJzLmNvbVxcL3RhbGtzXFwvcHJvcG9zYWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzcyOTIyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyB0byBTdWJ2ZXJ0IEJhY2tkb29yZWQgRW5jcnlwdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lcHJpbnQuaWFjci5vcmdcXC8yMDE4XFwvMjEyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjc2MzM2NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXaG8gQXJlIFRoZXNlIEVjb25vbWlzdHMsIEFueXdheT8gKDIwMDkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmxldnlpbnN0aXR1dGUub3JnXFwvcHVic1xcL1Rob3VnaHRfQWN0aW9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzAwODI5MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21wdXRpbmcgSGlnaGVyIE9yZGVyIERlcml2YXRpdmVzIG9mIE1hdHJpeCBhbmQgVGVuc29yIEV4cHJlc3Npb25zIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm1hdHJpeGNhbGN1bHVzLm9yZ1xcL21hdHJpeGNhbGN1bHVzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ2NDAwM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIFBlZGFnb2dpY2FsIEFuYWx5c2lzIG9mIE9ubGluZSBDb2RpbmcgVHV0b3JpYWxzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2ZhY3VsdHkud2FzaGluZ3Rvbi5lZHVcXC9hamtvXFwvcGFwZXJzXFwvS2ltMjAxN0NvZGluZ1R1dG9yaWFsRXZhbHVhdGlvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5NjE3MTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVW5peDogQnVpbGRpbmcgYSBEZXZlbG9wbWVudCBFbnZpcm9ubWVudCBmcm9tIFNjcmF0Y2ggKDIwMTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbWlubmllLnR1aHMub3JnXFwvWTVcXC93a3RfaGFwb3BfcGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDAyMTY1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFsY2hlbXk6IEEgTGFuZ3VhZ2UgYW5kIENvbXBpbGVyIGZvciBIb21vbW9ycGhpYyBFbmNyeXB0aW9uIE1hZGUgRWFzeSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dlYi5lZWNzLnVtaWNoLmVkdVxcL35jcGVpa2VydFxcL3B1YnNcXC9hbGNoZW15LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODI2NTk0OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOYWtlZCBtb2xlLXJhdCBtb3J0YWxpdHkgcmF0ZXMgZGVmeSBHb21wZXJ0emlhbiBsYXdzIGJ5IG5vdCBpbmNyZWFzaW5nIHdpdGggYWdlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5uY2JpLm5sbS5uaWguZ292XFwvcG1jXFwvYXJ0aWNsZXNcXC9QTUM1NzgzNjEwXFwvcGRmXFwvZWxpZmUtMzExNTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTA5NTMzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgRmlyc3QgQ291cnNlIGluIERlc2lnbiBhbmQgQW5hbHlzaXMgb2YgRXhwZXJpbWVudHMgKDIwMTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvdXNlcnMuc3RhdC51bW4uZWR1XFwvfmdhcnlcXC9ib29rXFwvZmNkYWUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDk2Njg1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdhbG9pcyBGaWVsZCBpbiBDcnlwdG9ncmFwaHkgKDIwMTIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3NpdGVzLm1hdGgud2FzaGluZ3Rvbi5lZHVcXC9+bW9ycm93XFwvMzM2XzEyXFwvcGFwZXJzXFwvanVhbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzNTEwNjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVVNEWiBGaWxlIEZvcm1hdCBTcGVjaWZpY2F0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2dyYXBoaWNzLnBpeGFyLmNvbVxcL3VzZFxcL2ZpbGVzXFwvVVNEWkZpbGVGb3JtYXRTcGVjaWZpY2F0aW9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzIyOTk3MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBdXN0ZXJpdHkgYW5kIHRoZSByaXNlIG9mIHRoZSBOYXppIHBhcnR5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5hbmRlcnNvbi51Y2xhLmVkdVxcL0RvY3VtZW50c1xcL2FyZWFzXFwvZmFjXFwvZ2VtXFwvbmF6aV9hdXN0ZXJpdHkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NTU4ODMyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNpbmtpbmcgb2YgdGhlIFVTIENhcmdvIFZlc3NlbCBFbCBGYXJvOiBJbGx1c3RyYXRlZCBkaWdlc3QgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm50c2IuZ292XFwvaW52ZXN0aWdhdGlvbnNcXC9BY2NpZGVudFJlcG9ydHNcXC9SZXBvcnRzXFwvU1BDMTgwMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxNjAzOTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhpcyBhcmNoaXRlY3R1cmUgdGFzdGVzIGxpa2UgbWljcm9hcmNoaXRlY3R1cmUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93cDN3b3Jrc2hvcC53ZWJzaXRlXFwvcGRmc1xcL1dQM19kdW5oYW0ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NTYwMDY0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBhcnNpbmcgd2l0aCBEZXJpdmF0aXZlczogQSBGdW5jdGlvbmFsIFBlYXJsICgyMDExKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL21hdHQubWlnaHQubmV0XFwvcGFwZXJzXFwvbWlnaHQyMDExZGVyaXZhdGl2ZXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzkxMDcxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBDb25zaXN0ZW5jeSBvZiBBcml0aG1ldGljIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvdGltb3RoeWNob3cubmV0XFwvY29uc2lzdGVudC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0NDAxMTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFBvdGVudGlvbWV0ZXIgSGFuZGJvb2sgKDE5NzUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5ib3VybnMuY29tXFwvZG9jc1xcL3RlY2huaWNhbC1kb2N1bWVudHNcXC90ZWNobmljYWwtbGlicmFyeVxcL2NvcnBvcmF0ZVxcL09ubGluZVBvdGVudGlvbWV0ZXJIYW5kYm9vay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzOTEwNzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSB2aXN1YWwgaGlzdG9yeSBvZiB0aGUgZnV0dXJlICgyMDE0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hc3NldHMucHVibGlzaGluZy5zZXJ2aWNlLmdvdi51a1xcL2dvdmVybm1lbnRcXC91cGxvYWRzXFwvc3lzdGVtXFwvdXBsb2Fkc1xcL2F0dGFjaG1lbnRfZGF0YVxcL2ZpbGVcXC8zNjA4MTRcXC8xNC04MTQtZnV0dXJlLWNpdGllcy12aXN1YWwtaGlzdG9yeS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NDI3MjZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIENvbXB1dGVyIGZvciB0aGUgMjFzdCBDZW51cnkgKDE5OTEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5scmkuZnJcXC9+bWJsXFwvU3RhbmZvcmRcXC9DUzQ3N1xcL3BhcGVyc1xcL1dlaXNlci1TY2lBbS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwMjkxNzlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSGlnaCBQZXJmb3JtYW5jZSBDb21wdXRpbmc6IEFyZSBXZSBKdXN0IEdldHRpbmcgV3JvbmcgQW5zd2VycyBGYXN0ZXI/ICgxOTk4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3czLm5kLmVkdVxcL35tYXJrc3RcXC9jYXN0LWF3YXJkLXNwZWVjaC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwNDk1MDlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTm90ZXMgb24gTGFuZGF1ZXIncyBwcmluY2lwbGUsIHJldmVyc2libGUgY29tcHV0YXRpb24sIE1heHdlbGwncyBEZW1vbiAoMjAwMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLnByaW5jZXRvbi5lZHVcXC9jb3Vyc2VzXFwvYXJjaGl2ZVxcL2ZhbGwwNlxcL2NvczU3NlxcL3BhcGVyc1xcL2Jlbm5ldHQwMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyNjcwMDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTGVpc3VyZSBMdXh1cmllcyBhbmQgdGhlIExhYm9yIFN1cHBseSBvZiBZb3VuZyBNZW4gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc2Nob2xhci5wcmluY2V0b24uZWR1XFwvc2l0ZXNcXC9kZWZhdWx0XFwvZmlsZXNcXC9tYWd1aWFyXFwvZmlsZXNcXC9sZWlzdXJlLWx1eHVyaWVzLWxhYm9yLWp1bmUtMjAxNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzOTM5MDNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IGRpZCBzb2Z0d2FyZSBnZXQgc28gcmVsaWFibGUgd2l0aG91dCBwcm9vZj8gKDE5OTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lmd3ZXJuLm5ldFxcL2RvY3NcXC9tYXRoXFwvMTk5Ni1ob2FyZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwNTA3MDZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVW5kZXJzdGFuZGluZyBTaW1wc29uXFx1MjAxOXMgUGFyYWRveCAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZnRwLmNzLnVjbGEuZWR1XFwvcHViXFwvc3RhdF9zZXJcXC9yNDE0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzcyODk1NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGMSBRdWVyeTogRGVjbGFyYXRpdmUgUXVlcnlpbmcgYXQgR29vZ2xlIFNjYWxlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnZsZGIub3JnXFwvcHZsZGJcXC92b2wxMVxcL3AxODM1LXNhbXdlbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3MTk5MTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IHRvIFByaW50IEZsb2F0aW5nLVBvaW50IE51bWJlcnMgQWNjdXJhdGVseSAoMTk5MCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbGlzdHMubm9uZ251Lm9yZ1xcL2FyY2hpdmVcXC9odG1sXFwvZ2NsLWRldmVsXFwvMjAxMi0xMFxcL3BkZmtpZVRsa2xSek4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Mjc3NTYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlZmVhdGluZyBNb2Rlcm4gU2VjdXJlIEJvb3QgVXNpbmcgU2Vjb25kLU9yZGVyIFB1bHNlZCBFTSBGYXVsdCBJbmplY3Rpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9zeXN0ZW1cXC9maWxlc1xcL2NvbmZlcmVuY2VcXC93b290MTdcXC93b290MTctcGFwZXItY3VpLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg5NTc4MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGb3VuZGF0aW9ucyBmb3IgRWZmaWNpZW50IGFuZCBFeHByZXNzaXZlIERpZmZlcmVudGlhYmxlIFByb2dyYW1taW5nIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvcGFwZXJzLm5pcHMuY2NcXC9wYXBlclxcLzgyMjEtYmFja3Byb3BhZ2F0aW9uLXdpdGgtY2FsbGJhY2tzLWZvdW5kYXRpb25zLWZvci1lZmZpY2llbnQtYW5kLWV4cHJlc3NpdmUtZGlmZmVyZW50aWFibGUtcHJvZ3JhbW1pbmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzQ3NzY3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFQTFxcXFwzMDAwIFxcdTIwMTMgSFAgSm91cm5hbCBcXHUyMDEzIEp1bHkgMTk3NyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5ocGwuaHAuY29tXFwvaHBqb3VybmFsXFwvcGRmc1xcL0lzc3VlUERGc1xcLzE5NzctMDcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTA2Nzg5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9uIEludGVsbGlnZW5jZSBpbiBDZWxsczogVGhlIENhc2UgZm9yIFdob2xlIENlbGwgQmlvbG9neSAoMjAwOSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuYnJpYW5qZm9yZC5jb21cXC9hLUlTUl9Gb3JkLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzMxNzMyM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHcmFhbFNxdWVhazogQSBGYXN0IFNtYWxsdGFsayBCeXRlY29kZSBJbnRlcnByZXRlciBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9mbmllcGhhdXMuY29tXFwvMjAxOFxcL2ljb29vbHBzMTgtZ3JhYWxzcXVlYWsucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDcwNzY3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRvd2FyZHMgU3RlYWx0aHkgTWFuaXB1bGF0aW9uIG9mIFJvYWQgTmF2aWdhdGlvbiBTeXN0ZW1zIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Blb3BsZS5jcy52dC5lZHVcXC9nYW5nd2FuZ1xcL3NlYzE4LWdwcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1ODE3NTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTW9ub2lkIG1hY2hpbmVzOiBhIE8obG9nIG4pIHBhcnNlciBmb3IgcmVndWxhciBsYW5ndWFnZXMgKDIwMDYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmRjYy5mYy51cC5wdFxcL35hY21cXC9zZW1pZ3IucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTEyNTc0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgUmVsYXRpb25hbCBNb2RlbCBvZiBEYXRhIGZvciBMYXJnZSBTaGFyZWQgRGF0YSBCYW5rcyAoMTk3MCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY3MudXdhdGVybG9vLmNhXFwvfmRhdmlkXFwvY3M4NDhzMTRcXC9jb2RkLXJlbGF0aW9uYWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDg4OTUxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJsZWVkaW5nQml0OiBUaGUgaGlkZGVuIGF0dGFjayBzdXJmYWNlIHdpdGhpbiBCTEUgY2hpcHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZ28uYXJtaXMuY29tXFwvaHViZnNcXC9CTEVFRElOR0JJVCUyMC0lMjBUZWNobmljYWwlMjBXaGl0ZSUyMFBhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODYyMTA3MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCIyMDE4IERlbG9pdHRlIE1pbGxlbm5pYWwgU3VydmV5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dzIuZGVsb2l0dGUuY29tXFwvY29udGVudFxcL2RhbVxcL0RlbG9pdHRlXFwvZ2xvYmFsXFwvRG9jdW1lbnRzXFwvQWJvdXQtRGVsb2l0dGVcXC9neC0yMDE4LW1pbGxlbm5pYWwtc3VydmV5LXJlcG9ydC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2MzE2NzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQWRvcHRpbmcgTGVzc29ucyBmcm9tIE9mZmxpbmUgUmF5LVRyYWNpbmcgdG8gUmVhbC1UaW1lIFJheS1UcmFjaW5nIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYWR2YW5jZXMucmVhbHRpbWVyZW5kZXJpbmcuY29tXFwvczIwMThcXC9QaGFyciUyMC0lMjBBZHZhbmNlcyUyMGluJTIwUlRSJTIwLSUyMFJlYWwtdGltZSUyMFJheSUyMFRyYWNpbmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzY0ODI1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkh1eWdlbnM6IFNjYWxhYmxlLCBGaW5lLWdyYWluZWQgQ2xvY2sgU3luY2hyb25pemF0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvc3lzdGVtXFwvZmlsZXNcXC9jb25mZXJlbmNlXFwvbnNkaTE4XFwvbnNkaTE4LWdlbmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDI4NjU1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBDYXNlIGZvciBTaGFyZWQgTm90aGluZyAoMTk4NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9kYi5jcy5iZXJrZWxleS5lZHVcXC9wYXBlcnNcXC9ocHRzODUtbm90aGluZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczOTEzNzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiXFx1MjAxY0xpdHRsZSBMYW5ndWFnZXNcXHUyMDFkIGJ5IEpvbiBCZW50bGV5ICgxOTg2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3N0YWZmLnVtLmVkdS5tdFxcL2FmcmExXFwvc2VtaW5hclxcL2xpdHRsZS1sYW5ndWFnZXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODgxNzA1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9wdGltaXppbmcgUGF4b3Mgd2l0aCBiYXRjaGluZyBhbmQgcGlwZWxpbmluZyAoMjAxMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGRmcy5zZW1hbnRpY3NjaG9sYXIub3JnXFwvYTBkMFxcL2NkZDJlOGFmMTk0NWMwM2NmYWYyY2I0NTFmNzFmMjA4ZDBjOS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5NTI2NDlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFN0cnVjdHVyZSBvZiBcXHUyMDFjVW5zdHJ1Y3R1cmVkXFx1MjAxZCBEZWNpc2lvbiBQcm9jZXNzZXMgKDE5NzYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbWVkaWEuY29ycG9yYXRlLWlyLm5ldFxcL21lZGlhX2ZpbGVzXFwvaXJvbFxcLzk3XFwvOTc2NjRcXC9yZXBvcnRzXFwvTWludHpiZXJnLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjUxMzQwNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNb2RlbGluZyBQb3RlbnRpYWwgSW5jb21lIGFuZCBXZWxmYXJlIFxcdTIwMTMgQmVuZWZpdHMgaW4gSWxsaW5vaXMgKDIwMTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2QyZHY3aHplNjQ2eHIuY2xvdWRmcm9udC5uZXRcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMTRcXC8xMlxcL1dlbGZhcmVfUmVwb3J0X2ZpbmFsZmluYWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDg0MjEyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJ1aWxkaW5nIGEgU2VsZi1IZWFsaW5nIE9wZXJhdGluZyBTeXN0ZW0gKDIwMDcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY2hvaWNlcy5jcy5pbGxpbm9pcy5lZHVcXC9zZWxmaGVhbGluZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NDU5OTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3RhdGljIFByb2dyYW0gQW5hbHlzaXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY3MuYXUuZGtcXC9+YW1vZWxsZXJcXC9zcGFcXC9zcGEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTE1NTYzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkV2aWRlbmNlIGZvciBiaW9sb2dpY2FsIHNoYXBpbmcgb2YgaGFpciBpY2UgKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5iaW9nZW9zY2llbmNlcy5uZXRcXC8xMlxcLzQyNjFcXC8yMDE1XFwvYmctMTItNDI2MS0yMDE1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzMwNTk5NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTZWN1cml0eSBDaGFzbXMgb2YgV0FTTSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9pLmJsYWNraGF0LmNvbVxcL3VzLTE4XFwvVGh1LUF1Z3VzdC05XFwvdXMtMTgtTHVrYXNpZXdpY3otV2ViQXNzZW1ibHktQS1OZXctV29ybGQtb2YtTmF0aXZlX0V4cGxvaXRzLU9uLVRoZS1XZWItd3AucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODM0Njc1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIklSUzogUmV2aWV3IG9mIHRoZSBTeXN0ZW0gRmFpbHVyZSBUaGF0IExlZCB0byB0aGUgVGF4IERheSBPdXRhZ2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnRyZWFzdXJ5LmdvdlxcL3RpZ3RhXFwvYXVkaXRyZXBvcnRzXFwvMjAxOHJlcG9ydHNcXC8yMDE4MjAwNjVmci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwNjI0MDVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIENPTlMgbWljcm9wcm9jZXNzb3IgKDE5NzQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2RzcGFjZS5taXQuZWR1XFwvYml0c3RyZWFtXFwvaGFuZGxlXFwvMTcyMS4xXFwvNDExMTVcXC9BSV9XUF8wODAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTMxMzUyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNldHRpbmcsIEVsYWJvcmF0aW5nLCBSZWZsZWN0aW5nIG9uIEdvYWxzIEltcHJvdmVzIEFjYWRlbWljIFBlcmZvcm1hbmNlICgyMDEwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2luZGl2aWR1YWwudXRvcm9udG8uY2FcXC9qYWNvYmhpcnNoXFwvcHVibGljYXRpb25zXFwvR29hbFNldHRpbmdKQVAyMDEwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODIwNjQ3MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMaXZlIENvZGluZyBpbiBTcG9ydGg6IEEgU3RhY2stQmFzZWQgTGFuZ3VhZ2UgZm9yIEF1ZGlvIFN5bnRoZXNpcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9pY2xjLmxpdmVjb2RlbmV0d29yay5vcmdcXC8yMDE3XFwvY2FtZXJhUmVhZHlcXC9zcG9ydGgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTE4MjM3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9uIHRoZSBEZXRlY3Rpb24gb2YgS2VybmVsLUxldmVsIFJvb3RraXRzIFVzaW5nIEhhcmR3YXJlIFBlcmZvcm1hbmNlIENvdW50ZXJzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNzLmJpbmdoYW10b24uZWR1XFwvfmRldnR5dXNoa2luXFwvYXNpYWNjcy0yMDE3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE2MTg4NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgU29jcmF0aWMgTWV0aG9kIGluIGFuIEFnZSBvZiBUcmF1bWEgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2hhcnZhcmRsYXdyZXZpZXcub3JnXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE3XFwvMTBcXC8yMzIwLTIzNDdfT25saW5lLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA1MDIwN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUbyBLaWxsIGEgQ2VudHJpZnVnZSAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmxhbmduZXIuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE3XFwvMDNcXC90by1raWxsLWEtY2VudHJpZnVnZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxMzMzMjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVlcCBMZWFybmluZzogQSBDcml0aWNhbCBBcHByYWlzYWwgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYXJ4aXYub3JnXFwvZnRwXFwvYXJ4aXZcXC9wYXBlcnNcXC8xODAxXFwvMTgwMS4wMDYzMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwODM0NjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVzaWduIGNhc2UgaGlzdG9yeTogdGhlIENvbW1vZG9yZSA2NCAoMTk4NSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc3BlY3RydW0uaWVlZS5vcmdcXC9uc1xcL3BkZnNcXC9jb21tb2RvcmU2NF9tYXIxOTg1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQzODEwNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTdWxvbmc6IEZpbmRpbmcgRXJyb3JzIGluIEMgUHJvZ3JhbXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9zc3cuamt1LmF0XFwvR2VuZXJhbFxcL1N0YWZmXFwvTWFudWVsUmlnZ2VyXFwvQVNQTE9TMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NTM2MDEzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgU3RhbGwtRnJlZSBSZWFsLVRpbWUgR2FyYmFnZSBDb2xsZWN0b3IgZm9yIFJlY29uZmlndXJhYmxlIEhhcmR3YXJlICgyMDEyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9yZXNlYXJjaGVyLndhdHNvbi5pYm0uY29tXFwvcmVzZWFyY2hlclxcL2ZpbGVzXFwvdXMtYmFjb25cXC9CYWNvbjEyQW5kVGhlbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzNDc2MjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2hpcGZvcmdlIG9wZW5zb3VyY2UgZm91bmRyeSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9naXRodWIuY29tXFwvbGV2aWF0aGFuY2hcXC9TSVRDT05cXC9ibG9iXFwvbWFzdGVyXFwvT1JDb25mLTIwMTgwOTIxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODEwNDM2MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbnRyb2R1Y3Rpb24gdG8gdGhlIE11bXBzIExhbmd1YWdlICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3MudW5pLmVkdVxcL35va2FuZVxcL3NvdXJjZVxcL01VTVBTLU1ESFxcL011bXBzVHV0b3JpYWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzA5MjM3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRhbmdlcm91cyBPcHRpbWl6YXRpb25zIGFuZCB0aGUgTG9zcyBvZiBDYXVzYWxpdHkgaW4gQyBhbmQgQysrICgyMDEwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wdWJ3ZWIuZW5nLnV0YWguZWR1XFwvfmNzNTc4NVxcL3NsaWRlcy1mMTBcXC9EYW5nZXJvdXMrT3B0aW1pemF0aW9ucy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczOTkyMjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIG5leHQgNzAwIHByb2dyYW1taW5nIGxhbmd1YWdlcyAoMTk2NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9mc2wuY3MuaWxsaW5vaXMuZWR1XFwvaW1hZ2VzXFwvZVxcL2VmXFwvUDE1Ny1sYW5kaW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzE4MTU4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRldGVjdGluZyBDb25zY2lvdXNuZXNzICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYWxsZW5pbnN0aXR1dGUub3JnXFwvbWVkaWFcXC9maWxlcl9wdWJsaWNcXC8zZVxcLzdhXFwvM2U3YWFiYjAtNWRhNy00OTE1LWI0YjYtMmFhODk2YzhmYWVlXFwvMjAxN18xMV9ob3d0b21ha2VhY29uc2Npb3VzbmVzc21ldGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMwMDI4MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDdXJlNTM6IEJyb3dzZXIgU2VjdXJpdHkgV2hpdGVwYXBlciAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY3VyZTUzLmRlXFwvYnJvd3Nlci1zZWN1cml0eS13aGl0ZXBhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQwNjY2M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgdG8gQ2F0Y2ggV2hlbiBQcm94aWVzIExpZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYW5kcmV3LmNtdS5lZHVcXC91c2VyXFwvbmljb2xhc2NcXC9wdWJsaWNhdGlvbnNcXC9XZWluYmVyZy1JTUMxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzMzYyODNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQnJpbmd1cCBpcyBIYXJkIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmdhcmJsZWQubmV0XFwvdG1wXFwvYnJpbmd1cC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0MzU1MTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRnVuY3Rpb25hbCBQZWFybDogRW51bWVyYXRpbmcgdGhlIFJhdGlvbmFscyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3Mub3guYWMudWtcXC9qZXJlbXkuZ2liYm9uc1xcL3B1YmxpY2F0aW9uc1xcL3JhdGlvbmFscy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1MTU0MTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcHV0YXRpb24gYW5kIFN0YXRlIE1hY2hpbmVzICgyMDA4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9sYW1wb3J0LmF6dXJld2Vic2l0ZXMubmV0XFwvcHVic1xcL3N0YXRlLW1hY2hpbmUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDEyNjcyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFsbCBZb3VyIElPUFMgQXJlIEJlbG9uZyB0byBVczogQ2FzZSBTdHVkeSBpbiBQZXJmb3JtYW5jZSBPcHRpbWl6YXRpb24gKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5wZXJjb25hLmNvbVxcL2xpdmVcXC9teXNxbC1jb25mZXJlbmNlLTIwMTVcXC9zaXRlc1xcL2RlZmF1bHRcXC9maWxlc1xcL3NsaWRlc1xcL2FsbF95b3VyX2lvcHNfYXJlX2JlbG9uZ190b191c1BMTUNFMjAxNS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyNTI5ODZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVENQIGFuZCBCQlIgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcmlwZTc2LnJpcGUubmV0XFwvcHJlc2VudGF0aW9uc1xcLzEwLTIwMTgtMDUtMTUtYmJyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzA2MzU4MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZXZlcnNlLUVuZ2luZWVyaW5nIFdlYkFzc2VtYmx5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5wbmZzb2Z0d2FyZS5jb21cXC9yZXZlcnNpbmctd2FzbS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MDc3NjdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3RpbGwgQWxsIG9uIE9uZSBTZXJ2ZXI6IFBlcmZvcmNlIGF0IFNjYWxlICgyMDExKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2luZm8ucGVyZm9yY2UuY29tXFwvcnNcXC9wZXJmb3JjZVxcL2ltYWdlc1xcL0dvb2dsZVdoaXRlUGFwZXItU3RpbGxBbGxvbk9uZVNlcnZlci1QZXJmb3JjZWF0U2NhbGUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjA3NDU3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFtYml0OiBJbi1NZW1vcnkgQWNjZWxlcmF0b3IgZm9yIEJ1bGsgQml0d2lzZSBPcGVyYXRpb25zIFVzaW5nIENvbW1vZGl0eSBEUkFNIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Blb3BsZS5pbmYuZXRoei5jaFxcL29tdXRsdVxcL3B1YlxcL2FtYml0LWJ1bGstYml0d2lzZS1kcmFtX21pY3JvMTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDg1Nzc4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwZWNpYWxpemluZyBSb3BlcyBmb3IgUnVieSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jaHJpc3NlYXRvbi5jb21cXC90cnVmZmxlcnVieVxcL3JvcGVzLW1hbmxhbmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTcxOTIwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlByb2dyYW1taW5nIGluIGFuIEludGVyYWN0aXZlIEVudmlyb25tZW50OiBUaGUgXFx1MjAxY0xpc3BcXHUyMDFkIEV4cGVyaWVuY2UgKDE5NzgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnNvZnR3YXJlcHJlc2VydmF0aW9uLm9yZ1xcL3Byb2plY3RzXFwvaW50ZXJhY3RpdmVfY1xcL2JpYlxcL1NhbmRld2FsbC0xOTc4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzczNjk1OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQcm9sb2cgYXMgRGVzY3JpcHRpb24gYW5kIEltcGxlbWVudGF0aW9uIExhbmd1YWdlIGluIENTIFRlYWNoaW5nICgyMDA0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5lcC5saXUuc2VcXC9lY3BcXC8wMTJcXC8wMDRcXC9lY3AwMTIwMDQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTc0MTkxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldoeSBUaHJlYWRzIEFyZSBhIEJhZCBJZGVhICgxOTk1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY2MuZ2F0ZWNoLmVkdVxcL2NsYXNzZXNcXC9BWTIwMTBcXC9jczQyMTBfZmFsbFxcL3BhcGVyc1xcL291c3RlcmhvdXQtdGhyZWFkcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyOTczMjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcGlsZXIgQ29uc3RydWN0aW9uOiBUaGUgQXJ0IG9mIE5pa2xhdXMgV2lydGggKDIwMDApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BkZnMuc2VtYW50aWNzY2hvbGFyLm9yZ1xcLzAzNmZcXC9jNGVmZmRhNGJiYmU5ZjZhOWVlNzYyZGY3MTdiZDBhZjEzMjQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NjA5MzYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlVuZGVyc3RhbmRpbmcsIGZpbmRpbmcsIGFuZCBlbGltaW5hdGluZyBncm91bmQgbG9vcHMgKDIwMDMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd2ViLm1pdC5lZHVcXC9qaGF3a1xcL3RtcFxcL3BcXC9FU1QwMTZfR3JvdW5kX0xvb3BzX2hhbmRvdXQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjQwNjc0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZ1enp5IExvZ2ljIGluIEFnZW50LUJhc2VkIEdhbWUgRGVzaWduIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3dlYi5ub3J0aGVhc3Rlcm4uZWR1XFwvbWFneVxcL2NvdXJzZXNcXC9BSVxcL0Z1enp5TG9naWNHYW1lcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyNjU4NjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTm8gQ2F1c2FsIEVmZmVjdCBvZiBNdXNpYyBQcmFjdGljZSBvbiBBYmlsaXR5ICgyMDE0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZ3dlcm4ubmV0XFwvZG9jc1xcL2dlbmV0aWNzXFwvY29ycmVsYXRpb25cXC8yMDE0LW1vc2luZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzNDg3MjdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRHluYW1pYyBBdXRvbWF0aWMgRGlmZmVyZW50aWF0aW9uIG9mIEdQVSBCcm9hZGNhc3QgS2VybmVscyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5taXQuZWR1XFwvfmp2aWVsbWFcXC9wdWJsaWNhdGlvbnNcXC9EeW5hbWljLUF1dG9tYXRpYy1EaWZmZXJlbnRpYXRpb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDA0MjAxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBQcm9ibGVtIHdpdGggVGhyZWFkcyAoMjAwNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Mi5lZWNzLmJlcmtlbGV5LmVkdVxcL1B1YnNcXC9UZWNoUnB0c1xcLzIwMDZcXC9FRUNTLTIwMDYtMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5OTY2NjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSW5zaWRlIHRoZSBXaW5kb3dzIDk1IEZpbGUgU3lzdGVtICgxOTk3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy50ZW5veC5uZXRcXC9ib29rc1xcL01pY3Jvc29mdF9XaW5kb3dzXFwvSW5zaWRlX3RoZV9XaW5kb3dzOTVfRmlsZV9TeXN0ZW0ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzkxNTI2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXB1dGF0aW9uYWwgQ29tcGxleGl0eSBvZiBBaXIgVHJhdmVsIFBsYW5uaW5nICgyMDAzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5kZW1hcmNrZW4ub3JnXFwvY2FybFxcL3BhcGVyc1xcL0lUQS1zb2Z0d2FyZS10cmF2ZWwtY29tcGxleGl0eVxcL0lUQS1zb2Z0d2FyZS10cmF2ZWwtY29tcGxleGl0eS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2NDIyNjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmFja2xvZzogUHJvbG9nIFN0eWxlIExvZ2ljIFByb2dyYW1taW5nIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BsdC5lZWNzLm5vcnRod2VzdGVybi5lZHVcXC9zbmFwc2hvdHNcXC9jdXJyZW50XFwvcGRmLWRvY1xcL3JhY2tsb2cucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzY3NzA4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgRmFpbHVyZSBvZiBBY2FkZW1pYyBRdWFsaXR5IENvbnRyb2wgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9qb3VybmFsb2Zwb3NpdGl2ZXNleHVhbGl0eS5vcmdcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMThcXC8wOFxcL0ZhaWx1cmUtb2YtQWNhZGVtaWMtUXVhbGl0eS1Db250cm9sLVRlY2hub2xvZ3ktb2YtT3JnYXNtLUxpZWJlcm1hbi1TY2hhdHpiZXJnLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg5Nzc1M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbiBFbXBpcmljYWwgU3R1ZHkgb2YgdGhlIFJlbGlhYmlsaXR5IG9mIFVuaXggVXRpbGl0aWVzICgxOTg5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2Z0cC5jcy53aXNjLmVkdVxcL3BhcmFkeW5cXC90ZWNobmljYWxfcGFwZXJzXFwvZnV6ei5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMjQwNjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQW1lcmljYW4gR3V0OiBBbiBPcGVuIFBsYXRmb3JtIGZvciBDaXRpemVuIFNjaWVuY2UgTWljcm9iaW9tZSBSZXNlYXJjaCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL21zeXN0ZW1zLmFzbS5vcmdcXC9jb250ZW50XFwvbXN5c1xcLzNcXC8zXFwvZTAwMDMxLTE4LmZ1bGwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDM0OTQ4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyB0aGUgUmVmb3JtdWxhdGlvbiBvZiBPeHlDb250aW4gSWduaXRlZCB0aGUgSGVyb2luIEVwaWRlbWljIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dzMubmQuZWR1XFwvfmVsaWViZXJcXC9yZXNlYXJjaFxcL0VMUC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY3OTIwNTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmFzaWMgQ2F2ZSBEaXZpbmc6IEEgQmx1ZXByaW50IGZvciBTdXJ2aXZhbCAoMTk4NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbnNzY2RzLm9yZ1xcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxOFxcLzA1XFwvQmx1ZXByaW50LWZvci1TdXJ2aXZhbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0ODMzMzlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ0ZUQyBhbmQgU0VDIFRlc3RpbW9ueSBvbiBDcnlwdG9jdXJyZW5jaWVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5iYW5raW5nLnNlbmF0ZS5nb3ZcXC9wdWJsaWNcXC9fY2FjaGVcXC9maWxlc1xcL2E1ZTcyYWM2LTRmOGEtNDczZi05YzljLWUyODk0NTczZDU3ZFxcL0JGNjI0MzNBMDlBOUI5NUEyNjlBMjlFMUZGMTNEMkJBLmNsYXl0b24tdGVzdGltb255LTItNi0xOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMTIwMjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiWmVyby1vdmVyaGVhZCBkZXRlcm1pbmlzdGljIGV4Y2VwdGlvbnM6IFRocm93aW5nIHZhbHVlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5vcGVuLXN0ZC5vcmdcXC9qdGMxXFwvc2MyMlxcL3dnMjFcXC9kb2NzXFwvcGFwZXJzXFwvMjAxOFxcL3AwNzA5cjAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDU5Mjk3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNyeXB0b2dyYXBoaWNhbGx5IENlcnRpZmllZCBIeXBvdGhlc2lzIFRlc3RpbmcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9zYWNoYXNlcnZhbnNjaHJlaWJlci5jb21cXC90aGVzaXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjkyOTgyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgSGlzdG9yeSBvZiBDYXBhY2l0eSBDaGFsbGVuZ2VzIGluIENvbXB1dGVyIFNjaWVuY2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY3Muc3RhbmZvcmQuZWR1XFwvcGVvcGxlXFwvZXJvYmVydHNcXC9DU0NhcGFjaXR5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMzNDk2OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNYWNoLU8gVHJpY2tzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvaW9raXQucmFjaW5nXFwvbWFjaG90cmlja3MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Mzc4ODI5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkV4cGxvaXRpbmcgQ29yb3V0aW5lcyB0byBBdHRhY2sgdGhlIFxcdTIwMWNLaWxsZXIgTmFub3NlY29uZHNcXHUyMDFkIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnZsZGIub3JnXFwvcHZsZGJcXC92b2wxMVxcL3AxNzAyLWpvbmF0aGFuLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQyMDk1MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQeWNrZXQ6IEEgVHJhY2luZyBKSVQgRm9yIGEgRnVuY3Rpb25hbCBMYW5ndWFnZSAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9ob21lcy5zaWNlLmluZGlhbmEuZWR1XFwvc2FtdGhcXC9weWNrZXQtZHJhZnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDA1NzM0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlN5c3RlbXMgU29mdHdhcmUgUmVzZWFyY2ggaXMgSXJyZWxldmFudCAoMjAwMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9kb2MuY2F0LXYub3JnXFwvYmVsbF9sYWJzXFwvdXRhaDIwMDBcXC91dGFoMjAwMC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyMDczMTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV2VsY29tZSB0byBETlMsIG9yIFNhdmluZyB0aGUgRE5TIENhbWVsIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2luZGljby5kbnMtb2FyYy5uZXRcXC9ldmVudFxcLzI5XFwvY29udHJpYnV0aW9uc1xcLzY1OFxcL2F0dGFjaG1lbnRzXFwvNjQxXFwvMTAzOVxcL1dlbGNvbWVfdG9fRE5TLWZpbmFsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODI1NTYxOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRGFyayAoUGF0dGVybnMpIFNpZGUgb2YgVVggRGVzaWduIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY29saW5ncmF5Lm1lXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE4X0dyYXlldGFsX0NISV9EYXJrUGF0dGVybnNVWERlc2lnbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5NjI0NjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTW9uYWRzIGZvciBmdW5jdGlvbmFsIHByb2dyYW1taW5nICgxOTk1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2hvbWVwYWdlcy5pbmYuZWQuYWMudWtcXC93YWRsZXJcXC9wYXBlcnNcXC9tYXJrdG9iZXJkb3JmXFwvYmFhc3RhZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwMDI1NTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT25saW5lIFRyYWNraW5nOiBBIDFNLXNpdGUgTWVhc3VyZW1lbnQgYW5kIEFuYWx5c2lzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvcmFuZG9td2Fsa2VyLmluZm9cXC9wdWJsaWNhdGlvbnNcXC9PcGVuV1BNXzFfbWlsbGlvbl9zaXRlX3RyYWNraW5nX21lYXN1cmVtZW50LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODc3MTQ5NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTRUMgc2V0dGxlcyB3aXRoIEV0aGVyRGVsdGEgZm91bmRlciBmb3IgcnVubmluZyBhbiB1bmxpY2Vuc2VkIGV4Y2hhbmdlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5zZWMuZ292XFwvbGl0aWdhdGlvblxcL2FkbWluXFwvMjAxOFxcLzM0LTg0NTUzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQxMDQ4M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOYW1pbmcgYW5kIFN5bmNocm9uaXphdGlvbiBpbiBhIERlY2VudHJhbGl6ZWQgQ29tcHV0ZXIgU3lzdGVtICgxOTc5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5kdGljLm1pbFxcL2R0aWNcXC90clxcL2Z1bGx0ZXh0XFwvdTJcXC9hMDYxNDA3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODI2NzAyMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNZXRob2RzIGZvciBTdHVkeWluZyBDb2luY2lkZW5jZXMgKDE5ODkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm1hdGgudWNoaWNhZ28uZWR1XFwvfmZjYWxlXFwvQ0NDXFwvREMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2Mjk3MDY3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRvIEV4cGxhaW4gb3IgdG8gUHJlZGljdD8gKDIwMTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmdhbGl0c2htdWVsaS5jb21cXC9zeXN0ZW1cXC9maWxlc1xcL1N0YXQlMjBTY2llbmNlJTIwcHVibGlzaGVkLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUwOTQwN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgSW50ZWwgODB4ODYgUHJvY2VzcyBBcmNoaXRlY3R1cmU6IFBpdGZhbGxzIGZvciBTZWN1cmUgU3lzdGVtcyAoMTk5NSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGRmcy5zZW1hbnRpY3NjaG9sYXIub3JnXFwvMjIwOVxcLzQyODA5MjYyYzE3YjY2MzFjMGY2NTM2YzkxYWFmNzc1Njg1Ny5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxMDE3MTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSW1wZXJmZWN0IEZvcndhcmQgU2VjcmVjeTogSG93IERpZmZpZS1IZWxsbWFuIEZhaWxzIGluIFByYWN0aWNlXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2poYWxkZXJtLmNvbVxcL3B1YlxcL3BhcGVyc1xcL3dlYWtkaC1jYWNtMTkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzI1ODI0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZyb2lkOiBPcHRpbWl6YXRpb24gb2YgSW1wZXJhdGl2ZSBQcm9ncmFtcyBpbiBhIFJlbGF0aW9uYWwgRGF0YWJhc2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cudmxkYi5vcmdcXC9wdmxkYlxcL3ZvbDExXFwvcDQzMi1yYW1hY2hhbmRyYS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3NDc4MDdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3VjY2luY3RlciBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3Blb3BsZS5jc2FpbC5taXQuZWR1XFwvbWlwXFwvcGFwZXJzXFwvc3VjY2luY3RcXC9zdWNjaW5jdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3MDE1NDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQW4gRlBHQSBJbXBsZW1lbnRhdGlvbiBvZiBhIERpc3RyaWJ1dGVkIFZpcnR1YWwgTWFjaGluZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3MudW5tLmVkdVxcL353aWxsaWFtc1xcL2ZwZ2EtdWNuYzE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc2MDI2N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgVHJvdWJsZSB3aXRoIE1hY3JvZWNvbm9taWNzICgyMDE2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wYXVscm9tZXIubmV0XFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE2XFwvMDlcXC9XUC1Ucm91YmxlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODE3OTk4OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDbGFzY2FsIFJlZmVyZW5jZSBNYW51YWwgZm9yIHRoZSBMaXNhICgxOTgzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5taXJyb3JzZXJ2aWNlLm9yZ1xcL3NpdGVzXFwvd3d3LmJpdHNhdmVycy5vcmdcXC9wZGZcXC9hcHBsZVxcL2xpc2FcXC90b29sa2l0X3VuaXZlcnNpdHlcXC9DbGFzY2FsX1JlZmVyZW5jZV9NYW51YWxfTWFyODMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTkxNzI4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNlbGYtQ2Vuc29yc2hpcCBpbiBQdWJsaWMgRGlzY291cnNlOiBBIFRoZW9yeSBvZiAnUG9saXRpY2FsIENvcnJlY3RuZXNzJyAoMTk5NCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmJyb3duLmVkdVxcL0RlcGFydG1lbnRzXFwvRWNvbm9taWNzXFwvRmFjdWx0eVxcL0dsZW5uX0xvdXJ5XFwvbG91cnlob21lcGFnZVxcL3BhcGVyc1xcL0xvdXJ5X1BvbGl0aWNhbF9Db3JyZWN0bmVzcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0NDIzNDdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFNjaGVtZSBNYWNoaW5lICgxOTk0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2J1cmdlcnJnLmdpdGh1Yi5pb1xcL1RSNDEzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzcwMjQyMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNYXRoZW1hdGljcyBpbiB0aGUgMjB0aCBjZW50dXJ5IFxcdTIwMTMgU2lyIE1pY2hhZWwgQXRpeWFoIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm1hdGgudGFtdS5lZHVcXC9+cm9qYXNcXC9hdGl5YWgyMHRoY2VudHVyeS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3MzA0MzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV2h5IEVjaG8gQ2hhbWJlcnMgQXJlIFVzZWZ1bCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZWNvbm9taWNzLm94LmFjLnVrXFwvbWF0ZXJpYWxzXFwvam1fcGFwZXJzXFwvOTIxXFwvZWNob2NoYW1iZXJzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM3NTQwOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCdWlsZGluZyBhIEJ3LVRyZWUgVGFrZXMgTW9yZSBUaGFuIEp1c3QgQnV6eiBXb3JkcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9kYi5jcy5jbXUuZWR1XFwvcGFwZXJzXFwvMjAxOFxcL21vZDM0Mi13YW5nQS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwNDE2MTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEhpc3RvcnksIENvbnRyb3ZlcnN5LCBhbmQgRXZvbHV0aW9uIG9mIHRoZSBHb3RvIFN0YXRlbWVudCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dlYi5zb25vbWEuZWR1XFwvdXNlcnNcXC9sXFwvbHV2aXNpXFwvZ290b1xcL2dvdG8ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDg0MjIxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkF1dG9tYXRlZCBQQ0IgUmV2ZXJzZSBFbmdpbmVlcmluZyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9zeXN0ZW1cXC9maWxlc1xcL2NvbmZlcmVuY2VcXC93b290MTdcXC93b290MTctcGFwZXIta2xlYmVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA4MjQ2NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOZXcgSGFyZHdhcmUgZm9yIE1hc3NpdmUgTmV1cmFsIE5ldHdvcmtzICgxOTg4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wYXBlcnMubmlwcy5jY1xcL3BhcGVyXFwvMjItbmV3LWhhcmR3YXJlLWZvci1tYXNzaXZlLW5ldXJhbC1uZXR3b3Jrcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzNzI5NTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRW50aXR5IENvbXBvbmVudCBTeXN0ZW1zIGFuZCBEYXRhIE9yaWVudGVkIERlc2lnbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2FyYXMtcC5pbmZvXFwvdGV4dHNcXC9maWxlc1xcLzIwMThBY2FkZW15JTIwLSUyMEVDUy1Eb0QucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjAyMzA4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRlc3RpbmcgVGhlb3JpZXMgb2YgQW1lcmljYW4gUG9saXRpY3M6IEVsaXRlcywgSW50ZXJlc3QgR3JvdXBzLCBDaXRpemVucyAoMjAxNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc2Nob2xhci5wcmluY2V0b24uZWR1XFwvc2l0ZXNcXC9kZWZhdWx0XFwvZmlsZXNcXC9tZ2lsZW5zXFwvZmlsZXNcXC9naWxlbnNfYW5kX3BhZ2VfMjAxNF8tdGVzdGluZ190aGVvcmllc19vZl9hbWVyaWNhbl9wb2xpdGljcy5kb2MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzI0NTkyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRlY2hub2xvZ2ljYWwgQ2hhbmdlIGFuZCBPYnNvbGV0ZSBTa2lsbHM6IEV2aWRlbmNlIGZyb20gTWVuXFx1MjAxOXMgUHJvIFRlbm5pcyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9pbmRpdmlkdWFsLnV0b3JvbnRvLmNhXFwvamhhbGxcXC9kb2N1bWVudHNcXC9UZW5uaXNUZWNoQ2hhbmdlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjcyMDQ2OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGbGFyZTogQW4gQXBwcm9hY2ggdG8gUm91dGluZyBpbiBMaWdodG5pbmcgTmV0d29yayAoMjAxNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9iaXRmdXJ5LmNvbVxcL2NvbnRlbnRcXC9kb3dubG9hZHNcXC93aGl0ZXBhcGVyX2ZsYXJlX2FuX2FwcHJvYWNoX3RvX3JvdXRpbmdfaW5fbGlnaHRuaW5nX25ldHdvcmtfN183XzIwMTYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDU3NDQxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJpY3ljbGUgVGVjaG5vbG9neSAoMTk3MykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC92ZXRlcmFuY3ljbGVjbHVibGlicmFyeS5vcmcudWtcXC9uY2xcXC9waWNzXFwvQmljeWNsZSUyMFRlY2hub2xvZ3klMjBTY2llbnRpZmljJTIwQW1lcmljYW4lMjBNYXJjaCUyMDE5NzMlMjAoVi1DQyUyMExpYnJhcnkpLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk2ODI2N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgQnJvd3NlcnNcXHUyMDE5IEV4cGxhbmF0aW9ucyBJbXBhY3QgTWlzY29uY2VwdGlvbnMgQWJvdXQgUHJpdmF0ZSBCcm93c2luZyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYmxhc2V1ci5jb21cXC9wYXBlcnNcXC93d3cxOHByaXZhdGVicm93c2luZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0NTYwNDdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT3ZlcmxvYWQgQ29udHJvbCBmb3IgU2NhbGluZyBXZUNoYXQgTWljcm9zZXJ2aWNlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3MuY29sdW1iaWEuZWR1XFwvfnJ1aWd1XFwvcGFwZXJzXFwvc29jYzE4LWZpbmFsMTAwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY5MTQ2MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQb3B1bGFyaXR5IER5bmFtaWNzIGFuZCBJbnRyaW5zaWMgUXVhbGl0eSBpbiBSZWRkaXQgYW5kIEhhY2tlciBOZXdzICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZGZzLnNlbWFudGljc2Nob2xhci5vcmdcXC9jY2Y2XFwvMGQwOGJkZDk4OWVhMzU5NWJiYmRhMTMyZGVkZDcxYzQ3YWNmLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODI5MDkwNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTaG93IEhOOiBBIFJvb3QgQ2F1c2UgQW5hbHlzaXMgRUJvb2sgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuc29sb2dpYy5jb21cXC9zaXRlc1xcL2RlZmF1bHRcXC9maWxlc1xcL3BkZlxcL1JDQS1lYm9vay1teS1ib3NzLXRvbGQtbWUtdG8tZG8tcmNhLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQ4Mzc2MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTdXJ2aXZhbCBpbiB0aGUgZmlyc3QgaG91cnMgb2YgdGhlIENlbm96b2ljICgyMDA0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3VhaG9zdC51YW50d2VycGVuLmJlXFwvZnVubW9ycGhcXC9yYW91bFxcL21hY3JvZXZvbHV0aWVcXC9Sb2JlcnRzb24yMDA0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc0ODk5NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRGlzY292ZXJpZXMgb2YgQ29udGludWF0aW9ucyAoMTk5MykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubWF0aC5iYXMuYmdcXC9+YmFudGNoZXZcXC9wbGFjZVxcL2lzd2ltXFwvY29udGktZGlzY28ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDU3OTE0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9yYWwgSGlzdG9yeSBvZiBKb2huIEJhY2t1cyAoMjAwNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9hcmNoaXZlLmNvbXB1dGVyaGlzdG9yeS5vcmdcXC9yZXNvdXJjZXNcXC9hY2Nlc3NcXC90ZXh0XFwvMjAxM1xcLzA1XFwvMTAyNjU3OTcwLTA1LTAxLWFjYy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1NjQxODZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUGVla2luZyBCZWhpbmQgdGhlIEN1cnRhaW5zIG9mIFNlcnZlcmxlc3MgUGxhdGZvcm1zIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvcGFnZXMuY3Mud2lzYy5lZHVcXC9+bGlhbmd3XFwvcHViXFwvYXRjMTgtZmluYWwyOTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Njg2MjIzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgTWF0aGVtYXRpY2lhblxcdTIwMTlzIEFwb2xvZ3kgKDE5NDApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm1hdGgudWFsYmVydGEuY2FcXC9+bXNzXFwvbWlzY1xcL0ElMjBNYXRoZW1hdGljaWFuJTI3cyUyMEFwb2xvZ3kucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDM3NTUwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxIRDogSW1wcm92aW5nIENhY2hlIEhpdCBSYXRlIGJ5IE1heGltaXppbmcgSGl0IERlbnNpdHkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY3MuY211LmVkdVxcL35iZWNrbWFublxcL3B1YmxpY2F0aW9uc1xcL3BhcGVyc1xcLzIwMTgubnNkaS5saGQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODI1OTMxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRpcmVjdGlvbiBmb3IgSVNPIEMrKyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5vcGVuLXN0ZC5vcmdcXC9KVEMxXFwvU0MyMlxcL1dHMjFcXC9kb2NzXFwvcGFwZXJzXFwvMjAxOFxcL3AwOTM5cjAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2Mzk0MDQxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZvcnRpZnlpbmcgTWFjcm9zICgyMDEwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cyLmNjcy5uZXUuZWR1XFwvcmFja2V0XFwvcHVic1xcL2ljZnAxMC1jZi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzNzIxMDNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVwcmVjYXRpbmcgdGhlIE9ic2VydmVyIFBhdHRlcm4gKDIwMTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2luZm9zY2llbmNlLmVwZmwuY2hcXC9yZWNvcmRcXC8xNDgwNDNcXC9maWxlc1xcL0RlcHJlY2F0aW5nT2JzZXJ2ZXJzVFIyMDEwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg0NTM0MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21waWxlciBGdXp6aW5nIFRocm91Z2ggRGVlcCBMZWFybmluZyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2hvbWVwYWdlcy5pbmYuZWQuYWMudWtcXC9obGVhdGhlclxcL3B1YmxpY2F0aW9uc1xcLzIwMThfZGVlcGZ1enppbmdfaXNzdGEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzQ4MTkzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIllvdSBDb3VsZCBIYXZlIEludmVudGVkIFNwZWN0cmFsIFNlcXVlbmNlcyAoMjAwNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC90aW1vdGh5Y2hvdy5uZXRcXC9zcGVjdHJhbDAyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA2Mzk5OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZWxhdGlvbnNoaXAgQmV0d2VlbiBQcmFjdGljZSBhbmQgUGVyZm9ybWFuY2UgaW4gU3BvcnRzOiBBIE1ldGEtQW5hbHlzaXMgKDIwMTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FydHNjaW1lZGlhLmNhc2UuZWR1XFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC9zaXRlc1xcLzE0MVxcLzIwMTZcXC8wOVxcLzE0MjE0ODU2XFwvTWFjbmFtYXJhLU1vcmVhdS1IYW1icmljay0yMDE2LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg3NDA2OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIZXJiZXJ0IFNpbW9uOiBUaGUgQXJjaGl0ZWN0dXJlIG9mIENvbXBsZXhpdHkgKDE5NjIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZWNvcGxleGl0eS5vcmdcXC9maWxlc1xcL3VwbG9hZHNcXC9TaW1vbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzOTIyMjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmVtaW5pc2NlbmNlcyBvZiB0aGUgVkxTSSBSZXZvbHV0aW9uICgyMDEyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dvcnJ5ZHJlYW0uY29tXFwvcmVmc1xcL0NvbndheSUyMC0lMjBSZW1pbmlzY2VuY2VzJTIwb2YlMjB0aGUlMjBWTFNJJTIwUmV2b2x1dGlvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxNDAyOTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmluZ2VyIFByaW50aW5nIERhdGEgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZXByaW50LmlhY3Iub3JnXFwvMjAxOFxcLzUwMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxNjI2MTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUXVhbnRpdGF0aXZlIGFuYWx5c2lzIG9mIGZhbWlseSB0cmVlcyB3aXRoIG1pbGxpb25zIG9mIHJlbGF0aXZlcyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmJpb3J4aXYub3JnXFwvY29udGVudFxcL2Jpb3J4aXZcXC9lYXJseVxcLzIwMTdcXC8wMlxcLzA3XFwvMTA2NDI3LjEuZnVsbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0OTkyNDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2xvdWRLaXQ6IFN0cnVjdHVyZWQgU3RvcmFnZSBmb3IgTW9iaWxlIEFwcGxpY2F0aW9ucyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy52bGRiLm9yZ1xcL3B2bGRiXFwvdm9sMTFcXC9wNTQwLXNocmFlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyODEyNzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhpcnR5IFllYXJzIExhdGVyOiBMZXNzb25zIGZyb20gdGhlIE11bHRpY3MgU2VjdXJpdHkgRXZhbHVhdGlvbiAoMjAwMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmFjc2FjLm9yZ1xcLzIwMDJcXC9wYXBlcnNcXC9jbGFzc2ljLW11bHRpY3MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTU2Mzg2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhpbnRzIGZvciBDb21wdXRlciBTeXN0ZW0gRGVzaWduICgxOTgzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubWljcm9zb2Z0LmNvbVxcL2VuLXVzXFwvcmVzZWFyY2hcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMTZcXC8wMlxcL2Fjcm9iYXQtMTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTg3NzQ4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBDb21wdXRlciBhbmQgdGhlIEJyYWluICgxOTU4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9pYTgwMDgwMC51cy5hcmNoaXZlLm9yZ1xcLzRcXC9pdGVtc1xcL1RoZUNvbXB1dGVyQW5kVGhlQnJhaW5cXC9UaGUlMjBDb21wdXRlciUyMGFuZCUyMFRoZSUyMEJyYWluX3RleHQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDYxMTUyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5hdHVyYWwgU291bmRpbmcgQXJ0aWZpY2lhbCBSZXZlcmJlcmF0aW9uICgxOTYyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NoYXJsZXNhbWVzLm5ldFxcL3BkZlxcL01SU2Nocm9lZGVyXFwvYXJ0aWZpY2lhbC1yZXZlcmIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzA0MzU0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNlbGYtcmVmZXJlbmNlIGFuZCBMb2dpYyAoMjAwNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuaW1tLmR0dS5ka1xcL350b2JvXFwvZXNzYXkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODQ1Mjg4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRlY2huaXF1ZXMgb2YgU3lzdGVtcyBBbmFseXNpcyAoMTk1NykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnJhbmQub3JnXFwvY29udGVudFxcL2RhbVxcL3JhbmRcXC9wdWJzXFwvcmVzZWFyY2hfbWVtb3JhbmRhXFwvMjAwNlxcL1JNMTgyOS0xLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjM1NTg4NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbXBsZW1lbnRpbmcgU0lQIFRlbGVwaG9ueSBpbiBQeXRob24gKDIwMDgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvMzlwZWVycy5uZXRcXC9kb3dubG9hZFxcL2RvY1xcL3JlcG9ydC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NTc3MzdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUHJhY3RpY2FsIE1lbW9yeSBTYWZldHkgd2l0aCBSYW5kb20gRW1iZWRkZWQgU2VjcmV0IFRva2VucyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jcy5jb2x1bWJpYS5lZHVcXC9+c2ltaGFcXC9wcmVwcmludF9pc2NhMThfUkVTVF9tZW1vcnlfc2FmZXR5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjg5MTMxOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTY2FsYWJsZSAxMCBHYnBzIFRDUFxcL0lQIFN0YWNrIEFyY2hpdGVjdHVyZSBmb3IgUmVjb25maWd1cmFibGUgSGFyZHdhcmUgKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZGF2aWRzaWRsZXIuY2hcXC9maWxlc1xcL2ZjY20yMDE1LXRjcGlwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk5NDcxM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJVbmRlcnN0YW5kIGFuZCBFbGltaW5hdGUgSlZNIFdhcm0tVXAgT3ZlcmhlYWQgaW4gRGF0YS1QYXJhbGxlbCBTeXN0ZW1zICgyMDE2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL3N5c3RlbVxcL2ZpbGVzXFwvY29uZmVyZW5jZVxcL29zZGkxNlxcL29zZGkxNi1saW9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk5NTA1NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgVHlyYW5ueSBvZiB0aGUgQ2xvY2sgKDIwMTIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmVuZy5hdWJ1cm4uZWR1XFwvfnVndWluXFwvdGVhY2hpbmdcXC9SRUFESU5HXFwvRTYyMDBcXC9TdXRoZXJsYW5kX1R5cmFubnlfb19DbG9jay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1Nzc2NzdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmZsb2F0MTYgXFx1MjAxMyBIYXJkd2FyZSBOdW1lcmljcyBEZWZpbml0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3NvZnR3YXJlLmludGVsLmNvbVxcL3NpdGVzXFwvZGVmYXVsdFxcL2ZpbGVzXFwvbWFuYWdlZFxcLzQwXFwvOGJcXC9iZjE2LWhhcmR3YXJlLW51bWVyaWNzLWRlZmluaXRpb24td2hpdGUtcGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDc1NTc1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXBpbGluZyBhIFN1YnNldCBvZiBBUEwgaW50byBhIFR5cGVkIEludGVybWVkaWF0ZSBMYW5ndWFnZSAoMjAxNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9oaXBlcmZpdC5ka1xcL3BkZlxcL2FycmF5MTRfZmluYWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MjMwMDY3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdlbmV0aWMgUHJlZGlzcG9zaXRpb24gdG8gT2Jlc2l0eSBhbmQgTWVkaWNhcmUgRXhwZW5kaXR1cmVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5nd2Vybi5uZXRcXC9kb2NzXFwvZ2VuZXRpY3NcXC9zZWxlY3Rpb25cXC8yMDE3LXdlaGJ5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQzNDY5N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbXBlcmZlY3QgRm9yd2FyZCBTZWNyZWN5OiBIb3cgRGlmZmllLUhlbGxtYW4gRmFpbHMgaW4gUHJhY3RpY2UgKDIwMTUpXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3dlYWtkaC5vcmdcXC9pbXBlcmZlY3QtZm9yd2FyZC1zZWNyZWN5LWNjczE1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODcyNTgyNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNYXRoZW1hdGljYWwgTWV0YXBoeXNpY3MgKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvc2hlbGYxLmxpYnJhcnkuY211LmVkdVxcL0hTU1xcLzIwMTVcXC9hMTYyNjE5MC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0NjI5NDdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmV0cG9saW5lOiBBIEJyYW5jaCBUYXJnZXQgSW5qZWN0aW9uIE1pdGlnYXRpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc29mdHdhcmUuaW50ZWwuY29tXFwvc2l0ZXNcXC9kZWZhdWx0XFwvZmlsZXNcXC9tYW5hZ2VkXFwvMWRcXC80NlxcL1JldHBvbGluZS1BLUJyYW5jaC1UYXJnZXQtSW5qZWN0aW9uLU1pdGlnYXRpb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDIzNDAxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkVzc2VudGlhbHMgb2YgTWV0YWhldXJpc3RpY3MgKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2NzLmdtdS5lZHVcXC9+c2VhblxcL2Jvb2tcXC9tZXRhaGV1cmlzdGljc1xcL0Vzc2VudGlhbHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDkxMjc0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlZlcmlmeWluZyBDb25jdXJyZW50IFByb2dyYW1zIFVzaW5nIENvbnRyYWN0cyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZml0LnZ1dGJyLmN6XFwvfnZvam5hclxcL1B1YmxpY2F0aW9uc1xcL2ljc3QxNy1jb250cmFjdHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDAzMjQ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBUWC0yIENvbXB1dGVyIGFuZCBTa2V0Y2hwYWQgKDIwMTIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5sbC5taXQuZWR1XFwvcHVibGljYXRpb25zXFwvbGFibm90ZXNcXC9Mb29raW5nQmFja18xOV8xLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA1ODk2NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHcm91bmQ6IEEgRGF0YSBDb250ZXh0IFNlcnZpY2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcmlzZS5jcy5iZXJrZWxleS5lZHVcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMTdcXC8wM1xcL0NJRFIxNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0MTU0NTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU29DIGl0IHRvIEVNOiBFTSBzaWRlLWNoYW5uZWwgYXR0YWNrcyBvbiBhIGNvbXBsZXggU29DIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5pYWNyLm9yZ1xcL2FyY2hpdmVcXC9jaGVzMjAxNVxcLzkyOTMwNTk5XFwvOTI5MzA1OTkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MjIwNjYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIklDQU5OIHNlZWtpbmcgaW5wdXQgb24gY2VkaW5nIGNvbnRyb2wgb2YgV0hPSVMgcHJpdmFjeSB0byBnb3Zlcm5tZW50cyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuaWNhbm4ub3JnXFwvZW5cXC9zeXN0ZW1cXC9maWxlc1xcL2ZpbGVzXFwvcHJvcG9zZWQtaW50ZXJpbS1tb2RlbC1nZHByLWNvbXBsaWFuY2Utc3VtbWFyeS1kZXNjcmlwdGlvbi0yOGZlYjE4LWVuLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQ5MTU2NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOSVNUIFVuY2VydGFpbnR5IE1hY2hpbmUgXFx1MjAxMyBVc2VyXFx1MjAxOXMgTWFudWFsIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3VuY2VydGFpbnR5Lm5pc3QuZ292XFwvTklTVFVuY2VydGFpbnR5TWFjaGluZS1Vc2VyTWFudWFsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzAwODcwNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaHJlZSBHZW5lcmF0aW9ucyBvZiBBc3luY2hyb25vdXMgTWljcm9wcm9jZXNzb3JzICgyMDAzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL21haWwuYXN5bmMuY2FsdGVjaC5lZHVcXC9QdWJzXFwvUERGXFwvMjAwM190aHJlZWdlbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1NDY3MzFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSW5zaWRlciBBY2NvdW50cyBvZiBDb21wdXRpbmcgYW5kIExpZmUgYXQgQkJOOiBBIHNpeHR5LXllYXIgcmVwb3J0ICgyMDExKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dhbGRlbi1mYW1pbHkuY29tXFwvYmJuXFwvYmJuLXByaW50Mi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxNjY2ODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWlsbCBDUFUgaXMgSW1tdW5lIHRvIFNwZWN0cmUsIE1lbHRkb3duIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL21pbGxjb21wdXRpbmcuY29tXFwvYmxvZ1xcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxOFxcLzAxXFwvU3BlY3RyZS4wMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxNTM1NzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV2h5IEpvaG5ueSBEb2VzblxcdTIwMTl0IFVzZSBUd28gRmFjdG9yIFxcdTIwMTMgQSBTdHVkeSBvZiB0aGUgRklETyBVMkYgU2VjdXJpdHkgS2V5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2ZjMTguaWZjYS5haVxcL3ByZXByb2NlZWRpbmdzXFwvMTExLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzczMjQ2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb250cmFjdHMgaW4gT3BlbkJTRCAoMjAxMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9raW5kc29mdHdhcmUuY29tXFwvZG9jdW1lbnRzXFwvcmVwb3J0c1xcL1Rvcmxha2NpazEwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzkzOTc5OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3VzZSBvZiBDb21tb25zIGNvbW1pdHRlZSByZS1pbnZpdGVzIHRvIE1hcmsgWnVja2VyYnVyZyB0byBhcHBlYXIgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnBhcmxpYW1lbnQudWtcXC9kb2N1bWVudHNcXC9jb21tb25zLWNvbW1pdHRlZXNcXC9jdWx0dXJlLW1lZGlhLWFuZC1zcG9ydFxcLzE4MDUwMS1DaGFpci10by1SZWJlY2NhLVN0aW1zb24tRmFjZWJvb2stcmUtb3JhbC1ldmlkZW5jZS1mb2xsb3ctdXAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTY2ODgyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNjaWVuY2UgYW5kIExpbmd1aXN0aWNzICgxOTQwKVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dlYi5taXQuZWR1XFwvYWxsYW5tY1xcL3d3d1xcL3dob3JmLnNjaWVuY2VhbmRsaW5ndWlzdGljcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwNzI3OThcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR3JheSBGYWlsdXJlOiBUaGUgQWNoaWxsZXMnIEhlZWwgb2YgQ2xvdWQtU2NhbGUgU3lzdGVtcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3Muamh1LmVkdVxcL35odWFuZ1xcL3BhcGVyXFwvZ3JheWZhaWx1cmUtaG90b3MxNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyNTM0MDVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiS0xFQUs6IFByYWN0aWNhbCBLZXJuZWwgTWVtb3J5IERpc2Nsb3N1cmUgRGV0ZWN0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL25ldGJzZC5vcmdcXC9nYWxsZXJ5XFwvcHJlc2VudGF0aW9uc1xcL21heHZcXC9rbGVhay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2NDgwNjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIERlc2lnbiBhbmQgSW1wbGVtZW50YXRpb24gb2YgSHlwZXJ1cGNhbGxzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvc3lzdGVtXFwvZmlsZXNcXC9jb25mZXJlbmNlXFwvYXRjMThcXC9hdGMxOC1hbWl0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUxMzUzMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPbiB0aGUgV29yayBvZiBFZHdhcmQgV2l0dGVuICgxOTkwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2JvaHIucGh5c2ljcy5iZXJrZWxleS5lZHVcXC9yZWluc2NoXFwvcGh5czEwNXNwcjIwMTRcXC9maWxlc1xcL1dpdHRlbl9BdGl5YWgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDUzMTYzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBmdW5jdGlvbiBvZiBkcmVhbSBzbGVlcCAoMTk4MykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcHJvZmlsZXMubmxtLm5paC5nb3ZcXC9wc1xcL2FjY2Vzc1xcL3NjYmNkay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0MDU4MTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmVjb2xsZWN0aW9ucyBvZiBFYXJseSBDaGlwIERldmVsb3BtZW50IGF0IEludGVsIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2xhcmsudHUtc29maWEuYmdcXC9udHRcXC9ldXNrdVxcL3JlYWRpbmdzXFwvYXJ0XzEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjI0NzIyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSB0cmFnZWR5IG9mIHRoZSBjb21tb25zIGluIGV2b2x1dGlvbmFyeSBiaW9sb2d5ICgyMDA3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5rb2trb251dHMub3JnXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC9SYW5raW5fVG9DLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODU1NzY1N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgTmV3cyBBZ2dyZWdhdG9ycyBIZWxwIERldmVsb3BtZW50IENvbW11bml0aWVzIFNoYXBlIGFuZCBTaGFyZSBLbm93bGVkZ2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY3RyZXVkZS5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxOFxcLzAyXFwvaWNzZTE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzA1Nzg1OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJVbmlxdWUgSVB2NiBwcmVmaXggcGVyIGhvc3QgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcmlwZTc2LnJpcGUubmV0XFwvcHJlc2VudGF0aW9uc1xcLzE0My1yZmM4MjczLXY1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzA5MTE3NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQZXBwZXIncyBDb25lOiBBbiBJbmV4cGVuc2l2ZSBEby1JdC1Zb3Vyc2VsZiAzRCBEaXNwbGF5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZ3JhaWwuY3Mud2FzaGluZ3Rvbi5lZHVcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMTdcXC8xMFxcL2x1bzIwMTdwY2EucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDUxMDc4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJhU2lYIFxcdTIwMTMgQSBCYXNpYyBpbnRlcnByZXRlciB3cml0dGVuIGluIFRlWCAoMTk5MCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cudHVnLm9yZ1xcL1RVR2JvYXRcXC90YjExLTNcXC90YjI5Z3JlZW5lLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUwOTUxOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgTWV0YXBoeXNpY2FsIFRyYW5zcGFyZW5jeSBvZiBUcnV0aCAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnV2bS5lZHVcXC9+bGRlcm9zc2VcXC90cmFuc3BhcmVuY3kucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTgxNzk5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlN0YXRlbGVzcyBOZXR3b3JrIEZ1bmN0aW9ucyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9zeXN0ZW1cXC9maWxlc1xcL2NvbmZlcmVuY2VcXC9uc2RpMTdcXC9uc2RpMTcta2FibGFuLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ3MDc0OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEaXJlY3QgQ29udmVyc2lvbiBSZWNlaXZlcnM6IFNvbWUgQW1hdGV1ciBSYWRpbyBIaXN0b3J5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvdzd6b2kubmV0XFwvZGNyeDY4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ0OTQwN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCIjaWZkZWYgY29uc2lkZXJlZCBoYXJtZnVsICgxOTkyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC91c2VuaXgub3JnXFwvbGVnYWN5XFwvcHVibGljYXRpb25zXFwvbGlicmFyeVxcL3Byb2NlZWRpbmdzXFwvc2E5MlxcL3NwZW5jZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjI0MDE0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBGb3JnZXRmdWxuZXNzIG9mIEJlaW5ncyAoMTk5NykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbWFyaXRhaW4ubmQuZWR1XFwvYW1hXFwvQ2lhcGFsb1xcL0NpYXBhbG8xNC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0MzI1NjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVzaWduaW5nIGV4cGVyaW1lbnRzIGZvciB1bmRlcnN0YW5kaW5nIHBlcmZvcm1hbmNlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3RpbWhhcnJpcy51a1xcL21pc2NcXC9maXZlLXdheXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzQ2MTM4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlZpc3VhbCBvdmVydmlldyBvZiByYWRpYXRvciB2YWx2ZXMgdXNlZCBpbiBHZXJtYW55IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5lcS0zLmRlXFwvRG93bmxvYWRzXFwvZXEzXFwvZG93bmxvYWQlMjBiZXJlaWNoXFwvVmVudGlsa29tcGF0aWJpbGl0YWV0ZW4tTW9kZWwtTi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1MzI0NDZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29kZSBJbmZsYXRpb24gKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jb21wdXRlci5vcmdcXC9jbXNcXC9Db21wdXRlci5vcmdcXC9Db21wdXRpbmdOb3dcXC9pc3N1ZXNcXC8yMDE1XFwvMDRcXC9tc28yMDE1MDIwMDEwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc4NzkyMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgTmF0dXJhbCBSYXRlIG9mIEludGVyZXN0IElzIFplcm8gKDIwMDQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNmZXBzLm9yZ1xcL3B1YnNcXC93cC1wZGZcXC9XUDM3LU1vc2xlckZvcnN0YXRlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0MTQxOTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGltaW5nIEFuYWx5c2lzIG9mIEtleXN0cm9rZXMgYW5kIFRpbWluZyBBdHRhY2tzIG9uIFNTSCAoMjAwMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGVvcGxlLmVlY3MuYmVya2VsZXkuZWR1XFwvfmRhd1xcL3BhcGVyc1xcL3NzaC11c2UwMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1NTc5MTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEhpc3RvcnkgYW5kIENvbmNlcHQgb2YgQ29tcHV0YWJpbGl0eSAoMTk5NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cucGVvcGxlLmNzLnVjaGljYWdvLmVkdVxcL35zb2FyZVxcL0hpc3RvcnlcXC9oYW5kYm9vay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyOTgzODlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTklTVDogVXNhYmlsaXR5IGFuZCBLZXkgTWFuYWdlbWVudCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jc3JjLm5pc3QuZ292XFwvQ1NSQ1xcL21lZGlhXFwvUHJlc2VudGF0aW9uc1xcL1VzYWJpbGl0eS1hbmQtS2V5LU1hbmFnZW1lbnRcXC9pbWFnZXMtbWVkaWFcXC9Vc2FiaWxpdHlfYW5kX0tleV9NZ210LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzgwODkxMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbiBBbmFseXNpcyBvZiB0aGUgUHJvdG9uTWFpbCBDcnlwdG9ncmFwaGljIEFyY2hpdGVjdHVyZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lcHJpbnQuaWFjci5vcmdcXC8yMDE4XFwvMTEyMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1MDA5MjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQWR2YW5jZXMgaW4gT3BlbkJTRCBwYWNrYWdlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cub3BlbmJzZC5vcmdcXC9wYXBlcnNcXC9ldXJvYnNkY29uXzIwMThfaHR0cHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDU2Nzc0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgTW9kZWwgb2YgTWVudGFsIEZsdWlkaXR5IGFuZCBBbmFsb2d5LU1ha2luZyAoMTk5NCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9wb3J0YWwudW5pLWZyZWlidXJnLmRlXFwvY29nbml0aW9uXFwvbGVocmVcXC9hcmNoaXZcXC9XUzA5MTBcXC9hbmFsb2dpZW1hdFxcLzZ0aHNpdHRpbmdcXC9Wb3J0cmFnXFwvY29weWNhdGFtb2RlbG9mbWVudGFsZmx1aWRpdHlhbmRhbmFsb2d5bWFraW5nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjI5OTgwNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21wYXJpc29uIG9mIE1ldGFoZXVyaXN0aWNzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Mi5jc2NhbW0udW1kLmVkdVxcL3B1YmxpY2F0aW9uc1xcL0Jvb2tDaGFwdGVyX0NTLTA5LTEzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ5MTI3OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQeXRob25cXHUyMDE5cyBNZXRhLU9iamVjdCBQcm90b2NvbCAoMjAxMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9sYXNlci5pbmYuZXRoei5jaFxcLzIwMTJcXC9zbGlkZXNcXC92YW5Sb3NzdW1cXC9sYXNlci1tb3AucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjY5NjIxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgSGlzdG9yeSBvZiBJbmRpdmlkdWFsbHkgV3JhcHBlZCBDaGVlc2UgU2xpY2VzICgxOTc5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dzU2LmhvbWVwYWdlLnZpbGxhbm92YS5lZHVcXC9kYXZpZC5uYXdyb2NraVxcL0Fybm9sZCUyME5hd3JvY2tpJTIwSVdTJTIwUGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjM5NTE0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlZvaWNlLW1hdGNoaW5nIHRlY2hub2xvZ3kgd2FzIGRldmVsb3BlZCBieSBNSVRcXC9MaW5jb2xuIExhYnMgdW5kZXIgTlNBIGNvbnRyYWN0IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2Fzc2V0cy5kb2N1bWVudGNsb3VkLm9yZ1xcL2RvY3VtZW50c1xcLzQzNTE5ODdcXC8yMDA2LTAxLTA0LVRlY2hub2xvZ3ktVGhhdC1JZGVudGlmaWVzLVBlb3BsZS1ieS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxOTUwMzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29nbml0aXZlIE5ldHdvcmtzOiBCcmFpbnMsIEludGVybmV0LCBhbmQgQ2l2aWxpemF0aW9ucyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGRmcy5zZW1hbnRpY3NjaG9sYXIub3JnXFwvMzQyZFxcLzY3MmJhNjU2MTAyZmQ1YTk4ZGYyYzg4MjcyM2VmMzAyMmVmZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0ODUxNTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3F1ZWFrOiBBIExhbmd1YWdlIGZvciBDb21tdW5pY2F0aW5nIHdpdGggTWljZSAoMTk4NSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9vcmRpZWNvbGUuY29tXFwvc3F1ZWFrXFwvY2FyZGVsbGlfc3F1ZWFrMTk4NS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3ODc3ODFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTmV1cm9tb3JwaGljIGNvbXB1dGluZyB3aXRoIG11bHRpLW1lbXJpc3RpdmUgc3luYXBzZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm5hdHVyZS5jb21cXC9hcnRpY2xlc1xcL3M0MTQ2Ny0wMTgtMDQ5MzMteS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3MTI4OTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmV2aXNpdGluZyB0aGUgUmlza3Mgb2YgQml0Y29pbiBDdXJyZW5jeSBFeGNoYW5nZSBDbG9zdXJlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3R5bGVybW9vcmUudXR1bHNhLmVkdVxcL3RvaXQxNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMzc3ODJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBEZWNhZGUgb2YgTGF0dGljZSBDcnlwdG9ncmFwaHkgKDIwMTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd2ViLmVlY3MudW1pY2guZWR1XFwvfmNwZWlrZXJ0XFwvcHVic1xcL2xhdHRpY2Utc3VydmV5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzcwMTE0OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGaWVsZCBHdWlkZSBmb3IgRGVzaWduaW5nIEh1bWFuIEludGVyYWN0aW9uIHdpdGggSW50ZWxsaWdlbnQgU3lzdGVtcyAoMTk5OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc3Rvbi5qc2MubmFzYS5nb3ZcXC9jb2xsZWN0aW9uc1xcL3Ryc1xcL190ZWNocmVwXFwvVE0tMTk5OC0yMDg0NzAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDQ5OTQ1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNyYWJzOiB0aGUgYml0bWFwIHRlcnJvciAoMTk4NSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9sdWNhY2FyZGVsbGkubmFtZVxcL1BhcGVyc1xcL0NyYWJzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjk2NzUyOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTdWdhcjogU2VjdXJlIEdQVSBBY2NlbGVyYXRpb24gaW4gV2ViIEJyb3dzZXJzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5pY3MudWNpLmVkdVxcL35hcmRhbGFuXFwvcGFwZXJzXFwvWWFvX0FTUExPUzE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzgwMjU2N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOb3QgQWxsIFBhdHRlcm5zLCBidXQgRW5vdWdoICgyMDA4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3MueW9yay5hYy51a1xcL3BsYXNtYVxcL3B1YmxpY2F0aW9uc1xcL3BkZlxcL01pdGNoZWxsUnVuY2ltYW5IYXNrZWxsMDgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDMxMjI4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5vdyB5b3Ugc2VlIHRoZW06IERBUlBBJ3MgU3RlYWx0aCBSZXZvbHV0aW9uICgyMDA4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZGFycGEubWlsXFwvYXR0YWNobWVudHNcXC8oMk8yNCklMjBHbG9iYWwlMjBOYXYlMjAtJTIwQWJvdXQlMjBVcyUyMC0lMjBIaXN0b3J5JTIwLSUyMFJlc291cmNlcyUyMC0lMjA1MHRoJTIwLSUyMFN0ZWFsdGglMjAoQXBwcm92ZWQpLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjYxMDY1OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQZXJzb25hbCBDb21wdXRpbmcgKDE5NzUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL21wcm92ZS5kZVxcL2RpcGxvbVxcL2d1aVxcL0theTc1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA0NDc4NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21wb3Npbmcgd2l0aCBUYXBlIFJlY29yZGVyczogTXVzaXF1ZSBDb25jclxcdTAwZTh0ZSBmb3IgQmVnaW5uZXJzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL21vbm9za29wLm9yZ1xcL2ltYWdlc1xcL2JcXC9iM1xcL0R3eWVyX1RlcmVuY2VfQ29tcG9zaW5nX3dpdGhfVGFwZV9SZWNvcmRlcnNfTXVzaXF1ZV9Db25jcmV0ZV9mb3JfQmVnaW5uZXJzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzMzODA5MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJRdWFudGlmeWluZyB0aGUgUGVyZm9ybWFuY2Ugb2YgR2FyYmFnZSBDb2xsZWN0aW9uICgyMDA1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3MudW1hc3MuZWR1XFwvfmVtZXJ5XFwvcHVic1xcL2djdnNtYWxsb2MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzYwMTExXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNpY2FkYTogRGVwZW5kYWJseSBGYXN0IE11bHRpLUNvcmUgSW4tTWVtb3J5IFRyYW5zYWN0aW9ucyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvaHllb250YWVrLmNvbVxcL3BhcGVyc1xcL2NpY2FkYS1zaWdtb2QyMDE3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODE1Nzk3M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21tb24gTGlzcCwgVHlwaW5nIGFuZCBNYXRoZW1hdGljcyAoMjAwMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LWZvdXJpZXIudWpmLWdyZW5vYmxlLmZyXFwvfnNlcmdlcmFyXFwvUGFwZXJzXFwvRXpjYXJheS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NzQ1MTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBTdHVkeSBvZiBMaW51eCBGaWxlIFN5c3RlbSBFdm9sdXRpb24gKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvc3lzdGVtXFwvZmlsZXNcXC9sb2dpblxcL2FydGljbGVzXFwvMDNfbHVfMDEwLTAxN19maW5hbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwOTgyNjFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFdoYXRcXHUyMDE5cyBOZXh0IEludGVybWl0dGVudCBDb21wdXRpbmcgQXJjaGl0ZWN0dXJlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmVlY2cudG9yb250by5lZHVcXC9+Z2FuZXNhMTBcXC9hc3NldHNcXC9wZGZzXFwvd2hhdHNuZXh0LWhwY2EyMDE5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODcwMDYxNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZXB0aC1maXJzdCBzZWFyY2ggYW5kIGxpbmVhciBncmFwaCBhbGdvcml0aG1zICgxOTcyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9yamxpcHRvbi5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAwOVxcLzEwXFwvZGZzMTk3MS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1MTg3MzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBUeXBlIG9mIFNpbXVsYXRpb24gV2hpY2ggU29tZSBFeHBlcmltZW50YWwgRXZpZGVuY2UgU3VnZ2VzdHMgV2UgRG9uJ3QgTGl2ZSBJbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9waGlscGFwZXJzLm9yZ1xcL2FyY2hpdmVcXC9BTEVBVE8tNi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3MTg4NjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTmFwb2xlb24gYXMgT3JnYW5pemF0aW9uYWwgRGVzaWduZXIgKDIwMDkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmR0aWMubWlsXFwvZHRpY1xcL3RyXFwvZnVsbHRleHRcXC91MlxcL2E1MDE1ODAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDk4NTc3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkluZmluaXRlc2ltYWwgbWFjaGluZXJ5ICgxOTkzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZW9wbGUuZWVjcy5iZXJrZWxleS5lZHVcXC9+cGlzdGVyXFwvMjkwR1xcL1BhcGVyc1xcL0ZleW5tYW44My5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2MzcyMjZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIGNvb2xlc3Qgd2F5IHRvIGdlbmVyYXRlIGJpbmFyeSBzdHJpbmdzICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cucmVzZWFyY2hnYXRlLm5ldFxcL3Byb2ZpbGVcXC9BYXJvbl9XaWxsaWFtczEwXFwvcHVibGljYXRpb25cXC8yNTczNzYyOTRfVGhlX0Nvb2xlc3RfV2F5X3RvX0dlbmVyYXRlX0JpbmFyeV9TdHJpbmdzXFwvbGlua3NcXC81NzJhMTJjZjA4YWUwNTdiMGEwNzg3ZjlcXC9UaGUtQ29vbGVzdC1XYXktdG8tR2VuZXJhdGUtQmluYXJ5LVN0cmluZ3MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzE1MDU1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkR5bmFtaWMgSGFzaCBUYWJsZXMgKDE5ODgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNzZC51b2MuZ3JcXC9+aHk0NjBcXC9wZGZcXC9EeW5hbWljJTIwSGFzaCUyMFRhYmxlcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY2MDg2MTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmF1bHQgYXR0YWNrcyBvbiBzZWN1cmUgY2hpcHM6IGZyb20gZ2xpdGNoIHRvIGZsYXNoICgyMDExKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY2wuY2FtLmFjLnVrXFwvfnNwczMyXFwvRUNSWVBUMjAxMV8xLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzExMzM2NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIGNvbXBhcmlzb24gb2YgYWRhcHRpdmUgcmFkaXggdHJlZXMgYW5kIGhhc2ggdGFibGVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2JpZ2RhdGEudW5pLXNhYXJsYW5kLmRlXFwvcHVibGljYXRpb25zXFwvQVJDRDE1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE4MTMzNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQaG9uZW1lLSBhbmQgV29yZC1CYXNlZCBMZWFybmluZyBvZiBFbmdsaXNoIFdvcmRzIFByZXNlbnRlZCB0byB0aGUgU2tpblwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9yZXNlYXJjaC5mYi5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMThcXC8wNFxcL2EtY29tcGFyYXRpdmUtc3R1ZHktb2YtcGhvbmVtZS1hbmQtd29yZC1iYXNlZC1sZWFybmluZy1vZi1lbmdsaXNoLXdvcmRzLXByZXNlbnRlZC10by10aGUtc2tpbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyMTQ5ODZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQW4gQWRhcHRpdmUgUGFja2VkLU1lbW9yeSBBcnJheSAoMjAwNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3My5jcy5zdG9ueWJyb29rLmVkdVxcL35iZW5kZXJcXC9uZXdwdWJcXC9CZW5kZXJIdTA3LVRPRFMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTkxMTQ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBlWHByZXNzIERhdGEgUGF0aDogRmFzdCBQcm9ncmFtbWFibGUgUGFja2V0IFByb2Nlc3NpbmcgaW4gdGhlIE9TIEtlcm5lbCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9naXRodWIuY29tXFwvdG9ob2pvXFwveGRwLXBhcGVyXFwvYmxvYlxcL21hc3RlclxcL3hkcC10aGUtZXhwcmVzcy1kYXRhLXBhdGgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjkwNTE4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFjZTogYSBzeW50YXgtZHJpdmVuIEMgcHJlcHJvY2Vzc29yICgxOTg5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zd3RjaC5jb21cXC9nb3NsaW5nODlhY2UucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MjA2NDE2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXB1dGF0aW9uIGF0IHRoZSBFZGdlIG9mIENoYW9zICgxOTkwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZGZzLnNlbWFudGljc2Nob2xhci5vcmdcXC9jYjRjXFwvZGY3ODEyZmM4YWQ1NmQxMzMxN2VhYWJjOTliNzY2NTllOTVmLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUxNTc5M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbnRlcm5ldCBBcmNoaXRlY3R1cmUgQm9hcmQgb24gdGhlIEF1c3RyYWxpYW4gQXNzaXN0YW5jZSBhbmQgQWNjZXNzIEJpbGwgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmlhYi5vcmdcXC93cC1jb250ZW50XFwvSUFCLXVwbG9hZHNcXC8yMDE4XFwvMDlcXC9JQUItQ29tbWVudHMtb24tQXVzdHJhbGlhbi1Bc3Npc3RhbmNlLWFuZC1BY2Nlc3MtQmlsbC0yMDE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk1ODc3OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgV2h5IG9mIFkgKDIwMDEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5kcmVhbXNvbmdzLmNvbVxcL0ZpbGVzXFwvV2h5T2ZZLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODYzNzkzOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZWx0YSBQb2ludGVyczogQnVmZmVyIE92ZXJmbG93IENoZWNrcyBXaXRob3V0IHRoZSBDaGVja3MgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLnZ1Lm5sXFwvfmhlcmJlcnRiXFwvZG93bmxvYWRcXC9wYXBlcnNcXC9kZWx0YS1wb2ludGVyc19ldXJvc3lzMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTE1OTU3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgZ2VuZXJhbCBtZW1yaXN0b3ItYmFzZWQgcGFydGlhbCBkaWZmZXJlbnRpYWwgZXF1YXRpb24gc29sdmVyXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Mi5lY2Uucm9jaGVzdGVyLmVkdVxcL354aWd1b1xcL2dvbWFjMTUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjYyODY0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgRm9ybWFsIEFwb2xvZ3kgZm9yIE1ldGFwaHlzaWNzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BoaWxwYXBlcnMub3JnXFwvYXJjaGl2ZVxcL0JBUkFGQS02LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODczOTMxMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21waWxpbmcgbWFjaGluZSBsZWFybmluZyBwcm9ncmFtcyB2aWEgaGlnaC1sZXZlbCB0cmFjaW5nIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5zeXNtbC5jY1xcL2RvY1xcLzE0Ni5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1MDA3ODRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiS251dCBXaWNrc2VsbDogdGhlIEJpcnRoIG9mIE1vZGVybiBNb25ldGFyeSBQb2xpY3kgKDIwMDQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5kYWxsYXNmZWQub3JnXFwvflxcL21lZGlhXFwvZG9jdW1lbnRzXFwvcmVzZWFyY2hcXC9laVxcL2VpMDQwMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1NDAxNDlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVm9sYXRpbGl0eSBhbmQgdGhlIEFsY2hlbXkgb2YgUmlzayBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zdGF0aWMxLnNxdWFyZXNwYWNlLmNvbVxcL3N0YXRpY1xcLzU1ODFmMTdlZTRiMDFmNTljMmIxNTEzYVxcL3RcXC81OWVhMTZmN2U1ZGQ1YjIzMDYzYTMxNTRcXC8xNTA4NTEzNTMzNTc3XFwvQXJ0ZW1pc19Wb2xhdGlsaXR5K2FuZCt0aGUrQWxjaGVteStvZitSaXNrXzIwMTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDA5NjAxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxlYWthZ2UtUmVzaWxpZW50IENsaWVudC1TaWRlIERlZHVwbGljYXRpb24gb2YgRW5jcnlwdGVkIERhdGEgaW4gQ2xvdWQgU3RvcmFnZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lcHJpbnQuaWFjci5vcmdcXC8yMDExXFwvNTM4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk5Mzc5NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFbmdpbmVlcmluZyBhbmQgU29mdHdhcmUgRW5naW5lZXJpbmcgKDIwMTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbWNzLm9wZW4uYWMudWtcXC9tajY2NVxcL0ZvU0VadXJpY2gyMDEwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzEyNTM4M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEdGhyZWFkczogRWZmaWNpZW50IERldGVybWluaXN0aWMgTXVsdGl0aHJlYWRpbmcgKDIwMTEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvcGVvcGxlLmNzLmtzdS5lZHVcXC9+ZGFuaWVsd2FuZ1xcL0ludmVzdGlnYXRpb25cXC9TeXN0ZW1fU2VjdXJpdHlcXC9kdGhyZWFkcy1zb3NwMTEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzU2Nzc0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhhcmR3YXJlIE1hc2tpbmcsIFJldmlzaXRlZCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZW1zZWMucnViLmRlXFwvbWVkaWFcXC9jcnlwdG9cXC92ZXJvZWZmZW50bGljaHVuZ2VuXFwvMjAxOFxcLzA0XFwvMTZcXC9QRE5fTWFza2luZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxNTQyMzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFN0YXRlIG9mIHRoZSBUY2xRdWFkY29kZSBjb21waWxlciAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnRjbC50a1xcL2NvbW11bml0eVxcL3RjbDIwMTdcXC9hc3NldHNcXC90YWxrMTAxXFwvUGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTc5OTc0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk11bHRpcGxlIExpbmVhciBSZWdyZXNzaW9uICgyMDEyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL21lemV5bGFiLmNiLmJzY2IuY29ybmVsbC5lZHVcXC9sYWJtZW1iZXJzXFwvZG9jdW1lbnRzXFwvc3VwcGxlbWVudCUyMDUlMjAtJTIwbXVsdGlwbGUlMjByZWdyZXNzaW9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc4NzYxNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJYRFA6IDEuNSB5ZWFycyBpbiBwcm9kdWN0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvdmdlci5rZXJuZWwub3JnXFwvbHBjX25ldDIwMThfdGFsa3NcXC9MUENfWERQX1NoaXJva292X3YyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ5MzMwNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRWFybHkgSGlzdG9yeSBvZiBQcm9ncmFtbWluZyBMYW5ndWFnZXMgKDE5NzYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYml0c2F2ZXJzLnRyYWlsaW5nLWVkZ2UuY29tXFwvcGRmXFwvc3RhbmZvcmRcXC9jc190ZWNoUmVwb3J0c1xcL1NUQU4tQ1MtNzYtNTYyX0Vhcmx5RGV2ZWxQZ21nTGFuZ19BdWc3Ni5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3MzU4NjZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmFpQmxvY2tzOiBBIEZlZWxlc3MgRGlzdHJpYnV0ZWQgQ3J5cHRvY3VycmVuY3kgTmV0d29yayBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9yYWlibG9ja3MubmV0XFwvbWVkaWFcXC9SYWlCbG9ja3NfV2hpdGVwYXBlcl9fRW5nbGlzaC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwNTMwNDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IEJhZCBJcyBTZWxmaXNoIFJvdXRpbmc/ICgyMDAxKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3RoZW9yeS5zdGFuZm9yZC5lZHVcXC9+dGltXFwvcGFwZXJzXFwvcm91dGluZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NDE2NDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhpbmdzIFdlIE5lZWQgdG8gS25vdyBBYm91dCBUZWNobm9sb2dpY2FsIENoYW5nZSAoMTk5OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93ZWIuY3MudWNkYXZpcy5lZHVcXC9+cm9nYXdheVxcL2NsYXNzZXNcXC8xODhcXC9tYXRlcmlhbHNcXC9wb3N0bWFuLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUyMjMxOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGYXN0LVBhdGggTG9vcCBVbnJvbGxpbmcgb2YgTm9uLUNvdW50ZWQgTG9vcHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9zc3cuamt1LmF0XFwvR2VuZXJhbFxcL1N0YWZmXFwvTGVvcG9sZHNlZGVyXFwvbWFubGFuZzIwMTgtZmFzdF9wYXRoX3Vucm9sbGluZ19hdXRob3JwcmVwcmludC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2NDM4MDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IHRvIHVzZSAxMDAwIHJlZ2lzdGVycyAoMTk3OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jYWx0ZWNoY29uZi5saWJyYXJ5LmNhbHRlY2guZWR1XFwvMjAwXFwvMVxcL1JpY2hhcmRMU2l0ZXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDk4NTg5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhTTi0xMDAwIE51Y2xlYXIgRXZlbnQgRGV0ZWN0b3IgKDIwMDUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm1heHdlbGwuY29tXFwvaW1hZ2VzXFwvZG9jdW1lbnRzXFwvaHNuMTAwMF9yZXYzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODUzMjUzNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTcGVlY2ggSW50ZWxsZWdpYmlsaXR5IGluIE5hdmFsIEFpcmNyYWZ0IFJhZGlvcyAoMTk3MikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZHRpYy5taWxcXC9kdGljXFwvdHJcXC9mdWxsdGV4dFxcL3UyXFwvNzQ4MjAyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUzNDQ4MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZWFsaXphYmlsaXR5IG9mIEdyYXBocyAoMjAwOCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9mYWN1bHR5LmJhcmQuZWR1XFwvbWJlbGtcXC9EaXNjcmV0ZU1hdGhEYXlUYWxrLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk1NjU4OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgVW5yZWFzb25hYmxlIEVmZmVjdGl2ZW5lc3Mgb2YgRGF0YSAoMjAwOSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc3RhdGljLmdvb2dsZXVzZXJjb250ZW50LmNvbVxcL21lZGlhXFwvcmVzZWFyY2guZ29vZ2xlLmNvbVxcL2VuXFwvXFwvcHVic1xcL2FyY2hpdmVcXC8zNTE3OS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwOTYxODZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR29vZCBJZGVhcywgVGhyb3VnaCB0aGUgTG9va2luZyBHbGFzcyAoMjAwNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmluZi5ldGh6LmNoXFwvcGVyc29uYWxcXC93aXJ0aFxcL0FydGljbGVzXFwvR29vZElkZWFzX29yaWdGaWcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzMxMTY4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9uLUNoaXAgSW50ZXJjb25uZWN0aW9uIEFyY2hpdGVjdHVyZSBvZiB0aGUgVGlsZSBQcm9jZXNzb3IgKDIwMDcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5wcmluY2V0b24uZWR1XFwvfndlbnR6bGFmXFwvZG9jdW1lbnRzXFwvV2VudHpsYWZmLjIwMDcuSUVFRV9NaWNyby5UaWxlcmEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzQxOTcyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1pbGxpb24gRG9sbGFyIFByb2JsZW1zICgyMDAwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5tYXRoLmJ1ZmZhbG8uZWR1XFwvfnN3d1xcLzBwYXBlcnNcXC9taWxsaW9uLmJ1Y2sucHJvYmxlbXMubWkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDA1MTgzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJlYWwgd29ybGQgRE5TU0VDK0RBTkUgZm9yIHNlY3VyZSBpbnRlci1kb21haW4gbWFpbCB0cmFuc3BvcnQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc3RhdGljLnB0YmwuY29cXC9zdGF0aWNcXC9hdHRhY2htZW50c1xcLzE2OTMxOVxcLzE1MjA5MDQ2OTIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NjE3ODkzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZvdW50YWluIGNvZGVzICgyMDA1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9kb2NzLnN3aXR6ZXJuZXQuY29tXFwvcGVvcGxlXFwvZW1pbi1nYWJyaWVseWFuXFwvMDYwMTEyLWNhcGlsbGFyeS1yZWZlcmVuY2VzXFwvcmVmXFwvTWFjS2F5MDUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4Mzg1Mzg2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgUXVpY2sgUmVmZXJlbmNlIHRvIEFpcmZpZWxkIFN0YW5kYXJkcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZmFhLmdvdlxcL2FpcnBvcnRzXFwvc291dGhlcm5cXC9haXJwb3J0X3NhZmV0eVxcL3BhcnQxMzlfY2VydFxcL21lZGlhXFwvYXNvLWFpcmZpZWxkLXN0YW5kYXJkcy1xdWljay1yZWZlcmVuY2UucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDkyOTMwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBTSUdBQkFcXC9FQ00gSUkgQ2lwaGVyIE1hY2hpbmU6IFxcdTIwMWNBIEJlYXV0aWZ1bCBJZGVhXFx1MjAxZCAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm5zYS5nb3ZcXC9hYm91dFxcL2NyeXB0b2xvZ2ljLWhlcml0YWdlXFwvaGlzdG9yaWNhbC1maWd1cmVzLXB1YmxpY2F0aW9uc1xcL3B1YmxpY2F0aW9uc1xcL2Fzc2V0c1xcL2ZpbGVzXFwvc2lnYWJhLWVjbS1paVxcL1RoZV9TSUdBQkFfRUNNX0NpcGhlcl9NYWNoaW5lX0FfQmVhdXRpZnVsX0lkZWEzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU0OTg5N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGaW5hbCBSZXBvcnQgb24gdGhlIEF1Z3VzdCAxNCwgMjAwMyBCbGFja291dCAoMjAwNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmVuZXJneS5nb3ZcXC9zaXRlc1xcL3Byb2RcXC9maWxlc1xcL29lcHJvZFxcL0RvY3VtZW50c2FuZE1lZGlhXFwvQmxhY2tvdXRGaW5hbC1XZWIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTY4MzM4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5ldXJvbG9neSBpbiBBbmNpZW50IEZhY2VzICgyMDAxKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubmNiaS5ubG0ubmloLmdvdlxcL3BtY1xcL2FydGljbGVzXFwvUE1DMTczNzI4N1xcL3BkZlxcL3YwNzBwMDA1MjQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTE4Mzg3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlppcGZcXHUyMDE5cyBMYXcgaW4gUGFzc3dvcmRzICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dhbmdkaW5nZy53ZWVibHkuY29tXFwvdXBsb2Fkc1xcLzJcXC8wXFwvM1xcLzZcXC8yMDM2Njk4N1xcL2llZWV0aWZzMTdfZmluYWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDYyMTMwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRvcHBlbGdcXHUwMGU0bmdlciBGaW5kZXI6IFRha2luZyBTdHlsb21ldHJ5IHRvIHRoZSBVbmRlcmdyb3VuZCAoMjAxNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3MS5pY3NpLmJlcmtlbGV5LmVkdVxcL35zYWRpYVxcL3BhcGVyc1xcL29ha2xhbmQyMDE0LXVuZGVyZ3JvdW5kLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODMyODI3MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIeWJyaWQgRmllbGQtRWZmZWN0IFRyYW5zaXN0b3JzIEJhc2VkIG9uIENlbGx1bG9zZSBGaWJlciBQYXBlciAoMjAwOCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcnVuLnVubC5wdFxcL2JpdHN0cmVhbVxcLzEwMzYyXFwvMzI0MlxcLzFcXC9Gb3J0dW5hdG9fMjAwOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1MjA3NjdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFBvdGVudGlvbWV0ZXIgSGFuZGJvb2sgKDE5NzUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5ib3VybnMuY29tXFwvcGRmc1xcL09ubGluZVBvdGVudGlvbWV0ZXJIYW5kYm9vay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzOTEwNzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3Ryb25nbHkgVHlwZWQgSGV0ZXJvZ2VuZW91cyBDb2xsZWN0aW9ucyAoMjAwNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9va21pai5vcmdcXC9mdHBcXC9IYXNrZWxsXFwvSExpc3QtZXh0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODAwNDcwOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIYWNraW5nIGNoZW1pY2FsIHBsYW50cyBmb3IgY29tcGV0aXRpb24gYW5kIGV4dG9ydGlvbiAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmJsYWNraGF0LmNvbVxcL2RvY3NcXC91cy0xNVxcL21hdGVyaWFsc1xcL3VzLTE1LUtyb3RvZmlsLVJvY2tpbmctVGhlLVBvY2tldC1Cb29rLUhhY2tpbmctQ2hlbWljYWwtUGxhbnQtRm9yLUNvbXBldGl0aW9uLUFuZC1FeHRvcnRpb24td3AucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjkyOTAyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXBpbGVkIGFuZCBWZWN0b3JpemVkIFF1ZXJpZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cudmxkYi5vcmdcXC9wdmxkYlxcL3ZvbDExXFwvcDIyMDkta2Vyc3Rlbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwODE0NzdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEVmZmVjdCBvZiBab25pbmcgb24gSG91c2luZyBQcmljZXMgXFx1MjAxMyBSZXNlYXJjaCBmcm9tIEF1c3RyYWxpYSdzIFJlc2VydmUgQmFuayBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cucmJhLmdvdi5hdVxcL3B1YmxpY2F0aW9uc1xcL3JkcFxcLzIwMThcXC9wZGZcXC9yZHAyMDE4LTAzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjU3MTk5NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZWJ1Z2dpbmcgRGlzdHJpYnV0ZWQgU3lzdGVtcyBXaXRoIFdoeS1BY3Jvc3MtVGltZSBQcm92ZW5hbmNlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL213aGl0dGFrZXIuZ2l0aHViLmlvXFwvcHVibGljYXRpb25zXFwvd2F0X1NPQ0MxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxOTM5MjFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWF0aGVtYXRpY3MgYXBwbGllZCB0byBkcmVzc21ha2luZyAoMTk5MykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lmxtcy5hYy51a1xcL3NpdGVzXFwvbG1zLmFjLnVrXFwvZmlsZXNcXC8xOTk0JTIwTWF0aGVtYXRpY3MlMjBhcHBsaWVkJTIwdG8lMjBkcmVzc21ha2luZyUyMCUyOHByZXByaW50JTI5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODI5ODU4NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgUHN5Y2hvbG9neSBvZiBTZWN1cml0eSAoMjAwOCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnNjaG5laWVyLmNvbVxcL2FjYWRlbWljXFwvcGFwZXJmaWxlc1xcL3BhcGVyLXBzeWNob2xvZ3ktb2Ytc2VjdXJpdHkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTU4NTYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBQb3N0Z3JlcyBSdWxlIE1hbmFnZXIgKDE5ODgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZGIuY3MuYmVya2VsZXkuZWR1XFwvcGFwZXJzXFwvdHNlODgtcnVsZW1nci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1ODE4ODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmFpbHVyZSBSYXRlcyBpbiBJbnRyb2R1Y3RvcnkgUHJvZ3JhbW1pbmcgKDIwMDcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvdXNlcnMtY3MuYXUuZGtcXC9taWNcXC9wdWJsaWNhdGlvbnNcXC9qb3VybmFsXFwvMjUtLWJ1bGxldGluMjAwNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxODY4NDdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBTY2FsYWJsZSwgQ29tbW9kaXR5IERhdGEgQ2VudGVyIE5ldHdvcmsgQXJjaGl0ZWN0dXJlICgyMDA4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2Njci5zaWdjb21tLm9yZ1xcL29ubGluZVxcL2ZpbGVzXFwvcDYzLWFsZmFyZXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MjkwMzg4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNhY2hlIE1vZGVsaW5nIGFuZCBPcHRpbWl6YXRpb24gVXNpbmcgTWluaWF0dXJlIFNpbXVsYXRpb25zIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvc3lzdGVtXFwvZmlsZXNcXC9jb25mZXJlbmNlXFwvYXRjMTdcXC9hdGMxNy13YWxkc3B1cmdlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzMTg2MjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSXMgdGhlIHNjaWVudGlmaWMgcGFwZXIgZnJhdWR1bGVudD8gKDE5NjQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYmxvZy50aGVncmFuZGxvY3VzLmNvbVxcL3N0YXRpY1xcL21pc2NcXC9pc190aGVfc2NpZW50aWZpY19wYXBlcl9mcmF1ZHVsZW50LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzYyNDc4N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGaXZlIGRlZXAgcXVlc3Rpb25zIGluIGNvbXB1dGluZyAoMjAwOCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY3MuY211LmVkdVxcL353aW5nXFwvcHVibGljYXRpb25zXFwvV2luZzA4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc1NTYwNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEaXNjZXJuaW5nIHRoZSBPdXQtT2YtT3JkZXIgQWR2YW50YWdlOiBJcyBJdCBTcGVjdWxhdGlvbiBvciBEeW5hbWlzbT8gKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvemlsbGVzLmNzLmlsbGlub2lzLmVkdVxcL3BhcGVyc1xcL21jZmFybGluX2FzcGxvc18yMDEzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg4MTEzMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbnRlbnRpb25hbCBBY291c3RpYyBJbnRlcmZlcmVuY2UgRGFtYWdlcyBBdmFpbGFiaWxpdHkgYW5kIEludGVncml0eSBpbiBIRERzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3NwcXIuZWVjcy51bWljaC5lZHVcXC9wYXBlcnNcXC9ib2x0b24tYmx1ZS1ub3RlLUlFRUVTU1AtMjAxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyOTU1OTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcHJlaGVuZGluZyBSaW5nYWRzICgyMDE2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jcy5veC5hYy51a1xcL2plcmVteS5naWJib25zXFwvcHVibGljYXRpb25zXFwvcmluZ2Fkcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwMDE0NzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBDb21wdXRlciBTY2llbnRpc3RcXHUyMDE5cyBHdWlkZSB0byBDZWxsIEJpb2xvZ3kgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY3MuY211LmVkdVxcL353Y29oZW5cXC9HdWlkZVRvQmlvbG9neS1zYW1wbGVDaGFwdGVyLXJlbGVhc2UxLjQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4Nzc4NDk5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkx1bmFyIExhc2VyIFJhbmdpbmc6IGEgY29udGludWluZyBsZWdhY3kgb2YgdGhlIEFwb2xsbyBwcm9ncmFtICgxOTk0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuaHEubmFzYS5nb3ZcXC9hbHNqXFwvTFJSUi05NC0wMTkzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc4MDUzMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJVbmRlcnN0YW5kaW5nIFJlZHVjZWQtVm9sdGFnZSBPcGVyYXRpb24gaW4gTW9kZXJuIERSQU0gRGV2aWNlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5wZGwuY211LmVkdVxcL1BETC1GVFBcXC9OVk1cXC8xN3NpZ21ldHJpY3Nfdm9sdHJvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzMDcxMTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmV0dGVyIGRvY3VtZW50YXRpb24gXFx1MjAxMyBvbiB0aGUgd2ViIGFuZCBmb3IgTGlicmVTU0wgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm9wZW5ic2Qub3JnXFwvcGFwZXJzXFwvZXVyb2JzZGNvbjIwMTgtbWFuZG9jLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODExMDAzM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPcGVuLVNvdXJjZSBCaXRzdHJlYW0gR2VuZXJhdGlvbiAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmlzaS5lZHVcXC9zaXRlc1xcL2RlZmF1bHRcXC9maWxlc1xcL3VzZXJzXFwvbnN0ZWluZXJcXC9zb25pLTIwMTMtYml0c3RyZWFtLWZjY20xMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0ODgwMjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2hlcnJ5LVBpY2tpbmcgYW5kIHRoZSBTY2llbnRpZmljIE1ldGhvZCAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY3MuY29mYy5lZHVcXC9+Ym93cmluZ1xcL2NsYXNzZXNcXC9jc2NpJTIwMzYyXFwvZG9jc1xcL3AzMi1uZXZpbGxlLW5laWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDkyMjYxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbnN0cnVjdGlvbiBvZiB0aGUgVHJhbnNyZWFsIE51bWJlcnMgYW5kIEFsZ2VicmFpYyBUcmFuc2ZpZWxkcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5pYWVuZy5vcmdcXC9JSkFNXFwvaXNzdWVzX3Y0NlxcL2lzc3VlXzFcXC9JSkFNXzQ2XzFfMDMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NzMwNDU3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNyeXBrbyBXaGl0ZSBQYXBlcjogQ3J5cHRvY29sbGVjdGlibGUgR2FtZSBFbXBvd2VyZWQgYnkgR0FOcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jcnlwa28uYWlcXC9zdGF0aWNcXC9maWxlc1xcL2NyeXBrby13aGl0ZXBhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjk5MDM0N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUd28gY3VyaW91cyBpbnRlZ3JhbHMgYW5kIGEgZ3JhcGhpYyBwcm9vZiAoMjAxNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9zY2htaWQtd2VycmVuLmNoXFwvaGFuc3BldGVyXFwvcHVibGljYXRpb25zXFwvMjAxNGVsZW1hdGgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODgzMzQ5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlhvb2RvbyBjb29rYm9vayBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lcHJpbnQuaWFjci5vcmdcXC8yMDE4XFwvNzY3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg0NDU0MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDYXN0U2FuOiBlZmZpY2llbnQgZGV0ZWN0aW9uIG9mIGJhZCBDKysgY2FzdHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmRvY2Ryb2lkLm5ldFxcL0lOV1lCRjdcXC9jYXN0c2FuLWVzb3JpY3MxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3ODMzMTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmVhc3RseSBOdW1iZXJzICgxOTk2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZW9wbGUuZWVjcy5iZXJrZWxleS5lZHVcXC9+d2thaGFuXFwvdGVzdHNcXC9udW1iZWFzdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwMDYwNDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSnVsaWEgZm9yIFIgcHJvZ3JhbW1lcnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnN0YXQud2lzYy5lZHVcXC9+YmF0ZXNcXC9KdWxpYUZvclJQcm9ncmFtbWVycy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3MjM5NzdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIGNhc2UgZm9yIHdyaXRpbmcgcGFwZXJzIGluIGVjb25vbWljcyB1c2luZyBmYUtlIExhVGVYIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmZhcm1kb2MuaWxsaW5vaXMuZWR1XFwvaXJ3aW5cXC9yZXNlYXJjaFxcL1RoZV9DYXNlX2Zvcl9GYWtlX0xhVGVYX0JvZHlfRmViJTIwMjAxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY1OTI0MDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSGlzdG9yeSBvZiBDb21iaW5hdG9yaWFsIEdlbmVyYXRpb24gKDIwMDQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmFudGlxdWFyay5jb21cXC9ibG9naW1nXFwvZmFzYzRiLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjM5NTIyMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTY3JhcGlubyBcXHUyMDEzIFNlbGYtc3VzdGFpbmFibGUgcm9ib3QgZnJvbSBlLXNjcmFwIHVzaW5nIHJlbmV3YWJsZSBlbmVyZ3kgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnNjaWVuY2VkaXJlY3QuY29tXFwvc2NpZW5jZVxcL2FydGljbGVcXC9waWlcXC9TMjQwNTg5NjMxODMyODU5M1xcL3BkZj9tZDU9YWM3ZmFlMTc0NzEwZGEwYTUwMzUwMjZmODhlMDU1OWImcGlkPTEtczIuMC1TMjQwNTg5NjMxODMyODU5My1tYWluLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY4NzkyM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBdHRhY2sgRGlyZWN0b3JpZXMsIE5vdCBDYWNoZXM6IFNpZGUtQ2hhbm5lbCBBdHRhY2tzIGluIGEgTm9uLUluY2x1c2l2ZSBXb3JsZCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2lhY29tYS5jcy51aXVjLmVkdVxcL2lhY29tYS1wYXBlcnNcXC9zc3AxOS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0MDc4NTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFRyYW5zbHVjZW50IEZpbGUgU2VydmljZSAoMTk4OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9tY3ZveS5jb21cXC9sbVxcL3BhcGVyc1xcL1N1bk9TLnRmcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NDM5MzNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ3JpbWluYWwgTGF3IDIuMCAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZ2VvcmdldG93bmxhd2pvdXJuYWwub3JnXFwvYXNzZXRzXFwva296aW5za2ktYXJjcC1wcmVmYWNlLTlhOTkwZjA4ZjNmMDA2NTU4ZWFhMDNjY2M0NDBkMzA3OGY1ODk5YjM0MjZlYzQ3YWFlZGI4OWM2MDZjYWVhZTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NjE2NzIyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1hcCBQcm9qZWN0aW9ucyBcXHUyMDEzIEEgV29ya2luZyBNYW51YWwgKDE5ODcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3B1YnMudXNncy5nb3ZcXC9wcFxcLzEzOTVcXC9yZXBvcnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDk5MDI5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlZyYW5rZW5GdXp6IFxcdTIwMTMgYSBtdWx0aS1zZW5zb3IsIG11bHRpLWdlbmVyYXRvciBtdXRhdGlvbmFsIGZ1enogdGVzdGluZyBlbmdpbmUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZ3VpZG92cmFua2VuLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE4XFwvMDdcXC92cmFua2VuZnV6ei5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0NjgzNzdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2FuIG1vb25zIGhhdmUgbW9vbnM/IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FyeGl2Lm9yZ1xcL3BkZlxcLzE4MTAuMDMzMDQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjE3NjQ2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1hY2hpbmUgTGVhcm5pbmcgb24gMktCIG9mIFJBTSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL21hbmlrdmFybWEub3JnXFwvcHVic1xcL2t1bWFyMTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjMxMjM5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlF1YXRlcm5pb25zIGFuZCBSZWZsZWN0aW9ucyAoMTk0NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubWF0aC51dGFoLmVkdVxcL35wdHJhcGFcXC9tYXRoLWxpYnJhcnlcXC9jb3hldGVyXFwvQ294ZXRlci1RdWF0ZXJuaW9ucy1hbmQtcmVmbGVjdGlvbnMtQU1NLTE5NDYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTI1ODAxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBoeXNpY2FsIEFkZHJlc3Npbmcgb24gUmVhbCBIYXJkd2FyZSBpbiBJc2FiZWxsZVxcL0hPTCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZW9wbGUuaW5mLmV0aHouY2hcXC90cm9zY29lXFwvcHVic1xcL2FjaGVybWFubl9pdHBfMjAxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzNzM4OTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUHJvZHVjdCBFdmFsdWF0aW9uIG9mIHRoZSBaaWxvZyBaODAtQ1RDICgxOTc5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3NtaXRoc29uaWFuY2hpcHMuc2kuZWR1XFwvaWNlXFwvT0NSX1NjYW5QRTEyNVxcL1BFMTI1KDEwMzc5LUspLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzczOTIxNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIFN1cnZleSBvZiBSb2xsYmFjay1SZWNvdmVyeSBQcm90b2NvbHMgaW4gTWVzc2FnZS1QYXNzaW5nIFN5c3RlbXMgKDIwMDIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy51dGV4YXMuZWR1XFwvfmxvcmVuem9cXC9wYXBlcnNcXC9TdXJ2ZXlGaW5hbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4ODYxNjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRXhhbWluaW5nIENoaWxkcmVuXFx1MjAxOXMgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QgY29tcGxpYW5jZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZXRzeW1wb3NpdW0ub3JnXFwvMjAxOFxcL2ZpbGVzXFwvcGFwZXJzXFwvaXNzdWUzXFwvcG9wZXRzLTIwMTgtMDAyMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4NDgxNDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIENvbXBsZXhpdHkgb2YgU29uZ3MgKDE5NzcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZml2ZWRvdHMuY29lLnBzdS5hYy50aFxcL1NvZnR3YXJlLmNvZVxcLzI0Mi01MzVfQURBXFwvQmFja2dyb3VuZFxcL1JlYWRpbmdzXFwva251dGhfc29uZ19jb21wbGV4aXR5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA0NDYwM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEaWZmZXJlbnRpYWJsZSBQcm9ncmFtbWluZyBmb3IgSW1hZ2UgUHJvY2Vzc2luZyBhbmQgRGVlcCBMZWFybmluZyBpbiBIYWxpZGUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGVvcGxlLmNzYWlsLm1pdC5lZHVcXC90enVtYW9cXC9ncmFkaWVudF9oYWxpZGVcXC9ncmFkaWVudF9oYWxpZGUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTI5MTQ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBEZWJhc2VtZW50IFB1enpsZTogYW4gRXNzYXkgb24gTWVkaWV2YWwgTW9uZXRhcnkgSGlzdG9yeSAoMTk5NykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm1pbm5lYXBvbGlzZmVkLm9yZ1xcL3Jlc2VhcmNoXFwvcXJcXC9xcjIxNDIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjkyMTcwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFuIElQdjYgVXBkYXRlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2NvbmZlcmVuY2UuYXBuaWMubmV0XFwvNDZcXC9hc3NldHNcXC9maWxlc1xcL0FQTkM0MDJcXC9Bbi1JUHY2LVVwZGF0ZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5NTc1MzFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmV2aXNpdGluZyBhIFN1bW1lciBWYWNhdGlvbjogRGlnaXRhbCBSZXN0b3JhdGlvbiBhbmQgVHlwZXNldHRlciBGb3JlbnNpY3MgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZXByZy5vcmdcXC9wYXBlcnNcXC8yMDJwYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwNTE1MjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQyBTdGFuZGFyZCBVbmRlZmluZWQgQmVoYXZpb3IgdnMuIFdpdHRnZW5zdGVpbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy55b2RhaWtlbi5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMThcXC8wNVxcL3ViLTEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTk1NzEwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5ZIEF0dG9ybmV5IEdlbmVyYWwgUmVwb3J0IG9uIENyeXRwb2N1cnJlbmN5IE1hcmtldCBJbnRlZ3JpdHlcIixcbiAgICAgICAgXCJzY29yZVwiOiAxMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYWcubnkuZ292XFwvc2l0ZXNcXC9kZWZhdWx0XFwvZmlsZXNcXC92bWlpX3JlcG9ydC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwMTc5MjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRXZvbHV0aW9uIG9mIE11bHRpY2VsbHVsYXIgQ29tcHV0aW5nOiBQYXJhbGxlbHMgd2l0aCBNdWx0aWNlbGx1bGFyIExpZmUgKDIwMDkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmV2b2x1dGlvbm9mY29tcHV0aW5nLm9yZ1xcL0Jpcm1pbmdoYW0wOVNlbWluYXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjU0OTg5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkVudGVycHJpc2UgT2JqZWN0cyBGcmFtZXdvcmsgRGV2ZWxvcGVyXFx1MjAxOXMgR3VpZGUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZGV2ZWxvcGVyLmFwcGxlLmNvbVxcL2xpYnJhcnlcXC9hcmNoaXZlXFwvZG9jdW1lbnRhdGlvblxcL0xlZ2FjeVRlY2hub2xvZ2llc1xcL1dlYk9iamVjdHNcXC9XZWJPYmplY3RzXzQuMFxcL1N5c3RlbVxcL0RvY3VtZW50YXRpb25cXC9EZXZlbG9wZXJcXC9FbnRlcnByaXNlT2JqZWN0c1xcL0d1aWRlXFwvRU9GRGV2R3VpZGUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTkxNTU0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlVTUFRPIGlzc3VlcyAxMCBtaWxsaW9udGggcGF0ZW50IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcLzEwbWlsbGlvbnBhdGVudHMudXNwdG8uZ292XFwvZG9jc1xcL3BhdGVudDEwbWlsbGlvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczNDk5MzlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEtleWhvbGUgUHJvYmxlbSAoMjAwMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuYXJpc3RlaWEuY29tXFwvVEtQXFwvZHJhZnRQYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyOTMyNjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQWJlbCdzIFRoZW9yZW0gaW4gUHJvYmxlbXMgYW5kIFNvbHV0aW9ucyAoMjAwNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubWF0aHMuZWQuYWMudWtcXC9+djFyYW5pY2tcXC9wYXBlcnNcXC9hYmVsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzIwOTYzNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZXNpZ24gb2YgdGhlIEJ1cnJvdWdocyBCMTcwMCAoMTk3MikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGRmcy5zZW1hbnRpY3NjaG9sYXIub3JnXFwvY2ZmNlxcLzZiMmViYTIwYTcxNzJjNWRiMjgxZTg0NjAwMDQ5ZTFlODJmZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxMTQ0ODJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIERpZmZpY3VsdHkgb2YgRmFraW5nIERhdGEgKDE5OTkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmtrdW5peXVrLmNvbVxcL01hdGgxMTlGYWtpbmdEYXRhLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzAyMDIyNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIEJyaWVmIEhpc3Rvcnkgb2YgSnVzdC1Jbi1UaW1lICgyMDAzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2VlY3MudWNmLmVkdVxcL35kY21cXC9UZWFjaGluZ1xcL0NPVDQ4MTAtU3ByaW5nMjAxMVxcL0xpdGVyYXR1cmVcXC9KdXN0SW5UaW1lQ29tcGlsYXRpb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjkzNTAwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBDdWx0IG9mIHRoZSBCb3VuZCBWYXJpYWJsZTogSUNGUCBQcm9ncmFtbWluZyBDb250ZXN0ICgyMDA2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2JvdW5kdmFyaWFibGUub3JnXFwvcHJlc3NcXC90ci0wNi0xNjMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzA4MzY2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBDaXZpYyBMYWJvciBvZiBPbmxpbmUgTW9kZXJhdG9ycyAoMjAxNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9ibG9ncy5vaWkub3guYWMudWtcXC9pcHAtY29uZmVyZW5jZVxcL3NpdGVzXFwvaXBwXFwvZmlsZXNcXC9kb2N1bWVudHNcXC9KTk0tVGhlX0NpdmljX0xhYm9yX29mX09ubGluZV9Nb2RlcmF0b3JzX19JbnRlcm5ldF9Qb2xpdGljc19Qb2xpY3lfLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODUwNjc0NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUZWNobmljYWwgU3BlY2lmaWNhdGlvbiBmb3IgdGhlIERlbGl2ZXJ5IG9mIFRlbGV2aXNpb24gUHJvZ3JhbXMgdG8gdGhlIEJCQyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2RwcC1hc3NldHMuczMuYW1hem9uYXdzLmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvc3BlY3NcXC9iYmNcXC9UZWNobmljYWxEZWxpdmVyeVN0YW5kYXJkc0JCQ0ZpbGUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjA0MDk5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRyaWJ1dGUgdG8gVmxhZGltaXIgQXJub2xkICgyMDEyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5hbXMub3JnXFwvbm90aWNlc1xcLzIwMTIwM1xcL3J0eDEyMDMwMDM3OHAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzMwOTI1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZhbGNvbiBIZWF2eSBEZW1vbnN0cmF0aW9uIE1pc3Npb24gKG92ZXJ2aWV3IGFuZCB0aW1lbGluZSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuc3BhY2V4LmNvbVxcL3NpdGVzXFwvc3BhY2V4XFwvZmlsZXNcXC9mYWxjb25oZWF2eXByZXNza2l0X3YxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMxNzMwNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgbWlzc2luZyBsaW5rOiBleHBsYWluaW5nIEVMRiBzdGF0aWMgbGlua2luZywgc2VtYW50aWNhbGx5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZG9taW5pYy1tdWxsaWdhbi5jby51a1xcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxMVxcLzA4XFwvb29wc2xhLWVsZi1saW5raW5nLTIwMTYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzEzMjMwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJlc3BvbnNlIHRpbWUgaW4gbWFuLWNvbXB1dGVyIGNvbnZlcnNhdGlvbmFsIHRyYW5zYWN0aW9ucyAoMTk2OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNvbXB1dGVyLm9yZ1xcL2NzZGxcXC9wcm9jZWVkaW5nc1xcL2FmaXBzXFwvMTk2OFxcLzUwNzJcXC8wMFxcLzUwNzIwMjY3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjgwOTg0NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSaWdvcm91cyBCZW5jaG1hcmtpbmcgaW4gUmVhc29uYWJsZSBUaW1lICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9rYXIua2VudC5hYy51a1xcLzMzNjExXFwvN1xcL3BhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjg0MzgwOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUeEZTOiBMZXZlcmFnaW5nIEZpbGUtU3lzdGVtIENyYXNoIENvbnNpc3RlbmN5IHRvIFByb3ZpZGUgVHJhbnNhY3Rpb25zIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNzLnV0ZXhhcy5lZHVcXC8lN0V2aWpheVxcL3BhcGVyc1xcL2F0YzE4LXR4ZnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODA3MjcyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5ldHdvcmtpbmcgTmFtZWQgQ29udGVudCAoMjAwOSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY29uZmVyZW5jZXMuc2lnY29tbS5vcmdcXC9jby1uZXh0XFwvMjAwOVxcL3BhcGVyc1xcL0phY29ic29uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzkzMzU0M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgZ3JhbmQgY2hhbGxlbmdlcyBvZiBcXHUyMDFjU2NpZW5jZSBSb2JvdGljc1xcdTIwMWQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubmFub3NjaWVuY2UuZ2F0ZWNoLmVkdVxcL3BhcGVyXFwvMjAxOFxcLzE4X1NSXzAxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE2MTY0MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXaGF0IGlzIHRoZSBNb25zdGVyPyAoMjAwMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuYW1zLm9yZ1xcL25vdGljZXNcXC8yMDAyMDlcXC93aGF0LWlzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ4MzkyOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgT24tTGluZSBFbmN5Y2xvcGVkaWEgb2YgSW50ZWdlciBTZXF1ZW5jZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmFtcy5vcmdcXC9qb3VybmFsc1xcL25vdGljZXNcXC8yMDE4MDlcXC9ybm90aS1wMTA2Mi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwMTU0OTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIE1vc3QgSW5mbHVlbnRpYWwgUGFwZXIgR2VyYXJkIFNhbHRvbiBOZXZlciBXcm90ZSAoMjAwNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmlkZWFscy5pbGxpbm9pcy5lZHVcXC9iaXRzdHJlYW1cXC9oYW5kbGVcXC8yMTQyXFwvMTY5N1xcL0R1YmluNzQ4NzY0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODIwMTU5N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBcHBseWluZyBhdWN0aW9uIG1lY2hhbmlzbXMgdG8gbWVldGluZyBzY2hlZHVsaW5nICgyMDEwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuc2Vhcy5oYXJ2YXJkLmVkdVxcL3NpdGVzXFwvZGVmYXVsdFxcL2ZpbGVzXFwvZmlsZXNcXC9hcmNoaXZlZFxcL1h1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM5MDEwNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbiBJbnRyb2R1Y3Rpb24gdG8gSW5mb3JtYXRpb24gU2VjdXJpdHkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbnZscHVicy5uaXN0LmdvdlxcL25pc3RwdWJzXFwvU3BlY2lhbFB1YmxpY2F0aW9uc1xcL05JU1QuU1AuODAwLTEycjEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDU4NTc3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNhdGVnb3JpZnlpbmcgY2FyZGluYWwgYXJpdGhtZXRpYyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5tYXRoLmpodS5lZHVcXC9+ZXJpZWhsXFwvYXJpdGhtZXRpYy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3MDIyMjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiKkFOWSogQW5kcm9pZCBtYW51ZmFjdHVyZXIgbW9uaXRvcnMgdXNlcnMgd2l0aG91dCBjb25zZW50IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZXByaW50cy5uZXR3b3Jrcy5pbWRlYS5vcmdcXC8xNzQ0XFwvMVxcL3RyYWNrZXJzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODYzNTA2MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMZWdhbCBDdXJpb3NpdGllczogRmFjdCBvciBGYWJsZT8gKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lmxhd2NvbS5nb3YudWtcXC9hcHBcXC91cGxvYWRzXFwvMjAxNVxcLzAzXFwvTGVnYWxfT2RkaXRpZXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjU0NDM4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyBXZSBDcmFja2VkIHRoZSBDb2RlIEJvb2sgQ2lwaGVycyAoMjAwMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jb2RlYm9vay5vcmdcXC9jb2RlYm9va19zb2x1dGlvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2OTI0NzdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQWxmcmVkIFN0aWVnbGl0eidzIExhbnRlcm4gU2xpZGVzOiBIaXN0b3J5LCBUZWNobmlxdWUgYW5kIEFuYWx5c2lzICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cucmVzZWFyY2hnYXRlLm5ldFxcL3Byb2ZpbGVcXC9Sb3NpbmFfSGVycmVyYV9HYXJyaWRvXFwvcHVibGljYXRpb25cXC8yNjYyNTEzOTZfQWxmcmVkX1N0aWVnbGl0eiUyN3NfTGFudGVybl9TbGlkZXNfSGlzdG9yeV9UZWNobmlxdWVfYW5kX1RlY2huaWNhbF9BbmFseXNpc1xcL2xpbmtzXFwvNTRmODFmMjkwY2YyY2NmZmU5ZGNkMzQ5XFwvQWxmcmVkLVN0aWVnbGl0enMtTGFudGVybi1TbGlkZXMtSGlzdG9yeS1UZWNobmlxdWUtYW5kLVRlY2huaWNhbC1BbmFseXNpcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5MDU4MjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmVtZW1iZXIgdGhlIFZhc2EgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9vcGVuLXN0ZC5vcmdcXC9KVEMxXFwvU0MyMlxcL1dHMjFcXC9kb2NzXFwvcGFwZXJzXFwvMjAxOFxcL3AwOTc3cjAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTcyMDU3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlc2lnbiBhbmQgRXZhbHVhdGlvbiBvZiBhIENvbnRpbnVvdXMgQ29uc2lzdGVuY3kgTW9kZWwgZm9yIFJlcGxpY2F0ZWQgU2VydmljZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9sZWdhY3lcXC9ldmVudFxcL29zZGkwMFxcL2Z1bGxfcGFwZXJzXFwveXV2YWhkYXRcXC95dXZhaGRhdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4MzE4MjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGFtaW5nIFBlcmZvcm1hbmNlIFZhcmlhYmlsaXR5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvc3lzdGVtXFwvZmlsZXNcXC9vc2RpMTgtbWFyaWNxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODE2OTM4NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHTEwgUGFyc2luZyB3aXRoIEZsZXhpYmxlIENvbWJpbmF0b3JzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3B1cmUucm95YWxob2xsb3dheS5hYy51a1xcL3BvcnRhbFxcL2ZpbGVzXFwvMzExNjk1NjVcXC9wYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzOTk4OTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmVwcmVzZW50aW5nIENvbnRyb2wgaW4gdGhlIFByZXNlbmNlIG9mIE9uZS1TaG90IENvbnRpbnVhdGlvbnMgKDE5OTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy5pbmRpYW5hLmVkdVxcL35keWJcXC9wdWJzXFwvY2FsbDFjYy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5NjA3NDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR3JhbmQgUHduaW5nIFVuaXQ6IEFjY2VsZXJhdGluZyBNaWNyb2FyY2hpdGVjdHVyYWwgQXR0YWNrcyB3aXRoIHRoZSBHUFUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnZ1c2VjLm5ldFxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxOFxcLzA1XFwvZ2xpdGNoLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjk4NDg2OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQcml2YWN5IGJ5IERlc2lnbiAoMjAxMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbGluay5zcHJpbmdlci5jb21cXC9jb250ZW50XFwvcGRmXFwvMTAuMTAwNyUyRnMxMjM5NC0wMTAtMDA1NS14LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjI2MjgyNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTdGF0dXMgb2YgY29sbGVjdGl2ZWx5IGJhcmdhaW5lZCBiZW5lZml0cyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm1pbGxpbWFuLmNvbVxcL3VwbG9hZGVkRmlsZXNcXC9pbnNpZ2h0XFwvMjAxOFxcL3N0YXR1cy1jb2xsZWN0aXZlbHktYmFyZ2FpbmVkLWJlbmVmaXRzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc0MTI0OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgZXJyb3JzLCBpbnNpZ2h0cyBhbmQgbGVzc29ucyBvZiBmYW1vdXMgQUkgcHJlZGljdGlvbnMgKDIwMTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZmhpLm94LmFjLnVrXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC9GQUlDLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk1MzU4N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQb2xpdGljcyBpbiB0aGUgRmFjZWJvb2sgRXJhOiBFdmlkZW5jZSBmcm9tIHRoZSAyMDE2IFVTIFByZXNpZGVudGlhbCBFbGVjdGlvbnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93YXJ3aWNrLmFjLnVrXFwvZmFjXFwvc29jXFwvZWNvbm9taWNzXFwvcmVzZWFyY2hcXC9jZW50cmVzXFwvY2FnZVxcL21hbmFnZVxcL3B1YmxpY2F0aW9uc1xcLzM4OS0yMDE4X3JlZG9hbm8ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDcyMTg5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgTWluaW1hbCBaWlN0cnVjdHVyZSBOYXZpZ2F0b3IgVXNpbmcgYSBaaWdaYWctU3R5bGUgSW50ZXJmYWNlICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmxvcmQtZW5raS5uZXRcXC9aaWdaYWdQcm9qZWN0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzcwODExMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZXdyaXRlIENvbWJpbmF0b3JzIGluIEhhc2tlbGwgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2Rldi5zdGVwaGVuZGllaGwuY29tXFwvcmV3cml0ZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwODUzNTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWF0YSBIYXJpIHdpdGggYSBDbG9ja3dvcmsgRXllLCBBbGxpZ2F0b3JzIGluIHRoZSBTZXdlciAoMTk2MykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2dyYXBoaWNzOC5ueXRpbWVzLmNvbVxcL3BhY2thZ2VzXFwvcGRmXFwvYm9va3NcXC9QeW5jaG9uX1YucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NzgyMzYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZhY2lsaXRhdGlvbiBUb29scyBmb3IgTWVldGluZ3MgYW5kIFdvcmtzaG9wcyAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zZWVkc2ZvcmNoYW5nZS5vcmcudWtcXC90b29scy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxNDY5MDZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIHJlZ3Jlc3MgYXJndW1lbnQgYWdhaW5zdCBDYXJ0ZXNpYW4gc2tlcHRpY2lzbSAoMjAxMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2luZGl2aWR1YWwudXRvcm9udG8uY2FcXC9qbXdpbHNvblxcL1dpbHNvbi1UaGUtUmVncmVzcy1Bcmd1bWVudC1BZ2FpbnN0LUNhcnRlc2lhbi1Ta2VwdGljaXNtLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk5MjEwMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZXNvdXJjZSBtYW5hZ2VtZW50OiBMaW51eCBrZXJuZWwgTmFtZXNwYWNlcyBhbmQgIGNncm91cHMgKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuaGFpZnV4Lm9yZ1xcL2xlY3R1cmVzXFwvMjk5XFwvbmV0TGVjNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3Njg5OTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ291bnRlciBDdWx0dXJlOiBUb3dhcmRzIGEgSGlzdG9yeSBvZiBHcmVlayBOdW1lcmFjeSAoMjAwMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dvcnJ5ZHJlYW0uY29tXFwvcmVmc1xcL05ldHolMjAtJTIwQ291bnRlciUyMEN1bHR1cmUlMjAtJTIwVG93YXJkcyUyMGElMjBIaXN0b3J5JTIwb2YlMjBHcmVlayUyME51bWVyYWN5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODU1NDY5NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb2xsYXBzaW5nIGEgUmVmbGVjdGl2ZSBUb3dlciAoMjAxNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2xhbXB3d3cuZXBmbC5jaFxcL35hbWluXFwvZG9jXFwvbG1zLWJsYWNrLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODc1MTA4NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBSSBhbmQgSW50ZXJuYXRpb25hbCBUcmFkZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm5iZXIub3JnXFwvcGFwZXJzXFwvdzI0MjU0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMxNjYzNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNYWtpbmcgXFx1MjAxY1B1c2ggb24gR3JlZW5cXHUyMDFkIGEgUmVhbGl0eSAoMjAxNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL3N5c3RlbVxcL2ZpbGVzXFwvbG9naW5cXC9hcnRpY2xlc1xcL2xvZ2luXzE0MTBfMDVfa2xlaW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTU2NTA1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxhbmQgU3VydmV5aW5nIGluIEFuY2llbnQgRWd5cHQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZmlnLm5ldFxcL3Jlc291cmNlc1xcL3Byb2NlZWRpbmdzXFwvZmlnX3Byb2NlZWRpbmdzXFwvY2Fpcm9cXC9wYXBlcnNcXC93c2hzXzAyXFwvd3NoczAyXzAyX3BhdWxzb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MjE1MzMyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJhbWFudWphbiBncmFwaHMgaW4gY3J5cHRvZ3JhcGh5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZXByaW50LmlhY3Iub3JnXFwvMjAxOFxcLzU5My5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczMTY0OTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUHJlY2lzZSBhbmQgU2NhbGFibGUgRGV0ZWN0aW9uIG9mIERvdWJsZS1GZXRjaCBCdWdzIGluIE9TIEtlcm5lbHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3ctdXNlcnMuY3MudW1uLmVkdVxcL35ramx1XFwvcGFwZXJzXFwvZGVhZGxpbmUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTU4MjI5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldpcmVHdWFyZDogTmV4dCBHZW5lcmF0aW9uIEtlcm5lbCBOZXR3b3JrIFR1bm5lbCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy53aXJlZ3VhcmQuY29tXFwvcGFwZXJzXFwvd2lyZWd1YXJkLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzY5MDU5OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIE5ldyBSZWZ1dGF0aW9uIG9mIFRpbWUgKDE5NDcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lmd3ZXJuLm5ldFxcL2RvY3NcXC9ib3JnZXNcXC8xOTQ3LWJvcmdlcy1hbmV3cmVmdXRhdGlvbm9mdGltZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0ODM3NDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWV0aG9kIGFuZCBhcHBhcmF0dXMgZm9yIGNvbnRyb2xsaW5nIGVsZWN0cmljIGN1cnJlbnRzICgxOTI1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BhdGVudGltYWdlcy5zdG9yYWdlLmdvb2dsZWFwaXMuY29tXFwvZmFcXC81ZFxcLzMzXFwvZWQyNzY5ZDQ4ZmFjNGRcXC9VUzE3NDUxNzUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDczNDU2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBoeXNpY2lhbnMgZ2l2ZSBwYXRpZW50cyBhbiBhdmVyYWdlIG9mIDExIHNlY29uZHMgYmVmb3JlIGN1dHRpbmcgdGhlbSBvZmYgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9saW5rLnNwcmluZ2VyLmNvbVxcL2NvbnRlbnRcXC9wZGZcXC8xMC4xMDA3JTJGczExNjA2LTAxOC00NTQwLTUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTgyMDA4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIktvZGFrIFByb2Zlc3Npb25hbCBkaWdpdGFsIGNhbWVyYSBzeXN0ZW1zIDE5ODctMjAwNCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm5pa29ud2ViLmNvbVxcL2ZpbGVzXFwvRENTX1N0b3J5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzYwNjE3MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIYXJkd2FyZSBNdWx0aXRocmVhZGVkIFRyYW5zYWN0aW9ucyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbGliZXJ0eS5wcmluY2V0b24uZWR1XFwvUHVibGljYXRpb25zXFwvYXNwbG9zMThfaG10eC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4NjA4NzFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTGlmZSBCZXlvbmQgRGlzdHJpYnV0ZWQgVHJhbnNhY3Rpb25zOiBBbiBBcG9zdGF0ZVxcdTIwMTlzIE9waW5pb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2Fkcmlhbm1hcnJpb3R0Lm5ldFxcL2xvZ29zcm9vdFxcL3BhcGVyc1xcL0xpZmVCZXlvbmRUeG5zLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjExMzM0NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIFVzZXItQ2VudHJlZCBBcHByb2FjaCB0byBGdW5jdGlvbnMgaW4gRXhjZWwgKDIwMDMpXCIsXG4gICAgICAgIFwic2NvcmVcIjogNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm1pY3Jvc29mdC5jb21cXC9lbi11c1xcL3Jlc2VhcmNoXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE2XFwvMDdcXC9leGNlbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY1NjIzMDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEZsYXRuZXNzIG9mIFUuUy4gU3RhdGVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZGlzcnVwdGl2ZWdlby5jb21cXC9ibG9nXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE0XFwvMDhcXC9GbGF0TWFwX0dlb2dyYXBoaWNhbFJldmlld19Eb2Jzb25DYW1wYmVsbF8yMDEzTm92LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQzMzkwNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaHJvd2hhbW1lcjogUm93aGFtbWVyIEF0dGFja3MgT3ZlciB0aGUgTmV0d29yayBhbmQgRGVmZW5zZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3MudnUubmxcXC9+aGVyYmVydGJcXC9kb3dubG9hZFxcL3BhcGVyc1xcL3Rocm93aGFtbWVyX2F0YzE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzAzODYyOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNb3ppbGxhIGdyYW50IGZvciBtYWNoaW5lIGxlYXJuaW5nIHByb2plY3RzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYmxvZy5tb3ppbGxhLm9yZ1xcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxOFxcLzA2XFwvMjAxOC1Nb3ppbGxhLUF3YXJkcy1BcHBsaWNhdGlvbi1HdWlkZV8tQ3JlYXRpdmUtTWVkaWEtQXdhcmRzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzMzNjQxMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQyBPYmplY3QgU3lzdGVtIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9sZGVuaWF1LndlYi5jZXJuLmNoXFwvbGRlbmlhdVxcL2h0bWxcXC9jb3MtZGxzMDktZHJhZnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4Nzc1ODI2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkV4cGVyaWVuY2Ugd2l0aCBWaXJ1c2VzIG9uIFVuaXggc3lzdGVtcyAoMTk4OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL2xlZ2FjeVxcL3B1YmxpY2F0aW9uc1xcL2NvbXBzeXN0ZW1zXFwvMTk4OVxcL3Nwcl9kdWZmLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzAzNjI5N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPbiBMaWJyYXJ5IENvcnJlY3RuZXNzIFVuZGVyIFdlYWsgTWVtb3J5IENvbnNpc3RlbmN5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuc291bmRhbmRjb21wbGV0ZS5vcmdcXC9wYXBlcnNcXC9MaWJyYXJpZXMtUE9QTC0yMDE5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM1NjE5NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHcmFwaCBhbGdvcml0aG1zIHZpYSBTdWl0ZVNwYXJzZTpHcmFwaEJMQVM6IHRyaWFuZ2xlIGNvdW50aW5nIGFuZCBLLXRydXNzICgyMDE4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZmFjdWx0eS5jc2UudGFtdS5lZHVcXC9kYXZpc1xcL0dyYXBoQkxBU1xcL0hQRUMxOFxcL0RhdmlzX0hQRUMxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwODgxMTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRW1waXJpY2FsIFN0dWRpZXMgb2YgUHJvZ3JhbW1pbmcgS25vd2xlZGdlICgxOTg0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5pY3MudWNpLmVkdVxcL35yZWRtaWxlc1xcL2luZjIzMy1GUTA3XFwvb2xkcGFwZXJzXFwvU29sbG93YXlFaHJsaWNoLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk1MDU5N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIaWdoZXItb3JkZXIgdHJ1dGhzIGFib3V0IENobWVzcyAoMjAwNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hc2UudHVmdHMuZWR1XFwvY29nc3R1ZFxcL2Rlbm5ldHRcXC9wYXBlcnNcXC9jaG1lc3MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTQ3MjM4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJvYmVydCBQaXJzaWcgb24gVGhlIFNjaWVudGlmaWMgTWV0aG9kICgxOTc0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2traC5sdHJyLmFyaXpvbmEuZWR1XFwva2toXFwvbmF0c2djXFwvUERGcy0yMDEzXFwvUm9iZXJ0LVBpcnNpZy1Pbi1TY2llbnRpZmljLU1ldGhvZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0MTU2ODdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIE15dGhpY2FsIE1hdGNoZWQgTW9kdWxlcyAoMjAwOSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY2wuY2FtLmFjLnVrXFwvcmVzZWFyY2hcXC9zcmdcXC9uZXRvc1xcL3BhcGVyc1xcLzIwMDkta2VsbDIwMDlteXRoaWNhbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2MzQwMTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSXQgVGFrZXMgJDQuMk0gTmV0IFdvcnRoIHRvIEJlIENvbnNpZGVyZWQgV2VhbHRoeSBpbiBTaWxpY29uIFZhbGxleSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2Fib3V0c2Nod2FiLmNvbVxcL2ltYWdlc1xcL3VwbG9hZHNcXC9pbmxpbmVcXC9DaGFybGVzLVNjaHdhYi1Nb2Rlcm4tV2VhbHRoLUluZGV4LUJheS1BcmVhLVByZXNzLVJlbGVhc2UucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTc1MDkxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkludGVydmlld3Mgd2l0aCBKb2huIENhcm1hY2sgW34xOTk3LTIwMDhdIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9mYWJpZW5zYW5nbGFyZC5uZXRcXC9mZF9wcm94eVxcL2Rvb20zXFwvcGRmc1xcL2pvaG5jLWludGVydmlld3MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTM5NjczXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZvcmVuc2ljIEFuYWx5c2lzIGFuZCBBbm9ueW1pc2F0aW9uIG9mIFByaW50ZWQgRG9jdW1lbnRzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9kZWxpdmVyeS5hY20ub3JnXFwvMTAuMTE0NVxcLzMyMTAwMDBcXC8zMjA2MDE5XFwvcDEyNy1yaWNodGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQwNTU4NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbiBBcmNoaXRlY3R1cmUgZm9yICBBbmFseXNpcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy51Y3NiLmVkdVxcL35qbWNtYWhhblxcL3Jlc2VhcmNoXFwvdG9wX3BpY2tzXzE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA4NjE1OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRGFuZ2VycyBvZiBLZXkgUmV1c2U6IFByYWN0aWNhbCBBdHRhY2tzIG9uIElQc2VjIElLRSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5laS5ydWIuZGVcXC9tZWRpYVxcL25kc1xcL3Zlcm9lZmZlbnRsaWNodW5nZW5cXC8yMDE4XFwvMDhcXC8xM1xcL3NlYzE4LWZlbHNjaC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NjA1MDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcHV0ZXIgVmlzaW9uIGZvciBhdXRvbm9tb3VzIG5hdmlnYXRpb24oMTk4OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cucmkuY211LmVkdVxcL3B1Yl9maWxlc1xcL3B1YjNcXC9oZWJlcnRfbWFydGlhbF8xOTg4XzNcXC9oZWJlcnRfbWFydGlhbF8xOTg4XzMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTM4OTQ5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNQSVJBTDogRXh0cmVtZSBQZXJmb3JtYW5jZSBQb3J0YWJpbGl0eSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvdXNlcnMuZWNlLmNtdS5lZHVcXC9+ZnJhbnpmXFwvcGFwZXJzXFwvMDg1MTA5ODNfU3BpcmFsX0lFRUVfRmluYWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDY4MDY1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlplbmVyIGRpb2RlcyBoYXZlIGNvdXBsZWQgcXVhbnR1bSBub2lzZSB0aGF0IHRyYXZlbHMgYXQgYyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvdml4cmEub3JnXFwvcGRmXFwvMTYwMy4wMzg5djIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTgxODk4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxvb3AgUmVjb2duaXRpb24gaW4gQysrXFwvSmF2YVxcL0dvXFwvU2NhbGEgKDIwMTEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZGF5czIwMTEuc2NhbGEtbGFuZy5vcmdcXC9zaXRlc1xcL2RheXMyMDExXFwvZmlsZXNcXC93czMtMS1IdW5kdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2ODA3OTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGVhc2luZywgR29zc2lwLCBhbmQgTG9jYWwgTmFtZXMgb24gUmFwYW51aSAoMTk3OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zY2hvbGFyc3BhY2UubWFub2EuaGF3YWlpLmVkdVxcL2JpdHN0cmVhbVxcLzEwMTI1XFwvMTkyMTFcXC8xXFwvQVAtdjIybjEtNDEtNjAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4Mjk4NzQxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJlY29uY2lsaW5nIEhpZ2gtTGV2ZWwgT3B0aW1pemF0aW9uc1xcL0xvdy1MZXZlbCBDb2RlIHdpdGggVHdpbiBNZW1vcnkgQWxsb2NhdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvc2Yuc251LmFjLmtyXFwvcHVibGljYXRpb25zXFwvbGx2bXR3aW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDYzODUwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRvY3VtZW50ZWQgR2xvYmFsIExpZ2h0bmluZyBGYXRhbGl0aWVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbXkudmFpc2FsYS5uZXRcXC9WYWlzYWxhJTIwRG9jdW1lbnRzXFwvU2NpZW50aWZpYyUyMHBhcGVyc1xcLzIwMTYlMjBJTERDJTIwSUxNQ1xcL1JvbiUyMEhvbGxlLiUyME51bWJlciUyMG9mJTIwRG9jdW1lbnRlZCUyMEdsb2JhbCUyMExpZ2h0bmluZyUyMEZhdGFsaXRpZXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTk1NDU5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJlc2lzdGFuY2UgdG8gdGhlIFVzZSBvZiBBbmVzdGhlc2lhIGluIHRoZSBNaWQtMTl0aCBDZW50dXJ5ICgyMDA1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5kb2Nkcm9pZC5uZXRcXC9WMHM5dURwXFwvbWV5ZXIyMDE1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzgwNTc1N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgbW9kYWxpdHkgb2YgbW9ydGFsaXR5IGluIGRvbWFpbiBuYW1lczogYW4gaW4tZGVwdGggc3R1ZHkgb2YgZG9tYWluIGxpZmV0aW1lcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5mYXJzaWdodHNlY3VyaXR5LmNvbVxcL2Fzc2V0c1xcL21lZGlhXFwvZG93bmxvYWRcXC9WQjIwMTgtc3R1ZHkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjA3MTUwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNjaWVudGlmaWMgVXNlcyBvZiB0aGUgTUFOSUFDICgxOTg2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2Rhc2hlci53dXN0bC5lZHVcXC9jaGVtNDMwXFwvcmVhZGluZ1xcL2pzdGF0cGh5cy00My03MzEtODYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTM1MTM4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZyaWV6ZSBHcm91cHMgKDE5OTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZ2xhc3NuZXIuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE0XFwvMDRcXC9DRy1DR0EtUERGLTk2LTA1LUZyaWV6ZS1Hcm91cHMtTWF5OTYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NzkxNDUyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZhc3QgUHJvZ3JhbW1hYmxlIE1hdGNoLUFjdGlvbiBQcm9jZXNzaW5nIGluIEhhcmR3YXJlIGZvciBTRE4gKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC95dWJhLnN0YW5mb3JkLmVkdVxcL35ncmdcXC9kb2NzXFwvc2RuLWNoaXAtc2lnY29tbS0yMDEzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ5NzM5NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJdmFuIFN1dGhlcmxhbmQ6IFRlY2hub2xvZ3kgYW5kIENvdXJhZ2UgKDE5OTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jc2V3ZWIudWNzZC5lZHVcXC9+d2dnXFwvc21saV9wcy0xLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjkxODc5NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTaW1vbiBCcm93bmU6IHRoZSBzb3VsLW11cmRlcmVkIHRoZW9sb2dpYW4gKDE5OTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lmd3ZXJuLm5ldFxcL2RvY3NcXC9wc3ljaG9sb2d5XFwvMTk5Ni1iZXJtYW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzU1ODg3XCJcbiAgICB9XG5dO1xuIl19