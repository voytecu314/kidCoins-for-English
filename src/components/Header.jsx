import { useEffect, useState, useContext } from "react";
import { ObjContext } from "../contexts/ObjectsContext";

const Header = () => {

    const {words,name, setName, page, setPage, setRand8ChangedFlag, rand8ChangedFlag, rand8} = useContext(ObjContext);

    const chooseName = (e) => {
        setName(e.target.innerText)
    }

    const changeCardPage = (item) => {
        rand8.current=Math.floor(Math.random()*8);
        item===page?setRand8ChangedFlag(!rand8ChangedFlag):setPage(item);
    }

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
                        {/* <p>
                            <span>Points:</span>
                            <span>{localStorage.hasOwnProperty('learnENG') && JSON.parse(localStorage.getItem("learnENG"))[name]}</span>
                        </p> */}
                    </h1>
                </div>
           </section>
           <section>
                {Object.keys(words).map((item,i)=><div key={i} onClick={()=>changeCardPage(item)}>{item}</div>)}
                <form><button><span>←</span><span>→</span></button></form>
           </section>
       </header>
    )
}

export default Header;