# sp-test-server

> 클라이언트 네트워크 연결을 테스트하기 위한 Node.js 서버

## 시작방법

1. 의존성 설치

```
npm install
```

2. 서버 실행

```
SET DEBUG=sp-test-server:* & npm start
```

## 라우터 정보

> POST /process

- Request

```
POST /process HTTP/1.1
Host: -
Content-Type: multipart/form-data; boundary=dart-http-boundary-RWSG36ISol.1N4nbuBRnm2TGH4_SvHmMFyVdil.ElNHwikPvtH4
User-Agent: Dart/2.2 (dart:io)
Accept-Encoding: gzip
```

- 전송되는 필드 정보

| 이름       |     형식      |       Content-Type       |     비고      |
| :--------- | :-----------: | :----------------------: | :-----------: |
| image      | MultipartFile | application/octet-stream | 사용자 이미지 |
| cropLeft   |    String     |           none           | 선택 영역 값  |
| cropTop    |    String     |           none           |      〃       |
| cropRight  |    String     |           none           |      〃       |
| cropBottom |    String     |           none           |      〃       |

- Response

```json
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
[
  {
    "type": "text",
    "content": "Success!"
  }
]
```
