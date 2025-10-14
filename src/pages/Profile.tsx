import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
  color: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work' | 'achievement' | 'personal';
  icon: string;
}

const Profile: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'TypeScript (TSX)', 'Swift', 'HTML', 'CSS', 'JSON'],
      icon: '💻',
      color: '#6366f1'
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Vite', 'Git', 'npm', 'Xcode'],
      icon: '⚛️',
      color: '#8b5cf6'
    },
    {
      title: 'Design & Creative',
      skills: ['Adobe Illustrator', 'Photoshop', 'Premiere Pro', 'InDesign', 'Procreate', 'CapCut', 'Canva'],
      icon: '🎨',
      color: '#ec4899'
    },
    {
      title: 'Marketing & Business',
      skills: ['HubSpot Marketing Hub', 'HubSpot Sales Software', 'SEO Copywriting', 'Social Media PPC', 'Facebook Ads Manager', 'Google Analytics'],
      icon: '📈',
      color: '#10b981'
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2024',
      title: 'Firewalk Fundraiser',
      description: 'Completed Firewalk for Simon on the Streets, raising £270 for homelessness support',
      type: 'achievement',
      icon: '🔥'
    },
    {
      year: '2024',
      title: 'HubSpot Certification',
      description: 'Earned HubSpot Sales Software certification (Nov 2024 - Dec 2025)',
      type: 'achievement',
      icon: '🏆'
    },
    {
      year: '2024',
      title: 'Marketing & Business Development Associate',
      description: 'Current role at Mawney Partners, supporting document preparation, design work, and operations',
      type: 'work',
      icon: '💼'
    },
    {
      year: '2023',
      title: 'Marketing Executive',
      description: 'Worked at Flat Fee Recruiter, developing digital marketing campaigns and strategies',
      type: 'work',
      icon: '📊'
    },
    {
      year: '2021-2024',
      title: 'Self-Taught Programming',
      description: 'Learned Python, JavaScript, TypeScript, Swift, and built multiple projects including Mawney Partners App and this portfolio',
      type: 'personal',
      icon: '🚀'
    },
    {
      year: '2018-2021',
      title: 'BSc Psychology',
      description: 'Graduated from Durham University with dissertation on visual perception and cognitive psychology',
      type: 'education',
      icon: '🎓'
    }
  ];

  const achievements = [
    { title: 'John Snow Ball Chair', description: 'Organized largest college ball at Durham University', icon: '🎭' },
    { title: 'Tough Mudder Participant', description: 'Completed challenging obstacle course for charity', icon: '🏃‍♀️' },
    { title: 'Swimathon Organizer', description: 'Raised funds through swimming challenges', icon: '🏊‍♀️' },
    { title: 'Fresher Representative', description: 'Led student representation and events', icon: '👥' },
    { title: '20 Academic Articles', description: 'Published research on psychology, business, and recruitment', icon: '📚' }
  ];

  const personalInterests = [
    { interest: 'Sports & Fitness', description: 'Netball, swimming, coaching, and maintaining an active lifestyle', icon: '⚽' },
    { interest: 'Creative Arts', description: 'Digital art, traditional painting, video editing, and graphic design', icon: '🎨' },
    { interest: 'Theatre & Music', description: 'Singing, performing arts, and cultural appreciation', icon: '🎭' },
    { interest: 'Travel & Culture', description: 'Extensive European travel and cultural exploration', icon: '✈️' },
    { interest: 'Social Impact', description: 'Charity work, fundraising, and community involvement', icon: '❤️' }
  ];

  const careerGoals = [
    'Web Development & Design',
    'AI & Machine Learning',
    'Marketing Strategy & Innovation',
    'Entrepreneurship & Business Growth',
    'Social Impact Through Technology'
  ];

  const renderOverview = () => (
    <div className="profile-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hope Gilbert</h1>
          <p className="hero-subtitle">Marketing Professional • Self-Taught Developer • Creative Visionary</p>
          <p className="hero-description">
            A dynamic professional blending psychology, marketing expertise, and self-taught programming skills. 
            Currently driving business development at Mawney Partners while building innovative digital solutions 
            and maintaining a passion for creative expression and social impact.
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">20+</span>
            <span className="stat-label">Articles Published</span>
          </div>
          <div className="stat">
            <span className="stat-number">7</span>
            <span className="stat-label">Programming Languages</span>
          </div>
          <div className="stat">
            <span className="stat-number">£500+</span>
            <span className="stat-label">Charity Raised</span>
          </div>
          <div className="stat">
            <span className="stat-number">3</span>
            <span className="stat-label">Major Projects</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="profile-section">
      <h2>Technical & Professional Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category" style={{ '--category-color': category.color } as React.CSSProperties}>
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTimeline = () => (
    <div className="profile-section">
      <h2>Journey & Achievements</h2>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className={`timeline-item ${event.type}`}>
            <div className="timeline-marker">
              <span className="timeline-icon">{event.icon}</span>
            </div>
            <div className="timeline-content">
              <div className="timeline-year">{event.year}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className="profile-section">
      <h2>Notable Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPersonal = () => (
    <div className="profile-section">
      <h2>Personal Interests & Passions</h2>
      <div className="interests-grid">
        {personalInterests.map((item, index) => (
          <div key={index} className="interest-card">
            <div className="interest-icon">{item.icon}</div>
            <h3>{item.interest}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="career-goals">
        <h3>Career Aspirations</h3>
        <div className="goals-list">
          {careerGoals.map((goal, index) => (
            <div key={index} className="goal-item">
              <span className="goal-icon">🎯</span>
              <span>{goal}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="profile-section">
      <h2>Let's Connect</h2>
      <div className="contact-info">
        <div className="contact-methods">
          <a href="mailto:hope.gilbert@example.com" className="contact-link">
            <span className="contact-icon">📧</span>
            <span>hope.gilbert@example.com</span>
          </a>
          <a href="https://www.linkedin.com/in/hope-gilbert-1942471bb/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon">💼</span>
            <span>LinkedIn Profile</span>
          </a>
        </div>
        <p className="contact-note">
          Always excited to discuss new opportunities, collaborations, and innovative projects!
        </p>
      </div>
    </div>
  );

  return (
    <div className={`profile-page ${isLoaded ? 'loaded' : ''}`}>
      {/* Animated Background */}
      <div className="profile-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div 
          className="mouse-follower"
          style={{
            transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="profile-nav">
        <Link to="/" className="back-link">
          <span className="back-icon">←</span>
          <span>Back to Portfolio</span>
        </Link>
        
        <div className="profile-nav-menu">
          <button 
            className={activeSection === 'overview' ? 'active' : ''}
            onClick={() => setActiveSection('overview')}
          >
            Overview
          </button>
          <button 
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </button>
          <button 
            className={activeSection === 'timeline' ? 'active' : ''}
            onClick={() => setActiveSection('timeline')}
          >
            Timeline
          </button>
          <button 
            className={activeSection === 'achievements' ? 'active' : ''}
            onClick={() => setActiveSection('achievements')}
          >
            Achievements
          </button>
          <button 
            className={activeSection === 'personal' ? 'active' : ''}
            onClick={() => setActiveSection('personal')}
          >
            Personal
          </button>
          <button 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => setActiveSection('contact')}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="profile-main">
        <div className="profile-container">
          {activeSection === 'overview' && renderOverview()}
          {activeSection === 'skills' && renderSkills()}
          {activeSection === 'timeline' && renderTimeline()}
          {activeSection === 'achievements' && renderAchievements()}
          {activeSection === 'personal' && renderPersonal()}
          {activeSection === 'contact' && renderContact()}
        </div>
      </main>
    </div>
  );
};

export default Profile;
