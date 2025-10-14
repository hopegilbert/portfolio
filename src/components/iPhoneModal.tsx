import React, { useEffect } from 'react';
import appIcon from '../assets/home-frames/app-icon.png';

interface IPhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const IPhoneModal: React.FC<IPhoneModalProps> = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = React.useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsAnimating(true);
      // Reset animation state after animation completes
      const timer = setTimeout(() => setIsAnimating(false), 600);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
      setIsAnimating(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="iphone-modal-overlay" onClick={onClose}>
      {/* App Icon Launch Animation */}
      {isAnimating && (
        <div className="app-icon-launch">
          <div className="app-icon">
            <img src={appIcon} alt="App" />
          </div>
        </div>
      )}
      
      <div className="iphone-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* iPhone Frame */}
        <div className="iphone-frame">
          {/* Dynamic Island */}
          <div className="dynamic-island" />
          
          {/* Screen Content */}
          <div className="iphone-screen">
            {children}
          </div>

          {/* Close Button */}
          <button className="modal-close-button" onClick={onClose}>
            <span>×</span>
          </button>
        </div>
      </div>

      <style>{`
        .iphone-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease-out;
          padding: 20px;
        }

        .app-icon-launch {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10000;
          animation: appLaunch 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .app-icon {
          width: 120px;
          height: 120px;
          border-radius: 26px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .app-icon img {
          width: 80px;
          height: 80px;
          object-fit: contain;
        }

        @keyframes appLaunch {
          0% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .iphone-modal-container {
          position: relative;
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        @keyframes slideUp {
          from {
            transform: scale(0.8) translateY(50px);
            opacity: 0;
          }
          to {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        .iphone-frame {
          width: 390px;
          height: 844px;
          background: #000;
          border-radius: 55px;
          padding: 12px;
          box-shadow: 
            0 0 0 3px #1c1c1e,
            0 0 0 4px #2c2c2e,
            0 30px 60px rgba(0, 0, 0, 0.6),
            0 0 100px rgba(0, 0, 0, 0.5);
          position: relative;
          overflow: hidden;
        }

        .dynamic-island {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 126px;
          height: 37px;
          background: #000;
          border-radius: 20px;
          z-index: 10000;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
        }

        .iphone-screen {
          width: 100%;
          height: 100%;
          background: #000;
          border-radius: 47px;
          overflow: hidden;
          position: relative;
        }

        .modal-close-button {
          position: absolute;
          top: -50px;
          right: -10px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          line-height: 1;
          padding: 0;
        }

        .modal-close-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .modal-close-button span {
          display: block;
          margin-top: -3px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .iphone-frame {
            width: 350px;
            height: 758px;
            border-radius: 50px;
            padding: 10px;
          }

          .dynamic-island {
            width: 113px;
            height: 33px;
            top: 18px;
          }

          .iphone-screen {
            border-radius: 42px;
          }
        }

        @media (max-width: 480px) {
          .iphone-frame {
            width: 320px;
            height: 693px;
            border-radius: 45px;
            padding: 9px;
          }

          .dynamic-island {
            width: 103px;
            height: 30px;
            top: 16px;
          }

          .iphone-screen {
            border-radius: 38px;
          }

          .modal-close-button {
            top: -45px;
            right: 0;
            width: 36px;
            height: 36px;
            font-size: 28px;
          }
        }

        @media (max-height: 900px) {
          .iphone-frame {
            width: 340px;
            height: 736px;
          }
        }

        @media (max-height: 800px) {
          .iphone-frame {
            width: 310px;
            height: 671px;
          }
        }
      `}</style>
    </div>
  );
};

export default IPhoneModal;

