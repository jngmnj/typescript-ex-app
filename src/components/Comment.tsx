import React from 'react'

interface CommentProps {

}
const Comment = (props: CommentProps) => {
  return (
    <div className='flex flex-col items-start border m-3'>
        <div className='text-sm'>내용내용</div>
        <div className='text-gray-600 text-xs self-end'>
          <div>작성자</div>
          <div>2021-01-01</div>
        </div>
    </div>
  )
}

export default Comment