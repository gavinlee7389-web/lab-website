---
layout: splash
title: "Your Lab Name"
permalink: /
author_profile: false

header:
  overlay_color: "#000"
  overlay_filter: "0.35"
  overlay_image: /assets/images/banner.jpg
  caption: "Your Lab Name @ Your Institution"
  actions:
    - label: "Join Us"
      url: "/lab-website/contact/"

intro:
  - excerpt: >
      欢迎来到 **Your Lab Name** 课题组网站！这里是你们的研究简介，例如：
      - 所属单位 / 医院 / 学院
      - 主要研究方向（肿瘤共病、炎症–免疫–代谢–衰老等）
      - 是否在招收博士 / 硕士 / 博后

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

{% include feature_row id="intro" type="center" %}
{% include feature_row %}
