import { useState, createContext } from 'react'
import General from './components/General'

export const UserContext = createContext();


export default function App(){
  



  return(
    <>
      <h1> Curriculum Vitae </h1>
      <General/>
    
    </>
  )

}