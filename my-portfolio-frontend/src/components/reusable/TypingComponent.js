import React from "react";
import { TypeAnimation } from 'react-type-animation';
import classNames from 'classnames';

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
