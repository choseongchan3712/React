import './App.css';
import React from 'react';

//! 1. Props 사용법
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

//! 2. Props 기본값: defaultProps
//? 컴포넌트에서 props가 전달되지 않았을 때 사용할 기본값을 설정할 수 있습니다.

Greeting.defaultProps = {
  name: "Stranger"
};

//! 3. Props로 함수 전달하기
const Button = (props) => {
  return <button onClick={props.onClick}>click me</button>;
};
const clickHandler = () => {
  alert('Button clicked!');
};

//! 4. Props와 자식 컴포넌트 관리
//? 부모 컴포넌트에서 여러 자식 컴포넌트를 props로 관리할 수 있습니다. 이때, 데이터를 각 자식 컴포넌트에 props로 전달합니다.
const User = (props) => {
  return (
    <div>
      <h2>{ props.name }</h2>
      <p>{props.age} years old</p>
    </div>
  );
};


function App() {
  return (
    <div>
      <Greeting name = "Alice"></Greeting>
      <Greeting name = "Bob"></Greeting>
      <Greeting></Greeting>
      <Button onClick = { clickHandler }></Button>
      <User name = "Alice" age = {25} />
      <User name = "Bob" age = {30} />
    </div>
  );
}

export default App;
