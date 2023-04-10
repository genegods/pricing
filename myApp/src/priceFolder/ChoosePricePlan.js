import React from 'react'

const ChoosePricePlan = ({showPlan}) => {
    const closePlan = () =>{
        showPlan()
     }
  return (
    <React.Fragment>
    <main>
      <div className="bg-gray-900 w-screen h-screen opacity-90 centered overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div className="bg-white h-96 w-96 flex flex-col justify-between py-10 font-bold text-3xl md:w-2/5">
        <p className="text-center"> Choose Plan Page</p>
        <div className="flex justify-around">
        <button  className='py-1 px-5 border-2 border-purple-900 text-purple-900 rounded font-bold text-sm'>ok</button>
        <button onClick={closePlan}  className='py-1 px-5 border-2 border-purple-900 text-purple-900 rounded font-bold text-sm'>cancel</button>
        </div>
        </div>
      </div>
    </main>
  </React.Fragment>
  )
}

export default ChoosePricePlan