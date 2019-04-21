// Imports
import ow from "ow";

// Interfaces
import { Season, Seasons } from "./interfaces/season/Season";
import { SeasonArchive } from "./interfaces/season/SeasonArchive";
import { SeasonLater } from "./interfaces/season/SeasonLater";

// Utils
import { api, Logger, queue } from "./utils";

/**
 * Fetches anime of the specified season
 *
 * @param year - The wanted year
 * @param season - The wanted season
 */
const seasonAnime = async (year: number, season: Seasons) => {
  try {
    ow(year, ow.number.positive);

    const { body } = await queue.add(
      async () => await api(`/season/${year}/${season}`, {})
    );

    return body as Season;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Feteches all the years & their respective seasons that can be parsed from MyAnimeList
 */
const seasonArchive = async () => {
  try {
    const { body } = await queue.add(
      async () => await api("/season/archive", {})
    );

    return body as SeasonArchive;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches anime that have been announced for the upcoming seasons
 */
const seasonLater = async () => {
  try {
    const { body } = await queue.add(
      async () => await api("/season/later", {})
    );

    return body as SeasonLater;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  seasonAnime,
  seasonArchive,
  seasonLater
};
