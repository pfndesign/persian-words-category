#!/usr/bin/env node

const yargs = require("yargs");
const {
    getcategorywords
} = require('.')
const usage = "\nUsage: persianwordscategorylist <categoryname> get words from categoy";
const help = "\nUsage: persianwordscategorylist <categoryname> get words from categoy .\n\nuse --help for more info";
const options = yargs
    .usage(usage)
    .option("r", {
        alias: "raw",
        describe: "return raw data",
        type: "boolean",
        demandOption: false
    })
    .option("l", {
        alias: "limit",
        describe: "limit words display",
        type: "number",
        demandOption: false
    })
    .option("c", {
        alias: "categories",
        describe: "list of available categories (case sensitive)",
        type: "boolean",
        demandOption: false
    })
    .help(true)
    .argv;
if (yargs.argv.c == true) {
    var category = [{
            fa: 'حرف',
            en: "letter"
        },
        {
            fa: "اِخ",
            en: 'properNoun'
        },
        {
            fa: "اِ صوت",
            en: 'soundNoun'
        },
        {
            fa: "اِ فعل",
            en: 'verbNoun'
        },
        {
            fa: "اِ مرکب",
            en: 'compoundNoun'
        },
        {
            fa: "اِ مص",
            en: 'actionNoun'
        },
        {
            fa: "ص نسبی",
            en: 'relativeAdjective'
        },
        {
            fa: "مص مرکب",
            en: 'CompoundSource'
        },
        {
            fa: "مص",
            en: 'infinitive'
        },
        {
            fa: "ن تف",
            en: 'comparativeAdjectives'
        },
        {
            fa: "نف",
            en: 'presentParticiple'
        },
        {
            fa: "ن مف",
            en: 'pastParticiple'
        },
        {
            fa: "حامص",
            en: 'infinitiveSource'
        },
        {
            fa: "ترکیب اضافی",
            en: 'adduct'
        },
        {
            fa: "ترکیب وصفی",
            en: 'descriptiveComposition'
        },
        {
            fa: "اِ",
            en: 'noun'
        },
        {
            fa: "ص",
            en: 'adjective'
        },
        {
            fa: "ع",
            en: 'arabic'
        },
        {
            fa: "ق",
            en: 'adverb'
        },
        {
            fa: "مرکب",
            en: 'compound'
        },
        {
            fa: "مصغر",
            en: 'diminutive'
        },
        {
            fa: "معرب",
            en: 'Muarrab'
        },
        {
            fa: "از اتباع",
            en: "function"
        },
        {
            fa: "عدد",
            en: "number"
        },
        {
            fa: "جعلی",
            en: "fake"
        },
        {
            fa: "جملهٔ فعلیه",
            en: "verbalsentence"
        },
        {
            fa: "فرانسوی",
            en: 'french'
        },
        {
            fa: "ترکی",
            en: 'turkish'
        },
        {
            fa: "لاتینی",
            en: 'latin'
        },
        {
            fa: "هندی",
            en: "hindi"
        },
        {
            fa: "روسی",
            en: "russian"
        },
        {
            fa: "ارمنی",
            en: 'armenian'
        },
        {
            fa: "انگلیسی",
            en: 'english'
        },
        {
            fa: "مغولی",
            en: "mongol"
        },
        {
            fa: "آلمانی",
            en: "german"
        },
        {
            fa: "ایتالیایی",
            en: "italian"
        },
        {
            fa: "ژاپنی",
            en: 'Japanese'
        },
        {
            fa: "چینی",
            en: "chinese"
        }
    ];
    console.log("**case sensitive**");
    category.map((item) => {
        console.log(item.en);
    })
    return;
}
if (yargs.argv._[0] == null) {
    console.log(help);
    return;
}
console.log('> list of words for category : "' + yargs.argv._[0] + "\"");
var categorywords = getcategorywords(yargs.argv._[0]);

if (typeof categorywords != 'undefined') {
    var output = categorywords;
    if (yargs.argv.r == true) {
        if (yargs.argv.l > 0)
            output = output[yargs.argv._[0]].slice(0, yargs.argv.l);
        console.log(output);
        return;
    }
    console.log('> words : ');
    output = output[yargs.argv._[0]];
    if (yargs.argv.l > 0)
        output = output.slice(0, yargs.argv.l);
    console.log(output.join(','));
} else {
    console.log('no words found');
}