import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AppointmentSection from "@/components/AppointmentSection";
import AdvantagesSection from "@/components/AdvantagesSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <DoctorsSection />
      <TestimonialsSection />
      <AppointmentSection />
    </Layout>
  );
};

export default Index;