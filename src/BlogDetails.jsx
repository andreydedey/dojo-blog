import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch'
import { Navigate } from 'react-router-dom'

const BlogDetails = () => {
  const { id } = useParams()
  const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)
  const navigate = useNavigate()

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/')
    })
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <p className="blog-body">{blog.body}</p>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
