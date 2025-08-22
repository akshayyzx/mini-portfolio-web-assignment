import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-card">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Helping</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Entrepreneurs
                </span>
                <br />
                <span className="text-foreground">Dreams Come To</span>
                <br />
                <span className="text-foreground">Life</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
                Full-stack developer and entrepreneur passionate about creating innovative 
                solutions that transform ideas into successful digital products.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 group w-full sm:w-auto"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download CV
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-8 text-xs sm:text-sm text-muted-foreground px-4 sm:px-0">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">50+</div>
                <div className="text-xs sm:text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">5+</div>
                <div className="text-xs sm:text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">100%</div>
                <div className="text-xs sm:text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 scale-110" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elegant border-4 border-primary/20">
                <img 
                  src={profileImage} 
                  alt="Professional headshot" 
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-primary rounded-full opacity-80 animate-pulse" />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary/60 rounded-full opacity-60 animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce">
        {/* Mouse-like scroll container */}
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1 sm:mt-2 animate-pulse" />
        </div>

        {/* Text below indicator */}
        <span className="mt-2 text-sm sm:text-base text-primary">Scroll to view</span>
      </div>
    </section>
  );
};

export default HeroSection;