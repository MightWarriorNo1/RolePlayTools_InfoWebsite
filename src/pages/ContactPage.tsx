import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, always succeed
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'general',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Get help with technical issues or general questions",
      contact: "support@roleplaytools.com",
      response: "Usually within 2-4 hours"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Discord Community",
      description: "Join our community for real-time support and discussions",
      contact: "discord.gg/roleplaytools",
      response: "Instant community help"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Business Inquiries",
      description: "For partnerships, enterprise solutions, or media requests",
      contact: "business@roleplaytools.com",
      response: "Within 24 hours"
    }
  ];

  const categories = [
    { value: 'general', label: 'General Question' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'bug', label: 'Bug Report' },
    { value: 'business', label: 'Business Inquiry' }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-discord-blurple/10 via-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-discord-light to-discord-blurple bg-clip-text text-transparent mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-discord-light max-w-3xl mx-auto">
              Have questions, suggestions, or need help? We're here to assist you every step of the way
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-discord-darker border border-discord-border rounded-xl p-6 hover:border-discord-blurple transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-discord-blurple to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-discord-light text-sm mb-4">{method.description}</p>
                <div className="space-y-2">
                  <p className="text-discord-blurple font-medium">{method.contact}</p>
                  <p className="text-xs text-discord-light">{method.response}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-discord-darker/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Send Us a Message</h2>
            <p className="text-xl text-discord-light">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <div className="bg-discord-darker border border-discord-border rounded-2xl p-8">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <p className="text-green-400">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <p className="text-red-400">Sorry, there was an error sending your message. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-discord-dark border border-discord-border rounded-xl text-white placeholder-discord-light focus:outline-none focus:border-discord-blurple focus:ring-1 focus:ring-discord-blurple transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-discord-dark border border-discord-border rounded-xl text-white placeholder-discord-light focus:outline-none focus:border-discord-blurple focus:ring-1 focus:ring-discord-blurple transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-white mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-discord-dark border border-discord-border rounded-xl text-white focus:outline-none focus:border-discord-blurple focus:ring-1 focus:ring-discord-blurple transition-all duration-200 appearance-none cursor-pointer"
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value} className="bg-discord-dark">
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-discord-dark border border-discord-border rounded-xl text-white placeholder-discord-light focus:outline-none focus:border-discord-blurple focus:ring-1 focus:ring-discord-blurple transition-all duration-200"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-discord-dark border border-discord-border rounded-xl text-white placeholder-discord-light focus:outline-none focus:border-discord-blurple focus:ring-1 focus:ring-discord-blurple transition-all duration-200 resize-vertical"
                  placeholder="Please provide as much detail as possible..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-discord-blurple to-purple-600 text-white rounded-xl hover:from-discord-light hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-discord-blurple focus:ring-offset-2 focus:ring-offset-discord-darker transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-semibold flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-discord-light">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How quickly do you respond to support requests?",
                answer: "We typically respond to support emails within 2-4 hours during business hours (9 AM - 6 PM PST). For urgent issues, join our Discord server for faster community support."
              },
              {
                question: "Do you offer phone support?",
                answer: "Currently, we provide support through email and Discord. For enterprise customers or business inquiries, we can arrange phone calls as needed."
              },
              {
                question: "Can I request new features?",
                answer: "Absolutely! We love hearing feature requests from our community. Use the 'Feature Request' category in the contact form or suggest ideas in our Discord server."
              },
              {
                question: "How do I report a bug?",
                answer: "Please use the 'Bug Report' category in the contact form and include as much detail as possible: steps to reproduce, expected vs actual behavior, and any error messages."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-discord-darker border border-discord-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-discord-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20 bg-discord-darker/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Location</h2>
            <p className="text-xl text-discord-light">
              While we work remotely, our headquarters is located in San Francisco
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-discord-darker border border-discord-border rounded-xl p-8 text-center">
            <MapPin className="h-12 w-12 text-discord-blurple mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Roleplay Tools HQ</h3>
            <div className="space-y-2 text-discord-light">
              <p>123 Innovation Drive</p>
              <p>San Francisco, CA 94105</p>
              <p>United States</p>
            </div>
            <div className="mt-6 pt-6 border-t border-discord-border">
              <p className="text-sm text-discord-light">
                We're a remote-first company, but visitors are welcome by appointment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;