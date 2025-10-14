import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articlesData, type Article } from '../data/articlesData';

// Use imported articles data
const articles = articlesData;

// Sample AI responses - you'll replace this with actual API integration
const sampleResponses: Record<string, string> = {
  'experience': 'Hope Gilbert is a multidisciplinary creative professional with expertise spanning psychology research, graphic design, digital art, video editing, and web development. She has 4+ years of experience with Adobe Creative Suite and creates content across multiple platforms.',
  'skills': 'Hope is proficient in Photoshop, Illustrator, Premiere Pro, InDesign, Procreate, Canva, CapCut, and various development tools including Xcode and GitHub. Her skills span from traditional art mediums (acrylic, watercolor, oil, pencil) to digital illustration, video editing, and psychological research.',
  'education': 'Hope has a strong academic background in psychology, having completed a dissertation on "Does Cognitive Estimation Precede Visual Experience in the Perception of Object Shape and Material?" She has written extensively on topics including autism, anxiety, neuroscience, cognitive psychology, and behavioral sciences.',
  'research': 'Hope\'s research interests include cognitive psychology, visual perception, autism spectrum disorders, anxiety, neuroscience, consciousness, and behavioral psychology. She has published 19 academic essays covering diverse topics from eyewitness testimony to dopamine reward systems.',
  'portfolio': 'Hope\'s portfolio includes psychological research (dissertation and 18 essays), digital art (17 pieces including portraits and mixed media), social media designs, video editing projects, app designs, and document layouts. You can explore different sections of her work through the portfolio gallery.',
  'articles': `Hope has published extensive research including her dissertation and 18 essays on topics like: Autism and Anxiety, Dopamine and Reward Systems, Visual Attention and Working Memory, Face Recognition, Eyewitness Testimony, Theatre of Consciousness, Vegetative State, Neural Personality, Drug Addiction, Crime and Youth, Marriage, Jurors, Stressors and Mental Health, Close Relationships, Cognitive Biology, Business Psychology, and Dogs in Prison Rehabilitation. Check the Articles & Work tab to read them!`
};

function IntelligenceHub() {
  const [activeTab, setActiveTab] = useState<'ai' | 'articles'>('ai');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([
    { role: 'assistant', content: 'Hello! I\'m Hope\'s AI assistant. Ask me anything about Hope\'s experience, skills, or work!' }
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

    // Simulate AI response (replace with actual AI API call)
    setTimeout(() => {
      const lowerMessage = userMessage.toLowerCase();
      let response = 'I\'m still learning! Try asking about Hope\'s experience, skills, education, research, articles, or portfolio.';

      // Simple keyword matching (replace with actual AI)
      if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
        response = sampleResponses.experience;
      } else if (lowerMessage.includes('skill') || lowerMessage.includes('tool') || lowerMessage.includes('software')) {
        response = sampleResponses.skills;
      } else if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('study') || lowerMessage.includes('dissertation')) {
        response = sampleResponses.education;
      } else if (lowerMessage.includes('research') || lowerMessage.includes('psychology') || lowerMessage.includes('academic')) {
        response = sampleResponses.research;
      } else if (lowerMessage.includes('article') || lowerMessage.includes('essay') || lowerMessage.includes('writing') || lowerMessage.includes('publish')) {
        response = sampleResponses.articles;
      } else if (lowerMessage.includes('portfolio') || lowerMessage.includes('project') || lowerMessage.includes('work')) {
        response = sampleResponses.portfolio;
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
                placeholder="Ask me about Hope's experience, skills, or work..."
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
              <button onClick={() => setInputValue("What is Hope's educational background?")}>What is Hope's educational background?</button>
              <button onClick={() => setInputValue("What research has Hope published?")}>What research has Hope published?</button>
              <button onClick={() => setInputValue("What are Hope's creative skills?")}>What are Hope's creative skills?</button>
              <button onClick={() => setInputValue("Tell me about Hope's portfolio")}>Tell me about Hope's portfolio</button>
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

