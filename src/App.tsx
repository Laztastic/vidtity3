import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ComingSoon from "./components/ComingSoon";
import NotFound from "./pages/NotFound";
import MerkidentiteitPage from "./pages/services/MerkidentiteitPage";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import MobielDesignPage from "./pages/services/MobielDesignPage";
import EcommercePage from "./pages/services/EcommercePage";
import PrestatiesPage from "./pages/services/PrestatiesPage";
import LanceringGroeiPage from "./pages/services/LanceringGroeiPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/diensten/merkidentiteit" element={<MerkidentiteitPage />} />
          <Route path="/diensten/web-development" element={<WebDevelopmentPage />} />
          <Route path="/diensten/mobiel-design" element={<MobielDesignPage />} />
          <Route path="/diensten/ecommerce" element={<EcommercePage />} />
          <Route path="/diensten/prestaties" element={<PrestatiesPage />} />
          <Route path="/diensten/lancering-groei" element={<LanceringGroeiPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
