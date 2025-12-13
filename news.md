---
layout: single
title: ""
permalink: /news/
---

<ul>
  {% for post in site.posts %}
    <li>
      <strong>{{ post.date | date: "%Y-%m-%d" }}</strong> —
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
