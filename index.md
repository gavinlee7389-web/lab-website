---
layout: splash
title: "Cheng Lab"
classes: home-hero
permalink: /
author_profile: false

header:
  overlay_color: "#7a1236"
  
intro:
  - excerpt: >
      欢迎来到 **Cheng Lab** 课题组网站！

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
<div class="home-photo">
  <img src="/lab-website/assets/images/banner.jpg" alt="Lab photo">
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
