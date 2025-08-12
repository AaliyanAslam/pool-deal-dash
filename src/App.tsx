import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { initSmoothScrolling } from "@/utils/smoothScroll";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RefundPolicy from "./pages/RefundPolicy"; // ✅ New import
import FAQ from "./pages/Faq";

// React Query ka client instance
const queryClient = new QueryClient();

const App = () => {
  // Smooth scroll initialize karna jab component mount ho
  useEffect(() => {
    initSmoothScrolling();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Notifications */}
        <Toaster />
        <Sonner />

        {/* Router */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ✅ Refund Policy Route */}
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/faq" element={<FAQ />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
