'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

import queretaroCraft1 from "@/public/queretaro-craft-1.png"
import queretaroCraft2 from "@/public/queretaro-craft-2.jpg"
import queretaroCraft3 from "@/public/queretaro-craft-3.jpg"

const carouselItems = [
  {
    image: queretaroCraft1,
    title: 'Artesanías del estado de Querétaro,',
    subtitle: 'directamente de las manos de los artesanos'
  },
  {
    image: queretaroCraft2,
    title: 'Muñecas tradicionales',
    subtitle: 'hechas a mano con amor'
  },
  {
    image: queretaroCraft3,
    title: 'Textiles queretanos',
    subtitle: 'tejidos con tradición'
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
    }, 10_000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-[80vh] lg:aspect-[16_/_7] lg:max-w-full">
      <div className='absolute inset-0'>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'
            }`}
          >
            <div 
              className='
              isolate
              w-full
              h-full
              relative
              after:absolute 
              after:inset-0 
              after:z-10 
              after:bg-gradient-to-r 
              after:from-pink-100
              after:to-transparent 
              after:opacity-100
              after:pointer-events-none
              '>
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                quality={90}
                priority={index === 0}
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-20" />
            <div className="absolute z-10 inset-0 flex flex-col items-start justify-center px-8 md:px-16 lg:px-24">
              <div className="max-w-3xl space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-libre-baskerville text-black leading-tight">
                  {item.title}
                </h1>
                <p className="text-xl md:text-2xl text-black font-libre-baskerville">
                  {item.subtitle}
                </p>
                <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-full transition duration-300">
                  Explorar Colección
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

