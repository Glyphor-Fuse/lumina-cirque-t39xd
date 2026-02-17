import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Hero } from "@/components/Hero";
import { Performers } from "@/components/Performers";
import { Tickets } from "@/components/Tickets";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconTicket, IconUsers, IconMessage } from "@tabler/icons-react";

const queryClient = new QueryClient();

function App() {
  const navItems = [
    { name: "Home", link: "home", icon: <IconHome className="h-4 w-4" /> },
    { name: "Cast", link: "performers", icon: <IconUsers className="h-4 w-4" /> },
    { name: "Reviews", link: "reviews", icon: <IconMessage className="h-4 w-4" /> },
    { name: "Tickets", link: "tickets", icon: <IconTicket className="h-4 w-4" /> },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground font-body">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Performers />
          <Tickets />
          <Reviews />
          <FAQ />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
