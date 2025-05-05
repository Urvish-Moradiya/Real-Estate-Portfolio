
import { useState } from "react";
import { Download, Maximize, Minimize, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

type PlanType = "unit" | "site" | "tower";

interface Plan {
  type: PlanType;
  title: string;
  image: string;
  pdf: string;
}

const plans: Plan[] = [
  {
    type: "unit",
    title: "3 BHK Premium Unit",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    pdf: "#"
  },
  {
    type: "unit",
    title: "2 BHK Standard Unit",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    pdf: "#"
  },
  {
    type: "site",
    title: "Master Site Plan",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
    pdf: "#"
  },
  {
    type: "tower",
    title: "Tower Layout",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    pdf: "#"
  }
];

export const FloorPlansSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(plans[0]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  
  const handleZoomIn = () => {
    if (zoomLevel < 2) {
      setZoomLevel(zoomLevel + 0.25);
    }
  };
  
  const handleZoomOut = () => {
    if (zoomLevel > 0.5) {
      setZoomLevel(zoomLevel - 0.25);
    }
  };
  
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <section className="py-16 bg-estate-beige/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8">Floor Plans & Master Plan</h2>
        
        <Tabs defaultValue="unit" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-[400px] mx-auto">
            <TabsTrigger value="unit">Unit Plans</TabsTrigger>
            <TabsTrigger value="site">Site Plan</TabsTrigger>
            <TabsTrigger value="tower">Tower Layout</TabsTrigger>
          </TabsList>
          
          {["unit", "site", "tower"].map((planType) => (
            <TabsContent key={planType} value={planType} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Plan Image Viewer */}
                <div className="md:col-span-9">
                  <div className={`relative bg-white p-2 rounded-lg shadow-sm ${isFullScreen ? 'fixed inset-0 z-50 p-4 overflow-auto' : ''}`}>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">{selectedPlan.title}</h3>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon" onClick={handleZoomOut} disabled={zoomLevel <= 0.5}>
                          <ZoomOut size={16} />
                        </Button>
                        <Button variant="outline" size="icon" onClick={handleZoomIn} disabled={zoomLevel >= 2}>
                          <ZoomIn size={16} />
                        </Button>
                        <Button variant="outline" size="icon" onClick={toggleFullScreen}>
                          {isFullScreen ? <Minimize size={16} /> : <Maximize size={16} />}
                        </Button>
                      </div>
                    </div>
                    <div className="overflow-auto h-[400px] flex items-center justify-center">
                      <img
                        src={selectedPlan.image}
                        alt={selectedPlan.title}
                        className="object-contain transition-transform duration-300 cursor-move"
                        style={{ transform: `scale(${zoomLevel})` }}
                      />
                    </div>
                    {isFullScreen && (
                      <Button
                        className="absolute top-4 right-4"
                        variant="outline"
                        size="sm"
                        onClick={toggleFullScreen}
                      >
                        Close
                      </Button>
                    )}
                  </div>
                </div>
                
                {/* Plan Options & Downloads */}
                <div className="md:col-span-3">
                  <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                    <h4 className="font-medium mb-4">Available Plans</h4>
                    <div className="space-y-3">
                      {plans
                        .filter(plan => plan.type === planType)
                        .map((plan, index) => (
                          <div 
                            key={index}
                            className="flex items-center p-3 rounded-md cursor-pointer hover:bg-estate-beige/20 transition-colors"
                            onClick={() => setSelectedPlan(plan)}
                          >
                            <div className="w-12 h-12 rounded overflow-hidden mr-3">
                              <img 
                                src={plan.image} 
                                alt={plan.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">{plan.title}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button className="w-full hover:bg-estate-300 text-white btn-hover-slide" size="lg">
                            <Download size={16} className="mr-2" />
                            Download Floor Plan
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="space-y-4">
                            <h4 className="font-medium">Download Options</h4>
                            <div className="space-y-2">
                              <Button variant="outline" className="w-full justify-start">
                                <Download size={16} className="mr-2" />
                                PDF Format (High Res)
                              </Button>
                              <Button variant="outline" className="w-full justify-start">
                                <Download size={16} className="mr-2" />
                                CAD Drawing
                              </Button>
                              <Button variant="outline" className="w-full justify-start">
                                <Download size={16} className="mr-2" />
                                3D Walkthrough
                              </Button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FloorPlansSection;
