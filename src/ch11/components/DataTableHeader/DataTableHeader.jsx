import { useEffect, useRef, useState } from "react";
import "./style.css";
import Swal from "sweetalert2";

function DataTableHeader({ mode, setMode, products, setProducts, setDeleting, editProductId }) {
    const emptyProduct = {
        id: "",
        productName: "",
        size: "",
        color: "",
        price: ""
    };

    const inputRef = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef()
    };

    const [ inputData, setInputData ] = useState({ ...emptyProduct });

    useEffect(()=> {
      const [ product ] = products.filter(product => product.id === editProductId); // 수정한 선택한 값의 id가 같으면 ~  

      setInputData(!product ? {...emptyProduct} : { ...product }); // product가 undefind면 체크된 값이 없으니깐 empty를 넣어주고, 있다면 선택된 값을 넣어줌 

    }, [editProductId])

    const handleInputChange = (e) => {
        setInputData(inputData => ({
            ...inputData,
            [e.target.name]: e.target.value
        }));
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            if(e.target.name === "productName") {
                inputRef.size.current.focus();
            }
            if(e.target.name === "size") {
                inputRef.color.current.focus();
            }
            if(e.target.name === "color") {
                inputRef.price.current.focus();
            }
            if(e.target.name === "price") {
                handleSubmitClick();
                inputRef.productName.current.focus();
            }
        }
    }

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleSubmitClick = () => {
        if(mode === 1) {
            setProducts(products => {
                const productIds = products.map(product => product.id);
                const maxId = 
                    productIds.length === 0 
                        ? 0 
                        : Math.max.apply(null, productIds);

                return [ ...products, { ...inputData, id: maxId + 1 } ];
            });
            Swal.fire({
                title: "상품 정보 추가 완료",
                icon: "success",
                position: "top-end",
                showConfirmButton: false,
                timer: 500
            });
            resetMode();
        }
        if(mode === 2) {
            Swal.fire({
              title: "상품 정보 수정",
              showCancelButton: true,
              confirmButtonText: "확인",
              cancelButtonText: "취소"
            }).then(result => {
              if(result.isConfirmed) {
              setProducts(products => [    // 기존의 products를 들고옴, 새로운 배열을 setProducts에 넣어줌 
                ...products.map(product => { 
                  if(product.id === editProductId) {  // 들고온 id랑 수정할 값의 id랑 같으면 
                    
                    const { id, ...rest } = inputData; // inputData에서 id를 제외하고 rest에 넣음 
                                                       // inputData에서 id를 꺼내고, 나머지 객체들을 rest에 넣음  
                    return {
                      ...product,  // 기존의 product를 현재 inputData에 들어있는 값으로 바꿈 
                      ...rest      // rest안에는 id를 제외한 나머지 객체들이 들어있음 
                    }
                  }
                  return product; 
                })
              ]);
              resetMode();
              } 
            })
        }
        if(mode === 3) {
        Swal.fire({
            title: "상품 정보 삭제",
            text: "정말로 삭제 하시겠습니까?",
            showCancelButton: true,
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancelButtonText: "취소"
            }).then(result => {
            if(result.isConfirmed) {
              setDeleting(true);
            }
            setDeleting();
          })
          resetMode();
        }
    }

    const handleCancelClick = () => {
        resetMode();
    }

    const resetMode = () => {
        setMode(0);
        setInputData({ ...emptyProduct });
    }

    return (
        <header className="table-header">
            <div className="input-group">
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="productName"
                    value={inputData.productName}
                    placeholder="상품명" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.productName}
                    autoFocus 
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="size"
                    value={inputData.size}
                    placeholder="사이즈" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.size}
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3}
                    name="color"
                    value={inputData.color}
                    placeholder="색상" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.color}
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="price"
                    value={inputData.price}
                    placeholder="가격" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.price}
                />
            </div>
            <div>
                {
                    !mode && (
                        <div className="button-group">
                            <button onClick={handleChangeModeClick} value={1} >추가</button>
                            <button onClick={handleChangeModeClick} value={2} >수정</button>
                            <button onClick={handleChangeModeClick} value={3} >삭제</button>
                        </div>
                    )
                }
                {
                    !!mode && (
                        <div className="button-group">
                            <button onClick={handleSubmitClick} >확인</button>
                            <button onClick={handleCancelClick} >취소</button>
                        </div>
                    )
                }
            </div>
        </header>
    );
}

export default DataTableHeader;