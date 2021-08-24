import React from 'react'
import WalkListItem from './WalkListItem'

function WalksList({ walks, setWalks }) {

  
  return (
    <div>
      <ul className="space-y-4">
        {walks.map((walk) => (
          <WalkListItem walk={walk} setWalks={setWalks} />
        ))}
      </ul>
    </div>
  )
}

export default WalksList
