/** @jsxImportSource @emotion/react */
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import * as s from './style';
import MainContainer from '../../components/MainContainer/MainContainer';


function RouteStudySubPage() {

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);
  console.log(location.pathname.lastIndexOf("/"));
  const index = location.pathname.lastIndexOf("/"); // 마지막 인덱스 찾기
  console.log(location.pathname.substring(index)); // 문자열 자르기 
  console.log(location.pathname.substring(index + 1)); // 문자열 자르기 


  const handleAgeClick = () => {
    navigate("/routestudy/page1/age", {replace: true}); // repalce -> 기본값은 false 렌더링을 처음부터 할건가
    // window.location.href = "https://naver.com"=> repalce: false
    // window.location.replace("https://naver.com")=> repalce: true

    // history를 남기지 않아 뒤로가기가 안먹힘 

  }


  return (
    <MainContainer>
          <div>
      <ul>
        <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
        <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
        <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
      </ul>
      <button onClick={handleAgeClick}>나이</button>
      <div>
        <Routes>
          <Route path="/name" element={<h1>이름</h1>}/>
          <Route path="/age" element={<h1>나이</h1>}/>
          <Route path="/address" element={<h1>주소</h1>}/>
        </Routes>
      </div>
    </div>
    </MainContainer>
  )
}

export default RouteStudySubPage