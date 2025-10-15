import { useState } from 'react';
import { Link } from 'react-router-dom';

function Photography() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder photography data - you can replace with actual images
  const photographyData = [
    {
      id: 1,
      title: "Urban Landscapes",
      description: "Capturing the essence of city life through architectural photography",
      image: "/placeholder-photo-1.jpg",
      category: "Architecture",
      date: "2024"
    },
    {
      id: 2,
      title: "Nature's Beauty",
      description: "Exploring the natural world through my lens",
      image: "/placeholder-photo-2.jpg",
      category: "Nature",
      date: "2024"
    },
    {
      id: 3,
      title: "Portrait Studies",
      description: "Human emotion captured in candid moments",
      image: "/placeholder-photo-3.jpg",
      category: "Portrait",
      date: "2024"
    },
    {
      id: 4,
      title: "Street Photography",
      description: "Life unfolding in everyday moments",
      image: "/placeholder-photo-4.jpg",
      category: "Street",
      date: "2024"
    },
    {
      id: 5,
      title: "Abstract Forms",
      description: "Finding beauty in shapes and shadows",
      image: "/placeholder-photo-5.jpg",
      category: "Abstract",
      date: "2024"
    },
    {
      id: 6,
      title: "Event Photography",
      description: "Capturing special moments and celebrations",
      image: "/placeholder-photo-6.jpg",
      category: "Events",
      date: "2024"
    }
  ];

  const categories = ["All", "Architecture", "Nature", "Portrait", "Street", "Abstract", "Events"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPhotos = selectedCategory === "All" 
    ? photographyData 
    : photographyData.filter(photo => photo.category === selectedCategory);

  return (
    <div className="photography-page">
      {/* Header */}
      <div className="photography-header">
        <div className="header-content">
          <h1>Photography</h1>
          <p>Capturing moments, telling stories through the lens</p>
        </div>
        <Link to="/" className="back-button">
          <i className="fas fa-arrow-left"></i>
          Back to Home
        </Link>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Photography Grid */}
      <div className="photography-grid">
        {filteredPhotos.map(photo => (
          <div 
            key={photo.id} 
            className="photo-item"
            onClick={() => setSelectedImage(photo.image)}
          >
            <div className="photo-wrapper">
              <img 
                src={photo.image} 
                alt={photo.title}
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIExvYWRpbmcuLi48L3RleHQ+PC9zdmc+';
                }}
              />
              <div className="photo-overlay">
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
                <span className="photo-category">{photo.category}</span>
              </div>
            </div>
          </div>
        ))}
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
        .photography-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f4f0 0%, #e8d5d0 100%);
          padding: 2rem 0;
        }

        .photography-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem 2rem;
        }

        .header-content h1 {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          color: #8b4a5a;
          margin: 0;
          font-weight: 700;
        }

        .header-content p {
          font-family: 'Lora', serif;
          font-size: 1.2rem;
          color: #666;
          margin: 0.5rem 0 0;
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(139, 74, 90, 0.1);
          color: #8b4a5a;
          text-decoration: none;
          border-radius: 25px;
          font-family: 'Lora', serif;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .back-button:hover {
          background: #8b4a5a;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(139, 74, 90, 0.3);
        }

        .category-filter {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .category-btn {
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.8);
          border: 2px solid rgba(139, 74, 90, 0.2);
          border-radius: 25px;
          color: #8b4a5a;
          font-family: 'Lora', serif;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .category-btn:hover {
          background: rgba(139, 74, 90, 0.1);
          transform: translateY(-2px);
        }

        .category-btn.active {
          background: #8b4a5a;
          color: white;
          border-color: #8b4a5a;
        }

        .photography-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .photo-item {
          cursor: pointer;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          background: white;
        }

        .photo-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .photo-wrapper {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        .photo-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .photo-item:hover .photo-wrapper img {
          transform: scale(1.05);
        }

        .photo-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: 1.5rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .photo-item:hover .photo-overlay {
          transform: translateY(0);
        }

        .photo-overlay h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          margin: 0 0 0.5rem;
          font-weight: 600;
        }

        .photo-overlay p {
          font-family: 'Lora', serif;
          font-size: 0.9rem;
          margin: 0 0 0.5rem;
          opacity: 0.9;
        }

        .photo-category {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

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
          .photography-header {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .header-content h1 {
            font-size: 2.5rem;
          }

          .photography-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0 1rem;
          }

          .category-filter {
            gap: 0.5rem;
          }

          .category-btn {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Photography;
