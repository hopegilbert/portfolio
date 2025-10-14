import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import portrait1 from '../assets/profile/portrait-1.png';
import portrait2 from '../assets/profile/portrait-2.png';
import portrait3 from '../assets/profile/portrait-3.png';
import portrait4 from '../assets/profile/portrait-4.png';
import hope2 from '../assets/profile/hope-2.png';

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
      title: 'John Snow Charity Fashion Show',
      description: 'Compered charity fashion show raising £13,500',
      type: 'achievement',
      icon: 'fa-tshirt'
    },
    {
      year: '2024',
      title: 'Graduated Durham University',
      description: 'BSc Psychology with 2:1 honors. Dissertation achieved First Class (76%)',
      type: 'education',
      icon: 'fa-graduation-cap'
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
      year: '2021',
      title: 'Tough Mudder for Breast Cancer Now',
      description: 'Completed 10-mile obstacle course (Jan-Jul 2021), raising over £1,100',
      type: 'achievement',
      icon: 'fa-running'
    },
    {
      year: '2020',
      title: 'Graduated Woodhouse Grove School',
      description: 'Completed A-Levels with A*BB (Art A*, Psychology B, English Literature B)',
      type: 'education',
      icon: 'fa-school'
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
    { title: 'John Snow Charity Fashion Show', description: 'Compered charity fashion show raising £13,500', icon: 'fa-tshirt' }
  ];

  const personalInterests = [
    { interest: 'Sports & Netball', description: 'Played for school Second Netball Team and District Team, helped college team secure top league position', icon: 'fa-volleyball-ball' },
    { interest: 'Swimming & Coaching', description: 'Assistant Swim Coach at Ducklings and Dolphins (Sept 2019 - Jul 2020)', icon: 'fa-swimmer' },
    { interest: 'Theatre & Music', description: 'Singing (Sarah Ridy Cup winner), Grade 7 Musical Theatre (Distinction), Grade 6 Flute', icon: 'fa-music' },
    { interest: 'Creative Arts', description: 'A-Level Art background, traditional mediums (acrylic, watercolor, oil, pencil) and digital art', icon: 'fa-paint-brush' },
    { interest: 'Travel & Culture', description: 'Extensive travel throughout Europe', icon: 'fa-globe-europe' },
    { interest: 'Charity & Social Impact', description: 'Raised significant funds for various charities including compering John Snow Charity Fashion Show (£13,500), Tough Mudder for Breast Cancer Now (£1,100+), Marie Curie (£1,000+), and Simon on the Streets (£270)', icon: 'fa-heart' }
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
    <div className="portfolio-container">
      {/* Cover Page */}
      <div className="cover-page">
        <div className="cover-background">
          <div className="cover-typography">
            <span className="portfolio-text">PRO</span>
            <span className="portfolio-text">FILE</span>
          </div>
          <div className="photobooth-strip">
            <img src={portrait1} alt="Portrait 1" className="strip-photo" />
            <img src={portrait2} alt="Portrait 2" className="strip-photo" />
            <img src={portrait3} alt="Portrait 3" className="strip-photo" />
            <img src={portrait4} alt="Portrait 4" className="strip-photo" />
          </div>
        </div>
        <div className="cover-info">
          <div className="cover-name">
            <h1>Hope Gilbert</h1>
            <p className="tagline">Marketing & Business Development • Visual Storytelling</p>
          </div>
          <div className="cover-contact">
            <p>hopegilbert@live.com</p>
            <p>@hopegilbs</p>
          </div>
        </div>
        <div className="cover-accent">
          <div className="ink-doodle"></div>
        </div>
      </div>

      {/* Page 1: About Me */}
      <div className="about-page">
        <div className="about-layout">
          <div className="about-image">
            <img src={hope2} alt="Hope Gilbert" className="polaroid-photo" />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p className="intro-text">
              I'm Hope Gilbert, a Marketing and Business Development Associate at Mawney Partners with a BSc in Psychology from Durham University. 
              I combine marketing expertise, self-taught programming skills (Python, JavaScript, TypeScript, Swift), 
              and creative design abilities to deliver innovative digital solutions. Passionate about bridging technology, 
              psychology, and creative expression.
            </p>
            <div className="quick-facts">
              <div className="fact-item">
                <span className="fact-icon"><i className="fas fa-graduation-cap"></i></span>
                <span className="fact-text">BSc Psychology Graduate</span>
              </div>
              <div className="fact-item">
                <span className="fact-icon"><i className="fas fa-map-marker-alt"></i></span>
                <span className="fact-text">London, England</span>
              </div>
              <div className="fact-item">
                <span className="fact-icon"><i className="fas fa-briefcase"></i></span>
                <span className="fact-text">Mawney Partners</span>
              </div>
              <div className="fact-item">
                <span className="fact-icon"><i className="fas fa-laptop-code"></i></span>
                <span className="fact-text">7 Programming Languages</span>
              </div>
              <div className="fact-item">
                <span className="fact-icon"><i className="fas fa-palette"></i></span>
                <span className="fact-text">Adobe Creative Suite</span>
              </div>
              <div className="fact-item">
                <span className="fact-icon"><i className="fas fa-pound-sign"></i></span>
                <span className="fact-text">£15K+ Charity Raised</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 2: My Journey */}
      <div className="journey-page">
        <h2>A Visual Journey So Far</h2>
        <div className="journey-timeline">
          <div className="timeline-item">
            <div className="timeline-year">2020</div>
            <div className="timeline-content">
              <h3>Started Durham University</h3>
              <p>Began BSc Psychology degree, studying modules in social, cognitive and biological psychology</p>
              <span className="handwritten-note">when psychology met creativity</span>
            </div>
            <img src="https://via.placeholder.com/80x80/FFB6C1/FFFFFF?text=2020" alt="2020 milestone" className="timeline-photo" />
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2022</div>
            <div className="timeline-content">
              <h3>Marketing Executive Role</h3>
              <p>Started at Flat Fee Recruiter, developing targeted marketing strategies and social media campaigns</p>
              <span className="handwritten-note">when strategy met creativity</span>
            </div>
            <img src="https://via.placeholder.com/80x80/FFB6C1/FFFFFF?text=2022" alt="2022 milestone" className="timeline-photo" />
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2024</div>
            <div className="timeline-content">
              <h3>Graduated & Advanced Role</h3>
              <p>Graduated Durham University with 2:1 honors, dissertation achieved First Class (76%)</p>
              <span className="handwritten-note">when it all came together</span>
            </div>
            <img src="https://via.placeholder.com/80x80/FFB6C1/FFFFFF?text=2024" alt="2024 milestone" className="timeline-photo" />
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2025</div>
            <div className="timeline-content">
              <h3>Mawney Partners Associate</h3>
              <p>Marketing & Business Development Associate, built Mawney Partners App and Website</p>
              <span className="handwritten-note">when tech met marketing</span>
            </div>
            <img src="https://via.placeholder.com/80x80/FFB6C1/FFFFFF?text=2025" alt="2025 milestone" className="timeline-photo" />
          </div>
        </div>
      </div>

      {/* Page 3: Selected Works */}
      <div className="works-page">
        <h2>Selected Works</h2>
        <div className="works-grid">
          <div className="work-item">
            <img src="https://via.placeholder.com/300x200/FFB6C1/FFFFFF?text=Brand+Identity" alt="Brand Identity Project" className="work-image" />
            <div className="work-overlay">
              <h3>Brand Identity for Mawney Partners</h3>
              <p>Complete visual identity and digital presence</p>
            </div>
          </div>
          <div className="work-item">
            <img src="https://via.placeholder.com/300x200/FFB6C1/FFFFFF?text=Marketing+Strategy" alt="Marketing Strategy" className="work-image" />
            <div className="work-overlay">
              <h3>Marketing Strategy & Campaigns</h3>
              <p>Targeted campaigns with 85% engagement growth</p>
            </div>
          </div>
          <div className="work-item">
            <img src="https://via.placeholder.com/300x200/FFB6C1/FFFFFF?text=Web+Development" alt="Web Development" className="work-image" />
            <div className="work-overlay">
              <h3>Web Development Projects</h3>
              <p>Full-stack applications and responsive designs</p>
            </div>
          </div>
          <div className="work-item">
            <img src="https://via.placeholder.com/300x200/FFB6C1/FFFFFF?text=Digital+Design" alt="Digital Design" className="work-image" />
            <div className="work-overlay">
              <h3>Digital Design & Content</h3>
              <p>Visual storytelling across multiple platforms</p>
            </div>
          </div>
        </div>
      </div>

      {/* Page 4: Skills & Tools */}
      <div className="skills-page">
        <h2>What I Bring to the Table</h2>
        <div className="skills-sections">
          <div className="skill-section">
            <h3>Content Creation</h3>
            <div className="skill-items">
              <div className="skill-item">Video Scripting</div>
              <div className="skill-item">Storyboarding</div>
              <div className="skill-item">Video Editing</div>
              <div className="skill-item">Social Media Content</div>
            </div>
            <img src="https://via.placeholder.com/200x150/FFB6C1/FFFFFF?text=Content+Creation" alt="Content Creation" className="skill-visual" />
          </div>
          <div className="skill-section">
            <h3>Branding & Strategy</h3>
            <div className="skill-items">
              <div className="skill-item">Visual Identity</div>
              <div className="skill-item">Campaign Ideation</div>
              <div className="skill-item">Brand Storytelling</div>
              <div className="skill-item">Market Analysis</div>
            </div>
            <img src="https://via.placeholder.com/200x150/FFB6C1/FFFFFF?text=Branding" alt="Branding" className="skill-visual" />
          </div>
          <div className="skill-section">
            <h3>Digital Tools</h3>
            <div className="skill-items">
              <div className="skill-item">Adobe Creative Suite</div>
              <div className="skill-item">React & JavaScript</div>
              <div className="skill-item">HubSpot Marketing</div>
              <div className="skill-item">Google Analytics</div>
            </div>
            <img src="https://via.placeholder.com/200x150/FFB6C1/FFFFFF?text=Digital+Tools" alt="Digital Tools" className="skill-visual" />
          </div>
        </div>
      </div>

      {/* Page 5: My Aesthetic */}
      <div className="aesthetic-page">
        <h2>My Aesthetic</h2>
        <div className="moodboard">
          <div className="moodboard-item">
            <img src="https://via.placeholder.com/150x150/FFB6C1/FFFFFF?text=Color+1" alt="Color palette" className="moodboard-image" />
            <span className="moodboard-label">Neutral Tones</span>
          </div>
          <div className="moodboard-item">
            <img src="https://via.placeholder.com/150x150/FFB6C1/FFFFFF?text=Color+2" alt="Color palette" className="moodboard-image" />
            <span className="moodboard-label">Pink Accents</span>
          </div>
          <div className="moodboard-item">
            <img src="https://via.placeholder.com/150x150/FFB6C1/FFFFFF?text=Typography" alt="Typography" className="moodboard-image" />
            <span className="moodboard-label">Clean Typography</span>
          </div>
          <div className="moodboard-item">
            <img src="https://via.placeholder.com/150x150/FFB6C1/FFFFFF?text=Pattern" alt="Pattern" className="moodboard-image" />
            <span className="moodboard-label">Minimal Patterns</span>
          </div>
        </div>
        <div className="aesthetic-description">
          <p>My design philosophy centers around clean, modern aesthetics with strategic use of color and typography. 
          I believe in creating visual narratives that are both beautiful and functional, always considering the user experience 
          and brand story.</p>
        </div>
      </div>

      {/* Page 6: Analytics / Impact */}
      <div className="analytics-page">
        <h2>It's Not Just Pretty — It Performs</h2>
        <div className="analytics-content">
          <div className="analytics-chart">
            <div className="chart-container">
              <div className="chart-bar" style={{height: '85%'}}>
                <span className="chart-label">85%</span>
                <span className="chart-text">Engagement Growth</span>
              </div>
              <div className="chart-bar" style={{height: '70%'}}>
                <span className="chart-label">10K+</span>
                <span className="chart-text">Video Views</span>
              </div>
              <div className="chart-bar" style={{height: '90%'}}>
                <span className="chart-label">£15K+</span>
                <span className="chart-text">Charity Raised</span>
              </div>
            </div>
          </div>
          <div className="analytics-insights">
            <h3>Top-Performing Audience</h3>
            <p>18–24, Marketing & Technology Focus</p>
            <div className="insight-stats">
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Academic Articles</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">7</span>
                <span className="stat-label">Programming Languages</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">17+</span>
                <span className="stat-label">Digital Art Pieces</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 7: Closing / Contact */}
      <div className="contact-page">
        <h2>And That's a Wrap</h2>
        <div className="thank-you-note">
          <div className="note-paper">
            <p>Thanks for flipping through my work. If my style speaks to your brand, let's collaborate to tell stories that move people.</p>
            <div className="signature">Hope Gilbert</div>
          </div>
        </div>
        <div className="contact-links">
          <a href="mailto:hopegilbert@live.com" className="contact-link">
            <span className="contact-icon"><i className="fas fa-envelope"></i></span>
            <span>hopegilbert@live.com</span>
          </a>
          <a href="https://www.linkedin.com/in/hope-gilbert-1942471bb/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon"><i className="fas fa-briefcase"></i></span>
            <span>LinkedIn</span>
          </a>
          <a href="#" className="contact-link">
            <span className="contact-icon"><i className="fas fa-mobile-alt"></i></span>
            <span>@hopegilbs</span>
          </a>
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="portfolio-skills-page">
      <div className="skills-header">
        <h2>Skills & Expertise</h2>
        <p className="skills-subtitle">Where creativity meets technology</p>
      </div>
      
      <div className="skills-showcase">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-card">
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <i className={`fas ${category.icon}`}></i>
              </div>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="skills-stats">
        <div className="skill-stat">
          <span className="stat-number">7</span>
          <span className="stat-label">Programming Languages</span>
        </div>
        <div className="skill-stat">
          <span className="stat-number">8</span>
          <span className="stat-label">Creative Tools</span>
        </div>
        <div className="skill-stat">
          <span className="stat-number">7</span>
          <span className="stat-label">Marketing Tools</span>
        </div>
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="portfolio-experience-page">
      <div className="experience-header">
        <h2>Work Experience</h2>
        <p className="experience-subtitle">Building bridges between creativity and strategy</p>
      </div>
      
      <div className="experience-timeline">
        {workExperience.map((job, index) => (
          <div key={index} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="experience-card">
              <div className="experience-year">
                {job.period.split(' - ')[0]}
              </div>
              <div className="experience-content">
                <h3>{job.role}</h3>
                <h4>{job.company}</h4>
                <p className="experience-location"><i className="fas fa-map-marker-alt"></i> {job.location}</p>
                <p className="experience-description">{job.description}</p>
                <div className="experience-highlights">
                  {job.responsibilities.map((resp, respIndex) => (
                    <span key={respIndex} className="highlight-item">• {resp}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="experience-stats">
        <div className="stat-item">
          <span className="stat-number">{workExperience.length}</span>
          <span className="stat-label">Roles</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">6+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">£15K+</span>
          <span className="stat-label">Charity Raised</span>
        </div>
      </div>
    </div>
  );

  const renderEducation = () => (
    <div className="portfolio-education-page">
      <div className="education-header">
        <h2>Education & Learning</h2>
        <p className="education-subtitle">Where psychology meets creativity</p>
      </div>
      
      <div className="education-showcase">
        {educationHistory.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-visual">
              <div className="education-icon"><i className="fas fa-graduation-cap"></i></div>
              <div className="education-period">{edu.period}</div>
            </div>
            <div className="education-content">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <div className="education-grade">{edu.grade}</div>
              <div className="education-highlights">
                {edu.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="highlight-item">
                    <span className="highlight-bullet">▹</span>
                    <span className="highlight-text">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="education-achievements">
        <h3>Academic Highlights</h3>
        <div className="achievements-grid">
          <div className="achievement-item">
            <span className="achievement-number">76%</span>
            <span className="achievement-label">Dissertation Grade</span>
          </div>
          <div className="achievement-item">
            <span className="achievement-number">A*</span>
            <span className="achievement-label">Art A-Level</span>
          </div>
          <div className="achievement-item">
            <span className="achievement-number">2:1</span>
            <span className="achievement-label">Degree Classification</span>
          </div>
          <div className="achievement-item">
            <span className="achievement-number">7</span>
            <span className="achievement-label">Years Education</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTimeline = () => (
    <div className="portfolio-timeline-page">
      <div className="timeline-header">
        <h2>My Journey</h2>
        <p className="timeline-subtitle">From psychology student to marketing innovator</p>
      </div>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {timelineEvents.map((event, index) => (
          <div key={index} className={`timeline-event ${event.type}`}>
            <div className="timeline-marker">
              <i className={`fas ${event.icon}`}></i>
            </div>
            <div className="timeline-card">
              <div className="timeline-year">{event.year}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className={`timeline-type ${event.type}`}>
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="timeline-summary">
        <h3>Journey Highlights</h3>
        <div className="summary-stats">
          <div className="summary-stat">
            <span className="stat-number">£15K+</span>
            <span className="stat-label">Charity Funds Raised</span>
          </div>
          <div className="summary-stat">
            <span className="stat-number">2</span>
            <span className="stat-label">Degrees & Certifications</span>
          </div>
          <div className="summary-stat">
            <span className="stat-number">8+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className="portfolio-achievements-page">
      <div className="achievements-header">
        <h2>Achievements & Impact</h2>
        <p className="achievements-subtitle">Making a difference through creativity and dedication</p>
      </div>
      
      <div className="achievements-showcase">
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
      
      <div className="achievements-impact">
        <h3>Impact by Numbers</h3>
        <div className="impact-stats">
          <div className="impact-stat">
            <span className="stat-number">£13.5K</span>
            <span className="stat-label">Fashion Show Raised</span>
          </div>
          <div className="impact-stat">
            <span className="stat-number">£1.1K+</span>
            <span className="stat-label">Tough Mudder Raised</span>
          </div>
          <div className="impact-stat">
            <span className="stat-number">£270</span>
            <span className="stat-label">Firewalk Raised</span>
          </div>
          <div className="impact-stat">
            <span className="stat-number">76%</span>
            <span className="stat-label">Dissertation Grade</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPersonal = () => (
    <div className="portfolio-personal-page">
      <div className="personal-header">
        <h2>Beyond the Resume</h2>
        <p className="personal-subtitle">Passions that drive my creativity</p>
      </div>
      
      <div className="interests-showcase">
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
      </div>
      
      <div className="career-aspirations">
        <h3>Career Aspirations</h3>
        <div className="aspirations-grid">
          {careerGoals.map((goal, index) => (
            <div key={index} className="aspiration-item">
              <div className="aspiration-icon"><i className="fas fa-bullseye"></i></div>
              <span className="aspiration-text">{goal}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="personal-stats">
        <div className="personal-stat">
          <span className="stat-number">Grade 7</span>
          <span className="stat-label">Musical Theatre</span>
        </div>
        <div className="personal-stat">
          <span className="stat-number">Grade 6</span>
          <span className="stat-label">Flute</span>
        </div>
        <div className="personal-stat">
          <span className="stat-number">A*</span>
          <span className="stat-label">Art A-Level</span>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="portfolio-contact-page">
      <div className="contact-header">
        <h2>Let's Connect</h2>
        <p className="contact-subtitle">Ready to create something amazing together?</p>
      </div>
      
      <div className="contact-showcase">
        <div className="contact-card">
          <div className="contact-intro">
            <p>
              Based in London, England. Open to discussing opportunities in web development, design, AI, and marketing. 
              Let's collaborate to bring your vision to life.
            </p>
          </div>
          
          <div className="contact-methods">
            <a href="mailto:hopegilbert@live.com" className="contact-method">
              <div className="contact-icon"><i className="fas fa-envelope"></i></div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">hopegilbert@live.com</span>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/hope-gilbert-1942471bb/" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="contact-icon"><i className="fas fa-briefcase"></i></div>
              <div className="contact-details">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">hope-gilbert-1942471bb</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div className="contact-availability">
        <h3>Currently Available For</h3>
        <div className="availability-grid">
          <div className="availability-item">Web Development</div>
          <div className="availability-item">Graphic Design</div>
          <div className="availability-item">Marketing Strategy</div>
          <div className="availability-item">Brand Development</div>
        </div>
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
