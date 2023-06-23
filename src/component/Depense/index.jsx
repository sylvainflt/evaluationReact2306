import { useContext } from "react"
import {ListeDepenseContext} from "../../utils/context/ListeDepenseContext"

function Depense ({value}) {

    const [state, dispatch] = useContext(ListeDepenseContext)
    const {titre, montant, categorie} = value
   
    return (
        <li>
            <div className="depense">
                <span>{titre}</span>
                <span>{montant}€</span>
                <span>{categorie}</span>

                <button className="listButton" onClick={() => dispatch({type: 'removeItem', payload: value})}>X</button>
            </div>
            
        </li>
    )
}

export default Depense