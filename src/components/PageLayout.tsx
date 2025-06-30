
import { ReactNode } from 'react';
import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { SupportChatButton } from "@/components/SupportChatButton";
import { GcashBanner } from "@/components/GcashBanner";

interface PageLayoutProps {
  children: ReactNode;
  showPromoBanner?: boolean;
}

export const PageLayout = ({ children, showPromoBanner = true }: PageLayoutProps) => {
  console.log("PageLayout rendering with GcashBanner");
  
  return (
    <div className="min-h-screen space-bg">
      <div className="stars"></div>
      {showPromoBanner && <PromoBanner />}
      <Header />
      
      <div className="page-container py-16 px-4 relative z-10">
        {children}
      </div>

      <Footer />
      
      {/* Support Chat Button */}
      <SupportChatButton />
      
      {/* Gcash Banner */}
      <GcashBanner />
    </div>
  );
};
