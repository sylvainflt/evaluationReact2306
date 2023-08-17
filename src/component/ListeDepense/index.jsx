import { useContext } from "react"
import {ListeDepenseContext} from "../../utils/context/ListeDepenseContext"
import AjoutDepense from "../AjoutDepense"
import Depense from "../Depense"
import Totaux from "../Totaux"
import "./index.css"

function ListeDepense () {

    const [state] = useContext(ListeDepenseContext)    

    return (
        <div>            
            <hr/>                       
            
            <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"2rem"}}>
                <div /*style={{minWidth:"600px"}}*/>
                    
                    <h2>
                        {
                            state.expenses.length ? "Liste :" : "" 
                        }
                    </h2>

                    <ol>
                        {
                            state.expenses.map(
                                (item, key) => <Depense key={key} value={item}/>
                            )    
                        }
                    </ol>
                </div>
                
                <div /*style={{borderLeft:"1px solid #fff"}}*/>
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