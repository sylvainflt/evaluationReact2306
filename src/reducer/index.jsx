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
      case 'ADD_EXPENSE':
        const { title, category, amount } = action.payload;
        const newExpense = {
          title,
          category,
          amount
        };
        const updatedExpenses = [...state.expenses, newExpense];
        const updatedTotalExpenses = state.totalExpenses + parseFloat(amount);
        const updatedCategoryExpenses = { ...state.categoryExpenses };
        updatedCategoryExpenses[category] += parseFloat(amount);
  
        return {
          ...state,
          expenses: updatedExpenses,
          totalExpenses: updatedTotalExpenses,
          categoryExpenses: updatedCategoryExpenses
        };
      default:
        return state;
    }
  };
  
  export default expenseReducer;