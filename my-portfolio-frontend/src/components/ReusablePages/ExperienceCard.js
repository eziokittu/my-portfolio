import React from 'react'

const ExperienceCard = ({ data }) => {
  return (
    <div className='flex flex-row bg-white mx-2 p-2 xsm:gap-2 rounded-xl'>

      {/* Left Part */}
      <div
        onClick={() => { window.open(`${data.link}`, '_blank') }}
        className='flex flex-col w-1/3 min-w-[100px] xsm:w-[200px] sm:w-[300px] md:w-[350px] cursor-pointer shadow-[0_0_10px_black] hover:shadow-[0_0_30px_black] rounded-l-2xl'>

        {/* Organization Image */}
        <img
          src={data.image}
          alt={data.name}
          className='rounded-tl-xl'
        />

        {/* Organization Name with clickable website link */}
        <button
          className='text-center 2xsm:text-lg xsm:text-xl sm:text-2xl h-full font-bold rounded-bl-xl bg-gray-400'
        >
          {data.name}
        </button>

      </div>

      {/* Right Part */}
      <div className='flex flex-col text-center mx-auto justify-between items-center bg-gray-200 w-full rounded-r-2xl'>

        {/* Experience Type - Job or Internship */}
        <div className='bg-gray-800 text-white text-sm xsm:text-lg sm:text-xl md:text-2xl w-full rounded-tr-2xl'>{data.type}</div>

        {/* Duration and Description */}
        <div className='flex flex-col justify-around'>
          {/* Duration */}
          <div className='flex flex-row gap-4 mx-auto h-full text-sm xsm:text-lg sm:text-xl md:text-2xl'>
            <span className='font-bold '>From: {data.start}</span>
            <span>~</span>
            <span className='font-bold '>To: {data.end}</span>
          </div>

          {/* Domain */}
          <div className='flex gap-2 mx-auto text-sm xsm:text-lg sm:text-xl md:text-2xl'>
            <span>Domain:</span>
            <span className='font-bold'>{data.domain}</span>
          </div>

          {/* Description */}
          <div className='p-2 sm:text-[12px] md:text-[14px] lg:text-lg hidden sm:block'>
            {data.description}
          </div>
        </div>

        {/* Certificate */}
        <button
          className='bg-gray-700 text-slate-200 hover:bg-gray-900 hover:text-white text-lg xsm:text:2xl sm:text-3xl w-full rounded-br-2xl'
          onClick={() => { window.open(`${data.certificate}`, '_blank') }}
        >
          View Certificate
        </button>
      </div>
    </div>
  )
}

export default ExperienceCard