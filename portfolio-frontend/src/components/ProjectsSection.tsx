import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Search, Filter } from "lucide-react";
import projectsData from "@/data/projects.json";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  link: string;
}

const ProjectsSection = () => {
  const [projects] = useState<Project[]>(projectsData);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterProjects(term, selectedCategory);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterProjects(searchTerm, category);
  };

  const filterProjects = (search: string, category: string) => {
    let filtered = projects;
    
    if (category !== "All") {
      filtered = filtered.filter(project => project.category === category);
    }
    
    if (search) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(search.toLowerCase()))
      );
    }
    
    setFilteredProjects(filtered);
  };

  const ProjectCard = ({ project }: { project: Project }) => {
    const [imgError, setImgError] = useState(false);

    return (
      <div className="group relative bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-card hover:-translate-y-2 cursor-pointer">
        
        {/* Project Image */}
        <div className="relative w-full h-56 overflow-hidden bg-gradient-dark">
          {!imgError ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-6xl text-primary/40">
              💻
            </div>
          )}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

          {/* Hover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <Badge variant="secondary" className="text-xs">
              {project.category}
            </Badge>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs border-primary/30 text-primary/80">
                {tech}
              </Badge>
            ))}
          </div>
          
          {/* Action Button */}
          <Button 
            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group/btn"
            onClick={() => window.open(project.link, '_blank')}
          >
            View Project
            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Featured </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a collection of innovative solutions that showcase expertise 
            across various technologies and industries.
          </p>
        </div>
        
        {/* Search and Filter Controls */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search projects by title, description, or technology..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg bg-card/50 border-border/50 focus:border-primary/50 rounded-xl"
            />
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Filter className="h-5 w-5 text-muted-foreground mt-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryFilter(category)}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-gradient-primary shadow-glow" 
                    : "border-primary/30 text-primary/80 hover:bg-primary/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">No Projects Found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or browse all projects.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setFilteredProjects(projects);
              }}
              className="mt-4 bg-gradient-primary"
            >
              Clear Filters
            </Button>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-dark rounded-3xl p-12 border border-border/50">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology 
              and innovative solutions tailored to your needs.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
