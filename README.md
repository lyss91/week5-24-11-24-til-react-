# fetch 로 REST API 연동해 보기

- `async ... await ` 로 비동기처리를 기준

## 1. 사전 조건은 백엔드가 live 되어 있어야 해요.

- 터미널에 prompt 현재 폴더가 `server` 여야 함.
- `npm run start` 실행
- `192.168.0.66:5000/todos` 강의 당시 강사님 IP 임의 예시임.
- `{"title:"" "content":""}`

## 2. fetch 로 데이터 연동하기

- `jwt` 인증없이 진행인 경우
- `javaScript web token`을 말함.
- `/src/todos/` 폴더 생성
- `/src/todos/Todo.jsx` 파일 생성
- `/src/main.jsx` 수정
