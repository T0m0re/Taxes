import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Hero = () => {
  return (
    <section className="min-h-[80dvh] relative w-full flex flex-col justify-center items-center">
        <div className="z-0 absolute inset-0 bg-no-repeat bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('background-img.png')"}}></div>
        <div className="relative flex flex-col items-center justify-between gap-6 z-10 w-4/5 mx-auto">
            <div className="rounded-full  p-2 flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                <span className="capitalize">updated for 2025 tax law</span>
            </div>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">Manage Your Tax Record</h1>

            <h2 className="text-white text-xl font-medium text-center">The most accurate, free tax calculator for freelancers and full-time employees.</h2>

            <div className="flex flex-col md:flex-row items-center justify-between bg-white px-2 py-2 rounded w-full md:w-1/2">
                <div className="flex items-center justify-between gap-2 w-full">
                    <span className="font-bold text-black/70 text-xl">₦</span>
                    <Input type="string" placeholder="Enter gross income" className="shadow-none border-0 placeholder:text-lg placeholder:text-black/70 border-l rounded-none py-6"/>
                </div>
                <Button className="px-8 py-6 rounded max-md:w-full w-1/3 cursor-pointer">Calculate Taxes</Button>
            </div>

            <span className="text-white/90">lock Your data is yours and your alone.</span>
        </div>
    </section>
  )
}
export default Hero