// Imports
import ow from "ow";

// Interfaces
import { Pictures } from "./interfaces/character/Pictures";

// Utils
import { api, Logger } from "./utils";

/**
 * Fetches pictures related to the item
 *
 * @param id - The character id
 */
const pictures = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await api(`/character/${id}/pictures`);

    return body as Pictures;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  pictures
};
