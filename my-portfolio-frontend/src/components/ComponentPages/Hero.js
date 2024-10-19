import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Fade, Slide } from "react-awesome-reveal";

// importing reusable components
import TypingComponent from '../ReusablePages/TypingComponent';
// import DelayedComponent from "../ReusablePages/DelayedComponent";
import ShuffleHero from '../ReusablePages/ShuffleHero';
import BubbleText from "../ReusablePages/BubbleText";
import ContactButton from '../ReusablePages/ContactButton';

// importing data from local files
import heroTextAnimateData from "../../data/heroTextAnimateData.json";
import profileData from "../../data/profileData.json";
import contactData from '../../data/contactData.json';

function Hero() {
  const [typingComponentInViewPort, setTypingComponentInViewPort] = useState(false) // first time the visibily is false
  const handleComponentInViewPort = () => {
    setTypingComponentInViewPort(!typingComponentInViewPort);
    // console.log(`Component is ${typingComponentInViewPort===true ? 'entering' : 'exiting'} the viewport`);
  }

  return (
    <div
      className="w-full md:w-[750px] lg:w-[950px] flex lg:grid flex-col lg:grid-cols-2 items-center justify-center mx-auto mt-20 "
    >

      {/* The welcome text */}
      <div className='mx-auto lg:pr-8 lg:mx-0 w-full mb-12 lg:mb-0 justify-center flex flex-col'>

        <Slide direction='down' className='mx-auto'><Fade>
          <div className="flex font-Merriweather text-2xl sm:text-4xl text-fuchsia-500 ">
            Hey There<span className="text-4xl xsm:text-5xl animate-[wave_1.3s_ease-in-out_infinite]">👋🏻</span>
          </div>
        </Fade></Slide>

        <Slide direction='down' className='mx-auto'><Fade>
          <h1 className='font-Merriweather text-fuchsia-300 text-2xl sm:text-4xl'>
            <p>I'm </p>
          </h1>
        </Fade></Slide>

        <Slide direction='down' className='mx-auto'><Fade>
          <div className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl 
          font-semibold text-fuchsia-500 mt-2">
            <BubbleText text={profileData.name.firstName} />
          </div>
        </Fade></Slide>

        <Slide direction='down' className='mx-auto'><Fade>
          <h3 className="text-4xl sm:text-5xl md:text-6xl mt-2 
        font-semibold text-fuchsia-300 font-Merriweather"
          >{profileData.name.lastName}</h3>
        </Fade></Slide>

        {/* Typing Text Animation  */}
        <Fade
          onVisibilityChange={handleComponentInViewPort}
          delay={500} duration={1500} direction='down'
          className="mx-auto font-mono p-2 sm:p-4 mt-4 rounded-2xl drop-shadow-xl
          text-xs sm:text-xl text-fuchsia-100 bg-fuchsia-950 w-fit"
        >
          <TypingComponent texts={heroTextAnimateData.data} speedTyping={60} speedDelete={50} />
        </Fade>

        {/* About Me Button */}
        <Slide direction='down' className='mx-auto'><Fade>
        <Link 
          spy={true} offset={-180} duration={1500} smooth={'easeOutBack'}
          className=''
          to='about'
        >
          <button 
            className="w-[160px] flex justify-center mt-4 group rounded-lg
            bg-fuchsia-700 text-fuchsia-100 hover:text-fuchsia-50   
            transition-colors hover:bg-fuchsia-800 active:scale-95 py-2 px-4
            duration-500"
          >
            <p
              className='font-normal group-hover:font-bold transition-all duration-300'
            >About Me</p>
            <svg className='w-6 h-6 ml-2 fill-slate-400 group-hover:fill-white group-hover:translate-x-2 transition-transform duration-300'
              xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z"/>
            </svg>
          </button>
        </Link>
        </Fade></Slide>

      </div>

      {/* The grid for shuffling hero images */}
      <Fade delay={500} duration={1500}>
        <ShuffleHero />
      </Fade>

      {/* Contact Buttons */}
      <Slide direction='down' className='mx-auto lg:col-span-2'><Fade className="text-center">
        <p className="text-yellow-600 mt-16 w-fit px-4 mx-auto border-2 border-amber-500 border-b-transparent bg-yellow-100/5 rounded-t-xl">Connect with me</p>
        <div className='mx-2 sm:mx-auto sm:w-[450px] grid grid-cols-4 sm:grid-cols-5 bg-gradient-to-b from-yellow-500/10 to-green-500/10 border-2 border-amber-500/10 rounded-xl px-4 py-8 gap-y-8 gap-x-4'>

          {/* Github */}
          <ContactButton
            link={contactData.links.link_github}
            label={"Github"}
            svgIcon={
              <svg className='fill-slate-200 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github"><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg>
            }
          />

          {/* Leetcode */}
          <ContactButton
            link={contactData.links.link_leetcode}
            label={"Leetcode"}
            svgIcon={
              <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="leetcode"><path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path><path fill="#E7A41F" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path><path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path></svg>
            }
          />

          {/* CodeForces */}
          <ContactButton
            link={contactData.links.link_codeforces}
            label={"CodeForces"}
            svgIcon={
              <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="code-forces"><path fill="#F44336" d="M24 19.5V12a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 18 12v7.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5z"></path><path fill="#2196F3" d="M13.5 21a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 13.5 3h-3C9.673 3 9 3.672 9 4.5v15c0 .828.673 1.5 1.5 1.5h3z"></path><path fill="#FFC107" d="M0 19.5c0 .828.673 1.5 1.5 1.5h3A1.5 1.5 0 0 0 6 19.5V9a1.5 1.5 0 0 0-1.5-1.5h-3C.673 7.5 0 8.172 0 9v10.5z"></path></svg>
            }
          />

          {/* HackerRank */}
          <ContactButton
            link={contactData.links.link_hackerrank}
            label={"HackerRank"}
            svgIcon={
              <svg className='' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="hackerrank"><path fill="#2FC363" d="M11.999,0C10.626,0,2.195,4.818,1.514,6c-0.683,1.182-0.687,10.819,0,12c0.685,1.181,9.114,6,10.485,6c1.37,0,9.8-4.823,10.487-6c0.687-1.176,0.687-10.83,0-12C21.799,4.83,13.371,0,11.999,0L11.999,0z M14.84,19.415v0.002c-0.188,0-1.938-1.677-1.8-1.814c0.041-0.041,0.296-0.069,0.832-0.086c0-1.23,0.027-3.215,0.044-4.046c0.002-0.095-0.021-0.161-0.021-0.273h-3.787c0,0.333-0.022,1.697,0.064,3.416c0.012,0.213-0.074,0.279-0.271,0.278c-0.48-0.001-0.96-0.005-1.441-0.004c-0.194,0-0.278-0.073-0.271-0.286c0.043-1.567,0.141-3.938-0.008-9.969V6.483C7.724,6.468,7.404,6.438,7.364,6.397C7.225,6.26,9,4.583,9.187,4.583c0.188,0,1.951,1.677,1.813,1.814c-0.041,0.041-0.374,0.07-0.795,0.086v0.148c-0.113,1.207-0.096,3.731-0.124,4.941h3.803c0-0.214,0.019-1.629-0.057-3.922c-0.005-0.159,0.046-0.242,0.199-0.244c0.524-0.004,1.049-0.006,1.574-0.003c0.164,0.001,0.217,0.08,0.214,0.252c-0.173,8.967-0.032,8.341-0.032,9.86c0.42,0.016,0.796,0.045,0.838,0.086C16.757,17.737,15.027,19.415,14.84,19.415L14.84,19.415z"></path><path fill="#DEDEDE" d="M9.187,4.583C9,4.583,7.225,6.26,7.364,6.397c0.041,0.041,0.36,0.07,0.817,0.086v0.149c0.149,6.031,0.051,8.402,0.008,9.969c-0.007,0.214,0.077,0.286,0.271,0.286c0.067,0,0.134,0,0.201,0c0.413,0,0.826,0.003,1.24,0.004c0.001,0,0.003,0,0.004,0c0.194,0,0.279-0.067,0.268-0.278c-0.087-1.719-0.064-3.083-0.064-3.416H12v-1.626h-1.919c0.028-1.209,0.011-3.734,0.124-4.941V6.483C10.626,6.468,10.959,6.438,11,6.397C11.138,6.26,9.374,4.583,9.187,4.583L9.187,4.583z"></path><path fill="#29AA56" d="M11.999,0C10.626,0,2.195,4.818,1.514,6c-0.683,1.182-0.687,10.819,0,12c0.685,1.181,9.114,6,10.485,6l0,0H12V13.198h-1.892c0,0.333-0.022,1.697,0.064,3.416c0.012,0.211-0.073,0.278-0.268,0.278c-0.001,0-0.002,0-0.004,0c-0.413-0.001-0.826-0.004-1.24-0.004c-0.067,0-0.134,0-0.201,0c-0.194,0-0.278-0.073-0.271-0.286c0.043-1.567,0.141-3.938-0.008-9.969V6.483C7.724,6.468,7.404,6.438,7.364,6.397C7.225,6.26,9,4.583,9.187,4.583c0.188,0,1.951,1.677,1.813,1.814c-0.041,0.041-0.374,0.07-0.795,0.086v0.148c-0.113,1.207-0.096,3.731-0.124,4.941H12L11.999,0L11.999,0L11.999,0z"></path></svg>
            }
          />
          
          {/* LinkedIn */}
          <ContactButton
            link={contactData.links.link_linkedin}
            label={"LinkedIn"}
            svgIcon={
              <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" id="linkedin"><g fill="none" fillRule="evenodd"><g><rect width="72" height="72" fill="#117EB8" rx="4"></rect><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path></g></g></svg>
            }
          />

          {/* Twitter */}
          <ContactButton
            link={contactData.links.link_twitter}
            label={"Twitter/X"}
            svgIcon={
              <svg className='' xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 50 50"><path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path></svg>
            }
          />

          {/* Spotify */}
          <ContactButton
            link={contactData.links.link_spotify}
            label={"Spotify"}
            svgIcon={
              <svg className='bi bi-spotify' xmlns="http://www.w3.org/2000/svg" fill="#1db954" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/></svg>
            }
          />

          {/* Instagram */}
          <ContactButton
            link={contactData.links.link_instagram}
            label={"Instagram"}
            svgIcon={
              <svg className='' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path></svg>
            }
          />

          {/* Facebook */}
          <ContactButton
            link={contactData.links.link_facebook}
            label={"Facebook"}
            svgIcon={
              <svg className='' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path></svg>
            }
          />

          {/* Steam */}
          <ContactButton
            link={contactData.links.link_steam}
            label={"Steam"}
            svgIcon={
              <svg className='' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 259" id="Steam"><path fill="#040082" d="M127.779 0C60.42 0 5.24 52.412 0 119.014l68.724 28.674a35.812 35.812 0 0 1 20.426-6.366c.682 0 1.356.019 2.02.056l30.566-44.71v-.626c0-26.903 21.69-48.796 48.353-48.796 26.662 0 48.352 21.893 48.352 48.796 0 26.902-21.69 48.804-48.352 48.804-.37 0-.73-.009-1.098-.018l-43.593 31.377c.028.582.046 1.163.046 1.735 0 20.204-16.283 36.636-36.294 36.636-17.566 0-32.263-12.658-35.584-29.412L4.41 164.654c15.223 54.313 64.673 94.132 123.369 94.132 70.818 0 128.221-57.938 128.221-129.393C256 57.93 198.597 0 127.779 0zM80.352 196.332l-15.749-6.568c2.787 5.867 7.621 10.775 14.033 13.47 13.857 5.83 29.836-.803 35.612-14.799a27.555 27.555 0 0 0 .046-21.035c-2.768-6.79-7.999-12.086-14.706-14.909-6.67-2.795-13.811-2.694-20.085-.304l16.275 6.79c10.222 4.3 15.056 16.145 10.794 26.46-4.253 10.314-15.998 15.195-26.22 10.895zm121.957-100.29c0-17.925-14.457-32.52-32.217-32.52-17.769 0-32.226 14.595-32.226 32.52 0 17.926 14.457 32.512 32.226 32.512 17.76 0 32.217-14.586 32.217-32.512zm-56.37-.055c0-13.488 10.84-24.42 24.2-24.42 13.368 0 24.208 10.932 24.208 24.42 0 13.488-10.84 24.421-24.209 24.421-13.359 0-24.2-10.933-24.2-24.42z"></path></svg>
            }
          />

        </div>
      </Fade></Slide>

    </div>
  )
}

export default Hero