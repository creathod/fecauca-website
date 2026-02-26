
import { RouteItem } from './types';

export const ROUTES: RouteItem[] = [
  { path: '/', label: 'Inicio' },
  { path: '/productos', label: 'Catálogo' },
  { path: '/servicios', label: 'Servicios' },
  { path: '/blog', label: 'Blog' },
  { path: '/nosotros', label: 'Nosotros' },
  { path: '/contacto', label: 'Contacto' },
];

export const WHATSAPP_NUMBER = "573205190242";
export const WHATSAPP_DEFAULT_MSG = "Hola FECAUCA 💡 Quisiera una cotización";

export const COMPANY_INFO = {
  address: "Carrera 11 # 2N-50, Barrio Modelo, Popayán",
  email: "info@fecauca.com", // Keeping generic as user didn't provide email
  phone: "+57 320 519 0242",
  hours: "Lun - Vie: 8:00 AM - 6:00 PM | Sáb: 8:00 AM - 1:00 PM" // Keeping generic hours as user didn't provide specific ones, but implied standard business
};

export const SOCIAL_URLS = {
  facebook: "https://facebook.com/FECAUCA",
  instagram: "https://instagram.com/FECAUCA",
  tiktok: "https://tiktok.com/@FECAUCA",
  youtube: "" // User didn't mention YouTube
};