import React, { useState, useRef } from 'react';
import { Server, Cloud, Code, Cpu, Users, Terminal, ArrowRight, Mail, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export const HomePage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setFormStatus('sending');
      
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus('success');
      setFormData({ from_name: '', from_email: '', from_phone: '', message: '' });

      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-[calc(100vh-5rem)] flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise Technology Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive IT infrastructure, cloud solutions, and custom software development for modern businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://calendly.com/philanderson888/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Schedule a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Server className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Infrastructure & Support</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive hardware and software support, server management, and technical infrastructure solutions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                  Hardware & Software Support
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                  Server Management
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                  Technical Troubleshooting
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Cloud className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 mb-4">
                Expert cloud infrastructure setup and management across major platforms.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                  AWS Solutions
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                  Azure Implementation
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                  Cloud Migration Services
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Code className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Custom Development</h3>
              <p className="text-gray-600 mb-4">
                Full-stack application development using modern, scalable technologies.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                  Web Applications
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                  Enterprise Software
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                  API Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80" 
                alt="Technical Expertise" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Technical Expertise</h2>
              <p className="text-gray-600 mb-8">
                With over 15 years of experience in technical training and support, combined with
                4 years of modern software engineering, we deliver enterprise-grade solutions
                across multiple technology stacks.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <Cpu className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Infrastructure</h4>
                    <p className="text-sm text-gray-600">CompTIA A+, Net+, Security+</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Terminal className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Development</h4>
                    <p className="text-sm text-gray-600">Full-Stack Engineering</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Cloud className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Cloud</h4>
                    <p className="text-sm text-gray-600">AWS & Azure Solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Training</h4>
                    <p className="text-sm text-gray-600">Microsoft Certified Trainer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get Started</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <p className="text-gray-600 mb-4">
                    Book a free initial consultation to discuss your technical needs. We offer up to 2 hours of free technical consultation, after which our rate is £50/hour for ongoing support.
                  </p>
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <h4 className="font-semibold mb-2">Schedule a Consultation</h4>
                    <p className="text-gray-600 mb-4">Choose a convenient time for your free consultation:</p>
                    <a 
                      href="https://calendly.com/philanderson888/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Book a Meeting
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-600 mr-4" />
                    <a href="mailto:consultation@philanderson.co.uk" className="text-gray-600 hover:text-blue-600">
                      consultation@philanderson.co.uk
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-6 w-6 text-blue-600 mr-4" />
                    <a 
                      href="https://linkedin.com/in/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-6 w-6 text-blue-600 mr-4" />
                    <a 
                      href="https://github.com/philanderson888" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel"
                    name="from_phone"
                    value={formData.from_phone}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={formStatus === 'sending' || formStatus === 'success'}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                >
                  {formStatus === 'sending' ? 'Sending...' : 
                   formStatus === 'success' ? 'Message Sent!' : 
                   'Send Message'}
                </button>
                {formStatus === 'success' && (
                  <p className="text-green-600 text-center">
                    Thank you for your message. We'll get back to you soon!
                  </p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-600 text-center">
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
              PhilAnderson Tech
            </Link>
            <div className="flex space-x-6">
              <a href="#services" className="hover:text-gray-300">Services</a>
              <a href="#expertise" className="hover:text-gray-300">Expertise</a>
              <a href="#contact" className="hover:text-gray-300">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © {new Date().getFullYear()} PhilAnderson Tech. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};