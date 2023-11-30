import React from 'react';
import General from './General';

export default function Notification() {
  return (
    <>
      <div className="by">
        <div className="messenger l1">
          <div className="conversation-list l2">
            <div className="conversation">
              <span className="participant">John Doe</span>    
            </div>
            <div className="conversation">
              <span className="last-message">Hello!</span>
            </div>
            {/* Ajoutez d'autres conversations ici */}
          </div>
        </div>
      </div>
      <General />
    </>
  );
}
