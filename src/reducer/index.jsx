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

        case 'UPDATE_EXPENSE':
            const { index, newTitle, newCategory, newAmount } = action.payload;
            const updatedExpenses = [...state.expenses];
            if (index >= 0 && index < updatedExpenses.length) {
                updatedExpenses[index] = {
                ...updatedExpenses[index],
                title: newTitle,
                category: newCategory,
                amount: newAmount
                }}
                return     

        case 'ADD_EXPENSE':
            const { title, category, amount } = action.payload;
            const newExpense = {
            title,
            category,
            amount
            };
            const updatedExpenses2 = [...state.expenses, newExpense];
            const updatedTotalExpenses = state.totalExpenses + parseFloat(amount);
            const updatedCategoryExpenses = { ...state.categoryExpenses };
            updatedCategoryExpenses[category] += parseFloat(amount);
    
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