import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="gallery-section section">
      <div class="container">
        <h2 class="section-title fade-in">Our Portfolio</h2>
        <p class="section-subtitle fade-in">
          Witness the artistry of transformation
        </p>

        <div class="gallery-filters fade-in">
          <button
            class="filter-btn"
            [class.active]="activeFilter === 'all'"
            (click)="filterGallery('all')"
          >
            All
          </button>
          <button
            class="filter-btn"
            [class.active]="activeFilter === 'bridal'"
            (click)="filterGallery('bridal')"
          >
            Bridal
          </button>
          <button
            class="filter-btn"
            [class.active]="activeFilter === 'party'"
            (click)="filterGallery('Advertisement')"
          >
            Ad
          </button>
          <button
            class="filter-btn"
            [class.active]="activeFilter === 'hair'"
            (click)="filterGallery('hair')"
          >
            Hair Styling
          </button>
        </div>

        <div class="gallery-grid">
          <div
            class="gallery-item fade-in"
            *ngFor="let image of filteredImages; let i = index"
            [style.animation-delay]="i * 0.1 + 's'"
            (click)="openLightbox(image)"
          >
            <img [src]="image.url" [alt]="image.title" />
            <div class="gallery-overlay">
              <h3>{{ image.title }}</h3>
              <p>{{ image.category }}</p>
              <i class="fas fa-search-plus"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div class="lightbox" *ngIf="selectedImage" (click)="closeLightbox()">
        <div class="lightbox-content" (click)="$event.stopPropagation()">
          <button class="lightbox-close" (click)="closeLightbox()">
            <i class="fas fa-times"></i>
          </button>
          <img [src]="selectedImage.url" [alt]="selectedImage.title" loading="lazy" />
          <div class="lightbox-info">
            <h3>{{ selectedImage.title }}</h3>
            <p>{{ selectedImage.category }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .gallery-section {
        background: linear-gradient(
          135deg,
          var(--cream-white),
          var(--soft-gray)
        );
        padding: 4rem 0;
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
        margin-bottom: 3rem;
      }

      .gallery-filters {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 3rem;
        flex-wrap: wrap;
      }

      .filter-btn {
        padding: 0.8rem 1.5rem;
        border: 2px solid var(--primary-pink);
        background: transparent;
        color: var(--primary-pink);
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
      }

      .filter-btn:hover,
      .filter-btn.active {
        background: var(--primary-pink);
        color: white;
        transform: translateY(-2px);
      }

      .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
      }

      .gallery-item {
        position: relative;
        aspect-ratio: 4/3;
        border-radius: 15px;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s ease;
      }

      .gallery-item:hover {
        transform: scale(1.05);
      }

      .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      .gallery-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          135deg,
          rgba(248, 187, 217, 0.9),
          rgba(232, 213, 183, 0.9)
        );
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        color: white;
        text-align: center;
        padding: 2rem;
      }

      .gallery-item:hover .gallery-overlay {
        opacity: 1;
      }

      .gallery-overlay h3 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
      }

      .gallery-overlay p {
        font-size: 0.9rem;
        margin-bottom: 1rem;
        opacity: 0.9;
      }

      .gallery-overlay i {
        font-size: 2rem;
      }

      .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        opacity: 0;
        animation: fadeIn 0.3s ease-out forwards;
      }

      .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        overflow: hidden;
        transform: scale(0.9);
        animation: scaleIn 0.3s ease-out forwards;
      }

      .lightbox-content img {
        width: 100%;
        height: auto;
        display: block;
      }

      .lightbox-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(0, 0, 0, 0.5);
        border: none;
        color: white;
        font-size: 1.5rem;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
        z-index: 2001;
      }

      .lightbox-close:hover {
        background: rgba(0, 0, 0, 0.7);
      }

      .lightbox-info {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
        color: white;
        padding: 2rem;
        text-align: center;
      }

      .lightbox-info h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      @keyframes scaleIn {
        to {
          transform: scale(1);
        }
      }

      @media (max-width: 768px) {
        .section-title {
          font-size: 2.2rem;
        }

        .gallery-grid {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .gallery-filters {
          gap: 0.5rem;
        }

        .filter-btn {
          padding: 0.6rem 1rem;
          font-size: 0.9rem;
        }
      }
    `,
  ],
})
export class GalleryComponent implements OnInit {
  activeFilter = "all";
  selectedImage: GalleryImage | null = null;

  images: GalleryImage[] = [
    {
      id: 1,
      url: "assets/images/img81.jpg",
      title: "Elegant Bridal Look",
      category: "bridal",
    },
    {
      id: 2,
      url: "assets/images/img82.jpg",
      title: "Classic Bridal Makeup",
      category: "bridal",
    },
    {
      id: 3,
      url: "assets/images/img83.jpg",
      title: "Glamorous Party Look",
      category: "Advertisement",
    },
    {
      id: 4,
      url: "assets/images/img84.jpg",
      title: "Sophisticated Hair Styling",
      category: "hair",
    },
    {
      id: 5,
      url: "assets/images/img85.jpg",
      title: "Romantic Bridal Style",
      category: "bridal",
    },
    {
      id: 6,
      url: "assets/images/img86.jpg",
      title: "Festive Celebration Look",
      category: "Advertisement",
    },
    {
      id: 7,
      url: "assets/images/img87.jpg",
      title: "Elegant Updo",
      category: "hair",
    },
    {
      id: 8,
      url: "assets/images/img88.jpg",
      title: "Modern Bridal Beauty",
      category: "bridal",
    },
    {
      id: 9,
      url: "assets/images/img89.jpg",
      title: "Chic Party Makeup",
      category: "Advertisement",
    },
    {
      id: 10,
      url: "assets/images/img90.jpg",
      title: "Chic Party Makeup",
      category: "bridal",
    },
    {
      id: 11,
      url: "assets/images/img91.jpg",
      title: "Chic Party Makeup",
      category: "Advertisement",
    },
  ];

  filteredImages: GalleryImage[] = [];

  ngOnInit() {
    this.filteredImages = this.images;
  }

  filterGallery(category: string) {
    this.activeFilter = category;
    if (category === "all") {
      this.filteredImages = this.images;
    } else {
      this.filteredImages = this.images.filter(
        (image) => image.category === category
      );
    }
  }

  openLightbox(image: GalleryImage) {
    this.selectedImage = image;
    document.body.style.overflow = "hidden";
  }

  closeLightbox() {
    this.selectedImage = null;
    document.body.style.overflow = "auto";
  }
}
