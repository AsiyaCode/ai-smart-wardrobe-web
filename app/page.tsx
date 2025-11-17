"use client"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Sparkles, Camera, TrendingUp, Calendar, Heart, Share2, ChevronLeft, ChevronRight, Zap, Star } from 'lucide-react'
import { useState } from "react"

const outfitRecommendations = [
  {
    title: "EDITORIAL CHIC",
    description: "Sophisticated office elegance",
    image: "/high-fashion-editorial-photo-asian-model-wearing-e.jpg",
    tags: ["MINIMAL", "POWER", "ELEGANCE"]
  },
  {
    title: "WEEKEND LUXE",
    description: "Effortless casual sophistication",
    image: "/high-fashion-editorial-photo-asian-model-casual-ch.jpg",
    tags: ["CASUAL", "COMFORT", "MODERN"]
  },
  {
    title: "ROMANTIC ESSENCE",
    description: "Timeless date night allure",
    image: "/high-fashion-editorial-photo-asian-model-romantic-.jpg",
    tags: ["ROMANCE", "FEMININE", "REFINED"]
  }
]

const quickActions = [
  {
    icon: Upload,
    title: "Upload Item",
    description: "Add to wardrobe",
    color: "from-cyan-400 to-blue-500"
  },
  {
    icon: Sparkles,
    title: "AI Styling",
    description: "Daily suggestions",
    color: "from-purple-400 to-indigo-500"
  },
  {
    icon: Camera,
    title: "Virtual Try-on",
    description: "Preview outfits",
    color: "from-pink-400 to-rose-500"
  },
  {
    icon: TrendingUp,
    title: "Trends",
    description: "Latest fashion",
    color: "from-emerald-400 to-teal-500"
  },
  {
    icon: Calendar,
    title: "Style Calendar",
    description: "Plan weekly looks",
    color: "from-orange-400 to-amber-500"
  },
  {
    icon: Heart,
    title: "Favorites",
    description: "Saved inspiration",
    color: "from-red-400 to-pink-500"
  }
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % outfitRecommendations.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + outfitRecommendations.length) % outfitRecommendations.length)
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-8 py-10">
        <Card className="mb-10 overflow-hidden rounded-3xl glass-card border-0 elite-shadow">
          <div className="relative h-[580px] bg-gradient-to-br from-slate-100 to-white">
            {/* 轮播图片 */}
            <div className="absolute inset-0 image-container rounded-3xl">
              <img
                src={outfitRecommendations[currentSlide].image || "/placeholder.svg"}
                alt={outfitRecommendations[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            {/* 轮播内容 - 杂志级排版 */}
            <div className="absolute bottom-0 left-0 right-0 p-14 text-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4DFFFF]/20 backdrop-blur-md flex items-center justify-center ai-pulse">
                  <Sparkles className="w-5 h-5 text-[#4DFFFF]" strokeWidth={2.5} />
                </div>
                <span className="label-caps text-[#4DFFFF] font-bold tracking-wider">AI Curated</span>
              </div>
              <h2 className="text-6xl font-black mb-5 title-geometric tracking-tight">{outfitRecommendations[currentSlide].title}</h2>
              <p className="text-2xl mb-8 text-white/90 font-light tracking-wide">{outfitRecommendations[currentSlide].description}</p>
              <div className="flex gap-3 mb-8">
                {outfitRecommendations[currentSlide].tags.map((tag) => (
                  <span key={tag} className="px-5 py-2.5 rounded-full glass-card text-sm font-bold label-caps">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button className="btn-elite flex items-center gap-2">
                  <Heart className="w-4 h-4" strokeWidth={2.5} />
                  Save Look
                </button>
                <Button variant="outline" className="glass-card border-white/30 text-white hover:bg-white/20 gap-2 label-caps font-bold px-6 h-12">
                  <Share2 className="w-4 h-4" strokeWidth={2.5} />
                  Share
                </Button>
              </div>
            </div>

            {/* 轮播控制 - 磨砂玻璃按钮 */}
            <button
              onClick={prevSlide}
              className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl glass-card flex items-center justify-center hover:scale-110 ultra-smooth elite-shadow-hover"
            >
              <ChevronLeft className="w-7 h-7 text-white" strokeWidth={2.5} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl glass-card flex items-center justify-center hover:scale-110 ultra-smooth elite-shadow-hover"
            >
              <ChevronRight className="w-7 h-7 text-white" strokeWidth={2.5} />
            </button>

            {/* 轮播指示器 - 电光蓝 */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
              {outfitRecommendations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full ultra-smooth ${
                    index === currentSlide 
                      ? "bg-[#4DFFFF] w-12 shadow-lg shadow-[#4DFFFF]/50" 
                      : "bg-white/40 w-1"
                  }`}
                />
              ))}
            </div>
          </div>
        </Card>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-[#4DFFFF]" strokeWidth={2.5} />
            <h3 className="text-3xl font-black text-[#0F1419] title-geometric">QUICK ACCESS</h3>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <Card
                  key={action.title}
                  className="rounded-3xl border-0 glass-card elite-shadow hover:elite-shadow-hover ultra-smooth cursor-pointer overflow-hidden group"
                >
                  <CardContent className="p-7">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-5 group-hover:scale-110 ultra-smooth elite-shadow`}>
                      <Icon className="w-9 h-9 text-white" strokeWidth={2} />
                    </div>
                    <h4 className="text-lg font-black text-[#0F1419] mb-2 title-geometric">{action.title}</h4>
                    <p className="text-sm text-slate-600 font-medium">{action.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
