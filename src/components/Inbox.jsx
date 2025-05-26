import React from 'react';
import { BsJustify, BsPipFill } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';

const Inbox = ({ selectedMessage, onSelectMessage }) => {
  return (
    <>
      <div className="inbox">
        <div className="inbox-heading">Your Inbox</div>

        <div className="messages">
          <div className="message-status">
            <div className="open">
              <span>5 Open</span>
              <span style={{ paddingTop: '0.2rem' }}>
                <FaChevronDown color="black" />
              </span>
            </div>
            <div className="open">
              <span>Waiting</span>
              <span style={{ paddingTop: '0.2rem' }}>
                <FaChevronDown color="black" />
              </span>
            </div>
          </div>

          <div className="actual-messages">
            <div
              className={`message-item ${selectedMessage === 1 ? 'selected' : ''}`}
              onClick={() => onSelectMessage(1)}
            >
              <span className={`message-icon ${selectedMessage === 1 ? 'message-icon-selected' : ''}`}>
                L
              </span>
              <div className="message-cont">
                <span className="message-head">Luis - Github</span>
                <span className="message-desc">Hey! I have a question about my order.</span>
              </div>
              <span className="message-time">45m</span>
            </div>

            <div
              className={`message-item ${selectedMessage === 2 ? 'selected' : ''}`}
              onClick={() => onSelectMessage(2)}
            >
              <span className={`message-icon2 ${selectedMessage === 2 ? 'message-icon-selected' : ''}`}>
                I
              </span>
              <div className="message-cont">
                <span className="message-head">Ivan - Nike</span>
                <span className="message-desc">Hi there! I need help with my account.</span>
              </div>
              <span className="message-time">1h</span>
            </div>

            <div
              className={`message-item ${selectedMessage === 3 ? 'selected' : ''}`}
              onClick={() => onSelectMessage(3)}
            >
              <span className={`message-icon3 ${selectedMessage === 3 ? 'message-icon-selected' : ''}`}>
                M
              </span>
              <div className="message-cont">
                <span className="message-head">Maya - Spotify</span>
                <span className="message-desc">Hello! Can you assist me with a refund?</span>
              </div>
              <span className="message-time">2h</span>
            </div>
          </div>
        </div>
      </div>

      <div className="inbox-footer">
        <BsPipFill color="black" size={16} />
        <BsJustify color="black" size={16} />
      </div>
    </>
  );
};

export default Inbox;
