import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = "KME WORLD - Elevated Editorial Fashion",
  description = "KME WORLD creates bold streetwear designs for visionary artists. Custom clothing for celebrities including 070 Shake, DDG, Cardi B, and more. Garments for the unorthodox.",
  keywords = "streetwear, fashion, KME WORLD, designer clothing, editorial fashion, celebrity styling, 070 Shake, DDG, custom clothing, avant-garde fashion, urban wear",
  image = "/og-image.jpg",
  url = "https://kmeworld.com",
  type = "website"
}: SEOProps) {
  const fullTitle = title.includes('KME WORLD') ? title : `${title} | KME WORLD`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="KME WORLD" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="KME WORLD" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@kmeworld" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <link rel="canonical" href={url} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "KME WORLD",
          "description": description,
          "url": url,
          "logo": {
            "@type": "ImageObject",
            "url": `${url}/logo.png`
          },
          "sameAs": [
            "https://instagram.com/kmeworld",
            "https://twitter.com/kmeworld"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "minzly@kmeworld.com",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  );
}