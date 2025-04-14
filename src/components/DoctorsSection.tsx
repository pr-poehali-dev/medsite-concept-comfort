import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const doctors = [
  {
    id: 1,
    name: "Иванова Елена Петровна",
    specialty: "Терапевт, Кардиолог",
    experience: "15 лет опыта",
    photo: "/placeholder.svg",
    initials: "ЕИ"
  },
  {
    id: 2,
    name: "Петров Сергей Александрович",
    specialty: "Невролог, Реабилитолог",
    experience: "20 лет опыта",
    photo: "/placeholder.svg",
    initials: "СП"
  },
  {
    id: 3,
    name: "Смирнова Ольга Владимировна",
    specialty: "Педиатр",
    experience: "12 лет опыта",
    photo: "/placeholder.svg",
    initials: "ОС"
  }
];

const DoctorsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши специалисты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            В нашей команде работают высококвалифицированные врачи с многолетним опытом,
            которые постоянно совершенствуют свои навыки
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden">
              <div className="aspect-[3/2] relative">
                <img 
                  src={doctor.photo} 
                  alt={doctor.name} 
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-primary">
                    <AvatarImage src={doctor.photo} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {doctor.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">{doctor.name}</CardTitle>
                    <CardDescription>{doctor.specialty}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{doctor.experience}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline">
                  <Link to={`/doctors/${doctor.id}`}>Подробнее</Link>
                </Button>
                <Button>Записаться</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/doctors">Все специалисты</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;