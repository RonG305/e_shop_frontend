import React, { useEffect, useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { API_BASE_URL } from '../../apiConfig'



const Signup = () => {

    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

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
            }

        } catch(error) {
            console.log("Error while trying to login", error)
        }

    }



    useEffect(() => {


        
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 4000);

        return () => clearTimeout(timer)
    })


    const styles = {
        inputStyle: "rounded-md outline-blue-600 border px-2 py-1 border-slate-300 w-full"
    }


 
  return (
    <div className=' flex items-center justify-center mt-4 text-slate-950 px-2'>
        <div className='md:w-[500px] p-8  rounded-md border border-slate-300 '>
        <form onSubmit={handleSubmit}  className=''>
            <div className=' flex flex-col gap-2'>
                <h4 className=' font-bold text-2xl text-center my-4'>Create MedSwift account</h4>
                <div>
                    <p>User Name</p>
                    <input
                    name='username'
                    value={userData.username}
                    onChange={handleChange}
                    className={styles.inputStyle}
                    required
                    />
                </div>
                
                <div>
                    <p>Email address</p>
                    <input
                    name='email'
                    value={userData.email}
                    onChange={handleChange}
                        className={styles.inputStyle}
                        required
                    />
                </div>
                
                <div>
                    <p>First name</p>
                    <input
                    name='first_name'
                    value={userData.first_name}
                    onChange={handleChange}
                        className={styles.inputStyle}
                        required
                        />
                </div>
                

                <div>
                    <p>Last name</p>
                    <input
                    name='last_name'
                    value={userData.last_name}
                    onChange={handleChange}
                        className={styles.inputStyle}
                        required
                        />
                </div>

                <div>
                    <p>Enter password</p>
                    <input
                    name='password'
                    value={userData.password}
                    onChange={handleChange}
                        className={styles.inputStyle}
                        required
                        />
                </div>

                <div>
                    <p>Re-enter password</p>
                    <input
                    name='password2'
                    value={userData.password2}
                    onChange={handleChange}
                        className={styles.inputStyle}
                        required
                        />
                </div>
                

                {isLoading ? (
                     <button className=' bg-orange-500 text-white rounded-md px-4 py-1 mt-2 buttonload' >
                     <i class="fa fa-circle-o-notch fa-spin"></i>Loading
                 </button>
                ): (
                    <button type='submit' className=' bg-orange-500 text-white rounded-md px-4 py-1 mt-2 '>Sign up</button>
                )}
              
               
            </div>
           

        </form>

        <Link to='/main/signin' className=' font-medium text-sm text-blue-500 my-3'> Have an account ? sign in</Link>
    </div>
    </div>
    
  )
}

export default Signup