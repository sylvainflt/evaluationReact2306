import { useContext } from "react"
import {ListeDepenseContext} from "../../utils/context/ListeDepenseContext"
import AjoutDepense from "../AjoutDepense"

function ListeDepense () {

    const [state] = useContext(ListeDepenseContext)
   
    return (
        <div>            
            
            <AjoutDepense />            

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