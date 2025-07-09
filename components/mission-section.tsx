import { Heart, Users, Star, Shield } from "lucide-react"

export function MissionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-yellow-500/20"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Um espaço pensado para atender as necessidades das crianças de
                <span className="text-yellow-300"> forma integral</span>
              </h2>
              <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
                em um mundo repleto de cuidados e possibilidades
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Cuidado Integral</h4>
                  <p className="text-blue-100 text-sm">
                    Atendimento multidisciplinar focado no desenvolvimento completo da criança.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Apoio às Famílias</h4>
                  <p className="text-blue-100 text-sm">
                    Suporte completo para pais e cuidadores durante todo o processo.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Star className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Excelência</h4>
                  <p className="text-blue-100 text-sm">Profissionais altamente qualificados e técnicas inovadoras.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Ambiente Seguro</h4>
                  <p className="text-blue-100 text-sm">
                    Espaço acolhedor e seguro, pensado especialmente para crianças.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center">
              <div className="w-4/5 h-4/5 bg-white rounded-full flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Criança feliz"
                  className="w-3/4 h-3/4 object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Alegria e realização são os sentimentos compartilhados com a materialização da Mundo. A minha trajetória
            como Fisioterapeuta Neurofuncional Pediátrica, área à qual dedico mais de 13 anos da minha vida, sempre foi
            pautada na realização de sonho que sempre foi oferecer o melhor atendimento possível às famílias que
            depositam sua confiança em meu trabalho.
          </p>
        </div>
      </div>
    </section>
  )
}
