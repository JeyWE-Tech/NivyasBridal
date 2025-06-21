import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section section">
      <div class="hero-video">
        <video #videoPlayer autoplay muted loop playsinline preload="auto">
          <source src="assets/videos/bg-video.webm" type="video/webm" />
          <source src="assets/videos/bg-video.mp4" type="video/mp4" />
        </video>

        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <h1 class="hero-title fade-in">Nivyas Makeup Studio</h1>
        <p class="hero-subtitle fade-in">
          Transform your special day with elegant beauty
        </p>
        <div class="hero-quote fade-in">
          <p>"Beauty begins the moment you decide to be yourself"</p>
        </div>
        <button class="btn btn-primary fade-in" (click)="scrollToServices()">
          Explore Services
        </button>
      </div>

      <div class="scroll-indicator fade-in">
        <div class="scroll-arrow">
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero-section {
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .hero-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
      }

      .hero-video video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          135deg,
          rgba(35, 35, 35, 0.7),
          rgba(64, 63, 62, 0.7)
        );
        z-index: -1;
      }

      .hero-content {
        text-align: center;
        color: white;
        z-index: 1;
        max-width: 800px;
        padding: 2rem;
      }

      .hero-title {
        font-size: 4rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        animation-delay: 0.5s;
      }

      .hero-subtitle {
        font-size: 1.5rem;
        font-weight: 300;
        margin-bottom: 2rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        animation-delay: 0.7s;
      }

      .hero-quote {
        font-style: italic;
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
        animation-delay: 0.9s;
      }

      .hero-content .btn {
        animation-delay: 1.1s;
        font-size: 1.1rem;
        padding: 1.2rem 2.5rem;
      }

      .scroll-indicator {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        animation-delay: 1.3s;
      }

      .scroll-arrow {
        animation: bounce 2s infinite;
        color: white;
        font-size: 1.5rem;
      }

      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-10px);
        }
        60% {
          transform: translateY(-5px);
        }
      }

      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }

        .hero-subtitle {
          font-size: 1.2rem;
        }

        .hero-quote {
          font-size: 1rem;
        }

        .hero-content {
          padding: 1rem;
        }
      }
    `,
  ],
})
export class HeroComponent implements OnInit {
  @ViewChild("videoPlayer") videoPlayer!: ElementRef<HTMLVideoElement>;
  ngOnInit() {
    // Add fade-in animation with staggered delays
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("animate");
      }, index * 200);
    });
  }

  ngAfterViewInit(): void {
    const video = this.videoPlayer.nativeElement;

    // Ensure autoplay compatibility
    video.muted = true;
    video.setAttribute("playsinline", "true");

    // Wait until video can be played smoothly
    const tryPlay = () => {
      video.play().catch((err) => {
        console.warn("Autoplay failed, retrying in 1s", err);
        setTimeout(tryPlay, 1000); // Retry loop
      });
    };

    video.addEventListener("canplaythrough", tryPlay);

    // Fallback retry in case event doesn’t fire
    setTimeout(() => {
      if (video.paused) tryPlay();
    }, 3000);
  }

  scrollToServices() {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}
