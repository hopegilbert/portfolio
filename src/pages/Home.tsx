import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import dressUpFrame from '../assets/home-frames/dress-up-frame.png';
import paintingFrame from '../assets/home-frames/painting-frame.png';
import homeBackground from '../assets/home-background.png';
import titleFrame from '../assets/home-frames/title-frame.png';

function Home() {
  useEffect(() => {
    const grid = document.querySelector('.masonry-grid');
    const gridItems = document.querySelectorAll('.grid-item');

    if (!grid) return;

    // Lazy-load observer for fade-in effect
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    gridItems.forEach(item => observer.observe(item));

    // Wait until images are loaded, then initialize Masonry
    imagesLoaded(grid, () => {
      new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        gutter: 16,
        percentPosition: true,
        transitionDuration: '0.3s'
      });
    });

    return () => {
      gridItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="min-h-screen" style={{
      backgroundImage: `url(${homeBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>

      {/* Title Frame */}
      <div className="title-frame">
        <div className="title-image-frame" style={{
          backgroundImage: `url(${titleFrame})`,
          backgroundSize: '100% 92%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <h1>Hope Gilbert</h1>
        </div>
      </div>

      {/* Subtitle */}
      <div className="subtitle-frame">
        <p className="subtitle">
          A curated collection of creative works, ideas, and projects across multiple disciplines.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="masonry-grid">
        
        {/* Play Dress Up - Large */}
        <div className="grid-item">
          <div className="image-wrapper">
            <img 
              src={dressUpFrame} 
              alt="Play Dress Up"
            />
            <Link to="/play-dress-up" className="hover-button">Play Dress Up!</Link>
          </div>
        </div>

        {/* Intelligence Hub */}
        <div className="grid-item">
          <div className="image-wrapper">
            <img 
              src="https://via.placeholder.com/530x586/b8a892/5a4a3a?text=Intelligence" 
              alt="Intelligence Hub"
            />
            <Link to="/intelligence-hub" className="hover-button">Intelligence Hub</Link>
          </div>
        </div>

        {/* Art Work */}
        <div className="grid-item">
          <div className="image-wrapper">
            <img 
              src={paintingFrame} 
              alt="Art Work"
            />
            <Link to="/art-work" className="hover-button">View Art!</Link>
          </div>
        </div>

        {/* Video Editing */}
        <div className="grid-item">
          <div className="image-wrapper">
            <img 
              src="https://via.placeholder.com/536x714/c4b5a2/7a6a5a?text=Video" 
              alt="Video Editing"
            />
            <div className="hover-text">Video production and editing projects</div>
          </div>
        </div>

        {/* Info Card 1 */}
        <div className="grid-item">
          <img 
            src="https://via.placeholder.com/530x586/e8d5b7/a89277?text=" 
            alt="frame"
          />
          <div className="overlay-content">
            <h2>Welcome</h2>
            <p>Explore my creative journey across multiple disciplines. Click any frame to dive deeper.</p>
          </div>
        </div>

        {/* Movies */}
        <div className="grid-item">
          <div className="image-wrapper">
            <img 
              src="https://via.placeholder.com/575x610/d4c5aa/8b7355?text=Movies" 
              alt="Movies"
            />
            <Link to="/movies" className="hover-button">View Movies</Link>
          </div>
        </div>

        {/* Apps */}
        <div className="grid-item">
          <div className="image-wrapper">
            <img 
              src="https://via.placeholder.com/633x542/b8a892/5a4a3a?text=Apps" 
              alt="Apps"
            />
            <Link to="/apps" className="hover-button">View Apps</Link>
          </div>
        </div>

        {/* Document Design */}
        <div className="grid-item">
          <div className="image-wrapper">
            <img 
              src="https://via.placeholder.com/504x584/c4b5a2/7a6a5a?text=Documents" 
              alt="Document Design"
            />
            <div className="hover-text">Professional document and layout design</div>
          </div>
        </div>

        {/* Social Media */}
        <div className="grid-item">
          <div className="image-wrapper">
            <img 
              src="https://via.placeholder.com/450x782/d4c5aa/8b7355?text=Social" 
              alt="Social Media"
            />
            <Link to="/social-media" className="hover-button">Social Media</Link>
          </div>
        </div>

        {/* Info Card 2 */}
        <div className="grid-item">
          <img 
            src="https://via.placeholder.com/530x586/e8d5b7/a89277?text=" 
            alt="frame"
          />
          <div className="overlay-content">
            <h2>About This Portfolio</h2>
            <p>A digital museum of my work, ever-evolving and always growing.</p>
          </div>
        </div>

        {/* Platforms */}
        <div className="grid-item">
          <div className="image-wrapper">
            <img 
              src="https://via.placeholder.com/615x703/b8a892/5a4a3a?text=Platforms" 
              alt="Platforms"
            />
            <div className="hover-text">Platform development and management</div>
          </div>
        </div>

        {/* Video Editing page link */}
        <div className="grid-item">
          <div className="image-wrapper">
            <img 
              src="https://via.placeholder.com/499x665/c4b5a2/7a6a5a?text=More" 
              alt="Video Editing"
            />
            <Link to="/video-editing" className="hover-button">Video Editing</Link>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="footer-frame">
        <footer>
          <p>More to come... this museum is ever-evolving.</p>
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Lora:wght@400;500;600;700&family=Cinzel:wght@400;500;600;700&display=swap');

        html {
          scroll-behavior: smooth;
        }

        .title-frame {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
          padding-top: 3rem;
        }

        .title-image-frame {
          width: 100%;
          max-width: 2000px;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 3rem;
        }

        .title-image-frame h1 {
          font-family: 'Cinzel', serif;
          font-size: 4rem;
          color: #a86b7a;
          margin: 0;
          padding: 0 2rem;
          text-align: center;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .subtitle-frame {
          backdrop-filter: blur(9px);
          background-color: rgba(253, 233, 240, 0.2);
          padding: 1.5rem 2rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 1200px;
          margin: 2rem auto;
          position: relative;
          z-index: 1;
        }

        .subtitle {
          font-size: 1.5rem;
          font-weight: bold;
          color: #a86b7a;
          margin: 0;
          font-family: 'Lora', serif;
          text-align: center;
        }

        .masonry-grid {
          max-width: 100%;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .grid-item {
          width: calc(25% - 12px);
          margin-bottom: 1rem;
          position: relative;
          opacity: 0;
          transition: opacity 0.6s ease-out;
        }

        .grid-item.visible {
          opacity: 1;
        }

        .grid-item img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
        }

        .image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          cursor: pointer;
          overflow: hidden;
          border-radius: 8px;
        }

        .image-wrapper img {
          display: block;
          width: 100%;
          height: auto;
          transition: all 0.3s ease;
        }

        .image-wrapper:hover img {
          filter: brightness(0.3);
        }

        .hover-text {
          opacity: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: transparent;
          color: #fde9f0;
          padding: 1rem;
          text-align: center;
          font-family: 'Lora', serif;
          font-size: 1rem;
          transition: all 0.3s ease;
          z-index: 2;
          pointer-events: none;
          width: 70%;
        }

        .image-wrapper:hover .hover-text {
          opacity: 1;
        }

        .hover-button {
          opacity: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fde9f0;
          color: #a86b7a;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 25px;
          font-family: 'Lora', serif;
          font-size: 1rem;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          z-index: 3;
          cursor: pointer;
        }

        .image-wrapper:hover .hover-button {
          opacity: 1;
          transform: translate(-50%, -52%);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        .hover-button:hover {
          background-color: #f5c9e0;
        }

        .overlay-content {
          position: absolute;
          top: 0;
          left: 15%;
          right: 15%;
          bottom: 0;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-family: 'Lora', serif;
          color: #a86b7a;
          z-index: 2;
        }

        .overlay-content h2 {
          font-family: 'Lora', serif;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #a86b7a;
          font-weight: 600;
        }

        .overlay-content p {
          color: #a86b7a;
          font-size: 1rem;
          line-height: 1.5;
        }

        .footer-frame {
          backdrop-filter: blur(9px);
          background-color: rgba(253, 233, 240, 0.2);
          padding: 1.5rem 2rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 1200px;
          margin: 4rem auto 2rem;
          position: relative;
          z-index: 1;
        }

        footer p {
          margin: 0;
          color: #a86b7a;
          font-weight: bold;
          font-family: 'Lora', serif;
          font-size: 1.1rem;
          line-height: 1;
        }

        @media (max-width: 1024px) {
          .grid-item {
            width: calc(33.333% - 11px);
          }
        }

        @media (max-width: 768px) {
          .masonry-grid {
            padding: 0 0.5rem;
          }

          .grid-item {
            width: calc(50% - 8px);
          }

          .title-image-frame h1 {
            font-size: 2rem;
            padding: 0 1rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .hover-text {
            font-size: 0.8rem;
            width: 80%;
          }

          .hover-button {
            font-size: 0.8rem;
            padding: 0.5rem 1rem;
          }

          .overlay-content h2 {
            font-size: 1rem;
          }

          .overlay-content p {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .grid-item {
            width: 100%;
          }

          .title-image-frame {
            padding: 2rem 1rem;
          }

          .title-image-frame h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
