export const initialState = {
    expenses: [],
    totalExpenses: 0,
    categoryExpenses: {
      food: 0,
      housing: 0,
      transportation: 0,
      entertainment: 0,
      health: 0,
      education: 0,
      others: 0
    },
    expense: {
        titre: "",
        montant: 0,
        categorie: "food"
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

      default:
        return state;
    }
  };
  
  export default expenseReducer;