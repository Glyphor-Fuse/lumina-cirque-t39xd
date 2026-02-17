import { motion } from "framer-motion";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-background/40 z-10" /> {/* Overlay for readability */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/videos/banner-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="block text-accent uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-semibold">
            The Royal Big Top Presents
          </span>
          <h1 className="text-5xl md:text-8xl font-display text-foreground mb-6 tracking-tight leading-tight drop-shadow-2xl">
            Lumina <span className="text-primary italic">Cirque</span>
          </h1>
          <p className="text-foreground-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            A night of gravity-defying elegance and royal spectacle. 
            Experience the impossible under the grand canopy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="tickets" smooth={true} duration={500}>
                <button className="px-8 py-4 bg-primary text-foreground font-medium rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(93,31,101,0.5)] border border-primary-foreground/10 text-lg">
                Get Tickets
                </button>
            </Link>
            <Link to="performers" smooth={true} duration={500}>
                <button className="px-8 py-4 bg-transparent border border-border/30 text-foreground font-medium rounded-full hover:bg-background/10 transition-all text-lg backdrop-blur-sm">
                View Cast
                </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-foreground/60 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-background/0 via-background/50 to-background/0" />
      </motion.div>
    </section>
  );
}

export default Hero;
