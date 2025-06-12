import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bell - Hôtel Oceania Paris',
    short_name: 'Bell',
    description: 'Application mobile pour les services hôteliers - Spa, Room Service, Conciergerie',
    start_url: '/mobile',
    display: 'standalone',
    background_color: '#F8F5F1',
    theme_color: '#2F2F2F',
    orientation: 'portrait-primary',
    scope: '/',
    categories: ['travel', 'hospitality'],
    lang: 'fr',
    icons: [
      {
        src: '/icons/bell-icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icons/bell-icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icons/bell-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any'
      },
    ],
    screenshots: [
      {
        src: '/screenshots/mobile-home.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Page d\'accueil mobile'
      }
    ]
  }
}