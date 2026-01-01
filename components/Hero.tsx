'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import Navbar from "./Navbar"
import Image from "next/image"
import CurrencyInput from 'react-currency-input-field';

const Hero = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 w-[95%] mx-auto min-h-dvh py-2 gap-4">
        <section className="border h-[96%] flex flex-col justify-between">
            <Navbar/>
            <div className="flex flex-col items-start gap-10 max-sm:py-20 ">
                <div className="rounded-xl p-2 flex items-center gap-3 bg-blue-100 backdrop-blur-sm border border-blue-300 text-black text-xs font-semibold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span className="capitalize">updated for 2025 tax law</span>
                </div>
                <div>
                <h1 className="text-black text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4">Complete <span className="text-blue-500">Tax Management</span> for the New Nigeria</h1>
                <h2 className="text-black text-lg">Stay compliant with Income Tax, VAT, Stamp Duties, and Petroleum Royalties under the unified Nigeria Tax Act, 2025 - all in one intelligent platform.</h2>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between bg-white px-2 py-2 w-full border-y">
                <div className="flex items-center justify-between gap-2 w-full max-sm:py-2">
                    <span className="font-bold text-black text-xl px-2">₦</span>             
                    <CurrencyInput
                        className="shadow-none border-0 placeholder:text-lg placeholder:text-black/60 placeholder:font-medium border-l rounded-none w-full focus-within:outline-0 text-lg font-medium pl-2"
                        id="input-example"
                        name="input-name"
                        placeholder="Enter Gross Income"
                        defaultValue={0}
                        decimalsLimit={2}
                        onValueChange={(value, name, values) => console.log(value, name, values)}
                        />
                </div>
                <Link href="/tax-calculator" className="w-full">
                <Button className="bg-blue-600 hover:bg-blue-800 px-8 py-6 rounded w-full cursor-pointer transition-colors">Calculate Taxes</Button>
                </Link>
            </div>
            </div>
        </section>

        <section className="max-sm:hidden block">
            <div className="w-full h-dvh rounded overflow-hidden">
                <Image src="/image_fx.png" alt="hero" width={400} height={800} className="w-full h-[96%] object-cover grayscale rounded"/>
            </div>
        </section>
    </main>
  )
}
export default Hero