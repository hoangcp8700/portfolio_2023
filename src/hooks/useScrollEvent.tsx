import { useState, useEffect, useCallback } from 'react';

type ScrollState = {
  lastScrollTop: number;
  bodyOffset: DOMRect;
  scrollY: number;
  scrollX: number;
  scrollDirection?: 'down' | 'up';
};

const useScrollEvent = () => {
  const [state, setState] = useState<ScrollState>({
    lastScrollTop: 0,
    bodyOffset: document.body.getBoundingClientRect(),
    scrollY: document.body.getBoundingClientRect().top,
    scrollX: document.body.getBoundingClientRect().left,
    scrollDirection: undefined,
  });

  const handleScrollEvent = useCallback(() => {
    setState((prevState) => {
      const prevLastScrollTop = prevState.lastScrollTop;
      const bodyOffset = document.body.getBoundingClientRect();

      return {
        lastScrollTop: -bodyOffset.top,
        bodyOffset,
        scrollY: -bodyOffset.top,
        scrollX: bodyOffset.left,
        scrollDirection: prevLastScrollTop > -bodyOffset.top ? 'down' : 'up',
      };
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [handleScrollEvent]);

  return state;
};

export default useScrollEvent;
