import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer-section">
      <div class="container">
        <div class="footer-content">
          <div class="footer-main">
            <div class="footer-brand">
              <h2>Nivyas Hair & Makeup</h2>
              <p>Transforming beauty, creating memories</p>
              <div class="social-links">
                <a href="https://instagram.com/nivyashairandmakeup" target="_blank" class="social-link">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" class="social-link">
                  <i class="fab fa-whatsapp"></i>
                </a>
                <a href="mailto:nivyas@hairandmakeup.com" class="social-link">
                  <i class="fas fa-envelope"></i>
                </a>
                <a href="tel:+919876543210" class="social-link">
                  <i class="fas fa-phone"></i>
                </a>
              </div>
            </div>
            
            <div class="footer-address">
              <h3>Visit Our Studio</h3>
              <div class="address-content">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <p>123 Beauty Lane, Fashion District</p>
                  <p>Mumbai, Maharashtra 400001</p>
                  <p>India</p>
                </div>
              </div>
              <div class="address-actions">
                <a href="https://goo.gl/maps/example" target="_blank" class="btn btn-secondary">
                  <i class="fas fa-directions"></i>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          
          <div class="footer-services">
            <h3>Our Services</h3>
            <ul class="services-list">
              <li><a href="#services">Bridal Makeup</a></li>
              <li><a href="#services">Engagement Makeup</a></li>
              <li><a href="#services">Party Makeup</a></li>
              <li><a href="#services">Hair Styling</a></li>
              <li><a href="#services">Pre-Wedding Shoot</a></li>
              <li><a href="#services">Mehendi Ceremony</a></li>
            </ul>
          </div>
          
          <div class="footer-contact">
            <h3>Quick Contact</h3>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <span>+91 98765 43210</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <span>nivyas&#64;hairandmakeup.com</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-clock"></i>
              <span>Mon-Sat: 9 AM - 8 PM</span>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-divider"></div>
          <div class="footer-bottom-content">
            <p>&copy; 2025 Nivyas Hair & Makeup. All rights reserved.</p>
            <div class="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#booking">Booking Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer-section {
      background: linear-gradient(135deg, var(--text-dark), #1a1a1a);
      color: white;
      padding: 4rem 0 2rem;
      position: relative;
    }

    .footer-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--primary-pink), var(--secondary-gold), var(--accent-rose));
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .footer-main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .footer-brand h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--primary-pink), var(--secondary-gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .footer-brand p {
      color: #ccc;
      margin-bottom: 2rem;
      font-style: italic;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, var(--primary-pink), var(--accent-rose));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(248, 187, 217, 0.4);
    }

    .footer-address h3 {
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
      color: var(--primary-pink);
    }

    .address-content {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .address-content i {
      color: var(--primary-pink);
      font-size: 1.2rem;
      margin-top: 0.2rem;
    }

    .address-content div p {
      margin-bottom: 0.3rem;
      color: #ccc;
    }

    .address-actions .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
    }

    .footer-services h3,
    .footer-contact h3 {
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
      color: var(--primary-pink);
    }

    .services-list {
      list-style: none;
      padding: 0;
    }

    .services-list li {
      margin-bottom: 0.8rem;
    }

    .services-list a {
      color: #ccc;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .services-list a:hover {
      color: var(--primary-pink);
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      color: #ccc;
    }

    .contact-item i {
      color: var(--primary-pink);
      width: 20px;
    }

    .footer-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--primary-pink), transparent);
      margin-bottom: 2rem;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #999;
      font-size: 0.9rem;
    }

    .footer-links {
      display: flex;
      gap: 2rem;
    }

    .footer-links a {
      color: #999;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: var(--primary-pink);
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .footer-main {
        grid-template-columns: 1fr;
      }
      
      .footer-bottom-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
      
      .footer-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {
}