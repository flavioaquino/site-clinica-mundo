export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-5 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img src="/favicon.ico" alt="Clínica Mundo Logo" className="w-8 h-8" />
              </div>
            </div>
            <span className="text-xl font-bold text-blue-600">Clínica Mundo</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600">
              Início
            </a>
            <a href="#especialidades" className="text-gray-700 hover:text-blue-600">
              Especialidades
            </a>
            <a href="#espaco" className="text-gray-700 hover:text-blue-600">
              Nosso Espaço
            </a>
            <a href="#equipe" className="text-gray-700 hover:text-blue-600">
              Equipe
            </a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
