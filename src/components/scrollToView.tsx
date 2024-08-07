"use client";

import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

type ScrollToViewProps = {
  children: React.ReactNode;
};

const ScrollToView = ({children}: ScrollToViewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = Array.from(containerRef.current.children);

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          {y: 0, opacity: 0}, // Start position 100px above and invisible
          {
            y: 0,
            opacity: 1,
            ease: "power3.inOut",
            duration: 0.75,
            scrollTrigger: {
              trigger: element,
              start: "top 90%", // Animation starts when top of the element is at 90% of viewport height
              end: "top =+10", // Animation ends when the top of the element reaches the top of the viewport
              toggleActions: "play none none none", // Ensure no automatic toggle
              onEnter: () => {
                gsap.to(element, {y: 0, opacity: 1, duration: 0.75});
              },
              onLeave: () => {
                gsap.to(element, {y: 0, opacity: 0, duration: 0.75});
              },
              onEnterBack: () => {
                gsap.to(element, {y: 0, opacity: 1, duration: 0.75});
              },
              onLeaveBack: () => {
                gsap.to(element, {y: 0, opacity: 0, duration: 0.75});
              },
            },
          }
        );
      });
    }
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollToView;
