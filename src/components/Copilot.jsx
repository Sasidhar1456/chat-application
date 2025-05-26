// components/Copilot.js
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { GoCopilot } from 'react-icons/go';
import { IoCloseOutline } from 'react-icons/io5';

const Copilot = ({ onClose, isMobile }) => {
  return (
    <div className="co-start">
      <div className="co-heading">
        <span
          style={{
            color: '#6a6dce',
            textDecoration: 'underline',
            textDecorationColor: '#6a6dce',
            textUnderlineOffset: '1.1rem',
            textDecorationThickness: '0.2rem',
          }}
        >
          Copilot
        </span>
        <span>Details</span>

        {/* Show “×” (close) only on mobile. */}
        {isMobile && (
          <span
            className="copilot-close-icon"
            onClick={onClose}
            style={{ cursor: 'pointer' }}
          >
            <IoCloseOutline size={24} />
          </span>
        )}
      </div>

      <div className="co-main">
        <div className="co-main-head">
          <span>
            <GoCopilot style={{ fontSize: '28px' }} />
          </span>
          <span style={{ fontSize: 'x-large', fontWeight: '500' }}>
            Hi, I'm Fin AI Copilot
          </span>
          <span style={{ fontSize: 'small', color: 'grey' }}>
            Ask me anything about this conversation
          </span>
        </div>
      </div>

      <div className="co-chat">
        <div style={{ width: '80%' }}>
          <input placeholder="Ask anything you want" className="textarea1" />
        </div>

        {/* Show arrow icon on all screen sizes */}
        <div
          style={{
            width: '20%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '0.7rem',
            cursor: 'pointer',
          }}
        >
          <FaArrowUp style={{ fontSize: '24px' }} />
        </div>
      </div>
    </div>
  );
};

export default Copilot;
