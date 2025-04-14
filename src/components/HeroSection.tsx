import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Phone, ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Автоматическое переключение табов
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-medical-primary to-medical-tertiary min-h-[90vh] flex items-center py-16 md:py-0">
      {/* Фоновое изображение с оверлеем */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1974&auto=format&fit=crop"
          alt="Медицинский центр" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-medical-primary/80 via-medical-tertiary/60 to-transparent"></div>
      </div>
      
      {/* Контент */}
      <div className="container relative z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-white animate-fade-in mb-16 lg:mb-0">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Современная медицина для вашего здоровья
          </h1>
          <p className="mb-8 text-lg md:text-xl leading-relaxed max-w-2xl">
            Клиника «МедЭксперт» — это команда опытных специалистов, современное оборудование и индивидуальный подход к каждому пациенту.
          </p>
          
          {/* Информационные табы */}
          <div className="mb-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-xl">
            <div className="flex border-b border-white/20 mb-4">
              {["Взрослым", "Детям", "Семьям"].map((tab, index) => (
                <button
                  key={index}
                  className={`py-3 px-5 font-medium text-lg transition-all ${
                    activeTab === index 
                      ? "text-white border-b-2 border-white" 
                      : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="min-h-[100px]">
              {activeTab === 0 && (
                <div className="animate-fade-in">
                  <p className="mb-4">Полный комплекс медицинских услуг для взрослых: от профилактических осмотров до специализированного лечения.</p>
                  <Link to="/services/adults" className="inline-flex items-center text-white hover:underline gap-1">
                    Подробнее <ArrowRight size={16} />
                  </Link>
                </div>
              )}
              {activeTab === 1 && (
                <div className="animate-fade-in">
                  <p className="mb-4">Забота о здоровье ваших детей от рождения до 18 лет. Наблюдение, диагностика и лечение в комфортной обстановке.</p>
                  <Link to="/services/children" className="inline-flex items-center text-white hover:underline gap-1">
                    Подробнее <ArrowRight size={16} />
                  </Link>
                </div>
              )}
              {activeTab === 2 && (
                <div className="animate-fade-in">
                  <p className="mb-4">Семейная медицина: наблюдение и лечение всех членов семьи у одних и тех же специалистов с персональным подходом.</p>
                  <Link to="/services/family" className="inline-flex items-center text-white hover:underline gap-1">
                    Подробнее <ArrowRight size={16} />
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-medical-primary hover:bg-white/90 shadow-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Онлайн-запись
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Phone className="mr-2 h-5 w-5" />
              Позвонить
            </Button>
          </div>
        </div>
        
        {/* Изображение справа */}
        <div className="lg:w-1/2 lg:pl-16 animate-slide-in">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop" 
              alt="Врач и пациент" 
              className="w-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Доверьте здоровье профессионалам</h3>
              <p className="text-white/90">Более 50 врачей высшей категории и кандидатов медицинских наук</p>
            </div>
          </div>
          
          {/* Плашки с преимуществами */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-white flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-xl">🔍</span>
              </div>
              <div>
                <h3 className="font-medium">Современная диагностика</h3>
                <p className="text-sm text-white/80">Точные результаты</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-white flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-xl">⏱️</span>
              </div>
              <div>
                <h3 className="font-medium">Без очередей</h3>
                <p className="text-sm text-white/80">Запись на точное время</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Скролл вниз */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;