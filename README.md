# React JSX 문법

## 1. 컴포넌트 Props

- 컴포넌트에 `property={값}` 으로 작성하면

```jsx
<Box hi="hello" age={10} islogin={false}></Box>
```

- 컴포넌트 내부로 `{} 객체 리터럴`로 전달된다.

```jsx
function Box(props) {
  console.log("객체", props);
  return <div>Box</div>;
}

export default Box;
```

- 만약 컴포넌트 내부에 작성된 내용이 있다.
- 아래는 `자식` 을 React 에서 이름을 지정되어 있다.
- `children` 이라는 프로퍼티명으로 고정.

```jsx
<Box hi="hello" age={10} islogin={false}>
  자식
</Box>
```

- 이러지 아니하였으면 좋겠어요. 남들(TS)이 봐요.

```jsx
function Box(props) {
  console.log("객체", props);
  console.log("객체", props.hi);
  console.log("객체", props.age);
  console.log("객체", props.islogin);
  console.log("객체", props.children);
  console.log("객체", props["hi"]);
  console.log("객체", props["age"]);
  console.log("객체", props["islogin"]);
  console.log("객체", props["children"]);

  return <div>{hi}</div>;
}

export default Box;
```

- `props `는 꼭 `객체 구조 분해 할당` 해서 사용하자.

```jsx
function Box({ hi, age, islogin, children }) {
  console.log(hi);
  console.log(age);
  console.log(islogin);
  console.log(children);
  return (
    <div>
      <h1>내용입니다.</h1>
      {children}
    </div>
  );
}

export default Box;
```

## 2. 컴포넌트 조건문

### 2.1. flashy 한 값은 jsx 에 출력되지 않는다.

- `null, undefined, false, 0, ""`
- if 문을 jsx 내부에서 사용할 수 없습니다.

### 2.2. `jsx 에 직접 조건 코딩` 가능한 문법

#### 2.2.1. 3항 연산자를 가장 많이 사용해요.

- `조건 ? 참 값 리턴 : 거짓 값 리턴 `
- `로그인 : {islogin ? "로그인중" : "로그아웃중"} <br />`

#### 2.2.2. 논리 연산자

- `조건 && 결과`
  : 조건이 `참`이면 `뒷내용` 출력
  : 조건이 `거짓`이면 ``출력
: `나이 : {age < 18 && "미성년자"} <br />`

- `조건 || 결과`
  : 조건이 `참`이면 `앞내용` 출력
  : 조건이 `거짓`이면 `뒷내용` 출력
  : `인사 : {hi !== "hello" || "인사좀해요 --"} <br />`

#### 2.2.3. 옵셔널 체이닝

- 정말 중요해요. (React 에러를 처리하므로)
- `객체 ?. 속성명`

```
게임레벨: {info?.level; }<br />;
아바타: {info?.avatar;}<br />;
게임포인트: {info?.point;} <br />;
```

### 2.3. `js 로 결과 만든 후` jsx에 출력 하기

- 참조코드

```jsx
<Box
  hi="hello"
  age={10}
  islogin={false}
  say={say}
  info={info}
  status={"208"}
  fetching={""}
></Box>
```

#### 2.3.1. if

```jsx
let message;
let nowStatus = status.charAt(0);
if (nowStatus === "2") {
  message = "자료성공";
} else if (nowStatus === "4") {
  message = "Not Found Page";
} else if (nowStatus === "5") {
  message = "Server Shut Down";
} else {
  message = "No No No";
}
```

```jsx
if (fetching === "pending") {
  return (
    <p>
      네트워크가 <b>연결중</b> 입니다.
    </p>
  );
}

if (fetching === "fresh") {
  return (
    <p>
      네트워크가 <b>새로운 데이터</b> 입니다.
    </p>
  );
}

if (fetching === "stale") {
  return (
    <p>
      네트워크가 <b>오래된 데이터</b> 입니다.
    </p>
  );
}
```

#### 2.3.1. switch

