//! JSX는 기본적으로 JSXElement, JSXAttributes, JSXChildren, JSXStrings라는 4가지 컴포넌트를 기반으로 구성돼 있다.

//! (1) JSXElement
//? JSX를 구성하는 가장 기본 요소로, HTML의 요소와 비슷한 역할을 한다. JSXElement가 되기 위해서는 다음과 같은 형태 중 하나여야 한다.

//% 1) JSXOpeningElement: 일반적으로 볼 수 있는 요소다. JSXOpeningElement로 시작했다면 후술할 JSXClosingElement가 동일한 요소로 같은 단계에서 선언돼 있어야 올바른 JSX 문법으로 간주된다.
//& 예: <JSXElement JSXAttributes(optianal)>

//% 2) JSXClosingElement: JSXOpeningElement가 종료됐음을 알리는 요소로, 반드시 JSXOpeningElement와 쌍으로 사용돼야 한다.
//& 예: </JSXElement>