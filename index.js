var data = require('caniuse-db/data.json');
var browserslist = require("browserslist");
var memoize = require("lodash.memoize");
var utils = require("./utils");

var parse = memoize(utils.parseCaniuseData, function (feature, browsers) {
  return feature.title + browsers;
});

var setBrowserScope = function(browserList) {
  return (0, utils.cleanBrowsersList)(browserList);
}

var find = function(query,flag){
  var categories, description, key, keywords, matcher, ref, ref1, results, title;
  results = [];
  ref = data.data;
  for (key in ref) {
    ref1 = ref[key], title = ref1.title, description = ref1.description, keywords = ref1.keywords, categories = ref1.categories;
    matcher = (key + title + keywords + categories).toLowerCase().replace(/\W*/g, '');
    if (matcher.match(query)) {
      if(flag){
      	results.push(ref[key]);
      }else{
      	results.push(key);
      }
    }
  }
  return results;
}

var getSupport = function(query){
	var browsers = setBrowserScope();
	var res = find(query,true);
	if (res.length !== 0){
		return parse(res[0], browsers);
	}
}

module.exports = {
	find:find,
	getSupport:getSupport
};