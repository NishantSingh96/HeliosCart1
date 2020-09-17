import React from 'react';

// import images
import Home from '../../images/home.svg';
import Chat from '../../images/chat.svg';
import Setting from '../../images/settings.svg';
import Draft from '../../images/draft.svg';
import QuestionMark from '../../images/question-mark.svg';

//import style
import './Sidebar.css';

const Sidebar = () => {
    return(
    <div className="helioscart-sidebar">
        <div className="invidual-navigation-container">
          <img src={Home} alt="home" className="sidebar-navigation-img"/>
          <p className="navigation-label">Home</p>
        </div>
        <div className="invidual-navigation-container">
          <img src={QuestionMark} alt="enquiry" className="sidebar-navigation-img"/>
          <p className="navigation-label">Enquiry</p>
        </div>
        <div className="invidual-navigation-container">
          <img src={Draft} alt="drafts" className="sidebar-navigation-img"/>
          <p className="navigation-label">Drafts</p>
        </div>
        <div className="invidual-navigation-container">
          <img src={Draft} alt="pi" className="sidebar-navigation-img"/>
          <p className="navigation-label">PI</p>
        </div>
        <div className="invidual-navigation-container">
          <img src={Chat} alt="chat" className="sidebar-navigation-img"/>
          <p className="navigation-label">Chat</p>
        </div>
        <div className="invidual-navigation-container">
         <img src={Setting} alt="settings" className="sidebar-navigation-img"/>
          <p className="navigation-label">Settings</p>
        </div>
        
    </div>
    )
};

export default Sidebar