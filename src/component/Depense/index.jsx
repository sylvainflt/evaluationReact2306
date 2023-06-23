import { useContext } from "react"
import {ListeDepenseContext} from "../../utils/context/ListeDepenseContext"
import './index.css'

function Depense ({value}) {

    const [state, dispatch] = useContext(ListeDepenseContext)
    const {titre, montant, categorie} = value
   
    return (
        <li>
            <div className="depense">
                <span style={{width:"30%", textAlign:"left"}}>{titre}</span>
                <span>{montant}€</span>
                <span className="depense-categorie">{categorie}</span>

                <button className="listButton" onClick={() => dispatch({type: 'removeItem', payload: value})}>X</button>
            </div>
            
        </li>
    )
}

export default Depense