import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Orbs */}
      <div 
        className="absolute w-64 h-64 bg-gradient-to-r from-primary/20 to-electric-blue/20 rounded-full blur-3xl animate-float"
        style={{
          top: '10%',
          left: '10%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-sky-tint/30 to-primary/20 rounded-full blur-3xl animate-float-slow"
        style={{
          top: '60%',
          right: '10%',
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
        }}
      />
      <div 
        className="absolute w-48 h-48 bg-gradient-to-r from-electric-blue/25 to-sky-tint/25 rounded-full blur-2xl animate-morph"
        style={{
          top: '30%',
          right: '30%',
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
        }}
      />
      
      {/* Geometric Shapes */}
      <div 
        className="absolute w-8 h-8 bg-primary/30 rotate-45 animate-rotate-slow"
        style={{
          top: '20%',
          right: '20%',
          transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) rotate(45deg)`,
        }}
      />
      <div 
        className="absolute w-6 h-6 bg-electric-blue/40 rounded-full animate-bounce"
        style={{
          top: '70%',
          left: '20%',
          animationDelay: '1s',
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
        }}
      />
      <div 
        className="absolute w-4 h-4 bg-sky-tint/50 animate-pulse"
        style={{
          top: '40%',
          left: '80%',
          animationDelay: '2s',
          transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px)`,
        }}
      />
    </div>
  );
};

export default FloatingElements;