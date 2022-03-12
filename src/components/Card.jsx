import { useState, useEffect, useContext } from "react";
import { ObjContext } from "../contexts/ObjectsContext";
import recogniseSpeech from "../helpers/speechRecognition";

const Card = () => {

    const {words, page, rand8ChangedFlag, rand8} = useContext(ObjContext);
    const [img, setImg] = useState(words[page][0]);
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(()=>{
        
        fetch(`https://api.unsplash.com/photos/random/?client_id=${API_KEY}&query=${words[page][rand8.current]}`)
        .then(res=>res.json())
        .then(data=>setImg(data.urls.small))
        .catch(error=>console.log('catched ERROR: ',error)) 
        console.log('fetch');
        
    },[page, rand8ChangedFlag]);



    return (
       <main> {(<>
                <p>{words[page][rand8.current].toUpperCase()}</p>
                <img src={img} alt={words[page][rand8.current]} onClick={()=>recogniseSpeech(words[page][rand8.current])}/>
                </>)}
        </main>
        )
}

export default Card;