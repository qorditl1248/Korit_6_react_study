import { useState } from "react";

function App() {
  const [ num, setNum] = useState(0); // num의 값을 변경해 줄 수 있는 방법은 setNum에서 값을 더 해주는 방법 
  let num2 = 0;                       // 아무리 num에 다른 값을 넣어도 setNum으로 바꾸지 않으면 안됨


  const handleClick = (e) => { 
    const value = parseInt(e.target.value);
    setNum(n => n + value); // 기존의 값을 매개변수로 받아와서 value랑 더해서 리턴 함, 함수를 넣어되고 
    // setNum(num + value);   
    num2 += value;
    console.log(num2);
  }

  console.log(num);
  console.log(num2);

  return <>
  <h1> 번호: {num}</h1>
  <h1> 번호2: {num2}</h1>
  <button onClick={handleClick} value={-10}>-10</button>
  <button onClick={handleClick} value={+10}>+10</button>
  <button onClick={handleClick} value={-100}>-100</button>
  <button onClick={handleClick} value={+100}>+100</button>
  </>
}

export default App;