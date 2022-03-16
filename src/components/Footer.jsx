import { useContext, useEffect } from 'react';
import { ObjContext } from '../contexts/ObjectsContext';


const Footer = () => {

    const { highScores, name } = useContext(ObjContext);


    return (
       <footer>SCORE: {name?highScores:'CHOOSE PLAYER'}</footer>
    )
}

export default Footer;