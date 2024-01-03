import fetch from 'node-fetch' //node-js환경에서 fetch사용 못함 - node-fetch@2 설치 후 사용

//환경변수 사용하기 위한 패키지 - dotenv
// 1. 터미널에서 dotenv를 설치
// 2. .env를 루트경로에 만들어 변수 설정
// 3. .gitignore파일에 .env추가 
//환경 변수(APIKEY)를 가지고 와서 process.env속성을 통해서 가지고 올 수가 있다 
const { APIKEY } = process.env

export default async function handler(request, response) {
  const { title, page, id } = JSON.parse(request.body) //JSON.parse - JSON문자를 객체데이터처럼 활용할 때 쓰는 메소드
  const url = id 
    ? `https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full` 
    : `https://omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}` //id값이 있으면 상세정보 요청, 아닌경우 영화 목록 요청
  const res = await fetch(url) //node-js환경에서 fetch사용 못함 - node-fetch@2 설치 후 사용
  const json = await res.json()
  response.status(200).json(json)
}

