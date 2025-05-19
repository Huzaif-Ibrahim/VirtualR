import { CircleCheck } from "lucide-react"
import { pricingOptions } from "../constants"

const Pricing = () => {
  return (
    <div className="mt-10 text-center lg:mt-40">
        <h1 className="text-4xl sm:text-7xl mb-10">Pricing</h1>

        <div>
            <div className="pricing-cards grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 px-8 ">
                {pricingOptions.map((e,indx)=>{
                    return <div className="rounded-xl w-full border-1 border-neutral-600 text-left p-10 flex flex-col space-y-8" key={indx}>
                        <h2 className="text-2xl sm:text-4xl">
                            {e.title}
                            {e.title==='Pro'?<span className=" ml-1 bg-gradient-to-r from-orange-400 to-red-800 text-transparent bg-clip-text text-lg">(Most Popular)</span>:<span></span>}
                        </h2>
                        <h2 className="text-4xl sm:text-6xl">{e.price}<span className="text-lg text-neutral-500">/Month</span></h2>

                        {e.features.map((e,indx)=>{
                            return <div key={indx} className="flex space-x-2">
                            <CircleCheck className="h-6 w-6 text-green-500"/>
                            <p>{e}</p>
                        </div>
                        })}

                        <div className="button w-full flex items-center justify-center border border-orange-600 rounded-xl py-2 mt-6 hover:bg-orange-600 transition-all">
                            <a href="/">Subscribe</a>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Pricing