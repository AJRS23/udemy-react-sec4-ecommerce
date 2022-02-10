import React from "react";

import "./homepage.styles.scss"

import Directory from "../../components/directory/directory.component";

// No need of Lifecycles or Store any state, that's why it's a functional component
const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  )
}

export default HomePage;