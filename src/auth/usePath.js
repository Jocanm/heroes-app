import { createContext,useContext } from "react";

export const UsePath = createContext(null)

export const usePath = () => {

    return useContext(UsePath)

}

