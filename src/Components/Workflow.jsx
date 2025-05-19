import { CircleCheck } from 'lucide-react'
import codeimg from '../assets/code.jpg'
import { checklistItems } from '../constants'

const Workflow = () => {
  return (
    <div>
        <h1 className="text-4xl px-2 sm:text-7xl text-center mt-20">Accelerate your 
            <span className="bg-gradient-to-r from-orange-400 to-red-800 text-transparent bg-clip-text"> coding workflow</span>
        </h1>

        <div className="grid grid-cols-1 mt-10 px-8 lg:grid-cols-2 lg:gap-12 lg:mt-10">
            <div className="code-img">
                <img src={codeimg} alt="code-img" />
            </div>

            <div className="points h-full flex flex-col justify-between py-12">
                {checklistItems.map((e,indx)=>{
                    return <div className='flex space-x-4 ' key={indx}>
                        <div>
                            <CircleCheck className='text-green-600 mt-[2px]'/>
                        </div>

                        <div className='flex flex-col'>
                            <h5 className='text-xl'>{e.title}</h5>
                            <p className='text-neutral-400 mt-2 mb-12 lg:mb-0'>{e.description}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Workflow