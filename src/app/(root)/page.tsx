import React from 'react'
import { GiPayMoney } from "react-icons/gi";

const HomePPage = () => {
  return (
    <div>
      <div className='p-10'>
        <p>
          Dashboard <br />
          Welcome Back! Rwigara Rodrigue
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 lg:px-10">
        <div className='bg-[#D9D9D9] py-3 px-4 space-y-5'>
          <p className='flex items-center gap-3 font-bold text-xl text-center'><GiPayMoney />Paid Amount</p>
          <p className='font-bold'>RWF 100,000</p>
          <p>P. Method: paypal</p>
        </div>
        <div className='bg-[#D9D9D9] py-3 px-4 space-y-5'>
          <p className='font-bold text-xl lg:text-center'>Remain</p>
          <p className='font-bold'>RWF 50,000</p>
          <p>P. Method: paypal</p>
        </div>
        <div className='bg-[#D9D9D9] py-3 px-4 space-y-5'>
          <p className='font-bold text-xl lg:text-center'>Remain</p>
          <p className='font-bold'>RWF 50,000</p>
          <p>P. Method: paypal</p>
        </div>
      </div>
    </div>
  )
}

export default HomePPage