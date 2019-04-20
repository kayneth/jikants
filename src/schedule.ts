// Interfaces
import { Days, Schedule } from "./interfaces/schedule/Schedule";

// Utils
import { api, Logger } from "./utils";

/**
 * Fetches anime schedule of the week or specified day
 */
const animeSchedule = async (day: Days) => {
  try {
    const { body } = await api(`/schedule/${day}`);

    return body as Schedule;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  animeSchedule
};
