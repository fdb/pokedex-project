module.exports = (pokedex, type) => {
  const stats = {
    typeName: type,
    type: 0,
    weakness: 0
  };

  pokedex.pokemon.forEach(pokemon => {
    if (pokemon.weaknesses.indexOf(type) !== -1) {
      stats.weakness++;
    }
    if (pokemon.type.indexOf(type) !== -1) {
      stats.type++;
    }
  })

  return stats;

};
