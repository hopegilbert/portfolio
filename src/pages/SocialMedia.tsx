import { useState } from 'react';
import { Link } from 'react-router-dom';
import hopeProfilePic from '../assets/hope.jpg';

// Import all social media images
import social1 from '../assets/social-media/social media 1.png';
import calendar from '../assets/social-media/calendar social.png';
import dryJan1 from '../assets/social-media/Dry Jan_Dry Jan 1.jpg';
import dryJan2 from '../assets/social-media/Dry Jan_Dry Jan 2.jpg';
import dryJan3 from '../assets/social-media/Dry Jan_Dry Jan 3.jpg';
import dryJanuary2 from '../assets/social-media/Dry January 2.png';
import dryJanuary from '../assets/social-media/dry january.png';
import glassLemon from '../assets/social-media/glass with lemon.png';
import martiniGlass from '../assets/social-media/martini glass 4.png';
import coffeeWeek from '../assets/social-media/National Coffee Week.png';
import inclusionWeek from '../assets/social-media/National Inclusion Week.png';
import nmdDiscount from '../assets/social-media/NMD discount post.png';
import remembrance1 from '../assets/social-media/Rememberance day.png';
import remembrance2 from '../assets/social-media/Remembrance day 2.png';
import winePouring from '../assets/social-media/social wine pouring.png';
import splashGlass from '../assets/social-media/Splash glass social.png';
import flatFee from '../assets/social-media/the flat fee service.png';
import cvScreening from '../assets/social-media/Tools to help you screen CVs faster.png';
import valentines from '../assets/social-media/Valentines.png';
import webinar from '../assets/social-media/Webinar Social Post.png';
import decemberJobs from '../assets/social-media/Why should you advertise jobs in December.png';
import kindnessDay from '../assets/social-media/World Kindness Day.png';
// New Hope social media posts
import hopeSocial1 from '../assets/social-media/hope-social-1.png';
import hopeSocial2 from '../assets/social-media/hope-social-2.png';
import hopeSocial3 from '../assets/social-media/hope-social-3.png';
import hopeSocial4 from '../assets/social-media/hope-social-4.png';
import hopeSocial5 from '../assets/social-media/hope-social-5.png';
import hopeSocial6 from '../assets/social-media/hope-social-6.png';

