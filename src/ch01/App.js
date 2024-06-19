
/*
  sudo chmod -R 777 ./

  컴포넌트 -> 함수 -> HTML 태그를 리턴하는 함수 
  컴포넌트 대문자 

  <></> - Fragments

  JSX - 리액트에서 사용하는 html 태그 

  1. 태그를 열었으면 닫아야 한다. <a></a>, <a/> 
  2. 여러 태그를 리턴해야하는 경우에는 하나로 묶어야 한다.
  3. JSX 안에 값 또는 변수를 사용하려면 {} 표현식을 사용해야한다 
  
  JSX에 true나 false 형식으로 넣으면 문자로 안보임 

  component의 속성 -

  isShow가 있으면 true 없으면 false
  isShow를 가지고 설정 할 수 있음 
*/

import "./App.css";
import Box from "./components/Box";
import CustomInput from "./components/CustomInput";
import Hello from "./components/Hello";

function App() { 
  const name = "김준일";
  const fontColorRed = { 
    color: "red"
  };


  return <>   
    <div>
      <Hello></Hello>
    </div>
    {/* <div>
      <Hello></Hello>
    </div> */}
    <h1 style={fontColorRed} className={"fs-20 italic"}>{name}</h1>
    <CustomInput ph={"이름"} disabled = {true} value={"김준일"}/>
    <CustomInput ph={"나이"} disabled = {false}/>
    <CustomInput ph={"연락처"} disabled = {true}/>
    <Box name={"김준일"} isShow={true}>
      <h2>{31}</h2>
      <h2>{31}</h2>
      <h2>{31}</h2>
    </Box>
</>

}

export default App;
