import { Button } from 'antd'
import React from 'react'

const Hello = () => {
  return (
    <div className="w-full bg-white py-8">
      <div className="flex items-center mb-6 pl-2">
        <div className="w-16 h-16 flex items-center justify-center ml-28 bg-gray-700 rounded-full">
          <span className="text-lg font-bold text-white">NH</span>
        </div>
        <div className="ml-5">
          <h1 className="text-2xl font-bold">Chào mừng Nguyễn Trung trở lại!</h1>
          <Button type="link" className="text-blue-600">
            Add occupation and interests
          </Button>
        </div>
      </div>

      

      
      
    </div>
  )
}

export default Hello