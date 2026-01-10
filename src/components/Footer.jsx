import { Link } from 'react-router-dom'
import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/918619511466',
      color: '#25D366'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/yourprofile',
      color: '#0077B5'
    },
    {
      name: 'Gmail',
      icon: SiGmail,
      url: 'mailto:malilokesh311@gmail.com',
      color: '#EA4335'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/yourprofile',
      color: '#E4405F'
    }
  ]

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-title">Lokesh Mali</h3>
            <p className="footer-description">
              A passionate MERN & Next.js Developer creating modern web applications 
              with cutting-edge technologies. Building innovative solutions for the digital world.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-icon"
                    aria-label={social.name}
                    style={{ '--social-color': social.color }}
                  >
                    <IconComponent className="footer-social-icon-svg" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+918619511466" className="footer-contact-link">
                  +91 8619511466
                </a>
              </li>
              <li className="footer-contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:malilokesh311@gmail.com" className="footer-contact-link">
                  malilokesh311@gmail.com
                </a>
              </li>
              <li className="footer-contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span className="footer-contact-text">
                  Manikya nagar bhilwara rajasthan india
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} <span className="copyright-name">Lokesh Mali</span>. All rights reserved.
            </p>
            <p className="footer-made">
              Made with <span className="heart">❤️</span> using React & Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

