import { Monitor, Smartphone, Video, Palette, Instagram, Globe } from 'lucide-react';
import { NavItem, ServiceItem, Testimonial } from './types';

export const COMPANY_NAME = "Flexible";
export const WHATSAPP_NUMBER = "919876543210"; // Placeholder number
export const EMAIL_ADDRESS = "hello@flexible.agency";
export const LOCATION = "Kolkata, India";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Website Design & Development',
    description: 'Mobile-friendly, fast-loading, business websites & landing pages designed for conversions.',
    features: ['Business Websites', 'Portfolio Websites', 'Landing Pages'],
    icon: Monitor
  },
  {
    id: 'social-media',
    title: 'Social Media & Instagram Posts',
    description: 'Attractive & engaging post designs to boost brand presence.',
    features: ['Business Posts', 'Offer & Sale Creatives', 'Carousel Posts'],
    icon: Instagram
  },
  {
    id: 'video-editing',
    title: 'Video Editing & Reels',
    description: 'Clean, modern and engaging video editing for brands & creators.',
    features: ['Reels Editing', 'Promo Videos', 'Marketing Clips'],
    icon: Video
  },
  {
    id: 'graphic-design',
    title: 'Banner & Graphic Design',
    description: 'Eye-catching designs for online & offline branding.',
    features: ['Banners', 'Thumbnails', 'Marketing Creatives'],
    icon: Palette
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Roy",
    role: "Founder",
    company: "Kolkata Eats",
    content: "Flexible transformed our online presence. Their Instagram creatives are top-notch and have doubled our engagement.",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Priya Das",
    role: "Marketing Head",
    company: "TechSolutions",
    content: "The website they designed is fast and professional. Highly recommended for any Kolkata business looking to grow.",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Amit Sen",
    role: "Owner",
    company: "Sen Clothing",
    content: "Excellent video editing services for our reels. They understand the trend and deliver quickly.",
    avatar: "https://picsum.photos/100/100?random=3"
  }
];
