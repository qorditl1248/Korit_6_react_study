import { useState } from "react";

function App() {
  const [ number, setNumber ] = useState(100); // numberState가 배열, 2개의 값을 가져옴
                                               // setNumber는 number 값을 비동기 처리방식으로 변경해줌
                                               // 만약, setNumber를 사용하지 않으면 값이 변경은 되지만 재렌더링이되지 않아 
                                               // 출력해도 값을 확인할 수 없다 
  const [ name, setName ] = useState(null); 


  // const testArray = [ 100, function(){}]; - 이 구조랑 똑같음 

  const [test, testPrint] = [ 100, function(){console.log("test 함수 호출")}];
  testPrint();

  console.log(number); // 값이 여기서 확인 됨 

  if(number === 100) {
    setTimeout(() => {setNumber(200)}, 2000); 
    // 상태변화 > 상태 변화 때 함수 재호출(재 렌더링)
    // 2초 후에 200 넣어라 
    // 재렌더링 시점에는 상태 초기화는 일어나지 않는다
  }

  if(number === 200) {
    setNumber(300);     // userState의 setter는 비동기  / number에다가 300을 넣고 나면 알려줘 하고 보냄 
    console.log(number);
  }

  if(name === null) {
    setName("김준일");
  }
  console.log(name);
  
  return <>
  <h1>number 상태 확인</h1>
  <h2>{number}</h2>
  </>
}

export default App;