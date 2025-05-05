import React from 'react'

function Card({props}) {
    // console.log("props",props);
    console.log("props",props);
    
    
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full"
          src="https://placehold.co/600x400"
          alt="Card Image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">
            This is a simple card component built with React and styled using Tailwind CSS. You can customize it as needed.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2">
            #React
          </span>
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2">
            #TailwindCSS
          </span>
          <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-700">
            #UI
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card