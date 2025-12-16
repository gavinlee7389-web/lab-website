---
layout: splash
title: ""
classes: home-hero
permalink: /
author_profile: false

header:
  overlay_color: "#7a1236"
  overlay_filter: "1"
  caption: '<div class="hero-brand">
   <div class="hero-title">Prof. Tao Cheng&apos;s Research Group</div>
   <div class="hero-subtitle">程 涛 教 授 课 题 组 主 页</div>
  </div>'
  
intro:
  - excerpt: ""

feature_row:
  - title: "Research"
    excerpt: "了解我们正在进行的主要研究方向。"
    url: "/lab-website/research/"
    btn_label: "More about research"
    btn_class: "btn--primary"

  - title: "People"
    excerpt: "认识课题组的 PI、博士后、博士生、硕士生。"
    url: "/lab-website/people/"
    btn_label: "Meet the team"
    btn_class: "btn--primary"

  - title: "Publications"
    excerpt: "查看我们的代表性工作与最新论文。"
    url: "/lab-website/publications/"
    btn_label: "See publications"
    btn_class: "btn--primary"
---
<div class="full-bleed">
  <div class="slider" data-autoplay="true" data-interval="4500">
    <div class="slides">
      <div class="slide is-active">
        <img src="/lab-website/assets/images/slider/01.jpg" alt="slide 1">
      </div>
      <div class="slide">
        <img src="/lab-website/assets/images/slider/02.jpg" alt="slide 2">
      </div>
      <div class="slide">
        <img src="/lab-website/assets/images/slider/03.jpg" alt="slide 3">
      </div>
    </div>

    <button class="slider-btn prev" aria-label="Previous">‹</button>
    <button class="slider-btn next" aria-label="Next">›</button>

    <div class="dots" aria-label="Slide dots">
      <button class="dot is-active" aria-label="Go to slide 1"></button>
      <button class="dot" aria-label="Go to slide 2"></button>
      <button class="dot" aria-label="Go to slide 3"></button>
    </div>
  </div>
</div>

{% include feature_row id="intro" type="center" %}
{% include feature_row %}

<hr>

## Latest News

<ul>
  {% for post in site.posts limit:3 %}
    <li>
      <strong>{{ post.date | date: "%Y-%m-%d" }}</strong> —
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

<a class="btn btn--primary" href="{{ '/news/' | relative_url }}">More News</a>
