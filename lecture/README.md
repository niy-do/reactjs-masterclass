# react-masterclass

노마드코더 react-masterclass 학습정리

---

## \#3 TYPESCRIPT

#### 기본 설정 방법

1. styled-components typescript 설치
2. styled.d.ts 파일 생성 후 기본 코드 하기 링크에서 추가.
3. 참조 링크
   https://styled-components.com/docs/api#typescript

## TypeScript를 사용하는 이유.

1. Javascript는 스크립트 작성 시 오류를 검출해주지 않는다. (실행시 나타날 버그에 대해 취약함.) => 이 부분을 보완해줌.
2. Javascript의 extension 모듈로 Javascript에 포함하여 사용하기 쉽다. (개발 편의성 증대))
3. Javascript 변수의 타입을 확정함으로써 자동완성 기능을 활용할 수 있다. (개발 편의성 증대)

### \#3.3 Optional Props

`variable?: value`

?를 통해 해당 필드가 optional 처리 가능
ex) text?: string;

### \#3.4 State

`useState<type>()`

- state hook 사용 시 별도 설정이 없는 경우 초기 값으로 state의 타입을 유추 한다.  
  `useState(1);` -> state 값의 타입은 number로 유추됨.

### \#3.5 Forms

Form 관련 이벤트 타입을 정의한다.

`event: React.FormEvent<element type>`

- `element type`은 FormEvent가 발생하는 html element를 설정.  
  ex) input tag event: `event: React.FormEvent<HTMLInputElement>`

- 이벤트 타입을 정의하는 이유: 이벤트 타입을 정의해 줌으로써 자동완성 기능을 사용할 수 있어 이벤트 관련 작업 시 버그를 방지할 수 있음.

### \#3.6 Themes

styled component 사용 시 theme 속성을 정의한다.

## \#4 CRYPTO TRACKER

1. React-Query  
   `npm i react-query`

   - 참고문헌
     - https://mingule.tistory.com/74
     - https://fe-developers.kakaoent.com/2022/220224-data-fetching-libs/
     - https://blog.hyunmin.dev/23
     - https://tech.kakaopay.com/post/react-query-1/
     - https://techblog.woowahan.com/6339/

2. React Helmet  
   `npm i react-helmet`  
   `npm i --save-dev @types/react-helmet`

   - https://www.npmjs.com/package/react-helmet

## \#5 STATE MANAGEMENT

1. Recoil  
   `npm i recoil`

   - https://recoiljs.org/ko/

2. React Hook Form  
   `npm i react-hook-form`

3. enum

## \#6 [2021 UPDATE] TRELLO CLONE

### React Memo

컴포넌트의 props가 변경되지 않는 경우 재 렌더링을 하지 않도록 하는 React 최적화 기술

```javascript
export default React.memo(Component);
```
