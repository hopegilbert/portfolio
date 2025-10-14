import { useState } from 'react';

// Document data - you can add your actual document images/PDFs here
const documents = [
  {
    id: 1,
    name: 'Resume.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x1000/F8F6F3/A86B7A?text=Resume',
    description: 'Professional resume design'
  },
  {
    id: 2,
    name: 'Portfolio.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x1000/FDE9F0/A86B7A?text=Portfolio',
    description: 'Design portfolio layout'
  },
  {
    id: 3,
    name: 'Brochure.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x1000/F5C9E0/A86B7A?text=Brochure',
    description: 'Marketing brochure design'
  },
  {
    id: 4,
    name: 'Flyer.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x1000/E0DDD8/A86B7A?text=Flyer',
    description: 'Event flyer design'
  },
  {
    id: 5,
    name: 'BusinessCard.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x600/FFE5E5/A86B7A?text=Business+Card',
    description: 'Business card design'
  },
  {
    id: 6,
    name: 'Letterhead.pdf',
    type: 'pdf',
    preview: 'https://via.placeholder.com/800x1000/F5E9E0/A86B7A?text=Letterhead',
    description: 'Company letterhead design'
  }
];

function DocumentDesign() {
  const [selectedDocument, setSelectedDocument] = useState<typeof documents[0] | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleClose = () => {
    window.history.back();
  };

  // File icon SVG component
  const FileIcon = ({ type }: { type: string }) => (
    <svg viewBox="0 0 60 80" className="file-icon">
      <path
        d="M10 0 L40 0 L50 10 L50 80 L10 80 Z"
        fill="#FDE9F0"
        stroke="#A86B7A"
        strokeWidth="1.5"
      />
      <path
        d="M40 0 L40 10 L50 10"
        fill="#F5C9E0"
        stroke="#A86B7A"
        strokeWidth="1.5"
      />
      <text x="30" y="50" fontSize="12" fill="#A86B7A" textAnchor="middle" fontFamily="'Courier New', monospace" fontWeight="bold">
        {type.toUpperCase()}
      </text>
    </svg>
  );

  return (
    <div className="desktop-page">
      {/* Desktop Background */}
      <div className="desktop-background">
        
        {/* Folder Window */}
        <div className={`folder-window ${isMinimized ? 'minimized' : ''}`}>
          {/* Window Title Bar */}
          <div className="window-title-bar">
            <div className="window-title">
              <span className="folder-icon">📁</span>
              <span>Document Designs</span>
            </div>
            <div className="window-controls">
              <button className="window-btn minimize" onClick={() => setIsMinimized(!isMinimized)}>−</button>
              <button className="window-btn maximize">□</button>
              <button className="window-btn close" onClick={handleClose}>×</button>
            </div>
          </div>

          {/* Window Content */}
          {!isMinimized && (
            <div className="window-content">
              <div className="file-grid">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="file-item"
                    onDoubleClick={() => setSelectedDocument(doc)}
                  >
                    <FileIcon type={doc.type} />
                    <span className="file-name">{doc.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Document Modal */}
        {selectedDocument && (
          <div className="document-modal-overlay" onClick={() => setSelectedDocument(null)}>
            <div className="document-modal" onClick={(e) => e.stopPropagation()}>
              {/* Modal Title Bar */}
              <div className="modal-title-bar">
                <div className="modal-title">
                  <span className="file-icon-small">📄</span>
                  <span>{selectedDocument.name}</span>
                </div>
                <div className="window-controls">
                  <button className="window-btn close" onClick={() => setSelectedDocument(null)}>×</button>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="modal-content">
                <div className="document-viewer">
                  <img 
                    src={selectedDocument.preview} 
                    alt={selectedDocument.name}
                    className="document-preview"
                  />
                  <p className="document-description">{selectedDocument.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="desktop-footer">
        <p className="license-text">Hope Gilbert's Musings and Research by Hope Gilbert is licensed under CC BY-ND 4.0</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap');

        .desktop-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #e8d5e0 0%, #f5e9e0 50%, #e0c9d0 100%);
          position: relative;
          overflow: hidden;
        }

        .desktop-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(253, 233, 240, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(245, 201, 224, 0.4) 0%, transparent 50%);
          pointer-events: none;
        }

        .desktop-background {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          z-index: 1;
        }

        /* Folder Window - Liquid Glass Effect */
        .folder-window {
          background: rgba(253, 233, 240, 0.6);
          backdrop-filter: blur(40px) saturate(180%);
          -webkit-backdrop-filter: blur(40px) saturate(180%);
          border-radius: 16px;
          box-shadow: 
            0 8px 32px rgba(168, 107, 122, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.6),
            0 0 0 1px rgba(168, 107, 122, 0.2);
          width: 100%;
          max-width: 900px;
          transition: all 0.3s ease;
          border: 0.5px solid rgba(255, 255, 255, 0.4);
        }

        .folder-window.minimized {
          height: 50px;
          overflow: hidden;
        }

        /* Window Title Bar - Enhanced Glass */
        .window-title-bar {
          background: rgba(253, 233, 240, 0.5);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          padding: 0.75rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 0.5px solid rgba(168, 107, 122, 0.2);
          border-radius: 16px 16px 0 0;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .window-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Lora', serif;
          font-weight: 600;
          color: #2c2c2c;
          font-size: 1rem;
        }

        .folder-icon {
          font-size: 1.2rem;
        }

        .window-controls {
          display: flex;
          gap: 0.5rem;
        }

        .window-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #a86b7a;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          font-weight: bold;
          line-height: 1;
          box-shadow: 0 2px 8px rgba(168, 107, 122, 0.1);
        }

        .window-btn:hover {
          background: rgba(168, 107, 122, 0.8);
          color: white;
          transform: scale(1.05);
        }

        .window-btn.close:hover {
          background: rgba(214, 69, 69, 0.9);
        }

        /* Window Content - Glass Effect */
        .window-content {
          padding: 2rem;
          min-height: 400px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(30px) saturate(150%);
          -webkit-backdrop-filter: blur(30px) saturate(150%);
          border-radius: 0 0 16px 16px;
        }

        .file-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 2rem;
          padding: 1rem;
        }

        .file-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          padding: 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .file-item:hover {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(168, 107, 122, 0.15);
        }

        .file-icon {
          width: 60px;
          height: 80px;
          transition: transform 0.3s ease;
          filter: drop-shadow(0 2px 4px rgba(168, 107, 122, 0.2));
        }

        .file-item:hover .file-icon {
          transform: scale(1.1);
          filter: drop-shadow(0 4px 8px rgba(168, 107, 122, 0.3));
        }

        .file-name {
          font-family: 'Lora', serif;
          font-size: 0.9rem;
          color: #2c2c2c;
          text-align: center;
          word-break: break-word;
          font-weight: 500;
        }

        /* Document Modal */
        .document-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
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

        .document-modal {
          background: rgba(253, 233, 240, 0.7);
          backdrop-filter: blur(40px) saturate(180%);
          -webkit-backdrop-filter: blur(40px) saturate(180%);
          border-radius: 16px;
          max-width: 1000px;
          max-height: 90vh;
          width: 100%;
          box-shadow: 
            0 12px 48px rgba(168, 107, 122, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.6),
            0 0 0 1px rgba(168, 107, 122, 0.2);
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 0.5px solid rgba(255, 255, 255, 0.4);
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

        .modal-title-bar {
          background: rgba(253, 233, 240, 0.5);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          padding: 0.75rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 0.5px solid rgba(168, 107, 122, 0.2);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .modal-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Lora', serif;
          font-weight: 600;
          color: #2c2c2c;
          font-size: 1rem;
        }

        .file-icon-small {
          font-size: 1.1rem;
        }

        .modal-content {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(30px) saturate(150%);
          -webkit-backdrop-filter: blur(30px) saturate(150%);
          padding: 2rem;
          max-height: calc(90vh - 60px);
          overflow-y: auto;
        }

        .document-viewer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .document-preview {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .document-description {
          font-family: 'Lora', serif;
          font-size: 1rem;
          color: #2c2c2c;
          text-align: center;
          font-style: italic;
        }

        /* Footer - Liquid Glass */
        .desktop-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(253, 233, 240, 0.5);
          backdrop-filter: blur(30px) saturate(180%);
          -webkit-backdrop-filter: blur(30px) saturate(180%);
          padding: 1rem;
          text-align: center;
          border-top: 0.5px solid rgba(168, 107, 122, 0.2);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .desktop-footer .license-text {
          font-family: 'Lora', serif;
          font-size: 0.85rem;
          color: #666;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .desktop-background {
            padding: 1rem;
          }

          .file-grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 1rem;
          }

          .folder-window {
            max-width: 100%;
          }

          .window-content {
            padding: 1rem;
          }

          .document-modal {
            max-width: 95%;
          }

          .modal-content {
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .file-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .window-title {
            font-size: 0.9rem;
          }

          .file-name {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}

export default DocumentDesign;

