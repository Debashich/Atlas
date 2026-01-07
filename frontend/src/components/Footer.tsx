import { useState } from 'react';

export default function Footer() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <footer className="bg-[#0A0E27]">
      {/* Stats Section */}
      <div className="bg-gradient-to-b from-[#0F1419] to-[#0A0E27] text-white py-16 md:py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Side - Info with Orange Gradient Effect */}
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#E72107]/20 via-[#E72107]/10 to-transparent blur-3xl rounded-3xl"></div>

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#E72107] via-[#FF4520] to-[#FF6B35] bg-clip-text text-transparent drop-shadow-lg">
                  Never miss an opportunity, ever again
                </h2>

                <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg">
                  Atlas aggregates events from multiple platforms, detects conflicts,
                  and syncs with your calendar. Built for students, developers, and
                  event enthusiasts.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 md:gap-12">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#E72107] to-[#FF4520] bg-clip-text text-transparent mb-2">1,247</div>
                    <div className="text-sm text-gray-400">Events indexed</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#FF4520] to-[#FF6B35] bg-clip-text text-transparent mb-2">127</div>
                    <div className="text-sm text-gray-400">Active users</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#FF6B35] to-[#E72107] bg-clip-text text-transparent mb-2">5+</div>
                    <div className="text-sm text-gray-400">Platforms</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - CTA Card */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Start using Atlas
              </h3>
              <p className="text-gray-300 mb-6 text-sm md:text-base">
                Discover events, sync your calendar, and never double-book again.
                Get started in minutes.
              </p>

              {/* Button with conditional liquid animation - REVERSED HOVER */}
              <div className="relative group mb-4">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-[#FF6B35] via-[#7C3AED] to-[#00F5FF] rounded-lg opacity-100 group-hover:opacity-75 blur-sm transition-all ${isAnimating ? 'bg-[length:200%_200%] animate-liquid-flow' : ''
                    }`}
                ></div>
                <button
                  onClick={handleClick}
                  className="relative w-full bg-[#0A0E27] hover:bg-[#1A1F2E] text-white font-semibold py-3 px-6 rounded-lg transition-all active:scale-95"
                >
                  Get Started →
                </button>
              </div>

              <p className="text-center text-sm text-gray-400">
                Need help?{" "}
                <a href="#" className="text-[#00F5FF] hover:text-[#7C3AED] transition-colors">
                  Contact Support
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
