<!-- TOC -->

- [Next.js 연습 3 1 Pre-rendering / Data Fetching](#nextjs-%EC%97%B0%EC%8A%B5-3-1-pre-rendering--data-fetching)
  - [질릴만큼 반복되는 Pre-rendering / Data Fetching](#%EC%A7%88%EB%A6%B4%EB%A7%8C%ED%81%BC-%EB%B0%98%EB%B3%B5%EB%90%98%EB%8A%94-pre-rendering--data-fetching)
  - [Next.js를 활용하면 페이지별로 Pre-rendering 방식을 선택할 수 있다.](#nextjs%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%98%EB%A9%B4-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%B3%84%EB%A1%9C-pre-rendering-%EB%B0%A9%EC%8B%9D%EC%9D%84-%EC%84%A0%ED%83%9D%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8B%A4)
  - [SSG를 사용하면 좋은 페이지](#ssg%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%A9%B4-%EC%A2%8B%EC%9D%80-%ED%8E%98%EC%9D%B4%EC%A7%80)
  - [SSG를 사용하면 좋은 페이지 적용 여부 선택 기준](#ssg%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%A9%B4-%EC%A2%8B%EC%9D%80-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A0%81%EC%9A%A9-%EC%97%AC%EB%B6%80-%EC%84%A0%ED%83%9D-%EA%B8%B0%EC%A4%80)
  - [SSG의 2가지 케이스](#ssg%EC%9D%98-2%EA%B0%80%EC%A7%80-%EC%BC%80%EC%9D%B4%EC%8A%A4)
    - [다른 파일을 읽어와보자](#%EB%8B%A4%EB%A5%B8-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EC%9D%BD%EC%96%B4%EC%99%80%EB%B3%B4%EC%9E%90)
  - [" —-- --- " 으로 감싸진 metadata를 읽어보자 YAML Front Matter](#---------%EC%9C%BC%EB%A1%9C-%EA%B0%90%EC%8B%B8%EC%A7%84-metadata%EB%A5%BC-%EC%9D%BD%EC%96%B4%EB%B3%B4%EC%9E%90-yaml-front-matter)
  - [Data를 가져오는 함수 getSortedPostsData 의 확장](#data%EB%A5%BC-%EA%B0%80%EC%A0%B8%EC%98%A4%EB%8A%94-%ED%95%A8%EC%88%98-getsortedpostsdata-%EC%9D%98-%ED%99%95%EC%9E%A5)
  - [정리 Pre-rendering / Data Fetching](#%EC%A0%95%EB%A6%AC-pre-rendering--data-fetching)

<!-- /TOC -->

# Next.js 연습 3 1 Pre-rendering / Data Fetching

## 1. (질릴만큼) 반복되는 Pre-rendering / Data Fetching

- 그만큼 Next.js에 핵심이 되는 개념
- SSG(build time) vs SSR(request time)

  - SSG: 말 그대로 build time에 미리 정적인 페이지를 생성.
  - SSR: 서버에 요청했을때 그때 서야 pre render를 시작한다.

## 2. Next.js를 활용하면 페이지별로 Pre-rendering 방식을 선택할 수 있다.

- getStaticProps 를 사용하면 SSG
- getServerSideProps 를 사용하면 SSR

## 3. SSG를 사용하면 좋은 페이지

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

## 4. SSG를 사용하면 좋은 페이지 적용 여부 선택 기준

- 사용자가 페이지를 요청하기 전에 pre-render 할 수 있는가?
  - Yes 라면 SSG
  - No 라면 SSR 혹은 ISR 혹은 CSR

## 5. SSG의 2가지 케이스

1. 외부 데이터 없이 pre-rendering
2. 외부 데이터를 가져와서 pre-rendering

- 외부 데이터?

  - 다른파일
  - API
  - DB등...

### 다른 파일을 읽어와보자

```
https://nextjs.org/learn/basics/data-fetching/blog-data
```

- 파일 추가
  - posts/pre-rendering.md
  - posts/ssg-ssr.md

## 7. " —-- --- " 으로 감싸진 metadata를 읽어보자 (YAML Front Matter)

- YAML을 "야믈"이라고 읽더라...

```
https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
```

```
yarn add gray-matter
```

sort 로직 살펴보기

```
https://www.google.com/search?q=js+sort
```

- SSG로 구현: getStaticProps 활용
  - build 이후 app 실행하면(yarn build, yarn start) refresh할때 마다 getStaticProps 함수가 실행되지 않는다.
  - ⭐️ build할때 한번 실행된다.
- SSR로 구현: getServerSideProps 활용
  - ⭐️ build 이후 app 실행하면(yarn build, yarn start) refresh할때 마다 getServerSideProps 함수가 실행된다.
- CSR로 구현: API Routes 활용
  - 현재 md파일을 읽는 모듈이 동작하고 있다.
    - 이 모듈은 노드에서 동작한다. 그래서 ⭐️ 클라이언트에서 'fs' 모듈을 읽으려고 하면 에러가 난다.
    - 그래서 클라이언트에서 서버를 사용하는 방식을 활용할 것이다. -> 바로 `api 호출`
      - ⭐️ server side에서 서버 호출 설정 방법 2단계
        1. client 부분
        - fetch 모듈에 호출할 api url 작성
        - api response 받는 부분을 promise의 then 함수를 활용해서 받는다.
        2. server 부분
        - fetch 모듈에 호출할 api url 작성한대로 폴더, 파일 생성
        - handler 함수를 작성한다.
    - tip
      - getSortedPostsData 모듈을 클라이언트에서 import 한뒤 사용하지 않아도 import 했을때 fs 파일을 읽으려고 시도해서 에러가 난다.

## 9. Data를 가져오는 함수 getSortedPostsData 의 확장

- 다른File조회
- 외부api요청
- DB조회

## 10. 정리 Pre-rendering / Data Fetching

- Pre-rendering -> SSG 선택 기준
- SSG 2가지 케이스 -> without data / with data
- YAML Front Matter -> Metadata 표기 방식 / gray-matter로 파싱
- API Routes -> fs는 serverside에서만 가능
