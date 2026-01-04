'use client'

import PopoverMenu from "@/components/Popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useTax } from "@/context/TaxCalculatorContext";
import { getAnnualSalaryAmount } from "@/lib/utils";
import { Printer } from "lucide-react";
import { useState } from "react";
import CurrencyInput from "react-currency-input-field";

type Block = {
  id: number;
  name: string;
  amount: number;
};

const TaxCalculator = () => {
    const { state, actions } = useTax();
 
    const [selected, setSelected] = useState<"pit" | "paye">("pit");
    const [incomeBlocks, setIncomeBlocks] = useState<Block[]>([]);
    const [deductionBlocks, setDeductionBlocks] = useState<Block[]>([]);

     const addBlock = (incomeType: string, amount: number, blockType: string) => {
        if (blockType === "Income") {
            setIncomeBlocks((prev) => [
      ...prev,
      {
        id: prev.length,
        name: incomeType,
        amount,
      },
    ]);
        } else {
            setDeductionBlocks((prev) => [
                ...prev,
                {
                    id: prev.length,
        name: incomeType,
        amount,
                }
            ])
        }
    
  };

  return (
    <main className="w-[95%] mx-auto my-5">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="flex flex-col items-start w-full gap-5 lg:col-span-7 xl:col-span-8">
            <div className="w-full p-4 rounded border shadow-xs">
                <h3 className="text-lg font-bold">Calculate Your Tax</h3>
                <p>Enter your Income and deduction details below to get an accurate measurement of your tax liabillity</p>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 w-full p-4 border rounded shadow-xs">
                <p className="text-lg font-bold">Tax type</p>
                <div className="flex items-center max-sm:flex-col justify-between gap-4 w-full">
                    <Label htmlFor="pit" className="flex items-center justify-between p-4 border-2 w-full bg-white rounded has-aria-checked:border-blue-600 has-aria-checked:bg-blue-300/50">
                        <p>Individual</p>
                        <Checkbox id="pit" 
                        checked={selected === "pit"}
                        onCheckedChange={() => setSelected("pit")}
                        className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-700"/>
                    </Label>
                    <Label htmlFor="paye" className="flex items-center justify-between p-4 border-2 w-full bg-white rounded has-aria-checked:border-blue-600 has-aria-checked:bg-blue-300/50">
                        <p>Business</p>
                        <Checkbox id="paye" 
                        checked={selected === "paye"}
                        onCheckedChange={() => setSelected("paye")}
                        className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-700"/>
                    </Label>
                </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 w-full p-4 border rounded shadow-xs">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <p className="text-lg font-bold">Income Sources</p>
                        <span className="text-xs text-gray-500">Only fill the income that apply to you.</span>
                    </div>
                   <PopoverMenu label="income" addBlock={addBlock}/>
                </div>

                
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="w-full flex flex-col items-start gap-1">
                                <Label htmlFor="income" className="font-medium text-sm text-gray-500">Annual Salary</Label>
                                <div className="flex items-center gap-2 bg-white w-full rounded py-2 px-4 border">
                                    <span className="text-black/70 text-lg">₦</span>
                                    <CurrencyInput
                                    className="shadow-none border-0 text-base text-gray-700  border-l rounded-none w-full focus-within:outline-0 pl-2"
                                    id="annual_salary"
                                    name="Annual Gross Income"
                                    defaultValue="123"
                                    placeholder={String(getAnnualSalaryAmount(state.income))}
                                    value={getAnnualSalaryAmount(state.income)}
                                    decimalsLimit={2}
                                    onValueChange={(value, name, values) => console.log(value, name, values)}
                                    />
                                </div>
                        </div>
                            <div className="w-full flex flex-col items-start gap-1">
                                <Label htmlFor="income" className="font-medium text-sm text-gray-500">Allowances <span className="bg-gray-300 rounded-full w-4 h-4 text-center text-xs">?</span></Label>
                                <div className="flex items-center gap-2 bg-white w-full rounded py-2 px-4 border">
                                    <span className="text-black/70 text-lg">₦</span>
                                    <CurrencyInput
                                    className="shadow-none border-0 text-base text-gray-700  border-l rounded-none w-full focus-within:outline-0 pl-2"
                                    id="input-example"
                                    name="input-name"
                                    placeholder="Housing Allowance"
                                    decimalsLimit={2}
                                    onValueChange={(value, name, values) => console.log(value, name, values)}
                                    />
                                </div>
                            </div>
                            {incomeBlocks.map(({id, amount, name}) => (
                                <div key={id} className="w-full flex flex-col items-start gap-1">
                                <Label htmlFor="income" className="font-medium text-sm text-gray-500">{name}<span className="bg-gray-300 rounded-full w-4 h-4 text-center text-xs">?</span></Label>
                                <div className="flex items-center gap-2 bg-white w-full rounded py-2 px-4 border">
                                    <span className="text-black/70 text-lg">₦</span>
                                    <CurrencyInput
                                    className="shadow-none border-0 text-base text-gray-700  border-l rounded-none w-full focus-within:outline-0 pl-2"
                                    id="input-example"
                                    name="input-name"
                                    value={amount}
                                    placeholder="Housing Allowance"
                                    decimalsLimit={2}
                                    onValueChange={(value, name, values) => console.log(value, name, values)}
                                    />
                                </div>
                            </div>
                            ))}
                    </div>
                
            </div>

            <div className="flex flex-col  gap-4 w-full p-4 border shadow-xs rounded">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <p className="text-lg font-bold">Deductables</p>
                        <span className="text-xs text-gray-500">Only fill the deductables that apply to you.</span>
                    </div>
                    <PopoverMenu label="deductions" addBlock = {addBlock}/>
                </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="w-full flex flex-col items-start gap-1">
                            <Label htmlFor="income" className="font-medium text-sm text-gray-500">Rent Relief</Label>
                                <div className="flex items-center gap-2 bg-white w-full rounded py-2 px-4 border">
                                    <span className="text-black/70 text-lg">₦</span>
                                    <CurrencyInput
                                    className="shadow-none border-0 text-base text-gray-700  border-l rounded-none w-full focus-within:outline-0 pl-2"
                                    id="input-example"
                                    name="input-name"
                                    placeholder="Rent Relief"
                                    decimalsLimit={2}
                                    onValueChange={(value, name, values) => console.log(value, name, values)}
                                    />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col items-start gap-1">
                                    <Label htmlFor="income" className="font-medium text-sm text-gray-500">NHF Contributions<span className="bg-gray-300 rounded-full w-4 h-4 text-center text-xs">?</span></Label>
                                    <div className="flex items-center gap-2 bg-white w-full rounded py-2 px-4 border">
                                        <span className="text-black/70 text-lg">₦</span>
                                        <CurrencyInput
                                        className="shadow-none border-0 text-base text-gray-700  border-l rounded-none w-full focus-within:outline-0 pl-2"
                                        id="input-example"
                                        name="input-name"
                                        placeholder="NHF Contributions"
                                        decimalsLimit={2}
                                        onValueChange={(value, name, values) => console.log(value, name, values)}
                                        />
                                    </div>
                                </div>
                                 {deductionBlocks.map(({id, amount, name}) => (
                                <div key={id} className="w-full flex flex-col items-start gap-1">
                                <Label htmlFor="income" className="font-medium text-sm text-gray-500">{name}<span className="bg-gray-300 rounded-full w-4 h-4 text-center text-xs">?</span></Label>
                                <div className="flex items-center gap-2 bg-white w-full rounded py-2 px-4 border">
                                    <span className="text-black/70 text-lg">₦</span>
                                    <CurrencyInput
                                    className="shadow-none border-0 text-base text-gray-700  border-l rounded-none w-full focus-within:outline-0 pl-2"
                                    id="input-example"
                                    name="input-name"
                                    value={amount}
                                    placeholder="Housing Allowance"
                                    decimalsLimit={2}
                                    onValueChange={(value, name, values) => console.log(value, name, values)}
                                    />
                                </div>
                            </div>
                            ))}
                    </div>
               
            </div>
        </div>
        <aside className="flex flex-col gap-4 lg:col-span-5 xl:col-span-4">
            <div className="rounded shadow border">
                <div className="bg-blue-100/90 flex flex-col gap-2 py-5 px-2">
                    <p className="font-bold">ESTIMATED TAX DUE</p>
                    <p className="text-blue-600 font-bold text-3xl">₦100,000<span className="text-gray-500 font-medium text-base">.00</span></p>
                    <p className="text-black/70 text-sm">Based on 2025 Tax Law</p>
                </div>

                <div className="flex flex-col items-stretch gap-4 py-5 px-2">
                    <div className="flex items-center justify-between pb-2 border-b-2 border-gray-400/50">
                        <p>Effective Tax Rate</p>
                        <p className="text-lg font-bold">18.4%</p>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b-2 border-gray-400/50">
                        <p>Effective Tax Rate</p>
                        <p className="text-lg font-bold">18.4%</p>
                    </div>
                    <div className="flex flex-col gap-2 pb-3 border-b-2 border-gray-400/50">
                        <div className="flex items-center justify-between ">
                            <p>Estimated Income</p>
                            <p className="text-lg font-bold text-green-400">₦5,000,000</p>
                        </div>
                    
                        <div>
                            <div className="flex justify-between text-xs mb-2">
                                <span>Taxes</span>
                                <span>Income</span>
                            </div>
                            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex">
                                <div className="h-full bg-blue-500 w-1/4"></div>
                                <div className="h-full bg-green-500 w-3/4"></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="px-2 py-5 bg-gray-100 w-full flex gap-4 shadow">
                    <Button className="flex-3 bg-blue-600 hover:bg-blue-800 px-8 py-5 rounded cursor-pointer">Recalculate</Button>
                    <Button className="flex-1 bg-white hover:bg-white/90 py-5 rounded cursor-pointer"><Printer className="text-black size-6"/></Button>
                </div>
            </div>

            <div className="rounded shadow border py-5 px-4">
                <p className="font-bold">Breakdown</p>

                <div className="flex flex-col items-stretch gap-4">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-black/60">Total Income:</p>
                        <span className="text-sm font-medium">$100,000</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-medium">Deductions</p>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-black/60">House Allowance</p>
                                <p className="text-sm font-semibold">$100,000</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-black/60">House Allowance</p>
                                <p className="text-sm font-semibold">$100,000</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-black/60">House Allowance</p>
                                <p className="text-sm font-semibold">$100,000</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p>Total Deductions</p>
                            <p className="font-semibold">$100,000</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p>Total Taxeable Income:</p>
                        <span>$100,000</span>
                    </div>

                    
                </div>

                    
                </div>
            </aside>
        </section>
    </main>
  )
}
export default TaxCalculator