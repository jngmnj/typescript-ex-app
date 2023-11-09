import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'

const NavBar = () => {
  return (
    <div className='flex'>
        <NavItem to="/">메인</NavItem>
        <NavItem to="/login">로그인</NavItem>
        <button onClick={() => {console.log("logout")}}>로그아웃</button>
        <NavItem to="/write">글쓰기</NavItem>
        <NavItem to="/profile">내정보</NavItem>
    </div>
  )
}

export default NavBar