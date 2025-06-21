import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Service } from "../services/services.component";

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  location: string;
  serviceId: number;
  specialRequests: string;
}

@Component({
  selector: "app-booking-modal",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./booking-modal.component.html",
  styleUrl: "./booking-modal.component.scss",
})
export class BookingModalComponent {
  @Input() service: Service | null = null;
  @Output() close = new EventEmitter<void>();

  bookingData: BookingData = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    location: "",
    serviceId: 0,
    specialRequests: "",
  };

  minDate: string;

  constructor() {
    // Set minimum date to today
    const today = new Date();
    this.minDate = today.toISOString().split("T")[0];
  }

  onOverlayClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  closeModal() {
    this.close.emit();
  }

  onSubmit() {
    if (this.service) {
      this.bookingData.serviceId = this.service.id;

      // In a real application, you would send this data to a backend service
      console.log("Booking submitted:", this.bookingData);

      // For demo purposes, we'll show an alert
      alert(
        `Thank you for booking ${this.service.name}! We'll contact you soon to confirm your appointment.`
      );

      // Reset form and close modal
      this.resetForm();
      this.closeModal();
    }
  }

  private resetForm() {
    this.bookingData = {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      location: "",
      serviceId: 0,
      specialRequests: "",
    };
  }
}
