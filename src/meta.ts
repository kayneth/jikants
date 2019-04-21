// Imports
import ow from "ow";

// Interfaces
import { Periods, Status, Types } from "./interfaces/meta/Meta";

// Utils
import { api, Logger, queue } from "./utils";

/**
 * Requests related to meta information regarding the Jikan REST Instance
 *
 * @param type - The type you're searching for
 * @param period - The period you're searching for
 * @param offset - 1,000 requests are shown per page, you can use the offset to show more
 */
const requests = async (
  type: Types,
  period: Periods,
  offset: number = 1000
) => {
  try {
    ow(offset, ow.number.positive);

    const { body } = await queue.add(
      async () => await api(`/meta/requests/${type}/${period}/${offset}`, {})
    );

    return body;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches the status of the Jikan REST API
 */
const status = async () => {
  try {
    const { body } = await queue.add(async () => await api("/meta/status", {}));

    return body as Status;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  requests,
  status
};
