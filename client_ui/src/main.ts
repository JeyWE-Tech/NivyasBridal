import { Component, OnInit, AfterViewInit } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./app/hero/hero.component";
import { IntroComponent } from "./app/intro/intro.component";
import { ServicesComponent } from "./app/services/services.component";
import { GalleryComponent } from "./app/gallery/gallery.component";
import { TestimonialsComponent } from "./app/testimonials/testimonials.component";
import { ContactComponent } from "./app/contact/contact.component";
import { FooterComponent } from "./app/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    IntroComponent,
    ServicesComponent,
    GalleryComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <div class="app-container">
      <!-- Navigation -->
      <nav class="main-nav" [class.scrolled]="isScrolled">
        <div class="nav-container">
          <div class="nav-brand">
            <img
              src="assets/images/logo.png"
              alt="Nivyas Logo"
              class="nav-logo"
            />
            <h1>Nivyas</h1>
          </div>

          <ul class="nav-menu" [class.active]="isMenuOpen">
            <li><a href="#hero" (click)="scrollToSection('hero')">Home</a></li>
            <li>
              <a href="#services" (click)="scrollToSection('services')"
                >Services</a
              >
            </li>
            <li>
              <a href="#gallery" (click)="scrollToSection('gallery')"
                >Gallery</a
              >
            </li>
            <li>
              <a href="#testimonials" (click)="scrollToSection('testimonials')"
                >Reviews</a
              >
            </li>
            <li>
              <a href="#contact" (click)="scrollToSection('contact')"
                >Contact</a
              >
            </li>
          </ul>
          <button class="nav-toggle" (click)="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="main-content">
        <div id="hero">
          <app-hero></app-hero>
        </div>
        <div id="intro">
          <app-intro></app-intro>
        </div>
        <div id="services">
          <app-services></app-services>
        </div>
        <div id="gallery">
          <app-gallery></app-gallery>
        </div>
        <div id="testimonials">
          <app-testimonials></app-testimonials>
        </div>
        <div id="contact">
          <app-contact></app-contact>
        </div>
        <app-footer></app-footer>
      </main>
    </div>
  `,
  styles: [
    `
      .app-container {
        position: relative;
      }

      .nav-brand {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .nav-logo {
        height: 32px; /* adjust as needed */
        width: auto;
      }

      .main-nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(19, 19, 19, 0.86);
        backdrop-filter: blur(10px);
        z-index: 1000;
        transition: all 0.3s ease;
        transform: translateY(-100%);
        animation: slideDown 1s ease-out 2.5s forwards;
      }

      .main-nav.scrolled {
        background: rgba(101, 101, 101, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
      }

      .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
      }

      .nav-brand h1 {
        font-family: "Playfair Display", serif;
        font-size: 1.8rem;
        font-weight: 700;
        background: linear-gradient(
          135deg,
          var(--primary-pink),
          var(--secondary-gold)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0;
      }

      .nav-menu {
        display: flex;
        list-style: none;
        gap: 2rem;
        margin: 0;
        padding: 0;
      }

      .nav-menu a {
        text-decoration: none;
        color: var(--text-dark);
        font-weight: 500;
        transition: all 0.3s ease;
        position: relative;
      }

      .nav-menu a::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(
          90deg,
          var(--primary-pink),
          var(--secondary-gold)
        );
        transition: width 0.3s ease;
      }

      .nav-menu a:hover::after {
        width: 100%;
      }

      .nav-toggle {
        display: none;
        flex-direction: column;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
      }

      .nav-toggle span {
        width: 25px;
        height: 3px;
        background: var(--text-dark);
        margin: 3px 0;
        border-radius: 2px;
        transition: 0.3s;
      }

      .main-content {
        margin-top: 0;
      }

      @keyframes slideDown {
        to {
          transform: translateY(0);
        }
      }

      @media (max-width: 768px) {
        .nav-menu {
          position: fixed;
          top: 70px;
          left: -100%;
          width: 100%;
          height: calc(100vh - 70px);
          background: rgba(255, 255, 255, 0.98);
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding-top: 3rem;
          gap: 3rem;
          transition: left 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .nav-menu.active {
          left: 0;
        }

        .nav-toggle {
          display: flex;
        }

        .nav-toggle.active span:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }

        .nav-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .nav-toggle.active span:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }

        .nav-container {
          padding: 1rem;
        }

        .nav-brand h1 {
          font-size: 1.5rem;
        }
      }
    `,
  ],
})
export class App implements OnInit, AfterViewInit {
  isScrolled = false;
  isMenuOpen = false;

  ngOnInit() {
    // Handle scroll events
    window.addEventListener("scroll", () => {
      this.isScrolled = window.scrollY > 50;
    });
  }

  ngAfterViewInit() {
    // Add smooth scrolling and intersection observer for animations
    const sections = document.querySelectorAll(".section");
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fadeElements = entry.target.querySelectorAll(".fade-in");
          fadeElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add("animate");
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const navToggle = document.querySelector(".nav-toggle");
    navToggle?.classList.toggle("active");
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      this.isMenuOpen = false;
      const navToggle = document.querySelector(".nav-toggle");
      navToggle?.classList.remove("active");
    }
  }
}

bootstrapApplication(App);
