"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, Home, Shirt, Wand2, Users, Crown, Zap } from 'lucide-react'
import Link from "next/link"
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  
  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/wardrobe", label: "Wardrobe", icon: Shirt },
    { href: "/ai-recommend", label: "AI Styling", icon: Sparkles },
    { href: "/virtual-tryon", label: "Virtual Try-on", icon: Wand2 },
    { href: "/blogger", label: "Creator Hub", icon: Users },
  ]

  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b ultra-thin-border">
      <div className="container mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo - 几何感设计 */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#4DFFFF] to-[#2B5876] flex items-center justify-center elite-shadow ai-pulse">
            <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <span className="text-xl font-black gradient-text title-geometric block leading-none">
              AI WARDROBE
            </span>
            <span className="text-[0.6rem] text-slate-400 uppercase tracking-widest font-semibold">
              Intelligence
            </span>
          </div>
        </div>

        {/* Navigation - 极简大写 */}
        <nav className="flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={`gap-2 smooth-transition label-caps h-11 px-5 ${
                    isActive
                      ? "bg-[#4DFFFF] text-[#0F1419] hover:bg-[#4DFFFF] hover:text-[#0F1419] font-bold neon-focus"
                      : "text-slate-700 hover:bg-white/40 font-semibold"
                  }`}
                >
                  <Icon className="w-4 h-4" strokeWidth={2.5} />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </nav>

        {/* User Section - 精致细节 */}
        <div className="flex items-center gap-4">
          <Badge className="gap-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-[#0F1419] border-0 px-4 py-1.5 font-bold label-caps elite-shadow">
            <Crown className="w-3.5 h-3.5" strokeWidth={2.5} />
            Premium
          </Badge>
          <Avatar className="w-10 h-10 ring-2 ring-[#4DFFFF] ring-offset-2 ring-offset-transparent elite-shadow cursor-pointer hover:scale-105 smooth-transition">
            <AvatarImage src="/user-avatar.jpg" />
            <AvatarFallback className="bg-gradient-to-br from-[#4DFFFF] to-[#2B5876] text-white font-bold">AI</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
