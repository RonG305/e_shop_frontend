import React, { createContext } from 'react'
import { API_BASE_URL } from './apiConfig'
import { useNavigate } from 'react-router-dom'



export const  LogoutContext = createContext()

export const LogoutProvider = ({children}) => {

    const navigate = useNavigate()

     const handleLogout = async () => {
    
        try {
          const response = await fetch(`${API_BASE_URL}/api/accounts/logout/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
          })
    
          if(response.ok) {
            console.log("Succesifull logout")
            localStorage.removeItem("username")
            localStorage.removeItem("access_token")
            localStorage.removeItem("userId")
            localStorage.removeItem("role")
            navigate("/main")
          } else {
            console.log("Server error")
          }
    
        } catch(error) {
          console.log("An error occured during out", error)
        }
      }
    
  return (
    <LogoutContext.Provider value={{handleLogout}}>
        {children}
    </LogoutContext.Provider>
  )
}

