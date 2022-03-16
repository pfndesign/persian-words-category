# `persian-words-category`
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

list of persian word categories

## Install

[npm][]:

```sh
npm install persian-words-category
```

## Use
### find word category
```js
var {findwordcategory} = require('persian-words-category')

console.log(findwordcategory("شهر"));
```

if finding category was successful will return :

```js
[ 
  'noun',
  'adjective',
  'arabic',
  'infinitive',
  'properNoun'
]
```
if finding category is not successful will return "undefined"

### get category words
```js
var {getcategorywords} = require('persian-words-category')

console.log(getcategorywords("noun"));
```

if finding category words was successful will return :

```js
[
  'آء',
  'آئرپلان',
  'آارخیس',
  'آاطریلال',
  'آانس',
  'آءة',
  'آئین',
  'آئینه',
  'آب',
  'آب آورده',
  // ... and many more
]
```
if finding category words is not successful will return "undefined"

#### list of available categories (case sensitive)
- letter
- properNoun
- soundNoun
- verbNoun
- compoundNoun
- actionNoun
- relativeAdjective
- CompoundSource
- infinitive
- comparativeAdjectives
- presentParticiple
- pastParticiple
- infinitiveSource
- adduct
- descriptiveComposition
- noun
- adjective
- arabic
- adverb
- compound
- diminutive
- Muarrab
- function
- number
- fake
- verbalsentence
- french
- turkish
- latin
- hindi
- russian
- armenian
- english
- mongol
- german
- italian
- Japanese
- chinese
## API

### `anObjectOfFindWordCategory`

`array.<string>` — list of word categories.

### `anObjectOfGetCategoryWords`

`array.<object>` — list of words is categories with category name as the object key, if there are multiple categories there will be an "all" key as well for words that are in all categories.

## CLI

Install the CLI globally:

```sh
npm i -g persian-words-category
```

Usage: persianwordscategory <word> persian word to get category

```sh
persianwordscategory شهر
```

Use `--help` for more info :

```sh
Options:
      --version  Show version number                                   [boolean]
  -r, --raw      return raw data                                       [boolean]
      --help     Show help                                             [boolean]
```
Usage: persianwordscategorylist <categoryname> get words from categoy

```sh
persianwordscategorylist noun
```

Use `--help` for more info :

```sh
Options:
      --version     Show version number                                [boolean]
  -r, --raw         return raw data                                    [boolean]
  -l, --limit       limit words display                                 [number]
  -c, --categories  list of available categories (case sensitive)      [boolean]
      --help        Show help                                          [boolean]
```
## Related

*   [`an-array-of-persian-words`](https://github.com/pfndesign/an-array-of-persian-words)
*   [`similar-persian-words`](https://github.com/pfndesign/similar-persian-words)
*   [`persian-words-pronunciation`](https://github.com/pfndesign/persian-words-pronunciation)

[MIT][license] © [Peyman farahmand][author]

<!-- Definition -->

[downloads-badge]: https://img.shields.io/npm/dm/persian-words-category.svg

[downloads]: https://www.npmjs.com/package/persian-words-category

[size-badge]: https://img.shields.io/bundlephobia/minzip/persian-words-category.svg

[size]: https://bundlephobia.com/result?p=persian-words-category

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://www.linkedin.com/in/pfndesign