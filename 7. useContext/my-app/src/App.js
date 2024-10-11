import './App.css';
import React, { useState, useContext, createContext } from 'react';

//? 리액트에서 컴포넌트 간에 데이터를 전달할 때 일반적으로 props를 사용하지만, 여러 단계에 걸처서 데이터를 전달하는 문제를 해결하기 위해 useContext를 사용할 수 있습니다.

//! 1. context 생성
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState (
    {
      name: 'John',
      age: 25
    }
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
};

const UserProfile = () => {
  const { user } = useContext(UserContext); //! 2. Context값 가져오기
  return (
    <p>User: {user.name}, Age: {user.age}</p>
  );
}

function App() {
  return (
    <div className="App">
      <UserProvider>
        <UserProfile />
      </UserProvider>
    </div>
  );
}

export default App;
