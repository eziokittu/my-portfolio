import React from 'react'

const EducationCard = ({props}) => {
  return (
    <div 
      className='group/edu2 bg-yellow-50 hover:bg-yellow-100
      rounded-lg p-2 sm:flex '
    >

      {/* Institute Image */}
      <div 
        className='h-[250px] lg:h-[300px] xl:h-[350px]
        w-fit sm:w-5/12 lg:w-2/5 xl:w-1/3
        mb-4 mx-auto sm:mr-4 sm:mb-0'
      >
        <img
          className='h-full w-full rounded-t-2xl sm:rounded-tr-none sm:rounded-l-2xl'
          src={props.image}
          alt={props.alt}
        />
      </div>

      {/* Education Details */}
      <div className='flex flex-col
        w-fit sm:w-7/12 lg:w-3/5 xl:w-2/3
        sm:h-[250px] lg:h-[300px] xl:h-[350px]
        '>

        {/* Degree Achieved */}
        <div 
          className='font-bold text-2xl lg:text-3xl xl:text-4xl
          text-center text-gray-600 group-hover/edu2:text-gray-900'
        >
          <p>{props.achieved}</p>
        </div>

        {/* Horizontal line */}
        <hr className='border-yellow-900 my-1'/>

        {/* Name and Board */}
        <div 
          className='text-lg lg:text-xl xl:text-2xl
          text-gray-600 group-hover/edu2:text-gray-900'>

          {/* Institute Name */}
          <div className=''>
          <span className='font-bold mr-2'>Institute:</span>
            <span className=''>{props.name}</span>
          </div>

          {/* Institute Board */}
          <div className=''>
            <span className='font-bold mr-2'>Board:</span>
            <span className=''>{props.board}</span>
          </div>

        </div>

        {/* Horizontal line */}
        <hr className='sm:mt-auto border-yellow-900 my-1'/>

        {/* Institute Study Year Duration */}
        <div 
          className='font-bold 
          text-green-700 group-hover/edu2:text-green-900
          text-xl lg:text-2xl xl:text-3xl flex'
        >
          <span>{props.yearStart}</span>
          <span>-</span>
          <span>{props.yearEnd}</span>
          <span className='mx-auto'>~</span>
          <span className=''>{props.status}</span>
        </div>

      </div>

    </div>
  )
};

export default EducationCard;