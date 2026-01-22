import React, { useState, useRef } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaInstagram,
  FaClock,
  FaGlobe,
  FaExclamationTriangle,
  FaUser,
  FaCommentAlt
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Type safe environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contactInfo = {
    email: 'githinjipinchez001@gmail.com',
    phone: '+254725401081',
    phone2: '+254725401081',
    location: 'Embu, Kenya, 60100',
    workingHours: 'Mon - Fri: 9:00 AM - 6:00 PM',
    responseTime: 'Usually within 24 hours',
  };

  const socialLinks = [
    { icon: <FaLinkedin className="text-xl" />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/peter-githinji-a680462b8/', color: 'hover:bg-[#0077B5]' },
    { icon: <FaGithub className="text-xl" />, label: 'GitHub', url: 'https://github.com/254PINCHEZ', color: 'hover:bg-gray-900' },
    { icon: <FaTwitter className="text-xl" />, label: 'Twitter', url: '#', color: 'hover:bg-[#1DA1F2]' },
    { icon: <FaInstagram className="text-xl" />, label: 'Instagram', url: '#', color: 'hover:bg-gradient-to-r from-purple-500 to-pink-500' },
  ];

  const stats = [
    { icon: <FaClock />, label: 'Response Time', value: '24 Hours' },
    { icon: <FaCheckCircle />, label: 'Project Success Rate', value: '100%' },
    { icon: <FaPaperPlane />, label: 'Messages Received', value: '60+' },
    { icon: <FaGlobe />, label: 'Remote Collaboration', value: 'Available' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear any previous errors when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Fallback to direct email if EmailJS is not configured
      const serviceId = EMAILJS_SERVICE_ID || '';
      const templateId = EMAILJS_TEMPLATE_ID || '';
      const publicKey = EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !templateId || !publicKey) {
        // Fallback: Open user's email client
        const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.open(`mailto:githinjipinchez001@gmail.com?subject=${subject}&body=${body}`);
        setIsSubmitted(true);
      } else {
        // Send via EmailJS
        emailjs.init(publicKey);
        await emailjs.send(serviceId, templateId, {
          to_email: 'githinjipinchez001@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email // Important for reply functionality
        });
        setIsSubmitted(true);
      }
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (err: any) {
      console.error('EmailJS error:', err);
      
      // User-friendly error messages
      let errorMessage = 'Failed to send message. ';
      
      if (err?.text?.includes('Service not found')) {
        errorMessage += 'Email service configuration error. Please try emailing me directly.';
      } else if (err?.text?.includes('Template not found')) {
        errorMessage += 'Email template configuration error. Please try emailing me directly.';
      } else if (err?.text?.includes('Invalid public key')) {
        errorMessage += 'Configuration error. Please try emailing me directly.';
      } else {
        errorMessage += 'Please try again or email me directly at githinjipinchez001@gmail.com';
      }
      
      setError(errorMessage);
      
      // Hide error after 5 seconds
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent-blue rounded-full mx-auto mb-8"></div>
          <p className="text-text-muted text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss potential collaboration opportunities? 
            I'm always open to interesting conversations about technology and innovation.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Contact Information Card */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-800 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-10">
              Contact Information
            </h3>
            
            {/* Contact Details */}
            <div className="space-y-8 mb-12">
              {[
                {
                  icon: <FaEnvelope />,
                  label: 'Email Address',
                  value: contactInfo.email,
                  href: `mailto:${contactInfo.email}`
                },
                {
                  icon: <FaPhone />,
                  label: 'Phone Numbers',
                  value: contactInfo.phone,
                  secondaryValue: contactInfo.phone2,
                  href: `tel:${contactInfo.phone}`,
                  secondaryHref: `tel:${contactInfo.phone2}`
                },
                {
                  icon: <FaMapMarkerAlt />,
                  label: 'Location',
                  value: contactInfo.location,
                  details: `${contactInfo.workingHours} • ${contactInfo.responseTime}`
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 pb-8 border-b border-gray-800 last:border-0 last:pb-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-blue rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-text-muted text-sm font-medium mb-2">
                      {item.label}
                    </div>
                    <div className="text-text text-lg font-semibold mb-1">
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="hover:text-accent transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </div>
                    {item.secondaryValue && (
                      <div className="text-text-muted text-base">
                        <a 
                          href={item.secondaryHref} 
                          className="hover:text-accent transition-colors duration-300"
                        >
                          {item.secondaryValue}
                        </a>
                      </div>
                    )}
                    {item.details && (
                      <div className="text-text-muted text-sm mt-2">
                        {item.details}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-accent mb-6">
                Connect With Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 px-4 py-3 bg-gray-900/70 rounded-xl text-text hover:text-white transition-all duration-300 ${social.color} border border-gray-800 hover:border-transparent hover:shadow-xl`}
                  >
                    {social.icon}
                    <span className="font-medium text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-800 shadow-xl relative">
            
            {/* Success Message */}
            {isSubmitted && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-fade-in-down">
                  <FaCheckCircle size={20} />
                  <span className="font-semibold">Message sent successfully!</span>
                </div>
              </div>
            )}

            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-10">
              Send a Message
            </h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* Name Input */}
              <div className="group">
                <label className="block text-text font-semibold mb-3 flex items-center gap-2">
                  <FaUser size={14} />
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-5 py-4 bg-gray-900/70 border-2 border-gray-800 rounded-xl text-text placeholder-gray-600 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all duration-300"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-focus-within:border-accent/30 rounded-xl pointer-events-none transition-all duration-300" />
                </div>
              </div>

              {/* Email Input */}
              <div className="group">
                <label className="block text-text font-semibold mb-3 flex items-center gap-2">
                  <FaEnvelope size={14} />
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full px-5 py-4 bg-gray-900/70 border-2 border-gray-800 rounded-xl text-text placeholder-gray-600 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all duration-300"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-focus-within:border-accent/30 rounded-xl pointer-events-none transition-all duration-300" />
                </div>
              </div>

              {/* Subject Input */}
              <div className="group">
                <label className="block text-text font-semibold mb-3 flex items-center gap-2">
                  <FaCommentAlt size={14} />
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="w-full px-5 py-4 bg-gray-900/70 border-2 border-gray-800 rounded-xl text-text placeholder-gray-600 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all duration-300"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-focus-within:border-accent/30 rounded-xl pointer-events-none transition-all duration-300" />
                </div>
              </div>

              {/* Message Input */}
              <div className="group">
                <label className="block text-text font-semibold mb-3 flex items-center gap-2">
                  <FaCommentAlt size={14} />
                  Message *
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-5 py-4 bg-gray-900/70 border-2 border-gray-800 rounded-xl text-text placeholder-gray-600 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all duration-300 resize-none"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-focus-within:border-accent/30 rounded-xl pointer-events-none transition-all duration-300" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-accent to-accent-blue text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </button>

              {/* Success Message (Alternative - inline version) */}
              {isSubmitted && !error && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 font-semibold flex items-center gap-3 animate-fade-in">
                  <FaCheckCircle className="text-xl" />
                  <div>
                    <p className="font-bold">Message Sent Successfully! ✅</p>
                    <p className="text-sm font-normal mt-1">
                      Thank you! I've received your message at <strong>githinjipinchez001@gmail.com</strong> and will get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 font-semibold flex items-center gap-3 animate-fade-in">
                  <FaExclamationTriangle className="text-xl" />
                  <div>
                    <p className="font-bold">Message Failed to Send</p>
                    <p className="text-sm font-normal mt-1">
                      {error}
                    </p>
                    <p className="text-sm font-normal mt-2">
                      You can also email me directly at:{" "}
                      <a 
                        href="mailto:githinjipinchez001@gmail.com" 
                        className="text-accent hover:underline"
                      >
                        githinjipinchez001@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </form>

            {/* Privacy Note */}
            <div className="mt-6 text-center">
              <p className="text-text-muted text-xs">
                Powered by{" "}
                <a 
                  href="https://www.emailjs.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  EmailJS
                </a>
                . Your data is secure and will only be used to respond to your inquiry.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-accent/10 to-accent-blue/5 rounded-full blur-2xl -z-10 animate-pulse-slow" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-gray-700/5 to-gray-900/10 rounded-full blur-2xl -z-10 animate-bounce-slow" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-blue rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-text mb-2">
                {stat.value}
              </div>
              <div className="text-text-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add custom animations to your global CSS or Tailwind config
const CustomStyles = () => (
  <style jsx global>{`
    @keyframes fade-in-down {
      from {
        opacity: 0;
        transform: translate(-50%, -10px);
      }
      to {
        opacity: 1;
        transform: translate(-50%, 0);
      }
    }
    
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    @keyframes pulse-slow {
      0%, 100% {
        opacity: 0.5;
      }
      50% {
        opacity: 0.8;
      }
    }
    
    @keyframes bounce-slow {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    .animate-fade-in-down {
      animation: fade-in-down 0.3s ease-out;
    }
    
    .animate-fade-in {
      animation: fade-in 0.3s ease-out;
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 3s infinite;
    }
    
    .animate-bounce-slow {
      animation: bounce-slow 4s infinite;
    }
  `}</style>
);

export default Contact;