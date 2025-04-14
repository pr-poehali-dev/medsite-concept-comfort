import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

// Данные по категориям услуг
const serviceCategories = [
  {
    id: "all",
    label: "Все услуги",
  },
  {
    id: "adults",
    label: "Для взрослых",
  },
  {
    id: "children",
    label: "Для детей",
  },
  {
    id: "diagnostic",
    label: "Диагностика",
  },
  {
    id: "specialists",
    label: "Узкие специалисты",
  },
];

// Полный список услуг с категориями
const services = [
  {
    id: 1,
    icon: "👨‍⚕️",
    title: "Терапия",
    description: "Диагностика и лечение заболеваний внутренних органов",
    link: "/services/therapy",
    categories: ["all", "adults"],
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    icon: "❤️",
    title: "Кардиология",
    description: "Диагностика и лечение заболеваний сердечно-сосудистой системы",
    link: "/services/cardiology",
    categories: ["all", "adults", "specialists"],
    image: "https://images.unsplash.com/photo-1628595351029-c2111432b8b0?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: 3,
    icon: "🧠",
    title: "Неврология",
    description: "Лечение нарушений нервной системы у взрослых и детей",
    link: "/services/neurology",
    categories: ["all", "adults", "children", "specialists"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    icon: "👶",
    title: "Педиатрия",
    description: "Комплексная забота о здоровье детей от рождения до 18 лет",
    link: "/services/pediatrics",
    categories: ["all", "children"],
    image: "https://images.unsplash.com/photo-1585435421671-0c16737a421a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 5,
    icon: "👁️",
    title: "Офтальмология",
    description: "Диагностика и лечение заболеваний глаз и нарушений зрения",
    link: "/services/ophthalmology",
    categories: ["all", "adults", "children", "specialists"],
    image: "https://images.unsplash.com/photo-1591439657848-9f4b55b9e473?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 6,
    icon: "🦷",
    title: "Стоматология",
    description: "Профилактика и лечение заболеваний зубов и полости рта",
    link: "/services/dentistry",
    categories: ["all", "adults", "children", "specialists"],
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 7,
    icon: "🩻",
    title: "УЗИ диагностика",
    description: "Современная ультразвуковая диагностика всех органов и систем",
    link: "/services/ultrasound",
    categories: ["all", "adults", "children", "diagnostic"],
    image: "https://images.unsplash.com/photo-1580281657702-257584239a42?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 8,
    icon: "💉",
    title: "Вакцинация",
    description: "Профилактические прививки для детей и взрослых",
    link: "/services/vaccination",
    categories: ["all", "adults", "children"],
    image: "https://images.unsplash.com/photo-1632168889660-5944413c8709?q=80&w=1974&auto=format&fit=crop"
  },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredServices = services.filter(service => 
    service.categories.includes(activeTab)
  );

  return (
    <section className="py-20 bg-medical-light">
      <div className="container">
        <div className="section-title">
          <h2 className="text-3xl font-bold mb-4 text-medical-dark">Наши услуги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр медицинских услуг для всей семьи с использованием 
            современных методов диагностики и лечения
          </p>
        </div>
        
        <div className="mb-10 flex justify-center">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6 bg-medical-light border border-medical-primary/20 p-1">
              {serviceCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-medical-primary data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <Card 
              key={service.id} 
              className="card-hover overflow-hidden"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title} 
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredCard === service.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-medical-primary/90 rounded-full p-2 shadow-lg">
                  <span className="text-xl">{service.icon}</span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full group">
                  <Link to={service.link} className="flex items-center justify-between">
                    <span>Подробнее</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-medical-primary hover:bg-medical-primary/90">
            <Link to="/services">Все услуги и цены</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;