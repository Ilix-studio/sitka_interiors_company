import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Define types for our work/project items
type ProjectCategory =
  | "All"
  | "Modular Kitchen"
  | "Living Room"
  | "Bedroom"
  | "Kids Bedroom"
  | "Wardrobe"
  | "Dining Room"
  | "Pooja Room"
  | "Home Office"
  | "Bathroom"
  | "Balcony";

type ProjectItem = {
  id: number;
  title: string;
  image: string;
  category: ProjectCategory;
  description?: string;
};

// OurWork component
export const OurDesigns = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [visibleProjects, setVisibleProjects] = useState<ProjectItem[]>([]);
  const [startIdx, setStartIdx] = useState(0);
  const projectsPerPage = 3;
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sample project data
  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "A Bold Navy Blue And White Modular Kitchen Design",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1968&auto=format&fit=crop",
      category: "Modular Kitchen",
    },
    {
      id: 2,
      title: "Stylish and Roomy Pastel U-Shaped Kitchen Design For Couples",
      image:
        "https://images.unsplash.com/photo-1556911073-a517e752729c?q=80&w=1974&auto=format&fit=crop",
      category: "Modular Kitchen",
    },
    {
      id: 3,
      title: "A Blue L-Shaped Modular Kitchen Design With A Tiled Backsplash",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1974&auto=format&fit=crop",
      category: "Modular Kitchen",
    },
    {
      id: 4,
      title: "Contemporary Living Room With Natural Materials",
      image:
        "https://images.unsplash.com/photo-1616137358059-93b2136c0f9b?q=80&w=1932&auto=format&fit=crop",
      category: "Living Room",
    },
    {
      id: 5,
      title: "Minimalist Scandinavian Bedroom With Warm Textiles",
      image:
        "https://images.unsplash.com/photo-1616137358020-10d8ce3ea38c?q=80&w=1932&auto=format&fit=crop",
      category: "Bedroom",
    },
    {
      id: 6,
      title: "Playful and Educational Kids Bedroom With Storage Solutions",
      image:
        "https://images.unsplash.com/photo-1617104678098-de229db51175?q=80&w=1964&auto=format&fit=crop",
      category: "Kids Bedroom",
    },
    {
      id: 7,
      title: "Custom Built-in Wardrobe With LED Lighting",
      image:
        "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1932&auto=format&fit=crop",
      category: "Wardrobe",
    },
    {
      id: 8,
      title: "Elegant Dining Room With Statement Chandelier",
      image:
        "https://images.unsplash.com/photo-1617104678147-39eaf12a1b74?q=80&w=1964&auto=format&fit=crop",
      category: "Dining Room",
    },
    {
      id: 9,
      title: "Traditional Pooja Room With Modern Elements",
      image:
        "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1950&auto=format&fit=crop",
      category: "Pooja Room",
    },
  ];

  // Categories for filter
  const categories: ProjectCategory[] = [
    "All",
    "Modular Kitchen",
    "Living Room",
    "Bedroom",
    "Kids Bedroom",
    "Wardrobe",
    "Dining Room",
    "Pooja Room",
    "Home Office",
    "Bathroom",
    "Balcony",
  ];

  // Filter projects based on active category
  useEffect(() => {
    const filtered =
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory);
    setVisibleProjects(filtered);
    setStartIdx(0); // Reset pagination when category changes

    // Smooth scroll back to top of section when changing categories
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeCategory]);

  // Get current page projects
  const currentProjects = visibleProjects.slice(
    startIdx,
    startIdx + projectsPerPage
  );

  // Navigation handlers
  const handlePrevious = () => {
    setStartIdx(Math.max(0, startIdx - projectsPerPage));
  };

  const handleNext = () => {
    setStartIdx(
      Math.min(
        visibleProjects.length - projectsPerPage,
        startIdx + projectsPerPage
      )
    );
  };

  // Check if can go previous or next
  const canGoPrevious = startIdx > 0;
  const canGoNext = startIdx + projectsPerPage < visibleProjects.length;

  return (
    <section ref={scrollRef} className='w-full py-24 bg-white'>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='text-center mb-10'>
          <span className='text-neutral-500 uppercase tracking-wider text-sm font-medium'>
            Our Portfolio
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-2 mb-4'>
            Home Interior Designs
          </h2>
          <p className='text-neutral-600 max-w-3xl mx-auto'>
            Explore the latest interior designs for kitchens, bedrooms, living
            rooms, and more. Blend style, functionality, and smart storage to
            create your dream home!
          </p>
        </div>

        {/* Category filter */}
        <div className='mb-12 overflow-x-auto pb-4'>
          <div className='flex space-x-6 min-w-max'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "text-sm whitespace-nowrap transition-colors",
                  activeCategory === category
                    ? "text-black font-medium"
                    : "text-neutral-600 hover:text-neutral-900"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Section title */}
        <div className='mb-8'>
          <h3 className='text-2xl font-bold'>
            {activeCategory === "All"
              ? "Featured Projects"
              : `${activeCategory} Designs`}
          </h3>
        </div>

        {/* Projects grid */}
        <div className='relative'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {currentProjects.map((project) => (
              <div key={project.id} className='group'>
                <div className='relative overflow-hidden mb-4'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </div>
                <h4 className='text-lg font-semibold mb-2'>{project.title}</h4>
                <div className='flex justify-between items-center'>
                  <a
                    href='#'
                    className='text-neutral-800 hover:text-black text-sm flex items-center gap-1'
                  >
                    More Details <ChevronRight size={14} />
                  </a>
                  <button className='text-neutral-800 border border-neutral-800 hover:bg-neutral-800 hover:text-white px-4 py-1.5 text-sm transition-colors'>
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className='flex justify-between mt-10'>
            <button
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-full border",
                canGoPrevious
                  ? "border-neutral-300 hover:border-neutral-600 text-neutral-600"
                  : "border-neutral-200 text-neutral-300 cursor-not-allowed"
              )}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-full border",
                canGoNext
                  ? "border-neutral-300 hover:border-neutral-600 text-neutral-600"
                  : "border-neutral-200 text-neutral-300 cursor-not-allowed"
              )}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* View more link */}
          <div className='text-center mt-10'>
            <a
              href='#'
              className='inline-flex items-center text-neutral-800 hover:text-black font-medium'
            >
              View More {activeCategory} Designs <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
