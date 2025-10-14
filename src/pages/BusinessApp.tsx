import { useState } from 'react';

// Types
interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface Article {
  id: string;
  title: string;
  content: string;
  source: string;
  category: string;
  publishedAt: Date;
  timeAgo: string;
  relevanceScore?: number;
}

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  timeString: string;
  date: string;
}

interface ChatMessage {
  id: string;
  text: string;
  senderId: string;
  senderName: string;
  timestamp: Date;
  isCurrentUser: boolean;
}

interface CallNote {
  id: string;
  title: string;
  date: string;
  notes: string;
  participants: string[];
  duration?: string;
  aiSummary?: string;
}

type ViewType = 'home' | 'articles' | 'todos' | 'calendar' | 'callnotes' | 'chat' | 'ai' | 'profile';

// SF Symbol-style Icon Component (SVG icons)
interface SFIconProps {
  name: string;
  size?: number;
}

function SFIcon({ name, size = 20 }: SFIconProps) {
  const getIconPath = () => {
    switch(name) {
      case 'house.fill':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>;
      case 'doc.text.fill':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm2-6h8v2H8v-2zm0-3h8v2H8v-2zm0-3h5v2H8V8z"/></svg>;
      case 'checkmark.circle.fill':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>;
      case 'calendar':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h10v2H7v-2z"/></svg>;
      case 'phone.fill':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>;
      case 'message.fill':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>;
      case 'brain.head.profile':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="3"/></svg>;
      case 'person.circle.fill':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>;
      case 'circle':
        return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size}><circle cx="12" cy="12" r="9"/></svg>;
      case 'plus.circle.fill':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>;
      case 'trash':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>;
      case 'chevron.up':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>;
      case 'chevron.down':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>;
      case 'chevron.left':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>;
      case 'chevron.right':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>;
      case 'safari':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>;
      case 'star.fill':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>;
      case 'clock':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>;
      case 'arrow.up':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>;
      case 'gear':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>;
      case 'bell.fill':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>;
      case 'info.circle.fill':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>;
      case 'line.3.horizontal':
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>;
      default:
        return <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><circle cx="12" cy="12" r="2"/></svg>;
    }
  };

  return <span className="sf-icon">{getIconPath()}</span>;
}

// Mock Data
const mockUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex.johnson@company.com',
  avatar: 'AJ'
};

const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Global Markets Show Strong Growth in Q4',
    content: 'Financial markets worldwide demonstrated robust performance with major indices posting significant gains. Technology and healthcare sectors led the rally, while energy stocks showed mixed results amid changing oil prices.',
    source: 'Financial Times',
    category: 'Market Analysis',
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    timeAgo: '2 hours ago',
    relevanceScore: 9
  },
  {
    id: '2',
    title: 'Tech Sector Leads Innovation Surge',
    content: 'Technology companies continue to push boundaries with new developments in artificial intelligence and cloud computing. Major players announced quarterly results exceeding analyst expectations.',
    source: 'Bloomberg',
    category: 'Technology',
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    timeAgo: '5 hours ago',
    relevanceScore: 8
  },
  {
    id: '3',
    title: 'Sustainable Investment Trends for 2025',
    content: 'ESG investing continues to gain traction among institutional investors, with green bonds and sustainable funds attracting record capital inflows.',
    source: 'Reuters',
    category: 'Market Moves',
    publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    timeAgo: '1 day ago',
    relevanceScore: 7
  },
  {
    id: '4',
    title: 'Central Banks Signal Policy Shifts',
    content: 'Major central banks hint at potential changes in monetary policy direction as inflation data shows signs of stabilization across major economies.',
    source: 'WSJ',
    category: 'Market Analysis',
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    timeAgo: '2 days ago',
    relevanceScore: 9
  }
];

const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Team Strategy Meeting',
    time: '10:00 AM',
    timeString: '10:00 AM',
    date: 'Today'
  },
  {
    id: '2',
    title: 'Client Presentation',
    time: '2:30 PM',
    timeString: '2:30 PM',
    date: 'Today'
  },
  {
    id: '3',
    title: 'Project Review',
    time: '4:00 PM',
    timeString: '4:00 PM',
    date: 'Today'
  }
];

const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    text: 'Hi team! Just wanted to check in on the project status.',
    senderId: '2',
    senderName: 'Sarah Chen',
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    isCurrentUser: false
  },
  {
    id: '2',
    text: 'Everything is on track. We should have the report ready by end of day.',
    senderId: '1',
    senderName: 'Alex Johnson',
    timestamp: new Date(Date.now() - 25 * 60 * 1000),
    isCurrentUser: true
  },
  {
    id: '3',
    text: 'Great! Looking forward to reviewing it.',
    senderId: '2',
    senderName: 'Sarah Chen',
    timestamp: new Date(Date.now() - 20 * 60 * 1000),
    isCurrentUser: false
  }
];

