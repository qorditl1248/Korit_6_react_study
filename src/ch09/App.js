import { useState } from "react";

function App() {


  const [ inputValue, setInputValue ] = useState("");

  const [ names, setNames ] = useState([]); // 초기값이 빈 배열
  // const liList = [
  //   <li>{"test1"}</li>,
  //   <li>{"test2"}</li>,
  //   <li>{"test3"}</li>,
  //   <li>{"test4"}</li>,
  // ];


// input 값 
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  // enter 
  const handleInputKeyDown = (e) => {
    if(e.keyCode === 13) {
      setNames(names => [...names, inputValue])
      setInputValue(""); 
    }
  }

  // key값 항상 잡기
  // 유일한 고유한 값이 없으면 인덱스라도 찾아서 키값을 잡아줘야함 
  return <>
    <input onChange={handleInputChange} onKeyDown={handleInputKeyDown} value={inputValue} />
    <ul>
      {/* {liList} */}
      {names.map((name,index) => <li key={index}>{name}</li>)}
    </ul>
  </>
}

export default App;