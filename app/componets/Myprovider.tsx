"use client"
import { User } from '@/types'
import { Usercontext } from '../context/Usercontext'
import { useState } from 'react'

export default function Myprovider({children}:{children:React.ReactNode}) {
    const [user,setUser] = useState<User|null>(null)

  return (
    <Usercontext.Provider value = {{user,setUser}}>
        {children}
    </Usercontext.Provider>
  )
}


