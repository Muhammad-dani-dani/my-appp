import { MycustomType, User } from "@/types"
import { createContext } from "react"


export const Usercontext = createContext<MycustomType|undefined  >(undefined)