import { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';
import { getAllPosts } from '@/lib/blog-data';

// Fixed build date avoids churning <lastmod> on every deploy (a weak/negative signal).
const LAST_BUILD = new Date('2026-06-21');

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
        { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
        { path: '/projects', priority: 0.9, changeFrequency: 'monthly' as const },
        { path: '/experience', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/education', priority: 0.7, changeFrequency: 'yearly' as const },
        { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
        { path: '/contact', priority: 0.6, changeFrequency: 'yearly' as const },
    ].map((p) => ({
        url: `${SITE.url}${p.path}`,
        lastModified: LAST_BUILD,
        changeFrequency: p.changeFrequency,
        priority: p.priority,
    }));

    const blogPages = getAllPosts().map((post) => ({
        url: `${SITE.url}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...blogPages];
}
