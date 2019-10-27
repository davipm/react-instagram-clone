import { useState, useEffect } from 'react';

export default function useScrollTop(value) {
  const [state, setState] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', scrollUpdate);
    return () => window.removeEventListener('scroll', scrollUpdate);
  });

  const scrollUpdate = () => {
    setState(window.scrollY > value);
  };

  return state;
}
