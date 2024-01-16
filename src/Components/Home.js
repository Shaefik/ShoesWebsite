// Home.js
import React, { useState } from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';
import UserAccount from './UserAccount';

function Home() {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [userEmail, setUserEmail] = useState(""); 
  

  const handleToggleUserDetails = (email) => {
    setUserEmail(email);
    setShowUserDetails(!showUserDetails);
  };

  return (
    <div>
      <Navbar onToggleUserDetails={handleToggleUserDetails} />
      {showUserDetails && <UserAccount  email={userEmail} onLogout={() => setShowUserDetails(false)} />}
      <Banner />

        
      <Footer />
    </div>
  );
}

export default Home;
