import React, { useContext } from "react";
import { UserContext } from "../App";
import '../styles/display.css'


export default function Display(){
    const {name, email, phoneNo, 
        secname, tername, sectitle, tertitle, secdate, terdate} = useContext(UserContext);

    return(
        <>
            {(name && email && phoneNo)  &&
                <div className="displaycon">
                        <div className="dgeneral">
                            Name: {name} <br/>
                            Email: {email} <br/>
                            Phone no.: {phoneNo} <br/>
                        </div>
                    {(secname && sectitle && secdate)  &&
                        <div className="seceduc">
                            Studied {sectitle} at {secname} and graduated by {secdate} <br/>
                        </div>
                    }
                    {(tername && tertitle && terdate)  &&
                        <div className="tereduc">
                            Studied {tertitle} at {tername} and graduated by {terdate}
                        </div>
                    }
                </div>
            }
        </>
    )
    
}