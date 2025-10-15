import { useState } from 'react';
import backgroundImage from '../assets/document-design/background.png';

// Document data - you can add your actual document images/PDFs here
const documents = [
  {
    id: 1,
    name: 'Resume.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x1000/F8F6F3/A86B7A?text=Resume',
    description: 'Professional resume design',
    color: '#FFE5EC', // Misty Rose
    position: { top: '75%', left: '15%' }
  },
  {
    id: 2,
    name: 'Portfolio.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x1000/FDE9F0/A86B7A?text=Portfolio',
    description: 'Design portfolio layout',
    color: '#FFC2D1', // Pink
    position: { top: '20%', left: '80%' }
  },
  {
    id: 3,
    name: 'Brochure.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x1000/F5C9E0/A86B7A?text=Brochure',
    description: 'Marketing brochure design',
    color: '#FFB3C6', // Cherry Blossom
    position: { top: '15%', left: '10%' }
  },
  {
    id: 4,
    name: 'BusinessCard.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x600/FFE5E5/A86B7A?text=Business+Card',
    description: 'Business card design',
    color: '#FB6F92', // Rose Pompadour
    position: { top: '80%', left: '75%' }
  },
  {
    id: 5,
    name: 'Letterhead.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x1000/F5E9E0/A86B7A?text=Letterhead',
    description: 'Company letterhead design',
    color: '#FFB3C6', // Cherry Blossom (lighter)
    position: { top: '10%', left: '50%' }
  },
  {
    id: 6,
    name: 'Invoice.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x1000/F8F6F3/A86B7A?text=Invoice',
    description: 'Invoice template design',
    color: '#FFE5EC', // Misty Rose
    position: { top: '85%', left: '25%' }
  },
  {
    id: 7,
    name: 'Presentation.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x1000/FDE9F0/A86B7A?text=Presentation',
    description: 'Business presentation template',
    color: '#FFC2D1', // Pink
    position: { top: '5%', left: '25%' }
  },
  {
    id: 8,
    name: 'Report.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x1000/F5C9E0/A86B7A?text=Report',
    description: 'Annual report design',
    color: '#FFB3C6', // Cherry Blossom
    position: { top: '65%', left: '85%' }
  },
  {
    id: 9,
    name: 'Newsletter.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x1000/FFE5E5/A86B7A?text=Newsletter',
    description: 'Email newsletter template',
    color: '#FF8FAB', // Baker-Miller
    position: { top: '45%', left: '5%' }
  },
  {
    id: 10,
    name: 'Catalog.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x1000/F5E9E0/A86B7A?text=Catalog',
    description: 'Product catalog layout',
    color: '#FB6F92', // Rose Pompadour
    position: { top: '55%', left: '90%' }
  }
];

// Removed floating items - no decorative files

