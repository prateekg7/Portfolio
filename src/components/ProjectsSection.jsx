import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import ProjectCard from './ProjectCard';
import './ProjectsSection.css';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Dummy Data (Matching layout aesthetics of 4.png)
const dummyProjects = [
  {
    title: 'EIE - Earthquake Impact Estimator',
    subtitle: 'IoT / Hardware',
    tools: 'Arduino, C++, IoT Sensors, Python, ML, React',
    imageUrl: null, // Will use placeholder
    isImageLeft: false // Image on right, Text on left
  },
  {
    title: 'GameKroy',
    subtitle: 'Full Stack',
    tools: 'React, Node.js, MongoDB, Express, Stripe, TailwindCSS',
    imageUrl: null,
    isImageLeft: true // Image on left, Text on right
  },
  {
    title: 'Chess Engine AI',
    subtitle: 'Machine Learning',
    tools: 'Python, C++, Neural Networks, Bitboards, PyTorch',
    imageUrl: null,
    isImageLeft: false
  },
  {
    title: 'Portfolio Website',
    subtitle: 'Frontend',
    tools: 'React, GSAP, TailwindCSS, Vite',
    imageUrl: null,
    isImageLeft: true
  }
];

function ProjectsSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    // We want the horizontal track to scroll to the left bounded by its total scrollable width
    const getScrollAmount = () => {
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      return -(trackWidth - viewportWidth);
    };

    const tween = gsap.to(trackRef.current, {
      x: getScrollAmount,
      ease: 'none'
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: () => `+=${getScrollAmount() * -1}`, // The scroll duration relates to the width to scroll
      pin: true,
      animation: tween,
      scrub: 1, // Smooth scrolling
      invalidateOnRefresh: true, // Recalculates getScrollAmount on window resize
      anticipatePin: 1
    });

    return () => {
      // Cleanup
      tween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: sectionRef });

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-header-fixed">
        <h2 className="projects-title">My Work</h2>
      </div>
      
      <div className="projects-track-container">
        <div className="projects-track" ref={trackRef}>
          {dummyProjects.map((proj, idx) => (
            <ProjectCard
              key={idx}
              number={idx + 3} // Based on the reference 4.png, standardizing numbers starting around 03
              title={proj.title}
              subtitle={proj.subtitle}
              tools={proj.tools}
              imageUrl={proj.imageUrl}
              isImageLeft={proj.isImageLeft}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
