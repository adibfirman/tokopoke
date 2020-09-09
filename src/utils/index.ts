export function getImgPokemon(id: number | undefined | null) {
  return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
}

export function getIDPokemon(url: string) {
  const splitURL = url.split("/");

  return splitURL[splitURL.length - 2];
}

export { default as useFetch } from "./useFetch";
