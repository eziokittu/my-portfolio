import React, {useState} from 'react'
// import temp from '../../Data/skills/img_html.png'

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
      onClick={handleButtonHovered}
      onPointerEnter={handleButtonHovered}
      onPointerLeave={handleButtonNotHovered}
    >
      <div
        className='w-full h-[140px]
          cursor-default
          flex flex-col justify-center
          bg-pink-500/30 hover:bg-pink-100
          border-2 border-pink-100/20 hover:border-pink-400
          transition-all duration-500 rounded-lg 
          shadow-[0_0_8px_black] hover:shadow-[0_0_24px_pink]
          m-1 text-'
        >
        {/* image of skill */}
        <div className='w-fit h-fit place-self-center'>
          <img 
            className={`w-full rounded-t-lg  ${buttonHovered ?'h-[80px] transition-transform duration-1000':'h-[80px] transition-transform duration-1000'}`}
            src={skillImageSrc}
            alt='skill'
          />
        </div>

        {/* title of skill */}
        <div className={
          `flex items-center justify-center w-full  rounded-b-lg
          ${buttonHovered ? 
            'h-[60px] -translate-y-1/4 bg-violet-950 transition duration-1000' : 
            'h-[60px]  bg-fuchsia-100'}
          `}>
          <p className={`overflow-visible
          text-center text-lg sm:text-xl xl:text-2xl
          ${buttonHovered ?'leading-5 font-bold text-pink-200 transition duration-500' : ' leading-4 text-pink-950'}`}>
            {skillName}
          </p>
        </div>
      </div>
    </button>
  )
}

export default SkillCard