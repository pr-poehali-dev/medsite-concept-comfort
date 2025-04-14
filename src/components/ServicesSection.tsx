import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Brain, Stethoscope, Baby, Eye, Tooth } from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="h-10 w-10 text-medical-blue" />,
    title: "Терапия",
    description: "Диагностика и лечение внутренних болезней организма",
    link: "/services/therapy"
  },
  {
    icon: <Activity className="h-10 w-10 text-medical-blue" />,
    title: "Кардиология",
    description: "Профилактика, диагностика и лечение заболеваний сердечно-сосудистой системы",
    link: "/services/cardiology"
  },
  {
    icon: <Brain className="h-10 w-10 text-medical-blue" />,
    title: "Неврология",
    description: "Лечение заболеваний нервной системы у взрослых и детей",
    link: "/services/neurology"
  },
  {
    icon: <Baby className="h-10 w-10 text-medical-blue" />,
    title: "Педиатрия",
    description: "Наблюдение за здоровьем и развитием детей от рождения до 18 лет",
    link: "/services/pediatrics"
  },
  {
    icon: <Eye className="h-10 w-10 text-medical-blue" />,
    title: "Офтальмология",
    description: "Диагностика и лечение заболеваний глаз и нарушений зрения",
    link: "/services/ophthalmology"
  },
  {
    icon: <Tooth className="h-10 w-10 text-medical-blue" />,
    title: "Стоматология",
    description: "Комплексное лечение и профилактика заболеваний полости рта",
    link: "/services/dentistry"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем широкий спектр медицинских услуг для всей семьи, 
            используя современные методы диагностики и лечения
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link to={service.link}>Подробнее</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/services">Все услуги</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;