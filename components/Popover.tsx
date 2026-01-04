import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button"
import CurrencyInput from "react-currency-input-field"
import { useState } from "react"


interface Popover {
label : string
addBlock: any
}


const PopoverMenu = ({ label, addBlock } : Popover) => {

    const selectlabel = label === "income" ? "Income Source" : "Deductions";
    const selectItems = label === "income" ? [
        {value: "freelance", name: "Freelance"},
        {value: "interest", name: "Interest"},
        {value: "dividened", name: "Dividend"},
        {value: "capital_gain", name: "Capital Gain"},
        {value: "others", name: "Others"},
        ] : [
        {value: "tit", name: "Titties"}];
    const blockType = label === "income" ? "Income" : "Deduction"

    const [incomeType, setIncomeType] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [amount, setAmount] = useState<number>();
    const [open, setOpen] = useState(false)

    const handleSubmit = () => {
        if (!incomeType) return;
        addBlock(incomeType, amount, blockType)
        setOpen(false)
    };
  return (
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button variant="link" className="text-blue-500 hover:text-blue-700/85 text-sm font-medium cursor-pointer">+Add Other {label === "income" ? "Income Source" : "Deductables"}</Button>
        </PopoverTrigger>
        <PopoverContent className="border shadow rounded p-4 flex flex-col gap-3">
                <Select onValueChange={setIncomeType} value={incomeType}>
                    <SelectTrigger className="w-full rounded">
                        <SelectValue placeholder={label === "income" ? "Select an Income" : "Choose Deductables"} />
                    </SelectTrigger>
                    <SelectContent position="popper">
                        <SelectGroup>
                            <SelectLabel>{selectlabel}</SelectLabel>
                            {selectItems.map(({value, name}) => (
                                <SelectItem key={value} value={value}>{name}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <CurrencyInput
                    className="shadow border text-base text-gray-700 rounded-none w-full focus-within:outline-0 p-2"
                    id="annual_salary"
                    name={incomeType}
                    placeholder="Amount"
                    decimalsLimit={2}
                    onValueChange={(value) => setAmount(Number(value))}
                />
            <Button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 transition-colors rounded">Add</Button>
        </PopoverContent>
    </Popover>
  )
}
export default PopoverMenu