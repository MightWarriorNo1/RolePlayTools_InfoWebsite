import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Users, Server, Zap, Shield, Gamepad2, Coins, ArrowRight, Star, TrendingUp } from 'lucide-react';

const HomePage: React.FC = () => {
  const [stats, setStats] = useState({
    members: 3247,
    servers: 43891,
    commands: 156,
    uptime: 99.8
  });

  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "Character Management",
      description: "Create detailed characters with stats, inventory, and progression tracking",
      icon: <Gamepad2 className="h-8 w-8" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Economy System",
      description: "Complete trading, crafting, and marketplace with cross-server support",
      icon: <Coins className="h-8 w-8" />,
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Advanced Moderation",
      description: "Automated moderation with custom rules and detailed logging",
      icon: <Shield className="h-8 w-8" />,
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Experience Tracking",
      description: "Level up your characters and unlock achievements across servers",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-green-500 to-teal-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        members: prev.members + Math.floor(Math.random() * 3),
        servers: prev.servers + Math.floor(Math.random() * 2),
        commands: prev.commands,
        uptime: prev.uptime
      }));
    }, 3000);

    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(featureInterval);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-discord-blurple/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              <div className="w-1 h-1 bg-discord-blurple rounded-full opacity-60"></div>
            </div>
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-discord-blurple to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <img
                src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Roleplay Tools Logo"
                className="relative w-24 h-24 rounded-full border-4 border-discord-blurple"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-discord-light to-discord-blurple bg-clip-text text-transparent mb-6">
              Roleplay Tools
            </h1>
            <p className="text-xl md:text-2xl text-discord-light mb-8 max-w-3xl mx-auto">
              The most advanced Discord bot for roleplaying servers with character management, 
              economy systems, and cross-server synchronization
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="https://discord.gg/roleplaytools"
                className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-discord-blurple to-purple-600 text-white rounded-xl hover:from-discord-light hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <ExternalLink className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
                <span className="font-semibold">Join Discord Server</span>
              </a>
              <Link
                to="/commands"
                className="group flex items-center space-x-2 px-8 py-4 bg-discord-darker/60 border border-discord-border text-white rounded-xl hover:bg-discord-darker hover:border-discord-blurple transition-all duration-300 backdrop-blur-sm"
              >
                <span className="font-semibold">Explore Commands</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Active Members', value: stats.members.toLocaleString(), icon: <Users className="h-6 w-6" /> },
                { label: 'Servers', value: stats.servers.toLocaleString(), icon: <Server className="h-6 w-6" /> },
                { label: 'Commands', value: stats.commands.toLocaleString(), icon: <Zap className="h-6 w-6" /> },
                { label: 'Uptime', value: `${stats.uptime}%`, icon: <Star className="h-6 w-6" /> }
              ].map((stat, index) => (
                <div key={index} className="group bg-discord-darker/40 backdrop-blur-sm border border-discord-border rounded-xl p-6 hover:border-discord-blurple transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-center mb-2 text-discord-blurple group-hover:scale-110 transition-transform duration-200">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-discord-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="py-20 bg-discord-darker/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features for Your Server
            </h2>
            <p className="text-xl text-discord-light max-w-2xl mx-auto">
              Everything you need to create an immersive roleplaying experience
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-discord-darker to-discord-dark border border-discord-border rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${features[currentFeature].color} mb-6`}>
                    {features[currentFeature].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {features[currentFeature].title}
                  </h3>
                  <p className="text-lg text-discord-light mb-6">
                    {features[currentFeature].description}
                  </p>
                  <Link
                    to="/features"
                    className="inline-flex items-center space-x-2 text-discord-blurple hover:text-discord-light transition-colors duration-200 group"
                  >
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
                <div className="relative">
                  <div className="bg-discord-dark border border-discord-border rounded-xl p-6 font-mono text-sm">
                    <div className="text-green-400 mb-2">$ /char create</div>
                    <div className="text-discord-light mb-1">Creating character: "Aria Shadowblade"</div>
                    <div className="text-discord-light mb-1">Class: Rogue</div>
                    <div className="text-discord-light mb-1">Level: 1</div>
                    <div className="text-green-400">✅ Character created successfully!</div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentFeature
                      ? 'bg-discord-blurple scale-125'
                      : 'bg-discord-border hover:bg-discord-light'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discord Widget Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-discord-light">
              Connect with thousands of roleplayers and get support 24/7
            </p>
          </div>

          <div className="max-w-md mx-auto bg-discord-darker border border-discord-border rounded-2xl p-6 shadow-xl">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Live Activity</span>
              </div>
              
              <div className="space-y-3 mb-6">
                {[
                  { user: "DragonMaster47", action: "created new character", time: "2m ago" },
                  { user: "MysticWizard", action: "completed quest", time: "4m ago" },
                  { user: "ShadowRogue", action: "traded items", time: "7m ago" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 text-left">
                    <div className="w-8 h-8 bg-gradient-to-r from-discord-blurple to-purple-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {activity.user[0]}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-white">{activity.user}</div>
                      <div className="text-xs text-discord-light">{activity.action}</div>
                    </div>
                    <div className="text-xs text-discord-light">{activity.time}</div>
                  </div>
                ))}
              </div>

              <a
                href="https://discord.gg/roleplaytools"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-discord-blurple to-purple-600 text-white rounded-xl hover:from-discord-light hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="font-semibold">Join Server</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;