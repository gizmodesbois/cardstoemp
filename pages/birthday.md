---
layout: layouts/base.njk
title: Happy birthday
date: 2019-03-21T00:00:00.000Z
permalink: /
navtitle: Happy Birthday
---

<div class="birthday">
    <a href="https://github.com/gizmodesbois/cardstoemp" style="position: fixed; top: 0; right: 0;
    z-index: 200;"><img width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1"></a>
    {%- for page in collections.page -%}
      <section class="birthday__section">
      <div class="birthday__frame">
        <iframe class="birthday__iframe" src="{{page.url}}" frameborder="0"></iframe>
        </div>
      </section>
    {%- endfor -%}
</div>
