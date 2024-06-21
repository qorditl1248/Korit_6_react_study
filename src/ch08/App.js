import { useRef } from "react";

function App() {

  const inputRef = {
    a: useRef(),
    b: useRef(),
    c: useRef()
  }

  // use 로 시작하는 것들은 다른 함수 안에 못들어옴   Ref에 current 무조건 사용 

  // 위의 코드 풀어서 쓴거 
  // const aRef = useRef();
  // const bRef = useRef();
  // const cRef = useRef();

  
  const handleKeyDown = (e) => {

    if(e.keyCode === 13) {
      switch(e.target.name) {
        case "a":
          inputRef.a.current.focus();
          break;
        case "b":
          inputRef.b.current.focus();
          break;
        case "c":
          inputRef.c.current.focus();
          break;
        default:
      }
    }
  }

  return <>
    <input name="a" onKeyDown={handleKeyDown} ref={inputRef.a}/>
    <input name="b" onKeyDown={handleKeyDown} ref={inputRef.b}/>
    <input name="c" onKeyDown={handleKeyDown} ref={inputRef.c}/>
  </>
}

export default App;