export default (state, action) => {
  switch (action.type) {
    case 'SET_INVOICE':
      return {
        ...state,
        invoice: action.payload,
      };

    case 'SET_CHECKED':
      return {
        ...state,
        checked: action.payload,
      };
    default:
      return state;
  }
};
