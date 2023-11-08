import React from 'react'
import MyArticle from '../components/MyArticle'
import MyComment from '../components/MyComment'

const ProfilePage = () => {
  return (
    <div>
        <div className='flex flex-col items-center'>
          <input type="text"  className='font-xl font-bold border border-black' placeholder='내이름' />
          <button className='text-xs underline'>이름변경</button>
        </div>
        <div className='flex flex-row justify-between w-full max-w-lg'>
          <div className=''>
              <div className='font-bold'>내가 쓴 글</div>
              <MyArticle />
          </div>
          <div>
              <div className=''>내가 쓴 댓글</div>
              <MyComment />
          </div>
        </div>
    </div>
  )
}

export default ProfilePage