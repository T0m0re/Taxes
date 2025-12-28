import Link from "next/link"
import { Button } from "./ui/button"
import YoutubePreview from "./YoutubePreview"
import { ChevronRight } from "lucide-react"

const youtube_codes = [
    "VYT-ip21P08",
    "AjJltVO3SAc",
]

const articles = [

    {
        source: "cowriwise",
        title: "How the New Tax Laws Could Affect Your Salary, Savings, and Investments in 2026",
        date: '20-12-24',
        link: "/"
    },
]

const Resources = () => {
  return (
    <section className="w-[90%] mx-auto my-10">
        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-start gap-1">
                <p className="bg-red-300 p-1.5 rounded text-base font-medium">Resouces</p>
                {/* <h3>What does the law say?</h3> */}
                <h3 className="text-lg font-medium">Some official resources gathered about 2025 tax bill</h3>
            </div>

            <div className="flex items-center gap-4">
                <Button className="border border-black bg-transparent text-black hover:bg-black/10 rounded">All</Button>
                <Button className="border border-black bg-transparent text-black hover:bg-black/10 rounded">Youtube</Button>
                <Button className="border border-black bg-transparent text-black hover:bg-black/10 rounded">Article</Button>
            </div>

            <div className="youtube">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {youtube_codes.map((codes) => (
                        <li key={codes} className="flex">
                        <YoutubePreview videoId={codes}/>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="articles">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {articles.map(({source, title, date, link}) => (
                        <li key={link} className="hover:shadow-sm transition">
                        <Link href={link} className="group block relative border p-2 md:py-4 lg:py-6 rounded">
                        <div className="max-sm:w-4/5 ">
                        <p className="uppercase mb-2">{source}</p>
                            <h2 className="font-bold text-xl capitalize">{title}</h2>
                            
                            <p className="mt-2">{date}</p>
                        </div>
                        <div className="absolute bottom-[5%] right-[2%] bg-red-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <ChevronRight/>
                        </div>
                        </Link>
                    </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    </section>
  )
}
export default Resources