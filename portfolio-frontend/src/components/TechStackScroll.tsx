import React from 'react';

const TechScrollStrip = () => {
  const technologies = [
    { name: 'Tailwind CSS', color: '#06B6D4', icon: '🎨' },
    { name: 'PostgreSQL', color: '#336791', icon: '🐘' },
    { name: 'GraphQL', color: '#E10098', icon: '⚡' },
    { name: 'Figma', color: '#F24E1E', icon: '🎨' },
    { name: 'AWS', color: '#FF9900', icon: '☁️' },
    { name: 'Docker', color: '#2496ED', icon: '🐳' },
    { name: 'Redis', color: '#DC382D', icon: '💾' },
    { name: 'MongoDB', color: '#47A248', icon: '🍃' },
    { name: 'React', color: '#61DAFB', icon: '⚛️' },
    { name: 'TypeScript', color: '#3178C6', icon: '📘' },
    { name: 'Node.js', color: '#339933', icon: '📗' },
    { name: 'Next.js', color: '#000000', icon: '▲' },
  ];

  // duplicate list for seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="w-full py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="text-center mb-6 sm:mb-8 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">
          Technologies I Work With
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto px-4">
          Modern tools for modern solutions
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 w-12 sm:w-20 lg:w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-12 sm:w-20 lg:w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        {/* Scrollable + auto-scroll container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex animate-scroll space-x-4 sm:space-x-6 lg:space-x-8 px-4 snap-x">
            {duplicatedTechs.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 snap-start group cursor-pointer"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-slate-600 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-900/25">
                  <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                    <div className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div className="text-center">
                      <div className="text-xs sm:text-sm lg:text-base font-semibold text-white group-hover:text-slate-300 transition-colors duration-300">
                        {tech.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          will-change: transform;
        }

        /* Pause on hover (desktop) */
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Hide scrollbar utility */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default TechScrollStrip;
