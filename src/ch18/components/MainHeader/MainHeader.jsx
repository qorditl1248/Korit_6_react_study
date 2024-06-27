/** @jsxImportSource @emotion/react */
import { useRecoilState } from 'recoil';
import MainContainer from '../MainContainer/MainContainer';
import * as s from './style';
import { FaBars } from "react-icons/fa";
import { mainSidebarShowAtom } from '../../atoms/mainSidebarShowAtom';

function MainHeader() {

  const [ mainSidebarShow, setMainSidebarShow ] = useRecoilState(mainSidebarShowAtom);

  const handleMainMenuToggleClick = () => {
    setMainSidebarShow(true);
  }



  return (
    <div css={s.layout}>
      <MainContainer>
        <div css={s.headerBody}>
          <button 
            css={s.meunToggleButton}
            onClick={handleMainMenuToggleClick}
          >
            <FaBars/>
          </button>
        </div>
      </MainContainer>
    </div>
  )
}

export default MainHeader;