const mockCallNotes: CallNote[] = [
  {
    id: '1',
    title: 'Client Strategy Discussion',
    date: 'Oct 14, 2025',
    notes: 'Discussed Q4 objectives and upcoming product launches. Client expressed interest in expanding services.',
    participants: ['Sarah Chen', 'Michael Brown'],
    duration: '45:32',
    aiSummary: 'Productive discussion on Q4 strategy. Key action items include preparing product expansion proposal and scheduling follow-up meeting.'
  },
  {
    id: '2',
    title: 'Weekly Team Sync',
    date: 'Oct 13, 2025',
    notes: 'Reviewed project milestones and assigned tasks for next sprint.',
    participants: ['Team Members'],
    duration: '30:15'
  }
];

function BusinessApp() {
  const [selectedView, setSelectedView] = useState<ViewType>('home');
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', title: 'Review quarterly reports', isCompleted: false },
    { id: '2', title: 'Prepare presentation slides', isCompleted: false },
    { id: '3', title: 'Email client updates', isCompleted: true },
    { id: '4', title: 'Update project timeline', isCompleted: false },
    { id: '5', title: 'Schedule team meeting', isCompleted: false }
  ]);

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      isCompleted: false
    };
    setTodos([newTodo, ...todos]);
  };

  const pendingTodos = todos.filter(t => !t.isCompleted).length;

  return (
    <div className="business-app">
      {/* Navigation Sidebar */}
      <div className="nav-sidebar">
        <div className="nav-icons">
          <NavIcon 
            icon="house.fill" 
            label="Home" 
            isActive={selectedView === 'home'}
            onClick={() => setSelectedView('home')}
          />
          <NavIcon 
            icon="doc.text.fill" 
            label="Articles" 
            isActive={selectedView === 'articles'}
            onClick={() => setSelectedView('articles')}
          />
          <NavIcon 
            icon="checkmark.circle.fill" 
            label="Tasks" 
            isActive={selectedView === 'todos'}
            onClick={() => setSelectedView('todos')}
          />
          <NavIcon 
            icon="calendar" 
            label="Calendar" 
            isActive={selectedView === 'calendar'}
            onClick={() => setSelectedView('calendar')}
          />
          <NavIcon 
            icon="phone.fill" 
            label="Call Notes" 
            isActive={selectedView === 'callnotes'}
            onClick={() => setSelectedView('callnotes')}
          />
          <NavIcon 
            icon="message.fill" 
            label="Chat" 
            isActive={selectedView === 'chat'}
            onClick={() => setSelectedView('chat')}
          />
          <NavIcon 
            icon="brain.head.profile" 
            label="AI" 
            isActive={selectedView === 'ai'}
            onClick={() => setSelectedView('ai')}
          />
          <NavIcon 
            icon="person.circle.fill" 
            label="Profile" 
            isActive={selectedView === 'profile'}
            onClick={() => setSelectedView('profile')}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {selectedView === 'home' && (
          <HomeView 
            user={mockUser} 
            articlesCount={mockArticles.length}
            todos={todos}
            pendingTodos={pendingTodos}
            events={mockEvents}
          />
        )}
        {selectedView === 'articles' && <ArticlesView articles={mockArticles} />}
        {selectedView === 'todos' && (
          <TodosView 
            todos={todos} 
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onAdd={addTodo}
          />
        )}
        {selectedView === 'calendar' && <CalendarView events={mockEvents} />}
        {selectedView === 'callnotes' && <CallNotesView callNotes={mockCallNotes} />}
        {selectedView === 'chat' && <ChatView messages={mockChatMessages} />}
        {selectedView === 'ai' && <AIView />}
        {selectedView === 'profile' && <ProfileView user={mockUser} />}
      </div>

      <style>{`
        /* Reset font inheritance and animations for this app */
        .business-app,
        .business-app * {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif !important;
          animation: none !important;
          text-shadow: none !important;
        }

        .business-app h1,
        .business-app h2,
        .business-app h3,
        .business-app h4,
        .business-app h5,
        .business-app h6 {
          animation: none !important;
          text-shadow: none !important;
          transform: none !important;
          letter-spacing: normal !important;
        }

        .business-app {
          width: 100%;
          height: 100%;
          display: flex;
          background: linear-gradient(135deg, #0a1628 0%, #1a2744 100%);
          position: relative;
          overflow: hidden;
        }

        .nav-sidebar {
          width: 20%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 8px 0 20px rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .nav-icons {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .main-content {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          position: relative;
        }

        /* Custom scrollbar */
        .main-content::-webkit-scrollbar {
          width: 6px;
        }

        .main-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        .main-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }

        .main-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}

// Navigation Icon Component  
interface NavIconProps {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function NavIcon({ icon, label, isActive, onClick }: NavIconProps) {
  return (
    <button className={`nav-icon ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="icon-container">
        <SFIcon name={icon} size={20} />
      </div>
      <span className="label">{label}</span>

      <style>{`
        .nav-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          transition: all 0.3s ease;
        }

        .icon-container {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          color: white;
        }

        .nav-icon.active .icon-container {
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transform: scale(1.05);
        }

        .nav-icon:hover .icon-container {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .label {
          font-size: 9px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          line-height: 1.1;
          max-width: 44px;
          white-space: pre-line;
        }
      `}</style>
    </button>
  );
}

