import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-medical-blue text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="/placeholder.svg" 
          alt="Медицинский центр" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/90 to-medical-blue/70"></div>
      </div>
      <div className="container relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center md:text-left md:mx-0">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Забота о вашем здоровье — наш приоритет
          </h1>
          <p className="mb-8 text-lg md:text-xl">
            Мы предлагаем полный спектр медицинских услуг с использованием современного оборудования и профессиональной команды врачей.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Button size="lg" className="bg-white text-medical-blue hover:bg-white/90">
              Записаться на приём
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/services">Наши услуги</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="container pb-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="mb-2 text-xl font-medium">Запись 24/7</h3>
            <p>Онлайн-запись к специалистам доступна в любое время</p>
          </div>
          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="mb-2 text-xl font-medium">Современное оборудование</h3>
            <p>Диагностика и лечение на оборудовании последнего поколения</p>
          </div>
          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="mb-2 text-xl font-medium">Опытные врачи</h3>
            <p>Команда профессионалов с многолетним опытом работы</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;