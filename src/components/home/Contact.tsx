
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useInView } from "@/hooks/use-in-view";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-estate-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-estate-charcoal/70">
            Have a project in mind or interested in learning more about our services? 
            We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div 
            className={`transform transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-estate rounded-full p-3 mr-4 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-estate-charcoal">Phone</h4>
                  <p className="text-estate-charcoal/70">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-estate rounded-full p-3 mr-4 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-estate-charcoal">Email</h4>
                  <p className="text-estate-charcoal/70">info@sereneestate.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-estate rounded-full p-3 mr-4 text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-estate-charcoal">Office</h4>
                  <p className="text-estate-charcoal/70">123 Builder Avenue<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden h-64 md:h-80">
              {/* Replace with an actual map embed if desired */}
              <div className="w-full h-full bg-estate-beige/50 flex items-center justify-center">
                <p className="text-estate-charcoal/60 text-center px-4">
                  Interactive map would be displayed here.<br />
                  Consider embedding Google Maps for a live implementation.
                </p>
              </div>
            </div>
          </div>
          
          <div 
            className={`transform transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="glassmorphism rounded-lg p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-estate-charcoal mb-1">
                    Full Name
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    required 
                    className="bg-white/70 border-estate-medium-gray focus:border-estate"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-estate-charcoal mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    className="bg-white/70 border-estate-medium-gray focus:border-estate"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-estate-charcoal mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  name="subject" 
                  required 
                  className="bg-white/70 border-estate-medium-gray focus:border-estate"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-estate-charcoal mb-1">
                  Your Message
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  className="bg-white/70 border-estate-medium-gray focus:border-estate"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-estate hover:bg-estate-dark text-white btn-hover-slide flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
