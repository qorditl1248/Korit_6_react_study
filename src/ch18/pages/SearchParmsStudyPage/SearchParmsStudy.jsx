import React from 'react'
import { useSearchParams } from 'react-router-dom'

function SearchParmsStudy() {

  const [SearchParms, setSearchParams ] = useSearchParams();

  console.log(SearchParms.get("a"));
  console.log(SearchParms.get("b"));

  // const values = searchParams.values();

  // console.log(values.next());
  // console.log(values.next());

  // setSearchParams({...searchParams, c: 30});

  const handleClick = () => {

    const keys = SearchParms.keys();

    let newParams = {}; 

    for(let i = 0; i < SearchParms.size; i++) {
      const key = keys.next().value;
      const value = SearchParms.get(key);

      newParams = {
        ...newParams,
        [key]: value
      }
    }
    setSearchParams({ ...newParams, c: 30}); // 새로운 값 추가 
  }


  return (
    <div>
      <h1>SerachParams</h1>
      <button onClick={handleClick}>c=30 추가</button>
    </div>
  )
}

export default SearchParmsStudy