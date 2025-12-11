import React, { useState, useMemo } from 'react';
import { Search, Filter, Code, Play, Copy, Check } from 'lucide-react';

interface Command {
  id: string;
  name: string;
  description: string;
  category: string;
  syntax: string;
  example: string;
  output: string;
  permissions?: string;
}

const CommandsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeCommand, setActiveCommand] = useState<string | null>(null);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const commands: Command[] = [
    {
      id: '1',
      name: '/char create',
      description: 'Create a new character with custom stats and appearance',
      category: 'Character',
      syntax: '/char create <name> [class] [level]',
      example: '/char create "Aria Shadowblade" rogue 1',
      output: '✅ Character "Aria Shadowblade" created successfully!\n📊 Level 1 Rogue\n⚡ HP: 100 | MP: 50 | XP: 0/100',
      permissions: 'Everyone'
    },
    {
      id: '2',
      name: '/char stats',
      description: 'View detailed character statistics and progression',
      category: 'Character',
      syntax: '/char stats [character]',
      example: '/char stats "Aria Shadowblade"',
      output: '📊 Aria Shadowblade (Level 5 Rogue)\n❤️ HP: 250/250 | 💙 MP: 120/120\n⭐ XP: 750/1000 | 💰 Gold: 1,247\n🗡️ ATK: 85 | 🛡️ DEF: 42 | ⚡ SPD: 78',
      permissions: 'Everyone'
    },
    {
      id: '3',
      name: '/battle pvp',
      description: 'Initiate a PvP battle between two characters',
      category: 'Combat',
      syntax: '/battle pvp <attacker> <defender>',
      example: '/battle pvp "Aria" "Thorin"',
      output: '⚔️ Battle Started!\n🥊 Aria attacks Thorin for 35 damage!\n🛡️ Thorin counterattacks for 28 damage!\n🎯 Aria uses Shadow Strike - Critical Hit! 67 damage!\n👑 Aria wins the battle!',
      permissions: 'Everyone'
    },
    {
      id: '4',
      name: '/economy balance',
      description: 'Check your current balance and currency',
      category: 'Economy',
      syntax: '/economy balance [user]',
      example: '/economy balance',
      output: '💰 Your Balance:\n🪙 Gold: 1,247\n💎 Gems: 23\n🎫 Tokens: 156\n📈 Net Worth: 2,891 gold',
      permissions: 'Everyone'
    },
    {
      id: '5',
      name: '/trade offer',
      description: 'Create a trade offer with another player',
      category: 'Economy',
      syntax: '/trade offer <user> <items>',
      example: '/trade offer @player "Dragon Sword" 500g',
      output: '🤝 Trade offer sent to @player\n📦 Your offer: Dragon Sword + 500 gold\n⏳ Waiting for response...\n✅ Trade completed successfully!',
      permissions: 'Everyone'
    },
    {
      id: '6',
      name: '/mod warn',
      description: 'Issue a warning to a user with optional reason',
      category: 'Moderation',
      syntax: '/mod warn <user> [reason]',
      example: '/mod warn @user "Spam in chat"',
      output: '⚠️ Warning issued to @user\n📝 Reason: Spam in chat\n📊 Total warnings: 2/3\n🔔 User has been notified',
      permissions: 'Moderator'
    },
    {
      id: '7',
      name: '/quest start',
      description: 'Begin a new quest or adventure',
      category: 'Adventure',
      syntax: '/quest start <quest_id> [difficulty]',
      example: '/quest start "dragon_lair" hard',
      output: '🐉 Quest Started: Dragon\'s Lair\n📍 Location: Volcanic Peaks\n⚡ Difficulty: Hard\n🎯 Objective: Defeat the Ancient Red Dragon\n🏆 Reward: 1000 XP + Legendary Loot',
      permissions: 'Everyone'
    },
    {
      id: '8',
      name: '/craft item',
      description: 'Craft items using materials from your inventory',
      category: 'Crafting',
      syntax: '/craft item <recipe> [quantity]',
      example: '/craft item "healing_potion" 5',
      output: '⚒️ Crafting: Healing Potion (x5)\n📦 Materials used: 5x Red Herbs, 5x Crystal Water\n✅ Successfully crafted 5x Healing Potion!\n📈 Crafting XP: +25',
      permissions: 'Everyone'
    }
  ];

  const categories = ['all', 'Character', 'Combat', 'Economy', 'Moderation', 'Adventure', 'Crafting'];

  const filteredCommands = useMemo(() => {
    return commands.filter(command => {
      const matchesSearch = command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          command.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || command.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, commands]);

  const copyToClipboard = async (text: string, commandId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(commandId);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const simulateCommand = (command: Command) => {
    setActiveCommand(command.id);
    // Simulate command execution delay
    setTimeout(() => {
      setActiveCommand(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-discord-blurple bg-clip-text text-transparent mb-4">
            Command Showcase
          </h1>
          <p className="text-xl text-discord-light max-w-2xl mx-auto">
            Explore our comprehensive command library with interactive previews and examples
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-discord-light" />
            <input
              type="text"
              placeholder="Search commands..."
              className="w-full pl-10 pr-4 py-3 bg-discord-darker border border-discord-border rounded-xl text-white placeholder-discord-light focus:outline-none focus:border-discord-blurple focus:ring-1 focus:ring-discord-blurple transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-discord-light" />
            <select
              className="pl-10 pr-8 py-3 bg-discord-darker border border-discord-border rounded-xl text-white focus:outline-none focus:border-discord-blurple focus:ring-1 focus:ring-discord-blurple transition-all duration-200 appearance-none cursor-pointer"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-discord-darker">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Commands Grid */}
        <div className="grid gap-6">
          {filteredCommands.map((command) => (
            <div key={command.id} className="bg-discord-darker border border-discord-border rounded-2xl p-6 hover:border-discord-blurple transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Command Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{command.name}</h3>
                        <span className="px-2 py-1 bg-discord-blurple/20 text-discord-blurple text-xs font-medium rounded-full">
                          {command.category}
                        </span>
                        {command.permissions && (
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full">
                            {command.permissions}
                          </span>
                        )}
                      </div>
                      <p className="text-discord-light mb-3">{command.description}</p>
                    </div>
                  </div>

                  {/* Syntax */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-white">Syntax</h4>
                      <button
                        onClick={() => copyToClipboard(command.syntax, command.id)}
                        className="flex items-center space-x-1 text-xs text-discord-light hover:text-white transition-colors duration-200"
                      >
                        {copiedCommand === command.id ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                        <span>{copiedCommand === command.id ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                    <div className="bg-discord-dark border border-discord-border rounded-lg p-3 font-mono text-sm">
                      <code className="text-green-400">{command.syntax}</code>
                    </div>
                  </div>

                  {/* Example */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Example</h4>
                    <div className="bg-discord-dark border border-discord-border rounded-lg p-3 font-mono text-sm">
                      <code className="text-blue-400">{command.example}</code>
                    </div>
                  </div>

                  {/* Test Button */}
                  <button
                    onClick={() => simulateCommand(command)}
                    disabled={activeCommand === command.id}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-discord-blurple to-purple-600 text-white rounded-lg hover:from-discord-light hover:to-purple-500 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Play className={`h-4 w-4 ${activeCommand === command.id ? 'animate-spin' : ''}`} />
                    <span>
                      {activeCommand === command.id ? 'Executing...' : 'Test Command'}
                    </span>
                  </button>
                </div>

                {/* Output Preview */}
                <div className="lg:w-96">
                  <div className="flex items-center space-x-2 mb-3">
                    <Code className="h-4 w-4 text-discord-light" />
                    <h4 className="text-sm font-semibold text-white">Output Preview</h4>
                  </div>
                  <div className="bg-discord-dark border border-discord-border rounded-lg p-4 min-h-[120px] relative overflow-hidden">
                    {activeCommand === command.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-discord-blurple/10 to-purple-600/10 animate-pulse"></div>
                    )}
                    <div className="font-mono text-sm whitespace-pre-line text-discord-light relative z-10">
                      {command.output}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCommands.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No commands found</h3>
            <p className="text-discord-light">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommandsPage;