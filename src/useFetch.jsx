import { useState, useEffect } from 'react'
// Custom Hook: it has to start with the word 'use'

const useFetch = url => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const abortCont = new AbortController()

    fetch(url, { signal: abortCont.signal })
      .then(res => {
        return res.json()
      })
      .then(data => {
        setData(data)
        setIsPending(false)
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setError(true)
          setIsPending(false)
        }
      })

    return () => abortCont.abort()
  }, [url])

  return { data, isPending, error }
}

export default useFetch
