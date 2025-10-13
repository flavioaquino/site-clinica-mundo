"use client"

import { Award, Shield, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Certification {
  id: number
  name: string
  type: "certificate" | "insurance" | "seal"
  icon?: string
  description?: string
}

// Dados de exemplo - você pode adicionar os certificados/convênios reais
const certifications: Certification[] = [
  {
    id: 1,
    name: "CRP - Conselho Regional de Psicologia",
    type: "certificate",
    description: "Profissionais registrados e habilitados"
  },
  {
    id: 2,
    name: "Unimed",
    type: "insurance",
    description: "Convênio aceito"
  },
  {
    id: 3,
    name: "Amil",
    type: "insurance",
    description: "Convênio aceito"
  },
  {
    id: 4,
    name: "Bradesco Saúde",
    type: "insurance",
    description: "Convênio aceito"
  },
  {
    id: 5,
    name: "SulAmérica",
    type: "insurance",
    description: "Convênio aceito"
  },
  {
    id: 6,
    name: "Certificação ISO 9001",
    type: "seal",
    description: "Qualidade e excelência no atendimento"
  }
]

export function CertificationsSection() {
  const certificates = certifications.filter(c => c.type === "certificate")
  const insurances = certifications.filter(c => c.type === "insurance")
  const seals = certifications.filter(c => c.type === "seal")

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0177B5] mb-4">
            Certificações e Credenciamentos
          </h2>
          <p className="text-lg text-gray-600">
            Qualidade reconhecida e parcerias que facilitam seu atendimento
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Certificados */}
          {certificates.length > 0 && (
            <div>
              <div className="flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-[#0177B5] mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Certificações Profissionais</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                  <Card key={cert.id} className="p-6 text-center hover:shadow-xl transition-shadow duration-300 border-2 border-[#0177B5]/10">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-[#0177B5]/10 rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8 text-[#0177B5]" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{cert.name}</h4>
                    {cert.description && (
                      <p className="text-sm text-gray-600">{cert.description}</p>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Convênios */}
          {insurances.length > 0 && (
            <div>
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Convênios Aceitos</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {insurances.map((insurance) => (
                  <Card key={insurance.id} className="p-6 text-center hover:shadow-xl transition-shadow duration-300 border-2 border-green-100">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Shield className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{insurance.name}</h4>
                    {insurance.description && (
                      <p className="text-sm text-gray-600">{insurance.description}</p>
                    )}
                  </Card>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Consulte-nos sobre outros convênios • 
                  <a 
                    href="https://api.whatsapp.com/send?phone=553175557435" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0177B5] hover:text-[#0177B5]/80 font-semibold ml-1"
                  >
                    Entre em contato
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* Selos de Qualidade */}
          {seals.length > 0 && (
            <div>
              <div className="flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-yellow-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Selos de Qualidade</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {seals.map((seal) => (
                  <Card key={seal.id} className="p-6 text-center hover:shadow-xl transition-shadow duration-300 border-2 border-yellow-100">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-yellow-600" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{seal.name}</h4>
                    {seal.description && (
                      <p className="text-sm text-gray-600">{seal.description}</p>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#0177B5]/5 to-yellow-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Atendimento de Excelência
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nossa equipe é formada por profissionais altamente qualificados e certificados, 
            comprometidos com o desenvolvimento integral de cada criança e adolescente.
          </p>
        </div>
      </div>
    </section>
  )
}
