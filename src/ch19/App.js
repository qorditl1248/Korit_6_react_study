import './App.css'

import React from 'react'

function App() {
  return (
    <div className='container'>
      <div className='inner'>
        <h1>회원정보 수정</h1>
          <div className='name'>
            <p>이름: </p>
            <input type="text"/>
          </div>
        <div className='email'>
          <p>이메일: </p>
          <input type="text"/>
        </div>
        <div className='password'>
          <p>비밀번호: </p>
          <input type="text" />
        </div>
        <button>저장</button>
    </div>
  </div>

  )
}

export default App;