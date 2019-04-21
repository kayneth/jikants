// Imports
import ow from "ow";

// Interfaces
import { Result, SubTypes, Types } from "./interfaces/top/Top";

// Utils
import { api, Logger } from "./utils";

/**
 * Fetches top items on MyAnimeList
 *
 * @param type - Top items of this type
 * @param page - The Top page on MyAnimeList is paginated offers 50 items per page
 * @param subType - Top items of this subtype
 */
const topItems = async (type: Types, page: number = 1, subType?: SubTypes) => {
  try {
    ow(page, ow.number.positive);

    if (subType) {
      const result = await api(`/top/${type}/${page}/${subType}`, {});

      return result.body as Result;
    }

    const { body } = await api(`/top/${type}/${page}`, {});

    return body as Result;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  topItems
};