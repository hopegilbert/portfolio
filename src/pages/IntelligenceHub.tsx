import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articlesData, type Article } from '../data/articlesData';

// Use imported articles data
const articles = articlesData;

// AI responses based on Hope Gilbert's professional background
    const sampleResponses: Record<string, string> = {
      'experience': `Hope Gilbert is currently a Marketing and Business Development Associate at Mawney Partners (May 2025 - Present) in London. She joined Mawney Partners after completing her BSc in Psychology from Durham University, bringing several years of marketing experience specializing in design and development. She supports the team with document preparation, design work, and operations. Previously, she was a Marketing Executive at Flat Fee Recruiter (May 2023 - Present) in Leeds, England, where she drove marketing efforts, blended strategy with creativity, and executed targeted campaigns. Her comprehensive work history includes: **Freelance Design:** KoreaSphereUK (Mar 2023 - Dec 2023) designing product labels and content for a startup, Palatine Power (Apr 2021 - Dec 2021) creating graphics and product labels, and Susan Heeley (Aug 2020 - Mar 2021) illustrating a children's book. **Professional Roles:** Recruitment Administrator at Mammoet (Oct 2021 - Dec 2021) in HR department, Assistant Swim Coach at Ducklings and Dolphins (Sept 2019 - Jul 2020), and various hospitality roles including bartending at Revolution Bars and Jimmy Allens, customer service at M&S, and childcare work. **Notable Projects:** She has built the Mawney Partners App and Website, created Market Maps, and developed this comprehensive portfolio website showcasing her full-stack development skills.`,
  
  'marketing': `Hope has extensive marketing experience across multiple roles. As Marketing and Business Development Associate at Mawney Partners (May 2025 - Present), she supports document preparation, design work, and operations. Previously as Marketing Executive at Flat Fee Recruiter (May 2023 - Present) in Leeds, England, she drove digital marketing, content creation, and data analysis. She executed targeted marketing strategies, developed engaging content, and leveraged data to optimize performance. Her expertise includes social media PPC advertising, email marketing, HubSpot Marketing Hub, Facebook Ads, Google Analytics, website building with WordPress and HTML, and comprehensive digital marketing strategy. She's certified in HubSpot Sales Software (Nov 2024 - Dec 2025) and has extensive experience with design tools like Adobe Illustrator, CapCut, and social media platforms.`,
  
  'skills': `Hope has an impressive range of technical and creative skills. **Programming Languages:** She has taught herself Python, HTML, CSS, JavaScript, JSON, Swift, TypeScript (TSX), and more. **Frameworks & Libraries:** She's proficient in React, Vite, and various other frameworks (evident from building this comprehensive portfolio website). **Development Tools:** Git, npm, Xcode for iOS development, and other essential development tools. **Marketing & Design:** WordPress, SEO Copywriting, HubSpot Marketing Hub, HubSpot Sales Software (certified Nov 2024 - Dec 2025), Office 365, Social Media PPC, Facebook Ads Manager, Google Analytics, Adobe Illustrator, Photoshop, Premiere Pro, InDesign, Procreate, CapCut, Canva, and YouTube. **Backend Basics:** She has foundational knowledge in backend technologies and databases. Her marketing expertise spans email marketing, social media marketing, digital marketing, marketing strategy, website building, and event coordination. Her creative abilities span traditional art mediums (acrylic, watercolor, oil, pencil) to digital illustration and video editing. Her soft skills include excellent communication, organization, time management, reliability, team collaboration, friendly demeanor, and kindness. She also has strong analytical and research abilities from her psychology degree.`,
  
  'education': `Hope graduated from Durham University with a BSc in Psychology (2020-2024), achieving a 2:1 honors degree. Her dissertation "Does Cognitive Estimation Precede Visual Experience in the Perception of Object Shape and Material?" achieved First Class (76%). She studied modules in social, cognitive and biological psychology with advanced research methods and statistics, took an elective English Literature module in year 1, and chose final year modules including Business and Economic Psychology, Close Relationships, and Psychology and Law. She previously attended Woodhouse Grove School (2013-2020) where she earned A*BB in her A-levels (Art A*, Psychology B, English Literature B). Her psychology degree strengthened her analytical and research abilities, fostering a data-driven approach to decision-making.`,
  
  'research': `Hope's research interests include cognitive psychology, visual perception, perceptual constancy, autism spectrum disorders, anxiety, neuroscience, consciousness, and behavioral psychology. Her dissertation at Durham University investigated the relationship between cognitive estimation and visual experience using psychophysical methods and Thouless's theory of phenomenal regression. She has published 20 academic works covering diverse topics from eyewitness testimony to dopamine reward systems, sensory processing in autism, and neural personality differences.`,
  
  'dissertation': `Hope's dissertation, titled "Does Cognitive Estimation Precede Visual Experience in the Perception of Object Shape and Material, or Do They Occur Independently and Concurrently?" was completed at Durham University (2020-2024) and achieved First Class (76%). This comprehensive research explored the relationship between cognitive estimation and visual experience using psychophysical methods and Thouless's theory of phenomenal regression. The study involved three participants and used repeated measures design to investigate viewing angles of 20 degrees and 40 degrees. Hope's findings suggest that while cognitive estimation can influence visual perception, the two processes often operate in parallel, with each contributing uniquely to our understanding of object properties. The dissertation demonstrates her strong analytical abilities and research expertise in cognitive psychology.`,
  
  'leadership': `Hope has extensive leadership experience, having served as John Snow Ball Chair where she managed large-scale events, overseeing themes, entertainment, and catering while coordinating with vendors, venues, and students. She also served as John Snow Netball Club Social Secretary and Gym Coordinator. At Woodhouse Grove School, she was Head of Atkinson House and School Prefect, developing expertise in team management, event coordination, and stakeholder communication. Her leadership roles demonstrate strong organizational skills and ability to work with diverse teams.`,
  
  'charity': `Hope is passionate about charity work and has raised significant funds for various causes. She completed a 10-mile Tough Mudder for Breast Cancer Now (Jan 2021 - Jul 2021), raising over £1,100. She participated in a Swimathon for Marie Curie (Jan 2010), raising over £1,000. Most recently, she raised £270 for Simon on the Streets (Nov 2024) by completing a Firewalk, walking over hot coals to support those facing homelessness. She also compered the John Snow Charity Fashion Show, which raised over £13,500. She regularly utilized social media and face-to-face promotion to maximize awareness and fundraising efforts.`,
  
  'creative': `Hope's creative work spans multiple disciplines. Her A-Level Art background enables her to design visually compelling marketing materials, logos, and packaging. She creates digital art using Procreate and Adobe Illustrator, produces video content with CapCut and Premiere Pro, and designs social media content using Canva. Her portfolio showcases 17+ digital art pieces including portraits and mixed media work, social media designs, video editing projects, app mockups, and document layouts. She combines artistic vision with technical proficiency across traditional and digital mediums.`,
  
  'portfolio': `Hope's portfolio demonstrates her multidisciplinary talents: (1) Psychology Research - her dissertation and 20 academic essays on cognitive psychology, autism, anxiety, neuroscience, workplace psychology, and recruitment practices; (2) Digital Art - 17+ pieces including portraits, mixed media, and illustrations; (3) Marketing Work - social media campaigns, PPC advertising, email marketing, and branded content; (4) Design Projects - logos, packaging, document layouts, and promotional materials; (5) Video Editing - content for social media and promotional videos; (6) Web Development - HTML websites and WordPress pages; (7) App Design - UI/UX mockups and interactive experiences. You can explore all sections through her portfolio gallery!`,
  
  'articles': `Hope has published extensive academic research including her dissertation and 20 essays on topics like: Autism and Anxiety (sensory processing differences), Dopamine and Reward Systems, Visual Attention and Working Memory, Face Recognition, Eyewitness Testimony, Theatre of Consciousness, Vegetative State, Neural Personality, Drug Addiction and Treatment, Crime and Youth, Marriage, Jurors Competency, Stressors and Mental Health, Close Relationships, Cognitive Biology, Business Psychology (organizational functioning), Dogs in Prison Rehabilitation, workplace mental health promotion, and salary transparency. Her recent work includes "Are you promoting positive mental health in the workplace?" (October 2023) and "The Importance of Salary Transparency" (2024), providing practical guidance for employers on supporting employee wellbeing and improving recruitment practices. All articles demonstrate her strong research and analytical abilities. Check the Articles & Work tab to read them!`,
  
  'sports': `Hope is athletic and has been actively involved in sports throughout her education. She played for her school's Second Netball Team and District Team, represented her House in various sports competitions, and helped her college netball team secure the top position in the league through dedication and training. She also worked as an Assistant Swim Coach at Ducklings and Dolphins (Sept 2019 - Jul 2020), combining her passion for sports with mentorship.`,
  
  'achievements': `Hope has received numerous honors and achievements including: Full Arts Colours, 2nd VII Netball Colours, Sarah Ridy Cup for Singing, Atkinson House Service Award, Grade 7 Musical Theatre Distinction (Dec 2019), and Grade 5 Flute Pass (Mar 2018). She achieved a First (76%) in her psychology dissertation at Durham University. Professionally, she was promoted from Marketing Assistant to Marketing Executive at Flat Fee Recruiter, and now works as Marketing and Business Development Associate at Mawney Partners. She successfully managed large-scale events for 700+ guests as Ball Chair and organized a charity fashion show raising £13,500. Her charity fundraising efforts include: John Snow Charity Fashion Show (£13,500), Tough Mudder for Breast Cancer Now (£1,100+), Marie Curie (£1,000+), and Firewalk for Simon on the Streets (£270). She's certified in HubSpot Sales Software (Nov 2024 - Dec 2025) and has multiple LinkedIn Learning certifications in diversity recruiting, interviewing, and HR practices.`,
  
  'contact': `You can reach Hope Gilbert via email at hopegilbert@live.com. She is currently based in London, England, working as Marketing and Business Development Associate at Mawney Partners. For professional inquiries, you can also connect with her on LinkedIn at www.linkedin.com/in/hope-gilbert-1942471bb. Her portfolio website showcases her diverse work across psychology research, digital art, marketing, design, and web development.`,
  
  'interests': `Hope has diverse personal interests that complement her professional work. She's passionate about sports, socializing, creative activities, theatre, and music. Her unique talents include singing and art, which she has developed alongside her professional skills. She has traveled extensively, particularly throughout Europe, which has enriched her cultural perspective. These interests demonstrate her well-rounded personality and creative mindset that translates into her professional work.`,
  
  'career_goals': `Hope is particularly interested in web development, design, AI, and marketing - areas where she can combine her technical skills, creative abilities, and analytical mindset. Her self-taught programming skills, combined with her marketing experience and psychology background, position her well for roles that bridge technology and human-centered design. She's passionate about creating digital experiences that are both functional and engaging, as evidenced by her portfolio projects including the Mawney Partners App and Website, Market Maps, and this comprehensive portfolio.`
};

