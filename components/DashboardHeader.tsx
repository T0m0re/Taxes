import Link from "next/link"
import { Button } from "./ui/button"
import { SidebarTrigger } from "./ui/sidebar"


const DashboardHeader = () => {
  return (
    <div className="py-3 shadow w-full">
        <div className="max-w-[95%] mx-auto flex items-center justify-between">

            {/* <Link href="/">
                <h1 className="font-bold text-lg">UniTax</h1>
            </Link> */}
            <SidebarTrigger />


            <div className="flex items-center justify-between gap-6">
                    <Link href="/resources">
                        <p className="font-semibold text-black/70 hover:text-black transition-opacity">Resources</p>
                    </Link>
                    <Button className="bg-blue-600 hover:bg-blue-800 rounded cursor-pointer">Sign In</Button>
            </div>
        </div>
    </div>
  )
}
export default DashboardHeader