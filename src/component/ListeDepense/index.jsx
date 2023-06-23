import { useContext } from "react"
import {ListeDepenseContext} from "../../utils/context/ListeDepenseContext"


function ListeDepense () {

    const [state] = useContext(ListeDepenseContext)
   
    return (
        <div>            
            
            <AjoutDepense />            

            <ul>
                {
                    state.listeDepense.map(
                        (item, key) => <Depense key={key} value={item}/>
                    )    
                }
            </ul>
        </div>
    )
}

export default ListeDepense