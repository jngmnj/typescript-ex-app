import React from 'react'

const MainPage = () => {
  return (
    <div>
        <div className='text-center font-bold'>작성자</div>
        <div className='text-xs'>내용</div>
        <div className='text-xs text-gray-700'>2021-01-01</div>
        <button className='border border-black p-2 m-1'>자세히</button>
        <button className='border border-black p-2 m-1'>다음글</button>
    </div>
  )
}

export default MainPage