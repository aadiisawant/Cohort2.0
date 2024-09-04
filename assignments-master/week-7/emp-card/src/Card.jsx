import React from 'react'
import './Card.css'
function Card() {
  return (
    <div className='profile-card'>
        <div className="profile-header">
            <div className='profile-image'>
            <img src='https://media.licdn.com/dms/image/C5603AQFbOqG9og1S5g/profile-displayphoto-shrink_200_200/0/1517251237812?e=2147483647&v=beta&t=XFc3Qwx7XSDc59FXJX3k93Mdbl8I7Ag3K-H9UjybVMs' alt='profile'></img>
            </div>
            <div className="profile-info">
            <h2>Harkirat Singh <span>29</span></h2>
            <p>Pune</p>
            </div>
        </div>
      {/* <hr /> */}
      <div className='profile-stats'>
        <div className='stat'>
            <h3>800</h3>
            <p>Followers</p>
        
        </div>
        <div className='stat'>
            <h3>800</h3>
            <p>Likes</p>
        </div>
        <div className='stat'>
            <h3>1.4k</h3>
            <p>Photos</p>
        </div>
      </div>
    </div>
  )
}

export default Card
