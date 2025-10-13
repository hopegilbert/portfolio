import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const portfolioSections = [
    { 
      id: 'play-dress-up',
      name: 'Play Dress Up', 
      path: '/play-dress-up', 
      description: 'Fashion and styling projects',
      height: 'tall' // varying heights for masonry
    },
    { 
      id: 'intelligence-hub',
      name: 'Intelligence Hub', 
      path: '/intelligence-hub', 
      description: 'Data and analytics work',
      height: 'medium'
    },
    { 
      id: 'art-work',
      name: 'Art Work', 
      path: '/art-work', 
      description: 'Creative artwork portfolio',
      height: 'short'
    },
    { 
      id: 'video-editing',
      name: 'Video Editing', 
      path: '/video-editing', 
      description: 'Video production and editing',
      height: 'medium'
    },
    { 
      id: 'movies',
      name: 'Movies', 
      path: '/movies', 
      description: 'Film and movie projects',
      height: 'tall'
    },
    { 
      id: 'apps',
      name: 'Apps', 
      path: '/apps', 
      description: 'Application development',
      height: 'short'
    },
    { 
      id: 'document-design',
      name: 'Document Design', 
      path: '/document-design', 
      description: 'Document and layout design',
      height: 'medium'
    },
    { 
      id: 'social-media',
      name: 'Social Media', 
      path: '/social-media', 
      description: 'Social media content and campaigns',
      height: 'tall'
    },
    { 
      id: 'platforms',
      name: 'Platforms', 
      path: '/platforms', 
      description: 'Platform development and management',
      height: 'short'
    },
  ];

  const getHeightClass = (height: string) => {
    switch(height) {
      case 'short': return 'h-48';
      case 'medium': return 'h-64';
      case 'tall': return 'h-80';
      default: return 'h-64';
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(135deg, #f5e8c7 0%, #e8d5b7 50%, #d4c5aa 100%)',
        }}
      />

      {/* Profile Section */}
      <div className="flex flex-col items-center pt-12 pb-8 px-4">
        {/* Title Frame */}
        <div className="w-full max-w-5xl flex justify-center mb-6">
          <div 
            className="backdrop-blur-sm bg-[#f5e8c7]/30 px-12 py-8 rounded-lg border-4 border-[#821818]/20 shadow-2xl"
            style={{
              fontFamily: "'Playfair Display', serif"
            }}
          >
            <h1 className="text-6xl font-bold text-[#821818] text-center tracking-wide">
              HOPE GILBERT
            </h1>
          </div>
        </div>

        {/* Subtitle/Bio Section */}
        <div className="w-full max-w-4xl backdrop-blur-md bg-[#f5e8c7]/20 px-8 py-6 rounded-lg mb-8">
          <p 
            className="text-2xl font-bold text-[#821818] text-center leading-relaxed"
            style={{ fontFamily: "'Lora', serif" }}
          >
            A curated collection of creative works, ideas, and projects across multiple disciplines.
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="px-4 pb-16">
        <div 
          className="masonry-container mx-auto"
          style={{
            columnCount: 4,
            columnGap: '1rem',
            maxWidth: '100%'
          }}
        >
          {portfolioSections.map((section) => (
            <Link
              key={section.id}
              to={section.path}
              className="masonry-item block mb-4 break-inside-avoid"
              onMouseEnter={() => setHoveredItem(section.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden rounded-lg group">
                {/* Placeholder Frame/Image */}
                <div 
                  className={`w-full ${getHeightClass(section.height)} bg-gradient-to-br from-[#d4c5aa] to-[#b8a892] border-8 border-[#8b7355] rounded-lg shadow-xl transition-all duration-300 group-hover:brightness-50`}
                  style={{
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.2)'
                  }}
                >
                  {/* Inner frame detail */}
                  <div className="w-full h-full border-4 border-[#a89277] rounded-sm m-1 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-2">🖼️</div>
                      <p className="text-[#5a4a3a] font-semibold text-sm" style={{ fontFamily: "'Lora', serif" }}>
                        {section.name}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div 
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
                    hoveredItem === section.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div 
                    className="bg-[#f5e8c7] text-[#821818] px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:bg-[#dbc692] hover:-translate-y-1"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    <span className="font-semibold text-lg">Explore {section.name}</span>
                  </div>
                  <p 
                    className="text-[#f5e8c7] mt-4 text-center px-4 text-sm"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {section.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}

          {/* Decorative Info Cards (like the flower frames) */}
          <div className="masonry-item block mb-4 break-inside-avoid">
            <div 
              className="relative w-full h-64 bg-gradient-to-br from-[#d4c5aa] to-[#b8a892] border-8 border-[#8b7355] rounded-lg shadow-xl"
              style={{
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.2)'
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <h2 
                  className="text-2xl font-bold text-[#821818] mb-3 text-center"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  About This Portfolio
                </h2>
                <p 
                  className="text-[#821818] text-center text-sm leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  A digital museum showcasing my journey across fashion, technology, art, and everything in between.
                </p>
              </div>
            </div>
          </div>

          {/* Another decorative card */}
          <div className="masonry-item block mb-4 break-inside-avoid">
            <div 
              className="relative w-full h-56 bg-gradient-to-br from-[#d4c5aa] to-[#b8a892] border-8 border-[#8b7355] rounded-lg shadow-xl"
              style={{
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.2)'
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <h2 
                  className="text-xl font-bold text-[#821818] mb-2 text-center"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  ✨ Welcome ✨
                </h2>
                <p 
                  className="text-[#821818] text-center text-xs leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Click on any frame to explore that section of my work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full backdrop-blur-md bg-[#f5e8c7]/20 px-8 py-6 rounded-lg mt-8">
        <footer className="text-center">
          <p 
            className="text-[#821818] font-bold text-lg"
            style={{ fontFamily: "'Lora', serif" }}
          >
            More to come... this museum is ever-evolving.
          </p>
        </footer>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Lora:wght@400;500;600;700&display=swap');
        
        @media (max-width: 1024px) {
          .masonry-container {
            column-count: 3 !important;
          }
        }
        
        @media (max-width: 768px) {
          .masonry-container {
            column-count: 2 !important;
            column-gap: 0.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .masonry-container {
            column-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
