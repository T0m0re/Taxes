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


interface Popover {
label : string
}


const PopoverMenu = ({ label } : Popover) => {
    const selectlabel = label === "income" ? "Income Source" : "Deductions"
    const selectItems = label === "income" ? [
        {value: "freelance", name: "Freelance"},
        {value: "interest", name: "Interest"},
        {value: "dividened", name: "Dividend"},
        {value: "capital_gain", name: "Capital Gain"},
        {value: "others", name: "Others"},
    ] : [
        {value: "tit", name: "Titties"}
    ]
  return (
     <Popover>
        <PopoverTrigger asChild>
            <Button variant="link" className="text-blue-500 hover:text-blue-700/85 text-sm font-medium cursor-pointer">+Add Other {label === "income" ? "Income Source" : "Deductables"}</Button>
            </PopoverTrigger>
            <PopoverContent className="border shadow rounded p-4 flex flex-col gap-3">
                <Select >
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
                                    name="Annual Gross Income"
                                    defaultValue="123"
                                    placeholder="Amount"
                                    decimalsLimit={2}
                                    onValueChange={(value, name, values) => console.log(value, name, values)}
                            />

                            <Button className="bg-blue-500 hover:bg-blue-700 transition-colors rounded">Add</Button>
                        </PopoverContent>
                    </Popover>
  )
}
export default PopoverMenu