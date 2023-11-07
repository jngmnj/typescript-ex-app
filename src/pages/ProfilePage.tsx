import React from 'react'
import MyArticle from '../components/MyArticle'
import MyComment from '../components/MyComment'

const ProfilePage = () => {
  return (
    <div>
        <div>내이름</div>
        <button>이름변경</button>
        <div>
            내가 쓴 글
            <MyArticle />
        </div>
        <div>
            내가 쓴 댓글
            <MyComment />
        </div>
    </div>
  )
}

export default ProfilePage