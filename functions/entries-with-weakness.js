module.exports = (pokedex, type) => {
  return pokedex.pokemon
    .filter(pokemon => {
      return pokemon.weaknesses.indexOf(type) !== -1;
    })
};
