import Link from "next/link"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import Navbar from "./Navbar"
import Image from "next/image"

const Hero = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 w-[95%] mx-auto min-h-dvh my-2 gap-4">
        <section>
            <Navbar/>
            <div className="flex flex-col items-start justify-around h-full max-sm:py-20">
                <div className="rounded p-2 flex items-center gap-3 bg-black/20 backdrop-blur-sm border border-white/30 text-black text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span className="capitalize">updated for 2025 tax law</span>
                </div>
                <div>
                <h1 className="text-black text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">Manage Your Tax Record</h1>
                <h2 className="text-black text-xl font-medium">The most accurate, free tax calculator for freelancers and full-time employees.</h2>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between bg-white px-2 py-2 w-full lg:w-1/2 border-y">
                 <div className="flex items-center justify-between gap-2 w-full">
                     <span className="font-bold text-black/70 text-xl">₦</span>
                     <Input type="text" placeholder="Enter gross income" className="shadow-none border-0 placeholder:text-lg placeholder:text-black/70 border-l rounded-none py-6"/>
                 </div>
                 <Link href="/tax-calculator" className="max-md:w-full w-1/3">
                 <Button className="px-8 py-6 rounded w-full  cursor-pointer">Calculate Taxes</Button>
                 </Link>
             </div>
            </div>
        </section>

        <section className="max-sm:hidden block">
            <div className="w-full h-dvh rounded overflow-hidden">
                <Image src="/image_fx.png" alt="hero" width={400} height={800} className="w-full h-full object-cover grayscale "/>
            </div>
        </section>
    </main>
  )
}
export default Hero