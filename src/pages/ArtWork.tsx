import { useState } from 'react';

// Import artwork images
import Apple from '../assets/art/Apple.png';
import Bust from '../assets/art/Bust.png';
import Clown from '../assets/art/Clown.png';
import Croatia from '../assets/art/Croatia.png';
import Duo1 from '../assets/art/Duo 1.png';
import Duo2 from '../assets/art/Duo 2.png';
import Esther from '../assets/art/Esther.png';
import Hope from '../assets/art/Hope.png';
import HopeSketch from '../assets/art/Hope Sketch.png';
import JackSketch from '../assets/art/Jack Sketch.png';
import Jack from '../assets/art/Jack.png';
import Joe from '../assets/art/Joe.png';
import Koi from '../assets/art/Koi.png';
import MechanicalWoman from '../assets/art/Mechanical Woman.png';
import Metal from '../assets/art/Metal.png';
import Prosthetic from '../assets/art/Prosthetic.png';
import Zendaya from '../assets/art/Zendaya.png';

// Artwork data
const artworkData = [
  {
    id: 1,
    title: 'Duo 2',
    medium: 'Oil',
    year: '2024',
    description: 'Second piece in the duo series.',
    image: Duo2
  },
  {
    id: 2,
    title: 'Zendaya',
    medium: 'Pencil',
    year: '2024',
    description: 'Celebrity portrait study.',
    image: Zendaya
  },
  {
    id: 3,
    title: 'Clown',
    medium: 'Colour Pencil',
    year: '2024',
    description: 'Character exploration.',
    image: Clown
  },
  {
    id: 4,
    title: 'Jack',
    medium: 'Acrylic',
    year: '2024',
    description: 'Character study.',
    image: Jack
  },
  {
    id: 5,
    title: 'Esther',
    medium: 'Acrylic',
    year: '2024',
    description: 'Character portrait study.',
    image: Esther
  },
  {
    id: 6,
    title: 'Duo 1',
    medium: 'Oil',
    year: '2024',
    description: 'First piece in the duo series.',
    image: Duo1
  },
  {
    id: 7,
    title: 'Hope Sketch',
    medium: 'Pencil',
    year: '2024',
    description: 'Self-portrait sketch study.',
    image: HopeSketch
  },
  {
    id: 8,
    title: 'Apple',
    medium: 'Acrylic',
    year: '2024',
    description: 'A study in form and color.',
    image: Apple
  },
  {
    id: 9,
    title: 'Croatia',
    medium: 'Watercolour',
    year: '2024',
    description: 'Inspired by Croatian landscapes.',
    image: Croatia
  },
  {
    id: 10,
    title: 'Hope',
    medium: 'Acrylic',
    year: '2024',
    description: 'Self-portrait exploration.',
    image: Hope
  },
  {
    id: 11,
    title: 'Jack Sketch',
    medium: 'Biro',
    year: '2024',
    description: 'Preliminary sketch work.',
    image: JackSketch
  },
  {
    id: 12,
    title: 'Joe',
    medium: 'Oil Pastel',
    year: '2024',
    description: 'Portrait study.',
    image: Joe
  },
  {
    id: 13,
    title: 'Koi',
    medium: 'Pencil and Oil Pastel',
    year: '2024',
    description: 'Aquatic life study.',
    image: Koi
  },
  {
    id: 14,
    title: 'Mechanical Woman',
    medium: 'Acrylic',
    year: '2024',
    description: 'Fusion of organic and mechanical.',
    image: MechanicalWoman
  },
  {
    id: 15,
    title: 'Metal',
    medium: 'Watercolour',
    year: '2024',
    description: 'Study in metallic textures.',
    image: Metal
  },
  {
    id: 16,
    title: 'Prosthetic',
    medium: 'Watercolour',
    year: '2024',
    description: 'Exploration of form and function.',
    image: Prosthetic
  },
  {
    id: 17,
    title: 'Bust',
    medium: 'Pencil',
    year: '2024',
    description: 'Sculptural study.',
    image: Bust
  }
];

