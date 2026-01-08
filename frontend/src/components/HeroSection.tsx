import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';

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
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight"
      >
        What are you <br />
        looking for today?
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full mb-4 px-3 sm:px-4 md:px-0"
      >
        <div className="relative group max-w-3xl mx-auto">
          <div className="glass-navbar-search flex items-center">
            <div className="flex items-center justify-center pl-4 sm:pl-5 lg:pl-6 pr-3">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
            </div>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1 bg-transparent text-white placeholder-white/60 px-2 py-3 sm:py-3.5 lg:py-4 outline-none text-sm sm:text-base lg:text-lg font-medium"
              placeholder="What do you want to listen to?"
            />
          </div>
        </div>
        <style>{`
          .glass-navbar-search {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 2rem;
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
            transition: all 0.3s ease;
            min-height: 52px;
          }
          
          @media (min-width: 640px) {
            .glass-navbar-search {
              background: rgba(255, 255, 255, 0.12);
              backdrop-filter: blur(24px) saturate(180%);
              -webkit-backdrop-filter: blur(24px) saturate(180%);
              border-radius: 2.25rem;
              min-height: 56px;
            }
          }
          
          @media (min-width: 1024px) {
            .glass-navbar-search {
              background: rgba(255, 255, 255, 0.15);
              backdrop-filter: blur(28px) saturate(200%);
              -webkit-backdrop-filter: blur(28px) saturate(200%);
              border-radius: 2.5rem;
              min-height: 64px;
            }
          }
          
          .glass-navbar-search:hover {
            background: rgba(255, 255, 255, 0.18);
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 12px 40px rgba(31, 38, 135, 0.45);
            transform: translateY(-2px);
          }
          
          .glass-navbar-search:focus-within {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.4);
            box-shadow: 0 12px 48px rgba(31, 38, 135, 0.5);
          }
        `}</style>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex justify-center gap-4 sm:gap-8 mt-2 text-[10px] font-black tracking-[0.3em] uppercase"
      >
        <span
          className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
            color: 'white',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="mr-1">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
          </svg>
          1,247 EVENTS
        </span>
        <span
          className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
            color: 'white',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="mr-1">
            <circle cx="8" cy="8" r="4" />
            <circle cx="16" cy="8" r="4" />
            <rect x="2" y="16" width="20" height="4" rx="2" />
          </svg>
          127 USERS
        </span>
      </motion.div>
    </div>
  </div>
);

export default HeroSection;
