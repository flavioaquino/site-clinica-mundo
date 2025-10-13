import { Heart, Users, Star, Shield } from "lucide-react"

export default function MissionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0177B5] to-[#0177B5]/80 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0177B5]/90 to-yellow-500/20"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Um espaço pensado para atender as necessidades das crianças de
              <span className="text-yellow-300"> forma integral</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-yellow-300">
              em um mundo repleto de cuidados e possibilidades
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center text-center space-y-3 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Heart className="w-8 h-8 text-yellow-300 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2 text-base">Cuidado Integral</h4>
                <p className="text-blue-100 text-sm">
                  Atendimento multidisciplinar focado no desenvolvimento completo da criança.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="w-8 h-8 text-yellow-300 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2 text-base">Apoio às Famílias</h4>
                <p className="text-blue-100 text-sm">
                  Suporte completo para pais e cuidadores durante todo o processo.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Star className="w-8 h-8 text-yellow-300 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2 text-base">Excelência</h4>
                <p className="text-blue-100 text-sm">Profissionais altamente qualificados e técnicas inovadoras.</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Shield className="w-8 h-8 text-yellow-300 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2 text-base">Ambiente Seguro</h4>
                <p className="text-blue-100 text-sm">
                  Espaço acolhedor e seguro, pensado especialmente para crianças.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
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
