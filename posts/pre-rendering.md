---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

# 1. Next.js 연습 4 - 1 Dynamic Routes

## 요구 사항!

- 현재 까지 아래 두개 md 파일들이 있다.
  - posts/ssg-ssr.md
  - posts/pre-rendering.md
- 요구사항

  - SSG 사용해서
  - url: /posts/ssg-ssr 이면 posts/ssg-ssr.md를 읽어서 보여준다
  - url: /posts/pre-rendering 이면 posts/pre-rendering.md를 읽어서 보여 준다

- ⭐️ /pages/posts/[slug].js 가 떠올랐어야 한다.

  - dynamic Routes를 사용 한다는 이야기다!
  - slug는 편의상 id로 하자
    - 이유는 저번시간에 posts 목록을 가져올때 id로 파일이름을 전달했던 걸 기억!

```
console.log('hi there');
```
