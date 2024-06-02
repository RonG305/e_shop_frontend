import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../apiConfig'
import { Link, useParams } from 'react-router-dom'

const OrderView = () => {
    const [order, setOrder] = useState({})
    const params = useParams()


    const getOrder = async() => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/orders/getOrder/${params.id}`, {
                method: 'GET',
                headers : {
                    "Authorization": `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            const data = await response.json()
            setOrder(data)
            console.log(data)

        } catch(error) {
            console.log("An error occured while geting the order", order)
        }
    }

    useEffect(() => {
        getOrder()
    }, [params.id])
  return (
    <div className='border border-slate-200  rounded-md p-4 w-full overflow-x-auto relative mt-4'>
        <h3 className=' text-center font-bold text-2xl text-indigo-500 uppercase'>Order View</h3>

        <div className=' md:flex gap-3'>
          

            <div className=' font-semibold text-sm md:w-1/2'>
            <h3 className='text-xl font-bold my-2 text-orange-500'>Personal details</h3>
                <p className=' rounded-md p-2 border border-slate-200 mb-2'>User : {order.user}</p>
                <p className=' rounded-md p-2 border border-slate-200 mb-2'>Full Name : {order.full_name}</p>
                <p className=' rounded-md p-2 border border-slate-200 mb-2'>Email Address : {order.email_address}</p>
                <p className=' rounded-md p-2 border border-slate-200 mb-2'>City : {order.city}</p>
                <p className=' rounded-md p-2 border border-slate-200 mb-2'>Adress : {order.address}</p>
                <p className=' rounded-md p-2 border border-slate-200 mb-2'>Zip Code : {order.zip_code}</p>
                <p className=' rounded-md p-2 border border-slate-200 mb-2'>Phone Number : {order.phone_number}</p>
                <p className=' rounded-md p-2 border border-slate-200 mb-2'>Total Price : {order.total_price}</p>
                
                <p className=' rounded-md p-2 border border-slate-200 mb-2'>Payment method : {order.payment_method}</p>
            </div>

            <div className='md:w-1/2 '>
                <h3 className=' text-xl font-bold my-2 text-orange-500'>Ordered Products</h3>
            <div className=' grid grid-cols-3 gap-2 '>
                {order.order_items?.map((orderItem) => (
                    <div>
                    <img loading='lazy' className=' rounded-md md:max-w-52 w-28 hover:scale-150' src={`${API_BASE_URL}/${orderItem.product.image}`} />
                    <p className=' text-sm'>{orderItem.product.name}</p>
                    <p className=' text-sm'>Total :{orderItem.quantity}</p>
                </div>
                ))}
                
            </div>
            </div>


                
        </div>
        <Link className=' bg-slate-800 rounded-md px-2 py-1 text-white cursor-pointer mt-4 h-fit' to={`/dashboard/orders`}>Go Back</Link>
    </div>
  )
}

export default OrderView