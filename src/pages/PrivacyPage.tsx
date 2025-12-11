import React from 'react';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: <Database className="h-6 w-6" />,
      content: [
        {
          subtitle: "Discord Information",
          details: "When you use our bot, we collect your Discord user ID, username, server information, and message content only when you interact with our commands."
        },
        {
          subtitle: "Character Data",
          details: "We store character profiles, stats, inventory items, and progression data that you create through our bot commands."
        },
        {
          subtitle: "Usage Analytics",
          details: "We collect anonymous usage statistics to improve our services, including command usage frequency and error logs."
        },
        {
          subtitle: "Account Information",
          details: "If you create an account on our website, we collect your email address and any profile information you provide."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <UserCheck className="h-6 w-6" />,
      content: [
        {
          subtitle: "Service Provision",
          details: "We use your data to provide bot functionality, maintain character profiles, and enable cross-server features."
        },
        {
          subtitle: "Improvement & Analytics",
          details: "Anonymous usage data helps us identify popular features, fix bugs, and improve overall user experience."
        },
        {
          subtitle: "Communication",
          details: "We may use your contact information to send important service updates, security alerts, or respond to support requests."
        },
        {
          subtitle: "Legal Compliance",
          details: "We may process your data to comply with legal obligations or protect our rights and the safety of our users."
        }
      ]
    },
    {
      title: "Data Security",
      icon: <Lock className="h-6 w-6" />,
      content: [
        {
          subtitle: "Encryption",
          details: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption standards."
        },
        {
          subtitle: "Access Controls",
          details: "We implement strict access controls and authentication mechanisms to protect your data from unauthorized access."
        },
        {
          subtitle: "Regular Audits",
          details: "Our security practices are regularly audited and updated to meet industry best practices and compliance standards."
        },
        {
          subtitle: "Data Backups",
          details: "We maintain secure, encrypted backups of your data to prevent loss and ensure service continuity."
        }
      ]
    },
    {
      title: "Your Rights",
      icon: <Eye className="h-6 w-6" />,
      content: [
        {
          subtitle: "Access & Portability",
          details: "You can request a copy of all personal data we have about you in a machine-readable format."
        },
        {
          subtitle: "Correction",
          details: "You can update or correct your personal information through our bot commands or by contacting support."
        },
        {
          subtitle: "Deletion",
          details: "You can request deletion of your account and associated data. Some data may be retained for legal or security purposes."
        },
        {
          subtitle: "Opt-out",
          details: "You can opt out of non-essential communications and certain data processing activities at any time."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-discord-blurple/10 via-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-discord-blurple to-purple-600 rounded-2xl mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-discord-light to-discord-blurple bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-discord-light max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="mt-6 text-sm text-discord-light">
              <p>Last updated: January 15, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-discord-blurple/10 border border-discord-blurple/20 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Privacy at a Glance</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Lock className="h-8 w-8 text-discord-blurple mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Secure by Design</h3>
                <p className="text-sm text-discord-light">All data encrypted and protected with industry-standard security</p>
              </div>
              <div className="text-center">
                <Eye className="h-8 w-8 text-discord-blurple mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Transparent</h3>
                <p className="text-sm text-discord-light">Clear information about what we collect and how we use it</p>
              </div>
              <div className="text-center">
                <UserCheck className="h-8 w-8 text-discord-blurple mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Your Control</h3>
                <p className="text-sm text-discord-light">Full control over your data with easy access and deletion options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-discord-darker/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-discord-darker border border-discord-border rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-discord-blurple to-purple-600 rounded-lg flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                </div>
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-2 border-discord-blurple pl-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.subtitle}</h3>
                      <p className="text-discord-light">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-discord-darker border border-discord-border rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Data Retention</h2>
            </div>
            <div className="space-y-4 text-discord-light">
              <p>
                We retain your personal information only as long as necessary to provide our services and comply with legal obligations:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-discord-blurple rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-white">Character Data:</strong> Retained while your account is active and for 2 years after account deletion</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-discord-blurple rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-white">Usage Analytics:</strong> Anonymized data retained for up to 3 years for service improvement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-discord-blurple rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-white">Support Communications:</strong> Retained for 5 years for quality assurance and legal compliance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-discord-blurple rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-white">Legal Requirements:</strong> Some data may be retained longer if required by law</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Third Party Services */}
      <section className="py-20 bg-discord-darker/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-discord-darker border border-discord-border rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Third-Party Services</h2>
            <div className="space-y-6">
              <p className="text-discord-light">
                We use select third-party services to provide and improve our bot. These services have their own privacy policies:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-discord-dark border border-discord-border rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Discord API</h3>
                  <p className="text-sm text-discord-light">Required for bot functionality. Subject to Discord's Privacy Policy.</p>
                </div>
                <div className="bg-discord-dark border border-discord-border rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Analytics Services</h3>
                  <p className="text-sm text-discord-light">Anonymous usage analytics to improve our services.</p>
                </div>
                <div className="bg-discord-dark border border-discord-border rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Cloud Infrastructure</h3>
                  <p className="text-sm text-discord-light">Secure hosting and data storage with enterprise-grade providers.</p>
                </div>
                <div className="bg-discord-dark border border-discord-border rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Payment Processing</h3>
                  <p className="text-sm text-discord-light">Secure payment handling for premium features (if applicable).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Updates */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-discord-blurple/20 to-purple-600/20 border border-discord-blurple/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Questions About Privacy?</h2>
            <p className="text-xl text-discord-light mb-8">
              We're committed to transparency and protecting your privacy. If you have any questions or concerns, don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-discord-blurple to-purple-600 text-white rounded-xl hover:from-discord-light hover:to-purple-500 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Contact Privacy Team
              </a>
              <a
                href="mailto:privacy@roleplaytools.com"
                className="px-8 py-4 bg-discord-darker border border-discord-border text-white rounded-xl hover:border-discord-blurple transition-all duration-300 font-semibold"
              >
                privacy@roleplaytools.com
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-discord-border">
              <p className="text-sm text-discord-light">
                We may update this privacy policy from time to time. We'll notify you of any significant changes via email or through our Discord server.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;