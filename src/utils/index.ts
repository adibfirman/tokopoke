export function getImgPokemon(id: number | undefined | null) {
  return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
}

export function getIDPokemon(url: string) {
  const splitURL = url.split("/");

  return parseFloat(splitURL[splitURL.length - 2]);
}

export function capitalizeText(text: string) {
  return text.charAt(0).toUpperCase() + text.substr(1);
}

export { default as useFetch } from "./useFetch";
