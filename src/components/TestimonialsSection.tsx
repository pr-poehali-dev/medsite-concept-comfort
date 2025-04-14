import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Анна М.",
    date: "10.05.2023",
    text: "Прекрасная клиника! Обратилась с проблемой, получила быстрое и качественное обслуживание. Врачи внимательные и профессиональные. Рекомендую всем, кто ценит своё здоровье и время.",
    initials: "АМ",
    avatar: "/placeholder.svg"
  },
  {
    name: "Сергей К.",
    date: "23.04.2023",
    text: "Очень доволен обслуживанием. Современное оборудование, приятный персонал и удобное расположение. Врач детально объяснил мне мою проблему и назначил эффективное лечение.",
    initials: "СК",
    avatar: "/placeholder.svg"
  },
  {
    name: "Елена В.",
    date: "15.03.2023",
    text: "Регулярно прохожу обследования в этой клинике. Всегда остаюсь довольна. Персонал вежливый, очередей нет, а качество обслуживания на высоте. Спасибо за заботу!",
    initials: "ЕВ",
    avatar: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы наших пациентов</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мнения тех, кто уже доверил нам своё здоровье
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <Quote className="h-8 w-8 text-medical-blue mb-2 opacity-50" />
                <p className="text-muted-foreground">{testimonial.text}</p>
              </CardHeader>
              <CardFooter className="mt-auto">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary">
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
      </div>
    </section>
  );
};

export default TestimonialsSection;