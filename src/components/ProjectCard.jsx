import './ProjectCard.css';

function ProjectCard({ number, title, subtitle, tools, imageUrl, isImageLeft = true }) {
  // Format the project number (e.g., 3 -> "03")
  const formattedNumber = number.toString().padStart(2, '0');

  // Alternating layout strategy based on 'isImageLeft' prop
  const contentOrder = isImageLeft ? 2 : 1;
  const imageOrder = isImageLeft ? 1 : 2;

  // Split tools into an array if passed as a string
  const toolList = Array.isArray(tools) ? tools : tools.split(', ');

  return (
    <div className="project-card">
      {/* ── Text Content ── */}
      <div className="project-card__content" style={{ order: contentOrder }}>
        <div className="project-card__header">
          <span className="project-card__number">{formattedNumber}</span>
          <div className="project-card__titles">
            <h3 className="project-card__title">{title}</h3>
            {subtitle && <span className="project-card__subtitle">{subtitle}</span>}
          </div>
        </div>

        <div className="project-card__details">
          <h4 className="project-card__details-heading">Tools and features</h4>
          <p className="project-card__tools">{toolList.join(', ')}</p>
        </div>
      </div>

      {/* ── Image Content ── */}
      <div className="project-card__media" style={{ order: imageOrder }}>
        {imageUrl ? (
          <div className="project-card__image-container">
            {/* The image container might have interesting styling/glow effects via CSS */}
            <img src={imageUrl} alt={title} className="project-card__img" />
          </div>
        ) : (
          <div className="project-card__media-placeholder">
            <span>[ Project Image ]</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
