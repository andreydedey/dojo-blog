import { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {/* {error && <div className="error">Could not fetch the data</div>} */}
      {isPending && <div className="loading">Loading...</div>}
      {data && <BlogList blogs={data} title={'All blogs!'} />}
    </div>
  )
}

export default Home
