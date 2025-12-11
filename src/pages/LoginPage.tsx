import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Bot, Sparkles, MessageSquare } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { user, login, loginWithDiscord } = useContext(AuthContext);

  // Redirect if already logged in
  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, accept any email/password combination
      if (email && password) {
        login(email, password);
      } else {
        setError('Please enter both email and password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDiscordLogin = async () => {
    setIsLoading(true);
    setError('');

    try {
      await loginWithDiscord();
    } catch (err) {
      setError('Discord login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-discord-blurple/5 via-purple-900/5 to-pink-900/5"></div>
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <Sparkles className="w-4 h-4 text-discord-blurple opacity-20" />
          </div>
        ))}
      </div>

      <div className="relative max-w-md w-full mx-4">
        <div className="bg-discord-darker/90 backdrop-blur-xl border border-discord-border rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4">
              <div className="absolute -inset-2 bg-gradient-to-r from-discord-blurple to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative w-16 h-16 bg-gradient-to-r from-discord-blurple to-purple-600 rounded-2xl flex items-center justify-center">
                <Bot className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-discord-blurple bg-clip-text text-transparent mb-2">
              Welcome Back
            </h1>
            <p className="text-discord-light">
              Sign in to access your Roleplay Tools dashboard
            </p>
          </div>

          {/* Demo Notice */}
          <div className="bg-discord-blurple/10 border border-discord-blurple/20 rounded-lg p-3 mb-6">
            <p className="text-sm text-discord-blurple text-center">
              <strong>Demo:</strong> Use any email and password to login
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-discord-light" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-discord-dark border border-discord-border rounded-xl text-white placeholder-discord-light focus:outline-none focus:border-discord-blurple focus:ring-1 focus:ring-discord-blurple transition-all duration-200"
                  placeholder="admin@roleplaytools.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-discord-light" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-discord-dark border border-discord-border rounded-xl text-white placeholder-discord-light focus:outline-none focus:border-discord-blurple focus:ring-1 focus:ring-discord-blurple transition-all duration-200"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-discord-light hover:text-white transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-discord-blurple to-purple-600 text-white rounded-xl hover:from-discord-light hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-discord-blurple focus:ring-offset-2 focus:ring-offset-discord-darker transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-semibold"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Discord Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-discord-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-discord-darker text-discord-light">Or continue with</span>
              </div>
            </div>
            <button
              onClick={handleDiscordLogin}
              disabled={isLoading}
              className="mt-4 w-full flex items-center justify-center space-x-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-semibold"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Login with Discord</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <div className="border-t border-discord-border pt-6">
              <p className="text-sm text-discord-light mb-4">
                Don't have an account? Join our community!
              </p>
              <a
                href="https://discord.gg/roleplaytools"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-discord-dark border border-discord-border text-discord-light hover:text-white hover:border-discord-blurple rounded-lg transition-all duration-200"
              >
                <Bot className="h-4 w-4" />
                <span>Join Discord Server</span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-discord-light">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;