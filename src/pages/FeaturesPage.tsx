import React, { useState } from 'react';
import { Gamepad2, Coins, Shield, TrendingUp, Users, Zap, Globe, Award, ChevronRight, Play, Pause } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: string[];
  demoVideo?: string;
  stats?: { label: string; value: string }[];
}

const FeaturesPage: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const features: Feature[] = [
    {
      id: 'characters',
      title: 'Advanced Character Management',
      description: 'Create, customize, and manage detailed character profiles with comprehensive stat tracking',
      icon: <Gamepad2 className="h-8 w-8" />,
      color: 'from-blue-500 to-purple-600',
      details: [
        'Create unlimited characters with custom stats',
        'Advanced character sheets with RPG progression',
        'Visual character avatars and descriptions',
        'Equipment and inventory management',
        'Skill trees and talent point allocation',
        'Character backstories and relationship tracking'
      ],
      stats: [
        { label: 'Characters Created', value: '127K+' },
        { label: 'Active Players', value: '23K' },
        { label: 'Character Classes', value: '50+' },
        { label: 'Customization Options', value: '500+' }
      ]
    },
    {
      id: 'economy',
      title: 'Complete Economy System',
      description: 'Full-featured trading, crafting, and marketplace with cross-server currency support',
      icon: <Coins className="h-8 w-8" />,
      color: 'from-yellow-500 to-orange-600',
      details: [
        'Multi-currency system with exchange rates',
        'Player-to-player trading with escrow protection',
        'Auction house and marketplace',
        'Crafting system with recipes and materials',
        'Daily quests and reward systems',
        'Cross-server economy synchronization'
      ],
      stats: [
        { label: 'Daily Transactions', value: '15K+' },
        { label: 'Items Traded', value: '2.3M' },
        { label: 'Total Value', value: '50M gold' },
        { label: 'Active Markets', value: '1.2K' }
      ]
    },
    {
      id: 'moderation',
      title: 'Smart Moderation Tools',
      description: 'AI-powered moderation with custom rules, automated responses, and detailed logging',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-red-500 to-pink-600',
      details: [
        'AI-powered chat filtering and detection',
        'Custom automod rules and triggers',
        'Comprehensive audit logs',
        'Warning system with escalation',
        'Role-based permission management',
        'Advanced spam and raid protection'
      ],
      stats: [
        { label: 'Messages Scanned', value: '10M+' },
        { label: 'Violations Caught', value: '45K' },
        { label: 'False Positive Rate', value: '<0.1%' },
        { label: 'Response Time', value: '0.2s' }
      ]
    },
    {
      id: 'progression',
      title: 'Experience & Progression',
      description: 'Comprehensive leveling system with achievements, leaderboards, and cross-server tracking',
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'from-green-500 to-teal-600',
      details: [
        'Multi-layered XP system for different activities',
        'Achievement system with rare rewards',
        'Server and global leaderboards',
        'Prestige system for advanced players',
        'Seasonal events and challenges',
        'Cross-server character progression'
      ],
      stats: [
        { label: 'XP Earned Daily', value: '2.8M' },
        { label: 'Achievements Unlocked', value: '156K' },
        { label: 'Max Level Players', value: '1.2K' },
        { label: 'Active Seasons', value: '4' }
      ]
    },
    {
      id: 'social',
      title: 'Social Features',
      description: 'Connect players with guilds, parties, friend systems, and community events',
      icon: <Users className="h-8 w-8" />,
      color: 'from-purple-500 to-indigo-600',
      details: [
        'Guild system with ranks and permissions',
        'Party formation for group activities',
        'Friend lists and direct messaging',
        'Community events and tournaments',
        'Player reputation system',
        'Cross-server social connections'
      ],
      stats: [
        { label: 'Active Guilds', value: '3.4K' },
        { label: 'Friendships Formed', value: '89K' },
        { label: 'Events Hosted', value: '12K' },
        { label: 'Community Score', value: '9.7/10' }
      ]
    },
    {
      id: 'integration',
      title: 'Seamless Integration',
      description: 'Easy setup with extensive customization options and third-party integrations',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-cyan-500 to-blue-600',
      details: [
        'One-click bot invitation and setup',
        'Comprehensive dashboard interface',
        'Custom command creation tools',
        'Webhook integrations',
        'API access for developers',
        '24/7 support and documentation'
      ],
      stats: [
        { label: 'Setup Time', value: '<5 min' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'API Calls/Day', value: '1M+' },
        { label: 'Support Response', value: '<2 hours' }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Dragon's Den RPG",
      server: "15,000 members",
      text: "Roleplay Tools transformed our server. The character management system is incredibly detailed, and our players love the cross-server progression!",
      rating: 5
    },
    {
      name: "Fantasy Realms",
      server: "8,500 members",
      text: "The economy system is fantastic. Our players spend hours crafting and trading. The automated moderation keeps everything clean and fair.",
      rating: 5
    },
    {
      name: "Cyberpunk 2177",
      server: "12,000 members",
      text: "Best RPG bot we've ever used. The customization options are endless, and the support team is incredibly helpful and responsive.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-discord-blurple/10 via-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-discord-light to-discord-blurple bg-clip-text text-transparent mb-6">
              Powerful Features
            </h1>
            <p className="text-xl text-discord-light max-w-3xl mx-auto">
              Everything you need to create the ultimate roleplaying experience for your Discord server
            </p>
          </div>

          {/* Feature Showcase */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Feature List */}
              <div className="lg:col-span-1">
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeature(index)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                        activeFeature === index
                          ? 'bg-discord-darker border-discord-blurple shadow-lg'
                          : 'bg-discord-darker/60 border-discord-border hover:border-discord-light'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color}`}>
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white">{feature.title}</h3>
                          <p className="text-sm text-discord-light">{feature.description}</p>
                        </div>
                        <ChevronRight className={`h-5 w-5 text-discord-light transition-transform duration-200 ${
                          activeFeature === index ? 'rotate-90' : ''
                        }`} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Feature Details */}
              <div className="lg:col-span-2">
                <div className="bg-discord-darker border border-discord-border rounded-2xl p-8 shadow-xl">
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${features[activeFeature].color} mb-4`}>
                      {features[activeFeature].icon}
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">
                      {features[activeFeature].title}
                    </h2>
                    <p className="text-lg text-discord-light">
                      {features[activeFeature].description}
                    </p>
                  </div>

                  {/* Feature Details */}
                  <div className="space-y-3 mb-8">
                    {features[activeFeature].details.map((detail, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-discord-blurple rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-discord-light">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  {features[activeFeature].stats && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {features[activeFeature].stats.map((stat, index) => (
                        <div key={index} className="text-center p-3 bg-discord-dark rounded-lg border border-discord-border">
                          <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                          <div className="text-xs text-discord-light">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-discord-light">
              Interactive demonstrations of our most popular features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Character Creation",
                description: "Watch how easy it is to create detailed characters",
                thumbnail: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400",
                duration: "2:34",
                videoUrl: "https://www.youtube.com/watch?v=7rU_KyudGBY"
              },
              {
                title: "Combat System",
                description: "See our advanced battle mechanics in action",
                thumbnail: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
                duration: "3:12",
                videoUrl: "https://www.youtube.com/watch?v=7rU_KyudGBY"
              },
              {
                title: "Economy Trading",
                description: "Explore the comprehensive trading system",
                thumbnail: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=400",
                duration: "4:18",
                videoUrl: "https://www.youtube.com/watch?v=7rU_KyudGBY"
              }
            ].map((demo, index) => (
              <div key={index} className="group bg-discord-darker border border-discord-border rounded-xl overflow-hidden hover:border-discord-blurple transition-all duration-300">
                <div className="relative">
                  <img
                    src={demo.thumbnail}
                    alt={demo.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <a 
                    href={demo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-discord-blurple/90 rounded-full flex items-center justify-center group-hover:bg-discord-blurple group-hover:scale-110 transition-all duration-200">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </a>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {demo.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{demo.title}</h3>
                  <p className="text-discord-light">{demo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-discord-darker/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-discord-light">
              Trusted by thousands of Discord servers worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-discord-darker border border-discord-border rounded-xl p-6 hover:border-discord-blurple transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Award key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-discord-light mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-discord-border pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-discord-light">{testimonial.server}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-discord-blurple/20 to-purple-600/20 border border-discord-blurple/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Server?
            </h2>
            <p className="text-xl text-discord-light mb-8">
              Join thousands of servers already using Roleplay Tools to create amazing experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.com/oauth2/authorize?client_id=roleplaytools"
                className="px-8 py-4 bg-gradient-to-r from-discord-blurple to-purple-600 text-white rounded-xl hover:from-discord-light hover:to-purple-500 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Add to Server
              </a>
              <a
                href="https://discord.gg/roleplaytools"
                className="px-8 py-4 bg-discord-darker border border-discord-border text-white rounded-xl hover:border-discord-blurple transition-all duration-300 font-semibold"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;