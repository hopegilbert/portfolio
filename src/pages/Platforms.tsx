import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import app icons
import photoshopIcon from '../assets/app-icons/photoshop.png';
import illustratorIcon from '../assets/app-icons/illustrator.png';
import premiereProIcon from '../assets/app-icons/premiere-pro.png';
import indesignIcon from '../assets/app-icons/indesign.png';
import procreateIcon from '../assets/app-icons/procreate.png';
import canvaIcon from '../assets/app-icons/canva.png';
import capcutIcon from '../assets/app-icons/capcut.png';
import microsoftIcon from '../assets/app-icons/microsoft.png';
import wordpressIcon from '../assets/app-icons/wordpress.png';
import githubIcon from '../assets/app-icons/github.png';
import xcodeIcon from '../assets/app-icons/xcode.png';

// Platform/Tool data
const platforms = [
  {
    id: 1,
    name: 'Photoshop',
    iconImage: photoshopIcon,
    color: '#31A8FF',
    category: 'Creative Cloud',
    experience: 'Advanced',
    yearsUsed: '4+ years',
    description: 'Industry-standard image editing and digital art software.',
    usage: 'My primary tool for photo editing, digital art, and creating complex compositions.',
    skills: ['Photo Editing', 'Digital Art', 'Compositing', 'Retouching']
  },
  {
    id: 2,
    name: 'Illustrator',
    iconImage: illustratorIcon,
    color: '#FF9A00',
    category: 'Creative Cloud',
    experience: 'Advanced',
    yearsUsed: '3+ years',
    description: 'Vector graphics editor for logos and illustrations.',
    usage: 'Creating logos, icons, and scalable vector artwork for branding projects.',
    skills: ['Vector Design', 'Logo Design', 'Illustrations', 'Typography']
  },
  {
    id: 3,
    name: 'Premiere Pro',
    iconImage: premiereProIcon,
    color: '#9999FF',
    category: 'Creative Cloud',
    experience: 'Advanced',
    yearsUsed: '3+ years',
    description: 'Professional video editing software.',
    usage: 'My go-to for editing videos, creating social media content, and film projects.',
    skills: ['Video Editing', 'Color Grading', 'Audio Mixing', 'Motion Graphics']
  },
  {
    id: 4,
    name: 'InDesign',
    iconImage: indesignIcon,
    color: '#FF3366',
    category: 'Creative Cloud',
    experience: 'Intermediate',
    yearsUsed: '2+ years',
    description: 'Layout design for print and digital publishing.',
    usage: 'Designing magazines, brochures, and multi-page documents.',
    skills: ['Layout Design', 'Typography', 'Print Design', 'Publishing']
  },
  {
    id: 5,
    name: 'Procreate',
    iconImage: procreateIcon,
    color: '#FF6B6B',
    category: 'Art',
    experience: 'Expert',
    yearsUsed: '3+ years',
    description: 'Digital illustration app for iPad.',
    usage: 'My favorite tool for digital painting, sketching, and illustration on iPad.',
    skills: ['Digital Painting', 'Illustration', 'Sketching', 'Concept Art']
  },
  {
    id: 6,
    name: 'Canva',
    iconImage: canvaIcon,
    color: '#00C4CC',
    category: 'Design',
    experience: 'Expert',
    yearsUsed: '3+ years',
    description: 'Quick graphic design platform for social media and marketing.',
    usage: 'Perfect for quick social media graphics, presentations, and marketing materials.',
    skills: ['Social Media Design', 'Templates', 'Branding', 'Marketing']
  },
  {
    id: 7,
    name: 'CapCut',
    iconImage: capcutIcon,
    color: '#000000',
    category: 'Video',
    experience: 'Advanced',
    yearsUsed: '2+ years',
    description: 'Mobile video editing app for social media.',
    usage: 'Quick video editing for TikTok, Instagram Reels, and short-form content.',
    skills: ['Short-Form Video', 'Social Media', 'Transitions', 'Effects']
  },
  {
    id: 8,
    name: 'Office 365',
    iconImage: microsoftIcon,
    color: '#D83B01',
    category: 'Productivity',
    experience: 'Expert',
    yearsUsed: '5+ years',
    description: 'Microsoft Office suite for documents and productivity.',
    usage: 'Essential for documents, spreadsheets, presentations, and professional communication.',
    skills: ['Word Processing', 'Spreadsheets', 'Presentations', 'Collaboration']
  },
  {
    id: 9,
    name: 'WordPress',
    iconImage: wordpressIcon,
    color: '#21759B',
    category: 'Web',
    experience: 'Intermediate',
    yearsUsed: '2+ years',
    description: 'Content management system for websites.',
    usage: 'Building and managing websites, blogs, and online portfolios.',
    skills: ['CMS', 'Web Design', 'Blogging', 'SEO']
  },
  {
    id: 10,
    name: 'GitHub',
    iconImage: githubIcon,
    color: '#181717',
    category: 'Development',
    experience: 'Intermediate',
    yearsUsed: '2+ years',
    description: 'Version control and collaboration platform.',
    usage: 'Managing code repositories, version control, and collaborating on projects.',
    skills: ['Version Control', 'Git', 'Collaboration', 'Open Source']
  },
  {
    id: 11,
    name: 'Xcode',
    iconImage: xcodeIcon,
    color: '#147EFB',
    category: 'Development',
    experience: 'Beginner',
    yearsUsed: '1 year',
    description: 'Apple\'s IDE for iOS and macOS development.',
    usage: 'Learning iOS app development and Swift programming.',
    skills: ['iOS Development', 'Swift', 'App Design', 'Interface Builder']
  }
];

