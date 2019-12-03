// const assert = require('assert');

// const deepStrictEqual = (first, second) => {
//   try {
//     assert.deepStrictEqual(first, second);
//     return true;
//   } catch (err) {
//     return false;
//   }
// };

// limited to keys with primitive types for now
module.exports = (pokedex, key, value) => {
  return pokedex.pokemon
    .filter(pokemon => {
      return String(pokemon[key]) === value;
    })
};