// Home View Component
interface HomeViewProps {
  user: User;
  articlesCount: number;
  todos: Todo[];
  pendingTodos: number;
  events: CalendarEvent[];
}

function HomeView({ user, articlesCount, todos, pendingTodos, events }: HomeViewProps) {
  const firstName = user.name.split(' ')[0];

  return (
    <div className="home-view">

      <div className="home-content">
        {/* Welcome Message */}
        <div className="welcome-section">
          <div className="welcome-text">Welcome Back,</div>
          <div className="user-name">{firstName}</div>
        </div>

        {/* Articles Card */}
        <div className="glass-card">
          <div className="card-row">
            <span className="card-label">Articles</span>
            <span className="card-value">{articlesCount}</span>
          </div>
        </div>

        {/* Tasks Card */}
        <div className="glass-card tasks-card">
          <div className="card-header">
            <span className="card-label">Tasks</span>
            <span className="pending-count">{pendingTodos} pending</span>
          </div>
          
          <div className="tasks-list">
            {todos.slice(0, 5).map(todo => (
              <div key={todo.id} className="task-item">
                <span className="task-checkbox">
                  <SFIcon name={todo.isCompleted ? "checkmark.circle.fill" : "circle"} size={18} />
                </span>
                <span className={`task-title ${todo.isCompleted ? 'completed' : ''}`}>
                  {todo.title}
                </span>
              </div>
            ))}
            {todos.length > 5 && (
              <div className="more-tasks">+ {todos.length - 5} more tasks</div>
            )}
          </div>
        </div>

        {/* Upcoming Events Card */}
        <div className="glass-card events-card">
          <div className="card-header">
            <span className="card-label">Upcoming Events:</span>
          </div>
          
          <div className="events-list">
            {events.map(event => (
              <div key={event.id} className="event-item">
                <span className="event-time">{event.timeString}</span>
                <span className="event-title">{event.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .home-view {
          width: 100%;
          height: 100%;
          padding: 100px 30px 40px;
          position: relative;
          overflow-y: auto;
        }


        .home-content {
          display: flex;
          flex-direction: column;
          gap: 25px;
          position: relative;
          z-index: 1;
        }

        .welcome-section {
          margin-bottom: 10px;
        }

        .welcome-text {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
        }

        .user-name {
          font-size: 32px;
          font-weight: 700;
          color: white;
          margin-top: 5px;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 25px;
          box-shadow: 
            -8px -8px 15px rgba(255, 255, 255, 0.1),
            10px 10px 20px rgba(0, 0, 0, 0.3);
        }

        .card-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .card-label {
          font-size: 15px;
          font-weight: 500;
          color: white;
        }

        .card-value {
          font-size: 15px;
          font-weight: 500;
          color: white;
        }

        .pending-count {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
        }

        .tasks-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .task-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .task-item:last-child {
          border-bottom: none;
        }

        .task-checkbox {
          color: ${todos.some(t => t.isCompleted) ? '#22c55e' : 'rgba(255, 255, 255, 0.6)'};
          display: flex;
          align-items: center;
        }

        .task-title {
          font-size: 15px;
          font-weight: 500;
          color: white;
        }

        .task-title.completed {
          text-decoration: line-through;
          color: rgba(255, 255, 255, 0.5);
        }

        .more-tasks {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          text-align: center;
          padding-top: 5px;
        }

        .events-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .event-item {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 
            -4px -4px 8px rgba(255, 255, 255, 0.1),
            5px 5px 10px rgba(0, 0, 0, 0.3);
        }

        .event-time {
          font-size: 11px;
          font-weight: 500;
          color: white;
        }

        .event-title {
          font-size: 11px;
          font-weight: 500;
          color: white;
        }


      `}</style>
    </div>
  );
}

// Articles View Component
interface ArticlesViewProps {
  articles: Article[];
}

function ArticlesView({ articles }: ArticlesViewProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>(null);

  const categories = ['All', 'Market Analysis', 'Technology', 'Market Moves'];

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="articles-view">

      <div className="articles-content">
        {/* AI Summary */}
        <div className="ai-summary-card">
          <div className="summary-header">
            <span className="summary-title">AI Daily Summary</span>
          </div>
          <p className="summary-text">
            Markets showed resilience today with tech sector leading gains. Key developments in sustainable 
            investing and central bank policy shifts continue to shape market sentiment. 4 articles analyzed.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles List */}
        <div className="articles-list">
          {filteredArticles.map(article => (
            <div key={article.id} className="article-card">
              <div className="article-header">
                <div className="article-title-section">
                  <h3 className="article-title">{article.title}</h3>
                  <div className="article-meta">
                    <span className="article-source">{article.source}</span>
                    <span className="article-time">{article.timeAgo}</span>
                    {article.relevanceScore && (
                      <span className="article-score">
                        <SFIcon name="star.fill" size={8} /> {article.relevanceScore}
                      </span>
                    )}
                  </div>
                </div>
                <button 
                  className="expand-btn"
                  onClick={() => setExpandedArticleId(
                    expandedArticleId === article.id ? null : article.id
                  )}
                >
                  <SFIcon name={expandedArticleId === article.id ? "chevron.up" : "chevron.down"} size={12} />
                </button>
              </div>
              
              {expandedArticleId === article.id && (
                <div className="article-content">
                  <p>{article.content}</p>
                  <button className="read-more-btn">
                    <SFIcon name="safari" size={10} /> Read Full Article
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .articles-view {
          width: 100%;
          height: 100%;
          padding: 100px 15px 40px;
          position: relative;
        }


        .articles-content {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .ai-summary-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 18px;
          box-shadow: 
            -8px -8px 15px rgba(255, 255, 255, 0.1),
            10px 10px 20px rgba(0, 0, 0, 0.3);
        }

        .summary-header {
          margin-bottom: 10px;
        }

        .summary-title {
          font-size: 24px;
          font-weight: 700;
          color: white;
        }

        .summary-text {
          font-size: 11px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .filter-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          color: white;
          font-size: 11px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 
            -4px -4px 8px rgba(255, 255, 255, 0.1),
            4px 4px 10px rgba(0, 0, 0, 0.3);
        }

        .filter-btn.active {
          background: rgba(255, 255, 255, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.6);
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .articles-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .article-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 18px;
          box-shadow: 
            -8px -8px 15px rgba(255, 255, 255, 0.1),
            10px 10px 20px rgba(0, 0, 0, 0.3);
        }

        .article-header {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }

        .article-title-section {
          flex: 1;
        }

        .article-title {
          font-size: 11px;
          font-weight: 600;
          color: white;
          margin: 0 0 6px 0;
          line-height: 1.3;
        }

        .article-meta {
          display: flex;
          gap: 6px;
          align-items: center;
          flex-wrap: wrap;
        }

        .article-source {
          font-size: 9px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.2);
          padding: 3px 6px;
          border-radius: 6px;
        }

        .article-time {
          font-size: 9px;
          color: rgba(255, 255, 255, 0.7);
        }

        .article-score {
          font-size: 9px;
          color: rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .expand-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .article-content {
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .article-content p {
          font-size: 11px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 10px 0;
        }

        .read-more-btn {
          font-size: 11px;
          font-weight: 500;
          color: white;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .read-more-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}

// Todos View Component
interface TodosViewProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onAdd: (title: string) => void;
}

function TodosView({ todos, onToggle, onDelete, onAdd }: TodosViewProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleAdd = () => {
    if (newTodoTitle.trim()) {
      onAdd(newTodoTitle);
      setNewTodoTitle('');
      setShowAddForm(false);
    }
  };

  return (
    <div className="todos-view">

      <div className="todos-content">
        <h1 className="todos-title">My Tasks</h1>

        <div className="todos-list">
          {todos.map(todo => (
            <div key={todo.id} className="todo-item">
              <button 
                className={`todo-checkbox ${todo.isCompleted ? 'completed' : ''}`}
                onClick={() => onToggle(todo.id)}
              >
                <SFIcon name={todo.isCompleted ? "checkmark.circle.fill" : "circle"} size={24} />
              </button>
              <span className={`todo-title ${todo.isCompleted ? 'completed' : ''}`}>
                {todo.title}
              </span>
              <button 
                className="todo-delete"
                onClick={() => onDelete(todo.id)}
              >
                <SFIcon name="trash" size={16} />
              </button>
            </div>
          ))}
        </div>

        {!showAddForm ? (
          <button className="add-todo-btn" onClick={() => setShowAddForm(true)}>
            <span className="plus-icon"><SFIcon name="plus.circle.fill" size={24} /></span>
            Add New Task
          </button>
        ) : (
          <div className="add-todo-form">
            <input
              type="text"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
              placeholder="Enter task title..."
              className="todo-input"
              autoFocus
              onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
            />
            <div className="form-buttons">
              <button className="form-btn cancel-btn" onClick={() => {
                setShowAddForm(false);
                setNewTodoTitle('');
              }}>
                Cancel
              </button>
              <button 
                className="form-btn add-btn" 
                onClick={handleAdd}
                disabled={!newTodoTitle.trim()}
              >
                Add Task
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .todos-view {
          width: 100%;
          height: 100%;
          padding: 100px 30px 40px;
          position: relative;
        }


        .todos-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .todos-title {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin: 0 0 10px 0;
        }

        .todos-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .todo-item {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          box-shadow: 
            -10px -10px 20px rgba(255, 255, 255, 0.2),
            12px 12px 25px rgba(13, 39, 80, 0.3);
        }

        .todo-checkbox {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .todo-checkbox.completed {
          color: #22c55e;
        }

        .todo-title {
          flex: 1;
          font-size: 11px;
          font-weight: 500;
          color: white;
        }

        .todo-title.completed {
          text-decoration: line-through;
          color: rgba(255, 255, 255, 0.5);
        }

        .todo-delete {
          background: none;
          border: none;
          color: rgba(255, 100, 100, 0.7);
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s ease;
        }

        .todo-delete:hover {
          color: rgba(255, 100, 100, 1);
        }

        .add-todo-btn {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 16px;
          color: white;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.2s ease;
          box-shadow: 
            -10px -10px 20px rgba(255, 255, 255, 0.2),
            12px 12px 25px rgba(13, 39, 80, 0.3);
        }

        .add-todo-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .plus-icon {
          display: flex;
          align-items: center;
        }

        .add-todo-form {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 
            -10px -10px 20px rgba(255, 255, 255, 0.2),
            12px 12px 25px rgba(13, 39, 80, 0.3);
        }

        .todo-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 16px;
          color: white;
          font-size: 15px;
          margin-bottom: 15px;
        }

        .todo-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .todo-input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.4);
        }

        .form-buttons {
          display: flex;
          gap: 15px;
        }

        .form-btn {
          flex: 1;
          padding: 16px;
          border: none;
          border-radius: 15px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cancel-btn {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .cancel-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .add-btn {
          background: rgba(34, 197, 94, 0.6);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .add-btn:hover:not(:disabled) {
          background: rgba(34, 197, 94, 0.7);
        }

        .add-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: rgba(128, 128, 128, 0.3);
        }
      `}</style>
    </div>
  );
}

// Calendar View Component  
function CalendarView({ events }: { events: CalendarEvent[] }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const changeMonth = (delta: number) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + delta);
    setCurrentMonth(newMonth);
  };

  return (
    <div className="calendar-view">
      <div className="calendar-content">
        <div className="calendar-header">
          <h1 className="calendar-title">Calendar</h1>
        </div>

        {/* Month Navigation */}
        <div className="month-nav">
          <button className="month-btn" onClick={() => changeMonth(-1)}>
            <SFIcon name="chevron.left" size={18} />
          </button>
          <span className="month-year">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </span>
          <button className="month-btn" onClick={() => changeMonth(1)}>
            <SFIcon name="chevron.right" size={18} />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="calendar-grid-container">
          <div className="days-header">
            {dayNames.map(day => (
              <div key={day} className="day-name">{day}</div>
            ))}
          </div>
          <div className="calendar-grid">
            {getDaysInMonth().map((day, index) => (
              <button
                key={index}
                className={`calendar-day ${day === selectedDate.getDate() && currentMonth.getMonth() === selectedDate.getMonth() ? 'selected' : ''} ${day === new Date().getDate() && currentMonth.getMonth() === new Date().getMonth() ? 'today' : ''}`}
                onClick={() => day && setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
                disabled={!day}
              >
                {day && (
                  <>
                    <span className="day-number">{day}</span>
                    {(day === 14 || day === 15) && <span className="event-dot"></span>}
                  </>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Events for Selected Date */}
        <div className="events-section">
          <h2 className="events-date">
            {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </h2>
          <div className="events-list-calendar">
            {events.map(event => (
              <div key={event.id} className="calendar-event-row">
                <div className="event-time-badge">
                  <div className="event-time-text">{event.timeString}</div>
                  <div className="event-date-text">{event.date}</div>
                </div>
                <div className="event-details">
                  <div className="event-name">{event.title}</div>
                  <div className="event-calendar">Work Calendar</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .calendar-view {
          width: 100%;
          height: 100%;
          padding: 20px;
          position: relative;
        }


        .calendar-content {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .calendar-title {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin: 0;
        }

        .month-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
        }

        .month-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .month-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .month-year {
          font-size: 24px;
          font-weight: 700;
          color: white;
        }

        .calendar-grid-container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 12px;
          box-shadow: 
            -10px -10px 20px rgba(255, 255, 255, 0.2),
            12px 12px 25px rgba(13, 39, 80, 0.3);
        }

        .days-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 2px;
          margin-bottom: 8px;
        }

        .day-name {
          text-align: center;
          font-size: 10px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          padding: 2px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 2px;
        }

        .calendar-day {
          aspect-ratio: 1;
          border: none;
          border-radius: 12px;
          background: transparent;
          color: white;
          font-size: 11px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          position: relative;
          transition: all 0.2s ease;
        }

        .calendar-day:disabled {
          cursor: default;
        }

        .calendar-day.today {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }

        .calendar-day.selected {
          background: rgba(255, 255, 255, 0.3);
          font-weight: 700;
        }

        .calendar-day:not(:disabled):hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .day-number {
          font-size: 11px;
        }

        .event-dot {
          width: 4px;
          height: 4px;
          background: #22c55e;
          border-radius: 50%;
        }

        .events-section {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 
            -10px -10px 20px rgba(255, 255, 255, 0.2),
            12px 12px 25px rgba(13, 39, 80, 0.3);
        }

        .events-date {
          font-size: 13px;
          font-weight: 700;
          color: white;
          margin: 0 0 12px 0;
        }

        .events-list-calendar {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .calendar-event-row {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 15px;
          display: flex;
          gap: 15px;
          box-shadow: 
            -8px -8px 15px rgba(255, 255, 255, 0.2),
            10px 10px 20px rgba(13, 39, 80, 0.3);
        }

        .event-time-badge {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          padding: 12px;
          min-width: 70px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .event-time-text {
          font-size: 11px;
          font-weight: 700;
          color: white;
        }

        .event-date-text {
          font-size: 9px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
        }

        .event-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 4px;
        }

        .event-name {
          font-size: 10px;
          font-weight: 600;
          color: white;
          line-height: 1.2;
        }

        .event-calendar {
          font-size: 9px;
          color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </div>
  );
}

// Call Notes View Component
function CallNotesView({ callNotes }: { callNotes: CallNote[] }) {
  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null);

  return (
    <div className="callnotes-view">
      <div className="callnotes-content">
        <h1 className="callnotes-title">Call Notes</h1>

        <div className="callnotes-list">
          {callNotes.map(note => (
            <div key={note.id} className="callnote-item">
              <div className="callnote-header">
                <div className="callnote-info">
                  <h3 className="callnote-title-text">{note.title}</h3>
                  <div className="callnote-meta">
                    <span className="callnote-date">{note.date}</span>
                    {note.duration && (
                      <>
                        <span className="callnote-meta-sep">•</span>
                        <span className="callnote-duration">
                          <SFIcon name="clock" size={12} /> {note.duration}
                        </span>
                      </>
                    )}
                    <span className="callnote-meta-sep">•</span>
                    <span className="callnote-participants">
                      {note.participants.length} participants
                    </span>
                  </div>
                </div>
                <button 
                  className="callnote-expand-btn"
                  onClick={() => setExpandedNoteId(expandedNoteId === note.id ? null : note.id)}
                >
                  <SFIcon name={expandedNoteId === note.id ? "chevron.up" : "chevron.down"} size={20} />
                </button>
              </div>

              {expandedNoteId === note.id && (
                <div className="callnote-expanded">
                  {note.aiSummary && (
                    <div className="callnote-section">
                      <div className="section-header">
                        <span className="sparkle">✨</span> AI Summary
                      </div>
                      <p className="section-text">{note.aiSummary}</p>
                    </div>
                  )}
                  
                  <div className="callnote-section">
                    <div className="section-header">Notes</div>
                    <p className="section-text">{note.notes}</p>
                  </div>

                  <div className="callnote-section">
                    <div className="section-header">Participants</div>
                    <p className="section-text">{note.participants.join(', ')}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="add-callnote-btn">
          <SFIcon name="plus.circle.fill" size={24} />
          Add Call Note
        </button>
      </div>

      <style>{`
        .callnotes-view {
          width: 100%;
          height: 100%;
          padding: 100px 30px 40px;
          position: relative;
        }


        .callnotes-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .callnotes-title {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin: 0 0 10px 0;
        }

        .callnotes-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .callnote-item {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 
            -10px -10px 20px rgba(255, 255, 255, 0.2),
            12px 12px 25px rgba(13, 39, 80, 0.3);
        }

        .callnote-header {
          display: flex;
          justify-content: space-between;
          gap: 15px;
        }

        .callnote-info {
          flex: 1;
        }

        .callnote-title-text {
          font-size: 11px;
          font-weight: 600;
          color: white;
          margin: 0 0 5px 0;
        }

        .callnote-meta {
          display: flex;
          gap: 8px;
          align-items: center;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.7);
          flex-wrap: wrap;
        }

        .callnote-meta-sep {
          color: rgba(255, 255, 255, 0.4);
        }

        .callnote-duration {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .callnote-expand-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .callnote-expanded {
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .callnote-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .section-header {
          font-size: 11px;
          font-weight: 600;
          color: white;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .sparkle {
          font-size: 11px;
        }

        .section-text {
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .add-callnote-btn {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 16px;
          color: white;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.2s ease;
          box-shadow: 
            -10px -10px 20px rgba(255, 255, 255, 0.2),
            12px 12px 25px rgba(13, 39, 80, 0.3);
        }

        .add-callnote-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </div>
  );
}

// Chat View Component
function ChatView({ messages }: { messages: ChatMessage[] }) {
  const [inputText, setInputText] = useState('');
  const [chatMessages, setChatMessages] = useState(messages);

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        text: inputText,
        senderId: '1',
        senderName: 'Alex Johnson',
        timestamp: new Date(),
        isCurrentUser: true
      };
      setChatMessages([...chatMessages, newMessage]);
      setInputText('');
    }
  };

  return (
    <div className="chat-view">
      <div className="chat-header">
        <div className="chat-info">
          <div className="chat-title">Team Chat</div>
          <div className="chat-subtitle">3 members</div>
        </div>
      </div>

      <div className="messages-area">
        {chatMessages.map(msg => (
          <div key={msg.id} className={`message-bubble ${msg.isCurrentUser ? 'current-user' : 'other-user'}`}>
            {!msg.isCurrentUser && (
              <div className="message-sender">{msg.senderName}</div>
            )}
            <div className="message-text">{msg.text}</div>
            <div className="message-time">
              {msg.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
          className="chat-input"
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button 
          className={`send-btn ${inputText.trim() ? 'active' : ''}`}
          onClick={sendMessage}
          disabled={!inputText.trim()}
        >
          <SFIcon name="arrow.up" size={16} />
        </button>
      </div>

      <style>{`
        .chat-view {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .chat-header {
          padding: 100px 20px 15px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .chat-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .chat-title {
          font-size: 15px;
          font-weight: 700;
          color: white;
        }

        .chat-subtitle {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
        }

        .messages-area {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .message-bubble {
          display: flex;
          flex-direction: column;
          max-width: 70%;
        }

        .message-bubble.current-user {
          align-self: flex-end;
          align-items: flex-end;
        }

        .message-bubble.other-user {
          align-self: flex-start;
          align-items: flex-start;
        }

        .message-sender {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 4px;
          padding-left: 8px;
        }

        .message-text {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 12px 16px;
          color: white;
          font-size: 11px;
          line-height: 1.4;
        }

        .message-bubble.current-user .message-text {
          background: rgba(74, 107, 92, 1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .message-time {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 4px;
          padding: 0 8px;
        }

        .chat-input-area {
          padding: 15px 20px 25px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .chat-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          padding: 14px 18px;
          color: white;
          font-size: 11px;
        }

        .chat-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .chat-input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .send-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .send-btn.active {
          background: rgba(74, 107, 92, 1);
          color: white;
        }

        .send-btn:disabled {
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

// AI Assistant View Component
function AIView() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Array<{id: string, text: string, isUser: boolean, timestamp: Date}>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const suggestedQuestions = [
    "What are the key market trends today?",
    "Summarize recent industry developments",
    "What's happening with technology stocks?"
  ];

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        text: "I'm a demo AI assistant. In the full version, I would provide intelligent insights about your question.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="ai-view">
      <div className="ai-header">
        <button className="hamburger-btn">
          <SFIcon name="line.3.horizontal" size={20} />
        </button>
      </div>

      <div className="ai-messages">
        {messages.length === 0 ? (
          <div className="ai-welcome">
            <SFIcon name="brain.head.profile" size={60} />
            <h2 className="ai-welcome-title">AI Credit Assistant</h2>
            <p className="ai-welcome-subtitle">
              Ask me anything about credit markets, articles, or financial analysis
            </p>
            <div className="suggested-questions">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  className="suggested-question-btn"
                  onClick={() => sendMessage(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="ai-messages-list">
            {messages.map(msg => (
              <div key={msg.id} className={`ai-message ${msg.isUser ? 'user' : 'assistant'}`}>
                <div className="ai-message-content">{msg.text}</div>
                <div className="ai-message-time">
                  {msg.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="ai-loading">
                <span className="loading-dots">Thinking...</span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="ai-input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask about credit markets..."
          className="ai-input"
          onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputText)}
        />
        <button 
          className={`ai-send-btn ${inputText.trim() ? 'active' : ''}`}
          onClick={() => sendMessage(inputText)}
          disabled={!inputText.trim()}
        >
          <SFIcon name="arrow.up" size={20} />
        </button>
      </div>

      <style>{`
        .ai-view {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: linear-gradient(135deg, #0D2750 0%, #1a3a5c 50%, #0D2750 100%);
        }

        .ai-header {
          display: flex;
          justify-content: space-between;
          padding: 100px 20px 20px;
        }

        .hamburger-btn {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }


        .ai-messages {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }

        .ai-welcome {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px 40px 20px;
          color: white;
        }

        .ai-welcome-title {
          font-size: 11px;
          font-weight: 700;
          margin: 20px 0 10px;
        }

        .ai-welcome-subtitle {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 20px 0;
        }

        .suggested-questions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 300px;
          margin-top: 20px;
        }

        .suggested-question-btn {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 12px 18px;
          color: white;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 
            -5px -5px 10px rgba(255, 255, 255, 0.15),
            7px 7px 12px rgba(13, 39, 80, 0.3);
        }

        .suggested-question-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .ai-messages-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .ai-message {
          display: flex;
          flex-direction: column;
          max-width: 75%;
        }

        .ai-message.user {
          align-self: flex-end;
          align-items: flex-end;
        }

        .ai-message.assistant {
          align-self: flex-start;
          align-items: flex-start;
        }

        .ai-message-content {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 18px;
          padding: 12px 16px;
          color: white;
          font-size: 11px;
          line-height: 1.4;
          box-shadow: 
            -4px -4px 8px rgba(255, 255, 255, 0.1),
            6px 6px 10px rgba(13, 39, 80, 0.3);
        }

        .ai-message.user .ai-message-content {
          background: rgba(255, 255, 255, 0.15);
        }

        .ai-message-time {
          font-size: 9px;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 4px;
          padding: 0 8px;
        }

        .ai-loading {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 11px;
          padding: 10px;
        }

        .loading-dots::after {
          content: '...';
          animation: dots 1.5s infinite;
        }

        @keyframes dots {
          0%, 20% { content: '.'; }
          40% { content: '..'; }
          60%, 100% { content: '...'; }
        }

        .ai-input-area {
          padding: 15px 20px 25px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .ai-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          padding: 14px 18px;
          color: white;
          font-size: 11px;
          box-shadow: 
            -6px -6px 12px rgba(255, 255, 255, 0.15),
            8px 8px 15px rgba(13, 39, 80, 0.4);
        }

        .ai-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .ai-input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .ai-send-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ai-send-btn.active {
          background: white;
          color: #0D2750;
        }

        .ai-send-btn:disabled {
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

// Profile View Component
function ProfileView({ user }: { user: User }) {
  return (
    <div className="profile-view">
      <div className="profile-content">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar-large">{user.avatar}</div>
          <div className="profile-name">{user.name}</div>
          <div className="profile-email">{user.email}</div>
        </div>

        {/* Profile Options */}
        <div className="profile-options">
          <button className="profile-option">
            <div className="option-icon-container">
              <SFIcon name="bell.fill" size={20} />
            </div>
            <span className="option-text">Notifications</span>
            <SFIcon name="chevron.right" size={16} />
          </button>

          <button className="profile-option">
            <div className="option-icon-container">
              <SFIcon name="gear" size={20} />
            </div>
            <span className="option-text">Settings</span>
            <SFIcon name="chevron.right" size={16} />
          </button>

          <button className="profile-option">
            <div className="option-icon-container">
              <SFIcon name="info.circle.fill" size={20} />
            </div>
            <span className="option-text">About</span>
            <SFIcon name="chevron.right" size={16} />
          </button>

          <button className="profile-option signout">
            <span className="option-text">Sign Out</span>
          </button>
        </div>
      </div>

      <style>{`
        .profile-view {
          width: 100%;
          height: 100%;
          padding: 100px 30px 40px;
          position: relative;
        }

        .profile-content {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .profile-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .profile-avatar-large {
          width: 120px;
          height: 120px;
          background: rgba(255, 255, 255, 0.2);
          border: 3px solid rgba(74, 107, 92, 1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          font-weight: 700;
          color: white;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
        }

        .profile-name {
          font-size: 11px;
          font-weight: 700;
          color: white;
        }

        .profile-email {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
        }

        .profile-options {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .profile-option {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 
            -10px -10px 20px rgba(255, 255, 255, 0.2),
            12px 12px 25px rgba(13, 39, 80, 0.3);
          color: white;
        }

        .profile-option:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .option-icon-container {
          width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .option-text {
          flex: 1;
          font-size: 15px;
          font-weight: 500;
          text-align: left;
        }

        .profile-option.signout {
          border-color: rgba(239, 68, 68, 0.4);
        }

        .profile-option.signout .option-text {
          color: #ef4444;
        }
      `}</style>
    </div>
  );
}

export default BusinessApp;
