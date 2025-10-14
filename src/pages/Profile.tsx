import React, { useState, useEffect } from 'react';
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

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  highlights: string[];
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
      icon: 'fa-code',
      color: '#6366f1'
    },
    {
      title: 'Development Tools',
      skills: ['React', 'Vite', 'Git', 'npm', 'Xcode'],
      icon: 'fa-layer-group',
      color: '#8b5cf6'
    },
    {
      title: 'Design & Creative',
      skills: ['Adobe Illustrator', 'Photoshop', 'Premiere Pro', 'InDesign', 'Procreate', 'CapCut', 'Canva', 'WordPress'],
      icon: 'fa-palette',
      color: '#ec4899'
    },
    {
      title: 'Marketing & Business',
      skills: ['HubSpot Marketing Hub', 'HubSpot Sales Software', 'SEO Copywriting', 'Social Media PPC', 'Facebook Ads Manager', 'Google Analytics', 'Email Marketing'],
      icon: 'fa-chart-line',
      color: '#10b981'
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2025',
      title: 'Marketing & Business Development Associate',
      description: 'Started at Mawney Partners in London (May 2025 - Present), supporting document preparation, design work, and operations',
      type: 'work',
      icon: 'fa-briefcase'
    },
      {
        year: '2023-2025',
        title: 'Marketing Executive',
        description: 'Marketing Executive at Flat Fee Recruiter (May 2023 - Present), Leeds, England',
        type: 'work',
        icon: 'fa-chart-bar'
      },
      {
        year: '2023',
        title: 'Bar Tender',
        description: 'Revolution Bars (Feb 2023 - May 2023), Leeds, England',
        type: 'work',
        icon: 'fa-glass-martini-alt'
      },
      {
        year: '2022',
        title: 'Recruitment Administrator',
        description: 'Mammoet (Oct 2022 - Dec 2022), Leeds, England',
        type: 'work',
        icon: 'fa-briefcase'
      },
      {
        year: '2022',
        title: 'Bar Tender',
        description: 'Jimmy Allens (Aug 2022 - Feb 2023), Leeds, England',
        type: 'work',
        icon: 'fa-glass-martini-alt'
      },
      {
        year: '2022',
        title: 'Barista',
        description: 'M&S (Aug 2022 - Oct 2022), Leeds, England',
        type: 'work',
        icon: 'fa-coffee'
      },
      {
        year: '2021-2022',
        title: 'Childcare',
        description: 'Children\'s Corner (Aug 2021 - Jun 2022), Leeds, England',
        type: 'work',
        icon: 'fa-child'
      },
    {
      year: '2024',
      title: 'HubSpot Sales Software Certification',
      description: 'Earned certification (Nov 2024 - Dec 2025)',
      type: 'achievement',
      icon: 'fa-award'
    },
    {
      year: '2024',
      title: 'Firewalk for Simon on the Streets',
      description: 'Walked over hot coals to raise £270 for homelessness support (Nov 2024)',
      type: 'achievement',
      icon: 'fa-fire'
    },
    {
      year: '2024',
      title: 'Graduated Durham University',
      description: 'BSc Psychology with 2:1 honors. Dissertation achieved First Class (76%)',
      type: 'education',
      icon: 'fa-graduation-cap'
    },
    {
      year: '2021',
      title: 'Tough Mudder for Breast Cancer Now',
      description: 'Completed 10-mile obstacle course (Jan-Jul 2021), raising over £1,100',
      type: 'achievement',
      icon: 'fa-running'
    },
    {
      year: '2020',
      title: 'Started Durham University',
      description: 'Began BSc Psychology degree at Durham University',
      type: 'education',
      icon: 'fa-university'
    },
      {
        year: '2019-2020',
        title: 'Assistant Swim Coach',
        description: 'Coached at Ducklings and Dolphins (Sept 2019 - Jul 2020)',
        type: 'work',
        icon: 'fa-swimming-pool'
      },
      {
        year: '2018-2021',
        title: 'Hospitality Work',
        description: 'Bartender and server roles in various bars and restaurants',
        type: 'work',
        icon: 'fa-glass-martini-alt'
      },
      {
        year: '2019-2020',
        title: 'Waitress',
        description: 'Stansfield Arms (Dec 2019 - Jan 2020), Yorkshire, England',
        type: 'work',
        icon: 'fa-utensils'
      },
      {
        year: '2017-2019',
        title: 'Shop Assistant',
        description: 'Firefly Pottery (Aug 2017 - Dec 2019), Yorkshire, England',
        type: 'work',
        icon: 'fa-store'
      },
    {
      year: '2020',
      title: 'Graduated Woodhouse Grove School',
      description: 'Completed A-Levels with A*BB (Art A*, Psychology B, English Literature B)',
      type: 'education',
      icon: 'fa-school'
    },
      {
        year: '2024',
        title: 'John Snow Charity Fashion Show',
        description: 'Organized charity fashion show raising £13,500',
        type: 'achievement',
        icon: 'fa-tshirt'
      },
      {
        year: '2010',
        title: 'Swimathon for Marie Curie',
        description: 'Raised over £1,000 for cancer support',
        type: 'achievement',
        icon: 'fa-hands-helping'
      }
  ];

  const achievements = [
    { title: 'John Snow Ball Chair', description: 'Managed large-scale events, overseeing themes, entertainment, and catering', icon: 'fa-calendar-alt' },
    { title: 'John Snow Netball Club', description: 'Social Secretary and Gym Coordinator at Durham University', icon: 'fa-users' },
    { title: 'First Class Dissertation', description: 'Achieved First Class (76%) in Psychology dissertation at Durham University', icon: 'fa-graduation-cap' },
    { title: 'Head of Atkinson House', description: 'Leadership role at Woodhouse Grove School', icon: 'fa-crown' },
    { title: 'School Prefect', description: 'Mentoring and supporting younger students', icon: 'fa-medal' },
    { title: 'A-Level Art Grade A*', description: 'Achieved highest grade in Art A-Level', icon: 'fa-palette' },
    { title: '2nd Team Netball', description: 'Athletic achievement at Woodhouse Grove School', icon: 'fa-trophy' },
    { title: 'John Snow Charity Fashion Show', description: 'Organized charity fashion show raising £13,500', icon: 'fa-tshirt' }
  ];

  const personalInterests = [
    { interest: 'Sports & Netball', description: 'Played for school Second Netball Team and District Team, helped college team secure top league position', icon: 'fa-volleyball-ball' },
    { interest: 'Swimming & Coaching', description: 'Assistant Swim Coach at Ducklings and Dolphins (Sept 2019 - Jul 2020)', icon: 'fa-swimmer' },
    { interest: 'Theatre & Music', description: 'Singing (Sarah Ridy Cup winner), Grade 7 Musical Theatre (Distinction), Grade 6 Flute', icon: 'fa-music' },
    { interest: 'Creative Arts', description: 'A-Level Art background, traditional mediums (acrylic, watercolor, oil, pencil) and digital art', icon: 'fa-paint-brush' },
    { interest: 'Travel & Culture', description: 'Extensive travel throughout Europe', icon: 'fa-globe-europe' },
    { interest: 'Charity & Social Impact', description: 'Raised significant funds for various charities including John Snow Charity Fashion Show (£13,500), Tough Mudder for Breast Cancer Now (£1,100+), Marie Curie (£1,000+), and Simon on the Streets (£270)', icon: 'fa-heart' }
  ];

  const careerGoals = [
    'Web Development & Design',
    'Artificial Intelligence',
    'Marketing & Digital Strategy',
    'Human-Centered Design',
    'Technology & Creativity Intersection'
  ];

  const workExperience: WorkExperience[] = [
    {
      company: 'Mawney Partners',
      role: 'Marketing and Business Development Associate',
      period: 'May 2025 - Present',
      location: 'London, England',
      description: 'Supporting business development initiatives with focus on document preparation, design work, and operations.',
      responsibilities: [
        'Document preparation and design work',
        'Supporting operations and business development',
        'Built Mawney Partners App and Website',
        'Created Market Maps for business analysis'
      ]
    },
    {
      company: 'Flat Fee Recruiter',
      role: 'Marketing Executive',
      period: 'May 2023 - Present',
      location: 'Leeds, England',
      description: 'Promoted to Marketing Executive, driving marketing efforts by blending strategy with creativity to craft compelling campaigns.',
      responsibilities: [
        'Executed targeted marketing strategies',
        'Developed engaging content for multiple platforms',
        'Managed social media PPC advertising campaigns',
        'Leveraged data and analytics to optimize performance',
        'Created marketing materials using Adobe Creative Suite'
      ]
    },
    {
      company: 'Revolution Bars',
      role: 'Bar Tender',
      period: 'Feb 2023 - May 2023',
      location: 'Leeds, England',
      description: 'Provided excellent customer service in a busy bar environment.',
      responsibilities: [
        'Served drinks and cocktails to customers',
        'Managed busy periods efficiently',
        'Handled cash and card transactions',
        'Maintained clean and organized bar area',
        'Provided excellent customer service'
      ]
    },
    {
      company: 'Mammoet',
      role: 'Recruitment Administrator',
      period: 'Oct 2022 - Dec 2022',
      location: 'Leeds, England',
      description: 'Administrative support for recruitment processes.',
      responsibilities: [
        'Assisted with recruitment administration',
        'Coordinated candidate communications',
        'Maintained recruitment databases',
        'Supported recruitment team with administrative tasks',
        'Ensured compliance with recruitment procedures'
      ]
    },
    {
      company: 'Jimmy Allens',
      role: 'Bar Tender',
      period: 'Aug 2022 - Feb 2023',
      location: 'Leeds, England',
      description: 'Bar service in restaurant environment.',
      responsibilities: [
        'Served drinks to restaurant customers',
        'Managed bar operations during service',
        'Handled payments and transactions',
        'Maintained bar cleanliness and organization',
        'Worked effectively in team environment'
      ]
    },
    {
      company: 'M&S',
      role: 'Barista',
      period: 'Aug 2022 - Oct 2022',
      location: 'Leeds, England',
      description: 'Coffee service and customer service.',
      responsibilities: [
        'Prepared and served coffee and beverages',
        'Maintained coffee equipment',
        'Provided excellent customer service',
        'Handled cash and card transactions',
        'Managed inventory and stock rotation'
      ]
    },
    {
      company: 'Children\'s Corner',
      role: 'Childcare',
      period: 'Aug 2021 - Jun 2022',
      location: 'Leeds, England',
      description: 'Provided childcare services for multiple families.',
      responsibilities: [
        'Supervised children of various ages',
        'Organized educational and recreational activities',
        'Ensured children\'s safety and wellbeing',
        'Maintained clean and organized environments',
        'Built strong relationships with families'
      ]
    },
    {
      company: 'Ducklings and Dolphins',
      role: 'Assistant Swim Coach',
      period: 'Sept 2019 - Jul 2020',
      location: 'Yorkshire, England',
      description: 'Coached swimming lessons, combining passion for sports with mentorship and instruction.',
      responsibilities: [
        'Coached swimming lessons for various age groups',
        'Developed lesson plans and training programs',
        'Ensured safety and proper technique',
        'Built positive relationships with students and parents',
        'Supported head coach in administrative tasks'
      ]
    },
    {
      company: 'Various Hospitality Roles',
      role: 'Bartender, Waitress, Barista',
      period: '2018 - 2021',
      location: 'Durham & Yorkshire, England',
      description: 'Customer-facing roles during university, developing strong communication and service skills.',
      responsibilities: [
        'Provided excellent customer service',
        'Managed high-volume periods efficiently',
        'Handled cash and card transactions',
        'Maintained clean and organized work environment',
        'Worked effectively in team settings'
      ]
    },
    {
      company: 'Freelance',
      role: 'Graphic Designer',
      period: '2019 - Present',
      location: 'Remote',
      description: 'Freelance design work for various clients including KoreaSphereUK and Palatine Power.',
      responsibilities: [
        'Created logos and branding materials',
        'Designed packaging and promotional materials',
        'Developed social media content',
        'Collaborated with clients to meet design requirements',
        'Delivered projects on time and to specification'
      ]
    },
    {
      company: 'Childcare & Babysitting',
      role: 'Childcare Provider',
      period: '2017 - 2020',
      location: 'Various',
      description: 'Provided childcare services for multiple families, ensuring safety and engaging activities.',
      responsibilities: [
        'Supervised children of various ages',
        'Organized educational and recreational activities',
        'Ensured children\'s safety and wellbeing',
        'Maintained clean and organized environments',
        'Built strong relationships with families'
      ]
    },
    {
      company: 'Stansfield Arms',
      role: 'Waitress',
      period: 'Dec 2019 - Jan 2020',
      location: 'Yorkshire, England',
      description: 'Waitress service in restaurant environment.',
      responsibilities: [
        'Served food and beverages to customers',
        'Managed tables and customer service',
        'Handled cash and card transactions',
        'Maintained clean dining areas',
        'Worked effectively in team environment'
      ]
    },
    {
      company: 'Firefly Pottery',
      role: 'Shop Assistant',
      period: 'Aug 2017 - Dec 2019',
      location: 'Yorkshire, England',
      description: 'Retail assistant in pottery shop.',
      responsibilities: [
        'Provided customer service and assistance',
        'Handled sales and transactions',
        'Maintained shop appearance and organization',
        'Managed inventory and stock',
        'Built relationships with customers'
      ]
    }
  ];

  const educationHistory: Education[] = [
    {
      institution: 'Durham University',
      degree: 'BSc Psychology',
      period: '2020 - 2024',
      grade: '2:1 (Second Class Honours, Upper Division)',
      highlights: [
        'Dissertation: "Does Cognitive Estimation Precede Visual Experience in the Perception of Object Shape and Material?" - First Class (76%)',
        'Studied modules in social, cognitive and biological psychology with advanced research methods and statistics',
        'Took elective English Literature module in year 1',
        'Final year modules included Business and Economic Psychology, Close Relationships, Psychology and Law',
        'John Snow Ball Chair - organized large-scale events',
        'John Snow Netball Club Social Secretary and Gym Coordinator',
        'Fresher Representative - completed training in Alcohol Awareness, Consent Matters, and Active Bystander Intervention',
        'Strong analytical and research abilities, fostering data-driven decision-making'
      ]
    },
    {
      institution: 'Woodhouse Grove School',
      degree: 'A-Levels',
      period: '2013 - 2020',
      grade: 'A*BB (Art A*, Psychology B, English Literature B)',
      highlights: [
        'A-Level Art - Grade A* - developed strong creative and design skills',
        'A-Level Psychology - Grade B',
        'A-Level English Literature - Grade B',
        'Head of Atkinson House - leadership and organizational responsibilities',
        'School Prefect - mentoring and supporting younger students',
        '2nd Team Netball - athletic achievement',
        'Full Arts Colours - recognition for excellence in the arts',
        'Sarah Ridy Cup for Singing - vocal performance award',
        'Grade 7 Musical Theatre (Distinction) - Dec 2019',
        'Grade 6 Flute (Pass)'
      ]
    }
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
              <i className={`fas ${category.icon} category-icon`}></i>
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

  const renderExperience = () => (
    <div className="profile-section">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {workExperience.map((job, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-title">
                <h3>{job.role}</h3>
                <h4>{job.company}</h4>
              </div>
              <div className="experience-meta">
                <span className="experience-period">{job.period}</span>
                <span className="experience-location">📍 {job.location}</span>
              </div>
            </div>
            <p className="experience-description">{job.description}</p>
            <ul className="experience-responsibilities">
              {job.responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEducation = () => (
    <div className="profile-section">
      <h2>Education</h2>
      <div className="education-list">
        {educationHistory.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <div className="education-title">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
              </div>
              <div className="education-meta">
                <span className="education-period">{edu.period}</span>
                <span className="education-grade">🎓 {edu.grade}</span>
              </div>
            </div>
            <ul className="education-highlights">
              {edu.highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex}>{highlight}</li>
              ))}
            </ul>
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
              <i className={`fas ${event.icon} timeline-icon`}></i>
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
            <div className="achievement-icon">
              <i className={`fas ${achievement.icon}`}></i>
            </div>
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
            <div className="interest-icon">
              <i className={`fas ${item.icon}`}></i>
            </div>
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
              <i className="fas fa-bullseye goal-icon"></i>
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
            <i className="fas fa-envelope contact-icon"></i>
            <span>hopegilbert@live.com</span>
          </a>
          <a href="https://www.linkedin.com/in/hope-gilbert-1942471bb/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <i className="fas fa-briefcase contact-icon"></i>
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
        
        <div className="profile-nav-menu">
          <button 
            className={activeSection === 'overview' ? 'active' : ''}
            onClick={() => setActiveSection('overview')}
          >
            Overview
          </button>
          <button 
            className={activeSection === 'experience' ? 'active' : ''}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </button>
          <button 
            className={activeSection === 'education' ? 'active' : ''}
            onClick={() => setActiveSection('education')}
          >
            Education
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
          {activeSection === 'experience' && renderExperience()}
          {activeSection === 'education' && renderEducation()}
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
