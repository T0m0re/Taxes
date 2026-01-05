import Image from "next/image"

const Features = () => {
  return (
    <section className="w-[95%] mx-auto my-10">
        <div className="flex flex-col gap-4">
            <div className="flex flex-col items-start">
                <p className="bg-red-300 p-1.5 rounded text-base font-medium">Features</p>
                <h3 className="text-lg font-medium">Manage your tax in accordance with the 2025 act</h3>
            </div>
             <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
                    <li className="flex flex-col items-start justify-between gap-4 rounded overflow-hidden">
                        <Image src="/Calculator.jpg" alt="name" width={200} height={200} className="w-full"/>
                        <div>
                            <h3 className="font-semibold text-lg">Manage Tax Record</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit eum cupiditate voluptates, quod quisquam laudantium optio aperia</p>
                        </div>
                        
                    </li>
                
                    <li className="flex flex-col items-start justify-between bg-accent">
                        <Image src="/Calculator.jpg" alt="name" width={300} height={200} className="w-full"/>
                        <h3 className="font-semibold text-lg">Tax Calculator</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit eum cupiditate voluptates, quod quisquam laudantium optio aperia</p>
                    </li>
                    <li className="flex flex-col items-start justify-between bg-accent">
                        <Image src="/Calculator.jpg" alt="name" width={300} height={200} className="w-full"/>
                        <h3 className="font-semibold text-lg">General Tax Resources</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit eum cupiditate voluptates, quod quisquam laudantium optio aperia</p>
                    </li>
                    <li className="flex flex-col items-start justify-between bg-accent">
                        <Image src="/Calculator.jpg" alt="name" width={300} height={200} className="w-full"/>
                        <h3 className="font-semibold text-lg">AI Tax Chat Assistant</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit eum cupiditate voluptates, quod quisquam laudantium optio aperia</p>
                    </li>
            </ul>
        </div>
    </section>
  )
}
export default Features