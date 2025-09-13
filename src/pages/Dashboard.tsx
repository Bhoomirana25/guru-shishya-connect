import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Users, Star, MapPin, Calendar } from 'lucide-react';
import Header from '@/components/Header';

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'shishya';
  const isGuru = role === 'guru';

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient-primary mb-2">
            Welcome to your {isGuru ? 'Guru' : 'Shishya'} Dashboard
          </h1>
          <p className="text-muted-foreground">
            {isGuru 
              ? 'Manage your skills, students, and earnings all in one place'
              : 'Discover skills, connect with gurus, and track your learning journey'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
            <Card className="shadow-card border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {isGuru ? 'Active Students' : 'Skills Learning'}
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  +2 from last week
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {isGuru ? 'Total Earnings' : 'Completed Courses'}
                </CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isGuru ? '₹15,230' : '8'}
                </div>
                <p className="text-xs text-muted-foreground">
                  +{isGuru ? '₹1,200' : '2'} from last week
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {isGuru ? 'Skills Listed' : 'Hours Learned'}
                </CardTitle>
                {isGuru ? <GraduationCap className="h-4 w-4 text-muted-foreground" /> : <BookOpen className="h-4 w-4 text-muted-foreground" />}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isGuru ? '5' : '47'}
                </div>
                <p className="text-xs text-muted-foreground">
                  +{isGuru ? '1' : '8'} from last week
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rating</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8</div>
                <p className="text-xs text-muted-foreground">
                  Based on 24 reviews
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                {isGuru ? 'Manage your teaching activities' : 'Continue your learning journey'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {isGuru ? (
                <>
                  <Button variant="gradient" className="w-full justify-start">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Add New Skill
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Workshop
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    View Students
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="gradient" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    Find Local Gurus
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Browse Skills
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    My Schedule
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-6 shadow-card border-0">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              {isGuru ? 'Your latest teaching activities' : 'Your recent learning progress'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    {isGuru ? <GraduationCap className="h-5 w-5 text-primary" /> : <BookOpen className="h-5 w-5 text-primary" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">
                      {isGuru 
                        ? `New student enrolled in your JavaScript course`
                        : `Completed lesson ${item} in React Basics`
                      }
                    </p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;