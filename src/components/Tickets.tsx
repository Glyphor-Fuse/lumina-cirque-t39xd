import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar } from "lucide-react";

export function Tickets() {
  const shows = [
    {
      type: "Matinee",
      time: "2:00 PM",
      price: "$45",
      description: "Perfect for families. Full 90-minute performance.",
      dates: ["Sat, Oct 14", "Sun, Oct 15", "Sat, Oct 21"],
    },
    {
      type: "Grand Evening",
      time: "7:30 PM",
      price: "$75",
      description: "The signature experience with extended fire finale.",
      dates: ["Fri, Oct 13", "Sat, Oct 14", "Fri, Oct 20"],
    },
    {
      type: "Royal VIP",
      time: "7:30 PM",
      price: "$150",
      description: "Front row seating, backstage tour, and champagne.",
      dates: ["Fri, Oct 13", "Sat, Oct 14", "Fri, Oct 20"],
    },
  ];

  return (
    <section id="tickets" className="py-24 bg-background-50 dark:bg-background-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 text-sm uppercase tracking-widest">
            Limited Engagement
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display text-foreground-900 dark:text-foreground mb-6">
            Secure Your Seat
          </h2>
          <p className="text-foreground-600 dark:text-foreground-400 max-w-xl mx-auto text-lg">
            Choose your experience. From family matinees to the exclusive Royal VIP package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shows.map((show, idx) => (
            <div key={idx} className="h-full">
              <HoverBorderGradient
                containerClassName="h-full rounded-2xl"
                className="bg-background dark:bg-background p-8 flex flex-col items-start h-full text-left"
                duration={3}
                clockwise={true}
              >
                <div className="flex justify-between items-start w-full mb-4">
                  <span className="text-accent font-bold tracking-wider uppercase text-sm">
                    {show.type}
                  </span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {show.time}
                  </span>
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-display font-bold text-foreground-900 dark:text-foreground">
                    {show.price}
                  </span>
                  <span className="text-foreground-500 ml-2">/ person</span>
                </div>

                <p className="text-foreground-600 dark:text-foreground-300 mb-8 border-b border-border-100 dark:border-border-800 pb-8 w-full">
                  {show.description}
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground-900 dark:text-foreground mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Available Dates:
                  </div>
                  {show.dates.map((date, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-foreground-600 dark:text-foreground-400">
                      <Check className="w-4 h-4 text-accent" />
                      {date}
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 rounded-lg bg-background-900 dark:bg-background text-foreground dark:text-foreground font-semibold hover:opacity-90 transition-opacity">
                  Select Tickets
                </button>
              </HoverBorderGradient>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tickets;
