import React,{ useState, createContext } from 'react'
import {words} from '../data/data-english';

export const ObjContext = createContext();

export default function ObjectsContext(props) {

    const [page, setPage] = useState('pets');
  return (
    <ObjContext.Provider value={{words, page, setPage}}>
            {props.children}
    </ObjContext.Provider>
  )
}