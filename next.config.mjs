/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permet l'accès depuis le réseau local pour les tests PWA mobile
  async headers() {
    return [
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/manifest+json',
          },
        ],
      },
    ];
  },
};

export default nextConfig; 