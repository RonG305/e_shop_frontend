import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_BASE_URL } from '../../apiConfig'
import { FaEye } from 'react-icons/fa'
import { FaRegEyeSlash } from 'react-icons/fa6'

const Signin = () => {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [showPassword, setShowPassword] = useState(false)



    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })


    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData((prevData) => ({...prevData, [name]: value}))
    }


    const handleSubmit = async(event) => {
        event.preventDefault();

        try {

            const response = await fetch(`${API_BASE_URL}/api/accounts/signin/`, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }

                
            })

            if(response.ok) {
                console.log("Login succesifull")
                setIsLoading(true)
                const data = await response.json()
                console.log(data)

                localStorage.setItem("username", data.username)
                localStorage.setItem("access_token", data.access_token)
                localStorage.setItem("role", data.role)
                localStorage.setItem("userId", data.userId)

                setTimeout(() => {
                    navigate("../../main/shopping-cart")
                }, 4000);
                
            } else {
                console.log("Server error")
                setErrorMessage("sorry! your Username or password is incorrect")
            }

        } catch(error) {
            console.log("Error while trying to login", error)
            setErrorMessage("sorry! system experienced issues, try agin later!")
        }

    }


   


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
            setErrorMessage("")
        }, 4000);

        return () => clearTimeout(timer)
    })

    const styles = {
        inputStyles : "rounded-md outline-blue-600 border p-2 border-slate-300 w-full",
        passwordStyles:  "rounded-md   w-full flex gap-2 items-center"
    }
  return (
    <div className=' flex items-center justify-center mt-4 text-slate-950 px-2'>
        <div className='md:w-[500px] p-8  rounded-md border border-slate-300 '>
        <form onSubmit={handleSubmit}  className=''>
            {errorMessage && <p className=' bg-red-400 rounded-md px-2 py-1 '>{errorMessage}</p>}
            <div className=' flex flex-col gap-2'>
                <h4 className=' font-bold text-2xl text-center my-4'>Login to EleoShop </h4>
                  <div>
                    <p className=' font-semibold'>Username</p>
                    <input
                    name='username'
                    value={userData.username}
                    onChange={handleChange}
                    className={styles.inputStyles}
                    required
                    />
                </div>
                
                
                <div>
                    <p className=' font-semibold'>Enter password</p>
                    <div className={styles.passwordStyles}>
                    <input
                    type={`${showPassword ? "text": "password"}`}
                    name='password'
                    value={userData.password}
                    onChange={handleChange}
                        className={styles.inputStyles}
                        required
                        />

                         {showPassword ? (
                                 <FaEye onClick={handleShowPassword} size={20} className=' text-slate-700 cursor-pointer ' />
                        ): (
                            <FaRegEyeSlash onClick={handleShowPassword} size={20} className=' text-slate-700 cursor-pointer '/>
                        )}
                        </div>

                </div>

                {isLoading ? (
                     <button className=' bg-slate-950 text-white rounded-md px-4 py-2 mt-2 buttonload' >
                     <i class="fa fa-circle-o-notch fa-spin"></i>Loading
                 </button>
                ): (
                    <button type='submit' className=' bg-slate-950 text-white rounded-md px-4 py-2 mt-2 '>Sign in</button>
                )}
              
            </div>
           

        </form>

        <Link to='/main/signup' className=' font-medium text-sm text-blue-500 my-3'>Don't have account ? sign up</Link>
    </div>
    </div>
    
  )
}

export default Signin