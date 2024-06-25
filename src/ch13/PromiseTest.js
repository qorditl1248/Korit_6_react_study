import React from 'react'

function PromiseTest() {

  /*
    Promise 비동기 객체 
    그 안에서의 then들은 동기적으로 실행되게 만들어 줌 
    
    Promise의 3가지 상태 
    1. 대기 -> 이행되지도 거부되지도 않은 상태
    2. 이행 -> 연산이 성공했을 때의 상태 - resolve then
    3. 거부 -> 연산이 실패했을 때의 상태 - reject catch
  */

  function p1(name) {  // 이행, 거부 
    return new Promise((resolve, reject) => {
      // 대기 상태(동기)
      console.log(name + "프로미스 생성");
      if(!name) {
        reject("오류!!!");
      }
      resolve(name); 
    });
  }
  
  async function p2 () { // 함수 앞에 async를 적어두면 promise
    let a = null;
    try {
      a = await p4(); // await -> 이행할 때까지 기다려 
      // await은 async안에서만 사용할 수 있고, Promise 객체에만 사용할 수 있다 
      // setTimeout(() => {}, 2000);
      await p5();
    } catch(error) {
      console.log(error);
      a = "p5";
    }
    return a;
  }

  function p3 () {
    return new Promise((resolve, reject) => {
      // return "p3" - 호출안됨, 호출하고 싶으면 아래처럼 해야함 
      resolve("p3");
    }); 
  }

  async function p4 () {
    return "p4";
  }

  async function p5 () {
    
    throw new Error("오류!!!!");
  }

  const handleClick = (e) => {
    p1("p1").then(result => {
      console.log("이행");                     
      console.log(result); // 위의 name의 값 
      if(true) {
        throw new Error("거부!!!"); // 거부(reject) - 에러 생성해서 던져 줌
      }
      return "두번째 then"; // 이행(resolve)

    }).then(result => {
      console.log(result);

    }).catch(error => {
      // console.log(error); - 위의 reject값이 들어옴 
    });


    console.log("출력 1");                     
    p1("p2");                     
    console.log("출력 2");                     
    p1("p3");                     
    console.log("출력 3");                     
  }

  const handleClick2 = (e) => {

    setTimeout(() => { // setTimeout은 최상위에서 사용, 불러올 때 
      p2().then(r => {
        console.log(r);
      });
    }, 2000)

    // p3().then(r => console.log(r));
  }


  return (
    <>
      <button onClick={handleClick}>promise</button>
      <button onClick={handleClick2}>async</button>
    </>
  )
}

export default PromiseTest;