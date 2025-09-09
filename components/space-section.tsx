"use client"

import { useState } from 'react'

export function SpaceSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
    "/images/img9.jpg",
    "/images/img10.jpg"
  ]

  const handleImageClick = (src: string) => {
    setSelectedImage(src)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="espaco" className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-blue-500 rounded-full"></div>
              ))}
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nosso <span className="text-blue-500">Espaço</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleImageClick(src)}
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Espaço da clínica ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-xl max-h-[100vh] w-full">
              <button
                className="absolute -top-10 right-0 text-white text-xl p-2"
                onClick={closeModal}
              >
                ✕
              </button>
              <img
                src={selectedImage}
                alt="Imagem ampliada"
                className="w-full h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Um ambiente acolhedor e moderno, especialmente projetado para o bem-estar das crianças e tranquilidade das
            famílias. Cada espaço foi pensado para proporcionar conforto e estimular o desenvolvimento infantil.
          </p>
        </div>
      </div>
    </section>
  )
}
