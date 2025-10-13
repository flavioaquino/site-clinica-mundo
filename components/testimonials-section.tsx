"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Testimonial {
  id: number
  name: string
  relation: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria S.",
    relation: "Mãe",
    text: "Excelente atendimento! A equipe é muito atenciosa e meu filho se desenvolveu muito desde que começou o tratamento aqui.",
    rating: 5
  },
  {
    id: 2,
    name: "João P.",
    relation: "Pai",
    text: "Ambiente acolhedor e profissionais muito qualificados. O coworking é um diferencial incrível para aproveitar o tempo.",
    rating: 5
  },
  {
    id: 3,
    name: "Ana C.",
    relation: "Responsável",
    text: "A localização é perfeita e o espaço é muito confortável. Recomendo demais!",
    rating: 5
  },
  {
    id: 4,
    name: "Carlos M.",
    relation: "Pai",
    text: "Equipe interdisciplinar excepcional. Notamos grande evolução no desenvolvimento do nosso filho.",
    rating: 5
  },
  {
    id: 5,
    name: "Fernanda L.",
    relation: "Mãe",
    text: "Estrutura moderna e atendimento humanizado. Minha filha adora vir para as sessões!",
    rating: 5
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(testimonials.length - itemsPerPage, 0) : prevIndex - itemsPerPage
    )
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section className="py-20 bg-gradient-to-br from-[#0177B5]/5 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0177B5] mb-4">
            O Que Dizem as Famílias
          </h2>
          <p className="text-lg text-gray-600">
            Experiências reais na Clínica Mundo
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 min-h-[80px]">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#0177B5]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.relation}</p>
                </div>
              </Card>
            ))}
          </div>

          {testimonials.length > itemsPerPage && (
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="rounded-full bg-white hover:bg-[#0177B5]/10 border-[#0177B5]/30"
              >
                <ChevronLeft className="w-6 h-6 text-[#0177B5]" />
              </Button>
              
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * itemsPerPage)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / itemsPerPage) === index
                        ? "bg-[#0177B5] w-8"
                        : "bg-[#0177B5]/30"
                    }`}
                    aria-label={`Ir para página ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="rounded-full bg-white hover:bg-[#0177B5]/10 border-[#0177B5]/30"
              >
                <ChevronRight className="w-6 h-6 text-[#0177B5]" />
              </Button>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Quer compartilhar sua experiência?
          </p>
          <Button 
            onClick={() => window.open("https://api.whatsapp.com/send?phone=553175557435&text=Gostaria%20de%20compartilhar%20meu%20depoimento", "_blank")}
            className="bg-[#0177B5] hover:bg-[#0177B5]/90 text-white"
          >
            Enviar Depoimento
          </Button>
        </div>
      </div>
    </section>
  )
}
