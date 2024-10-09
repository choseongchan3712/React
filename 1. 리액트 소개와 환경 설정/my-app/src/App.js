//! 1. 리액트란?
//? 리액트는 사용자 인터페이스(UI)를 구축하기 위한 JavaScript 라이브러리임. 리액트는 컴포넌트 기반의 구조를 가지고 있어서, UI를 독립적인 부품(컴포넌트)으로 나누어 관리할 수 있음. 이렇게 하면 코드의 재사용성을 높이고, 유지보수를 쉽게 할 수 있음.


//! 2. 리액트의 특징
//? (1) 컴포넌트 기반: UI를 작은 컴포넌트로 나누어 관리할 수 있음.
//? (2) 가상 DOM: 리액트는 가상 DOM을 사용하여 실제 DOM에 접근하는 횟수를 줄여서 성능을 최적화함.
//? (3) 선언형 프로그래밍: 리액트는 UI를 선언적으로 정의할 수 있음, 즉 어떤 상태를 기반으로 UI가 어떻게 보여야 하는지를 쉽게 표현할 수 있음.


//! 3. 환경 설정
//? (1)  Create React App: 리액트 프로젝트를 빠르게 시작할 수 있도록 도와주는 CLI 도구임. 아래의 명령어를 터미널에 입력해 설치함.
//# npx create-react-app my-app
//# cd my-app
//# npm start

//? (2) 프로젝트 구조 이해: create-react-app으로 생성된 프로젝트의 구조
//? 1) node_modules: 의존성 모듈이 설치되는 폴더.
//? 2) public: 정적 파일이 있는 폴더. 여기에는 index.html 파일이 포함되어 있음.
//? 3) src: 애플리케이션의 소스 코드가 있는 폴더. 여기에서 컴포넌트와 로직을 작성함.




import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
    </div>
  );
}

export default App;
