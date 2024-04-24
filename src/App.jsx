import { useState, createContext } from 'react'
import General from './components/General'
import Display from './components/Display';

export const UserContext = createContext();

export default function App(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [dname, setDName] = useState('');
  const [demail, setDEmail] = useState('');
  const [dphoneNo, setDPhoneNo] = useState('');

  return(
    <>
      <UserContext.Provider value = {{name, setName, 
                                      email, setEmail,
                                      phoneNo, setPhoneNo,
                                      dname, setDName, 
                                      demail, setDEmail,
                                      dphoneNo, setDPhoneNo}}>
        <h1> Curriculum Vitae </h1>
        <General/>
        <Display/>
      </UserContext.Provider>
    </>
  )

}