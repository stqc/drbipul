import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Award, Users, Heart, Star, ChevronRight, Calendar, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Picture1 from "./pic1.jpg";
import Picture2 from "./pic2.jpg";

export default function DoctorWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'services', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
      title: "Kidney Stone Treatment",
      description: "Advanced minimally invasive procedures for kidney stone removal including PCNL, RIRS, URS and laser lithotripsy with quick recovery times.",
      icon: "💎"
    },
    {
      title: "Prostate Surgery",
      description: "Comprehensive prostate care including TURP, laser prostatectomy, UroLift and treatment for benign prostatic hyperplasia (BPH).",
      icon: "🔬"
    },
    {
      title: "Urological Cancer Care",
      description: "Expert diagnosis and surgical treatment for kidney, adrenal, bladder, prostate, penis and testicular cancers using latest oncological techniques.",
      icon: "🎗️"
    },
    {
      title: "Male Infertility",
      description: "Specialized treatment for male reproductive issues including varicocele repair, vasectomy reversal, erectile dysfunction and fertility consultations.",
      icon: "👨‍⚕️"
    },
    {
      title: "Laparoscopic Surgery",
      description: "Minimally invasive laparoscopic and robotic-assisted procedures for faster recovery and minimal scarring.",
      icon: "🏥"
    },
    // {
    //   title: "Urinary Tract Infections",
    //   description: "Comprehensive diagnosis and treatment of recurrent UTIs, bladder infections, and urological inflammatory conditions.",
    //   icon: "💊"
    // },

    {
      title: "Renal Transplant",
      description: "Expert renal transplant services including pre-transplant evaluation, organ procurement, and post-transplant care.",
      icon: "🩺"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "Dr. Agarwal performed my kidney stone surgery with such expertise. The procedure was smooth, recovery was quick, and his care was exceptional throughout.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      text: "My father underwent prostate surgery under Dr. Agarwal's care. His professional approach and clear communication made the entire process stress-free for our family.",
      rating: 5
    },
    {
      name: "Amit Verma",
      text: "Exceptional urologist! Dr. Agarwal's minimally invasive approach meant I was back to work within days. Highly skilled and compassionate doctor.",
      rating: 5
    }
  ];

  const stats = [
    { number: "6+", label: "Years Experience" },
    { number: "5,000+", label: "Surgeries Performed" },
    { number: "99%", label: "Success Rate" },
    { number: "24/7", label: "Emergency Care" }
  ];

  return (
    <div className="doctor-website">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Lexend:wght@300;400;500;600&display=swap');
        
        :root {
          --primary: #2C5F5D;
          --primary-light: #3A7A77;
          --primary-dark: #1D4442;
          --accent: #D4A574;
          --accent-light: #E8C9A3;
          --text-dark: #1A2E2E;
          --text-medium: #4A5F5F;
          --text-light: #7A8F8F;
          --bg-cream: #FAF8F5;
          --bg-white: #FFFFFF;
          --shadow: rgba(44, 95, 93, 0.08);
          --shadow-hover: rgba(44, 95, 93, 0.15);
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Lexend', -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--text-dark);
          line-height: 1.6;
          overflow-x: hidden;
        }
        
        .doctor-website {
          background: var(--bg-cream);
          width: 100vw;
        }
        
        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
        }
        
        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          box-shadow: 0 2px 30px var(--shadow);
        }
        
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--primary);
          letter-spacing: 0.5px;
        }
        
        .logo-subtitle {
          font-size: 0.75rem;
          color: var(--text-medium);
          font-weight: 400;
          display: block;
          margin-top: -0.25rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        
        .nav-links {
          display: flex;
          gap: 3rem;
          list-style: none;
        }
        
        .nav-links a {
          color: var(--text-dark);
          text-decoration: none;
          font-weight: 400;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
          letter-spacing: 0.3px;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }
        
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          max-width: 400px;
          height: 100vh;
          background: var(--bg-white);
          box-shadow: -5px 0 30px var(--shadow);
          padding: 2rem;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1001;
        }
        
        .mobile-menu.open {
          right: 0;
        }
        
        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }
        
        .mobile-nav-links {
          list-style: none;
        }
        
        .mobile-nav-links li {
          margin-bottom: 1.5rem;
        }
        
        .mobile-nav-links a {
          color: var(--text-dark);
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 400;
          display: block;
          padding: 0.5rem 0;
        }
        
        /* Hero Section */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 8rem 2rem 4rem;
          background: linear-gradient(135deg, var(--bg-cream) 0%, #EDE9E3 100%);
          overflow: hidden;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 80%;
          height: 150%;
          background: radial-gradient(circle, rgba(212, 165, 116, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 20s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, -30px) rotate(5deg); }
        }
        
        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        
        .hero-content {
          animation: slideInLeft 1s ease-out;
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .hero-subtitle {
          color: var(--accent);
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4.5rem;
          font-weight: 600;
          line-height: 1.1;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }
        
        .hero-description {
          font-size: 1.2rem;
          color: var(--text-medium);
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        
        .btn {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 500;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          font-size: 1rem;
          border: none;
          cursor: pointer;
        }
        
        .btn-primary {
          background: var(--primary);
          color: white;
          box-shadow: 0 4px 20px rgba(44, 95, 93, 0.3);
        }
        
        .btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(44, 95, 93, 0.4);
        }
        
        .btn-secondary {
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
        }
        
        .btn-secondary:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
        }
        
        .hero-image {
          position: relative;
          animation: slideInRight 1s ease-out;
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .hero-image-wrapper {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 20px 60px var(--shadow-hover);
        }
        
        .hero-image-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(44, 95, 93, 0.1) 0%, rgba(212, 165, 116, 0.1) 100%);
          z-index: 1;
        }
        
        .hero-image img {
          width: 100%;
          height: 600px;
          object-fit: cover;
          display: block;
        }
        
        .hero-stats {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          right: 2rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 2rem;
          border-radius: 20px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          z-index: 2;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 600;
          color: var(--primary);
          display: block;
          margin-bottom: 0.25rem;
        }
        
        .stat-label {
          font-size: 0.85rem;
          color: var(--text-medium);
          font-weight: 400;
        }
        
        /* Section Styles */
        .section {
          padding: 6rem 2rem;
          position: relative;
        }
        
        .section-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .section-subtitle {
          color: var(--accent);
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 1rem;
        }
        
        .section-description {
          font-size: 1.1rem;
          color: var(--text-medium);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.8;
        }
        
        /* About Section */
        .about {
          background: var(--bg-white);
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        
        .about-image {
          position: relative;
        }
        
        .about-image-main {
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 20px 60px var(--shadow-hover);
        }
        
        .about-image-main img {
          width: 100%;
          height: 600px;
          object-fit: cover;
          display: block;
        }
        
        .about-image-badge {
          position: absolute;
          top: 2rem;
          right: -2rem;
          background: var(--accent);
          color: white;
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(212, 165, 116, 0.3);
        }
        
        .badge-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 700;
          display: block;
        }
        
        .badge-text {
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .about-text {
          padding: 2rem 0;
        }
        
        .about-text h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }
        
        .about-text p {
          color: var(--text-medium);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        
        .credentials {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 2.5rem;
        }
        
        .credential-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--bg-cream);
          border-radius: 15px;
          transition: all 0.3s ease;
        }
        
        .credential-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px var(--shadow);
        }
        
        .credential-icon {
          width: 50px;
          height: 50px;
          background: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        
        .credential-text h4 {
          color: var(--primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        
        .credential-text p {
          color: var(--text-light);
          font-size: 0.85rem;
          margin: 0;
        }
        
        /* Services Section */
        .services {
          background: var(--bg-cream);
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        .service-card {
          background: var(--bg-white);
          padding: 3rem 2rem;
          border-radius: 25px;
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        
        .service-card:hover::before {
          transform: scaleX(1);
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px var(--shadow-hover);
        }
        
        .service-icon {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          display: block;
        }
        
        .service-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }
        
        .service-card p {
          color: var(--text-medium);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .service-link {
          color: var(--accent);
          text-decoration: none;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: gap 0.3s ease;
        }
        
        .service-link:hover {
          gap: 1rem;
        }
        
        /* Testimonials Section */
        .testimonials {
          background: var(--bg-white);
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        .testimonial-card {
          background: var(--bg-cream);
          padding: 2.5rem;
          border-radius: 25px;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px var(--shadow);
        }
        
        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: 1rem;
          left: 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 6rem;
          color: var(--accent);
          opacity: 0.3;
          line-height: 1;
        }
        
        .stars {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }
        
        .star {
          color: var(--accent);
        }
        
        .testimonial-text {
          color: var(--text-medium);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }
        
        .testimonial-author {
          font-weight: 600;
          color: var(--primary);
          font-size: 1.1rem;
        }
        
        /* Contact Section */
        .contact {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          color: white;
        }
        
        .contact .section-subtitle {
          color: var(--accent-light);
        }
        
        .contact .section-title {
          color: white;
        }
        
        .contact .section-description {
          color: rgba(255, 255, 255, 0.8);
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 4rem;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(5px);
        }
        
        .contact-icon {
          width: 50px;
          height: 50px;
          background: var(--accent);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .contact-details h4 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        
        .contact-details p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }
        
        .contact-form {
          background: white;
          padding: 3rem;
          border-radius: 25px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
          font-weight: 500;
          font-size: 0.95rem;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem 1.5rem;
          border: 2px solid #E8E8E8;
          border-radius: 12px;
          font-family: 'Lexend', sans-serif;
          font-size: 1rem;
          transition: all 0.3s ease;
          color: var(--text-dark);
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 150px;
        }
        
        .submit-btn {
          width: 100%;
          padding: 1.2rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .submit-btn:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(44, 95, 93, 0.3);
        }
        
        /* Footer */
        .footer {
          background: var(--text-dark);
          color: rgba(255, 255, 255, 0.8);
          padding: 4rem 2rem 2rem;
        }
        
        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-about h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          color: white;
          margin-bottom: 1rem;
        }
        
        .footer-about p {
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: var(--accent);
          transform: translateY(-3px);
        }
        
        .footer-section h4 {
          color: white;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }
        
        .footer-links {
          list-style: none;
        }
        
        .footer-links li {
          margin-bottom: 0.8rem;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .footer-links a:hover {
          color: var(--accent);
          padding-left: 5px;
        }
        
        .footer-bottom {
          max-width: 1400px;
          margin: 0 auto;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3.5rem;
          }
          
          .section-title {
            font-size: 3rem;
          }
          
          .hero-container,
          .about-content,
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .services-grid,
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .menu-toggle,
          .mobile-menu {
            display: block;
          }
          
          .hero {
            padding-top: 15rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .hero-description {
            font-size: 1rem;
          }
          
          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            padding: 1.5rem;
          }
          
          .stat-number {
            font-size: 1.5rem;
          }
          
          .services-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          
          .credentials {
            grid-template-columns: 1fr;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
          }
          
          .about-image-badge {
            right: 1rem;
            padding: 1.5rem;
          }
          
          .badge-number {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }
          
          .btn {
            width: 100%;
            justify-content: center;
          }
          
          .contact-form {
            padding: 2rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            Dr. Bipul Agarwal
            <span className="logo-subtitle">Urologist, Renal Transplant & Robotic Surgeon</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
            <li><a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            <li><a href="#contact" className={activeSection === 'Blog' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Blog</a></li>

          </ul>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="logo">
            Dr. Bipul Agarwal
            <span className="logo-subtitle">Urologist, Renal Transplant & Robotic Surgeon</span>
          </div>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <ul className="mobile-nav-links">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
          <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-subtitle">Expert Urological Care</div>
            <h1 className="hero-title">Advanced Surgical Solutions</h1>
            <p className="hero-description">
              Specialized urologist and renal transplant surgeon offering comprehensive treatment for kidney, ureter & bladder stones, prostate conditions, urological cancers, male infertility, robotic and reconstructive procedures with over 6 years of excellence.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Book Consultation <ChevronRight size={20} />
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('services')}>
                Our Services
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <img src={Picture1} alt="Urologist Surgeon" />
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div className="stat-item" key={index}>
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about" id="about">
        <div className="section-container">
          <div className="about-content">
            <div className="about-image">
              <div className="about-image-main">
                <img src={Picture2} alt="Dr. Bipul Agarwal" />
              </div>
              <div className="about-image-badge">
                <span className="badge-number">5K+</span>
                <span className="badge-text">Successful Surgeries</span>
              </div>
            </div>
            <div className="about-text">
              <div className="section-subtitle">About the Specialist</div>
              <h3>Dr. Bipul Agarwal</h3>
              <p>
                With over 6 years of specialized experience in urology and surgical care, Dr. Bipul Agarwal has established himself as a leading expert in minimally invasive urological procedures. His expertise spans across kidney, ureter & bladder stones, prostate conditions, urological cancers, male infertility, robotic and reconstructive procedures
              </p>
              <p>
                Dr. Agarwal is committed to providing patient-centered care using the latest surgical techniques and technology. His approach combines clinical excellence with compassionate care, ensuring optimal outcomes for every patient. He has successfully performed over 5,000 surgeries with an exceptional success rate.
              </p>
              <div className="credentials">
                <div className="credential-item">
                  <div className="credential-icon"><Award size={24} /></div>
                  <div className="credential-text">
                    <h4>DrNB in Urology</h4>
                    <p>Advanced Surgical Training</p>
                  </div>
                </div>
                <div className="credential-item">
                  <div className="credential-icon"><Users size={24} /></div>
                  <div className="credential-text">
                    <h4>5,000+ Surgeries</h4>
                    <p>Proven Track Record</p>
                  </div>
                </div>
                <div className="credential-item">
                  <div className="credential-icon"><Heart size={24} /></div>
                  <div className="credential-text">
                    <h4>Patient-First Approach</h4>
                    <p>Compassionate Care</p>
                  </div>
                </div>
                <div className="credential-item">
                  <div className="credential-icon"><Clock size={24} /></div>
                  <div className="credential-text">
                    <h4>Emergency Services</h4>
                    <p>24/7 Availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services" id="services">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle">Specialized Services</div>
            <h2 className="section-title">Comprehensive Urological Care</h2>
            <p className="section-description">
              Expert treatment for all urological conditions using state-of-the-art technology and minimally invasive techniques for faster recovery and better outcomes.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                  Book Consultation <ChevronRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials" id="testimonials">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle">Patient Stories</div>
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-description">
              Real experiences from patients who trusted Dr. Bipul Agarwal for their urological care and surgical needs.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="star" />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact" id="contact">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle">Get In Touch</div>
            <h2 className="section-title">Schedule Your Consultation</h2>
            <p className="section-description">
              Contact us today to book your appointment or for any urological concerns. We're here to help you achieve optimal health.
            </p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon"><Phone size={24} /></div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+919886206897</p>
                  <p>Available: Mon - Sat, 9:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Mail size={24} /></div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>bipul17@gmail.com</p>
                  <p>Response within 24 hours</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={24} /></div>
                <div className="contact-details">
                  <h4>Clinic Address</h4>
                  <p>Sir Ganga Ram Hospital Marg, Old Rajinder Nagar, New Delhi, 110060</p>
                  <p>G32 Ground Floor, The Clinics, Market Road, Green Park Main, Block G, New Delhi, 110016</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Calendar size={24} /></div>
                <div className="contact-details">
                  <h4>Consultation Hours</h4>
                  <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="your.email@example.com" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+919886206897" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Describe your concern or reason for consultation..." required></textarea>
                </div>
                <button type="submit" className="submit-btn">Request Appointment</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <h3>Dr. Bipul Agarwal</h3>
            <p>
              Expert urologist and surgeon dedicated to providing world-class urological care with compassion and cutting-edge surgical techniques.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
              <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Specializations</h4>
            <ul className="footer-links">
              <li><a href="#services">Kidney Stone Treatment</a></li>
              <li><a href="#services">Prostate Surgery</a></li>
              <li><a href="#services">Urological Cancer</a></li>
              <li><a href="#services">Laparoscopic Surgery</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Consultation Hours</h4>
            <ul className="footer-links">
              <li>Monday - Saturday: 9:00 AM - 7:00 PM</li>
              <li>Sunday: By Appointment</li>
              <li>Emergency: 24/7 Available</li>
              <li>Phone: +919886206897</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dr. Bipul Agarwal - Urologist, Renal Transplant & Robotic Surgeon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
