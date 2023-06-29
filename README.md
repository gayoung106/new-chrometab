# Chrome tab extention project

자바스크립트를 이용한 크롬 익스텐션 제작

![](https://velog.velcdn.com/images/gazero_/post/9fb91df1-68e4-41c8-b2b5-1a26caab7620/image.png)

## 1. 스택 )

> ### JavaScript

## 2. 주요기능 )

### 2-1. 시간/날짜 기능

![](https://velog.velcdn.com/images/gazero_/post/a263d8a5-c41d-4ad0-ba41-d8ffc9a5e020/image.png)

```js
new Date();
// 현재 시간(시, 분, 초) 및 날짜(월, 일, 요일)
```

- 현재시간을 가져오는 경우, "월" 은 기본 12개(1월~12월)로 하지만 0부터 시작해서 "0 ~ 11"로 데이터를 받아옴. 따라서 "+1"을 해줘야 함
- 날짜, 시간의 숫자가 한 단위일 경우, 앞에 0을 별도로 넣어줌
- 요일은 숫자의 형태로 데이터를 받아오기 때문에, 요일명을 넣은 배열로 변수를 생성
- 현재 시간을 불러오고 정지된 상태가 아닌 시간을 계속 진행되게 하기 위해 현재시간을 받아와 setInterval로 1초마다 업데이트되게 함

### 2-2. 검색창

![](https://velog.velcdn.com/images/gazero_/post/898c4e37-2210-47e7-ba81-f069cab6ae0b/image.png)

- 검색 input창에 검색어를 작성하면, 페이지 이동시 구글 검색 결과 입력된 검색어를 value값으로 담은 구글 url로 이동

```js
//예시
https://www.google.com/search?q=${입력한 검색어}
```

### 2-3. 명언 띄우기

![](https://velog.velcdn.com/images/gazero_/post/33a0f0e9-d840-4415-a4ea-22c9a78c6fc0/image.png)

- 명언 데이터를 api를 이용해 받아옴
- 참고) https://port-0-random-quote-4uvg2mleme84ru.sel3.cloudtype.app/
- async/await 을 통해 api 데이터를 받아옴.
- try/catch를 통한 데이터를 받아오지 못하는 오류 처리까지 완료 (오류 발생시, 기본으로 띄울 데이터를 넣음)
- localStorage에 받아온 데이터를 저장하고, 하루마다 데이터가 업데이트 되도록 함

### 2-4. 북마크

![](https://velog.velcdn.com/images/gazero_/post/d1033a01-86f8-4126-864a-412b0f6d2874/image.png)

- 북마크 열기/닫기 기능
- localStorage에 열어둔 상태 혹은 닫아둔 상태를 저장함
- 북마크 추가 버튼
- 추가 버튼시 토글
- 리스트 상태 저장
- 북마크 아이템 추가/삭제

### 2-5. 크롬 익스텐션 적용

- manifest.json 파일 생성

```js
{
  "name": "bookmark-tab",
  "description": "gazero",
  "version": "1.0",
  "manifest_version": 3,
  "permissions": ["storage"],
  "chrome_url_overrides": {
    "newtab": "index.html"
  },
  "host_permissions": ["<all_urls>"]
}

```

- [크롬 확장프로그램 관리](chrome://extensions/)에서 개발자 모드를 활성화 시킴
- 왼쪽 상단의 '압축해제된 확장 프로그램을 로드합니다'를 누르고, 작업 파일을 업로드
  ![](https://velog.velcdn.com/images/gazero_/post/e36f1b30-3a5e-4e47-bb76-d636eeb548c6/image.png)
