# Next.js 연습 2 - Layouts / Styling

## 1.public

정적 리소스를 Next.js로 서빙하기 위한 디렉토리

- robots.txt (https://www.reddit.com/robots.txt)
  - 크롤러, 서치엔진이 해당 웹사이트에 어떤 파일을 읽고 읽지 못하게 하는 파일을 설정하는 파일이다.
  - next.js는 이런 내용을 public에 두면 크롤러, 서치엔진이 robots파일에 접근 할 수 있따.
- images

## 2.Image Component

```
<img src=”/images/profile.jpg” alt=”Jimmy” />
vs
<Image src=”/images/profile.jpg” width={144} height={144} alt=”Jimmy” />

```

- img
  - html tag
  - 개발자도구에 nextwork > resopnse > Preview에서 파일 형식이 -> "image/png"
- Image component
  - Next.js에서 제공하는 component
  - 개발자도구에 nextwork > resopnse > Preview에서 파일 형식이 -> "image/webp"
    - webp는 구글에서 만든 이미지 파일 형식이다.
  - 용량이 img tag에서 한것보다 작다.

## 3.Image Component

- Resizing
  - responsive 사이즈
- Lazy load
  - viewport에 들어오면 로드
- 그외 optimization

  - webp 형태

- CLS(Cumulative Layout Shift): 누적 레이아웃 이동
  - 컴포넌트가 있다가 없어지거나, 없는데 있는 현상이 일어나면서 다른 dom tree에 움직임을 최소화 한다.

## 5.Metadata

- 웹 문서로서 제공하는 메타 정보들

  ```
    - <title>제목</title>
  ```

- https://www.google.com/search?q=react
  - 구글에서 react를 검색한 url주소이다.
  - 검색 목록중에 첫번째 검색 결과에 들어갔을때에 `<title>` 태그에 작성된게 구글 검색 목록 리스트에 반여이 된다.
    - 즉 구글 검색 엔진이 사이트의 title 메타 정보를 크롤링해서 검색 목록에 보여준다.

## 6.Head Component, Script Component

- Head Component
  - title / image / description 등 og(open graph) tag
  - icon
  - third party script(ex. google-analytics..)
- Script Component
  - strategy
    - load하는 stript를 어떤 전략으로 load할지 정할 수 있다.
  - onLoad
    - 페이지가 load가 끝났을때 어떤 동작을 실행할 수 있다.

## 7.Layout

- 공통 컴포넌트로 만들고
  - index.js파일에 파일에서 사용하는 스타일링 `<style jsx>`, 전역에서 사용하는 스타일링`<style jsx global>`을 제공하고 있다.
- 모듈 css 하는 방법이 있다.
  "./layout.module.css 라는 CSS 모듈을 만들어 보자"

- .container 클래스 스타일을 만들고
- Layout 에서 해당 클래스네임을 사용하면 css가 적용

## 8.Global CSS

- pages/\_app.js 만들고
- styles/global.css 만들고 전역으로 적용 할 스타일을 정의하고
- \_app.js 에서 import ‘../styles/global.css’ 해보자
  - 아래 주소에 global로 설정할 css가 있다.
  - https://nextjs.org/learn/basics/assets-metadata-css/global-styles

## 9.스타일 추가

- 스타일 추가 방법
  - [next.js 공식 문서에](https://nextjs.org/learn/basics/assets-metadata-css/polishing-layout)에 1,2 번째 방법에 대한 스타일 추가 방법, 코드가 있다.
  1. components/layout.module.css 에 스타일 추가
  2. styles/utils.module.css 생성
- 결과
  - components/Layout.js 보강
  - pages/index.js 변경

## 10.Layouts / Styling 정리

- 정적 리소스 -> /public (robots.txt / images 등)
- Image component -> 이미지 관련 최적화 기능
- Metadata -> Head / Script
- Styling -> styled-jsx / CSS modules
