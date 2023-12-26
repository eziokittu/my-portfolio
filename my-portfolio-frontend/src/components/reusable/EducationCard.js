import React from 'react'

const EducationCard = ({props}) => {
  return (
    <div 
      className='group bg-yellow-500/50 hover:bg-yellow-500
      rounded-lg p-2 sm:flex'
    >

      {/* Institute Image */}
      <div 
        className='h-[200px] w-fit'
      >
        <img
          className='h-full w-full rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg'
          src={props.image}
          alt={props.alt}
        />
      </div>

      {/* Education Details */}
      <div>

        {/* Degree Achieved */}
        <div>
          <p>{props.achieved}</p>
        </div>

        {/* Name and Board */}
        <div>

          {/* Institute Name */}
          <div>
            <p>{props.name}</p>
          </div>

          {/* Institute Board */}
          <div>
            <p>{props.board}</p>
          </div>

        </div>

        {/* Institute Study Year Duration */}
        <div>
          <span>{props.yearStart}</span>
          <span>-</span>
          <span>{props.yearEnd}</span>
          <span>|</span>
          <span>{props.status}</span>
        </div>

      </div>

    </div>
  )
};

export default EducationCard;