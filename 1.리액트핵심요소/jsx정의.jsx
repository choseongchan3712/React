//! JSX는 기본적으로 JSXElement, JSXAttributes, JSXChildren, JSXStrings라는 4가지 컴포넌트를 기반으로 구성돼 있다.

//! (1) JSXElement
//? JSX를 구성하는 가장 기본 요소로, HTML의 요소와 비슷한 역할을 한다. JSXElement가 되기 위해서는 다음과 같은 형태 중 하나여야 한다.

//% 1) JSXOpeningElement: 일반적으로 볼 수 있는 요소다. JSXOpeningElement로 시작했다면 후술할 JSXClosingElement가 동일한 요소로 같은 단계에서 선언돼 있어야 올바른 JSX 문법으로 간주된다.
//& 예: <JSXElement JSXAttributes(optianal)>

//% 2) JSXClosingElement: JSXOpeningElement가 종료됐음을 알리는 요소로, 반드시 JSXOpeningElement와 쌍으로 사용돼야 한다.
//& 예: </JSXElement>

//% 3) JSXSelfClosingElement: 요소가 시작되고, 스스로 종료되는 형태를 의미한다. <script/>와 동일한 모습을 띠고 있다. 이는 내부적으로 자식을 포함할 수 없는 형태를 의미한다.
//& 예: <JSXElement JSXAttributes(optianal) />

//% 4) JSXFragment: 아무런 요소가 없는 형태로, JSXSelfClosingElement 형태를 띨 수는 없다. </>는 불가능하다. 단 <></>는 가능하다.
//& 예: <></>


//? 리액트에서 HTML 구문 이외에 사용자가 컴포넌트를 만들어 사용할 때에는 반드시 대문자로 시작하는 컴포넌트를 만들어야만 사용 가능하다. 이는 JSXElement에 명시돼 있는 표준에 없는 내용인데, 그 이유는 리액트에서 HTML 태그명과 사용자가 만드는 컴포넌트 태그명을 구분 짓기 위해서다.

//* JSXElementName
//? JSXElementName은 JSXElement의 요소 이름으로 쓸 수 있는 것을 의미한다. 이름으로 가능한 것은 다음과 같다.

//% 1) JSXIdentifier: JSX 내부에서 사용할 수 있는 식별자를 의미한다. 이는 자바스크립트 식별자 규칙과 동일하다. 즉, <$></$> <_></_>도 가능하지만 자바스크립트와 마찬가지로 숫자로 시작하거나 $와 _ 외의 다른 특수문자로는 시작할 수 없다.

// function Valid1() {
//   return <$></$>
// }
//& 가능

// function Valid2() {
//   return <_></_>
// }
//& 가능

// function Invalid1() {
//   return <1></1>
// }
//& 불가능

//% 2) JSXNamespaceName: JSXIdentifier : JSXIdentifier의 조합, 즉 : 을 통해 서로 다른 식별자를 이어주는 것도 하나의 식별자로 취급된다. : 로 묶을 수 있는 것은 한 개뿐이다. 두 개 이상은 올바른 식별자로 취급되지 않는다.

// function Valid() {
//   return <foo:bar></foo:bar>
// }
//& 가능

// function Invalid() {
//   return <foo:bar:baz></foo:bar:baz>
// }
//& 불가능

//% 3) JSXMenberExpression: JSXIdentifier. JSXIdentifier의 조합, 즉 .을 통해 서로 다른 식별자를 이어주는 것도 하나의 식별자로 취급된다. :로 묶는 JSXNamespaceName과는 다르게 .을 여러 개 이어서 하는 것도 가능하다. 단 JSXNamespaceName과 이어서 사용하는 섯은 불가능하다.

// function Valid1() {
//   return <foo.bar></foo.bar>
// }
//& 가능

// function Valid2() {
//   return <foo.bar.baz></foo.bar.baz>
// }
//& 가능

