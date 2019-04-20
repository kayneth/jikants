export type Seasons = "summer" | "spring" | "fall" | "winter";

export interface Season {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  season_name: string;
  season_year: number;
  anime: Anime[];
}

interface Anime {
  mal_id: number;
  url: string;
  title: string;
  image_url: string;
  synopsis: string;
  type: AnimeType;
  airing_start: Date | null;
  episodes: number | null;
  members: number;
  genres: Genre[];
  source: Source;
  producers: Genre[];
  score: number | null;
  licensors: string[];
  r18: boolean;
  kids: boolean;
  continuing: boolean;
}

interface Genre {
  mal_id: number;
  type: GenreType;
  name: string;
  url: string;
}

enum GenreType {
  Anime = "anime"
}

enum Source {
  CardGame = "Card game",
  DigitalManga = "Digital manga",
  Empty = "-",
  Game = "Game",
  LightNovel = "Light novel",
  Manga = "Manga",
  Novel = "Novel",
  Original = "Original",
  Other = "Other",
  PictureBook = "Picture book",
  The4KomaManga = "4-koma manga",
  VisualNovel = "Visual novel",
  WebManga = "Web manga"
}

enum AnimeType {
  Movie = "Movie",
  Ona = "ONA",
  Ova = "OVA",
  Special = "Special",
  Tv = "TV"
}
