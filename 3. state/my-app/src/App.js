import React, { useState } from 'react';
import './App.css';

//! 1. state란?
//? 리액트에서 상태(State)는 컴포넌트의 데이터나 속성을 관리하는 방법입니다. 상태가 변경되면 리액트는 해당 컴포넌트를 다시 렌더링하여 화면에 변화된 데이터를 반영합니다.
//? 사용방법: 리액트의 함수형 컴포넌트에서 상태를 관리할 때는 useState 훅을 사용합니다.

const Counter = () => {
  //? useState를 사용해 state와 state 변경 함수를 선언
  const [count, setCount] = useState(0); //? 초기상태는 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};
//? (1) useState(0): 상태 변수 count의 초기값을 0으로 설정하고, setCount라는 상태 변경 함수를 리턴합니다.
//? (2) setCount(count + 1): 버튼을 클릭하면 count가 1씩 증가하는 함수가 실행됩니다.
//? (3) 상태가 변경되면 리액트는 해당 컴포넌트를 다시 랜더링하여 새로운 상태를 반영합니다.

//! 2. 여러개의 state 관리
const Profile = () => {
  const [name, setName] = useState('Alice');
  const [age, setAge] = useState(25);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => {setName('Bob')}}>
        Change Name
      </button>
      <button onClick={() => {setAge(age + 1)}}>
        Increase Age
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Profile></Profile>
    </div>
  );
}

export default App;
