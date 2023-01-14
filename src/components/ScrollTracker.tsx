import React, { useState } from 'react'

const ScrollTracker: React.FC = () => {
  const [scrollLevel, setScrollLevel] = useState(0)

  const handleScroll = (event: any) => {
    setScrollLevel(event.target.scrollTop)
  }

  return (
    <div onScroll={handleScroll}>
      <p>Current scroll level: {scrollLevel}</p>
    </div>
  )
}

export default ScrollTracker
