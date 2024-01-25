import React, { useContext,useState } from 'react';
import MyContext from './MyContext';
import Navbar from './Navbar';
import { Nav } from 'react-bootstrap';
import './Liked.css';
import UserAccount from '../Components/UserAccount';


function Liked() {
  const { liked, setLiked,
  setUserEmail,
setShowUserDetails,
showUserDetails,
userEmail,

 } = useContext(MyContext);
 const [showDislikeConfirmation,setShowDislikeConfirmation] = useState(false)
 const [itemDislike,setItemDislike] = useState(null)



  function handleDislike(itemId) {
    
    setItemDislike(itemId)
    setShowDislikeConfirmation(true)

  }
  const handleConfirmDislike = () => {
    const updatedLiked = liked.filter((item) => item.id !== itemDislike);
    setLiked(updatedLiked);
    setShowDislikeConfirmation(false);
    setItemDislike(null);
  };
  const handleCancelDislike =()=>{
    setItemDislike(null);
    setShowDislikeConfirmation(false);
  }
  const handleToggleUserDetails = (email) => {
    setUserEmail(email);
    setShowUserDetails(!showUserDetails);
   
  };


  return (
    <div>
    <Navbar onToggleUserDetails={handleToggleUserDetails} />
    {showUserDetails && <UserAccount email={userEmail} />}
    {showDislikeConfirmation && (
        <>
          <div className="backdrop-liked" />
          <div className="delete-confirmation-liked">
            <p>Are you sure you want to dislike this item?</p>
            <button onClick={handleConfirmDislike} className='yes-liked'>Yes</button>
            <button onClick={handleCancelDislike} className='no-liked'>No</button>
          </div>
        </>
      )}
    <>
      {liked.length > 0 ? (
        liked.map((item) => (
          <div className='item' key={item.id}>
            <p className='section-name'>{item.name}</p>
            <img className='section-img' src={item.img} alt={item.name} />
            <h6 className='section-size'>Size {item.size}</h6>
            <span className='price-sec'>
              <h5>{item.oldPrice}</h5>
              <h2>{item.price}</h2>
            </span>
            <button
              className='section-btn'
              onClick={() => handleDislike(item.id)}
            >
              Dislike
            </button>
            
           
          </div>
          
        ))
      ) : (
        <h2>Liked Products is empty</h2>
      )}

     
    </>
  </div>
  );
}

export default Liked;
