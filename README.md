#caniuse-query

CanIuse search module folked from caniuse-api
developed for [http://www.caniuse-bot.com/](http://www.caniuse-bot.com/)

##Features

```js
var caniuse = require("caniuse-query");
caniuse.find("layout");
//will return ["css-table","multicolumn","flexbox","css-grid"]
caniuse.getSupport("css-grid"); 
/*
will return
{ and_chr: { p: 50 },
  and_uc: { n: 9.9 },
  android: { n: 4.1, p: 50 },
  chrome: { n: 24, p: 54, d: 54, '#1': 54 },
  edge: { a: 14, x: 14, '#2': 14 },
  firefox: { n: 18, p: 49, d: 49, '#3': 49 },
  ie: { n: 8, p: 9, a: 11, x: 11, '#2': 11 },
  ie_mob: { a: 11, x: 11, '#2': 11 },
  ios_saf: { p: 9.3, n: 5 },
  op_mini: { n: 5 },
  opera: { n: 27, p: 39, d: 39, '#1': 39 },
  safari: { n: 5.1, p: 9.1 } }
*/
```

##Download

```
npm install caniuse-query
```