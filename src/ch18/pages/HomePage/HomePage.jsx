/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function HomePage() {

  const layout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  `;



  return (
    <div css={layout}>
      <h1>메인페이지 입니다.</h1>
    </div>
  )
}

export default HomePage;