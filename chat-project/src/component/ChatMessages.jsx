import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage.jsx';
import './ChatMessages.css';

/*Chat Messages List*/
   function ChatMessages({chatMessages}) {
      const chatMessagesRef = useRef(null);

      useEffect(() => {
        const conatinerElem = chatMessagesRef.current;
        if(conatinerElem){
          conatinerElem.scrollTop = conatinerElem.scrollHeight;
        }
      }, [chatMessages]);

      return (
        <div 
          className="chat-messages-container"
           ref={chatMessagesRef}>
          {chatMessages.map((msg) => (
            <ChatMessage
              message={msg.message}
              sender={msg.sender}
              key={msg.id}
            />
          ))}
          </div>
      );
    }

    export default ChatMessages;