import React, { useContext } from "react";
import { UserContext } from "../App";


export default function Display(){
    const {name, email, phoneNo, 
        secname, tername, sectitle, tertitle, secdate, terdate} = useContext(UserContext);

    return(
        <>
            Name: {name} <br/>
            Email: {email} <br/>
            Phone no.: {phoneNo} <br/>
            Studied {sectitle} at {secname} and graduated by {secdate} <br/>
            Studied {tertitle} at {tername} and graduated by {terdate}
        </>
    )
    
}