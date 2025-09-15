import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  BookOpen, 
  Users, 
  MapPin, 
  Star, 
  Clock, 
  CheckCircle,
  ArrowRight,
  User,
  Phone,
  Mail,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const JoinShishya = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interests: [] as string[],
    experience: '',
    goals: ''
  });

  const skillCategories = [
    'Music & Arts', 'Cooking', 'Technology', 'Languages', 'Sports & Fitness',
    'Crafts & Hobbies', 'Business & Finance', 'Health & Wellness', 'Photography',
    'Dance', 'Academic Subjects', 'Life Skills'
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: 'Learn from Local Experts',
      description: 'Connect with skilled Gurus in your neighborhood who share their expertise'
    },
    {
      icon: Users,
      title: 'Community Learning',
      description: 'Join group sessions and learn alongside fellow Shishyas'
    },
    {
      icon: MapPin,
      title: 'Hyperlocal Connections',
      description: 'Find learning opportunities within walking distance from your home'
    },
    {
      icon: Star,
      title: 'Verified Instructors',
      description: 'Learn from verified and rated Gurus with proven track records'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Choose learning schedules that fit your lifestyle and availability'
    },
    {
      icon: CheckCircle,
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with skill assessments and certifications'
    }
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Shishya registration:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile-Optimized Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-lg md:text-xl font-bold text-foreground">BharatSkill Connect</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Link to="/login">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
              <Link to="/join-guru">
                <Button variant="secondary" size="sm" className="hidden sm:block">Join as Guru</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile-First Hero Section */}
      <section className="bg-gradient-hero text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Start Your Learning Journey as a <span className="text-accent">Shishya</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover skilled Gurus in your neighborhood and master new skills through personalized, local learning experiences.
          </p>
          <Badge className="bg-white/20 text-white border-white/30 text-sm md:text-lg px-4 md:px-6 py-2 inline-flex items-center">
            <Star className="h-4 w-4 md:h-5 md:w-5 mr-2" />
            Over 50,000+ Happy Learners
          </Badge>
        </div>
      </section>

      {/* Mobile-Optimized Benefits Section */}
      <section className="py-12 md:py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-foreground">
            Why Choose to be a Shishya?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-4 md:p-6 hover-lift border-border bg-card touch-manipulation">
                <benefit.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-card-foreground">{benefit.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-First Registration Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">
              Join Our Learning Community
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Fill out the form below to start connecting with local Gurus
            </p>
          </div>

          <Card className="p-4 md:p-8 border-border bg-card">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {/* Mobile-Optimized Personal Information */}
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-semibold text-card-foreground flex items-center">
                  <User className="h-5 w-5 md:h-6 md:w-6 mr-2 text-primary" />
                  Personal Information
                </h3>
                
                <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm md:text-base">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your full name"
                      className="h-12 md:h-10 text-base md:text-sm touch-manipulation"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm md:text-base">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@example.com"
                      className="h-12 md:h-10 text-base md:text-sm touch-manipulation"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm md:text-base">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+91 98765 43210"
                      className="h-12 md:h-10 text-base md:text-sm touch-manipulation"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-sm md:text-base">Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="City, State"
                      className="h-12 md:h-10 text-base md:text-sm touch-manipulation"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Mobile-Optimized Learning Interests */}
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-semibold text-card-foreground flex items-center">
                  <Search className="h-5 w-5 md:h-6 md:w-6 mr-2 text-primary" />
                  What Would You Like to Learn?
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                  {skillCategories.map((category) => (
                    <div key={category} className="flex items-center space-x-3 p-2 rounded-lg border border-border hover:bg-muted/50 touch-manipulation">
                      <Checkbox
                        id={category}
                        checked={formData.interests.includes(category)}
                        onCheckedChange={() => handleInterestToggle(category)}
                        className="touch-manipulation"
                      />
                      <Label htmlFor={category} className="text-sm md:text-base cursor-pointer flex-1">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile-Optimized Experience Level */}
              <div className="space-y-3 md:space-y-4">
                <Label htmlFor="experience" className="text-sm md:text-base">Current Experience Level</Label>
                <select
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                  className="w-full h-12 md:h-10 px-3 py-2 border border-input bg-background rounded-md text-base md:text-sm touch-manipulation"
                >
                  <option value="">Select your experience level</option>
                  <option value="complete-beginner">Complete Beginner</option>
                  <option value="some-knowledge">Some Basic Knowledge</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced (Looking to specialize)</option>
                </select>
              </div>

              {/* Mobile-Optimized Learning Goals */}
              <div className="space-y-3 md:space-y-4">
                <Label htmlFor="goals" className="text-sm md:text-base">Learning Goals (Optional)</Label>
                <textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                  placeholder="Tell us about your learning goals and what you hope to achieve..."
                  className="w-full min-h-32 md:min-h-24 px-3 py-2 border border-input bg-background rounded-md text-base md:text-sm resize-none touch-manipulation"
                  rows={4}
                />
              </div>

              {/* Mobile-Optimized Submit Button */}
              <div className="pt-4 md:pt-6">
                <Button type="submit" size="xl" className="w-full h-14 md:h-12 text-base md:text-sm group touch-manipulation">
                  Start Learning Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-center text-xs md:text-sm text-muted-foreground mt-3 md:mt-4 leading-relaxed">
                  By joining, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Mobile-Optimized CTA Section */}
      <section className="bg-gradient-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of Shishyas who are already learning new skills from local Gurus in their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center">
            <Link to="/role-selection" className="w-full sm:w-auto">
              <Button variant="outline" size="xl" className="w-full sm:w-auto h-12 md:h-auto bg-white/10 border-white text-white hover:bg-white hover:text-primary touch-manipulation">
                Explore All Options
              </Button>
            </Link>
            <Link to="/login" className="w-full sm:w-auto">
              <Button variant="secondary" size="xl" className="w-full sm:w-auto h-12 md:h-auto touch-manipulation">
                Already Have an Account? Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinShishya;