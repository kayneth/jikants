// Imports
import ow from "ow";

// Interfaces
import { Characters } from "./interfaces/manga/Characters";
import { News } from "./interfaces/manga/News";

// Utils
import { api, Logger } from "./utils";

/**
 * Fetches the list of characters & staff members of the manga
 *
 * @param id - The anime id
 */
const characters = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await api(`/manga/${id}/characters`);

    return body as Characters;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches news related to the item
 *
 * @param id - The anime id
 */
const news = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await api(`/anime/${id}/news`);

    return body as News;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  characters,
  news
};
