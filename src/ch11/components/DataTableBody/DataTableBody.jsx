import { useEffect, useRef, useState } from "react";
import "./style.css";

function DataTableBody({ mode, setMode, products, setProducts, isDeleting, setDeleting, setEditProductId}) { 
    // 상태 2개 정의 
    const [viewProducts, setViewProducts] = useState([]); // - 빈 배열 

    const [checkedAll, setCheckedAll] = useState(false); // - false로 

    // products, mode의 값이 변할 때만 동작 
    useEffect(() => {
      if(mode === 0) {
        resetViewProducts(); 
        setCheckedAll(false);
      }
    }, [products, mode]); 

    useEffect(() => {
    const checkStates = viewProducts.map((product) => product.isChecked);
    if (checkStates.includes(false)) { 
        setCheckedAll(false);          // 전체체크빅스 상태를 false
    } else {
        setCheckedAll(true);           // 전체가 true라면 맨 위 전체체크박스 true
    }
    }, [viewProducts]); 

    useEffect(()=> {
      if(isDeleting) {
        setProducts([ ...viewProducts
          .filter(viewProduct => viewProduct.isChecked === false) 
          .map(viewProduct => {
            const {isChecked, ...product} = viewProduct; // viewProduct에서 isChecked 속성을 제외하고 product안에 넣어줌 
            return product;
        })
      ]);
        setMode(0);
        setDeleting(false);
      }
    }, [isDeleting]);

    useEffect (() => {
      if(mode === 2) {
        const [ selectedProduct ] = viewProducts.filter(product => product.isChecked); // true인것만 꺼내옴 

        setEditProductId(!selectedProduct ? 0 : selectedProduct.id); // 꺼내온 selectedProduct가 없으면 0를 넣음, 있다면 id를 꺼내옴 
        // selectedProduct가 undefind면 0으로, 있다면 체크된 값의 id값이 들어가 있음 
      }
    }, {viewProducts})

    const resetViewProducts = () => { 
    setViewProducts([ // 
    ...products.map((product) => ({ ...product, isChecked: false })), // 기존의 배열에는 isChecked라는 속성이 없음 ->
                                                                      // 새로운 배열에 isChecked 속성을 추가해서 만들어줌
    ]);                             
};

   // 전체 선택 or 전체 해제
    const handleCheckedAllChange = (e) => {
    setCheckedAll((checked) => {  // 전체체크박스 가지고 옴 
    if (!checked) { // 전체체크박스가 true일 때 
        setViewProducts([
        ...products.map((product) => ({ ...product, isChecked: true })), 
        ]);
        } else {  // 전체체크박스가 false일 때 -> 반복돌면서 false로 바꿔줌
        resetViewProducts();
        }
    return !checked; // setCheckAll의 상태를 바꿔줄려고 
  });
};

  const handleCheckedChange = (e) => {
    // 수정 모드 
    if (mode === 2) {
      setEditProductId(parseInt(e.target.value)) // id를 전달

      setViewProducts((viewProducts) => { // viewProducts는 배열 
        return [
          ...viewProducts.map((product) => {
            if (product.id === parseInt(e.target.value)) { // 내 체크한 값과 아이디가 일치한다면 
              return {
                ...product,
                isChecked: !product.isChecked, // 기존의 체크값에다가 true false 거는 거
              };
            }
            return { // 자기 자신 제외한 다른 것들은 다 false 
              ...product,
              isChecked: false,
            };
          }),
        ];
      });
    }

    // 삭제 
    if (mode === 3) {
      setViewProducts((viewProducts) => {
        return [
          ...viewProducts.map((product) => {
            if (product.id === parseInt(e.target.value)) {
              return {
                ...product,
                isChecked: !product.isChecked,  // 클릭한 대상이 true가 될수도 false가 될수도 있어서 ! 으로 함 
              };
            }
            return product; // 그 상태로 그대로 리턴 (기존에 체크한게 존재해도 상관 없음)
          }),
        ];
      });
    }
  };

  return (
    <div className="table-body">
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                disabled={mode !== 3}
                onChange={handleCheckedAllChange}
                checked={checkedAll}
              />
            </th>
            <th>상품코드</th>
            <th>상품명</th>
            <th>사이즈</th>
            <th>색상</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {viewProducts.map((product) => ( // 함수 뒤에 ()은 값이다
            <tr key={product.id}>
                <th>
                <input
                    type="checkbox"
                    disabled={mode === 0 || mode === 1}
                    checked={product.isChecked}
                    onChange={handleCheckedChange}
                    value={product.id}
                />
                </th>
                    <td>{product.id}</td>
                    <td>{product.productName}</td>
                    <td>{product.size}</td>
                    <td>{product.color}</td>
                    <td>{product.price}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
}

export default DataTableBody;
