import React from 'react'

export default function DemoGrid() {
  return (
    <div className="container">
        <div className="grid grid-cols-3 text-center gap-4">
            <div className="bg-blue-500 ">1</div>
            <div className="bg-red-500 col-span-2 hover:col-span-6">2</div>
            <div className="bg-yellow-500">3</div>
            <div className="bg-orange-500 col-span-3">4</div>
            <div className="bg-slate-500">5</div>
            <div className="bg-slate-300">6</div>
        </div>


        <div className="m-4 grid grid-rows-3 grid-flow-dense">
          <div className="bg-blue-500 row-start-2 row-span-2">01</div>
          <div className="bg-blue-50 row-end-3 row-span-2">02</div>
          <div className="bg-blue-50 row-start-1 row-end-4">03</div>
        </div>
    </div>
  )
}
