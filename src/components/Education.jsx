import React, {useContext} from "react";
import '../styles/educ.css'
import { UserContext } from "../App";

export default function Education(){
    const {secname, setSecname, tername, setTername, 
        sectitle, setSectitle, tertitle, setTertitle,
        secdate, setSecdate, terdate, setTerdate} = useContext(UserContext);

    function submitEduc(){
        let secnamebox = document.getElementById('secname');
        let ternamebox = document.getElementById('tername');
        let sectitlebox = document.getElementById('sectitle');
        let tertitlebox = document.getElementById('tertitle');
        let secdatebox = document.getElementById('secdate');
        let terdatebox = document.getElementById('terdate');
        setSecname(secnamebox.value);
        setTername(ternamebox.value);
        setSectitle(sectitlebox.value);
        setTertitle(tertitlebox.value);
        setSecdate(secdatebox.value);
        setTerdate(terdatebox.value);
        secnamebox.disabled = true;
        ternamebox.disabled = true;
        sectitlebox.disabled = true;
        tertitlebox.disabled = true;
        secdatebox.disabled = true;
        terdatebox.disabled = true;
    }
    function EditEduc(){
        document.getElementById('secname').disabled = false;
        document.getElementById('tername').disabled = false;
        document.getElementById('sectitle').disabled = false;
        document.getElementById('tertitle').disabled = false;
        document.getElementById('secdate').disabled = false;
        document.getElementById('terdate').disabled = false;
    }

    return(
        <div className="eduExp">
            <div className="educon">
                <label> </label> <br/>
                <label> Secondary </label> <br/>
                <label> Tertiary </label> 
            </div>
            <div className="schoolcon">
                <label> School Name </label> <br/>
                <input type="text" id="secname"/> <br/>
                <input type="text" id="tername"/>
                <button type="button" onClick={EditEduc}> EDIT </button>
            </div>
            <div className="studycon">
                <label> Title of Study </label> <br/>
                <input type="text" id="sectitle"/> <br/>
                <input type="text" id="tertitle"/>
                <button type="submit" onClick={submitEduc}> SUBMIT </button>
            </div>
            <div className="datecon">
                <label> Date Graduated </label> <br/>
                <input type="date" id="secdate"/> <br/>
                <input type="date" id="terdate"/>
            </div>
        </div>

    )
}