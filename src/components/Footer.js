import React from 'react'

import GitHub from '../images/icons/github.svg'
import LeetCode from '../images/icons/leetcode.svg'

function Footer() {
  return (
    <div className={'footer'}>
      <a href={'https://github.com/deltavitor'}>
        <img src={GitHub}/>
      </a>
      <a href={'https://leetcode.com/Deltavitor/'}>
        <img src={LeetCode}/>
      </a>
    </div>
  )
}

export default Footer
