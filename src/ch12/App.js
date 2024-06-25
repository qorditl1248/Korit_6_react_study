
import React, { useEffect, useState } from 'react'

function App() {

  const [ number, setNumber ] = useState(0);
  const [ number2, setNumber2 ] = useState(0);
  const [ number3, setNumber3 ] = useState(0);


  // useEffect(() => {},[])
  useEffect(()=> { 
    // 마운트 지점 - 화면이 보여지는게 
    console.log(number2); // 처음 한번 실행되고, 다음부터는 number가 상태가 변하면 useEffect가 실행 
    setNumber3(number * 10);
    return () => {
      // 언마운트 지점 - 화면에서 사라져서 보이지않을때 뭘 동작해야할 떄 씀, 많이 쓰이지는 않음 
    }
  }, [number, number2]); // [] - 최초의 한번만 실행되어야하는 애들은 이렇게 표시   

  const handleButtonClick = (e) => {
    setNumber(a => a + 1); 
  }

  const handleButtonClick2 = (e) => {
    setNumber2(b => b + 10); 
  }



  return (
    <>
      <h1>{number}</h1>
      <h1>{number2}</h1>
      <h1>{number3}</h1>
      <button onClick={handleButtonClick}>num1 증가</button>
      <button onClick={handleButtonClick2}>num2 증가</button>
    </>
  )
}

export default App;