import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

const ProfilePage = ({ onNavigate }: ProfilePageProps) => {
  const userStats = {
    name: 'Alex Thompson',
    email: 'alex.thompson@email.com',
    phone: '+91 98765 43210',
    joinDate: 'January 2024',
    points: 847,
    rank: 12,
    badge: '📈 Active Citizen',
    issuesReported: 14,
    issuesResolved: 11,
    upvotesReceived: 67,
    currentLevel: 'Active Citizen',
    nextLevel: 'Rising Star',
    pointsToNext: 153,
  };

  const recentActivity = [
    { id: 1, type: 'report', title: 'Garbage overflow reported', points: 15, date: '2 hours ago', status: 'Open' },
    { id: 2, type: 'resolved', title: 'Pothole issue resolved', points: 20, date: '1 day ago', status: 'Resolved' },
    { id: 3, type: 'upvote', title: 'Received upvote on street light issue', points: 2, date: '2 days ago', status: 'In Progress' },
    { id: 4, type: 'report', title: 'Water leakage reported', points: 15, date: '3 days ago', status: 'In Progress' },
  ];

  const achievements = [
    { icon: '🌱', title: 'First Report', description: 'Submitted your first issue report', earned: true },
    { icon: '📸', title: 'Picture Perfect', description: 'Added photos to 5 reports', earned: true },
    { icon: '📍', title: 'Location Hero', description: 'GPS location on 10 reports', earned: true },
    { icon: '👍', title: 'Popular Reporter', description: 'Received 50 upvotes', earned: true },
    { icon: '🔥', title: 'Weekly Warrior', description: 'Report 7 issues in a week', earned: false },
    { icon: '🏆', title: 'City Champion', description: 'Reach top 3 on leaderboard', earned: false },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'report': return '📝';
      case 'resolved': return '✅';
      case 'upvote': return '👍';
      default: return '📊';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open': return 'bg-destructive';
      case 'in progress': return 'bg-warning';
      case 'resolved': return 'bg-success';
      default: return 'bg-muted';
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
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl">
              👤
            </div>
            <div>
              <h1 className="text-3xl font-bold">{userStats.name}</h1>
              <p className="text-white/90">{userStats.badge}</p>
              <p className="text-white/80 text-sm">Member since {userStats.joinDate}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="border-0 shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-1">{userStats.points}</div>
              <div className="text-sm text-muted-foreground">Total Points</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-secondary mb-1">#{userStats.rank}</div>
              <div className="text-sm text-muted-foreground">Global Rank</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-accent mb-1">{userStats.issuesReported}</div>
              <div className="text-sm text-muted-foreground">Issues Reported</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-success mb-1">{userStats.issuesResolved}</div>
              <div className="text-sm text-muted-foreground">Issues Resolved</div>
            </CardContent>
          </Card>
        </div>

        {/* Level Progress */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🎯 Level Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{userStats.currentLevel}</div>
                  <div className="text-sm text-muted-foreground">Current Level</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-foreground">{userStats.nextLevel}</div>
                  <div className="text-sm text-muted-foreground">Next Level</div>
                </div>
              </div>
              
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-gradient-primary h-3 rounded-full transition-all duration-500"
                  style={{ width: `${((1000 - userStats.pointsToNext) / 1000) * 100}%` }}
                ></div>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                {userStats.pointsToNext} points needed for next level
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle>👤 Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground">Email</label>
                <div className="text-muted-foreground">{userStats.email}</div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Phone</label>
                <div className="text-muted-foreground">{userStats.phone}</div>
              </div>
            </div>
            <Button variant="outline" className="mt-4">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle>🏅 Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    achievement.earned 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border bg-muted/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`text-2xl ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className={`font-semibold ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      {achievement.earned && (
                        <Badge className="mt-2 bg-success text-white">Earned</Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle>📊 Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div 
                  key={activity.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:shadow-card transition-all duration-300"
                >
                  <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground">{activity.date}</p>
                  </div>
                  
                  <Badge className={`${getStatusColor(activity.status)} text-white`}>
                    {activity.status}
                  </Badge>
                  
                  <div className="text-right">
                    <div className="font-semibold text-primary">+{activity.points}</div>
                    <div className="text-sm text-muted-foreground">points</div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-4">
              View All Activity
            </Button>
          </CardContent>
        </Card>

        {/* Rewards Section */}
        <Card className="border-0 shadow-card bg-gradient-accent text-white">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">🎁 Unlock Rewards</h3>
            <p className="text-white/90 mb-4">Keep contributing to earn exclusive rewards and certificates!</p>
            <Button 
              variant="hero"
              onClick={() => onNavigate('rewards')}
              className="bg-white text-accent hover:bg-white/90"
            >
              View Rewards
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;