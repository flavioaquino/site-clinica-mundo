import { Stethoscope, Brain, Ear, Heart, Music, Apple } from "lucide-react"

export function SpecialtiesSection() {
  const specialties = [
    {
      icon: Stethoscope,
      title: "Fisioterapia",
      tags: ["Ortopédica", "Neuromodulação", "Therasuit", "BOBATH", "Respiratória", "RTA"],
      description:
        "A fisioterapia avalia e trata bebês e crianças com alterações neurológicas que afetam o desenvolvimento motor. Utiliza técnicas específicas para estimular habilidades, promover autonomia e melhorar a qualidade de vida.",
    },
    {
      icon: Ear,
      title: "Fonoaudiologia",
      tags: ["ABA", "Disfagia", "CAA"],
      description:
        "A fonoaudiologia avalia, previne e auxilia em dificuldades na fala, linguagem, comunicação, audição e alimentação infantil. Desenvolve habilidades comunicativas e orais, promovendo crescimento saudável e melhor desempenho da criança no dia a dia.",
    },
    {
      icon: Music,
      title: "Musicoterapia",
      tags: ["Neurológica", "Comportamental"],
      description:
        "A musicoterapia utiliza som, ritmo, melodia e movimento para estimular o desenvolvimento cognitivo, emocional, motor e social da criança, favorecendo comunicação, expressão de sentimentos, interação social e fortalecimento de vínculos.",
    },
    {
      icon: Brain,
      title: "Psicologia",
      tags: ["TCC", "ABA"],
      description:
        "A psicologia acompanha o desenvolvimento emocional, comportamental e social da criança, oferecendo suporte para lidar com ansiedade, medos, alterações de comportamento, desafios escolares e questões familiares, promovendo equilíbrio emocional.",
    },
    {
      icon: Heart,
      title: "Psicomotricidade",
      description:
        "A psicomotricidade integra movimento, emoções e cognição, estimulando o desenvolvimento global da criança. Com atividades lúdicas, favorece a coordenação motora, equilíbrio, organização corporal, atenção e interação social.",
    },
    {
      icon: Heart,
      title: "Terapia Ocupacional",
      tags: ["BOBATH", "Integração Sensorial", "ABA"],
      description:
        "A Terapia Ocupacional desenvolve autonomia e funcionalidade da criança nas atividades diárias. Com intervenções lúdicas, estimula habilidades motoras, sensoriais, cognitivas e sociais, favorecendo participação ativa nos contextos familiar e escolar.",
    },
    {
      icon: Apple,
      title: "Nutrição",
      description:
        "A Nutrição promove hábitos alimentares saudáveis e equilibrados, considerando as necessidades individuais da criança. Atua na prevenção e no acompanhamento de alterações nutricionais e alimentares, contribuindo para crescimento, desenvolvimento e qualidade de vida.",
    },
    {
      icon: Brain,
      title: "Neuropsicopedagogia",
      description:
        "A Neuropsicopedagogia atua nas dificuldades de aprendizagem, integrando conhecimentos sobre cérebro, comportamento e educação. Desenvolve estratégias personalizadas para estimular habilidades cognitivas, favorecer o desempenho escolar e promover autonomia no processo de aprendizagem.",
    },
    {
      icon: Brain,
      title: "Avaliação Neuropsicológica",
      description:
        "A Avaliação Neuropsicológica investiga habilidades cognitivas, emocionais e comportamentais da criança. Identifica dificuldades de atenção, memória, linguagem e aprendizagem, auxiliando no diagnóstico e direcionando intervenções mais adequadas.",
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
              className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#0177B5] rounded-full flex items-center justify-center mr-3">
                  <specialty.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{specialty.title}</h3>
              </div>
              {specialty.tags && specialty.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {specialty.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-[#0177B5]/10 text-[#0177B5] px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {specialty.description && (
                <p className="text-gray-600 text-sm">{specialty.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
