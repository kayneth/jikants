// Imports
import JikanTS from "../src/index";
import test from "ava";

/* TESTS */

test("#byId", async t => {
  t.plan(3);

  const response = await JikanTS.Anime.byId(1);

  t.not(undefined, response);

  if (response) {
    t.is(response.mal_id, 1, "The id should be 1.");
    t.is(response.title, "Cowboy Bebop", "The title should be Cowboy Bebop.");
  }
});

test("#charactersStaff", async t => {
  const response = await JikanTS.Anime.charactersStaff(1);

  t.not(undefined, response);
});

test("#episodes", async t => {
  t.plan(2);

  const response = await JikanTS.Anime.episodes(1);

  t.not(undefined, response);

  if (response) {
    t.is(response.episodes_last_page, 1, "There is only one page.");
  }
});

test("#forum", async t => {
  const response = await JikanTS.Anime.forum(1);

  t.not(undefined, response);
});

test("#moreInfo", async t => {
  t.plan(2);

  const response = await JikanTS.Anime.moreInfo(1);

  t.not(undefined, response);

  if (response) {
    t.is(
      response.moreinfo,
      "Suggested Order of Viewing\r\n1. TV Series (26 episodes)\r\n2. Movie (takes place between episodes 22 and 23)"
    );
  }
});

test("#news", async t => {
  const response = await JikanTS.Anime.news(1);

  t.not(undefined, response);
});

test("#pictures", async t => {
  const response = await JikanTS.Anime.pictures(1);

  t.not(undefined, response);
});

test("#recommendations", async t => {
  const response = await JikanTS.Anime.recommendations(1);

  t.not(undefined, response);
});

test("#reviews", async t => {
  const response = await JikanTS.Anime.reviews(1);

  t.not(undefined, response);
});

test("#stats", async t => {
  const response = await JikanTS.Anime.stats(1);

  t.not(undefined, response);
});

test("#userUpdates", async t => {
  const response = await JikanTS.Anime.userUpdates(1);

  t.not(undefined, response);
});

test("#videos", async t => {
  const response = await JikanTS.Anime.videos(1);

  t.not(undefined, response);
});
