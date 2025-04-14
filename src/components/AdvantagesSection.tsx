import { BadgeCheck, Clock, ShieldCheck, Stethoscope, Search, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const advantages = [
  {
    icon: <Stethoscope className="h-12 w-12 text-medical-primary" />,
    title: "Экспертная диагностика",
    description: "Современное оборудование и опытные специалисты для точного выявления заболеваний",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop"
  },
  {
    icon: <Clock className="h-12 w-12 text-medical-primary" />,
    title: "Приём точно по времени",
    description: "Никаких очередей – мы ценим ваше время и соблюдаем график приема",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1972&auto=format&fit=crop"
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-medical-primary" />,
    title: "Безопасность и комфорт",
    description: "Строгое соблюдение санитарных норм и создание уютной атмосферы для пациентов",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b0e?q=80&w=1974&auto=format&fit=crop"
  }
];

const AdvantagesSection = () => {
  return (
    <section className="py-20 bg-medical-light/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-medical-dark">Почему пациенты выбирают нас</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            МедЭксперт – это клиника, где инновационные технологии сочетаются с заботой 
            о каждом пациенте и индивидуальным подходом
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="group">
              <div className="h-60 mb-6 overflow-hidden rounded-2xl image-overlay">
                <img 
                  src={advantage.image} 
                  alt={advantage.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 bg-medical-primary/10 p-5 rounded-full group-hover:bg-medical-primary/20 transition-colors">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-medical-dark">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Дополнительные преимущества */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center card-hover">
            <BadgeCheck className="h-10 w-10 text-medical-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Врачи высшей категории</h3>
            <p className="text-muted-foreground text-sm">Опытные специалисты с многолетней практикой</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center card-hover">
            <Search className="h-10 w-10 text-medical-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Точная диагностика</h3>
            <p className="text-muted-foreground text-sm">Современные методы обследования и анализы</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center card-hover">
            <Award className="h-10 w-10 text-medical-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Доказательная медицина</h3>
            <p className="text-muted-foreground text-sm">Международные протоколы лечения</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center card-hover">
            <Clock className="h-10 w-10 text-medical-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Удобная запись</h3>
            <p className="text-muted-foreground text-sm">Онлайн или по телефону 24/7</p>
          </div>
        </div>
        
        {/* Призыв к действию */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-medium mb-4 text-medical-dark">Испытайте новый уровень медицинской заботы</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы объединили лучших специалистов, современное оборудование и 
            комфортные условия, чтобы забота о вашем здоровье была эффективной и приятной
          </p>
          <Button asChild size="lg" className="bg-medical-primary hover:bg-medical-primary/90">
            <Link to="/about">Узнать больше о клинике</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;