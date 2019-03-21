---
layout: layouts/base.njk
title: Happy birthday
date: 2019-03-21T00:00:00.000Z
permalink: /birthday.html
navtitle: Happy Birthday
---

<style type="text/css">
   body,html{
    padding:0;
    margin:0;
   }
  .birthday{
    background: #F3904F;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3B4371, #F3904F);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3B4371, #F3904F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
    .birthday__section{
      width:100vw;
      height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
    }
    .birthday__iframe{
          width:800px;
          height:600px;
          overflow: scroll;
          background: white;
        }
</style>
<div class="birthday">
    {%- for page in collections.page -%}
      <section class="birthday__section">
        <iframe class="birthday__iframe" src="{{page.url}}" frameborder="0"></iframe>
      </section>
    {%- endfor -%}
</div>
