import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#FFF5F7] border-t border-pink-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="logo text-3xl text-pink-600 mb-4">Caribe</h3>
            <p className="text-gray-600">
              Preservando y promoviendo las artesanías queretanas con orgullo y pasión.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Contáctanos</h4>
            <p className="text-gray-600">Av. Constituyentes 1234</p>
            <p className="text-gray-600">Santiago de Querétaro, Qro.</p>
            <p className="text-gray-600">Tel: +52 442 123 4567</p>
            <p className="text-gray-600">Email: info@caribe-artesanias.mx</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-600 hover:text-pink-700 transition duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-700 transition duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-700 transition duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-pink-100 pt-8 text-center">
          <p className="text-gray-600">&copy; 2024 Caribe. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

