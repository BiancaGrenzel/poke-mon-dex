export const getPokemons = async () => {
  const response = await fetch(`${process.env["API_URL"]}/pokemons.json`);
  const data = await response.json();
  return data.results;
};