---
layout: layouts/base.njk
title: Happy birthday
date: 2019-03-21T00:00:00.000Z
permalink: /
navtitle: Happy Birthday
---

<div class="birthday">
    {%- for page in collections.page -%}
      <section class="birthday__section">
      <div class="birthday__frame">
        <iframe class="birthday__iframe" src="{{page.url}}" frameborder="0"></iframe>
        </div>
      </section>
    {%- endfor -%}
</div>
