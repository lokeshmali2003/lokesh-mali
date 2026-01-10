import { useEffect, useRef } from 'react'

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            if (options.once !== false) {
              observer.unobserve(entry.target)
            }
          } else if (!options.once) {
            entry.target.classList.remove('animate-in')
          }
        })
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px'
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [options])

  return elementRef
}

