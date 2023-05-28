<!-- TOC -->

- [프로젝트 생성](#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1)
- [Part3. 1-1. 프로젝트 시작Link Component \_ Client-side Navigate](#part3-1-1-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3-%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8link-component-%5C_-client-side-navigate)
  - [Next.js 가 제공하는 여러 기능들](#nextjs-%EA%B0%80-%EC%A0%9C%EA%B3%B5%ED%95%98%EB%8A%94-%EC%97%AC%EB%9F%AC-%EA%B8%B0%EB%8A%A5%EB%93%A4)
  - [연습 프로젝트블로그](#%EC%97%B0%EC%8A%B5-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%B8%94%EB%A1%9C%EA%B7%B8)
  - [블로그](#%EB%B8%94%EB%A1%9C%EA%B7%B8)
  - [프로젝트 만들기](#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0)
  - [Link Component](#link-component)
    - [Client Side Navigate](#client-side-navigate)
  - [Code Splitting](#code-splitting)
  - [Prefetching](#prefetching)
  - [Link Component](#link-component)
  - [정리: Link Component / Client-side Navigate](#%EC%A0%95%EB%A6%AC-link-component--client-side-navigate)

<!-- /TOC -->

# 프로젝트 생성

```
yarn create next-app blog --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Part3. 1-1. 프로젝트 시작(Link Component \_ Client-side Navigate)

## Next.js 가 제공하는 여러 기능들

- page-based routing system(with dynamic routes) - Pre-rendering SSG / SSR
- Automatic code splitting for faster page loads
  - next.js가 페이지 단위, 공통된 다위로 코르를 splitting한다.
- Client-side routing with optimized prefetching
- API Routes(with Serverless Functions)
- Development environment(with Fast Refresh)

## 연습 프로젝트(블로그)

- https://next-learn-starter.vercel.app/
- Next.js 가 제공하는 blog 예제를 확장 시켜보자
- 프로젝트 생성 - 메인 페이지(블로그 글 리스트) - 블로그 글 상세 페이 지 - 배포

## 블로그

- 개발자들은 자기만의 블로그를 하나씩(?) 가지고 있다.
- 꾸준히 공부하고 고민한 부분에 대한 기록
- 다른 사람들에게 지식을 공유 + 본인 스스로 기록 + 나에 대해서 홍보

## 프로젝트 만들기

```bash
yarn create next-app blog --example "https://github.com/vercel/next- learn/tree/master/basics/learn-starter"
```

- vercel 아래 브렌치에 더 많은 예시가 있다.

  - https://github.com/vercel/next-learn/tree/master/basics

- prettier 설정

- Pages 만들기
- pages/posts/first-post.js
- 첫번째 글로 이동하기

## Link Component

- `<a href=”/posts/first-post”>첫번째 글</a>`
  - 브라우저를 refresh와 한것과 같이 파일들을 받는다.(dev tool > next work 확인)
- `<Link href=”/posts/first-post”><a>첫번째 글</a></Link>`

- 두 방식의 차이
  - Link로 설정한 페이지에서 필요한 것만 받는다.
  - 페이지를 이동할때 최적화가 있다.

### Client Side Navigate

- browser에서 url을 직접 쳐서 이동하는 것과 달리
- JS 상에서 page 컴포넌트를 교체하는 것 확인(background-color를 body에 주고 navigate 해보기)

## Code Splitting

- Next.js는 Automatic Code Splitting을 제공
  - 특정페이지에 접근 할 때는 해당 페이지를그릴때 필요한chunk만 로드
  - ⭐️페이지 이동을 할 땐 목적지 페이지에 필요한 chunk만 추가 로드
    - 프로젝트를 build한 이후에 확인할 수 있다.
- 이를 통해 성능이 최적화 된다.

## Prefetching

- <Link> 컴포넌트를 이용하면, ⭐️ Viewport에 Link 컴포넌트가 노출되었을 때
  - href 로 연결된 페이지의 chunk를 로드한다.
- 이를 통해 성능을 최적화한다.

## Link Component

- 현재시점(23.05.06)에서는 Link에 class를 주어도 스타일이 먹는다.
- ~~본 서비스 외부 링크로 연결 할 때는 <a> tag 만 쓰면 됨(23.05.07 기준 내용 deprecated)~~
- ~~Link Component에 스타일을 줄 때는 <a> tag 에 줘야 함(23.05.07 기준 내용 deprecated)~~

## 정리: Link Component / Client-side Navigate

- 프레임워크 익히는 최상의 방법 -> 실제 서비스를 프레임워크로 만들기
- Link component -> Next.js 에서 제공하는 링크 기능
- Client side Navigate -> url로 접근하는 것과 달리 JS 상에서 변 경
- Prefetching -> Viewport 내 Link 페이지를 미리 페칭
