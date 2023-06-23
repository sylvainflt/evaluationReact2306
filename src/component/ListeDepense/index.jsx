import { useContext } from "react"
import {ListeDepenseContext} from "../../utils/context/ListeDepenseContext"
import AjoutDepense from "../AjoutDepense"
import Depense from "../Depense"

function ListeDepense () {

    const [state] = useContext(ListeDepenseContext)
    const categoryExpenses = Object.keys(state.categoryExpenses)

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
            <div className="depense">
                <h2>Totaux : </h2>
                <span>{state.totalExpenses}€</span>
                
                <div>

                    {
                        
                        categoryExpenses.map(
                            (item, key) => 
                                <div key={key} className="sousTotal">
                                    <span>{item}</span>
                                    <span>{state.categoryExpenses[item]}€</span>
                                </div>
                        )
                                                
                    }
                    
                </div>                                                                
            </div>
        </div>
    )
}

export default ListeDepense