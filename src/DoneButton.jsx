// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './DoneButton.css';

const DoneButton = ({ platform }) => {
  const handleDoneClick = async () => {
    const apiUrl = platform === 'messenger' 
      ? 'https://graph.facebook.com/v11.0/me/messages' 
      : 'https://api.chat-api.com/instance12345/sendMessage?token=<WHATSAPP_ACCESS_TOKEN>';

    const data = platform === 'messenger' 
      ? {
          recipient: { id: 'itsarkhone' }, // Your Facebook profile ID or page ID
          message: { text: 'Done' }
        }
      : {
          phone: '8562078866695', // Your phone number in international format
          body: 'Done'
        };

    const headers = platform === 'messenger' 
      ? {
          'Content-Type': 'application/json',
          'Authorization': `Bearer <PAGE_ACCESS_TOKEN>` // Replace with your Facebook Page Access Token
        }
      : {
          'Content-Type': 'application/json'
        };

    try {
      await axios.post(apiUrl, data, { headers });
      alert(`${platform} message sent successfully!`);
    } catch (error) {
      console.error(`Error sending ${platform} message:`, error);
      alert(`Failed to send ${platform} message.`);
    }
  };

  return (
    <button className="done-button" onClick={handleDoneClick}>
      Send Done on {platform === 'messenger' ? 'Messenger' : 'WhatsApp'}
    </button>
  );
};

DoneButton.propTypes = {
  platform: PropTypes.oneOf(['messenger', 'whatsapp']).isRequired,
};

export default DoneButton;
