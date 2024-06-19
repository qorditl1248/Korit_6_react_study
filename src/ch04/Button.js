// props 자료형 - 객체 

function Button({text,setNumber}) { // 비구조할당 

  const handleClick = () => {
    if(text === "증가") {
      setNumber(number => number + 1);  // 리액트에서 setter는 자기 자신을 매개변수로 받을 수 있게 되어있음
    } 
    if(text === "감소") { 
      setNumber(number => number - 1);
    }
  }
  
  return <button onClick={handleClick}>{text}</button>
}

export default Button;