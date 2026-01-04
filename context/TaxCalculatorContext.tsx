'use client'
import { createContext, ReactNode, useContext, useReducer } from 'react';

interface TaxContextValue {
    state: TaxState;
    dispatch: React.Dispatch<TaxAction>;
    actions: TaxActions;
}

export type IncomeType =
  | 'annual_salary'
  | 'freelance'
  | 'allowance'
  | 'dividend'
  | 'capital_gain'
  | 'others';


export  type DeductionType = 
  | 'annual_rent'


interface IncomeItem {
type: IncomeType;
amount: number;
}

interface DeductionItem {
    type: DeductionType;
    amount: number;
}

interface TaxState {
  income: IncomeItem[];
  deduction: DeductionItem[];
  totalIncome: number
  error: string | null;
}

type TaxAction =
    | { type: 'UPDATE_INCOME'; payload:  {
        incomeType: IncomeType;
        amount: number;
        }; }
    | { type: 'UPDATE_DEDUCTIONS'; payload:  {
        deductionType: DeductionType;
        amount: number;
        };}
    | { type: 'SET_ERROR'; payload: string | null };

interface TaxActions {
updateIncome: (incomeType: IncomeType, amount: number) => void;
updateDeduction: (amount: number, deductionType: DeductionType) => void
}

// Initial state
const initialState: TaxState = {
  income: [
    {type: "annual_salary", amount: 0},
    {type: "freelance", amount: 0},
    {type: "dividend", amount: 0},
    {type: "allowance", amount: 0},
    {type: "capital_gain", amount: 0},
    {type: "others", amount: 0},
  ],
  deduction: [
    {type: "annual_rent", amount: 0},
    ],
  totalIncome: 0,
  error: null,
};

interface TaxProviderProps {
  children: ReactNode;
}

// Reducer function
const taxReducer = (state : TaxState, action: TaxAction) => {
  switch (action.type) {
    case 'UPDATE_INCOME': {
        const newIncome = state.income.map((item) =>
          item.type === action.payload.incomeType 
            ? { ...item, amount: action.payload.amount }
            : item)
        
     
        const totalIncome = newIncome.reduce((sum, item) => sum + item.amount, 0 );
        console.log({newIncome})
    return {
        ...state,
        income: newIncome,
        totalIncome,
        error: null,

      };
    }
    case 'UPDATE_DEDUCTIONS' : {
        const newDeduction = state.deduction.map((item) => 
        item.type === action.payload.deductionType
         ? {...item, amount: action.payload.amount}
         : item)

         return {
            ...state,
            deduction: newDeduction,
            error: null
         }
    }
    default:
        return state;
  }
};


const TaxContext = createContext<TaxContextValue | undefined>(undefined);


export const TaxProvider = ({ children} : TaxProviderProps) => {
  const [state, dispatch] = useReducer(taxReducer, initialState);

  const actions: TaxActions = {
    updateIncome: (incomeType: IncomeType, amount: number) => {
      if (amount < 0) {
        dispatch({ type: 'SET_ERROR', payload: 'Income amount cannot be negative' });
        return;
      }
      dispatch({ type: 'UPDATE_INCOME', payload: { incomeType, amount }},)
    },

    updateDeduction: (deductionType: DeductionType, amount : number) => {
        dispatch({type: 'UPDATE_DEDUCTIONS', payload: {deductionType, amount}})
    }
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