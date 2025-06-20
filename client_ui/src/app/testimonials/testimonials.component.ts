import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
  service: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials-section section">
      <div class="container">
        <h2 class="section-title fade-in">What Our Brides Say</h2>
        <p class="section-subtitle fade-in">Real experiences from our beautiful clients</p>
        
        <div class="testimonials-grid">
          <div 
            class="testimonial-card fade-in"
            *ngFor="let testimonial of testimonials; let i = index"
            [style.animation-delay]="(i * 0.2) + 's'">
            <div class="testimonial-header">
              <img [src]="testimonial.image" [alt]="testimonial.name" class="testimonial-image">
              <div class="testimonial-info">
                <h3 class="testimonial-name">{{ testimonial.name }}</h3>
                <p class="testimonial-location">{{ testimonial.location }}</p>
                <div class="testimonial-rating">
                  <i class="fas fa-star" *ngFor="let star of getStars(testimonial.rating)"></i>
                </div>
              </div>
            </div>
            <div class="testimonial-content">
              <p class="testimonial-comment">"{{ testimonial.comment }}"</p>
              <div class="testimonial-service">
                <span>Service: {{ testimonial.service }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="testimonials-stats fade-in">
          <div class="stat-item">
            <h3>2500+</h3>
            <p>Happy Brides</p>
          </div>
          <div class="stat-item">
            <h3>5.0</h3>
            <p>Average Rating</p>
          </div>
          <div class="stat-item">
            <h3>10+</h3>
            <p>Years in Business</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section {
      background: linear-gradient(135deg, #FFF8F3, var(--cream-white));
      padding: 4rem 0;
      position: relative;
    }

    .testimonials-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(circle at 20% 80%, rgba(248, 187, 217, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(232, 213, 183, 0.1) 0%, transparent 50%);
    }

    .container {
      position: relative;
      z-index: 1;
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

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .testimonial-card {
      background: white;
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .testimonial-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--primary-pink), var(--secondary-gold));
    }

    .testimonial-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }

    .testimonial-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .testimonial-image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid var(--primary-pink);
    }

    .testimonial-info h3 {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 0.2rem;
    }

    .testimonial-location {
      font-size: 0.9rem;
      color: var(--text-light);
      margin-bottom: 0.5rem;
    }

    .testimonial-rating {
      display: flex;
      gap: 0.2rem;
    }

    .testimonial-rating i {
      color: #FFD700;
      font-size: 0.9rem;
    }

    .testimonial-comment {
      font-style: italic;
      line-height: 1.6;
      color: var(--text-light);
      margin-bottom: 1rem;
      font-size: 1rem;
    }

    .testimonial-service {
      background: var(--soft-gray);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      display: inline-block;
    }

    .testimonial-service span {
      font-size: 0.8rem;
      color: var(--primary-pink);
      font-weight: 500;
    }

    .testimonials-stats {
      display: flex;
      justify-content: center;
      gap: 4rem;
      margin-top: 3rem;
      padding: 2rem;
      background: linear-gradient(135deg, rgba(248, 187, 217, 0.1), rgba(232, 213, 183, 0.1));
      border-radius: 20px;
    }

    .stat-item {
      text-align: center;
    }

    .stat-item h3 {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--primary-pink);
      margin-bottom: 0.5rem;
    }

    .stat-item p {
      font-size: 1rem;
      color: var(--text-light);
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .section-title {
        font-size: 2.2rem;
      }
      
      .testimonials-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      .testimonials-stats {
        flex-direction: column;
        gap: 2rem;
      }
      
      .stat-item h3 {
        font-size: 2rem;
      }
    }
  `]
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'Nivyas made my wedding day absolutely magical! The bridal makeup was flawless and lasted throughout the entire ceremony. I felt like a queen!',
      image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=200',
      service: 'Bridal Makeup'
    },
    {
      id: 2,
      name: 'Aarti Patel',
      location: 'Bangalore',
      rating: 5,
      comment: 'The team is incredibly professional and talented. My engagement look was exactly what I dreamed of. Highly recommend their services!',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=200',
      service: 'Engagement Makeup'
    },
    {
      id: 3,
      name: 'Sneha Reddy',
      location: 'Hyderabad',
      rating: 5,
      comment: 'Amazing experience! The hair styling was perfect and the makeup was so elegant. I received countless compliments at my reception.',
      image: 'https://images.pexels.com/photos/3065203/pexels-photo-3065203.jpeg?auto=compress&cs=tinysrgb&w=200',
      service: 'Hair Styling'
    },
    {
      id: 4,
      name: 'Kavya Nair',
      location: 'Chennai',
      rating: 5,
      comment: 'Nivyas understands exactly what looks good on each person. The pre-wedding shoot makeup was photogenic and beautiful. Thank you!',
      image: 'https://images.pexels.com/photos/3065217/pexels-photo-3065217.jpeg?auto=compress&cs=tinysrgb&w=200',
      service: 'Pre-Wedding Shoot'
    },
    {
      id: 5,
      name: 'Ritika Gupta',
      location: 'Delhi',
      rating: 5,
      comment: 'The party makeup was glamorous and stunning. I felt confident and beautiful throughout the entire event. Exceptional service!',
      image: 'https://images.pexels.com/photos/3065244/pexels-photo-3065244.jpeg?auto=compress&cs=tinysrgb&w=200',
      service: 'Party Makeup'
    },
    {
      id: 6,
      name: 'Ananya Singh',
      location: 'Pune',
      rating: 5,
      comment: 'The mehendi ceremony look was vibrant and perfect for the celebration. Nivyas truly brings out the best in every bride!',
      image: 'https://images.pexels.com/photos/3065228/pexels-photo-3065228.jpeg?auto=compress&cs=tinysrgb&w=200',
      service: 'Mehendi Ceremony'
    }
  ];

  ngOnInit() {
    // Add intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}