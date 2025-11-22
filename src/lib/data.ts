import { Code, BotMessageSquare, PencilRuler, CloudCog } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Code,
    title: 'Custom Web Development',
    description: 'Bespoke web applications built with modern technologies to meet your unique business needs. Scalable, secure, and performant.',
  },
  {
    icon: BotMessageSquare,
    title: 'AI Integration',
    description: 'Leverage the power of artificial intelligence. We integrate custom AI solutions and chatbots to enhance user engagement and automate tasks.',
  },
  {
    icon: PencilRuler,
    title: 'UI/UX Design',
    description: 'Intuitive and beautiful user interfaces designed to provide a seamless user experience. From wireframes to pixel-perfect mockups.',
  },
  {
    icon: CloudCog,
    title: 'Cloud Solutions & DevOps',
    description: 'Robust cloud infrastructure and CI/CD pipelines to ensure your application is reliable, scalable, and easy to maintain.',
  },
];

export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  imageId: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A scalable e-commerce solution with a custom CMS and integrated payment gateways for a seamless shopping experience.',
    imageId: 'proj1',
  },
  {
    id: '2',
    title: 'AI-Powered Analytics Dashboard',
    description: 'A data visualization tool that uses machine learning to provide predictive insights and business intelligence.',
    imageId: 'proj2',
  },
  {
    id: '3',
    title: 'Corporate Landing Page',
    description: 'A modern and responsive landing page for a tech startup, focusing on brand identity and lead generation.',
    imageId: 'proj3',
  },
  {
    id: '4',
    title: 'Mobile App for Social Networking',
    description: 'A cross-platform mobile app designed to connect like-minded individuals, featuring real-time chat and event management.',
    imageId: 'proj4',
  },
];
