import { useState } from "react";

function App() {

  // inputValue 변수명을 가진 상태
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);      // 입력이 일어나면 inputValue 값이 변해서 다시 함수 호출
  }

  const handleResetClick = () => {
    setInputValue("");
  }

  // onchange는 value 값이 바뀔때 마다
  return <>
    <h3>값: {inputValue}</h3>
    <button onClick={handleResetClick}>초기화</button>
    <input type="text" onChange={handleInputChange} value={inputValue}/>
  </>
}


export default App;