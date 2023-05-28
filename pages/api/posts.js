import { getSortedPostsData } from '../../lib/posts';

/* 
  md 파일을 CSR로 읽기 위해서 api를 활용했다.
 그렇게 하기 위해서 아래와 같은 세팅이 필요하다!
 index.js 파일에 가보면 useEffect hook에 fetch로 현재 폴더를 호출하고 있다. 
*/
export default function handler(req, res) {
  const allPostsData = getSortedPostsData();
  console.log('allPostsData: ', allPostsData);
  res.status(200).json({ allPostsData });
}
