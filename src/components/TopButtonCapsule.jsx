import React from 'react'

const TopButtonCapsule = () => {
  const buttons = ["All", "Music", "Podcast", "Motivation", "Gaming", "News", "Dance", "Cricket", "Mixes", "Comedy"]
  return (
    <div className='flex gap-5'>
      {buttons.map((button) => (<div className='bg-zinc-800 flex px-4 py-2 rounded-sm border border-zinc-700 '>{button}</div>))}
    </div>
  )
}

export default TopButtonCapsule