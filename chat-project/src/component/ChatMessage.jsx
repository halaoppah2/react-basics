import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css'; 

/* Single Chat Message*/
   export function ChatMessage({ message, sender }) {
      return (
        <div className={
          sender === 'user' 
            ? 'chat-message-user' 
            : 'chat-message-robot'
        }>
          {sender === "robot" && (
            <img src={UserProfileImage} alt="robot" className="chat-message-profile" />
          )}

          <div className="chat-message-text">
            {message}
          </div>

          {sender === "user" && (
            <img src={RobotProfileImage} alt="user" className="chat-message-profile" />
          )}
        </div>
      );
    }