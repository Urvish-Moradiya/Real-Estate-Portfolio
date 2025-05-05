
import { Project } from "@/components/projects/ProjectCard";

// Project data
const projects: Project[] = [
  {
    id: 1,
    slug: "monarch-residences",
    title: "The Monarch Residences",
    category: "residential",
    location: "New York City, NY",
    status: "completed",
    completionDate: "March 2023",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "The Monarch Residences offers luxurious urban living in the heart of New York City. This residential masterpiece features 120 premium apartments with state-of-the-art amenities including a rooftop pool, fitness center, and 24/7 concierge service."
  },
  {
    id: 2,
    slug: "azure-heights-tower",
    title: "Azure Heights Tower",
    category: "commercial",
    location: "Miami, FL",
    status: "completed",
    completionDate: "September 2022",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Azure Heights Tower is a landmark commercial project in Miami's business district, offering premium office spaces with panoramic ocean views. The building incorporates sustainable design principles and cutting-edge smart technology throughout its 32 floors."
  },
  {
    id: 3,
    slug: "emerald-valley-villas",
    title: "Emerald Valley Villas",
    category: "residential",
    location: "Aspen, CO",
    status: "completed",
    completionDate: "December 2022",
    image: "https://images.unsplash.com/photo-1613553497126-a44624272634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Nestled in the picturesque landscapes of Aspen, Emerald Valley Villas offers luxury mountain living with 24 exclusive custom-built homes. Each residence features premium materials, expansive floor-to-ceiling windows, and seamless indoor-outdoor living spaces."
  },
  {
    id: 4,
    slug: "nexus-business-center",
    title: "The Nexus Business Center",
    category: "commercial",
    location: "Chicago, IL",
    status: "completed",
    completionDate: "April 2023",
    image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "The Nexus Business Center represents the future of commercial spaces in downtown Chicago. This innovative hub features flexible office solutions, state-of-the-art conference facilities, and an integrated smart building management system."
  },
  {
    id: 5,
    slug: "serenity-spa-wellness",
    title: "Serenity Spa & Wellness",
    category: "interior",
    location: "Los Angeles, CA",
    status: "completed",
    completionDate: "November 2022",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description: "Serenity Spa & Wellness is a premium interior design project transforming a heritage building into a luxury wellness destination. Our design team created a tranquil oasis featuring natural materials, custom lighting, and thoughtfully designed spaces for relaxation and rejuvenation."
  },
  {
    id: 6,
    slug: "horizon-plaza",
    title: "Horizon Plaza",
    category: "ongoing",
    location: "Seattle, WA",
    status: "ongoing",
    completionDate: "Expected Q2 2024",
    image: "https://images.unsplash.com/photo-1600047509807-f8e8eca2a72b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80",
    description: "Currently under construction, Horizon Plaza will be a mixed-use development combining retail, office, and residential spaces in downtown Seattle. The project emphasizes sustainable design and will include public green spaces, electric vehicle charging stations, and energy-efficient systems throughout."
  },
  {
    id: 7,
    slug: "oceanfront-residences",
    title: "Oceanfront Residences",
    category: "residential",
    location: "San Diego, CA",
    status: "upcoming",
    completionDate: "Expected Q1 2025",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Oceanfront Residences will be our most ambitious residential project to date, featuring 45 luxury beachfront condominiums with unobstructed ocean views. The development will incorporate cutting-edge sustainable technologies, private beach access, and resort-style amenities."
  },
  {
    id: 8,
    slug: "metropolitan-grand-hotel",
    title: "Metropolitan Grand Hotel",
    category: "commercial",
    location: "Boston, MA",
    status: "upcoming",
    completionDate: "Expected Q3 2025",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "The future Metropolitan Grand Hotel will redefine luxury accommodation in Boston's historic district. This boutique hotel will feature 120 rooms, a rooftop restaurant, spa facilities, and conference spaces, all while preserving and incorporating elements of the site's historic architecture."
  },
  {
    id: 9,
    slug: "cedar-creek-estates",
    title: "Cedar Creek Estates",
    category: "residential",
    location: "Portland, OR",
    status: "ongoing",
    completionDate: "Expected Q4 2024",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Cedar Creek Estates is a community of 35 eco-friendly homes currently being developed in Portland. Each residence features sustainable materials, solar panels, rainwater harvesting systems, and smart home technology, all nestled within a preserved natural woodland setting."
  }
];

export default projects;
