import DomeGallery from './DomeGallery';
import './GallerySection.css';

const galleryImages = [
  '/gallery/1000054963.jpg',
  '/gallery/IMG-20241229-WA0260.jpg',
  '/gallery/IMG-20241229-WA0290.jpg',
  '/gallery/IMG-20241229-WA0310.jpg',
  '/gallery/IMG-20241229-WA0433.jpg',
  '/gallery/IMG-20241229-WA0495.jpg',
  '/gallery/IMG-20251003-WA0050-EDIT.jpg',
  '/gallery/IMG-20251004-WA0025.jpg',
  '/gallery/IMG-20251004-WA0027.jpg',
  '/gallery/IMG_20240821_175335555_HDR.jpg',
  '/gallery/IMG_20250320_100908963.jpg',
  '/gallery/IMG_20250321_183103801.jpg',
  '/gallery/IMG_20250410_145239911-EDIT.jpg',
  '/gallery/IMG_20250414_222024567.jpg',
  '/gallery/IMG_20250414_222440106.jpg',
  '/gallery/IMG_20250414_223146878.jpg',
  '/gallery/IMG_20250414_223656100~2.jpg',
  '/gallery/IMG_20250527_175934839_HDR.jpg',
  '/gallery/IMG_20250627_195434058.jpg',
  '/gallery/IMG_20251004_103131844_HDR.jpg',
  '/gallery/IMG_20251004_103426048_HDR~2.jpg',
  '/gallery/IMG_20251004_110648263_HDR~2.jpg',
  '/gallery/IMG_20251101_140101398~2.jpg',
  '/gallery/IMG_20251102_105324938.jpg',
  '/gallery/IMG_2357.jpg',
  '/gallery/IMG_5334.jpg',
  '/gallery/IMG_5336.jpg' // Optimized from HEIC
];

function GallerySection() {
  return (
    <section className="gallery-section" id="gallery">
      {/* Absolute positioned title floating over the top left of the gallery */}
      <div className="gallery-title-container">
        <h2 className="gallery-title">
          <span className="gallery-title-text">
            I <span className="gallery-title-like">like</span> to
          </span>
          <span className="gallery-title-accent">Click</span>
        </h2>
      </div>

      <div className="gallery-wrapper">
        <DomeGallery
          images={galleryImages}
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={7}
          segments={34}
          dragDampening={3.5}
          grayscale={false}
        />
      </div>
    </section>
  );
}

export default GallerySection;
