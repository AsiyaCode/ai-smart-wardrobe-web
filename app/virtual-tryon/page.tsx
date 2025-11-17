"use client"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Download, Share2, RefreshCw, User, Wand2 } from 'lucide-react'
import { useState } from "react"

const wardrobeItems = {
  tops: [
    { id: 1, name: "WHITE SHIRT", image: "/white-shirt-fashion-item-clean-background.jpg" },
    { id: 2, name: "SILK BLOUSE", image: "/pink-silk-blouse-fashion-item-clean.jpg" },
    { id: 3, name: "DENIM JACKET", image: "/denim-jacket-fashion-item-minimal.jpg" },
    { id: 4, name: "KNIT SWEATER", image: "/knit-sweater-fashion-item-clean.jpg" }
  ],
  bottoms: [
    { id: 5, name: "TAILORED PANTS", image: "/placeholder.svg?height=200&width=150" },
    { id: 6, name: "DENIM JEANS", image: "/placeholder.svg?height=200&width=150" },
    { id: 7, name: "PLAID SKIRT", image: "/placeholder.svg?height=200&width=150" }
  ],
  shoes: [
    { id: 8, name: "SNEAKERS", image: "/placeholder.svg?height=200&width=150" },
    { id: 9, name: "HEELS", image: "/placeholder.svg?height=200&width=150" },
    { id: 10, name: "CANVAS SHOES", image: "/placeholder.svg?height=200&width=150" }
  ],
  accessories: [
    { id: 11, name: "SCARF", image: "/placeholder.svg?height=150&width=150" },
    { id: 12, name: "HANDBAG", image: "/placeholder.svg?height=150&width=150" },
    { id: 13, name: "SUNGLASSES", image: "/placeholder.svg?height=150&width=150" }
  ]
}

