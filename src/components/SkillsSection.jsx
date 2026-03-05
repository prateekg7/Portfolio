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
      { text: 'Python', icon: <SiPython /> },
      { text: 'C', icon: <SiC /> },
      { text: 'C++', icon: <SiCplusplus /> },
    ]
  },
  {
    link: '#',
    text: 'Machine Learning',
    subItems: [
      { text: 'PyTorch', icon: <SiPytorch /> },
      { text: 'Scikit-learn', icon: <SiScikitlearn /> },
      { text: 'TensorFlow', icon: <SiTensorflow /> },
      { text: 'Keras', icon: <SiKeras /> },
      { text: 'NumPy', icon: <SiNumpy /> },
      { text: 'Pandas', icon: <SiPandas /> },
      { text: 'OpenCV', icon: <SiOpencv /> },
      { text: 'Matplotlib', icon: <VscGraphLine /> },  // fallback icon
      { text: 'Whisper', icon: <BiMicrophone /> },     // fallback icon
      { text: 'Librosa', icon: <MdOutlineLibraryMusic /> }, // fallback icon
    ]
  },
  {
    link: '#',
    text: 'Web Development',
    subItems: [
      { text: 'HTML/CSS', icon: <SiHtml5 /> },
      { text: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { text: 'Streamlit', icon: <SiStreamlit /> },
      { text: 'Node.js', icon: <SiNodedotjs /> },
      { text: 'React', icon: <SiReact /> },
      { text: 'Vite', icon: <SiVite /> },
    ]
  },
  {
    link: '#',
    text: 'Tools & Databases',
    subItems: [
      { text: 'Git', icon: <SiGit /> },
      { text: 'GitHub', icon: <SiGithub /> },
      { text: 'MySQL', icon: <SiMysql /> },
      { text: 'Docker', icon: <SiDocker /> },
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