// All social media posts data
const allPosts = [
  // Original posts
  {
    id: 1,
    image: social1,
    caption: 'Creative social media content design',
    platform: 'Instagram',
    likes: 234,
    date: 'March 2024'
  },
  {
    id: 2,
    image: calendar,
    caption: 'Calendar social media post design',
    platform: 'Instagram',
    likes: 189,
    date: 'March 2024'
  },
  {
    id: 3,
    image: dryJan1,
    caption: 'Dry January campaign - Day 1',
    platform: 'Instagram',
    likes: 312,
    date: 'February 2024'
  },
  {
    id: 4,
    image: dryJan2,
    caption: 'Dry January campaign - Day 2',
    platform: 'Instagram',
    likes: 267,
    date: 'February 2024'
  },
  {
    id: 5,
    image: dryJan3,
    caption: 'Dry January campaign - Day 3',
    platform: 'Instagram',
    likes: 145,
    date: 'February 2024'
  },
  {
    id: 6,
    image: dryJanuary2,
    caption: 'Dry January promotional design',
    platform: 'Instagram',
    likes: 298,
    date: 'February 2024'
  },
  {
    id: 7,
    image: dryJanuary,
    caption: 'Dry January awareness campaign',
    platform: 'Instagram',
    likes: 187,
    date: 'January 2024'
  },
  {
    id: 8,
    image: glassLemon,
    caption: 'Refreshing drink design for social media',
    platform: 'Instagram',
    likes: 156,
    date: 'January 2024'
  },
  {
    id: 9,
    image: martiniGlass,
    caption: 'Elegant cocktail social media post',
    platform: 'Instagram',
    likes: 223,
    date: 'December 2023'
  },
  {
    id: 10,
    image: coffeeWeek,
    caption: 'National Coffee Week celebration post',
    platform: 'Instagram',
    likes: 445,
    date: 'December 2023'
  },
  {
    id: 11,
    image: inclusionWeek,
    caption: 'National Inclusion Week awareness design',
    platform: 'Instagram',
    likes: 378,
    date: 'November 2023'
  },
  {
    id: 12,
    image: nmdDiscount,
    caption: 'NMD discount promotional post',
    platform: 'Instagram',
    likes: 289,
    date: 'November 2023'
  },
  {
    id: 13,
    image: remembrance1,
    caption: 'Remembrance Day tribute design',
    platform: 'Instagram',
    likes: 512,
    date: 'November 2023'
  },
  {
    id: 14,
    image: remembrance2,
    caption: 'Remembrance Day memorial post',
    platform: 'Instagram',
    likes: 467,
    date: 'November 2023'
  },
  {
    id: 15,
    image: winePouring,
    caption: 'Wine tasting social media content',
    platform: 'Instagram',
    likes: 198,
    date: 'October 2023'
  },
  {
    id: 16,
    image: splashGlass,
    caption: 'Splash glass social media design',
    platform: 'Instagram',
    likes: 234,
    date: 'October 2023'
  },
  {
    id: 17,
    image: flatFee,
    caption: 'The Flat Fee service promotion',
    platform: 'Instagram',
    likes: 156,
    date: 'October 2023'
  },
  {
    id: 18,
    image: cvScreening,
    caption: 'Tools to help screen CVs faster',
    platform: 'Instagram',
    likes: 298,
    date: 'September 2023'
  },
  {
    id: 19,
    image: valentines,
    caption: 'Valentine\'s Day themed social post',
    platform: 'Instagram',
    likes: 345,
    date: 'September 2023'
  },
  {
    id: 20,
    image: webinar,
    caption: 'Webinar social media promotion',
    platform: 'Instagram',
    likes: 189,
    date: 'September 2023'
  },
  {
    id: 21,
    image: decemberJobs,
    caption: 'Why advertise jobs in December',
    platform: 'Instagram',
    likes: 267,
    date: 'August 2023'
  },
  {
    id: 22,
    image: kindnessDay,
    caption: 'World Kindness Day awareness post',
    platform: 'Instagram',
    likes: 423,
    date: 'August 2023'
  },
  // New Hope social media posts
  {
    id: 23,
    image: hopeSocial1,
    caption: 'Creative design showcase for social media',
    platform: 'Instagram',
    likes: 278,
    date: 'April 2024'
  },
  {
    id: 24,
    image: hopeSocial2,
    caption: 'Brand identity social media post',
    platform: 'Instagram',
    likes: 192,
    date: 'April 2024'
  },
  {
    id: 25,
    image: hopeSocial3,
    caption: 'Visual storytelling design',
    platform: 'Instagram',
    likes: 334,
    date: 'April 2024'
  },
  {
    id: 26,
    image: hopeSocial4,
    caption: 'Marketing campaign social media content',
    platform: 'Instagram',
    likes: 245,
    date: 'April 2024'
  },
  {
    id: 27,
    image: hopeSocial5,
    caption: 'Creative portfolio social media post',
    platform: 'Instagram',
    likes: 187,
    date: 'April 2024'
  },
  {
    id: 28,
    image: hopeSocial6,
    caption: 'Design inspiration social media content',
    platform: 'Instagram',
    likes: 299,
    date: 'April 2024'
  }
];

// Manually distribute new Hope social posts throughout existing posts
const socialPosts = [
  allPosts[27],  // hopeSocial6 (swapped with social1)
  allPosts[5],   // dryJanuary2 (moved here, was position 8)
  allPosts[1],   // calendar
  allPosts[2],   // dryJan1
  allPosts[26],  // hopeSocial5 (swapped with dryJan2)
  allPosts[9],   // coffeeWeek (National Coffee Week - swapped with hopeSocial2)
  allPosts[4],   // dryJan3
  allPosts[6],   // dryJanuary (moved from position 9)
  allPosts[22],  // hopeSocial1 (swapped with dryJanuary)
  allPosts[7],   // glassLemon (swapped with hopeSocial3)
  allPosts[24],  // hopeSocial3 (moved from position 10)
  allPosts[8],   // martiniGlass
  allPosts[23],  // hopeSocial2 (moved here, was position 6)
  allPosts[10],  // inclusionWeek (moved from position 14)
  allPosts[11],  // nmdDiscount
  allPosts[12],  // remembrance1 (swapped back with hopeSocial4)
  allPosts[25],  // hopeSocial4 (moved from position 16)
  allPosts[13],  // remembrance2
  allPosts[14],  // winePouring
  allPosts[3],   // dryJan2 (moved from position 5)
  allPosts[15],  // splashGlass
  allPosts[16],  // flatFee
  allPosts[17],  // cvScreening
  allPosts[18],  // valentines
  allPosts[0],   // social1 (moved from position 1)
  allPosts[19],  // webinar
  allPosts[20],  // decemberJobs
  allPosts[21],  // kindnessDay
];

