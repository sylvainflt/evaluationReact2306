export const initialState = {
    expenses: [],
    totalExpenses: 0,
    categoryExpenses: {
        Alimentation: 0,
        Logement: 0,
        Transport: 0,
        Divertissement: 0,
        Santé: 0,
        Éducation: 0,
        Autres: 0
    },
    expense: {
        titre: "",
        montant: 0,
        categorie: "Alimentation"
    }
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
            categoryExpenses: updatedCategoryExpenses
            };

        case 'removeItem':
            const newItems = state.expenses.filter((item) => item !== action.payload)
            return {
                ...state,
                expenses: newItems
            }

        default:
            return state;
    }
  };
  
  export default expenseReducer;