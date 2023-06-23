import { useContext } from "react"
import {ListeDepenseContext} from "../../utils/context/ListeDepenseContext"
import AjoutDepense from "../AjoutDepense"
import Depense from "../Depense"
import Totaux from "../Totaux"

function ListeDepense () {

    const [state] = useContext(ListeDepenseContext)    

    return (
        <div>            
            <hr/>                       
            
            <div style={{display:"flex"}}>
                <div style={{minWidth:"500px"}}>
                    <h2>Liste : </h2>
                    <ul>
                        {
                            state.expenses.map(
                                (item, key) => <Depense key={key} value={item}/>
                            )    
                        }
                    </ul>
                </div>
                
                <div style={{borderLeft:"1px solid #fff"}}>
                    <h2>Ajouter une dépense : </h2>
                    <AjoutDepense /> 
                </div>
                
            </div>

            <hr/>

            <Totaux />
        </div>
    )
}

export default ListeDepense