'use client';
import Script from 'next/script';

<Script
  id="hero-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.lovosistech.com/#hero-section",
      "name": "Hero Section",
      "url": "https://www.lovosistech.com",
      "mainEntity": {
        "@type": "CreativeWork",
        "headline": "Transform Your Digital Future",
        "description": "Discover our innovative solutions to take your business to the next level. Trusted by over 500+ businesses, we specialize in digital transformation and advanced analytics.",
        "image": {
          "@type": "ImageObject",
          "url": "https://www.lovosistech.com/hero.webp",
          "width": 800,
          "height": 600
        },
        "author": {
          "@type": "Organization",
          "name": "Lovosis Technology",
          "url": "https://www.lovosistech.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Lovosis Technology",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.lovosistech.com/logo.png",
            "width": 600,
            "height": 60
          }
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Digital Transformation Services",
            "description": "Cutting-edge digital strategies to optimize business growth and efficiency.",
            "url": "https://www.lovosistech.com/services"
          }
        ],
        "contentLocation": {
          "@type": "Place",
          "name": "Global",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "0.0",
            "longitude": "0.0"
          }
        }
      },
      "about": {
        "@type": "Thing",
        "name": "Digital Transformation",
        "sameAs": [
          "https://www.wikipedia.org/wiki/Digital_transformation"
        ]
      },
      "hasPart": {
        "@type": "CreativeWork",
        "name": "Stats Section",
        "description": "A section showcasing key statistics of success rate, global reach, and 24/7 support.",
        "offers": [
          {
            "@type": "Offer",
            "name": "98% Success Rate",
            "description": "High success rate from satisfied clients worldwide."
          },
          {
            "@type": "Offer",
            "name": "100+ Countries",
            "description": "Global reach with clients across over 100 countries."
          },
          {
            "@type": "Offer",
            "name": "24/7 Support",
            "description": "Round-the-clock support for all clients."
          }
        ]
      }
    })
  }}
/>
