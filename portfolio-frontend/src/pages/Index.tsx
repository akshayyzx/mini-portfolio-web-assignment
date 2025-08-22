import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import TechScrollStrip from "@/components/TechStackScroll";
import UserFeedbackSection from "@/components/Feedback";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>

        <section id="techstack">
        <TechScrollStrip/>
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="projects">
          <UserFeedbackSection />
        </section>
      
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-card/50 border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-foreground">Dev</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 Developer Portfolio. Crafted with passion and precision.
            </p>
            <div className="flex justify-center space-x-6 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">LinkedIn</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
