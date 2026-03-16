import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from './ui/button';

export function Location() {
  const phoneNumber = "(770) 631-8338";
  const address = "1200 GA-74 #12, Peachtree City, GA 30269";
  
  const hours = [
    { day: "Monday - Thursday", time: "11:00 AM - 9:00 PM" },
    { day: "Friday - Saturday", time: "11:00 AM - 10:00 PM" },
    { day: "Sunday", time: "12:00 PM - 9:00 PM" }
  ];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6d1c57] mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Come experience authentic Mexican cuisine in Peachtree City
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#6d1c57] rounded-lg flex items-center justify-center text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-2">Address</h3>
                <p className="text-foreground/70">{address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#6d1c57] rounded-lg flex items-center justify-center text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-2">Phone</h3>
                <a 
                  href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                  className="text-[#6d1c57] hover:text-[#93327a] transition-colors"
                >
                  {phoneNumber}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#6d1c57] rounded-lg flex items-center justify-center text-white">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-3">Hours</h3>
                <div className="space-y-2">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-foreground/70">
                      <span className="font-medium">{schedule.day}</span>
                      <span>{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild
                className="bg-[#6d1c57] hover:bg-[#93327a] text-white"
              >
                <a href={`tel:${phoneNumber.replace(/\D/g, '')}`}>
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-[#6d1c57] text-[#6d1c57] hover:bg-[#6d1c57] hover:text-white"
              >
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 w-4 h-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.8!2d-84.5937!3d33.3965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDIzJzQ3LjQiTiA4NMKwMzUnMzcuMyJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-br from-[#6d1c57]/20 to-[#ea1758]/20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
