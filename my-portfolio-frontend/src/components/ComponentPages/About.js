import React from 'react'
import { Fade, Zoom } from "react-awesome-reveal";

// importing data from local files
import profileData from "../../data/profileData.json";

const About = () => {
  const revealDelay = 50;
  const revealDuration = 1000;

  const redirectToGmail = (mail) => {
    const subject = '[Redirected from Bodhisatta-portfolio]';
    const body = 'Hi Bodhisatta,\n';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${subject}&body=${body}`;
  
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className='bg-green-400/20 min-h-[700px]' id='about'>
      
      {/* About Body */}
      <div 
        className=' group/g1 mx-2 xsm:mx-12 md:mx-auto md:w-[700px] lg:w-[900px] p-2 xsm:p-4 rounded-lg shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] transition duration-300
        bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-lime-600/75 via-green-200/75 to-teal-600/75
        hover:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] hover:from-lime-600 hover:via-green-200 hover:to-teal-600'
      >
        {/* Heading */}
        <div 
          className='text-center font-semibold group-hover/g1:font-bold border-b-[4px] border-green-600
          bg-gradient-to-r from-lime-700 via-green-900 to-teal-600 w-fit mx-auto bg-clip-text text-transparent
          flex gap-2 items-center '
        >

          {/* Heading Icon */}
          <div className='text-green-900 group-hover/g1:animate-bounce '>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              className="w-16 h-16 group-hover/g1:animate-spin">
              <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
          </div>

          {/* Heating Title */}
          <p className='text-xl 2xsm:text-2xl xsm:text-3xl sm:text-5xl xl:text-7xl'>About Me</p>

        </div>

        {/* Content of About Section */}
        <Fade duration={revealDuration} delay={revealDelay}>
          <div>
            
            {/* About Me Text */}
            <div className='text-emerald-950 text-justify text-sm xsm:text-lg md:text-2xl'>
              {profileData.about.map((text) => 
                <Zoom duration={revealDuration}><Fade delay={revealDelay} duration={revealDuration}>
                <div className='mb-4'>
                  {text}
                </div></Fade></Zoom>
              )}
            </div>

            {/* Some Contact details */}
            <div className='mt-12 text-md sm:text-2xl md:text-3xl text-teal-950'>

              {/* Primary Email */}
              <Zoom duration={revealDuration}><Fade delay={revealDelay} duration={revealDuration}>
                <div className='mb-2 '>
                <span className='mr-2 text-lime-950 font-bold'>Primary Email:</span>
                <span>
                  <button
                    onClick={() => redirectToGmail(profileData.email)}
                    className='hover:underline'
                  >
                    {profileData.email}
                  </button>
                </span>
                </div>
              </Fade></Zoom>

              {/* KIIT Email */}
              <Zoom duration={revealDuration}><Fade delay={revealDelay} duration={revealDuration}>
                <div className='mb-2'>
                  <span className='mr-2 text-lime-950 font-bold'>KIIT Email:</span>
                  <span>
                    <button
                      onClick={() => redirectToGmail(profileData.email_KIIT)}
                      className='hover:underline'
                    >
                      {profileData.email_KIIT}
                    </button>
                  </span>
                </div>
              </Fade></Zoom>

              {/* Place Details */}
              <Zoom duration={revealDuration}><Fade delay={revealDelay} duration={revealDuration}>
                <div className=''>
                  <span className='mr-2 text-lime-950 font-bold'>Place:</span>
                  <span>{profileData.home}</span>
                </div>
              </Fade></Zoom>
            </div>

            {/* Resume Button */}
            <Zoom duration={revealDuration}><Fade delay={revealDelay} duration={revealDuration}>
              <div className='w-fit'>
                <button
                  onClick={()=>{window.open(`${profileData.resume}`, '_blank')}}
                  className='mt-12 transition duration-500 w-[250px] rounded-lg
                  bg-green-400 hover:bg-green-500 hover:font-bold group/g2'
                >
                  <div className='flex items-center p-4 justify-center'>
                    <p 
                      className='text-4xl
                      transition duration-500'
                    >Resume</p>
                    <svg 
                      className='w-10 h-10 
                      group-hover/g2:translate-x-2' 
                      xmlns="http://www.w3.org/2000/svg"  
                      viewBox="0 0 30 30"
                    ><path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </Fade></Zoom>
          </div>
        </Fade>
        
      </div>
    </div>
  );
};

export default About;