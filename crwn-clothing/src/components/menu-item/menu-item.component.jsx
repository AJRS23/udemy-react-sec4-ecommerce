import React from "react";

/* High Order Component: A function that takes a component as an argument and modifies it or "upgrades" 
(To be able to use history from Homepage Route 
without having to pass it down to every child as props) */
import { withRouter } from 'react-router-dom'; 

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (   
  //match is a prop of Route than can be use because of withRouter
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

//Returns the new upgraded component to have access to the props: location, history, match...
export default withRouter(MenuItem); 