function Platforms() {
  const [selectedPlatform, setSelectedPlatform] = useState<typeof platforms[0] | null>(null);

  return (
    <div className="platforms-screen">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-left">
          <span className="time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <div className="status-right">
          <span className="wifi">📶</span>
          <span className="battery">🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="screen-header">
        <Link to="/" className="back-btn">← Back</Link>
        <h1 className="screen-title">My Platforms & Tools</h1>
        <p className="screen-subtitle">Creative software I use daily</p>
      </div>

      {/* App Grid */}
      <div className="app-grid">
        {platforms.map((platform) => (
          <div
            key={platform.id}
            className="app-icon"
            onClick={() => setSelectedPlatform(platform)}
            style={{ '--app-color': platform.color } as React.CSSProperties}
          >
            <div className="icon-bg">
              <img src={platform.iconImage} alt={platform.name} className="icon-image" />
            </div>
            <span className="app-name">{platform.name}</span>
          </div>
        ))}
      </div>

      {/* App Modal */}
      {selectedPlatform && (
        <div className="app-modal-overlay" onClick={() => setSelectedPlatform(null)}>
          <div className="app-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPlatform(null)}>×</button>
            
            <div className="modal-header" style={{ background: selectedPlatform.color }}>
              <div className="modal-icon">
                <img src={selectedPlatform.iconImage} alt={selectedPlatform.name} className="modal-icon-image" />
              </div>
              <h2 className="modal-title">{selectedPlatform.name}</h2>
              <p className="modal-category">{selectedPlatform.category}</p>
            </div>

            <div className="modal-content">
              <div className="modal-section">
                <div className="experience-badges">
                  <span className="badge experience">{selectedPlatform.experience}</span>
                  <span className="badge years">{selectedPlatform.yearsUsed}</span>
                </div>
              </div>

              <div className="modal-section">
                <h3>About</h3>
                <p>{selectedPlatform.description}</p>
              </div>

              <div className="modal-section">
                <h3>How I Use It</h3>
                <p>{selectedPlatform.usage}</p>
              </div>

              <div className="modal-section">
                <h3>Skills</h3>
                <div className="skills-grid">
                  {selectedPlatform.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="platforms-footer">
        <p className="license-text">Hope Gilbert's Musings and Research by Hope Gilbert is licensed under CC BY-ND 4.0</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .platforms-screen {
          min-height: 100vh;
          background: #0a0a0a;
          display: flex;
          flex-direction: column;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .platforms-screen::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 15% 20%, rgba(168, 107, 122, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 85% 80%, rgba(245, 201, 224, 0.1) 0%, transparent 40%),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(168, 107, 122, 0.03) 2px,
              rgba(168, 107, 122, 0.03) 4px
            );
          pointer-events: none;
        }

        /* Status Bar */
        .status-bar {
          background: rgba(20, 20, 20, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 0.5rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: #a86b7a;
          border-bottom: 1px solid rgba(168, 107, 122, 0.2);
          position: relative;
          z-index: 1;
          font-family: 'JetBrains Mono', monospace;
        }

        .status-left, .status-right {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .time {
          font-weight: 600;
          color: #fde9f0;
        }

        /* Header */
        .screen-header {
          padding: 2.5rem 2rem 2rem 2rem;
          text-align: center;
          position: relative;
          z-index: 100;
          border-bottom: 1px solid rgba(168, 107, 122, 0.1);
          background: linear-gradient(180deg, rgba(20, 20, 20, 0.5) 0%, transparent 100%);
        }

        .back-btn {
          position: absolute;
          left: 2rem;
          top: 2.5rem;
          background: rgba(168, 107, 122, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #fde9f0;
          border: 1px solid rgba(168, 107, 122, 0.3);
          padding: 0.5rem 1.25rem;
          border-radius: 6px;
          cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(168, 107, 122, 0.1);
          text-decoration: none;
          display: inline-block;
          z-index: 101;
        }

        .back-btn:hover {
          background: rgba(168, 107, 122, 0.2);
          border-color: #a86b7a;
          box-shadow: 0 0 30px rgba(168, 107, 122, 0.3);
          transform: translateX(-3px);
        }

        .screen-title {
          font-family: 'Inter', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #fde9f0;
          margin: 0 0 0.5rem 0;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 0 30px rgba(253, 233, 240, 0.3);
        }

        .screen-subtitle {
          font-size: 1rem;
          color: #a86b7a;
          margin: 0;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-weight: 500;
        }

        /* App Grid */
        .app-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 3rem 2rem;
          padding: 3rem 3rem 2rem 3rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .app-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .app-icon:hover {
          transform: translateY(-8px);
        }

        .icon-bg {
          width: 100px;
          height: 100px;
          background: transparent;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 8px 24px rgba(0, 0, 0, 0.4),
            0 0 40px var(--app-color, rgba(168, 107, 122, 0.2));
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .app-icon:hover .icon-bg {
          transform: scale(1.1);
          box-shadow: 
            0 12px 32px rgba(0, 0, 0, 0.5),
            0 0 60px var(--app-color, rgba(168, 107, 122, 0.4)),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .app-icon:active .icon-bg {
          transform: scale(0.95);
        }

        .icon-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: relative;
          z-index: 1;
        }

        .app-name {
          font-size: 0.9rem;
          color: #fde9f0;
          font-weight: 500;
          text-align: center;
          line-height: 1.2;
          max-width: 110px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        /* App Modal */
        .app-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .app-modal {
          background: white;
          border-radius: 24px;
          max-width: 600px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
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

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: white;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
          line-height: 1;
        }

        .modal-close:hover {
          background: rgba(0, 0, 0, 0.7);
          transform: rotate(90deg);
        }

        .modal-header {
          padding: 3rem 2rem 2rem 2rem;
          text-align: center;
          color: white;
          border-radius: 24px 24px 0 0;
          position: relative;
        }

        .modal-icon {
          width: 120px;
          height: 120px;
          margin-bottom: 1rem;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
        }

        .modal-icon-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .modal-title {
          font-family: 'Lora', serif;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .modal-category {
          font-size: 1rem;
          opacity: 0.9;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        .modal-content {
          padding: 2rem;
        }

        .modal-section {
          margin-bottom: 2rem;
        }

        .modal-section:last-child {
          margin-bottom: 0;
        }

        .modal-section h3 {
          font-family: 'Lora', serif;
          font-size: 1.3rem;
          color: #2c2c2c;
          margin: 0 0 1rem 0;
          font-weight: 600;
        }

        .modal-section p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        .experience-badges {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .badge {
          padding: 0.5rem 1.25rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .badge.experience {
          background: linear-gradient(135deg, #a86b7a, #8a5763);
          color: white;
        }

        .badge.years {
          background: rgba(168, 107, 122, 0.1);
          color: #a86b7a;
          border: 2px solid #a86b7a;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #fde9f0, #f5c9e0);
          color: #a86b7a;
          border-radius: 16px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(168, 107, 122, 0.2);
        }

        /* Footer */
        .platforms-footer {
          background: rgba(20, 20, 20, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 1.5rem;
          text-align: center;
          border-top: 1px solid rgba(168, 107, 122, 0.2);
          margin-top: auto;
          position: relative;
          z-index: 1;
        }

        .platforms-footer .license-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: #a86b7a;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .app-grid {
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .screen-title {
            font-size: 1.75rem;
            padding-right: 1rem;
            letter-spacing: 1px;
          }

          .screen-subtitle {
            font-size: 0.85rem;
            letter-spacing: 2px;
          }

          .back-btn {
            position: static;
            margin-bottom: 1rem;
          }

          .screen-header {
            text-align: left;
            padding: 1.5rem;
          }

          .app-grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 2.5rem 1.5rem;
            padding: 2rem 1.5rem;
          }

          .icon-bg {
            width: 85px;
            height: 85px;
          }

          .icon-emoji {
            font-size: 3rem;
          }

          .app-name {
            font-size: 0.85rem;
          }

          .app-modal {
            max-height: 90vh;
            margin: 1rem;
          }

          .modal-header {
            padding: 2.5rem 1.5rem 1.5rem 1.5rem;
          }

          .modal-content {
            padding: 1.5rem;
          }

          .modal-title {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 480px) {
          .status-bar {
            padding: 0.5rem 1rem;
            font-size: 0.7rem;
          }

          .screen-title {
            font-size: 1.5rem;
          }

          .screen-subtitle {
            font-size: 0.75rem;
          }

          .app-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem 1rem;
          }

          .icon-bg {
            width: 75px;
            height: 75px;
          }

          .icon-emoji {
            font-size: 2.5rem;
          }

          .app-name {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Platforms;

