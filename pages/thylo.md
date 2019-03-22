---
layout: layouts/base.njk
title: Thylo
date: 2019-03-21T00:00:00.000Z
permalink: /thylo.html
navtitle: Thylo
tags: "page"
---

<div class="thylo">
    <div class="thylo-cake">
        <img src="/assets/thylo/cake_animation.gif" alt="the cake is a lie">
    </div> 
<pre>
  _   _                           ____  _      _   _         _             
 | | | | __ _ _ __  _ __  _   _  | __ )(_)_ __| |_| |__   __| | __ _ _   _ 
 | |_| |/ _` | '_ \| '_ \| | | | |  _ \| | '__| __| '_ \ / _` |/ _` | | | |
 |  _  | (_| | |_) | |_) | |_| | | |_) | | |  | |_| | | | (_| | (_| | |_| |
 |_| |_|\__,_| .__/| .__/ \__, | |____/|_|_|   \__|_| |_|\__,_|\__,_|\__, |
             |_|   |_|    |___/                                      |___/ 
</pre>
<button class="thylo-button" data-label="Do not click me" onclick="onThyloBtnClick()"></button>
    </div>
    <span class="thylo__signature">Thylo</span> 
</div>

<script>
function onThyloBtnClick(){
    var txt;
    var r = confirm("Are you sure ?");
    if (r == true) {
      alert("You have been warned...");
      window.open('https://www.youtube.com/watch?v=inS9gAgSENE');
    } else {
      alert("Coward...");
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
}
</script>
