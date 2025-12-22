"use client";

import React, { useState, useEffect } from "react";

export function WelcomeAnimation() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Animation ko 3 seconds ke baad hide kar do
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showAnimation) return null; // Agar animation hide hai to kuch bhi render mat karo

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black text-white/70 z-50 animate-fade-out">
      <div className="relative flex flex-col items-center gap-2 font-primary">
        <div className="absolute bg-black border-b-[1.5px] border-white/10 w-[105%] top-0 h-1/2"></div>
        <p className="text-4xl w-full">AHMED MANSOUR</p>
        <p className="text-white/60">Frontend | Founder Sesha</p>
        <p className="text-white/60 text-sm">Click Here</p>
        <div className="absolute bg-black border-t-[1.5px] border-white/10 w-[105%] bottom-0 h-1/2"></div>
      </div>
    </div>
  );
}
