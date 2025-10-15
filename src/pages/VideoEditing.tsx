import { useState } from 'react';

// Video projects data
const videoProjects = [
  {
    id: 1,
    title: 'Meet Hope',
    videoFile: '/video-editing/meethope.mov',
    description: 'An introduction to Hope Gilbert - showcasing personality, creativity, and style.',
    category: 'Personal'
  },
  {
    id: 2,
    title: 'Advent Calendar',
    videoFile: '/video-editing/adventcalendar.mp4',
    description: 'A festive advent calendar video project featuring creative holiday content.',
    category: 'Seasonal'
  },
  {
    id: 3,
    title: 'Animation Video',
    videoFile: '/video-editing/animationvideo.mov',
    description: 'Creative animation and motion graphics showcase.',
    category: 'Animation'
  },
  {
    id: 4,
    title: 'BBQ and Tube',
    videoFile: '/video-editing/bbqandtube.MP4',
    description: 'A fun lifestyle video combining BBQ adventures with creative storytelling.',
    category: 'Lifestyle'
  },
  {
    id: 5,
    title: 'Live Photos',
    videoFile: '/video-editing/livephotos.MP4',
    description: 'Dynamic live photo compilations brought to life through video.',
    category: 'Photography'
  },
  {
    id: 6,
    title: 'Motel',
    videoFile: '/video-editing/motel.MP4',
    description: 'Cinematic motel video with atmospheric visuals and storytelling.',
    category: 'Cinematic'
  },
  {
    id: 7,
    title: 'Mum and Dad',
    videoFile: '/video-editing/mumanddad.MP4',
    description: 'A heartfelt family video celebrating special moments.',
    category: 'Family'
  },
  {
    id: 8,
    title: 'Simon on the Streets',
    videoFile: '/video-editing/simononthestreets.mov',
    description: 'Urban storytelling featuring Simon exploring city streets.',
    category: 'Documentary'
  },
  {
    id: 9,
    title: 'TikTok',
    videoFile: '/video-editing/tiktok.MOV',
    description: 'Short-form social media content optimized for TikTok.',
    category: 'Social Media'
  },
  {
    id: 10,
    title: 'Vintage Skirt',
    videoFile: '/video-editing/vintageskirt.MP4',
    description: 'Fashion-focused video showcasing vintage style and aesthetics.',
    category: 'Fashion'
  }
];

