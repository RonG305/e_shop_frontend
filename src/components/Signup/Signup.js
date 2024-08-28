import React, { useEffect, useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { API_BASE_URL } from '../../apiConfig'
import { FaEye, FaRegEyeSlash } from 'react-icons/fa6'



const Signup = () => {

    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")
    const [showPassword, setShowPassword] = useState(false)



    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }


    const [userData, setUserData] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password2: ""
    })


    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData((prevData) => ({...prevData, [name]: value}))
    }


    const handleSubmit = async(event) => {
        event.preventDefault();

        try {

            const response = await fetch(`${API_BASE_URL}/api/accounts/signup/`, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }

                
            })

            if(response.ok) {
                console.log("Login succesifull")
                setIsLoading(true)
                setTimeout(() => {
                    navigate("../../main/signin")
                }, 4000);
              
            } else {
                console.log("Server error")
                setErrorMessage("sorry! your passwords do not match")
            }

        } catch(error) {
            console.log("Error while trying to login", error)
            setErrorMessage("sorry! system experienced some issues, try again later!")
        }

    }



    useEffect(() => {


        
        const timer = setTimeout(() => {
            setErrorMessage("")
            setIsLoading(false)
        }, 4000);

        return () => clearTimeout(timer)
    })


    const styles = {
        inputStyles : "rounded-md outline-blue-600 border p-2 border-slate-300 w-full",
        passwordStyles:  "rounded-md   w-full flex gap-2 items-center",
        titleStyles : "font-semibold"
    }


 
  return (
    <div className=' flex items-center justify-center mt-4 text-slate-950 px-2'>
        <div className='md:w-[500px] p-8  rounded-md border border-slate-300 '>
        <form onSubmit={handleSubmit}  className=''>
        {errorMessage && <p className=' bg-red-400 rounded-md px-2 2 '>{errorMessage}</p>}
            <div className=' flex flex-col gap-2'>
                <h4 className=' font-bold text-2xl text-center my-4'>Create account</h4>
                <div>
                    <p className={styles.titleStyles}>User Name</p>
                    <input
                    name='username'
                    value={userData.username}
                    onChange={handleChange}
                    className={styles.inputStyles}
                    required
                    />
                </div>
                
                <div>
                    <p className={styles.titleStyles}>Email address</p>
                    <input
                    name='email'
                    value={userData.email}
                    onChange={handleChange}
                        className={styles.inputStyles}
                        required
                    />
                </div>
                
                <div>
                    <p className={styles.titleStyles}>First name</p>
                    <input
                    name='first_name'
                    value={userData.first_name}
                    onChange={handleChange}
                        className={styles.inputStyles}
                        required
                        />
                </div>
                

                <div>
                    <p className={styles.titleStyles}>Last name</p>
                    <input
                    name='last_name'
                    value={userData.last_name}
                    onChange={handleChange}
                        className={styles.inputStyles}
                        required
                        />
                </div>

                <div>
                    <p className={styles.titleStyles}>Enter password</p>
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

                <div>
                    <p className={styles.titleStyles}>Enter password</p>
                    <div className={styles.passwordStyles}>
                    <input
                    type={`${showPassword ? "text": "password"}`}
                    name='password2'
                    value={userData.password2}
                    onChange={handleChange}
                        className=" rounded-md w-full h-full border border-slate-300 outline-indigo-500"
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
                    <button type='submit' className=' bg-slate-950 text-white rounded-md px-4 py-2 mt-2 '>Sign up</button>
                )}
              
               
            </div>
           

        </form>

        <Link to='/main/signin' className=' font-medium text-sm text-blue-500 my-3'> Have an account ? sign in</Link>
    </div>
    </div>
    
  )
}

export default Signup