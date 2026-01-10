import { useState, useEffect, useRef } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const formRef = useRef(null)
  const infoRef = useRef(null)
  const form = useRef(null)

  const WHATSAPP_NUMBER = '918619511466' // Your WhatsApp number (without + sign)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in')
            }, index * 150)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (formRef.current) observer.observe(formRef.current)
    if (infoRef.current) observer.observe(infoRef.current)

    return () => {
      if (formRef.current) observer.unobserve(formRef.current)
      if (infoRef.current) observer.unobserve(infoRef.current)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    const { name, email, mobileNo, message } = formData
    
    // Format message for WhatsApp
    const whatsappMessage = `*Contact Form Message*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Mobile No:* ${mobileNo}\n\n` +
      `*Message:*\n${message}`
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    
    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank')

    setSubmitStatus({
      type: 'success',
      message: 'Opening WhatsApp... Please send the message to complete the process.'
    })
    
    setFormData({ name: '', email: '', mobileNo: '', message: '' })
    setIsSubmitting(false)
    
    setTimeout(() => {
      setSubmitStatus({ type: '', message: '' })
    }, 5000)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'malilokesh311@gmail.com',
      link: 'mailto:malilokesh311@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 8619511466',
      link: 'tel:+918619511466'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      value: 'Manikya Nagar, Bhilwara, Rajasthan, India',
      link: '#'
    }
  ]

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

  return (
    <div className="contact">
      <div className="container">
        <h1 className="page-title fade-in">Get In Touch</h1>
        <p className="page-subtitle fade-in">
          Have a project in mind? Let's work together! I'm always open to new opportunities and collaborations.
        </p>

        <div className="contact-content">
          <div ref={infoRef} className="contact-info fade-in">
            <h2>Contact Information</h2>
            <p>
              Feel free to reach out if you have any questions or would like to
              discuss a potential project. I'm available for freelance work, 
              collaborations, and exciting new opportunities.
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div key={index} className="contact-item">
                    <div className="contact-icon-wrapper">
                      <IconComponent className="contact-icon" />
                    </div>
                    <div className="contact-text">
                      <h3>{info.title}</h3>
                      <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}>
                        {info.value}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="social-links-section">
              <h3 className="social-section-title">Find Me</h3>
              <div className="social-links">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.name}
                      style={{ '--social-color': social.color }}
                    >
                      <IconComponent className="social-icon" />
                      <span>{social.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div ref={formRef} className="contact-form-container fade-in">
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobileNo">Mobile No</label>
                <input
                  type="tel"
                  id="mobileNo"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  required
                  placeholder="+91 1234567890"
                  pattern="[\d\s\-+]{10,15}"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
              </div>

              {submitStatus.message && (
                <div className={`submit-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

