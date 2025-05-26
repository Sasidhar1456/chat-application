import { useState, useEffect } from 'react';
import './App.css';
import Inbox from './components/Inbox';
import MessageDesc1 from './components/MessageDesc1';
import MessageDesc2 from './components/MessageDesc2';
import MessageDesc3 from './components/MessageDesc3';
import Copilot from './components/Copilot';

function App() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showMessageView, setShowMessageView] = useState(false);
  const [showCopilot, setShowCopilot] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobileNow = window.innerWidth < 768;
      setIsMobile(mobileNow);
      if (!mobileNow) {
        setShowMessageView(false);
        setShowCopilot(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelectMessage = (msgId) => {
    setSelectedMessage(msgId);
    if (isMobile) setShowMessageView(true);
  };

  const handleBackToInbox = () => {
    setShowMessageView(false);
    setSelectedMessage(null);
  };

  const handleOpenCopilot = () => setShowCopilot(true);
  const handleCloseCopilot = () => setShowCopilot(false);

  const renderMessageDesc = () => {
    if (!selectedMessage) {
      return <div className="placeholder-desc"><p>Please select a message from the inbox.</p></div>;
    }

    const props = {
      onBack: handleBackToInbox,
      onOpenCopilot: handleOpenCopilot,
      isMobile
    };

    switch (selectedMessage) {
      case 1:
        return <MessageDesc1 {...props} />;
      case 2:
        return <MessageDesc2 {...props} />;
      case 3:
        return <MessageDesc3 {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className="content-wrapper">
      {/* ────── INBOX PANE ────── */}
      <div
        className="messages-div"
        style={{
          display:
            isMobile && (showMessageView || showCopilot) ? 'none' : 'flex',
        }}
      >
        <Inbox
          selectedMessage={selectedMessage}
          onSelectMessage={handleSelectMessage}
        />
      </div>

      {/* ───── MESSAGE‐DETAILS PANE ───── */}
      <div
        className="messages-description-div"
        style={{
          display:
            isMobile
              ? showMessageView && !showCopilot
                ? 'flex'
                : 'none'
              : 'flex',
        }}
      >
        {renderMessageDesc()}
      </div>

      {/* ───── COPILOT PANE ───── */}
      <div
        className="copilot-div"
        style={{
          display: isMobile ? (showCopilot ? 'block' : 'none') : 'block',
          ...(isMobile && showCopilot
            ? {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 10,
                backgroundColor: '#fff',
                boxShadow: '2px 0 8px rgba(0,0,0,0.2)',
              }
            : {}),
        }}
      >
        <Copilot onClose={handleCloseCopilot} isMobile={isMobile} />
      </div>
    </div>
  );
}

export default App;
