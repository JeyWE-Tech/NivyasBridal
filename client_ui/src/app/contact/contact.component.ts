import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="contact-section section">
      <div class="container">
        <h2 class="section-title fade-in">Get In Touch</h2>
        <p class="section-subtitle fade-in">Ready to book your transformation? Let's connect!</p>
        
        <div class="contact-content">
          <div class="contact-info fade-in">
            <h3>Let's Make Your Day Perfect</h3>
            <p>
              We're here to make your special day unforgettable. Reach out to us through any of these channels and let's start planning your perfect look.
            </p>
            
            <div class="contact-methods">
              <a href="tel:+919876543210" class="contact-method">
                <div class="contact-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="contact-details">
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </a>
              
              <a href="mailto:nivyas@hairandmakeup.com" class="contact-method">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-details">
                  <h4>Email</h4>
                  <p>nivyas&#64;hairandmakeup.com</p>
                </div>
              </a>
              
              <a href="https://wa.me/919876543210" target="_blank" class="contact-method">
                <div class="contact-icon">
                  <i class="fab fa-whatsapp"></i>
                </div>
                <div class="contact-details">
                  <h4>WhatsApp</h4>
                  <p>Quick Chat</p>
                </div>
              </a>
              
              <a href="https://instagram.com/nivyashairandmakeup" target="_blank" class="contact-method">
                <div class="contact-icon">
                  <i class="fab fa-instagram"></i>
                </div>
                <div class="contact-details">
                  <h4>Instagram</h4>
                  <p>&#64;nivyashairandmakeup</p>
                </div>
              </a>
            </div>
            
            <div class="working-hours">
              <h4>Working Hours</h4>
              <div class="hours-list">
                <div class="hour-item">
                  <span>Monday - Saturday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div class="hour-item">
                  <span>Sunday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-image fade-in">
            <img src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Nivyas Hair & Makeup Studio">
            <div class="image-overlay">
              <div class="cta-content">
                <h3>Ready to Transform?</h3>
                <p>Book your consultation today</p>
                <a href="tel:+919876543210" class="btn btn-primary">
                  <i class="fas fa-phone"></i>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background: linear-gradient(135deg, var(--cream-white), #F8F8F8);
      padding: 4rem 0;
      position: relative;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
      color: var(--text-dark);
      margin-bottom: 1rem;
    }

    .section-subtitle {
      font-size: 1.2rem;
      text-align: center;
      color: var(--text-light);
      margin-bottom: 4rem;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .contact-info h3 {
      font-size: 2rem;
      color: var(--text-dark);
      margin-bottom: 1rem;
    }

    .contact-info > p {
      font-size: 1.1rem;
      color: var(--text-light);
      line-height: 1.6;
      margin-bottom: 3rem;
    }

    .contact-methods {
      display: grid;
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .contact-method {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      background: white;
      border-radius: 15px;
      text-decoration: none;
      color: inherit;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .contact-method:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    .contact-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, var(--primary-pink), var(--accent-rose));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
    }

    .contact-details h4 {
      font-size: 1.1rem;
      color: var(--text-dark);
      margin-bottom: 0.2rem;
    }

    .contact-details p {
      color: var(--text-light);
      margin: 0;
    }

    .working-hours {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .working-hours h4 {
      font-size: 1.2rem;
      color: var(--text-dark);
      margin-bottom: 1rem;
      text-align: center;
    }

    .hours-list {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    .hour-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0;
      border-bottom: 1px solid #F0F0F0;
    }

    .hour-item:last-child {
      border-bottom: none;
    }

    .hour-item span:first-child {
      color: var(--text-dark);
      font-weight: 500;
    }

    .hour-item span:last-child {
      color: var(--text-light);
    }

    .contact-image {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      aspect-ratio: 4/5;
    }

    .contact-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(248, 187, 217, 0.8), rgba(232, 213, 183, 0.8));
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .contact-image:hover .image-overlay {
      opacity: 1;
    }

    .cta-content {
      text-align: center;
      color: white;
    }

    .cta-content h3 {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }

    .cta-content p {
      margin-bottom: 1.5rem;
      opacity: 0.9;
    }

    .cta-content .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    @media (max-width: 768px) {
      .section-title {
        font-size: 2.2rem;
      }
      
      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .contact-info h3 {
        font-size: 1.5rem;
      }
      
      .contact-method {
        padding: 1rem;
      }
      
      .contact-icon {
        width: 40px;
        height: 40px;
        font-size: 1rem;
      }
    }
  `]
})
export class ContactComponent {
}