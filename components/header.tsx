"use client"

import { Menu, X, Instagram, Phone } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <Phone className="w-5 h-5" />,
      url: "https://api.whatsapp.com/send?phone=553175557435",
      color: "hover:bg-green-500"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/clinica.mundo/",
      color: "hover:bg-pink-500"
    },
    {
      name: "Maps",
      icon: <i className="fa-solid fa-map-location-dot text-lg"></i>,
      url: "https://www.google.com/maps/place/Cl%C3%ADnica+Mundo+-+Desenvolvimento+Infantil/@-19.9403111,-19.9403111,16z/data=!4m6!3m5!1s0xa699219e14f879:0x2d4cacc877f17bf1!8m2!3d-19.9403111!4d-43.9363248!16s%2Fg%2F11t_3wk0hd",
      color: "hover:bg-red-500"
    }
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-5 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="h-20 md:h-24">
              <img 
                src="/images/logo-header.png" 
                alt="Clínica Mundo Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-[#0177B5] transition-colors">
                Início
              </a>
              <a href="#especialidades" className="text-gray-700 hover:text-[#0177B5] transition-colors">
                Especialidades
              </a>
              <a href="#espaco" className="text-gray-700 hover:text-[#0177B5] transition-colors">
                Espaço
              </a>
              <a href="#equipe" className="text-gray-700 hover:text-[#0177B5] transition-colors">
                Equipe
              </a>
              <a href="#contato" className="text-gray-700 hover:text-[#0177B5] transition-colors">
                Contato
              </a>
            </nav>
            
            {/* Social Icons - Desktop */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-300">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-[#0177B5] text-white flex items-center justify-center transition-all ${social.color} hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile: Social Icons + Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            {/* Social Icons - Mobile */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full bg-[#0177B5] text-white flex items-center justify-center transition-all ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#0177B5]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-[#0177B5] py-2 px-4 rounded-lg hover:bg-[#0177B5]/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#especialidades"
                className="text-gray-700 hover:text-[#0177B5] py-2 px-4 rounded-lg hover:bg-[#0177B5]/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Especialidades
              </a>
              <a
                href="#espaco"
                className="text-gray-700 hover:text-[#0177B5] py-2 px-4 rounded-lg hover:bg-[#0177B5]/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nosso Espaço
              </a>
              <a
                href="#equipe"
                className="text-gray-700 hover:text-[#0177B5] py-2 px-4 rounded-lg hover:bg-[#0177B5]/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Equipe
              </a>
              <a
                href="#contato"
                className="text-gray-700 hover:text-[#0177B5] py-2 px-4 rounded-lg hover:bg-[#0177B5]/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
