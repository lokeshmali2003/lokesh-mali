import { useEffect, useRef } from 'react'
import './AnimatedPage.css'

const AnimatedPage = ({ children }) => {
  const pageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (pageRef.current) {
      observer.observe(pageRef.current)
    }

    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current)
      }
    }
  }, [])

  return (
    <div ref={pageRef} className="animated-page">
      {children}
    </div>
  )
}

export default AnimatedPage

