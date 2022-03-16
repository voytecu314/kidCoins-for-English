import React,{ useState, useRef, useEffect, createContext } from 'react';
import {words} from '../data/data-english';

export const ObjContext = createContext(null);

export default function ObjectsContext(props) {

   !localStorage.hasOwnProperty('learnENG') && localStorage.setItem('learnENG', JSON.stringify({Emi: 0,Lili:0}));
    const storagePoints = JSON.parse(localStorage.getItem('learnENG'));

    const [page, setPage] = useState('pets');
    const [rand8ChangedFlag, setRand8ChangedFlag] = useState(false);
    const [name, setName] = useState('');
    const rand8 = useRef(Math.floor(Math.random()*8));
    const [highScores, setHighScores] = useState(null);

    useEffect(()=>{
      localStorage.setItem('learnENG',JSON.stringify({...storagePoints, [name]:highScores}));
    },[highScores]);

  return (
    <ObjContext.Provider value={{
      storagePoints,
      words, 
      name, 
      setName,
      page, 
      setPage,
      rand8ChangedFlag, 
      setRand8ChangedFlag, 
      rand8,
      highScores,
      setHighScores}}>
            {props.children}
    </ObjContext.Provider>
  )
}