import { useRef, useState } from "react";
import Swal from "sweetalert2";
import './App.css'
import userEvent from "@testing-library/user-event";

function App() {

  const test = {
    a: "aaa",
    b: "bbb"
  }

  console.log(test["a"]); // 객체는 키 값을 ["a"] 참조 가능
  console.log(test.a); 

  const emptyUser = {
    username: "",
    password: "",
    name: ""
  }

  const [ userList, setUserList ] = useState([]);               // 배열을 추가 
  const [ inputData, setInputData ] = useState({...emptyUser}); // 값을 입력 



  const inputRef = {
    username: useRef(),
    password: useRef(),
    name: useRef(),
  }

  // enter 치면 포커스 이동 username -> password -> name 다시 username
  const handleInputKey = (e) => {
    if(e.keyCode === 13) {
      const {username, password, name} = inputRef; // 비구조할당

      switch(e.target.name) {
        case "username":
          password.current.focus();
          break;
        case "password":
          name.current.focus();
          break;
        case "name":
          username.current.focus();
          setUserList(userList => [ ...userList, inputData]);   // 리스트에 추가 
          setInputData(emptyUser);                              // input를 비워줌
          break;
        default:
      }
    }
  }

  
  const handleInputChange = (e) => {
    setInputData(inputData => {    
      return {
        ...inputData,
        [e.target.name]: e.target.value
      }
    });
  } 

  // 수정 

  const handleEditClick = (key, index) => {
    Swal.fire({
      title: `${key} edit`,
      input: "text",
      inputValue: userList[index][key],
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: "확인"
    }).then(result => {
      if(result.isConfirmed) {  // 확인버튼이 눌러졌을때만 실행
        setUserList(userList => [ ...userList.map((user, i) => {
          if(i === index) {
            return {
              ...user,
              [key]: result.value   
            }
          }
          return user; // index가 같지 않으면 기존값
        })]);
      }
    })
  }
  


  // 삭제 

  const handleDeleteClick = (e) => {

    Swal.fire({
      title: "사용자 삭제",
      text: "해당 사용자를 삭제하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "삭제",
      confirmButtonColor: "red",
      cancelButtonText: "취소"      
    }).then(result => {
      if(result.isConfirmed) {
        setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value))])
      }
    })


    // if(window.confirm("해당 사용자를 삭제하시겠습니까? ")) { // react에서 confirm을 사용하기 위해서는 window.confirm 
    //   setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value))])
    // } 
  }



  return <>
  {/* 
    1. 입력 후에 엔터를 입력하면 다음 input으로 포커스 
    2. name 필드에서 enter 입력하면 배열의 user 객체 추가 -> input Value 초기화 
  */}
    <input name="username" placeholder="사용자 명" 
    ref={inputRef.username} onKeyDown={ handleInputKey}
    onChange={handleInputChange} value={inputData.username}/>

    <input name="password" placeholder="비밀번호" 
    ref={inputRef.password} onKeyDown={ handleInputKey}
    onChange={handleInputChange} value={inputData.password}/>

    <input name="name"  placeholder="이름" 
    ref={inputRef.name} onKeyDown={ handleInputKey}
    onChange={handleInputChange} value={inputData.name}/>

    {/* 
      1. tbody -> tr 묶음을 userList에서 map을 통해 렌더링 
      2. table 디자인 -> border: 1px solid #dbdbdb;
    */}

    <table>
      <thead>
        <tr>
          <th>index</th>
          <th>username</th>
          <th>password</th>
          <th>name</th>
          <th>edit</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
          {
            userList.map(({username, password, name}, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td onClick={() => handleEditClick("username", index)} >{username}</td>
                  <td onClick={() => handleEditClick("password", index)}>{password}</td>
                  <td onClick={() => handleEditClick("name", index)}>{name}</td>
                  <td>
                    <button value={index}>edit</button>
                  </td>
                  <td>
                  <button onClick={handleDeleteClick} value={index}>delete</button>
                  </td>
                </tr>
              );
            })
          }
      </tbody>
    </table>
  </>
}

export default App;