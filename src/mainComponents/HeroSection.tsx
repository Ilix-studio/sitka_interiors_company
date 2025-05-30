import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Define types for our carousel items
type SlideItem = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

export default function HeroSection() {
  // State for carousel
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sample carousel data
  const slides: SlideItem[] = [
    {
      id: 1,
      title: "Luxury Open Concept Living",
      subtitle: "Interior Design",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    },
    {
      id: 2,
      title: "Minimalist Kitchen Design",
      subtitle: "Interior Design",
      image:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: 3,
      title: "Contemporary Bedroom Suite",
      subtitle: "Interior Design",
      image:
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    },
    {
      id: 4,
      title: "Elegant Dining Experience",
      subtitle: "Interior Design",
      image:
        "https://images.unsplash.com/photo-1617104611622-d5f245d317f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    },
  ];

  // Handle next slide
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Handle previous slide
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent(current === 0 ? slides.length - 1 : current - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Auto-advance carousel every 5 seconds instead of 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  // Format the current slide number
  const formatSlideNumber = (num: number) => {
    return num < 10 ? `0${num + 1}` : `${num + 1}`;
  };

  return (
    <div className='relative w-full h-screen overflow-hidden bg-black'>
      {/* Navigation Header */}
      <header className='absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 text-white'>
        <div className='text-xl font-medium'>Sitka Interiors</div>
        <nav className='hidden md:flex items-center space-x-10'>
          <a
            href='#'
            className='opacity-80 hover:opacity-100 transition-opacity'
          >
            Home
          </a>
          <a
            href='#'
            className='opacity-80 hover:opacity-100 transition-opacity'
          >
            Projects
          </a>
          <a href='#' className='opacity-100 border-b-2 border-white pb-1'>
            News
          </a>
          <a
            href='#'
            className='opacity-80 hover:opacity-100 transition-opacity'
          >
            Store
          </a>
          <a
            href='#'
            className='opacity-80 hover:opacity-100 transition-opacity'
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Carousel Container */}
      <div className='w-full h-full relative'>
        {/* Carousel Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-700",
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            )}
          >
            <div
              className='absolute inset-0 w-full h-full bg-cover bg-center'
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-r from-black/40 to-transparent'></div>
            </div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className='absolute inset-0 z-30 flex flex-col justify-center px-8 md:px-16 lg:px-24'>
          <div className='max-w-2xl text-white'>
            <span className='text-lg md:text-xl font-light mb-2 block'>
              {slides[current].subtitle}
            </span>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-8'>
              {slides[current].title}
            </h1>
            <button className='flex items-center gap-2 text-white bg-transparent hover:bg-white/10 border border-white/30 px-6 py-3 rounded-sm transition-all'>
              See Project
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Slide Counter */}
        <div className='absolute top-1/4 right-8 md:right-16 z-30 text-white'>
          <div className='text-4xl md:text-5xl font-bold'>
            {formatSlideNumber(current)}
            <span className='text-white/50 text-2xl md:text-3xl'>
              /{formatSlideNumber(slides.length - 1)}
            </span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className='absolute bottom-8 left-8 z-30 flex flex-col gap-4'>
          <a
            href='#'
            className='text-white/70 hover:text-white transition-colors'
          >
            <Facebook size={20} />
          </a>
          <a
            href='#'
            className='text-white/70 hover:text-white transition-colors'
          >
            <Instagram size={20} />
          </a>
          <a
            href='#'
            className='text-white/70 hover:text-white transition-colors'
          >
            <X size={20} />
          </a>
        </div>

        {/* Carousel Controls */}
        <div className='absolute bottom-8 right-8 z-30 flex gap-2'>
          <button
            onClick={prevSlide}
            className='w-10 h-10 flex items-center justify-center text-white bg-black/30 hover:bg-black/50 rounded-full transition-colors'
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className='w-10 h-10 flex items-center justify-center text-white bg-black/30 hover:bg-black/50 rounded-full transition-colors'
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
