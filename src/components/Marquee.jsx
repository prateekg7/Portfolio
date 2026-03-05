import './Marquee.css';

const SEPARATOR = ' \u2727 ';
const TEXT = 'What you Give comes Back to You';

function Marquee() {
  // Repeat text enough times for seamless loop
  const content = Array(8).fill(`${TEXT}${SEPARATOR}`).join('');

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        <span className="marquee-content">{content}</span>
        <span className="marquee-content" aria-hidden="true">{content}</span>
      </div>
    </div>
  );
}

export default Marquee;
