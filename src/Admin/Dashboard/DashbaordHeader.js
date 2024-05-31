import React from 'react'

const DashbaordHeader = () => {

    const LoggedInAdmin = localStorage.getItem("username")

    const getDate = () => {
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth()
        const currentDate = date.getDate()
        const day = date.getDay().toString()

        


        const formatedDate = `${month} / ${currentDate} / ${year} `
        console.log(day)

        return formatedDate
        
       
    }


    const date = new Date()
    const currentTime = date.getHours()
    let greetings

    if(currentTime < 12) {
        greetings = "Good morning"
    } else if (currentTime < 16) {
        greetings = "Good After noon"
    } else{
        greetings = "Good evening"
    }
        console.log("current Time: ", currentTime)


  return (
    <div className=' flex items-center justify-between'>
    <div>
        <p className=' font-semibold'>{greetings},  {LoggedInAdmin}!</p>
        <p className=' text-sm'>Here's what's going on in your business</p>
    </div>
    <div >
        <p>Date </p>
        <p className=' rounded-md border border-slate-200 px-2 py-1 w-fit text-sm font-semibold'>{getDate()}</p>
    </div>
    </div>
    
  )
}

export default DashbaordHeader