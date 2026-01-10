import { useState, useEffect } from 'react'
import './Loading.css'

const Loading = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // 2 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <div className="loading-text">
          <span className="loading-dot">L</span>
          <span className="loading-dot">o</span>
          <span className="loading-dot">a</span>
          <span className="loading-dot">d</span>
          <span className="loading-dot">i</span>
          <span className="loading-dot">n</span>
          <span className="loading-dot">g</span>
          <span className="loading-dot">.</span>
          <span className="loading-dot">.</span>
          <span className="loading-dot">.</span>
        </div>
      </div>
    </div>
  )
}

export default Loading

