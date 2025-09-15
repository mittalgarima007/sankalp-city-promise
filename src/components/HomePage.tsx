import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const quickActions = [
    { icon: '🗑️', title: 'Garbage', color: 'bg-destructive', description: 'Report waste issues' },
    { icon: '🕳️', title: 'Pothole', color: 'bg-warning', description: 'Road damage reports' },
    { icon: '⚡', title: 'Electricity', color: 'bg-secondary', description: 'Power outages' },
    { icon: '💧', title: 'Water', color: 'bg-accent', description: 'Water supply issues' },
  ];

  const featuredIssues = [
    { id: 1, title: 'Garbage overflow near Market Street', location: 'Downtown Area', status: 'Open', upvotes: 24, timeAgo: '2 hours ago' },
    { id: 2, title: 'Large pothole on Main Road', location: 'City Center', status: 'In Progress', upvotes: 18, timeAgo: '5 hours ago' },
    { id: 3, title: 'Street light not working', location: 'Residential Zone', status: 'Resolved', upvotes: 12, timeAgo: '1 day ago' },
    { id: 4, title: 'Water leakage from pipeline', location: 'Industrial Area', status: 'Open', upvotes: 31, timeAgo: '3 hours ago' },
  ];

  const appFeatures = [
    { icon: '📱', title: 'Easy Reporting', description: 'Quickly report issues with photos and GPS location' },
    { icon: '👥', title: 'Community Driven', description: 'Collaborate with citizens to solve local problems' },
    { icon: '📊', title: 'Track Progress', description: 'Monitor the status of reported issues in real-time' },
    { icon: '🏆', title: 'Earn Rewards', description: 'Get points and badges for active civic participation' },
    { icon: '🎯', title: 'Smart Matching', description: 'AI-powered duplicate detection and categorization' },
    { icon: '📍', title: 'Location Based', description: 'Focus on issues in your neighborhood and area' },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open': return 'bg-destructive';
      case 'in progress': return 'bg-warning';
      case 'resolved': return 'bg-success';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header Slider */}
      <div className="bg-gradient-hero text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Sankalp</h1>
          <p className="text-xl text-white/90 mb-2">Your city, your responsibility, our sankalp</p>
          <p className="text-white/80">Making civic engagement simple and effective for everyone</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Quick Actions */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Card 
                key={action.title} 
                className="cursor-pointer hover:shadow-elevated transition-all duration-300 transform hover:scale-105 border-0 shadow-card"
                onClick={() => onNavigate('report')}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${action.color} rounded-full flex items-center justify-center text-2xl`}>
                    {action.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Issues */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Featured Issues</h2>
            <Button variant="outline" onClick={() => onNavigate('issues')}>
              View All
            </Button>
          </div>
          
          <div className="space-y-4">
            {featuredIssues.map((issue) => (
              <Card key={issue.id} className="cursor-pointer hover:shadow-card transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{issue.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">📍 {issue.location}</p>
                      <div className="flex items-center gap-3">
                        <Badge className={`${getStatusColor(issue.status)} text-white`}>
                          {issue.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">👍 {issue.upvotes}</span>
                        <span className="text-sm text-muted-foreground">{issue.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* App Features */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Sankalp?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appFeatures.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-card hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <Card className="bg-gradient-primary text-white border-0 shadow-hero">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
              <p className="text-white/90 mb-6 text-lg">Join thousands of citizens working together for a better city</p>
              <Button 
                variant="hero"
                size="lg"
                onClick={() => onNavigate('report')}
                className="bg-white text-primary hover:bg-white/90"
              >
                Report Your First Issue
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-elevated">
        <div className="grid grid-cols-4 py-2">
          <button 
            className="flex flex-col items-center py-3 text-primary"
            onClick={() => onNavigate('home')}
          >
            <span className="text-xl mb-1">🏠</span>
            <span className="text-xs font-medium">Home</span>
          </button>
          <button 
            className="flex flex-col items-center py-3 text-muted-foreground"
            onClick={() => onNavigate('report')}
          >
            <span className="text-xl mb-1">📝</span>
            <span className="text-xs">Report</span>
          </button>
          <button 
            className="flex flex-col items-center py-3 text-muted-foreground"
            onClick={() => onNavigate('leaderboard')}
          >
            <span className="text-xl mb-1">🏆</span>
            <span className="text-xs">Leaderboard</span>
          </button>
          <button 
            className="flex flex-col items-center py-3 text-muted-foreground"
            onClick={() => onNavigate('profile')}
          >
            <span className="text-xl mb-1">👤</span>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;