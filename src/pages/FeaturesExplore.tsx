import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  MessageCircle, 
  Star, 
  Shield, 
  Smartphone, 
  Globe,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  BookOpen,
  CreditCard,
  Camera,
  Bell,
  Search,
  Heart,
  Award,
  Target,
  Zap,
  Lock,
  ChevronRight,
  Play,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FeaturesExplore = () => {
  const [activeCategory, setActiveCategory] = useState('core');

  const coreFeatures = [
    {
      icon: MapPin,
      title: 'Hyperlocal Discovery',
      description: 'Find skilled Gurus within your neighborhood using advanced location-based matching.',
      details: [
        'GPS-powered skill discovery within 1-5km radius',
        'Neighborhood-specific skill recommendations',
        'Walking distance calculations and route planning',
        'Local community integration and area-specific groups'
      ],
      category: 'Location Services',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: MessageCircle,
      title: 'Safe Communication',
      description: 'Built-in chat system with verified profiles and secure messaging.',
      details: [
        'End-to-end encrypted messaging system',
        'Video call integration for remote learning',
        'File sharing for learning materials',
        'Automated translation for multi-language support'
      ],
      category: 'Communication',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Star,
      title: 'Trusted Reviews & Ratings',
      description: 'Community-driven ratings with detailed feedback and verified reviews.',
      details: [
        'Multi-dimensional rating system (teaching quality, punctuality, communication)',
        'Photo and video review submissions',
        'Verified learner badges and achievements',
        'Skill-specific rating breakdowns'
      ],
      category: 'Trust & Safety',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Integrated payment system with escrow protection and multiple payment options.',
      details: [
        'UPI, Credit/Debit cards, Net banking support',
        'Escrow protection with milestone-based releases',
        'Automatic refund processing for cancellations',
        'Tax invoice generation for business learners'
      ],
      category: 'Payments',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  const advancedFeatures = [
    {
      icon: Users,
      title: 'Group Learning Sessions',
      description: 'Create and join group workshops for collaborative learning experiences.',
      details: [
        'Multi-participant video sessions with screen sharing',
        'Collaborative whiteboards and note-taking',
        'Split payment options for group bookings',
        'Group progress tracking and certificates'
      ]
    },
    {
      icon: Award,
      title: 'Skill Verification System',
      description: 'Verified skill certificates and competency assessments.',
      details: [
        'Industry-standard skill assessments',
        'Partner institution certifications',
        'Portfolio-based verification for creative skills',
        'Peer verification through community voting'
      ]
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'AI-powered notifications for learning opportunities and reminders.',
      details: [
        'Personalized skill recommendations based on interests',
        'Session reminders with calendar integration',
        'New Guru alerts in your skill areas',
        'Achievement notifications and milestone celebrations'
      ]
    },
    {
      icon: Target,
      title: 'Learning Goals Tracking',
      description: 'Set and track your learning objectives with detailed progress analytics.',
      details: [
        'SMART goal setting framework',
        'Progress visualization with charts and graphs',
        'Habit tracking for consistent learning',
        'Achievement badges and rewards system'
      ]
    }
  ];

  const techFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for smartphones with offline capabilities and responsive design.',
      details: [
        'Progressive Web App (PWA) functionality',
        'Offline mode for viewing saved content',
        'Touch-optimized interface with gesture controls',
        'Dark mode support for comfortable viewing'
      ]
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Native support for Hindi, English, Tamil, Bengali, and more regional languages.',
      details: [
        'Real-time language switching',
        'Voice input in local languages',
        'Cultural context-aware content recommendations',
        'Regional festival and holiday integration'
      ]
    },
    {
      icon: Lock,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security with data protection and privacy controls.',
      details: [
        'GDPR and Indian data protection compliance',
        'Biometric authentication support',
        'Selective profile visibility controls',
        'Secure data backup and recovery'
      ]
    },
    {
      icon: Zap,
      title: 'AI-Powered Matching',
      description: 'Machine learning algorithms for optimal Guru-Shishya pairing.',
      details: [
        'Learning style compatibility analysis',
        'Schedule optimization for both parties',
        'Skill level matching with adaptive difficulty',
        'Personality compatibility scoring'
      ]
    }
  ];

  const integrations = [
    {
      icon: CreditCard,
      title: 'Payment Gateways',
      description: 'Integrated with Razorpay, PayU, and other leading payment providers.',
      partners: ['Razorpay', 'PayU', 'Paytm', 'GooglePay', 'PhonePe']
    },
    {
      icon: BookOpen,
      title: 'Educational Institutions',
      description: 'Partnerships with schools, colleges, and training institutes.',
      partners: ['IIT Delhi', 'FIITJEE', 'Byju\'s', 'Unacademy', 'Local Schools']
    },
    {
      icon: Award,
      title: 'Certification Bodies',
      description: 'Recognized certificates from industry-standard organizations.',
      partners: ['Microsoft', 'Google', 'Adobe', 'Coursera', 'NCERT']
    },
    {
      icon: Globe,
      title: 'Government Portals',
      description: 'Integration with government skill development initiatives.',
      partners: ['Skill India', 'Digital India', 'PMKVY', 'National Portal', 'MyGov']
    }
  ];

  const stats = [
    { label: 'Active Users', value: '100K+', description: 'Verified Gurus and Shishyas' },
    { label: 'Skills Available', value: '500+', description: 'Different skill categories' },
    { label: 'Cities Covered', value: '50+', description: 'Major Indian cities' },
    { label: 'Success Rate', value: '95%', description: 'Successful learning completions' },
    { label: 'Languages', value: '12+', description: 'Regional language support' },
    { label: 'Partnerships', value: '25+', description: 'Educational institutions' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore All <span className="text-accent">Features</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover the comprehensive suite of tools and features that make BharatSkill Connect 
            the most advanced hyperlocal learning platform in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
            <Button variant="secondary" size="xl">
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Complete Feature Overview
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive feature set designed to revolutionize skill learning in local communities.
            </p>
          </div>

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="core">Core Features</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Tools</TabsTrigger>
              <TabsTrigger value="tech">Technology</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
            </TabsList>

            <TabsContent value="core" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coreFeatures.map((feature, index) => (
                  <Card key={index} className="p-8 hover-lift border-border bg-card">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${feature.bgColor} flex-shrink-0`}>
                        <feature.icon className={`h-8 w-8 ${feature.color}`} />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-3">{feature.category}</Badge>
                        <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                              <span className="text-sm text-card-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {advancedFeatures.map((feature, index) => (
                  <Card key={index} className="p-8 hover-lift border-border bg-card">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-sm text-card-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tech" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {techFeatures.map((feature, index) => (
                  <Card key={index} className="p-8 hover-lift border-border bg-card">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0">
                        <feature.icon className="h-8 w-8 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Zap className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span className="text-sm text-card-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {integrations.map((integration, index) => (
                  <Card key={index} className="p-8 hover-lift border-border bg-card">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-success/10 flex-shrink-0">
                        <integration.icon className="h-8 w-8 text-success" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                          {integration.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{integration.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {integration.partners.map((partner, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {partner}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience All Features?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join BharatSkill Connect today and unlock the full potential of hyperlocal learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join-now">
              <Button variant="secondary" size="xl" className="group">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Sign In to Explore
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesExplore;