
"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { AuthDialog } from "./AuthDialog"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [user, setUser] = useState<{ email: string } | null>(null)

  // Load user from localStorage on mount
  useEffect(() => {
    const data = localStorage.getItem("ng-user")
    if (data) {
      try {
        setUser(JSON.parse(data))
      } catch {}
    }
  }, [])

  // On login, save user
  const handleSignInSuccess = (u: { email: string }) => {
    setUser(u)
    localStorage.setItem("ng-user", JSON.stringify(u))
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-river-400 to-river-600">
            <div className="absolute inset-0 opacity-60 water-wave"></div>
          </div>
          <span className="hidden font-bold sm:inline-block">Namami Gange</span>
        </Link>
        
        <nav className="hidden flex-1 justify-center ml-6 md:flex">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="group relative px-3 py-2 text-sm font-medium text-foreground transition-colors"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-river-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex flex-1 justify-end space-x-4">
          {/* Auth Button */}
          {!user ? (
            <Button
              variant="outline"
              className="hidden md:flex"
              onClick={() => setAuthOpen(true)}
            >
              Sign In
            </Button>
          ) : (
            <Button
              variant="secondary"
              className="hidden md:flex border-blue-500 text-blue-600"
              disabled
            >
              {user.email}
            </Button>
          )}
          <Button className="hidden md:flex bg-river-500 hover:bg-river-600">Monitor Now</Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 top-16 z-40 bg-background md:hidden transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="container py-6">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block px-4 py-2 text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              {!user ? (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setAuthOpen(true)}
                >
                  Sign In
                </Button>
              ) : (
                <Button disabled variant="secondary" className="w-full border-blue-500 text-blue-600">
                  {user.email}
                </Button>
              )}
            </li>
            <li className="pt-2">
              <Button className="w-full bg-river-500 hover:bg-river-600">Monitor Now</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    {/* Auth Dialog */}
    <AuthDialog
      open={authOpen}
      onOpenChange={setAuthOpen}
      onSignInSuccess={handleSignInSuccess}
      isSignedIn={!!user}
    />
    </>
  )
}

