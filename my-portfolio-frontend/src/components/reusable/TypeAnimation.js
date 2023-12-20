import React, {useState, useEffect, useRef} from "react";

const TypeAnimation = ({text, texts, speed}) => {
  const [currentText, setCurrentText] = useState('');
  const index = useRef(0);
  const whichText = useRef(0);

  useEffect(() => {
    whichText.current=0;
    setCurrentText('');
  }, [texts]);

  useEffect(() => {
    index.current=0;
    setCurrentText('');
  }, [text]);

  useEffect(() => {
    const timeourId = setTimeout(() => {
      setCurrentText((value) => value + text.charAt(index.current));
      index.current += 1;
    }, speed);
    return () => {
      clearTimeout(timeourId);
    };
  }, [currentText, text]);
 
  return (
    <div>
      <p>{text}{currentText}</p>
    </div>
  );
}

export default TypeAnimation;