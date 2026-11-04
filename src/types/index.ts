export interface NavItem {
  title: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: "maintenance" | "repairs" | "tires" | "performance";
  shortDescription: string;
  fullDescription?: string;
  features: string[];
  iconName: string;
  href: string;
  isPendingVerification?: boolean;
}

export interface VehicleItem {
  id: string;
  title: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  priceEur: number;
  mileageKm: number;
  engine: string;
  transmission: string;
  fuelType: string;
  exteriorColor?: string;
  isFeatured?: boolean;
  status: "available" | "reserved" | "sample";
  imageUrl: string;
  imageAlt: string;
  notes?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rankOrRole?: string;
  location: string;
  rating: number;
  date: string;
  vehicle: string;
  serviceType: string;
  quote: string;
  isVerifiedReview: boolean;
  source: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "military" | "services" | "sales" | "general";
}

export interface TrustPillar {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
}
