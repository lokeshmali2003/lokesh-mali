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
      
      tech: ['HTML, CSS', 'BOOTSTRAP', 'PHP'],
      image: 'images/rosepatels.png',
      liveDemo: 'https://rosepetalsschool.com/'
    },
    {
      id: 2,
      projectNo: '02',
      title: 'E-commerce Business Website',
      // description: 'Developed a responsive business and E-commerce website, LUXE, using HTML, CSS, Bootstrap, and JavaScript. Features include Home, About, Shop, Collection, and Contact pages with modern UI, smooth navigation, responsive layouts, and interactive design for an enhanced user experience.',
      tech: ['HTML', 'CSS', 'BOOTSTRAP'],
      image: '/images/business.png',
      liveDemo: 'https://websitedemo-indol.vercel.app/Business/demo1/index.html'
    },
    {
      id: 3,
      projectNo: '03',
      title: 'Business Website',
      // description: 'Developed a responsive E-commerce Website using HTML, CSS, and Bootstrap.It includes pages like Home, About, Shop, Collection, and Contact for smooth navigation and user experience.',
      tech: ['HTML', 'CSS', 'BOOTSTRAP'],
      image: '/images/Business2.png',
      liveDemo: 'https://websitedemo-indol.vercel.app/Business/demo3/index.html'
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
                {/* <p className="project-description">{project.description}</p> */}
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

