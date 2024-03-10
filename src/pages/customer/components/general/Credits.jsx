import React from 'react'
import Header from '../common/Header'
import { Table } from 'antd'

const Credits = () => {
  return (
    <div>
      <Header title={"My Credits"} category={"Credits"}/>
      <div className="shadow-custom px-[20px] mb-[20px] py-[30px] gap-[40px] w-[300px]">
       <p className="opacity-80">Available Balance</p>
       <p className="text-[25px] font-semibold">C$1,104,246.43</p>
       <button className="border-gray-500 border px-[20px] shadow-btn transition-all ease-in-out duration-500">withdraw</button>
      <p>Approx. $864,279.29</p>
       </div>
      <div className="shadow-custom">
        <Table />
      </div>
    </div>
  )
}

export default Credits
