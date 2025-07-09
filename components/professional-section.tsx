import { Award, Clock, Heart } from "lucide-react"

export function ProfessionalSection() {
  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Tábata Camelo</h3>
              <p className="text-gray-600 mb-4">Fisioterapeuta Neuropediátrica</p>
              <p className="text-gray-600 mb-6">CEO - Clínica Mundo</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-600 mb-2">Mais de 13 anos de experiência</h4>
                  <p className="text-gray-700">
                    Uma trajetória marcada pelo cuidado, inovação e resultados excepcionais no desenvolvimento infantil.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Especialização Avançada</h4>
                  <p className="text-gray-700">
                    Formação continuada em técnicas inovadoras de fisioterapia neuropediátrica e desenvolvimento
                    infantil.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Cuidado Humanizado</h4>
                  <p className="text-gray-700">
                    Abordagem centrada na família, priorizando o bem-estar emocional e o desenvolvimento integral de
                    cada criança.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-yellow-100 rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=450"
                alt="Tábata Camelo - Fisioterapeuta"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-lg">13+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
