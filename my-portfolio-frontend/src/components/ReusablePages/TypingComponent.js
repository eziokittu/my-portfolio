import React, { useState } from "react";
import { TypeAnimation } from 'react-type-animation';

import {Fade} from 'react-awesome-reveal'

const TypingComponent = ({defaultText, texts, speedTyping, speedDelete}) => {
  const [inViewPort, setInViewPort] = useState(true)
  const handleComponentInViewPort = () => {
    setInViewPort(!inViewPort);
    // console.log(`Component is ${inViewPort===true ? 'entering' : 'exiting'} the viewport`);
  }

  return (
    <>
      <Fade onVisibilityChange={handleComponentInViewPort}>
        <TypeAnimation
          sequence={texts}
          wrapper="div"
          speed={{type: 'keyStrokeDelayInMs', value: speedTyping}}
          deletionSpeed={{type: 'keyStrokeDelayInMs', value: speedDelete}}
          style={{}}
          omitDeletionAnimation={false}
          repeat={Infinity}
        />
      </Fade>
    </>
  );
};

export default TypingComponent;