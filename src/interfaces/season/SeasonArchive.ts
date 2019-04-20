export interface SeasonArchive {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  archive: Archive[];
}

interface Archive {
  year: number;
  seasons: Season[];
}

enum Season {
  Fall = "Fall",
  Spring = "Spring",
  Summer = "Summer",
  Winter = "Winter"
}
