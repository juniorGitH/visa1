import React, { useState, useRef } from 'react';
import GeneralC from './GeneralC';

export default function Discussions() {
  const [discussions, setDiscussions] = useState([
    { participant: 'John Doe', lastMessage: 'Hello!' },
    // Ajoutez d'autres discussions ici
  ]);

  const [messages, setMessages] = useState([
    { type: 'received', text: 'Hi there!' },
    { type: 'sent', text: 'Hello!' },
    // Ajoutez d'autres messages ici
  ]);

  const [newDiscussion, setNewDiscussion] = useState('');

  const messageInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageText = messageInputRef.current.value.trim();

    if (messageText) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'sent', text: messageText },
      ]);

      messageInputRef.current.value = '';
    }
  };

  const handleNewDiscussion = () => {
    if (newDiscussion.trim() !== '') {
      setDiscussions((prevDiscussions) => [
        ...prevDiscussions,
        { participant: newDiscussion, lastMessage: '' },
      ]);

      setNewDiscussion('');
    }
  };

  return (
    <>
      <div className="by">
        <div className="messenger">
          <div className="conversation-list">
            <button className="new-discussion-btn" onClick={handleNewDiscussion}>
              New Discussion
            </button>

            {/* Liste des conversations */}
            {discussions.map((discussion, index) => (
              <div key={index} className="conversation">
                <span className="participant">{discussion.participant}</span>
                <span className="last-message">{discussion.lastMessage}</span>
              </div>
            ))}
          </div>
          <div className="chat">
            {/* Zone de conversation */}
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <span className="text">{message.text}</span>
              </div>
            ))}
          </div>
          <div className="message-form">
            {/* Formulaire d'envoi de message */}
            <form id="messageForm" onSubmit={handleSubmit}>
              <textarea
                ref={messageInputRef}
                id="messageInput"
                placeholder="Type your message..."
                name="message"
                rows="4"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>

      <GeneralC />
    </>
  );
}