function VideoEditing() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videoProjects[0] | null>(videoProjects[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClipClick = (video: typeof videoProjects[0]) => {
    setSelectedVideo(video);
    setIsPlaying(false);
  };

  const handleClose = () => {
    window.history.back();
  };

  return (
    <div className="editing-suite">
      {/* Top Menu Bar */}
      <div className="menu-bar">
        <div className="menu-left">
          <button className="back-btn" onClick={handleClose}>← Back</button>
          <span className="app-title">Video Editing Suite</span>
        </div>
        <div className="menu-right">
          <span className="project-name">Hope Gilbert - Video Projects</span>
        </div>
      </div>

      {/* Main Editing Interface */}
      <div className="editing-workspace">
        
        {/* Preview Monitor - Left Side */}
        <div className="preview-section">
          <div className="monitor">
            <div className="monitor-frame">
              {selectedVideo ? (
                <div className="video-container">
                  {isPlaying ? (
                    <video
                      src={selectedVideo.videoFile}
                      controls
                      autoPlay
                      className="video-player"
                      onEnded={() => setIsPlaying(false)}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="thumbnail-preview" onClick={() => setIsPlaying(true)}>
                      <video 
                        src={selectedVideo.videoFile} 
                        className="video-thumbnail"
                        muted
                        playsInline
                      />
                      <div className="play-overlay">
                        <div className="play-button">▶</div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="no-video-selected">
                  <p>Select a clip from the sidebar</p>
                </div>
              )}
            </div>
            
            {/* Monitor Info */}
            {selectedVideo && (
              <div className="monitor-info">
                <div className="info-row">
                  <span className="video-title">{selectedVideo.title}</span>
                </div>
                <div className="info-row">
                  <span className="video-category">{selectedVideo.category}</span>
                </div>
                <div className="video-description-full">{selectedVideo.description}</div>
              </div>
            )}
          </div>
        </div>

        {/* Clips Sidebar - Right Side */}
        <div className="clips-sidebar">
          <div className="sidebar-header">
            <h3>Video Projects</h3>
            <span className="clips-count">{videoProjects.length} clips</span>
          </div>
          
          <div className="clips-grid">
            {videoProjects.map((project) => (
              <div
                key={project.id}
                className={`clip-card ${selectedVideo?.id === project.id ? 'selected' : ''}`}
                onClick={() => handleClipClick(project)}
              >
                <div className="clip-card-thumbnail">
                  <video 
                    src={project.videoFile} 
                    className="clip-thumbnail-video"
                    muted
                    playsInline
                  />
                </div>
                <div className="clip-card-info">
                  <h4 className="clip-card-title">{project.title}</h4>
                  <span className="clip-card-category">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="suite-footer">
        <p className="license-text">Hope Gilbert's Musings and Research by Hope Gilbert is licensed under CC BY-ND 4.0</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600&family=Lora:wght@400;500;600&display=swap');

        .editing-suite {
          min-height: 100vh;
          background: #1a1a1a;
          display: flex;
          flex-direction: column;
          font-family: 'Roboto Mono', monospace;
        }

        /* Menu Bar */
        .menu-bar {
          background: linear-gradient(180deg, #2a2a2a 0%, #1f1f1f 100%);
          padding: 0.5rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #a86b7a;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        .menu-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .back-btn {
          background: rgba(168, 107, 122, 0.2);
          color: #fde9f0;
          border: 1px solid #a86b7a;
          padding: 0.4rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-family: 'Roboto Mono', monospace;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .back-btn:hover {
          background: rgba(168, 107, 122, 0.4);
        }

        .app-title {
          color: #fde9f0;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .menu-right {
          color: #a86b7a;
          font-size: 0.9rem;
        }

        .project-name {
          font-style: italic;
        }

        /* Workspace */
        .editing-workspace {
          flex: 1;
          display: flex;
          flex-direction: row;
          padding: 1rem;
          gap: 1rem;
          overflow: hidden;
        }

        /* Preview Section - Left Side */
        .preview-section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }

        .monitor {
          width: 100%;
          max-width: 450px;
          background: #2a2a2a;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .monitor-frame {
          aspect-ratio: 9/16;
          background: #000;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          border: 2px solid #a86b7a;
          max-height: 70vh;
        }

        .video-container {
          width: 100%;
          height: 100%;
          background: #000;
        }

        .video-player {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .thumbnail-preview {
          width: 100%;
          height: 100%;
          cursor: pointer;
          position: relative;
          background: #000;
        }

        .thumbnail-preview .video-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .play-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .thumbnail-preview:hover .play-overlay {
          background: rgba(0, 0, 0, 0.6);
        }

        .play-button {
          width: 80px;
          height: 80px;
          background: rgba(168, 107, 122, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          padding-left: 6px;
          transition: all 0.3s ease;
        }

        .thumbnail-preview:hover .play-button {
          transform: scale(1.1);
          background: rgba(168, 107, 122, 1);
        }

        .no-video-selected {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 1.2rem;
        }

        .monitor-info {
          margin-top: 1rem;
          padding: 0.75rem;
          background: rgba(168, 107, 122, 0.1);
          border-radius: 4px;
          border: 1px solid rgba(168, 107, 122, 0.3);
        }

        .info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .info-row:last-child {
          margin-bottom: 0;
        }

        .video-title {
          color: #fde9f0;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .video-duration {
          color: #a86b7a;
          font-weight: 500;
        }

        .video-category {
          color: #a86b7a;
          font-size: 0.85rem;
          padding: 0.25rem 0.75rem;
          background: rgba(168, 107, 122, 0.2);
          border-radius: 12px;
        }

        .video-description-full {
          color: #ccc;
          font-size: 0.9rem;
          font-style: italic;
          margin-top: 0.75rem;
          line-height: 1.4;
        }

        /* Clips Sidebar - Right Side */
        .clips-sidebar {
          width: 350px;
          background: #2a2a2a;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          border: 1px solid #a86b7a;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          max-height: calc(100vh - 100px);
        }

        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(168, 107, 122, 0.3);
        }

        .sidebar-header h3 {
          color: #fde9f0;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        .clips-count {
          color: #a86b7a;
          font-size: 0.85rem;
          padding: 0.25rem 0.75rem;
          background: rgba(168, 107, 122, 0.2);
          border-radius: 12px;
        }

        .clips-grid {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .clips-grid::-webkit-scrollbar {
          width: 8px;
        }

        .clips-grid::-webkit-scrollbar-track {
          background: #1f1f1f;
          border-radius: 4px;
        }

        .clips-grid::-webkit-scrollbar-thumb {
          background: #a86b7a;
          border-radius: 4px;
        }

        .clips-grid::-webkit-scrollbar-thumb:hover {
          background: #8a5763;
        }

        /* Clip Cards */
        .clip-card {
          background: #1f1f1f;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .clip-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(168, 107, 122, 0.5);
          border-color: rgba(168, 107, 122, 0.5);
        }

        .clip-card.selected {
          border-color: #fde9f0;
          box-shadow: 0 0 0 2px rgba(253, 233, 240, 0.5);
        }

        .clip-card-thumbnail {
          position: relative;
          aspect-ratio: 9/16;
          overflow: hidden;
          background: #000;
        }

        .clip-card-thumbnail .clip-thumbnail-video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #000;
        }

        .clip-card-info {
          padding: 0.75rem;
        }

        .clip-card-title {
          color: #fde9f0;
          font-size: 0.95rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
        }

        .clip-card-category {
          color: #a86b7a;
          font-size: 0.8rem;
          padding: 0.25rem 0.75rem;
          background: rgba(168, 107, 122, 0.2);
          border-radius: 12px;
          display: inline-block;
        }

        /* Footer */
        .suite-footer {
          background: #1f1f1f;
          padding: 1rem;
          text-align: center;
          border-top: 1px solid rgba(168, 107, 122, 0.3);
        }

        .suite-footer .license-text {
          font-family: 'Lora', serif;
          font-size: 0.85rem;
          color: #888;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .clips-sidebar {
            width: 280px;
          }

          .monitor {
            max-width: 380px;
          }
        }

        @media (max-width: 768px) {
          .editing-workspace {
            flex-direction: column;
            padding: 0.5rem;
          }

          .menu-bar {
            flex-direction: column;
            gap: 0.5rem;
            align-items: flex-start;
          }

          .clips-sidebar {
            width: 100%;
            max-height: 300px;
            order: 2;
          }

          .preview-section {
            order: 1;
            min-height: auto;
          }

          .monitor {
            max-width: 320px;
          }

          .monitor-frame {
            max-height: 50vh;
          }

          .sidebar-header h3 {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .monitor {
            max-width: 280px;
          }

          .clips-sidebar {
            max-height: 250px;
          }

          .clip-card-title {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
}

export default VideoEditing;

