import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bell',
    short_name: 'Bell',
    description: 'Bell',
    start_url: '/mobile',
    display: 'standalone',
    background_color: '#F8F5F1',
    theme_color: '#F8F5F1',
    icons: [
      {
        src: '/icons/bell-icon.svg',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}