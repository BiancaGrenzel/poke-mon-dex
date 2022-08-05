export const getPokemons = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/pokemons.json`);
  const data = await response.json();
  return data.results;
};