import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const Hero = () => {
  return (
    <div className="mb-20 px-10 flex flex-col items-center space-y-6 sm:space-y-10 sm:pt-20">

        <h1 className="text-4xl text-white text-center md:text-7xl">VirtualR build tools <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">for developers</span></h1>

        <p className="text-[12px] text-center text-neutral-400 max-w-3xl sm:text-[16px]">Empower your creativity and bring your VR life ideas to life with our intutive development tools. Get started today and turn your imagination into immersive reality!</p>

        <div className="hero-buttons flex flex-row items-center justify-center space-x-4">
          <a href="/" className='px-3 py-2 text-[12px] bg-gradient-to-r from-orange-400 to-red-800 rounded sm:text-[16px]'>Start for free</a>
          <a href="/" className='px-3 py-2 text-[12px] border border-white bg-transparent rounded sm:text-[16px]'>Documentation</a>
        </div>

        <div className="imgs flex flex-row justify-between mt-5">
          <video muted autoPlay loop className='w-[48%] rounded border border-orange-400'>
            <source src={video1} />
          </video>
          <video muted autoPlay loop className='w-[48%] rounded border border-orange-400'>
            <source src={video2} />
          </video>
        </div>
        
    </div>
  )
}

export default Hero