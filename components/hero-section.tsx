"use client"
import { MapPin, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMascotOpen, setIsMascotOpen] = useState(false)

  // Imagens do carrossel - substitua pelos caminhos das imagens reais
  // 
  // 📐 DIMENSÕES RECOMENDADAS DOS BANNERS:
  // - Desktop: 1920x550px (aspect ratio ~21:7)
  // - Tablet: 1200x450px (aspect ratio ~16:6)
  // - Mobile: 800x342px (aspect ratio ~21:9)
  // 
  // 💡 DICA: Use uma imagem de 1920x550px que funcionará bem em todos os tamanhos
  // Formato: JPG ou PNG | Peso máximo recomendado: 300KB por imagem
  //
  const banners = [
    {
      id: 1,
      image: "/images/banner1.jpeg",
      alt: "Banner 1 - Clínica Mundo"
    },
    {
      id: 2,
      image: "/images/banner2.jpeg",
      alt: "Banner 2 - Desenvolvimento Infantil"
    },
    {
      id: 3,
      image: "/images/banner3.jpeg",
      alt: "Banner 3 - Nosso Espaço"
    }
  ]

  // Auto-play do carrossel (troca a cada 5 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [banners.length])

  // Abre o modal do mascote quando a página é carregada
  useEffect(() => {
    const timer = window.setTimeout(() => setIsMascotOpen(true), 800)
    return () => window.clearTimeout(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
      <section id="inicio" className="relative min-h-screen flex items-center bg-white overflow-x-hidden">
      <Dialog open={isMascotOpen} onOpenChange={setIsMascotOpen}>
        <DialogContent className="overflow-hidden border-0 bg-gradient-to-br from-[#EAF7FF] via-white to-[#FFF9E8] p-0 sm:max-w-[560px]">
          <div className="relative px-6 pb-6 pt-8 sm:px-8 sm:pb-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#38BDF8]/20 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-[#FACC15]/25 blur-2xl" aria-hidden="true" />

            <DialogHeader className="relative z-10 text-center sm:text-center">
              <DialogTitle className="text-3xl font-black text-[#015A89]">Seja bem vindo!</DialogTitle>
            </DialogHeader>

            <div className="relative z-10 mt-4 flex flex-col items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 scale-110 rounded-full bg-[#0177B5]/15 blur-xl" aria-hidden="true" />
                <img
                  src="/images/mascote.png"
                  alt="Mascote Clinica Mundo"
                  className="relative h-44 w-44 object-contain drop-shadow-[0_16px_22px_rgba(1,119,181,0.25)] animate-mascot-bounce"
                />
              </div>
            </div>

            <DialogFooter className="relative z-10 mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                onClick={() => window.open("https://api.whatsapp.com/send?phone=5531992789423", "_blank")}
                className="h-12 rounded-xl bg-green-500 px-6 text-base font-bold shadow-lg shadow-green-500/30 hover:bg-green-600"
              >
                <i className="fa-brands fa-whatsapp mr-2 text-xl"></i>
                Agendar Consulta
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/image.png')",
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full px-4 py-20 overflow-hidden">
        {/* Carrossel de Banners */}
        <div className="relative mb-8">
          <div className="w-screen sm:w-full lg:max-w-6xl lg:mx-auto -mx-4 sm:mx-0 relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
            {/* Imagens do Carrossel */}
            <div className="relative aspect-[21/9] max-h-[260px] sm:max-h-[320px] md:max-h-[420px] lg:max-h-[520px]">
              {banners.map((banner, index) => (
                <div
                  key={banner.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={banner.image}
                    alt={banner.alt}
                    className="w-full h-full object-contain lg:object-cover"
                    onError={(e) => {
                      // Fallback para cores do site (azul e amarelo) caso a imagem não carregue
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.style.background = 
                        `linear-gradient(135deg, ${
                          index === 0 ? '#3B82F6' : index === 1 ? '#2563EB' : '#1D4ED8'
                        }, ${
                          index === 0 ? '#EAB308' : index === 1 ? '#F59E0B' : '#FBBF24'
                        })`;
                    }}
                  />
                  {/* Overlay com gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              ))}

              {/* Botões de Navegação */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="Banner anterior"
              >
                <ChevronLeft className="w-6 h-6 text-[#0177B5]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="Próximo banner"
              >
                <ChevronRight className="w-6 h-6 text-[#0177B5]" />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Ir para banner ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-gray-800">
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open("https://api.whatsapp.com/send?phone=5531992789423", "_blank")} 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-[#0177B5] font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <i className="fa-brands fa-whatsapp mr-2 text-xl"></i>
                Agendar Consulta
              </Button>
              <Button 
                onClick={() => {
                  const locationSection = document.getElementById('localizacao');
                  if (locationSection) {
                    locationSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }} 
                size="lg" 
                variant="outline"
                className="bg-white/90 hover:bg-white text-[#0177B5] font-semibold text-lg px-8 py-6 border-2 border-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Como Chegar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
