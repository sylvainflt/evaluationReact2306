import { useContext } from "react"
import {ListeDepenseContext} from "../../utils/context/ListeDepenseContext"
import "./index.css"

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
        <div style={{marginTop:"2rem"}}>
            <div className="ligneAjout">
                <span>Titre</span>
                <input value={titre} onChange={handleChangeTitre} />
            </div>
                
            <div className="ligneAjout" style={{width:"107%"}}>
                <span>Montant</span>
                <input value={montant} onChange={handleChangeMontant} />€
            </div>
                
            <div className="ligneAjout">
                <span>Catégorie</span>
                <select value={categorie} onChange={handleChangeCategorie}>
                    <option value="Alimentation">Alimentation</option>
                    <option value="Logement">Logement</option>
                    <option value="Transport">Transport</option>
                    <option value="Divertissement">Divertissement</option>
                    <option value="Santé">Santé</option>
                    <option value="Education">Education</option>
                    <option value="Autres">Autres</option>
                </select>
            </div>
                
            
            <button className="buttons" onClick={() => dispatch({type: 'ADD_EXPENSE', payload: state.expense})}>ajouter</button>
            
        </div>
    )
}

export default AjoutDepense