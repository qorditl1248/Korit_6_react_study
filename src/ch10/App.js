import { useRef, useState } from "react";

function App() {

  const table = {
    border: "1px solid #dbdbdb"
  };
  
  const emptyUser =  {
    username: "",
    password: "",
    name: ""
  }

  const inputRef = {
    username: useRef(),
    password: useRef(),
    name: useRef()
  }

  const [ user, setUser ] = useState({...emptyUser});  
  const [ userList, setUserList ] = useState([]);


  const handleInputChange = (e) => {
      setUser((user)=> {
      return {
        ...emptyUser,
        [e.target.name]: e.target.value
      }
    })
  }


  const handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      if(e.target.name === "username") {
        inputRef.password.current.focus();
      }
      if(e.target.name === "password") {  
        inputRef.name.current.focus();
      }
      if(e.target.name === "name") {
        inputRef.username.current.focus();
        setUserList(user => [...userList, user])
        setUserList();
      }
    }
  }

  console.log(inputRef.name);
  
  return <>
  {/* 
    1. 입력 후에 엔터를 입력하면 다음 input으로 포커스 
    2. name 필드에서 enter 입력하면 배열의 user 객체 추가 -> input Value 초기화 
  */}
    <input name="username" placeholder="사용자 명" ref={inputRef.username} onKeyDown={handleKeyDown} onChange={handleInputChange} />
    <input name="password" placeholder="비밀번호" ref={inputRef.password} onKeyDown={handleKeyDown} onChange={handleInputChange}/>
    <input name="name"  placeholder="이름" ref={inputRef.name} onKeyDown={handleKeyDown} onChange={handleInputChange}/>

    {/* 
      1. tbody -> tr 묶음을 userList에서 map을 통해 렌더링 
      2. table 디자인 -> border: 1px solid #dbdbdb;
    */}

    <table style={table}>
      <thead>
        <tr>
          <th>index</th>
          <th>username</th>
          <th>password</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>


    </table>
  </>
}

export default App;