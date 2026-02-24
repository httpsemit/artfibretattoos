// Tattoo Portfolio Types
export interface TattooPortfolio {
  _id: string;
  title: string;
  style: TattooStyle;
  placement: string;
  approximateSize: string;
  image: string;
  thumbnail: string;
  description?: string;
  createdAt: string;
}

export type TattooStyle = 
  | 'Tribal'
  | 'Freehand' 
  | 'Japanese'
  | 'Fine Line'
  | 'Black & Grey'
  | 'Color'
  | 'Portrait'
  | 'Geometric'
  | 'Script';

// Art Gallery Types
export interface Artwork {
  _id: string;
  title: string;
  medium: ArtMedium;
  dimensions: string;
  category: ArtCategory;
  images: string[];
  thumbnail: string;
  description?: string;
  availability: 'available' | 'sold' | 'commission';
  price?: number;
  createdAt: string;
}

export type ArtMedium = 'ink' | 'watercolor' | 'acrylic' | 'mixed';
export type ArtCategory = 
  | 'Koi & Water'
  | 'Dragons'
  | 'Tigers'
  | 'Botanicals'
  | 'Geisha & Figures'
  | 'Waves & Landscapes';

// Booking Form Types
export interface BookingForm {
  name: string;
  phone: string;
  preferredDates: string[];
  styleInterest: TattooStyle;
  placement: string;
  approximateSize: string;
  referenceImage?: File;
  additionalNotes?: string;
}

// Contact Form Types
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Commission Request Types
export interface CommissionRequest {
  subject: string;
  preferredSize: string;
  medium: ArtMedium;
  referenceImages?: File[];
  budgetRange: string;
  timeline: string;
  description: string;
}

// Shop Types (Phase 2)
export interface Product {
  _id: string;
  title: string;
  type: ProductType;
  medium: ArtMedium;
  dimensions: string;
  images: string[];
  thumbnail: string;
  description: string;
  price: number;
  currency: 'INR' | 'USD';
  availability: 'available' | 'sold';
  editionInfo?: {
    type: 'limited' | 'open';
    editionNumber?: number;
    totalEditions?: number;
  };
  shippingEstimate: {
    domestic: string;
    international: string;
  };
}

export type ProductType = 'original' | 'limited-print' | 'open-print';

// Cart Types (Phase 2)
export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  currency: 'INR' | 'USD';
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// SEO Types
export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}
