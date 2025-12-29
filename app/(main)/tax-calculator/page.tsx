'use client'

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { useState } from "react";

const TaxCalculator = () => {
    const [selected, setSelected] = useState<"pit" | "paye" | null>(null);

  return (
    <main className="max-w-[90%] mx-auto my-5">
        <section className="grid">
        <div className="flex flex-col items-start justify-between w-full gap-5">
            <div className="w-full py-4 px-2 bg-accent rounded">
                <h3 className="text-lg font-bold">Calculate Your Tax</h3>
                <p>Enter your Income and deduction details below to get an accurate measurement of your tax liabillity</p>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 w-full bg-accent py-4 px-2">
                <p className="text-lg font-bold">Tax type</p>
                <div className="flex items-center max-sm:flex-col justify-between gap-4 w-full">
                    <Label htmlFor="pit" className="flex items-center justify-between p-4 border w-full bg-white rounded has-aria-checked:border-blue-600 has-aria-checked:bg-blue-300/50">
                        <p>PIT</p>
                        <Checkbox id="pit" 
                        checked={selected === "pit"}
                        onCheckedChange={() => setSelected("pit")}
                        className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-700"/>
                    </Label>
                    <Label htmlFor="paye" className="flex items-center justify-between p-4 border w-full bg-white rounded has-aria-checked:border-blue-600 has-aria-checked:bg-blue-300/50">
                        <p>PAYE</p>
                        <Checkbox id="paye" 
                        checked={selected === "paye"}
                        onCheckedChange={() => setSelected("paye")}
                        className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-700"/>
                    </Label>
                </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 w-full bg-accent py-4 px-2">
                <p className="text-lg font-bold">Income</p>
                <div className="w-full flex flex-col items-start gap-2">
                    <Label htmlFor="income" className="font-normal text-base">Gross Income</Label>
                    <div className="flex items-center gap-2 bg-white w-full rounded py-2 px-4">
                        <span className="text-black/70 text-lg">₦</span>
                        <Input type="text" placeholder="Gross Income" className="rounded-none shadow-none outline-0 border-0 border-l"/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 w-full bg-accent py-4 px-2">
                <p className="text-lg font-bold">Deductables</p>
                
            </div>
        </div>
        <aside></aside>
        </section>
    </main>
  )
}
export default TaxCalculator