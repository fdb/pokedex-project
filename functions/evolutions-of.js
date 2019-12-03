module.exports = (pokedex, name) => {
  const pokemon = pokedex.pokemon.filter(pokemon => pokemon.name === name)[0];

  if (pokemon === undefined) {
    return 'no pokemon with name: ' + name;
  }

  const allEvolutions = [];

  if (pokemon.prev_evolution instanceof Array) {
    allEvolutions.push(...pokemon.prev_evolution);
  }

  allEvolutions.push({ name: pokemon.name, num: pokemon.num });

  if (pokemon.next_evolution instanceof Array) {
    allEvolutions.push(...pokemon.next_evolution);
  }

  return allEvolutions;
};
