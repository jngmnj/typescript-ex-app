import React from 'react'
import kakaoLoginbutton from "../assets/kakao_login_large_wide.png"

// 함수 리턴값 명시하는 습관 

const LoginPage = () => {
  return (
    <div>
        <button className='w-[380px]'>
          <img src={kakaoLoginbutton} alt="" />
        </button>
    </div>
  )
}

export default LoginPage