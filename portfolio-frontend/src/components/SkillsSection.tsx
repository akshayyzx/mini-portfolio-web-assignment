import { 
  Code2, 
  Palette, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  Brain, 
  Shield,
  Cloud,
  Cpu
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Vue.js, Angular, TypeScript",
    color: "text-blue-400"
  },
  {
    icon: Database,
    title: "Backend Development", 
    description: "Node.js, Python, Django, PHP",
    color: "text-green-400"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Flutter, iOS, Android",
    color: "text-purple-400"
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "HTML5, CSS3, JavaScript, WebAPI",
    color: "text-orange-400"
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "AWS, Azure, GCP, Docker",
    color: "text-cyan-400"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Sketch, Prototyping",
    color: "text-pink-400"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "TensorFlow, PyTorch, OpenAI",
    color: "text-indigo-400"
  },
  {
    icon: Shield,
    title: "Security",
    description: "Authentication, Encryption, Auditing",
    color: "text-red-400"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, Caching, Monitoring",
    color: "text-yellow-400"
  },
  {
    icon: Cpu,
    title: "DevOps",
    description: "CI/CD, Kubernetes, Monitoring",
    color: "text-emerald-400"
  }
];

const SkillsSection = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Skills & </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies 
            to bring your vision to life with precision and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-2"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className={`${skill.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={40} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {skill.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {skill.description}
                  </p>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
        
        {/* Achievement Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "25+", label: "Technologies Mastered" },
            { value: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;