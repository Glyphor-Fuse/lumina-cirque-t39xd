import { FocusCards } from "@/components/ui/focus-cards";

export function Performers() {
  const cards = [
    {
      title: "The Celestial Twins",
      role: "Aerial Silks",
      src: "/images/performer-1.png",
      desc: "Soaring 50 feet above the ring, the twins perform a ballet of death-defying drops and synchronized ascensions.",
    },
    {
      title: "Baron Von Strong",
      role: "Power Lifting",
      src: "/images/performer-2.png",
      desc: "A display of raw regal power, lifting entire banquet tables and performing feats of strength unseen since the 19th century.",
    },
    {
      title: "Madame Mystique",
      role: "Illusionist",
      src: "/images/performer-3.png",
      desc: "She bends reality itself. Watch closely as she vanishes from the center ring and reappears in the royal box.",
    },
    {
      title: "The Golden Troupe",
      role: "Acrobatics",
      src: "/images/performer-4.png",
      desc: "A high-speed kinetic whirlwind of tumbling, pyramid building, and human flight.",
    },
  ];

  return (
    <section id="performers" className="py-24 bg-background dark:bg-background-950">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-display text-primary dark:text-foreground mb-6">
          Masters of the Ring
        </h2>
        <p className="text-foreground-600 dark:text-foreground-400 max-w-2xl mx-auto text-lg">
          Meet the world-class artists who bring the magic of Lumina Cirque to life every night. Hover to reveal their stories.
        </p>
      </div>
      <FocusCards cards={cards} />
    </section>
  );
}

export default Performers;
