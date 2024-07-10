import { Table } from 'antd'
import React from 'react'
import { columns, dataSource } from './data'

const Products = () => {
  return (
    <div className="pl-[5px] my-[20px] w-[95%] mx-auto">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        className='overflow-auto bg-white rounded-xl shadow-custom'
      />
    </div>
  )
}

export default Products
