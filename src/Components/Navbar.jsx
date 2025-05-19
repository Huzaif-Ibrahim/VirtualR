import logo from '../assets/logo.png'
import { navItems } from '../constants'
import menu from '../assets/menu-line.svg'
import close from '../assets/close-large-line.svg'
import { useState } from 'react'

const Navbar = () => {

 const [isMenu, setIsMenu] = useState(false)

 const menuController = () => {
  setIsMenu(!isMenu)
 }

  return (
    <nav className='w-full border-b border-neutral-700/80 backdrop-blur-lg fixed top-0 left-0'>
      <div className="container px-6 py-3 min-w-full flex items-center justify-between">

        <div className="logoNname flex justify-center items-center space-x-1">
          <img src={logo} alt="logo" className='h-8'/>
          <h3 className='font-bold text-2xl'>VirtualR</h3>
        </div>

        <div className="options hidden lg:flex items-center justify-center space-x-8">
          
            {navItems.map((e , indx)=>{
              return (
              <ul  key={indx}>
                 <li>
                   <a href={e.href}>{e.label}</a>
                 </li>  
              </ul>
              )
            })}
          
        </div>

        {/* Menu Buttons============ */}

        <div className='lg:hidden md:flex items-center'>
          <button onClick={()=>menuController()} className='flex items-center cursor-pointer'>
            {isMenu?<img src={close} className='h-6 w-6' ></img>:<img src={menu} className='h-6 w-6'></img>}
          </button>
        </div>

        <div className="buttons hidden lg:flex items-center justify-center space-x-4">
          <a href="/" className='px-3 py-2 border border-white bg-transparent rounded'>Sign In</a>
          <a href="/" className='px-3 py-2 bg-gradient-to-r from-orange-400 to-red-800 rounded'>Contact us</a>
        </div>

      </div>

      {isMenu && (
        <div className='flex flex-col items-center pb-4 lg:hidden'>
        <ul>
          {navItems.map((e , indx)=>{
            return (
              <li className='p-2' key={indx}>
                <a href={e.href}>{e.label}</a>
              </li>
            )
          })}
        </ul>

        <div className='flex items-center justify-center space-x-4 mt-2'>
          <a href="/" className='px-3 py-2 border border-white bg-transparent rounded'>Sign In</a>
          <a href="/" className='px-3 py-2 bg-gradient-to-r from-orange-400 to-red-800 rounded'>Contact us</a>
        </div>
      </div>
      )}
   
    </nav>
  )
}

export default Navbar