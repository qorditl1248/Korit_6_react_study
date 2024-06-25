
import React, { useState } from 'react'

function App() {

  const [ imgSrc, setImgSrc ] = useState("");

  const handleLoadImgClick = (e) => {
    const fileElement = document.createElement("input");
    fileElement.setAttribute("type", "file"); // <input type="file" /> 이거 생성
    // fileElement.setAttribute("multiple", true); -  multiple이면 파일 여러개 사용 가능 (기본값은 false)
    fileElement.click(); 
    
    fileElement.onchange = (e) => {
      const file = e.target.files[0];

      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        setImgSrc(e.target.value);
      }
      fileReader.readAsDataURL(file);
    }
  }


  return (
    <>
      <button onClick={handleLoadImgClick}>이미지 불러오기</button>
      <input type="file" multiple={false}/>

      <div>
        <img src={imgSrc} alt=""/>
        
      </div>
    </>
  )
}

export default App;