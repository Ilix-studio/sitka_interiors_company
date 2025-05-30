import {
  ChevronRight,
  PanelTop,
  Sofa,
  Palette,
  PencilRuler,
  Lightbulb,
  Home,
} from "lucide-react";

// Define types for our service items
type ServiceItem = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

// Services component
export const OurServices = () => {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Residential Interior Design",
      description:
        "Transform your home into a personalized sanctuary with our bespoke residential interior design services.",
      icon: <Home className='w-10 h-10' />,
    },
    {
      id: 2,
      title: "Space Planning",
      description:
        "Optimize flow and functionality with strategic space planning that enhances both aesthetics and usability.",
      icon: <PanelTop className='w-10 h-10' />,
    },
    {
      id: 3,
      title: "Custom Furniture Design",
      description:
        "Elevate your interior with unique, tailor-made furniture pieces designed specifically for your space.",
      icon: <Sofa className='w-10 h-10' />,
    },
    {
      id: 4,
      title: "Color Consultation",
      description:
        "Create harmony and mood with expertly curated color palettes that reflect your personality and vision.",
      icon: <Palette className='w-10 h-10' />,
    },
    {
      id: 5,
      title: "3D Visualization",
      description:
        "Experience your design before implementation with photorealistic 3D renderings of your future space.",
      icon: <PencilRuler className='w-10 h-10' />,
    },
    {
      id: 6,
      title: "Lighting Design",
      description:
        "Enhance ambiance and functionality with thoughtfully planned lighting solutions for every mood and purpose.",
      icon: <Lightbulb className='w-10 h-10' />,
    },
  ];

  return (
    <section className='w-full py-24 bg-neutral-50'>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='text-center mb-16'>
          <span className='text-neutral-500 uppercase tracking-wider text-sm font-medium'>
            Our Expertise
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-2 mb-4'>
            Interior Design Services
          </h2>
          <p className='text-neutral-600 max-w-2xl mx-auto'>
            We blend aesthetics with functionality to create captivating
            interior spaces that resonate with your lifestyle and aspirations.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <div
              key={service.id}
              className='bg-white p-8 rounded-sm border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 group'
            >
              <div className='text-neutral-800 mb-5 opacity-80 group-hover:text-blue-600 group-hover:opacity-100 transition-colors'>
                {service.icon}
              </div>
              <h3 className='text-xl font-semibold mb-3'>{service.title}</h3>
              <p className='text-neutral-600'>{service.description}</p>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <button className='flex items-center gap-2 text-white bg-neutral-900 hover:bg-neutral-800 px-6 py-3 rounded-sm transition-all mx-auto'>
            View All Services
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
