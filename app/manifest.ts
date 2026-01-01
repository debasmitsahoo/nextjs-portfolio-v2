import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Debasmit Sahoo Portfolio',
        short_name: 'Debasmit',
        description: 'Full Stack Architect & AI Engineer Portfolio',
        start_url: '/',
        display: 'standalone',
        background_color: '#030711', // Matches bg-background
        theme_color: '#030711',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
