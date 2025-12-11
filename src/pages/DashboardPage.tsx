import React, { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { 
  User, 
  Trophy, 
  Coins, 
  Sword, 
  Shield, 
  TrendingUp, 
  Calendar,
  Server,
  Users,
  Activity,
  Settings,
  Download,
  Bell,
  Star
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('overview');
  const [userStats, setUserStats] = useState({
    level: 47,
    xp: 12847,
    nextLevelXp: 15000,
    gold: 2847,
    gems: 156,
    charactersCreated: 23,
    serversJoined: 8,
    achievementsUnlocked: 34,
    totalAchievements: 120,
    lastActive: '2 hours ago'
  });

  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: "Aria Shadowblade",
      class: "Rogue",
      level: 15,
      server: "Dragon's Den RPG",
      lastPlayed: "1 hour ago",
      avatar: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 2,
      name: "Thorin Ironforge",
      class: "Warrior",
      level: 12,
      server: "Fantasy Realms",
      lastPlayed: "3 hours ago",
      avatar: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 3,
      name: "Luna Starweaver",
      class: "Mage",
      level: 18,
      server: "Mystic Worlds",
      lastPlayed: "1 day ago",
      avatar: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ]);

  const [recentActivity, setRecentActivity] = useState([
    { action: "Completed quest 'Dragon's Lair'", character: "Aria Shadowblade", time: "2 hours ago", xp: 500 },
    { action: "Traded Dragon Sword for 1000 gold", character: "Thorin Ironforge", time: "5 hours ago", gold: 1000 },
    { action: "Leveled up to Level 18", character: "Luna Starweaver", time: "1 day ago", xp: 0 },
    { action: "Unlocked achievement 'Master Trader'", character: "Thorin Ironforge", time: "2 days ago", achievement: true },
    { action: "Created new character", character: "Zara Nightwhisper", time: "3 days ago", new: true }
  ]);

  // Redirect if not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const progressPercentage = (userStats.xp / userStats.nextLevelXp) * 100;

  return (
    <div className="min-h-screen pt-20 pb-16 bg-discord-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-discord-blurple to-purple-600 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Welcome back, {user.name || user.email.split('@')[0]}!</h1>
              <p className="text-discord-light">Last active: {userStats.lastActive}</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-discord-darker border border-discord-border rounded-xl p-4 text-center">
              <Trophy className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{userStats.level}</div>
              <div className="text-sm text-discord-light">Level</div>
            </div>
            <div className="bg-discord-darker border border-discord-border rounded-xl p-4 text-center">
              <Coins className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{userStats.gold.toLocaleString()}</div>
              <div className="text-sm text-discord-light">Gold</div>
            </div>
            <div className="bg-discord-darker border border-discord-border rounded-xl p-4 text-center">
              <User className="h-6 w-6 text-discord-blurple mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{userStats.charactersCreated}</div>
              <div className="text-sm text-discord-light">Characters</div>
            </div>
            <div className="bg-discord-darker border border-discord-border rounded-xl p-4 text-center">
              <Star className="h-6 w-6 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{userStats.achievementsUnlocked}</div>
              <div className="text-sm text-discord-light">Achievements</div>
            </div>
          </div>

          {/* XP Progress */}
          <div className="bg-discord-darker border border-discord-border rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">Experience Progress</h3>
              <span className="text-sm text-discord-light">{userStats.xp.toLocaleString()} / {userStats.nextLevelXp.toLocaleString()} XP</span>
            </div>
            <div className="w-full bg-discord-dark rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-discord-blurple to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-discord-light">
              {(userStats.nextLevelXp - userStats.xp).toLocaleString()} XP until level {userStats.level + 1}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap border-b border-discord-border mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: <Activity className="h-4 w-4" /> },
            { id: 'characters', label: 'Characters', icon: <User className="h-4 w-4" /> },
            { id: 'achievements', label: 'Achievements', icon: <Trophy className="h-4 w-4" /> },
            { id: 'settings', label: 'Settings', icon: <Settings className="h-4 w-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 border-b-2 transition-all duration-200 ${
                activeTab === tab.id
                  ? 'border-discord-blurple text-discord-blurple'
                  : 'border-transparent text-discord-light hover:text-white hover:border-discord-light'
              }`}
            >
              {tab.icon}
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="bg-discord-darker border border-discord-border rounded-xl p-4 hover:border-discord-blurple transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-discord-blurple to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        {activity.achievement ? <Trophy className="h-4 w-4 text-white" /> :
                         activity.new ? <User className="h-4 w-4 text-white" /> :
                         activity.gold ? <Coins className="h-4 w-4 text-white" /> :
                         <Sword className="h-4 w-4 text-white" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{activity.action}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-discord-light">{activity.character}</span>
                          <span className="text-sm text-discord-light">{activity.time}</span>
                          {activity.xp && (
                            <span className="text-sm text-green-400">+{activity.xp} XP</span>
                          )}
                          {activity.gold && (
                            <span className="text-sm text-yellow-400">+{activity.gold} Gold</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              {/* Server Stats */}
              <div className="bg-discord-darker border border-discord-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Server Statistics</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-discord-light">Servers Joined</span>
                    <span className="text-white font-medium">{userStats.serversJoined}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-discord-light">Total Members</span>
                    <span className="text-white font-medium">127,439</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-discord-light">Global Rank</span>
                    <span className="text-white font-medium">#2,847</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-discord-darker border border-discord-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-2 px-4 py-2 bg-discord-blurple/20 text-discord-blurple hover:bg-discord-blurple hover:text-white rounded-lg transition-all duration-200">
                    <Download className="h-4 w-4" />
                    <span>Export Data</span>
                  </button>
                  <button className="w-full flex items-center space-x-2 px-4 py-2 bg-discord-dark border border-discord-border text-discord-light hover:text-white hover:border-discord-blurple rounded-lg transition-all duration-200">
                    <Bell className="h-4 w-4" />
                    <span>Notifications</span>
                  </button>
                  <button className="w-full flex items-center space-x-2 px-4 py-2 bg-discord-dark border border-discord-border text-discord-light hover:text-white hover:border-discord-blurple rounded-lg transition-all duration-200">
                    <Settings className="h-4 w-4" />
                    <span>Account Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'characters' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Your Characters</h2>
              <button className="px-4 py-2 bg-gradient-to-r from-discord-blurple to-purple-600 text-white rounded-lg hover:from-discord-light hover:to-purple-500 transition-all duration-200">
                Create New Character
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {characters.map((character) => (
                <div key={character.id} className="bg-discord-darker border border-discord-border rounded-xl p-6 hover:border-discord-blurple transition-all duration-300 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={character.avatar}
                      alt={character.name}
                      className="w-12 h-12 rounded-full border-2 border-discord-blurple group-hover:scale-110 transition-transform duration-200"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{character.name}</h3>
                      <p className="text-discord-light text-sm">{character.class} • Level {character.level}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-discord-light">Server</span>
                      <span className="text-white">{character.server}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-discord-light">Last Played</span>
                      <span className="text-white">{character.lastPlayed}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-discord-border">
                    <button className="w-full px-3 py-2 bg-discord-blurple/20 text-discord-blurple hover:bg-discord-blurple hover:text-white rounded-lg transition-all duration-200 text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Achievements</h2>
              <div className="text-discord-light">
                {userStats.achievementsUnlocked} / {userStats.totalAchievements} unlocked
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "First Steps", description: "Create your first character", unlocked: true, rarity: "common" },
                { name: "Wealthy Trader", description: "Accumulate 10,000 gold", unlocked: true, rarity: "rare" },
                { name: "Master Adventurer", description: "Reach level 50", unlocked: false, rarity: "epic" },
                { name: "Dragon Slayer", description: "Defeat an Ancient Dragon", unlocked: true, rarity: "legendary" },
                { name: "Social Butterfly", description: "Join 10 different servers", unlocked: false, rarity: "rare" },
                { name: "Completionist", description: "Unlock all achievements", unlocked: false, rarity: "mythic" }
              ].map((achievement, index) => (
                <div key={index} className={`bg-discord-darker border rounded-xl p-6 transition-all duration-300 ${
                  achievement.unlocked 
                    ? 'border-discord-blurple hover:border-discord-light' 
                    : 'border-discord-border opacity-60'
                }`}>
                  <div className="flex items-center space-x-3 mb-3">
                    <Trophy className={`h-6 w-6 ${
                      achievement.unlocked ? 'text-yellow-400' : 'text-discord-light'
                    }`} />
                    <div>
                      <h3 className={`font-semibold ${achievement.unlocked ? 'text-white' : 'text-discord-light'}`}>
                        {achievement.name}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded ${
                        achievement.rarity === 'common' ? 'bg-gray-500/20 text-gray-400' :
                        achievement.rarity === 'rare' ? 'bg-blue-500/20 text-blue-400' :
                        achievement.rarity === 'epic' ? 'bg-purple-500/20 text-purple-400' :
                        achievement.rarity === 'legendary' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-pink-500/20 text-pink-400'
                      }`}>
                        {achievement.rarity}
                      </span>
                    </div>
                  </div>
                  <p className={`text-sm ${achievement.unlocked ? 'text-discord-light' : 'text-discord-light/60'}`}>
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
            <div className="space-y-6">
              <div className="bg-discord-darker border border-discord-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Profile Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Email</label>
                    <input
                      type="email"
                      value={user.email}
                      disabled
                      className="w-full px-4 py-2 bg-discord-dark border border-discord-border rounded-lg text-discord-light"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Display Name</label>
                    <input
                      type="text"
                      value={user.name || ''}
                      className="w-full px-4 py-2 bg-discord-dark border border-discord-border rounded-lg text-white focus:outline-none focus:border-discord-blurple"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-discord-darker border border-discord-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Privacy Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white">Show profile to other users</p>
                      <p className="text-sm text-discord-light">Allow other users to view your profile and stats</p>
                    </div>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white">Cross-server character sync</p>
                      <p className="text-sm text-discord-light">Sync characters across all servers</p>
                    </div>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="bg-discord-darker border border-discord-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Data Management</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-discord-blurple/20 text-discord-blurple hover:bg-discord-blurple hover:text-white rounded-lg transition-all duration-200">
                    <Download className="h-4 w-4" />
                    <span>Export All Data</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-all duration-200">
                    <span>Delete Account</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;