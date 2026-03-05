import RotatingText from './RotatingText';
import IconCloud from './IconCloud';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section" id="about">
      {/* ── Top Purple Bar ── */}
      <div className="about-bar">
        <span className="about-bar__label">
          {'< '}
          <span className="about-bar__white">About</span>{' '}
          <span className="about-bar__purple">Me</span>
          {' >'}
        </span>
        <span className="about-bar__line" />
      </div>

      {/* ── About Content ── */}
      <div className="about-content">
        {/* Left — Icon Cloud */}
        <div className="about-content__cloud">
          <IconCloud />
        </div>

        {/* Vertical Purple Bar Separator */}
        <div className="about-content__divider">
          <img src="/resources/verticalpurplebar2.png" alt="" aria-hidden="true" />
        </div>

        {/* Right — Text */}
        <div className="about-content__text">
          <h2 className="about-title">
            <span className="about-title__main">Designing Systems</span>
            <br />
            <span className="about-title__main">that </span>
            <span className="about-title__rotating">
              <RotatingText
                texts={['think', 'learn', 'adapt', 'create']}
                mainClassName="rotating-box"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="split"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </h2>

          <p className="about-body">
            I build intelligent systems at the intersection of computation and
            real-world impact. From modeling personalized drug administration
            using pharmacokinetics to developing smart LLM-driven solutions, my
            work blends mathematical rigor with practical innovation. I'm driven
            by problems that demand both precision and creativity.
          </p>
        </div>
      </div>

      {/* ── Bottom Purple Bar ── */}
      <div className="about-bar about-bar--end">
        <span className="about-bar__line" />
        <span className="about-bar__label">
          {'< /'}
          <span className="about-bar__white">About</span>{' '}
          <span className="about-bar__purple">Me</span>
          {' >'}
        </span>
      </div>
    </section>
  );
}

export default AboutSection;
