import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface User {
  email: string;
  name?: string;
  discordId?: string;
  discordUsername?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  loginWithDiscord: () => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  loginWithDiscord: async () => {},
  logout: () => {},
  isLoading: false
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session on mount
    const storedUser = localStorage.getItem('roleplay-tools-user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('roleplay-tools-user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // For demo purposes, accept any email/password combination
    const userData: User = {
      email,
      name: email.split('@')[0]
    };
    
    setUser(userData);
    localStorage.setItem('roleplay-tools-user', JSON.stringify(userData));
  };

  const loginWithDiscord = async () => {
    // Simulate Discord OAuth flow
    // In a real app, this would redirect to Discord OAuth
    const mockDiscordUser: User = {
      email: 'discord.user@example.com',
      name: 'DiscordUser#1234',
      discordId: '123456789012345678',
      discordUsername: 'DiscordUser',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    };
    
    setUser(mockDiscordUser);
    localStorage.setItem('roleplay-tools-user', JSON.stringify(mockDiscordUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('roleplay-tools-user');
  };

  const value = {
    user,
    login,
    loginWithDiscord,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};