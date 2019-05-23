<p align="center"><img src="/logo/logotype-horizontal.png"></p>

# jikants

[![Discord Server](https://img.shields.io/discord/460491088004907029.svg?style=flat&logo=discord)](https://discord.gg/4tvCr36)![npm](https://img.shields.io/npm/dm/jikants.svg)[![Netlify Status](https://api.netlify.com/api/v1/badges/369e3e6b-1132-4612-b19a-3090c50cc1a6/deploy-status)](https://app.netlify.com/sites/jikants/deploys)[![Total alerts](https://img.shields.io/lgtm/alerts/g/Julien-Broyard/jikants.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Julien-Broyard/jikants/alerts/)[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Julien-Broyard/jikants.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Julien-Broyard/jikants/context:javascript)

> A wrapper for the jikan REST API.

## Table of Contents

- [Todo](#todo)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Todo

TODO : Improve interfaces
TODO : Add Throttling

## Install

```
$ npm install jikants
$ yarn add jikants
```

## Usage

```js
const JikanTS = require("jikants").default;

/* WITH ES6 */

import JikanTS from "jikants";
```

## API

```js
const JikanTS = require("jikants").default;

/* ANIME */
JikanTS.Anime.byId(1).then(b => console.log(b));
JikanTS.Anime.charactersStaff(1).then(b => console.log(b));
JikanTS.Anime.episodes(1).then(b => console.log(b));
JikanTS.Anime.forum(1).then(b => console.log(b));
JikanTS.Anime.moreInfo(1).then(b => console.log(b));
JikanTS.Anime.news(1).then(b => console.log(b));
JikanTS.Anime.pictures(1).then(b => console.log(b));
JikanTS.Anime.recommendations(1).then(b => console.log(b));
JikanTS.Anime.reviews(1).then(b => console.log(b));
JikanTS.Anime.stats(1).then(b => console.log(b));
JikanTS.Anime.userUpdates(1).then(b => console.log(b));
JikanTS.Anime.videos(1).then(b => console.log(b));

/* CHARACTER */
JikanTS.Character.pictures(1).then(b => console.log(b));

/* CLUB */
JikanTS.Club.info(1).then(b => console.log(b));
JikanTS.Club.members(1).then(b => console.log(b));

/* GENRE */
JikanTS.Genre.anime(1).then(b => console.log(b));
JikanTS.Genre.manga(1).then(b => console.log(b));

/* MAGAZINE */
JikanTS.Magazine.get(1).then(b => console.log(b));

/* MANGA */
JikanTS.Manga.characters(1).then(b => console.log(b));
JikanTS.Manga.forum(1).then(b => console.log(b));
JikanTS.Manga.moreInfo(1).then(b => console.log(b));
JikanTS.Manga.news(1).then(b => console.log(b));
JikanTS.Manga.pictures(1).then(b => console.log(b));
JikanTS.Manga.recommendations(1).then(b => console.log(b));
JikanTS.Manga.reviews(1).then(b => console.log(b));
JikanTS.Manga.stats(1).then(b => console.log(b));
JikanTS.Manga.userUpdates(1).then(b => console.log(b));

/* META */
JikanTS.Meta.requests("anime", "today").then(b => console.log(b));
JikanTS.Meta.status().then(b => console.log(b));

/* PERSON */
JikanTS.Person.pictures(1).then(b => console.log(b));

/* PRODUCER */
JikanTS.Producer.get(1).then(b => console.log(b));

/* SCHEDULE */
JikanTS.Schedule.anime("sunday").then(b => console.log(b));

/* SEARCH */
JikanTS.Search.search("Blue", "anime", 1, { limit: 1 }).then(b =>
  console.log(b)
);

/* SEASON */
JikanTS.Season.anime(2018, "winter").then(b => console.log(b));
JikanTS.Season.archive().then(b => console.log(b));
JikanTS.Season.later().then(b => console.log(b));

/* TOP */
JikanTS.Top.items("anime", 1, "airing").then(b => console.log(b));

/* USER */
JikanTS.User.animeList("myusername", "all", 1).then(b => console.log(b));
JikanTS.User.friends("myusername", 2).then(b => console.log(b));
JikanTS.User.history("myusername", "both").then(b => console.log(b));
JikanTS.User.mangaList("myusername", "all").then(b => console.log(b));
JikanTS.User.profile("myusername").then(b => console.log(b));
```

## Maintainers

[@Julien-Broyard](https://github.com/Julien-Broyard)

Logo by [@Tobaloidee](https://github.com/Tobaloidee)

## Contributing

See [the contributing file](contributing.md)!

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MPL-2.0 © 2019 Julien Broyard
