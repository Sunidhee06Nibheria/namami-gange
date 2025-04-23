
import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="water-wave h-12 bg-white"></div>
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-river-400 to-river-600">
                <div className="absolute inset-0 opacity-60 water-wave"></div>
              </div>
              <span className="text-xl font-bold">Namami Gange</span>
            </Link>
            <p className="text-gray-600">
              Safeguarding the Ganga, One Data Point at a Time.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-river-100 hover:text-river-600"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-river-100 hover:text-river-600"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-river-100 hover:text-river-600"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-river-100 hover:text-river-600"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-river-600">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-river-600">About</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600 hover:text-river-600">Features</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-river-600">Dashboard</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-river-600">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-river-600">Data Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-river-600">Research Papers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-river-600">Open Data Access</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-river-600">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-river-600">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Subscribe to Newsletter</h3>
            <p className="text-gray-600">
              Stay updated with the latest news and developments
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Input
                type="email"
                placeholder="Your Email"
                className="max-w-full sm:max-w-[220px]"
              />
              <Button className="bg-river-500 hover:bg-river-600">Subscribe</Button>
            </div>
            <p className="text-sm text-gray-500">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            Copyright © {new Date().getFullYear()} Namami Gange. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
