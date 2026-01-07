import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';

const categories = [
  {
    id: 'hackathon',
    name: 'Hackathons',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <rect x="7" y="19" width="10" height="2" rx="1" />
      </svg>
    ),
  },
  {
    id: 'MUN',
    name: 'Model UN',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'tech-talk',
    name: 'Tech Talks',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <rect x="9" y="3" width="6" height="12" rx="3" />
        <path d="M12 15v4M8 19h8" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'workshop',
    name: 'Workshops',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M21 16.5l-5.5-5.5a4 4 0 01-5.5-5.5l5.5 5.5a4 4 0 015.5 5.5z" />
        <circle cx="7" cy="17" r="2" />
      </svg>
    ),
  },
];

const HeroSection = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  handleCategorySelect,
}: {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  handleSearch: () => void;
  handleCategorySelect: (id: string) => void;
}) => (
  <div
    className="flex flex-col justify-center items-center w-full min-h-screen relative"
    style={{
      backgroundImage: "url('/herobg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="w-full max-w-5xl text-center px-4 sm:px-6 lg:px-8 flex flex-col flex-1 justify-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center gap-2 mb-4"
      >
        <Sparkles className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500 text-sm font-bold tracking-[0.4em] uppercase">Event Discovery</span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight"
      >
        What are you <br />
        looking for today?
      </motion.h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto mb-6 sm:mb-12 lg:mb-16">
        {categories.map((cat, idx) => (
          <motion.button
            key={cat.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategorySelect(cat.id)}
            className="w-full aspect-[1/0.85] md:aspect-[1/1.1] group flex flex-col items-center justify-center relative overflow-hidden transition-all"
            style={{
              backdropFilter: 'blur(15px)',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 0 10px 1px rgba(0,0,0,0.25)',
              borderRadius: '20px',
            }}
          >
            <div
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-1.5 md:mb-2 shadow"
              style={{
                backdropFilter: 'blur(15px)',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '50%',
              }}
            >
              <span className="text-xl md:text-2xl text-white">{cat.icon}</span>
            </div>
            <span className="text-xs md:text-sm font-semibold text-white mb-0.5 drop-shadow">{cat.name}</span>
            {cat.id === 'hackathon' && (
              <span className="text-[10px] md:text-xs text-white/80 drop-shadow">Competitive coding</span>
            )}
            {cat.id === 'MUN' && (
              <span className="text-[10px] md:text-xs text-white/80 drop-shadow">Diplomacy & debate</span>
            )}
            {cat.id === 'tech-talk' && (
              <span className="text-[10px] md:text-xs text-white/80 drop-shadow">Talks & presentations</span>
            )}
            {cat.id === 'workshop' && (
              <span className="text-[10px] md:text-xs text-white/80 drop-shadow">Hands-on learning</span>
            )}
            <div className="absolute inset-0 pointer-events-none" style={{
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.03)',
            }} />
          </motion.button>
        ))}
      </div>
      <div className="mb-0 sm:mb-6 lg:mb-8"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative w-full mb-4 px-2 sm:px-4 md:px-0"
      >
        <div className="relative group max-w-3xl mx-auto">
          <div className="search-bar-container flex items-center relative z-10 overflow-hidden transition-all duration-200 active:scale-[0.97] sm:active:scale-[0.98] lg:hover:scale-[1.01] cursor-text">
            <div
              className="absolute top-0 left-0 w-3/5 h-3/5 pointer-events-none lg:w-2/3 lg:h-2/3"
              style={{
                background: 'radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.08) 40%, transparent 70%)',
                borderRadius: '1.75rem 0 100% 0',
                mixBlendMode: 'overlay',
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-3/5 h-3/5 pointer-events-none lg:w-2/3 lg:h-2/3"
              style={{
                background: 'radial-gradient(ellipse at bottom right, rgba(0, 0, 0, 0.07) 0%, rgba(0, 0, 0, 0.03) 40%, transparent 70%)',
                borderRadius: '0 0 1.75rem 100%',
                mixBlendMode: 'multiply',
              }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none sm:h-[2px]"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.25) 30%, rgba(255, 255, 255, 0.25) 70%, transparent 100%)',
                borderRadius: '1.75rem 1.75rem 0 0',
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[1.5px] pointer-events-none sm:h-[2px]"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.04) 30%, rgba(0, 0, 0, 0.04) 70%, transparent 100%)',
                borderRadius: '0 0 1.75rem 1.75rem',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.01) 100%)',
                borderRadius: '1.75rem',
                mixBlendMode: 'overlay',
              }}
            />
            <div className="flex items-center justify-center relative z-20 flex-shrink-0">
              <Search
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white"
                strokeWidth={2.5}
              />
            </div>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1 bg-transparent text-white placeholder-white/30 outline-none relative z-20 font-medium transition-all duration-200 focus:placeholder-white/20 search-input"
              placeholder="What do you want to listen to?"
            />
          </div>
          <div
            className="absolute -inset-1 pointer-events-none -z-10 sm:-inset-1 lg:-inset-1.5"
            style={{
              borderRadius: '2rem',
              background: 'radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.13) 0%, transparent 60%)',
              filter: 'blur(4px)',
              opacity: 0.3,
            }}
          />
          <div
            className="absolute -inset-0.5 pointer-events-none -z-10"
            style={{
              borderRadius: '2rem',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.08)',
              filter: 'blur(1px)',
            }}
          />
        </div>
        <style>{`
          .search-bar-container {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
            border: 1.5px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(6px) saturate(120%);
            -webkit-backdrop-filter: blur(6px) saturate(120%);
            border-radius: 1.5rem;
            padding: 0.75rem 1rem;
            gap: 0.75rem;
            min-height: 52px;
            box-shadow: 0 2px 8px rgba(31, 38, 135, 0.07), 
                        inset 0 1px 1px rgba(255, 255, 255, 0.15), 
                        inset 0 -1px 1px rgba(0, 0, 0, 0.04);
          }
          
          .search-input {
            border: none;
            background: transparent;
            color: #ffffff;
            letter-spacing: 0.01em;
            min-width: 0;
            padding: 0.5rem 0.75rem;
            font-size: 0.9375rem;
          }
          
          @media (min-width: 640px) {
            .search-bar-container {
              border-radius: 1.75rem;
              padding: 0.875rem 1.125rem;
              gap: 0.875rem;
              min-height: 56px;
              box-shadow: 0 3px 12px rgba(31, 38, 135, 0.09), 
                          inset 0 1px 1px rgba(255, 255, 255, 0.15), 
                          inset 0 -1px 1px rgba(0, 0, 0, 0.04);
            }
            
            .search-input {
              padding: 0.625rem 1rem;
              font-size: 1rem;
            }
          }
          
          @media (min-width: 1024px) {
            .search-bar-container {
              border-radius: 2rem;
              padding: 1rem 1.25rem;
              gap: 1rem;
              min-height: 60px;
              box-shadow: 0 4px 16px rgba(31, 38, 135, 0.10), 
                          inset 0 2px 2px rgba(255, 255, 255, 0.18), 
                          inset 0 -2px 2px rgba(0, 0, 0, 0.06);
              backdrop-filter: blur(8px) saturate(120%);
              -webkit-backdrop-filter: blur(8px) saturate(120%);
            }
            
            .search-input {
              padding: 0.75rem 1.25rem;
              font-size: 1.125rem;
            }
          }
        `}</style>
      </motion.div>
    </div>
  </div>
);

export default HeroSection;