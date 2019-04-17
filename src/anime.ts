// Imports
import ow from "ow";

// Interfaces
import { AnimeById } from "./interfaces/anime/ById";
import { CharactersStaff } from "./interfaces/anime/CharactersStaff";
import { Episodes } from "./interfaces/anime/Episodes";
import { Forum } from "./interfaces/anime/Forum";
import { MoreInfo } from "./interfaces/anime/MoreInfo";
import { News } from "./interfaces/anime/News";
import { Pictures } from "./interfaces/anime/Pictures";
import { Recommendations } from "./interfaces/anime/Recommendations";
import { Reviews } from "./interfaces/anime/Reviews";
import { Stats } from "./interfaces/anime/Stats";
import { UserUpdates } from "./interfaces/anime/UserUpdates";
import { Videos } from "./interfaces/anime/Videos";

// Utils
import { api, Logger } from "./utils";

/**
 * Fetches the anime with the given ID
 *
 * @param id - The anime id
 */
const byId = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await api(`/anime/${id}`);

    return body as AnimeById;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches the list of characters & staff members of the anime
 *
 * @param id - The anime id
 */
const charactersStaff = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await api.get(`/anime/${id}/characters_staff`);

    return body as CharactersStaff;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches the list of episodes of the anime
 *
 * @param id - The anime id
 * @param page - The page number
 */
const episodes = async (id: number, page: number = 1) => {
  try {
    ow(id, ow.number.positive);
    ow(page, ow.number.positive);

    const { body } = await api(`/anime/${id}/episodes/${page}`);

    return body as Episodes;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches forum topics related to the item
 *
 * @param id - The anime id
 */
const forum = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await api(`/anime/${id}/forum`);

    return body as Forum;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches more info related to the item
 *
 * @param id - The anime id
 */
const moreInfo = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await api(`/anime/${id}/moreinfo`);

    return body as MoreInfo;
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

/**
 * Fetches pictures related to the item
 *
 * @param id - The anime id
 */
const pictures = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await api(`/anime/${id}/pictures`);

    return body as Pictures;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches recommendations and their weightage made by users
 *
 * @param id - The anime id
 */
const recommendations = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await api(`/anime/${id}/recommendations`);

    return body as Recommendations;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches reviews written by users
 *
 * @param id - The anime id
 * @param page - The page number
 */
const reviews = async (id: number, page: number = 1) => {
  try {
    ow(id, ow.number.positive);
    ow(page, ow.number.positive);

    const { body } = await api(`/anime/${id}/reviews/${page}`);

    return body as Reviews;
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

    const { body } = await api(`/anime/${id}/stats`);

    return body as Stats;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches latest list updates made by users
 *
 * @param id - The anime id
 * @param page - The page number
 */
const userUpdates = async (id: number, page: number = 1) => {
  try {
    ow(id, ow.number.positive);
    ow(page, ow.number.positive);

    const { body } = await api(`/anime/${id}/userupdates/${page}`);

    return body as UserUpdates;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches PV & episodes (if any) related to the item
 *
 * @param id - The anime id
 */
const videos = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await api(`/anime/${id}/videos`);

    return body as Videos;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  byId,
  charactersStaff,
  episodes,
  forum,
  moreInfo,
  news,
  pictures,
  recommendations,
  reviews,
  stats,
  userUpdates,
  videos
};
