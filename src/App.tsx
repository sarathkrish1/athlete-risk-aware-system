import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Athletes = lazy(() => import("./pages/Athletes"));
const AthleteProfile = lazy(() => import("./pages/AthleteProfile"));
const Analytics = lazy(() => import("./pages/Analytics"));
const Health = lazy(() => import("./pages/Health"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div className="container py-6">
    <Skeleton className="h-10 w-48 mb-8" />
    <div className="grid gap-6 md:grid-cols-4 mb-6">
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} className="h-32 w-full" />
      ))}
    </div>
    <Skeleton className="h-[400px] w-full mb-6" />
    <div className="grid gap-6 md:grid-cols-2">
      {[...Array(2)].map((_, i) => (
        <Skeleton key={i} className="h-64 w-full" />
      ))}
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Suspense fallback={<PageLoader />}>
                <Dashboard />
              </Suspense>
            } />
            <Route path="athletes" element={
              <Suspense fallback={<PageLoader />}>
                <Athletes />
              </Suspense>
            } />
            <Route path="athletes/:id" element={
              <Suspense fallback={<PageLoader />}>
                <AthleteProfile />
              </Suspense>
            } />
            <Route path="analytics" element={
              <Suspense fallback={<PageLoader />}>
                <Analytics />
              </Suspense>
            } />
            <Route path="health" element={
              <Suspense fallback={<PageLoader />}>
                <Health />
              </Suspense>
            } />
          </Route>
          <Route path="*" element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
