export function SpaceSection() {
  const images = [
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
  ]

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
              className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Espaço da clínica ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

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
