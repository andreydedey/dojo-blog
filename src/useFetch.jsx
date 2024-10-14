import { useState, useEffect } from 'react'
// Custom Hook: it has to start with the word 'use'

const useFetch = url => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        setData(data)
        setIsPending(false)
      })
      .catch(error => {
        setError(true)
        setIsPending(false)
      })
  }, [url])

  return { data, isPending, error }
}

export default useFetch
