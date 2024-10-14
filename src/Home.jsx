import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  const [name, setName] = useState('mario')

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }
  // useEffect renders anytime the page is started, the list as second argument says that
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        setBlogs(data)
      })
  }, [])

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title={'a prop of the string type'} handleDelete={handleDelete} />}
      <p>{name}</p>
      <button type="button" onClick={() => setName('luigi')}>
        Change name!
      </button>
    </div>
  )
}

export default Home
