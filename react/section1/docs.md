
### 참고 코드 : https://github.com/winterlood/udemy-react-and-next-2023

## 노드 버전 확인
1. node - v: 21.2.0 -> LTS 버전으로 다운그레이드 완료
2. npm - v: 10.2.3

3. 노드 패키지 == 프로젝트



## section2 : what is react?
- made by meta
- 컴포넌트 기반의 UI
- 빠르고 편한 업데이트 : Virtual DOM
    

    Virtual DOM
    1) 브라우저 렌더링과정 
        HTML DOM + CSS DOM => RENDER TREE => 레이아웃 잡기 
        -> 페인팅
    2) 웹 브라우저 업데이트 과정
        돔 수정 -> 렌더트리 수정 -> 이후에
        레이아웃 수정(리플로우)
        페인팅 수정(리페인팅) 두개는 리소스가 많이 필요. 성능악화의 주범이라, **여러 수정사항을 모아서 한번만 DOM 업데이트** 하기

    3) 리액트는 중간 버퍼역할 :: 캐시처럼 업뎃을 버추얼 돔에 저장하고 마지막 한번만 돔트리에 반영시켜줌 짱!



- 리액트 앱 만들기
    1) npm init , npm install react, 기타 도구 설정 어려움 
    -> **vite** 사용 
        - 명령어치면 잘 생성된 리액트 도구를 자동생성 :)  npm create vite @lastest
    2) vite.svg : 정적인 것들
    3) React App에 접속 : http://localhost:5173/ (npm run dev)
    4) 리액트는 컴포넌트는 부모자식 구조로 구성된다
    5) 컴포넌트는 별도의 파일에 분리해서 사용 

- 입문
    JSX 파일에서 h1 태그같은 요소를 리턴할 수 있는 이유 : JSX 문법 덕분
    변수 {}, 계산식도 가능
        숫자, 문자 등만 렌더링만 가능
         , jsx에선 항상 닫는 태그를 사용해야함 (or 셀프클로징 <img /> 사용)
         , 최상위 태그 하나로 묶여져 있어야 한다.
         
