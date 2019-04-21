// Imports
import ow from "ow";

// Interfaces
import { Anime, Manga } from "./interfaces/genre/Genre";

// Utils
import { api, Logger, queue } from "./utils";

/**
 * Fetches Anime items of the genre
 *
 * @param genreId - Genre ID from MyAnimeList
 * @param page - Number of the page
 */
const anime = async (genreId: number, page: number = 1) => {
  try {
    ow(genreId, ow.number.lessThanOrEqual(43));
    ow(genreId, ow.number.greaterThanOrEqual(1));

    const { body } = await queue.add(
      async () => await api(`/genre/anime/${genreId}/${page}`, {})
    );

    return body as Anime;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches Manga items of the genre
 *
 * @param genreId - Genre ID from MyAnimeList
 * @param page - Number of the page
 */
const manga = async (genreId: number, page: number = 1) => {
  try {
    ow(genreId, ow.number.lessThanOrEqual(43));
    ow(genreId, ow.number.greaterThanOrEqual(1));

    const { body } = await queue.add(
      async () => await api(`/genre/manga/${genreId}/${page}`, {})
    );

    return body as Manga;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  anime,
  manga
};
