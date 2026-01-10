import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import TypingAnimation from '../components/TypingAnimation'
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiPhp, SiNextdotjs } from 'react-icons/si'
import { FaGraduationCap, FaUniversity, FaBriefcase } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const educationRef = useRef(null)

  const skills = [
    'Web Designer',
    'Web Developer',
    'UI/UX Designer',
    'MERN',
    'NEXT.js',
    'PHP'
  ]

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

    if (heroRef.current) observer.observe(heroRef.current)
    if (featuresRef.current) observer.observe(featuresRef.current)
    if (educationRef.current) observer.observe(educationRef.current)

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current)
      if (featuresRef.current) observer.unobserve(featuresRef.current)
      if (educationRef.current) observer.unobserve(educationRef.current)
    }
  }, [])

  return (
    <div className="home">
      <section ref={heroRef} className="hero fade-in">
        <div className="hero-content">
          <h2 className="hero-greeting">Hello</h2>
          <h1 className="hero-title">
            I'm <span className="highlight">Lokesh Mali</span> a
          </h1>
          <div className="hero-skills">
            <TypingAnimation words={skills} speed={150} deleteSpeed={100} delay={2000} />
          </div>
          <p className="hero-description">
            A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth. It serves as a powerful tool to showcase your expertise and attract opportunities.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
            <img 
              src="/images/LokeshMali.jpeg" 
              alt="Lokesh Mali" 
              className="hero-profile-image"
            />
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="features fade-in">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon mern-icon">
                <SiMongodb />
                <SiExpress />
                <SiReact />
                <SiNodedotjs />
              </div>
              <h3>MERN Stack</h3>
              <p>Full-stack development using MongoDB, Express, React, and Node.js</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <SiNextdotjs />
              </div>
              <h3>Next.js</h3>
              <p>Building fast and scalable React applications with Next.js framework</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <SiPhp />
              </div>
              <h3>PHP</h3>
              <p>Server-side development and dynamic web applications using PHP</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={educationRef} className="education fade-in">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <h3>Bachelor's Degree</h3>
                <p className="education-degree">Bachelor's of Computer Applications</p>
                <p className="education-institution">MDSU</p>
                <p className="education-year">2022 - 2025</p>
              </div>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <FaUniversity />
              </div>
              <div className="education-content">
                <h3>Certifications</h3>
                <p className="education-degree">Web Development & Programming</p>
                <p className="education-institution">BL SONI College</p>
                <p className="education-year">6 month</p>
              </div>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <FaBriefcase />
              </div>
              <div className="education-content">
                <h3>Company</h3>
                <p className="education-degree">MERN & Next.js Developer</p>
                <p className="education-institution">Jediteck</p>
                <p className="education-year">November 2025 to present</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

