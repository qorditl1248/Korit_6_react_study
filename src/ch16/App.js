import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';
import './App.css'

function App() {

  const [ imgSrc, setImgSrc ] = useState(""); 

  const empty = {
    name: "",
    email: ""
  }
  
  const [ inputData, setInputData ] = useState({...empty});
  const [ userList, setUserList ] = useState([]);


  const inputRef = {
    name: useRef(),
    email: useRef()
  }

    useEffect(() => {
      const lsUser = localStorage.getItem("userList");
      setUserList(!lsUser ? [] : JSON.parse(lsUser));
      }, []);

      useEffect(() => {
        localStorage.setItem("userList", JSON.stringify(userList));
        }, [userList]);
    
    
        const handleInputKey = (e) => { 
          if(e.keyCode === 13) {
            const {name, email} = inputRef; 
            switch(e.target.name) {
              case "name":
                email.current.focus();
                break;
              case "email":
                name.current.focus();
                break;
              case "button":
                setUserList(userList => [ ...userList, inputData]);   
                setInputData(empty);                             
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
      })
    }


  const handleLoadImgClick = (e) => {
    Swal.fire ({
      title: "프로필 사진 변경",
      text: "프로필 이미지를 변경하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "예",
      cancelButtonText: "아니오"
    }).then(result => {
      if(result.isConfirmed) {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        fileElement.click();
    
        fileElement.onchange = (e) => {
            const file = e.target.files[0];
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
              setImgSrc(e.target.result);
            }
            fileReader.readAsDataURL(file);
        }
      }
    })
  }

  return (
    <div className='container' >
      <div className="inner">
        <h1>프로필</h1>
        <div className="img-frame" onClick={handleLoadImgClick}>
          <img src={imgSrc} alt="" />
        </div>
        <input 
          type="text" 
          name='name'
          placeholder="이름" 
          ref={inputRef.name}
          onChange={handleInputChange}
          />
        <input 
          type="email" 
          name='email'
          placeholder="이메일" 
          ref={inputRef.email}
          onChange={handleInputChange}
          />
        <button name='button'>저장</button>
      </div>
    </div>
    )
  }

export default App;