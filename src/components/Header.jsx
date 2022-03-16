import { useEffect, useState, useContext } from "react";
import { ObjContext } from "../contexts/ObjectsContext";

const Header = () => {

    const {storagePoints, 
            words,name, 
            setName, page, 
            setPage, 
            setRand8ChangedFlag,
            setHighScores, 
            rand8ChangedFlag, rand8} = useContext(ObjContext);

    const chooseName = (e) => {
        setName(e.target.innerText);
    }

    const changeCardPage = (item) => {
        rand8.current=Math.floor(Math.random()*8);
        item===page?setRand8ChangedFlag(!rand8ChangedFlag):setPage(item);
    }

    useEffect(()=>{
        setHighScores(storagePoints[name]);
    },[name]);

    return (
       <header>
           <section> 
               <div style={{display: name?'none':'block'}} >
                    <button onClick={chooseName}>Lili</button>
                    <button onClick={chooseName}>Emi</button>
                </div>
                <div style={{display: name?'block':'none'}} >
                    <h1>
                        <p>{name}</p>
                    </h1>
                    <form><button><span>←</span><span>→</span></button></form>
                </div>
           </section>
           <section>
                {Object.keys(words).map((item,i)=><div key={i} onClick={()=>changeCardPage(item)}>{item}</div>)}
           </section>
       </header>
    )
}

export default Header;