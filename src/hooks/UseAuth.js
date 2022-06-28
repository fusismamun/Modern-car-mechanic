import React, { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider"

const UseAuth =() => {
    return React.useContext(AuthContext);
}
export default UseAuth;