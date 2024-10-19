import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('yoshi')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
    const blog = { title, body, author }

    setIsPending(true)

    // Adding a new blog to the json server
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false)
    })

    navigate('/')
  }

  return (
    <div className="create">
      <h2>Add a new Blog!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Blog title: </label>
        <input type="text" required value={title} onChange={e => setTitle(e.target.value)} />

        <label htmlFor="">Blog body: </label>
        <textarea value={body} onChange={e => setBody(e.target.value)}></textarea>

        <label htmlFor="">Blog author: </label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
          <option value="luigi">Luigi</option>
        </select>
        {!isPending && (
          <button type="submit" onClick={() => handleSubmit}>
            Add Blog
          </button>
        )}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  )
}

export default Create
