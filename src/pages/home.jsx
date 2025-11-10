import React from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const token = Cookies.get("token")

  if(!token){
    navigate("login")
  }
  return (
    <div>Home</div>
  )
}

export default Home