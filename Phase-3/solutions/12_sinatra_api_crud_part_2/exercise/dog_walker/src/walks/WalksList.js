import React from 'react'
import WalkListItem from './WalkListItem'

function WalksList({ walks, handleDelete }) {

  
  return (
    <div>
      <ul className="space-y-4">
        {walks.map((walk) => (
          <WalkListItem walk={walk} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  )
}

export default WalksList
