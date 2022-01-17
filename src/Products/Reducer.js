export const reducer = (state, action) => {
    if(action.type === "REMOVE_ITEM") {
        return {
            ...state,
            item: state.item.filter((curElem) => {
                return curElem.id !== action.payload;
            }),
        }

    if(action.type === "GET_TOTAL"){
        let {totalItem} = state.item.reduce(
            (accum, curValue) => {
                return accum;
            },
            {
            totalItem: 0,
            }
        );
        return {...state, totalItem};
    }
    return state;
};