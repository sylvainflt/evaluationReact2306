import { useContext } from "react"
import {ListeDepenseContext} from "../../utils/context/ListeDepenseContext"
import AjoutDepense from "../AjoutDepense"
import Depense from "../Depense"

function ListeDepense () {

    const [state] = useContext(ListeDepenseContext)
   
    return (
        <div>            
            
            <h2>Ajouter une dépense : </h2>
            <AjoutDepense />            

            <h2>Liste : </h2>
            <ul>
                {
                    state.expenses.map(
                        (item, key) => <Depense key={key} value={item}/>
                    )    
                }
            </ul>
        </div>
    )
}

export default ListeDepense