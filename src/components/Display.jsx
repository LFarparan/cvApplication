import React, { useContext } from "react";
import { UserContext } from "../App";


export default function Display(){
    const {dname, demail, dphoneNo} = useContext(UserContext);

    return(
        <>
            Name: {dname} <br/>
            Email: {demail} <br/>
            Phone no.: {dphoneNo} <br/>
        </>
    )
    
}