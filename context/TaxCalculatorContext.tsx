'use client'
import { createContext, ReactNode, useContext, useReducer } from 'react';

interface TaxContextValue {
    state: TaxState;
    dispatch: React.Dispatch<TaxAction>;
    actions: TaxActions;
}

type IncomeType =
  | 'annual_salary'
  | 'business'
  | 'freelance'
  | 'rent'
  | 'interest'
  | 'dividend'
  | 'capital_gain'
  | 'others';

interface IncomeItem {
type: IncomeType;
amount: number;
}

interface TaxState {
  income: IncomeItem[];
  error: string | null;
}

type TaxAction =
  | { type: 'ADD_INCOME'; payload: IncomeItem }
| { type: 'UPDATE_INCOME'; payload:  {
        incomeType: IncomeType;
        amount: number;
        }; }
  | { type: 'REMOVE_INCOME'; payload: string }
| { type: 'SET_ERROR'; payload: string | null };

interface TaxActions {
addIncome: (income: IncomeItem) => void;
updateIncome: (incomeType: IncomeType, amount: number) => void;
removeIncome: (id: string) => void;

}

// Initial state
const initialState: TaxState = {
  income: [
    {type: "annual_salary", amount: 0},
    {type: "freelance", amount: 0},
    {type: "dividend", amount: 0},
    {type: "capital_gain", amount: 0},
    {type: "others", amount: 0},
  ],
  error: null,
};

interface TaxProviderProps {
  children: ReactNode;
}

// Reducer function
const taxReducer = (state : TaxState, action: TaxAction) => {
  switch (action.type) {
    case 'ADD_INCOME':
        return {
        ...state,
        income: [...state.income, action.payload],
        error: null
        };
    case 'UPDATE_INCOME': {
    return {
        ...state,
        income: state.income.map((item) =>
          item.type === action.payload.incomeType
            ? { ...item, amount: action.payload.amount }
            : item
        ),
        error: null,
      };
    }
    default:
        return state;
  }
};

const TaxContext = createContext<TaxContextValue | undefined>(undefined);


export const TaxProvider = ({ children} : TaxProviderProps) => {
  const [state, dispatch] = useReducer(taxReducer, initialState);

  const actions: TaxActions = {
    addIncome: (income) => {
      if (income.amount < 0) {
        dispatch({ type: 'SET_ERROR', payload: 'Income amount cannot be negative' });
        return;
      }
      dispatch({ type: 'ADD_INCOME', payload: income });
    },

    updateIncome: (incomeType: IncomeType, amount: number) => {
      if (amount < 0) {
        dispatch({ type: 'SET_ERROR', payload: 'Income amount cannot be negative' });
        return;
      }
      dispatch({ type: 'UPDATE_INCOME', payload: { incomeType, amount } },)
      console.log({amount, incomeType})
    },

    removeIncome: (id) => {
      dispatch({ type: 'REMOVE_INCOME', payload: id });
    },
  };

  return (
    <TaxContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </TaxContext.Provider>
  );
}

export const useTax = (): TaxContextValue => {
  const context = useContext(TaxContext);
  
  if (context === undefined) {
    throw new Error('useTax must be used within a TaxProvider');
  }
  
  return context;
};

export type { TaxState, TaxAction };