const assert = require('assert');

const areTheSame = (first, second) => {
  try {
    assert.deepStrictEqual(first, second);
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = (pokedex, key) => {
  return pokedex.pokemon
    .reduce((acc, pokemon) => {
      const hasNewValue = acc.every(entry => !areTheSame(entry, pokemon[key]));
      if (hasNewValue) {
        acc.push(pokemon[key])
      }
      return acc;
    }, []);
};
