# Orpheline -- A jQuery Plugin to Prevent Typographical Orphans

## Example Usage

```js
$('p, h1').orpheline();
```

This will add <span style="white-space: nowrap"></span> around the last two words in the given element, which will
prevent the last word from appearing alone on a line.

These are typographical orphans in one sense. This doesn't address typographical orphans in the sense of a line alone
on a page.

## To Do

* Create a more sophisticated last-word-recognition algorithm that can deal with spans already in place.
* Add an argument for the number of words to keep together.

## Why "Orpheline"?

It's French for "orphan." Specifically, it's French for "female orphan."

## Why a Female Orphan in Particular?

Because it ends in the word "line." Mnemonics!