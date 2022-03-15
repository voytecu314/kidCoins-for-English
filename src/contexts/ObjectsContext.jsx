import React,{ useState, useRef, useEffect, createContext } from 'react'
import {words} from '../data/data-english';

export const ObjContext = createContext();

export default function ObjectsContext(props) {

    const [page, setPage] = useState('pets');
    const [rand8ChangedFlag, setRand8ChangedFlag] = useState(false);
    const [name, setName] = useState('');
    const rand8 = useRef(Math.floor(Math.random()*8));

    
    !localStorage.hasOwnProperty('learnENG') && localStorage.setItem('learnENG', JSON.stringify({Emi: 0,Lili:0}))
    const highScores = useRef( JSON.parse(localStorage.getItem('learnENG')) );
  

  return (
    <ObjContext.Provider value={{
      words, 
      name, 
      setName,
      page, 
      setPage,
      rand8ChangedFlag, 
      setRand8ChangedFlag, 
      rand8,
      highScores}}>
            {props.children}
    </ObjContext.Provider>
  )
}