---
layout: single
title: ""
permalink: /publications/
---

{% assign pubs = site.publications | sort: "year" | reverse %}

{% assign years = pubs | map: "year" | uniq %}

{% for y in years %}
## {{ y }}

<ul>
  {% for p in pubs %}
    {% if p.year == y %}
      <li>
        <strong>{{ p.title }}</strong><br>
        {% if p.authors %}{{ p.authors }}<br>{% endif %}
        {% if p.journal %}<em>{{ p.journal }}</em>{% endif %}
        {% if p.doi %} — <a href="{{ p.doi }}">DOI</a>{% endif %}
      </li>
    {% endif %}
  {% endfor %}
</ul>

{% endfor %}
