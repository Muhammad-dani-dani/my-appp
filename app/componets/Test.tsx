"use client"
import React, { useContext } from 'react'



import { Usercontext } from '../context/Usercontext'

const Test = () => {
    const contexValue = useContext<any>(Usercontext)
    const {user} = contexValue  
  return (
    <div className='flex flex-col items-center justify-between p-6 m-6 ring ring-black bg-gray-100'>
        <h1 className='text-3xl'>
            

        UserDetail
        </h1>
        { user &&
        <div>

            <p>Name:{user.name}</p>
            <p>id:{user.id}</p>
            <button>change User</button>
        </div>
}
        </div>
  )
}

export default Test