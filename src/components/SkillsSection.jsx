import FlowingMenu from './FlowingMenu';
import './SkillsSection.css';

// React Icons
import { 
  SiPython, SiC, SiCplusplus, 
  SiPytorch, SiScikitlearn, SiTensorflow, SiKeras, SiNumpy, SiPandas, SiOpencv, 
  SiHtml5, SiTailwindcss, SiStreamlit, SiNodedotjs, SiReact, SiVite, 
  SiGit, SiGithub, SiMysql, SiDocker 
} from 'react-icons/si';

// For missing icons (Matplotlib, Whisper, Librosa), we'll use fallback generic icons or simple text
import { VscCode, VscGraphLine } from 'react-icons/vsc';
import { BiMicrophone } from 'react-icons/bi';
import { MdOutlineLibraryMusic } from 'react-icons/md';

const skillsData = [
  {
    link: '#',
    text: 'Programming Languages',
    subItems: [
      { text: 'Python', icon: <SiPython color="#3776AB" /> },
      { text: 'C', icon: <SiC color="#A8B9CC" /> },
      { text: 'C++', icon: <SiCplusplus color="#00599C" /> },
    ]
  },
  {
    link: '#',
    text: 'Machine Learning',
    subItems: [
      { text: 'PyTorch', icon: <SiPytorch color="#EE4C2C" /> },
      { text: 'Scikit-learn', icon: <SiScikitlearn color="#F7931E" /> },
      { text: 'TensorFlow', icon: <SiTensorflow color="#FF6F00" /> },
      { text: 'Keras', icon: <SiKeras color="#D00000" /> },
      { text: 'NumPy', icon: <SiNumpy color="#013243" /> },
      { text: 'Pandas', icon: <SiPandas color="#150458" /> },
      { text: 'OpenCV', icon: <SiOpencv color="#5C3EE8" /> },
      { text: 'Matplotlib', icon: <VscGraphLine color="#11557c" /> },  // fallback icon
      { text: 'Whisper', icon: <BiMicrophone color="#A020F0" /> },     // fallback icon
      { text: 'Librosa', icon: <MdOutlineLibraryMusic color="#2E8B57" /> }, // fallback icon
    ]
  },
  {
    link: '#',
    text: 'Web Development',
    subItems: [
      { text: 'HTML/CSS', icon: <SiHtml5 color="#E34F26" /> },
      { text: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
      { text: 'Streamlit', icon: <SiStreamlit color="#FF4B4B" /> },
      { text: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
      { text: 'React', icon: <SiReact color="#61DAFB" /> },
      { text: 'Vite', icon: <SiVite color="#646CFF" /> },
    ]
  },
  {
    link: '#',
    text: 'Tools & Databases',
    subItems: [
      { text: 'Git', icon: <SiGit color="#F05032" /> },
      { text: 'GitHub', icon: <SiGithub color="#181717" /> },
      { text: 'MySQL', icon: <SiMysql color="#4479A1" /> },
      { text: 'Docker', icon: <SiDocker color="#2496ED" /> },
    ]
  }
];

function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <h3 className="skills-subtitle">Technologies</h3>
        <h2 className="skills-title">Stack & Code</h2>
      </div>

      <div className="skills-menu-container">
        <FlowingMenu
          items={skillsData}
          speed={15}
          textColor="#ffffff"         // White text for default state
          bgColor="#0a0a0a"           // Matches website background
          marqueeBgColor="#ffffff"    // White background on hover
          marqueeTextColor="#060010"  // Dark font on hover
          borderColor="rgba(163, 131, 255, 0.5)" // Purple borders
        />
      </div>
    </section>
  );
}

export default SkillsSection;
