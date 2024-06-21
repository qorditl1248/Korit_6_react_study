import { useState } from "react";
import "./style.css";

function DataTableHeader({mode, setMode, products, setProducts}) {

  const [ inputData, setInputData ] = useState("");

  const handleChangeModeClick = (e) => {   
    setMode(parseInt(e.target.value)); 
  }

  const handleSubmitClick = () => {
    if(mode === 1) {
      setProducts(products => [...products, inputData]);
      setInputData("");
      alert("상품 추가");
    }
    if(mode === 2) {

      alert("상품 수정");
    }
    if(mode === 3) {
      alert("상품 삭제");
    }
    resetMode();
  }

  const handleCancelClick = () => {
    resetMode();
  }

  const resetMode = () => {
    setMode(0);
  }


  return (
    <header className="table-header">
      <div className="input-group">
        <input type="text" disabled={mode === 0 || mode === 3} placeholder="상품명" autoFocus/>
        <input type="text" disabled={mode === 0 || mode === 3} placeholder="사이즈" />
        <input type="text" disabled={mode === 0 || mode === 3} placeholder="색상" />
        <input type="text" disabled={mode === 0 || mode === 3} placeholder="가격" />
        {/*  // 추가랑 수정은 disabled가 false */}
      </div>
      {
        !mode && (
          <div className="button-group">
            <button onClick={handleChangeModeClick} value={1}>추가</button>
            <button onClick={handleChangeModeClick} value={2}>수정</button>
            <button onClick={handleChangeModeClick} value={3}>삭제</button>
          </div>
        )
      }
      {
        !!mode && (
          <div className="button-group">
            <button onClick={handleSubmitClick}>확인</button>
            <button onClick={handleCancelClick}>취소</button>
        </div>
        )
      }

    </header>
  );
}

export default DataTableHeader;
