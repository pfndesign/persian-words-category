const fs = require('fs');
module.exports = { findwordcategory: findWordCategory, getcategorywords: getCategoryWords };
function findWordCategory(word) {
    //read word list
    let words = JSON.parse(fs.readFileSync('./library/words.json').toString());
    //get word id
    let worddata = Object.entries(words).filter(([key, value]) => value === word);
    //check to see if word exists
    if (typeof worddata[0] != 'undefined') {
        words = null; //free memory
        //load similarity map
        let categories = JSON.parse(fs.readFileSync('./library/wordcategory.json').toString());
        let wordcategory = [];
        
        worddata.map((item) => {
            if(typeof categories[item[0]] != 'undefined')
            wordcategory =[...wordcategory , ...categories[item[0]]];
        });
        wordcategory = [...new Set(wordcategory)];
        worddata = null; //free memory
        //similarity exists
        if (typeof wordcategory != 'undefined') {
            return wordcategory;
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
};
function getCategoryWords(categories) {
    //turn single category to array
    if (!Array.isArray(categories))
        categories = [categories];
    //read category list
    let categorylist = JSON.parse(fs.readFileSync('./library/category.json').toString());
    //get category word id list
    let categorydata = Object.entries(categorylist).filter(([key, value]) => categories.includes(key));
    //free memory
    categorylist = undefined;
    //if category exists
    if (categorydata.length) {
        if (categorydata.length > 1) {
            let categorywordlist = categorydata.map(([key, value]) => { return value }),//get word list
                categorywordlistcombined = [].concat(...categorywordlist),//combine word list
                categorywordlistset = new Set(categorywordlistcombined), //create a unique set of word
                wordwsamecategorylist = categories.length > 1 ? categorywordlistcombined.filter(item => {
                    if (categorywordlistset.has(item)) {
                        categorywordlistset.delete(item);
                    } else {
                        return item;
                    }
                }) : [];//find duplicates
            //free memory
            categoryidlistsetarray = undefined;
            categoryidlistset = undefined;
            categoryidlistcombined = undefined;
            categoryidlist = undefined;
            categorydata = Object.fromEntries(categorydata);
            //add duplicates from categoies
            categorydata['all'] = wordwsamecategorylist;
        }
        return Array.isArray(categorydata) ? Object.fromEntries(categorydata) : categorydata;
    } else {
        return undefined;
    }
};