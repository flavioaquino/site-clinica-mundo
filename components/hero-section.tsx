"use client"
import { MapPin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-yellow-400 opacity-90"></div>
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/images/image.png?height=800&width=1200')",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="w-6 h-6 text-yellow-300" />
            <span className="text-yellow-300 font-semibold">Localização Privilegiada na Savassi</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-white">Clínica Mundo</h1>
          <p className="text-2xl lg:text-3xl font-medium text-yellow-200 mb-8">Desenvolvimento Infantojuvenil</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-white">
            <div className="bg-blue-600/80 backdrop-blur-sm rounded-lg p-8 space-y-6">
              <h2 className="text-2xl font-bold mb-4">Nosso Espaço</h2>
              <p className="text-lg leading-relaxed">
                Nosso espaço foi planejado para oferecer conforto e praticidade, priorizando a satisfação das famílias, 
                a mobilidade e o bom uso do tempo.
              </p>
              <p className="text-lg leading-relaxed">
                No coração da Savassi - BH, perto de shoppings, restaurantes e hotéis, com acesso fácil às principais 
                vias da cidade.
              </p>
              
              <div className="space-y-3 pt-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                  <span className="text-lg font-medium">Acesso fácil</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                  <span className="text-lg font-medium">Espaço climatizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                  <span className="text-lg font-medium">Equipe interdisciplinar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                  <span className="text-lg font-medium">Coworking para os pais ou responsáveis</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/30">
                <p className="text-lg italic text-yellow-200">
                  "Ambientes climatizados, atendimento qualificado e coworking para transformar espera em produtividade"
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => window.open("https://api.whatsapp.com/send?phone=553175557435", "_blank")} 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold text-lg px-8 py-6"
              >
                Agendar Consulta
              </Button>
              <Button 
                onClick={() => window.open("https://maps.app.goo.gl/your-google-maps-link", "_blank")} 
                size="lg" 
                variant="outline"
                className="bg-white/90 hover:bg-white text-blue-900 font-semibold text-lg px-8 py-6 border-2 border-white"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Como Chegar
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="aspect-square bg-gradient-to-br from-yellow-300 to-orange-400 rounded-xl flex items-center justify-center">
              <iframe
                title="Localização Clínica Mundo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d910.9624076955577!2d-43.93632475295739!3d-19.94031108092522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699219e14f879%3A0x2d4cacc877f17bf1!2sCl%C3%ADnica%20Mundo%20-%20Desenvolvimento%20Infantil!5e0!3m2!1spt-BR!2sbr!4v1757385714350!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "0.75rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
