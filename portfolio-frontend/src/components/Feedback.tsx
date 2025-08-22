import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const UserFeedbackSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      feedback: "Outstanding work! The attention to detail and technical expertise delivered exactly what we needed. Our project was completed ahead of schedule with exceptional quality.",
      project: "E-commerce Platform",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "CEO",
      company: "StartupXYZ",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      feedback: "Incredible problem-solving skills and communication throughout the entire process. The final product exceeded our expectations and has significantly improved our user engagement.",
      project: "Mobile App Development",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Digital Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      feedback: "Professional, reliable, and innovative. The UI/UX design was exactly what our brand needed. Highly recommend for any serious development project.",
      project: "Brand Website Redesign",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "David Kumar",
      role: "CTO",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      feedback: "Exceptional technical skills combined with great business understanding. Delivered a robust, scalable solution that has transformed our operations.",
      project: "Custom Dashboard System",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Founder",
      company: "GreenTech Solutions",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      feedback: "Amazing collaboration and creativity. The project was handled with utmost professionalism, and the results speak for themselves. Will definitely work together again.",
      project: "SaaS Platform",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 transition-all duration-300 ${
          i < rating 
            ? 'text-yellow-400 fill-yellow-400 drop-shadow-sm' 
            : 'text-muted-foreground/30'
        }`}
      />
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="feedback" className="py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Client Success Stories</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Trusted by </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Amazing Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real feedback from real clients who have transformed their businesses 
            through our collaborative partnerships and innovative solutions.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Main testimonial card */}
            <div className="relative overflow-hidden">
              <div className={`bg-gradient-to-br ${currentTestimonial.color} p-1 rounded-3xl shadow-2xl transition-all duration-700`}>
                <div className="bg-card/95 backdrop-blur-xl rounded-3xl p-8 lg:p-12 min-h-[500px] flex flex-col justify-between">
                  {/* Quote decoration */}
                  <div className="absolute top-8 right-8 opacity-10">
                    <Quote className="w-20 h-20 text-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-8 relative z-10">
                    {/* Rating */}
                    <div className="flex items-center gap-4">
                      <div className="flex space-x-1">
                        {renderStars(currentTestimonial.rating)}
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`bg-gradient-to-r ${currentTestimonial.color} text-white border-0 shadow-lg`}
                      >
                        {currentTestimonial.project}
                      </Badge>
                    </div>
                    
                    {/* Feedback */}
                    <blockquote className="text-2xl lg:text-3xl text-foreground leading-relaxed font-light">
                      "{currentTestimonial.feedback}"
                    </blockquote>
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex items-center gap-6 pt-8 border-t border-border/50">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentTestimonial.color} p-1 shadow-xl`}>
                      <div className="w-full h-full bg-muted rounded-xl flex items-center justify-center text-3xl">
                        {currentTestimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-foreground mb-1">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-lg">
                        {currentTestimonial.role}
                      </p>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${currentTestimonial.color} bg-clip-text text-transparent`}>
                        {currentTestimonial.company}
                      </p>
                    </div>
                    <div className="hidden lg:flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={goToPrevious}
                        className="rounded-full hover:scale-110 transition-all duration-300"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={goToNext}
                        className="rounded-full hover:scale-110 transition-all duration-300"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex lg:hidden justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Testimonial Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                    index === currentIndex ? 'w-12 h-4' : 'w-4 h-4'
                  }`}
                >
                  <div className={`w-full h-full bg-gradient-to-r ${
                    index === currentIndex 
                      ? testimonial.color 
                      : 'from-muted-foreground/40 to-muted-foreground/40'
                  } rounded-full transition-all duration-500 ${
                    index === currentIndex ? 'shadow-lg' : 'hover:from-primary/50 hover:to-primary/50'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>

    
        {/* Stats Grid with Enhanced Design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20 ">
          {[
            { number: "100%", label: "Client Satisfaction", icon: "🎯", color: "from-green-500 to-emerald-500" },
            { number: "50+", label: "Happy Clients", icon: "😊", color: "from-blue-500 to-cyan-500" },
            { number: "5⭐", label: "Average Rating", icon: "⭐", color: "from-yellow-500 to-orange-500" },
            { number: "3+", label: "Years Experience", icon: "🚀", color: "from-purple-500 to-pink-500" }
          ].map((stat, index) => (
            <div key={index} className="group relative overflow-hidden cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-2xl`} />
              <div className="relative text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-card hover:-translate-y-1">
                <div className="text-3xl mb-4">{stat.icon}</div>
                <div className={`text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="relative overflow-hidden bg-gradient-dark rounded-3xl p-12 border border-border/50">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-primary" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6">
                <Quote className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Join Our Success Stories</span>
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Be Our Next
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Success Story?</span>
              </h3>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Transform your vision into reality with a proven track record of excellence. 
                Let's create something extraordinary together that your users will love.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-10 py-6 text-lg rounded-xl group"
                >
                  Start Your Project
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-primary/30 text-primary hover:bg-primary/10 px-10 py-6 text-lg rounded-xl"
                >
                  View More Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFeedbackSection;