import React from 'react'

const Productslist = () => {
  return (
    <div className='container mx-auto pb-24'>
        <h1 className='text-lg font-bold my-8'>Products</h1>
        <div className='grid grid-cols-5 my-8 gap-24'></div>
        <div>
        <img src="/images/pizza1.png" alt="pizza"/>
        <h2>Havana special</h2>
        <span>small</span>
        <div>
            <span>500</span>
        </div>
        </div>
    </div>
  )
}

export default Productslist;