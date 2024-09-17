//! 하나의 요소로 구성된 가장 단순한 형태
const ComponentA = <A>안녕하세요.</A>

//! 자식이 없이 SelfClosingTag로 닫혀 있는 형태도 가능하다.
const ComponentB = <A />

//! 옵션을 {}와 전개 연산자로 넣을 수 있다.
const ComponentC = <A {...{ required: true }} />

//! 속성만 넣어도 가능하다.
const ComponentD = <A required />

//! 속성과 속성값을 넣을 수 있다
const ComponentE = <A required={false} />

//? 문자열은 큰따옴표 및 작은 따옴표 모두 가능하다.
const ComponentF = (
  <A>
    <B text="리액트"/>
  </A>
)

//? 옵션의 값으로 JSXElement를 넣는 것 또한 올바른 문법이다.
const ComponentG = (
  <A>
    <B optionalChildren={<>안녕하세요</>}/>
  </A>
)
