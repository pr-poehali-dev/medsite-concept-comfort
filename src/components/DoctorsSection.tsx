import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Star, ThumbsUp, Award, ArrowRight, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Информация о врачах
const doctors = [
  {
    id: 1,
    name: "Петрова Елена Александровна",
    specialty: "Терапевт, Кардиолог",
    experience: "15 лет опыта",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop",
    initials: "ЕП",
    rating: 4.9,
    reviews: 127,
    education: "Первый МГМУ им. И.М. Сеченова",
    category: "Высшая категория",
    badges: ["Кандидат медицинских наук", "Прием детей с 0 лет"]
  },
  {
    id: 2,
    name: "Иванов Сергей Михайлович",
    specialty: "Невролог",
    experience: "20 лет опыта",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    initials: "СИ",
    rating: 4.8,
    reviews: 89,
    education: "РНИМУ им. Н.И. Пирогова",
    category: "Высшая категория",
    badges: ["Доктор медицинских наук"]
  },
  {
    id: 3,
    name: "Смирнова Ольга Владимировна",
    specialty: "Педиатр",
    experience: "12 лет опыта",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    initials: "ОС",
    rating: 4.9,
    reviews: 156,
    education: "РНИМУ им. Н.И. Пирогова",
    category: "Первая категория",
    badges: ["Прием детей с 0 лет", "Ведение беременности"]
  },
  {
    id: 4,
    name: "Козлов Алексей Дмитриевич",
    specialty: "Офтальмолог",
    experience: "18 лет опыта",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
    initials: "АК",
    rating: 4.7,
    reviews: 72,
    education: "МГМСУ им. А.И. Евдокимова",
    category: "Высшая категория",
    badges: ["Кандидат медицинских наук", "Микрохирургия глаза"]
  }
];

const DoctorsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
  };

  // Получаем текущего врача и соседних (для мобильного слайдера)
  const visibleDoctors = doctors.slice(activeIndex, activeIndex + (window.innerWidth < 768 ? 1 : 3));
  if (visibleDoctors.length < (window.innerWidth < 768 ? 1 : 3)) {
    visibleDoctors.push(...doctors.slice(0, (window.innerWidth < 768 ? 1 : 3) - visibleDoctors.length));
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Декоративный элемент фона */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-medical-light/50 -skew-x-12 transform origin-top-right -z-10"></div>
      
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-medical-dark">Наши специалисты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Команда опытных врачей с многолетней практикой, современными знаниями и индивидуальным подходом к каждому пациенту
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleDoctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden card-hover">
              <div className="aspect-[3/2] relative">
                <img 
                  src={doctor.photo} 
                  alt={doctor.name} 
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{doctor.rating}</span>
                  <span className="text-muted-foreground">({doctor.reviews})</span>
                </div>
              </div>
              <CardHeader className="pb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-medical-dark">{doctor.name}</h3>
                    <p className="text-muted-foreground">{doctor.specialty}</p>
                  </div>
                  <Avatar className="h-14 w-14 border-2 border-medical-primary">
                    <AvatarImage src={doctor.photo} />
                    <AvatarFallback className="bg-medical-primary text-white">
                      {doctor.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <ThumbsUp size={16} />
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Award size={16} />
                    <span>{doctor.category}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {doctor.badges.map((badge, index) => (
                    <Badge key={index} className="bg-medical-light text-medical-primary hover:bg-medical-light/90">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" className="border-medical-primary text-medical-primary hover:bg-medical-primary/10">
                  <Link to={`/doctors/${doctor.id}`}>О враче</Link>
                </Button>
                <Button className="bg-medical-primary hover:bg-medical-primary/90 flex items-center gap-1">
                  <Calendar size={16} />
                  Записаться
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-medical-primary hover:bg-medical-primary/90">
            <Link to="/doctors">Все специалисты</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;