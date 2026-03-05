import PixelBlast from './components/PixelBlast';
import Shuffle from './components/Shuffle';
import TextType from './components/TextType';
import './App.css';

function App() {
  return (
    <div className="hero-section">
      {/* ── Navbar ── */}
      <nav className="navbar" id="navbar">
        <div className="navbar__logo">Prateek</div>
        <ul className="navbar__links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
        <div className="navbar__icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="/icons/github.png" alt="GitHub" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="mailto:hello@example.com" aria-label="Email">
            <img src="/icons/mail.png" alt="Email" />
          </a>
        </div>
      </nav>

      {/* ── PixelBlast Background ── */}
      <div className="hero-bg">
        <PixelBlast
          variant="circle"
          pixelSize={4}
          color="#B19EEF"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples={true}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          speed={0.5}
          edgeFade={0.25}
          transparent={true}
        />
      </div>

      {/* ── Hero Photo (B/W → Color on Hover) ── */}
      <div className="hero-photo" id="hero-photo">
        <img
          src="/resources/herophoto-bw.png"
          alt=""
          className="hero-photo__bw"
          aria-hidden="true"
        />
        <img
          src="/resources/herophoto.png"
          alt="Prateek Gupta"
          className="hero-photo__color"
        />
      </div>

      {/* ── Hero Text Content ── */}
      <div className="hero-content">
        <p className="hero-hi">Hi, I'm</p>

        <div className="hero-name">
          <Shuffle
            text="PRATEEK"
            tag="h1"
            className="hero-name__line"
            shuffleDirection="right"
            duration={0.35}
            stagger={0.03}
            shuffleTimes={1}
            animationMode="evenodd"
            triggerOnHover={true}
            triggerOnce={true}
            textAlign="left"
            style={{ fontFamily: "'HeroFont', sans-serif" }}
          />
          <Shuffle
            text="GUPTA"
            tag="h1"
            className="hero-name__line"
            shuffleDirection="right"
            duration={0.35}
            stagger={0.03}
            shuffleTimes={1}
            animationMode="evenodd"
            triggerOnHover={true}
            triggerOnce={true}
            textAlign="left"
            style={{ fontFamily: "'HeroFont', sans-serif" }}
          />
        </div>
      </div>

      {/* ── Software Engineer TextType ── */}
      <div className="hero-role">
        <TextType
          text={["Software Engineer"]}
          typingSpeed={75}
          pauseDuration={2000}
          showCursor={true}
          cursorCharacter="_"
          deletingSpeed={50}
          loop={true}
          className="hero-role__text"
        />
      </div>

      {/* ── Scroll Down ── */}
      <div className="hero-scroll" id="scroll-down">
        <span className="hero-scroll__line"></span>
        <span className="hero-scroll__text">Scroll down</span>
        <span className="hero-scroll__line hero-scroll__line--bottom"></span>
      </div>
    </div>
  );
}

export default App;
