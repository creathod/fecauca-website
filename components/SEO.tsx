import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string[];
    schema?: object;
    breadcrumbs?: Array<{ name: string; url: string }>;
    faq?: Array<{ question: string; answer: string }>;
    image?: string;
    url?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = [],
    schema,
    breadcrumbs,
    faq,
    image = 'https://fecauca.com/images/logo-fecauca.png',
    url
}) => {
    // Ensure image is an absolute URL
    const absoluteImage = image.startsWith('http')
        ? image
        : `https://fecauca.com${image.startsWith('/') ? '' : '/'}${image}`;
    const fullTitle = `${title} | FECAUCA`;
    const canonicalUrl = url || `https://fecauca.com${typeof window !== 'undefined' ? window.location.pathname : ''}`;

    // Breadcrumb Schema
    const breadcrumbSchema = breadcrumbs ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url
        }))
    } : null;

    // FAQ Schema
    const faqSchema = faq ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    } : null;

    // Combine all schemas
    const allSchemas = [schema, breadcrumbSchema, faqSchema].filter(Boolean);

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:site_name" content="FECAUCA" />
            <meta property="og:locale" content="es_CO" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={absoluteImage} />

            {/* Geo Tags for Local SEO */}
            <meta name="geo.region" content="CO-CAU" />
            <meta name="geo.placename" content="Popayán" />
            <meta name="geo.position" content="2.4419;-76.6063" />
            <meta name="ICBM" content="2.4419, -76.6063" />

            {/* Schema.org JSON-LD */}
            {allSchemas.length > 0 && (
                <script type="application/ld+json">
                    {JSON.stringify(allSchemas.length === 1 ? allSchemas[0] : allSchemas)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
