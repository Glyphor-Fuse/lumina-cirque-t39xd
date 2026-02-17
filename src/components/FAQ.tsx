import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background dark:bg-background-950">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display text-center mb-16 text-primary dark:text-foreground">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">What is the duration of the show?</AccordionTrigger>
            <AccordionContent className="text-foreground-600 dark:text-foreground-400">
              The performance runs for approximately 90 minutes with one 15-minute intermission.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">Is the venue accessible?</AccordionTrigger>
            <AccordionContent className="text-foreground-600 dark:text-foreground-400">
              Yes, the Royal Big Top is fully wheelchair accessible. Please select accessible seating during checkout or contact us for assistance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">Are there age restrictions?</AccordionTrigger>
            <AccordionContent className="text-foreground-600 dark:text-foreground-400">
              Lumina Cirque is suitable for all ages. However, children under 3 are not recommended due to loud music and lighting effects. All guests require a ticket.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium">What is the refund policy?</AccordionTrigger>
            <AccordionContent className="text-foreground-600 dark:text-foreground-400">
              All ticket sales are final. However, we offer exchanges for dates within the same city up to 48 hours before your scheduled performance, subject to availability.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;
