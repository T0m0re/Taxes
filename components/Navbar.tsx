import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <nav className="w-full shadow">
        <div className="max-w-5/6 mx-auto flex items-center justify-between py-3">
            <Link href="/">
                <h1 className="font-bold text-lg">Taxes</h1>
            </Link>

            <div className="flex items-center justify-between gap-6">
                <Link href="/resources">
                    <p className="font-medium">Resources</p>
                </Link>
                <Button>Sign In</Button>
            </div>
        </div>
    </nav>
  )
}
export default Navbar