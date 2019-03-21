---
layout: layouts/base.njk
title: Home
date: 2019-03-21T00:00:00.000Z
permalink: /
navtitle: Home
---

![](https://www.webstoemp.com/img/me-1024.jpg)

# WIP Cardstoemp

## Hi There, fellow friend of [@jeromecoupe](https://twitter.com/jeromecoupe)

![](https://media.giphy.com/media/vnMiqMnXBBbGw/giphy.gif)

As you may, or may not know, tomorrow 22/03/19 will be the birthday of our friend, colleague and teacher [@jeromecoupe](https://twitter.com/jeromecoupe)

But lets face it, sending birthday cards is so 2018. Still, we want to find a way to congratulate Jérome for the great person he is.
That's why we ([Simon](https://twitter.com/henrottesimon) and [Julien](https://twitter.com/thylo)) thought about sending him a "Stoemp" of pages created by his friend. It can contain pretty much any thing you want, it doesn't have to be the nicest webpage you've ever made, it just have to be a part of you.

We are saddly a bit late to the party so please share this with anyone who might be interested in participating. We plan on sending a netlify link to him the 22/03/2019 at 7pm

## How to use it

```
npm install
npm run dev
```

## How to contribute

Please DM [Simon](https://twitter.com/henrottesimon) or [Julien](https://twitter.com/thylo) with your github handle and we'll add you to the super secret repository we've created.

Create a new page inside the `/pages` directory. You can take the `home.md` as reference. You can also create your own layouts inside the `_includes/layouts` directory. Don't forget to add the right informations for the page (link, meta, ...)

## How to submit

Create a new branch and submit a PR to the project.

## Constraints

Please scope your css to your own `<section>` to avoid side effects, each section will be displayed within a `100vw, 100vh` container.

## Current contributors
<ul>
    {%- for page in collections.page -%}
      <li><a href="{{page.url}}">{{ page.data.title }}</a></li>
    {%- endfor -%}
</ul>
