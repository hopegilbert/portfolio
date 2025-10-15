import { useState } from 'react';

function Photography() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Exact collage elements matching the inspiration image
  const collageElements = [
    // Photos with exact positioning from the image
    {
      id: 1,
      type: "photo",
      title: "Speaker Detail",
      image: "/placeholder-photo-1.jpg",
      position: { top: "5%", left: "8%", rotation: -2, zIndex: 3 },
      size: "medium"
    },
    {
      id: 2,
      type: "photo", 
      title: "Selfie Portrait",
      image: "/placeholder-photo-2.jpg",
      position: { top: "25%", left: "35%", rotation: 3, zIndex: 8 },
      size: "portrait"
    },
    {
      id: 3,
      type: "photo",
      title: "Water Scene", 
      image: "/placeholder-photo-3.jpg",
      position: { top: "15%", right: "12%", rotation: -1, zIndex: 4 },
      size: "landscape"
    },
    {
      id: 4,
      type: "photo",
      title: "Train Car",
      image: "/placeholder-photo-4.jpg", 
      position: { bottom: "25%", left: "25%", rotation: 2, zIndex: 6 },
      size: "medium"
    },
    // Text elements exactly like the image
    {
      id: 5,
      type: "text",
      content: "SLAP",
      style: "newspaper-headline",
      position: { top: "8%", right: "20%", rotation: -1, zIndex: 9 },
      color: "#d32f2f",
      background: "#f5f5dc"
    },
    {
      id: 6,
      type: "text",
      content: "BONITAER ITE SASIR CO LIKES",
      style: "newspaper-text", 
      position: { top: "18%", right: "15%", rotation: 0, zIndex: 2 },
      color: "#000000",
      background: "#f5f5dc"
    },
    {
      id: 7,
      type: "text",
      content: "GIRL",
      style: "label-red",
      position: { top: "45%", right: "25%", rotation: 1, zIndex: 7 },
      color: "#ffffff",
      background: "#d32f2f"
    },
    {
      id: 8,
      type: "text",
      content: "XOXO",
      style: "sticker-green",
      position: { bottom: "15%", left: "8%", rotation: 2, zIndex: 5 },
      color: "#ffffff",
      background: "#4caf50"
    },
    {
      id: 9,
      type: "text",
      content: "FIORE",
      style: "magazine-title",
      position: { bottom: "20%", right: "8%", rotation: -1, zIndex: 3 },
      color: "#1976d2",
      background: "#f5f5dc"
    },
    {
      id: 10,
      type: "text",
      content: "INGOLOBS",
      style: "small-bold",
      position: { bottom: "8%", right: "12%", rotation: 0, zIndex: 1 },
      color: "#000000",
      background: "transparent"
    },
    // Decorative elements
    {
      id: 11,
      type: "decoration",
      content: "✓",
      style: "checkmark-badge",
      position: { bottom: "35%", left: "45%", rotation: -1, zIndex: 6 },
      color: "#1976d2",
      background: "#f5f5dc"
    },
    {
      id: 12,
      type: "decoration",
      content: "9",
      style: "number-badge",
      position: { top: "40%", right: "35%", rotation: 1, zIndex: 4 },
      color: "#8b4a5a",
      background: "#f5f5dc"
    },
    {
      id: 13,
      type: "decoration",
      content: "🍔",
      style: "mcdonalds-icon",
      position: { bottom: "8%", left: "15%", rotation: 0, zIndex: 2 },
      color: "#d32f2f",
      background: "#2e2e2e"
    }
  ];

  return (
    <div className="photography-collage">
      {/* Main Collage Board */}
      <div className="collage-board">
        {/* Background Paper Texture */}
        <div className="paper-background"></div>
        
        {/* All Collage Elements */}
        <div className="collage-elements">
          {collageElements.map(element => (
            <div 
              key={element.id} 
              className={`collage-item ${element.type} ${element.style}`}
              style={{
                position: 'absolute',
                top: element.position.top,
                left: element.position.left,
                right: element.position.right,
                bottom: element.position.bottom,
                transform: `rotate(${element.position.rotation}deg)`,
                zIndex: element.position.zIndex,
                color: element.color,
                backgroundColor: element.background
              }}
            >
              {element.type === 'photo' && (
                <div className="photo-frame">
                  <img 
                    src={element.image} 
                    alt={element.title}
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                </div>
              )}
              
              {element.type === 'text' && (
                <div className="text-content">
                  {element.content}
                </div>
              )}
              
              {element.type === 'decoration' && (
                <div className="decoration-content">
                  {element.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="photo-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedImage(null)}>
              <i className="fas fa-times"></i>
            </button>
            <img src={selectedImage} alt="Full size" />
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Playfair+Display:wght@500;700&display=swap');

        /* Hide global navigation */
        .photography-collage {
          min-height: 100vh;
          background: #f5f1eb;
          padding: 0;
          margin: 0;
          position: relative;
          overflow: hidden;
        }

        /* Hide the global navigation */
        .photography-collage .navigation,
        .photography-collage .name-header,
        .photography-collage .back-button {
          display: none !important;
        }

        .collage-board {
          width: 100vw;
          height: 100vh;
          position: relative;
          background: 
            radial-gradient(circle at 20% 20%, rgba(139, 74, 90, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(212, 165, 116, 0.03) 0%, transparent 50%),
            linear-gradient(135deg, #f5f1eb 0%, #e8d5d0 100%);
          overflow: hidden;
        }

        .paper-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(139, 74, 90, 0.02) 2px,
              rgba(139, 74, 90, 0.02) 4px
            );
          z-index: 1;
        }

        .collage-elements {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 10;
        }

        .collage-item {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .collage-item:hover {
          transform: scale(1.05) !important;
          z-index: 20 !important;
        }

        /* Photo Elements - Exact positioning from image */
        .collage-item.photo {
          width: 200px;
          height: 150px;
        }

        .collage-item.photo.portrait {
          width: 150px;
          height: 200px;
        }

        .collage-item.photo.landscape {
          width: 250px;
          height: 150px;
        }

        .photo-frame {
          width: 100%;
          height: 100%;
          background: #ffffff;
          border: 3px solid #f0f0f0;
          border-radius: 8px;
          box-shadow: 
            0 8px 16px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          position: relative;
        }

        .photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Text Elements - Exact styling from image */
        .text-content {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .newspaper-headline {
          font-size: 2.5rem;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .newspaper-text {
          font-size: 0.9rem;
          font-weight: 400;
          line-height: 1.2;
          max-width: 200px;
        }

        .label-red {
          font-size: 1.5rem;
          font-weight: 700;
          padding: 0.5rem 1rem;
          border-radius: 4px;
        }

        .sticker-green {
          font-size: 2rem;
          font-weight: 700;
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }

        .magazine-title {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .small-bold {
          font-size: 1rem;
          font-weight: 600;
        }

        /* Decoration Elements */
        .decoration-content {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .checkmark-badge {
          width: 40px;
          height: 40px;
          font-size: 1.5rem;
        }

        .number-badge {
          width: 30px;
          height: 30px;
          font-size: 1.2rem;
        }

        .mcdonalds-icon {
          width: 35px;
          height: 35px;
          font-size: 1.5rem;
          border-radius: 4px;
        }

        /* Modal */
        .photo-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          cursor: pointer;
        }

        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }

        .modal-content img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 10px;
        }

        .close-modal {
          position: absolute;
          top: -40px;
          right: 0;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: background 0.3s ease;
        }

        .close-modal:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          .collage-item.photo {
            width: 150px;
            height: 120px;
          }

          .collage-item.photo.portrait {
            width: 120px;
            height: 160px;
          }

          .collage-item.photo.landscape {
            width: 200px;
            height: 120px;
          }

          .newspaper-headline {
            font-size: 2rem;
          }

          .magazine-title {
            font-size: 1.5rem;
          }

          .sticker-green {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Photography;
