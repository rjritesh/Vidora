
const TopButton = () => {
  const buttons = ["All", "Podcasts", "Music", "Cricket", "Live", "News", "World", "Watched", "Recently uploaded", "Technology"]
  return (
    <div className="flex flex-wrap gap-4 p-2">
      {buttons.map((button) => (<button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"> {button}
      </button>))}


    </div>
  )
}

export default TopButton