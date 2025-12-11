import React from 'react';
import { Users, Calendar, Award, Heart, Github, Twitter, Mail, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & Lead Developer",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "Full-stack developer with 8+ years experience in Discord bot development and RPG systems.",
      social: { github: "alexchen", twitter: "alexchen_dev" }
    },
    {
      name: "Sarah Martinez",
      role: "Community Manager",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "Community building expert who has grown multiple Discord servers to 50K+ members.",
      social: { twitter: "sarah_community", mail: "sarah@roleplaytools.com" }
    },
    {
      name: "David Kim",
      role: "UI/UX Designer",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "Design specialist focused on creating intuitive interfaces for gaming communities.",
      social: { github: "davidkim", twitter: "david_designs" }
    },
    {
      name: "Emma Thompson",
      role: "Backend Engineer",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      bio: "Database and infrastructure expert ensuring 99.9% uptime for all our services.",
      social: { github: "emmathompson", mail: "emma@roleplaytools.com" }
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Project Genesis",
      description: "Started as a small Discord bot for a single RPG server with 200 members",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      year: "2021",
      title: "First 1,000 Servers",
      description: "Reached our first major milestone with advanced character management features",
      icon: <Users className="h-6 w-6" />
    },
    {
      year: "2022",
      title: "Economy System Launch",
      description: "Introduced comprehensive trading and crafting systems with cross-server support",
      icon: <Award className="h-6 w-6" />
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Added smart moderation and automated content filtering powered by AI",
      icon: <Heart className="h-6 w-6" />
    },
    {
      year: "2024",
      title: "50K+ Servers",
      description: "Became the leading RPG bot on Discord with advanced analytics and dashboards",
      icon: <Award className="h-6 w-6" />
    }
  ];

  const stats = [
    { label: "Years of Development", value: "4+", icon: <Calendar className="h-8 w-8" /> },
    { label: "Team Members", value: "12", icon: <Users className="h-8 w-8" /> },
    { label: "Code Commits", value: "15K+", icon: <Github className="h-8 w-8" /> },
    { label: "Community Love", value: "99%", icon: <Heart className="h-8 w-8" /> }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-discord-blurple/10 via-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-discord-light to-discord-blurple bg-clip-text text-transparent mb-6">
              About Roleplay Tools
            </h1>
            <p className="text-xl text-discord-light max-w-3xl mx-auto">
              We're passionate developers and gamers dedicated to creating the ultimate roleplaying experience for Discord communities worldwide
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-discord-darker/60 backdrop-blur-sm border border-discord-border rounded-xl p-6 text-center hover:border-discord-blurple transition-all duration-300 group">
                <div className="flex items-center justify-center mb-3 text-discord-blurple group-hover:scale-110 transition-transform duration-200">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-discord-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-xl text-discord-light">
                From a simple idea to the most advanced RPG bot on Discord
              </p>
            </div>

            <div className="bg-discord-darker border border-discord-border rounded-2xl p-8 md:p-12 mb-12">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-discord-light mb-6">
                  Roleplay Tools began in 2020 when our founder, Alex Chen, was running a small D&D server with friends. 
                  Frustrated by the lack of comprehensive character management tools, he started coding a simple bot to track 
                  character stats and inventory.
                </p>
                <p className="text-lg text-discord-light mb-6">
                  What started as a weekend project quickly grew into something much bigger. As word spread through the RPG 
                  community, more servers began requesting the bot. We realized there was a massive need for professional-grade 
                  roleplaying tools that could scale across thousands of servers while maintaining the personal touch that makes 
                  each community unique.
                </p>
                <p className="text-lg text-discord-light">
                  Today, Roleplay Tools powers over 50,000 Discord servers, facilitating millions of character interactions, 
                  trades, and adventures every month. Our mission remains the same: to provide the most comprehensive, 
                  user-friendly, and reliable RPG tools for Discord communities of all sizes.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h3>
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-discord-blurple to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      {milestone.icon}
                    </div>
                  </div>
                  <div className="flex-1 bg-discord-darker/60 border border-discord-border rounded-xl p-6 group-hover:border-discord-blurple transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl font-bold text-discord-blurple">{milestone.year}</span>
                      <h4 className="text-xl font-semibold text-white">{milestone.title}</h4>
                    </div>
                    <p className="text-discord-light">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-discord-darker/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-discord-light">
              The passionate individuals behind Roleplay Tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-discord-darker border border-discord-border rounded-xl p-6 text-center hover:border-discord-blurple transition-all duration-300 group">
                <div className="relative mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto border-4 border-discord-blurple group-hover:scale-110 transition-transform duration-200"
                  />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-discord-darker"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-discord-blurple font-medium mb-3">{member.role}</p>
                <p className="text-sm text-discord-light mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {member.social.github && (
                    <a href={`https://github.com/${member.social.github}`} className="text-discord-light hover:text-white transition-colors duration-200">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={`https://twitter.com/${member.social.twitter}`} className="text-discord-light hover:text-white transition-colors duration-200">
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.mail && (
                    <a href={`mailto:${member.social.mail}`} className="text-discord-light hover:text-white transition-colors duration-200">
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-discord-light">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Community First",
                description: "Every feature we build is designed with our community's needs in mind. We listen, adapt, and evolve based on your feedback.",
                icon: <Users className="h-8 w-8" />,
                color: "from-blue-500 to-purple-600"
              },
              {
                title: "Reliability",
                description: "Your adventures shouldn't be interrupted by downtime. We maintain 99.9% uptime with robust infrastructure and monitoring.",
                icon: <Award className="h-8 w-8" />,
                color: "from-green-500 to-teal-600"
              },
              {
                title: "Innovation",
                description: "We're constantly pushing the boundaries of what's possible in Discord RPG tools, always staying ahead of the curve.",
                icon: <Heart className="h-8 w-8" />,
                color: "from-red-500 to-pink-600"
              }
            ].map((value, index) => (
              <div key={index} className="bg-discord-darker border border-discord-border rounded-xl p-8 hover:border-discord-blurple transition-all duration-300 group text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-discord-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-discord-blurple/20 to-purple-600/20 border border-discord-blurple/30 rounded-2xl p-12">
            <MapPin className="h-12 w-12 text-discord-blurple mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Want to Get in Touch?
            </h2>
            <p className="text-xl text-discord-light mb-8">
              We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-discord-blurple to-purple-600 text-white rounded-xl hover:from-discord-light hover:to-purple-500 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Contact Us
              </a>
              <a
                href="https://discord.gg/roleplaytools"
                className="px-8 py-4 bg-discord-darker border border-discord-border text-white rounded-xl hover:border-discord-blurple transition-all duration-300 font-semibold"
              >
                Join Our Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;