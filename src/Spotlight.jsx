import React, { useState, useEffect } from 'react';

const SpotlightEffect = () => {
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="foco" 
        style={{ left: pos.x - 75 + 'px', top: pos.y - 150 + 'px', opacity: 0.6 }}
      />
      <div 
        className="foco" 
        style={{ left: pos.x + 100 + 'px', top: pos.y - 100 + 'px', opacity: 0.4 }}
      />
      <style>{`
        .foco {
          position: fixed;
          width: 150px;
          height: 150px;
          pointer-events: none;
          z-index: 1000;
        }
        .foco::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 75px solid transparent;
          border-right: 75px solid transparent;
          border-top: 150px solid rgba(255, 255, 210, 0.5);
          filter: blur(20px);
          border-radius: 0 0 50% 50%;
        }
      `}</style>
    </>
  );
};

export default SpotlightEffect;
