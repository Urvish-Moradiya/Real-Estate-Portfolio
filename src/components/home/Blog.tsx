
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/use-in-view";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Evolution of Modern Architectural Design",
    excerpt: "Exploring the latest trends in architectural design and how they reflect changing lifestyles and environmental concerns.",
    author: "Emma Richardson",
    date: "May 1, 2025",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Architecture"
  },
  {
    id: 2,
    title: "Sustainable Building Materials for Future Homes",
    excerpt: "A deep dive into eco-friendly construction materials that are revolutionizing how we build while reducing environmental impact.",
    author: "Marcus Johnson",
    date: "April 22, 2025",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Sustainability"
  },
  {
    id: 3,
    title: "Creating Luxury Spaces: The Art of Interior Design",
    excerpt: "Discover how professional interior designers transform ordinary spaces into extraordinary experiences through thoughtful design.",
    author: "Sofia Chen",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    category: "Interior Design"
  }
];

const Blog = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section ref={sectionRef} id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Articles</h2>
            <p className="text-estate-charcoal/70">
              Insights and inspiration from our world of design and construction.
            </p>
          </div>
          <Link to="/blog" className="hidden md:flex items-center mt-4 md:mt-0 text-estate hover:text-estate-dark">
            View All Articles <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-estate text-white px-3 py-1 text-xs font-semibold rounded">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-estate transition-colors">
                  {post.title}
                </h3>
                <p className="text-estate-charcoal/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-estate-charcoal/60">
                    <span>{post.date}</span>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-estate font-medium flex items-center hover:text-estate-dark transition-colors"
                  >
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex md:hidden justify-center mt-8">
          <Link to="/blog">
            <Button className="bg-estate hover:bg-estate-dark text-white btn-hover-slide">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
