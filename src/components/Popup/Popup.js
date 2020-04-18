import React from 'react';
import './Popup.scss';

const Popup = ({popupClose, children}) => (

  <div className="overlay">
    <div className="popup-content">
      {children}
      <span className="close-popup" onClick={popupClose}>X</span>
    </div>
  </div>
)

export{Popup};
