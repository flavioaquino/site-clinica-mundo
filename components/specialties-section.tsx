import { Stethoscope, Brain, Ear, Heart, Music, Apple } from "lucide-react"

export function SpecialtiesSection() {
  const specialties = [
    {
      icon: Stethoscope,
      title: "Fisioterapia",
      items: ["Neurológica", "Ortopédica", "Osteopatia", "Respiratória", "Therasuit", "Neuromodulação"],
    },
    {
      icon: Ear,
      title: "Fonoaudiologia",
      items: ["ABA", "Estimulação Precoce", "Fala e Linguagem", "Disfagia"],
    },
    {
      icon: Heart,
      title: "Terapia Ocupacional",
      items: [],
    },
    {
      icon: Brain,
      title: "Psicologia",
      items: ["ABA", "TCC", "Assistente Terapêutico"],
    },
    {
      icon: Brain,
      title: "Neuropsicopedagogia",
      items: [],
    },
    {
      icon: Brain,
      title: "Avaliação Neuropsicológica",
      items: [],
    },
    {
      icon: Apple,
      title: "Nutrição",
      items: ["Terapia Alimentar", "Seletividade", "Dietoterapia"],
    },
    {
      icon: Music,
      title: "Musicoterapia",
      items: [],
    },
    {
      icon: Heart,
      title: "Psicomotricidade",
      items: [],
    },
  ]

  return (
    <section id="especialidades" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              ))}
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossas <span className="text-yellow-500">Especialidades</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <specialty.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{specialty.title}</h3>
              </div>
              {specialty.items.length > 0 && (
                <ul className="space-y-2">
                  {specialty.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
