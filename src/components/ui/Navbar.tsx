import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import {RiSearchLine, RiShoppingCartLine} from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='px-20 flex items-center justify-between py-5 '>
        <div className='flex items-center gap-2'>
          <img src={Logo} className='h-6' alt="" />
          <h1 className='font-semibold text-lg'>Halmond</h1>
        </div>
        <ul className='flex gap-5'>
          <Link to={'/'}><li className='text-base hover:bg-orange-100 rounded-md p-1 px-5'>Collections</li></Link>
          <Link to={'/'}><li className='text-base hover:bg-orange-100 rounded-md p-1 px-5'>Featured</li></Link>
          <Link to={'/'}><li className='text-base hover:bg-orange-100 rounded-md p-1 px-5'>New Arrivals</li></Link>
          <Link to={'/'}><li className='text-base hover:bg-orange-100 rounded-md p-1 px-5'>Sale</li></Link>
        </ul>
        <div className='flex gap-8 items-center'>
          <RiSearchLine className=' text-xl' />
          <RiShoppingCartLine className=' text-xl' />
          <Link to={''}>
            <button className='bg-orange-200 p-2 px-5'>Login / Register</button>
          </Link>
        </div>
    </div>
  )
}

export default Navbar