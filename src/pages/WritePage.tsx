import React from 'react'

const WritePage = () => {
  return (
    <div className='flex flex-col items-center'>
      <textarea className='border w-full max-w-xl font-xl p-3 mb-3'></textarea>
      <button className='border border-black'>글쓰기</button>
    </div>
  )
}

export default WritePage