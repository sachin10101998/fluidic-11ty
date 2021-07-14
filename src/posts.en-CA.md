---
layout: layouts/posts.njk
title: Posts
lang: en-CA
translationKey: posts
eleventyNavigation:
  parent: en-CA
  key: Posts
  order: 3
permalink: "/posts/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
pagination:
  data: collections.posts_en-CA
  size: 10
  alias: posts
---
