import { Dispatch, SetStateAction } from "react"
interface User {
    id: number
    name: string,
}

interface MycustomType{
    user: null|User,
    setUser:Dispatch<SetStateAction<null|User>>
}