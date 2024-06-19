
// props 자료형 - 객체 
// 비구조 할당

function CustomInput({ph, disabled, value}) {
  return <input type="text" placeholder={ph} disabled={disabled} value={value} />
}


CustomInput.defaultProps = {
  ph: "test",
  disabled: false,
  value: "빈값"
}

export default CustomInput;