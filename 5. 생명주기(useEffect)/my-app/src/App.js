import './App.css';
import React, { useState, useEffect } from 'react';

//! 1. useEffect의 기본 사용법
//? useEffect(() => {
  //* 부수 효과를 실행할 코드
//? });

//? 이 코드는 컴포넌트가 렌더링될 때마다 실행됩니다. 즉, 상태가 변경되거나 props가 변경되어 컴포넌트가 다시 렌더링될 때마다 useEffect 안의 함수가 실행됩니다.


//! 2. 의존성 배열
//? useEffect에서 두 번째 인수로 배열을 전달하면, 배열에 있는 값들이 변경될 때만 효과가 실행됩니다. 이 배열을 의존성 배열이라고 부릅니다.
//? (1) 빈배열
//% useEffect(() => {
//%   console.log('컴포넌트가 처음 마운트될 때만 실행됩니다.');
//% }, []);  // 빈 배열을 전달

//? (2) 특정 값이 변경될 때만 실행
//% useEffect(() => {
//%   console.log('count가 변경될 때 실행됩니다.');
//% }, [count]); // count가 변경될 때만 실행

//? (3) 의존성 배열을 생략
//% useEffect(() => {
//%   console.log('상태가 변경될 때마다 실행됩니다.');
//% });
//? 보통 의존성 배열을 생략하는 것은 권장되지 않습니다. 불필요하게 자주 실행될 수 있기 때문입니다.


//& 예제
const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        return prev + 1;
      })
    }, 1000);

    //? 컴포넌트가 언마운트될 때 타이머 정리
    return () => {clearInterval(timer)};
  }, []); //? 의존성 배열이 비어있어 처음 한 번만 실행

  return <h1>{ seconds } seconds have passed.</h1>
}

//& 예시2
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has been updated to: ${count}`);

    //? 이 경우 정리할 작업이 따로 없으므로 정리 함수는 필요 없음
  }, [count]);  //? count가 변경될 때마다 실행됨

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Timer></Timer>
      <Counter></Counter>
    </div>
  );
}

export default App;
