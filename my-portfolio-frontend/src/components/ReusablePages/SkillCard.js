import React, {useState} from 'react'
// import { Fade} from "react-awesome-reveal";

function SkillCard({skillName, skillImageSrc}) {
  const [buttonHovered, setButtonHovered] = useState(false);
  const handleButtonNotHovered = () => {
    setButtonHovered(false);
  };
  const handleButtonHovered = () => {
    setButtonHovered(true);
  };
  return (
    <button 
      onMouseEnter={handleButtonHovered}
      onMouseLeave={handleButtonNotHovered}
    >
      {/* <Fade delay={100}> */}
      <div
        className='w-full h-[60px] xsm:h-[100px] sm:h-[140px]
          cursor-default
          flex flex-col justify-center
          bg-pink-500/30 hover:bg-pink-100
          border-2 border-pink-100/20 hover:border-pink-400
          transition-all duration-500 rounded-lg 
          shadow-[0_0_8px_black] hover:shadow-[0_0_24px_pink]
          m-1 '
        >
        {/* image of skill */}
        <div className='w-fit h-fit place-self-center'>
          <img 
            className={`w-full rounded-t-lg transition-all duration-1000 ${buttonHovered ?
              'h-[30px] xsm:h-[50px] sm:h-[70px]':
              'h-[20px] xsm:h-[60px] sm:h-[80px]'
            }`}
            src={skillImageSrc}
            alt='skill'
          />
        </div>

        {/* title of skill */}
        <div className={
          `flex items-center justify-center w-full  rounded-b-lg
          ${buttonHovered ? 
            'h-[30px] xsm:h-[50px] sm:h-[70px]  bg-violet-950 transition-all duration-1000' : 
            'h-[40px] xsm:h-[40px] sm:h-[60px]  bg-fuchsia-100'}
          `}>
          <p className={`overflow-visible
          text-center text-xs xsm:text-lg sm:text-xl xl:text-2xl
          ${buttonHovered ?'leading-5 font-bold text-pink-200 transition-all duration-500' : ' leading-4 text-pink-950'}`}>
            {skillName}
          </p>
        </div>
      </div>
      {/* </Fade> */}
    </button>
  )
}

export default SkillCard