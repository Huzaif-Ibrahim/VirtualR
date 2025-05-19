import { features } from "../constants"

const Features = () => {
  return (
    <div className="mt-30 text-center border-b border-neutral-700">
        <span className="text-center text-sm bg-neutral-800 rounded-full text-orange-400 uppercase px-3 py-2">Features</span>
        <h2 className="px-5 text-4xl mt-10 md:text-7xl sm:mt-20">Easily build 
            <span className="bg-gradient-to-r from-orange-400 to-red-800 bg-clip-text text-transparent"> your code</span>
        </h2>

        <div className="grid grid-cols-1 mt-16 px-10 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 md:mt-20">
            {features.map((e,indx)=>{
               return <div className="flex text-left" key={indx}>
                    <div className="text-orange-500 h-10 w-10">
                        {e.icon}
                    </div>
                    <div className="flex flex-col ml-6">
                        <div className="text-xl">
                            {e.text}
                        </div>
                        <div className="mb-16 mt-6 text-neutral-400">
                            {e.description}
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Features