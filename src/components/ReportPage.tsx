import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

interface ReportPageProps {
  onNavigate: (page: string) => void;
}

const ReportPage = ({ onNavigate }: ReportPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('Detecting location...');
  const [photo, setPhoto] = useState<string | null>(null);

  const categories = [
    { id: 'garbage', icon: '🗑️', title: 'Garbage', color: 'bg-destructive' },
    { id: 'pothole', icon: '🕳️', title: 'Pothole', color: 'bg-warning' },
    { id: 'electricity', icon: '⚡', title: 'Electricity', color: 'bg-secondary' },
    { id: 'water', icon: '💧', title: 'Water', color: 'bg-accent' },
    { id: 'other', icon: '📝', title: 'Other', color: 'bg-muted' },
  ];

  const handlePhotoCapture = () => {
    // Simulate photo capture
    setPhoto('📷 Photo captured');
  };

  const handleLocationDetect = () => {
    // Simulate GPS detection
    setLocation('123 Main Street, Downtown Area');
  };

  const handleSubmit = () => {
    if (!selectedCategory || !description) {
      alert('Please select a category and add a description');
      return;
    }
    
    // Simulate submission
    alert('Issue reported successfully! Thank you for making your city better.');
    onNavigate('home');
  };

  return (
    <div className="min-h-screen bg-muted/30 pb-20">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => onNavigate('home')}
            className="mb-4 text-white/80 hover:text-white"
          >
            ← Back to Home
          </button>
          <h1 className="text-3xl font-bold">Report an Issue</h1>
          <p className="text-white/90 mt-2">Help make your community better</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Photo Section */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📸 Add Photo
              <Badge variant="secondary" className="text-xs">+5 points</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              {photo ? (
                <div className="text-4xl mb-4">{photo}</div>
              ) : (
                <div className="text-muted-foreground mb-4">
                  <div className="text-4xl mb-2">📷</div>
                  <p>Take a photo of the issue</p>
                </div>
              )}
              <div className="flex gap-2 justify-center">
                <Button variant="outline" onClick={handlePhotoCapture}>
                  📷 Camera
                </Button>
                <Button variant="outline" onClick={handlePhotoCapture}>
                  🖼️ Gallery
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location Section */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📍 Location
              <Badge variant="secondary" className="text-xs">+5 points</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <Input 
                value={location}
                readOnly
                className="flex-1"
              />
              <Button variant="outline" onClick={handleLocationDetect}>
                📍 Detect
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Accurate location helps authorities respond faster
            </p>
          </CardContent>
        </Card>

        {/* Category Selection */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle>🏷️ Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-primary bg-primary/10 scale-105'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <div className="text-sm font-medium">{category.title}</div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Description */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle>📝 Description</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Describe the issue in detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="border-border focus:ring-primary"
            />
            <p className="text-sm text-muted-foreground mt-2">
              Detailed descriptions help authorities understand and resolve issues faster
            </p>
          </CardContent>
        </Card>

        {/* Points Preview */}
        <Card className="border-0 shadow-card bg-gradient-accent text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Points You'll Earn</h3>
                <p className="text-white/90 text-sm">For reporting this issue</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">
                  {10 + (photo ? 5 : 0) + (location !== 'Detecting location...' ? 5 : 0)}
                </div>
                <div className="text-white/90 text-sm">points</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button 
          variant="hero"
          size="lg"
          className="w-full"
          onClick={handleSubmit}
        >
          🚀 Submit Report
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          By submitting, you agree to our community guidelines and help make your city better
        </p>
      </div>
    </div>
  );
};

export default ReportPage;