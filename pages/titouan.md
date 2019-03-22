---
layout: layouts/base.njk
title: Titouan
date: 2019-03-21T00:00:00.000Z
permalink: /titouan.html
tags: "page"
navtitle: Titouan
---
<link href="https://fonts.googleapis.com/css?family=Oswald:700" rel="stylesheet"> 
<style>
  .titouan{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: 'Oswald';
}
.titouan > p{
  position: absolute;
  bottom: 0;
  right: 0;
}
.titouan > h1{
  font-size: 10px;
  color: green;
  animation: moveshadows 4s infinite;
}
@keyframes moveshadows{
  0%{
    text-shadow: 
    10px 10px 0 red,
    20px 20px 0 blue,
    30px 30px 0 red,
    40px 40px 0 blue,
    50px 50px 0 red,
    60px 60px 0 blue,
    70px 70px 0 red,
    80px 80px 0 blue,
    90px 90px 0 red,
    100px 100px 0 blue;
  }
  25%{
    text-shadow: 
     10px -10px 0 red,
    20px -20px 0 blue,
    30px -30px 0 red,
    40px -40px 0 blue,
    50px -50px 0 red,
    60px -60px 0 blue,
    70px -70px 0 red,
    80px -80px 0 blue,
    90px -90px 0 red,
    100px -100px 0 blue;
  }
  50%{
    text-shadow: 
    -10px -10px 0 red,
    -20px -20px 0 blue,
    -30px -30px 0 red,
    -40px -40px 0 blue,
    -50px -50px 0 red,
    -60px -60px 0 blue,
    -70px -70px 0 red,
    -80px -80px 0 blue,
    -90px -90px 0 red,
    -100px -100px 0 blue;
  }
  75%{
    text-shadow: 
    -10px 10px 0 red,
    -20px 20px 0 blue,
    -30px 30px 0 red,
    -40px 40px 0 blue,
    -50px 50px 0 red,
    -60px 60px 0 blue,
    -70px 70px 0 red,
    -80px 80px 0 blue,
    -90px 90px 0 red,
    -100px 100px 0 blue;
  }
  100%{
    text-shadow: 
    10px 10px 0 red,
    20px 20px 0 blue,
    30px 30px 0 red,
    40px 40px 0 blue,
    50px 50px 0 red,
    60px 60px 0 blue,
    70px 70px 0 red,
    80px 80px 0 blue,
    90px 90px 0 red,
    100px 100px 0 blue;
  }
}
</style>

<section class="titouan">

  <h1>HAPPY BIRTHDAY</h1>
  <p>Flo et Tit</p>

</section>
