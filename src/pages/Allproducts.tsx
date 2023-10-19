import React from 'react'
import ProductCard from '../components/ui/ProductCard'

const Allproducts = () => {
  return (
    <div>
      <div className='py-5'>
        <p> home / allproducts</p>
      </div>
      <div className='flex gap-5'>
        <div className='border p-8 w-[350px]'>
          <input className='p-2 bg-slate-100' type="text" />
          <input className='' type="range" />
          <select className='border p-2' name="" id="">
            <option defaultChecked>all</option>
            <option value="">T-shirts</option>
            <option value="">Sweat shirts</option>
            <option value="">Shirts</option>
          </select>
          
          <div>
            
          </div>
        </div>
        <div className='grid gap-5 w-full grid-cols-3'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default Allproducts