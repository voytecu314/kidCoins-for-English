import { useEffect, useState, useContext } from "react";
import { ObjContext } from "../contexts/ObjectsContext";

const Header = () => {

    const {words, setPage, rand8} = useContext(ObjContext);

    const [name, setName] = useState(null);

    useEffect(()=>{
        !localStorage.hasOwnProperty('learnENG') && localStorage.setItem('learnENG', JSON.stringify({Emi: 0,Lili:0}))
    },[]);

    const chooseName = (e) => {
        setName(e.target.innerText)
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
                        <p><span>Points:</span><span>{localStorage.hasOwnProperty('learnENG') && JSON.parse(localStorage.getItem("learnENG"))[name]}</span></p>
                    </h1>
                </div>
           </section>
           <section>
                {Object.keys(words).map((item,i)=><div key={i} onClick={()=>{setPage(item); 
                                                                        rand8.current=Math.floor(Math.random()*8)}}>{item}</div>)}
                <form><button><span>←</span><span>→</span></button></form>
           </section>
       </header>
    )
}

export default Header;