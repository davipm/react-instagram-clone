import { useState, useEffect } from 'react';

export default function useScrollTop(value) {
  const [state, setState] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', scrollUpdate);
    return () => window.removeEventListener('scroll', scrollUpdate);
  }, []);

  const scrollUpdate = () => {
    if (window.scrollY > value) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return state;
}
