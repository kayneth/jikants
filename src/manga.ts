// Imports
import ow from "ow";

// Interfaces
import { Characters } from "./interfaces/manga/Characters";
import { News } from "./interfaces/manga/News";
import { Pictures } from "./interfaces/manga/Pictures";
import { Stats } from "./interfaces/manga/Stats";

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

    const { body } = await api(`/manga/${id}/news`);

    return body as News;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches pictures related to the item
 *
 * @param id - The anime id
 */
const pictures = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await api(`/manga/${id}/pictures`);

    return body as Pictures;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches statistical information related to the item
 *
 * @param id - The anime id
 */
const stats = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await api(`/manga/${id}/stats`);

    return body as Stats;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  characters,
  news,
  pictures,
  stats
};
