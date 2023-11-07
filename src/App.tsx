import { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import DetailPage from './pages/DetailPage'
import WritePage from './pages/WritePage'
import NavBar from './components/NavBar'

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="write" element={<WritePage />} />
          <Route path="detail" element={<DetailPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
