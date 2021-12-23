import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

const data = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

interface BoxProps {
  gsapClass: string;
}

const Box = ({ gsapClass }: BoxProps) => {
  return (
    <div
      className={`
        ${gsapClass} 
        w-20 
        h-20 
        m-2.5
        rounded-3xl
        float-left
        opacity-0
        scale-50
        bg-dodgerblue
      `}
    ></div>
  );
};

const ScopedSelectorExample = () => {
  const el = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(el);
  const gsapClass = 'box';

  useEffect(
    () => {
      // The component has been rendered, so we can now select
      // descendants of the component, including descendants
      // nested inside of other components
      gsap.to(q(`.${gsapClass}`), {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div ref={el}>
      <h1>GSAP scoped selector example</h1>
      <div>
        {data.map((item) => (
          <Box key={item.id} gsapClass={gsapClass} />
        ))}
      </div>
    </div>
  );
};

export default ScopedSelectorExample;
