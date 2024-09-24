import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';

  let [글제목] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);

  let [like, likePlus] = useState(0);

  return (
    <div className="App">

      <div className="black-nav">
        {/* class 넣을 땐  className*/}
        <h4 style = { {color: 'red'} }>블로그임</h4>
        {/* style 넣을 땐 style={{스타일명: '값'}} */}
      </div>

      <div className= "list">
        <h4>{글제목[0]} <span onClick={() => { likePlus(like+1) }}>좋아요</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className= "list">
        <h4>{글제목[1]} <span>좋아요</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className= "list">
        <h4>{글제목[2]} <span>좋아요</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>

      <h4>{ post }</h4> 
      {/* 변수 넣을 땐 {중괄호}} */}

    </div>
  );
}

export default App;
