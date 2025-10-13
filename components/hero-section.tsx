"use client"
import { MapPin, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

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
      image: "/images/banner1.jpg",
      alt: "Banner 1 - Clínica Mundo"
    },
    {
      id: 2,
      image: "/images/banner2.jpg",
      alt: "Banner 2 - Desenvolvimento Infantil"
    },
    {
      id: 3,
      image: "/images/banner3.jpg",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-white">
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/image.png?height=800&width=1200')",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Carrossel de Banners */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
            {/* Imagens do Carrossel */}
            <div className="relative aspect-[21/9] md:aspect-[16/6] lg:aspect-[21/7]">
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
                    className="w-full h-full object-cover"
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
                onClick={() => window.open("https://api.whatsapp.com/send?phone=553175557435", "_blank")} 
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
