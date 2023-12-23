import React, {useState} from 'react'
// import temp from '../../Data/skills/img_html.png'

function SkillCard({skillName, skillImageSrc}) {
  const [skillHovered, setSkillHovered] = useState(false);

  const handleButtonHoverEnter = () => {
    setSkillHovered(true);
  };

  const handleButtonHoverExit = () => {
    setSkillHovered(false);
  };

  return (
    <button
      onMouseEnter={handleButtonHoverEnter}
      onMouseLeave={handleButtonHoverExit}
    >
      <div
        className='w-full h-28
          cursor-default
          flex flex-col justify-center 
          bg-stone-500 hover:bg-stone-200
          transition-all duration-500 rounded-lg 
          shadow-slate-800-200 m-1'>
        {/* image of skill */}
        <div className='w-fit h-fit place-self-center'>
          <img 
            className='w-full h-20 hover:h-14 transition duration-100'
            src={skillImageSrc}
            alt='skill'
          />
        </div>

        {/* title of skill */}
        {/* hovered */}
        {skillHovered && <p 
          className=' h-14
            bg-slate-900
            rounded-b-lg
            text-center overflow-hidden 
            text-slate-50
            text-md sm:text-lg xl:text-xl'
        >{skillName}</p>}
        {/* not hovered */}
        {!skillHovered && <p 
          className='h-8
            bg-slate-800
            rounded-b-lg 
            text-center overflow-hidden 
            text-slate-300
            text-md sm:text-lg xl:text-xl'
        >{skillName}</p>}
      </div>
    </button>
  )
}

export default SkillCard