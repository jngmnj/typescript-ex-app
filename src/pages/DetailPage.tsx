import React from 'react'
import Commnet from '../components/Commnet'

const DetailPage = () => {
  return (
    <div>
        <div>작성자</div>
        <div>내용</div>
        <div>2021-01-01</div>
        <div>
            댓글목록
            <Commnet />
            <Commnet />
            <Commnet />
            <Commnet />
            <input />
            <button>댓글 쓰기</button>
        </div>
    </div>
  )
}

export default DetailPage