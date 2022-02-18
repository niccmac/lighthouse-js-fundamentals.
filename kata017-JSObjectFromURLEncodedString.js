const urlDecode = function (text) {
  var splitKeys = [];
  var finalKeys = [];


  var findKeysSplit = (text).split("&");

  var findKeyValues = function (findKeysSplit) {
    for (const arr of findKeysSplit) {

      splitKeys.push(arr.split("="));
    }
  };
  findKeyValues(findKeysSplit);

  for (const item of splitKeys) {
    finalKeys[item[0]] = item[1].replaceAll("%20", " ");
  }
  return finalKeys;

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);