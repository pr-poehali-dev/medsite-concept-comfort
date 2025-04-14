import { Award, Calendar, Clock, HeartPulse, MapPin, ShieldCheck } from "lucide-react";

const advantages = [
  {
    icon: <Calendar className="h-10 w-10 text-medical-blue" />,
    title: "Удобная запись",
    description: "Запись онлайн или по телефону без долгого ожидания"
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-medical-blue" />,
    title: "Современная диагностика",
    description: "Точная диагностика на оборудовании экспертного класса"
  },
  {
    icon: <Award className="h-10 w-10 text-medical-blue" />,
    title: "Опытные врачи",
    description: "Команда сертифицированных специалистов с многолетним стажем"
  },
  {
    icon: <Clock className="h-10 w-10 text-medical-blue" />,
    title: "Без очередей",
    description: "Строгое соблюдение времени приёма каждого пациента"
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-medical-blue" />,
    title: "Безопасность",
    description: "Соблюдение всех санитарно-эпидемиологических норм"
  },
  {
    icon: <MapPin className="h-10 w-10 text-medical-blue" />,
    title: "Удобное расположение",
    description: "Клиника находится в центре города с удобной транспортной доступностью"
  }
];

const AdvantagesSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы создаем комфортные условия для наших пациентов и 
            гарантируем высокое качество медицинской помощи
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-6 mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;