function DocumentDesign() {
  const [selectedDocument, setSelectedDocument] = useState<typeof documents[0] | null>(null);

  const handleClose = () => {
    window.history.back();
  };

  // File icon SVG component - soft rounded folder style (no text)
  const FileIcon = ({ color = '#FFE5EC' }: { color?: string }) => {
    // Create a darker shade for the tab
    const tabColor = color === '#FFE5EC' ? '#FFC2D1' : 
                     color === '#FFC2D1' ? '#FFB3C6' :
                     color === '#FFB3C6' ? '#FF8FAB' :
                     color === '#FF8FAB' ? '#FB6F92' :
                     color === '#FB6F92' ? '#FF8FAB' : '#FFB3C6';
    
    return (
      <svg viewBox="0 0 60 50" className="file-icon">
        {/* Main folder body */}
        <path
          d="M8 12 L45 12 L45 45 L8 45 Z"
          fill={color}
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="0.5"
          rx="4"
          ry="4"
        />
        {/* Folder tab */}
        <path
          d="M8 12 L25 12 L28 15 L45 15"
          fill={tabColor}
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="0.5"
          rx="2"
          ry="2"
        />
      </svg>
    );
  };


  return (
    <div className="document-desktop">
      {/* Background with person working */}
      <div className="desktop-background">
        <img src={backgroundImage} alt="Desktop background" className="background-image" />
        
        {/* Floating UI Elements */}
        <div className="ui-elements">
          <div className="zoom-controls">
            <button className="ui-btn">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </button>
            <button className="ui-btn">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M15 17L20 12L15 7" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </button>
          </div>
        </div>
      </div>


      {/* Floating Document Items */}
      <div className="documents-container">
        {documents.map((doc, index) => (
          <div
            key={doc.id}
            className="floating-document"
            onClick={() => setSelectedDocument(doc)}
            style={{ 
              '--doc-color': doc.color,
              animationDelay: `${index * 0.1}s`,
              ...doc.position
            } as React.CSSProperties}
          >
            <div className="document-icon">
              <FileIcon color={doc.color} />
            </div>
            <span className="document-name">{doc.name}</span>
          </div>
        ))}
      </div>

      {/* Close Button */}
      <button className="floating-close-btn" onClick={handleClose}>
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>

      {/* Document Modal */}
      {selectedDocument && (
        <div className="document-modal-overlay" onClick={() => setSelectedDocument(null)}>
          <div className="document-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedDocument.name}</h2>
              <button className="close-btn" onClick={() => setSelectedDocument(null)}>
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </div>
            
            <div className="modal-content">
              <img 
                src={selectedDocument.preview} 
                alt={selectedDocument.name}
                className="document-preview"
              />
              <p className="document-description">{selectedDocument.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="desktop-footer">
        <p className="license-text">Hope Gilbert's Musings and Research by Hope Gilbert is licensed under CC BY-ND 4.0</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

        .document-desktop {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background: #F5F5F5;
        }

        .desktop-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .background-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
        }

        .ui-elements {
          position: absolute;
          bottom: 20px;
          right: 20px;
          z-index: 10;
        }

        .zoom-controls {
          display: flex;
          gap: 8px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 8px;
          padding: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .ui-btn {
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #666;
          transition: all 0.2s ease;
        }

        .ui-btn:hover {
          background: rgba(0, 0, 0, 0.05);
          color: #333;
        }

        .floating-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 5;
          pointer-events: none;
        }

        .floating-item {
          position: absolute;
          pointer-events: auto;
          cursor: pointer;
          animation: floatIn 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes floatIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .floating-item:hover {
          transform: scale(1.1);
          z-index: 10;
        }

        .floating-icon {
          width: 60px;
          height: 60px;
          margin-bottom: 8px;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }

        .folder-icon {
          width: 100%;
          height: 100%;
        }

        .floating-name {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #666;
          text-align: center;
          display: block;
          max-width: 80px;
          word-wrap: break-word;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 4px 6px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .documents-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 8;
          pointer-events: none;
        }

        .floating-document {
          position: absolute;
          pointer-events: auto;
          cursor: pointer;
          animation: floatIn 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .floating-close-btn {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border: none;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #666;
          transition: all 0.2s ease;
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .floating-close-btn:hover {
          background: rgba(255, 255, 255, 1);
          color: #333;
          transform: scale(1.05);
        }

        .floating-document:hover {
          transform: scale(1.1) translateY(-5px);
          z-index: 10;
        }

        .document-icon {
          width: 60px;
          height: 60px;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }

        .document-name {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #333;
          text-align: center;
          font-weight: 500;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
          max-width: 80px;
          word-wrap: break-word;
        }

        .file-icon {
          width: 100%;
          height: 100%;
        }

        /* Document Modal */
        .document-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .document-modal {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          max-width: 800px;
          max-height: 90vh;
          width: 100%;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          overflow: hidden;
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

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .modal-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        .modal-content {
          padding: 24px;
          max-height: calc(90vh - 80px);
          overflow-y: auto;
        }

        .document-preview {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          margin-bottom: 16px;
        }

        .document-description {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #666;
          text-align: center;
          font-style: italic;
          margin: 0;
        }

        /* Footer */
        .desktop-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          padding: 12px;
          text-align: center;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          z-index: 15;
        }

        .license-text {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #666;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .main-panel {
            bottom: 60px;
            width: 95%;
            padding: 20px;
          }

          .panel-header h1 {
            font-size: 20px;
          }

          .documents-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 12px;
          }

          .document-modal {
            max-width: 95%;
            margin: 10px;
          }

          .modal-content {
            padding: 16px;
          }

          .floating-item {
            display: none; /* Hide floating items on mobile for cleaner look */
          }
        }

        @media (max-width: 480px) {
          .documents-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .document-name {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
}

export default DocumentDesign;