function IntelligenceHub() {
  const [activeTab, setActiveTab] = useState<'ai' | 'articles'>('ai');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([
    { role: 'assistant', content: 'Hi! I\'m your AI assistant with comprehensive knowledge about Hope Gilbert. I can help you learn about her current role at Mawney Partners, self-taught coding skills (Python, JavaScript, TypeScript, Swift), marketing expertise, psychology research, creative work, charity fundraising, personal interests, career goals, and much more! What would you like to know?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = inputValue;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    // Enhanced AI response with comprehensive keyword matching
    setTimeout(() => {
      const message = userMessage.toLowerCase();
      let response = '';

      // Experience and Career Keywords
      const experienceKeywords = [
        'experience', 'work', 'job', 'career', 'professional', 'background', 'history', 
        'current', 'present', 'position', 'role', 'employment', 'mawney', 'partners',
        'flat fee', 'recruiter', 'marketing executive', 'business development', 'associate',
        'bartender', 'waiter', 'waitress', 'barista', 'childcare', 'swim coach',
        'current job', 'what is', 'tell me about', 'coding projects', 'projects has', 'built'
      ];
      
      // Marketing Keywords
      const marketingKeywords = [
        'marketing', 'campaign', 'social media', 'digital', 'advertising', 'ppc', 'seo',
        'content', 'brand', 'strategy', 'analytics', 'facebook', 'instagram', 'linkedin',
        'email marketing', 'hubspot', 'google ads', 'promotion', 'outreach', 'seo copywriting',
        'marketing skills', 'what marketing'
      ];
      
      // Skills Keywords
      const skillsKeywords = [
        'skill', 'ability', 'proficient', 'technical', 'competency', 'expertise',
        'software', 'tool', 'certification', 'qualified', 'trained', 'capable',
        'adobe', 'photoshop', 'illustrator', 'wordpress', 'html', 'css', 'capcut',
        'procreate', 'canva', 'premiere pro', 'indesign', 'what skills', 'skills does',
        'programming languages', 'python', 'javascript', 'typescript', 'swift', 'react', 'vite'
      ];
      
      // Education Keywords
      const educationKeywords = [
        'education', 'degree', 'university', 'durham', 'psychology', 'bsc', 'qualification',
        'graduated', 'academic', 'study', 'course', 'woodhouse grove', 'a-level', 'a level', 'school'
      ];
      
      // Research Keywords
      const researchKeywords = [
        'research', 'academic', 'study', 'psychology', 'cognitive',
        'visual', 'perception', 'thouless', 'experiment', 'findings', 'analysis',
        'publication', 'essay', 'paper', 'investigation', 'autism', 'anxiety', 'research has'
      ];
      
      // Dissertation Keywords
      const dissertationKeywords = [
        'dissertation', 'tell me about', 'what is', 'hope\'s dissertation', 'cognitive estimation',
        'visual experience', 'object shape', 'material perception', 'durham', 'psychology degree',
        'first class', '76%'
      ];
      
      // Leadership Keywords
      const leadershipKeywords = [
        'leadership', 'manage', 'organize', 'team', 'lead', 'supervise', 'coordinate',
        'ball chair', 'fresher', 'representative', 'prefect', 'head of house',
        'event', 'committee', 'director', 'supervisor', 'john snow'
      ];
      
      // Charity Keywords
      const charityKeywords = [
        'charity', 'fundraising', 'volunteer', 'raise', 'donation', 'fundraiser',
        'breast cancer', 'marie curie', 'simon on the streets', 'firewalk',
        'tough mudder', 'swimathon', 'homelessness', 'cancer', 'care', 'charity work'
      ];
      
      // Creative Keywords
      const creativeKeywords = [
        'creative', 'art', 'design', 'portfolio', 'artistic', 'illustration',
        'graphic', 'visual', 'procreate', 'drawing', 'painting', 'digital art',
        'aesthetic', 'branding', 'logo', 'packaging', 'video editing'
      ];
      
      // Portfolio Keywords
      const portfolioKeywords = [
        'portfolio', 'project', 'work example', 'showcase', 'gallery', 'collection',
        'sample', 'demo', 'case study', 'examples', 'pieces', 'works'
      ];
      
      // Articles Keywords
      const articlesKeywords = [
        'article', 'writing', 'essay', 'publication', 'blog', 'content',
        'academic writing', 'research paper', 'scholarly', 'journal'
      ];
      
      // Sports Keywords
      const sportsKeywords = [
        'sport', 'netball', 'swim', 'athletic', 'fitness', 'coaching',
        'team sport', 'competition', 'training', 'physical', 'exercise'
      ];
      
      // Achievements Keywords
      const achievementsKeywords = [
        'achievement', 'award', 'honor', 'accomplishment', 'success', 'recognition',
        'distinction', 'colours', 'grade', 'certification', 'certificate', 'recent achievements',
        'tell me about her recent', 'achievements'
      ];
      
      // Contact Keywords
      const contactKeywords = [
        'contact', 'email', 'phone', 'linkedin', 'reach', 'connect', 'get in touch',
        'communication', 'message', 'call', 'email address', 'phone number', 'how can i contact'
      ];
      
      // Interests Keywords
      const interestsKeywords = [
        'interests', 'hobbies', 'personal', 'sports', 'socialising', 'creative', 'theatre', 'music',
        'singing', 'art', 'travel', 'europe', 'cultural', 'passionate', 'talents'
      ];
      
      // Career Goals Keywords
      const careerGoalsKeywords = [
        'career goals', 'aspirations', 'future', 'web development', 'design', 'ai', 'marketing',
        'interested in', 'want to', 'looking for', 'professional goals', 'ambitions'
      ];

      // Calculate confidence scores for each category
      const categories = [
        { name: 'experience', keywords: experienceKeywords },
        { name: 'marketing', keywords: marketingKeywords },
        { name: 'skills', keywords: skillsKeywords },
        { name: 'education', keywords: educationKeywords },
        { name: 'research', keywords: researchKeywords },
        { name: 'dissertation', keywords: dissertationKeywords },
        { name: 'leadership', keywords: leadershipKeywords },
        { name: 'charity', keywords: charityKeywords },
        { name: 'creative', keywords: creativeKeywords },
        { name: 'portfolio', keywords: portfolioKeywords },
        { name: 'articles', keywords: articlesKeywords },
        { name: 'sports', keywords: sportsKeywords },
        { name: 'achievements', keywords: achievementsKeywords },
        { name: 'contact', keywords: contactKeywords },
        { name: 'interests', keywords: interestsKeywords },
        { name: 'career_goals', keywords: careerGoalsKeywords }
      ];

      let bestMatch = { category: '', score: 0 };

      categories.forEach(category => {
        const matches = category.keywords.filter(keyword => message.includes(keyword));
        const score = matches.length;
        
        // Boost score for specific important keywords
        const importantKeywords = ['dissertation', 'current', 'recent', 'skills', 'experience', 'marketing', 'coding', 'projects'];
        const importantMatches = matches.filter(keyword => importantKeywords.includes(keyword));
        const boostedScore = score + (importantMatches.length * 2);
        
        if (boostedScore > bestMatch.score) {
          bestMatch = { category: category.name, score: boostedScore };
        }
      });

      // Handle multi-topic queries and context-aware responses
      if (bestMatch.score > 0) {
        response = sampleResponses[bestMatch.category];
        
        // Add context for current/recent information
        if (message.includes('current') || message.includes('present') || message.includes('now') || message.includes('latest')) {
          if (bestMatch.category === 'experience') {
            response += "\n\n**Current Role:** Hope is currently working as Marketing and Business Development Associate at Mawney Partners in London, where she supports document preparation, design work, and operations.";
          } else if (bestMatch.category === 'achievements') {
            response += "\n\n**Most Recent:** Hope completed a Firewalk for Simon on the Streets (November 2024), raising £270 by walking over hot coals to support those facing homelessness.";
          } else if (bestMatch.category === 'marketing') {
            response += "\n\n**Latest Certification:** Hope recently earned her HubSpot Sales Software certification (November 2024 - December 2025) and has been expanding her digital marketing expertise.";
          }
        }
        
        // Add specific details for recent activities
        if (message.includes('recent') || message.includes('latest') || message.includes('new')) {
          if (bestMatch.category === 'achievements') {
            response += "\n\n**Most Recent:** Hope completed a Firewalk for Simon on the Streets (November 2024), raising £270 by walking over hot coals to support those facing homelessness.";
          } else if (bestMatch.category === 'marketing') {
            response += "\n\n**Latest Certification:** Hope recently earned her HubSpot Sales Software certification (November 2024 - December 2025) and has been expanding her digital marketing expertise.";
          }
        }
        
        // Add website navigation guidance
        if (bestMatch.category === 'creative' || bestMatch.category === 'portfolio' || bestMatch.category === 'articles') {
          response += "\n\n**Explore More:** Check out the different sections of this portfolio website to see Hope's creative work, digital art, video projects, academic articles, and more detailed examples of her projects!";
        }
      } else {
        // Enhanced fallback responses with helpful suggestions
        response = `I'd be happy to help! You can ask me about Hope's:

🎯 **Professional Experience** - Current role at Mawney Partners, previous marketing roles, coding projects
💡 **Skills & Expertise** - Programming languages (Python, JavaScript, TypeScript, Swift), frameworks, certifications
🎓 **Education & Research** - Psychology degree from Durham University, dissertation, academic work
📚 **Dissertation** - Detailed information about Hope's cognitive psychology research
🏆 **Achievements & Leadership** - Awards, honors, event organization (John Snow Ball Chair)
🎨 **Creative Work** - Digital art, design projects, portfolio pieces, freelance work
💝 **Charity Work** - Recent Firewalk fundraiser, Tough Mudder, Swimathon, and other fundraising efforts
🎭 **Personal Interests** - Sports, theatre, music, singing, travel, creative activities
🚀 **Career Goals** - Web development, design, AI, marketing interests and aspirations
📞 **Contact Information** - How to reach Hope professionally

**Try asking:** "What programming languages does Hope know?" or "What are her career goals?" or "Tell me about her personal interests"

What would you like to know more about?`;
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="intelligence-hub">
      {/* Header */}
      <header className="hub-header">
        <Link to="/" className="back-btn">← Back</Link>
        <div className="header-content">
          <h1 className="hub-title">Intelligence Hub</h1>
          <p className="hub-subtitle">AI Assistant & Knowledge Base</p>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
          onClick={() => setActiveTab('ai')}
        >
          <span className="tab-icon">🤖</span>
          <span>AI Assistant</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'articles' ? 'active' : ''}`}
          onClick={() => setActiveTab('articles')}
        >
          <span className="tab-icon">📚</span>
          <span>Articles & Work</span>
        </button>
      </div>

      {/* AI Assistant Tab */}
      {activeTab === 'ai' && (
        <div className="ai-section">
          <div className="chat-container">
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.role}`}>
                  <div className="message-avatar">
                    {message.role === 'assistant' ? '🤖' : 'You'}
                  </div>
                  <div className="message-content">
                    <p>{message.content}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="message assistant">
                  <div className="message-avatar">🤖</div>
                  <div className="message-content typing">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}
            </div>

            <div className="chat-input-container">
              <input
                type="text"
                className="chat-input"
                placeholder="Ask me about Hope's coding skills, career goals, personal interests, projects, experience..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button className="send-btn" onClick={handleSendMessage}>
                ➤
              </button>
            </div>

            <div className="suggested-questions">
              <p className="suggestions-label">Suggested questions:</p>
              <button onClick={() => setInputValue("What programming languages does Hope know?")}>What programming languages does Hope know?</button>
              <button onClick={() => setInputValue("What are Hope's career goals?")}>What are Hope's career goals?</button>
              <button onClick={() => setInputValue("Tell me about Hope's personal interests")}>Tell me about Hope's personal interests</button>
              <button onClick={() => setInputValue("What coding projects has Hope built?")}>What coding projects has Hope built?</button>
              <button onClick={() => setInputValue("What is Hope's current job?")}>What is Hope's current job?</button>
              <button onClick={() => setInputValue("How can I contact Hope?")}>How can I contact Hope?</button>
            </div>
          </div>
        </div>
      )}

      {/* Articles Tab */}
      {activeTab === 'articles' && (
        <div className="articles-section">
          <div className="articles-container">
            <h2 className="section-title">Articles & Work</h2>
            <div className="articles-grid">
              {articles.map((article) => (
                <div key={article.id} className="article-card" onClick={() => setSelectedArticle(article)}>
                  <div className="article-category">{article.category}</div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-meta">
                    <span className="article-date">{article.date}</span>
                    <span className="article-read-time">{article.readTime}</span>
                  </div>
                  <button className="read-more-btn">Read More →</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Article Modal */}
      {selectedArticle && (
        <div className="article-modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="article-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedArticle(null)}>×</button>
            
            <div className="modal-header-section">
              <div className="modal-category-badge">{selectedArticle.category}</div>
              <h1 className="modal-article-title">{selectedArticle.title}</h1>
              <div className="modal-article-meta">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            <div className="modal-article-content" dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />

            {selectedArticle.references && selectedArticle.references.length > 0 && (
              <div className="modal-references">
                <h2>References</h2>
                <ul>
                  {selectedArticle.references.map((ref, index) => (
                    <li key={index}>{ref}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="hub-footer">
        <p className="license-text">Hope Gilbert's Musings and Research by Hope Gilbert is licensed under CC BY-ND 4.0</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        .intelligence-hub {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f6f3 0%, #fde9f0 100%);
          font-family: 'Inter', sans-serif;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .hub-header {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(168, 107, 122, 0.2);
          padding: 2rem;
          position: relative;
        }

        .back-btn {
          position: absolute;
          left: 2rem;
          top: 2rem;
          background: rgba(168, 107, 122, 0.1);
          color: #a86b7a;
          border: 1px solid rgba(168, 107, 122, 0.3);
          padding: 0.6rem 1.25rem;
          border-radius: 20px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .back-btn:hover {
          background: rgba(168, 107, 122, 0.15);
          transform: translateX(-3px);
        }

        .header-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hub-title {
          font-family: 'Space Grotesk', sans-serif !important;
          font-size: 3rem;
          font-weight: 700;
          color: #2c2c2c !important;
          margin: 0 0 0.5rem 0;
          letter-spacing: -1px;
          text-shadow: none !important;
          transform: none !important;
          transition: none !important;
          animation: none !important;
        }

        .hub-title:hover {
          transform: none !important;
          text-shadow: none !important;
          color: #2c2c2c !important;
        }

        .hub-subtitle {
          font-size: 1.2rem;
          color: #a86b7a !important;
          margin: 0;
          font-weight: 500;
          text-shadow: none !important;
          transform: none !important;
          transition: none !important;
          animation: none !important;
        }

        /* Tab Navigation */
        .tab-navigation {
          display: flex;
          justify-content: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.6);
          border-bottom: 1px solid rgba(168, 107, 122, 0.1);
        }

        .tab-btn {
          background: white;
          border: 2px solid rgba(168, 107, 122, 0.2);
          padding: 1rem 2.5rem;
          border-radius: 30px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          color: #666;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background-clip: padding-box;
        }

        .tab-btn:hover {
          border-color: #a86b7a;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(168, 107, 122, 0.15);
        }

        .tab-btn.active {
          background: linear-gradient(135deg, #a86b7a, #f5c9e0);
          color: white;
          border: 2px solid #a86b7a;
          box-shadow: 0 6px 20px rgba(168, 107, 122, 0.3);
        }

        .tab-icon {
          font-size: 1.4rem;
        }

        /* AI Section */
        .ai-section {
          flex: 1;
          display: flex;
          justify-content: center;
          padding: 2rem;
        }

        .chat-container {
          width: 100%;
          max-width: 800px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          height: calc(100vh - 300px);
          min-height: 500px;
          border: 1px solid rgba(168, 107, 122, 0.1);
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .chat-messages::-webkit-scrollbar {
          width: 8px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: #f8f6f3;
          border-radius: 4px;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: #a86b7a;
          border-radius: 4px;
        }

        .message {
          display: flex;
          gap: 1rem;
          animation: messageSlide 0.3s ease;
        }

        @keyframes messageSlide {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .message.user {
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a86b7a, #f5c9e0);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
          color: white;
          font-weight: 600;
          font-size: 0.85rem;
        }

        .message.user .message-avatar {
          background: #e0e0e0;
          color: #666;
        }

        .message-content {
          background: #f8f6f3;
          padding: 1rem 1.25rem;
          border-radius: 18px;
          max-width: 70%;
          line-height: 1.6;
        }

        .message.user .message-content {
          background: linear-gradient(135deg, #a86b7a, #f5c9e0);
          color: white;
        }

        .message-content p {
          margin: 0;
          color: #2c2c2c;
        }

        .message.user .message-content p {
          color: white;
        }

        .message-content.typing {
          display: flex;
          gap: 0.4rem;
          padding: 1.25rem 1.5rem;
        }

        .message-content.typing span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #a86b7a;
          animation: typing 1.4s infinite;
        }

        .message-content.typing span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .message-content.typing span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.7;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }

        .chat-input-container {
          padding: 1.5rem;
          border-top: 1px solid rgba(168, 107, 122, 0.1);
          display: flex;
          gap: 1rem;
        }

        .chat-input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: 2px solid rgba(168, 107, 122, 0.2);
          border-radius: 25px;
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          outline: none;
          transition: all 0.3s ease;
        }

        .chat-input:focus {
          border-color: #a86b7a;
          box-shadow: 0 0 0 3px rgba(168, 107, 122, 0.1);
        }

        .send-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a86b7a, #f5c9e0);
          color: white;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(168, 107, 122, 0.3);
        }

        .send-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(168, 107, 122, 0.4);
        }

        .send-btn:active {
          transform: scale(0.95);
        }

        .suggested-questions {
          padding: 0 1.5rem 1.5rem 1.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .suggestions-label {
          width: 100%;
          font-size: 0.85rem;
          color: #8e8e8e;
          margin: 0 0 0.5rem 0;
          font-weight: 500;
        }

        .suggested-questions button {
          background: rgba(168, 107, 122, 0.05);
          border: 1px solid rgba(168, 107, 122, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 16px;
          font-size: 0.85rem;
          color: #a86b7a;
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .suggested-questions button:hover {
          background: rgba(168, 107, 122, 0.1);
          border-color: #a86b7a;
        }

        /* Articles Section */
        .articles-section {
          flex: 1;
          padding: 2rem;
        }

        .articles-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c2c2c;
          margin: 0 0 2rem 0;
          text-align: center;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .article-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(168, 107, 122, 0.1);
          cursor: pointer;
        }

        .article-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(168, 107, 122, 0.2);
          border-color: #a86b7a;
        }

        .article-category {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: linear-gradient(135deg, #a86b7a, #f5c9e0);
          color: white;
          border-radius: 16px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
        }

        .article-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #2c2c2c;
          margin: 0 0 1rem 0;
          line-height: 1.3;
        }

        .article-excerpt {
          color: #666;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }

        .article-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          font-size: 0.85rem;
          color: #8e8e8e;
        }

        .read-more-btn {
          background: rgba(168, 107, 122, 0.1);
          border: 1px solid rgba(168, 107, 122, 0.3);
          padding: 0.75rem 1.5rem;
          border-radius: 20px;
          color: #a86b7a;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          font-size: 0.95rem;
        }

        .read-more-btn:hover {
          background: #a86b7a;
          color: white;
          border-color: #a86b7a;
        }

        /* Article Modal */
        .article-modal-overlay {
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
          z-index: 2000;
          animation: fadeIn 0.3s ease;
        }

        .article-modal {
          background: white;
          max-width: 900px;
          max-height: 90vh;
          width: 100%;
          border-radius: 20px;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .article-modal::-webkit-scrollbar {
          width: 10px;
        }

        .article-modal::-webkit-scrollbar-track {
          background: #f8f6f3;
          border-radius: 0 20px 20px 0;
        }

        .article-modal::-webkit-scrollbar-thumb {
          background: #a86b7a;
          border-radius: 10px;
        }

        .modal-close-btn {
          position: sticky;
          top: 1rem;
          right: 1rem;
          float: right;
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
          margin-bottom: -44px;
        }

        .modal-close-btn:hover {
          background: #a86b7a;
          transform: rotate(90deg) scale(1.1);
        }

        .modal-header-section {
          padding: 3rem 3rem 2rem 3rem;
          border-bottom: 2px solid rgba(168, 107, 122, 0.1);
          background: linear-gradient(135deg, #f8f6f3, #fde9f0);
        }

        .modal-category-badge {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: linear-gradient(135deg, #a86b7a, #f5c9e0);
          color: white;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1.5rem;
        }

        .modal-article-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #2c2c2c;
          margin: 0 0 1rem 0;
          line-height: 1.3;
        }

        .modal-article-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.95rem;
          color: #8e8e8e;
          font-weight: 500;
        }

        .modal-article-content {
          padding: 3rem;
          font-family: 'Lora', serif;
          line-height: 1.8;
          color: #2c2c2c;
        }

        .modal-article-content h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: #2c2c2c;
          margin: 2rem 0 1.5rem 0;
          text-align: center;
        }

        .modal-article-content h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #a86b7a;
          margin: 2.5rem 0 1rem 0;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(168, 107, 122, 0.2);
        }

        .modal-article-content h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #2c2c2c;
          margin: 2rem 0 0.75rem 0;
        }

        .modal-article-content p {
          margin: 0 0 1.25rem 0;
          line-height: 1.8;
        }

        .modal-article-content ul {
          margin: 1rem 0 1.5rem 2rem;
          list-style-type: disc;
        }

        .modal-article-content li {
          margin: 0.5rem 0;
          line-height: 1.6;
        }

        .modal-article-content blockquote {
          margin: 1.5rem 0;
          padding: 1.25rem 2rem;
          background: rgba(168, 107, 122, 0.05);
          border-left: 4px solid #a86b7a;
          font-style: italic;
          color: #666;
        }

        .modal-article-content em {
          color: #a86b7a;
          font-style: italic;
        }

        .modal-article-content .author {
          text-align: right;
          font-style: italic;
          margin: 3rem 0 2rem 0;
          color: #8e8e8e;
          font-size: 0.95rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(168, 107, 122, 0.1);
        }

        .modal-references {
          padding: 2rem 3rem 3rem 3rem;
          background: #f8f6f3;
          border-top: 2px solid rgba(168, 107, 122, 0.1);
        }

        .modal-references h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #2c2c2c;
          margin: 0 0 1.5rem 0;
        }

        .modal-references ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .modal-references li {
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(168, 107, 122, 0.1);
          color: #666;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .modal-references li:last-child {
          border-bottom: none;
        }

        /* Footer */
        .hub-footer {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(168, 107, 122, 0.2);
          padding: 2rem;
          text-align: center;
          margin-top: auto;
        }

        .hub-footer .license-text {
          font-family: 'Lora', serif;
          font-size: 0.85rem;
          color: #a86b7a;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hub-title {
            font-size: 2rem;
          }

          .hub-subtitle {
            font-size: 1rem;
          }

          .back-btn {
            position: static;
            margin-bottom: 1rem;
          }

          .header-content {
            text-align: left;
          }

          .tab-navigation {
            flex-direction: column;
            gap: 0.75rem;
            padding: 1rem;
          }

          .tab-btn {
            padding: 0.85rem 1.5rem;
          }

          .chat-container {
            height: calc(100vh - 400px);
            min-height: 400px;
          }

          .message-content {
            max-width: 85%;
          }

          .articles-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .ai-section, .articles-section {
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hub-header {
            padding: 1.5rem 1rem;
          }

          .hub-title {
            font-size: 1.75rem;
          }

          .suggested-questions {
            flex-direction: column;
          }

          .suggested-questions button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default IntelligenceHub;

