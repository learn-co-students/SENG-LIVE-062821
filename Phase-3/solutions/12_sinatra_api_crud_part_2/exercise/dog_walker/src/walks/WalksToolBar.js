import React from 'react'
import { FaWalking } from 'react-icons/fa'
import NewWalkButton from './NewWalkButton';
import { Link } from 'react-router-dom'

function WalksToolBar() {
  return (
    <div className="grid grid-cols-2 py-1 border-b-2 mb-4">
      <Link to="/walks" className="pr-2 py-2 flex items-center">
        <FaWalking className="mr-2" size="20" /> All Walks
      </Link>
      <div className="flex justify-end"><NewWalkButton /></div>
      <div className="text-right"></div>
    </div>
  )
}

export default WalksToolBar
