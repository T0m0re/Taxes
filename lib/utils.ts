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