const express = require('express');
const imgSearchRouter = express.Router();
const bodyParser = require('body-parser');
const request = require('request');
const debug = require('debug');
const mongodb = require('mongodb');
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
const MongoClient = mongodb.MongoClient;

var obj = {
 "kind": "customsearch#search",
 "url": {
  "type": "application/json",
  "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
 },
 "queries": {
  "request": [
   {
    "title": "Google Custom Search - lolcats",
    "totalResults": "655000",
    "searchTerms": "lolcats",
    "count": 10,
    "startIndex": 1,
    "inputEncoding": "utf8",
    "outputEncoding": "utf8",
    "safe": "off",
    "cx": "012680039554584055873:ni7dars4bne"
   }
  ],
  "nextPage": [
   {
    "title": "Google Custom Search - lolcats",
    "totalResults": "655000",
    "searchTerms": "lolcats",
    "count": 10,
    "startIndex": 11,
    "inputEncoding": "utf8",
    "outputEncoding": "utf8",
    "safe": "off",
    "cx": "012680039554584055873:ni7dars4bne"
   }
  ]
 },
 "context": {
  "title": "imgAbsSearch"
 },
 "searchInformation": {
  "searchTime": 0.305226,
  "formattedSearchTime": "0.31",
  "totalResults": "655000",
  "formattedTotalResults": "655,000"
 },
 "items": [
  {
   "kind": "customsearch#result",
   "title": "LOLCats - Funny cat pictures",
   "htmlTitle": "\u003cb\u003eLOLCats\u003c/b\u003e - Funny cat pictures",
   "link": "http://www.lolcats.com/",
   "displayLink": "www.lolcats.com",
   "snippet": "Taste good but I can't feel my whiskers! by Jessica (Caption by Tove). Taste good \nbut I can't feel my whiskers! 0 Comments. Like! Dislike! Thanks for your rating! \n8556 likes, 1954 dislikes. Merry Christmas from LOLCats.com! by earlnbaker. \nMerry Christmas from LOLCats.com! 0 Comments. Like! Dislike! Thanks for your \nrating ...",
   "htmlSnippet": "Taste good but I can't feel my whiskers! by Jessica (Caption by Tove). Taste good \u003cbr\u003e\nbut I can't feel my whiskers! 0 Comments. Like! Dislike! Thanks for your rating! \u003cbr\u003e\n8556 likes, 1954 dislikes. Merry Christmas from \u003cb\u003eLOLCats\u003c/b\u003e.com! by earlnbaker. \u003cbr\u003e\nMerry Christmas from \u003cb\u003eLOLCats\u003c/b\u003e.com! 0 Comments. Like! Dislike! Thanks for your \u003cbr\u003e\nrating ...",
   "cacheId": "MI2H_uq7CSgJ",
   "formattedUrl": "www.lolcats.com/",
   "htmlFormattedUrl": "www.\u003cb\u003elolcats\u003c/b\u003e.com/",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "222",
      "height": "227",
      "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8hkDSbxoKKNODgZDDb_nZyi6WEMvIH3x-bbcRmXrGwdDTQ397HuQg2cc"
     }
    ],
    "metatags": [
     {
      "fb:app_id": "129294947206929",
      "og:title": "LOLCats.com - Funny cat pictures",
      "og:site_name": "LOLCats.com",
      "og:image": "http://www.lolcats.com/images/logo.png",
      "fb:page_id": "271571096186890"
     }
    ],
    "cse_image": [
     {
      "src": "http://www.lolcats.com/images/u/13/39/tastegood.jpg"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Lolcats - LOL at Funny Cat Memes - Funny cat pictures with words ...",
   "htmlTitle": "\u003cb\u003eLolcats\u003c/b\u003e - LOL at Funny Cat Memes - Funny cat pictures with words ...",
   "link": "http://icanhas.cheezburger.com/lolcats",
   "displayLink": "icanhas.cheezburger.com",
   "snippet": "LOLcats is the best place to find and submit funny cat memes and other silly cat \nmaterials to share with the world. We find the funny cats that make you LOL so \nthat you don't have to.",
   "htmlSnippet": "\u003cb\u003eLOLcats\u003c/b\u003e is the best place to find and submit funny cat memes and other silly cat \u003cbr\u003e\nmaterials to share with the world. We find the funny cats that make you LOL so \u003cbr\u003e\nthat you don't have to.",
   "cacheId": "h30RIBfSV0cJ",
   "formattedUrl": "icanhas.cheezburger.com/lolcats",
   "htmlFormattedUrl": "icanhas.cheezburger.com/\u003cb\u003elolcats\u003c/b\u003e",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "259",
      "height": "194",
      "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRye8WzwXsI0hQ4WOR-HlYVRAJIZOxLrQFfTP26mVEK_v9abvGz_BKoM-Oz"
     }
    ],
    "metatags": [
     {
      "handheldfriendly": "True",
      "mobileoptimized": "320",
      "viewport": "width=device-width,minimum-scale=1.0,maximum-scale=5.0,user-scalable=yes",
      "fb:app_id": "151927811548639",
      "fb:pages": "34729731472",
      "msapplication-id": "Cheezburger.Cheezburger",
      "msapplication-packagefamilyname": "Cheezburger.Cheezburger_a2ma4xw3wqp06",
      "p:domain_verify": "8b17fa9140551390d0f75e01dcf78693",
      "apple-itunes-app": "app-id=",
      "og:site_name": "Lolcats",
      "og:url": "http://icanhas.cheezburger.com/lolcats",
      "og:title": "Lolcats",
      "og:description": "LOLcats is the best place to find and submit funny cat memes and other silly cat materials to share with the world. We find the funny cats that make you LOL so that you don't have to.",
      "og:type": "website",
      "og:image": "https://i.chzbgr.com/original/9159325184/h916BE3B5/",
      "og:image:width": "500",
      "og:image:height": "375"
     }
    ],
    "cse_image": [
     {
      "src": "https://i.chzbgr.com/original/9159325184/h916BE3B5/"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Lolcat - Wikipedia",
   "htmlTitle": "\u003cb\u003eLolcat\u003c/b\u003e - Wikipedia",
   "link": "https://en.wikipedia.org/wiki/Lolcat",
   "displayLink": "en.wikipedia.org",
   "snippet": "A lolcat is an image macro of one or more cats. The image's text is often \nidiosyncratic and grammatically incorrect, and is known as lolspeak. Lolcat is a \ncompound word of the acronymic abbreviation for LOL (laugh out loud) and the \nword cat. A synonym for lolcat is cat macro, since the images are a type of image \nmacro.",
   "htmlSnippet": "A \u003cb\u003elolcat\u003c/b\u003e is an image macro of one or more cats. The image's text is often \u003cbr\u003e\nidiosyncratic and grammatically incorrect, and is known as lolspeak. \u003cb\u003eLolcat\u003c/b\u003e is a \u003cbr\u003e\ncompound word of the acronymic abbreviation for LOL (laugh out loud) and the \u003cbr\u003e\nword cat. A synonym for \u003cb\u003elolcat\u003c/b\u003e is cat macro, since the images are a type of image \u003cbr\u003e\nmacro.",
   "cacheId": "mWN8k5Vm7pAJ",
   "formattedUrl": "https://en.wikipedia.org/wiki/Lolcat",
   "htmlFormattedUrl": "https://en.wikipedia.org/wiki/\u003cb\u003eLolcat\u003c/b\u003e",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "259",
      "height": "194",
      "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR8LUEt5uOijLCeeboL0hqtZpiUaB7DFanHJqdlKw6OgjkypAo5FFsfTSo"
     }
    ],
    "metatags": [
     {
      "referrer": "origin",
      "og:image": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Cat_crying_%28Lolcat%29.jpg"
     }
    ],
    "cse_image": [
     {
      "src": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Cat_crying_%28Lolcat%29.jpg"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "I Can Has Cheezburger? - Funny Animals Online - Cheezburger",
   "htmlTitle": "I Can Has Cheezburger? - Funny Animals Online - Cheezburger",
   "link": "http://icanhas.cheezburger.com/",
   "displayLink": "icanhas.cheezburger.com",
   "snippet": "World's largest collection of cat memes and other animals.",
   "htmlSnippet": "World's largest collection of cat memes and other animals.",
   "cacheId": "N2XJT_l52vEJ",
   "formattedUrl": "icanhas.cheezburger.com/",
   "htmlFormattedUrl": "icanhas.cheezburger.com/",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "195",
      "height": "258",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRtvldq8_pjtvRIEinL0O1zUJuPL_UnE7c6VJ5CkudgSfTxq1NKTR4P3Y-e"
     }
    ],
    "metatags": [
     {
      "handheldfriendly": "True",
      "mobileoptimized": "320",
      "viewport": "width=device-width,minimum-scale=1.0,maximum-scale=5.0,user-scalable=yes",
      "fb:app_id": "151927811548639",
      "fb:pages": "34729731472",
      "msapplication-id": "Cheezburger.Cheezburger",
      "msapplication-packagefamilyname": "Cheezburger.Cheezburger_a2ma4xw3wqp06",
      "p:domain_verify": "8b17fa9140551390d0f75e01dcf78693",
      "apple-itunes-app": "app-id=",
      "og:site_name": "I Can Has Cheezburger?",
      "og:url": "http://icanhas.cheezburger.com",
      "og:title": "I Can Has Cheezburger?",
      "og:description": "World's largest collection of cat memes and other animals",
      "og:type": "website",
      "og:image": "https://i.chzbgr.com/thumb800/5564165/h94F2BB2A/",
      "og:image:width": "800",
      "og:image:height": "420"
     }
    ],
    "cse_image": [
     {
      "src": "https://i.chzbgr.com/full/9160849152/h47826CEE/"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "LOLcats | Know Your Meme",
   "htmlTitle": "\u003cb\u003eLOLcats\u003c/b\u003e | Know Your Meme",
   "link": "http://knowyourmeme.com/memes/lolcats",
   "displayLink": "knowyourmeme.com",
   "snippet": "LOLcats are a series of image macros consisting of humorous photos of cats with \nsuperimposed text written in a form of broken English known as lolspeak.",
   "htmlSnippet": "\u003cb\u003eLOLcats\u003c/b\u003e are a series of image macros consisting of humorous photos of cats with \u003cbr\u003e\nsuperimposed text written in a form of broken English known as lolspeak.",
   "cacheId": "U7xSedql_W8J",
   "formattedUrl": "knowyourmeme.com/memes/lolcats",
   "htmlFormattedUrl": "knowyourmeme.com/memes/\u003cb\u003elolcats\u003c/b\u003e",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "186",
      "height": "271",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4QxMKw15gaj4UdKCBNReoJ4DSuY0fzW1D0MAKnR4KYikr0Sisiu70xZo"
     }
    ],
    "metatags": [
     {
      "og:title": "LOLcats",
      "og:site_name": "Know Your Meme",
      "og:image": "http://i0.kym-cdn.com/entries/icons/facebook/000/000/018/happycat.jpg",
      "og:image:width": "600",
      "og:image:height": "315",
      "og:type": "article",
      "fb:app_id": "104675392961482",
      "fb:pages": "88519108736",
      "article:publisher": "http://facebook.com/knowyourmeme",
      "og:url": "http://knowyourmeme.com/memes/lolcats",
      "og:description": "LOLcats are a series of image macros consisting of humorous photos of cats with superimposed text written in a form of broken English known as lolspeak.",
      "p:domain_verify": "3fa925d06e2f3c4af076ced1e6e951cf"
     }
    ],
    "article": [
     {
      "mainentityofpage": "http://knowyourmeme.com/memes/lolcats",
      "headline": "LOLcats",
      "thumbnailurl": "http://i0.kym-cdn.com/entries/icons/original/000/000/018/happycat.jpg",
      "datecreated": "2008-12-12T15:11:45-05:00",
      "datepublished": "2008-12-12T15:11:45-05:00",
      "datemodified": "2018-05-03T10:40:39-04:00",
      "interactioncount": "UserComments:43"
     }
    ],
    "imageobject": [
     {
      "url": "http://a.kym-cdn.com/assets/logo.jpg",
      "height": "720",
      "width": "720"
     },
     {
      "url": "http://i0.kym-cdn.com/entries/icons/original/000/000/018/happycat.jpg",
      "height": "397",
      "width": "273"
     }
    ],
    "person": [
     {
      "name": "Jamie Dubs",
      "url": "http://knowyourmeme.com/users/jamie-dubs"
     }
    ],
    "organization": [
     {
      "name": "Know Your Meme"
     }
    ],
    "cse_image": [
     {
      "src": "http://i0.kym-cdn.com/entries/icons/facebook/000/000/018/happycat.jpg"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Urban Dictionary: lolcat",
   "htmlTitle": "Urban Dictionary: \u003cb\u003elolcat\u003c/b\u003e",
   "link": "https://www.urbandictionary.com/define.php?term=lolcat",
   "displayLink": "www.urbandictionary.com",
   "snippet": "A photo of a cat doing a seemingly-innocuous thing, with large text superimposed\n. Sort of an offshoot of the orly owl. Also called cat macros.",
   "htmlSnippet": "A photo of a cat doing a seemingly-innocuous thing, with large text superimposed\u003cbr\u003e\n. Sort of an offshoot of the orly owl. Also called cat macros.",
   "cacheId": "d1vKHReTriIJ",
   "formattedUrl": "https://www.urbandictionary.com/define.php?term=lolcat",
   "htmlFormattedUrl": "https://www.urbandictionary.com/define.php?term=\u003cb\u003elolcat\u003c/b\u003e",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "250",
      "height": "182",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXZ9DDwMwSl_Uy-TLrUhxYoZZ7sMQNEJhDxNZz8TS4HcQbC9T-VffDXDI"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1.0, user-scalable = no",
      "apple-mobile-web-app-title": "UrbanDict",
      "apple-mobile-web-app-capable": "yes",
      "fb:app_id": "169142139769391",
      "twitter:description": "A photo of a cat doing a seemingly-innocuous thing, with large text superimposed. Sort of an offshoot of the orly owl. Also called cat macros",
      "twitter:title": "Urban Dictionary: lolcat",
      "og:title": "Urban Dictionary: lolcat",
      "twitter:site": "@urbandictionary",
      "og:site_name": "Urban Dictionary"
     }
    ],
    "cse_image": [
     {
      "src": "https://d2gatte9o95jao.cloudfront.net/assets/mug-ad-02@2x-5e65e4fe0daf91156b197594c58445606b861fc9317ca6c02fad7b75dfb58e22.png"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "GitHub - busyloop/lolcat: Rainbows and unicorns!",
   "htmlTitle": "GitHub - busyloop/\u003cb\u003elolcat\u003c/b\u003e: Rainbows and unicorns!",
   "link": "https://github.com/busyloop/lolcat",
   "displayLink": "github.com",
   "snippet": "GitHub is where people build software. More than 27 million people use GitHub \nto discover, fork, and contribute to over 80 million projects.",
   "htmlSnippet": "GitHub is where people build software. More than 27 million people use GitHub \u003cbr\u003e\nto discover, fork, and contribute to over 80 million projects.",
   "cacheId": "q26wF3DDaMwJ",
   "formattedUrl": "https://github.com/busyloop/lolcat",
   "htmlFormattedUrl": "https://github.com/busyloop/\u003cb\u003elolcat\u003c/b\u003e",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "225",
      "height": "225",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT32hux3dC5kPpHVhJltts2L126kjzfSq9BVAkxKhDrIJIew9h5ZLKSml8"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width",
      "fb:app_id": "1401488693436528",
      "og:image": "https://avatars0.githubusercontent.com/u/969557?s=400&v=4",
      "og:site_name": "GitHub",
      "og:type": "object",
      "og:title": "busyloop/lolcat",
      "og:url": "https://github.com/busyloop/lolcat",
      "og:description": "Rainbows and unicorns! Contribute to lolcat development by creating an account on GitHub.",
      "pjax-timeout": "1000",
      "request-id": "9006:7C8B:2C53FC6:43C947D:5AF06308",
      "google-analytics": "UA-3769691-2",
      "octolytics-host": "collector.githubapp.com",
      "octolytics-app-id": "github",
      "octolytics-event-url": "https://collector.githubapp.com/github-external/browser_event",
      "octolytics-dimension-request_id": "9006:7C8B:2C53FC6:43C947D:5AF06308",
      "octolytics-dimension-region_edge": "sea",
      "octolytics-dimension-region_render": "iad",
      "analytics-location": "/\u003cuser-name\u003e/\u003crepo-name\u003e",
      "dimension1": "Logged Out",
      "hostname": "github.com",
      "expected-hostname": "github.com",
      "js-proxy-site-detection-payload": "Zjc1YjNmOTNlZWQyNWI3MzU4OGMzZWRjYzFiNzM4OGNmYTNlYjE4ZDhhZjMzODJiNmEyNDBiMjJkMDQ1YjZmOXx7InJlbW90ZV9hZGRyZXNzIjoiNjYuMjQ5Ljc5LjMwIiwicmVxdWVzdF9pZCI6IjkwMDY6N0M4QjoyQzUzRkM2OjQzQzk0N0Q6NUFGMDYzMDgiLCJ0aW1lc3RhbXAiOjE1MjU3MDM0MzMsImhvc3QiOiJnaXRodWIuY29tIn0=",
      "enabled-features": "UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_SELF_SERVE,MARKETPLACE_FREE_APPS,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES",
      "html-safe-nonce": "1f4254c697e87cc2eb05a089e81b77d6e03f8569",
      "go-import": "github.com/busyloop/lolcat git https://github.com/busyloop/lolcat.git",
      "octolytics-dimension-user_id": "969557",
      "octolytics-dimension-user_login": "busyloop",
      "octolytics-dimension-repository_id": "2185269",
      "octolytics-dimension-repository_nwo": "busyloop/lolcat",
      "octolytics-dimension-repository_public": "true",
      "octolytics-dimension-repository_is_fork": "false",
      "octolytics-dimension-repository_network_root_id": "2185269",
      "octolytics-dimension-repository_network_root_nwo": "busyloop/lolcat",
      "octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown": "false",
      "browser-stats-url": "https://api.github.com/_private/browser/stats",
      "browser-errors-url": "https://api.github.com/_private/browser/errors",
      "theme-color": "#1e2327"
     }
    ],
    "listitem": [
     {
      "url": "Code",
      "name": "Code",
      "position": "1"
     },
     {
      "url": "Issues 0",
      "name": "Issues",
      "position": "2"
     },
     {
      "url": "Pull requests 0",
      "name": "Pull requests",
      "position": "3"
     }
    ],
    "softwaresourcecode": [
     {
      "author": "busyloop",
      "name": "lolcat",
      "about": "Rainbows and unicorns!",
      "keywords": "Ruby",
      "datemodified": "18 days ago",
      "license": "LICENSE",
      "text": "What? Screenshot Installation $ gem install lolcat"
     }
    ],
    "cse_image": [
     {
      "src": "https://avatars0.githubusercontent.com/u/969557?s=400&v=4"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "lolcats",
   "htmlTitle": "\u003cb\u003elolcats\u003c/b\u003e",
   "link": "https://www.reddit.com/r/lolcats/",
   "displayLink": "www.reddit.com",
   "snippet": "Reddit gives you the best of the internet in one place. Get a constantly updating \nfeed of breaking news, fun stories, pics, memes, and videos just for you. \nPassionate about something niche? Reddit has thousands of vibrant \ncommunities with people that share your interests. Alternatively, find out what's \ntrending across all of ...",
   "htmlSnippet": "Reddit gives you the best of the internet in one place. Get a constantly updating \u003cbr\u003e\nfeed of breaking news, fun stories, pics, memes, and videos just for you. \u003cbr\u003e\nPassionate about something niche? Reddit has thousands of vibrant \u003cbr\u003e\ncommunities with people that share your interests. Alternatively, find out what's \u003cbr\u003e\ntrending across all of ...",
   "cacheId": "-j8kpmPABo0J",
   "formattedUrl": "https://www.reddit.com/r/lolcats/",
   "htmlFormattedUrl": "https://www.reddit.com/r/\u003cb\u003elolcats\u003c/b\u003e/",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "225",
      "height": "225",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmlcAvu2a2ZymPNT9DRuLZVfS9RfmNbEMNun3XiGEGnPfh0-cvMpEcu_o"
     }
    ],
    "metatags": [
     {
      "referrer": "always",
      "viewport": "width=1024",
      "og:image": "https://www.redditstatic.com/icon.png",
      "og:site_name": "reddit",
      "og:description": "reddit: the front page of the internet",
      "og:title": "lolcats • r/lolcats",
      "twitter:site": "reddit",
      "twitter:card": "summary",
      "twitter:title": "lolcats • r/lolcats",
      "msapplication-tilecolor": "#ffffff",
      "msapplication-tileimage": "//www.redditstatic.com/desktop2x/img/favicon/ms-icon-144x144.png",
      "theme-color": "#ffffff"
     }
    ],
    "cse_image": [
     {
      "src": "https://www.redditstatic.com/icon.png"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "I Can Has Cheezburger?: A LOLcat Colleckshun: Professor ...",
   "htmlTitle": "I Can Has Cheezburger?: A \u003cb\u003eLOLcat\u003c/b\u003e Colleckshun: Professor ...",
   "link": "https://www.amazon.com/Can-Has-Cheezburger-LOLcat-Colleckshun/dp/159240409X",
   "displayLink": "www.amazon.com",
   "snippet": "The Internet has provided us with many wonders, from skateboarding dogs to \nChuck Norris facts. Over the past year, though, one sensation has dominated the \nWeb: LOLcats. Here's how it works: First you find a picture of a cat online, and \nthen you add a caption that reflects the cat's point of view. Just remember that \nalthough ...",
   "htmlSnippet": "The Internet has provided us with many wonders, from skateboarding dogs to \u003cbr\u003e\nChuck Norris facts. Over the past year, though, one sensation has dominated the \u003cbr\u003e\nWeb: \u003cb\u003eLOLcats\u003c/b\u003e. Here's how it works: First you find a picture of a cat online, and \u003cbr\u003e\nthen you add a caption that reflects the cat's point of view. Just remember that \u003cbr\u003e\nalthough ...",
   "cacheId": "GEARcNRyIBYJ",
   "formattedUrl": "https://www.amazon.com/Can-Has...LOLcat.../dp/159240409X",
   "htmlFormattedUrl": "https://www.amazon.com/Can-Has...\u003cb\u003eLOLcat\u003c/b\u003e.../dp/159240409X",
   "pagemap": {
    "scraped": [
     {
      "image_link": "https://images-na.ssl-images-amazon.com/images/I/61GqH2aRVZL._SX258_BO1,204,203,200_.jpg"
     }
    ],
    "cse_thumbnail": [
     {
      "width": "223",
      "height": "226",
      "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZ2x2NOI0LOBCq0BiepzpeJew7Nb2_Cu2iRhEvIbz7-xx0QSLBlpnV7-J4"
     }
    ],
    "metatags": [
     {
      "og:url": "http://www.amazon.com/dp/159240409X/ref=tsm_1_fb_lk",
      "og:title": "I Can Has Cheezburger?: A LOLcat Colleckshun",
      "og:description": "The Internet has provided us with many wonders, from skateboarding dogs to Chuck Norris facts. Over the past year, though, one sensation has dominated the Web: LOLcats. Here’s how it works: First you find a picture of a cat online, and then you add a caption that reflects the cat’s po...",
      "og:image": "https://images-na.ssl-images-amazon.com/images/I/61GqH2aRVZL._SR600%2c315_PIWhiteStrip%2cBottomLeft%2c0%2c35_PIAmznPrime%2cBottomLeft%2c0%2c-5_PIStarRatingFOUR%2cBottomLeft%2c360%2c-6_SR600%2c315_ZA(133%20Reviews)%2c445%2c291%2c400%2c400%2carial%2c12%2c4%2c0%2c0%2c5_SCLZZZZZZZ_.jpg",
      "title": "I Can Has Cheezburger?: A LOLcat Colleckshun: Professor Happycat, icanhascheezburger.com: 9781592404094: Amazon.com: Books"
     }
    ],
    "cse_image": [
     {
      "src": "https://images-na.ssl-images-amazon.com/images/I/61GqH2aRVZL._SX258_BO1,204,203,200_.jpg"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Lolcats the Musical (A Lolcat Parody Song) - YouTube",
   "htmlTitle": "\u003cb\u003eLolcats\u003c/b\u003e the Musical (A \u003cb\u003eLolcat\u003c/b\u003e Parody Song) - YouTube",
   "link": "https://www.youtube.com/watch?v=r7yOD_2gA_k",
   "displayLink": "www.youtube.com",
   "snippet": "Jan 17, 2013 ... GET MP3 ON ITUNES, AMAZON! iTunes: https://itunes.apple.com/us/album/\nlolcats-the-musical/id616843942?i=616844658&app=itunes Amazon: http://bit.ly/\nREAmazonLol...",
   "htmlSnippet": "Jan 17, 2013 \u003cb\u003e...\u003c/b\u003e GET MP3 ON ITUNES, AMAZON! iTunes: https://itunes.apple.com/us/album/\u003cbr\u003e\n\u003cb\u003elolcats\u003c/b\u003e-the-musical/id616843942?i=616844658&app=itunes Amazon: http://bit.ly/\u003cbr\u003e\nREAmazonLol...",
   "cacheId": "h795NGVEbPkJ",
   "formattedUrl": "https://www.youtube.com/watch?v=r7yOD_2gA_k",
   "htmlFormattedUrl": "https://www.youtube.com/watch?v=r7yOD_2gA_k",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "300",
      "height": "168",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRz2krGVF7GyblHULIM44B-KxbhQ71bk2jXhHzVcWMKZ0GMEdioeP6707oI"
     }
    ],
    "metatags": [
     {
      "title": "Lolcats the Musical (A Lolcat Parody Song)",
      "theme-color": "#ff0000",
      "og:site_name": "YouTube",
      "og:url": "https://www.youtube.com/watch?v=r7yOD_2gA_k",
      "og:title": "Lolcats the Musical (A Lolcat Parody Song)",
      "og:image": "https://i.ytimg.com/vi/r7yOD_2gA_k/maxresdefault.jpg",
      "og:description": "GET MP3 ON ITUNES, AMAZON! iTunes: https://itunes.apple.com/us/album/lolcats-the-musical/id616843942?i=616844658&app=itunes Amazon: http://bit.ly/REAmazonLol...",
      "al:ios:app_store_id": "544007664",
      "al:ios:app_name": "YouTube",
      "al:ios:url": "vnd.youtube://www.youtube.com/watch?v=r7yOD_2gA_k&feature=applinks",
      "al:android:url": "vnd.youtube://www.youtube.com/watch?v=r7yOD_2gA_k&feature=applinks",
      "al:android:app_name": "YouTube",
      "al:android:package": "com.google.android.youtube",
      "al:web:url": "https://www.youtube.com/watch?v=r7yOD_2gA_k&feature=applinks",
      "og:type": "video.other",
      "og:video:url": "https://www.youtube.com/embed/r7yOD_2gA_k",
      "og:video:secure_url": "https://www.youtube.com/embed/r7yOD_2gA_k",
      "og:video:type": "text/html",
      "og:video:width": "480",
      "og:video:height": "360",
      "og:video:tag": "lolcat",
      "fb:app_id": "87741124305",
      "twitter:card": "player",
      "twitter:site": "@youtube",
      "twitter:url": "https://www.youtube.com/watch?v=r7yOD_2gA_k",
      "twitter:title": "Lolcats the Musical (A Lolcat Parody Song)",
      "twitter:description": "GET MP3 ON ITUNES, AMAZON! iTunes: https://itunes.apple.com/us/album/lolcats-the-musical/id616843942?i=616844658&app=itunes Amazon: http://bit.ly/REAmazonLol...",
      "twitter:image": "https://i.ytimg.com/vi/r7yOD_2gA_k/maxresdefault.jpg",
      "twitter:app:name:iphone": "YouTube",
      "twitter:app:id:iphone": "544007664",
      "twitter:app:name:ipad": "YouTube"
     }
    ],
    "videoobject": [
     {
      "url": "https://www.youtube.com/watch?v=r7yOD_2gA_k",
      "name": "Lolcats the Musical (A Lolcat Parody Song)",
      "description": "GET MP3 ON ITUNES, AMAZON! iTunes: https://itunes.apple.com/us/album/lolcats-the-musical/id616843942?i=616844658&app=itunes Amazon: http://bit.ly/REAmazonLol...",
      "paid": "False",
      "channelid": "UCroJ5uxmGr-WOtXUPyqeh6g",
      "videoid": "r7yOD_2gA_k",
      "duration": "PT2M14S",
      "unlisted": "False",
      "thumbnailurl": "https://i.ytimg.com/vi/r7yOD_2gA_k/maxresdefault.jpg",
      "embedurl": "https://www.youtube.com/embed/r7yOD_2gA_k",
      "playertype": "HTML5 Flash",
      "width": "480",
      "height": "360",
      "isfamilyfriendly": "True",
      "regionsallowed": "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
      "interactioncount": "369641",
      "datepublished": "2013-01-17",
      "genre": "Gaming"
     }
    ],
    "imageobject": [
     {
      "url": "https://i.ytimg.com/vi/r7yOD_2gA_k/maxresdefault.jpg",
      "width": "1280",
      "height": "720"
     }
    ],
    "person": [
     {
      "url": "http://www.youtube.com/user/RandomEncountersEnt"
     },
     {
      "url": "https://plus.google.com/102031238084999767873"
     }
    ],
    "cse_image": [
     {
      "src": "https://i.ytimg.com/vi/r7yOD_2gA_k/maxresdefault.jpg"
     }
    ]
   }
  }
 ]
};

