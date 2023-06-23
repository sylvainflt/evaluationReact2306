import { useContext } from "react"
import {ListeDepenseContext} from "../../utils/context/ListeDepenseContext"

function AjoutDepense () {

    const [state, dispatch] = useContext(ListeDepenseContext)

    const {titre, montant, categorie} = state.expense

    const handleChangeTitre = (event) => {
        const {value} = event.target
        dispatch({type: 'changeValueTitre', payload: value})
    }
    const handleChangeMontant = (event) => {
        const {value} = event.target
        dispatch({type: 'changeValueMontant', payload: value})
    }
    const handleChangeCategorie = (event) => {
        const {value} = event.target
        dispatch({type: 'changeValueCategorie', payload: value})
    }


    return (
        <>
            <input value={titre} onChange={handleChangeTitre} />

            <input value={montant} onChange={handleChangeMontant} />

            <select value={categorie} onChange={handleChangeCategorie}>
                <option value="Alimentation">Alimentation</option>
                <option value="Logement">Logement</option>
                <option value="Transport">Transport</option>
                <option value="Divertissement">Divertissement</option>
                <option value="Santé">Santé</option>
                <option value="Education">Education</option>
                <option value="Autres">Autres</option>
            </select> 
         
            <button onClick={() => dispatch({type: 'ADD_EXPENSE'})}>ajouter</button>
          
        </>
    )
}

export default AjoutDepense