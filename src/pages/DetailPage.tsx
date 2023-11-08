import React from 'react'
import Comment from '../components/Comment'

const DetailPage = () => {
  return (
    <div>
        <div className=''>
          <div className='text-xs'>작성자</div>
          <div className='text-xs text-gray-700'>내용</div>
          <div>2021-01-01</div>
        </div>
        <div>
            댓글목록
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <div className='flex flex-row items-center'>
              <input className='border' />
              <button>댓글 쓰기</button>
            </div>
        </div>
    </div>
  )
}

export default DetailPage