import {createContext, useReducer} from "react";
import reducer, {initialState} from "../../reducer/index.jsx";


export const ListeDepenseContext = createContext()

const ListeDepenseContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ListeDepenseContext.Provider value={[state, dispatch]}>
            {children}
        </ListeDepenseContext.Provider>
    )
}

export default ListeDepenseContextProvider