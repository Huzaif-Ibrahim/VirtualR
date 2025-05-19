import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <div className="mt-20 lg:mt-40 text-center border-b border-neutral-700">
        <h1 className="text-4xl sm:text-7xl">What people are saying</h1>

        <div className="py-10 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:py-20">
            {testimonials.map((e,indx)=>{
                return <div key={indx} className="rounded bg-neutral-900 border border-neutral-800 flex flex-col p-6 space-y-6 text-left w-full h-fit">
                    <p className="font-thin text-m">{e.text}</p>

                    <div className="flex items-center space-x-6">
                        <img src={e.image} alt="user-image" className="h-12 w-12 rounded-full" />
                        <div className="flex flex-col">
                            <h6 className="text-m font-thin">{e.user}</h6>
                            <p className="font-extralight text-sm text-neutral-600">{e.company}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Testimonials