import './App.css';
import React, { useState } from 'react';

//! 1. useState로 복잡한 상태 관리
//? 일반적으로 숫자나 문자열 상태 외에소 객체나 배열 같은 복잡한 상태를 useState로 관리할 수 있습니다.

//& 예시
const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John',
    age: 25,
    location: 'New York'
  });

  const updateLocation = () => {
    setUser(prevUser => ({
      ...prevUser,
      location: 'Los Angeles'
    }));
  };

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
      <button onClick={updateLocation}>Move to Los Angeles</button>
    </div>
  )
};

function App() {
  return (
    <div>
      <UserProfile></UserProfile>
    </div>
  );
}

export default App;
