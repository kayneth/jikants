// Imports
import got from "got";
import pino from "pino";
import pMemoize from "p-memoize";

import pkg from "../package.json";

export const baseUrl = "https://api.jikan.moe/v3";

const http = got.extend({
  baseUrl,
  headers: {
    "User-Agent": `${pkg.name} / ${pkg.version} (${pkg.repository.url})`
  },
  json: true
});

export const api = pMemoize(http);

export const Logger = pino({
  name: "jikants",
  prettyPrint: true
});
