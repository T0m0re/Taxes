import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const TaxCalculator = () => {
  return (
    <main className="max-w-[90%] mx-auto ">
        <section className="grid">
        <div className="flex flex-col items-start justify-between w-full gap-5">
            <div className="w-full py-4 px-2 bg-accent rounded">
                <h3 className="text-lg font-bold">Calculate Your Tax</h3>
                <p>Enter your Income and deduction details below to get an accurate measurement of your tax liabillity</p>
            </div>

            <div className="flex flex-col items-start justify-between w-full bg-accent py-4 px-2">
                <p className="text-lg font-bold">Tax type</p>
                <div className="flex items-center justify-between gap-4 w-full">
                    <div className="flex items-center justify-between p-4 border w-full bg-white rounded">
                        <Label htmlFor="paye">PAYE</Label>
                        <Checkbox id="paye" defaultChecked/>
                    </div>
                    <div className="flex items-center justify-between p-4 border w-full bg-white rounded">
                        <Label htmlFor="pit">PIT</Label>
                        <Checkbox id="pit"/>
                    </div>
                </div>
                
            </div>
        </div>
        <aside></aside>
        </section>
    </main>
  )
}
export default TaxCalculator