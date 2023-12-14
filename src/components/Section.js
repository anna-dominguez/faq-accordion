import React, { useState } from 'react'
import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'

import './Section.scss'

const Section = ({ title, description, isLast, isFirst }) => {
  const [isOpen, setIsOpen] = useState(isFirst)
  return (
    <section>
      <div className="title" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <img src={isOpen ? minus : plus} alt="open menu" />
      </div>
      {isOpen && <p>{description}</p>}
      {isLast && <div className="divider"></div>}
    </section>
  )
}

export default Section