function SocialMedia() {
  const [selectedPost, setSelectedPost] = useState<typeof socialPosts[0] | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'feed'>('grid');

  return (
    <div className="social-page">
      {/* Instagram-style Header */}
      <div className="social-header">
        <div className="header-container">
          <Link to="/" className="back-btn">← Back</Link>
          
          <div className="profile-section">
            <div className="profile-pic">
              <img src={hopeProfilePic} alt="Hope Gilbert" className="profile-pic-img" />
            </div>
            <div className="profile-info">
              <h1 className="profile-name">Hope Gilbert</h1>
              <p className="profile-handle">@hopegilbs</p>
            </div>
          </div>
          
          <div className="profile-stats">
            <div className="stat">
              <span className="stat-number">{socialPosts.length}</span>
              <span className="stat-label">posts</span>
            </div>
            <div className="stat">
              <span className="stat-number">2.4k</span>
              <span className="stat-label">followers</span>
            </div>
            <div className="stat">
              <span className="stat-number">543</span>
              <span className="stat-label">following</span>
            </div>
          </div>

          <div className="profile-bio">
            <p>✨ Creative Designer & Digital Artist</p>
            <p>📍 United Kingdom</p>
            <p>🎨 Social Media Content Creator</p>
          </div>

          <div className="view-toggle">
            <button 
              className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </button>
            <button 
              className={`toggle-btn ${viewMode === 'feed' ? 'active' : ''}`}
              onClick={() => setViewMode('feed')}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <rect x="3" y="3" width="18" height="5" />
                <rect x="3" y="11" width="18" height="5" />
                <rect x="3" y="19" width="18" height="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Posts Grid/Feed */}
      <div className={`posts-container ${viewMode}`}>
        {socialPosts.map((post) => (
          <div
            key={post.id}
            className={`post-item ${viewMode}`}
            onClick={() => setSelectedPost(post)}
          >
            <img src={post.image} alt={post.caption} className="post-image" />
            <div className="post-overlay">
              <div className="overlay-stats">
                <span>❤️ {post.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div className="post-modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="post-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPost(null)}>×</button>
            
            <div className="modal-layout">
              {/* Image Section */}
              <div className="modal-image-section">
                <img src={selectedPost.image} alt={selectedPost.caption} />
              </div>

              {/* Info Section */}
              <div className="modal-info-section">
                <div className="post-header">
                  <div className="post-profile">
                    <div className="post-profile-pic">
                      <img src={hopeProfilePic} alt="Hope Gilbert" className="profile-pic-small-img" />
                    </div>
                    <span className="post-username">hopegilbs</span>
                  </div>
                  <span className="post-date">{selectedPost.date}</span>
                </div>

                <div className="post-content">
                  <p className="post-caption">
                    <span className="username-inline">hopegilbs</span> {selectedPost.caption}
                  </p>
                </div>

                <div className="post-actions">
                  <button className="action-btn">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span>{selectedPost.likes}</span>
                  </button>
                  <span className="platform-badge">{selectedPost.platform}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="social-footer">
        <p className="license-text">Hope Gilbert's Musings and Research by Hope Gilbert is licensed under CC BY-ND 4.0</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Inter:wght@300;400;500;600;700&display=swap');

        .social-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #fafafa 0%, #fff5f8 100%);
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
          overflow-y: auto;
          position: relative;
        }

        .social-page * {
          box-sizing: border-box;
        }

        /* Header */
        .social-header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(168, 107, 122, 0.1);
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
          padding: 2rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-container {
          max-width: 935px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
        }

        .back-btn {
          position: absolute;
          left: 2rem;
          top: 0;
          background: linear-gradient(135deg, rgba(168, 107, 122, 0.05), rgba(245, 201, 224, 0.05));
          border: 1px solid rgba(168, 107, 122, 0.2);
          color: #a86b7a;
          padding: 0.6rem 1.25rem;
          border-radius: 20px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-block;
          box-shadow: 0 2px 8px rgba(168, 107, 122, 0.1);
        }

        .back-btn:hover {
          background: linear-gradient(135deg, rgba(168, 107, 122, 0.1), rgba(245, 201, 224, 0.1));
          border-color: #a86b7a;
          transform: translateX(-3px);
          box-shadow: 0 4px 12px rgba(168, 107, 122, 0.2);
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          margin-bottom: 2rem;
          padding-top: 3rem;
        }

        .profile-pic {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a86b7a 0%, #f5c9e0 50%, #fde9f0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 700;
          color: white;
          border: 4px solid white;
          box-shadow: 
            0 0 0 2px rgba(168, 107, 122, 0.3),
            0 8px 24px rgba(168, 107, 122, 0.2);
          position: relative;
          overflow: hidden;
        }

        .profile-pic::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.2) 100%);
          z-index: 1;
        }

        .profile-pic-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }

        .profile-info {
          flex: 1;
        }

        .profile-name {
          font-family: 'Inter', sans-serif !important;
          font-size: 1.9rem;
          font-weight: 300;
          margin: 0 0 0.35rem 0;
          color: #262626 !important;
          letter-spacing: -0.5px;
          text-shadow: none !important;
          transform: none !important;
          transition: none !important;
          animation: none !important;
        }

        .profile-name:hover {
          transform: none !important;
          text-shadow: none !important;
          color: #262626 !important;
        }

        .profile-handle {
          font-size: 1rem;
          color: #a86b7a;
          margin: 0;
          font-weight: 500;
        }

        .profile-stats {
          display: flex;
          gap: 4rem;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(253, 233, 240, 0.3), rgba(245, 201, 224, 0.2));
          border-radius: 16px;
          border: 1px solid rgba(168, 107, 122, 0.1);
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #a86b7a;
          background: linear-gradient(135deg, #a86b7a, #f5c9e0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #8e8e8e;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        .profile-bio {
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 12px;
          border: 1px solid rgba(168, 107, 122, 0.05);
        }

        .profile-bio p {
          margin: 0.4rem 0;
          color: #262626;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .view-toggle {
          display: flex;
          gap: 0;
          justify-content: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(168, 107, 122, 0.1);
        }

        .toggle-btn {
          background: none;
          border: none;
          padding: 0.85rem 2rem;
          cursor: pointer;
          color: #8e8e8e;
          transition: all 0.3s ease;
          border-bottom: 3px solid transparent;
          position: relative;
        }

        .toggle-btn:hover {
          color: #a86b7a;
          background: rgba(168, 107, 122, 0.03);
        }

        .toggle-btn.active {
          color: #a86b7a;
          border-bottom-color: #a86b7a;
          font-weight: 600;
        }

        .toggle-btn svg {
          transition: all 0.3s ease;
        }

        .toggle-btn.active svg {
          filter: drop-shadow(0 2px 4px rgba(168, 107, 122, 0.3));
        }

        /* Posts Container */
        .posts-container {
          max-width: 935px;
          margin: 0 auto;
          padding: 2.5rem 2rem;
        }

        .posts-container.grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .posts-container.feed {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          max-width: 614px;
        }

        /* Grid View Posts */
        .post-item.grid {
          aspect-ratio: 1;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .post-item.grid:hover {
          box-shadow: 0 8px 24px rgba(168, 107, 122, 0.2);
          transform: translateY(-4px);
        }

        .post-item.grid .post-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .post-item.grid:hover .post-image {
          transform: scale(1.08);
        }

        .post-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(168, 107, 122, 0.7), rgba(245, 201, 224, 0.6));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.4s ease;
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
        }

        .post-item.grid:hover .post-overlay {
          opacity: 1;
        }

        .overlay-stats {
          color: white;
          font-weight: 700;
          font-size: 1.2rem;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        /* Feed View Posts */
        .post-item.feed {
          background: white;
          border: 1px solid rgba(168, 107, 122, 0.15);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .post-item.feed:hover {
          box-shadow: 0 8px 24px rgba(168, 107, 122, 0.15);
          transform: translateY(-4px);
        }

        .post-item.feed .post-image {
          width: 100%;
          height: auto;
        }

        .post-item.feed .post-overlay {
          display: none;
        }

        /* Posts Container */
        .posts-container {
          max-width: 935px;
          margin: 0 auto;
          padding: 2.5rem 2rem;
          width: 100%;
          overflow: visible !important;
          height: auto !important;
          max-height: none !important;
        }

        .posts-container.grid {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .posts-container.feed {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          max-width: 614px;
        }

        /* Grid View Posts */
        .post-item.grid {
          aspect-ratio: 1;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .post-item.grid:hover {
          box-shadow: 0 12px 32px rgba(168, 107, 122, 0.25);
          transform: translateY(-6px);
        }

        .post-item.grid .post-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .post-item.grid:hover .post-image {
          transform: scale(1.1);
        }

        .post-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(168, 107, 122, 0.8), rgba(245, 201, 224, 0.7));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.4s ease;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        .post-item.grid:hover .post-overlay {
          opacity: 1;
        }

        .overlay-stats {
          color: white;
          font-weight: 700;
          font-size: 1.3rem;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Feed View Posts */
        .post-item.feed {
          background: white;
          border: 1px solid rgba(168, 107, 122, 0.12);
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(168, 107, 122, 0.08);
          transition: all 0.4s ease;
        }

        .post-item.feed:hover {
          box-shadow: 0 12px 32px rgba(168, 107, 122, 0.18);
          transform: translateY(-6px);
          border-color: rgba(168, 107, 122, 0.25);
        }

        .post-item.feed .post-image {
          width: 100%;
          height: auto;
        }

        .post-item.feed .post-overlay {
          display: none;
        }

        /* Post Modal */
        .post-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
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

        .post-modal {
          background: white;
          max-width: 1300px;
          max-height: 90vh;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        @keyframes slideUp {
          from {
            transform: translateY(40px);
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
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(168, 107, 122, 0.95);
          color: white;
          border: none;
          font-size: 1.6rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
          line-height: 1;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        }

        .modal-close:hover {
          background: #a86b7a;
          transform: rotate(90deg) scale(1.1);
        }

        .modal-layout {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          height: 85vh;
        }

        .modal-image-section {
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .modal-image-section img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }

        .modal-info-section {
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
        }

        .post-header {
          padding: 1.25rem;
          border-bottom: 1px solid rgba(168, 107, 122, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
        }

        .post-profile {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .post-profile-pic {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a86b7a, #f5c9e0);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 700;
          color: white;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(168, 107, 122, 0.3);
          position: relative;
          overflow: hidden;
        }

        .profile-pic-small-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }

        .post-username {
          font-weight: 600;
          color: #262626;
          font-size: 1rem;
        }

        .post-date {
          font-size: 0.85rem;
          color: #a86b7a;
          font-weight: 500;
        }

        .post-content {
          padding: 1.5rem;
          flex: 1;
          overflow-y: auto;
        }

        .post-caption {
          color: #262626;
          line-height: 1.7;
          margin: 0;
          font-size: 1rem;
        }

        .username-inline {
          font-weight: 700;
          color: #a86b7a;
          margin-right: 0.5rem;
        }

        .post-actions {
          padding: 1.25rem;
          border-top: 1px solid rgba(168, 107, 122, 0.1);
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: white;
        }

        .action-btn {
          background: linear-gradient(135deg, rgba(168, 107, 122, 0.05), rgba(245, 201, 224, 0.05));
          border: 1px solid rgba(168, 107, 122, 0.2);
          padding: 0.6rem 1.25rem;
          border-radius: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: #a86b7a;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          background: linear-gradient(135deg, rgba(168, 107, 122, 0.1), rgba(245, 201, 224, 0.1));
          border-color: #a86b7a;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(168, 107, 122, 0.2);
        }

        .action-btn svg {
          stroke: #a86b7a;
        }

        .platform-badge {
          margin-left: auto;
          padding: 0.5rem 1.1rem;
          background: linear-gradient(135deg, #a86b7a, #f5c9e0);
          color: white;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(168, 107, 122, 0.3);
        }

        /* Footer */
        .social-footer {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(168, 107, 122, 0.1);
          padding: 2rem;
          text-align: center;
          margin-top: 3rem;
          box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.04);
        }

        .social-footer .license-text {
          font-family: 'Lora', serif;
          font-size: 0.85rem;
          color: #a86b7a;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 935px) {
          .profile-section {
            gap: 1.5rem;
          }

          .profile-pic {
            width: 120px;
            height: 120px;
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .modal-layout {
            grid-template-columns: 1fr;
            height: auto;
            max-height: 85vh;
          }

          .modal-image-section {
            max-height: 60vh;
          }

          .posts-container.grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 3px;
          }

          .profile-section {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1rem;
          }

          .profile-pic {
            width: 100px;
            height: 100px;
            font-size: 2rem;
          }

          .profile-name {
            font-size: 1.5rem;
          }

          .profile-stats {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .header-container {
            padding: 0 1rem;
          }

          .posts-container {
            padding: 1rem;
          }

          .profile-pic {
            width: 80px;
            height: 80px;
            font-size: 1.75rem;
          }

          .profile-name {
            font-size: 1.25rem;
          }

          .profile-stats {
            gap: 2rem;
          }

          .stat-number {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default SocialMedia;

