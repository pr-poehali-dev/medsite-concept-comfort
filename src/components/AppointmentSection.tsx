import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  CalendarDays, Clock, Headset, MapPin, Phone, 
  CalendarCheck, CheckCircle, ChevronRight 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const AppointmentSection = () => {
  const [activeTab, setActiveTab] = useState("form");
  const [appointmentType, setAppointmentType] = useState("doctor");
  
  // Имитация проверки заполнения формы
  const [formFilled, setFormFilled] = useState({
    name: false,
    phone: false,
    service: false
  });
  
  const isFormValid = formFilled.name && formFilled.phone && formFilled.service;
  
  // Обработчик изменения полей
  const handleInputChange = (field: keyof typeof formFilled) => {
    setFormFilled(prev => ({
      ...prev,
      [field]: true
    }));
  };

  return (
    <section className="py-20 bg-appointment-pattern bg-cover bg-center relative">
      {/* Оверлей для фона */}
      <div className="absolute inset-0 bg-gradient-to-r from-medical-primary/95 to-medical-tertiary/95"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">Запишитесь на приём</h2>
            <p className="text-lg mb-8 opacity-90">
              Выберите удобный для вас способ записи. Мы перезвоним для подтверждения и ответим на все вопросы.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Phone className="h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Телефон для записи</h3>
                  <p className="text-lg opacity-90">8 (800) 123-45-67</p>
                  <p className="text-sm opacity-70">Ежедневно с 8:00 до 20:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <MapPin className="h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Адрес клиники</h3>
                  <p className="opacity-90">г. Москва, ул. Медицинская, 123</p>
                  <p className="text-sm opacity-70">5 минут от м. Здоровье</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Clock className="h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Режим работы</h3>
                  <p className="opacity-90">Пн-Пт: 8:00 - 20:00</p>
                  <p className="opacity-90">Сб-Вс: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            {/* Преимущества */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-medical-accent" />
                <span>Онлайн-запись 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-medical-accent" />
                <span>Подтверждение по SMS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-medical-accent" />
                <span>Напоминание о визите</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-medical-accent" />
                <span>Электронная медкарта</span>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle>Быстрая запись</CardTitle>
                <Tabs 
                  defaultValue="form" 
                  value={activeTab} 
                  onValueChange={setActiveTab}
                  className="mt-3"
                >
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="form" className="data-[state=active]:bg-medical-primary data-[state=active]:text-white">
                      <div className="flex items-center gap-1">
                        <CalendarCheck size={16} />
                        <span>Онлайн</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="phone" className="data-[state=active]:bg-medical-primary data-[state=active]:text-white">
                      <div className="flex items-center gap-1">
                        <Phone size={16} />
                        <span>Телефон</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="chat" className="data-[state=active]:bg-medical-primary data-[state=active]:text-white">
                      <div className="flex items-center gap-1">
                        <Headset size={16} />
                        <span>Чат</span>
                      </div>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <TabsContent value="form" className="mt-3 space-y-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Button 
                      variant={appointmentType === "doctor" ? "default" : "outline"} 
                      className={appointmentType === "doctor" ? "bg-medical-primary hover:bg-medical-primary/90" : ""}
                      onClick={() => setAppointmentType("doctor")}
                    >
                      К врачу
                    </Button>
                    <Button 
                      variant={appointmentType === "service" ? "default" : "outline"}
                      className={appointmentType === "service" ? "bg-medical-primary hover:bg-medical-primary/90" : ""}
                      onClick={() => setAppointmentType("service")}
                    >
                      На услугу
                    </Button>
                  </div>
                
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">ФИО <span className="text-destructive">*</span></Label>
                      <Input 
                        id="name" 
                        placeholder="Иванов Иван Иванович" 
                        onChange={() => handleInputChange('name')}
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон <span className="text-destructive">*</span></Label>
                      <Input 
                        id="phone" 
                        placeholder="+7 (___) ___-__-__" 
                        onChange={() => handleInputChange('phone')}
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">
                        {appointmentType === "doctor" ? "Специалист" : "Услуга"} <span className="text-destructive">*</span>
                      </Label>
                      <Select onValueChange={() => handleInputChange('service')}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder={appointmentType === "doctor" ? "Выберите специалиста" : "Выберите услугу"} />
                        </SelectTrigger>
                        <SelectContent>
                          {appointmentType === "doctor" ? (
                            <>
                              <SelectItem value="therapist">Терапевт</SelectItem>
                              <SelectItem value="cardiologist">Кардиолог</SelectItem>
                              <SelectItem value="neurologist">Невролог</SelectItem>
                              <SelectItem value="pediatrician">Педиатр</SelectItem>
                              <SelectItem value="ophthalmologist">Офтальмолог</SelectItem>
                              <SelectItem value="dentist">Стоматолог</SelectItem>
                            </>
                          ) : (
                            <>
                              <SelectItem value="checkup">Комплексное обследование</SelectItem>
                              <SelectItem value="ultrasound">УЗИ</SelectItem>
                              <SelectItem value="analysis">Анализы</SelectItem>
                              <SelectItem value="vaccination">Вакцинация</SelectItem>
                              <SelectItem value="consultation">Консультация</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="comment">Комментарий</Label>
                      <Textarea 
                        id="comment" 
                        placeholder="Опишите вашу проблему или предпочтительное время приёма"
                        className="resize-none min-h-[80px]"
                      />
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className={`w-full h-12 ${isFormValid ? 'bg-medical-primary hover:bg-medical-primary/90' : 'bg-medical-primary/60'}`}
                        disabled={!isFormValid}
                      >
                        Записаться на приём
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="phone" className="mt-3">
                  <div className="text-center py-6">
                    <Phone size={48} className="mx-auto mb-4 text-medical-primary" />
                    <h3 className="text-xl font-medium mb-2">Запись по телефону</h3>
                    <p className="text-muted-foreground mb-4">
                      Позвоните нам, и мы поможем выбрать удобное время для визита
                    </p>
                    <a 
                      href="tel:+78001234567" 
                      className="text-2xl font-bold text-medical-primary block mb-6"
                    >
                      8 (800) 123-45-67
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Ежедневно с 8:00 до 20:00
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="chat" className="mt-3">
                  <div className="text-center py-6">
                    <Headset size={48} className="mx-auto mb-4 text-medical-primary" />
                    <h3 className="text-xl font-medium mb-2">Запись через чат</h3>
                    <p className="text-muted-foreground mb-6">
                      Начните онлайн-чат с оператором, который ответит на вопросы и запишет вас к врачу
                    </p>
                    <Button className="bg-medical-primary hover:bg-medical-primary/90">
                      Начать чат
                    </Button>
                  </div>
                </TabsContent>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;