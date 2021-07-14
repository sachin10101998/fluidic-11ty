---
layout: layouts/posts.njk
title: Articles
lang: fr-CA
translationKey: posts
eleventyNavigation:
  parent: fr-CA
  key: Articles
  order: 3
permalink: "/fr/articles/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
pagination:
  data: collections.posts_fr-CA
  size: 10
  alias: posts
---
