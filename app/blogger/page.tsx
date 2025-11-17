"use client"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, Eye, Heart, Share2, Award, Calendar, BarChart3, Crown, Zap, Star } from 'lucide-react'

const statsCards = [
  {
    title: "TOTAL FOLLOWERS",
    value: "12,458",
    change: "+12.5%",
    icon: Users,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "MONTHLY VIEWS",
    value: "54,321",
    change: "+23.8%",
    icon: Eye,
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "ENGAGEMENT",
    value: "8.6%",
    change: "+2.3%",
    icon: Heart,
    color: "from-pink-400 to-pink-600"
  },
  {
    title: "SHARES",
    value: "1,234",
    change: "+15.2%",
    icon: Share2,
    color: "from-green-400 to-green-600"
  }
]

const recentPosts = [
  {
    id: 1,
    title: "SPRING OFFICE STYLE GUIDE",
    image: "/placeholder.svg?height=200&width=300",
    views: 5421,
    likes: 342,
    shares: 89,
    date: "MAR 15, 2024"
  },
  {
    id: 2,
    title: "WEEKEND CASUAL LOOKS",
    image: "/placeholder.svg?height=200&width=300",
    views: 4256,
    likes: 298,
    shares: 67,
    date: "MAR 12, 2024"
  },
  {
    id: 3,
    title: "DATE NIGHT ESSENTIALS",
    image: "/placeholder.svg?height=200&width=300",
    views: 7834,
    likes: 521,
    shares: 145,
    date: "MAR 10, 2024"
  }
]

const achievements = [
  { title: "STYLE INFLUENCER", progress: 85, level: "ELITE" },
  { title: "CONTENT CREATOR", progress: 72, level: "EXPERT" },
  { title: "COMMUNITY BUILDER", progress: 90, level: "MASTER" }
]

export default function BloggerPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-8 py-10">
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4DFFFF] to-[#2B5876] flex items-center justify-center elite-shadow ai-pulse">
                  <Star className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h1 className="text-5xl font-black text-[#0F1419] title-geometric">CREATOR HUB</h1>
                <Badge className="gap-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-[#0F1419] border-0 px-4 py-1.5 font-bold label-caps elite-shadow">
                  <Crown className="w-4 h-4" strokeWidth={2.5} />
                  Fashion Creator
                </Badge>
              </div>
              <p className="text-slate-600 font-medium label-caps">MANAGE CONTENT & TRACK INFLUENCE METRICS</p>
            </div>
            <button className="btn-elite flex items-center gap-2">
              <TrendingUp className="w-5 h-5" strokeWidth={2.5} />
              Create Content
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-10">
          {statsCards.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.title} className="rounded-3xl border-0 glass-card elite-shadow hover:elite-shadow-hover ultra-smooth">
                <CardContent className="p-7">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center elite-shadow`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <Badge className="text-xs text-emerald-600 bg-emerald-50/80 backdrop-blur-sm font-bold label-caps border-0">
                      {stat.change}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-600 mb-2 label-caps font-semibold">{stat.title}</p>
                  <p className="text-4xl font-black text-[#0F1419] title-geometric">{stat.value}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-[1fr_420px] gap-8">
          <div>
            <Card className="rounded-3xl border-0 glass-card elite-shadow">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-[#4DFFFF]" strokeWidth={2.5} />
                    <h3 className="text-2xl font-black text-[#0F1419] title-geometric">RECENT POSTS</h3>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2 glass-card border-slate-200/50 label-caps font-bold">
                    <BarChart3 className="w-4 h-4" strokeWidth={2.5} />
                    View All
                  </Button>
                </div>

                <div className="space-y-5">
                  {recentPosts.map((post) => (
                    <Card key={post.id} className="rounded-2xl border-0 glass-card elite-shadow hover:elite-shadow-hover ultra-smooth overflow-hidden group">
                      <div className="flex gap-5">
                        <div className="relative w-48 h-36 image-container flex-shrink-0">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-5">
                          <h4 className="font-black text-[#0F1419] mb-2 title-geometric text-sm group-hover:text-[#4DFFFF] ultra-smooth">{post.title}</h4>
                          <p className="text-xs text-slate-500 mb-4 label-caps font-semibold">{post.date}</p>
                          <div className="flex gap-6 text-sm text-slate-600">
                            <div className="flex items-center gap-2 font-semibold">
                              <Eye className="w-4 h-4 text-[#4DFFFF]" strokeWidth={2.5} />
                              <span className="label-caps text-xs">{post.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-2 font-semibold">
                              <Heart className="w-4 h-4 text-pink-500" strokeWidth={2.5} />
                              <span className="label-caps text-xs">{post.likes}</span>
                            </div>
                            <div className="flex items-center gap-2 font-semibold">
                              <Share2 className="w-4 h-4 text-purple-500" strokeWidth={2.5} />
                              <span className="label-caps text-xs">{post.shares}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-5 flex items-center">
                          <Button variant="outline" size="sm" className="glass-card border-slate-200/50 label-caps font-bold">Details</Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* 成就进度 */}
            <Card className="rounded-3xl border-0 glass-card elite-shadow">
              <CardContent className="p-7">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center elite-shadow">
                    <Award className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-black text-[#0F1419] title-geometric">ACHIEVEMENTS</h3>
                </div>

                <div className="space-y-7">
                  {achievements.map((achievement) => (
                    <div key={achievement.title}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold text-[#0F1419] label-caps">{achievement.title}</span>
                        <Badge className="text-xs bg-[#4DFFFF] text-[#0F1419] font-bold label-caps border-0">
                          {achievement.level}
                        </Badge>
                      </div>
                      <Progress value={achievement.progress} className="h-2.5 bg-slate-200/50" />
                      <p className="text-xs text-slate-500 mt-2 font-semibold label-caps">{achievement.progress}% Complete</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 glass-card elite-shadow">
              <CardContent className="p-7">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4DFFFF] to-[#2B5876] flex items-center justify-center elite-shadow ai-pulse">
                    <BarChart3 className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-black text-[#0F1419] title-geometric">ANALYTICS</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl glass-card border ultra-thin-border border-blue-200/50 elite-shadow">
                    <p className="text-xs text-slate-600 mb-2 label-caps font-semibold">TOP CONTENT</p>
                    <p className="font-black text-[#0F1419] title-geometric text-sm mb-1">DATE NIGHT ESSENTIALS</p>
                    <div className="flex items-center gap-2">
                      <Eye className="w-3.5 h-3.5 text-[#4DFFFF]" strokeWidth={2.5} />
                      <p className="text-xs text-slate-500 font-bold label-caps">7.8K Views</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl glass-card border ultra-thin-border border-purple-200/50 elite-shadow">
                    <p className="text-xs text-slate-600 mb-2 label-caps font-semibold">BEST TIME TO POST</p>
                    <p className="font-black text-[#0F1419] title-geometric text-sm mb-1">WED 8PM - 10PM</p>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-purple-500" strokeWidth={2.5} />
                      <p className="text-xs text-slate-500 font-bold label-caps">Highest Engagement</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl glass-card border ultra-thin-border border-pink-200/50 elite-shadow">
                    <p className="text-xs text-slate-600 mb-2 label-caps font-semibold">AUDIENCE ACTIVITY</p>
                    <p className="font-black text-[#0F1419] title-geometric text-sm mb-1">88% HIGH ACTIVE</p>
                    <div className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-[#4DFFFF]" strokeWidth={2.5} />
                      <p className="text-xs text-slate-500 font-bold label-caps">+5.2% This Week</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
