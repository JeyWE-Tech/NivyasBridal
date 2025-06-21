import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookingModalComponent } from "../booking-modal/booking-modal.component";

export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  features: string[];
}

@Component({
  selector: "app-services",
  standalone: true,
  imports: [CommonModule, BookingModalComponent],
  templateUrl: "./services.component..html",
  styleUrl: "./services.component.scss",
})
export class ServicesComponent {
  showBookingModal = false;
  selectedService: Service | null = null;

  services: Service[] = [
    {
      id: 1,
      name: "The Eclectic Bride",
      description:
        "Getting ready for your wedding is one of the most enjoyable parts of your big day and having a professional and friendly makeup artist goes a long way in making the experience.",
      price: "₹25,000",
      duration: "3-4 hours",
      image: "assets/images/img22.png",
      features: [
        "Makeup",
        "Bride hair styling",
        "False Eyelashes",
        "Saree Draping",
        "Contact Lenses",
        "Hair Extensions",
      ],
    },
    {
      id: 2,
      name: "The Art of Air Bride",
      description:
        "This highly-acclaimed package has been popular among our Brides over time. This private Bridal styling session is highly recommended for occasions that last for long hours fresh for over 12 hours.",
      price: "₹30,000",
      duration: "2-3 hours",
      image: "assets/images/img23.png",
      features: [
        "Makeup",
        "Bride hair styling",
        "False Eyelashes",
        "Saree Draping",
        "Lenses",
        "Hair Extensions",
      ],
    },
    {
      id: 3,
      name: "The Quintessential Bride",
      description:
        "This highly-acclaimed package has been popular among our Brides over time. This private Bridal styling session is highly recommended for occasions that last for long hours fresh for over 12 hours.",
      price: "₹40,000",
      duration: "1.5-2 hours",
       image: "assets/images/img24.png",
      features: [
        "Makeup",
        "Bride hair styling",
        "False Eyelashes",
        "Saree Draping",
        "Lenses",
        "Hair Extensions",
      ],
    },
  ];

  openBookingModal(service: Service) {
    this.selectedService = service;
    this.showBookingModal = true;
  }

  closeBookingModal() {
    this.showBookingModal = false;
    this.selectedService = null;
  }
}