export default function VirtualTryonPage() {
  const [selectedTop, setSelectedTop] = useState<number | null>(null)
  const [selectedBottom, setSelectedBottom] = useState<number | null>(null)
  const [selectedShoe, setSelectedShoe] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-8 py-10">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Wand2 className="w-8 h-8 text-[#4DFFFF] ai-pulse" strokeWidth={2.5} />
            <h1 className="text-5xl font-black text-[#0F1419] title-geometric">VIRTUAL TRY-ON</h1>
          </div>
          <p className="text-slate-600 font-medium label-caps">SELECT ITEMS & PREVIEW IN REAL-TIME</p>
        </div>

        <div className="grid grid-cols-[420px_1fr] gap-8">
          <div>
            <Card className="rounded-3xl border-0 glass-card elite-shadow sticky top-28">
              <CardContent className="p-7">
                <div className="flex items-center justify-between mb-7">
                  <h3 className="text-lg font-black text-[#0F1419] title-geometric">SELECT ITEMS</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 glass-card border-slate-200/50 label-caps font-bold"
                    onClick={() => {
                      setSelectedTop(null)
                      setSelectedBottom(null)
                      setSelectedShoe(null)
                    }}
                  >
                    <RefreshCw className="w-4 h-4" strokeWidth={2.5} />
                    Reset
                  </Button>
                </div>

                <Tabs defaultValue="tops" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-5 glass-card h-12">
                    <TabsTrigger value="tops" className="label-caps font-bold data-[state=active]:bg-[#4DFFFF] data-[state=active]:text-[#0F1419]">Tops</TabsTrigger>
                    <TabsTrigger value="bottoms" className="label-caps font-bold data-[state=active]:bg-[#4DFFFF] data-[state=active]:text-[#0F1419]">Bottoms</TabsTrigger>
                    <TabsTrigger value="shoes" className="label-caps font-bold data-[state=active]:bg-[#4DFFFF] data-[state=active]:text-[#0F1419]">Shoes</TabsTrigger>
                    <TabsTrigger value="accessories" className="label-caps font-bold data-[state=active]:bg-[#4DFFFF] data-[state=active]:text-[#0F1419]">Extras</TabsTrigger>
                  </TabsList>

                  <ScrollArea className="h-[520px]">
                    <TabsContent value="tops" className="mt-0">
                      <div className="grid grid-cols-2 gap-4">
                        {wardrobeItems.tops.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => setSelectedTop(item.id)}
                            className={`cursor-pointer rounded-2xl overflow-hidden border-2 ultra-smooth ${
                              selectedTop === item.id
                                ? "border-[#4DFFFF] neon-focus glass-card"
                                : "border-transparent glass-card hover:border-slate-300"
                            }`}
                          >
                            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-36 object-cover" />
                            <div className="p-3 bg-white/50 backdrop-blur-sm">
                              <p className="text-xs font-bold text-[#0F1419] text-center label-caps">{item.name}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="bottoms" className="mt-0">
                      <div className="grid grid-cols-2 gap-4">
                        {wardrobeItems.bottoms.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => setSelectedBottom(item.id)}
                            className={`cursor-pointer rounded-2xl overflow-hidden border-2 ultra-smooth ${
                              selectedBottom === item.id
                                ? "border-[#4DFFFF] neon-focus glass-card"
                                : "border-transparent glass-card hover:border-slate-300"
                            }`}
                          >
                            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-36 object-cover" />
                            <div className="p-3 bg-white/50 backdrop-blur-sm">
                              <p className="text-xs font-bold text-[#0F1419] text-center label-caps">{item.name}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="shoes" className="mt-0">
                      <div className="grid grid-cols-2 gap-4">
                        {wardrobeItems.shoes.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => setSelectedShoe(item.id)}
                            className={`cursor-pointer rounded-2xl overflow-hidden border-2 ultra-smooth ${
                              selectedShoe === item.id
                                ? "border-[#4DFFFF] neon-focus glass-card"
                                : "border-transparent glass-card hover:border-slate-300"
                            }`}
                          >
                            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-36 object-cover" />
                            <div className="p-3 bg-white/50 backdrop-blur-sm">
                              <p className="text-xs font-bold text-[#0F1419] text-center label-caps">{item.name}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="accessories" className="mt-0">
                      <div className="grid grid-cols-2 gap-4">
                        {wardrobeItems.accessories.map((item) => (
                          <div
                            key={item.id}
                            className="cursor-pointer rounded-2xl overflow-hidden border-2 border-transparent glass-card hover:border-slate-300 ultra-smooth"
                          >
                            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-36 object-cover" />
                            <div className="p-3 bg-white/50 backdrop-blur-sm">
                              <p className="text-xs font-bold text-[#0F1419] text-center label-caps">{item.name}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </ScrollArea>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="rounded-3xl border-0 glass-card elite-shadow overflow-hidden">
              <CardContent className="p-0">
                {/* 预览区域 */}
                <div className="relative bg-gradient-to-br from-slate-50 to-gray-100 aspect-[3/4] flex items-center justify-center image-container">
                  <img
                    src="/placeholder.svg?height=1000&width=750"
                    alt="Virtual Model"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* 选中的衣物指示 */}
                  {(selectedTop || selectedBottom || selectedShoe) && (
                    <div className="absolute top-8 left-8 right-8">
                      <Card className="glass-card border-0 elite-shadow">
                        <CardContent className="p-5">
                          <p className="text-sm font-black text-[#0F1419] mb-3 label-caps">Selected Items:</p>
                          <div className="flex gap-2.5">
                            {selectedTop && <Badge className="bg-[#4DFFFF] text-[#0F1419] label-caps font-bold">Tops ✓</Badge>}
                            {selectedBottom && <Badge className="bg-[#4DFFFF] text-[#0F1419] label-caps font-bold">Bottoms ✓</Badge>}
                            {selectedShoe && <Badge className="bg-[#4DFFFF] text-[#0F1419] label-caps font-bold">Shoes ✓</Badge>}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* 提示信息 */}
                  {!selectedTop && !selectedBottom && !selectedShoe && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Card className="glass-card border-0 elite-shadow">
                        <CardContent className="p-10 text-center">
                          <User className="w-20 h-20 text-slate-400 mx-auto mb-5" strokeWidth={1.5} />
                          <p className="text-slate-700 mb-2 font-bold title-geometric text-lg">SELECT ITEMS</p>
                          <p className="text-sm text-slate-500 font-medium label-caps">Start creating your virtual look</p>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>

                {/* 操作按钮 */}
                <div className="p-7 bg-white/50 backdrop-blur-sm flex gap-4">
                  <button className="btn-elite flex-1 flex items-center justify-center gap-2">
                    <Camera className="w-5 h-5" strokeWidth={2.5} />
                    Upload Photo
                  </button>
                  <Button variant="outline" className="gap-2 glass-card border-slate-200/50 label-caps font-bold px-6">
                    <Download className="w-5 h-5" strokeWidth={2.5} />
                    Save
                  </Button>
                  <Button variant="outline" className="gap-2 glass-card border-slate-200/50 label-caps font-bold px-6">
                    <Share2 className="w-5 h-5" strokeWidth={2.5} />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
