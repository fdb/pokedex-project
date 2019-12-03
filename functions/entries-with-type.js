module.exports = (pokedex, type) => {
  return pokedex.pokemon
    .filter(pokemon => {
      return pokemon.type.indexOf(type) !== -1;
    })
};
