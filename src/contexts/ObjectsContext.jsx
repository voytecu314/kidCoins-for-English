import React,{ useState, useRef, createContext } from 'react'
import {words} from '../data/data-english';

export const ObjContext = createContext();

export default function ObjectsContext(props) {

    const [page, setPage] = useState('pets');
    const rand8 = useRef(Math.floor(Math.random()*8));

  return (
    <ObjContext.Provider value={{words, page, setPage, rand8}}>
            {props.children}
    </ObjContext.Provider>
  )
}