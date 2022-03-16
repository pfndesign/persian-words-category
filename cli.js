#!/usr/bin/env node

const yargs = require("yargs");
const {
    findwordcategory
} = require('.')
const usage = "\nUsage: persianwordscategory <word> persian word to get category";
const help = "\nUsage: persianwordscategory <word> persian word to get category .\n\nuse --help for more info";
const options = yargs
    .usage(usage)
    .option("r", {
        alias: "raw",
        describe: "return raw data",
        type: "boolean",
        demandOption: false
    })
    .help(true)
    .argv;
if (yargs.argv._[0] == null) {
    console.log(help);
    return;
}
console.log('> category of : "' + yargs.argv._[0] + "\"");
var category = findwordcategory(yargs.argv._[0]);

if (typeof category != 'undefined') {
    if (yargs.argv.r == true) {
        console.log(category);
        return;
    }
    console.log('> totaL catagories : "' + category.length + "\"");
    console.log('> categories : ');
    console.log(category.join(','));
} else {
    console.log('no category found');
}