import React, { useCallback, useEffect, useMemo, useState } from 'react'

function Memoizationpage() {

  const [ value, setValue ] = useState(0);
  const [ value2, setValue2 ] = useState(0);
  const [ num, setNum ] = useState();

  // const a = num + 20; - 이러면 다른애들이 렌더링될때 같이 됨, 불필요한 연산 아래의 useMemo를 통해서 사용 
  // useMemo를 사용하여 값을 저장 함 
  // 짧은 코드들은 useMemo나 useCallback 사용 안해됨, 길이가 긴것들을 써줌 
  
  const a = useMemo(() => {
    console.log(num);
    return num + 10;
  },[num]);   // num의 값에 변화가 있을때 다시 계산해서 a에 넣어주기
  console.log(a);

  // 이렇게 되면 재렌더링 될때 c가 null로 초기화 됨 
  // let c = null; 
  // useEffect(()=> {
  //   c = num + 30;
  // },[num])

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []); // 최초의 한번만 정의 

  const handleChange2 = (e) => {
    setValue2(e.target.value)
  }

  const handleOnClik = useCallback(() => {
    setNum(parseInt(value));
  }, [value]); // value가 바뀌면 값을 재정의, [] - 비워두면 값이 바뀌지않음 
  return (
    <div>
      <h1>{a}</h1>
      <input type="text" onChange={handleChange} />
      <input type="text" onChange={handleChange2} />
      <button onClick={handleOnClik}>확인</button>
    </div>
  )
}

export default Memoizationpage;