import { motion } from "framer-motion";
import Logo from "./../assets/Sitka.png";

const About = () => {
  return (
    <section id='about' className='py-20 bg-white'>
      <div className='container mx-auto px-4 lg:px-6'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-6'>
            <h2 className='text-4xl font-bold text-gray-900'>
              About Sitka Interiors
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed'>
              With over 15 years of experience in interior design, we've built a
              reputation for creating exceptional spaces that perfectly balance
              aesthetics and functionality. Our team of talented designers
              brings creativity, expertise, and passion to every project.
            </p>
            <p className='text-lg text-gray-600 leading-relaxed'>
              We believe that great design should tell a story – your story.
              That's why we take the time to understand your lifestyle,
              preferences, and dreams before creating spaces that truly reflect
              who you are.
            </p>

            <div className='grid grid-cols-2 gap-6 pt-4'>
              <div>
                <h3 className='text-2xl font-bold text-gray-900'>500+</h3>
                <p className='text-gray-600'>Happy Clients</p>
              </div>
              <div>
                <h3 className='text-2xl font-bold text-gray-900'>25+</h3>
                <p className='text-gray-600'>Design Awards</p>
              </div>
            </div>
          </div>

          <div className='relative'>
            <img
              src='/placeholder.svg?height=500&width=500'
              alt='Interior designer at work'
              width={500}
              height={500}
              className='rounded-2xl shadow-2xl'
            />
            <motion.div
              className='absolute bottom-0 right-0 z-0 hidden md:block'
              animate={{ rotate: 360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <img
                src={Logo}
                alt='Company logo'
                className='w-32 h-32 opacity-90'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
