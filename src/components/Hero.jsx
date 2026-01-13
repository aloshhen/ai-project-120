import { motion } from 'framer-motion'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import { BackgroundBeams } from './ui/background-beams'

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <BackgroundBeams />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
        className="z-10 text-center max-w-4xl px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">
          Элегантность в каждом платье
        </h1>
        <p className="text-xl text-[#E5E7EB] mb-8 leading-relaxed">
          Откройте для себя уникальные женские платья, созданные с любовью и вниманием к деталям
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3B82F6] text-white px-6 py-3 rounded-[1rem] flex items-center gap-2"
          >
            <ShoppingBag size={20} />
            Посмотреть каталог
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero