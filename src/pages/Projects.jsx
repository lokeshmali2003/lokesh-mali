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
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with payment integration and admin dashboard. Built with modern technologies for seamless shopping experience.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/images/project1.jpg',
      liveDemo: 'https://example.com'
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
    {
      id: 3,
      projectNo: '03',
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts and interactive maps. Provides accurate weather data with an intuitive user interface.',
      tech: ['React', 'API Integration', 'CSS3'],
      image: '/images/project3.jpg',
      liveDemo: 'https://example.com'
    },
    {
      id: 4,
      projectNo: '04',
      title: 'Social Media Analytics',
      description: 'Analytics platform for tracking social media performance and engagement metrics. Helps businesses understand their social media presence.',
      tech: ['React', 'Python', 'PostgreSQL'],
      image: '/images/project4.jpg',
      liveDemo: 'https://example.com'
    },
    {
      id: 5,
      projectNo: '05',
      title: 'Learning Management System',
      description: 'Comprehensive LMS for online courses with video streaming and progress tracking. Enables educators to create and manage courses effectively.',
      tech: ['React', 'Node.js', 'AWS'],
      image: '/images/project5.jpg',
      liveDemo: 'https://example.com'
    },
    {
      id: 6,
      projectNo: '06',
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations and responsive design. Showcases projects and skills with an elegant and professional interface.',
      tech: ['React', 'CSS3', 'Vite'],
      image: '/images/project6.jpg',
      liveDemo: 'https://example.com'
    }
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
        <h1 ref={titleRef} className="page-title fade-in animate-in">My Projects</h1>
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

