import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  invoice: false,
  checked: {},
};

// Create context
export const AppContext = createContext(initialState);

// Provider component
export const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setInvoice = bool => {
    dispatch({
      type: 'SET_INVOICE',
      payload: bool,
    });
  };

  const setChecked = data => {
    console.log('DATA: ', data);
    dispatch({
      type: 'SET_CHECKED',
      payload: data,
    });
  };

  return (
    <AppContext.Provider
      value={{
        invoice: state.invoice,
        checked: state.checked,
        setInvoice,
        setChecked,
      }}>
      {children}
    </AppContext.Provider>
  );
};
