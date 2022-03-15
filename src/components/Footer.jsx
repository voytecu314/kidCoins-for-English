import { useContext } from 'react';
import { ObjContext } from '../contexts/ObjectsContext';


const Footer = () => {

    const { highScores, name } = useContext(ObjContext);

    return (
       <footer>SCORE: {name?highScores['current'][name]:'CHOOSE PLAYER'}</footer>
    )
}

export default Footer;