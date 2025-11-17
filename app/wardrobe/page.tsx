"use client"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Filter, Plus, Edit, Trash2, Grid3x3, Sparkles } from 'lucide-react'
import { useState } from "react"

const clothingItems = [
  {
    id: 1,
    name: "WHITE SHIRT",
    category: "TOPS",
    color: "#FFFFFF",
    season: "Spring/Summer",
    style: "MINIMAL",
    image: "/luxury-white-silk-shirt-on-mannequin-minimalist-cl.jpg"
  },
  {
    id: 2,
    name: "DENIM JACKET",
    category: "OUTERWEAR",
    color: "#4A90E2",
    season: "Fall/Winter",
    style: "CASUAL",
    image: "/premium-denim-jacket-fashion-photography-clean-bac.jpg"
  },
  {
    id: 3,
    name: "TAILORED TROUSERS",
    category: "BOTTOMS",
    color: "#1A1A1A",
    season: "All Season",
    style: "FORMAL",
    image: "/black-tailored-trousers-luxury-fashion-photography.jpg"
  },
  {
    id: 4,
    name: "FLORAL DRESS",
    category: "DRESSES",
    color: "#FFB6C1",
    season: "Spring/Summer",
    style: "ROMANTIC",
    image: "/elegant-floral-dress-fashion-editorial-clean-backg.jpg"
  },
  {
    id: 5,
    name: "KNIT SWEATER",
    category: "TOPS",
    color: "#D2B48C",
    season: "Fall/Winter",
    style: "COZY",
    image: "/luxury-cashmere-sweater-fashion-photography-soft-l.jpg"
  },
  {
    id: 6,
    name: "SNEAKERS",
    category: "SHOES",
    color: "#000000",
    season: "All Season",
    style: "ATHLETIC",
    image: "/designer-sneakers-product-photography-white-backgr.jpg"
  },
  {
    id: 7,
    name: "DENIM JEANS",
    category: "BOTTOMS",
    color: "#4169E1",
    season: "All Season",
    style: "CASUAL",
    image: "/premium-blue-jeans-fashion-photography-clean-minim.jpg"
  },
  {
    id: 8,
    name: "SILK BLOUSE",
    category: "TOPS",
    color: "#FFC0CB",
    season: "Spring/Summer",
    style: "ELEGANT",
    image: "/pink-silk-blouse-luxury-fashion-editorial-soft-lig.jpg"
  }
]

export default function WardrobePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSeason, setSelectedSeason] = useState("all")

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-8 py-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Grid3x3 className="w-8 h-8 text-[#4DFFFF]" strokeWidth={2.5} />
              <h1 className="text-5xl font-black text-[#0F1419] title-geometric">MY WARDROBE</h1>
            </div>
            <p className="text-slate-600 font-medium label-caps">{clothingItems.length} ITEMS IN COLLECTION</p>
          </div>
          <button className="btn-elite flex items-center gap-2">
            <Plus className="w-5 h-5" strokeWidth={2.5} />
            Add Item
          </button>
        </div>

        <Card className="mb-10 rounded-3xl border-0 glass-card elite-shadow">
          <CardContent className="p-7">
            <div className="flex gap-4">
              {/* 搜索框 */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" strokeWidth={2.5} />
                <Input
                  placeholder="SEARCH WARDROBE..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 rounded-2xl border-slate-200/50 glass-card label-caps font-semibold focus:neon-focus"
                />
              </div>

              {/* 分类筛选 */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[220px] h-14 rounded-2xl border-slate-200/50 glass-card label-caps font-semibold">
                  <SelectValue placeholder="CATEGORY" />
                </SelectTrigger>
                <SelectContent className="glass-card">
                  <SelectItem value="all" className="label-caps">ALL ITEMS</SelectItem>
                  <SelectItem value="TOPS" className="label-caps">TOPS</SelectItem>
                  <SelectItem value="BOTTOMS" className="label-caps">BOTTOMS</SelectItem>
                  <SelectItem value="DRESSES" className="label-caps">DRESSES</SelectItem>
                  <SelectItem value="OUTERWEAR" className="label-caps">OUTERWEAR</SelectItem>
                  <SelectItem value="SHOES" className="label-caps">SHOES</SelectItem>
                </SelectContent>
              </Select>

              {/* 季节筛选 */}
              <Select value={selectedSeason} onValueChange={setSelectedSeason}>
                <SelectTrigger className="w-[220px] h-14 rounded-2xl border-slate-200/50 glass-card label-caps font-semibold">
                  <SelectValue placeholder="SEASON" />
                </SelectTrigger>
                <SelectContent className="glass-card">
                  <SelectItem value="all" className="label-caps">ALL SEASONS</SelectItem>
                  <SelectItem value="Spring/Summer" className="label-caps">SPRING/SUMMER</SelectItem>
                  <SelectItem value="Fall/Winter" className="label-caps">FALL/WINTER</SelectItem>
                  <SelectItem value="All Season" className="label-caps">ALL SEASON</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="h-14 px-7 rounded-2xl gap-2 glass-card border-slate-200/50 label-caps font-bold hover:bg-white/60">
                <Filter className="w-5 h-5" strokeWidth={2.5} />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="columns-3 gap-6 space-y-6">
          {clothingItems.map((item) => (
            <Card
              key={item.id}
              className="break-inside-avoid rounded-3xl border-0 glass-card elite-shadow hover:elite-shadow-hover ultra-smooth group cursor-pointer overflow-hidden"
            >
              <div className="relative overflow-hidden image-container">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full object-cover"
                />
                {/* 悬停时显示的操作按钮 */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 ultra-smooth flex items-center justify-center gap-3">
                  <Button size="sm" className="glass-card text-white border-white/30 hover:bg-white/20 gap-2 label-caps font-bold backdrop-blur-md">
                    <Edit className="w-4 h-4" strokeWidth={2.5} />
                    Edit
                  </Button>
                  <Button size="sm" variant="destructive" className="gap-2 label-caps font-bold">
                    <Trash2 className="w-4 h-4" strokeWidth={2.5} />
                    Delete
                  </Button>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-black text-[#0F1419] mb-3 title-geometric text-sm">{item.name}</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-7 h-7 rounded-xl border-2 border-white shadow-md"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-slate-600 font-semibold label-caps">{item.category}</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary" className="text-xs label-caps glass-card">{item.season}</Badge>
                  <Badge variant="outline" className="text-xs label-caps ultra-thin-border">{item.style}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
