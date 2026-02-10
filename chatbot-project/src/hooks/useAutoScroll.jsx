import React, { useRef, useEffect } from 'react';

function useAutoScroll(dependency) {
  const elementRef = useRef(null);

  useEffect(() => {
    const containerElem = elementRef.current;

    // change the scroll height 
    // when the element is out of the viewport
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }

  }, [dependency]);

  return elementRef;
}

export default useAutoScroll;