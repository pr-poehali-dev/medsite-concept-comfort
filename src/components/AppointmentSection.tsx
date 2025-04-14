import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Clock3, MapPin, Phone } from "lucide-react";

const AppointmentSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Запишитесь на приём</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Заполните форму, и наш специалист свяжется с вами для подтверждения записи.
              Мы ценим ваше время и постараемся подобрать максимально удобный для вас вариант.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-medical-blue mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Телефон для записи</h3>
                  <p className="text-lg">8 (800) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-medical-blue mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Адрес клиники</h3>
                  <p>ул. Медицинская, 123, г. Москва, 123456</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-medical-blue mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Режим работы</h3>
                  <p>Пн-Пт: 8:00 - 20:00</p>
                  <p>Сб: 9:00 - 18:00</p>
                  <p>Вс: 9:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Онлайн-запись</CardTitle>
                <CardDescription>Заполните данные для записи на приём</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">ФИО</Label>
                      <Input id="name" placeholder="Иванов Иван Иванович" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="example@mail.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Специализация</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите специализацию" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="therapy">Терапия</SelectItem>
                          <SelectItem value="cardiology">Кардиология</SelectItem>
                          <SelectItem value="neurology">Неврология</SelectItem>
                          <SelectItem value="pediatrics">Педиатрия</SelectItem>
                          <SelectItem value="ophthalmology">Офтальмология</SelectItem>
                          <SelectItem value="dentistry">Стоматология</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Комментарий</Label>
                      <Textarea id="message" placeholder="Опишите вашу проблему или предпочтительное время визита" />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">Записаться на приём</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;