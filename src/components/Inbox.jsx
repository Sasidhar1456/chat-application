// components/Inbox.js
import React from 'react';
import {
  BsJustify,
  BsPipFill,
  BsReverseLayoutSidebarReverse,
} from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';

const Inbox = ({ selectedMessage, onSelectMessage }) => {
  const messages = [
    {
      id: 1,
      icon: 'L',
      sender: 'Luis - Github',
      preview: 'Hey! I have a question about my order.',
      time: '45m',
    },
    {
      id: 2,
      icon: 'I',
      sender: 'Ivan - Nike',
      preview: 'Hi there! I need help with my account.',
      time: '1h',
    },
    {
      id: 3,
      icon: 'M',
      sender: 'Maya - Spotify',
      preview: 'Hello! Can you assist me with a refund?',
      time: '2h',
    },
  ];

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
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message-item ${
                  selectedMessage === msg.id ? 'selected' : ''
                }`}
                onClick={() => onSelectMessage(msg.id)}
              >
                <span
                  className={`message-icon ${
                    selectedMessage === msg.id
                      ? 'message-icon-selected'
                      : ''
                  }`}
                >
                  {msg.icon}
                </span>

                <div className="message-cont">
                  <span className="message-head">{msg.sender}</span>
                  <span className="message-desc">{msg.preview}</span>
                </div>

                <span className="message-time">{msg.time}</span>
              </div>
            ))}
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
