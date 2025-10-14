import { useState } from 'react';
import IPhoneModal from '../components/iPhoneModal';
import BusinessApp from './BusinessApp';

function Apps() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">App Development</h1>
          <p className="mt-4 text-xl text-gray-600">
            Interactive mobile applications I've built
          </p>
        </div>

        {/* App Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* App Preview/Icon */}
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl">
                    <span className="text-6xl font-bold text-white">WP</span>
                  </div>
                  <h3 className="text-white font-bold text-xl">WorkFlow Pro</h3>
                </div>
              </div>

              {/* App Description */}
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  WorkFlow Pro
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  A comprehensive business productivity application built with Swift and SwiftUI. 
                  Features include article management, task tracking, calendar integration, team chat, 
                  and AI-powered assistance.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2">📰</span>
                      <span>News articles with AI-generated summaries and filtering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✅</span>
                      <span>Task management with real-time updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">📅</span>
                      <span>Calendar integration for event tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">💬</span>
                      <span>Team messaging and collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">🤖</span>
                      <span>AI assistant for productivity enhancement</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Swift</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">SwiftUI</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">iOS</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">TypeScript</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">React</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  📱 Try Interactive Demo
                </button>
                
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Click to open app in iPhone simulator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* iPhone Modal */}
      <IPhoneModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BusinessApp />
      </IPhoneModal>
    </div>
  );
}

export default Apps;

