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
            backgroundImage: "url('/images/image.png?height=800&width=1200')",
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
