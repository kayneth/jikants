// Imports
import JikanTS from "../src/index";
import test from "ava";

/* TESTS */

test("#characters", async t => {
  t.plan(3);

  const response = await JikanTS.Manga.characters(2);

  t.not(undefined, response);

  if (response) {
    t.is(response.characters[0].mal_id, 423);
    t.is(response.characters[0].name, "Casca");
  }
});

test("#forum", async t => {
  t.plan(3);

  const response = await JikanTS.Manga.forum(2);

  t.not(undefined, response);

  if (response) {
    t.is(response.topics[0].title, "When will this garbage end?");
    t.is(response.topics[0].topic_id, 130971);
  }
});

test("#moreInfo", async t => {
  t.plan(2);

  const response = await JikanTS.Manga.moreInfo(2);

  t.not(undefined, response);

  if (response) {
    t.is(
      response.moreinfo,
      "Berserk: The Prototype (1988)\r\nBefore Berserk became what it is now, Miura Kentaro created a prototype chapter for the manga. The year was 1988 and he was still a student at that time. This is the prototype manga on which the Berserk manga is based."
    );
  }
});

test("#news", async t => {
  t.plan(3);

  const response = await JikanTS.Manga.news(3);

  t.not(undefined, response);

  if (response) {
    t.is(response.articles[0].author_name, "Sakana-san");
    t.is(
      response.articles[0].title,
      "North American Anime & Manga Releases for March"
    );
  }
});

test("#pictures", async t => {
  t.plan(3);

  const response = await JikanTS.Manga.pictures(2);

  t.not(undefined, response);

  if (response) {
    t.is(
      response.pictures[0].large,
      "https://cdn.myanimelist.net/images/manga/1/157569l.jpg"
    );
    t.is(
      response.pictures[0].small,
      "https://cdn.myanimelist.net/images/manga/1/157569.jpg"
    );
  }
});

test("#recommendations", async t => {
  t.plan(3);

  const response = await JikanTS.Manga.recommendations(2);

  t.not(undefined, response);

  if (response) {
    t.is(response.recommendations[0].mal_id, 583);
    t.is(response.recommendations[0].title, "Claymore");
  }
});

test("#reviews", async t => {
  t.plan(3);

  const response = await JikanTS.Manga.reviews(3);

  t.not(undefined, response);

  if (response) {
    t.is(response.reviews[0].url, "https://myanimelist.net/reviews.php?id=721");
    t.is(response.reviews[0].mal_id, 721);
  }
});

test("#stats", async t => {
  t.plan(2);

  const response = await JikanTS.Manga.stats(2);

  t.not(undefined, response);

  if (response) {
    t.is(response.total, 228491);
  }
});

test("#userUpdates", async t => {
  t.plan(2);

  const response = await JikanTS.Manga.userUpdates(3);

  t.not(undefined, response);

  if (response) {
    t.is(response.users[0].username, "denizd");
  }
});
