import { useState } from "react";
import { 
  Home, 
  Waves, 
  Dumbbell, 
  Car,
  Smartphone, 
  Trees, 
  Building
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

type AmenityCategory = "luxury" | "essentials" | "green";

interface Amenity {
  name: string;
  icon: any;
  description: string;
  categories: AmenityCategory[];
}

const amenities: Amenity[] = [
  {
    name: "Clubhouse",
    icon: Home,
    description: "Elegant clubhouse with entertainment spaces, meeting rooms, and lounge areas for residents.",
    categories: ["luxury"]
  },
  {
    name: "Swimming Pool",
    icon: Waves,
    description: "Temperature-controlled infinity pool with separate kids' wading area and sun deck.",
    categories: ["luxury"]
  },
  {
    name: "Gym",
    icon: Dumbbell,
    description: "State-of-the-art fitness center with cardio equipment, weights, and yoga studio.",
    categories: ["essentials"]
  },
  {
    name: "Parking",
    icon: Car,
    description: "Reserved basement parking with 24/7 security and EV charging stations.",
    categories: ["essentials"]
  },
  {
    name: "Smart Home",
    icon: Smartphone,
    description: "Integrated home automation for lighting, climate, security, and entertainment systems.",
    categories: ["luxury", "green"]
  },
  {
    name: "Rooftop Garden",
    icon: Trees,
    description: "Landscaped rooftop with panoramic views, seating areas, and herb gardens.",
    categories: ["green", "luxury"]
  },
  {
    name: "EV Charging",
    icon: Building,
    description: "Electric vehicle charging stations available in designated parking areas.",
    categories: ["green"]
  },
];

export const AmenitiesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<AmenityCategory | "all">("all");
  
  const filteredAmenities = selectedCategory === "all" 
    ? amenities 
    : amenities.filter(amenity => amenity.categories.includes(selectedCategory as AmenityCategory));

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8">Amenities & Features</h2>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid grid-cols-4 max-w-[600px] mx-auto">
            <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>All</TabsTrigger>
            <TabsTrigger value="luxury" onClick={() => setSelectedCategory("luxury")}>Luxury</TabsTrigger>
            <TabsTrigger value="essentials" onClick={() => setSelectedCategory("essentials")}>Essentials</TabsTrigger>
            <TabsTrigger value="green" onClick={() => setSelectedCategory("green")}>Green</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {filteredAmenities.map((amenity, index) => (
                <AmenityCard key={index} amenity={amenity} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="luxury" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {filteredAmenities.map((amenity, index) => (
                <AmenityCard key={index} amenity={amenity} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="essentials" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {filteredAmenities.map((amenity, index) => (
                <AmenityCard key={index} amenity={amenity} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="green" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {filteredAmenities.map((amenity, index) => (
                <AmenityCard key={index} amenity={amenity} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const AmenityCard = ({ amenity }: { amenity: Amenity }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="bg-estate-beige/30 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
              <amenity.icon className="h-8 w-8 text-estate" />
            </div>
            <h3 className="text-lg font-medium mb-2">{amenity.name}</h3>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {amenity.categories.map((category) => (
                <Badge 
                  key={category}
                  variant="outline" 
                  className={cn(
                    "text-xs capitalize", 
                    category === "luxury" && "bg-amber-100 text-amber-800 border-amber-200",
                    category === "essentials" && "bg-blue-100 text-blue-800 border-blue-200",
                    category === "green" && "bg-green-100 text-green-800 border-green-200"
                  )}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{amenity.name}</h4>
            <p className="text-sm">{amenity.description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default AmenitiesSection;
