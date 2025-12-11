import React from 'react';
import { Download, FileText, HelpCircle, Clock, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const guides = [
    {
      title: 'Getting Started Guide',
      description: 'Complete setup guide for new users',
      type: 'PDF',
      size: '2.3 MB',
      downloads: 1247
    },
    {
      title: 'Character Creation Tutorial',
      description: 'Step-by-step character creation process',
      type: 'PDF',
      size: '1.8 MB',
      downloads: 892
    },
    {
      title: 'Economy System Guide',
      description: 'Understanding the trading and economy features',
      type: 'PDF',
      size: '3.1 MB',
      downloads: 634
    },
    {
      title: 'Moderation Commands',
      description: 'Complete list of moderation tools and usage',
      type: 'PDF',
      size: '1.5 MB',
      downloads: 445
    }
  ];

  const faqs = [
    {
      question: 'How do I invite the bot to my server?',
      answer: 'Click the "Add to Server" button on our homepage and follow the Discord authorization process. Make sure you have "Manage Server" permissions.'
    },
    {
      question: 'What permissions does the bot need?',
      answer: 'The bot requires Read Messages, Send Messages, Embed Links, Attach Files, and Manage Messages permissions for basic functionality. Additional features may require role management permissions.'
    },
    {
      question: 'How do I create my first character?',
      answer: 'Use the /char create command followed by your character name. The bot will guide you through the character creation process with interactive prompts.'
    },
    {
      question: 'Can characters be used across multiple servers?',
      answer: 'Yes! Our cross-server character syncing allows you to use the same character across any server that has Roleplay Tools installed.'
    },
    {
      question: 'How does the economy system work?',
      answer: 'Players earn gold through various activities like completing quests, winning battles, or trading items. Gold can be used to purchase equipment, items, or services from other players.'
    },
    {
      question: 'Is there a character level limit?',
      answer: 'Characters can reach level 100, with each level requiring progressively more XP. Higher levels unlock new abilities and increase stat caps.'
    },
    {
      question: 'How do I report bugs or request features?',
      answer: 'Join our support server or use the contact form on this website. We actively monitor feedback and regularly update the bot based on user suggestions.'
    },
    {
      question: 'Is the bot free to use?',
      answer: 'Yes! Roleplay Tools is completely free. We offer premium features for supporters, but all core functionality is available to everyone.'
    }
  ];

  const changelog = [
    {
      version: '2.4.0',
      date: '2024-01-15',
      changes: [
        'Added guild-specific character profiles',
        'Improved battle system with new combat mechanics',
        'Enhanced inventory management with sorting options',
        'Fixed cross-server sync issues'
      ]
    },
    {
      version: '2.3.2',
      date: '2024-01-08',
      changes: [
        'Hotfix for character creation bug',
        'Updated economy balance calculations',
        'Improved error handling for invalid commands'
      ]
    },
    {
      version: '2.3.0',
      date: '2024-01-01',
      changes: [
        'New Year event items and quests',
        'Added character backstory system',
        'Implemented advanced trading mechanics',
        'Performance optimizations for large servers'
      ]
    },
    {
      version: '2.2.1',
      date: '2023-12-20',
      changes: [
        'Holiday-themed character customization options',
        'Fixed memory leak in battle system',
        'Updated help documentation',
        'Added new achievement categories'
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Resources & Support
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to get the most out of Roleplay Tools. From setup guides to advanced tutorials.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Guides Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <FileText className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-3xl font-bold">Quick Guides</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Download className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                    {guide.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{guide.description}</p>
                <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                  <span>{guide.size}</span>
                  <span>{guide.downloads} downloads</span>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <HelpCircle className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg border border-purple-500/20 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-purple-500/5 transition-colors"
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-300 border-t border-purple-500/10">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Changelog Section */}
        <section>
          <div className="flex items-center mb-8">
            <Clock className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-3xl font-bold">Changelog</h2>
          </div>
          <div className="space-y-6">
            {changelog.map((release, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-purple-400">
                    Version {release.version}
                  </h3>
                  <span className="text-gray-400 text-sm">{release.date}</span>
                </div>
                <ul className="space-y-2">
                  {release.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="flex items-start space-x-2 text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Support Links */}
        <section className="mt-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Need More Help?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="#"
              className="flex items-center justify-center space-x-2 bg-gray-800 p-4 rounded-lg hover:bg-purple-500/10 transition-colors border border-purple-500/20"
            >
              <ExternalLink className="w-5 h-5 text-purple-400" />
              <span>Join Support Server</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center space-x-2 bg-gray-800 p-4 rounded-lg hover:bg-purple-500/10 transition-colors border border-purple-500/20"
            >
              <FileText className="w-5 h-5 text-purple-400" />
              <span>Documentation</span>
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center space-x-2 bg-gray-800 p-4 rounded-lg hover:bg-purple-500/10 transition-colors border border-purple-500/20"
            >
              <HelpCircle className="w-5 h-5 text-purple-400" />
              <span>Contact Us</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResourcesPage;