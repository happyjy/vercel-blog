# Next.js 연습 5 1 API Routes / 배포하기

## 1. index.js 수정하기

- server-side 에서는 API Routes를 사용하지 않아야 한다.
  - getServerSideProps는 server-side에서 호출되는 함수이다.
  - 즉, 여기(getServerSideProps 함수)에서 api를 호출 하지 않아야 한다.
- ⭐️ 하지만 **getStaticProps** / **getStaticPaths** 등은 <u>client-side코드에 포함되지 않는다.</u>
  - 그렇기에 서버 사이드에서는 DB에 직접 접근하는 등 훨씬 자유도 높은 작업을 할 수 있다.

## 2. API Routes

```
export default function handler(req, res) {
  res.status(200).json({message: ‘Hello world’})
}

```

## 3. 요구사항

- /post/write 페이지에서
- 새로운 글을 쓸 수 있도록 하라

### 3.1 생각의 순서

- Page가 필요하겠네? 여러 input 들을 받을 수 있는...
- API 도 필요하겠네? file에 저장할 input을 전달받는...
- writePost 함수도 필요하겠네? 실제로 file을 저장하는...
- 작성이 성공하면 해당 page로 가는 Link 도 제공하면 좋겠군...

- pages/post/write.js Page 추가
- pages/api/post/write.js API 추가
- lib/posts.js 안에 writePost 함수 추가

## 6. Fetch API

- https://developer.mozilla.org/en-US/docs/Web/API/fetch
  - fetch() promise는 HTTP error에 의해 reject 되지 않는다.

## 7. Vercel 로 배포하기

- 준비물: github 계정 / 지금까지 만든 blog 코드

## 8. 작업 순서

1. step1

- (만약 안했다면) PC에 git을 설치한다.(구글링) - github 에 repository를 만든다.
- blog project를 github repo와 연결한다.
- blog project를 github repo에 푸시한다.
- vercel 과 github 계정을 연동한다.
- github repo을 import 하고 배포한다.

2. step2

- blog project를 github repo와 연결한다.
- blog project를 github repo에 푸시한다.

3. step3

- git init
- git remote add origin [복사한 github repo 주소] - git add .
- git commit -m “feat: blog deploy”
- git push --set-upstream origin main

4. step4

- vercel 과 github 계정을 연동한다.
- github repo을 import 하고 배포한다.

- https://vercel.com/signup
- hobby 로 등록

- https://vercel.com/new

## 11. 이후에는 해당 repo main 브랜치에 변경사항을 푸시하면 Vercel이 알아서 서비스를 배포해준다.

- PR을 올리면 Preview Mode까지 제공한다.

## 12. 정리: API Routes / 배포하기

API Routes -> 요청하는 코드는 Client side 에만 두자
POST 요청 -> Post를 직접 write 하고 POST 해봄
Vercel로 배포 -> 순서대로만 하면 너무 간단
Main 브랜치 -> Push 하거나 PR을 올리면 배포됨
