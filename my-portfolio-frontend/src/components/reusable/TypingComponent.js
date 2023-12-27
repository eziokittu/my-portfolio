import React from "react";
import { TypeAnimation } from 'react-type-animation';

const TypingComponent = ({texts, speedTyping, speedDelete}) => {
  return (
    <>
      <TypeAnimation
        sequence={texts}
        wrapper="span"
        speed={{type: 'keyStrokeDelayInMs', value: speedTyping}}
        deletionSpeed={{type: 'keyStrokeDelayInMs', value: speedDelete}}
        style={{}}
        omitDeletionAnimation={false}
        repeat={Infinity}
      />
    </>
  );
};

export default TypingComponent;
