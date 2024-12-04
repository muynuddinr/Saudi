import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Map from '../Components/Map';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://firstdubai.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        await emailjs.send(
          'service_a90ekme',
          'template_f5wi9og',
          formData,
          'Y9tHCORXy0k8LD77j'
        );

        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Failed to send WhatsApp message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send the message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Contact Us | Your Company Name</title>
        <meta name="description" content="Get in touch with us for any inquiries or support. We're here to help and answer any questions you might have." />
        <meta name="keywords" content="contact, support, inquiries, Your Company Name" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://yourwebsite.com/contact/#webpage",
                "url": "https://yourwebsite.com/contact/",
                "name": "Contact Us | Your Company Name",
                "description": "Get in touch with us for any inquiries or support.",
                "isPartOf": { "@id": "https://yourwebsite.com/#website" }
              },
              {
                "@type": "Organization",
                "@id": "https://yourwebsite.com/#organization",
                "name": "Your Company Name",
                "url": "https://yourwebsite.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Baghlaf Building Showroom No.5, Satellite Market Naif Deira, 25th St - Naif",
                  "addressLocality": "Dubai",
                  "addressCountry": "United Arab Emirates",
                  "postalCode": "123421"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-555-123-4567",
                  "contactType": "customer service",
                  "email": "contact@company.com",
                  "areaServed": "AE",
                  "availableLanguage": ["en", "ar"]
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@id": "https://yourwebsite.com/",
                      "name": "Home"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@id": "https://yourwebsite.com/contact/",
                      "name": "Contact"
                    }
                  }
                ]
              },
              {
                "@type": "ContactPage",
                "name": "Contact Us",
                "description": "Get in touch with us for any inquiries or support.",
                "url": "https://yourwebsite.com/contact/",
                "mainEntity": {
                  "@type": "Organization",
                  "name": "Your Company Name",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Baghlaf Building Showroom No.5, Satellite Market Naif Deira, 25th St - Naif",
                    "addressLocality": "Dubai",
                    "addressCountry": "United Arab Emirates",
                    "postalCode": "123421"
                  },
                  "telephone": "+1-555-123-4567",
                  "email": "contact@company.com"
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mt-10 mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help and answer any questions you might have
            </p>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <section className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300" aria-labelledby="contact-form">
              <h2 id="contact-form" className="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="block w-full rounded-lg border-gray-300 shadow-sm 
                      focus:border-purple-500 focus:ring-purple-500 
                      transition-all duration-200 ease-in-out
                      hover:border-purple-400
                      px-4 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="block w-full rounded-lg border-gray-300 shadow-sm 
                      focus:border-purple-500 focus:ring-purple-500 
                      transition-all duration-200 ease-in-out
                      hover:border-purple-400
                      px-4 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="block w-full rounded-lg border-gray-300 shadow-sm 
                      focus:border-purple-500 focus:ring-purple-500 
                      transition-all duration-200 ease-in-out
                      hover:border-purple-400
                      px-4 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="block w-full rounded-lg border-gray-300 shadow-sm 
                      focus:border-purple-500 focus:ring-purple-500 
                      transition-all duration-200 ease-in-out
                      hover:border-purple-400
                      px-4 py-2"
                    rows="4"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-4 px-6 border border-transparent rounded-lg
                    text-base font-medium text-white bg-purple-600 
                    hover:bg-purple-700 focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-purple-500 
                    transform hover:-translate-y-0.5 transition-all duration-200
                    shadow-lg hover:shadow-xl
                    ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
              {status && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 text-center text-sm font-medium px-4 py-3 rounded-lg
                    ${status.includes('Failed') 
                      ? 'text-red-800 bg-red-100' 
                      : 'text-green-800 bg-green-100'}`}
                >
                  {status}
                </motion.p>
              )}
            </section>

            <section className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300" aria-labelledby="contact-info">
              <h2 id="contact-info" className="sr-only">Contact Information</h2>
              <Suspense fallback={
                <div className="h-[300px] bg-gray-200 animate-pulse rounded-t-2xl" />
              }>
                <Map />
              </Suspense>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">
                  Contact Information
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-base font-semibold text-gray-900 mb-1">Address</h5>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Baghlaf Building Showroom No.5<br />
                        Satellite Market Naif Deira<br />
                        25th St - Naif - Dubai<br />
                        United Arab Emirates<br />
                        P.O.Box: 123421
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-base font-semibold text-gray-900 mb-1">Phone</h5>
                      <p className="text-sm leading-relaxed text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-base font-semibold text-gray-900 mb-1">Email</h5>
                      <p className="text-sm leading-relaxed text-gray-600">contact@company.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
    </HelmetProvider>
  );
};

export default Contact;
