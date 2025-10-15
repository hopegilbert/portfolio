import { useState } from 'react';

function Photography() {
  const [currentPage, setCurrentPage] = useState(0);

  // Scrapbook pages data - each page contains multiple photos
  const scrapbookPages = [
    {
      id: 1,
      title: "Urban Adventures",
      photos: [
        {
          id: 1,
          title: "City Lights",
          description: "The magic of urban nightscapes",
          image: "/placeholder-photo-1.jpg",
          position: { top: "10%", left: "15%", rotation: -2 }
        },
        {
          id: 2,
          title: "Architectural Details",
          description: "Finding beauty in the built environment",
          image: "/placeholder-photo-2.jpg",
          position: { top: "45%", right: "10%", rotation: 3 }
        },
        {
          id: 3,
          title: "Street Life",
          description: "Moments of daily urban existence",
          image: "/placeholder-photo-3.jpg",
          position: { bottom: "20%", left: "25%", rotation: -1 }
        }
      ]
    },
    {
      id: 2,
      title: "Nature's Canvas",
      photos: [
        {
          id: 4,
          title: "Forest Paths",
          description: "Wandering through nature's corridors",
          image: "/placeholder-photo-4.jpg",
          position: { top: "20%", left: "20%", rotation: 2 }
        },
        {
          id: 5,
          title: "Mountain Views",
          description: "The grandeur of elevated perspectives",
          image: "/placeholder-photo-5.jpg",
          position: { top: "50%", right: "15%", rotation: -3 }
        },
        {
          id: 6,
          title: "Water Reflections",
          description: "Nature's mirror in still waters",
          image: "/placeholder-photo-6.jpg",
          position: { bottom: "15%", left: "30%", rotation: 1 }
        }
      ]
    },
    {
      id: 3,
      title: "Human Stories",
      photos: [
        {
          id: 7,
          title: "Portrait Moments",
          description: "Capturing the essence of human emotion",
          image: "/placeholder-photo-7.jpg",
          position: { top: "15%", left: "25%", rotation: -2 }
        },
        {
          id: 8,
          title: "Candid Life",
          description: "Unposed moments of authentic living",
          image: "/placeholder-photo-8.jpg",
          position: { top: "40%", right: "20%", rotation: 4 }
        },
        {
          id: 9,
          title: "Event Memories",
          description: "Celebrating life's special occasions",
          image: "/placeholder-photo-9.jpg",
          position: { bottom: "25%", left: "20%", rotation: -1 }
        }
      ]
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % scrapbookPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + scrapbookPages.length) % scrapbookPages.length);
  };

  return (
    <div className="scrapbook-page">
      {/* Scrapbook Container */}
      <div className="scrapbook-container">
        <div className="scrapbook-book">
          {/* Page Content */}
          <div className="scrapbook-page-content">
            <div className="page-header">
              <h1 className="page-title">{scrapbookPages[currentPage].title}</h1>
            </div>
            
            <div className="scrapbook-photos">
              {scrapbookPages[currentPage].photos.map(photo => (
                <div 
                  key={photo.id} 
                  className="scrapbook-photo"
                  style={{
                    position: 'absolute',
                    top: photo.position.top,
                    left: photo.position.left,
                    right: photo.position.right,
                    bottom: photo.position.bottom,
                    transform: `rotate(${photo.position.rotation}deg)`
                  }}
                >
                  <div className="photo-paper">
                    <img 
                      src={photo.image} 
                      alt={photo.title}
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                    <div className="photo-caption">
                      <h4>{photo.title}</h4>
                      <p>{photo.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="scrapbook-navigation">
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
              <span className="total-pages">{scrapbookPages.length}</span>
            </div>
            
            <button 
              className="nav-button next-button" 
              onClick={nextPage}
              disabled={currentPage === scrapbookPages.length - 1}
            >
              Next
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Lora:wght@400;500;600;700&family=Kalam:wght@400;700&display=swap');

        .scrapbook-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f1eb 0%, #e8d5d0 100%);
          padding: 2rem 0;
          position: relative;
        }

        .scrapbook-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 4rem);
          padding: 2rem;
        }

        .scrapbook-book {
          background: #f8f6f3;
          border-radius: 15px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(139, 74, 90, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          width: 90%;
          max-width: 1000px;
          min-height: 600px;
          position: relative;
          overflow: hidden;
        }

        .scrapbook-page-content {
          position: relative;
          width: 100%;
          height: 500px;
          background: 
            radial-gradient(circle at 20% 80%, rgba(139, 74, 90, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 74, 90, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, #fefefe 0%, #f8f6f3 100%);
          padding: 2rem;
          overflow: hidden;
        }

        .page-header {
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
          z-index: 10;
        }

        .page-title {
          font-family: 'Kalam', cursive;
          font-size: 2.5rem;
          color: #8b4a5a;
          margin: 0;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
          transform: rotate(-1deg);
        }

        .scrapbook-photos {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .scrapbook-photo {
          width: 200px;
          height: 150px;
          z-index: 5;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .scrapbook-photo:hover {
          transform: scale(1.05) !important;
          z-index: 20;
        }

        .photo-paper {
          width: 100%;
          height: 100%;
          background: #fefefe;
          border: 2px solid #e8d5d0;
          border-radius: 8px;
          box-shadow: 
            0 4px 8px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(139, 74, 90, 0.1);
          overflow: hidden;
          position: relative;
          transition: all 0.3s ease;
        }

        .scrapbook-photo:hover .photo-paper {
          box-shadow: 
            0 8px 16px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(139, 74, 90, 0.2);
        }

        .photo-paper img {
          width: 100%;
          height: 100px;
          object-fit: cover;
          border-bottom: 1px solid #e8d5d0;
        }

        .photo-caption {
          padding: 0.5rem;
          background: #fefefe;
        }

        .photo-caption h4 {
          font-family: 'Kalam', cursive;
          font-size: 0.9rem;
          color: #8b4a5a;
          margin: 0 0 0.25rem;
          font-weight: 700;
        }

        .photo-caption p {
          font-family: 'Lora', serif;
          font-size: 0.7rem;
          color: #666;
          margin: 0;
          line-height: 1.2;
        }

        .scrapbook-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          background: rgba(139, 74, 90, 0.05);
          border-top: 1px solid rgba(139, 74, 90, 0.1);
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

        /* Decorative elements */
        .scrapbook-page::before {
          content: '';
          position: absolute;
          top: 10%;
          left: 5%;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(139, 74, 90, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
        }

        .scrapbook-page::after {
          content: '';
          position: absolute;
          bottom: 15%;
          right: 8%;
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(139, 74, 90, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .scrapbook-container {
            padding: 1rem;
          }

          .scrapbook-book {
            width: 95%;
            min-height: 500px;
          }

          .scrapbook-page-content {
            height: 400px;
            padding: 1.5rem;
          }

          .page-title {
            font-size: 2rem;
          }

          .scrapbook-photo {
            width: 150px;
            height: 120px;
          }

          .photo-paper img {
            height: 80px;
          }

          .scrapbook-navigation {
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
