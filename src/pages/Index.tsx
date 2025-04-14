import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AppointmentSection from "@/components/AppointmentSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import QuickActions from "@/components/QuickActions";

const Index = () => {
  return (
    <Layout>
      <AccessibilityWidget />
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <DoctorsSection />
      <TestimonialsSection />
      <AppointmentSection />
      <QuickActions />
    </Layout>
  );
};

export default Index;