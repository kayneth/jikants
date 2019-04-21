export interface Magazine {
  readonly anime: Anime[];
  readonly meta: Meta;
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}

interface Anime {
  readonly airing_start: Date | null;
  readonly episodes: number | null;
  readonly enres: Meta[];
  readonly image_url: string;
  readonly kids: boolean;
  readonly licensors: string[];
  readonly mal_id: number;
  readonly members: number;
  readonly producers: Meta[];
  readonly r18: boolean;
  readonly score: number;
  readonly source: Source;
  readonly synopsis: string;
  readonly title: string;
  readonly type: AnimeType;
  readonly url: string;
}

interface Meta {
  readonly mal_id: number;
  readonly name: string;
  readonly type: MetaType;
  readonly url: string;
}

enum MetaType {
  Anime = "anime"
}

enum Source {
  Empty = "-",
  Game = "Game",
  LightNovel = "Light novel",
  Manga = "Manga",
  Music = "Music",
  Novel = "Novel",
  Original = "Original",
  The4KomaManga = "4-koma manga",
  VisualNovel = "Visual novel",
  WebManga = "Web manga"
}

enum AnimeType {
  Movie = "Movie",
  Ova = "OVA",
  Special = "Special",
  Tv = "TV"
}
