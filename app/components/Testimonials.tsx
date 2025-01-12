import Image from 'next/image';

const testimonials = [
  {
    name: 'Ana María González',
    role: 'Coleccionista de Arte',
    image: '/testimonial1.jpg',
    quote: 'Las muñecas tradicionales de Querétaro que adquirí en Caribe son verdaderas obras de arte que reflejan la rica cultura de la región.',
  },
  {
    name: 'Carlos Ramírez',
    role: 'Diseñador de Interiores',
    image: '/testimonial2.jpg',
    quote: 'Los textiles queretanos de Caribe han añadido un toque único y auténtico a mis proyectos de diseño.',
  },
  {
    name: 'Isabel Mendoza',
    role: 'Artesana Local',
    image: '/testimonial3.jpg',
    quote: 'Caribe ha sido fundamental en la preservación y promoción de nuestras técnicas artesanales tradicionales.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 font-libre-baskerville text-gray-900">
          Voces de nuestra comunidad
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#FFF5F7] rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-pink-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

