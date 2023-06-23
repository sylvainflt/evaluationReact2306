import { useContext } from "react"
import {ListeDepenseContext} from "../../utils/context/ListeDepenseContext"
import "./index.css"

function Totaux () {

    const [state] = useContext(ListeDepenseContext)
    const categoryExpenses = Object.keys(state.categoryExpenses)

    return (
        <div className="totaux">
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
    )

}

export default Totaux