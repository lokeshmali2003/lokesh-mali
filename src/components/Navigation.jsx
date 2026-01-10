import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaWhatsapp, FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { IoClose, IoMenu } from 'react-icons/io5'
import './Navigation.css'

const Navigation = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen || isRightSidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen, isRightSidebarOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsRightSidebarOpen(false)
  }

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen)
    setIsMenuOpen(false)
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ]

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/918619511466',
      color: '#25D366'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=malilokesh311@gmail.com',
      color: '#EA4335'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/mali-lokesh',
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/lokeshmali2003',
      color: '#ffffff'
    }
  ]

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo - Left Side */}
          <Link to="/" className="nav-logo">
            <span className="logo-text">Lokesh Mali</span>
          </Link>
          
          {/* Desktop Menu - Center */}
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link 
                  to={link.path} 
                  className={`nav-link ${isActive(link.path)}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons - Right Side */}
          <div className="nav-social">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.name}
                  style={{ '--social-color': social.color }}
                >
                  <IconComponent className="social-icon-svg" />
                </a>
              )
            })}
          </div>

          {/* Right Sidebar Toggle Button */}
          <button 
            className="right-sidebar-toggle"
            onClick={toggleRightSidebar}
            aria-label="Toggle sidebar"
          >
            <IoMenu className="toggle-icon" />
          </button>

          {/* Hamburger Button */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Side Navbar */}
      <div className={`side-navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-navbar-content">
          <div className="side-navbar-header">
            <Link to="/" className="side-navbar-logo" onClick={() => setIsMenuOpen(false)}>
              Lokesh Mali
            </Link>
            <button 
              className="close-btn"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <IoClose className="close-icon" />
            </button>
          </div>
          <ul className="side-nav-menu">
            {navLinks.map((link, index) => (
              <li 
                key={link.path} 
                className="side-nav-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link 
                  to={link.path} 
                  className={`side-nav-link ${isActive(link.path)}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="nav-link-text">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Social Icons in Sidebar */}
          <div className="side-nav-social">
            <h3 className="social-title">Connect With Me</h3>
            <div className="side-social-icons">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="side-social-icon"
                    aria-label={social.name}
                    style={{ '--social-color': social.color }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent className="side-social-icon-svg" />
                    <span className="social-name">{social.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className={`right-sidebar ${isRightSidebarOpen ? 'open' : ''}`}>
        <div className="right-sidebar-content">
          <div className="right-sidebar-header">
            <h2 className="right-sidebar-title">About Me</h2>
            <button 
              className="right-sidebar-close-btn"
              onClick={toggleRightSidebar}
              aria-label="Close sidebar"
            >
              <IoClose className="close-icon" />
            </button>
          </div>

          <div className="right-sidebar-body">
            {/* Profile Image */}
            <div className="right-sidebar-image-container">
              <img 
                src="/images/LokeshMali.jpeg" 
                alt="Lokesh Mali" 
                className="right-sidebar-image"
              />
            </div>

            {/* Call Now */}
            <div className="right-sidebar-item">
              <div className="right-sidebar-item-icon">
                <FaPhone />
              </div>
              <div className="right-sidebar-item-content">
                <h3>Call Now</h3>
                <a href="tel:+918619511466" className="right-sidebar-link">
                  +91 8619511466
                </a>
              </div>
            </div>

            {/* Mail Us */}
            <div className="right-sidebar-item">
              <div className="right-sidebar-item-icon">
                <FaEnvelope />
              </div>
              <div className="right-sidebar-item-content">
                <h3>Mail Us</h3>
                <a href="mailto:malilokesh311@gmail.com" className="right-sidebar-link">
                  malilokesh311@gmail.com
                </a>
              </div>
            </div>

            {/* My Address */}
            <div className="right-sidebar-item">
              <div className="right-sidebar-item-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="right-sidebar-item-content">
                <h3>My Address</h3>
                <p className="right-sidebar-text">
                  Manikya nagar bhilwara rajasthan india
                </p>
              </div>
            </div>

            {/* Find With Me */}
            <div className="right-sidebar-social-section">
              <h3 className="right-sidebar-social-title">Find With Me</h3>
              <div className="right-sidebar-social-icons">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="right-sidebar-social-icon"
                      aria-label={social.name}
                      style={{ '--social-color': social.color }}
                    >
                      <IconComponent className="right-sidebar-social-icon-svg" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {(isMenuOpen || isRightSidebarOpen) && (
        <div 
          className="navbar-overlay" 
          onClick={() => {
            setIsMenuOpen(false)
            setIsRightSidebarOpen(false)
          }}
        ></div>
      )}
    </>
  )
}

export default Navigation