function ArtWork() {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworkData[0] | null>(null);

  const handleClose = () => {
    window.history.back();
  };

  return (
    <div className="art-gallery-page">
      {/* Gallery Header */}
      <header className="gallery-header">
        <button className="back-button" onClick={handleClose}>
          ← Back
        </button>
        <div className="header-content">
          <h1 className="gallery-title">Art Portfolio</h1>
          <p className="gallery-subtitle">A Collection of Creative Works</p>
        </div>
      </header>

      {/* Artwork Grid */}
      <div className="artwork-grid">
        {artworkData.map((artwork) => (
          <div 
            key={artwork.id}
            className="artwork-card"
            onClick={() => setSelectedArtwork(artwork)}
          >
            <div className="artwork-image-container">
              <img 
                src={artwork.image} 
                alt={artwork.title}
                className="artwork-image"
              />
              <div className="artwork-overlay">
                <div className="overlay-content">
                  <h3>{artwork.title}</h3>
                  <p>{artwork.medium}</p>
                </div>
              </div>
            </div>
            <div className="artwork-info">
              <h3 className="artwork-title">{artwork.title}</h3>
              <p className="artwork-medium">{artwork.medium}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedArtwork && (
        <div className="lightbox" onClick={() => setSelectedArtwork(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedArtwork(null)}>
              ×
            </button>
            <div className="lightbox-image-container">
              <img 
                src={selectedArtwork.image} 
                alt={selectedArtwork.title}
                className="lightbox-image"
              />
            </div>
            <div className="lightbox-info">
              <h2>{selectedArtwork.title}</h2>
              <p className="lightbox-medium">{selectedArtwork.medium}</p>
              <p className="lightbox-description">{selectedArtwork.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="gallery-footer">
        <p className="license-text">Hope Gilbert's Musings and Research by Hope Gilbert is licensed under CC BY-ND 4.0</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lora:wght@400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        .art-gallery-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f6f3 0%, #fde9f0 50%, #f5e9e0 100%);
          position: relative;
          overflow-x: hidden;
        }

        /* Header Styles */
        .gallery-header {
          padding: 2rem 3rem;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(168, 107, 122, 0.2);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .back-button {
          background: none;
          border: none;
          color: #a86b7a;
          font-family: 'Lora', serif;
          font-size: 1rem;
          cursor: pointer;
          padding: 0.5rem 1rem;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
          border-radius: 20px;
        }

        .back-button:hover {
          background: rgba(168, 107, 122, 0.1);
          transform: translateX(-5px);
        }

        .header-content {
          text-align: center;
        }

        .gallery-title {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          font-weight: 700;
          color: #2c2c2c;
          margin: 0 0 0.5rem 0;
          letter-spacing: -1px;
        }

        .gallery-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          color: #a86b7a;
          font-style: italic;
          margin: 0;
          font-weight: 300;
        }

        /* Artwork Grid */
        .artwork-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2.5rem;
          padding: 0 3rem 4rem 3rem;
          max-width: 1600px;
          margin: 0 auto;
        }

        .artwork-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .artwork-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(168, 107, 122, 0.25);
        }

        .artwork-image-container {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4/5;
        }

        .artwork-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .artwork-card:hover .artwork-image {
          transform: scale(1.08);
        }

        .artwork-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(44, 44, 44, 0.9), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: flex-end;
          padding: 2rem;
        }

        .artwork-card:hover .artwork-overlay {
          opacity: 1;
        }

        .overlay-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          color: white;
          margin: 0 0 0.3rem 0;
          font-weight: 600;
        }

        .overlay-content p {
          font-family: 'Lora', serif;
          font-size: 0.9rem;
          color: #fde9f0;
          margin: 0;
        }

        .artwork-info {
          padding: 1.5rem;
        }

        .artwork-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          color: #2c2c2c;
          margin: 0 0 0.5rem 0;
          font-weight: 600;
        }

        .artwork-medium {
          font-family: 'Lora', serif;
          font-size: 0.95rem;
          color: #a86b7a;
          margin: 0;
          font-style: italic;
        }

        /* Lightbox Styles */
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.92);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .lightbox-content {
          background: white;
          border-radius: 16px;
          max-width: 1200px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2rem;
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .lightbox-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(168, 107, 122, 0.9);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.8rem;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        .lightbox-close:hover {
          background: #a86b7a;
          transform: rotate(90deg);
        }

        .lightbox-image-container {
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f6f3;
          border-radius: 16px 0 0 16px;
        }

        .lightbox-image {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }

        .lightbox-info {
          padding: 3rem 2rem 2rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .lightbox-info h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: #2c2c2c;
          margin: 0 0 1rem 0;
          font-weight: 700;
        }

        .lightbox-medium {
          font-family: 'Lora', serif;
          font-size: 1.1rem;
          color: #a86b7a;
          margin: 0 0 2rem 0;
          font-weight: 500;
          font-style: italic;
        }

        .lightbox-description {
          font-family: 'Lora', serif;
          font-size: 1rem;
          line-height: 1.8;
          color: #2c2c2c;
          margin: 0;
        }

        /* Footer */
        .gallery-footer {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          padding: 2rem;
          text-align: center;
          border-top: 1px solid rgba(168, 107, 122, 0.2);
          margin-top: 2rem;
        }

        .gallery-footer p {
          font-family: 'Lora', serif;
          color: #a86b7a;
          margin: 0.5rem 0;
          font-size: 0.95rem;
        }

        .license-text {
          font-size: 0.85rem !important;
          color: #666 !important;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .lightbox-content {
            grid-template-columns: 1fr;
            max-height: 85vh;
          }

          .lightbox-image-container {
            border-radius: 16px 16px 0 0;
          }

          .lightbox-info h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .gallery-header {
            padding: 1.5rem;
          }

          .gallery-title {
            font-size: 2.5rem;
          }

          .gallery-subtitle {
            font-size: 1.2rem;
          }

          .artwork-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
            padding: 0 1.5rem 3rem 1.5rem;
          }

          .category-filter {
            padding: 1.5rem 1rem;
            gap: 0.5rem;
          }

          .category-btn {
            font-size: 0.9rem;
            padding: 0.6rem 1.5rem;
          }

          .lightbox {
            padding: 1rem;
          }

          .lightbox-info {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .gallery-title {
            font-size: 2rem;
          }

          .artwork-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0 1rem 2rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ArtWork;

