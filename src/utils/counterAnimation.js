export const animateCounter = (element, target, duration = 2000, suffix = '') => {
  if (!element) return

  const start = 0
  const increment = target / (duration / 16) // 60fps
  let current = start

  const updateCounter = () => {
    current += increment
    if (current < target) {
      element.textContent = Math.floor(current) + (suffix || (target >= 100 ? '+' : ''))
      requestAnimationFrame(updateCounter)
    } else {
      element.textContent = target + (suffix || (target >= 100 ? '+' : ''))
    }
  }

  updateCounter()
}

