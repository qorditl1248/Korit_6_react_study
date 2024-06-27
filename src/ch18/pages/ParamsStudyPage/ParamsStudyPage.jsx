/** @jsxImportSource @emotion/react */

import { useParams } from "react-router-dom"

function ParamsStudyPage() {
  
  const params = useParams(); // 많이 사용
  console.log(params.name);

  return (
    <div>

    </div>
  )
}

export default ParamsStudyPage