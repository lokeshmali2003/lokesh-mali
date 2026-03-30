import { useEffect, useRef } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projectsRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  const projects = [
    {
      id: 1,
      projectNo: '01',
      title: 'Rose Petals School',
      description: ' Developed a responsive Rose Petals Secondary School website using HTML, CSS, Bootstrap, and PHP. Developed a responsive Rose Petals Secondary School website using HTML, CSS, Bootstrap, and PHP. It includes pages like Home, About, Interact Club, Facilities, Activities, Admission, Gallery, Alumni, Career, and Contact. ',
      tech: ['HTML, CSS', 'BOOTSTRAP', 'PHP'],
      image: 'images/rosepatels.png',
      liveDemo: 'https://rosepetalsschool.com/'
    },
    {
      id: 2,
      projectNo: '02',
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration. Features include task assignment, progress tracking, and notifications.',
      tech: ['React', 'Firebase', 'TypeScript'],
      image: '/images/project2.jpg',
      liveDemo: 'https://example.com'
    },

    
  ]

  useEffect(() => {
    // Immediately show title and subtitle
    if (titleRef.current) {
      titleRef.current.classList.add('animate-in')
    }
    if (subtitleRef.current) {
      subtitleRef.current.classList.add('animate-in')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in')
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current)
      }
    }
  }, [])

  return (
    <div className="projects">
      <div className="container">
        <h4 ref={titleRef} className="page-title fade-in animate-in">My Projects</h4>
        <p ref={subtitleRef} className="page-subtitle fade-in animate-in">
          A collection of projects I've worked on
        </p>

        <div ref={projectsRef} className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="project-image-placeholder" style={{ display: 'none' }}>
                    <span className="project-emoji">📁</span>
                  </div>
                  <div className="project-image-overlay">
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="live-demo-link"
                    >
                      <FaExternalLinkAlt /> View Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

