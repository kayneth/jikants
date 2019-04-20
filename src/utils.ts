// Imports
import got from "got";
import pino from "pino";

import pkg from "../package.json";

export const baseUrl = "https://api.jikan.moe/v3";

export const api = got.extend({
  baseUrl,
  headers: {
    "User-Agent": `${pkg.name} / ${pkg.version} (${pkg.repository.url})`
  },
  json: true
});

export const Logger = pino({
  name: "jikants",
  prettyPrint: true
});
