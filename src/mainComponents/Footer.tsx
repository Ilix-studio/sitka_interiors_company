import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className='bg-black text-white py-12'>
        <div className='container mx-auto px-4 lg:px-6'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div className='space-y-4'>
              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8 bg-white rounded-lg flex items-center justify-center'>
                  <Home className='w-4 h-4 text-black' />
                </div>
                <span className='text-xl font-bold'>Sitka Interiors</span>
              </div>
              <p className='text-white/70'>
                Creating beautiful, functional spaces that inspire and delight.
              </p>
            </div>

            <div className='space-y-4'>
              <h3 className='text-lg font-semibold'>Services</h3>
              <ul className='space-y-2 text-white/70'>
                <li>
                  <Link to='#' className='hover:text-white transition-colors'>
                    Residential Design
                  </Link>
                </li>
                <li>
                  <Link to='#' className='hover:text-white transition-colors'>
                    Commercial Spaces
                  </Link>
                </li>
                <li>
                  <Link to='#' className='hover:text-white transition-colors'>
                    Color Consultation
                  </Link>
                </li>
                <li>
                  <Link to='#' className='hover:text-white transition-colors'>
                    Space Planning
                  </Link>
                </li>
              </ul>
            </div>

            <div className='space-y-4'>
              <h3 className='text-lg font-semibold'>Company</h3>
              <ul className='space-y-2 text-white/70'>
                <li>
                  <Link to='#' className='hover:text-white transition-colors'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to='#' className='hover:text-white transition-colors'>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to='#' className='hover:text-white transition-colors'>
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to='#' className='hover:text-white transition-colors'>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className='space-y-4'>
              <h3 className='text-lg font-semibold'>Contact</h3>
              <ul className='space-y-2 text-white/70'>
                <li>+1 (555) 123-4567</li>
                <li>hello@luxeinteriors.com</li>
                <li>
                  123 Design Street
                  <br />
                  Creative District, NY 10001
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-white/20 mt-12 pt-8 text-center text-white/60'>
            <p>
              &copy; {new Date().getFullYear()} Sitka Interiors. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot */}
      <div className='fixed bottom-6 right-6 z-50'>
        <Button
          size='lg'
          className='w-16 h-16 rounded-full bg-black hover:bg-white text-white hover:text-black shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse border border-white'
        >
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
            />
          </svg>
        </Button>
      </div>
    </>
  );
};

export default Footer;
