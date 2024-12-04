import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from '../Components/Hero';
import Logo from '../Components/Logo';
import Newsletter from '../Components/Newsletter';
import Clients from './Clients';
import Blog from '../Components/Blog';
import Features from '../Components/Features';


const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home | Your Company Name</title>
        <meta name="description" content="Welcome to Your Company Name. Discover our innovative solutions and services. Stay updated with our latest news and insights." />
        <meta name="keywords" content="home, Your Company Name, innovative solutions, services, news, insights" />
        
        {/* OpenGraph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home | Your Company Name" />
        <meta property="og:description" content="Discover our innovative solutions and services. Stay updated with our latest news and insights." />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://yourwebsite.com/#webpage",
                "url": "https://yourwebsite.com",
                "name": "Home | Your Company Name",
                "description": "Welcome to Your Company Name. Discover our innovative solutions and services. Stay updated with our latest news and insights."
              },
              {
                "@type": "Organization",
                "@id": "https://yourwebsite.com/#organization",
                "name": "Your Company Name",
                "url": "https://yourwebsite.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://yourwebsite.com/logo.png"
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <div>
        <Hero />
        <Clients />
        <Blog />
        <Logo />
        <Newsletter />
      </div>
    </HelmetProvider>
  );
};

export default Home;