imgSearchRouter.get(/\w/, function(req, res) { 
  
  const query = req.query;
  const cx = '012680039554584055873:ni7dars4bne';
  const offset = query.offset;
  var searchTerm = req._parsedUrl.pathname.slice(1); 

  console.log(`https://www.googleapis.com/customsearch/v1?q=${searchTerm}&start=${offset}&cx=${cx}`);
  request(`https://www.googleapis.com/customsearch/v1?key=${process.env.KEY}&q=${searchTerm}&start=${offset}&cx=${cx}&imgSize=large`, function (error, response, body) {
    if (error) {
      debug(error);
    }
    if (!error && response.statusCode == 200) {
        var jsonObjDisplay = [];
        JSON.parse(body).items.forEach(item => {
        var object = {};
        object.title = item.title;
        if ("pagemap" in item) {
            if ("cse_image" in item.pagemap)
              object.url = `<a href = ${item.pagemap.cse_image[0].src}>` + item.pagemap.cse_image[0].src + '</a>' ;
            if ("cse_thumbnail" in item.pagemap)  
              object.thumbnail = `<a href = ${item.pagemap.cse_thumbnail[0].src}>` + item.pagemap.cse_thumbnail[0].src + '</a>';
        }
        object.context = `<a href = ${item.link}>` +  item.link + '</a>';
        jsonObjDisplay.push(object);
      });

      res.render('index', {jsonObj: jsonObjDisplay});
    }
    
    // Connection URL. This is where your mongodb server is running.
    const search_db = `mongodb://${process.env.USER}:${process.env.PASSWORD}@ds119640.mlab.com:19640/image_abs_search_db`;
    const dbName = 'image_abs_search_db';
    // Use connect method to connect to the Server
    (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(search_db);
          console.log('Connected correctly to server again');
          const db = client.db(dbName);
          var dbCount = await db.collection('searches').count();
          searchTerm = searchTerm.replace(/%20/g, " ");
          console.log(searchTerm);
          var jsonObj = {_id: (dbCount + 1).toString(), "search_term": searchTerm, "time": (new Date()).toLocaleString()};
          const response = await db.collection('searches').insertOne(jsonObj);
          db.close();
        } catch (err) {
          debug(err.stack)
        }
        client.close();
      }());
  })
})

module.exports = imgSearchRouter;

