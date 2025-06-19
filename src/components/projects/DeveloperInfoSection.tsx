import { Building2, Award, Medal, UserRound, UsersRound } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const partners = [
  {
    name: "Arch Studio Design",
    role: "Architecture Partner",
    logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200&h=100&fit=crop&auto=format",
  },
  {
    name: "Interio Solutions",
    role: "Interior Design Partner",
    logo: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=200&h=100&fit=crop&auto=format",
  },

];

export const DeveloperInfoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8">Developer Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About the Developer */}
          <div>
            <div className="flex items-start mb-6">
              <div className="bg-estate-beige/40 p-3 rounded-full mr-4">
                <Building2 className="text-estate h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Estate Builders Inc.</h3>
                <p className="text-estate-charcoal/80 mb-4">
                  With over 25 years of excellence in real estate development, Estate Builders has delivered 
                  over 50 landmark projects across the country. Our commitment to quality, innovation, 
                  and sustainability has earned us numerous accolades and the trust of thousands of satisfied customers.
                </p>
              </div>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="mission">
                <AccordionTrigger className="text-lg font-medium">Our Mission & Values</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Estate Builders is committed to creating living spaces that inspire and elevate 
                    the quality of life while maintaining the highest standards of craftsmanship, 
                    sustainability, and customer satisfaction.
                  </p>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-estate mr-2"></div>
                      <span>Excellence in design and execution</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-estate mr-2"></div>
                      <span>Environmental responsibility</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-estate mr-2"></div>
                      <span>Customer-centric approach</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-estate mr-2"></div>
                      <span>Innovation in building technology</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="leadership">
                <AccordionTrigger className="text-lg font-medium">Leadership Team</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-estate-beige/60 rounded-full flex items-center justify-center mr-4">
                        <UserRound className="h-6 w-6 text-estate" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Jonathan Doe</h4>
                        <p className="text-sm text-estate-charcoal/70">Founder & CEO</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-estate-beige/60 rounded-full flex items-center justify-center mr-4">
                        <UsersRound className="h-6 w-6 text-estate" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Sarah Johnson</h4>
                        <p className="text-sm text-estate-charcoal/70">Chief Architect</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="recognition">
                <AccordionTrigger className="text-lg font-medium">Recognition & Awards</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-estate mt-0.5 mr-3" />
                      <div>
                        <h5 className="font-medium">Best Residential Project 2023</h5>
                        <p className="text-sm text-estate-charcoal/70">International Real Estate Awards</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Medal className="h-5 w-5 text-estate mt-0.5 mr-3" />
                      <div>
                        <h5 className="font-medium">Sustainable Developer of the Year</h5>
                        <p className="text-sm text-estate-charcoal/70">Green Building Council</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          {/* Partners */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Partners</h3>
            <p className="text-estate-charcoal/80 mb-8">
              Excellence in real estate development requires collaboration with the best. 
              Meet our strategic partners who help bring our vision to life with their expertise and craftsmanship.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="bg-estate-beige/20 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
                  <div className="h-16 mb-4 flex items-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full object-contain"
                    />
                  </div>
                  <h4 className="font-medium">{partner.name}</h4>
                  <p className="text-sm text-estate-charcoal/70">{partner.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperInfoSection;
