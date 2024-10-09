import React from 'react';
import { useState } from 'react';
import './App.css';

//! 1. 함수형 컴포넌트
//? 리액트에서 가장 많이 사용되는 컴포넌트 유형은 함수형 컴포넌트임. 함수형 컴포넌트는 단순히 자바스크립트 함수로 정의되며, return문을 사용해 JSX를 반환함.

//& 예시
// const Greeting = () => {
//   return <h1>Hello, World!</h1>;
// };


//! 2. Props
//? 리액트 컴포넌트는 외부에서 전달받은 데이터인 props를 사용함. props는 컴포넌트의 인자로 전달되며, 읽기 전용임.
//& 예시
const Welcome = (props) => { //? 함수명은 대문자로 시작해야 하는듯
  return <h1>Hello, {props.name}!</h1>;
}


//! 3. State: 상태 관리
//? 컴포넌트는 상태를 가질 수 있는데, 이 상태는 컴포넌트 내에서 관리되며 동적인 UI를 만들 때 사용.
//? 리액트 훅 중 하나인 useState를 사용해 상태를 관리할 수 있음.

//& 예시
function Counter() {
  const [count, setCount] = useState(0);  //? [현재 상태 값, 상태를 업데이트하는 함수]
  
  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
    </div>
  );
}

function App() {
  
  
  return (
    <div className='wrap'>
      {/* 예시2 */}
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Counter />
    </div>
  );
}

export default App;
