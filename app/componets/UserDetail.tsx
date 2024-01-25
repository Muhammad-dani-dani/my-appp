"use client"
import React, { use, useContext ,useEffect} from 'react'

import { Usercontext } from '../context/Usercontext'

const UserDetail = () => {
    const user1 = {
        id: 1,
        name: 'danish'
    
      }
      const getUser = () => {
        setUser(user1)
      }
    const {user,setUser} = useContext<any>(Usercontext)
    const handleChange = () => {
        setUser(user.id === 1?{
            id:2,
            name:'dani'
        }:user1)
    }
    useEffect(() => {
        getUser()
    },[])
   
    
    
  return (
    <div className='flex flex-col items-center justify-between p-6 m-6 ring ring-black bg-gray-100'>
        <h1 className='text-3xl'>
            

        UserDetail
        </h1>
        { user &&
        <div>

            <p>Name:{user.name}</p>
            <p>id:{user.id}</p>
            <button onClick={handleChange}>change User</button>
        </div>
}
        </div>
  )
}

export default UserDetail