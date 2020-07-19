interface cartStateProps {
  list: any[];
}

interface cartStateAction {
  type: 'ADD_CART' | 'DEl_CART';
  payload?: any;
}

const cartState: cartStateProps = {
  list: [],
};

function cartReducer(state: cartStateProps, action: cartStateAction) {
  switch (action.type) {
    case 'ADD_CART':
      state.list.push(action.payload);
      return { ...state };
    case 'DEl_CART':
      const delIndex = state.list.findIndex(i => {
        return i.timeId === action.payload.timeId;
      });

      if (delIndex > -1) {
        state.list.splice(delIndex, 1);
      }
      return { ...state };
    default:
      return { ...state };
  }
}

export { cartState, cartReducer };
