"use client"

import { MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocationSection() {
  return (
    <section id="localizacao" className="py-20 bg-gradient-to-br from-[#0177B5]/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="w-8 h-8 text-[#0177B5]" />
            <h2 className="text-4xl font-bold text-[#0177B5]">Nossa Localização</h2>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Mapa Interativo */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-[4/3] lg:aspect-square">
                  <iframe
                    title="Localização Clínica Mundo"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d910.9624076955577!2d-43.93632475295739!3d-19.94031108092522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699219e14f879%3A0x2d4cacc877f17bf1!2sCl%C3%ADnica%20Mundo%20-%20Desenvolvimento%20Infantil!5e0!3m2!1spt-BR!2sbr!4v1757385714350!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4 bg-gray-50 text-center">
                  <p className="text-sm text-gray-600">
                    📍 Clínica Mundo - Savassi, Belo Horizonte
                  </p>
                </div>
              </div>
            </div>
                        {/* Informações de Contato */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  {/* Endereço */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0177B5]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#0177B5]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                      <p className="text-gray-600">Av. do Contorno, 6321 - 6º andar</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Bairro São Pedro, Belo Horizonte - MG
                      </p>
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Telefone / WhatsApp</h4>
                      <p className="text-gray-600">(31) 97555-7435</p>
                      <Button
                        onClick={() => window.open("https://api.whatsapp.com/send?phone=5531975557435", "_blank")}
                        className="mt-2 bg-green-500 hover:bg-green-600 text-white"
                        size="sm"
                      >
                        <i className="fa-brands fa-whatsapp mr-2"></i>
                        Enviar Mensagem
                      </Button>
                    </div>
                  </div>

                  {/* Horário */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Horário de Funcionamento</h4>
                      <div className="text-gray-600 space-y-1">
                        <p><span className="font-medium">Segunda a Sexta:</span> 8h às 18h</p>
                        <p className="text-sm text-gray-500">Sábado e Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botão Como Chegar */}
                <div className="mt-8 pt-6 border-t">
                  <Button
                    onClick={() => window.open("https://maps.app.goo.gl/bYuBdeKKY7QjF23q6", "_blank")}
                    className="w-full bg-[#0177B5] hover:bg-[#0177B5]/90 text-white text-lg py-6"
                    size="lg"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Ver no Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
