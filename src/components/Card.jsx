import { useState, useEffect, useContext } from "react";
import { ObjContext } from "../contexts/ObjectsContext";
import recogniseSpeech from "../helpers/speechRecognition";

const Card = () => {

    const {words, page} = useContext(ObjContext);
    console.log(words);
    console.log(page);
    const [img, setImg] = useState(words[page][0]);
    const [rand8, setRand8] = useState(Math.floor(Math.random()*8));

    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(()=>{
        
        fetch(`https://api.unsplash.com/photos/random/?client_id=${API_KEY}&query=${words[page][rand8]}`)
        .then(res=>res.json())
        .then(data=>setImg(data.urls.small)) 
        
        
    },[page]);



    return (
       <main> {(<>
                <p>{words[page][rand8].toUpperCase()}</p>
                <img src={img} alt={words[page][rand8]} onClick={()=>recogniseSpeech(words[page][rand8])}/>
                </>)}
        </main>
        )
}

export default Card;