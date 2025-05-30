import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Contact = () => {
  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='container mx-auto px-4 lg:px-6'>
        <div className='text-center space-y-4 mb-16'>
          <h2 className='text-4xl font-bold text-black'>Get In Touch</h2>
          <p className='text-xl text-black max-w-2xl mx-auto'>
            Ready to transform your space? Let's discuss your project and bring
            your vision to life.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16'>
          <div className='space-y-8'>
            <div className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 rounded-lg flex items-center justify-center border border-black'>
                  <Phone className='w-6 h-6 text-black' />
                </div>
                <div>
                  <h3 className='font-semibold text-black'>Phone</h3>
                  <p className='text-black'>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 rounded-lg flex items-center justify-center border border-black'>
                  <Mail className='w-6 h-6 text-black' />
                </div>
                <div>
                  <h3 className='font-semibold text-black'>Email</h3>
                  <p className='text-black'>hello@luxeinteriors.com</p>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 rounded-lg flex items-center justify-center border border-black'>
                  <MapPin className='w-6 h-6 text-black' />
                </div>
                <div>
                  <h3 className='font-semibold text-black'>Address</h3>
                  <p className='text-black'>
                    123 Design Street, Creative District, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-black'>Follow Us</h3>
              <div className='flex space-x-4'>
                <Button
                  size='icon'
                  variant='outline'
                  className='border-black hover:bg-gray-100'
                >
                  <Instagram className='w-4 h-4 text-black' />
                </Button>
                <Button
                  size='icon'
                  variant='outline'
                  className='border-black hover:bg-gray-100'
                >
                  <Facebook className='w-4 h-4 text-black' />
                </Button>
                <Button
                  size='icon'
                  variant='outline'
                  className='border-black hover:bg-gray-100'
                >
                  <Twitter className='w-4 h-4 text-black' />
                </Button>
              </div>
            </div>
          </div>

          <Card className='border-0 shadow-lg'>
            <CardContent className='p-8'>
              <form className='space-y-6'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <label className='text-sm font-medium text-black'>
                      First Name
                    </label>
                    <Input placeholder='John' className='border-black' />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-sm font-medium text-black'>
                      Last Name
                    </label>
                    <Input placeholder='Doe' className='border-black' />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-sm font-medium text-black'>
                    Email
                  </label>
                  <Input
                    type='email'
                    placeholder='john@example.com'
                    className='border-black'
                  />
                </div>

                <div className='space-y-2'>
                  <label className='text-sm font-medium text-black'>
                    Project Type
                  </label>
                  <Input
                    placeholder='Residential, Commercial, etc.'
                    className='border-black'
                  />
                </div>

                <div className='space-y-2'>
                  <label className='text-sm font-medium text-black'>
                    Message
                  </label>
                  <Textarea
                    placeholder='Tell us about your project...'
                    className='border-black min-h-[120px]'
                  />
                </div>

                <Button className='w-full bg-black hover:bg-gray-800 text-white'>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
