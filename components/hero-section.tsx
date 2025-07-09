import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-yellow-400 opacity-90"></div>
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-6 h-6 text-yellow-300" />
                <span className="text-yellow-300">Localização Privilegiada</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Nossa Clínica</h1>
              <div className="bg-blue-600/80 backdrop-blur-sm rounded-lg p-6 space-y-4">
                <p className="text-lg leading-relaxed">
                  No coração da Savassi, perto de shoppings, restaurantes, hotéis, e fácil acesso às principais vias da
                  cidade. Nosso espaço é planejado para oferecer conforto e facilidade, focado na satisfação, mobilidade
                  e otimização de tempo para nossas famílias.
                </p>
                <p className="text-lg leading-relaxed">
                  Contamos com um ambiente climatizado, acolhedor e um coworking para os pais e cuidadores otimizarem
                  seu tempo enquanto aguardam as crianças.
                </p>
              </div>
            </div>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold">
              Agendar Consulta
            </Button>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-yellow-300 to-orange-400 rounded-xl flex items-center justify-center">
                <div className="text-center text-blue-900">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                    <MapPin className="w-16 h-16 text-blue-600" />
                  </div>
                  <p className="font-semibold">Crianças Felizes</p>
                  <p className="text-sm">Cuidado Especializado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
