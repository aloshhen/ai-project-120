import { motion } from 'framer-motion'

function Navigation() {
  const navItems = [
    { label: 'Каталог', href: '#catalog' },
    { label: 'О нас', href: '#about' },
    { label: 'Контакты', href: '#footer' }
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1E293B]/50 backdrop-blur-md"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-[#3B82F6]">Dress Haven</div>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#E5E7EB] hover:text-[#3B82F6] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation