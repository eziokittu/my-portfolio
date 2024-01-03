import React, { useState, useEffect } from 'react';

const DelayedComponent = ({ delayToShow, delayToHide, isDelayStart, isDelayEnd, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let showTimeout;

    if (isDelayStart) {
      showTimeout = setTimeout(() => {
        setIsVisible(true);
      }, delayToShow || 1000);
    } else {
      setIsVisible(true);
    }

    if (isDelayEnd) {
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, (delayToHide || 5000) + (isDelayStart ? (delayToShow || 1000) : 0));

      return () => {
        clearTimeout(hideTimeout);
      };
    }

    return () => {
      clearTimeout(showTimeout);
    };
  }, [delayToShow, delayToHide, isDelayStart, isDelayEnd]);

  return <>{isVisible && children}</>;
};

export default DelayedComponent;
