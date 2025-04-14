import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Анна М.",
    date: "10.06.2023",
    text: "Выражаю огромную благодарность терапевту Петровой Е.А. за внимательное отношение и профессионализм. Диагноз был поставлен точно, лечение помогло быстро. В клинике современное оборудование и приятная атмосфера. Рекомендую всем!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    initials: "АМ",
    doctor: "Петрова Е.А., терапевт"
  },
  {
    id: 2,
    name: "Сергей К.",
    date: "23.05.2023",
    text: "Посещаю клинику уже больше года. Особенно хочу отметить работу невролога Иванова С.М. – высококлассный специалист, который не только лечит, но и объясняет причины заболевания. Также порадовало отсутствие очередей и удобная онлайн-запись.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop",
    initials: "СК",
    doctor: "Иванов С.М., невролог"
  },
  {
    id: 3,
    name: "Елена В.",
    date: "15.04.2023",
    text: "Водила сына 5 лет к педиатру Смирновой О.В. Очень довольна подходом врача к детям – находит общий язык даже с капризными малышами. Кабинеты чистые, персонал доброжелательный. Ходим только сюда!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    initials: "ЕВ",
    doctor: "Смирнова О.В., педиатр"
  },
  {
    id: 4,
    name: "Михаил Д.",
    date: "27.03.2023",
    text: "Проходил комплексное обследование в клинике. Впечатлен уровнем сервиса и качеством диагностики. Все результаты получил в электронном виде в личном кабинете в тот же день. Теперь всей семьей наблюдаемся здесь.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    initials: "МД",
    doctor: "Комплексная диагностика"
  },
  {
    id: 5,
    name: "Наталья П.",
    date: "18.03.2023",
    text: "Спасибо офтальмологу Козлову А.Д. за профессиональную помощь! Беспокоили проблемы со зрением, доктор провел тщательное обследование и назначил эффективное лечение. Улучшение наступило уже через неделю.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop",
    initials: "НП",
    doctor: "Козлов А.Д., офтальмолог"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTestimonials, setActiveTestimonials] = useState<typeof testimonials>([]);
  
  // Определение количества отзывов для показа в зависимости от ширины экрана
  useEffect(() => {
    const handleResize = () => {
      const count = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      updateVisibleTestimonials(count);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentIndex]);
  
  // Обновление видимых отзывов
  const updateVisibleTestimonials = (count: number) => {
    let visible = [];
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    setActiveTestimonials(visible);
  };
  
  // Навигация по слайдеру
  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  // Рендеринг звездного рейтинга
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-medical-light to-white relative">
      {/* Фоновое изображение */}
      <div className="absolute opacity-5 right-0 top-0 bottom-0 w-1/2 bg-testimonial-pattern bg-cover bg-right"></div>
      
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-6 md:mb-0 max-w-xl">
            <h2 className="text-3xl font-bold mb-4 text-medical-dark">Отзывы наших пациентов</h2>
            <p className="text-lg text-muted-foreground">
              Узнайте, что говорят пациенты о нашей клинике и врачах. Мы ценим каждое мнение и постоянно работаем над улучшением сервиса.
            </p>
          </div>
          
          <div className="flex items-center gap-2 self-end md:self-auto">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="rounded-full h-10 w-10 border-medical-primary text-medical-primary hover:bg-medical-primary/10"
            >
              <ArrowLeft size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="rounded-full h-10 w-10 border-medical-primary text-medical-primary hover:bg-medical-primary/10"
            >
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full flex flex-col card-hover animate-fade-in">
              <CardContent className="pt-6 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                  <Quote className="h-8 w-8 text-medical-primary opacity-20" />
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                <p className="text-sm font-medium text-medical-primary">{testimonial.doctor}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback className="bg-medical-primary/10 text-medical-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Индикаторы слайдера */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full transition-all ${
                index === currentIndex ? "bg-medical-primary w-6" : "bg-medical-primary/30"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;