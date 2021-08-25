import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function WalkListItem({ walk, handleDelete }) {


  return (
    <li key={walk.id} className="flex items-bottom justify-between border-b-2 py-2">
      <div className="w-3/4">
        <Link
          to={`/walks/${walk.id}`}
          className="pb-1 pt-2 w-54"
        >
          {walk.formatted_time}
        </Link>
        <span className="flex items-center">
          <button onClick={() => null}>
            {/* <FaPoop
              style={{ color: dogWalk.pooped ? '#000' : '#bbb' }}
              size={20}
            /> */}
          </button>
        </span>
      </div>
      <span className="flex items-center">
        <button onClick={() => handleDelete(walk.id)}><FaTrash size={20} /></button>
      </span>
    </li>
  )
}

export default WalkListItem
