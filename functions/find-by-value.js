// const assert = require('assert');

// const deepStrictEqual = (first, second) => {
//   try {
//     assert.deepStrictEqual(first, second);
//     return true;
//   } catch (err) {
//     return false;
//   }
// };

// limited to keys with primitive types until you learn about passing values in the body of your request
module.exports = (pokedex, value) => {
  return pokedex.pokemon
    .filter(pokemon => {
      return Object.keys(pokemon)
        .filter(key => {
          return pokemon[key] === value;
        }).length > 0
    })
};


