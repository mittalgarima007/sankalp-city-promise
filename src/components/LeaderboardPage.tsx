import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface LeaderboardPageProps {
  onNavigate: (page: string) => void;
}

const LeaderboardPage = ({ onNavigate }: LeaderboardPageProps) => {
  const leaderboard = [
    { 
      rank: 1, 
      name: 'Priya Sharma', 
      points: 2847, 
      badge: '🏆 City Champion', 
      issues: 42, 
      resolved: 38, 
      avatar: '👩‍💼' 
    },
    { 
      rank: 2, 
      name: 'Rajesh Kumar', 
      points: 2156, 
      badge: '🥈 Community Leader', 
      issues: 35, 
      resolved: 29, 
      avatar: '👨‍💻' 
    },
    { 
      rank: 3, 
      name: 'Anita Patel', 
      points: 1923, 
      badge: '🥉 Civic Hero', 
      issues: 31, 
      resolved: 28, 
      avatar: '👩‍🏫' 
    },
    { 
      rank: 4, 
      name: 'Vikram Singh', 
      points: 1678, 
      badge: '⭐ Star Reporter', 
      issues: 28, 
      resolved: 22, 
      avatar: '👨‍🚀' 
    },
    { 
      rank: 5, 
      name: 'Meera Reddy', 
      points: 1542, 
      badge: '🌟 Rising Star', 
      issues: 25, 
      resolved: 21, 
      avatar: '👩‍⚕️' 
    },
    { 
      rank: 6, 
      name: 'Amit Joshi', 
      points: 1398, 
      badge: '📈 Active Citizen', 
      issues: 22, 
      resolved: 18, 
      avatar: '👨‍🎓' 
    },
  ];

  const badgeSystem = [
    { name: 'New Citizen', points: '0-99', icon: '🌱', color: 'bg-muted' },
    { name: 'Active Citizen', points: '100-499', icon: '📈', color: 'bg-secondary' },
    { name: 'Rising Star', points: '500-999', icon: '🌟', color: 'bg-accent' },
    { name: 'Star Reporter', points: '1000-1499', icon: '⭐', color: 'bg-warning' },
    { name: 'Civic Hero', points: '1500-1999', icon: '🥉', color: 'bg-warning' },
    { name: 'Community Leader', points: '2000-2499', icon: '🥈', color: 'bg-muted' },
    { name: 'City Champion', points: '2500+', icon: '🏆', color: 'bg-primary' },
  ];

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
      case 2: return 'bg-gradient-to-r from-gray-300 to-gray-500';
      case 3: return 'bg-gradient-to-r from-orange-400 to-orange-600';
      default: return 'bg-gradient-primary';
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 pb-20">
      {/* Header */}
      <div className="bg-gradient-hero text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => onNavigate('home')}
            className="mb-4 text-white/80 hover:text-white"
          >
            ← Back to Home
          </button>
          <h1 className="text-3xl font-bold">🏆 Leaderboard</h1>
          <p className="text-white/90 mt-2">Top contributors making a difference</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Current User Stats */}
        <Card className="border-0 shadow-card bg-gradient-accent text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <h3 className="font-bold text-lg">Your Rank: #12</h3>
                  <p className="text-white/90">Keep going! You're doing great!</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">847</div>
                <div className="text-white/90 text-sm">points</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top 3 Podium */}
        <Card className="border-0 shadow-elevated">
          <CardHeader>
            <CardTitle className="text-center">🏆 Top Contributors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-end gap-4 mb-6">
              {/* 2nd Place */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full flex items-center justify-center text-2xl mb-2">
                  {leaderboard[1].avatar}
                </div>
                <div className="text-lg font-bold">🥈</div>
                <div className="text-sm font-medium">{leaderboard[1].name.split(' ')[0]}</div>
                <div className="text-sm text-muted-foreground">{leaderboard[1].points} pts</div>
              </div>

              {/* 1st Place */}
              <div className="text-center -mt-4">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-3xl mb-2">
                  {leaderboard[0].avatar}
                </div>
                <div className="text-2xl">👑</div>
                <div className="text-lg font-bold">{leaderboard[0].name.split(' ')[0]}</div>
                <div className="text-sm text-muted-foreground">{leaderboard[0].points} pts</div>
              </div>

              {/* 3rd Place */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-2xl mb-2">
                  {leaderboard[2].avatar}
                </div>
                <div className="text-lg font-bold">🥉</div>
                <div className="text-sm font-medium">{leaderboard[2].name.split(' ')[0]}</div>
                <div className="text-sm text-muted-foreground">{leaderboard[2].points} pts</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Full Leaderboard */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle>📊 Full Leaderboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaderboard.map((user) => (
                <div 
                  key={user.rank}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:shadow-card transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${getRankColor(user.rank)} rounded-full flex items-center justify-center text-white font-bold`}>
                    #{user.rank}
                  </div>
                  
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-xl">
                    {user.avatar}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">{user.badge}</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-lg text-primary">{user.points}</div>
                    <div className="text-sm text-muted-foreground">points</div>
                  </div>
                  
                  <div className="text-right text-sm text-muted-foreground">
                    <div>{user.issues} issues</div>
                    <div>{user.resolved} resolved</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Badge System */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle>🏅 Badge System</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {badgeSystem.map((badge) => (
                <div 
                  key={badge.name}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border"
                >
                  <div className={`w-10 h-10 ${badge.color} rounded-full flex items-center justify-center text-white`}>
                    {badge.icon}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{badge.name}</div>
                    <div className="text-sm text-muted-foreground">{badge.points} points</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="border-0 shadow-card bg-gradient-primary text-white">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">🚀 Want to climb the leaderboard?</h3>
            <p className="text-white/90 mb-4">Report more issues and earn points!</p>
            <Button 
              variant="hero"
              onClick={() => onNavigate('report')}
              className="bg-white text-primary hover:bg-white/90"
            >
              Report an Issue
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeaderboardPage;