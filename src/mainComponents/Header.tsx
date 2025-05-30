import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const Header = () => {
  return (
    <header className='fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50'>
      <div className='container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between'>
        <a href='/' className='flex items-center space-x-2'>
          <div className='w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center'>
            <Home className='w-4 h-4 text-white' />
          </div>
          <span className='text-xl font-bold text-gray-900'>
            Sitka Interiors
          </span>
        </a>

        <nav className='hidden md:flex items-center space-x-8'>
          <a
            href='#home'
            className='text-gray-700 hover:text-gray-900 transition-colors'
          >
            Home
          </a>
          <a
            href='#services'
            className='text-gray-700 hover:text-gray-900 transition-colors'
          >
            Services
          </a>
          <a
            href='#portfolio'
            className='text-gray-700 hover:text-gray-900 transition-colors'
          >
            Portfolio
          </a>
          <a
            href='#about'
            className='text-gray-700 hover:text-gray-900 transition-colors'
          >
            About
          </a>
          <a
            href='#contact'
            className='text-gray-700 hover:text-gray-900 transition-colors'
          >
            Contact
          </a>
        </nav>

        <Button className='bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white'>
          Get Quote
        </Button>
      </div>
    </header>
  );
};

export default Header;
