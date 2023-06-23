import { useContext } from "react"
import {ListeDepenseContext} from "../../utils/context/ListeDepenseContext"

function Depense ({value}) {

    const [state, dispatch] = useContext(ListeDepenseContext)
    const {titre, montant, categorie} = value
   
    return (
        <li>
            <span>{titre}</span>
            <span>{montant}</span>
            <span>{categorie}</span>
            
            <button onClick={() => dispatch({type: 'removeItem', payload: value})}>X</button>
        </li>
    )
}

export default Depense