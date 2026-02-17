import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Reviews() {
  const testimonials = [
    {
      quote:
        "I have seen Cirque du Soleil in Vegas and Paris, but Lumina brings an intimacy and intensity that is unmatched. The aerial silks number left me breathless.",
      name: "Eleanor Vance",
      designation: "Theater Critic, The Daily Arts",
      src: "/images/review-1.png",
    },
    {
      quote:
        "A royal feast for the senses. The production value is incredible, and the VIP experience was worth every penny. Champagne and acrobats!",
      name: "Julian Sterling",
      designation: "Patron",
      src: "/images/review-2.png",
    },
    {
      quote:
        "My children sat in stunned silence for two hours. That never happens. Pure magic from start to finish.",
      name: "Sarah Jenkins",
      designation: "Mother of 3",
      src: "/images/review-3.png",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-primary/5 dark:bg-background-950 overflow-hidden">
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-display text-primary dark:text-foreground">
                Audience Acclaim
            </h2>
        </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  );
}

export default Reviews;
