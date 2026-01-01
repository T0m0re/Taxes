'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Printer } from "lucide-react";
import { useState } from "react";

const TaxCalculator = () => {
    const [selected, setSelected] = useState<"pit" | "paye" | null>(null);

  return (
    <main className="max-w-[90%] mx-auto my-5">
        <section className="grid lg:grid-cols-12 gap-6">
        <div className="flex flex-col items-start justify-between w-full gap-5 lg:col-span-7 xl:col-span-8">
            <div className="w-full py-4 px-2 rounded bg-blue-100">
                <h3 className="text-lg font-bold">Calculate Your Tax</h3>
                <p>Enter your Income and deduction details below to get an accurate measurement of your tax liabillity</p>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 w-full py-4 px-2 bg-blue-100">
                <p className="text-lg font-bold">Tax type</p>
                <div className="flex items-center max-sm:flex-col justify-between gap-4 w-full">
                    <Label htmlFor="pit" className="flex items-center justify-between p-4 border-2 w-full bg-white rounded has-aria-checked:border-blue-600 has-aria-checked:bg-blue-300/50">
                        <p>PIT</p>
                        <Checkbox id="pit" 
                        checked={selected === "pit"}
                        onCheckedChange={() => setSelected("pit")}
                        className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-700"/>
                    </Label>
                    <Label htmlFor="paye" className="flex items-center justify-between p-4 border-2 w-full bg-white rounded has-aria-checked:border-blue-600 has-aria-checked:bg-blue-300/50">
                        <p>PAYE</p>
                        <Checkbox id="paye" 
                        checked={selected === "paye"}
                        onCheckedChange={() => setSelected("paye")}
                        className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-700"/>
                    </Label>
                </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 w-full py-4 px-2 bg-blue-100">
                <p className="text-lg font-bold">Income</p>
                <div className="w-full flex flex-col items-start gap-2">
                    <Label htmlFor="income" className="font-normal text-base">Gross Income</Label>
                    <div className="flex items-center gap-2 bg-white w-full rounded py-2 px-4">
                        <span className="text-black/70 text-lg">₦</span>
                        <Input type="text" placeholder="Gross Income" className="rounded-none shadow-none outline-0 border-0 border-l"/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 w-full py-4 px-2 bg-blue-100">
                <p className="text-lg font-bold">Deductables</p>

            </div>
        </div>
        <aside className="flex flex-col gap-4 lg:col-span-5 xl:col-span-4">
            <div className="rounded shadow">
                <div className="bg-blue-100 flex flex-col gap-2 py-5 px-2">
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

            <div className="rounded shadow py-5 px-4">
                <p className="font-bold">Breakdown</p>

                <div className="flex flex-col items-stretch gap-4">
                    <div className="flex items-center justify-between">
                        <p>Total Income:</p>
                        <span>$100,000</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-medium">Deductions</p>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                                <p>House Allowance</p>
                                <p>$100,000</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>House Allowance</p>
                                <p>$100,000</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>House Allowance</p>
                                <p>$100,000</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p>Total</p>
                            <p>$100,000</p>
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