// components/MessageDesc3.js
import React from 'react';
import { FaChevronDown, FaMoon } from 'react-icons/fa';
import { GoBookmarkFill, GoCopilot } from 'react-icons/go';
import { HiDotsHorizontal } from 'react-icons/hi';
import { MdChat, MdElectricBolt, MdEmojiEmotions } from 'react-icons/md';
import { IoArrowBackOutline, IoChatbubblesOutline } from 'react-icons/io5';

const MessageDesc3 = ({ onBack, onOpenCopilot, isMobile }) => {
  return (
    <div className="meessage-main">
      <div className="message-heading">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {isMobile && (
            <span
              className="back-icon"
              onClick={onBack}
              style={{ cursor: 'pointer' }}
            >
              <IoArrowBackOutline size={24} />
            </span>
          )}
          <div className="sender">Maya Thompson</div>
        </div>

        <div className="button-cont">
          <span className="three-dots">
            <HiDotsHorizontal style={{ color: 'black', fontSize: '18px' }} />
          </span>
          <span className="moon">
            <FaMoon style={{ color: 'black', fontSize: '18px' }} />
          </span>
          <span className="close">Close</span>

          {isMobile && (
            <span
              style={{ marginLeft: '0.5rem', cursor: 'pointer' }}
              onClick={onOpenCopilot}
            >
              <GoCopilot  size={24} />
            </span>
          )}
        </div>
      </div>

      <div className="convo-cont">
        <div className="convo1">
          <div className="message-profile">M</div>
          <div className="message-content">
            Hi there! I’m looking to get a refund for my yearly subscription. I
            accidentally purchased the wrong plan.
          </div>
        </div>
      </div>

      <div className="convo-cont">
        <div className="convo2">
          <div className="message-profile1">Y</div>
          <div className="message-content1">
            Absolutely—please share your order ID and I’ll process it right away.
          </div>
        </div>
      </div>

      <div className="chat-window">
        <div className="emoji-container">
          <span style={{ paddingTop: '0.2rem' }}>
            <MdChat />
          </span>
          <span>Chat</span>
          <span style={{ paddingTop: '0.2rem' }}>
            <FaChevronDown color="black" />
          </span>
        </div>

        <div>
          <textarea placeholder="Use XK for shortcuts" className="textarea" />
        </div>

        <div className="send-container">
          <div className="emoji-container">
            <span style={{ paddingTop: '0.2rem' }}>
              <MdElectricBolt />
            </span>
            <span style={{ paddingTop: '0.2rem' }}>
              <GoBookmarkFill color="black" />
            </span>
            <span style={{ paddingTop: '0.2rem' }}>
              <MdEmojiEmotions />
            </span>
          </div>

          <div
            className="emoji-container"
            style={{ marginRight: '0.5rem', cursor: 'pointer' }}
          >
            <span>Send</span>
            <span style={{ paddingTop: '0.2rem' }}>
              <FaChevronDown color="black" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDesc3;
