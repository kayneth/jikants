// Imports
import Anime from "./anime";
import Character from "./character";
import Manga from "./manga";
import Person from "./person";
import Search from "./search";

export default {
  Anime,
  Character,
  Manga,
  Person,
  Search
};

Search.search("Blu", "anime", 1, { rated: "g", limit: 1 }).then(b => {
  if (b) console.log(b);
});
