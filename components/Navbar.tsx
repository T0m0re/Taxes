import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <nav className="w-full shadow">
        <div className="max-w-[95%] mx-auto flex items-center justify-between py-3">
            <Link href="/">
                <h1 className="font-bold text-lg">UniTax</h1>
            </Link>

            <div className="flex items-center justify-between gap-6">
                <Link href="/resources">
                    <p className="font-semibold text-black/70 hover:text-black transition-opacity">Resources</p>
                </Link>
                <Button className="bg-blue-600 hover:bg-blue-800 rounded cursor-pointer">Sign In</Button>
            </div>
        </div>
    </nav>
  )
}
export default Navbar