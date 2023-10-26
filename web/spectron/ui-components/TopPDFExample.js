"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const FilePaths_1 = require("../../js/util/FilePaths");
class Styles {
}
Styles.entries = {
    display: 'table',
    width: '100%'
};
Styles.entry = {
    display: 'table-row',
    width: '100%'
};
Styles.idx = {
    display: 'table-cell',
    fontWeight: 'bold',
    marginRight: '5px',
    fontSize: '22px',
    textAlign: 'right'
};
Styles.link = {
    display: 'table-cell',
    fontSize: '22px',
    textAlign: 'left',
    paddingLeft: '5px'
};
class TopPDFExample extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        for (const entry of entries) {
            entry.download = FilePaths_1.FilePaths.basename(entry.link);
        }
        let idx = 0;
        return React.createElement("div", { style: Styles.entries }, entries.map(entry => React.createElement("div", { key: idx++, style: Styles.entry },
            React.createElement("div", { style: Styles.idx },
                idx,
                "."),
            React.createElement("div", { style: Styles.link },
                React.createElement("a", { href: entry.link, download: entry.download }, entry.title)))));
    }
}
exports.TopPDFExample = TopPDFExample;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wUERGRXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRvcFBERkV4YW1wbGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQix1REFBa0Q7QUFFbEQsTUFBTSxNQUFNOztBQUVNLGNBQU8sR0FBd0I7SUFDekMsT0FBTyxFQUFFLE9BQU87SUFDaEIsS0FBSyxFQUFFLE1BQU07Q0FDaEIsQ0FBQztBQUVZLFlBQUssR0FBd0I7SUFDdkMsT0FBTyxFQUFFLFdBQVc7SUFDcEIsS0FBSyxFQUFFLE1BQU07Q0FDaEIsQ0FBQztBQUVZLFVBQUcsR0FBd0I7SUFDckMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLE1BQU07SUFDbEIsV0FBVyxFQUFFLEtBQUs7SUFDbEIsUUFBUSxFQUFFLE1BQU07SUFDaEIsU0FBUyxFQUFFLE9BQU87Q0FDckIsQ0FBQztBQUVZLFdBQUksR0FBd0I7SUFDdEMsT0FBTyxFQUFFLFlBQVk7SUFDckIsUUFBUSxFQUFFLE1BQU07SUFDaEIsU0FBUyxFQUFFLE1BQU07SUFDakIsV0FBVyxFQUFFLEtBQUs7Q0FDckIsQ0FBQztBQUlOLE1BQWEsYUFBYyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU5RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxLQUFLLE1BQU0sS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUN6QixLQUFLLENBQUMsUUFBUSxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuRDtRQUVELElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUVaLE9BQU8sNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDaEIsNkJB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UUFDVixNQUFNLEVBQUUsbUVBQW1FO1FBQzNFLGNBQWMsRUFBRSxrREFBa0Q7S0FDckU7SUFDRDtRQUNJLE9BQU8sRUFBRSxzREFBc0Q7UUFDL0QsT0FBTyxFQUFFLENBQUM7UUFDVixNQUFNLEVBQUUsK0NBQStDO1FBQ3ZELGNBQWMsRUFBRSxrREFBa0Q7S0FDckU7SUFDRDtRQUNJLE9BQU8sRUFBRSx5REFBeUQ7UUFDbEUsT0FBTyxFQUFFLENBQUM7UUFDVixNQUFNLEVBQUUsNERBQTREO1FBQ3BFLGNBQWMsRUFBRSxrREFBa0Q7S0FDckU7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJy4uLy4uL2pzL3V0aWwvRmlsZVBhdGhzJztcblxuY2xhc3MgU3R5bGVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZW50cmllczogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIGVudHJ5OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBkaXNwbGF5OiAndGFibGUtcm93JyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIGlkeDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlLWNlbGwnLFxuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnNXB4JyxcbiAgICAgICAgZm9udFNpemU6ICcyMnB4JyxcbiAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnXG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgbGluazogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlLWNlbGwnLFxuICAgICAgICBmb250U2l6ZTogJzIycHgnLFxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICc1cHgnXG4gICAgfTtcblxufVxuXG5leHBvcnQgY2xhc3MgVG9wUERGRXhhbXBsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICAgICAgZW50cnkuZG93bmxvYWQgPSBGaWxlUGF0aHMuYmFzZW5hbWUoZW50cnkubGluayk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaWR4ID0gMDtcblxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17U3R5bGVzLmVudHJpZXN9PlxuICAgICAgICAgICAge2VudHJpZXMubWFwKGVudHJ5ID0+XG4gICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHgrK30gc3R5bGU9e1N0eWxlcy5lbnRyeX0+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuaWR4fT57aWR4fS48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLmxpbmt9PjxhIGhyZWY9e2VudHJ5Lmxpbmt9IGRvd25sb2FkPXtlbnRyeS5kb3dubG9hZH0+e2VudHJ5LnRpdGxlfTwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgPC9kaXY+ICl9XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG5cbn1cblxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cblxuaW50ZXJmYWNlIEVudHJ5IHtcblxuICAgIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBzY29yZTogbnVtYmVyO1xuXG4gICAgbGluazogc3RyaW5nO1xuXG4gICAgY29tbWVudHNMaW5rOiBzdHJpbmc7XG5cbiAgICAvLyB0aGUgZG93bmxvYWQgYXR0cmlidXRlIGZvciB0aGUgZmlsZW5hbWUgdG8gdXNlIGFuZCBhbHNvIHRvIHRyaWdnZXJcbiAgICAvLyBkb3dubG9hZCBub3QgYSBuYXZpZ2F0ZVxuXG4gICAgZG93bmxvYWQ/OiBzdHJpbmc7XG5cbn1cblxuY29uc3QgZW50cmllczogRW50cnlbXSA9IFtcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOb3J3ZWdpYW4gQ29uc3VtZXIgQ291bmNpbCByZXBvcnQgb24gaG93IHRlY2ggY29tcGFuaWVzIHVzZSBkYXJrIHBhdHRlcm5zIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjYxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9maWwuZm9yYnJ1a2VycmFkZXQubm9cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMThcXC8wNlxcLzIwMTgtMDYtMjctZGVjZWl2ZWQtYnktZGVzaWduLWZpbmFsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQwNjE4NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBc3NlbWJseSBMYW5ndWFnZSBmb3IgQmVnaW5uZXJzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTkwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC95dXJpY2hldi5jb21cXC93cml0aW5nc1xcL0FMNEItRU4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTQ5MDUwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBQZXJpb2RpYyBUYWJsZSBvZiBEYXRhIFN0cnVjdHVyZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MzQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3N0cmF0b3Muc2Vhcy5oYXJ2YXJkLmVkdVxcL2ZpbGVzXFwvc3RyYXRvc1xcL2ZpbGVzXFwvcGVyaW9kaWN0YWJsZWRhdGFzdHJ1Y3R1cmVzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODMxNDU1NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21wZXRpdGl2ZSBQcm9ncmFtbWVyJ3MgSGFuZGJvb2sgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTE0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jc2VzLmZpXFwvYm9vay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5NTIyMjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiREVGIENPTiByZXBvcnQgb24gdnVsbmVyYWJpbGl0aWVzIGluIFVTIGVsZWN0aW9uIGluZnJhc3RydWN0dXJlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTA5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9kZWZjb24ub3JnXFwvaW1hZ2VzXFwvZGVmY29uLTI2XFwvREVGJTIwQ09OJTIwMjYlMjB2b3RpbmclMjB2aWxsYWdlJTIwcmVwb3J0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODExMjE3MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPcmlnaW5hbCBTb3VyY2UgY29kZSBmb3IgdGhlIEZ1cmJ5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDgwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5zZWFucmlkZGxlLmNvbVxcL2Z1cmJ5c291cmNlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc1MTU5OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQcm9ncmFtbWluZyBQYXJhZGlnbXMgZm9yIER1bW1pZXM6IFdoYXQgRXZlcnkgUHJvZ3JhbW1lciBTaG91bGQgS25vdyAoMjAwOSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5pbmZvLnVjbC5hYy5iZVxcL35wdnJcXC9WYW5Sb3lDaGFwdGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM4MTY0MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTZWxlY3RlZCBFc3NheXMgb2YgUmljaGFyZCBNLiBTdGFsbG1hbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM1NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmdudS5vcmdcXC9waGlsb3NvcGh5XFwvZnNmc1xcL3Jtcy1lc3NheXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTI3MTU0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBTaXRlIFJlbGlhYmlsaXR5IFdvcmtib29rOiBQcmFjdGljYWwgV2F5cyB0byBJbXBsZW1lbnQgU1JFIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzUxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zZXJ2aWNlcy5nb29nbGUuY29tXFwvZmhcXC9maWxlc1xcL21pc2NcXC90aGUtc2l0ZS1yZWxpYWJpbGl0eS13b3JrYm9vay1uZXh0MTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjE0OTA3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkludGVsIEFuYWx5c2lzIG9mIFNwZWN1bGF0aXZlIEV4ZWN1dGlvbiBTaWRlIENoYW5uZWxzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzQ2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzcm9vbS5pbnRlbC5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcL3NpdGVzXFwvMTFcXC8yMDE4XFwvMDFcXC9JbnRlbC1BbmFseXNpcy1vZi1TcGVjdWxhdGl2ZS1FeGVjdXRpb24tU2lkZS1DaGFubmVscy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwNzk5MTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVmlwYXNzYW5hIGZvciBIYWNrZXJzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzQ1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9naXRodWIuY29tXFwvZGVvYmFsZFxcL3ZpcGFzc2FuYS1mb3ItaGFja2Vyc1xcL2Jsb2JcXC9tYXN0ZXJcXC92aXBhc3NhbmEtZm9yLWhhY2tlcnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODQyMDQwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldyaXRpbmcgTmV0d29yayBEcml2ZXJzIGluIFJ1c3QgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5uZXQuaW4udHVtLmRlXFwvZmlsZWFkbWluXFwvYmlidGV4XFwvcHVibGljYXRpb25zXFwvdGhlc2VzXFwvMjAxOC1peHktcnVzdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0MDU1MTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTlNBIHBvc3RlcnMgZnJvbSB0aGUgNTBzIGFuZCA2MHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmdvdmVybm1lbnRhdHRpYy5vcmdcXC8yOGRvY3NcXC9OU0FzZWN1cml0eVBvc3RlcnNfMTk1MHMtNjBzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzIyMjgyN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJpT1MgMTEgU2VjdXJpdHkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5hcHBsZS5jb21cXC9idXNpbmVzc1xcL2RvY3NcXC9pT1NfU2VjdXJpdHlfR3VpZGUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTQwNDE4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvZ25pdGl2ZSBEaXN0b3J0aW9ucyBvZiBQZW9wbGUgV2hvIEdldCBTdHVmZiBEb25lICgyMDEyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMxOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGRmcy5zZW1hbnRpY3NjaG9sYXIub3JnXFwvcHJlc2VudGF0aW9uXFwvMWE1OVxcLzdhOWNhOGIwM2Q4NmFlOWEyZjg2ZGQ5MGU3YmJmZjQ4MWZhYi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MzIzNjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXBwbGUgVDIgU2VjdXJpdHkgQ2hpcDogU2VjdXJpdHkgT3ZlcnZpZXcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5hcHBsZS5jb21cXC9tYWNcXC9kb2NzXFwvQXBwbGVfVDJfU2VjdXJpdHlfQ2hpcF9PdmVydmlldy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzMzc4MjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVWJlciBTZWxmLURyaXZpbmcgQ2FyIFRoYXQgU3RydWNrIFBlZGVzdHJpYW4gV2FzblxcdTIwMTl0IFNldCB0byBTdG9wIGluIGFuIEVtZXJnZW5jeVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMxNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm50c2IuZ292XFwvaW52ZXN0aWdhdGlvbnNcXC9BY2NpZGVudFJlcG9ydHNcXC9SZXBvcnRzXFwvSFdZMThNSDAxMC1wcmVsaW0ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTQ0MTYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBBd2sgUHJvZ3JhbW1pbmcgTGFuZ3VhZ2UgKDE5ODgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzE0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9pYTgwMjMwOS51cy5hcmNoaXZlLm9yZ1xcLzI1XFwvaXRlbXNcXC9wZGZ5LU1nTjBIMWpvSW9EVm9JQzdcXC9UaGVfQVdLX1Byb2dyYW1taW5nX0xhbmd1YWdlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE0MDkzNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgJDI1QiBlaWdlbnZlY3RvciAoMjAwNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5yb3NlLWh1bG1hbi5lZHVcXC9+YnJ5YW5cXC9nb29nbGVGaW5hbFZlcnNpb25GaXhlZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwOTE2NDZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGVhY2ggWW91cnNlbGYgTG9naWM6IEEgU3R1ZHkgR3VpZGUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5sb2dpY21hdHRlcnMubmV0XFwvcmVzb3VyY2VzXFwvcGRmc1xcL1RlYWNoWW91cnNlbGZMb2dpYzIwMTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzU3OTcyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgQzg5IGNvbXBpbGVyIHRoYXQgcHJvZHVjZXMgZXhlY3V0YWJsZXMgdGhhdCBhcmUgYWxzbyB2YWxpZCBBU0NJSSB0ZXh0IGZpbGVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjk3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jcy5jbXUuZWR1XFwvfnRvbTdcXC9hYmNcXC9wYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMTIzMTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU29mdHdhcmUtRGVmaW5lZCBSYWRpbyBmb3IgRW5naW5lZXJzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjkyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5hbmFsb2cuY29tXFwvbWVkaWFcXC9lblxcL3RyYWluaW5nLXNlbWluYXJzXFwvZGVzaWduLWhhbmRib29rc1xcL1NvZnR3YXJlLURlZmluZWQtUmFkaW8tZm9yLUVuZ2luZWVycy0yMDE4XFwvU0RSNEVuZ2luZWVycy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczOTk1NTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTm90ZXMgb24gRGlzY3JldGUgTWF0aGVtYXRpY3MgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjg3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jcy55YWxlLmVkdVxcL2hvbWVzXFwvYXNwbmVzXFwvY2xhc3Nlc1xcLzIwMlxcL25vdGVzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM5MTU4MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTZXQgVGhlb3J5IGFuZCBBbGdlYnJhIGluIENTOiBJbnRyb2R1Y3Rpb24gdG8gTWF0aGVtYXRpY2FsIE1vZGVsaW5nICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI4MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGRmcy5zZW1hbnRpY3NjaG9sYXIub3JnXFwvZDEwNlxcLzZiNmRlNjAxYzFkN2Q1YWYyNWFmM2Y3MDkxYmM3YWQzYWQ1MS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4NDA3MTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGVzdGltb255IG9mIE1hcmsgWnVja2VyYmVyZyBcXHUyMDEzIEhlYXJpbmcgQmVmb3JlIFVTIEhvdXNlIG9mIFJlcHJlc2VudGF0aXZlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI4MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9kb2NzLmhvdXNlLmdvdlxcL21lZXRpbmdzXFwvSUZcXC9JRjAwXFwvMjAxODA0MTFcXC8xMDgwOTBcXC9ISFJHLTExNS1JRjAwLVdzdGF0ZS1adWNrZXJiZXJnTS0yMDE4MDQxMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY3OTQwNThcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU29jaW9lY29ub21pYyBncm91cCBjbGFzc2lmaWNhdGlvbiBiYXNlZCBvbiB1c2VyIGZlYXR1cmVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjc5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3BpbWctZmFpdy51c3B0by5nb3ZcXC9mZGRcXC84M1xcLzIwMThcXC8yOFxcLzAwM1xcLzAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODY2MjkyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIiBBcHBsZSBTdXBwbGllciBMaXN0IFxcdTIwMTMgVG9wIDIwMCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI3NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmFwcGxlLmNvbVxcL3N1cHBsaWVyLXJlc3BvbnNpYmlsaXR5XFwvcGRmXFwvQXBwbGUtU3VwcGxpZXItTGlzdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxOTkxNzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3RlbGxhciBQcm90b2NvbDogQSBGZWRlcmF0ZWQgTW9kZWwgZm9yIEludGVybmV0LUxldmVsIENvbnNlbnN1cyAoMjAxNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5zdGVsbGFyLm9yZ1xcL3BhcGVyc1xcL3N0ZWxsYXItY29uc2Vuc3VzLXByb3RvY29sLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjEyNTkyMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgdG8gV3JpdGUgYSBUZWNobmljYWwgUGFwZXIgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BkZnMuc2VtYW50aWNzY2hvbGFyLm9yZ1xcLzQ0MWZcXC9hYzdjMjAyMGUxYzhmMGQzMmFkZmZjYTY5N2JiYjhhMTk4YTEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjI1MTk3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBNYWtpbmcgb2YgUHJpbmNlIG9mIFBlcnNpYSAoMjAxMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmpvcmRhbm1lY2huZXIuY29tXFwvZG93bmxvYWRzXFwvbWFrcG9wc2FtcGxlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg0NTkzN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQSUQgV2l0aG91dCBhIFBoRCAoMjAxNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lndlc2NvdHRkZXNpZ24uY29tXFwvYXJ0aWNsZXNcXC9waWRcXC9waWRXaXRob3V0QVBoZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyNTcxNTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUHJpbmNpcGxlcyBvZiBBbGdvcml0aG1pYyBQcm9ibGVtIFNvbHZpbmcgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjU2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3NjLmt0aC5zZVxcL35qc2FubmVtb1xcL3NsYXNrXFwvbWFpbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyODczNTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUHVibGljLnJlc291cmNlLm9yZyB3aW5zIGFwcGVhbCBvbiByaWdodCB0byBwdWJsaXNoIHRoZSBsYXcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNDgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jYWRjLnVzY291cnRzLmdvdlxcL2ludGVybmV0XFwvb3BpbmlvbnMubnNmXFwvNTMzRDQ3QUY4ODNDODE5NDg1MjU4MkNEMDA1MkI4RDRcXC8kZmlsZVxcLzE3LTcwMzUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTc5NzQyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1JVCBDYXJlZXIgRGV2ZWxvcG1lbnQgSGFuZGJvb2sgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNDgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2dlY2QubWl0LmVkdVxcL3NpdGVzXFwvZGVmYXVsdFxcL2ZpbGVzXFwvYWJvdXRcXC9maWxlc1xcL2NhcmVlci1oYW5kYm9vay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczMzEzMTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2V2ZW4gUHV6emxlcyBZb3UgVGhpbmsgWW91IE11c3QgTm90IEhhdmUgSGVhcmQgQ29ycmVjdGx5ICgyMDA2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIzNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm1hdGguZGFydG1vdXRoLmVkdVxcL35wd1xcL3NvbHV0aW9ucy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5OTg4MjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTC10aGVhbmluZSwgYSBjb25zdGl0dWVudCBpbiB0ZWEsIGFuZCBpdHMgZWZmZWN0IG9uIG1lbnRhbCBzdGF0ZSAoMjAwOCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMzMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYXBqY24ubmhyaS5vcmcudHdcXC9zZXJ2ZXJcXC9BUEpDTlxcLzE3JTIwU3VwcGwlMjAxXFwvXFwvMTY3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzY0NDIwNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTZWxmLUF3YXJlbmVzcyBmb3IgSW50cm92ZXJ0cyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIyNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jbGlmZmMub3JnXFwvYmxvZ1xcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxOFxcLzA1XFwvQVdhck9mV29yZHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDEwMTk5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdXNlIE92ZXJzaWdodCBDb21taXR0ZWUgUmVwb3J0IG9uIEVxdWlmYXggQnJlYWNoIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjIxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9vdmVyc2lnaHQuaG91c2UuZ292XFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE4XFwvMTJcXC9FcXVpZmF4LVJlcG9ydC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2NTE2NzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXBwbGUgRmlsZSBTeXN0ZW0gUmVmZXJlbmNlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjIwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9kZXZlbG9wZXIuYXBwbGUuY29tXFwvc3VwcG9ydFxcL2FwcGxlLWZpbGUtc3lzdGVtXFwvQXBwbGUtRmlsZS1TeXN0ZW0tUmVmZXJlbmNlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA0MDc0MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgb3JpZ2luYWwgcGl0Y2ggZm9yIERpYWJsbyAoMTk5NCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMTksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmdyYXliZWFyZGdhbWVzLmNvbVxcL2Rvd25sb2FkXFwvZGlhYmxvX3BpdGNoLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjY4NTc5NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTZW5hdG9yIHJlcXVlc3RzIGJldHRlciBodHRwcyBjb21wbGlhbmNlIGF0IFVTIERlcGFydG1lbnQgb2YgRGVmZW5zZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIxNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lnd5ZGVuLnNlbmF0ZS5nb3ZcXC9pbW9cXC9tZWRpYVxcL2RvY1xcL3d5ZGVuLXdlYi1lbmNyeXB0aW9uLWxldHRlci10by1kb2QtY2lvLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzEyOTA5M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCZXJrc2hpcmUgSGF0aGF3YXkgMjAxNyBBbm51YWwgTGV0dGVyIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjE2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5iZXJrc2hpcmVoYXRoYXdheS5jb21cXC9sZXR0ZXJzXFwvMjAxN2x0ci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0NTMxNTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IHRvIEJlIGEgUHJvZ3JhbW1lcjogQSBTaG9ydCwgQ29tcHJlaGVuc2l2ZSwgYW5kIFBlcnNvbmFsIFN1bW1hcnkgKDIwMDIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjE1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZG9jLmljLmFjLnVrXFwvfnN1c2FuXFwvNDc1XFwvSG93VG9CZUFQcm9ncmFtbWVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODc0MjE5OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJdCBUYWtlcyBUd28gTmV1cm9ucyB0byBSaWRlIGEgQmljeWNsZSAoMjAwNClcIixcbiAgICAgICAgXCJzY29yZVwiOiAyMTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvcGFyYWRpc2UuY2FsdGVjaC5lZHVcXC9+Y29va1xcL3BhcGVyc1xcL1R3b05ldXJvbnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MjE1MTMwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlVuaXRlZCBTdGF0ZXMgdi4gTWljcm9zb2Z0IENvcnAuIERpc21pc3NlZCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIwNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnN1cHJlbWVjb3VydC5nb3ZcXC9vcGluaW9uc1xcLzE3cGRmXFwvMTctMl8xODI0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjg1ODU5N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTdGFyQ3JhZnQ6IFJlbWFzdGVyZWQgXFx1MjAxMyBFbXVsYXRpbmcgYSBidWZmZXIgb3ZlcmZsb3cgZm9yIGZ1biBhbmQgcHJvZml0IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcLzB4ZWIubmV0XFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE4XFwvMDJcXC9TdGFyQ3JhZnRfRVVEX0VtdWxhdG9yLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMwNTc2OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgdG8gZmluZCBoaWRkZW4gY2FtZXJhcyAoMjAwMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMDMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnRlbnRhY2xlLmZyYW5rZW4uZGVcXC9wYXBlcnNcXC9oaWRkZW5jYW1zLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjM4MTU5MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRXZvbHV0aW9uIG9mIEMgUHJvZ3JhbW1pbmcgUHJhY3RpY2VzOiBBIFN0dWR5IG9mIFVuaXggKDIwMTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjAzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cyLmRtc3QuYXVlYi5nclxcL2Rkc1xcL3B1YnNcXC9jb25mXFwvMjAxNi1JQ1NFLVByb2dFdm9sXFwvaHRtbFxcL1NMSzE2LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzA0NjMzMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCbG9ja2NoYWlucyBmcm9tIGEgRGlzdHJpYnV0ZWQgQ29tcHV0aW5nIFBlcnNwZWN0aXZlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjAyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NzLmJyb3duLmVkdVxcL2NvdXJzZXNcXC9jc2NpMjk1Mi1hXFwvcGFwZXJzXFwvcGVyc3BlY3RpdmUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTkxNTA2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyB0byBBcmNoaXRlY3QgYSBRdWVyeSBDb21waWxlciwgUmV2aXNpdGVkIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjAxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3MucHVyZHVlLmVkdVxcL2hvbWVzXFwvcm9tcGZcXC9wYXBlcnNcXC90YWhib3ViLXNpZ21vZDE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg1MTk0MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGb3VuZGF0aW9ucyBvZiBEYXRhIFNjaWVuY2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOTgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNzLmNvcm5lbGwuZWR1XFwvamVoXFwvYm9vay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxMzE5NDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBXYW5kZXJpbmcgTWluZCBJcyBhbiBVbmhhcHB5IE1pbmQgKDIwMTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTk3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9ncmVhdGVyZ29vZC5iZXJrZWxleS5lZHVcXC9pbWFnZXNcXC9hcHBsaWNhdGlvbl91cGxvYWRzXFwvS0lMTElOR1NXT1JUSC1XYW5kZXJpbmdNaW5kLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjc5Nzk0N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21wYXJpbmcgTGFuZ3VhZ2VzIGZvciBFbmdpbmVlcmluZyBTZXJ2ZXIgU29mdHdhcmU6IEVybGFuZywgR28sIGFuZCBTY2FsYVxcL0Fra2EgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmRjcy5nbGEuYWMudWtcXC9+dHJpbmRlclxcL3BhcGVyc1xcL3NhYy0xOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczNDIyNzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQnVtcGVyIFN0aWNrZXIgQ29tcHV0ZXIgU2NpZW5jZSAoMTk4NSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmJvd2RvaW4uZWR1XFwvfmx0b21hXFwvdGVhY2hpbmdcXC9jczM0MFxcL3NwcmluZzA1XFwvY291cnNlc3R1ZmZcXC9CZW50bGV5X0J1bXBlclN0aWNrZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Nzk0NTA3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZhY2Vib29rIFExIDIwMTggRWFybmluZ3MgU2xpZGVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTkxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9pbnZlc3Rvci5mYi5jb21cXC9maWxlc1xcL2RvY19maW5hbmNpYWxzXFwvMjAxOFxcL1ExXFwvUTEtMjAxOC1FYXJuaW5ncy1QcmVzZW50YXRpb24tKDEpLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjkyNTY3MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbnRyb2R1Y3Rpb24gdG8gT1MgQWJzdHJhY3Rpb25zIFVzaW5nIFBsYW4gOSBmcm9tIEJlbGwgTGFicyAoMjAwNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2xzdWIub3JnXFwvd2hvXFwvbmVtb1xcLzkuaW50cm8ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MjUzMTkzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1pY3Jvc29mdCBXb3JkIGZvciBXaW5kb3dzIDEuMCBQb3N0bW9ydGVtICgxOTg5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE5MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9hbnRpdHJ1c3Quc2xhdGVkLm9yZ1xcL3d3dy5pb3dhY29uc3VtZXJjYXNlLm9yZ1xcLzAxMTYwN1xcLzgwMDBcXC9QWDA4ODc1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODc2NDc5MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBcmNoaXRlY3R1cmUgb2YgYSBEYXRhYmFzZSBTeXN0ZW0gKDIwMDcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTg5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2RiLmNzLmJlcmtlbGV5LmVkdVxcL3BhcGVyc1xcL2ZudGRiMDctYXJjaGl0ZWN0dXJlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE5MDk0N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNb25leSBjcmVhdGlvbiBpbiB0aGUgbW9kZXJuIGVjb25vbXkgKDIwMTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTg5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYmFua29mZW5nbGFuZC5jby51a1xcLy1cXC9tZWRpYVxcL2JvZVxcL2ZpbGVzXFwvcXVhcnRlcmx5LWJ1bGxldGluXFwvMjAxNFxcL21vbmV5LWNyZWF0aW9uLWluLXRoZS1tb2Rlcm4tZWNvbm9teS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY2MDQyNTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRXhwbG9pdGluZyBtb2Rlcm4gbWljcm9hcmNoaXRlY3R1cmVzOiBNZWx0ZG93biwgU3BlY3RyZSwgYW5kIG90aGVyIGF0dGFja3MgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxODksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvcGVvcGxlLnJlZGhhdC5jb21cXC9qY21cXC90YWxrc1xcL0ZPU0RFTV8yMDE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMwNDQ2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCYXllc1xcdTIwMTkgVGhlb3JlbSBpbiB0aGUgMjFzdCBDZW50dXJ5ICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE4NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93ZWIuaXBhYy5jYWx0ZWNoLmVkdVxcL3N0YWZmXFwvZm1hc2NpXFwvaG9tZVxcL2FzdHJvX3JlZnNcXC9TY2llbmNlLTIwMTMtRWZyb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjEzMTE3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyB0byBzY2FsZSBhIGRpc3RyaWJ1dGVkIHN5c3RlbSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE4NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY2RuLm9yZWlsbHlzdGF0aWMuY29tXFwvZW5cXC9hc3NldHNcXC8xXFwvZXZlbnRcXC8yNDRcXC9Ib3clMjB0byUyMHNjYWxlJTIwYSUyMGRpc3RyaWJ1dGVkJTIwc3lzdGVtJTIwUHJlc2VudGF0aW9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUyOTc4MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgdG8gd3JpdGUgTWF0aGVtYXRpY3MgKDE5NzApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTgyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5tYXRoLnV0YWguZWR1XFwvfnBhXFwvMzAwMFxcL2hhbG1vcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4Mjk0NDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IFJ1c3QgSXMgVGlsZGVcXHUyMDE5cyBDb21wZXRpdGl2ZSBBZHZhbnRhZ2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNzcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5ydXN0LWxhbmcub3JnXFwvcGRmc1xcL1J1c3QtVGlsZGUtV2hpdGVwYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMTc3MjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmVuZGVyZWQgSW5zZWN1cmU6IEdQVSBTaWRlIENoYW5uZWwgQXR0YWNrcyBBcmUgUHJhY3RpY2FsIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTc0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jcy51Y3IuZWR1XFwvfnpoaXl1bnFcXC9wdWJcXC9jY3MxOF9ncHVfc2lkZV9jaGFubmVsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ0OTY3MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgUmF0ZSBvZiBSZXR1cm4gb24gRXZlcnl0aGluZywgMTg3MFxcdTIwMTMyMDE1IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTY4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZnJic2Yub3JnXFwvZWNvbm9taWMtcmVzZWFyY2hcXC9maWxlc1xcL3dwMjAxNy0yNS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwNzgwNTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BlZWNoIGFuZCBMYW5ndWFnZSBQcm9jZXNzaW5nLCAzcmQgRWRpdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd2ViLnN0YW5mb3JkLmVkdVxcL35qdXJhZnNreVxcL3NscDNcXC9lZDNib29rLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjEwNDg2OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNdEdveDogQW5ub3VuY2VtZW50IG9mIENvbW1lbmNlbWVudCBvZiBDaXZpbCBSZWhhYmlsaXRhdGlvbiBQcm9jZWVkaW5ncyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm10Z294LmNvbVxcL2ltZ1xcL3BkZlxcLzIwMTgwNjIyX2Fubm91bmNlbWVudF9lbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczNzM4NTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVG93YXJkcyBhIFR5cGUgU3lzdGVtIGZvciBDb250YWluZXJzIGFuZCBBV1MgTGFtYmRhIHRvIEF2b2lkIEZhaWx1cmVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTY3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NocmlzdG9waGVybWVpa2xlam9obi5jb21cXC9wdWJsaWNhdGlvbnNcXC9ob3RlZGdlLTIwMTgtY29udGFpbmVycy1wcmVwcmludC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY3NDYzMTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQWxwaGFiZXQgQW5ub3VuY2VzIFNlY29uZCBRdWFydGVyIDIwMTggUmVzdWx0cyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYWJjLnh5elxcL2ludmVzdG9yXFwvcGRmXFwvMjAxOFEyX2FscGhhYmV0X2Vhcm5pbmdzX3JlbGVhc2UucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTk1NTEwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkV2b2x1dGlvbiBvZiBFbWFjcyBMaXNwIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTY1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuaXJvLnVtb250cmVhbC5jYVxcL35tb25uaWVyXFwvaG9wbC00LWVtYWNzLWxpc3AucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjY3Mjg1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkthZGVtbGlhOiBBIFBlZXItVG8tcGVlciBJbmZvcm1hdGlvbiBTeXN0ZW0gQmFzZWQgb24gdGhlIFhPUiBNZXRyaWMgKDIwMDIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTY1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZG9zLmNzYWlsLm1pdC5lZHVcXC9+cGV0YXJcXC9wYXBlcnNcXC9tYXltb3Vua292LWthZGVtbGlhLWxuY3MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzExOTgwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlZXAgaW1hZ2UgcmVjb25zdHJ1Y3Rpb24gZnJvbSBodW1hbiBicmFpbiBhY3Rpdml0eSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmJpb3J4aXYub3JnXFwvY29udGVudFxcL2Jpb3J4aXZcXC9lYXJseVxcLzIwMTdcXC8xMlxcLzMwXFwvMjQwMzE3LmZ1bGwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTQwMDU0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgTGlzcCBXYXkgdG8gVHlwZSBUaGVvcnkgYW5kIEZvcm1hbCBQcm9vZnMgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTY0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZXVyb3BlYW4tbGlzcC1zeW1wb3NpdW0ub3JnXFwvc3RhdGljXFwvMjAxN1xcL3Blc2NoYW5za2kucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzgzNjU0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXB1dGVyIFNjaWVuY2UgSSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jc2UudW5sLmVkdVxcL35jYm91cmtlXFwvQ29tcHV0ZXJTY2llbmNlT25lLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA1MzAxNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJRUVFIFBvc2l0aW9uIFN0YXRlbWVudCBpbiBTdXBwb3J0IG9mIFN0cm9uZyBFbmNyeXB0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTYyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2dsb2JhbHBvbGljeS5pZWVlLm9yZ1xcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxOFxcLzA2XFwvSUVFRTE4MDA2LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQwODQ5NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRWNvbm9taWMgTGltaXRzIG9mIEJpdGNvaW4gYW5kIHRoZSBCbG9ja2NoYWluIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTYxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2ZhY3VsdHkuY2hpY2Fnb2Jvb3RoLmVkdVxcL2VyaWMuYnVkaXNoXFwvcmVzZWFyY2hcXC9FY29ub21pYy1MaW1pdHMtQml0Y29pbi1CbG9ja2NoYWluLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM5NDI2MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTaG93IEhOOiBTb2Z0d2FyZSBBcmNoaXRlY3R1cmUsIGFsbCB5b3UgbmVlZCB0byBrbm93IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTYxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zaGFyZS5jb21wb3NpZXV4LmZyXFwvd2hpdGUtYm9vay1zb2Z0d2FyZS1hcmNoaXRlY3R1cmUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzYxNjA5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1hdGggZnJvbSBUaHJlZSB0byBTZXZlbjogVGhlIFN0b3J5IG9mIGEgTWF0aGVtYXRpY2FsIENpcmNsZSBmb3IgUHJlc2Nob29sZXJzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTYxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5tc3JpLm9yZ1xcL3Blb3BsZVxcL3N0YWZmXFwvbGV2eVxcL2ZpbGVzXFwvTUNMXFwvWnZvbmtpbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwMTg1ODNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQnJlYWtvdXQgaW1wbGVtZW50ZWQgaW4gSmF2YVNjcmlwdCBpbiBhIFBERlwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcmF3Z2l0LmNvbVxcL29zbnJcXC9ob3JyaWZ5aW5nLXBkZi1leHBlcmltZW50c1xcL21hc3RlclxcL2JyZWFrb3V0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzkxNTI5NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgTWF0aGVtYXRpY3Mgb2YgUXVhbnR1bSBNZWNoYW5pY3MgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3V3YXRlcmxvby5jYVxcL2luc3RpdHV0ZS1mb3ItcXVhbnR1bS1jb21wdXRpbmdcXC9zaXRlc1xcL2NhLmluc3RpdHV0ZS1mb3ItcXVhbnR1bS1jb21wdXRpbmdcXC9maWxlc1xcL3VwbG9hZHNcXC9maWxlc1xcL21hdGhlbWF0aWNzX3FtX3YyMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwNDYzNDNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR29pbmcgSVB2NiBPbmx5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTU4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wYy5uYW5vZy5vcmdcXC9zdGF0aWNcXC9wdWJsaXNoZWRcXC9tZWV0aW5nc1xcL05BTk9HNzNcXC8xNjQ1XFwvMjAxODA2MjVfTGFnZXJob2xtX1QtTW9iaWxlX1NfSm91cm5leV9Ub192MS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczOTk4ODRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEJhc2ljIElkZWFzIGluIE5ldXJhbCBOZXR3b3JrcyAoMTk5NCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LWlzbC5zdGFuZm9yZC5lZHVcXC9+d2lkcm93XFwvcGFwZXJzXFwvajE5OTR0aGViYXNpYy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxMTI0NjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTklTVDogQmxvY2tjaGFpbiBUZWNobm9sb2d5IE92ZXJ2aWV3IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTU0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9udmxwdWJzLm5pc3QuZ292XFwvbmlzdHB1YnNcXC9pclxcLzIwMThcXC9OSVNULklSLjgyMDIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTU3MzYzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRvIHlvdSBuZWVkIGEgYmxvY2tjaGFpbj9cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VwcmludC5pYWNyLm9yZ1xcLzIwMTdcXC8zNzUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzE1NDU2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldyaXRpbmcgTmV0d29yayBEcml2ZXJzIGluIEdvIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTUyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubmV0LmluLnR1bS5kZVxcL2ZpbGVhZG1pblxcL2JpYnRleFxcL3B1YmxpY2F0aW9uc1xcL3RoZXNlc1xcLzIwMTgtaXh5LWdvLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM5OTM4OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbnRyb2R1Y3Rpb24gdG8gRnVuY3Rpb25hbCBQcm9ncmFtbWluZyAoMTk4OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvdXNpLXBsLmdpdGh1Yi5pb1xcL2xjXFwvc3AtMjAxNVxcL2RvY1xcL0JpcmRfV2FkbGVyLiUyMEludHJvZHVjdGlvbiUyMHRvJTIwRnVuY3Rpb25hbCUyMFByb2dyYW1taW5nLjFlZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0NzEzNzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVlcExvZzogQW5vbWFseSBEZXRlY3Rpb24gYW5kIERpYWdub3NpcyBmcm9tIFN5c3RlbSBMb2dzICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYWNtY2NzLmdpdGh1Yi5pb1xcL3BhcGVyc1xcL3AxMjg1LWR1QS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MDYyNjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmlyZWZveDogVGhlIEVmZmVjdCBvZiBBZCBCbG9ja2luZyBvbiBVc2VyIEVuZ2FnZW1lbnQgd2l0aCB0aGUgV2ViIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQ5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9yZXNlYXJjaC5tb3ppbGxhLm9yZ1xcL2ZpbGVzXFwvMjAxOFxcLzA0XFwvVGhlLUVmZmVjdC1vZi1BZC1CbG9ja2luZy1vbi1Vc2VyLUVuZ2FnZW1lbnQtd2l0aC10aGUtV2ViLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODEwNTM3NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTZXR0aW5nIFVwIGEgQ2F5bWFuIElzbGFuZHMgQ29tcGFueSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnN0dWFydHNsYXcuY29tXFwvY21zXFwvZG9jdW1lbnRcXC9TZXR0aW5nX3VwX2FfQ2F5bWFuX0lzbGFuZHNfQ29tcGFueS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4MDc3NjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEp1cnkgSXMgSW46IE1vbm9saXRoaWMgT1MgRGVzaWduIElzIEZsYXdlZCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC90cy5kYXRhNjEuY3Npcm8uYXVcXC9wdWJsaWNhdGlvbnNcXC9jc2lyb19mdWxsX3RleHRcXC9CaWdnc19MSF8xOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NjcwNjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTW9kZXJuIENvZGUgUmV2aWV3OiBBIENhc2UgU3R1ZHkgYXQgR29vZ2xlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQ2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zYmFjay5pdFxcL3B1YmxpY2F0aW9uc1xcL2ljc2UyMDE4c2VpcC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwMzU1NDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQW5hbHlzaXMgb2YgVVNCIGZhbiBnaXZlbiB0byBqb3VybmFsaXN0cyBhdCBOb3J0aCBLb3JlYS1TaW5nYXBvcmUgU3VtbWl0IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQ1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jbC5jYW0uYWMudWtcXC9+c3BzMzJcXC91c2JfZmFuX3JlcG9ydC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0NTkwNDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRW1haWwgZXhjaGFuZ2UgYmV0d2VlbiBNSVQgTWVkaWEgTGFiIGFuZCB0aGUgSU9UQSBGb3VuZGF0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQ0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy50YW5nbGVibG9nLmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxOFxcLzAyXFwvbGV0dGVycy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0NTcxMjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTGluZWFyIGxvZ2ljIGFuZCBkZWVwIGxlYXJuaW5nIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3RoZXJpc2luZ3NlYS5vcmdcXC9ub3Rlc1xcL3RhbGstbGxkbC10cmFuc2NyaXB0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjI1NTYxMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZXZpdmluZyBTbWFsbHRhbGstNzggKDIwMTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2ZyZXVkZW5iZXJncy5kZVxcL2JlcnRcXC9wdWJsaWNhdGlvbnNcXC9JbmdhbGxzLTIwMTQtU21hbGx0YWxrNzgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDU1OTYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJhbmRpdCBBbGdvcml0aG1zIEJvb2sgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNDEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZG93bmxvYWRzLnRvci1sYXR0aW1vcmUuY29tXFwvYmFuZGl0Ym9va1xcL2Jvb2sucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjQyNTY0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldoeSBQaGlsb3NvcGhlcnMgU2hvdWxkIENhcmUgQWJvdXQgQ29tcHV0YXRpb25hbCBDb21wbGV4aXR5ICgyMDExKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnNjb3R0YWFyb25zb24uY29tXFwvcGFwZXJzXFwvcGhpbG9zLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU3MzE0MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMb2coR3JhcGgpOiBBIE5lYXItT3B0aW1hbCBIaWdoLVBlcmZvcm1hbmNlIEdyYXBoIFJlcHJlc2VudGF0aW9uICgyMDE4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGVvcGxlLmNzYWlsLm1pdC5lZHVcXC9qc2h1blxcL3BhcGVyc1xcL2xvZ2dyYXBoLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA4MTk3OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTZXZlbiBQaWxsYXJzIG9mIENhdXNhbCBSZWFzb25pbmcgd2l0aCBSZWZsZWN0aW9ucyBvbiBNYWNoaW5lIExlYXJuaW5nIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2Z0cC5jcy51Y2xhLmVkdVxcL3B1YlxcL3N0YXRfc2VyXFwvcjQ4MS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxODczMDZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIHBoeXNpY3Mgb2YgYmFraW5nIGdvb2QgcGl6emEgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNDAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FyeGl2Lm9yZ1xcL2Z0cFxcL2FyeGl2XFwvcGFwZXJzXFwvMTgwNlxcLzE4MDYuMDg3OTAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDM3MjI5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdldCBCaWxsaW9ucyBvZiBDb3JyZWN0IERpZ2l0cyBvZiBQaSBmcm9tIGEgV3JvbmcgRm9ybXVsYSAoMTk5OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNDAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FjYWRlbWljcy5yb3dhbi5lZHVcXC9jc21cXC9kZXBhcnRtZW50c1xcL21hdGhcXC9mYWN1bHR5c3RhZmZcXC9mYWN1bHR5XFwvb3NsZXJcXC9CaWxsaW9uc19waV9kaWdpdHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDQwNjMwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFkdmFuY2VkIERhdGEgQW5hbHlzaXMgZnJvbSBhbiBFbGVtZW50YXJ5IFBvaW50IG9mIFZpZXcgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTM5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5zdGF0LmNtdS5lZHVcXC9+Y3NoYWxpemlcXC9BREFmYUVQb1ZcXC9BREFmYUVQb1YucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDEwOTM2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZyZWVuZXQ6IEEgRGlzdHJpYnV0ZWQgQW5vbnltb3VzIEluZm9ybWF0aW9uIFN0b3JhZ2UgYW5kIFJldHJpZXZhbCBTeXN0ZW0gKDIwMDApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTM4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3NuYXAuc3RhbmZvcmQuZWR1XFwvY2xhc3NcXC9jczIyNHctcmVhZGluZ3NcXC9jbGFya2UwMGZyZWVuZXQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzA5MzgzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBTaW1wbGUgRXNzZW5jZSBvZiBBdXRvbWF0aWMgRGlmZmVyZW50aWF0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTM3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NvbmFsLm5ldFxcL3BhcGVyc1xcL2Vzc2VuY2Utb2YtYWRcXC9lc3NlbmNlLW9mLWFkLWljZnAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzA2ODYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlByb2dyYW1taW5nIFBhcmFkaWdtcyBhbmQgQmV5b25kIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTM3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NzLmJyb3duLmVkdVxcL35za1xcL1B1YmxpY2F0aW9uc1xcL1BhcGVyc1xcL1B1Ymxpc2hlZFxcL2tmLXByb2ctcGFyYWRpZ21zLWFuZC1iZXlvbmRcXC9wYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczODIzNjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQWxwaGFiZXQgUTEgMjAxOCBFYXJuaW5ncyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYWJjLnh5elxcL2ludmVzdG9yXFwvcGRmXFwvMjAxOFExX2FscGhhYmV0X2Vhcm5pbmdzX3JlbGVhc2UucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTA3MDA3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlN0YXRlIG9mIE11bHRpY29yZSBPQ2FtbCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9rY3Nyay5pbmZvXFwvc2xpZGVzXFwvbWNvY2FtbF9nYWxsaXVtLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQxNjc5N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgTWV0YS1Qcm9ibGVtIG9mIENvbnNjaW91c25lc3MgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMzEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BoaWxwYXBlcnMub3JnXFwvYXJjaGl2ZVxcL0NIQVRNTy0zMi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzNjAxOTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV2hhdCBkbyBTdGFuZm9yZCBDUyBQaEQgc3R1ZGVudHMgdGhpbmsgb2YgdGhlaXIgUGhEIHByb2dyYW0/IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTMwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hcmNoaXZlLm9yZ1xcL2Rvd25sb2FkXFwvcGhkX3N0dWRlbnRfc3VydmV5X3N1bW1hcnlfcmVwb3J0XzBhNWNcXC9waGRfc3R1ZGVudF9zdXJ2ZXlfc3VtbWFyeV9yZXBvcnRfMGE1Yy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0OTM5NjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIHdlaXJkIGFuZCB3b25kZXJmdWwgd29ybGQgb2YgY29uc3RydWN0aXZlIG1hdGhlbWF0aWNzICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvaG9tZS5zYW5kaWVnby5lZHVcXC9+c2h1bG1hblxcL3BhcGVyc1xcL3JhYmJpdGhvbGUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDExOTM1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxvdy1MYXRlbmN5IFZpZGVvIFByb2Nlc3NpbmcgVXNpbmcgVGhvdXNhbmRzIG9mIFRpbnkgVGhyZWFkcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9zeXN0ZW1cXC9maWxlc1xcL2NvbmZlcmVuY2VcXC9uc2RpMTdcXC9uc2RpMTctZm91bGFkaS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxOTcyNTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2VsZi1lbmNyeXB0aW5nIGRlY2VwdGlvbjogd2Vha25lc3NlcyBpbiB0aGUgZW5jcnlwdGlvbiBvZiBzb2xpZCBzdGF0ZSBkcml2ZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMjksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5ydS5ubFxcL3B1Ymxpc2hcXC9wYWdlc1xcLzkwOTI3NVxcL2RyYWZ0LXBhcGVyXzEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzgyOTc1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkMrKyBDb3JlIENvcm91dGluZXMgUHJvcG9zYWwgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMjgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm9wZW4tc3RkLm9yZ1xcL2p0YzFcXC9zYzIyXFwvd2cyMVxcL2RvY3NcXC9wYXBlcnNcXC8yMDE4XFwvcDEwNjNyMC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwMzY3NDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUG93ZXIgTGF3cyBhbmQgUmljaC1HZXQtUmljaGVyIFBoZW5vbWVuYSAoMjAxMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMjcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNzLmNvcm5lbGwuZWR1XFwvaG9tZVxcL2tsZWluYmVyXFwvbmV0d29ya3MtYm9va1xcL25ldHdvcmtzLWJvb2stY2gxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxOTk3NjZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBUYXN0ZSBvZiBMaW5lYXIgTG9naWMgKDE5OTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTI2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9ob21lcGFnZXMuaW5mLmVkLmFjLnVrXFwvd2FkbGVyXFwvcGFwZXJzXFwvbGluZWFydGFzdGVcXC9saW5lYXJ0YXN0ZS1yZXZpc2VkLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzY0MTQ3NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbiBBbmFseXNpcyBvZiB0aGUgSW1wYWN0IG9mIEFyYml0cmFyeSBCbG9ja2NoYWluIENvbnRlbnQgb24gQml0Y29pbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZmMxOC5pZmNhLmFpXFwvcHJlcHJvY2VlZGluZ3NcXC82LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjYxNzEzNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQb2xhckZTOiBBbGliYWJhIERpc3RyaWJ1dGVkIEZpbGUgU3lzdGVtIGZvciBTaGFyZWQgU3RvcmFnZSBDbG91ZCBEYXRhYmFzZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cudmxkYi5vcmdcXC9wdmxkYlxcL3ZvbDExXFwvcDE4NDktY2FvLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzgxNDE4NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOb3RhdGlvbiBhcyBhIFRvb2wgb2YgVGhvdWdodCAoMTk3OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmVlY2cudG9yb250by5lZHVcXC9+anpodVxcL2NzYzMyNlxcL3JlYWRpbmdzXFwvaXZlcnNvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4NDIzNzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWluZGZ1bG5lc3MgTWVkaXRhdGlvbiBJbXBhaXJzIFRhc2sgTW90aXZhdGlvbiBidXQgTm90IFBlcmZvcm1hbmNlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTIwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zY2ktaHViLnR3XFwvZG93bmxvYWRzXFwvMjMxMFxcLzEwLjEwMTZAai5vYmhkcC4yMDE4LjA1LjAwMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczNDI2MzlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmFsbGFjaWVzIG9mIERpc3RyaWJ1dGVkIENvbXB1dGluZyBFeHBsYWluZWQgKDIwMDYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTE5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5yZ29hcmNoaXRlY3RzLmNvbVxcL0ZpbGVzXFwvZmFsbGFjaWVzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUwNTkyN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGdXp6aW5nIHRoZSBPcGVuQlNEIEtlcm5lbCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm9wZW5ic2Qub3JnXFwvcGFwZXJzXFwvZnV6ei1zbGlkZXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTI5MjM0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBjb25jZXB0dWFsIG9yaWdpbnMgb2YgTWF4d2VsbCdzIGVxdWF0aW9ucyBhbmQgZ2F1Z2UgdGhlb3J5ICgyMDE0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cucGh5c2ljcy51bWQuZWR1XFwvZ3J0XFwvdGFqXFwvNjc1ZVxcL09yaWdpbnNvZk1heHdlbGxhbmRHYXVnZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMjU2MDVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEJpcnRoIG9mIFByb2xvZyAoMTk5MikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3dlYi5zdGFuZm9yZC5lZHVcXC9jbGFzc1xcL2xpbmd1aXN0Mjg5XFwvcDM3LWNvbG1lcmF1ZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTc4MjE1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIklzIElQdjYgb25seSBmb3IgdGhlIFJpY2g/IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTE2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9yaXBlNzYucmlwZS5uZXRcXC9wcmVzZW50YXRpb25zXFwvOS0yMDE4LTA1LTE3LWlwdjYtcmVhc29ucy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwNjA0MzdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT25lIHBhcmFtZXRlciBpcyBhbHdheXMgZW5vdWdoIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTE2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NvbGFsYS5iY3Mucm9jaGVzdGVyLmVkdVxcL3BhcGVyc1xcL3BpYW50YWRvc2kyMDE4b25lLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE2MTAzMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIFBsYW4gOSBDIGNvbXBpbGVyIGZvciBSSVNDLVYgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5nZWVrbGFuLmNvLnVrXFwvZmlsZXNcXC9vc2h1ZzY5LU1pbGxlci1jcmlzY3YucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzA4MjU1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNlY3VyaXR5IEFuYWx5c2lzIG9mIFdpcmVHdWFyZCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY291cnNlcy5jc2FpbC5taXQuZWR1XFwvNi44NTdcXC8yMDE4XFwvcHJvamVjdFxcL0hlLVh1LVh1LVdpcmVHdWFyZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4ODMyNjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXV0b21hdGljIERpZmZlcmVudGlhdGlvbiBpbiBNYWNoaW5lIExlYXJuaW5nOiBBIFN1cnZleSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9qbWxyLm9yZ1xcL3BhcGVyc1xcL3ZvbHVtZTE4XFwvMTctNDY4XFwvMTctNDY4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ5MTIwOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQbGVkZ2UgYW5kIFVudmVpbCBpbiBPcGVuQlNEIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTE0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cub3BlbmJzZC5vcmdcXC9wYXBlcnNcXC9CZWNrUGxlZGdlVW52ZWlsQlNEQ2FuMjAxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyNzcwNjdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVXNpbmcgUHJlZGljdGlvbiBNYXJrZXRzIHRvIFRyYWNrIEluZm9ybWF0aW9uIEZsb3dzOiAgRXZpZGVuY2UgZnJvbSBHb29nbGUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5zdGF0LmJlcmtlbGV5LmVkdVxcL3VzZXJzXFwvYWxkb3VzXFwvMTU3XFwvUGFwZXJzXFwvR29vZ2xlUHJlZGljdGlvbk1hcmtldFBhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzAxNTA1NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGVyZVxcdTIwMTlzIGEgSG9sZSBpbiB0aGUgQm90dG9tIG9mIHRoZSBDOiBFZmZlY3RpdmVuZXNzIG9mIEFsbG9jYXRpb24gUHJvdGVjdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93ZWIubWl0LmVkdVxcL2hhMjIyODZcXC93d3dcXC9wYXBlcnNcXC9TZWNEZXYxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0NDI1NzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTmV0U3BlY3RyZTogUmVhZCBBcmJpdHJhcnkgTWVtb3J5IE92ZXIgTmV0d29yayBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbWlzYzAxMTAubmV0XFwvd2ViXFwvZmlsZXNcXC9uZXRzcGVjdHJlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzYyMTgyM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQnl6YW50aW5lIEdlbmVyYWxzIFByb2JsZW0gKDE5ODIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTEyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9sYW1wb3J0LmF6dXJld2Vic2l0ZXMubmV0XFwvcHVic1xcL2J5ei5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3MDI2NDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBwbGVhIGZvciBsZWFuIHNvZnR3YXJlICgxOTk1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY3IueXAudG9cXC9iaWJcXC8xOTk1XFwvd2lydGgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODcyNDAwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFic3RyYWN0IG9mIHRoZSBOVFNCIFJlcG9ydCBvbiBBaXIgQ2FuYWRhIGZsaWdodCA3NTkncyB0YXhpd2F5IG92ZXJmbGlnaHQgYXQgU0ZPIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTExLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9udHNiLmdvdlxcL25ld3NcXC9ldmVudHNcXC9Eb2N1bWVudHNcXC9EQ0ExN0lBMTQ4LUFic3RyYWN0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA3MTk2NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNb3Rvcm9sYSBNNjgwMDAgRmFtaWx5IFByb2dyYW1tZXJcXHUyMDE5cyBSZWZlcmVuY2UgTWFudWFsICgxOTkyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jYWNoZS5ueHAuY29tXFwvZG9jc1xcL2VuXFwvcmVmZXJlbmNlLW1hbnVhbFxcL002ODAwMFBNLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzA3Njk2MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEaXNzZWN0aW5nIFFOWCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmJsYWNraGF0LmNvbVxcL2RvY3NcXC9hc2lhLTE4XFwvYXNpYS0xOC1XZXR6ZWxzX0FiYXNzaV9kaXNzZWN0aW5nX3FueF9fV1AucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDEzMTU4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBGb3VuZGF0aW9ucyBvZiBNYXRoZW1hdGljcyAoMjAwNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5tYXRoLndpc2MuZWR1XFwvfm1pbGxlclxcL29sZFxcL203NzEtMTBcXC9rdW5lbjc3MC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwNzg1MTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT2Jlcm9uIFN5c3RlbSBJbXBsZW1lbnRlZCBvbiBhIExvdy1Db3N0IEZQR0EgQm9hcmQgKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTA5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZGZzLnNlbWFudGljc2Nob2xhci5vcmdcXC8yYzExXFwvN2MxNDU2ZWI5NmJiZWExOWFhM2M4YjAxOGRlNGZjOTM4N2JjLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzkzMzg4MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXaHkgTWluaW1hbCBHdWlkYW5jZSBEdXJpbmcgSW5zdHJ1Y3Rpb24gRG9lcyBOb3QgV29yayAoMjAwNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNvZ3RlY2gudXNjLmVkdVxcL3B1YmxpY2F0aW9uc1xcL2tpcnNjaG5lcl9Td2VsbGVyX0NsYXJrLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODIxNzI0NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFZmZpY2llbnQgTWV0aG9kcyBhbmQgSGFyZHdhcmUgZm9yIERlZXAgTGVhcm5pbmcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY3MyMzFuLnN0YW5mb3JkLmVkdVxcL3NsaWRlc1xcLzIwMTdcXC9jczIzMW5fMjAxN19sZWN0dXJlMTUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjE3ODcwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdvb2dsZVxcdTIwMTlzIHNlY3JldCBhbmQgTGluZWFyIEFsZ2VicmEgKDIwMDQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTA3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3ZlcnNvLm1hdC51YW0uZXNcXC9+cGFibG8uZmVybmFuZGV6XFwvZW1zNjMtcGFibG8tZmVybmFuZGV6X2ZpbmFsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODI5ODYwOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQXJ0IG9mIEFwcHJveGltYXRpb24gaW4gU2NpZW5jZSBhbmQgRW5naW5lZXJpbmcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd2ViLm1pdC5lZHVcXC82LjA1NVxcL2Jvb2tcXC9ib29rLWRyYWZ0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA5OTU5NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUb3dhcmRzIGFuIG9wdGljYWwgRlBHQSBcXHUyMDEzIFByb2dyYW1tYWJsZSBzaWxpY29uIHBob3RvbmljIGNpcmN1aXRzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTA2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hcnhpdi5vcmdcXC9mdHBcXC9hcnhpdlxcL3BhcGVyc1xcLzE4MDdcXC8xODA3LjAxNjU2LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ4ODgzOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQeXRocmFuOiBDcm9zc2luZyB0aGUgUHl0aG9uIEZyb250aWVyIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY29tcHV0ZXIub3JnXFwvY3NkbFxcL21hZ3NcXC9jc1xcLzIwMThcXC8wMlxcL21jczIwMTgwMjAwODMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTEwNDQ2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldoYXQncyBoaWRkZW4gaW4gdGhlIGhpZGRlbiBsYXllcnM/ICgxOTg5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLmNtdS5lZHVcXC9+ZHN0XFwvcHVic1xcL2J5dGUtaGlkZGVubGF5ZXItMTk4OS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwNDg3MTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEhhc2tlbGwgU2Nob29sIG9mIE11c2ljIFxcdTIwMTMgRnJvbSBTaWduYWxzIHRvIFN5bXBob25pZXMgKDIwMTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2hhc2tlbGwuY3MueWFsZS5lZHVcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMTVcXC8wM1xcL0hTb00ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTE3Mjg1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdpZnRlZG5lc3MgYW5kIEdlbml1czogQ3J1Y2lhbCBEaWZmZXJlbmNlcyAoMTk5NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5nd2Vybi5uZXRcXC9kb2NzXFwvaXFcXC8xOTk2LWplbnNlbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzNTAyOTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2tldGNocGFkOiBBIG1hbi1tYWNoaW5lIGdyYXBoaWNhbCBjb21tdW5pY2F0aW9uIHN5c3RlbSAoMTk2MykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jbC5jYW0uYWMudWtcXC90ZWNocmVwb3J0c1xcL1VDQU0tQ0wtVFItNTc0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM1NDc2NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRnV0dXJlIG9mIENvbXB1dGluZzogTG9naWMgb3IgQmlvbG9neSAoMjAwMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2xhbXBvcnQuYXp1cmV3ZWJzaXRlcy5uZXRcXC9wdWJzXFwvZnV0dXJlLW9mLWNvbXB1dGluZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0NTcyMTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUHJlZGljdGluZyBQcmljZSBDaGFuZ2VzIGluIEV0aGVyZXVtICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jczIyOS5zdGFuZm9yZC5lZHVcXC9wcm9qMjAxN1xcL2ZpbmFsLXJlcG9ydHNcXC81MjQ0MDM5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzI3MjMyOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbiBJbnRyb2R1Y3Rpb24gdG8gTWF0aGVtYXRpY2FsIE9wdGltYWwgQ29udHJvbCBUaGVvcnkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL21hdGguYmVya2VsZXkuZWR1XFwvfmV2YW5zXFwvY29udHJvbC5jb3Vyc2UucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTg1Nzc3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1pbmRzdG9ybXM6IENoaWxkcmVuLCBDb21wdXRlcnMsIGFuZCBQb3dlcmZ1bCBJZGVhcyAoMTk4MCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd29ycnlkcmVhbS5jb21cXC9yZWZzXFwvUGFwZXJ0JTIwLSUyME1pbmRzdG9ybXMlMjAxc3QlMjBlZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzNjE2NjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRnVuY3Rpb25hbCBCaXRzOiBMYW1iZGEtY2FsY3VsdXMgYmFzZWQgYWxnb3JpdGhtaWMgaW5mb3JtYXRpb24gdGhlb3J5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC90cm9tcC5naXRodWIuaW9cXC9jbFxcL0xDLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzcyNjU0NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRWZmZWN0cyBvZiBDb21wdXRlciBVc2Ugb24gRXllIEhlYWx0aCBhbmQgVmlzaW9uICgxOTk3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmFvYS5vcmdcXC9Eb2N1bWVudHNcXC9vcHRvbWV0cmlzdHNcXC9lZmZlY3RzLW9mLWNvbXB1dGVyLXVzZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxNDYxMDZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQWN0b3IgTW9kZWwgb2YgQ29tcHV0YXRpb24gKDIwMTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hcnhpdi5vcmdcXC92Y1xcL2FyeGl2XFwvcGFwZXJzXFwvMTAwOFxcLzEwMDguMTQ1OXY4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzY2NzMyM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFeHBsb2l0aW5nIFVSTCBQYXJzZXIgaW4gUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VzICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmJsYWNraGF0LmNvbVxcL2RvY3NcXC91cy0xN1xcL3RodXJzZGF5XFwvdXMtMTctVHNhaS1BLU5ldy1FcmEtT2YtU1NSRi1FeHBsb2l0aW5nLVVSTC1QYXJzZXItSW4tVHJlbmRpbmctUHJvZ3JhbW1pbmctTGFuZ3VhZ2VzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk1NTYyNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCb3JkZXIgU2VhcmNoIG9mIEVsZWN0cm9uaWMgRGV2aWNlcyBcXHUyMDEzIENCUCBEaXJlY3RpdmUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jYnAuZ292XFwvc2l0ZXNcXC9kZWZhdWx0XFwvZmlsZXNcXC9hc3NldHNcXC9kb2N1bWVudHNcXC8yMDE4LUphblxcL2NicC1kaXJlY3RpdmUtMzM0MC0wNDlhLWJvcmRlci1zZWFyY2gtZWxlY3Ryb25pYy1tZWRpYS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwODQ4MjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUGh5c2ljcyBhcyBhIFdheSBvZiBUaGlua2luZyAoMTkzNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2tiLm9zdS5lZHVcXC9kc3BhY2VcXC9iaXRzdHJlYW1cXC9oYW5kbGVcXC8xODExXFwvNzI1NjdcXC9PU0xKX1YyTjNfMDI0MS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczOTYyMDVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV2ViIFByb2xvZyBhbmQgdGhlIFByb2dyYW1tYWJsZSBQcm9sb2cgV2ViIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9naXRodWIuY29tXFwvV2ViLVByb2xvZ1xcL3N3aS13ZWItcHJvbG9nXFwvYmxvYlxcL21hc3RlclxcL3dlYi1jbGllbnRcXC9hcHBzXFwvc3dpc2hcXC93ZWItcHJvbG9nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzI4ODQ5M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGaWZ0eSBZZWFycyBvZiBTaGFubm9uIFRoZW9yeSAoMTk5OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5wcmluY2V0b24uZWR1XFwvfnZlcmR1XFwvcmVwcmludHNcXC9JVDQ0LjYuMjA1Ny0yMDc4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjEzMDI5N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJVbnNraWxsZWQgYW5kIFVuYXdhcmUgb2YgSXQgKDE5OTkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvcHN5Y2guY29sb3JhZG8uZWR1XFwvfnZhbmJvdmVuXFwvdGVhY2hpbmdcXC9wNzUzNl9oZXVyYmlhc1xcL3A3NTM2X3JlYWRpbmdzXFwva3J1Z2VyX2R1bm5pbmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTI1MDYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5vbi1SZWN1cnNpdmUgTWFrZSBDb25zaWRlcmVkIEhhcm1mdWw6IEJ1aWxkIFN5c3RlbXMgYXQgU2NhbGUgKDIwMTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL25kbWl0Y2hlbGwuY29tXFwvZG93bmxvYWRzXFwvcGFwZXItbm9uX3JlY3Vyc2l2ZV9tYWtlX2NvbnNpZGVyZWRfaGFybWZ1bC0yMl9zZXBfMjAxNi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwODgzMjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVidWdnaW5nIGFjcm9zcyBwaXBlcyBhbmQgc29ja2V0cyB3aXRoIHN0cmFjZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDk4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9naXRodWIuY29tXFwvbmgyXFwvc3RyYWNlLXBpcGVzLXByZXNlbnRhdGlvblxcL2Jsb2JcXC9tYXN0ZXJcXC9wcmVzZW50YXRpb25cXC9EZWJ1Z2dpbmclMjBhY3Jvc3MlMjBwaXBlcyUyMGFuZCUyMHNvY2tldHMlMjB3aXRoJTIwc3RyYWNlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjcwODM5MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIEhpc3Rvcnkgb2YgdGhlIEVybGFuZyBWTSAoMjAxMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZXJsYW5nLWZhY3RvcnkuY29tXFwvdXBsb2FkXFwvcHJlc2VudGF0aW9uc1xcLzM4OVxcL0VGU0YxMS1FcmxhbmdWTS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyMTQ5OTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IHRvIGRvIHdpdGggcHJvYmFiaWxpdGllcyB3aGF0IHBlb3BsZSBzYXkgeW91IGNhblxcdTIwMTl0ICgxOTg1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDk3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9mdHAuY3MudWNsYS5lZHVcXC9wdWJcXC9zdGF0X3NlclxcL3I0OS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2NjMyMjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUG9saWNlIFVzZSBvZiBGb3JjZTogQW4gRXhhbWluYXRpb24gb2YgTW9kZXJuIFBvbGljaW5nIFByYWN0aWNlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDk3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNjY3IuZ292XFwvcHVic1xcLzIwMThcXC8xMS0xNS1Qb2xpY2UtRm9yY2UucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTQ2MDM4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNpbmdsZS1kZWNyeXB0aW9uIEVNLWJhc2VkIGF0dGFjayByZXZlYWxzIHByaXZhdGUga2V5cyBmcm9tIEFuZHJvaWQgcGhvbmVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvc3lzdGVtXFwvZmlsZXNcXC9jb25mZXJlbmNlXFwvdXNlbml4c2VjdXJpdHkxOFxcL3NlYzE4LWFsYW0ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODE3OTY2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkVmZmljaWVudCBIb3QtV2F0ZXIgUGlwaW5nICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDk1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5nYXJ5a2xlaW5hc3NvY2lhdGVzLmNvbVxcL1BERnNcXC8xNSUyMC0lMjBFZmZpY2llbnQlMjBIb3QtV2F0ZXIlMjBQaXBpbmctSkxDLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjU0MDgwMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTY2llbnRpc3RzIHdhcm4gb2YgcG90ZW50aWFsIHNlcmlvdXMgaGVhbHRoIGVmZmVjdHMgb2YgNUcgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VodHJ1c3Qub3JnXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC9TY2llbnRpc3QtNUctYXBwZWFsLTIwMTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTY3MzcyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgbWljcm8gbWFudWFsIGZvciBMaXNwIFxcdTIwMTMgTm90IHRoZSB3aG9sZSB0cnV0aCAoMTk3OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZWUucnllcnNvbi5jYVxcL35lbGZcXC9wdWJcXC9taXNjXFwvbWljcm9tYW51YWxMSVNQLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk1ODQxM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFdmVyeXRoaW5nIFlvdSBXYW50ZWQgdG8gS25vdyBBYm91dCBTeW5jaHJvbml6YXRpb24gKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvc2lnb3BzLm9yZ1xcL3Nvc3BcXC9zb3NwMTNcXC9wYXBlcnNcXC9wMzMtZGF2aWQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODU5NzE5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBTdHJvbmcgRnJlZSBXaWxsIFRoZW9yZW0gKDIwMDkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmFtcy5vcmdcXC9ub3RpY2VzXFwvMjAwOTAyXFwvcnR4MDkwMjAwMjI2cC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzOTIwNDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIGFydCBvZiBWaXJ0dWFsIEFuYWxvZyBmaWx0ZXIgZGVzaWduIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5uYXRpdmUtaW5zdHJ1bWVudHMuY29tXFwvZmlsZWFkbWluXFwvbmlfbWVkaWFcXC9kb3dubG9hZHNcXC9wZGZcXC9WQUZpbHRlckRlc2lnbl8yLjEuMC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzNDY0NjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSHVtYW4tQ2VudHJpYyBUb29scyBmb3IgTmF2aWdhdGluZyBDb2RlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd2ViLmVlY3MudXRrLmVkdVxcL35hemhcXC9wdWJzXFwvSGVubGV5MjAxOGJEaXNzZXJ0YXRpb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjQ4NTgwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkV2ZXJ5IEdvb2QgUmVndWxhdG9yIG9mIGEgU3lzdGVtIE11c3QgQmUgYSBNb2RlbCBvZiBUaGF0IFN5c3RlbSAoMTk3MCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9wZXNwbWMxLnZ1Yi5hYy5iZVxcL2Jvb2tzXFwvQ29uYW50X0FzaGJ5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjU0NTUzN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDYXNlIFN0dWRpZXMgV2hlcmUgUGhhc2UgMiBhbmQgUGhhc2UgMyBUcmlhbHMgaGFkIERpdmVyZ2VudCBSZXN1bHRzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5mZGEuZ292XFwvZG93bmxvYWRzXFwvQWJvdXRGREFcXC9SZXBvcnRzTWFudWFsc0Zvcm1zXFwvUmVwb3J0c1xcL1VDTTUzNTc4MC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1Njg3MTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiODAyLjExIHdpdGggTXVsdGlwbGUgQW50ZW5uYXMgZm9yIER1bW1pZXMgKDIwMDkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2Rqdy5jcy53YXNoaW5ndG9uLmVkdVxcL3BhcGVyc1xcL21pbW9fZm9yX2R1bW1pZXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MjkwMzAyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNlbGYtUmVndWxhdGVkIExlYXJuaW5nOiBCZWxpZWZzLCBUZWNobmlxdWVzLCBhbmQgSWxsdXNpb25zIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmV4Y2FsaWJ1cnRzYS5vcmcudWtcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMTdcXC8xMVxcL1NlbGYtcmVndWxhdGVkLWxlYXJuaW5nLUJqb3JrLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ2MjYzM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTY2lraXQtbGVhcm4gdXNlciBndWlkZSAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9zY2lraXQtbGVhcm4ub3JnXFwvc3RhYmxlXFwvX2Rvd25sb2Fkc1xcL3NjaWtpdC1sZWFybi1kb2NzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQzMDY3M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCIkdmF1OiB0aGUgdWx0aW1hdGUgYWJzdHJhY3Rpb24gKDIwMTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3dlYi53cGkuZWR1XFwvUHVic1xcL0VURFxcL0F2YWlsYWJsZVxcL2V0ZC0wOTAxMTAtMTI0OTA0XFwvdW5yZXN0cmljdGVkXFwvanNodXR0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQwNTAxNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZXNpZ24gb2YgYSBsb3ctbGV2ZWwgQysrIHRlbXBsYXRlIFNJTUQgbGlicmFyeSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDkxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudGkudW5pLWJpZWxlZmVsZC5kZVxcL2Rvd25sb2Fkc1xcL3B1YmxpY2F0aW9uc1xcL3RlbXBsYXRlU0lNRC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwNTAwMjFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBUZW1wbGF0ZSBmb3IgVW5kZXJzdGFuZGluZyBIb3cgdGhlIEVjb25vbWljIE1hY2hpbmUgV29ya3MgKDIwMTEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL21lZGlhLmVjb25vbWlzdC5jb21cXC9zaXRlc1xcL2RlZmF1bHRcXC9maWxlc1xcL3BkZnNcXC9BX1RlbXBsYXRlX2Zvcl9VbmRlcnN0YW5kaW5nXy1fUmF5X0RhbGlvX19CcmlkZ2V3YXRlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5NjIxMzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRG8gRGV2ZWxvcGVycyBVbmRlcnN0YW5kIElFRUUgRmxvYXRpbmcgUG9pbnQ/IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvcGRpbmRhLm9yZ1xcL1BhcGVyc1xcL2lwZHBzMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzYxOTQ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbGxlY3RpdmUgaGFsbHVjaW5hdGlvbiBhbmQgaW5lZmZpY2llbnQgbWFya2V0czogVGhlIFJhaWx3YXkgTWFuaWEgb2YgdGhlIDE4NDBzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmR0Yy51bW4uZWR1XFwvfm9kbHl6a29cXC9kb2NcXC9oYWxsdWNpbmF0aW9ucy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxNDUxNTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTmV3dG9uXFx1MjAxOXMgRmluYW5jaWFsIE1pc2FkdmVudHVyZXMgaW4gdGhlIFNvdXRoIFNlYSBCdWJibGUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZHRjLnVtbi5lZHVcXC9+b2RseXprb1xcL2RvY1xcL21hbmlhMTMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MjQ1Mjg0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1lbHRkb3duUHJpbWUsIFNwZWN0cmVQcmltZTogRXhwbG9pdGluZyBJbnZhbGlkYXRpb24tQmFzZWQgQ29oZXJlbmNlIFByb3RvY29sc1wiLFxuICAgICAgICBcInNjb3JlXCI6IDkwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hcnhpdi5vcmdcXC9wZGZcXC8xODAyLjAzODAyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQzMDIxNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJKSVRpbmcgUG9zdGdyZVNRTCB1c2luZyBMTFZNIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYW5hcmF6ZWwuZGVcXC90YWxrc1xcL2Zvc2RlbS0yMDE4LTAyLTAzXFwvaml0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjI5OTYzMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRXZvbHV0aW9uIG9mIEJpdGNvaW4gSGFyZHdhcmUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jc2V3ZWIudWNzZC5lZHVcXC9+bWJ0YXlsb3JcXC9wYXBlcnNcXC9UYXlsb3JfQml0Y29pbl9JRUVFX0NvbXB1dGVyXzIwMTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2Mjg5MDc0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkV2ZXJ5dGhpbmcgWW91IEFsd2F5cyBXYW50ZWQgdG8gS25vdyBBYm91dCBPcHRpY2FsIE5ldHdvcmtpbmcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm5hbm9nLm9yZ1xcL3NpdGVzXFwvZGVmYXVsdFxcL2ZpbGVzXFwvU3RlZW5iZXJnZW4uRXZlcnl0aGluZ19Zb3VfTmVlZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwOTkzMDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ3Jvc3MtUGxhdGZvcm0gTGFuZ3VhZ2UgRGVzaWduIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbGFtcHd3dy5lcGZsLmNoXFwvfmRvZXJhZW5lXFwvdGhlc2lzXFwvZG9lcmFlbmUtdGhlc2lzLTIwMTgtY3Jvc3MtcGxhdGZvcm0tbGFuZ3VhZ2UtZGVzaWduLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY0MDUxNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRXZvbHV0aW9uIG9mIE9wZXJhdGluZyBTeXN0ZW1zICgyMDAwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5icmluY2gtaGFuc2VuLm5ldFxcL3BhcGVyc1xcLzIwMDFiLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU4MTUzMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgWiBHYXJiYWdlIENvbGxlY3RvcjogQW4gSW50cm9kdWN0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2Zvc2RlbS5vcmdcXC8yMDE4XFwvc2NoZWR1bGVcXC9ldmVudFxcL3pnY1xcL2F0dGFjaG1lbnRzXFwvc2xpZGVzXFwvMjIxMVxcL2V4cG9ydFxcL2V2ZW50c1xcL2F0dGFjaG1lbnRzXFwvemdjXFwvc2xpZGVzXFwvMjIxMVxcL1pHQ19GT1NERU1fMjAxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0MDU4NTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTmFnaW5pOiBBIFN0YXRpYyBWZXJpZmllciBmb3IgUHl0aG9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvcG0uaW5mLmV0aHouY2hcXC9wdWJsaWNhdGlvbnNcXC9nZXRwZGYucGhwP2JpYm5hbWU9T3duJmlkPUVpbGVyc011ZWxsZXIxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MzU3NTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWluaW5ldCBvbiBPcGVuQlNEOiBJbnRlcmFjdGl2ZSBTRE4gVGVzdGluZyBhbmQgRGV2ZWxvcG1lbnQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm9wZW5ic2Qub3JnXFwvcGFwZXJzXFwvYnNkY2FuMjAxOC1taW5pbmV0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzMwMTgzNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZXNpZ24gYW5kIEltcGxlbWVudGF0aW9uIG9mIGEgMjU2LUNvcmUgQnJhaW5GdWNrIENvbXB1dGVyIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvc2lndGJkLmNzYWlsLm1pdC5lZHVcXC9wdWJzXFwvdmVyeWNvbmZlcmVuY2UtcGFwZXIyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjg2NjQzNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMb2dpYyBpcyBNZXRhcGh5c2ljcyAoMjAxMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGhpbHBhcGVycy5vcmdcXC9hcmNoaXZlXFwvQUxWTElNLTMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MjQ2OTQ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9uIHRoZSByaGVvbG9neSBvZiBjYXRzICgyMDE0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZHJnb3VsdS5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMTdcXC8wOVxcL1JoZW9sb2d5LW9mLWNhdHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTQwNTUwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldoYXQgeW91IGdldCBpcyB3aGF0IHlvdSBDOiBDb250cm9sbGluZyBzaWRlIGVmZmVjdHMgaW4gbWFpbnN0cmVhbSBDIGNvbXBpbGVycyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jbC5jYW0uYWMudWtcXC9+cmphMTRcXC9QYXBlcnNcXC93aGF0eW91Yy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5MTExODVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGVuc29yRmxvdzogTWFjaGluZSBMZWFybmluZyBvbiBIZXRlcm9nZW5lb3VzIERpc3RyaWJ1dGVkIFN5c3RlbXMgKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3N0YXRpYy5nb29nbGV1c2VyY29udGVudC5jb21cXC9tZWRpYVxcL3Jlc2VhcmNoLmdvb2dsZS5jb21cXC9lblxcL1xcL3B1YnNcXC9hcmNoaXZlXFwvNDUxNjYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDI4NjMxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxlZ29PUzogRGlzc2VtaW5hdGVkLCBEaXN0cmlidXRlZCBPUyBmb3IgSGFyZHdhcmUgUmVzb3VyY2UgRGlzYWdncmVnYXRpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9zeXN0ZW1cXC9maWxlc1xcL29zZGkxOC1zaGFuLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ4ODI5MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgdXNlZnVsbmVzcyBvZiB1c2VsZXNzIGtub3dsZWRnZSAoMTkzOSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbGlicmFyeS5pYXMuZWR1XFwvZmlsZXNcXC9Vc2VmdWxuZXNzSGFycGVycy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2ODMyOThcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQW4gRlBHQS1iYXNlZCBJbi1saW5lIEFjY2VsZXJhdG9yIGZvciBNZW1jYWNoZWQgKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5ob3RjaGlwcy5vcmdcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcL2hjX2FyY2hpdmVzXFwvaGMyNVxcL0hDMjUuNTAtRlBHQS1lcHViXFwvSEMyNS4yNy41MzAtTWVtY2FjaGVkLUxhdmFzYW5pLVVUZXhhcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxNzUxMzVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVVMgU3VyZ2VvbiBHZW5lcmFsIERlY2xhcmVzIEUtY2lnYXJldHRlIEVwaWRlbWljIEFtb25nIFlvdXRoIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2UtY2lnYXJldHRlcy5zdXJnZW9uZ2VuZXJhbC5nb3ZcXC9kb2N1bWVudHNcXC9zdXJnZW9uLWdlbmVyYWxzLWFkdmlzb3J5LW9uLWUtY2lnYXJldHRlLXVzZS1hbW9uZy15b3V0aC0yMDE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODcxNjAxNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQcmFjdGljYWwgRXhhbXBsZXMgaW4gRGF0YSBPcmllbnRlZCBEZXNpZ24gKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZ2FtZWRldnMub3JnXFwvdXBsb2Fkc1xcL3ByYWN0aWNhbC1leGFtcGxlcy1pbi1kYXRhLW9yaWVudGVkLWRlc2lnbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwNDczODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQW4gSW50cm9kdWN0aW9uIHRvIFF1YW50dW0gQ29tcHV0YXRpb24gYW5kIFF1YW50dW0gQ29tbXVuaWNhdGlvbiAoMjAwMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9oZXJwb2xob2RlLmNvbVxcL3JvYlxcL3FjaW50cm8ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDIyNDE1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZsdXJlZURCLCBhIFByYWN0aWNhbCBEZWNlbnRyYWxpemVkIERhdGFiYXNlICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9mbHVyLmVlXFwvYXNzZXRzXFwvcGRmXFwvZmx1cmVlZGJfd2hpdGVwYXBlcl92MS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwNTYzMTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tbXVuaWNhdGluZyBTZXF1ZW50aWFsIFByb2Nlc3NlcyAoMTk3OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLmNtdS5lZHVcXC9+Y3JhcnlcXC84MTktZjA5XFwvSG9hcmU3OC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2MDcwMzFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUGFsbGVuZTogQSBzdGF0aWNhbGx5IHR5cGVkIGNvbXBhbmlvbiBsYW5ndWFnZSBmb3IgTHVhIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmluZi5wdWMtcmlvLmJyXFwvfnJvYmVydG9cXC9kb2NzXFwvcGFsbGVuZS1zYmxwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODAzODYxOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQb0N8fEdURk8tMTggW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmFsY2hlbWlzdG93bC5vcmdcXC9wb2Nvcmd0Zm9cXC9wb2Nvcmd0Zm8xOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0MTM2MTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTG9zcyBvZiBMb2NhdGlvbmFsIFByaXZhY3kgV2hpbGUgVHJhdmVsaW5nIGluIFlvdXIgQXV0b21vYmlsZSAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmRlZmNvbi5vcmdcXC9pbWFnZXNcXC9kZWZjb24tMjFcXC9kYy0yMS1wcmVzZW50YXRpb25zXFwvUHVraW5nbW9ua2V5XFwvREVGQ09OLTIxLVB1a2luZ21vbmtleS1UaGUtUm9hZC1MZXNzLVN1cnJlcHRpdGlvdXNseS1UcmF2ZWxlZC1VcGRhdGVkLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjI1MTM5NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIEZvcm1hbCBTZWN1cml0eSBBbmFseXNpcyBvZiB0aGUgU2lnbmFsIE1lc3NhZ2luZyBQcm90b2NvbCAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZXByaW50LmlhY3Iub3JnXFwvMjAxNlxcLzEwMTMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTA3MTQ5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkV4cGxvcmluZyBDIFNlbWFudGljcyBhbmQgUG9pbnRlciBQcm92ZW5hbmNlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jbC5jYW0uYWMudWtcXC9+cGVzMjBcXC9jZXJiZXJ1c1xcL3RvcC1DZXJiZXJ1cy1kcmFmdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzMjgzMjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEJhdHRsZSBvZiB0aGUgU2NoZWR1bGVyczogRnJlZUJTRCBVTEUgdnMuIExpbnV4IENGUyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL3N5c3RlbVxcL2ZpbGVzXFwvY29uZmVyZW5jZVxcL2F0YzE4XFwvYXRjMTgtYm91cm9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUwODQwM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPcHRpbWFsIFRpbWUtSW5jb25zaXN0ZW50IEJlbGllZnM6IE1pc3BsYW5uaW5nLCBQcm9jcmFzdGluYXRpb24sIGFuZCBDb21taXRtZW50IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3NjaG9sYXIucHJpbmNldG9uLmVkdVxcL3NpdGVzXFwvZGVmYXVsdFxcL2ZpbGVzXFwvVGltZUluY29uc2lzdGVudEJlbGllZnNfMC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyOTQxNTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTGluZWFyIHR5cGVzIGNhbiBjaGFuZ2UgdGhlIHdvcmxkICgxOTkwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jcy5pb2MuZWVcXC9ld3Njc1xcLzIwMTBcXC9teWNyb2Z0XFwvbGluZWFyLTJ1cC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxMDA4NDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVzaWduaW5nIGFuZCBidWlsZGluZyBhIGRpc3RyaWJ1dGVkIGRhdGEgc3RvcmUgaW4gR28gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZm9zZGVtLm9yZ1xcLzIwMThcXC9zY2hlZHVsZVxcL2V2ZW50XFwvZGF0YXN0b3JlXFwvYXR0YWNobWVudHNcXC9zbGlkZXNcXC8yNjE4XFwvZXhwb3J0XFwvZXZlbnRzXFwvYXR0YWNobWVudHNcXC9kYXRhc3RvcmVcXC9zbGlkZXNcXC8yNjE4XFwvZGVzaWduaW5nX2Rpc3RyaWJ1dGVkX2RhdGFzdG9yZV9pbl9nb190aW1iYWxhLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUyNDg3OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgZG9lcyBhIEdQVSBzaGFkZXIgY29yZSB3b3JrPyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2FyYXMtcC5pbmZvXFwvdGV4dHNcXC9maWxlc1xcLzIwMThBY2FkZW15JTIwLSUyMEdQVS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1MDQ0NzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT3V0bGllciBEZXRlY3Rpb24gVGVjaG5pcXVlcyAoMjAxMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYXJjaGl2ZS5zaWFtLm9yZ1xcL21lZXRpbmdzXFwvc2RtMTBcXC90dXRvcmlhbDMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDEwNjQ3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlVuaWNvZGVNYXRoIFxcdTIwMTMgQSBOZWFybHkgUGxhaW4tVGV4dCBFbmNvZGluZyBvZiBNYXRoZW1hdGljcyAoMjAxNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVuaWNvZGUub3JnXFwvbm90ZXNcXC90bjI4XFwvVVROMjgtUGxhaW5UZXh0TWF0aC12My4xLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODUxMzg5N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPcHRpb24gUHJpY2luZyB3aXRoIEZvdXJpZXIgVHJhbnNmb3JtIGFuZCBFeHBvbmVudGlhbCBMXFx1MDBlOXZ5IE1vZGVscyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL21heG1hdHN1ZGEuY29tXFwvUGFwZXJzXFwvMjAwNFxcL01hdHN1ZGElMjBJbnRybyUyMEZUJTIwUHJpY2luZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyOTg3NzVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFF1YW50dW0gVGhlb3J5IGFuZCBSZWFsaXR5ICgxOTc5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuc2NpZW50aWZpY2FtZXJpY2FuLmNvbVxcL21lZGlhXFwvcGRmXFwvMTk3OTExXzAxNTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MjU0Mjk3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlplcm8gb3ZlcmhlYWQgZGV0ZXJtaW5pc3RpYyBmYWlsdXJlOiBBIHVuaWZpZWQgbWVjaGFuaXNtIGZvciBDIGFuZCBDKysgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cub3Blbi1zdGQub3JnXFwvanRjMVxcL3NjMjJcXC93ZzE0XFwvd3d3XFwvZG9jc1xcL24yMjg5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzkyMjcxNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNb2RlbC1GcmVlLCBNb2RlbC1CYXNlZCwgYW5kIEdlbmVyYWwgSW50ZWxsaWdlbmNlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5pamNhaS5vcmdcXC9wcm9jZWVkaW5nc1xcLzIwMThcXC8wMDAyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU5MTM2MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQWxnb3JpdGhtaWMgRm91bmRhdGlvbnMgb2YgRGlmZmVyZW50aWFsIFByaXZhY3kgKDIwMTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jaXMudXBlbm4uZWR1XFwvfmFhcm90aFxcL1BhcGVyc1xcL3ByaXZhY3lib29rLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjY3MTk1NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIaXN0b3J5IG9mIExpc3AgKDE5NzkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvam1jLnN0YW5mb3JkLmVkdVxcL2FydGljbGVzXFwvbGlzcFxcL2xpc3AucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODQ2NTIyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRocmVhZHMgQ2Fubm90IEJlIEltcGxlbWVudGVkIGFzIGEgTGlicmFyeSAoMjAwNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY3Mubnl1LmVkdVxcL35td2FsZmlzaFxcL2NsYXNzZXNcXC8xNGZhXFwvcmVmXFwvYm9laG0wNXRocmVhZHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDgzNzE3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyBEZXZlbG9wZXJzIFVzZSBEeW5hbWljIEZlYXR1cmVzIG9mIFByb2dyYW1taW5nIExhbmd1YWdlczogU21hbGx0YWxrIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3VzZXJzLmRjYy51Y2hpbGUuY2xcXC9+cnJvYmJlc1xcL3BcXC9FTVNFLWZlYXR1cmVzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzExNDQwNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXaHkgU3lzdG9saWMgQXJjaGl0ZWN0dXJlcz8gKDE5ODIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmVlY3MuaGFydmFyZC5lZHVcXC9+aHRrXFwvcHVibGljYXRpb25cXC8xOTgyLWt1bmctd2h5LXN5c3RvbGljLWFyY2hpdGVjdHVyZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2MjA4NDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIE5leHQgNzAwIFByb2dyYW1taW5nIExhbmd1YWdlcyAoMTk2NSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9ob21lcGFnZXMuaW5mLmVkLmFjLnVrXFwvd2FkbGVyXFwvcGFwZXJzXFwvcGFwZXJzLXdlLWxvdmVcXC9sYW5kaW4tbmV4dC03MDAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDkwNzYxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9wZW5pbmcgdGhlIEhvb2Qgb2YgYSBXb3JkIFByb2Nlc3NvciAoMTk4NCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93b3JyeWRyZWFtLmNvbVxcL3JlZnNcXC9LYXklMjAtJTIwT3BlbmluZyUyMHRoZSUyMEhvb2QlMjBvZiUyMGElMjBXb3JkJTIwUHJvY2Vzc29yLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjM1MjAyMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgUmVkIFdlZGRpbmcgUHJvYmxlbTogV3JpdGUgU3Bpa2VzIGF0IHRoZSBFZGdlIGFuZCBhIE1pdGlnYXRpb24gU3RyYXRlZ3kgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jaHJpc3RvcGhlcm1laWtsZWpvaG4uY29tXFwvcHVibGljYXRpb25zXFwvaG90ZWRnZS0yMDE4LXByZXByaW50LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjY0Mzk1OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDYW5vcHk6IEFuIEVuZC10by1FbmQgUGVyZm9ybWFuY2UgVHJhY2luZyBBbmQgQW5hbHlzaXMgU3lzdGVtIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2NzLmJyb3duLmVkdVxcL35qY21hY2VcXC9wYXBlcnNcXC9rYWxkb3IyMDE3Y2Fub3B5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjU5MjMwM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCdWlsZGluZyBSb2J1c3QgU3lzdGVtcyAoMjAwOCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZ3JvdXBzLmNzYWlsLm1pdC5lZHVcXC9tYWNcXC91c2Vyc1xcL2dqc1xcLzYuOTQ1XFwvcmVhZGluZ3NcXC9yb2J1c3Qtc3lzdGVtcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4OTA0OThcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU29mdHdhcmUgVXBkYXRlcyBmb3IgSW9UIERldmljZXMgYW5kIHRoZSBIaWRkZW4gQ29zdHMgb2YgSG9tZWdyb3duIFVwZGF0ZXJzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL21lbmRlci5pb1xcL3Jlc291cmNlc1xcL2d1aWRlcy1hbmQtd2hpdGVwYXBlcnNcXC9fcmVzb3VyY2VzXFwvTWVuZGVyJTI1MjBXaGl0ZSUyNTIwUGFwZXIlMjUyMF8lMjUyMEhpZGRlbiUyNTIwQ29zdHMlMjUyMG9mJTI1MjBIb21lZ3Jvd24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTgxMDUxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZhbnRhc3RpYyBUaW1lcnM6IEhpZ2gtUmVzb2x1dGlvbiBNaWNyb2FyY2hpdGVjdHVyYWwgQXR0YWNrcyBpbiBKUyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZ3J1c3MuY2NcXC9maWxlc1xcL2ZhbnRhc3RpY3RpbWVycy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwODAyMzVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcHJlaGVuc2l2ZSBhbmQgYmlhc2VkIGNvbXBhcmlzb24gb2YgT3BlbkJTRCBhbmQgRnJlZUJTRCAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmJzZGZyb2cub3JnXFwvcHViXFwvZXZlbnRzXFwvbXlfYnNkX3N1Y2tzX2xlc3NfdGhhbl95b3Vycy1Bc2lhQlNEQ29uMjAxNy1wYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2NjcxNzlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVzaWduIGFuZCBFdmFsdWF0aW9uIG9mIEZQR0EtQmFzZWQgR2lnYWJpdCBFdGhlcm5ldCBOZXR3b3JrIENhcmQgKDIwMDQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BkZnMuc2VtYW50aWNzY2hvbGFyLm9yZ1xcLzhiZmVcXC84OTg4YzE0NzAzMzAyZWJkMmQ1Njc5MjRiMjdhNWNiMTBjNTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDI5NDU0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFuIEVtcGlyaWNhbCBTdHVkeSBvZiBQcm9ncmFtbWVyc1xcdTIwMTkgQWNxdWlzaXRpb24gb2YgTmV3IFByb2dyYW1taW5nIExhbmd1YWdlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDczLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NzMjQyLnN0YW5mb3JkLmVkdVxcL2Fzc2V0c1xcL3Byb2plY3RzXFwvMjAxN1xcL3BhcmFzdG9vLWdkaWV0ejQ0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk1MDU4OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHaG9zdGJ1c3RlcjogRGV0ZWN0aW5nIHRoZSBQcmVzZW5jZSBvZiBIaWRkZW4gRWF2ZXNkcm9wcGVycyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDczLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zeW5yZy5jc2wuaWxsaW5vaXMuZWR1XFwvcGFwZXJzXFwvZ2hvc3RidXN0ZXItbW9iaWNvbTE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA4MjM4NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMb3ctTGV2ZWwgVGhpbmtpbmcgaW4gSGlnaC1MZXZlbCBTaGFkaW5nIExhbmd1YWdlcyAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuaHVtdXMubmFtZVxcL0FydGljbGVzXFwvUGVyc3Nvbl9Mb3dMZXZlbFRoaW5raW5nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjIyMzY1MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXaWxsaWFtIFN0ZWluIG9uIHRoZSBzdHJ1Z2dsZSBmb3Igb3BlbiBzb3VyY2UgZnVuZGluZyBpbiBwdXJlIG1hdGhlbWF0aWNzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmFtcy5vcmdcXC9qb3VybmFsc1xcL25vdGljZXNcXC8yMDE4MDVcXC9ybm90aS1wNTQwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjk0MDcyNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMb2dpYyBQcm9ncmFtbWluZyBhbmQgQ29tcGlsZXIgV3JpdGluZyAoMTk4MCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9zb3ZpZXRvdi5jb21cXC90bXBcXC93YXJyZW4xOTgwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzY3NDg1OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIHN1cnZleSBvZiBhdHRhY2tzIGFnYWluc3QgSW50ZWwgeDg2IG92ZXIgbGFzdCAxMCB5ZWFycyAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYmxvZy5pbnZpc2libGV0aGluZ3Mub3JnXFwvcGFwZXJzXFwvMjAxNVxcL3g4Nl9oYXJtZnVsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU4ODgyMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUeXBlZCBDbG9qdXJlIGluIFRoZW9yeSBhbmQgUHJhY3RpY2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9hbWJyb3NlYnMuY29tXFwvdGFsa3NcXC9wcm9wb3NhbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NzI5MjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IHRvIFN1YnZlcnQgQmFja2Rvb3JlZCBFbmNyeXB0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VwcmludC5pYWNyLm9yZ1xcLzIwMThcXC8yMTIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NzYzMzY1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldobyBBcmUgVGhlc2UgRWNvbm9taXN0cywgQW55d2F5PyAoMjAwOSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubGV2eWluc3RpdHV0ZS5vcmdcXC9wdWJzXFwvVGhvdWdodF9BY3Rpb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDA4MjkxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXB1dGluZyBIaWdoZXIgT3JkZXIgRGVyaXZhdGl2ZXMgb2YgTWF0cml4IGFuZCBUZW5zb3IgRXhwcmVzc2lvbnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubWF0cml4Y2FsY3VsdXMub3JnXFwvbWF0cml4Y2FsY3VsdXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDY0MDAzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgUGVkYWdvZ2ljYWwgQW5hbHlzaXMgb2YgT25saW5lIENvZGluZyBUdXRvcmlhbHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZmFjdWx0eS53YXNoaW5ndG9uLmVkdVxcL2Fqa29cXC9wYXBlcnNcXC9LaW0yMDE3Q29kaW5nVHV0b3JpYWxFdmFsdWF0aW9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjk2MTcxNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJVbml4OiBCdWlsZGluZyBhIERldmVsb3BtZW50IEVudmlyb25tZW50IGZyb20gU2NyYXRjaCAoMjAxNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9taW5uaWUudHVocy5vcmdcXC9ZNVxcL3drdF9oYXBvcF9wYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0MDIxNjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQWxjaGVteTogQSBMYW5ndWFnZSBhbmQgQ29tcGlsZXIgZm9yIEhvbW9tb3JwaGljIEVuY3J5cHRpb24gTWFkZSBFYXN5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd2ViLmVlY3MudW1pY2guZWR1XFwvfmNwZWlrZXJ0XFwvcHVic1xcL2FsY2hlbXkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjY1OTQ4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5ha2VkIG1vbGUtcmF0IG1vcnRhbGl0eSByYXRlcyBkZWZ5IEdvbXBlcnR6aWFuIGxhd3MgYnkgbm90IGluY3JlYXNpbmcgd2l0aCBhZ2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm5jYmkubmxtLm5paC5nb3ZcXC9wbWNcXC9hcnRpY2xlc1xcL1BNQzU3ODM2MTBcXC9wZGZcXC9lbGlmZS0zMTE1Ny5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxMDk1MzNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBGaXJzdCBDb3Vyc2UgaW4gRGVzaWduIGFuZCBBbmFseXNpcyBvZiBFeHBlcmltZW50cyAoMjAxMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC91c2Vycy5zdGF0LnVtbi5lZHVcXC9+Z2FyeVxcL2Jvb2tcXC9mY2RhZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwOTY2ODVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR2Fsb2lzIEZpZWxkIGluIENyeXB0b2dyYXBoeSAoMjAxMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc2l0ZXMubWF0aC53YXNoaW5ndG9uLmVkdVxcL35tb3Jyb3dcXC8zMzZfMTJcXC9wYXBlcnNcXC9qdWFuLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjM1MTA2OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJVU0RaIEZpbGUgRm9ybWF0IFNwZWNpZmljYXRpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZ3JhcGhpY3MucGl4YXIuY29tXFwvdXNkXFwvZmlsZXNcXC9VU0RaRmlsZUZvcm1hdFNwZWNpZmljYXRpb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MjI5OTcxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkF1c3Rlcml0eSBhbmQgdGhlIHJpc2Ugb2YgdGhlIE5hemkgcGFydHkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmFuZGVyc29uLnVjbGEuZWR1XFwvRG9jdW1lbnRzXFwvYXJlYXNcXC9mYWNcXC9nZW1cXC9uYXppX2F1c3Rlcml0eS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY1NTg4MzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2lua2luZyBvZiB0aGUgVVMgQ2FyZ28gVmVzc2VsIEVsIEZhcm86IElsbHVzdHJhdGVkIGRpZ2VzdCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubnRzYi5nb3ZcXC9pbnZlc3RpZ2F0aW9uc1xcL0FjY2lkZW50UmVwb3J0c1xcL1JlcG9ydHNcXC9TUEMxODAxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE2MDM5NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGlzIGFyY2hpdGVjdHVyZSB0YXN0ZXMgbGlrZSBtaWNyb2FyY2hpdGVjdHVyZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dwM3dvcmtzaG9wLndlYnNpdGVcXC9wZGZzXFwvV1AzX2R1bmhhbS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY1NjAwNjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUGFyc2luZyB3aXRoIERlcml2YXRpdmVzOiBBIEZ1bmN0aW9uYWwgUGVhcmwgKDIwMTEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbWF0dC5taWdodC5uZXRcXC9wYXBlcnNcXC9taWdodDIwMTFkZXJpdmF0aXZlcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczOTEwNzFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIENvbnNpc3RlbmN5IG9mIEFyaXRobWV0aWMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC90aW1vdGh5Y2hvdy5uZXRcXC9jb25zaXN0ZW50LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ0MDExNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgUG90ZW50aW9tZXRlciBIYW5kYm9vayAoMTk3NSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmJvdXJucy5jb21cXC9kb2NzXFwvdGVjaG5pY2FsLWRvY3VtZW50c1xcL3RlY2huaWNhbC1saWJyYXJ5XFwvY29ycG9yYXRlXFwvT25saW5lUG90ZW50aW9tZXRlckhhbmRib29rLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM5MTA3NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIHZpc3VhbCBoaXN0b3J5IG9mIHRoZSBmdXR1cmUgKDIwMTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2Fzc2V0cy5wdWJsaXNoaW5nLnNlcnZpY2UuZ292LnVrXFwvZ292ZXJubWVudFxcL3VwbG9hZHNcXC9zeXN0ZW1cXC91cGxvYWRzXFwvYXR0YWNobWVudF9kYXRhXFwvZmlsZVxcLzM2MDgxNFxcLzE0LTgxNC1mdXR1cmUtY2l0aWVzLXZpc3VhbC1oaXN0b3J5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc0MjcyNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQ29tcHV0ZXIgZm9yIHRoZSAyMXN0IENlbnVyeSAoMTk5MSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmxyaS5mclxcL35tYmxcXC9TdGFuZm9yZFxcL0NTNDc3XFwvcGFwZXJzXFwvV2Vpc2VyLVNjaUFtLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzAyOTE3OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIaWdoIFBlcmZvcm1hbmNlIENvbXB1dGluZzogQXJlIFdlIEp1c3QgR2V0dGluZyBXcm9uZyBBbnN3ZXJzIEZhc3Rlcj8gKDE5OTgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dzMubmQuZWR1XFwvfm1hcmtzdFxcL2Nhc3QtYXdhcmQtc3BlZWNoLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA0OTUwOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOb3RlcyBvbiBMYW5kYXVlcidzIHByaW5jaXBsZSwgcmV2ZXJzaWJsZSBjb21wdXRhdGlvbiwgTWF4d2VsbCdzIERlbW9uICgyMDAzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3MucHJpbmNldG9uLmVkdVxcL2NvdXJzZXNcXC9hcmNoaXZlXFwvZmFsbDA2XFwvY29zNTc2XFwvcGFwZXJzXFwvYmVubmV0dDAzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODI2NzAwMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMZWlzdXJlIEx1eHVyaWVzIGFuZCB0aGUgTGFib3IgU3VwcGx5IG9mIFlvdW5nIE1lbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zY2hvbGFyLnByaW5jZXRvbi5lZHVcXC9zaXRlc1xcL2RlZmF1bHRcXC9maWxlc1xcL21hZ3VpYXJcXC9maWxlc1xcL2xlaXN1cmUtbHV4dXJpZXMtbGFib3ItanVuZS0yMDE3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjM5MzkwM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgZGlkIHNvZnR3YXJlIGdldCBzbyByZWxpYWJsZSB3aXRob3V0IHByb29mPyAoMTk5NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZ3dlcm4ubmV0XFwvZG9jc1xcL21hdGhcXC8xOTk2LWhvYXJlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA1MDcwNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJVbmRlcnN0YW5kaW5nIFNpbXBzb25cXHUyMDE5cyBQYXJhZG94ICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9mdHAuY3MudWNsYS5lZHVcXC9wdWJcXC9zdGF0X3NlclxcL3I0MTQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzI4OTU0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkYxIFF1ZXJ5OiBEZWNsYXJhdGl2ZSBRdWVyeWluZyBhdCBHb29nbGUgU2NhbGUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cudmxkYi5vcmdcXC9wdmxkYlxcL3ZvbDExXFwvcDE4MzUtc2Ftd2VsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzcxOTkxNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgdG8gUHJpbnQgRmxvYXRpbmctUG9pbnQgTnVtYmVycyBBY2N1cmF0ZWx5ICgxOTkwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9saXN0cy5ub25nbnUub3JnXFwvYXJjaGl2ZVxcL2h0bWxcXC9nY2wtZGV2ZWxcXC8yMDEyLTEwXFwvcGRma2llVGxrbFJ6Ti5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyNzc1NjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVmZWF0aW5nIE1vZGVybiBTZWN1cmUgQm9vdCBVc2luZyBTZWNvbmQtT3JkZXIgUHVsc2VkIEVNIEZhdWx0IEluamVjdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL3N5c3RlbVxcL2ZpbGVzXFwvY29uZmVyZW5jZVxcL3dvb3QxN1xcL3dvb3QxNy1wYXBlci1jdWkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODk1NzgxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZvdW5kYXRpb25zIGZvciBFZmZpY2llbnQgYW5kIEV4cHJlc3NpdmUgRGlmZmVyZW50aWFibGUgUHJvZ3JhbW1pbmcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9wYXBlcnMubmlwcy5jY1xcL3BhcGVyXFwvODIyMS1iYWNrcHJvcGFnYXRpb24td2l0aC1jYWxsYmFja3MtZm91bmRhdGlvbnMtZm9yLWVmZmljaWVudC1hbmQtZXhwcmVzc2l2ZS1kaWZmZXJlbnRpYWJsZS1wcm9ncmFtbWluZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3NDc3NjdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQVBMXFxcXDMwMDAgXFx1MjAxMyBIUCBKb3VybmFsIFxcdTIwMTMgSnVseSAxOTc3IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmhwbC5ocC5jb21cXC9ocGpvdXJuYWxcXC9wZGZzXFwvSXNzdWVQREZzXFwvMTk3Ny0wNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MDY3ODlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT24gSW50ZWxsaWdlbmNlIGluIENlbGxzOiBUaGUgQ2FzZSBmb3IgV2hvbGUgQ2VsbCBCaW9sb2d5ICgyMDA5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5icmlhbmpmb3JkLmNvbVxcL2EtSVNSX0ZvcmQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzE3MzIzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdyYWFsU3F1ZWFrOiBBIEZhc3QgU21hbGx0YWxrIEJ5dGVjb2RlIEludGVycHJldGVyIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2ZuaWVwaGF1cy5jb21cXC8yMDE4XFwvaWNvb29scHMxOC1ncmFhbHNxdWVhay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0NzA3NjdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVG93YXJkcyBTdGVhbHRoeSBNYW5pcHVsYXRpb24gb2YgUm9hZCBOYXZpZ2F0aW9uIFN5c3RlbXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGVvcGxlLmNzLnZ0LmVkdVxcL2dhbmd3YW5nXFwvc2VjMTgtZ3BzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU4MTc1NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNb25vaWQgbWFjaGluZXM6IGEgTyhsb2cgbikgcGFyc2VyIGZvciByZWd1bGFyIGxhbmd1YWdlcyAoMjAwNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZGNjLmZjLnVwLnB0XFwvfmFjbVxcL3NlbWlnci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MTI1NzRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBSZWxhdGlvbmFsIE1vZGVsIG9mIERhdGEgZm9yIExhcmdlIFNoYXJlZCBEYXRhIEJhbmtzICgxOTcwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jcy51d2F0ZXJsb28uY2FcXC9+ZGF2aWRcXC9jczg0OHMxNFxcL2NvZGQtcmVsYXRpb25hbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwODg5NTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmxlZWRpbmdCaXQ6IFRoZSBoaWRkZW4gYXR0YWNrIHN1cmZhY2Ugd2l0aGluIEJMRSBjaGlwcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9nby5hcm1pcy5jb21cXC9odWJmc1xcL0JMRUVESU5HQklUJTIwLSUyMFRlY2huaWNhbCUyMFdoaXRlJTIwUGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjIxMDcwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIjIwMTggRGVsb2l0dGUgTWlsbGVubmlhbCBTdXJ2ZXkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Mi5kZWxvaXR0ZS5jb21cXC9jb250ZW50XFwvZGFtXFwvRGVsb2l0dGVcXC9nbG9iYWxcXC9Eb2N1bWVudHNcXC9BYm91dC1EZWxvaXR0ZVxcL2d4LTIwMTgtbWlsbGVubmlhbC1zdXJ2ZXktcmVwb3J0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzYzMTY3MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBZG9wdGluZyBMZXNzb25zIGZyb20gT2ZmbGluZSBSYXktVHJhY2luZyB0byBSZWFsLVRpbWUgUmF5LVRyYWNpbmcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9hZHZhbmNlcy5yZWFsdGltZXJlbmRlcmluZy5jb21cXC9zMjAxOFxcL1BoYXJyJTIwLSUyMEFkdmFuY2VzJTIwaW4lMjBSVFIlMjAtJTIwUmVhbC10aW1lJTIwUmF5JTIwVHJhY2luZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzNjQ4MjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSHV5Z2VuczogU2NhbGFibGUsIEZpbmUtZ3JhaW5lZCBDbG9jayBTeW5jaHJvbml6YXRpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9zeXN0ZW1cXC9maWxlc1xcL2NvbmZlcmVuY2VcXC9uc2RpMThcXC9uc2RpMTgtZ2VuZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0Mjg2NTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIENhc2UgZm9yIFNoYXJlZCBOb3RoaW5nICgxOTg2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2RiLmNzLmJlcmtlbGV5LmVkdVxcL3BhcGVyc1xcL2hwdHM4NS1ub3RoaW5nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM5MTM3NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJcXHUyMDFjTGl0dGxlIExhbmd1YWdlc1xcdTIwMWQgYnkgSm9uIEJlbnRsZXkgKDE5ODYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvc3RhZmYudW0uZWR1Lm10XFwvYWZyYTFcXC9zZW1pbmFyXFwvbGl0dGxlLWxhbmd1YWdlcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4ODE3MDVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT3B0aW1pemluZyBQYXhvcyB3aXRoIGJhdGNoaW5nIGFuZCBwaXBlbGluaW5nICgyMDEyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZGZzLnNlbWFudGljc2Nob2xhci5vcmdcXC9hMGQwXFwvY2RkMmU4YWYxOTQ1YzAzY2ZhZjJjYjQ1MWY3MWYyMDhkMGM5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjk1MjY0OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgU3RydWN0dXJlIG9mIFxcdTIwMWNVbnN0cnVjdHVyZWRcXHUyMDFkIERlY2lzaW9uIFByb2Nlc3NlcyAoMTk3NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9tZWRpYS5jb3Jwb3JhdGUtaXIubmV0XFwvbWVkaWFfZmlsZXNcXC9pcm9sXFwvOTdcXC85NzY2NFxcL3JlcG9ydHNcXC9NaW50emJlcmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NTEzNDA1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1vZGVsaW5nIFBvdGVudGlhbCBJbmNvbWUgYW5kIFdlbGZhcmUgXFx1MjAxMyBCZW5lZml0cyBpbiBJbGxpbm9pcyAoMjAxNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZDJkdjdoemU2NDZ4ci5jbG91ZGZyb250Lm5ldFxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxNFxcLzEyXFwvV2VsZmFyZV9SZXBvcnRfZmluYWxmaW5hbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0ODQyMTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQnVpbGRpbmcgYSBTZWxmLUhlYWxpbmcgT3BlcmF0aW5nIFN5c3RlbSAoMjAwNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jaG9pY2VzLmNzLmlsbGlub2lzLmVkdVxcL3NlbGZoZWFsaW5nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc0NTk5MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTdGF0aWMgUHJvZ3JhbSBBbmFseXNpcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jcy5hdS5ka1xcL35hbW9lbGxlclxcL3NwYVxcL3NwYS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5MTU1NjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRXZpZGVuY2UgZm9yIGJpb2xvZ2ljYWwgc2hhcGluZyBvZiBoYWlyIGljZSAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmJpb2dlb3NjaWVuY2VzLm5ldFxcLzEyXFwvNDI2MVxcLzIwMTVcXC9iZy0xMi00MjYxLTIwMTUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzA1OTk0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNlY3VyaXR5IENoYXNtcyBvZiBXQVNNIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2kuYmxhY2toYXQuY29tXFwvdXMtMThcXC9UaHUtQXVndXN0LTlcXC91cy0xOC1MdWthc2lld2ljei1XZWJBc3NlbWJseS1BLU5ldy1Xb3JsZC1vZi1OYXRpdmVfRXhwbG9pdHMtT24tVGhlLVdlYi13cC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4MzQ2NzVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSVJTOiBSZXZpZXcgb2YgdGhlIFN5c3RlbSBGYWlsdXJlIFRoYXQgTGVkIHRvIHRoZSBUYXggRGF5IE91dGFnZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudHJlYXN1cnkuZ292XFwvdGlndGFcXC9hdWRpdHJlcG9ydHNcXC8yMDE4cmVwb3J0c1xcLzIwMTgyMDA2NWZyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA2MjQwNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQ09OUyBtaWNyb3Byb2Nlc3NvciAoMTk3NCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZHNwYWNlLm1pdC5lZHVcXC9iaXRzdHJlYW1cXC9oYW5kbGVcXC8xNzIxLjFcXC80MTExNVxcL0FJX1dQXzA4MC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1MzEzNTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2V0dGluZywgRWxhYm9yYXRpbmcsIFJlZmxlY3Rpbmcgb24gR29hbHMgSW1wcm92ZXMgQWNhZGVtaWMgUGVyZm9ybWFuY2UgKDIwMTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvaW5kaXZpZHVhbC51dG9yb250by5jYVxcL2phY29iaGlyc2hcXC9wdWJsaWNhdGlvbnNcXC9Hb2FsU2V0dGluZ0pBUDIwMTAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjA2NDcyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxpdmUgQ29kaW5nIGluIFNwb3J0aDogQSBTdGFjay1CYXNlZCBMYW5ndWFnZSBmb3IgQXVkaW8gU3ludGhlc2lzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2ljbGMubGl2ZWNvZGVuZXR3b3JrLm9yZ1xcLzIwMTdcXC9jYW1lcmFSZWFkeVxcL3Nwb3J0aC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxMTgyMzdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT24gdGhlIERldGVjdGlvbiBvZiBLZXJuZWwtTGV2ZWwgUm9vdGtpdHMgVXNpbmcgSGFyZHdhcmUgUGVyZm9ybWFuY2UgQ291bnRlcnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY3MuYmluZ2hhbXRvbi5lZHVcXC9+ZGV2dHl1c2hraW5cXC9hc2lhY2NzLTIwMTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTYxODg2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBTb2NyYXRpYyBNZXRob2QgaW4gYW4gQWdlIG9mIFRyYXVtYSAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvaGFydmFyZGxhd3Jldmlldy5vcmdcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMTdcXC8xMFxcLzIzMjAtMjM0N19PbmxpbmUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDUwMjA3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRvIEtpbGwgYSBDZW50cmlmdWdlICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubGFuZ25lci5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMTdcXC8wM1xcL3RvLWtpbGwtYS1jZW50cmlmdWdlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzEzMzMyOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZWVwIExlYXJuaW5nOiBBIENyaXRpY2FsIEFwcHJhaXNhbCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hcnhpdi5vcmdcXC9mdHBcXC9hcnhpdlxcL3BhcGVyc1xcLzE4MDFcXC8xODAxLjAwNjMxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA4MzQ2OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZXNpZ24gY2FzZSBoaXN0b3J5OiB0aGUgQ29tbW9kb3JlIDY0ICgxOTg1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zcGVjdHJ1bS5pZWVlLm9yZ1xcL25zXFwvcGRmc1xcL2NvbW1vZG9yZTY0X21hcjE5ODUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDM4MTA2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlN1bG9uZzogRmluZGluZyBFcnJvcnMgaW4gQyBQcm9ncmFtcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3Nzdy5qa3UuYXRcXC9HZW5lcmFsXFwvU3RhZmZcXC9NYW51ZWxSaWdnZXJcXC9BU1BMT1MxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY1MzYwMTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBTdGFsbC1GcmVlIFJlYWwtVGltZSBHYXJiYWdlIENvbGxlY3RvciBmb3IgUmVjb25maWd1cmFibGUgSGFyZHdhcmUgKDIwMTIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Jlc2VhcmNoZXIud2F0c29uLmlibS5jb21cXC9yZXNlYXJjaGVyXFwvZmlsZXNcXC91cy1iYWNvblxcL0JhY29uMTJBbmRUaGVuLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjM0NzYyNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDaGlwZm9yZ2Ugb3BlbnNvdXJjZSBmb3VuZHJ5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2dpdGh1Yi5jb21cXC9sZXZpYXRoYW5jaFxcL1NJVENPTlxcL2Jsb2JcXC9tYXN0ZXJcXC9PUkNvbmYtMjAxODA5MjEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTA0MzYyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkludHJvZHVjdGlvbiB0byB0aGUgTXVtcHMgTGFuZ3VhZ2UgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy51bmkuZWR1XFwvfm9rYW5lXFwvc291cmNlXFwvTVVNUFMtTURIXFwvTXVtcHNUdXRvcmlhbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMDkyMzdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGFuZ2Vyb3VzIE9wdGltaXphdGlvbnMgYW5kIHRoZSBMb3NzIG9mIENhdXNhbGl0eSBpbiBDIGFuZCBDKysgKDIwMTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3B1YndlYi5lbmcudXRhaC5lZHVcXC9+Y3M1Nzg1XFwvc2xpZGVzLWYxMFxcL0Rhbmdlcm91cytPcHRpbWl6YXRpb25zLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM5OTIyOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgbmV4dCA3MDAgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VzICgxOTY2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2ZzbC5jcy5pbGxpbm9pcy5lZHVcXC9pbWFnZXNcXC9lXFwvZWZcXC9QMTU3LWxhbmRpbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3MTgxNThcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGV0ZWN0aW5nIENvbnNjaW91c25lc3MgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5hbGxlbmluc3RpdHV0ZS5vcmdcXC9tZWRpYVxcL2ZpbGVyX3B1YmxpY1xcLzNlXFwvN2FcXC8zZTdhYWJiMC01ZGE3LTQ5MTUtYjRiNi0yYWE4OTZjOGZhZWVcXC8yMDE3XzExX2hvd3RvbWFrZWFjb25zY2lvdXNuZXNzbWV0ZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzAwMjgwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkN1cmU1MzogQnJvd3NlciBTZWN1cml0eSBXaGl0ZXBhcGVyICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jdXJlNTMuZGVcXC9icm93c2VyLXNlY3VyaXR5LXdoaXRlcGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDA2NjYzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyB0byBDYXRjaCBXaGVuIFByb3hpZXMgTGllIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5hbmRyZXcuY211LmVkdVxcL3VzZXJcXC9uaWNvbGFzY1xcL3B1YmxpY2F0aW9uc1xcL1dlaW5iZXJnLUlNQzE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODMzNjI4M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCcmluZ3VwIGlzIEhhcmQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZ2FyYmxlZC5uZXRcXC90bXBcXC9icmluZ3VwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQzNTUxMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGdW5jdGlvbmFsIFBlYXJsOiBFbnVtZXJhdGluZyB0aGUgUmF0aW9uYWxzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy5veC5hYy51a1xcL2plcmVteS5naWJib25zXFwvcHVibGljYXRpb25zXFwvcmF0aW9uYWxzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODUxNTQxM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21wdXRhdGlvbiBhbmQgU3RhdGUgTWFjaGluZXMgKDIwMDgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2xhbXBvcnQuYXp1cmV3ZWJzaXRlcy5uZXRcXC9wdWJzXFwvc3RhdGUtbWFjaGluZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwMTI2NzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQWxsIFlvdXIgSU9QUyBBcmUgQmVsb25nIHRvIFVzOiBDYXNlIFN0dWR5IGluIFBlcmZvcm1hbmNlIE9wdGltaXphdGlvbiAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnBlcmNvbmEuY29tXFwvbGl2ZVxcL215c3FsLWNvbmZlcmVuY2UtMjAxNVxcL3NpdGVzXFwvZGVmYXVsdFxcL2ZpbGVzXFwvc2xpZGVzXFwvYWxsX3lvdXJfaW9wc19hcmVfYmVsb25nX3RvX3VzUExNQ0UyMDE1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjI1Mjk4NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUQ1AgYW5kIEJCUiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9yaXBlNzYucmlwZS5uZXRcXC9wcmVzZW50YXRpb25zXFwvMTAtMjAxOC0wNS0xNS1iYnIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDYzNTgyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJldmVyc2UtRW5naW5lZXJpbmcgV2ViQXNzZW1ibHkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnBuZnNvZnR3YXJlLmNvbVxcL3JldmVyc2luZy13YXNtLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUwNzc2N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTdGlsbCBBbGwgb24gT25lIFNlcnZlcjogUGVyZm9yY2UgYXQgU2NhbGUgKDIwMTEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvaW5mby5wZXJmb3JjZS5jb21cXC9yc1xcL3BlcmZvcmNlXFwvaW1hZ2VzXFwvR29vZ2xlV2hpdGVQYXBlci1TdGlsbEFsbG9uT25lU2VydmVyLVBlcmZvcmNlYXRTY2FsZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2MDc0NTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQW1iaXQ6IEluLU1lbW9yeSBBY2NlbGVyYXRvciBmb3IgQnVsayBCaXR3aXNlIE9wZXJhdGlvbnMgVXNpbmcgQ29tbW9kaXR5IERSQU0gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGVvcGxlLmluZi5ldGh6LmNoXFwvb211dGx1XFwvcHViXFwvYW1iaXQtYnVsay1iaXR3aXNlLWRyYW1fbWljcm8xNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwODU3NzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BlY2lhbGl6aW5nIFJvcGVzIGZvciBSdWJ5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2Nocmlzc2VhdG9uLmNvbVxcL3RydWZmbGVydWJ5XFwvcm9wZXMtbWFubGFuZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5NzE5MjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUHJvZ3JhbW1pbmcgaW4gYW4gSW50ZXJhY3RpdmUgRW52aXJvbm1lbnQ6IFRoZSBcXHUyMDFjTGlzcFxcdTIwMWQgRXhwZXJpZW5jZSAoMTk3OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuc29mdHdhcmVwcmVzZXJ2YXRpb24ub3JnXFwvcHJvamVjdHNcXC9pbnRlcmFjdGl2ZV9jXFwvYmliXFwvU2FuZGV3YWxsLTE5NzgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzM2OTU5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlByb2xvZyBhcyBEZXNjcmlwdGlvbiBhbmQgSW1wbGVtZW50YXRpb24gTGFuZ3VhZ2UgaW4gQ1MgVGVhY2hpbmcgKDIwMDQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmVwLmxpdS5zZVxcL2VjcFxcLzAxMlxcLzAwNFxcL2VjcDAxMjAwNC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxNzQxOTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV2h5IFRocmVhZHMgQXJlIGEgQmFkIElkZWEgKDE5OTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jYy5nYXRlY2guZWR1XFwvY2xhc3Nlc1xcL0FZMjAxMFxcL2NzNDIxMF9mYWxsXFwvcGFwZXJzXFwvb3VzdGVyaG91dC10aHJlYWRzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzI5NzMyNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21waWxlciBDb25zdHJ1Y3Rpb246IFRoZSBBcnQgb2YgTmlrbGF1cyBXaXJ0aCAoMjAwMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGRmcy5zZW1hbnRpY3NjaG9sYXIub3JnXFwvMDM2ZlxcL2M0ZWZmZGE0YmJiZTlmNmE5ZWU3NjJkZjcxN2JkMGFmMTMyNC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY2MDkzNjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVW5kZXJzdGFuZGluZywgZmluZGluZywgYW5kIGVsaW1pbmF0aW5nIGdyb3VuZCBsb29wcyAoMjAwMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93ZWIubWl0LmVkdVxcL2poYXdrXFwvdG1wXFwvcFxcL0VTVDAxNl9Hcm91bmRfTG9vcHNfaGFuZG91dC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2NDA2NzRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRnV6enkgTG9naWMgaW4gQWdlbnQtQmFzZWQgR2FtZSBEZXNpZ24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd2ViLm5vcnRoZWFzdGVybi5lZHVcXC9tYWd5XFwvY291cnNlc1xcL0FJXFwvRnV6enlMb2dpY0dhbWVzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzI2NTg2MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJObyBDYXVzYWwgRWZmZWN0IG9mIE11c2ljIFByYWN0aWNlIG9uIEFiaWxpdHkgKDIwMTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5nd2Vybi5uZXRcXC9kb2NzXFwvZ2VuZXRpY3NcXC9jb3JyZWxhdGlvblxcLzIwMTQtbW9zaW5nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjM0ODcyN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEeW5hbWljIEF1dG9tYXRpYyBEaWZmZXJlbnRpYXRpb24gb2YgR1BVIEJyb2FkY2FzdCBLZXJuZWxzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm1pdC5lZHVcXC9+anZpZWxtYVxcL3B1YmxpY2F0aW9uc1xcL0R5bmFtaWMtQXV0b21hdGljLURpZmZlcmVudGlhdGlvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0MDQyMDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFByb2JsZW0gd2l0aCBUaHJlYWRzICgyMDA2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cyLmVlY3MuYmVya2VsZXkuZWR1XFwvUHVic1xcL1RlY2hScHRzXFwvMjAwNlxcL0VFQ1MtMjAwNi0xLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjk5NjY2OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbnNpZGUgdGhlIFdpbmRvd3MgOTUgRmlsZSBTeXN0ZW0gKDE5OTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnRlbm94Lm5ldFxcL2Jvb2tzXFwvTWljcm9zb2Z0X1dpbmRvd3NcXC9JbnNpZGVfdGhlX1dpbmRvd3M5NV9GaWxlX1N5c3RlbS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczOTE1MjZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcHV0YXRpb25hbCBDb21wbGV4aXR5IG9mIEFpciBUcmF2ZWwgUGxhbm5pbmcgKDIwMDMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmRlbWFyY2tlbi5vcmdcXC9jYXJsXFwvcGFwZXJzXFwvSVRBLXNvZnR3YXJlLXRyYXZlbC1jb21wbGV4aXR5XFwvSVRBLXNvZnR3YXJlLXRyYXZlbC1jb21wbGV4aXR5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzY0MjI2M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSYWNrbG9nOiBQcm9sb2cgU3R5bGUgTG9naWMgUHJvZ3JhbW1pbmcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGx0LmVlY3Mubm9ydGh3ZXN0ZXJuLmVkdVxcL3NuYXBzaG90c1xcL2N1cnJlbnRcXC9wZGYtZG9jXFwvcmFja2xvZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3Njc3MDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBGYWlsdXJlIG9mIEFjYWRlbWljIFF1YWxpdHkgQ29udHJvbCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2pvdXJuYWxvZnBvc2l0aXZlc2V4dWFsaXR5Lm9yZ1xcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxOFxcLzA4XFwvRmFpbHVyZS1vZi1BY2FkZW1pYy1RdWFsaXR5LUNvbnRyb2wtVGVjaG5vbG9neS1vZi1Pcmdhc20tTGllYmVybWFuLVNjaGF0emJlcmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODk3NzUzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFuIEVtcGlyaWNhbCBTdHVkeSBvZiB0aGUgUmVsaWFiaWxpdHkgb2YgVW5peCBVdGlsaXRpZXMgKDE5ODkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZnRwLmNzLndpc2MuZWR1XFwvcGFyYWR5blxcL3RlY2huaWNhbF9wYXBlcnNcXC9mdXp6LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMyNDA2M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbWVyaWNhbiBHdXQ6IEFuIE9wZW4gUGxhdGZvcm0gZm9yIENpdGl6ZW4gU2NpZW5jZSBNaWNyb2Jpb21lIFJlc2VhcmNoIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbXN5c3RlbXMuYXNtLm9yZ1xcL2NvbnRlbnRcXC9tc3lzXFwvM1xcLzNcXC9lMDAwMzEtMTguZnVsbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0MzQ5NDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IHRoZSBSZWZvcm11bGF0aW9uIG9mIE94eUNvbnRpbiBJZ25pdGVkIHRoZSBIZXJvaW4gRXBpZGVtaWMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3My5uZC5lZHVcXC9+ZWxpZWJlclxcL3Jlc2VhcmNoXFwvRUxQLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjc5MjA1MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCYXNpYyBDYXZlIERpdmluZzogQSBCbHVlcHJpbnQgZm9yIFN1cnZpdmFsICgxOTg2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9uc3NjZHMub3JnXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE4XFwvMDVcXC9CbHVlcHJpbnQtZm9yLVN1cnZpdmFsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ4MzMzOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDRlRDIGFuZCBTRUMgVGVzdGltb255IG9uIENyeXB0b2N1cnJlbmNpZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmJhbmtpbmcuc2VuYXRlLmdvdlxcL3B1YmxpY1xcL19jYWNoZVxcL2ZpbGVzXFwvYTVlNzJhYzYtNGY4YS00NzNmLTljOWMtZTI4OTQ1NzNkNTdkXFwvQkY2MjQzM0EwOUE5Qjk1QTI2OUEyOUUxRkYxM0QyQkEuY2xheXRvbi10ZXN0aW1vbnktMi02LTE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMxMjAyNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJaZXJvLW92ZXJoZWFkIGRldGVybWluaXN0aWMgZXhjZXB0aW9uczogVGhyb3dpbmcgdmFsdWVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm9wZW4tc3RkLm9yZ1xcL2p0YzFcXC9zYzIyXFwvd2cyMVxcL2RvY3NcXC9wYXBlcnNcXC8yMDE4XFwvcDA3MDlyMC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwNTkyOTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ3J5cHRvZ3JhcGhpY2FsbHkgQ2VydGlmaWVkIEh5cG90aGVzaXMgVGVzdGluZyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3NhY2hhc2VydmFuc2NocmVpYmVyLmNvbVxcL3RoZXNpcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2OTI5ODJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBIaXN0b3J5IG9mIENhcGFjaXR5IENoYWxsZW5nZXMgaW4gQ29tcHV0ZXIgU2NpZW5jZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jcy5zdGFuZm9yZC5lZHVcXC9wZW9wbGVcXC9lcm9iZXJ0c1xcL0NTQ2FwYWNpdHkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzM0OTY4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1hY2gtTyBUcmlja3MgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9pb2tpdC5yYWNpbmdcXC9tYWNob3RyaWNrcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczNzg4MjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRXhwbG9pdGluZyBDb3JvdXRpbmVzIHRvIEF0dGFjayB0aGUgXFx1MjAxY0tpbGxlciBOYW5vc2Vjb25kc1xcdTIwMWQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cudmxkYi5vcmdcXC9wdmxkYlxcL3ZvbDExXFwvcDE3MDItam9uYXRoYW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDIwOTUwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlB5Y2tldDogQSBUcmFjaW5nIEpJVCBGb3IgYSBGdW5jdGlvbmFsIExhbmd1YWdlICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2hvbWVzLnNpY2UuaW5kaWFuYS5lZHVcXC9zYW10aFxcL3B5Y2tldC1kcmFmdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwMDU3MzRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3lzdGVtcyBTb2Z0d2FyZSBSZXNlYXJjaCBpcyBJcnJlbGV2YW50ICgyMDAwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2RvYy5jYXQtdi5vcmdcXC9iZWxsX2xhYnNcXC91dGFoMjAwMFxcL3V0YWgyMDAwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODIwNzMxN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXZWxjb21lIHRvIEROUywgb3IgU2F2aW5nIHRoZSBETlMgQ2FtZWwgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvaW5kaWNvLmRucy1vYXJjLm5ldFxcL2V2ZW50XFwvMjlcXC9jb250cmlidXRpb25zXFwvNjU4XFwvYXR0YWNobWVudHNcXC82NDFcXC8xMDM5XFwvV2VsY29tZV90b19ETlMtZmluYWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjU1NjE5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBEYXJrIChQYXR0ZXJucykgU2lkZSBvZiBVWCBEZXNpZ24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jb2xpbmdyYXkubWVcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMThfR3JheWV0YWxfQ0hJX0RhcmtQYXR0ZXJuc1VYRGVzaWduLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk2MjQ2OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNb25hZHMgZm9yIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgKDE5OTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvaG9tZXBhZ2VzLmluZi5lZC5hYy51a1xcL3dhZGxlclxcL3BhcGVyc1xcL21hcmt0b2JlcmRvcmZcXC9iYWFzdGFkLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzAwMjU1NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPbmxpbmUgVHJhY2tpbmc6IEEgMU0tc2l0ZSBNZWFzdXJlbWVudCBhbmQgQW5hbHlzaXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9yYW5kb213YWxrZXIuaW5mb1xcL3B1YmxpY2F0aW9uc1xcL09wZW5XUE1fMV9taWxsaW9uX3NpdGVfdHJhY2tpbmdfbWVhc3VyZW1lbnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzcxNDk0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNFQyBzZXR0bGVzIHdpdGggRXRoZXJEZWx0YSBmb3VuZGVyIGZvciBydW5uaW5nIGFuIHVubGljZW5zZWQgZXhjaGFuZ2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnNlYy5nb3ZcXC9saXRpZ2F0aW9uXFwvYWRtaW5cXC8yMDE4XFwvMzQtODQ1NTMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDEwNDgzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5hbWluZyBhbmQgU3luY2hyb25pemF0aW9uIGluIGEgRGVjZW50cmFsaXplZCBDb21wdXRlciBTeXN0ZW0gKDE5NzkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmR0aWMubWlsXFwvZHRpY1xcL3RyXFwvZnVsbHRleHRcXC91MlxcL2EwNjE0MDcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjY3MDIyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1ldGhvZHMgZm9yIFN0dWR5aW5nIENvaW5jaWRlbmNlcyAoMTk4OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubWF0aC51Y2hpY2Fnby5lZHVcXC9+ZmNhbGVcXC9DQ0NcXC9EQy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyOTcwNjdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVG8gRXhwbGFpbiBvciB0byBQcmVkaWN0PyAoMjAxMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZ2FsaXRzaG11ZWxpLmNvbVxcL3N5c3RlbVxcL2ZpbGVzXFwvU3RhdCUyMFNjaWVuY2UlMjBwdWJsaXNoZWQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTA5NDA3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBJbnRlbCA4MHg4NiBQcm9jZXNzIEFyY2hpdGVjdHVyZTogUGl0ZmFsbHMgZm9yIFNlY3VyZSBTeXN0ZW1zICgxOTk1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZGZzLnNlbWFudGljc2Nob2xhci5vcmdcXC8yMjA5XFwvNDI4MDkyNjJjMTdiNjYzMWMwZjY1MzZjOTFhYWY3NzU2ODU3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjEwMTcxOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbXBlcmZlY3QgRm9yd2FyZCBTZWNyZWN5OiBIb3cgRGlmZmllLUhlbGxtYW4gRmFpbHMgaW4gUHJhY3RpY2VcIixcbiAgICAgICAgXCJzY29yZVwiOiA0OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvamhhbGRlcm0uY29tXFwvcHViXFwvcGFwZXJzXFwvd2Vha2RoLWNhY20xOS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3MjU4MjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRnJvaWQ6IE9wdGltaXphdGlvbiBvZiBJbXBlcmF0aXZlIFByb2dyYW1zIGluIGEgUmVsYXRpb25hbCBEYXRhYmFzZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy52bGRiLm9yZ1xcL3B2bGRiXFwvdm9sMTFcXC9wNDMyLXJhbWFjaGFuZHJhLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODc0NzgwN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTdWNjaW5jdGVyIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvcGVvcGxlLmNzYWlsLm1pdC5lZHVcXC9taXBcXC9wYXBlcnNcXC9zdWNjaW5jdFxcL3N1Y2NpbmN0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODcwMTU0MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbiBGUEdBIEltcGxlbWVudGF0aW9uIG9mIGEgRGlzdHJpYnV0ZWQgVmlydHVhbCBNYWNoaW5lIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy51bm0uZWR1XFwvfndpbGxpYW1zXFwvZnBnYS11Y25jMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzYwMjY3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBUcm91YmxlIHdpdGggTWFjcm9lY29ub21pY3MgKDIwMTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BhdWxyb21lci5uZXRcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMTZcXC8wOVxcL1dQLVRyb3VibGUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTc5OTg5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNsYXNjYWwgUmVmZXJlbmNlIE1hbnVhbCBmb3IgdGhlIExpc2EgKDE5ODMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm1pcnJvcnNlcnZpY2Uub3JnXFwvc2l0ZXNcXC93d3cuYml0c2F2ZXJzLm9yZ1xcL3BkZlxcL2FwcGxlXFwvbGlzYVxcL3Rvb2xraXRfdW5pdmVyc2l0eVxcL0NsYXNjYWxfUmVmZXJlbmNlX01hbnVhbF9NYXI4My5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1OTE3MjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2VsZi1DZW5zb3JzaGlwIGluIFB1YmxpYyBEaXNjb3Vyc2U6IEEgVGhlb3J5IG9mICdQb2xpdGljYWwgQ29ycmVjdG5lc3MnICgxOTk0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYnJvd24uZWR1XFwvRGVwYXJ0bWVudHNcXC9FY29ub21pY3NcXC9GYWN1bHR5XFwvR2xlbm5fTG91cnlcXC9sb3VyeWhvbWVwYWdlXFwvcGFwZXJzXFwvTG91cnlfUG9saXRpY2FsX0NvcnJlY3RuZXNzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQ0MjM0N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgU2NoZW1lIE1hY2hpbmUgKDE5OTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYnVyZ2VycmcuZ2l0aHViLmlvXFwvVFI0MTMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzAyNDIwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1hdGhlbWF0aWNzIGluIHRoZSAyMHRoIGNlbnR1cnkgXFx1MjAxMyBTaXIgTWljaGFlbCBBdGl5YWggW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubWF0aC50YW11LmVkdVxcL35yb2phc1xcL2F0aXlhaDIwdGhjZW50dXJ5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODczMDQzNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXaHkgRWNobyBDaGFtYmVycyBBcmUgVXNlZnVsIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5lY29ub21pY3Mub3guYWMudWtcXC9tYXRlcmlhbHNcXC9qbV9wYXBlcnNcXC85MjFcXC9lY2hvY2hhbWJlcnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4Mzc1NDA5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJ1aWxkaW5nIGEgQnctVHJlZSBUYWtlcyBNb3JlIFRoYW4gSnVzdCBCdXp6IFdvcmRzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2RiLmNzLmNtdS5lZHVcXC9wYXBlcnNcXC8yMDE4XFwvbW9kMzQyLXdhbmdBLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzA0MTYxNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgSGlzdG9yeSwgQ29udHJvdmVyc3ksIGFuZCBFdm9sdXRpb24gb2YgdGhlIEdvdG8gU3RhdGVtZW50IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd2ViLnNvbm9tYS5lZHVcXC91c2Vyc1xcL2xcXC9sdXZpc2lcXC9nb3RvXFwvZ290by5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0ODQyMjFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXV0b21hdGVkIFBDQiBSZXZlcnNlIEVuZ2luZWVyaW5nICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL3N5c3RlbVxcL2ZpbGVzXFwvY29uZmVyZW5jZVxcL3dvb3QxN1xcL3dvb3QxNy1wYXBlci1rbGViZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDgyNDY1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5ldyBIYXJkd2FyZSBmb3IgTWFzc2l2ZSBOZXVyYWwgTmV0d29ya3MgKDE5ODgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BhcGVycy5uaXBzLmNjXFwvcGFwZXJcXC8yMi1uZXctaGFyZHdhcmUtZm9yLW1hc3NpdmUtbmV1cmFsLW5ldHdvcmtzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM3Mjk1M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFbnRpdHkgQ29tcG9uZW50IFN5c3RlbXMgYW5kIERhdGEgT3JpZW50ZWQgRGVzaWduIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYXJhcy1wLmluZm9cXC90ZXh0c1xcL2ZpbGVzXFwvMjAxOEFjYWRlbXklMjAtJTIwRUNTLURvRC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyMDIzMDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGVzdGluZyBUaGVvcmllcyBvZiBBbWVyaWNhbiBQb2xpdGljczogRWxpdGVzLCBJbnRlcmVzdCBHcm91cHMsIENpdGl6ZW5zICgyMDE0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zY2hvbGFyLnByaW5jZXRvbi5lZHVcXC9zaXRlc1xcL2RlZmF1bHRcXC9maWxlc1xcL21naWxlbnNcXC9maWxlc1xcL2dpbGVuc19hbmRfcGFnZV8yMDE0Xy10ZXN0aW5nX3RoZW9yaWVzX29mX2FtZXJpY2FuX3BvbGl0aWNzLmRvYy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzMjQ1OTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGVjaG5vbG9naWNhbCBDaGFuZ2UgYW5kIE9ic29sZXRlIFNraWxsczogRXZpZGVuY2UgZnJvbSBNZW5cXHUyMDE5cyBQcm8gVGVubmlzICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2luZGl2aWR1YWwudXRvcm9udG8uY2FcXC9qaGFsbFxcL2RvY3VtZW50c1xcL1Rlbm5pc1RlY2hDaGFuZ2UucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NzIwNDY4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZsYXJlOiBBbiBBcHByb2FjaCB0byBSb3V0aW5nIGluIExpZ2h0bmluZyBOZXR3b3JrICgyMDE2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2JpdGZ1cnkuY29tXFwvY29udGVudFxcL2Rvd25sb2Fkc1xcL3doaXRlcGFwZXJfZmxhcmVfYW5fYXBwcm9hY2hfdG9fcm91dGluZ19pbl9saWdodG5pbmdfbmV0d29ya183XzdfMjAxNi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwNTc0NDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmljeWNsZSBUZWNobm9sb2d5ICgxOTczKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3ZldGVyYW5jeWNsZWNsdWJsaWJyYXJ5Lm9yZy51a1xcL25jbFxcL3BpY3NcXC9CaWN5Y2xlJTIwVGVjaG5vbG9neSUyMFNjaWVudGlmaWMlMjBBbWVyaWNhbiUyME1hcmNoJTIwMTk3MyUyMChWLUNDJTIwTGlicmFyeSkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTY4MjY3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyBCcm93c2Vyc1xcdTIwMTkgRXhwbGFuYXRpb25zIEltcGFjdCBNaXNjb25jZXB0aW9ucyBBYm91dCBQcml2YXRlIEJyb3dzaW5nIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5ibGFzZXVyLmNvbVxcL3BhcGVyc1xcL3d3dzE4cHJpdmF0ZWJyb3dzaW5nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ1NjA0N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPdmVybG9hZCBDb250cm9sIGZvciBTY2FsaW5nIFdlQ2hhdCBNaWNyb3NlcnZpY2VzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy5jb2x1bWJpYS5lZHVcXC9+cnVpZ3VcXC9wYXBlcnNcXC9zb2NjMTgtZmluYWwxMDAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjkxNDYyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBvcHVsYXJpdHkgRHluYW1pY3MgYW5kIEludHJpbnNpYyBRdWFsaXR5IGluIFJlZGRpdCBhbmQgSGFja2VyIE5ld3MgKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BkZnMuc2VtYW50aWNzY2hvbGFyLm9yZ1xcL2NjZjZcXC8wZDA4YmRkOTg5ZWEzNTk1YmJiZGExMzJkZWRkNzFjNDdhY2YucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjkwOTA0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNob3cgSE46IEEgUm9vdCBDYXVzZSBBbmFseXNpcyBFQm9vayBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5zb2xvZ2ljLmNvbVxcL3NpdGVzXFwvZGVmYXVsdFxcL2ZpbGVzXFwvcGRmXFwvUkNBLWVib29rLW15LWJvc3MtdG9sZC1tZS10by1kby1yY2EucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDgzNzYyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlN1cnZpdmFsIGluIHRoZSBmaXJzdCBob3VycyBvZiB0aGUgQ2Vub3pvaWMgKDIwMDQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvdWFob3N0LnVhbnR3ZXJwZW4uYmVcXC9mdW5tb3JwaFxcL3Jhb3VsXFwvbWFjcm9ldm9sdXRpZVxcL1JvYmVydHNvbjIwMDQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzQ4OTk1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBEaXNjb3ZlcmllcyBvZiBDb250aW51YXRpb25zICgxOTkzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5tYXRoLmJhcy5iZ1xcL35iYW50Y2hldlxcL3BsYWNlXFwvaXN3aW1cXC9jb250aS1kaXNjby5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0NTc5MTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT3JhbCBIaXN0b3J5IG9mIEpvaG4gQmFja3VzICgyMDA2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2FyY2hpdmUuY29tcHV0ZXJoaXN0b3J5Lm9yZ1xcL3Jlc291cmNlc1xcL2FjY2Vzc1xcL3RleHRcXC8yMDEzXFwvMDVcXC8xMDI2NTc5NzAtMDUtMDEtYWNjLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU2NDE4NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQZWVraW5nIEJlaGluZCB0aGUgQ3VydGFpbnMgb2YgU2VydmVybGVzcyBQbGF0Zm9ybXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9wYWdlcy5jcy53aXNjLmVkdVxcL35saWFuZ3dcXC9wdWJcXC9hdGMxOC1maW5hbDI5OC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2ODYyMjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBNYXRoZW1hdGljaWFuXFx1MjAxOXMgQXBvbG9neSAoMTk0MCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubWF0aC51YWxiZXJ0YS5jYVxcL35tc3NcXC9taXNjXFwvQSUyME1hdGhlbWF0aWNpYW4lMjdzJTIwQXBvbG9neS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwMzc1NTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTEhEOiBJbXByb3ZpbmcgQ2FjaGUgSGl0IFJhdGUgYnkgTWF4aW1pemluZyBIaXQgRGVuc2l0eSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jcy5jbXUuZWR1XFwvfmJlY2ttYW5uXFwvcHVibGljYXRpb25zXFwvcGFwZXJzXFwvMjAxOC5uc2RpLmxoZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4MjU5MzFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGlyZWN0aW9uIGZvciBJU08gQysrIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm9wZW4tc3RkLm9yZ1xcL0pUQzFcXC9TQzIyXFwvV0cyMVxcL2RvY3NcXC9wYXBlcnNcXC8yMDE4XFwvcDA5MzlyMC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzOTQwNDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRm9ydGlmeWluZyBNYWNyb3MgKDIwMTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dzIuY2NzLm5ldS5lZHVcXC9yYWNrZXRcXC9wdWJzXFwvaWNmcDEwLWNmLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM3MjEwM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZXByZWNhdGluZyB0aGUgT2JzZXJ2ZXIgUGF0dGVybiAoMjAxMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvaW5mb3NjaWVuY2UuZXBmbC5jaFxcL3JlY29yZFxcLzE0ODA0M1xcL2ZpbGVzXFwvRGVwcmVjYXRpbmdPYnNlcnZlcnNUUjIwMTAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODQ1MzQxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXBpbGVyIEZ1enppbmcgVGhyb3VnaCBEZWVwIExlYXJuaW5nIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvaG9tZXBhZ2VzLmluZi5lZC5hYy51a1xcL2hsZWF0aGVyXFwvcHVibGljYXRpb25zXFwvMjAxOF9kZWVwZnV6emluZ19pc3N0YS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3NDgxOTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiWW91IENvdWxkIEhhdmUgSW52ZW50ZWQgU3BlY3RyYWwgU2VxdWVuY2VzICgyMDA2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3RpbW90aHljaG93Lm5ldFxcL3NwZWN0cmFsMDIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDYzOTk5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJlbGF0aW9uc2hpcCBCZXR3ZWVuIFByYWN0aWNlIGFuZCBQZXJmb3JtYW5jZSBpbiBTcG9ydHM6IEEgTWV0YS1BbmFseXNpcyAoMjAxNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYXJ0c2NpbWVkaWEuY2FzZS5lZHVcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcL3NpdGVzXFwvMTQxXFwvMjAxNlxcLzA5XFwvMTQyMTQ4NTZcXC9NYWNuYW1hcmEtTW9yZWF1LUhhbWJyaWNrLTIwMTYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODc0MDY5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhlcmJlcnQgU2ltb246IFRoZSBBcmNoaXRlY3R1cmUgb2YgQ29tcGxleGl0eSAoMTk2MikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9lY29wbGV4aXR5Lm9yZ1xcL2ZpbGVzXFwvdXBsb2Fkc1xcL1NpbW9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjM5MjIyM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZW1pbmlzY2VuY2VzIG9mIHRoZSBWTFNJIFJldm9sdXRpb24gKDIwMTIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd29ycnlkcmVhbS5jb21cXC9yZWZzXFwvQ29ud2F5JTIwLSUyMFJlbWluaXNjZW5jZXMlMjBvZiUyMHRoZSUyMFZMU0klMjBSZXZvbHV0aW9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODE0MDI5N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGaW5nZXIgUHJpbnRpbmcgRGF0YSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lcHJpbnQuaWFjci5vcmdcXC8yMDE4XFwvNTAzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE2MjYxOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJRdWFudGl0YXRpdmUgYW5hbHlzaXMgb2YgZmFtaWx5IHRyZWVzIHdpdGggbWlsbGlvbnMgb2YgcmVsYXRpdmVzICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYmlvcnhpdi5vcmdcXC9jb250ZW50XFwvYmlvcnhpdlxcL2Vhcmx5XFwvMjAxN1xcLzAyXFwvMDdcXC8xMDY0MjcuMS5mdWxsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQ5OTI0MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDbG91ZEtpdDogU3RydWN0dXJlZCBTdG9yYWdlIGZvciBNb2JpbGUgQXBwbGljYXRpb25zIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnZsZGIub3JnXFwvcHZsZGJcXC92b2wxMVxcL3A1NDAtc2hyYWVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjI4MTI3MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGlydHkgWWVhcnMgTGF0ZXI6IExlc3NvbnMgZnJvbSB0aGUgTXVsdGljcyBTZWN1cml0eSBFdmFsdWF0aW9uICgyMDAyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYWNzYWMub3JnXFwvMjAwMlxcL3BhcGVyc1xcL2NsYXNzaWMtbXVsdGljcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5NTYzODZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSGludHMgZm9yIENvbXB1dGVyIFN5c3RlbSBEZXNpZ24gKDE5ODMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5taWNyb3NvZnQuY29tXFwvZW4tdXNcXC9yZXNlYXJjaFxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxNlxcLzAyXFwvYWNyb2JhdC0xNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1ODc3NDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIENvbXB1dGVyIGFuZCB0aGUgQnJhaW4gKDE5NTgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2lhODAwODAwLnVzLmFyY2hpdmUub3JnXFwvNFxcL2l0ZW1zXFwvVGhlQ29tcHV0ZXJBbmRUaGVCcmFpblxcL1RoZSUyMENvbXB1dGVyJTIwYW5kJTIwVGhlJTIwQnJhaW5fdGV4dC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0NjExNTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTmF0dXJhbCBTb3VuZGluZyBBcnRpZmljaWFsIFJldmVyYmVyYXRpb24gKDE5NjIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY2hhcmxlc2FtZXMubmV0XFwvcGRmXFwvTVJTY2hyb2VkZXJcXC9hcnRpZmljaWFsLXJldmVyYi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMDQzNTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2VsZi1yZWZlcmVuY2UgYW5kIExvZ2ljICgyMDA1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5pbW0uZHR1LmRrXFwvfnRvYm9cXC9lc3NheS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4NDUyODhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGVjaG5pcXVlcyBvZiBTeXN0ZW1zIEFuYWx5c2lzICgxOTU3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cucmFuZC5vcmdcXC9jb250ZW50XFwvZGFtXFwvcmFuZFxcL3B1YnNcXC9yZXNlYXJjaF9tZW1vcmFuZGFcXC8yMDA2XFwvUk0xODI5LTEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzU1ODg2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkltcGxlbWVudGluZyBTSVAgVGVsZXBob255IGluIFB5dGhvbiAoMjAwOCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC8zOXBlZXJzLm5ldFxcL2Rvd25sb2FkXFwvZG9jXFwvcmVwb3J0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc1NzczN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQcmFjdGljYWwgTWVtb3J5IFNhZmV0eSB3aXRoIFJhbmRvbSBFbWJlZGRlZCBTZWNyZXQgVG9rZW5zIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNzLmNvbHVtYmlhLmVkdVxcL35zaW1oYVxcL3ByZXByaW50X2lzY2ExOF9SRVNUX21lbW9yeV9zYWZldHkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODkxMzE5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNjYWxhYmxlIDEwIEdicHMgVENQXFwvSVAgU3RhY2sgQXJjaGl0ZWN0dXJlIGZvciBSZWNvbmZpZ3VyYWJsZSBIYXJkd2FyZSAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9kYXZpZHNpZGxlci5jaFxcL2ZpbGVzXFwvZmNjbTIwMTUtdGNwaXAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTk0NzEzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlVuZGVyc3RhbmQgYW5kIEVsaW1pbmF0ZSBKVk0gV2FybS1VcCBPdmVyaGVhZCBpbiBEYXRhLVBhcmFsbGVsIFN5c3RlbXMgKDIwMTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvc3lzdGVtXFwvZmlsZXNcXC9jb25mZXJlbmNlXFwvb3NkaTE2XFwvb3NkaTE2LWxpb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTk1MDU1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBUeXJhbm55IG9mIHRoZSBDbG9jayAoMjAxMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZW5nLmF1YnVybi5lZHVcXC9+dWd1aW5cXC90ZWFjaGluZ1xcL1JFQURJTkdcXC9FNjIwMFxcL1N1dGhlcmxhbmRfVHlyYW5ueV9vX0Nsb2NrLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU3NzY3N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCZmxvYXQxNiBcXHUyMDEzIEhhcmR3YXJlIE51bWVyaWNzIERlZmluaXRpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc29mdHdhcmUuaW50ZWwuY29tXFwvc2l0ZXNcXC9kZWZhdWx0XFwvZmlsZXNcXC9tYW5hZ2VkXFwvNDBcXC84YlxcL2JmMTYtaGFyZHdhcmUtbnVtZXJpY3MtZGVmaW5pdGlvbi13aGl0ZS1wYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0NzU1NzVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcGlsaW5nIGEgU3Vic2V0IG9mIEFQTCBpbnRvIGEgVHlwZWQgSW50ZXJtZWRpYXRlIExhbmd1YWdlICgyMDE0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2hpcGVyZml0LmRrXFwvcGRmXFwvYXJyYXkxNF9maW5hbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyMzAwNjdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR2VuZXRpYyBQcmVkaXNwb3NpdGlvbiB0byBPYmVzaXR5IGFuZCBNZWRpY2FyZSBFeHBlbmRpdHVyZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lmd3ZXJuLm5ldFxcL2RvY3NcXC9nZW5ldGljc1xcL3NlbGVjdGlvblxcLzIwMTctd2VoYnkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDM0Njk3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkltcGVyZmVjdCBGb3J3YXJkIFNlY3JlY3k6IEhvdyBEaWZmaWUtSGVsbG1hbiBGYWlscyBpbiBQcmFjdGljZSAoMjAxNSlcIixcbiAgICAgICAgXCJzY29yZVwiOiAzOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd2Vha2RoLm9yZ1xcL2ltcGVyZmVjdC1mb3J3YXJkLXNlY3JlY3ktY2NzMTUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzI1ODI0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1hdGhlbWF0aWNhbCBNZXRhcGh5c2ljcyAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9zaGVsZjEubGlicmFyeS5jbXUuZWR1XFwvSFNTXFwvMjAxNVxcL2ExNjI2MTkwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ2Mjk0N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZXRwb2xpbmU6IEEgQnJhbmNoIFRhcmdldCBJbmplY3Rpb24gTWl0aWdhdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zb2Z0d2FyZS5pbnRlbC5jb21cXC9zaXRlc1xcL2RlZmF1bHRcXC9maWxlc1xcL21hbmFnZWRcXC8xZFxcLzQ2XFwvUmV0cG9saW5lLUEtQnJhbmNoLVRhcmdldC1JbmplY3Rpb24tTWl0aWdhdGlvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0MjM0MDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRXNzZW50aWFscyBvZiBNZXRhaGV1cmlzdGljcyAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY3MuZ211LmVkdVxcL35zZWFuXFwvYm9va1xcL21ldGFoZXVyaXN0aWNzXFwvRXNzZW50aWFscy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0OTEyNzRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVmVyaWZ5aW5nIENvbmN1cnJlbnQgUHJvZ3JhbXMgVXNpbmcgQ29udHJhY3RzICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5maXQudnV0YnIuY3pcXC9+dm9qbmFyXFwvUHVibGljYXRpb25zXFwvaWNzdDE3LWNvbnRyYWN0cy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0MDMyNDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFRYLTIgQ29tcHV0ZXIgYW5kIFNrZXRjaHBhZCAoMjAxMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmxsLm1pdC5lZHVcXC9wdWJsaWNhdGlvbnNcXC9sYWJub3Rlc1xcL0xvb2tpbmdCYWNrXzE5XzEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDU4OTY2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdyb3VuZDogQSBEYXRhIENvbnRleHQgU2VydmljZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9yaXNlLmNzLmJlcmtlbGV5LmVkdVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxN1xcLzAzXFwvQ0lEUjE3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQxNTQ1NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTb0MgaXQgdG8gRU06IEVNIHNpZGUtY2hhbm5lbCBhdHRhY2tzIG9uIGEgY29tcGxleCBTb0MgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmlhY3Iub3JnXFwvYXJjaGl2ZVxcL2NoZXMyMDE1XFwvOTI5MzA1OTlcXC85MjkzMDU5OS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyMjA2NjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSUNBTk4gc2Vla2luZyBpbnB1dCBvbiBjZWRpbmcgY29udHJvbCBvZiBXSE9JUyBwcml2YWN5IHRvIGdvdmVybm1lbnRzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5pY2Fubi5vcmdcXC9lblxcL3N5c3RlbVxcL2ZpbGVzXFwvZmlsZXNcXC9wcm9wb3NlZC1pbnRlcmltLW1vZGVsLWdkcHItY29tcGxpYW5jZS1zdW1tYXJ5LWRlc2NyaXB0aW9uLTI4ZmViMTgtZW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDkxNTY2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5JU1QgVW5jZXJ0YWludHkgTWFjaGluZSBcXHUyMDEzIFVzZXJcXHUyMDE5cyBNYW51YWwgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvdW5jZXJ0YWludHkubmlzdC5nb3ZcXC9OSVNUVW5jZXJ0YWludHlNYWNoaW5lLVVzZXJNYW51YWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDA4NzA1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRocmVlIEdlbmVyYXRpb25zIG9mIEFzeW5jaHJvbm91cyBNaWNyb3Byb2Nlc3NvcnMgKDIwMDMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbWFpbC5hc3luYy5jYWx0ZWNoLmVkdVxcL1B1YnNcXC9QREZcXC8yMDAzX3RocmVlZ2VuLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU0NjczMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbnNpZGVyIEFjY291bnRzIG9mIENvbXB1dGluZyBhbmQgTGlmZSBhdCBCQk46IEEgc2l4dHkteWVhciByZXBvcnQgKDIwMTEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd2FsZGVuLWZhbWlseS5jb21cXC9iYm5cXC9iYm4tcHJpbnQyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE2NjY4MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNaWxsIENQVSBpcyBJbW11bmUgdG8gU3BlY3RyZSwgTWVsdGRvd24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbWlsbGNvbXB1dGluZy5jb21cXC9ibG9nXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE4XFwvMDFcXC9TcGVjdHJlLjAzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjE1MzU3MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXaHkgSm9obm55IERvZXNuXFx1MjAxOXQgVXNlIFR3byBGYWN0b3IgXFx1MjAxMyBBIFN0dWR5IG9mIHRoZSBGSURPIFUyRiBTZWN1cml0eSBLZXkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZmMxOC5pZmNhLmFpXFwvcHJlcHJvY2VlZGluZ3NcXC8xMTEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzMyNDYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbnRyYWN0cyBpbiBPcGVuQlNEICgyMDEwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2tpbmRzb2Z0d2FyZS5jb21cXC9kb2N1bWVudHNcXC9yZXBvcnRzXFwvVG9ybGFrY2lrMTAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTM5Nzk5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdXNlIG9mIENvbW1vbnMgY29tbWl0dGVlIHJlLWludml0ZXMgdG8gTWFyayBadWNrZXJidXJnIHRvIGFwcGVhciBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cucGFybGlhbWVudC51a1xcL2RvY3VtZW50c1xcL2NvbW1vbnMtY29tbWl0dGVlc1xcL2N1bHR1cmUtbWVkaWEtYW5kLXNwb3J0XFwvMTgwNTAxLUNoYWlyLXRvLVJlYmVjY2EtU3RpbXNvbi1GYWNlYm9vay1yZS1vcmFsLWV2aWRlbmNlLWZvbGxvdy11cC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5NjY4ODJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2NpZW5jZSBhbmQgTGluZ3Vpc3RpY3MgKDE5NDApXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd2ViLm1pdC5lZHVcXC9hbGxhbm1jXFwvd3d3XFwvd2hvcmYuc2NpZW5jZWFuZGxpbmd1aXN0aWNzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA3Mjc5OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHcmF5IEZhaWx1cmU6IFRoZSBBY2hpbGxlcycgSGVlbCBvZiBDbG91ZC1TY2FsZSBTeXN0ZW1zIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy5qaHUuZWR1XFwvfmh1YW5nXFwvcGFwZXJcXC9ncmF5ZmFpbHVyZS1ob3RvczE3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjI1MzQwNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJLTEVBSzogUHJhY3RpY2FsIEtlcm5lbCBNZW1vcnkgRGlzY2xvc3VyZSBEZXRlY3Rpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV0YnNkLm9yZ1xcL2dhbGxlcnlcXC9wcmVzZW50YXRpb25zXFwvbWF4dlxcL2tsZWFrLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY0ODA2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRGVzaWduIGFuZCBJbXBsZW1lbnRhdGlvbiBvZiBIeXBlcnVwY2FsbHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9zeXN0ZW1cXC9maWxlc1xcL2NvbmZlcmVuY2VcXC9hdGMxOFxcL2F0YzE4LWFtaXQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTEzNTMwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9uIHRoZSBXb3JrIG9mIEVkd2FyZCBXaXR0ZW4gKDE5OTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYm9oci5waHlzaWNzLmJlcmtlbGV5LmVkdVxcL3JlaW5zY2hcXC9waHlzMTA1c3ByMjAxNFxcL2ZpbGVzXFwvV2l0dGVuX0F0aXlhaC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0NTMxNjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIGZ1bmN0aW9uIG9mIGRyZWFtIHNsZWVwICgxOTgzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wcm9maWxlcy5ubG0ubmloLmdvdlxcL3BzXFwvYWNjZXNzXFwvc2NiY2RrLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQwNTgxMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZWNvbGxlY3Rpb25zIG9mIEVhcmx5IENoaXAgRGV2ZWxvcG1lbnQgYXQgSW50ZWwgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbGFyay50dS1zb2ZpYS5iZ1xcL250dFxcL2V1c2t1XFwvcmVhZGluZ3NcXC9hcnRfMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2MjQ3MjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIHRyYWdlZHkgb2YgdGhlIGNvbW1vbnMgaW4gZXZvbHV0aW9uYXJ5IGJpb2xvZ3kgKDIwMDcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lmtva2tvbnV0cy5vcmdcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcL1Jhbmtpbl9Ub0MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTU3NjU3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyBOZXdzIEFnZ3JlZ2F0b3JzIEhlbHAgRGV2ZWxvcG1lbnQgQ29tbXVuaXRpZXMgU2hhcGUgYW5kIFNoYXJlIEtub3dsZWRnZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jdHJldWRlLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE4XFwvMDJcXC9pY3NlMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDU3ODU5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlVuaXF1ZSBJUHY2IHByZWZpeCBwZXIgaG9zdCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9yaXBlNzYucmlwZS5uZXRcXC9wcmVzZW50YXRpb25zXFwvMTQzLXJmYzgyNzMtdjUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDkxMTc2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBlcHBlcidzIENvbmU6IEFuIEluZXhwZW5zaXZlIERvLUl0LVlvdXJzZWxmIDNEIERpc3BsYXkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9ncmFpbC5jcy53YXNoaW5ndG9uLmVkdVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxN1xcLzEwXFwvbHVvMjAxN3BjYS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwNTEwNzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmFTaVggXFx1MjAxMyBBIEJhc2ljIGludGVycHJldGVyIHdyaXR0ZW4gaW4gVGVYICgxOTkwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy50dWcub3JnXFwvVFVHYm9hdFxcL3RiMTEtM1xcL3RiMjlncmVlbmUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTA5NTE5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBNZXRhcGh5c2ljYWwgVHJhbnNwYXJlbmN5IG9mIFRydXRoICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXZtLmVkdVxcL35sZGVyb3NzZVxcL3RyYW5zcGFyZW5jeS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1ODE3OTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3RhdGVsZXNzIE5ldHdvcmsgRnVuY3Rpb25zICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL3N5c3RlbVxcL2ZpbGVzXFwvY29uZmVyZW5jZVxcL25zZGkxN1xcL25zZGkxNy1rYWJsYW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDcwNzQ4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRpcmVjdCBDb252ZXJzaW9uIFJlY2VpdmVyczogU29tZSBBbWF0ZXVyIFJhZGlvIEhpc3RvcnkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93N3pvaS5uZXRcXC9kY3J4NjgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDQ5NDA3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIiNpZmRlZiBjb25zaWRlcmVkIGhhcm1mdWwgKDE5OTIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3VzZW5peC5vcmdcXC9sZWdhY3lcXC9wdWJsaWNhdGlvbnNcXC9saWJyYXJ5XFwvcHJvY2VlZGluZ3NcXC9zYTkyXFwvc3BlbmNlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2MjQwMTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEZvcmdldGZ1bG5lc3Mgb2YgQmVpbmdzICgxOTk3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9tYXJpdGFpbi5uZC5lZHVcXC9hbWFcXC9DaWFwYWxvXFwvQ2lhcGFsbzE0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQzMjU2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZXNpZ25pbmcgZXhwZXJpbWVudHMgZm9yIHVuZGVyc3RhbmRpbmcgcGVyZm9ybWFuY2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvdGltaGFycmlzLnVrXFwvbWlzY1xcL2ZpdmUtd2F5cy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzNDYxMzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVmlzdWFsIG92ZXJ2aWV3IG9mIHJhZGlhdG9yIHZhbHZlcyB1c2VkIGluIEdlcm1hbnkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmVxLTMuZGVcXC9Eb3dubG9hZHNcXC9lcTNcXC9kb3dubG9hZCUyMGJlcmVpY2hcXC9WZW50aWxrb21wYXRpYmlsaXRhZXRlbi1Nb2RlbC1OLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODUzMjQ0NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb2RlIEluZmxhdGlvbiAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNvbXB1dGVyLm9yZ1xcL2Ntc1xcL0NvbXB1dGVyLm9yZ1xcL0NvbXB1dGluZ05vd1xcL2lzc3Vlc1xcLzIwMTVcXC8wNFxcL21zbzIwMTUwMjAwMTAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Nzg3OTIyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBOYXR1cmFsIFJhdGUgb2YgSW50ZXJlc3QgSXMgWmVybyAoMjAwNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY2ZlcHMub3JnXFwvcHVic1xcL3dwLXBkZlxcL1dQMzctTW9zbGVyRm9yc3RhdGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQxNDE5OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaW1pbmcgQW5hbHlzaXMgb2YgS2V5c3Ryb2tlcyBhbmQgVGltaW5nIEF0dGFja3Mgb24gU1NIICgyMDAxKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZW9wbGUuZWVjcy5iZXJrZWxleS5lZHVcXC9+ZGF3XFwvcGFwZXJzXFwvc3NoLXVzZTAxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODU1NzkxNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgSGlzdG9yeSBhbmQgQ29uY2VwdCBvZiBDb21wdXRhYmlsaXR5ICgxOTk2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5wZW9wbGUuY3MudWNoaWNhZ28uZWR1XFwvfnNvYXJlXFwvSGlzdG9yeVxcL2hhbmRib29rLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODI5ODM4OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOSVNUOiBVc2FiaWxpdHkgYW5kIEtleSBNYW5hZ2VtZW50IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2NzcmMubmlzdC5nb3ZcXC9DU1JDXFwvbWVkaWFcXC9QcmVzZW50YXRpb25zXFwvVXNhYmlsaXR5LWFuZC1LZXktTWFuYWdlbWVudFxcL2ltYWdlcy1tZWRpYVxcL1VzYWJpbGl0eV9hbmRfS2V5X01nbXQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODA4OTEwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFuIEFuYWx5c2lzIG9mIHRoZSBQcm90b25NYWlsIENyeXB0b2dyYXBoaWMgQXJjaGl0ZWN0dXJlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VwcmludC5pYWNyLm9yZ1xcLzIwMThcXC8xMTIxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODUwMDkyNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBZHZhbmNlcyBpbiBPcGVuQlNEIHBhY2thZ2VzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5vcGVuYnNkLm9yZ1xcL3BhcGVyc1xcL2V1cm9ic2Rjb25fMjAxOF9odHRwcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwNTY3NzRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBNb2RlbCBvZiBNZW50YWwgRmx1aWRpdHkgYW5kIEFuYWxvZ3ktTWFraW5nICgxOTk0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3BvcnRhbC51bmktZnJlaWJ1cmcuZGVcXC9jb2duaXRpb25cXC9sZWhyZVxcL2FyY2hpdlxcL1dTMDkxMFxcL2FuYWxvZ2llbWF0XFwvNnRoc2l0dGluZ1xcL1ZvcnRyYWdcXC9jb3B5Y2F0YW1vZGVsb2ZtZW50YWxmbHVpZGl0eWFuZGFuYWxvZ3ltYWtpbmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2Mjk5ODA0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXBhcmlzb24gb2YgTWV0YWhldXJpc3RpY3MgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cyLmNzY2FtbS51bWQuZWR1XFwvcHVibGljYXRpb25zXFwvQm9va0NoYXB0ZXJfQ1MtMDktMTMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDkxMjc4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlB5dGhvblxcdTIwMTlzIE1ldGEtT2JqZWN0IFByb3RvY29sICgyMDEyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2xhc2VyLmluZi5ldGh6LmNoXFwvMjAxMlxcL3NsaWRlc1xcL3ZhblJvc3N1bVxcL2xhc2VyLW1vcC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2Njk2MjFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBIaXN0b3J5IG9mIEluZGl2aWR1YWxseSBXcmFwcGVkIENoZWVzZSBTbGljZXMgKDE5NzkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3NTYuaG9tZXBhZ2UudmlsbGFub3ZhLmVkdVxcL2RhdmlkLm5hd3JvY2tpXFwvQXJub2xkJTIwTmF3cm9ja2klMjBJV1MlMjBQYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2Mzk1MTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVm9pY2UtbWF0Y2hpbmcgdGVjaG5vbG9neSB3YXMgZGV2ZWxvcGVkIGJ5IE1JVFxcL0xpbmNvbG4gTGFicyB1bmRlciBOU0EgY29udHJhY3QgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYXNzZXRzLmRvY3VtZW50Y2xvdWQub3JnXFwvZG9jdW1lbnRzXFwvNDM1MTk4N1xcLzIwMDYtMDEtMDQtVGVjaG5vbG9neS1UaGF0LUlkZW50aWZpZXMtUGVvcGxlLWJ5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjE5NTAzOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb2duaXRpdmUgTmV0d29ya3M6IEJyYWlucywgSW50ZXJuZXQsIGFuZCBDaXZpbGl6YXRpb25zICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZGZzLnNlbWFudGljc2Nob2xhci5vcmdcXC8zNDJkXFwvNjcyYmE2NTYxMDJmZDVhOThkZjJjODgyNzIzZWYzMDIyZWZlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ4NTE1MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTcXVlYWs6IEEgTGFuZ3VhZ2UgZm9yIENvbW11bmljYXRpbmcgd2l0aCBNaWNlICgxOTg1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL29yZGllY29sZS5jb21cXC9zcXVlYWtcXC9jYXJkZWxsaV9zcXVlYWsxOTg1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc4Nzc4MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOZXVyb21vcnBoaWMgY29tcHV0aW5nIHdpdGggbXVsdGktbWVtcmlzdGl2ZSBzeW5hcHNlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubmF0dXJlLmNvbVxcL2FydGljbGVzXFwvczQxNDY3LTAxOC0wNDkzMy15LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzcxMjg5NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZXZpc2l0aW5nIHRoZSBSaXNrcyBvZiBCaXRjb2luIEN1cnJlbmN5IEV4Y2hhbmdlIENsb3N1cmUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvdHlsZXJtb29yZS51dHVsc2EuZWR1XFwvdG9pdDE3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMzNzc4MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIERlY2FkZSBvZiBMYXR0aWNlIENyeXB0b2dyYXBoeSAoMjAxNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93ZWIuZWVjcy51bWljaC5lZHVcXC9+Y3BlaWtlcnRcXC9wdWJzXFwvbGF0dGljZS1zdXJ2ZXkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzAxMTQ4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZpZWxkIEd1aWRlIGZvciBEZXNpZ25pbmcgSHVtYW4gSW50ZXJhY3Rpb24gd2l0aCBJbnRlbGxpZ2VudCBTeXN0ZW1zICgxOTk4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zdG9uLmpzYy5uYXNhLmdvdlxcL2NvbGxlY3Rpb25zXFwvdHJzXFwvX3RlY2hyZXBcXC9UTS0xOTk4LTIwODQ3MC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwNDk5NDVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ3JhYnM6IHRoZSBiaXRtYXAgdGVycm9yICgxOTg1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2x1Y2FjYXJkZWxsaS5uYW1lXFwvUGFwZXJzXFwvQ3JhYnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTY3NTI5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlN1Z2FyOiBTZWN1cmUgR1BVIEFjY2VsZXJhdGlvbiBpbiBXZWIgQnJvd3NlcnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lmljcy51Y2kuZWR1XFwvfmFyZGFsYW5cXC9wYXBlcnNcXC9ZYW9fQVNQTE9TMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODAyNTY3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5vdCBBbGwgUGF0dGVybnMsIGJ1dCBFbm91Z2ggKDIwMDgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy55b3JrLmFjLnVrXFwvcGxhc21hXFwvcHVibGljYXRpb25zXFwvcGRmXFwvTWl0Y2hlbGxSdW5jaW1hbkhhc2tlbGwwOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0MzEyMjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTm93IHlvdSBzZWUgdGhlbTogREFSUEEncyBTdGVhbHRoIFJldm9sdXRpb24gKDIwMDgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5kYXJwYS5taWxcXC9hdHRhY2htZW50c1xcLygyTzI0KSUyMEdsb2JhbCUyME5hdiUyMC0lMjBBYm91dCUyMFVzJTIwLSUyMEhpc3RvcnklMjAtJTIwUmVzb3VyY2VzJTIwLSUyMDUwdGglMjAtJTIwU3RlYWx0aCUyMChBcHByb3ZlZCkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NjEwNjU5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBlcnNvbmFsIENvbXB1dGluZyAoMTk3NSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbXByb3ZlLmRlXFwvZGlwbG9tXFwvZ3VpXFwvS2F5NzUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDQ0Nzg1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXBvc2luZyB3aXRoIFRhcGUgUmVjb3JkZXJzOiBNdXNpcXVlIENvbmNyXFx1MDBlOHRlIGZvciBCZWdpbm5lcnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbW9ub3Nrb3Aub3JnXFwvaW1hZ2VzXFwvYlxcL2IzXFwvRHd5ZXJfVGVyZW5jZV9Db21wb3Npbmdfd2l0aF9UYXBlX1JlY29yZGVyc19NdXNpcXVlX0NvbmNyZXRlX2Zvcl9CZWdpbm5lcnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzM4MDkyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlF1YW50aWZ5aW5nIHRoZSBQZXJmb3JtYW5jZSBvZiBHYXJiYWdlIENvbGxlY3Rpb24gKDIwMDUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy51bWFzcy5lZHVcXC9+ZW1lcnlcXC9wdWJzXFwvZ2N2c21hbGxvYy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3NjAxMTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2ljYWRhOiBEZXBlbmRhYmx5IEZhc3QgTXVsdGktQ29yZSBJbi1NZW1vcnkgVHJhbnNhY3Rpb25zICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9oeWVvbnRhZWsuY29tXFwvcGFwZXJzXFwvY2ljYWRhLXNpZ21vZDIwMTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTU3OTczXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbW1vbiBMaXNwLCBUeXBpbmcgYW5kIE1hdGhlbWF0aWNzICgyMDAxKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3ctZm91cmllci51amYtZ3Jlbm9ibGUuZnJcXC9+c2VyZ2VyYXJcXC9QYXBlcnNcXC9FemNhcmF5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc3NDUxNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIFN0dWR5IG9mIExpbnV4IEZpbGUgU3lzdGVtIEV2b2x1dGlvbiAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9zeXN0ZW1cXC9maWxlc1xcL2xvZ2luXFwvYXJ0aWNsZXNcXC8wM19sdV8wMTAtMDE3X2ZpbmFsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzA5ODI2MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgV2hhdFxcdTIwMTlzIE5leHQgSW50ZXJtaXR0ZW50IENvbXB1dGluZyBBcmNoaXRlY3R1cmUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZWVjZy50b3JvbnRvLmVkdVxcL35nYW5lc2ExMFxcL2Fzc2V0c1xcL3BkZnNcXC93aGF0c25leHQtaHBjYTIwMTkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzAwNjE2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlcHRoLWZpcnN0IHNlYXJjaCBhbmQgbGluZWFyIGdyYXBoIGFsZ29yaXRobXMgKDE5NzIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3JqbGlwdG9uLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDA5XFwvMTBcXC9kZnMxOTcxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODUxODczMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIFR5cGUgb2YgU2ltdWxhdGlvbiBXaGljaCBTb21lIEV4cGVyaW1lbnRhbCBFdmlkZW5jZSBTdWdnZXN0cyBXZSBEb24ndCBMaXZlIEluIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BoaWxwYXBlcnMub3JnXFwvYXJjaGl2ZVxcL0FMRUFUTy02LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzcxODg2NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOYXBvbGVvbiBhcyBPcmdhbml6YXRpb25hbCBEZXNpZ25lciAoMjAwOSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZHRpYy5taWxcXC9kdGljXFwvdHJcXC9mdWxsdGV4dFxcL3UyXFwvYTUwMTU4MC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0OTg1NzdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSW5maW5pdGVzaW1hbCBtYWNoaW5lcnkgKDE5OTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Blb3BsZS5lZWNzLmJlcmtlbGV5LmVkdVxcL35waXN0ZXJcXC8yOTBHXFwvUGFwZXJzXFwvRmV5bm1hbjgzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODYzNzIyNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgY29vbGVzdCB3YXkgdG8gZ2VuZXJhdGUgYmluYXJ5IHN0cmluZ3MgKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5yZXNlYXJjaGdhdGUubmV0XFwvcHJvZmlsZVxcL0Fhcm9uX1dpbGxpYW1zMTBcXC9wdWJsaWNhdGlvblxcLzI1NzM3NjI5NF9UaGVfQ29vbGVzdF9XYXlfdG9fR2VuZXJhdGVfQmluYXJ5X1N0cmluZ3NcXC9saW5rc1xcLzU3MmExMmNmMDhhZTA1N2IwYTA3ODdmOVxcL1RoZS1Db29sZXN0LVdheS10by1HZW5lcmF0ZS1CaW5hcnktU3RyaW5ncy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3MTUwNTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRHluYW1pYyBIYXNoIFRhYmxlcyAoMTk4OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY3NkLnVvYy5nclxcL35oeTQ2MFxcL3BkZlxcL0R5bmFtaWMlMjBIYXNoJTIwVGFibGVzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjYwODYxM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGYXVsdCBhdHRhY2tzIG9uIHNlY3VyZSBjaGlwczogZnJvbSBnbGl0Y2ggdG8gZmxhc2ggKDIwMTEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jbC5jYW0uYWMudWtcXC9+c3BzMzJcXC9FQ1JZUFQyMDExXzEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTEzMzY0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgY29tcGFyaXNvbiBvZiBhZGFwdGl2ZSByYWRpeCB0cmVlcyBhbmQgaGFzaCB0YWJsZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYmlnZGF0YS51bmktc2FhcmxhbmQuZGVcXC9wdWJsaWNhdGlvbnNcXC9BUkNEMTUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTgxMzM0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBob25lbWUtIGFuZCBXb3JkLUJhc2VkIExlYXJuaW5nIG9mIEVuZ2xpc2ggV29yZHMgUHJlc2VudGVkIHRvIHRoZSBTa2luXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Jlc2VhcmNoLmZiLmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxOFxcLzA0XFwvYS1jb21wYXJhdGl2ZS1zdHVkeS1vZi1waG9uZW1lLWFuZC13b3JkLWJhc2VkLWxlYXJuaW5nLW9mLWVuZ2xpc2gtd29yZHMtcHJlc2VudGVkLXRvLXRoZS1za2luLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzIxNDk4NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbiBBZGFwdGl2ZSBQYWNrZWQtTWVtb3J5IEFycmF5ICgyMDA3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3czLmNzLnN0b255YnJvb2suZWR1XFwvfmJlbmRlclxcL25ld3B1YlxcL0JlbmRlckh1MDctVE9EUy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxOTExNDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIGVYcHJlc3MgRGF0YSBQYXRoOiBGYXN0IFByb2dyYW1tYWJsZSBQYWNrZXQgUHJvY2Vzc2luZyBpbiB0aGUgT1MgS2VybmVsIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2dpdGh1Yi5jb21cXC90b2hvam9cXC94ZHAtcGFwZXJcXC9ibG9iXFwvbWFzdGVyXFwveGRwLXRoZS1leHByZXNzLWRhdGEtcGF0aC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyOTA1MThcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQWNlOiBhIHN5bnRheC1kcml2ZW4gQyBwcmVwcm9jZXNzb3IgKDE5ODkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3N3dGNoLmNvbVxcL2dvc2xpbmc4OWFjZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyMDY0MTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcHV0YXRpb24gYXQgdGhlIEVkZ2Ugb2YgQ2hhb3MgKDE5OTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BkZnMuc2VtYW50aWNzY2hvbGFyLm9yZ1xcL2NiNGNcXC9kZjc4MTJmYzhhZDU2ZDEzMzE3ZWFhYmM5OWI3NjY1OWU5NWYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTE1NzkzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkludGVybmV0IEFyY2hpdGVjdHVyZSBCb2FyZCBvbiB0aGUgQXVzdHJhbGlhbiBBc3Npc3RhbmNlIGFuZCBBY2Nlc3MgQmlsbCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuaWFiLm9yZ1xcL3dwLWNvbnRlbnRcXC9JQUItdXBsb2Fkc1xcLzIwMThcXC8wOVxcL0lBQi1Db21tZW50cy1vbi1BdXN0cmFsaWFuLUFzc2lzdGFuY2UtYW5kLUFjY2Vzcy1CaWxsLTIwMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTU4Nzc4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBXaHkgb2YgWSAoMjAwMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmRyZWFtc29uZ3MuY29tXFwvRmlsZXNcXC9XaHlPZlkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjM3OTM5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlbHRhIFBvaW50ZXJzOiBCdWZmZXIgT3ZlcmZsb3cgQ2hlY2tzIFdpdGhvdXQgdGhlIENoZWNrcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3MudnUubmxcXC9+aGVyYmVydGJcXC9kb3dubG9hZFxcL3BhcGVyc1xcL2RlbHRhLXBvaW50ZXJzX2V1cm9zeXMxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5MTU5NTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBnZW5lcmFsIG1lbXJpc3Rvci1iYXNlZCBwYXJ0aWFsIGRpZmZlcmVudGlhbCBlcXVhdGlvbiBzb2x2ZXJcIixcbiAgICAgICAgXCJzY29yZVwiOiAyNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cyLmVjZS5yb2NoZXN0ZXIuZWR1XFwvfnhpZ3VvXFwvZ29tYWMxNS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2NjI4NjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBGb3JtYWwgQXBvbG9neSBmb3IgTWV0YXBoeXNpY3MgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGhpbHBhcGVycy5vcmdcXC9hcmNoaXZlXFwvQkFSQUZBLTYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzM5MzExXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXBpbGluZyBtYWNoaW5lIGxlYXJuaW5nIHByb2dyYW1zIHZpYSBoaWdoLWxldmVsIHRyYWNpbmcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnN5c21sLmNjXFwvZG9jXFwvMTQ2LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODUwMDc4NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJLbnV0IFdpY2tzZWxsOiB0aGUgQmlydGggb2YgTW9kZXJuIE1vbmV0YXJ5IFBvbGljeSAoMjAwNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmRhbGxhc2ZlZC5vcmdcXC9+XFwvbWVkaWFcXC9kb2N1bWVudHNcXC9yZXNlYXJjaFxcL2VpXFwvZWkwNDAxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODU0MDE0OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJWb2xhdGlsaXR5IGFuZCB0aGUgQWxjaGVteSBvZiBSaXNrIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3N0YXRpYzEuc3F1YXJlc3BhY2UuY29tXFwvc3RhdGljXFwvNTU4MWYxN2VlNGIwMWY1OWMyYjE1MTNhXFwvdFxcLzU5ZWExNmY3ZTVkZDViMjMwNjNhMzE1NFxcLzE1MDg1MTM1MzM1NzdcXC9BcnRlbWlzX1ZvbGF0aWxpdHkrYW5kK3RoZStBbGNoZW15K29mK1Jpc2tfMjAxNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0MDk2MDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTGVha2FnZS1SZXNpbGllbnQgQ2xpZW50LVNpZGUgRGVkdXBsaWNhdGlvbiBvZiBFbmNyeXB0ZWQgRGF0YSBpbiBDbG91ZCBTdG9yYWdlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VwcmludC5pYWNyLm9yZ1xcLzIwMTFcXC81MzgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTkzNzk2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkVuZ2luZWVyaW5nIGFuZCBTb2Z0d2FyZSBFbmdpbmVlcmluZyAoMjAxMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9tY3Mub3Blbi5hYy51a1xcL21qNjY1XFwvRm9TRVp1cmljaDIwMTAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTI1MzgzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkR0aHJlYWRzOiBFZmZpY2llbnQgRGV0ZXJtaW5pc3RpYyBNdWx0aXRocmVhZGluZyAoMjAxMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9wZW9wbGUuY3Mua3N1LmVkdVxcL35kYW5pZWx3YW5nXFwvSW52ZXN0aWdhdGlvblxcL1N5c3RlbV9TZWN1cml0eVxcL2R0aHJlYWRzLXNvc3AxMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NTY3NzRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSGFyZHdhcmUgTWFza2luZywgUmV2aXNpdGVkIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5lbXNlYy5ydWIuZGVcXC9tZWRpYVxcL2NyeXB0b1xcL3Zlcm9lZmZlbnRsaWNodW5nZW5cXC8yMDE4XFwvMDRcXC8xNlxcL1BETl9NYXNraW5nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODE1NDIzMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgU3RhdGUgb2YgdGhlIFRjbFF1YWRjb2RlIGNvbXBpbGVyICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudGNsLnRrXFwvY29tbXVuaXR5XFwvdGNsMjAxN1xcL2Fzc2V0c1xcL3RhbGsxMDFcXC9QYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxNzk5NzRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTXVsdGlwbGUgTGluZWFyIFJlZ3Jlc3Npb24gKDIwMTIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbWV6ZXlsYWIuY2IuYnNjYi5jb3JuZWxsLmVkdVxcL2xhYm1lbWJlcnNcXC9kb2N1bWVudHNcXC9zdXBwbGVtZW50JTIwNSUyMC0lMjBtdWx0aXBsZSUyMHJlZ3Jlc3Npb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Nzg3NjE1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlhEUDogMS41IHllYXJzIGluIHByb2R1Y3Rpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC92Z2VyLmtlcm5lbC5vcmdcXC9scGNfbmV0MjAxOF90YWxrc1xcL0xQQ19YRFBfU2hpcm9rb3ZfdjIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDkzMzA0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBFYXJseSBIaXN0b3J5IG9mIFByb2dyYW1taW5nIExhbmd1YWdlcyAoMTk3NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9iaXRzYXZlcnMudHJhaWxpbmctZWRnZS5jb21cXC9wZGZcXC9zdGFuZm9yZFxcL2NzX3RlY2hSZXBvcnRzXFwvU1RBTi1DUy03Ni01NjJfRWFybHlEZXZlbFBnbWdMYW5nX0F1Zzc2LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzczNTg2NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSYWlCbG9ja3M6IEEgRmVlbGVzcyBEaXN0cmlidXRlZCBDcnlwdG9jdXJyZW5jeSBOZXR3b3JrIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3JhaWJsb2Nrcy5uZXRcXC9tZWRpYVxcL1JhaUJsb2Nrc19XaGl0ZXBhcGVyX19FbmdsaXNoLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA1MzA0OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgQmFkIElzIFNlbGZpc2ggUm91dGluZz8gKDIwMDEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvdGhlb3J5LnN0YW5mb3JkLmVkdVxcL350aW1cXC9wYXBlcnNcXC9yb3V0aW5nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc0MTY0MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGluZ3MgV2UgTmVlZCB0byBLbm93IEFib3V0IFRlY2hub2xvZ2ljYWwgQ2hhbmdlICgxOTk4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dlYi5jcy51Y2RhdmlzLmVkdVxcL35yb2dhd2F5XFwvY2xhc3Nlc1xcLzE4OFxcL21hdGVyaWFsc1xcL3Bvc3RtYW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTIyMzE5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZhc3QtUGF0aCBMb29wIFVucm9sbGluZyBvZiBOb24tQ291bnRlZCBMb29wcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3Nzdy5qa3UuYXRcXC9HZW5lcmFsXFwvU3RhZmZcXC9MZW9wb2xkc2VkZXJcXC9tYW5sYW5nMjAxOC1mYXN0X3BhdGhfdW5yb2xsaW5nX2F1dGhvcnByZXByaW50LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzY0MzgwMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgdG8gdXNlIDEwMDAgcmVnaXN0ZXJzICgxOTc5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NhbHRlY2hjb25mLmxpYnJhcnkuY2FsdGVjaC5lZHVcXC8yMDBcXC8xXFwvUmljaGFyZExTaXRlcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwOTg1ODlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSFNOLTEwMDAgTnVjbGVhciBFdmVudCBEZXRlY3RvciAoMjAwNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubWF4d2VsbC5jb21cXC9pbWFnZXNcXC9kb2N1bWVudHNcXC9oc24xMDAwX3JldjMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTMyNTM2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNwZWVjaCBJbnRlbGxlZ2liaWxpdHkgaW4gTmF2YWwgQWlyY3JhZnQgUmFkaW9zICgxOTcyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5kdGljLm1pbFxcL2R0aWNcXC90clxcL2Z1bGx0ZXh0XFwvdTJcXC83NDgyMDIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTM0NDgwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJlYWxpemFiaWxpdHkgb2YgR3JhcGhzICgyMDA4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2ZhY3VsdHkuYmFyZC5lZHVcXC9tYmVsa1xcL0Rpc2NyZXRlTWF0aERheVRhbGsucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTU2NTg5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBVbnJlYXNvbmFibGUgRWZmZWN0aXZlbmVzcyBvZiBEYXRhICgyMDA5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zdGF0aWMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXFwvbWVkaWFcXC9yZXNlYXJjaC5nb29nbGUuY29tXFwvZW5cXC9cXC9wdWJzXFwvYXJjaGl2ZVxcLzM1MTc5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA5NjE4NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHb29kIElkZWFzLCBUaHJvdWdoIHRoZSBMb29raW5nIEdsYXNzICgyMDA1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuaW5mLmV0aHouY2hcXC9wZXJzb25hbFxcL3dpcnRoXFwvQXJ0aWNsZXNcXC9Hb29kSWRlYXNfb3JpZ0ZpZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczMzExNjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT24tQ2hpcCBJbnRlcmNvbm5lY3Rpb24gQXJjaGl0ZWN0dXJlIG9mIHRoZSBUaWxlIFByb2Nlc3NvciAoMjAwNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnByaW5jZXRvbi5lZHVcXC9+d2VudHpsYWZcXC9kb2N1bWVudHNcXC9XZW50emxhZmYuMjAwNy5JRUVFX01pY3JvLlRpbGVyYS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NDE5NzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWlsbGlvbiBEb2xsYXIgUHJvYmxlbXMgKDIwMDApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm1hdGguYnVmZmFsby5lZHVcXC9+c3d3XFwvMHBhcGVyc1xcL21pbGxpb24uYnVjay5wcm9ibGVtcy5taS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwMDUxODNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmVhbCB3b3JsZCBETlNTRUMrREFORSBmb3Igc2VjdXJlIGludGVyLWRvbWFpbiBtYWlsIHRyYW5zcG9ydCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zdGF0aWMucHRibC5jb1xcL3N0YXRpY1xcL2F0dGFjaG1lbnRzXFwvMTY5MzE5XFwvMTUyMDkwNDY5Mi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY2MTc4OTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRm91bnRhaW4gY29kZXMgKDIwMDUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2RvY3Muc3dpdHplcm5ldC5jb21cXC9wZW9wbGVcXC9lbWluLWdhYnJpZWx5YW5cXC8wNjAxMTItY2FwaWxsYXJ5LXJlZmVyZW5jZXNcXC9yZWZcXC9NYWNLYXkwNS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzODUzODZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBRdWljayBSZWZlcmVuY2UgdG8gQWlyZmllbGQgU3RhbmRhcmRzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5mYWEuZ292XFwvYWlycG9ydHNcXC9zb3V0aGVyblxcL2FpcnBvcnRfc2FmZXR5XFwvcGFydDEzOV9jZXJ0XFwvbWVkaWFcXC9hc28tYWlyZmllbGQtc3RhbmRhcmRzLXF1aWNrLXJlZmVyZW5jZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0OTI5MzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFNJR0FCQVxcL0VDTSBJSSBDaXBoZXIgTWFjaGluZTogXFx1MjAxY0EgQmVhdXRpZnVsIElkZWFcXHUyMDFkICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubnNhLmdvdlxcL2Fib3V0XFwvY3J5cHRvbG9naWMtaGVyaXRhZ2VcXC9oaXN0b3JpY2FsLWZpZ3VyZXMtcHVibGljYXRpb25zXFwvcHVibGljYXRpb25zXFwvYXNzZXRzXFwvZmlsZXNcXC9zaWdhYmEtZWNtLWlpXFwvVGhlX1NJR0FCQV9FQ01fQ2lwaGVyX01hY2hpbmVfQV9CZWF1dGlmdWxfSWRlYTMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTQ5ODk3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZpbmFsIFJlcG9ydCBvbiB0aGUgQXVndXN0IDE0LCAyMDAzIEJsYWNrb3V0ICgyMDA0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZW5lcmd5LmdvdlxcL3NpdGVzXFwvcHJvZFxcL2ZpbGVzXFwvb2Vwcm9kXFwvRG9jdW1lbnRzYW5kTWVkaWFcXC9CbGFja291dEZpbmFsLVdlYi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxNjgzMzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTmV1cm9sb2d5IGluIEFuY2llbnQgRmFjZXMgKDIwMDEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5uY2JpLm5sbS5uaWguZ292XFwvcG1jXFwvYXJ0aWNsZXNcXC9QTUMxNzM3Mjg3XFwvcGRmXFwvdjA3MHAwMDUyNC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxMTgzODdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiWmlwZlxcdTIwMTlzIExhdyBpbiBQYXNzd29yZHMgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd2FuZ2RpbmdnLndlZWJseS5jb21cXC91cGxvYWRzXFwvMlxcLzBcXC8zXFwvNlxcLzIwMzY2OTg3XFwvaWVlZXRpZnMxN19maW5hbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwNjIxMzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRG9wcGVsZ1xcdTAwZTRuZ2VyIEZpbmRlcjogVGFraW5nIFN0eWxvbWV0cnkgdG8gdGhlIFVuZGVyZ3JvdW5kICgyMDE0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cxLmljc2kuYmVya2VsZXkuZWR1XFwvfnNhZGlhXFwvcGFwZXJzXFwvb2FrbGFuZDIwMTQtdW5kZXJncm91bmQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzI4MjcwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkh5YnJpZCBGaWVsZC1FZmZlY3QgVHJhbnNpc3RvcnMgQmFzZWQgb24gQ2VsbHVsb3NlIEZpYmVyIFBhcGVyICgyMDA4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9ydW4udW5sLnB0XFwvYml0c3RyZWFtXFwvMTAzNjJcXC8zMjQyXFwvMVxcL0ZvcnR1bmF0b18yMDA4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODUyMDc2N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgUG90ZW50aW9tZXRlciBIYW5kYm9vayAoMTk3NSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmJvdXJucy5jb21cXC9wZGZzXFwvT25saW5lUG90ZW50aW9tZXRlckhhbmRib29rLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM5MTA3NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTdHJvbmdseSBUeXBlZCBIZXRlcm9nZW5lb3VzIENvbGxlY3Rpb25zICgyMDA0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL29rbWlqLm9yZ1xcL2Z0cFxcL0hhc2tlbGxcXC9ITGlzdC1leHQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDA0NzA4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhhY2tpbmcgY2hlbWljYWwgcGxhbnRzIGZvciBjb21wZXRpdGlvbiBhbmQgZXh0b3J0aW9uICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYmxhY2toYXQuY29tXFwvZG9jc1xcL3VzLTE1XFwvbWF0ZXJpYWxzXFwvdXMtMTUtS3JvdG9maWwtUm9ja2luZy1UaGUtUG9ja2V0LUJvb2stSGFja2luZy1DaGVtaWNhbC1QbGFudC1Gb3ItQ29tcGV0aXRpb24tQW5kLUV4dG9ydGlvbi13cC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2OTI5MDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcGlsZWQgYW5kIFZlY3Rvcml6ZWQgUXVlcmllcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy52bGRiLm9yZ1xcL3B2bGRiXFwvdm9sMTFcXC9wMjIwOS1rZXJzdGVuLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA4MTQ3N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRWZmZWN0IG9mIFpvbmluZyBvbiBIb3VzaW5nIFByaWNlcyBcXHUyMDEzIFJlc2VhcmNoIGZyb20gQXVzdHJhbGlhJ3MgUmVzZXJ2ZSBCYW5rIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5yYmEuZ292LmF1XFwvcHVibGljYXRpb25zXFwvcmRwXFwvMjAxOFxcL3BkZlxcL3JkcDIwMTgtMDMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NTcxOTk2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlYnVnZ2luZyBEaXN0cmlidXRlZCBTeXN0ZW1zIFdpdGggV2h5LUFjcm9zcy1UaW1lIFByb3ZlbmFuY2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbXdoaXR0YWtlci5naXRodWIuaW9cXC9wdWJsaWNhdGlvbnNcXC93YXRfU09DQzE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODE5MzkyMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNYXRoZW1hdGljcyBhcHBsaWVkIHRvIGRyZXNzbWFraW5nICgxOTkzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubG1zLmFjLnVrXFwvc2l0ZXNcXC9sbXMuYWMudWtcXC9maWxlc1xcLzE5OTQlMjBNYXRoZW1hdGljcyUyMGFwcGxpZWQlMjB0byUyMGRyZXNzbWFraW5nJTIwJTI4cHJlcHJpbnQlMjkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4Mjk4NTg2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBQc3ljaG9sb2d5IG9mIFNlY3VyaXR5ICgyMDA4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuc2NobmVpZXIuY29tXFwvYWNhZGVtaWNcXC9wYXBlcmZpbGVzXFwvcGFwZXItcHN5Y2hvbG9neS1vZi1zZWN1cml0eS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5NTg1NjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFBvc3RncmVzIFJ1bGUgTWFuYWdlciAoMTk4OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9kYi5jcy5iZXJrZWxleS5lZHVcXC9wYXBlcnNcXC90c2U4OC1ydWxlbWdyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU4MTg4MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGYWlsdXJlIFJhdGVzIGluIEludHJvZHVjdG9yeSBQcm9ncmFtbWluZyAoMjAwNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC91c2Vycy1jcy5hdS5ka1xcL21pY1xcL3B1YmxpY2F0aW9uc1xcL2pvdXJuYWxcXC8yNS0tYnVsbGV0aW4yMDA3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODE4Njg0N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIFNjYWxhYmxlLCBDb21tb2RpdHkgRGF0YSBDZW50ZXIgTmV0d29yayBBcmNoaXRlY3R1cmUgKDIwMDgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY2NyLnNpZ2NvbW0ub3JnXFwvb25saW5lXFwvZmlsZXNcXC9wNjMtYWxmYXJlcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyOTAzODhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2FjaGUgTW9kZWxpbmcgYW5kIE9wdGltaXphdGlvbiBVc2luZyBNaW5pYXR1cmUgU2ltdWxhdGlvbnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9zeXN0ZW1cXC9maWxlc1xcL2NvbmZlcmVuY2VcXC9hdGMxN1xcL2F0YzE3LXdhbGRzcHVyZ2VyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODMxODYyOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJcyB0aGUgc2NpZW50aWZpYyBwYXBlciBmcmF1ZHVsZW50PyAoMTk2NCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9ibG9nLnRoZWdyYW5kbG9jdXMuY29tXFwvc3RhdGljXFwvbWlzY1xcL2lzX3RoZV9zY2llbnRpZmljX3BhcGVyX2ZyYXVkdWxlbnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjI0Nzg3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZpdmUgZGVlcCBxdWVzdGlvbnMgaW4gY29tcHV0aW5nICgyMDA4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jcy5jbXUuZWR1XFwvfndpbmdcXC9wdWJsaWNhdGlvbnNcXC9XaW5nMDgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzU1NjA1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRpc2Nlcm5pbmcgdGhlIE91dC1PZi1PcmRlciBBZHZhbnRhZ2U6IElzIEl0IFNwZWN1bGF0aW9uIG9yIER5bmFtaXNtPyAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC96aWxsZXMuY3MuaWxsaW5vaXMuZWR1XFwvcGFwZXJzXFwvbWNmYXJsaW5fYXNwbG9zXzIwMTMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODgxMTMyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkludGVudGlvbmFsIEFjb3VzdGljIEludGVyZmVyZW5jZSBEYW1hZ2VzIEF2YWlsYWJpbGl0eSBhbmQgSW50ZWdyaXR5IGluIEhERHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc3Bxci5lZWNzLnVtaWNoLmVkdVxcL3BhcGVyc1xcL2JvbHRvbi1ibHVlLW5vdGUtSUVFRVNTUC0yMDE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzI5NTU5NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21wcmVoZW5kaW5nIFJpbmdhZHMgKDIwMTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNzLm94LmFjLnVrXFwvamVyZW15LmdpYmJvbnNcXC9wdWJsaWNhdGlvbnNcXC9yaW5nYWRzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzAwMTQ3OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIENvbXB1dGVyIFNjaWVudGlzdFxcdTIwMTlzIEd1aWRlIHRvIENlbGwgQmlvbG9neSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jcy5jbXUuZWR1XFwvfndjb2hlblxcL0d1aWRlVG9CaW9sb2d5LXNhbXBsZUNoYXB0ZXItcmVsZWFzZTEuNC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3Nzg0OTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTHVuYXIgTGFzZXIgUmFuZ2luZzogYSBjb250aW51aW5nIGxlZ2FjeSBvZiB0aGUgQXBvbGxvIHByb2dyYW0gKDE5OTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5ocS5uYXNhLmdvdlxcL2Fsc2pcXC9MUlJSLTk0LTAxOTMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzgwNTMyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlVuZGVyc3RhbmRpbmcgUmVkdWNlZC1Wb2x0YWdlIE9wZXJhdGlvbiBpbiBNb2Rlcm4gRFJBTSBEZXZpY2VzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnBkbC5jbXUuZWR1XFwvUERMLUZUUFxcL05WTVxcLzE3c2lnbWV0cmljc192b2x0cm9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODMwNzExMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCZXR0ZXIgZG9jdW1lbnRhdGlvbiBcXHUyMDEzIG9uIHRoZSB3ZWIgYW5kIGZvciBMaWJyZVNTTCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cub3BlbmJzZC5vcmdcXC9wYXBlcnNcXC9ldXJvYnNkY29uMjAxOC1tYW5kb2MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTEwMDMzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9wZW4tU291cmNlIEJpdHN0cmVhbSBHZW5lcmF0aW9uICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuaXNpLmVkdVxcL3NpdGVzXFwvZGVmYXVsdFxcL2ZpbGVzXFwvdXNlcnNcXC9uc3RlaW5lclxcL3NvbmktMjAxMy1iaXRzdHJlYW0tZmNjbTEzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ4ODAyMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDaGVycnktUGlja2luZyBhbmQgdGhlIFNjaWVudGlmaWMgTWV0aG9kICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jcy5jb2ZjLmVkdVxcL35ib3dyaW5nXFwvY2xhc3Nlc1xcL2NzY2klMjAzNjJcXC9kb2NzXFwvcDMyLW5ldmlsbGUtbmVpbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0OTIyNjFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29uc3RydWN0aW9uIG9mIHRoZSBUcmFuc3JlYWwgTnVtYmVycyBhbmQgQWxnZWJyYWljIFRyYW5zZmllbGRzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmlhZW5nLm9yZ1xcL0lKQU1cXC9pc3N1ZXNfdjQ2XFwvaXNzdWVfMVxcL0lKQU1fNDZfMV8wMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY3MzA0NTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ3J5cGtvIFdoaXRlIFBhcGVyOiBDcnlwdG9jb2xsZWN0aWJsZSBHYW1lIEVtcG93ZXJlZCBieSBHQU5zIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2NyeXBrby5haVxcL3N0YXRpY1xcL2ZpbGVzXFwvY3J5cGtvLXdoaXRlcGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTkwMzQ3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlR3byBjdXJpb3VzIGludGVncmFscyBhbmQgYSBncmFwaGljIHByb29mICgyMDE0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3NjaG1pZC13ZXJyZW4uY2hcXC9oYW5zcGV0ZXJcXC9wdWJsaWNhdGlvbnNcXC8yMDE0ZWxlbWF0aC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4ODMzNDlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiWG9vZG9vIGNvb2tib29rIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VwcmludC5pYWNyLm9yZ1xcLzIwMThcXC83NjcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODQ0NTQyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNhc3RTYW46IGVmZmljaWVudCBkZXRlY3Rpb24gb2YgYmFkIEMrKyBjYXN0cyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZG9jZHJvaWQubmV0XFwvSU5XWUJGN1xcL2Nhc3RzYW4tZXNvcmljczE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc4MzMxN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCZWFzdGx5IE51bWJlcnMgKDE5OTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Blb3BsZS5lZWNzLmJlcmtlbGV5LmVkdVxcL353a2FoYW5cXC90ZXN0c1xcL251bWJlYXN0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzAwNjA0MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJKdWxpYSBmb3IgUiBwcm9ncmFtbWVycyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuc3RhdC53aXNjLmVkdVxcL35iYXRlc1xcL0p1bGlhRm9yUlByb2dyYW1tZXJzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzcyMzk3N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgY2FzZSBmb3Igd3JpdGluZyBwYXBlcnMgaW4gZWNvbm9taWNzIHVzaW5nIGZhS2UgTGFUZVggW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZmFybWRvYy5pbGxpbm9pcy5lZHVcXC9pcndpblxcL3Jlc2VhcmNoXFwvVGhlX0Nhc2VfZm9yX0Zha2VfTGFUZVhfQm9keV9GZWIlMjAyMDE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjU5MjQwMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIaXN0b3J5IG9mIENvbWJpbmF0b3JpYWwgR2VuZXJhdGlvbiAoMjAwNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuYW50aXF1YXJrLmNvbVxcL2Jsb2dpbWdcXC9mYXNjNGIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2Mzk1MjIyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNjcmFwaW5vIFxcdTIwMTMgU2VsZi1zdXN0YWluYWJsZSByb2JvdCBmcm9tIGUtc2NyYXAgdXNpbmcgcmVuZXdhYmxlIGVuZXJneSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuc2NpZW5jZWRpcmVjdC5jb21cXC9zY2llbmNlXFwvYXJ0aWNsZVxcL3BpaVxcL1MyNDA1ODk2MzE4MzI4NTkzXFwvcGRmP21kNT1hYzdmYWUxNzQ3MTBkYTBhNTAzNTAyNmY4OGUwNTU5YiZwaWQ9MS1zMi4wLVMyNDA1ODk2MzE4MzI4NTkzLW1haW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4Njg3OTIzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkF0dGFjayBEaXJlY3RvcmllcywgTm90IENhY2hlczogU2lkZS1DaGFubmVsIEF0dGFja3MgaW4gYSBOb24tSW5jbHVzaXZlIFdvcmxkIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvaWFjb21hLmNzLnVpdWMuZWR1XFwvaWFjb21hLXBhcGVyc1xcL3NzcDE5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQwNzg1MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgVHJhbnNsdWNlbnQgRmlsZSBTZXJ2aWNlICgxOTg4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL21jdm95LmNvbVxcL2xtXFwvcGFwZXJzXFwvU3VuT1MudGZzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc0MzkzM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDcmltaW5hbCBMYXcgMi4wICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9nZW9yZ2V0b3dubGF3am91cm5hbC5vcmdcXC9hc3NldHNcXC9rb3ppbnNraS1hcmNwLXByZWZhY2UtOWE5OTBmMDhmM2YwMDY1NThlYWEwM2NjYzQ0MGQzMDc4ZjU4OTliMzQyNmVjNDdhYWVkYjg5YzYwNmNhZWFlNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY2MTY3MjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWFwIFByb2plY3Rpb25zIFxcdTIwMTMgQSBXb3JraW5nIE1hbnVhbCAoMTk4NykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcHVicy51c2dzLmdvdlxcL3BwXFwvMTM5NVxcL3JlcG9ydC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwOTkwMjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVnJhbmtlbkZ1enogXFx1MjAxMyBhIG11bHRpLXNlbnNvciwgbXVsdGktZ2VuZXJhdG9yIG11dGF0aW9uYWwgZnV6eiB0ZXN0aW5nIGVuZ2luZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9ndWlkb3ZyYW5rZW4uZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMThcXC8wN1xcL3ZyYW5rZW5mdXp6LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ2ODM3N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDYW4gbW9vbnMgaGF2ZSBtb29ucz8gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYXJ4aXYub3JnXFwvcGRmXFwvMTgxMC4wMzMwNC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyMTc2NDZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWFjaGluZSBMZWFybmluZyBvbiAyS0Igb2YgUkFNIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbWFuaWt2YXJtYS5vcmdcXC9wdWJzXFwva3VtYXIxNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyMzEyMzlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUXVhdGVybmlvbnMgYW5kIFJlZmxlY3Rpb25zICgxOTQ2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5tYXRoLnV0YWguZWR1XFwvfnB0cmFwYVxcL21hdGgtbGlicmFyeVxcL2NveGV0ZXJcXC9Db3hldGVyLVF1YXRlcm5pb25zLWFuZC1yZWZsZWN0aW9ucy1BTU0tMTk0Ni5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1MjU4MDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUGh5c2ljYWwgQWRkcmVzc2luZyBvbiBSZWFsIEhhcmR3YXJlIGluIElzYWJlbGxlXFwvSE9MIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Blb3BsZS5pbmYuZXRoei5jaFxcL3Ryb3Njb2VcXC9wdWJzXFwvYWNoZXJtYW5uX2l0cF8yMDE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM3Mzg5NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQcm9kdWN0IEV2YWx1YXRpb24gb2YgdGhlIFppbG9nIFo4MC1DVEMgKDE5NzkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvc21pdGhzb25pYW5jaGlwcy5zaS5lZHVcXC9pY2VcXC9PQ1JfU2NhblBFMTI1XFwvUEUxMjUoMTAzNzktSykucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzM5MjE0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgU3VydmV5IG9mIFJvbGxiYWNrLVJlY292ZXJ5IFByb3RvY29scyBpbiBNZXNzYWdlLVBhc3NpbmcgU3lzdGVtcyAoMjAwMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLnV0ZXhhcy5lZHVcXC9+bG9yZW56b1xcL3BhcGVyc1xcL1N1cnZleUZpbmFsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjg4NjE2NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFeGFtaW5pbmcgQ2hpbGRyZW5cXHUyMDE5cyBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdCBjb21wbGlhbmNlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BldHN5bXBvc2l1bS5vcmdcXC8yMDE4XFwvZmlsZXNcXC9wYXBlcnNcXC9pc3N1ZTNcXC9wb3BldHMtMjAxOC0wMDIxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjg0ODE0OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQ29tcGxleGl0eSBvZiBTb25ncyAoMTk3NykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9maXZlZG90cy5jb2UucHN1LmFjLnRoXFwvU29mdHdhcmUuY29lXFwvMjQyLTUzNV9BREFcXC9CYWNrZ3JvdW5kXFwvUmVhZGluZ3NcXC9rbnV0aF9zb25nX2NvbXBsZXhpdHkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDQ0NjAzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRpZmZlcmVudGlhYmxlIFByb2dyYW1taW5nIGZvciBJbWFnZSBQcm9jZXNzaW5nIGFuZCBEZWVwIExlYXJuaW5nIGluIEhhbGlkZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZW9wbGUuY3NhaWwubWl0LmVkdVxcL3R6dW1hb1xcL2dyYWRpZW50X2hhbGlkZVxcL2dyYWRpZW50X2hhbGlkZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5MjkxNDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIERlYmFzZW1lbnQgUHV6emxlOiBhbiBFc3NheSBvbiBNZWRpZXZhbCBNb25ldGFyeSBIaXN0b3J5ICgxOTk3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubWlubmVhcG9saXNmZWQub3JnXFwvcmVzZWFyY2hcXC9xclxcL3FyMjE0Mi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2OTIxNzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQW4gSVB2NiBVcGRhdGUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY29uZmVyZW5jZS5hcG5pYy5uZXRcXC80NlxcL2Fzc2V0c1xcL2ZpbGVzXFwvQVBOQzQwMlxcL0FuLUlQdjYtVXBkYXRlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk1NzUzMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZXZpc2l0aW5nIGEgU3VtbWVyIFZhY2F0aW9uOiBEaWdpdGFsIFJlc3RvcmF0aW9uIGFuZCBUeXBlc2V0dGVyIEZvcmVuc2ljcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5lcHJnLm9yZ1xcL3BhcGVyc1xcLzIwMnBhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA1MTUyMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDIFN0YW5kYXJkIFVuZGVmaW5lZCBCZWhhdmlvciB2cy4gV2l0dGdlbnN0ZWluIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnlvZGFpa2VuLmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxOFxcLzA1XFwvdWItMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxOTU3MTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTlkgQXR0b3JuZXkgR2VuZXJhbCBSZXBvcnQgb24gQ3J5dHBvY3VycmVuY3kgTWFya2V0IEludGVncml0eVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hZy5ueS5nb3ZcXC9zaXRlc1xcL2RlZmF1bHRcXC9maWxlc1xcL3ZtaWlfcmVwb3J0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODAxNzkyMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFdm9sdXRpb24gb2YgTXVsdGljZWxsdWxhciBDb21wdXRpbmc6IFBhcmFsbGVscyB3aXRoIE11bHRpY2VsbHVsYXIgTGlmZSAoMjAwOSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZXZvbHV0aW9ub2Zjb21wdXRpbmcub3JnXFwvQmlybWluZ2hhbTA5U2VtaW5hci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2NTQ5ODlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRW50ZXJwcmlzZSBPYmplY3RzIEZyYW1ld29yayBEZXZlbG9wZXJcXHUyMDE5cyBHdWlkZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9kZXZlbG9wZXIuYXBwbGUuY29tXFwvbGlicmFyeVxcL2FyY2hpdmVcXC9kb2N1bWVudGF0aW9uXFwvTGVnYWN5VGVjaG5vbG9naWVzXFwvV2ViT2JqZWN0c1xcL1dlYk9iamVjdHNfNC4wXFwvU3lzdGVtXFwvRG9jdW1lbnRhdGlvblxcL0RldmVsb3BlclxcL0VudGVycHJpc2VPYmplY3RzXFwvR3VpZGVcXC9FT0ZEZXZHdWlkZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1OTE1NTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVVNQVE8gaXNzdWVzIDEwIG1pbGxpb250aCBwYXRlbnQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvMTBtaWxsaW9ucGF0ZW50cy51c3B0by5nb3ZcXC9kb2NzXFwvcGF0ZW50MTBtaWxsaW9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM0OTkzOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgS2V5aG9sZSBQcm9ibGVtICgyMDAyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5hcmlzdGVpYS5jb21cXC9US1BcXC9kcmFmdFBhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODI5MzI2M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBYmVsJ3MgVGhlb3JlbSBpbiBQcm9ibGVtcyBhbmQgU29sdXRpb25zICgyMDA0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5tYXRocy5lZC5hYy51a1xcL352MXJhbmlja1xcL3BhcGVyc1xcL2FiZWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MjA5NjM1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlc2lnbiBvZiB0aGUgQnVycm91Z2hzIEIxNzAwICgxOTcyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZGZzLnNlbWFudGljc2Nob2xhci5vcmdcXC9jZmY2XFwvNmIyZWJhMjBhNzE3MmM1ZGIyODFlODQ2MDAwNDllMWU4MmZlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzExNDQ4MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRGlmZmljdWx0eSBvZiBGYWtpbmcgRGF0YSAoMTk5OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cua2t1bml5dWsuY29tXFwvTWF0aDExOUZha2luZ0RhdGEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDIwMjI2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgQnJpZWYgSGlzdG9yeSBvZiBKdXN0LUluLVRpbWUgKDIwMDMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZWVjcy51Y2YuZWR1XFwvfmRjbVxcL1RlYWNoaW5nXFwvQ09UNDgxMC1TcHJpbmcyMDExXFwvTGl0ZXJhdHVyZVxcL0p1c3RJblRpbWVDb21waWxhdGlvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2OTM1MDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEN1bHQgb2YgdGhlIEJvdW5kIFZhcmlhYmxlOiBJQ0ZQIFByb2dyYW1taW5nIENvbnRlc3QgKDIwMDYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYm91bmR2YXJpYWJsZS5vcmdcXC9wcmVzc1xcL3RyLTA2LTE2My5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3MDgzNjZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIENpdmljIExhYm9yIG9mIE9ubGluZSBNb2RlcmF0b3JzICgyMDE2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2Jsb2dzLm9paS5veC5hYy51a1xcL2lwcC1jb25mZXJlbmNlXFwvc2l0ZXNcXC9pcHBcXC9maWxlc1xcL2RvY3VtZW50c1xcL0pOTS1UaGVfQ2l2aWNfTGFib3Jfb2ZfT25saW5lX01vZGVyYXRvcnNfX0ludGVybmV0X1BvbGl0aWNzX1BvbGljeV8ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTA2NzQ2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRlY2huaWNhbCBTcGVjaWZpY2F0aW9uIGZvciB0aGUgRGVsaXZlcnkgb2YgVGVsZXZpc2lvbiBQcm9ncmFtcyB0byB0aGUgQkJDIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZHBwLWFzc2V0cy5zMy5hbWF6b25hd3MuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC9zcGVjc1xcL2JiY1xcL1RlY2huaWNhbERlbGl2ZXJ5U3RhbmRhcmRzQkJDRmlsZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyMDQwOTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVHJpYnV0ZSB0byBWbGFkaW1pciBBcm5vbGQgKDIwMTIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmFtcy5vcmdcXC9ub3RpY2VzXFwvMjAxMjAzXFwvcnR4MTIwMzAwMzc4cC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMzA5MjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmFsY29uIEhlYXZ5IERlbW9uc3RyYXRpb24gTWlzc2lvbiAob3ZlcnZpZXcgYW5kIHRpbWVsaW5lKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5zcGFjZXguY29tXFwvc2l0ZXNcXC9zcGFjZXhcXC9maWxlc1xcL2ZhbGNvbmhlYXZ5cHJlc3NraXRfdjEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzE3MzA0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBtaXNzaW5nIGxpbms6IGV4cGxhaW5pbmcgRUxGIHN0YXRpYyBsaW5raW5nLCBzZW1hbnRpY2FsbHkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9kb21pbmljLW11bGxpZ2FuLmNvLnVrXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDExXFwvMDhcXC9vb3BzbGEtZWxmLWxpbmtpbmctMjAxNi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3MTMyMzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmVzcG9uc2UgdGltZSBpbiBtYW4tY29tcHV0ZXIgY29udmVyc2F0aW9uYWwgdHJhbnNhY3Rpb25zICgxOTY4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY29tcHV0ZXIub3JnXFwvY3NkbFxcL3Byb2NlZWRpbmdzXFwvYWZpcHNcXC8xOTY4XFwvNTA3MlxcLzAwXFwvNTA3MjAyNjcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODA5ODQ2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJpZ29yb3VzIEJlbmNobWFya2luZyBpbiBSZWFzb25hYmxlIFRpbWUgKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2thci5rZW50LmFjLnVrXFwvMzM2MTFcXC83XFwvcGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODQzODA4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlR4RlM6IExldmVyYWdpbmcgRmlsZS1TeXN0ZW0gQ3Jhc2ggQ29uc2lzdGVuY3kgdG8gUHJvdmlkZSBUcmFuc2FjdGlvbnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY3MudXRleGFzLmVkdVxcLyU3RXZpamF5XFwvcGFwZXJzXFwvYXRjMTgtdHhmcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4MDcyNzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTmV0d29ya2luZyBOYW1lZCBDb250ZW50ICgyMDA5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jb25mZXJlbmNlcy5zaWdjb21tLm9yZ1xcL2NvLW5leHRcXC8yMDA5XFwvcGFwZXJzXFwvSmFjb2Jzb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTMzNTQzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBncmFuZCBjaGFsbGVuZ2VzIG9mIFxcdTIwMWNTY2llbmNlIFJvYm90aWNzXFx1MjAxZCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5uYW5vc2NpZW5jZS5nYXRlY2guZWR1XFwvcGFwZXJcXC8yMDE4XFwvMThfU1JfMDEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTYxNjQyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldoYXQgaXMgdGhlIE1vbnN0ZXI/ICgyMDAyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5hbXMub3JnXFwvbm90aWNlc1xcLzIwMDIwOVxcL3doYXQtaXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDgzOTI5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBPbi1MaW5lIEVuY3ljbG9wZWRpYSBvZiBJbnRlZ2VyIFNlcXVlbmNlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYW1zLm9yZ1xcL2pvdXJuYWxzXFwvbm90aWNlc1xcLzIwMTgwOVxcL3Jub3RpLXAxMDYyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODAxNTQ5M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgTW9zdCBJbmZsdWVudGlhbCBQYXBlciBHZXJhcmQgU2FsdG9uIE5ldmVyIFdyb3RlICgyMDA0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuaWRlYWxzLmlsbGlub2lzLmVkdVxcL2JpdHN0cmVhbVxcL2hhbmRsZVxcLzIxNDJcXC8xNjk3XFwvRHViaW43NDg3NjQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjAxNTk3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFwcGx5aW5nIGF1Y3Rpb24gbWVjaGFuaXNtcyB0byBtZWV0aW5nIHNjaGVkdWxpbmcgKDIwMTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5zZWFzLmhhcnZhcmQuZWR1XFwvc2l0ZXNcXC9kZWZhdWx0XFwvZmlsZXNcXC9maWxlc1xcL2FyY2hpdmVkXFwvWHUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzkwMTA1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFuIEludHJvZHVjdGlvbiB0byBJbmZvcm1hdGlvbiBTZWN1cml0eSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9udmxwdWJzLm5pc3QuZ292XFwvbmlzdHB1YnNcXC9TcGVjaWFsUHVibGljYXRpb25zXFwvTklTVC5TUC44MDAtMTJyMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0NTg1NzdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2F0ZWdvcmlmeWluZyBjYXJkaW5hbCBhcml0aG1ldGljIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm1hdGguamh1LmVkdVxcL35lcmllaGxcXC9hcml0aG1ldGljLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzcwMjIyOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCIqQU5ZKiBBbmRyb2lkIG1hbnVmYWN0dXJlciBtb25pdG9ycyB1c2VycyB3aXRob3V0IGNvbnNlbnQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9lcHJpbnRzLm5ldHdvcmtzLmltZGVhLm9yZ1xcLzE3NDRcXC8xXFwvdHJhY2tlcnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjM1MDYyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxlZ2FsIEN1cmlvc2l0aWVzOiBGYWN0IG9yIEZhYmxlPyAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubGF3Y29tLmdvdi51a1xcL2FwcFxcL3VwbG9hZHNcXC8yMDE1XFwvMDNcXC9MZWdhbF9PZGRpdGllcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2NTQ0MzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IFdlIENyYWNrZWQgdGhlIENvZGUgQm9vayBDaXBoZXJzICgyMDAwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NvZGVib29rLm9yZ1xcL2NvZGVib29rX3NvbHV0aW9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY5MjQ3N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbGZyZWQgU3RpZWdsaXR6J3MgTGFudGVybiBTbGlkZXM6IEhpc3RvcnksIFRlY2huaXF1ZSBhbmQgQW5hbHlzaXMgKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5yZXNlYXJjaGdhdGUubmV0XFwvcHJvZmlsZVxcL1Jvc2luYV9IZXJyZXJhX0dhcnJpZG9cXC9wdWJsaWNhdGlvblxcLzI2NjI1MTM5Nl9BbGZyZWRfU3RpZWdsaXR6JTI3c19MYW50ZXJuX1NsaWRlc19IaXN0b3J5X1RlY2huaXF1ZV9hbmRfVGVjaG5pY2FsX0FuYWx5c2lzXFwvbGlua3NcXC81NGY4MWYyOTBjZjJjY2ZmZTlkY2QzNDlcXC9BbGZyZWQtU3RpZWdsaXR6cy1MYW50ZXJuLVNsaWRlcy1IaXN0b3J5LVRlY2huaXF1ZS1hbmQtVGVjaG5pY2FsLUFuYWx5c2lzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzkwNTgyOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZW1lbWJlciB0aGUgVmFzYSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL29wZW4tc3RkLm9yZ1xcL0pUQzFcXC9TQzIyXFwvV0cyMVxcL2RvY3NcXC9wYXBlcnNcXC8yMDE4XFwvcDA5NzdyMC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxNzIwNTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVzaWduIGFuZCBFdmFsdWF0aW9uIG9mIGEgQ29udGludW91cyBDb25zaXN0ZW5jeSBNb2RlbCBmb3IgUmVwbGljYXRlZCBTZXJ2aWNlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL2xlZ2FjeVxcL2V2ZW50XFwvb3NkaTAwXFwvZnVsbF9wYXBlcnNcXC95dXZhaGRhdFxcL3l1dmFoZGF0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjgzMTgyNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUYW1pbmcgUGVyZm9ybWFuY2UgVmFyaWFiaWxpdHkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9zeXN0ZW1cXC9maWxlc1xcL29zZGkxOC1tYXJpY3EucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTY5Mzg1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdMTCBQYXJzaW5nIHdpdGggRmxleGlibGUgQ29tYmluYXRvcnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcHVyZS5yb3lhbGhvbGxvd2F5LmFjLnVrXFwvcG9ydGFsXFwvZmlsZXNcXC8zMTE2OTU2NVxcL3BhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM5OTg5OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZXByZXNlbnRpbmcgQ29udHJvbCBpbiB0aGUgUHJlc2VuY2Ugb2YgT25lLVNob3QgQ29udGludWF0aW9ucyAoMTk5NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLmluZGlhbmEuZWR1XFwvfmR5YlxcL3B1YnNcXC9jYWxsMWNjLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjk2MDc0MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHcmFuZCBQd25pbmcgVW5pdDogQWNjZWxlcmF0aW5nIE1pY3JvYXJjaGl0ZWN0dXJhbCBBdHRhY2tzIHdpdGggdGhlIEdQVSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudnVzZWMubmV0XFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE4XFwvMDVcXC9nbGl0Y2gucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTg0ODY4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlByaXZhY3kgYnkgRGVzaWduICgyMDEwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9saW5rLnNwcmluZ2VyLmNvbVxcL2NvbnRlbnRcXC9wZGZcXC8xMC4xMDA3JTJGczEyMzk0LTAxMC0wMDU1LXgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MjYyODI0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlN0YXR1cyBvZiBjb2xsZWN0aXZlbHkgYmFyZ2FpbmVkIGJlbmVmaXRzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubWlsbGltYW4uY29tXFwvdXBsb2FkZWRGaWxlc1xcL2luc2lnaHRcXC8yMDE4XFwvc3RhdHVzLWNvbGxlY3RpdmVseS1iYXJnYWluZWQtYmVuZWZpdHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzQxMjQ5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBlcnJvcnMsIGluc2lnaHRzIGFuZCBsZXNzb25zIG9mIGZhbW91cyBBSSBwcmVkaWN0aW9ucyAoMjAxNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5maGkub3guYWMudWtcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcL0ZBSUMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTUzNTg3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBvbGl0aWNzIGluIHRoZSBGYWNlYm9vayBFcmE6IEV2aWRlbmNlIGZyb20gdGhlIDIwMTYgVVMgUHJlc2lkZW50aWFsIEVsZWN0aW9ucyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3dhcndpY2suYWMudWtcXC9mYWNcXC9zb2NcXC9lY29ub21pY3NcXC9yZXNlYXJjaFxcL2NlbnRyZXNcXC9jYWdlXFwvbWFuYWdlXFwvcHVibGljYXRpb25zXFwvMzg5LTIwMThfcmVkb2Fuby5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0NzIxODlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBNaW5pbWFsIFpaU3RydWN0dXJlIE5hdmlnYXRvciBVc2luZyBhIFppZ1phZy1TdHlsZSBJbnRlcmZhY2UgKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubG9yZC1lbmtpLm5ldFxcL1ppZ1phZ1Byb2plY3QucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzA4MTExXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJld3JpdGUgQ29tYmluYXRvcnMgaW4gSGFza2VsbCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZGV2LnN0ZXBoZW5kaWVobC5jb21cXC9yZXdyaXRlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA4NTM1M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNYXRhIEhhcmkgd2l0aCBhIENsb2Nrd29yayBFeWUsIEFsbGlnYXRvcnMgaW4gdGhlIFNld2VyICgxOTYzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZ3JhcGhpY3M4Lm55dGltZXMuY29tXFwvcGFja2FnZXNcXC9wZGZcXC9ib29rc1xcL1B5bmNob25fVi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY3ODIzNjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmFjaWxpdGF0aW9uIFRvb2xzIGZvciBNZWV0aW5ncyBhbmQgV29ya3Nob3BzICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3NlZWRzZm9yY2hhbmdlLm9yZy51a1xcL3Rvb2xzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODE0NjkwNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgcmVncmVzcyBhcmd1bWVudCBhZ2FpbnN0IENhcnRlc2lhbiBza2VwdGljaXNtICgyMDEyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvaW5kaXZpZHVhbC51dG9yb250by5jYVxcL2ptd2lsc29uXFwvV2lsc29uLVRoZS1SZWdyZXNzLUFyZ3VtZW50LUFnYWluc3QtQ2FydGVzaWFuLVNrZXB0aWNpc20ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTkyMTAyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJlc291cmNlIG1hbmFnZW1lbnQ6IExpbnV4IGtlcm5lbCBOYW1lc3BhY2VzIGFuZCAgY2dyb3VwcyAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5oYWlmdXgub3JnXFwvbGVjdHVyZXNcXC8yOTlcXC9uZXRMZWM3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODc2ODk5MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb3VudGVyIEN1bHR1cmU6IFRvd2FyZHMgYSBIaXN0b3J5IG9mIEdyZWVrIE51bWVyYWN5ICgyMDAyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd29ycnlkcmVhbS5jb21cXC9yZWZzXFwvTmV0eiUyMC0lMjBDb3VudGVyJTIwQ3VsdHVyZSUyMC0lMjBUb3dhcmRzJTIwYSUyMEhpc3RvcnklMjBvZiUyMEdyZWVrJTIwTnVtZXJhY3kucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTU0Njk1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbGxhcHNpbmcgYSBSZWZsZWN0aXZlIFRvd2VyICgyMDE2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbGFtcHd3dy5lcGZsLmNoXFwvfmFtaW5cXC9kb2NcXC9sbXMtYmxhY2sucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzUxMDg0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFJIGFuZCBJbnRlcm5hdGlvbmFsIFRyYWRlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubmJlci5vcmdcXC9wYXBlcnNcXC93MjQyNTQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzE2NjM1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1ha2luZyBcXHUyMDFjUHVzaCBvbiBHcmVlblxcdTIwMWQgYSBSZWFsaXR5ICgyMDE0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvc3lzdGVtXFwvZmlsZXNcXC9sb2dpblxcL2FydGljbGVzXFwvbG9naW5fMTQxMF8wNV9rbGVpbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5NTY1MDVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTGFuZCBTdXJ2ZXlpbmcgaW4gQW5jaWVudCBFZ3lwdCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5maWcubmV0XFwvcmVzb3VyY2VzXFwvcHJvY2VlZGluZ3NcXC9maWdfcHJvY2VlZGluZ3NcXC9jYWlyb1xcL3BhcGVyc1xcL3dzaHNfMDJcXC93c2hzMDJfMDJfcGF1bHNvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyMTUzMzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmFtYW51amFuIGdyYXBocyBpbiBjcnlwdG9ncmFwaHkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lcHJpbnQuaWFjci5vcmdcXC8yMDE4XFwvNTkzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzMxNjQ5NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQcmVjaXNlIGFuZCBTY2FsYWJsZSBEZXRlY3Rpb24gb2YgRG91YmxlLUZldGNoIEJ1Z3MgaW4gT1MgS2VybmVscyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy11c2Vycy5jcy51bW4uZWR1XFwvfmtqbHVcXC9wYXBlcnNcXC9kZWFkbGluZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxNTgyMjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV2lyZUd1YXJkOiBOZXh0IEdlbmVyYXRpb24gS2VybmVsIE5ldHdvcmsgVHVubmVsIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LndpcmVndWFyZC5jb21cXC9wYXBlcnNcXC93aXJlZ3VhcmQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjkwNTk4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgTmV3IFJlZnV0YXRpb24gb2YgVGltZSAoMTk0NykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZ3dlcm4ubmV0XFwvZG9jc1xcL2Jvcmdlc1xcLzE5NDctYm9yZ2VzLWFuZXdyZWZ1dGF0aW9ub2Z0aW1lLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQ4Mzc0MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNZXRob2QgYW5kIGFwcGFyYXR1cyBmb3IgY29udHJvbGxpbmcgZWxlY3RyaWMgY3VycmVudHMgKDE5MjUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGF0ZW50aW1hZ2VzLnN0b3JhZ2UuZ29vZ2xlYXBpcy5jb21cXC9mYVxcLzVkXFwvMzNcXC9lZDI3NjlkNDhmYWM0ZFxcL1VTMTc0NTE3NS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0NzM0NTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUGh5c2ljaWFucyBnaXZlIHBhdGllbnRzIGFuIGF2ZXJhZ2Ugb2YgMTEgc2Vjb25kcyBiZWZvcmUgY3V0dGluZyB0aGVtIG9mZiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2xpbmsuc3ByaW5nZXIuY29tXFwvY29udGVudFxcL3BkZlxcLzEwLjEwMDclMkZzMTE2MDYtMDE4LTQ1NDAtNS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1ODIwMDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiS29kYWsgUHJvZmVzc2lvbmFsIGRpZ2l0YWwgY2FtZXJhIHN5c3RlbXMgMTk4Ny0yMDA0IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubmlrb253ZWIuY29tXFwvZmlsZXNcXC9EQ1NfU3RvcnkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjA2MTcxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhhcmR3YXJlIE11bHRpdGhyZWFkZWQgVHJhbnNhY3Rpb25zIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9saWJlcnR5LnByaW5jZXRvbi5lZHVcXC9QdWJsaWNhdGlvbnNcXC9hc3Bsb3MxOF9obXR4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg2MDg3MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMaWZlIEJleW9uZCBEaXN0cmlidXRlZCBUcmFuc2FjdGlvbnM6IEFuIEFwb3N0YXRlXFx1MjAxOXMgT3BpbmlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYWRyaWFubWFycmlvdHQubmV0XFwvbG9nb3Nyb290XFwvcGFwZXJzXFwvTGlmZUJleW9uZFR4bnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTEzMzQ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgVXNlci1DZW50cmVkIEFwcHJvYWNoIHRvIEZ1bmN0aW9ucyBpbiBFeGNlbCAoMjAwMylcIixcbiAgICAgICAgXCJzY29yZVwiOiA3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubWljcm9zb2Z0LmNvbVxcL2VuLXVzXFwvcmVzZWFyY2hcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMTZcXC8wN1xcL2V4Y2VsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjU2MjMwMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRmxhdG5lc3Mgb2YgVS5TLiBTdGF0ZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5kaXNydXB0aXZlZ2VvLmNvbVxcL2Jsb2dcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMTRcXC8wOFxcL0ZsYXRNYXBfR2VvZ3JhcGhpY2FsUmV2aWV3X0RvYnNvbkNhbXBiZWxsXzIwMTNOb3YucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDMzOTA0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRocm93aGFtbWVyOiBSb3doYW1tZXIgQXR0YWNrcyBPdmVyIHRoZSBOZXR3b3JrIGFuZCBEZWZlbnNlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy52dS5ubFxcL35oZXJiZXJ0YlxcL2Rvd25sb2FkXFwvcGFwZXJzXFwvdGhyb3doYW1tZXJfYXRjMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDM4NjI4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1vemlsbGEgZ3JhbnQgZm9yIG1hY2hpbmUgbGVhcm5pbmcgcHJvamVjdHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9ibG9nLm1vemlsbGEub3JnXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE4XFwvMDZcXC8yMDE4LU1vemlsbGEtQXdhcmRzLUFwcGxpY2F0aW9uLUd1aWRlXy1DcmVhdGl2ZS1NZWRpYS1Bd2FyZHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzM2NDExXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBDIE9iamVjdCBTeXN0ZW0gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2xkZW5pYXUud2ViLmNlcm4uY2hcXC9sZGVuaWF1XFwvaHRtbFxcL2Nvcy1kbHMwOS1kcmFmdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3NzU4MjZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRXhwZXJpZW5jZSB3aXRoIFZpcnVzZXMgb24gVW5peCBzeXN0ZW1zICgxOTg5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvbGVnYWN5XFwvcHVibGljYXRpb25zXFwvY29tcHN5c3RlbXNcXC8xOTg5XFwvc3ByX2R1ZmYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDM2Mjk3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9uIExpYnJhcnkgQ29ycmVjdG5lc3MgVW5kZXIgV2VhayBNZW1vcnkgQ29uc2lzdGVuY3kgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5zb3VuZGFuZGNvbXBsZXRlLm9yZ1xcL3BhcGVyc1xcL0xpYnJhcmllcy1QT1BMLTIwMTkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzU2MTk2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdyYXBoIGFsZ29yaXRobXMgdmlhIFN1aXRlU3BhcnNlOkdyYXBoQkxBUzogdHJpYW5nbGUgY291bnRpbmcgYW5kIEstdHJ1c3MgKDIwMTgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9mYWN1bHR5LmNzZS50YW11LmVkdVxcL2RhdmlzXFwvR3JhcGhCTEFTXFwvSFBFQzE4XFwvRGF2aXNfSFBFQzE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA4ODExMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFbXBpcmljYWwgU3R1ZGllcyBvZiBQcm9ncmFtbWluZyBLbm93bGVkZ2UgKDE5ODQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lmljcy51Y2kuZWR1XFwvfnJlZG1pbGVzXFwvaW5mMjMzLUZRMDdcXC9vbGRwYXBlcnNcXC9Tb2xsb3dheUVocmxpY2gucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTUwNTk3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhpZ2hlci1vcmRlciB0cnV0aHMgYWJvdXQgQ2htZXNzICgyMDA2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FzZS50dWZ0cy5lZHVcXC9jb2dzdHVkXFwvZGVubmV0dFxcL3BhcGVyc1xcL2NobWVzcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5NDcyMzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUm9iZXJ0IFBpcnNpZyBvbiBUaGUgU2NpZW50aWZpYyBNZXRob2QgKDE5NzQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwva2toLmx0cnIuYXJpem9uYS5lZHVcXC9ra2hcXC9uYXRzZ2NcXC9QREZzLTIwMTNcXC9Sb2JlcnQtUGlyc2lnLU9uLVNjaWVudGlmaWMtTWV0aG9kLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQxNTY4N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgTXl0aGljYWwgTWF0Y2hlZCBNb2R1bGVzICgyMDA5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jbC5jYW0uYWMudWtcXC9yZXNlYXJjaFxcL3NyZ1xcL25ldG9zXFwvcGFwZXJzXFwvMjAwOS1rZWxsMjAwOW15dGhpY2FsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODYzNDAxN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJdCBUYWtlcyAkNC4yTSBOZXQgV29ydGggdG8gQmUgQ29uc2lkZXJlZCBXZWFsdGh5IGluIFNpbGljb24gVmFsbGV5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYWJvdXRzY2h3YWIuY29tXFwvaW1hZ2VzXFwvdXBsb2Fkc1xcL2lubGluZVxcL0NoYXJsZXMtU2Nod2FiLU1vZGVybi1XZWFsdGgtSW5kZXgtQmF5LUFyZWEtUHJlc3MtUmVsZWFzZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxNzUwOTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSW50ZXJ2aWV3cyB3aXRoIEpvaG4gQ2FybWFjayBbfjE5OTctMjAwOF0gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2ZhYmllbnNhbmdsYXJkLm5ldFxcL2ZkX3Byb3h5XFwvZG9vbTNcXC9wZGZzXFwvam9obmMtaW50ZXJ2aWV3cy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5Mzk2NzNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRm9yZW5zaWMgQW5hbHlzaXMgYW5kIEFub255bWlzYXRpb24gb2YgUHJpbnRlZCBEb2N1bWVudHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2RlbGl2ZXJ5LmFjbS5vcmdcXC8xMC4xMTQ1XFwvMzIxMDAwMFxcLzMyMDYwMTlcXC9wMTI3LXJpY2h0ZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDA1NTg2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFuIEFyY2hpdGVjdHVyZSBmb3IgIEFuYWx5c2lzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLnVjc2IuZWR1XFwvfmptY21haGFuXFwvcmVzZWFyY2hcXC90b3BfcGlja3NfMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDg2MTU5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBEYW5nZXJzIG9mIEtleSBSZXVzZTogUHJhY3RpY2FsIEF0dGFja3Mgb24gSVBzZWMgSUtFIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmVpLnJ1Yi5kZVxcL21lZGlhXFwvbmRzXFwvdmVyb2VmZmVudGxpY2h1bmdlblxcLzIwMThcXC8wOFxcLzEzXFwvc2VjMTgtZmVsc2NoLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc2MDUwMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21wdXRlciBWaXNpb24gZm9yIGF1dG9ub21vdXMgbmF2aWdhdGlvbigxOTg4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5yaS5jbXUuZWR1XFwvcHViX2ZpbGVzXFwvcHViM1xcL2hlYmVydF9tYXJ0aWFsXzE5ODhfM1xcL2hlYmVydF9tYXJ0aWFsXzE5ODhfMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1Mzg5NDlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU1BJUkFMOiBFeHRyZW1lIFBlcmZvcm1hbmNlIFBvcnRhYmlsaXR5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC91c2Vycy5lY2UuY211LmVkdVxcL35mcmFuemZcXC9wYXBlcnNcXC8wODUxMDk4M19TcGlyYWxfSUVFRV9GaW5hbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0NjgwNjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiWmVuZXIgZGlvZGVzIGhhdmUgY291cGxlZCBxdWFudHVtIG5vaXNlIHRoYXQgdHJhdmVscyBhdCBjIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC92aXhyYS5vcmdcXC9wZGZcXC8xNjAzLjAzODl2Mi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxODE4OThcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTG9vcCBSZWNvZ25pdGlvbiBpbiBDKytcXC9KYXZhXFwvR29cXC9TY2FsYSAoMjAxMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9kYXlzMjAxMS5zY2FsYS1sYW5nLm9yZ1xcL3NpdGVzXFwvZGF5czIwMTFcXC9maWxlc1xcL3dzMy0xLUh1bmR0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzY4MDc5MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUZWFzaW5nLCBHb3NzaXAsIGFuZCBMb2NhbCBOYW1lcyBvbiBSYXBhbnVpICgxOTc5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3NjaG9sYXJzcGFjZS5tYW5vYS5oYXdhaWkuZWR1XFwvYml0c3RyZWFtXFwvMTAxMjVcXC8xOTIxMVxcLzFcXC9BUC12MjJuMS00MS02MC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyOTg3NDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmVjb25jaWxpbmcgSGlnaC1MZXZlbCBPcHRpbWl6YXRpb25zXFwvTG93LUxldmVsIENvZGUgd2l0aCBUd2luIE1lbW9yeSBBbGxvY2F0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9zZi5zbnUuYWMua3JcXC9wdWJsaWNhdGlvbnNcXC9sbHZtdHdpbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0NjM4NTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRG9jdW1lbnRlZCBHbG9iYWwgTGlnaHRuaW5nIEZhdGFsaXRpZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9teS52YWlzYWxhLm5ldFxcL1ZhaXNhbGElMjBEb2N1bWVudHNcXC9TY2llbnRpZmljJTIwcGFwZXJzXFwvMjAxNiUyMElMREMlMjBJTE1DXFwvUm9uJTIwSG9sbGUuJTIwTnVtYmVyJTIwb2YlMjBEb2N1bWVudGVkJTIwR2xvYmFsJTIwTGlnaHRuaW5nJTIwRmF0YWxpdGllcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxOTU0NTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmVzaXN0YW5jZSB0byB0aGUgVXNlIG9mIEFuZXN0aGVzaWEgaW4gdGhlIE1pZC0xOXRoIENlbnR1cnkgKDIwMDUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmRvY2Ryb2lkLm5ldFxcL1Ywczl1RHBcXC9tZXllcjIwMTUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODA1NzU3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBtb2RhbGl0eSBvZiBtb3J0YWxpdHkgaW4gZG9tYWluIG5hbWVzOiBhbiBpbi1kZXB0aCBzdHVkeSBvZiBkb21haW4gbGlmZXRpbWVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmZhcnNpZ2h0c2VjdXJpdHkuY29tXFwvYXNzZXRzXFwvbWVkaWFcXC9kb3dubG9hZFxcL1ZCMjAxOC1zdHVkeS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2MDcxNTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2NpZW50aWZpYyBVc2VzIG9mIHRoZSBNQU5JQUMgKDE5ODYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZGFzaGVyLnd1c3RsLmVkdVxcL2NoZW00MzBcXC9yZWFkaW5nXFwvanN0YXRwaHlzLTQzLTczMS04Ni5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MzUxMzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRnJpZXplIEdyb3VwcyAoMTk5NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5nbGFzc25lci5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMTRcXC8wNFxcL0NHLUNHQS1QREYtOTYtMDUtRnJpZXplLUdyb3Vwcy1NYXk5Ni5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY3OTE0NTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmFzdCBQcm9ncmFtbWFibGUgTWF0Y2gtQWN0aW9uIFByb2Nlc3NpbmcgaW4gSGFyZHdhcmUgZm9yIFNETiAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3l1YmEuc3RhbmZvcmQuZWR1XFwvfmdyZ1xcL2RvY3NcXC9zZG4tY2hpcC1zaWdjb21tLTIwMTMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDk3Mzk1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkl2YW4gU3V0aGVybGFuZDogVGVjaG5vbG9neSBhbmQgQ291cmFnZSAoMTk5NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NzZXdlYi51Y3NkLmVkdVxcL353Z2dcXC9zbWxpX3BzLTEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTE4Nzk2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNpbW9uIEJyb3duZTogdGhlIHNvdWwtbXVyZGVyZWQgdGhlb2xvZ2lhbiAoMTk5NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZ3dlcm4ubmV0XFwvZG9jc1xcL3BzeWNob2xvZ3lcXC8xOTk2LWJlcm1hbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzNTU4ODdcIlxuICAgIH1cbl07XG4iXX0=