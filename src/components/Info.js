import React from 'react'

import profilePicture from '../images/my-duckling.jpg'
import LinkedIn from '../images/icons/linkedin.svg'
import Mail from '../images/icons/mail.svg'

function Info() {
  return (
    <div>
      <div>
        <img src={profilePicture}/>
        <h1>Vítor Costa</h1>
        <h3>Product Design Intern and Student</h3>
      </div>
      <div>
        <button onClick={() => window.location = 'mailto:cvitor1618@gmail.com'}>
          <span><img src={Mail}/></span>
          <span>Email</span>
        </button>
        <button onClick={() => window.location = 'https://www.linkedin.com/in/vitorhugoc/'}>
          <span><img src={LinkedIn} /></span>
          <span>LinkedIn</span>
        </button>
      </div>
    </div>
  )
}

export default Info
