import React from 'react'

import GitHub from '../images/icons/github.svg'
import LeetCode from '../images/icons/leetcode.svg'

function Footer() {
  return (
    <div>
      <img src={GitHub} onClick={() => window.location = 'https://github.com/deltavitor'}/>
      <img src={LeetCode} onClick={() => window.location = 'https://leetcode.com/Deltavitor/'}/>
    </div>
  )
}

export default Footer
