import { Button } from 'antd'
import React from 'react'

const welcome = () => {
  return (
    <div className="w-full bg-white py-8">
      <div className="flex items-center mb-6 pl-2">
        <div className="w-12 h-12 flex items-center justify-center ml-28 bg-black rounded-full">
          <span className="text-lg font-bold text-white">NH</span>
        </div>
        <div className="ml-8">
          <h1 className="text-xl font-bold">Chào mừng Nguyễn Trung trở lại!</h1>
          <Button type="link" className="text-blue-600">
            Add occupation and interests
          </Button>
        </div>
      </div>

      

      
      
    </div>
  )
}

export default welcome