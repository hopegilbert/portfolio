import { useState } from 'react';

function Photography() {
  const [currentPage, setCurrentPage] = useState(0);

  // Collage elements - mixed media style
  const collageElements = [
    // Photos with polaroid style
    {
      id: 1,
      type: "photo",
      title: "City Lights",
      image: "/placeholder-photo-1.jpg",
      position: { top: "8%", left: "12%", rotation: -3, zIndex: 5 },
      size: "medium"
    },
    {
      id: 2,
      type: "photo", 
      title: "Portrait Study",
      image: "/placeholder-photo-2.jpg",
      position: { top: "25%", left: "45%", rotation: 2, zIndex: 8 },
      size: "small"
    },
    {
      id: 3,
      type: "photo",
      title: "Water Reflections", 
      image: "/placeholder-photo-3.jpg",
      position: { top: "15%", right: "8%", rotation: -1, zIndex: 3 },
      size: "large"
    },
    {
      id: 4,
      type: "photo",
      title: "Street Life",
      image: "/placeholder-photo-4.jpg", 
      position: { bottom: "20%", left: "20%", rotation: 4, zIndex: 6 },
      size: "medium"
    },
    {
      id: 5,
      type: "photo",
      title: "Architecture",
      image: "/placeholder-photo-5.jpg",
      position: { top: "50%", right: "15%", rotation: -2, zIndex: 4 },
      size: "small"
    },
    {
      id: 6,
      type: "photo",
      title: "Nature",
      image: "/placeholder-photo-6.jpg",
      position: { bottom: "35%", left: "60%", rotation: 1, zIndex: 7 },
      size: "medium"
    },
    // Text elements
    {
      id: 7,
      type: "text",
      content: "PHOTOGRAPHY",
      style: "large-bold",
      position: { top: "5%", right: "25%", rotation: -1, zIndex: 9 },
      color: "#8b4a5a"
    },
    {
      id: 8,
      type: "text",
      content: "MOMENTS",
      style: "medium-bold", 
      position: { top: "40%", left: "5%", rotation: 3, zIndex: 2 },
      color: "#d4a574"
    },
    {
      id: 9,
      type: "text",
      content: "CAPTURED",
      style: "small-bold",
      position: { bottom: "15%", right: "30%", rotation: -2, zIndex: 1 },
      color: "#8b4a5a"
    },
    // Decorative elements
    {
      id: 10,
      type: "decoration",
      content: "XOXO",
      style: "sticker",
      position: { top: "60%", left: "8%", rotation: 2, zIndex: 6 },
      color: "#8b4a5a"
    },
    {
      id: 11,
      type: "decoration", 
      content: "✓",
      style: "checkmark",
      position: { top: "70%", right: "20%", rotation: -1, zIndex: 5 },
      color: "#4a8b5a"
    },
    {
      id: 12,
      type: "decoration",
      content: "9",
      style: "number",
      position: { top: "30%", left: "75%", rotation: 1, zIndex: 3 },
      color: "#8b4a5a"
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % 3);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div className="collage-page">
      {/* Collage Container */}
      <div className="collage-container">
        <div className="collage-board">
          {/* Mixed Media Elements */}
          <div className="collage-elements">
            {collageElements.map(element => (
              <div 
                key={element.id} 
                className={`collage-element ${element.type} ${element.size || ''}`}
                style={{
                  position: 'absolute',
                  top: element.position.top,
                  left: element.position.left,
                  right: element.position.right,
                  bottom: element.position.bottom,
                  transform: `rotate(${element.position.rotation}deg)`,
                  zIndex: element.position.zIndex
                }}
              >
                {element.type === 'photo' && (
                  <div className="polaroid-frame">
                    <img 
                      src={element.image} 
                      alt={element.title}
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                    <div className="polaroid-label">{element.title}</div>
                  </div>
                )}
                
                {element.type === 'text' && (
                  <div 
                    className={`text-element ${element.style}`}
                    style={{ color: element.color }}
                  >
                    {element.content}
                  </div>
                )}
                
                {element.type === 'decoration' && (
                  <div 
                    className={`decoration-element ${element.style}`}
                    style={{ color: element.color }}
                  >
                    {element.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="collage-navigation">
            <button 
              className="nav-button prev-button" 
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              <i className="fas fa-chevron-left"></i>
              Previous
            </button>
            
            <div className="page-indicator">
              <span className="current-page">{currentPage + 1}</span>
              <span className="page-separator">of</span>
              <span className="total-pages">3</span>
            </div>
            
            <button 
              className="nav-button next-button" 
              onClick={nextPage}
              disabled={currentPage === 2}
            >
              Next
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Lora:wght@400;500;600;700&family=Kalam:wght@400;700&family=Inter:wght@400;600;700;900&display=swap');

        .collage-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f1eb 0%, #e8d5d0 100%);
          padding: 2rem 0;
          position: relative;
        }

        .collage-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 4rem);
          padding: 2rem;
        }

        .collage-board {
          background: 
            radial-gradient(circle at 20% 20%, rgba(139, 74, 90, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(212, 165, 116, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, #f8f6f3 0%, #f0ebe5 100%);
          border-radius: 20px;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(139, 74, 90, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          width: 95%;
          max-width: 1200px;
          min-height: 700px;
          position: relative;
          overflow: hidden;
          padding: 2rem;
        }

        .collage-elements {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
        }

        .collage-element {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .collage-element:hover {
          transform: scale(1.05) !important;
          z-index: 20 !important;
        }

        /* Photo Elements */
        .collage-element.photo {
          width: 200px;
          height: 150px;
        }

        .collage-element.photo.small {
          width: 150px;
          height: 120px;
        }

        .collage-element.photo.large {
          width: 250px;
          height: 180px;
        }

        .polaroid-frame {
          width: 100%;
          height: 100%;
          background: #fefefe;
          border: 3px solid #f0f0f0;
          border-radius: 8px;
          box-shadow: 
            0 8px 16px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          position: relative;
          transition: all 0.3s ease;
        }

        .collage-element:hover .polaroid-frame {
          box-shadow: 
            0 12px 24px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(139, 74, 90, 0.2);
        }

        .polaroid-frame img {
          width: 100%;
          height: calc(100% - 40px);
          object-fit: cover;
          border-bottom: 1px solid #e8e8e8;
        }

        .polaroid-label {
          padding: 0.5rem;
          background: #fefefe;
          font-family: 'Kalam', cursive;
          font-size: 0.8rem;
          color: #8b4a5a;
          font-weight: 600;
          text-align: center;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Text Elements */
        .text-element {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .text-element.large-bold {
          font-size: 3rem;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .text-element.medium-bold {
          font-size: 2rem;
          font-weight: 700;
        }

        .text-element.small-bold {
          font-size: 1.2rem;
          font-weight: 600;
        }

        /* Decoration Elements */
        .decoration-element {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .decoration-element.sticker {
          background: rgba(139, 74, 90, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 2px solid rgba(139, 74, 90, 0.3);
          font-size: 1.1rem;
          font-weight: 700;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .decoration-element.checkmark {
          background: rgba(74, 139, 90, 0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          border: 2px solid rgba(74, 139, 90, 0.3);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .decoration-element.number {
          background: rgba(139, 74, 90, 0.1);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 700;
          border: 2px solid rgba(139, 74, 90, 0.3);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Navigation */
        .collage-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          background: rgba(139, 74, 90, 0.05);
          border-top: 1px solid rgba(139, 74, 90, 0.1);
          margin-top: 2rem;
        }

        .nav-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(139, 74, 90, 0.1);
          color: #8b4a5a;
          border: 2px solid rgba(139, 74, 90, 0.2);
          border-radius: 25px;
          font-family: 'Lora', serif;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-button:hover:not(:disabled) {
          background: #8b4a5a;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(139, 74, 90, 0.3);
        }

        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .page-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Lora', serif;
          color: #8b4a5a;
          font-weight: 500;
        }

        .current-page {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .page-separator {
          font-size: 0.9rem;
          opacity: 0.7;
        }

        .total-pages {
          font-size: 1rem;
          opacity: 0.8;
        }

        /* Decorative background elements */
        .collage-page::before {
          content: '';
          position: absolute;
          top: 15%;
          left: 8%;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(139, 74, 90, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
        }

        .collage-page::after {
          content: '';
          position: absolute;
          bottom: 20%;
          right: 10%;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(212, 165, 116, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .collage-container {
            padding: 1rem;
          }

          .collage-board {
            width: 98%;
            min-height: 600px;
            padding: 1.5rem;
          }

          .collage-elements {
            height: 500px;
          }

          .collage-element.photo {
            width: 150px;
            height: 120px;
          }

          .collage-element.photo.small {
            width: 120px;
            height: 100px;
          }

          .collage-element.photo.large {
            width: 180px;
            height: 140px;
          }

          .text-element.large-bold {
            font-size: 2rem;
          }

          .text-element.medium-bold {
            font-size: 1.5rem;
          }

          .collage-navigation {
            padding: 1rem;
            flex-direction: column;
            gap: 1rem;
          }

          .nav-button {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Photography;
