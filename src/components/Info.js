import React from 'react'

import profilePicture from '../images/my-duckling.jpg'
import LinkedIn from '../images/icons/linkedin.svg'
import Mail from '../images/icons/mail.svg'

function Info() {
  return (
    <div>
      <div className={'info--profile-picture'}>
        <img src={profilePicture}/>
      </div>
      <div className={'info--title'}>
        <h1>Vítor Costa</h1>
        <h3>Product Design Intern and Student</h3>
        <h5>@deltavitor</h5>
      </div>
      <div className={'info--contact'}>
        <a className={'info--contact-secondary'} href={'mailto:cvitor1618@gmail.com'}>
          <img src={Mail}/>
          Email
        </a>
        <a className={'info--contact-primary'} href={'https://www.linkedin.com/in/vitorhugoc/'}>
          <img src={LinkedIn}/>
          LinkedIn
        </a>
      </div>
    </div>
  )
}

export default Info
