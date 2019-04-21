// Imports
import got from "got";
import PMemoize from "p-memoize";
import PQueue from "p-queue";
import pino from "pino";
import LRU from "quick-lru";

// package.json
import pkg from "../package.json";

// Constants
export const baseUrl = "https://api.jikan.moe/v3";
export const queue = new PQueue({ concurrency: 2 });

// Custom http client
const http = got.extend({
  baseUrl,
  headers: {
    "User-Agent": `${pkg.name} / ${pkg.version} (${pkg.repository.url})`
  },
  json: true
});

// Memoized http client
export const api = PMemoize(http, { cache: new LRU({ maxSize: 1000 }) });

// Fast JSON logger
export const Logger = pino({
  name: "jikants",
  prettyPrint: true
});
