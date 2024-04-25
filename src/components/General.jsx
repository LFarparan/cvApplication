import React, { useContext} from "react";
import { UserContext } from "../App";
import '../styles/general.css'

export default function General(){
    const {setName, setEmail, setPhoneNo} = useContext(UserContext);

    function submitGeneral(){
        let namebox = document.getElementById('full_name');
        let emailbox = document.getElementById('email');
        let phonenobox = document.getElementById('phone_no');
        setName(namebox.value);
        setEmail(emailbox.value);
        setPhoneNo(phonenobox.value);
        namebox.disabled = true;
        emailbox.disabled = true;
        phonenobox.disabled = true;
    }

    function enableEdit(){
        // Enable editing by removing the 'disabled' attribute from input fields
        document.getElementById('full_name').disabled = false;
        document.getElementById('email').disabled = false;
        document.getElementById('phone_no').disabled = false;
    }

    return(
        <>
                <div className="gencon">
                    <div className="labelsection">
                        <label htmlFor="full_name">Name:</label><br/>
                        <label htmlFor="email">Email:</label><br/>
                        <label htmlFor="phone_no">Phone Number:</label> <br/>
                        <button type='button' onClick={enableEdit}>EDIT</button>
                    </div>
                    <div className="inputsection">
                        <input type="text" name="full_name" id="full_name" required/><br/>
                        <input type="email" name="email" id="email" required/><br/>
                        <input type="text" name="phone_no" id="phone_no" required/><br/>
                        <button type="submit" id="submit" onClick={submitGeneral}>SUBMIT</button>
                    </div>
                </div>
        </>
    )
}
