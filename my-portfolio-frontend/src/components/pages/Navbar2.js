import React from 'react';

import ButtonLink2 from '../reusable/ButtonLink2';

const Navbar2 = ({ options }) => {
  return (
    <div 
      className='bg-slate-300/10 relative top-0 z-10'
    >
      <div className=''>
        {/* Primary Navbar options */}
        <div className='flex gap-4'>
          <ButtonLink2 linkTo={options[0].toLowerCase()} buttonName={options[0]} />
          <ButtonLink2 linkTo={options[1].toLowerCase()} buttonName={options[1]} />
          <ButtonLink2 linkTo={options[2].toLowerCase()} buttonName={options[2]} />
          <ButtonLink2 linkTo={options[3].toLowerCase()} buttonName={options[3]} />
        </div>        
      </div>
    </div>
  )
};

export default Navbar2;