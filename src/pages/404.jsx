import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl font-semibold text-gray-700 ">404</h1>
      <p className="text-gray-700 mt-5">
        Page not found. Check the address or{' '}
        <Link className="text-purple-600 hover:underline " to="/">
          go back
        </Link>
        .
      </p>
    </div>
  )
}

export default Page404
