import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAnnualSalaryAmount(income: IncomeItem[]): number {
  const annualSalary = income.find(
    (item) => item.type === 'annual_salary'
  );

  return annualSalary?.amount ?? 0;
}

export function formatInputIdToName(inputId: string): string {
  return inputId
    .replace(/[-_]/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export const formatCurrency = (amount: number) => {
  if (!amount) return 0
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: "NGN",
    currencyDisplay: "symbol",
  }).format(amount);
};
