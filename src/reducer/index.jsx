const initExpense = {
    titre: "",
    montant: 0,
    categorie: "Alimentation"
}

export const initialState = {
    expenses: [],
    totalExpenses: 0,
    categoryExpenses: {
        Alimentation: 0,
        Logement: 0,
        Transport: 0,
        Divertissement: 0,
        Santé: 0,
        Education: 0,
        Autres: 0
    },
    expense: initExpense
  };
  
  const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
      
       case 'changeValueTitre' :  

            const expWithTitle = {...state.expense}
            expWithTitle.titre = action.payload
            return {
                ...state,
                expense: expWithTitle
            }
            
        case 'changeValueMontant' :
            const expWithExpense = {...state.expense}
            expWithExpense.montant = action.payload
            return {
                ...state,
                expense: expWithExpense
            }

        case 'changeValueCategorie' :
            const expWithCategory = {...state.expense}
            expWithCategory.categorie = action.payload
            return {
                ...state,
                expense: expWithCategory
            }         

        case 'ADD_EXPENSE':
            const { titre, categorie, montant } = action.payload;
            const newExpense = {
                titre,
                categorie,
                montant
            };
            const updatedExpenses2 = [...state.expenses, newExpense];
            const updatedTotalExpenses = state.totalExpenses + parseFloat(montant);
            const updatedCategoryExpenses = { ...state.categoryExpenses };
            updatedCategoryExpenses[categorie] += parseFloat(montant);
    
            return {
            ...state,
            expenses: updatedExpenses2,
            totalExpenses: updatedTotalExpenses,
            categoryExpenses: updatedCategoryExpenses,
            expense: initExpense
            };

        case 'removeItem':
            const categorie2 = action.payload.categorie
            const montant2 = action.payload.montant
            const newItems = state.expenses.filter((item) => item !== action.payload)
            const updatedTotalExpenses2 = state.totalExpenses - parseFloat(montant2);
            const updatedCategoryExpenses2 = { ...state.categoryExpenses };
            updatedCategoryExpenses2[categorie2] -= parseFloat(montant2);
            return {
                ...state,
                expenses: newItems,
                totalExpenses: updatedTotalExpenses2,
                categoryExpenses: updatedCategoryExpenses2
            }

        default:
            return state;
    }
  };
  
  export default expenseReducer;