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

## SSG 활용해서 다이나믹한 page들을 생성하려면?

- getStaticPaths가 필요하다.
- ⭐️ getStaticPaths는 생성해둬야 하는 페이지 정보를 배열로 반환해야 한다.
- ⭐️ getStaticPaths는 getStaticProps와 함께 SSG를 페이지를 생성하기 위한 함수이다.

### 포스트 이름을 모두 가져오는 함수(getAllPostIds)

- https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticpaths

### id를 가지고 포스트의 내용을 가져오는 함수(getPostData)

- https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticprops

## 에러들을 일부러 내면서 고쳐보자

- getStaticProps 2번 반복하거나
- 함수를 import 하지 않거나
- postData를 page에서 props로 받지 않거나

## \*.md 파일을 해석해서 html로 변경하기!

```
yarn add remark remark-html
```

- lib/posts.js 의 getPostData 함수를 확장

```
https://nextjs.org/learn/basics/dynamic-routes/render-markdown
```

## remark와 remark-html은 markdown을 html 로 치환해주는 역할을 해줌 몇가지 작성해보자~~

## Date formatting 도구 설치

```
yarn add date-fns
```

- 아래 두개의 객체 (위 패키지의)
  - parseISO
  - format

## index.js에 노출되는 글 목록, 글 상세 폴리싱(polishing)

- https://nextjs.org/learn/basics/dynamic-routes/polishing-post-page

- https://nextjs.org/learn/basics/dynamic-routes/polishing-index-page

## getStaticPaths 가 반환하는 fallback의 의미?

- fallback: false, true, ‘blocking’
  - false: 없는 링크면 -> 없는 페이지가 나옴
    - 빌드 할때는 없었는데 사용하다 보니 생긴 페이지에 대한 대응 옵션
  - true: 없는 링크면 -> error
    - Post를 렌더한다는 의미

### fallback 3가지 옵션에 대한 의미

- fallback: false
  - 페이지가 없다면 404 not found가 나옴
- fallback: true
  - 페이지가 없다면 아래와 같은 문구가 나옴
  ```
  "Application error: a client-side exception has occurred (see the browser console for more information).
  ```
  - ⭐️ 하지만 md파일에 있는 주소로 접근하면 서버가 보여줄 md파일을 빌드에서 서빙하게 된다!
- fallback: 'blocking'
  - 페이지가 없다면 500 error 나옴

## 정리 - Dynamic Routes

- 하나의 파일로 여러 페이지 -> Dynamic Routes
- SSG 시 생성할 목록 -> getStaticPaths (paths 배열 반환)
- 도구: md 파싱 / date format -> remark & remark-html / date-fns
- getStaticPaths fallback -> 빌드시 생성되지 않은 page에 대한 처리
