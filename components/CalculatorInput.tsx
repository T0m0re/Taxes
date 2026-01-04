import CurrencyInput from "react-currency-input-field"
import { Label } from "./ui/label"


const CalculatorInput = ({name, id, amount}) => {
    
  return (
    <div key={id} className="w-full flex flex-col items-start gap-1">
        <Label htmlFor="income" className="font-medium text-sm text-gray-500">{name}<span className="bg-gray-300 rounded-full w-4 h-4 text-center text-xs">?</span></Label>
            <div className="flex items-center gap-2 bg-white w-full rounded py-2 px-4 border">
                <span className="text-black/70 text-lg">₦</span>
                <CurrencyInput
                    className="shadow-none border-0 text-base text-gray-700  border-l rounded-none w-full focus-within:outline-0 pl-2"
                    id="input-example"
                    name="input-name"
                    placeholder={amount}
                    decimalsLimit={2}
                    onValueChange={(value) => console.log(value)}
                />
            </div>
    </div>
  )
}
export default CalculatorInput