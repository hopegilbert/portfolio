import { Link } from 'react-router-dom';

function Home() {
  const sections = [
    { name: 'Play Dress Up', path: '/play-dress-up', description: 'Fashion and styling projects' },
    { name: 'Intelligence Hub', path: '/intelligence-hub', description: 'Data and analytics work' },
    { name: 'Art Work', path: '/art-work', description: 'Creative artwork portfolio' },
    { name: 'Video Editing', path: '/video-editing', description: 'Video production and editing' },
    { name: 'Movies', path: '/movies', description: 'Film and movie projects' },
    { name: 'Apps', path: '/apps', description: 'Application development' },
    { name: 'Document Design', path: '/document-design', description: 'Document and layout design' },
    { name: 'Social Media', path: '/social-media', description: 'Social media content and campaigns' },
    { name: 'Platforms', path: '/platforms', description: 'Platform development and management' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            {/* Profile Image Placeholder */}
            <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
              <span className="text-5xl text-white font-bold">HG</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Hope Gilbert
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl">
              Portfolio & Creative Works
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-base text-gray-600">
              Welcome to my portfolio! Explore my work across various creative and technical disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.path}
              to={section.path}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-2 border-transparent hover:border-indigo-500"
            >
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {section.name}
              </h3>
              <p className="mt-2 text-gray-600">
                {section.description}
              </p>
              <div className="mt-4 flex items-center text-indigo-600 group-hover:translate-x-2 transition-transform">
                <span className="text-sm font-medium">Explore</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

