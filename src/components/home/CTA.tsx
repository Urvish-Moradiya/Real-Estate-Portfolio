
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-estate text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Dream?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/80">
          Let's start a conversation about your vision and how we can bring it to life with our expertise.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-white text-estate hover:bg-estate-light btn-hover-slide">
              Schedule a Consultation
            </Button>
          </Link>
          <Link to="/projects">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Explore Our Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
