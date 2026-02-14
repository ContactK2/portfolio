import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>(
  threshold: number = 0.15
): React.RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          el.querySelectorAll('.fade-up, .slide-left, .fade-in').forEach(
            (child) => child.classList.add('visible')
          );
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
