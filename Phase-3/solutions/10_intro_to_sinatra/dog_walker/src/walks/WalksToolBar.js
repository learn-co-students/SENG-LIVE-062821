import React from 'react'
import { FaDog } from 'react-icons/fa'

function WalksToolBar() {
  return (
    <div className="grid grid-cols-2">
      <div className="text-left"><FaDog /></div>
      <div className="text-right"></div>
    </div>
  )
}

export default WalksToolBar
