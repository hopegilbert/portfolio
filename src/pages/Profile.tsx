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
      title: 'Development Tools',
      skills: ['React', 'Vite', 'Git', 'npm', 'Xcode'],
      icon: '⚛️',
      color: '#8b5cf6'
    },
    {
      title: 'Design & Creative',
      skills: ['Adobe Illustrator', 'Photoshop', 'Premiere Pro', 'InDesign', 'Procreate', 'CapCut', 'Canva', 'WordPress'],
      icon: '🎨',
      color: '#ec4899'
    },
    {
      title: 'Marketing & Business',
      skills: ['HubSpot Marketing Hub', 'HubSpot Sales Software', 'SEO Copywriting', 'Social Media PPC', 'Facebook Ads Manager', 'Google Analytics', 'Email Marketing'],
      icon: '📈',
      color: '#10b981'
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      year: 'Nov 2024',
      title: 'Firewalk for Simon on the Streets',
      description: 'Raised £270 by walking over hot coals to support those facing homelessness',
      type: 'achievement',
      icon: '🔥'
    },
    {
      year: 'Nov 2024',
      title: 'HubSpot Sales Software Certification',
      description: 'Certified in HubSpot Sales Software (Nov 2024 - Dec 2025)',
      type: 'achievement',
      icon: '🏆'
    },
    {
      year: 'May 2025',
      title: 'Marketing & Business Development Associate',
      description: 'Mawney Partners, London - Supporting document preparation, design work, and operations',
      type: 'work',
      icon: '💼'
    },
    {
      year: 'Jan 2025',
      title: 'Marketing Executive',
      description: 'Flat Fee Recruiter - Drove marketing efforts, executed targeted campaigns',
      type: 'work',
      icon: '📊'
    },
    {
      year: 'Oct 2024',
      title: 'Marketing Assistant/Graduate Trainee',
      description: 'Flat Fee Recruiter - Blended strategy with creativity for compelling campaigns',
      type: 'work',
      icon: '📈'
    },
    {
      year: 'Jul 2021',
      title: 'Tough Mudder for Breast Cancer Now',
      description: 'Completed 10-mile obstacle course, raising over £1,100',
      type: 'achievement',
      icon: '🏃‍♀️'
    },
    {
      year: '2018-2021',
      title: 'BSc Psychology - Durham University',
      description: 'Graduated with 2:1 honors. Dissertation achieved First (76%) on cognitive estimation and visual perception',
      type: 'education',
      icon: '🎓'
    },
    {
      year: '2010',
      title: 'Swimathon for Marie Curie',
      description: 'Raised over £1,000 for cancer support',
      type: 'achievement',
      icon: '🏊‍♀️'
    }
  ];

  const achievements = [
    { title: 'John Snow Ball Chair', description: 'Managed three large-scale events for over 700 guests, overseeing themes, entertainment, and catering', icon: '🎭' },
    { title: 'John Snow Charity Fashion Show', description: 'Compered event that raised over £13,500', icon: '💝' },
    { title: 'First Class Dissertation', description: 'Achieved First (76%) in Psychology dissertation at Durham University', icon: '🎓' },
    { title: 'Full Arts Colours', description: 'Awarded for excellence in the arts at Woodhouse Grove School', icon: '🎨' },
    { title: '2nd VII Netball Colours', description: 'Recognized for netball achievements', icon: '🏐' },
    { title: 'Sarah Ridy Cup for Singing', description: 'School award for vocal performance', icon: '🎤' },
    { title: 'Grade 7 Musical Theatre Distinction', description: 'Achieved distinction in Musical Theatre (Dec 2019)', icon: '🎭' }
  ];

  const personalInterests = [
    { interest: 'Sports & Netball', description: 'Played for school Second Netball Team and District Team, helped college team secure top league position', icon: '🏐' },
    { interest: 'Swimming & Coaching', description: 'Assistant Swim Coach at Ducklings and Dolphins (Sept 2019 - Jul 2020)', icon: '🏊‍♀️' },
    { interest: 'Theatre & Music', description: 'Singing (Sarah Ridy Cup winner), Grade 7 Musical Theatre (Distinction), Grade 5 Flute', icon: '🎤' },
    { interest: 'Creative Arts', description: 'A-Level Art background, traditional mediums (acrylic, watercolor, oil, pencil) and digital art', icon: '🎨' },
    { interest: 'Travel & Culture', description: 'Extensive travel throughout Europe', icon: '✈️' },
    { interest: 'Charity & Social Impact', description: 'Raised over £15,000 for various charities including Breast Cancer Now, Marie Curie, and Simon on the Streets', icon: '❤️' }
  ];

  const careerGoals = [
    'Web Development & Design',
    'Artificial Intelligence',
    'Marketing & Digital Strategy',
    'Human-Centered Design',
    'Technology & Creativity Intersection'
  ];

  const renderOverview = () => (
    <div className="profile-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hope Gilbert</h1>
          <p className="hero-subtitle">Marketing & Business Development • Self-Taught Developer • Psychology Graduate</p>
          <p className="hero-description">
            Marketing and Business Development Associate at Mawney Partners with a BSc in Psychology from Durham University. 
            Combining marketing expertise, self-taught programming skills (Python, JavaScript, TypeScript, Swift), 
            and creative design abilities to deliver innovative digital solutions. Passionate about bridging technology, 
            psychology, and creative expression.
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">20</span>
            <span className="stat-label">Academic Articles</span>
          </div>
          <div className="stat">
            <span className="stat-number">7</span>
            <span className="stat-label">Programming Languages</span>
          </div>
          <div className="stat">
            <span className="stat-number">£15K+</span>
            <span className="stat-label">Charity Funds Raised</span>
          </div>
          <div className="stat">
            <span className="stat-number">17+</span>
            <span className="stat-label">Digital Art Pieces</span>
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
          <a href="mailto:hopegilbert@live.com" className="contact-link">
            <span className="contact-icon">📧</span>
            <span>hopegilbert@live.com</span>
          </a>
          <a href="https://www.linkedin.com/in/hope-gilbert-1942471bb/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon">💼</span>
            <span>LinkedIn Profile</span>
          </a>
        </div>
        <p className="contact-note">
          Based in London, England. Open to discussing opportunities in web development, design, AI, and marketing.
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
