import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "@/components/Layout";
import CustomCursor from "@/components/CustomCursor";

import SeenOnGridPage from "@/pages/SeenOnGridPage";
import CollaborationPage from "@/pages/CollaborationPage";
import InformationPage from "@/pages/InformationPage";
import SeenOnVideoPage from "@/pages/SeenOnVideoPage";
import ShopPage from "@/pages/ShopPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={SeenOnGridPage} />
        <Route path="/collaborations" component={CollaborationPage} />
        <Route path="/information" component={InformationPage} />
        <Route path="/seen-on-video" component={SeenOnVideoPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CustomCursor />
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
