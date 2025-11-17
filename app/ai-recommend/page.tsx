"use client"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Heart, Share2, ShoppingBag, Briefcase, Coffee, Plane, PartyPopper, Zap } from 'lucide-react'
import { useState } from "react"

const scenarios = [
  { id: "work", label: "OFFICE", icon: Briefcase, color: "from-blue-400 to-blue-600" },
  { id: "date", label: "DATE NIGHT", icon: Heart, color: "from-pink-400 to-pink-600" },
  { id: "casual", label: "CASUAL", icon: Coffee, color: "from-green-400 to-green-600" },
  { id: "travel", label: "TRAVEL", icon: Plane, color: "from-purple-400 to-purple-600" },
  { id: "party", label: "PARTY", icon: PartyPopper, color: "from-orange-400 to-orange-600" }
]

const outfitRecommendations = [
  {
    id: 1,
    title: "POWER ELEGANCE",
    scenario: "work",
    items: [
      { name: "WHITE SHIRT", image: "/placeholder.svg?height=200&width=150" },
      { name: "TAILORED PANTS", image: "/placeholder.svg?height=200&width=150" },
      { name: "HEELS", image: "/placeholder.svg?height=200&width=150" }
    ],
    match: 95,
    tags: ["PROFESSIONAL", "MINIMAL", "CONFIDENT"],
    missingItems: []
  },
  {
    id: 2,
    title: "ROMANTIC CHIC",
    scenario: "date",
    items: [
      { name: "FLORAL DRESS", image: "/placeholder.svg?height=200&width=150" },
      { name: "SNEAKERS", image: "/placeholder.svg?height=200&width=150" },
      { name: "HANDBAG", image: "/placeholder.svg?height=200&width=150" }
    ],
    match: 92,
    tags: ["ROMANTIC", "FRESH", "SWEET"],
    missingItems: ["STRAW HAT"]
  },
  {
    id: 3,
    title: "URBAN CASUAL",
    scenario: "casual",
    items: [
      { name: "SILK BLOUSE", image: "/pink-silk-blouse-fashion-item-clean.jpg" },
      { name: "DENIM JEANS", image: "/placeholder.svg?height=200&width=150" },
      { name: "SNEAKERS", image: "/placeholder.svg?height=200&width=150" },
      { name: "DENIM JACKET", image: "/denim-jacket-fashion-item-minimal.jpg" }
    ],
    match: 88,
    tags: ["COMFORTABLE", "TRENDY", "ENERGETIC"],
    missingItems: []
  },
  {
    id: 4,
    title: "MINIMAL OFFICE",
    scenario: "work",
    items: [
      { name: "KNIT SWEATER", image: "/placeholder.svg?height=200&width=150" },
      { name: "PLAID SKIRT", image: "/placeholder.svg?height=200&width=150" },
      { name: "CANVAS SHOES", image: "/placeholder.svg?height=200&width=150" }
    ],
    match: 90,
    tags: ["GENTLE", "SOPHISTICATED", "MINIMAL"],
    missingItems: ["BELT"]
  }
]

export default function AIRecommendPage() {
  const [selectedScenario, setSelectedScenario] = useState<string>("work")

  const filteredOutfits = outfitRecommendations.filter(
    outfit => outfit.scenario === selectedScenario
  )

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-8 py-10">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4DFFFF] to-[#2B5876] flex items-center justify-center ai-pulse elite-shadow">
              <Sparkles className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-5xl font-black text-[#0F1419] title-geometric">AI STYLING</h1>
          </div>
          <p className="text-slate-600 font-medium label-caps">INTELLIGENT OUTFIT RECOMMENDATIONS FOR EVERY OCCASION</p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-black text-[#0F1419] mb-6 title-geometric flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#4DFFFF]" strokeWidth={2.5} />
            SELECT OCCASION
          </h3>
          <div className="grid grid-cols-5 gap-5">
            {scenarios.map((scenario) => {
              const Icon = scenario.icon
              return (
                <Card
                  key={scenario.id}
                  onClick={() => setSelectedScenario(scenario.id)}
                  className={`rounded-3xl border-2 cursor-pointer ultra-smooth ${
                    selectedScenario === scenario.id
                      ? "border-[#4DFFFF] neon-focus glass-card"
                      : "border-transparent glass-card hover:border-slate-300"
                  }`}
                >
                  <CardContent className="p-7 text-center">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${scenario.color} flex items-center justify-center mx-auto mb-4 elite-shadow`}>
                      <Icon className="w-9 h-9 text-white" strokeWidth={2} />
                    </div>
                    <p className="font-black text-[#0F1419] label-caps text-xs">{scenario.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-black text-[#0F1419] title-geometric">
              {filteredOutfits.length} CURATED LOOKS
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {filteredOutfits.map((outfit) => (
              <Card key={outfit.id} className="rounded-3xl border-0 glass-card elite-shadow hover:elite-shadow-hover ultra-smooth overflow-hidden">
                <CardContent className="p-0">
                  {/* 搭配展示区 */}
                  <div className="bg-gradient-to-br from-white to-slate-50 p-8">
                    <div className="flex items-center justify-between mb-5">
                      <h4 className="text-2xl font-black text-[#0F1419] title-geometric">{outfit.title}</h4>
                      <Badge className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white border-0 label-caps font-bold px-4 py-1.5">
                        {outfit.match}% MATCH
                      </Badge>
                    </div>

                    {/* 单品网格 */}
                    <div className="grid grid-cols-4 gap-4 mb-5">
                      {outfit.items.map((item, index) => (
                        <div key={index} className="glass-card rounded-2xl p-3 elite-shadow">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-36 object-cover rounded-xl mb-2"
                          />
                          <p className="text-xs text-[#0F1419] text-center font-bold label-caps">{item.name}</p>
                        </div>
                      ))}
                    </div>

                    {/* 标签 */}
                    <div className="flex gap-2.5 mb-5">
                      {outfit.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs label-caps glass-card font-bold">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* 缺少单品提示 */}
                    {outfit.missingItems.length > 0 && (
                      <div className="bg-orange-50/80 backdrop-blur-sm border border-orange-200/50 rounded-2xl p-4 mb-4">
                        <div className="flex items-start gap-3">
                          <ShoppingBag className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <div>
                            <p className="text-sm font-black text-orange-800 mb-1 label-caps">COMPLETE THE LOOK</p>
                            <p className="text-xs text-orange-700 font-medium">
                              {outfit.missingItems.join(", ")} - Add for perfect styling
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 操作按钮 */}
                  <div className="p-6 bg-white/50 backdrop-blur-sm border-t border-slate-200/50 flex gap-4">
                    <button className="btn-elite flex-1 flex items-center justify-center gap-2">
                      <Heart className="w-4 h-4" strokeWidth={2.5} />
                      Save Look
                    </button>
                    <Button variant="outline" className="gap-2 glass-card border-slate-200/50 label-caps font-bold">
                      <Share2 className="w-4 h-4" strokeWidth={2.5} />
                      Share
                    </Button>
                    {outfit.missingItems.length > 0 && (
                      <Button variant="outline" className="gap-2 text-orange-600 border-orange-300 hover:bg-orange-50 label-caps font-bold">
                        <ShoppingBag className="w-4 h-4" strokeWidth={2.5} />
                        Shop
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
