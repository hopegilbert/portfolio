import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import PlayDressUp from './pages/PlayDressUp';
import IntelligenceHub from './pages/IntelligenceHub';
import ArtWork from './pages/ArtWork';
import VideoEditing from './pages/VideoEditing';
import Movies from './pages/Movies';
import Apps from './pages/Apps';
import DocumentDesign from './pages/DocumentDesign';
import SocialMedia from './pages/SocialMedia';
import Platforms from './pages/Platforms';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/play-dress-up" element={<PlayDressUp />} />
        <Route path="/intelligence-hub" element={<IntelligenceHub />} />
        <Route path="/art-work" element={<ArtWork />} />
        <Route path="/video-editing" element={<VideoEditing />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/document-design" element={<DocumentDesign />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/platforms" element={<Platforms />} />
      </Routes>
    </>
  );
}

export default App;
