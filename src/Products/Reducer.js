export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
      return {
        ...state,
        item: state.item.filter((curElem) => {
          return curElem.id !== action.payload;
        }),
      };
    }
  
    
    if (action.type === "GET_TOTAL") {
      let { totalItem, totalAmount } = state.item.reduce(
        (accum, curVal) => {
          let { price, quantity } = curVal;
  
          let updatedTotalAmount = price * quantity;
          accum.totalAmount += updatedTotalAmount;
  
          accum.totalItem += quantity;
          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItem, totalAmount };
    }
    return state;
  };