```jsx
switch (fetching) {
  case "pending":
    response = (
      <p>
        네트워크가 <b>연결중</b> 입니다.
      </p>
    );
    break;
  case "fresh":
    response = (
      <p>
        네트워크가 <b>새로운 데이터</b> 입니다.
      </p>
    );
    break;
  case "stale":
    response = (
      <p>
        네트워크가 <b>오래된 데이터</b> 입니다.
      </p>
    );
    break;
  default:
    response = (
      <p>
        네트워크가 <b>에러</b> 입니다.
      </p>
    );
    break;
}
```

## 3. 컴포넌트 반복

- 샘플 데이터

```js
const goods = [
  {
    id: 100,
    cate: "과일",
    goodName: "사과",
    imgUrl:
      "http://tourimage.interpark.com/product/tour/00161/A10/500/A1051015_1_980.jpg",
  },
  {
    id: 99,
    cate: "과일",
    goodName: "사과",
    imgUrl:
      "http://tourimage.interpark.com/product/tour/00161/A10/500/A1051015_1_980.jpg",
  },
  {
    id: 103,
    cate: "전자제품",
    goodName: "노트북",
    imgUrl:
      "http://tourimage.interpark.com/product/tour/00161/A10/500/A1051015_1_980.jpg",
  },
  {
    id: 1004,
    cate: "패션",
    goodName: "바지",
    imgUrl:
      "http://tourimage.interpark.com/product/tour/00161/A10/500/A1051015_1_980.jpg",
  },
];
```

```jsx
<Box fruits={과일} goods={goods} />
```

### 3.1. 반복해서 JSX 에 출력한다면 `map` 을 사용하자.

- 최소 조건입니다. 모르면 곤란합니다.

```jsx
import { GoodDetailDiv } from "./styles/components/common/styled-common";

const Box = ({ goods }) => {
  console.log(goods);
  return (
    <div>
      <h1>여기는 레이아웃</h1>
      <div>
        {goods.map(item => {
          return (
            <GoodDetailDiv key={item?.id}>
              <h3>{item?.cate}</h3>
              <h2>{item?.goodName}</h2>
              <div>
                <img src={item?.imgUrl} alt={item?.goodName} />
              </div>
            </GoodDetailDiv>
          );
        })}
      </div>
    </div>
  );
};

export default Box;
```

- 추천
  : 기능과 화면은 분리를 하려고 노력하자.

```jsx
import { GoodDetailDiv } from "./styles/components/common/styled-common";

const Box = ({ goods, tour, tickets }) => {
  // 제품을 렌더링 하는 함수
  const renderGoods = datas => {
    const result = datas.map(item => {
      return (
        <GoodDetailDiv key={item?.id}>
          <h3>{item?.cate}</h3>
          <h2>{item?.goodName}</h2>
          <div>
            <img src={item?.imgUrl} alt={item?.goodName} />
          </div>
        </GoodDetailDiv>
      );
    });
    return result;
  };

  return (
    <div>
      <h1>여기는 레이아웃</h1>
      {/* 상품정보 1 */}
      <div>{renderGoods(goods)}</div>
      {/* 상품 정보 2 */}
      <div>{renderGoods(tour)}</div>
      {/* 상품 정보 3 */}
      <div>{renderGoods(tickets)}</div>
    </div>
  );
};

export default Box;
```

### 3.2. 반복문 `forEach` 고려해 보기

```jsx
// 제품을 렌더링 하는 forEach 함수
const renderGoodsEach = datas => {
  const tempArr = [];
  datas.forEach(item => {
    const tag = (
      <GoodDetailDiv key={item?.id}>
        <h3>{item?.cate}</h3>
        <h2>{item?.goodName}</h2>
        <div>
          <img src={item?.imgUrl} alt={item?.goodName} />
        </div>
      </GoodDetailDiv>
    );
    tempArr.push(tag);
  });
  return tempArr;
};
```

## 4. 컴포넌트 state

- 모든 ` 컴포넌트는 state 속성`을 가지고 있습니다.
- 모든 컴포넌트는 가지고 있는 `state가 바뀌면 화면을 리랜더링` 합니다.
- 모든 컴포넌트는 웹브라우저 새로고침 하기전까지 `state 를 유지` 합니다.
