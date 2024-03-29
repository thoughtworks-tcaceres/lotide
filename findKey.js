const findKey = function(obj, callback){
  for(const objIt in obj){
    if(callback(obj[objIt])){
      return objIt;
    }
  }
  return undefined;
};

module.exports = findKey;

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2),"noma"); // => "noma"

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 25 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 },
//   "Akelarre2":  { stars: 3 },
//   "Akelarre456":  { stars: 2 },
// }, x => x.stars === 2),"Ora"); // => "Ora"