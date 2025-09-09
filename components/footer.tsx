"use client"

import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <img src="/favicon.ico" alt="Clínica Mundo Logo" className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">Clínica Mundo</span>
            </div>
            <p className="text-gray-400 mb-6">
              Cuidado especializado e humanizado para o desenvolvimento integral das crianças.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/clinica.mundo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="http://wa.me/553175557435"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">(31) 7555-7435</p>
                  <p onClick={() => window.open("http://wa.me/553175557435", "_blank")} className="text-gray-400 text-sm cursor-pointer">WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">contato@clinicamundo.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Localização</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-300">Savassi - Belo Horizonte, MG</p>
                <p className="text-gray-400 text-sm">Localização privilegiada</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Horário</h3>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <p className="text-gray-300">Segunda a Sexta</p>
                <p className="text-gray-400 text-sm">8h às 18h</p>
                <p className="text-gray-300">Sábado</p>
                <p className="text-gray-400 text-sm">8h às 12h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 Clínica Mundo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
