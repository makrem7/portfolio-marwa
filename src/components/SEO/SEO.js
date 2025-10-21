import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
    title,
    description,
    keywords,
    url,
    image,
    type = 'website'
}) => {
    const siteUrl = 'https://marwahammemi.web.app';
    const defaultTitle = 'Marwa Hammemi - Graphic Designer';
    const defaultDescription = 'Portfolio of Marwa Hammemi, a passionate graphic designer based in Sfax, Tunisia. Specialized in logo & brand identity, social media posts, UI/UX design, and print design.';
    const defaultKeywords = 'Marwa Hammemi, graphic designer, graphic design, logo design, brand identity, UI design, UX design, print design, social media design';
    const defaultImage = `${siteUrl}/favicon512.png`;

    const seo = {
        title: title ? `${title} | ${defaultTitle}` : defaultTitle,
        description: description || defaultDescription,
        keywords: keywords || defaultKeywords,
        url: url ? `${siteUrl}${url}` : siteUrl,
        image: image ? `${siteUrl}${image}` : defaultImage,
        type: type
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{seo.title}</title>
            <meta name="title" content={seo.title} />
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            <link rel="canonical" href={seo.url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={seo.type} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
        </Helmet>
    );
};

export default SEO;