// function Invalid() {
//   return <foo:bar.baz></foo:bar.baz>
// }
//& 불가능

//! (2) JSXAttributes
//? JSXElement애 부여할 수 있는 속성을 의미한다. 단순히 속성을 의미하기 때문에 모든 경우에서 필수값이 아니고, 존재하지 않아도 에러가 나지 않는다.

//% 1) JSXSpreadAttributes: 자바스크립트의 전개 연산자와 동일한 역할을 한다고 볼 수 있다.
//& {...AssignmentExpression}: 이 AssignmentExpression에는 단순히 객체뿐만 아니라 자바스크립트에서 AssignmentExpression으로 취급되는 모든 표현식이 존재할 수 있다. 여기에는 조건문 표현식, 화살표 함수, 할당식 등 다양한 것이 포함돼 있다.

//% 2) JSXAttribute: 속성을 나타내는 키와 값으로 짝을 이루어서 표현한다. 키는 JSXAttributeName, 값은 JSXAttributeValue로 불린다.
//& JSXAttributeName: 속성의 키 값, 키로는 앞서 JSXElementName에서 언급했던 JSXIdentifier와 JSXNamespacedName이 가능하다. 여기서도 마찬가지로 : 을 이용해 키를 나타낼 수 있다.

//& JSXAttributeValue: 속성의 키에 할당 할 수 있는 값으로, 다음 중 하나를 만족해야 한다.
//# - "큰따옴표로 구성된 문자열": 자바스크립트의 문자열과 동일하다. 안에 아무런 내용이 없어도 상관없다.
//# - '작은따옴표로 구성된 문자열': 자바스크립트의 문자열과 동일하다. 안에 아무런 내용이 없어도 상관 없다.
//# - {AssignmentExpression}: 자바스크립트의 AssignmentExpression을 의미한다. AssignmentExpression은 자바스크립트에서 값을 할당할 때 쓰는 표현식을 말한다. 즉, 자바스크립트에서 변수에 값을 넣을 수 있는 표현식은 JSX 속성의 값으로도 가능하다.
//# - JSXElement: 값으로 다른 JSX 요소가 들어갈 수 있다.

//! (3) JSXChildren
//? JSXElement의 자식 값을 나타낸다. JSX는 앞서 언급했듯 속성을 가진 트리 구조를 나타내기 위해 만들어졌기 때문에 JSX로 부모와 자식 관계를 나타낼 수 있으며, 그 자식을 JSXChildren이라고 한다.

//% 1) JSXChild: JSXChildren을 이루는 기본 단위이다. 단어의 차이에서 알 수 있듯이 JSXChildren은 JSXChild를 0개 이상 가질 수 있다. 0개 이상이라는 의미에서 알 수 있듯이 JSXChildren은 JSXChild가 없어도 상관없다.
//& JSXText: {,<,>,}을 제외한 문자열, 이는 다른 JSX 문법과 혼동을 줄 수 있기 떄문이다. 만약 이 문자를 표현하고 싶다면 문자열로 표시하는 방법이 있다. -> '{} <>'
//& JSXElement: 값으로 다른 JSX 요소가 들어갈 수 있다.
//& JSXFragment: 값으로 빈 <></>가 들어갈 수 있다.
//& {JSXChildExpression (optional)}: 이 JSXChildExpression은 자바스크립트의 AssignmentExpression을 의미한다.

//! (4) JSXStrings
//? 앞서 소개한 JSXAttributeValue와 JSXText는 HTML과 JSX 사이에 복사와 붙여넣기를 쉽게 할 수 있도록 설계돼 있다. HTML에서 사용 가능한 문자열을 모두 JSXStrings에서도 가능하다. 이는 개발자가 HTML의 내용을 손쉽게 JSX로 가져올 수 있도록 의도적으로 설계된 부분이다. 여기서 정의된 문자열이라 함은, 큰따옴표로 구성된 문자열, 작은 따옴표로 구성된 문자열 혹은 JSText를 의미한다.






















