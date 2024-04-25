import { useState, createContext } from 'react'
import General from './components/General'
import Display from './components/Display';
import Education from './components/Education';

export const UserContext = createContext();

export default function App(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const [secname, setSecname] = useState('---');
  const [tername, setTername] = useState('---');
  const [sectitle, setSectitle] = useState('---');
  const [tertitle, setTertitle] = useState('---');
  const [secdate, setSecdate] = useState('---');
  const [terdate, setTerdate] = useState('---');

  return(
    <>
      <UserContext.Provider value = {{name, setName, 
                                      email, setEmail,
                                      phoneNo, setPhoneNo,
                                      secname, setSecname,
                                      tername, setTername,
                                      sectitle, setSectitle,
                                      tertitle, setTertitle,
                                      secdate, setSecdate,
                                      terdate, setTerdate
                                      }}>
        <h1> Curriculum Vitae </h1>
        <General/>
        <Education/>
        <Display/>
      </UserContext.Provider>
    </>
  )

}