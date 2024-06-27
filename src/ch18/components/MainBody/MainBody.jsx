/** @jsxImportSource @emotion/react */
import { Route, Routes } from 'react-router-dom';
import * as s from './style';
import RouteStudyPage from '../../pages/RouteStudyPage/RouteStudyPage';
import HomePage from '../../pages/HomePage/HomePage';
import ParamsStudyPage from '../../pages/ParamsStudyPage/ParamsStudyPage';
import SerachParmsStudy from '../../pages/SearchParmsStudyPage/SearchParmsStudy';
import CustomHookPage from '../../pages/\bCustomHookPage/\bCustomHookPage';
import Memoizationpage from '../../pages/MemoizationPage/Memoizationpage';

function MainBody() {
  return (
    <div css={s.layout}> 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/routestudy/*" element={<RouteStudyPage/>} />
        <Route path="/params/:name/*" element={<ParamsStudyPage/>}/>
        <Route path='/serchparams' element={<SerachParmsStudy/>}/>
        <Route path='/customhook/:id' element={<CustomHookPage/>}/>
        <Route path='/memoization' element={<Memoizationpage/>}/>
      </Routes>
    </div>
  );
}

export default MainBody;