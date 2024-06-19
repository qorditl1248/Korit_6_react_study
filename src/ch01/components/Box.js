function Box({name, isShow, children}) {
  const result =  11 && false;    // true 
  console.log(result);          // 논리연산 && 둘다 true이면, 뒤에 값을 출력 
                                // 둘중 하나라도 false이면 false 출력 
  return <div>
    <h1>{name}</h1>
    {children}
    {null}
    {isShow && <h3>안녕하세요</h3>}  
    {isShow ? <h3>안녕하세요</h3> : <h4>안녕하세요</h4>}
  </div>
}

export default Box;